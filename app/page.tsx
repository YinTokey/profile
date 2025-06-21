import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"
import { Metadata } from "next"
import Script from "next/script"

// Force static generation for maximum performance
export const dynamic = 'force-static'
export const revalidate = false

export const metadata: Metadata = {
  title: "Yinjian Chen - Full Stack Software Engineer",
  description: "Full Stack Software Engineer with 7+ years of experience in backend development (Node.js, Go, Python) and iOS development (Swift, SwiftUI). Currently pursuing Software Engineering Master's at Carleton University.",
  alternates: {
    canonical: "https://yinjianchen.dev",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yinjian Chen",
  "alternateName": "Yin Jian Chen",
  "description": "Full Stack Software Engineer with 7+ years of experience",
  "url": "https://yinjianchen.dev",
  "image": "https://yinjianchen.dev/images/author/yin.jpeg",
  "email": "yinjianchen02@gmail.com",
  "jobTitle": "Full Stack Software Engineer",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ottawa",
    "addressRegion": "ON",
    "addressCountry": "CA"
  },
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "alumniOf": [
    {
      "@type": "CollegeOrUniversity",
      "name": "Carleton University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ottawa",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    {
      "@type": "CollegeOrUniversity", 
      "name": "Fujian Agriculture and Forestry University",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fujian",
        "addressCountry": "CN"
      }
    }
  ],
  "knowsAbout": [
    "Full Stack Development",
    "Backend Development", 
    "iOS Development",
    "Node.js",
    "Go",
    "Python",
    "Swift",
    "React",
    "Next.js",
    "AI/ML Integration",
    "Cloud Architecture"
  ],
  "sameAs": [
    "https://linkedin.com/in/yinjianchen",
    "https://github.com/yintokey"
  ]
}

export default function HomePage() {
  return (
    <>
      {/* Preload critical resources */}
      <link
        rel="preload"
        href="/images/author/yin.jpeg"
        as="image"
        type="image/jpeg"
      />
      <link
        rel="dns-prefetch"
        href="https://linkedin.com"
      />
      <link
        rel="dns-prefetch"
        href="https://github.com"
      />
      
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <div className="min-h-screen bg-background scroll-smooth">
        <Navigation />
        <main>
          <section id="hero" aria-labelledby="hero-heading">
            <HeroSection />
          </section>
          <section id="projects" aria-labelledby="projects-heading">
            <ProjectsSection />
          </section>
          <section id="blog" aria-labelledby="blog-heading">
            <BlogSection />
          </section>
          <section id="experience" aria-labelledby="experience-heading">
            <ExperienceSection />
          </section>
          <section id="skills" aria-labelledby="skills-heading">
            <SkillsSection />
          </section>
          <section id="education" aria-labelledby="education-heading">
            <EducationSection />
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
