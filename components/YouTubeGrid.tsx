'use client';

interface Video {
  id: string;
  title: string;
  views: string;
  type: string;
}

const videos: Video[] = [
  {
    id: '4XStke0_7Ng',
    title: 'This Is Every Man's Dream… Yacht Sunset DJ Party',
    views: '566K+ views',
    type: '40-min Deep & Afro House Mix',
  },
  {
    id: 'NgCmlLHb5qY',
    title: 'DJing with My 2 Wives in the Kitchen...',
    views: '47K views',
    type: 'Deep, Afro & Melodic House Mix',
  },
  {
    id: 'tXFUFJB4XpM',
    title: 'DJing at Sunset in Cannes, South of France',
    views: '',
    type: '20-min Deep & Afro House Mix',
  },
  {
    id: 'M7KMOTjZ_GI',
    title: 'Queen of Your Palace (LIVE in Bali) ft. Hartwell',
    views: '',
    type: 'Live Performance',
  },
];

export default function YouTubeGrid({ featured = false }: { featured?: boolean }) {
  const displayVideos = featured ? videos : videos;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {displayVideos.map((video, index) => (
        <div
          key={video.id}
          className="group relative overflow-hidden rounded-lg bg-midnight-light border border-sacred-gold/10 hover:border-sacred-gold/30 transition-all duration-500 hover:scale-[1.02] card-glow"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Video Embed */}
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.id}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Video Info */}
          <div className="p-6 space-y-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-sacred-gold transition-colors">
              {video.title}
            </h3>
            <div className="flex items-center gap-3 text-sm text-white/60">
              {video.views && <span>{video.views}</span>}
              {video.views && <span>•</span>}
              <span>{video.type}</span>
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-sacred-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
      ))}
    </div>
  );
}
