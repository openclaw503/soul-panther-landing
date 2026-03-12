'use client';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-midnight-light border-t border-sacred-gold/10 mt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-display text-sacred-gold mb-4">SOUL PANTHER</h3>
            <p className="text-sm text-white/60 font-light">
              Sacred Futurism. Independent Music. Conscious Creation.
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white mb-4">CONNECT</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="https://open.spotify.com/artist/0VXB0OFzi2c8iNB6fuyZxg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-sacred-gold transition-colors"
              >
                Spotify
              </a>
              <a
                href="https://instagram.com/soul_panther"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-sacred-gold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@soulpanther"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/60 hover:text-sacred-gold transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold tracking-wider text-white mb-4">STAY UPDATED</h4>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-midnight border border-sacred-gold/20 rounded text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-sacred-gold transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-sacred-gold text-midnight font-semibold text-sm tracking-wider rounded hover:bg-amber-glow transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sacred-gold/10 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Soul Panther. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
