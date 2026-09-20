import { Briefcase, GraduationCap, Award, Cloud } from "lucide-react";

// ----- Experience data -----
const experienceData = [
  {
    role: "Freelance Web Developer",
    company: "Remote / Self-Employed",
    duration: "2024 - Present",
    description:
      "Building custom, responsive web applications for clients across different industries. Delivering end-to-end solutions from design to deployment with a focus on performance, scalability, and clean code.",
    tech: ["React", "Next.js", "TypeScript", "TailwindCSS", "AWS"],
  },
  {
    role: "Web Developer Intern",
    company: "Firnas Technologies",
    duration: "2024",
    description:
      "Worked on frontend and backend development for client projects. Collaborated with the team to build responsive interfaces and integrate REST APIs. Gained hands-on experience with modern web technologies and agile workflows.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
];

// ----- Education data -----
const educationData = [
  {
    degree: "BS Computer Science",
    institution: "COMSATS University",
    duration: "2022 - 2026",
    description:
      "Focused on software engineering, web development, and cloud computing. Final Year Project: AI-powered Scholarship Portal for graduate and undergraduate students.",
  },
];

// ----- Certifications data -----
const certifications = [
  {
    name: "Google Web Developer",
    issuer: "Google",
    year: "2024",
  },
  {
    name: "Web Development On-Campus",
    issuer: "COMSATS University",
    year: "2024",
  },
  {
    name: "AWS Cloud Computing",
    issuer: "In Progress",
    year: "2026",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* ----- Section Header ----- */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            My journey
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Experience & Education
          </h2>
          <p className="text-base text-muted-foreground mt-4">
            A timeline of my professional work, education, and certifications.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-16">
          {/* ----- Work Experience ----- */}
          <div>
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <Briefcase className="h-5 w-5 text-muted-foreground" />
              Work Experience
            </h3>

            <div className="space-y-4">
              {experienceData.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border border-border bg-background"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4
                      className="text-base font-semibold"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.role}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.company}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ----- Education ----- */}
          <div>
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <GraduationCap className="h-5 w-5 text-muted-foreground" />
              Education
            </h3>

            <div className="space-y-4">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border border-border bg-background"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h4
                      className="text-base font-semibold"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {item.degree}
                    </h4>
                    <span className="text-xs text-muted-foreground">
                      {item.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.institution}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ----- Certifications ----- */}
          <div>
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <Award className="h-5 w-5 text-muted-foreground" />
              Certifications
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-5 rounded-lg border border-border bg-background"
                >
                  <p
                    className="text-sm font-semibold"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {cert.name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cert.issuer} • {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ----- AWS Focus ----- */}
          <div>
            <h3
              className="text-xl font-semibold mb-6 flex items-center gap-2"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              <Cloud className="h-5 w-5 text-muted-foreground" />
              Currently Learning
            </h3>

            <div className="p-5 rounded-lg border border-border bg-background">
              <h4
                className="text-base font-semibold mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                AWS Cloud Computing
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Actively building hands-on experience with AWS cloud services.
                Working with S3, Cognito, Bedrock, EC2, and IAM to build
                production-ready, serverless applications.
              </p>
              <div className="flex flex-wrap gap-2">
                {["S3", "Cognito", "Bedrock", "EC2", "IAM"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-md border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}