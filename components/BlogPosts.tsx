import Link from 'next/link'

export default function BlogPosts() {
  const posts = [
    { id: 1, title: "Breaking into Cognitive Economics", excerpt: "Learn about the exciting field of Cognitive Economics..." },
    { id: 2, title: "Lessons from Interdisciplinary Work", excerpt: "Discover the benefits of crossing academic boundaries..." },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Latest Blog Posts</h2>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="border-b pb-4">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">{post.excerpt}</p>
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">Read more</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

