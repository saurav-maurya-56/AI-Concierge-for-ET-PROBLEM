🚀 ET AI Concierge

Personalized Financial Intelligence Platform

🧠 Overview

ET AI Concierge is an AI-powered financial assistant that helps users make smarter financial decisions through a chat-based onboarding experience and a personalized dashboard with real-time recommendations.

It simplifies finance by turning complex data into an intuitive, interactive journey.

✨ Features
💬 Conversational onboarding (chat UI)
🧬 Financial profile generation (persona, risk, goals)
🗺️ Personalized financial journey
📰 Real-time news recommendations (API-based)
🔗 Clickable article links
🎯 Actionable next steps
🎨 Clean, modern UI (hackathon-ready)
🖥️ Tech Stack
Frontend: React + TypeScript
Styling: Tailwind CSS
Animations: Framer Motion
Routing: React Router
State Management: React Hooks
API: NewsData.io
📦 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/your-username/et-ai-concierge.git
cd et-ai-concierge
2️⃣ Install Dependencies
npm install
3️⃣ Add Environment Variables

Create a .env file in the root directory:

VITE_NEWS_API_KEY=your_api_key_here

👉 Get your API key from: https://newsdata.io/

4️⃣ Update API Usage

Replace hardcoded API key in your code with:

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
5️⃣ Run the App
npm run dev
6️⃣ Open in Browser
http://localhost:5173
🧭 Project Structure
src/
│
├── components/
│   ├── ChatOnboarding.tsx
│   ├── Dashboard.tsx
│   ├── ChatMessage.tsx
│   ├── OptionButtons.tsx
│   └── TypingIndicator.tsx
│
├── pages/
│   ├── Index.tsx
│
├── lib/
│   └── onboarding-data.ts
│
└── App.tsx
🔄 Application Flow
User → Chat Onboarding → Processing → Dashboard
                                      ↓
                          Personalized Insights + News
📸 Screens
Chat-based onboarding
Personalized dashboard
Recommendation cards

(Add screenshots here for better presentation)

🚀 Future Enhancements
🤖 AI-generated summaries of news
🖼️ News cards with images
🔍 Smart search (Perplexity-style)
📊 Portfolio tracking
🧠 ML-based recommendations
⚠️ Notes
Do not expose API keys in production
Use .env for secure configuration
Free API plan may have request limits
🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a PR.

📄 License

This project is for educational and hackathon purposes.

👨‍💻 Author

Built with ❤️ for hackathons and innovation.
