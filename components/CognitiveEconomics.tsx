import Link from 'next/link'

export default function CognitiveEconomics() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-4">Cognitive Economics</h2>
      <p className="mb-4">Cognitive Economics is an interdisciplinary field that combines insights from economics, psychology, and neuroscience to understand human decision-making...</p>
      <Link href="https://cognitive-economics.org" className="text-blue-600 hover:underline">Visit the Cognitive Economics Website</Link>
    </div>
  )
}

