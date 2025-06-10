import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Let's Work Together</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to
            collaborate!
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="mailto:alex@example.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              alex@example.com
            </Link>
            <Link
              href="https://linkedin.com/in/alexjohnson"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/alexjohnson"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              GitHub
            </Link>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Alex Johnson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
