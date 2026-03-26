export interface OnboardingQuestion {
  id: string;
  text: string;
  options: { label: string; value: string; icon?: string }[];
  allowSkip?: boolean;
}

export const questions: OnboardingQuestion[] = [
  {
    id: "persona",
    text: "Let's get to know you! What best describes you?",
    options: [
      { label: "🎓 Student", value: "student" },
      { label: "💼 Working Professional", value: "professional" },
      { label: "🚀 Founder / Entrepreneur", value: "founder" },
    ],
  },
  {
    id: "goal",
    text: "What's your primary financial goal?",
    options: [
      { label: "📈 Grow my wealth", value: "grow_wealth" },
      { label: "📚 Learn about finance", value: "learn_finance" },
      { label: "📊 Track markets actively", value: "track_markets" },
      { label: "🏠 Plan for big purchases", value: "plan_purchases" },
    ],
  },
  {
    id: "experience",
    text: "How would you rate your investing experience?",
    options: [
      { label: "🌱 Beginner — Just starting out", value: "beginner" },
      { label: "⚡ Intermediate — I know the basics", value: "intermediate" },
      { label: "🎯 Advanced — I actively manage investments", value: "advanced" },
    ],
  },
  {
    id: "investment_range",
    text: "What's your monthly investment range? (Optional — skip if you prefer)",
    options: [
      { label: "Under ₹5,000", value: "under_5k" },
      { label: "₹5,000 – ₹25,000", value: "5k_25k" },
      { label: "₹25,000 – ₹1,00,000", value: "25k_1l" },
      { label: "Over ₹1,00,000", value: "over_1l" },
    ],
    allowSkip: true,
  },
  {
    id: "content_pref",
    text: "How do you prefer to consume financial content?",
    options: [
      { label: "📰 Articles & News", value: "articles" },
      { label: "🎥 Videos & Webinars", value: "videos" },
      { label: "📱 Quick Alerts & Summaries", value: "alerts" },
      { label: "📊 Data & Charts", value: "data" },
    ],
  },
];

export interface UserProfile {
  answers: Record<string, string>;
  persona: string;
  riskLevel: "Low" | "Moderate" | "High";
  goals: string[];
}

export function generateProfile(answers: Record<string, string>): UserProfile {
  const personaMap: Record<string, string> = {
    student: "Aspiring Investor",
    professional: "Growth-Focused Investor",
    founder: "Strategic Wealth Builder",
  };

  const riskMap: Record<string, "Low" | "Moderate" | "High"> = {
    beginner: "Low",
    intermediate: "Moderate",
    advanced: "High",
  };

  const goalMap: Record<string, string> = {
    grow_wealth: "Long-term Wealth Creation",
    learn_finance: "Financial Literacy",
    track_markets: "Active Market Tracking",
    plan_purchases: "Goal-based Saving",
  };

  return {
    answers,
    persona: personaMap[answers.persona] || "Smart Investor",
    riskLevel: riskMap[answers.experience] || "Moderate",
    goals: [goalMap[answers.goal] || "Financial Growth"],
  };
}

export interface JourneyCard {
  title: string;
  description: string;
  match: string;
  icon: string;
  color: string;
}

export interface InsightGap {
  title: string;
  description: string;
}

export interface NextAction {
  step: number;
  action: string;
}

export function generateJourney(profile: UserProfile): JourneyCard[] {
  const cards: JourneyCard[] = [
    {
      title: "ET Markets",
      description: "Real-time stock tracking, market analysis, and portfolio insights.",
      match: profile.riskLevel === "High"
        ? "Your advanced experience means you'll love deep market analytics."
        : "Start tracking markets with simplified dashboards tailored for you.",
      icon: "📊",
      color: "from-blue-500/10 to-cyan-500/10",
    },
    {
      title: "ET Prime",
      description: "Premium articles, expert analysis, and exclusive financial insights.",
      match: profile.goals.includes("Financial Literacy")
        ? "Perfect for your goal to deepen financial knowledge."
        : "Stay ahead with curated insights matching your investment strategy.",
      icon: "⭐",
      color: "from-amber-500/10 to-orange-500/10",
    },
    {
      title: "ET Events",
      description: "Financial webinars, expert summits, and networking opportunities.",
      match: profile.persona.includes("Founder")
        ? "Connect with industry leaders and fellow entrepreneurs."
        : "Learn from experts through live sessions and workshops.",
      icon: "🎤",
      color: "from-violet-500/10 to-purple-500/10",
    },
  ];
  return cards;
}

export function generateInsights(profile: UserProfile): InsightGap[] {
  const gaps: InsightGap[] = [];

  if (profile.answers.goal === "grow_wealth" && profile.answers.experience === "beginner") {
    gaps.push({
      title: "Knowledge Gap Detected",
      description: "You want to grow wealth but are still at a beginner level. Upskilling in market fundamentals will accelerate your journey.",
    });
  }

  if (profile.answers.goal === "grow_wealth" && profile.answers.content_pref !== "data") {
    gaps.push({
      title: "Not Tracking Markets Actively",
      description: "You want to grow wealth but aren't focused on data & charts. Monitoring key market indicators could boost your returns.",
    });
  }

  if (profile.answers.goal === "track_markets" && profile.answers.experience === "beginner") {
    gaps.push({
      title: "Steep Learning Curve Ahead",
      description: "Active market tracking needs a solid foundation. Start with key indices before diving into individual stocks.",
    });
  }

  if (gaps.length === 0) {
    gaps.push({
      title: "Stay Consistent",
      description: "Your profile looks strong! The key gap for most investors is consistency — make sure to review your portfolio weekly.",
    });
  }

  return gaps.slice(0, 2);
}

export function generateActions(profile: UserProfile): NextAction[] {
  const actions: NextAction[] = [];

  if (profile.riskLevel === "Low" || profile.answers.experience === "beginner") {
    actions.push({ step: 1, action: "Start with 3 blue-chip stocks to build a watchlist on ET Markets" });
    actions.push({ step: 2, action: "Read 1 ET Prime beginner-friendly article daily" });
    actions.push({ step: 3, action: "Register for the next ET Masterclass on investing basics" });
  } else if (profile.riskLevel === "High") {
    actions.push({ step: 1, action: "Set up price alerts for your top 10 stocks on ET Markets" });
    actions.push({ step: 2, action: "Deep-dive into 2 ET Prime sector analysis reports this week" });
    actions.push({ step: 3, action: "Join the ET Pro Investor summit for advanced strategies" });
  } else {
    actions.push({ step: 1, action: "Track 5 stocks daily using the ET Markets watchlist" });
    actions.push({ step: 2, action: "Read 1 ET Prime article on portfolio diversification" });
    actions.push({ step: 3, action: "Attend a financial webinar on ET Events this month" });
  }

  return actions;
}
