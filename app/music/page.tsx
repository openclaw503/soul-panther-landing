import YouTubeGrid from "@/components/YouTubeGrid";
import SpotifyPlayer from "@/components/SpotifyPlayer";

export default function Music() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-tight text-white mb-6">
            THE MUSIC
          </h1>
          <p className="text-sacred-gold text-sm tracking-widest uppercase">
            Afro House · Melodic House & Techno · Deep House · Tech House
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sacred-gold to-transparent mx-auto mt-8" />
        </div>

        {/* Featured Videos */}
        <section className="mb-24">
          <h2 className="text-3xl font-display text-white mb-8 text-center">FEATURED VIDEOS</h2>
          <YouTubeGrid />
        </section>

        {/* Spotify Player */}
        <section className="mb-24">
          <h2 className="text-3xl font-display text-white mb-8 text-center">STREAM ON SPOTIFY</h2>
          <SpotifyPlayer />
        </section>

        {/* Festival Booking CTA */}
        <section className="mt-24">
          <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-deep-indigo/40 via-midnight to-deep-indigo/40 border border-sacred-gold/20 p-12 text-center card-glow">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sacred-gold/10 rounded-full blur-[100px]" />
            
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl sm:text-5xl font-display text-sacred-gold tracking-tight">
                BOOK FOR YOUR EVENT
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Bring Soul Panther to your festival, club, or private event. Experience the energy of conscious electronic music live.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                <a
                  href="/book"
                  className="px-8 py-4 bg-sacred-gold text-midnight font-bold text-sm tracking-wider rounded hover:bg-amber-glow transition-all hover:scale-105"
                >
                  BOOKING INQUIRY
                </a>
                <a
                  href="mailto:booking@soul-panther.com"
                  className="px-8 py-4 border-2 border-sacred-gold text-sacred-gold font-bold text-sm tracking-wider rounded hover:bg-sacred-gold hover:text-midnight transition-all hover:scale-105"
                >
                  EMAIL DIRECT
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
