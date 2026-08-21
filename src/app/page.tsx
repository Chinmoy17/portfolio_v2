import { TopNav } from "@/components/layout/TopNav";
import { Hero } from "@/components/sections/Hero";
import { ProjectsShowcase } from "@/components/sections/ProjectsShowcase";
import { AIExpertise } from "@/components/sections/AIExpertise";
import { Research } from "@/components/sections/Research";
import { Engineering } from "@/components/sections/Engineering";
import { ExperienceStats } from "@/components/sections/ExperienceStats";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <TopNav />
      <main className="pt-16">
        <Hero />
        <ProjectsShowcase />
        <AIExpertise />
        <Research />
        <Engineering />
        <ExperienceStats />
        <Education />
        <Contact />
      </main>
    </>
  );
}
