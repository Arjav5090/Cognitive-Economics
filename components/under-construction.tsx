'use client'

import { motion } from 'framer-motion'
import { Construction } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function UnderConstruction({ title }: { title: string }) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Construction className="h-24 w-24 text-muted-foreground" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="space-y-2"
      >
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-muted-foreground">
          This page is currently under construction. Check back soon for updates!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Button asChild>
          <Link href="/">Return Home</Link>
        </Button>
      </motion.div>
    </div>
  )
}

