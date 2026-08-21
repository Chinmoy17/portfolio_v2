import { EducationEntry } from "./types";

export const education: EducationEntry[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Rajshahi University of Engineering and Technology (RUET)",
    location: "Rajshahi, Bangladesh",
    date: "2019 – 2024",
    score: "CGPA 3.11 / 4.00",
    thesis: {
      title:
        "Transfer Learning Based Multiclass Brain Tumor Classification Using MRI Data",
      supervisor: "Farjana Parvin, Assistant Professor",
    },
    awards: ["Dutch Bangla Bank Scholarship", "RUET Technical Scholarship"],
    coursework: [
      "Artificial Intelligence",
      "Neural Networks & Fuzzy Systems",
      "Digital Image Processing",
      "Computer Architecture",
      "Compiler Design",
      "Network Security",
      "Parallel & Distributed Processing",
      "Data Structures & Algorithms",
    ],
  },
  {
    degree: "Higher Secondary Certificate (Science)",
    institution: "New Govt. Degree College",
    location: "Rajshahi, Bangladesh",
    date: "2016 – 2018",
    score: "GPA 5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (Science)",
    institution: "Rajshahi Collegiate School",
    location: "Rajshahi, Bangladesh",
    date: "2016",
    score: "GPA 5.00 / 5.00",
  },
];
