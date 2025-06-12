import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/data"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { BlogContent } from "./blog-content"
import { Metadata } from "next"

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found."
    }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://yinjianchen.dev"
  const postUrl = `${siteUrl}/blog/${slug}`
  
  return {
    title: `${post.title} - Yinjian Chen`,
    description: post.description,
    keywords: [
      "Software Engineering",
      "Web Development",
      "Programming",
      "Yinjian Chen",
      "Tech Blog"
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      url: postUrl,
      siteName: "Yinjian Chen - Software Engineer",
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: postUrl,
    },
    authors: [{ name: post.author }],
  }
}

export async function generateStaticParams() {
  return blogPosts
    .filter(post => post.published)
    .map((post) => ({
      slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post || !post.published) {
    notFound()
  }

  // Read the markdown file
  const filePath = path.join(process.cwd(), "public/content/blog", `${slug}.md`)
  let markdownContent = null

  try {
    const fileContent = fs.readFileSync(filePath, "utf8")
    const { content } = matter(fileContent)
    markdownContent = content
  } catch (error) {
    console.error(`Error reading blog file: ${error}`)
  }

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <BlogContent
          post={post}
          markdownContent={markdownContent}
        />
      </div>
    </div>
  )
} 