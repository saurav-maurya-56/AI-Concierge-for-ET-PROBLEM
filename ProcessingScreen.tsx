import { useState, useRef, useEffect, useCallback } from "react";
import ChatMessage from "./ChatMessage";
import OptionButtons from "./OptionButtons";
import TypingIndicator from "./TypingIndicator";
import { questions } from "@/lib/onboarding-data";

interface ChatOnboardingProps {
  onComplete: (answers: Record<string, string>) => void;
}

interface Message {
  role: "assistant" | "user";
  content: string;
}

const ChatOnboarding = ({ onComplete }: ChatOnboardingProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQ, setCurrentQ] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showOptions, setShowOptions] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    setTimeout(() => scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" }), 50);
  };

  const addAssistantMessage = useCallback((text: string, thenShowOptions = true) => {
    setIsTyping(true);
    setShowOptions(false);
    scrollToBottom();
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "assistant", content: text }]);
      if (thenShowOptions) {
        setTimeout(() => setShowOptions(true), 200);
      }
      scrollToBottom();
    }, 800 + Math.random() * 400);
  }, []);

  useEffect(() => {
    if (currentQ === -1) {
      setTimeout(() => {
        addAssistantMessage("Hey there! 👋 I'm your ET AI Concierge. I'll help you discover a personalized financial journey in just a few quick questions.");
        setCurrentQ(0);
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentQ > 0 && currentQ < questions.length) {
      addAssistantMessage(questions[currentQ].text);
    }
  }, [currentQ, addAssistantMessage]);

  // Show first question after intro
  useEffect(() => {
    if (currentQ === 0 && messages.length === 1 && !isTyping) {
      addAssistantMessage(questions[0].text);
    }
  }, [currentQ, messages.length, isTyping, addAssistantMessage]);

  const handleSelect = (value: string) => {
    const q = questions[currentQ];
    const selectedOption = q.options.find((o) => o.value === value);
    setMessages((prev) => [...prev, { role: "user", content: selectedOption?.label || value }]);
    setShowOptions(false);

    const newAnswers = { ...answers, [q.id]: value };
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      setIsTyping(true);
      scrollToBottom();
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { role: "assistant", content: "Perfect! Let me analyze your profile and create your personalized ET journey... ✨" }]);
        scrollToBottom();
        setTimeout(() => onComplete(newAnswers), 1500);
      }, 1000);
    }
    scrollToBottom();
  };

  const handleSkip = () => {
    setMessages((prev) => [...prev, { role: "user", content: "Skipped" }]);
    setShowOptions(false);
    const newAnswers = { ...answers, [questions[currentQ].id]: "skipped" };
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      setIsTyping(true);
      scrollToBottom();
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { role: "assistant", content: "Perfect! Let me analyze your profile and create your personalized ET journey... ✨" }]);
        scrollToBottom();
        setTimeout(() => onComplete(newAnswers), 1500);
      }, 1000);
    }
    scrollToBottom();
  };

  const currentQuestion = currentQ >= 0 && currentQ < questions.length ? questions[currentQ] : null;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-border bg-card px-6 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-gold font-display text-sm font-bold text-accent-foreground">
          ET
        </div>
        <div>
          <p className="font-display text-sm font-semibold text-card-foreground">ET AI Concierge</p>
          <p className="text-xs text-muted-foreground">Your personal finance guide</p>
        </div>
        {/* Progress */}
        <div className="ml-auto flex items-center gap-1.5">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-6 rounded-full transition-colors ${
                i <= currentQ ? "bg-accent" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-0 py-6">
        {messages.map((msg, i) => (
          <ChatMessage key={i} role={msg.role} content={msg.content} />
        ))}
        {isTyping && <TypingIndicator />}
        {showOptions && currentQuestion && (
          <OptionButtons
            options={currentQuestion.options}
            onSelect={handleSelect}
            allowSkip={currentQuestion.allowSkip}
            onSkip={handleSkip}
          />
        )}
      </div>

      {/* Bottom hint */}
      <div className="border-t border-border bg-card px-6 py-3 text-center text-xs text-muted-foreground">
        Select an option above to continue
      </div>
    </div>
  );
};

export default ChatOnboarding;
