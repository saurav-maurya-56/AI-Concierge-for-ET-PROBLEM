import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  "Understanding your profile...",
  "Analyzing risk preferences...",
  "Mapping your ET journey...",
  "Generating recommendations...",
];

interface ProcessingScreenProps {
  onComplete: () => void;
}

const ProcessingScreen = ({ onComplete }: ProcessingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 600);
          return prev;
        }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 px-6">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="h-16 w-16 rounded-full border-4 border-muted border-t-accent"
      />
      <div className="flex flex-col items-center gap-3">
        {steps.map((step, i) => (
          <motion.p
            key={step}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: i <= currentStep ? 1 : 0.3, x: 0 }}
            transition={{ duration: 0.4 }}
            className={`text-sm font-medium ${
              i === currentStep ? "text-foreground" : i < currentStep ? "text-muted-foreground" : "text-muted-foreground/40"
            }`}
          >
            {i < currentStep ? "✓ " : i === currentStep ? "● " : "○ "}
            {step}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default ProcessingScreen;
