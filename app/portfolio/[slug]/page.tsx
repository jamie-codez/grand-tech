import {FC} from "react";
import {notFound} from "next/navigation";
import {projectsDetails} from "@/lib/data/portfolio";
import {PageParams} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";

const getProjectBySlug = (slug: string) => {
    return projectsDetails.find((projectDetail) => projectDetail.slug === slug);
};

const ProjectDetailPage: FC<PageParams> = async ({ params }) => {
    const {slug} = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                            {project.category}
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{project.longDescription}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Overview */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="flex items-center justify-center">
                            <Image
                                src={project.mainImage || "/placeholder.svg"}
                                alt={project.title}
                                width={800}
                                height={600}
                                className="rounded-lg object-cover"
                            />
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter">Project Overview</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <h3 className="text-sm font-medium text-muted-foreground">Client</h3>
                                    <p>{project.client}</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                                    <p>{project.location}</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-sm font-medium text-muted-foreground">Duration</h3>
                                    <p>{project.duration}</p>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-sm font-medium text-muted-foreground">Completed</h3>
                                    <p>{project.completionDate}</p>
                                </div>
                            </div>
                            <div className="space-y-2 pt-4">
                                <h3 className="text-xl font-bold">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                                        >
                                            {tech.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter">The Challenge</h2>
                            <p className="text-muted-foreground">{project.challenge}</p>
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-bold">Key Challenges</h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {project.challenges.map((challenge, index) => (
                                        <div key={index} className="flex flex-col space-y-2 rounded-lg border p-4">
                                            <h4 className="font-bold">{challenge.title}</h4>
                                            <p className="text-sm text-muted-foreground">{challenge.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter">Our Solution</h2>
                            <p className="text-muted-foreground">{project.solution}</p>
                            <div className="space-y-4 pt-4">
                                <h3 className="text-xl font-bold">Solution Highlights</h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    {project.solutions.map((solution, index) => (
                                        <div key={index} className="flex flex-col space-y-2 rounded-lg border p-4">
                                            <h4 className="font-bold">{solution.title}</h4>
                                            <p className="text-sm text-muted-foreground">{solution.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Approach</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{project.approach}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Gallery */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Project Gallery</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                                Visual highlights from the {project.title} project.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
                        {project.images.map((image, index) => (
                            <div key={index} className="overflow-hidden rounded-lg">
                                <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`${project.title} - Image ${index + 1}`}
                                    width={800}
                                    height={600}
                                    className="aspect-video object-cover transition-transform hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Results & Impact</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">{project.results}</p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
                        {project.outcomes.map((outcome, index) => (
                            <div key={index} className="flex flex-col space-y-2 rounded-lg border p-6 text-center">
                                <h3 className="text-xl font-bold text-primary">{outcome.title}</h3>
                                <p className="text-sm text-muted-foreground">{outcome.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            {project.testimonial && (
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                    <div className="container px-4 md:px-6">
                        <div className="mx-auto max-w-3xl rounded-lg border bg-background p-8 shadow-sm">
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 text-4xl font-bold text-primary">"</div>
                                <p className="mb-4 text-lg italic text-muted-foreground">{project.testimonial.quote}</p>
                                <div className="mt-4">
                                    <p className="font-bold">{project.testimonial.author}</p>
                                    <p className="text-sm text-muted-foreground">
                                        {project.testimonial.position}, {project.testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Navigation */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                        {project.prevProject && (
                            <Link href={`/portfolio/${project.prevProject}`} className="flex items-center gap-2">
                                <ArrowLeft className="h-4 w-4" />
                                <span>Previous Project</span>
                            </Link>
                        )}
                        <Link href="/portfolio" className="flex items-center gap-2 justify-center">
                            <span>All Projects</span>
                        </Link>
                        {project.nextProject && (
                            <Link href={`/portfolio/${project.nextProject}`} className="flex items-center gap-2 md:ml-auto">
                                <span>Next Project</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        )}
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
    );
};

export default ProjectDetailPage;

export async function generateStaticParams() {
    return projectsDetails.map((projectDetail) => ({slug: projectDetail.slug}));
}