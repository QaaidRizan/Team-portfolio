"use client";

import Link from "next/link"
import Image from "next/image"
import car from "@/assets/Car2.png"
import hospital from "@/assets/image.png";
import andrew from "@/assets/Andrew.png";
import pdf from "@/assets/PDF.png";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Database, Globe, Layers, MessageSquare, Phone, Server, Users } from "lucide-react"
import Navbar from "@/components/navbar"
import TeamSection from "@/components/team-section"
import ProjectCard from "@/components/project-card"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"
import CounterSection from "@/components/counter-section"
import AnimatedBackground from "@/components/animated-background"
import useScrollAnimation from "@/hooks/useScrollAnimation"


export default function Home() {
  const [aboutRef, aboutVisible] = useScrollAnimation();
  const [servicesRef, servicesVisible] = useScrollAnimation();
  const [projectsRef, projectsVisible] = useScrollAnimation();
  const [testimonialRef, testimonialVisible] = useScrollAnimation();
  const [contactRef, contactVisible] = useScrollAnimation();
  
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section with Animated Background */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white dark:from-slate-950 dark:via-slate-900 dark:to-blue-950">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <AnimatedBackground />
        </div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-10 w-60 h-60 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
          <div className="absolute top-2/3 left-1/3 w-40 h-40 rounded-full bg-cyan-500 opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container relative px-4 md:px-6 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="inline-flex bg-blue-600 hover:bg-blue-700 text-white mb-4" variant="secondary">
              Innovative Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl mb-6 leading-tight">
              Transforming Ideas Into
              <span className="relative">
                <span className="relative inline-block px-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">Digital Reality</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-blue-400 opacity-75 rounded-full blur-sm"></span>
              </span>
            </h1>
            <p className="mx-auto max-w-[800px] text-gray-300 md:text-xl mb-8 leading-relaxed">
              We are a team of passionate software engineers dedicated to delivering high-quality, scalable
              solutions that drive business growth and innovation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg">
                <Link href="#projects">
                  View Our Work <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-16 md:py-24 bg-background"
        ref={aboutRef}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className={`space-y-2 ${aboutVisible ? 'animate-fadeInUp' : 'opacity-0'}`} style={{transitionDelay: '0.1s'}}>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200" variant="secondary">
                About Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                We are a team of skilled software engineers with expertise in building robust, scalable applications
                that solve complex business problems.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className={`space-y-4 ${aboutVisible ? 'animate-slideInLeft' : 'opacity-0'}`} style={{transitionDelay: '0.3s'}}>
                <h3 className="text-xl font-bold">Our Mission</h3>
                <p className="text-gray-500">
                  To deliver innovative software solutions that empower businesses to achieve their goals and stay ahead
                  in the digital landscape. We strive for excellence in every project we undertake.
                </p>
                <h3 className="text-xl font-bold">Our Approach</h3>
                <p className="text-gray-500">
                  We follow a collaborative approach, working closely with our clients to understand their requirements
                  and deliver solutions that exceed expectations. Our agile methodology ensures timely delivery without
                  compromising on quality.
                </p>
              </div>
              <div className={`space-y-4 ${aboutVisible ? 'animate-slideInRight' : 'opacity-0'}`} style={{transitionDelay: '0.3s'}}>
                <h3 className="text-xl font-bold">Our Expertise</h3>
                <ul className="space-y-2 text-gray-500">
                  <li className="flex items-center">
                    <Code className="mr-2 h-5 w-5 text-blue-600" />
                    Full-stack Development
                  </li>
                  <li className="flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-blue-600" />
                    Web Application Development
                  </li>
                  <li className="flex items-center">
                    <Database className="mr-2 h-5 w-5 text-blue-600" />
                    Database Design & Optimization
                  </li>
                  <li className="flex items-center">
                    <Server className="mr-2 h-5 w-5 text-blue-600" />
                    Cloud Infrastructure
                  </li>
                  <li className="flex items-center">
                    <Layers className="mr-2 h-5 w-5 text-blue-600" />
                    API Development & Integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Services Section */}
      <section 
        id="services" 
        className="py-16 md:py-24 bg-accent"
        ref={servicesRef}
      >
        <div className={`container px-4 md:px-6 ${servicesVisible ? 'visible' : ''}`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll">
            <div className={`space-y-2 ${servicesVisible ? 'animate-fadeInUp' : ''}`}>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200" variant="secondary">
                Our Services
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient">
                What We Offer
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl text-pop">
                Comprehensive software development services tailored to meet your business needs.
              </p>
            </div>
          </div>
          <div className={`mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl ${servicesVisible ? 'visible stagger-children' : 'stagger-children'}`}>
            <div className={servicesVisible ? 'animate-scaleIn' : ''}>
              <ServiceCard
                icon={<Code className="h-10 w-10 text-blue-600" />}
                title="Custom Software Development"
                description="Tailored solutions designed to address your specific business challenges and requirements."
              />
            </div>
            <div className={servicesVisible ? 'animate-scaleIn' : ''}>
              <ServiceCard
                icon={<Globe className="h-10 w-10 text-blue-600" />}
                title="Web Application Development"
                description="Responsive, user-friendly web applications built with modern technologies."
              />
            </div>
            <div className={servicesVisible ? 'animate-scaleIn' : ''}>
              <ServiceCard
                icon={<Database className="h-10 w-10 text-blue-600" />}
                title="Database Solutions"
                description="Efficient database design, implementation, and optimization for improved performance."
              />
            </div>
            <div className={servicesVisible ? 'animate-scaleIn' : ''}>
              <ServiceCard
                icon={<Server className="h-10 w-10 text-blue-600" />}
                title="Cloud Infrastructure"
                description="Scalable cloud solutions that ensure reliability, security, and performance."
              />
            </div>
            <div className={servicesVisible ? 'animate-scaleIn' : ''}>
              <ServiceCard
                icon={<Layers className="h-10 w-10 text-blue-600" />}
                title="API Development"
                description="Robust API development and integration services to connect your systems and applications."
              />
            </div>
            <div className={servicesVisible ? 'animate-scaleIn' : ''}>
              <ServiceCard
                icon={<MessageSquare className="h-10 w-10 text-blue-600" />}
                title="Consultation & Support"
                description="Expert advice and ongoing support to help you make informed technology decisions."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="py-16 md:py-24 bg-white"
        ref={projectsRef}
      >
        <div className={`container px-4 md:px-6 transition-all duration-700 ease-out animate-on-scroll ${projectsVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200" variant="secondary">
                Our Projects
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Work</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Explore our portfolio of successful projects that showcase our expertise and capabilities.
              </p>
            </div>
          </div>
          <div className={`mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:max-w-6xl ${projectsVisible ? 'stagger-children' : ''}`}>
            <div className={projectsVisible ? 'animate-scaleIn' : ''}>
              <ProjectCard
                title="I & I Autos"
                description="Developed a full-featured car sale website for showcasing and managing vehicle listings, with dedicated portals for both users and administrators."
                technologies={["React", "Node.js", "MongoDB", "AWS"]}
                imageUrl={car}
                hostedUrl="https://mern-stack-project-xa1v.vercel.app/" // Add your actual hosted URL here
              />
            </div>
            <div className={projectsVisible ? 'animate-scaleIn' : ''}>
              <ProjectCard
                title="Healthcare Management System"
                description="A comprehensive system for managing patient records, appointments, and billing for a healthcare provider. Implemented machine learning models for image-based diagnosis."
                technologies={["Next.js", "Python", "TensorFlow", "Flask"]}
                imageUrl={hospital}
                hostedUrl="https://v0-cataracts-detection-website.vercel.app/" // Add your actual hosted URL here
              />
            </div>
            <div className={projectsVisible ? 'animate-scaleIn' : ''}>
              <ProjectCard
                title="Andrew Tate AI Assistant"
                description="Developed an AI assistant for a financial college to motivate and guide students with money-minded advice and entrepreneurial insights."
                technologies={["Next.js", "DeepSeek V3", "JavaScript", "AI Assistant"]}
                imageUrl={andrew}
                hostedUrl="https://andrew-bot.vercel.app/" // Add your actual hosted URL here
              />
            </div>
            <div className={projectsVisible ? 'animate-scaleIn' : ''}>
              <ProjectCard
                title="Doc U Voice AI"
                description="AI bot that summarizes documents and converts them to speech. Users can interact with PDF content through voice commands."
                technologies={["Vue.js", "Python", "PDF2", "OpenAI"]}
                imageUrl={pdf}
                hostedUrl="https://docu-voice-ai-chat.vercel.app/" // Add your actual hosted URL here
              />
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Testimonials Section */}
      <section 
        id="testimonials" 
        className="py-16 md:py-24 bg-gray-50"
        ref={testimonialRef}
      >
        <div className={`container px-4 md:px-6 transition-all duration-700 ease-out animate-on-scroll ${testimonialVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Clients Say</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Don't just take our word for it. Here's what our clients have to say about our work.
              </p>
            </div>
          </div>
          <div className={`mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-6xl ${testimonialVisible ? 'stagger-children' : ''}`}>
            <div className={testimonialVisible ? 'animate-scaleIn' : ''}>
              <TestimonialCard
                quote="The team delivered an exceptional solution that exceeded our expectations. Their attention to detail and commitment to quality is impressive."
                author="Sarah Johnson"
                position="CTO, TechCorp"
                rating={5}
              />
            </div>
            <div className={testimonialVisible ? 'animate-scaleIn' : ''}>
              <TestimonialCard
                quote="Working with this team was a pleasure. They understood our requirements perfectly and delivered a product that has significantly improved our business operations."
                author="Michael Chen"
                position="CEO, InnovateTech"
                rating={5}
              />
            </div>
            <div className={testimonialVisible ? 'animate-scaleIn' : ''}>
              <TestimonialCard
                quote="Their expertise and professionalism are unmatched. The solution they developed has helped us streamline our processes and increase efficiency."
                author="Emily Rodriguez"
                position="Product Manager, DataFlow"
                rating={4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-16 md:py-24 bg-white"
        ref={contactRef}
      >
        <div className={`container px-4 md:px-6 transition-all duration-700 ease-out animate-on-scroll ${contactVisible ? 'animate-fadeInUp' : ''}`}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200" variant="secondary">
                Contact Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Have a project in mind? Let's discuss how we can help you achieve your goals.
              </p>
            </div>
          </div>
          <div className={`mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:max-w-5xl ${contactVisible ? 'stagger-children' : ''}`}>
            <div className={`space-y-6 ${contactVisible ? 'animate-slideInLeft' : ''}`}>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">+94 75-262-2860</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">qaaidrizan113@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">www.DevTeam.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">Follow us on social media</span>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-500 hover:text-blue-600">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                {/* ... other social icons ... */}
              </div>
            </div>
            <div className={`space-y-4 ${contactVisible ? 'animate-slideInRight' : ''}`}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="name"
                    placeholder="Enter your name"
                  />
                </div>
                {/* ... other form fields ... */}
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">Send Message</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer remains the same */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-xl font-bold mb-4">Company Name</h3>
              <p className="text-gray-400">
                Delivering innovative software solutions that empower businesses to achieve their goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white">About Us</Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white">Services</Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-400 hover:text-white">Projects</Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  +94 75-262-2860
                </li>
                <li className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  qaaidrizan113@gmail.com
                </li>
                <li className="flex items-center">
                  <Globe className="mr-2 h-5 w-5" />
                  www.DevTeam.com
                </li>
              </ul>
            </div>
         
          </div>
          <div className="mt-10 border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400">© 2025 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}