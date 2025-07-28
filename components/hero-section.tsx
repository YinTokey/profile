import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, ArrowDown, MapPin, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
                Hi, I&apos;m <span className="text-primary">Yinjian</span>
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Ottawa, ON, Canada</span>
              </div>
              <p className="text-lg leading-relaxed">
              I&apos;m a Full-Stack Developer specializing in AI web applications and iOS apps, currently pursuing a Master&apos;s degree in Software Engineering.
              </p>
              <p>
                With over 7 years of industry experience, I approach every project with patience and dedication to deliver the best results.
              </p>
            </div>

            <div className="flex flex-nowrap gap-3 relative mt-12">
              <div className="absolute -top-8 left-[55px] animate-bounce">
                <ArrowDown className="h-5 w-5 text-primary" />
              </div>
              <Link href="mailto:yinjianchen02@gmail.com">
                <Button className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </Button>
              </Link>
              <Link href="https://github.com/yintokey" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://www.youtube.com/@yinjiandev" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Youtube className="h-4 w-4" />
                  YouTube
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/yinjianchen" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
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
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
