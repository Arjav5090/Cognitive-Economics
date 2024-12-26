import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function FeaturedSections() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Brief introduction about Andrew Caplin...</p>
            <Link href="/about" className="text-blue-600 hover:underline">Read more</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Current Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Highlight of active research areas...</p>
            <Link href="/research" className="text-blue-600 hover:underline">Explore projects</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Student Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Information about research assistantships and mentorship...</p>
            <Link href="/opportunities" className="text-blue-600 hover:underline">Learn more</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

