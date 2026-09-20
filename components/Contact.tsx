import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-secondary/30 border-y border-border"
    >
      <div className="container mx-auto px-4">
        {/* ----- Section Header ----- */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Get in touch
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Let's Build Something Together
          </h2>
          <p className="text-base text-muted-foreground mt-4">
            Whether you have a project in mind, a role to fill, or just want to
            connect — I'm always open to new opportunities and conversations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* ----- What I'm Looking For ----- */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            <div className="p-5 rounded-lg border border-border bg-background">
              <h3
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Full-Time Roles
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Looking for full-stack or frontend engineering positions where
                I can contribute to real products.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border bg-background">
              <h3
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Freelance Projects
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Available for short-term and long-term freelance work,
                especially web app development.
              </p>
            </div>

            <div className="p-5 rounded-lg border border-border bg-background">
              <h3
                className="text-sm font-semibold mb-2"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Collaboration
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Open to collaborating on open-source projects or interesting
                side projects with other developers.
              </p>
            </div>
          </div>

          {/* ----- Contact Information ----- */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {/* ----- Email 1 ----- */}
            <a
              href="mailto:noortajbasit982@gmail.com"
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-background hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  Email
                </p>
                <p className="text-sm font-medium break-all">
                  noortajbasit982@gmail.com
                </p>
              </div>
            </a>

            {/* ----- Email 2 ----- */}
            <a
              href="mailto:abdulbasit982123@gmail.com"
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-background hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                <Mail className="h-5 w-5 text-foreground" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  Email
                </p>
                <p className="text-sm font-medium break-all">
                  abdulbasit982123@gmail.com
                </p>
              </div>
            </a>

            {/* ----- Phone ----- */}
            <a
              href="tel:03334461278"
              className="flex items-start gap-4 p-5 rounded-lg border border-border bg-background hover:border-foreground/20 transition-colors"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-md bg-secondary shrink-0">
                <Phone className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                  Phone
                </p>
                <p className="text-sm font-medium">0333 446 1278</p>
              </div>
            </a>

            {/* ----- Location ----- */}
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
          </div>

          {/* ----- CTA ----- */}
          <div className="text-center p-8 md:p-10 rounded-lg border border-border bg-background">
            <h3
              className="text-xl md:text-2xl font-semibold mb-3"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Ready to start a conversation?
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
              I usually respond within 24 hours. Whether it's a job opportunity,
              a freelance project, or just a hello — feel free to reach out.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:noortajbasit982@gmail.com">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm px-6 py-3 rounded-md font-medium transition-all inline-flex items-center justify-center w-full sm:w-auto">
                  <Mail className="h-4 w-4 mr-2" />
                  Send an Email
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-basit-91ab96327/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border border-border hover:border-foreground/30 text-foreground text-sm px-6 py-3 rounded-md font-medium transition-all inline-flex items-center justify-center w-full sm:w-auto">
                  Connect on LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}