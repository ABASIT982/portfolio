import {
  Code2,
  Server,
  Database,
  Cloud,
  Brain,
  Wrench,
} from "lucide-react";

// ----- Skill categories data -----
const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express", "Next.js API Routes", "Python", "FastAPI"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS (S3, Cognito, Bedrock, EC2)",
      "Vercel",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    title: "AI & Tools",
    icon: Brain,
    skills: ["Amazon Bedrock", "OpenAI API", "RAG / Vector DBs"],
  },
  {
    title: "Others",
    icon: Wrench,
    skills: ["Git & GitHub", "VS Code", "Postman", "Figma"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* ----- Section Header ----- */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            What I work with
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Skills & Technologies
          </h2>
          <p className="text-base text-muted-foreground mt-4">
            A curated stack of tools and technologies I use to build modern,
            scalable web applications.
          </p>
        </div>

        {/* ----- Skills Grid ----- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="p-5 rounded-lg border border-border bg-background"
              >
                {/* ----- Category Header ----- */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <h3
                    className="text-base font-semibold"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* ----- Skills List (with neutral bullets) ----- */}
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}