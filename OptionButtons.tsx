import { motion } from "framer-motion";

interface ChatMessageProps {
  role: "assistant" | "user";
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isAssistant = role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isAssistant ? "justify-start" : "justify-end"} px-4`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isAssistant
            ? "rounded-tl-sm bg-card shadow-card text-card-foreground"
            : "rounded-tr-sm bg-gradient-navy text-primary-foreground"
        }`}
      >
        {content}
      </div>
    </motion.div>
  );
};

export default ChatMessage;
