@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Space+Grotesk:wght@400;500;600;700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 20% 97%;
    --foreground: 220 30% 10%;

    --card: 0 0% 100%;
    --card-foreground: 220 30% 10%;

    --popover: 0 0% 100%;
    --popover-foreground: 220 30% 10%;

    --primary: 220 60% 20%;
    --primary-foreground: 40 100% 97%;

    --secondary: 220 15% 92%;
    --secondary-foreground: 220 30% 10%;

    --muted: 220 15% 94%;
    --muted-foreground: 220 10% 50%;

    --accent: 38 92% 55%;
    --accent-foreground: 220 60% 10%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 220 15% 90%;
    --input: 220 15% 90%;
    --ring: 38 92% 55%;

    --radius: 0.75rem;

    --sidebar-background: 0 0% 98%;
    --sidebar-foreground: 240 5.3% 26.1%;
    --sidebar-primary: 240 5.9% 10%;
    --sidebar-primary-foreground: 0 0% 98%;
    --sidebar-accent: 240 4.8% 95.9%;
    --sidebar-accent-foreground: 240 5.9% 10%;
    --sidebar-border: 220 13% 91%;
    --sidebar-ring: 217.2 91.2% 59.8%;

    --gradient-gold: linear-gradient(135deg, hsl(38 92% 55%), hsl(30 90% 48%));
    --gradient-navy: linear-gradient(135deg, hsl(220 60% 20%), hsl(220 50% 30%));
    --gradient-surface: linear-gradient(180deg, hsl(0 0% 100%), hsl(220 20% 97%));
    --shadow-card: 0 1px 3px hsl(220 30% 10% / 0.04), 0 4px 12px hsl(220 30% 10% / 0.06);
    --shadow-elevated: 0 4px 16px hsl(220 30% 10% / 0.08), 0 12px 40px hsl(220 30% 10% / 0.06);
  }

  .dark {
    --background: 220 25% 6%;
    --foreground: 220 10% 92%;
    --card: 220 20% 10%;
    --card-foreground: 220 10% 92%;
    --popover: 220 20% 10%;
    --popover-foreground: 220 10% 92%;
    --primary: 38 92% 55%;
    --primary-foreground: 220 60% 10%;
    --secondary: 220 20% 15%;
    --secondary-foreground: 220 10% 92%;
    --muted: 220 20% 15%;
    --muted-foreground: 220 10% 55%;
    --accent: 38 92% 55%;
    --accent-foreground: 220 60% 10%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 220 20% 18%;
    --input: 220 20% 18%;
    --ring: 38 92% 55%;
    --sidebar-background: 240 5.9% 10%;
    --sidebar-foreground: 240 4.8% 95.9%;
    --sidebar-primary: 224.3 76.3% 48%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 240 3.7% 15.9%;
    --sidebar-accent-foreground: 240 4.8% 95.9%;
    --sidebar-border: 240 3.7% 15.9%;
    --sidebar-ring: 217.2 91.2% 59.8%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
    font-family: 'DM Sans', sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Space Grotesk', sans-serif;
  }
}

@layer utilities {
  .text-gradient-gold {
    background: var(--gradient-gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .bg-gradient-gold {
    background: var(--gradient-gold);
  }
  .bg-gradient-navy {
    background: var(--gradient-navy);
  }
  .shadow-card {
    box-shadow: var(--shadow-card);
  }
  .shadow-elevated {
    box-shadow: var(--shadow-elevated);
  }
}

@keyframes pulse-dot {
  0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
  40% { transform: scale(1); opacity: 1; }
}
.typing-dot {
  animation: pulse-dot 1.4s infinite ease-in-out both;
}
.typing-dot:nth-child(2) { animation-delay: 0.16s; }
.typing-dot:nth-child(3) { animation-delay: 0.32s; }
