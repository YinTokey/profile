import { notFound } from "next/navigation"
import { projects } from "@/lib/data"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { ProjectContent } from "./project-content"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
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
  let serializedContent = null

  try {
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { content: markdownContent } = matter(fileContent)
    
    // Serialize the content on the server side
    serializedContent = await serialize(markdownContent)
  } catch (error) {
    console.error(`Error reading or serializing project file: ${error}`)
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <ProjectContent
          project={project}
          serializedContent={serializedContent}
        />
      </div>
    </div>
  )
}
