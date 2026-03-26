import { motion } from "framer-motion";
import type { UserProfile } from "@/lib/onboarding-data";
import { generateJourney, generateInsights, generateActions } from "@/lib/onboarding-data";
import { Shield, Target, User, Lightbulb, ArrowRight, Zap } from "lucide-react";

interface DashboardProps {
  profile: UserProfile;
  onRestart: () => void;
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

const Dashboard = ({ profile, onRestart }: DashboardProps) => {
  const journey = generateJourney(profile);
  const insights = generateInsights(profile);
  const actions = generateActions(profile);

  return (
    <div className="min-h-screen bg-background pb-16">
      {/* Header */}
      <div className="bg-gradient-navy px-6 pb-12 pt-8">
        <div className="mx-auto max-w-3xl">
          <motion.p {...fadeUp()} className="text-sm font-medium text-primary-foreground/60">
            ET AI Concierge
          </motion.p>
          <motion.h1 {...fadeUp(0.1)} className="mt-2 font-display text-2xl font-bold text-primary-foreground md:text-3xl">
            Your Personalized ET Journey
          </motion.h1>
          <motion.p {...fadeUp(0.2)} className="mt-2 text-sm text-primary-foreground/70">
            Based on your profile, here's everything tailored for you.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto -mt-6 max-w-3xl space-y-6 px-4 md:px-6">
        {/* Financial DNA */}
        <motion.div {...fadeUp(0.2)} className="rounded-2xl bg-card p-6 shadow-elevated">
          <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-card-foreground">
            <Zap className="h-5 w-5 text-accent" />
            Your Financial DNA
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
              <User className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <p className="text-xs font-medium text-muted-foreground">Persona</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">{profile.persona}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
              <Shield className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <p className="text-xs font-medium text-muted-foreground">Risk Level</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">{profile.riskLevel}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-muted p-4">
              <Target className="mt-0.5 h-5 w-5 text-accent" />
              <div>
                <p className="text-xs font-medium text-muted-foreground">Goal</p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">{profile.goals[0]}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ET Journey */}
        <motion.div {...fadeUp(0.3)}>
          <h2 className="mb-4 flex items-center gap-2 px-1 font-display text-lg font-semibold text-foreground">
            🗺️ Your ET Journey
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {journey.map((card, i) => (
              <motion.div
                key={card.title}
                {...fadeUp(0.35 + i * 0.1)}
                className="group rounded-2xl bg-card p-5 shadow-card transition-shadow hover:shadow-elevated"
              >
                <span className="text-2xl">{card.icon}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-card-foreground">{card.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{card.description}</p>
                <div className="mt-3 rounded-lg bg-accent/10 p-2.5">
                  <p className="text-xs font-medium text-accent-foreground/80">
                    <span className="text-gradient-gold font-semibold">Why for you: </span>
                    {card.match}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Insights */}
        <motion.div {...fadeUp(0.5)}>
          <h2 className="mb-4 flex items-center gap-2 px-1 font-display text-lg font-semibold text-foreground">
            <Lightbulb className="h-5 w-5 text-accent" />
            What You're Missing
          </h2>
          <div className="space-y-3">
            {insights.map((gap) => (
              <div key={gap.title} className="rounded-2xl border border-accent/20 bg-accent/5 p-5">
                <p className="text-sm font-semibold text-foreground">{gap.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{gap.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Next Actions */}
        <motion.div {...fadeUp(0.6)}>
          <h2 className="mb-4 flex items-center gap-2 px-1 font-display text-lg font-semibold text-foreground">
            <ArrowRight className="h-5 w-5 text-accent" />
            Next Best Actions
          </h2>
          <div className="space-y-3">
            {actions.map((a) => (
              <div key={a.step} className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-card">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-gold font-display text-sm font-bold text-accent-foreground">
                  {a.step}
                </div>
                <p className="text-sm font-medium text-card-foreground">{a.action}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Restart */}
        <motion.div {...fadeUp(0.7)} className="flex justify-center pt-4">
          <button
            onClick={onRestart}
            className="rounded-xl border border-border px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            ↻ Start Over
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
