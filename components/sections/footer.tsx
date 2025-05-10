import { Logo } from "@/components/logo"
import { Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0A4958] py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <Logo className="text-white [&>span]:text-white" />
            <p className="mt-4 text-sm text-gray-300">
              Transforming businesses through AI automation and innovative development solutions.
            </p>
          </div>
          <div>
            <h4 className="font-bold">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li>AI Automation</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Consulting</li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold">Contact</h4>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>projectelevatehub@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://www.instagram.com/projectelevatebiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  @projectelevatebiz
                </a>
              </li>
              <li>+1 (421) 413-1351</li>
              <li>5812 Rock Forest Ct</li>
              <li>Centreville, VA 20121</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} ProjectElevate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

