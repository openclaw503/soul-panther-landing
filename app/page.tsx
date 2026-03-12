import YouTubeGrid from "@/components/YouTubeGrid";
import SpotifyPlayer from "@/components/SpotifyPlayer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-deep-indigo/30 via-midnight to-midnight" />
        
        {/* Glow effect */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sacred-gold/5 rounded-full blur-[120px] animate-glow" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          {/* Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display tracking-tighter leading-none">
            <span className="block text-white">SOUL</span>
            <span className="block text-gradient glow-text">PANTHER</span>
          </h1>

          {/* Tagline */}
          <p className="text-xs sm:text-sm tracking-[0.3em] text-sacred-gold uppercase font-semibold">
            Sacred Futurism · Independent Music · Conscious Creation
          </p>

          {/* Bio */}
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              Soul Panther is an independent electronic music artist exploring the frontier where music, consciousness, and AI meet. Blending cinematic emotion with powerful stadium-scale drops, his sound is designed to awaken the heart, move the body, and bring people together in unforgettable moments of unity.
            </p>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              As the traditional music industry collapses, Soul Panther is part of a new wave of independent artists using emerging technologies and creative freedom to build the future of music.
            </p>
            <p className="text-lg sm:text-xl text-sacred-gold font-semibold tracking-wide">
              This is more than music. It&apos;s a movement.
            </p>
            <p className="text-base sm:text-lg text-amber-glow font-medium">
              Welcome to the rise of the Sacred Rebels.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href="#music"
              className="px-8 py-4 bg-sacred-gold text-midnight font-bold text-sm tracking-wider rounded hover:bg-amber-glow transition-all hover:scale-105"
            >
              EXPLORE MUSIC
            </a>
            <a
              href="/book"
              className="px-8 py-4 border-2 border-sacred-gold text-sacred-gold font-bold text-sm tracking-wider rounded hover:bg-sacred-gold hover:text-midnight transition-all hover:scale-105"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-sacred-gold/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-sacred-gold rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section id="music" className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-display tracking-tight text-white mb-4">
              FEATURED
            </h2>
            <p className="text-sacred-gold text-sm tracking-widest uppercase">Latest releases and performances</p>
          </div>
          <YouTubeGrid featured={true} />
        </div>
      </section>

      {/* Spotify Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-midnight via-deep-indigo/20 to-midnight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display tracking-tight text-white mb-12">
            STREAM NOW
          </h2>
          <SpotifyPlayer />
        </div>
      </section>
    </div>
  );
}
