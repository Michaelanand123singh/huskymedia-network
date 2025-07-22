import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import MovieCard from './MovieCard';
import VideoPlayer from './VideoPlayer';
import { title } from 'framer-motion/client';
import { data } from 'autoprefixer';

// Utility function to extract YouTube video ID
const getYouTubeVideoId = (url) => {
  const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Utility function to get YouTube thumbnail
const getYouTubeThumbnail = (videoId, quality = 'maxresdefault') => {
  return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
};

const VideoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'Music Videos', 'Documentaries', 'Behind Scenes', 'Movies', 'Animation',];
  
  const videos = [

    {
      id: 4,
      title: 'BODY పెంచింది టైం వచ్చినప్పుడు విప్పడానికే',
      youtubeUrl: 'https://www.youtube.com/embed/GhSlKy8-kN8?si=RALicTGpITRsHhSJ',
      duration: '10:29',
      artist: 'Naga Shaurya',
      date: '2024-03-15',
      category: 'Movies',
      description: 'BODY పెంచింది టైం వచ్చినప్పుడు విప్పడానికే.Naga Shaurya Six Pack Body Mass Look Action @cinemajatara',
      tags: ['Music Video', 'YouTube'],
      isYoutube: true
    },
    {
      id: 5,
      title: 'Adirindhi Telugu Full HD Movie',
      youtubeUrl: 'https://www.youtube.com/embed/HAIh13mPat8?si=Yk-QK0Oiul6KYS7O',
      duration: '2:17:37',
      artist: 'Vijay Thalapathy | Samantha | Kajal | Nithya Menon',
      date: '2024-03-20',
      category: 'Movies',
      description: 'Adirindhi Telugu Full HD Movie | Vijay Thalapathy | Samantha | Kajal | Nithya Menon | Telugu Movies',
      tags: ['Piano', 'Live', 'YouTube'],
      isYoutube: true
    },
    {
      id: 6,
      title: 'Award winning short film - Barat',
      youtubeUrl: 'https://www.youtube.com/embed/StaBqNuT_YY?si=rT8MkfeCBQaeXJ7F',
      duration: '18:29',
      artist: 'Documentary Channel',
      date: '2024-03-25',
      category: 'Documentaries',
      description: 'Award winning short film - Barat | A spooky tale of a greedy man who witnesses something dreadful',
      tags: ['Documentary', 'Educational', 'YouTube'],
      isYoutube: true
    },
    {
      id: 7,
      title: 'Dohra Short film | Hindi short film | Mystery | Natak Pictures',
      youtubeUrl: 'https://www.youtube.com/embed/X1fMLrlpK7c?si=6zwGikJ1TBXGoan0',
      duration: '29:15',
      artist: 'Documentary Channel',
      date: '2024-03-25',
      category: 'Documentaries',
      description: 'Dohra" is a gripping hindi short film that follows Kavita, a woman who finds herself trapped in an unusual and unsettling situation. As she navigates through the layers of reality, she begins to question everything she knows. Is it fate, a dream, or something much deeper?',
      tags: ['Documentary', 'Educational', 'YouTube'],
      isYoutube: true
    },
    {
      id: 8,
      title: 'सुंदर कहानियां जो आपको पसंद है - सभी के लिए - Moral stories for you',
      youtubeUrl: 'https://www.youtube.com/embed/03LL1tdnd7I?si=HwYAtrtrPOr3B0rw',
      duration: '7:06:50',
      artist: 'Hindi Moral Stories',
      category: 'Animation',
      description: 'सुंदर कहानियां जो आपको पसंद है - सभी के लिए - Moral stories for you ',
      tags: ['Documentary', 'Educational', 'YouTube'],
      isYoutube: true

    },
    {
      id: 10,
      title: 'सुंदर नैतिक कहानियाँ - सभी के लिए - Hindi moral stories',
      youtubeUrl: 'https://www.youtube.com/embed/znGmnwTiNWw?si=iFGi_J9AFeGmgoKh',
      artist: 'Hindi Moral Stories',
      category: 'Animation',
      description: 'सुंदर नैतिक कहानियाँ - सभी के लिए - Hindi moral stories',
      tags: ['Documentary', 'Educational', 'Youtube'],
      isYoutube: true
    },
    {
      id: 11,
      title: 'குளிர்காலத்தில் ஏழை மருமகள் வைக்கோல் வீடு',
      youtubeUrl: 'https://www.youtube.com/embed/wouJRyjW1Vg?si=PqJb5xxSVFApF-Xo',
      artist: 'Anamika TV - Mamiyar Marumagal',
      category: 'Animation',
      description: 'குளிர்காலத்தில் ஏழை மருமகள் வைக்கோல் வீடு | Mamiyar vs Marumagal | Tamil Stories | Tamil Moral Stories | ',
      tags: ['Documentary', 'Educational', 'Youtube'],
      isYoutube: true
    },
    {
      id: 12,
      title: 'ஏழை மருமகளின் மந்திர புல் AC',
      youtubeUrl: 'https://www.youtube.com/embed/ZR84348vxVk?si=g6Q5nkGv_lW9S3zu',
      artist: 'Anamika TV - Mamiyar Marumagal',
      category: 'Animation',
      tags: ['Documentary', 'Educational', 'Youtube'],
      isYoutube: true
    },
    {
      id: 13,
      title: 'கர்ப்பிணி மருமகள் திமிர்பிடித்த மருமகள்',
      youtubeUrl: 'https://www.youtube.com/embed/BcWj04O-nSA?si=kal10Rsz4e6-Q_04',
      artist: 'Anamika TV - Mamiyar Marumagal',
      category: 'Animation',
      tags: ['Documentary', 'Educational', 'Youtube'],
      isYoutube: true
    },
    {
      id: 14,
      title: 'Raushan Rohi - #रंगदारी #मगही गाना - चिंगारी',
      youtubeUrl: 'https://www.youtube.com/embed/7XoWDMpDFOg?si=lz4BWCDpJzTmEy8e',
      artist: 'Raushan Rohi Entertainment',
      category: 'Music Videos',
      tags: ['Youtube', 'Music Videos'],
      isYoutube: true
    },
    {
      id: 15,
      title: 'हमरा त खाली हुमचाना हौ',
      youtubeUrl: 'https://www.youtube.com/embed/CaoQMZf86sg?si=AcMQnAKH1dZUevuj',
      artist: 'Bhumi Records Maghi',
      category: 'Music Videos',
      tags: ['Youtube', 'Music Videos'],
      isYoutube: true
    },
    {
      id: 16,
      title: 'Nandamuri Balakrishnas BHAGAVATH KESARI (2024)',
      youtubeUrl: 'https://www.youtube.com/embed/JlUIyT-NnT0?si=1FGAIFHc7Vrc627a',
      artist: 'AD-WISE MEDIA ACTION MOVIEPLEX',
      category: 'Movies',
      tags: ['Youtube', 'Movies'],
      isYoutube: true
    },
    {
      id: 17,
      title: 'Sundeep Kishans GALLY ROWDY (2021)',
      youtubeUrl: 'https://www.youtube.com/embed/Hy9DYi_6Psc?si=ME6y5xjqBOwWn2nR',
      artist: 'AD-WISE MEDIA ACTION MOVIEPLEX',
      category: 'Movies',
      tags: ['Youtube', 'Movies'],
      isYoutube: true
    },
    {
      id: 18,
      title: 'OMG: O Manchi Ghost (2024)',
      youtubeUrl: 'https://www.youtube.com/embed/gnX2dQTOKaY?si=FbucjbQzGxNiN0Jb',
      artist: 'AD-WISE MEDIA ACTION MOVIEPLEX',
      category: 'Movies',
      tags: ['Youtube', 'Movies'],
      isYoutube: true
    },
  ];

  // Process videos to add YouTube thumbnails and video IDs
  const processedVideos = videos.map(video => {
    if (video.isYoutube && video.youtubeUrl) {
      const videoId = getYouTubeVideoId(video.youtubeUrl);
      return {
        ...video,
        videoId,
        thumbnail: getYouTubeThumbnail(videoId),
        src: video.youtubeUrl
      };
    }
    return video;
  });

  const filteredVideos = selectedCategory === 'All' 
    ? processedVideos 
    : processedVideos.filter(video => video.category === selectedCategory);

  return (
    <section className="py-16 px-6 bg-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-heading font-bold text-center mb-12 text-white">
          Video <span className="text-red-500">Gallery</span>
        </h2>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
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
                isYoutube={selectedVideo.isYoutube}
                videoId={selectedVideo.videoId}
              />
              
              {/* Video Info */}
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{selectedVideo.title}</h3>
                <div className="flex flex-wrap items-center gap-4 text-gray-400">
                  <span>{selectedVideo.artist}</span>
                  <span>•</span>
                  <span>{selectedVideo.date}</span>
                  <span>•</span>
                  <span>{selectedVideo.duration}</span>
                  {selectedVideo.isYoutube && (
                    <>
                      <span>•</span>
                      <span className="text-red-500 flex items-center gap-1">
                        <ExternalLink size={14} />
                        YouTube
                      </span>
                    </>
                  )}
                </div>
                <p className="mt-2 text-gray-300">{selectedVideo.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div key={video.id} onClick={() => setSelectedVideo(video)}>
              <MovieCard 
                movie={{
                  ...video,
                  // Add YouTube indicator to thumbnail overlay
                  isYoutube: video.isYoutube
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;