export interface SiteIdentity {
  name: string;
  role: string;
  location: string;
  tagline: string;
  shortBio: string;
  longBio: string;
  links: {
    github: string;
    linkedin: string;
    email: string;
    scholar: string;
  };
  resumeUrl: string;
}

export interface Experience {
  company: string;
  role: string;
  type: string;
  location: string;
  start: string;
  end: string | null;
  summary?: string;
  highlights: string[];
  logo?: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  date: string;
  score?: string;
  thesis?: {
    title: string;
    supervisor: string;
  };
  awards?: string[];
  coursework?: string[];
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface ProjectMetric {
  label: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "enterprise" | "public" | "research";
  tier?: string;
  visibility: "private" | "public";
  stack: string[];
  summary: string;
  metrics?: string[];
  links: {
    repo?: string | null;
    demo?: string | null;
  };
}

export interface Publication {
  title: string;
  authors?: string[];
  venue: string;
  year: number;
  status: "Submitted" | "Under review" | "Accepted" | "Published";
  summary: string;
  metrics?: string[];
  link?: string | null;
}

export interface Award {
  name: string;
  detail?: string;
}

export interface StatTile {
  value: string;
  label: string;
}
