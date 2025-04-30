import Link from "next/link"
import { Mountain, Facebook, Twitter, Instagram, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-gray-50 py-12">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <Mountain className="h-6 w-6 text-blue-600" />
            <span className="text-lg font-bold">DevTeam</span>
          </Link>
          <p className="text-sm text-gray-500">
            We are a team of passionate software engineers dedicated to delivering high-quality, scalable solutions that
            drive business growth.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="text-gray-500 hover:text-blue-600 transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-gray-500 hover:text-blue-600 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-gray-500 hover:text-blue-600 transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="text-gray-500 hover:text-blue-600 transition-colors">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-gray-500 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Web Application Development
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Database Solutions
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Cloud Infrastructure
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                API Development
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="text-gray-500">11B 7th lane dehiuwa</li>
            <li className="text-gray-500">Colombo</li>
            <li className="text-gray-500">+94 75-262-2860</li>
            <li className="text-gray-500">qaaidrizan113@gmail.com</li>
          </ul>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-blue-600">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mt-8 border-t pt-8 px-4 md:px-6">
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} DevTeam. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
