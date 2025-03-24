import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

const ProjectPage=()=> {
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

export default ProjectPage;

export async function generateStaticParams() {
    // Return an array of params to be statically generated
    return [
        { slug: 'project-1' },
        { slug: 'project-2' },
        { slug: 'project-3' },
        { slug: 'project-4' },
        { slug: 'project-5' },
        { slug: 'project-6' },
    ]
}