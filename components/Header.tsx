'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <Link href="/" className="text-xl font-bold">
            Andrew Caplin
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-sm hover:text-primary">About</Link>
            <Link href="/research" className="text-sm hover:text-primary">Research</Link>
            <Link href="/teaching" className="text-sm hover:text-primary">Teaching</Link>
            <Link href="/blog" className="text-sm hover:text-primary">Blog</Link>
            <Link href="/cognitive-economics" className="text-sm hover:text-primary">Cognitive Economics</Link>
            <Button variant="default" asChild>
              <Link href="/chatbot">Chat with AI</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <Link href="/about" className="block text-sm hover:text-primary">About</Link>
            <Link href="/research" className="block text-sm hover:text-primary">Research</Link>
            <Link href="/teaching" className="block text-sm hover:text-primary">Teaching</Link>
            <Link href="/blog" className="block text-sm hover:text-primary">Blog</Link>
            <Link href="/cognitive-economics" className="block text-sm hover:text-primary">Cognitive Economics</Link>
            <Button variant="default" asChild className="w-full">
              <Link href="/chatbot">Chat with AI</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

