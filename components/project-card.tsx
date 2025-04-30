import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: any
  hostedUrl?: string // Add this new prop
}

export default function ProjectCard({ title, description, technologies, imageUrl, hostedUrl }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="flex flex-wrap gap-1 mt-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {hostedUrl && (
        <CardFooter className="px-6 pb-4 pt-0">
          <Button 
            asChild 
            variant="outline" 
            className="w-full group-hover:bg-blue-50 transition-colors"
          >
            <Link href={hostedUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
              View Live Site <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
