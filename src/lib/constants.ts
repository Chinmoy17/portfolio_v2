import {
  Home,
  Boxes,
  BrainCircuit,
  FlaskConical,
  Cpu,
  Briefcase,
  GraduationCap,
  Mail,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Boxes },
  { id: "ai-expertise", label: "AI & LLMs", icon: BrainCircuit },
  { id: "research", label: "Research", icon: FlaskConical },
  { id: "engineering", label: "Engineering", icon: Cpu },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "contact", label: "Contact", icon: Mail },
];
