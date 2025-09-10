import VideoGrid from '@/components/VideoGrid'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YouTube Video Grid
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of YouTube videos managed through Supabase. 
            Add, update, or remove videos from your database to see them appear here.
          </p>
        </div>
        
        <VideoGrid />
      </div>
    </main>
  )
}
