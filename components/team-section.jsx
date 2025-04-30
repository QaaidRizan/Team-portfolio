"use client";

import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import useScrollAnimation from "@/hooks/useScrollAnimation"

export default function TeamSection() {
  const [teamRef, teamVisible] = useScrollAnimation();

  return (
    <section 
      id="team" 
      className="py-16 md:py-24 bg-gray-50"
      ref={teamRef}
    >
      <div className={`container px-4 md:px-6 transition-all duration-700 ease-out animate-on-scroll ${teamVisible ? 'animate-fadeInUp' : ''}`}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200" variant="secondary">
              Our Team
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Our Experts</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              We are a diverse team of talented individuals passionate about creating innovative software solutions.
            </p>
          </div>
        </div>
        <div className={`mx-auto mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-6xl ${teamVisible ? 'stagger-children' : ''}`}>
          {/* Team members */}
          <div className={teamVisible ? 'animate-scaleIn' : ''}>
            <div className="flex flex-col items-center">
              <div className="relative h-40 w-40 rounded-full overflow-hidden mb-4">
                <Image
                  src="/placeholder.svg?height=150&width=150"
                  alt="Team member"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-lg font-bold">John Doe</h3>
              <p className="text-blue-600">CTO & Co-founder</p>
              <p className="text-gray-500 text-center mt-2">
                10+ years of experience in software architecture and development.
              </p>
            </div>
          </div>
          
          {/* Add more team members with the same animation classes */}
        </div>
      </div>
    </section>
  )
}