import { Publication } from "./types";

export const publications: Publication[] = [
  {
    title:
      "Robust and Personalized Federated Learning for Aircraft-Engine Prognostics under Benign and Adversarial Client Heterogeneity",
    authors: [
      "Chinmoy Mitra",
      "Md. Mehedi Hasan Nipu",
      "Mohammad Sakib Mahmood",
      "Md. Rakibul Islam",
      "M. F. Mridha",
    ],
    venue: "Engineering Applications of Artificial Intelligence (Elsevier)",
    year: 2026,
    status: "Submitted",
    summary:
      "Personalized, robust federated learning for aircraft-engine remaining-useful-life prediction under non-IID conditions and poisoned client updates.",
    metrics: [
      "70% of local-to-centralized RMSE gap closed",
      "Backdoor attack success reduced from 94.9% to 2.8%",
    ],
    link: "https://arxiv.org/abs/2608.04045",
  },
  {
    title:
      "Trust-Gated Capability Control: Breaking the Trust-Vulnerability Paradox in Multi-Agent LLM Systems",
    venue: "iCONNECT",
    year: 2026,
    status: "Under review",
    summary:
      "A security framework for multi-agent LLM systems mapping trust into short-lived, revocable capability grants to prevent privilege escalation.",
    metrics: ["Five-layer trust stack", "Automatic revocation on compromise"],
    link: null,
  },
  {
    title:
      "PulmoLiteNet: A Memory-Efficient Lightweight Convolutional Network for Lung Cancer Histopathology Classification on Edge Devices",
    venue: "IEEE BECITHCON",
    year: 2026,
    status: "Accepted",
    summary:
      "A lightweight CNN for lung histopathology classification on commodity edge hardware.",
    metrics: ["99.8% accuracy on LC25000", "~0.49 MB footprint", "~665× fewer params than compared ViTs"],
    link: null,
  },
  {
    title: "Transfer Learning Based Multiclass Brain Tumor Classification Using MRI Data",
    venue: "IEEE QPAIN",
    year: 2025,
    status: "Published",
    summary:
      "ResNet50 transfer learning model for multiclass MRI brain tumor classification.",
    metrics: ["~99.50% test accuracy", "Four-class MRI classification"],
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=kUignlYAAAAJ&citation_for_view=kUignlYAAAAJ:u5HHmVD_uO8C",
  },
];
