import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { MDXRemote } from "next-mdx-remote/rsc"
import * as React from "react"

type BlogPost = {
  slug: string
  title: string
  description: string
  excerpt: string
  image?: string
  date: string
  readTime: string
  tags: string[]
  author: string
  published: boolean
}

type BlogContentProps = {
  post: BlogPost
  markdownContent: string | null
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
        width={1200}
        height={600}
        quality={90}
        className="w-full h-auto object-cover rounded-lg my-8"
        sizes="(max-width: 768px) 100vw, 800px"
      />
    );
  },
  video: (props: React.ComponentProps<'video'>) => {
    // Handle video embeds for MP4 files from public folder
    const srcString = typeof props.src === 'string' ? props.src : '';
    const src = srcString.startsWith('/') || srcString.startsWith('http') 
      ? srcString 
      : `/${srcString}`;
    
    return (
      <video
        controls
        className="w-full h-auto rounded-lg my-8"
        preload="metadata"
        {...props}
        src={src}
      >
        <p>Your browser does not support the video element.</p>
      </video>
    );
  },
  // Custom Video component for more control
  Video: ({ src, poster, ...props }: { src: string; poster?: string } & React.ComponentProps<'video'>) => {
    const videoSrc = src.startsWith('/') || src.startsWith('http') ? src : `/${src}`;
    const posterSrc = poster && (poster.startsWith('/') || poster.startsWith('http')) ? poster : poster ? `/${poster}` : undefined;
    
    return (
      <div className="my-8">
        <video
          controls
          className="w-full h-auto rounded-lg"
          preload="metadata"
          poster={posterSrc}
          {...props}
        >
          <source src={videoSrc} type="video/mp4" />
          <p>Your browser does not support the video element.</p>
        </video>
      </div>
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

export function BlogContent({ post, markdownContent }: BlogContentProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/" className="inline-block mb-12">
        <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
      </Link>

      {/* Header Section */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-2 mb-6">
          {(post.tags || []).map((tag, index) => (
            <span key={tag || index} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              {tag || 'Tag'}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title || 'Untitled Post'}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date || ''}>
              {post.date ? new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              }) : 'No date'}
            </time>
          </div>
        </div>

        {/* Hero Image */}
        {post.image && (
          <div className="relative w-full mb-12 overflow-hidden rounded-lg">
            <Image
              src={post.image}
              alt={post.title || 'Blog post image'}
              width={1600}
              height={800}
              quality={95}
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        )}
      </header>

      {/* Content Section */}
      <article className="prose prose-lg prose-neutral dark:prose-invert max-w-none">
        <div className="text-lg leading-8">
          {markdownContent ? (
            <MDXRemote source={markdownContent} components={mdxComponents} />
          ) : (
            <div className="text-muted-foreground text-center py-12">
              <p>No content available for this blog post.</p>
            </div>
          )}
        </div>
      </article>
    </div>
  )
} 