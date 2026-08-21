import { Experience } from "./types";

export const experience: Experience[] = [
  {
    company: "Dexian Bangladesh",
    role: "Application Developer: AI/ML",
    type: "Onsite",
    location: "Dhaka, Bangladesh",
    start: "2025-10-15",
    end: null,
    summary:
      "Build and ship agentic AI and evaluation-driven LLM systems for enterprise workflows, with an emphasis on reliability, measurable quality, and production readiness.",
    highlights: [
      "Built Note2Action — an automation system predicting next actions for 600+ Account Managers from weekly notes.",
      "Built DemoFactory — an AI-driven platform that generates and deploys customizable applications from user queries.",
      "Designed agentic workflows and RAG pipelines focused on correctness, controllability, and real-world usability.",
      "Ran evaluation-driven iteration for prompts and LLM behaviors (test sets, rubrics, regressions) before rollout.",
      "Owned end-to-end data and model pipelines: preparation, experimentation, deployment integration, automation.",
    ],
  },
  {
    company: "Walton Hi-Tech Industries",
    role: "AI Intern",
    type: "Onsite",
    location: "Dhaka, Bangladesh",
    start: "2025-08-01",
    end: "2025-10-09",
    highlights: [
      "Contributed to an enterprise RAG chatbot for customer support, order processing, HRMS, product search, and warranty claims.",
      "Supported retrieval, orchestration, and evaluation components to improve internal productivity.",
    ],
  },
  {
    company: "Outlier",
    role: "AI Contributor",
    type: "Remote",
    location: "Remote",
    start: "2024-03-01",
    end: "2025-07-31",
    highlights: [
      "Designed high-quality prompts and responses to improve LLM performance in code generation, refactoring, and summarization.",
      "Assisted fine-tuning workflows via curated datasets and output evaluation.",
      "Contributed across Swift and Python code contexts; supported audio training pipelines for LLMs.",
    ],
  },
  {
    company: "Young Learner's Research Lab",
    role: "Research Assistant",
    type: "Non-paid",
    location: "Remote",
    start: "2024-11-01",
    end: "2025-02-28",
    highlights: [
      "Collaborated on abstractive summarization using LLaMA, DeepSeek, and Mixtral.",
      "Fine-tuned transformer models on CNN/DailyMail and XSum using LoRA.",
      "Evaluated with ROUGE and BERTScore to measure summary quality and relevance.",
    ],
  },
];
