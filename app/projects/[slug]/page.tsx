import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { ProjectContent } from "./project-content"
import { Metadata } from "next"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  
  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found."
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yinjianchen.dev"
  const projectUrl = `${siteUrl}/projects/${slug}`
  
  return {
    title: `${project.title} - ${project.role}`,
    description: project.description,
    keywords: [
      ...project.technologies,
      project.role,
      "Software Engineering",
      "Project Portfolio",
      "Yinjian Chen"
    ],
    openGraph: {
      title: project.title,
      description: project.description,
      url: projectUrl,
      siteName: "Yinjian Chen - Software Engineer",
      images: project.image ? [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ] : [],
      type: "article",
      publishedTime: project.timeline,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : [],
    },
    alternates: {
      canonical: projectUrl,
    },
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) {
    notFound()
  }

  // Read the markdown file
  const filePath = path.join(process.cwd(), "public/content/projects", `${slug}.md`)
  let markdownContent = null

  try {
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { content } = matter(fileContent)
    markdownContent = content
  } catch (error) {
    console.error(`Error reading project file: ${error}`)
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ProjectContent
          project={project}
          markdownContent={markdownContent}
        />
      </div>
    </div>
  )
}
