import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">Alex Johnson</span>
              </h1>
              <p className="text-xl text-muted-foreground">Full-Stack Developer & UI/UX Designer</p>
              <p className="text-lg leading-relaxed">
                I create beautiful, functional digital experiences that help businesses grow. With 5+ years of
                experience in web development and design, I specialize in React, Next.js, and modern web technologies.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="mailto:alex@example.com">
                <Button className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/alexjohnson" target="_blank">
                <Button variant="outline" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/alexjohnson" target="_blank">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="p-1 bg-gradient-to-br from-primary/20 to-secondary/20">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Alex Johnson"
                className="w-80 h-80 object-cover rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
