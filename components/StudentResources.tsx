import Link from 'next/link'

export default function StudentResources() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Resources for Students</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><Link href="/resources/guide" className="text-blue-600 hover:underline">Cognitive Economics Study Guide</Link></li>
          <li><Link href="/resources/readings" className="text-blue-600 hover:underline">Recommended Readings</Link></li>
          <li><Link href="/resources/datasets" className="text-blue-600 hover:underline">Datasets for Research</Link></li>
          <li><Link href="/resources/tutorials" className="text-blue-600 hover:underline">Video Tutorials</Link></li>
        </ul>
      </div>
    </div>
  )
}

