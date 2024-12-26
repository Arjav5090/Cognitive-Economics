import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import banner from '@/public/media/banner.webp'
import second from '@/public/media/second.webp'
export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full">
        <Image
          src={banner}
          alt="Andrew Caplin"
          layout="fill" // Makes image fill the container
          objectFit="cover" // Ensures the image maintains aspect ratio and covers the container
          className="object-cover" // This class ensures the image scales well
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">Andrew Caplin</h1>
            <p className="text-xl md:text-2xl">Economist, Researcher, Educator</p>
            <div className="space-x-4">
              <Button variant="secondary" size="lg" asChild>
                <Link href="/cognitive-economics">Explore Cognitive Economics</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/chatbot">Chat with AI</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Me */}
            <Card>
              <CardHeader>
                <CardTitle>About Me</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Professor of Economics at New York University, specializing in cognitive economics and decision-making.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/about">Full Biography</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Current Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Current Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Leading research in cognitive economics, behavioral finance, and AI collaboration.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/research">View Projects</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Student Opportunities */}
            <Card>
              <CardHeader>
                <CardTitle>Student Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Research assistantships and mentorship opportunities available for students.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/opportunities">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Chatbot Feature */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-bold">Ask the Cognitive Economics Expert</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Get instant answers to your questions about cognitive economics concepts, research, or real-world applications.
          </p>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/chatbot">Get Answers Now!</Link>
          </Button>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Breaking into Cognitive Economics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  A guide for students and early-career researchers interested in cognitive economics...
                </p>
                <Button variant="outline" asChild>
                  <Link href="/blog/breaking-into-cognitive-economics">Read More</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Lessons from Interdisciplinary Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Insights from years of bridging economics, psychology, and neuroscience...
                </p>
                <Button variant="outline" asChild>
                  <Link href="/blog/interdisciplinary-lessons">Read More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cognitive Economics Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Discover Cognitive Economics</h2>
              <p className="text-muted-foreground mb-6">
                Explore the intersection of economics, psychology, and neuroscience in understanding human decision-making.
              </p>
              <Button asChild>
                <Link href="/cognitive-economics">Learn More</Link>
              </Button>
            </div>
            <div className=" flex h-[300px] w-full">
              <Image
                src={second}
                alt="Cognitive Economics"
                width={500}
                height={200}
                className="rounded-lg object-cover"
                objectFit="cover"
                
              />
       
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium">First Name</label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium">Last Name</label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <Input id="subject" placeholder="Research Inquiry" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button type="submit">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

