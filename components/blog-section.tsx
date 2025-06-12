import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/data"

export function BlogSection() {
  // Get all published blog posts first
  const allPublishedPosts = (blogPosts || [])
    .filter(post => post && post.published)
    .sort((a, b) => new Date(b.date || '').getTime() - new Date(a.date || '').getTime())
  
  // Get the most recent 6 published blog posts
  const recentPosts = allPublishedPosts.slice(0, 6)

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 id="blog-heading" className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
        </div>

        {recentPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => post && (
              <Card key={post.slug || Math.random()} className="group hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title || 'Blog post'}
                    width={800}
                    height={450}
                    quality={90}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex-none">
                    <h3 className="text-lg font-semibold mb-4 line-clamp-2 leading-tight">
                      {post.title || 'Untitled'}
                    </h3>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(post.tags || []).slice(0, 3).map((tag, index) => (
                        <span key={tag || index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tag || 'Tag'}
                        </span>
                      ))}
                      {(post.tags || []).length > 3 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                          +{(post.tags || []).length - 3}
                        </span>
                      )}
                    </div>
                    <div className="mt-auto pt-4">
                      <Link href={`/blog/${post.slug || 'unknown'}`}>
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
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts available yet.</p>
          </div>
        )}

        {allPublishedPosts.length > 6 && (
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button size="lg" variant="outline">
                View All Posts
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
} 