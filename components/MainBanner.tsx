import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function MainBanner() {
  return (
    <div className="relative h-[400px]">
      <Image
        src="/public/media/banner.jpeg"
        alt="Andrew Caplin"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Welcome to Cognitive Economics</h2>
          <Button  className="text-4xl font-bold mb-4" variant={'secondary'} >Chat with Our AI</Button>
        </div>
      </div>
    </div>
  )
}

