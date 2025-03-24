import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User } from "lucide-react"

const baseUrl = process.env.GITHUB_PAGES ? "/grand-tech" : ""

export default function BlogPage() {
  const categories = ["All", "Web Development", "Mobile", "Design", "Technology", "Business"]

  const posts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt:
        "Explore the emerging technologies and methodologies that will shape web development in the coming years.",
      image: `${baseUrl}/about_us_page.webp?height=400&width=600&text=Web+Development+Trends`,
      category: "Web Development",
      author: "Jane Smith",
      date: "March 15, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building Scalable Mobile Applications with React Native",
      excerpt:
        "Learn best practices for developing cross-platform mobile applications that can scale with your business.",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=React+Native`,
      category: "Mobile",
      author: "John Doe",
      date: "March 10, 2025",
      readTime: "7 min read",
    },
    {
      id: 3,
      title: "The Impact of AI on Software Development",
      excerpt: "How artificial intelligence is transforming the way we build, test, and deploy software applications.",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=AI+in+Development`,
      category: "Technology",
      author: "Alex Johnson",
      date: "March 5, 2025",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Designing User-Centered Interfaces: A Comprehensive Guide",
      excerpt: "Principles and practices for creating interfaces that prioritize user needs and experiences.",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=UI+Design`,
      category: "Design",
      author: "Sarah Williams",
      date: "February 28, 2025",
      readTime: "8 min read",
    },
    {
      id: 5,
      title: "Optimizing Website Performance: Speed and SEO",
      excerpt: "Strategies for improving website loading times and search engine rankings.",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=Website+Performance`,
      category: "Web Development",
      author: "Michael Brown",
      date: "February 20, 2025",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Digital Transformation: Helping Businesses Adapt to the New Normal",
      excerpt:
        "How companies are leveraging technology to navigate changing market conditions and customer expectations.",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=Digital+Transformation`,
      category: "Business",
      author: "Emily Chen",
      date: "February 15, 2025",
      readTime: "6 min read",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Insights, tutorials, and updates from our team of experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <Button key={index} variant={index === 0 ? "default" : "outline"}>
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="w-full py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">{posts[0].category}</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{posts[0].title}</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">{posts[0].excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>{posts[0].author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{posts[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{posts[0].readTime}</span>
                </div>
              </div>
              <Link href={`/blog/post-${posts[0].id}`}>
                <Button className="gap-1 mt-2">
                  Read More <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={posts[0].image || `${baseUrl}/placeholder.svg`}
                alt={posts[0].title}
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
              <div key={post.id} className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.image || `${baseUrl}/placeholder.svg`}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="inline-block rounded-full bg-muted px-3 py-1 text-xs mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blog/post-${post.id}`}>
                    <Button variant="link" className="mt-2 p-0">
                      Read More <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Subscribe to Our Newsletter</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay updated with our latest insights, tutorials, and industry news.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md space-y-2">
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

