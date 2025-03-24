import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const ServicePage=()=> {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-3xl font-bold mb-4">🚧 This page is under development, come back later. 🚧</h1>
            <Link href="/">
                <Button variant="outline" className="gap-1">
                    <ArrowLeft className="h-4 w-4" /> Go Back
                </Button>
            </Link>
        </div>
    )
}

export default ServicePage;

export async function generateStaticParams() {
    // Return an array of params to be statically generated
    return [
        { slug: 'web-development' },
        { slug: 'mobile-development' },
        { slug: 'custom-software' },
        { slug: 'ui-ux-design' },
        { slug: 'cloud-solutions' },
        { slug: 'consulting' }
    ]
}