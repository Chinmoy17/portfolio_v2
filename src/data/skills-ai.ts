import { SkillGroup } from "./types";

// Exactly 6 groups — one per face of the skill cube in AIExpertise.
export const skillsAI: SkillGroup[] = [
  {
    name: "LLMs",
    items: ["GPT / Claude / Gemini", "LangChain", "Prompt Engineering"],
  },
  {
    name: "Transformers",
    items: ["Hugging Face", "PyTorch", "TensorFlow", "LoRA Fine-tuning"],
  },
  {
    name: "RAG",
    items: ["FAISS", "ChromaDB", "Milvus", "PageIndex QA"],
  },
  {
    name: "Agents",
    items: ["Claude Agent SDK", "DSPy (GEPA)", "MCP", "Orchestration"],
  },
  {
    name: "NLP",
    items: ["Summarization", "Classification", "Scikit-learn", "NLTK"],
  },
  {
    name: "Deep Learning",
    items: ["CNNs", "Computer Vision", "OpenCV", "Transfer Learning"],
  },
];
