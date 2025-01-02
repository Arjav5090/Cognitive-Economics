import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from './ui/input'
import { Twitter, Linkedin, Github } from 'lucide-react'  // Importing icons from lucide-react

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <address className="not-italic text-sm">
              <p>Email: ac1@nyu.edu</p>
              <p>Office: Economics Department</p>
              <p>New York University</p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-primary">About</Link></li>
              <li><Link href="/research" className="hover:text-primary">Research</Link></li>
              <li><Link href="/teaching" className="hover:text-primary">Teaching</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/cognitive-economics" className="hover:text-primary">Cognitive Economics</Link></li>
              <li><Link href="/chatbot" className="hover:text-primary">AI Assistant</Link></li>
              <li><Link href="/resources" className="hover:text-primary">Student Resources</Link></li>
              <li><Link href="/opportunities" className="hover:text-primary">Opportunities</Link></li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Subscribe for Updates</h3>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
            <div className="mt-4 flex flex-wrap justify-center space-x-4">
              <Link href="#" className="hover:text-primary flex items-center space-x-2">
                <Twitter className="w-5 h-5" />
                <span className="hidden sm:inline">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-primary flex items-center space-x-2">
                <Linkedin className="w-5 h-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </Link>
              <Link href="#" className="hover:text-primary flex items-center space-x-2">
                <Github className="w-5 h-5" />
                <span className="hidden sm:inline">GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
