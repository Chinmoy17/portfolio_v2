import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chinmoy Mitra — AI Engineer",
  description:
    "AI Engineer building evaluation-driven LLM and agentic systems in production — RAG pipelines, agentic workflows, and applied ML, backed by research in robust and federated learning.",
  metadataBase: new URL("https://chinmoymitra.dev"),
  openGraph: {
    title: "Chinmoy Mitra — AI Engineer",
    description:
      "AI Engineer building evaluation-driven LLM and agentic systems in production.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased dark`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
