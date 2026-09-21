import { ExternalLink } from "lucide-react";
import Link from "next/link";

// ----- Project data -----
const projects = [
  {
    title: "DocChat AI",
    description:
      "Serverless AI-powered PDF Q&A platform. Upload PDFs and ask questions with source citations. Uses AWS Bedrock, Cognito, S3, and Next.js.",
    tech: [
      "Next.js",
      "TypeScript",
      "AWS",
      "Bedrock",
      "S3",
      "IAM",
      "Cognito",
    ],
    github: "https://github.com/ABASIT982/docchat-ai",
    live: "https://docchat-ai-mu.vercel.app/",
    featured: true,
  },
  {
    title: "Comsats Scholarship Portal",
    description:
      "AI-powered scholarship management system that automates applications and verification for graduate and undergraduate students. Built as Final Year Project with intelligent automation.",
    tech: ["TypeScript", "AI/ML", "Automation", "Next.js", "Supabase"],
    github: "https://github.com/ABASIT982/ComsatsScholarshipPortal",
    live: "https://comsats-scholarship-system.vercel.app/",
    featured: true,
  },
  {
    title: "BloomStar School & College System",
    description:
      "Management system for schools and colleges handling student records, staff, and administrative workflows.",
    tech: ["C#", ".NET"],
    github: "https://github.com/ABASIT982/BloomStarSchoolAndCollegeSystem",
    live: null,
    featured: false,
  },
  {
    title: "Atif Portfolio",
    description:
      "Modern portfolio website built with Next.js and TypeScript showcasing clean UI and responsive design.",
    tech: ["TypeScript", "Next.js"],
    github: "https://github.com/ABASIT982/atif-portfolio",
    live: "https://atif-portfolio-architect.vercel.app/",
    featured: false,
  },
  {
    title: "NADRA Pakistan System",
    description:
      "Academic project simulating NADRA's identity management system with secure data handling and verification workflows.",
    tech: ["JavaScript", "Web Development"],
    github: "https://github.com/ABASIT982/Nadra-Pakistan",
    live: null,
    featured: false,
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-secondary/30 border-y border-border"
    >
      <div className="container mx-auto px-4">
        {/* ----- Section Header ----- */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            My work
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Projects
          </h2>
          <p className="text-base text-muted-foreground mt-4">
            A selection of projects I've built — from AI-powered applications to
            full-stack web platforms.
          </p>
        </div>

        {/* ----- Projects Grid ----- */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col p-6 rounded-lg border border-border bg-background hover:border-primary/40 transition-colors"
            >
              {/* ----- Header ----- */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3
                  className="text-lg font-semibold group-hover:text-primary transition-colors"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded shrink-0">
                    Featured
                  </span>
                )}
              </div>

              {/* ----- Description ----- */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* ----- Tech Stack ----- */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ----- Links ----- */}
              <div className="flex items-center gap-4 pt-3 border-t border-border">
                {/* GitHub Button (green/primary) */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  Code
                </Link>

                {/* Live Demo Button (also green/primary) */}
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ----- View All Link ----- */}
        <div className="text-center mt-12">
          <Link
            href="https://github.com/ABASIT982"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            View all projects on GitHub
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}