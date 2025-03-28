import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Clock, Users } from "lucide-react"

const baseUrl = process.env.GITHUB_PAGES ? "/grand-tech" : ""

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About GrandSoft Technologies</h1>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're a team of passionate developers, designers, and strategists dedicated to creating exceptional
                software and technological solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Story</div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">From Startup to Industry Leader</h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Founded in 2023, GrandTech Solutions began as a small team of developers with a big vision: to create software
                that makes a difference. What started as a three-person operation has grown into a full-service software
                development agency with clients across the globe.
              </p>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Our journey has been defined by a commitment to excellence, innovation, and client satisfaction. We've
                evolved with the changing technology landscape while staying true to our core values.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={`${baseUrl}/pictures/about_us_page.webp?height=400&width=600&text=Our+Team`}
                alt="Our Team"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The principles that guide our work and define our culture.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for excellence in everything we do, from code quality to client communication.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Collaboration</h3>
                <p className="text-muted-foreground">
                  We believe in the power of teamwork and collaboration, working closely with our clients and each other
                  to achieve the best results.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace new technologies and approaches, constantly seeking better ways to solve problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/*<section className="w-full py-12 md:py-24 lg:py-32">*/}
      {/*  <div className="container px-4 md:px-6">*/}
      {/*    <div className="flex flex-col items-center justify-center space-y-4 text-center">*/}
      {/*      <div className="space-y-2">*/}
      {/*        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>*/}
      {/*        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">*/}
      {/*          The talented individuals who make our vision a reality.*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">*/}
      {/*      {[1, 2, 3, 4, 5, 6].map((member) => (*/}
      {/*        <div key={member} className="flex flex-col items-center space-y-4 text-center">*/}
      {/*          <div className="overflow-hidden rounded-full">*/}
      {/*            <Image*/}
      {/*              src={`${baseUrl}/placeholder.svg?height=200&width=200&text=Team+Member+${member}`}*/}
      {/*              alt={`Team Member ${member}`}*/}
      {/*              width={200}*/}
      {/*              height={200}*/}
      {/*              className="aspect-square object-cover"*/}
      {/*            />*/}
      {/*          </div>*/}
      {/*          <div className="space-y-2">*/}
      {/*            <h3 className="text-xl font-bold">Team Member {member}</h3>*/}
      {/*            <p className="text-sm text-muted-foreground">Position Title</p>*/}
      {/*            <p className="text-sm text-muted-foreground">Brief bio about the team member and their expertise.</p>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're always looking for talented individuals to join our growing team. Check out our open positions.
              </p>
            </div>
            <Link href="/careers">
              <Button size="lg" variant="secondary" className="gap-1">
                View Open Positions <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

