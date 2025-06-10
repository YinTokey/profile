'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Yinjian</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Full Stack Software Engineer
              </p>
              <p className="text-lg leading-relaxed">
                🔍 Currently Software Engineering Master&apos;s student at Carleton University. <br />
                🖥️ 3+ years in backend development, 4+ years in iOS native development. <br />
                🌱 Passionate about AI and improving productivity. <br />
                🎯 Open to Software Engineer part time work opportunities in North America
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="mailto:yinjianchen02@gmail.com">
                <Button className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/yinjianchen" target="_blank">
                <Button variant="outline" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://github.com/yintokey" target="_blank">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="p-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full overflow-hidden">
              <div className="w-80 h-80 rounded-full overflow-hidden">
                <img
                  src="/images/author/yin.jpeg"
                  alt="Yinjian Chen"
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
