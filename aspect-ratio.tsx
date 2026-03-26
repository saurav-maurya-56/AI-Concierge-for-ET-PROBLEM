const TypingIndicator = () => (
  <div className="flex items-center gap-2 px-4 py-3">
    <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-card px-4 py-3 shadow-card">
      <span className="typing-dot h-2 w-2 rounded-full bg-accent" />
      <span className="typing-dot h-2 w-2 rounded-full bg-accent" />
      <span className="typing-dot h-2 w-2 rounded-full bg-accent" />
    </div>
  </div>
);

export default TypingIndicator;
