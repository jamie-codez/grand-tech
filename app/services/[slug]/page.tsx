import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {ArrowLeft, ArrowRight, CheckCircle} from "lucide-react"
import {ServiceDetail, servicesDetails} from "@/lib/data/services";
import {FC} from "react";
import {PageParams} from "@/lib/utils";

const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
    return servicesDetails.find((serviceDetail) => serviceDetail.slug === slug)
}

const ServiceDetailPage:FC<PageParams>=async ({params})=> {
    const {slug} = await params;
    const service = getServiceBySlug(slug);
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{service?.title}</h1>
                            <p className="text-muted-foreground md:text-xl/relaxed">{service?.longDescription}</p>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Link href="/contact">
                                    <Button size="lg" className="gap-1">
                                        Get Started <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                                <Link href="/portfolio">
                                    <Button size="lg" variant="outline">
                                        View Related Projects
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image
                                src={service?.image || "/placeholder.svg"}
                                alt={service?.title!}
                                width={800}
                                height={600}
                                className="rounded-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Options Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our {service?.title} Services</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Comprehensive solutions tailored to your specific needs.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
                        {service?.options.map((option, index) => (
                            <div key={index} className="flex flex-col space-y-4 rounded-lg border p-6">
                                <h3 className="text-xl font-bold">{option.title}</h3>
                                <p className="text-muted-foreground">{option.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Why Your Organization Needs {service?.title}
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Key benefits that drive business value and competitive advantage.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                        {service?.benefits.map((benefit, index) => (
                            <div key={index} className="flex flex-row gap-4 items-start">
                                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                <p className="text-muted-foreground">{benefit}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our {service?.title} Process</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                A structured approach to delivering high-quality solutions.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
                        {service?.process.map((step, index) => (
                            <div key={index} className="flex flex-col space-y-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <span className="text-lg font-bold">{step.step}</span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Common questions about our {service?.title} services.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-3xl py-12 space-y-6">
                        {service?.faqs.map((faq, index) => (
                            <div key={index} className="rounded-lg border bg-background p-6">
                                <h3 className="text-lg font-bold">{faq.question}</h3>
                                <p className="mt-2 text-muted-foreground">{faq.answer}</p>
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
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Let's discuss how our {service?.title} services can help your business succeed.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="gap-1">
                                    Contact Us <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="/services">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                                >
                                    Explore Other Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServiceDetailPage;


export async function generateStaticParams() {
    return servicesDetails.map(service => ({ slug: service.slug }));
}