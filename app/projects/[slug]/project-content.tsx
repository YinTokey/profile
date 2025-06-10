'use client'

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import * as motion from "framer-motion"
import Image from "next/image"
import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"
import * as React from "react"

type Project = {
  slug: string
  title: string
  description: string
  image?: string
  technologies: string[]
  role: string
  timeline: string
  url?: string
  githubUrl?: string
}

type ProjectContentProps = {
  project: Project
  serializedContent: MDXRemoteSerializeResult | null
}

const mdxComponents = {
  img: (props: { src: string; alt?: string }) => {
    // Ensure the src starts with "/" for Next.js Image component
    const src = props.src.startsWith('/') || props.src.startsWith('http') 
      ? props.src 
      : `/${props.src}`;
    
    return (
      <Image
        src={src}
        alt={props.alt || ""}
        width={800}
        height={400}
        className="w-full h-auto object-cover rounded-lg my-8"
      />
    );
  },
  a: (props: React.ComponentProps<'a'>) => (
    <a 
      className="text-primary hover:text-primary/80 underline decoration-primary/60 underline-offset-4 transition-colors duration-200 font-medium break-all"
      target={props.href?.startsWith('http') ? '_blank' : undefined}
      rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      {...props} 
    />
  ),
  h1: (props: React.ComponentProps<'h1'>) => (
    <h1 className="text-3xl font-bold mt-12 mb-6 text-foreground" {...props} />
  ),
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2 className="text-2xl font-semibold mt-10 mb-4 text-foreground" {...props} />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3 className="text-xl font-medium mt-8 mb-3 text-foreground" {...props} />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p className="text-base leading-7 mb-6 text-foreground/90" {...props} />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul className="list-disc pl-6 mb-6 space-y-2" {...props} />
  ),
  ol: (props: React.ComponentProps<'ol'>) => (
    <ol className="list-decimal pl-6 mb-6 space-y-2" {...props} />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="text-base leading-7 text-foreground/90" {...props} />
  ),
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote className="border-l-4 border-primary/30 pl-6 my-6 italic text-foreground/80" {...props} />
  ),
  code: (props: React.ComponentProps<'code'>) => (
    <code className="bg-muted px-2 py-1 rounded text-sm font-mono" {...props} />
  ),
  pre: (props: React.ComponentProps<'pre'>) => (
    <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-6" {...props} />
  ),
}

export function ProjectContent({ project, serializedContent }: ProjectContentProps) {
  return (
    <motion.motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <Link href="/" className="inline-block mb-12">
        <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
          <span className="text-lg">{project.role}</span>
          <span className="text-lg">{project.timeline}</span>
        </div>

        {/* Hero Image */}
        {project.image && (
          <div className="relative w-full mb-12 overflow-hidden rounded-lg">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        )}
      </header>

      {/* Content Section */}
      <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
        <div className="text-lg leading-8">
          {serializedContent ? (
            <MDXRemote {...serializedContent} components={mdxComponents} />
          ) : (
            <div className="text-muted-foreground text-center py-12">
              <p>No content available for this project.</p>
            </div>
          )}
        </div>
      </article>
    </motion.motion.div>
  )
} 