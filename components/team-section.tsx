import Image from "next/image"
import s from "@/assets/sahan.jpg"
import sh from "@/assets/Shimam.jpg"
import q from "@/assets/Qaaid.jpg"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200" variant="secondary">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Experts</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Our team of skilled professionals is dedicated to delivering exceptional results.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
          {/* First team member card */}
          <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center pt-8 pb-2">
              {/* Circular image with glow effect */}
              <div className="relative mb-4">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
                <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image 
                    src={q}
                    alt="M R M Qaaid" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">M R M Qaaid</h3>
                <p className="text-sm text-blue-600 font-medium mb-4">Lead Software Engineer</p>
                <p className="text-sm text-gray-500 mb-4">
                  Specializes in system architecture and backend development with over 8 years of experience.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://github.com/QaaidRizan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">Github</span>
                  </Link>
                  <Link href="https://lk.linkedin.com/in/qaadrizan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                 
                </div>
              </CardContent>
            </div>
          </Card>
          
          {/* M R M Sahan's card - updated with image from assets */}
          <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center pt-8 pb-2">
              {/* Circular image with glow effect */}
              <div className="relative mb-4">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
                <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image 
                    src={s}
                    alt="M R M Sahan" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">M R M Sahan</h3>
                <p className="text-sm text-blue-600 font-medium mb-4">Frontend Developer</p>
                <p className="text-sm text-gray-500 mb-4">
                  Expert in creating responsive, user-friendly interfaces with modern JavaScript frameworks.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://github.com/Msahan16" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">Github</span>
                  </Link>
                  <Link href="https://linkedin.com/in/example-profile" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                
                </div>
              </CardContent>
            </div>
          </Card>
          
          {/* Third team member card */}
          <Card className="overflow-hidden group hover:shadow-lg transition-shadow">
            <div className="flex flex-col items-center pt-8 pb-2">
              {/* Circular image with glow effect */}
              <div className="relative mb-4">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-300"></div>
                <div className="relative h-40 w-40 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image 
                    src={sh} 
                    alt="M R M Shimam" 
                    fill 
                    className="object-cover" 
                  />
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors">M R M Shimam</h3>
                <p className="text-sm text-blue-600 font-medium mb-4">Full Stack Developer</p>
                <p className="text-sm text-gray-500 mb-4">
                  Versatile developer with expertise in both frontend and backend technologies.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link href="https://github.com/JMS-Riflan" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">Github</span>
                  </Link>
                  <Link href="https://www.linkedin.com/in/simam-riflan-66835733a" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
               
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
