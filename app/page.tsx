'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Book, Lightbulb, FileText, Calendar, Users, Info, Download, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import AndrewCaplinImage from '../public/media/Andrew_Caplin.jpg'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const floatAnimation = {
  initial: { y: 0 },
  animate: { y: [-10, 10, -10], transition: { repeat: Infinity, duration: 5, ease: "easeInOut" } }
}

export default function Home() {
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          {/* Left column: Image and Name */}
          <motion.div variants={fadeInUp} className="text-center lg:text-left relative">
            <motion.div
              className="relative w-64 h-64 mx-auto mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={floatAnimation}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl" />
              <Image
                src={AndrewCaplinImage}
                alt="Professor Andrew Caplin"
                fill
                className="rounded-full object-cover shadow-2xl relative z-10"
              />
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-6xl text-center font-bold tracking-tighter bg-clip-text text-transparent bg-black"
              variants={fadeInUp}
              style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
            >
              Andrew Caplin
            </motion.h1>
          </motion.div>

          {/* Right column: Bio and Buttons */}
          <motion.div variants={fadeInUp} className="space-y-6 text-center lg:text-left">
            <motion.p 
              className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-black"
              variants={fadeInUp}
              style={{ textShadow: '0 0 5px rgba(255,255,255,0.3)' }}
            >
              Economist, Researcher, Innovator in Cognitive Economics
            </motion.p>
            <motion.p
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
              style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}
            >
              Professor Andrew Caplin is a pioneering researcher in Cognitive Economics, bridging psychology, neuroscience, and economics to revolutionize our understanding of decision-making processes.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground"
              variants={fadeInUp}
              style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}
            >
              His work illuminates the intricate workings of the human mind in economic contexts, reshaping our approach to markets, policy, and real-world problem-solving.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300">
                Explore Research
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group border-primary hover:bg-primary/10 hover:shadow-lg hover:shadow-secondary/50 transition-shadow duration-300">
                AI Assistant 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Featured Book Section */}
        <motion.section 
          className="mb-24"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-black"
            variants={fadeInUp}
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
          >
            Latest Book
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#556B2F] to-[#2F4F4F]"
          >
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)]" />
            <Card className="relative border-0 bg-transparent text-white">
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="flex flex-col justify-center space-y-6">
                  <motion.div 
                    className="space-y-4"
                    variants={fadeInUp}
                  >
                    <h3 className="text-3xl font-bold tracking-tighter" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
                      An Introduction to Cognitive Economics
                    </h3>
                    <p className="text-xl text-white/80" style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                      The Science of Mistakes
                    </p>
                  </motion.div>
                  <motion.div 
                    className="prose prose-invert"
                    variants={fadeInUp}
                  >
                    <p style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                      This groundbreaking book introduces "cognitive economics," a rapidly emerging interdisciplinary science built on economic, psychological, and data scientific foundations.
                    </p>
                    <p style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>
                      Professor Caplin provides innovative approaches to help scholars collaborate and solve problems that shape economic outcomes.
                    </p>
                  </motion.div>
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    variants={fadeInUp}
                  >
                    <Button 
                      size="lg" 
                      variant="secondary"
                      className="group bg-white/20 hover:bg-white/30 hover:shadow-lg hover:shadow-white/20 transition-shadow duration-300"
                      asChild
                    >
                      <Link href="https://link.springer.com/book/10.1007/978-3-031-73042-9" target="_blank">
                        Download PDF
                        <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                      </Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="group border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-white/20 transition-shadow duration-300"
                      asChild
                    >
                      <Link href="https://link.springer.com/book/10.1007/978-3-031-73042-9" target="_blank">
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.p 
                    className="text-sm text-white/60"
                    variants={fadeInUp}
                    style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}
                  >
                    Available as Open Access - Free to download and read online
                  </motion.p>
                </div>
                <motion.div 
                  className="flex justify-center items-center"
                  variants={floatAnimation}
                >
                  <Link 
                    href="https://link.springer.com/book/10.1007/978-3-031-73042-9"
                    target="_blank"
                    className="relative block w-full max-w-md transition-all duration-300 hover:scale-105 hover:rotate-2"
                  >
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/20 to-transparent blur-xl" />
                    <Image
                      src="https://media.springernature.com/full/springer-static/cover-hires/book/978-3-031-73042-9"
                      alt="An Introduction to Cognitive Economics: The Science of Mistakes book cover"
                      width={400}
                      height={600}
                      className="relative rounded-lg shadow-2xl"
                      priority
                    />
                  </Link>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </motion.section>

        {/* Cognitive Economics Areas */}
        <motion.section 
          className="mb-24"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-black"
            variants={fadeInUp}
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}
          >
            Explore Cognitive Economics
          </motion.h2>
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
          >
            {[
              { 
                title: 'Research', 
                icon: Book,
                description: 'Discover groundbreaking studies in decision-making, behavioral economics, and cognitive science.'
              },
              { 
                title: 'Applications', 
                icon: Lightbulb,
                description: 'Explore real-world implementations in finance, policy-making, and artificial intelligence.'
              },
              { 
                title: 'Resources', 
                icon: FileText,
                description: 'Access tools, datasets, and guides for conducting cognitive economics research.'
              },
              { 
                title: 'Events', 
                icon: Calendar,
                description: 'Join conferences, workshops, and seminars focused on cognitive economics.'
              },
              { 
                title: 'Community', 
                icon: Users,
                description: 'Connect with researchers, practitioners, and thought leaders in the field.'
              },
              { 
                title: 'About', 
                icon: Info,
                description: 'Learn about the history, principles, and future of cognitive economics.'
              }
            ].map((item, index) => (
              <motion.div 
                key={item.title}
                className="group relative bg-card text-card-foreground rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                >
                  <item.icon className="h-10 w-10 mb-4 text-primary " />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4" style={{ textShadow: '0 0 5px rgba(255,255,255,0.3)' }}>{item.title}</h3>
                <p className="text-muted-foreground mb-4" style={{ fontFamily: 'monospace', letterSpacing: '0.05em' }}>{item.description}</p>
                <Button variant="link" className="group p-0">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

