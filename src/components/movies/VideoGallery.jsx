import { useState } from 'react';
import MovieCard from './MovieCard';
import VideoPlayer from './VideoPlayer';

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Music Videos', 'Documentaries', 'Live Sessions', 'Behind Scenes'];
  
  const videos = [
    {
      id: 1,
      title: 'Artist Journey Documentary',
      thumbnail: '/images/videos/doc-1.jpg',
      src: '/videos/artist-documentary-1.mp4',
      duration: '12:45',
      artist: 'Ajay Devgan',
      date: '2024-01-15',
      category: 'Documentaries',
      description: 'Behind the scenes look at the making of a blockbuster film',
      tags: ['Documentary', 'Behind Scenes']
    },
    {
      id: 2,
      title: 'Studio Recording Session',
      thumbnail: '/images/videos/session-1.jpg',
      src: '/videos/studio-session-1.mp4',
      duration: '8:30',
      artist: 'Deepika Padukone',
      date: '2024-02-20',
      category: 'Live Sessions',
      description: 'Exclusive recording session for upcoming album',
      tags: ['Studio', 'Recording']
    },
    {
      id: 3,
      title: 'Music Video Production',
      thumbnail: '/images/videos/mv-1.jpg',
      src: '/videos/music-video-1.mp4',
      duration: '4:20',
      artist: 'Ranveer Singh',
      date: '2024-03-10',
      category: 'Music Videos',
      description: 'High-energy music video with stunning visuals',
      tags: ['Music Video', 'Production']
    }
  ];

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <section className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-12">
          Video <span className="gradient-text">Gallery</span>
        </h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-secondary-red text-black'
                  : 'bg-primary-charcoal text-white hover:bg-primary-gray'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Video Player */}
        {selectedVideo && (
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <VideoPlayer 
                src={selectedVideo.src}
                poster={selectedVideo.thumbnail}
                title={selectedVideo.title}
              />
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} onClick={() => setSelectedVideo(video)}>
              <MovieCard movie={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;