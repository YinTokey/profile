import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/data"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - Yinjian Chen",
  description: "Insights and tutorials on web development, software engineering, and technology trends by Yinjian Chen.",
  keywords: [
    "Web Development",
    "Software Engineering", 
    "Programming",
    "Tech Blog",
    "Tutorials",
    "Yinjian Chen"
  ],
  alternates: {
    canonical: "https://yinjianchen.dev/blog",
  },
}

export default function BlogPage() {
  // Get all published blog posts sorted by date
  const publishedPosts = blogPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-background py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="inline-block mb-12">
          <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and tutorials on web development, software engineering, and technology trends
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedPosts.map((post) => (
            <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden p-0">
              <div className="aspect-video overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={800}
                  height={450}
                  quality={90}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
                              <div className="flex flex-col flex-grow p-6">
                  <div className="flex-none">
                    <h2 className="text-lg font-semibold mb-4 line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                  </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(post.tags || []).slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                    {(post.tags || []).length > 3 && (
                      <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                        +{(post.tags || []).length - 3}
                      </span>
                    )}
                  </div>
                  <div className="mt-auto pt-4">
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {publishedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts available yet.</p>
          </div>
        )}
      </div>
    </div>
  )
} 