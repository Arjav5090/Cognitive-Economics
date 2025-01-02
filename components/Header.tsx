'use client'

import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ModeToggle } from './mode-toggle'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'HOME', href: '/' },
  { name: 'RESEARCH', href: '/tabs/research' },
  { name: 'APPLICATIONS', href: '/tabs/applications' },
  { name: 'RESOURCES', href: '/tabs/resources' },
  { name: 'EVENTS', href: '/tabs/events' },
  { name: 'COMMUNITY', href: '/tabs/community' },
]

export function Header() {
  const [activeItem, setActiveItem] = useState('HOME')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className='flex w-full'>
      <div className="w-full fixed top-0 left-0 z-50">
        <div className="w-full px-4 sm:px-8 py-5">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link 
              href="/" 
              className="font-mono text-sm tracking-tight hover:opacity-70 transition-opacity"
            >
              A_C
            </Link>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden md:block"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <ul className="flex items-center space-x-1 bg-background/80 backdrop-blur-md px-3 py-2.5 rounded-full border border-border shadow-lg">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className={cn(
                        "relative px-3 py-1.5 text-sm font-medium transition-colors rounded-full",
                        "hover:text-foreground/80",
                        activeItem === item.name ? "text-foreground" : "text-muted-foreground"
                      )}
                      onClick={() => setActiveItem(item.name)}
                    >
                      {item.name}
                      {activeItem === item.name && (
                        <motion.div
                          className="absolute inset-0 bg-primary/10 rounded-full z-[-1]"
                          layoutId="activeBackground"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <div className="flex items-center gap-4">
              <ModeToggle />
              <button
                className="md:hidden p-1 hover:bg-accent rounded-full"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden fixed inset-0 top-[72px] bg-background/95 backdrop-blur-md z-40"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <nav className="container px-4 py-6">
                <ul className="flex flex-col space-y-4">
                  {navItems.map((item, i) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className={cn(
                          "relative px-4 py-2 text-lg font-medium transition-colors rounded-lg block",
                          "hover:bg-accent",
                          activeItem === item.name ? "text-foreground bg-accent" : "text-muted-foreground"
                        )}
                        onClick={() => {
                          setActiveItem(item.name)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

