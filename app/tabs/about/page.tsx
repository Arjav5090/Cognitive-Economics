import { Button } from "@/components/ui/button"
import { Construction } from 'lucide-react'
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-8 text-center">
      <Construction className="h-24 w-24 text-muted-foreground" />
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">About Page</h1>
        <p className="text-muted-foreground">
          This page is currently under construction. Check back soon for more information about Cognitive Economics!
        </p>
      </div>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}

