import React, { useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const GalleryPage = () => {
  const galleryItems = [
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Steel cutting process',
      title: 'Precision Steel Cutting',
    },
    {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
      thumbnail: 'https://images.pexels.com/photos/1082355/pexels-photo-1082355.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Welding process video',
      title: 'Expert Welding Techniques',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Quality inspection',
      title: 'Quality Control',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Finishing work',
      title: 'Surface Finishing',
    },
    {
      type: 'video',
      src: 'https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4',
      thumbnail: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Assembly process video',
      title: 'Assembly & Installation',
    },
    {
      type: 'image',
      src: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Final product showcase',
      title: 'Final Product',
    },
  ];

  const VideoPlayer = ({ item, index }: { item: any; index: number }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [showControls, setShowControls] = React.useState(false);

    useEffect(() => {
      const video = videoRef.current;
      if (!video) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().then(() => {
                setIsPlaying(true);
              }).catch(() => {
                setShowControls(true);
              });
            } else {
              video.pause();
              setIsPlaying(false);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(video);

      return () => {
        observer.disconnect();
      };
    }, []);

    const togglePlay = () => {
      const video = videoRef.current;
      if (!video) return;

      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play().then(() => {
          setIsPlaying(true);
        });
      }
    };

    return (
      <div className="relative group">
        <video
          ref={videoRef}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
          loop
          muted
          playsInline
          poster={item.thumbnail}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <source src={item.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div 
          className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
          }`}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
          onTouchStart={() => setShowControls(true)}
        >
          <button
            onClick={togglePlay}
            className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 hover:bg-white transition-all duration-300 hover:scale-110"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800" />
            ) : (
              <Play className="w-6 h-6 sm:w-8 sm:h-8 text-slate-800 ml-1" />
            )}
          </button>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
            <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">{item.title}</h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">How We Work</h1>
          <p className="text-xl text-slate-1000 max-w-2xl mx-auto">
            Take a behind-the-scenes look at our craftsmanship and attention to detail in every step of our process
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-20">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {item.type === 'video' ? (
                  <VideoPlayer item={item} index={index} />
                ) : (
                  <div className="relative overflow-hidden">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Design', description: 'Custom design based on your requirements' },
              { step: '02', title: 'Cut & Shape', description: 'Precision cutting and shaping of steel' },
              { step: '03', title: 'Weld & Finish', description: 'Expert welding and surface finishing' },
              { step: '04', title: 'Deliver', description: 'Quality check and delivery to your location' },
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-3 sm:mb-4 group-hover:bg-orange-700 transition-colors">
                  {process.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2">{process.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 px-2">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;