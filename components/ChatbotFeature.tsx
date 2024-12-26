import { Button } from '@/components/ui/button'

export default function ChatbotFeature() {
  return (
    <div className="bg-blue-600 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ask the Cognitive Economics Expert</h2>
        <p className="mb-6">Get instant answers to your questions about cognitive economics!</p>
        <Button variant="secondary">Chat with Our AI</Button>
      </div>
    </div>
  )
}

