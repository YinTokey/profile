import { Mail, Linkedin, Github, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">Let&apos;s Work Together</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. Feel free to reach out if you&apos;d like to
            collaborate!
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link
              href="mailto:yinjianchen02@gmail.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              yinjianchen02@gmail.com
            </Link>
            <Link
              href="https://linkedin.com/in/yinjianchen"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/yintokey"
              target="_blank"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              GitHub
            </Link>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Ottawa, ON, Canada</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
