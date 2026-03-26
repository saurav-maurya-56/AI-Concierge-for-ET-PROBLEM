import { motion } from "framer-motion";

interface OptionButtonsProps {
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
  allowSkip?: boolean;
  onSkip?: () => void;
}

const OptionButtons = ({ options, onSelect, allowSkip, onSkip }: OptionButtonsProps) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 0.1 }}
    className="flex flex-wrap gap-2 px-4"
  >
    {options.map((opt) => (
      <button
        key={opt.value}
        onClick={() => onSelect(opt.value)}
        className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-card-foreground shadow-card transition-all hover:border-accent hover:shadow-elevated active:scale-[0.97]"
      >
        {opt.label}
      </button>
    ))}
    {allowSkip && (
      <button
        onClick={onSkip}
        className="rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        Skip →
      </button>
    )}
  </motion.div>
);

export default OptionButtons;
