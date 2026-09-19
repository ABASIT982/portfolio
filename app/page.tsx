import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Download } from "lucide-react";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ----- Hero Section ----- */}
      <section
        id="home"
        className="relative overflow-hidden pt-28 pb-16 md:pt-40 md:pb-32"
      >
        <div className="container mx-auto px-4 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* ----- Left: Text Content ----- */}
            <div className="space-y-5 text-center lg:text-left order-2 lg:order-1">
              <p className="text-sm md:text-base text-muted-foreground font-normal">
                Hello, I'm
              </p>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.05]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Abdul Basit
              </h1>

              <p className="text-base md:text-lg lg:text-xl text-primary font-medium">
                Full Stack Web Engineer
              </p>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0">
                I specialize in building modern, scalable web applications using
                Next.js, TypeScript, and AWS. From concept to deployment, I
                focus on clean architecture, performance, and delivering real
                value through thoughtful engineering and AI integration.
              </p>

              {/* ----- CTA Buttons ----- */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center lg:justify-start">
                <Link href="/resume.pdf" target="_blank">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-6 py-3 rounded-md font-medium transition-all inline-flex items-center justify-center w-full sm:w-auto">
                    <Download className="h-4 w-4 mr-2" />
                    View My CV
                  </button>
                </Link>
                <Link href="#contact">
                  <button className="border border-border hover:border-primary hover:text-primary text-foreground text-sm px-6 py-3 rounded-md font-medium transition-all inline-flex items-center justify-center w-full sm:w-auto group">
                    Contact
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
              </div>

              {/* ----- Social Links ----- */}
              <div className="flex items-center gap-5 pt-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                <a
                  href="mailto:your@email.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* ----- Right: Photo (Blended, Soft) ----- */}
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl" />

                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/abdul-basit.jpg"
                    alt="Abdul Basit"
                    fill
                    className="object-cover"
                    priority
                  />

                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_20px_rgba(250,250,250,0.4)]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----- About Section ----- */}
      <About />

      {/* ----- Placeholder sections ----- */}
<Skills />

      <section
        id="projects"
        className="py-20 bg-secondary/50 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Projects
          </h2>
        </div>
      </section>

      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Experience
          </h2>
        </div>
      </section>

      <section
        id="contact"
        className="py-20 bg-secondary/50 border-y border-border"
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Contact
          </h2>
        </div>
      </section>
    </div>
  );
}