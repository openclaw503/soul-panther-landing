'use client';

export default function SpotifyPlayer() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative rounded-lg overflow-hidden border border-sacred-gold/20 card-glow">
        <iframe
          src="https://open.spotify.com/embed/artist/0VXB0OFzi2c8iNB6fuyZxg"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="w-full"
        />
      </div>
      <div className="mt-6 text-center">
        <a
          href="https://open.spotify.com/artist/0VXB0OFzi2c8iNB6fuyZxg"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sacred-gold hover:text-amber-glow transition-colors"
        >
          <span className="text-sm tracking-wider">OPEN IN SPOTIFY</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </div>
  );
}
