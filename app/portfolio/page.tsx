import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const baseUrl = process.env.GITHUB_PAGES ? "/grand-tech" : ""


export default function PortfolioPage() {
  const categories = ["All", "Web Development", "Mobile Apps", "E-commerce", "Enterprise", "UI/UX Design"]

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "E-commerce",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=E-commerce+Platform`,
      description: "A comprehensive e-commerce solution with advanced features and seamless user experience.",
    },
    {
      id: 2,
      title: "Healthcare Management System",
      category: "Enterprise",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=Healthcare+System`,
      description: "A secure and efficient system for managing healthcare operations and patient data.",
    },
    {
      id: 3,
      title: "Travel Booking App",
      category: "Mobile Apps",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=Travel+App`,
      description: "A feature-rich mobile application for booking flights, hotels, and experiences.",
    },
    {
      id: 4,
      title: "Financial Dashboard",
      category: "Web Development",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=Financial+Dashboard`,
      description: "An intuitive dashboard for tracking financial metrics and making data-driven decisions.",
    },
    {
      id: 5,
      title: "Restaurant Ordering System",
      category: "E-commerce",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=Restaurant+System`,
      description: "A streamlined ordering system for restaurants with real-time updates and inventory management.",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "Mobile Apps",
      image: `${baseUrl}/placeholder.svg?height=400&width=600&text=Fitness+App`,
      description: "A mobile app for tracking workouts, nutrition, and health metrics with personalized insights.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our latest projects and see how we've helped businesses achieve their goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
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

      {/* Projects Grid */}
      <section className="w-full py-6 md:py-12 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || `${baseUrl}/placeholder.svg`}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="inline-block rounded-full bg-muted px-3 py-1 text-xs mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                  <Link href={`/portfolio/project-${project.id}`}>
                    <Button variant="link" className="mt-2 p-0">
                      View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Client Testimonials</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here's what our clients have to say about working with us.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-primary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "The team delivered an exceptional solution that exceeded our expectations. Their attention to
                    detail and commitment to quality is impressive."
                  </p>
                </div>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="rounded-full bg-muted">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Client Name</p>
                    <p className="text-xs text-muted-foreground">Position, Company {testimonial}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Your Project?</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let's discuss how we can help bring your ideas to life and create solutions that drive your business
                forward.
              </p>
            </div>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="gap-1">
                Contact Us <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

