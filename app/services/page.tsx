import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Database, Globe, Laptop, LineChart, Palette } from "lucide-react"

const baseUrl = process.env.GITHUB_PAGES ? "/grand-tech" : ""


export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with the latest technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce Solutions", "Progressive Web Apps", "Content Management Systems"],
      link: "/services/web-development",
    },
    {
      icon: <Laptop className="h-10 w-10" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS Development", "Android Development", "Cross-Platform Solutions", "Mobile App Testing"],
      link: "/services/mobile-development",
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Custom Software",
      description:
        "Tailored software solutions designed to address your specific business challenges and streamline operations.",
      features: ["Enterprise Applications", "SaaS Products", "API Development", "Legacy System Modernization"],
      link: "/services/custom-software",
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "UI/UX Design",
      description: "User-centered design that enhances usability, accessibility, and overall user satisfaction.",
      features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
      link: "/services/ui-ux-design",
    },
    {
      icon: <Database className="h-10 w-10" />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure that supports your business needs and growth.",
      features: ["Cloud Migration", "DevOps", "Serverless Architecture", "Cloud Security"],
      link: "/services/cloud-solutions",
    },
    {
      icon: <LineChart className="h-10 w-10" />,
      title: "IT Consulting",
      description: "Strategic technology guidance to help you make informed decisions and achieve your business goals.",
      features: ["Technology Assessment", "Digital Transformation", "IT Strategy", "Project Management"],
      link: "/services/consulting",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Comprehensive software development services tailored to your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col space-y-4 rounded-lg border p-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="mr-2 h-1 w-1 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 mt-auto">
                  <Link href={service.link}>
                    <Button variant="outline" className="w-full gap-1">
                      Learn More <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Process</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A structured approach to delivering high-quality software solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We start by understanding your business, goals, and requirements.",
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a detailed roadmap and technical specifications for your project.",
              },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your solution using agile methodologies and best practices.",
              },
              {
                step: "04",
                title: "Delivery",
                description: "We deploy your solution and provide ongoing support and maintenance.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-lg font-bold">{item.step}</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Technologies We Use</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We leverage the latest technologies to build robust and scalable solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((tech) => (
              <div key={tech} className="flex flex-col items-center space-y-2 rounded-lg border p-4">
                <div className="h-12 w-12 bg-muted rounded-md"></div>
                <p className="text-sm font-medium">Technology {tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Start Your Project?</h2>
              <p className="md:text-xl/relaxed">
                Let's discuss how we can help bring your ideas to life and create solutions that drive your business
                forward.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="gap-1">
                    Contact Us <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={`${baseUrl}/placeholder.svg?height=300&width=500`}
                alt="CTA Image"
                width={500}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

