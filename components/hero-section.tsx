'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, ArrowDown } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Yinjian</span>
              </h1>
              <p className="text-lg leading-relaxed">
              I&apos;m a <strong>freelance</strong> Full-Stack Developer specializing in AI web applications and iOS apps. With over 7 years of industry experience, I build clean, user-friendly software solutions tailored to your vision.
              </p>
              <p>
                Ready to start your project? Get in touch today!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 relative mt-12">
              <motion.div
                className="absolute -top-8 left-[55px]"
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowDown className="h-5 w-5 text-primary" />
              </motion.div>
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
              <div className="w-60 h-60 rounded-full overflow-hidden">
                <Image
                  src="/images/author/yin.jpeg"
                  alt="Yinjian Chen - Full Stack Software Engineer"
                  width={480}
                  height={480}
                  quality={95}
                  className="w-full h-full object-cover"
                  priority
                  sizes="(max-width: 768px) 240px, 480px"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
