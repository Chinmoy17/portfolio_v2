import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "note2action",
    image: "/images/projects/note2action.webp",
    slug: "note2action",
    title: "Note2Action",
    category: "enterprise",
    tier: "Enterprise",
    visibility: "private",
    stack: ["Python", "Machine Learning", "NLP", "FastAPI"],
    summary:
      "Analyzes weekly notes from 600+ Account Managers to predict next actions, reducing manual workload and missed tasks.",
    links: {},
  },
  {
    id: "rfp-platform",
    slug: "rfp-platform",
    title: "RFP Platform",
    category: "enterprise",
    tier: "Enterprise",
    visibility: "private",
    stack: [
      "FastAPI",
      "Python 3.12",
      "Claude Agent SDK",
      "GPT-4.1",
      "React 18 + TS",
      "Azure SQL",
    ],
    summary:
      "End-to-end government proposal automation: SAM.gov scraping, document analysis, and 14-section proposal generation in minutes, not weeks. Sole developer.",
    metrics: ["3–7 min vs 2–4 weeks manual", "80% token savings", "40% cost reduction"],
    links: {},
  },
  {
    id: "agentflow",
    image: "/images/projects/agentflow.webp",
    slug: "agentflow",
    title: "AgentFlow",
    category: "enterprise",
    tier: "Enterprise",
    visibility: "private",
    stack: [
      "Azure OpenAI",
      "FastAPI",
      "React + TS",
      "LangChain + FAISS",
      "DSPy (GEPA)",
      "Azure Container Apps",
    ],
    summary:
      "Modular AI workflow orchestration platform: chat, RAG, and search capabilities composed like Lego blocks, self-service deployed to Azure in minutes.",
    metrics: ["~3–5 min deploy time", "~1000 docs indexed in ~10 min"],
    links: {},
  },
  {
    id: "pdf-chatbot",
    image: "/images/projects/pdf-chatbot.webp",
    slug: "multilingual-pdf-chatbot-rag",
    title: "Multilingual PDF Chatbot",
    category: "public",
    tier: "Learning Project",
    visibility: "public",
    stack: ["Python", "Streamlit", "FastAPI", "FAISS", "OCR", "Gemini LLM"],
    summary:
      "Answers English/Bangla queries from PDFs using a RAG pipeline with OCR, FAISS retrieval, and a Streamlit UI + REST API.",
    links: { repo: "https://github.com/Chinmoy17/PDF-ALAP" },
  },
  {
    id: "cashcompass",
    slug: "cashcompass",
    title: "CashCompass",
    category: "public",
    tier: "Fintech · ML",
    visibility: "public",
    stack: [
      "Python",
      "LightGBM",
      "Federated Learning (Flower)",
      "FastAPI",
      "React 18 + Vite",
    ],
    summary:
      "Agent-liquidity forecasting for mobile-money networks — quantile demand forecasts and stockout-risk scoring, with federated learning prototyped as the privacy path.",
    metrics: ["MAE ≈ ৳14,138", "P10–P90 coverage 79.5%", "ROC-AUC 0.746"],
    links: {
      demo: "https://cashcompass-ebacgwdcb5cba9b8.canadacentral-01.azurewebsites.net/agent",
    },
  },
  {
    id: "blog-generator",
    image: "/images/projects/blog-generator.webp",
    slug: "blog-generator-llms",
    title: "Blog Generator via LLMs",
    category: "public",
    visibility: "public",
    stack: ["LangChain", "Python", "Prompt Engineering"],
    summary:
      "Modular pipeline — topic, outline, draft, rewrite — with fact-check and style constraints to generate consistent blog posts.",
    links: { repo: "https://github.com/Chinmoy17/Blog_Generator" },
  },
  {
    id: "ai-painter",
    image: "/images/projects/ai-painter.webp",
    slug: "ai-painter",
    title: "AI Painter",
    category: "public",
    visibility: "public",
    stack: ["Python", "OpenCV", "Mediapipe"],
    summary:
      "Gesture-controlled virtual painting app using real-time hand landmark tracking — no specialized hardware required.",
    links: {},
  },
  {
    id: "custom-cpu",
    image: "/images/projects/custom-cpu.webp",
    slug: "4-bit-custom-cpu",
    title: "4-Bit Custom CPU Design",
    category: "public",
    visibility: "public",
    stack: ["Logisim", "Custom ISA"],
    summary:
      "A 4-bit CPU with a custom ISA, ALU, control unit, and 8x15 SRAM, supporting basic ALU and jump instructions.",
    links: {
      repo: "https://github.com/Chinmoy17/4-Bit_Custom_CPU_Project",
    },
  },
  {
    id: "dspy-rag-optimization",
    slug: "dspy-rag-optimization",
    title: "DSPy RAG Optimization",
    category: "research",
    visibility: "public",
    stack: ["DSPy", "RAGAS", "LangChain", "Azure OpenAI", "FAISS"],
    summary:
      "Comparative study of DSPy's automatic prompt-optimization strategies in a production RAG system.",
    metrics: ["38% cost reduction", "3.2× latency improvement", "+9.6% accuracy"],
    links: {},
  },
  {
    id: "paper-retraction-analysis",
    slug: "paper-retraction-analysis",
    title: "Understanding Paper Retractions",
    category: "research",
    visibility: "public",
    stack: ["Python", "Scikit-learn", "NLTK", "K-Means", "Random Forest"],
    summary:
      "EDA and NLP analysis of scientific paper retractions — engineered features, clustering, and multi-class classification.",
    metrics: ["35,215 papers analyzed", "64.5% best accuracy", "5 distinct clusters"],
    links: {
      repo: "https://github.com/Chinmoy17/Paper-Retraction-Analysis-with-EDA-and-NLP",
    },
  },
  {
    id: "liver-disease-prediction",
    slug: "liver-disease-prediction",
    title: "Liver Disease Prediction",
    category: "research",
    visibility: "public",
    stack: ["Python", "Scikit-learn", "Pandas", "Feature Engineering"],
    summary:
      "Comparative analysis of ML classifiers for predicting liver disease from patient data.",
    metrics: ["99.47% accuracy", "4 models tested", "0.99 F1-score"],
    links: {
      repo: "https://github.com/Chinmoy17/Liver-Disease-Prediction-With-Machine-Learning",
    },
  },
];

export const builtProjects = projects.filter((p) => p.category !== "research");
export const researchProjects = projects.filter((p) => p.category === "research");
