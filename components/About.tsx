import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-secondary/30 border-y border-border"
    >
      <div className="container mx-auto px-4">
        {/* ----- Section Header ----- */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Get to know me
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            About Me
          </h2>
        </div>

        {/* ----- Content: Two Columns ----- */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* ----- Left: Bio (3/5 width) ----- */}
            <div className="lg:col-span-3 space-y-6">
              <h3
                className="text-xl md:text-2xl font-semibold"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Full Stack Web Engineer based in Lahore, Pakistan
              </h3>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                I'm a Full Stack Web Engineer based in Pakistan with a passion
                for building clean, scalable web applications. I recently
                completed my BS in Computer Science and have hands-on experience
                with Next.js, AWS, and AI integration.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                I focus on building production-ready applications with clean
                architecture, thoughtful UX, and modern cloud infrastructure.
                My work spans full-stack development, cloud deployment, and
                integrating AI into real-world products.
              </p>

              <p className="text-base text-muted-foreground leading-relaxed">
                Currently, I'm building AI-powered web applications and looking
                for full-time opportunities where I can contribute to a team
                that values quality engineering and continuous learning.
              </p>

              {/* ----- Divider + Stats ----- */}
              <div className="pt-4 border-t border-border">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4">
                  <div>
                    <p className="text-2xl font-bold text-foreground">2026</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Graduated
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">10+</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Projects Built
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">5+</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ----- Right: Info Cards (2/5 width) ----- */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-lg border border-border bg-background">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                  <MapPin className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Location
                  </p>
                  <p className="text-sm font-medium">Lahore, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-lg border border-border bg-background">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                  <GraduationCap className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Education
                  </p>
                  <p className="text-sm font-medium">BS Computer Science</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    2022 - 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-lg border border-border bg-background">
                <div className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                  <Briefcase className="h-5 w-5 text-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Current Status
                  </p>
                  <p className="text-sm font-medium">Open to opportunities</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Full-time roles
                  </p>
                </div>
              </div>

              {/* ----- Availability Note (neutral) ----- */}
              <div className="p-5 rounded-lg border border-border bg-secondary/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-foreground/60" />
                  <p className="text-sm font-medium text-foreground">
                    Available for work
                  </p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Open to full-time roles in web development, cloud engineering,
                  and AI integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}