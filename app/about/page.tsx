export default function About() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display tracking-tight text-white mb-6">
            THE STORY
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sacred-gold to-transparent mx-auto" />
        </div>

        {/* Content */}
        <div className="space-y-8 text-lg text-white/80 font-light leading-relaxed">
          <p>
            Soul Panther is an independent electronic music artist, producer, and DJ standing at the intersection of music, technology, and consciousness. With nearly two decades of experience producing and performing, his sound blends emotional melodies, cinematic atmospheres, and powerful driving drops designed for festival stages and shared moments of collective energy.
          </p>

          <p>
            As artificial intelligence reshapes the creative landscape, Soul Panther embraces these tools as instruments of expansion rather than shortcuts — using them to push artistic boundaries while staying grounded in authenticity and human expression.
          </p>

          <p>
            His music is created with a deeper intention: to unite people, awaken something within them, and remind us of the power we have to shape the world we live in.
          </p>

          <p>
            At a time when the traditional music industry is being disrupted, Soul Panther represents a new generation of independent artists who are rewriting the rules.
          </p>

          <div className="py-8">
            <div className="border-l-2 border-sacred-gold pl-6 space-y-4">
              <p className="text-xl text-sacred-gold font-medium">
                Artists who create freely.
              </p>
              <p className="text-xl text-sacred-gold font-medium">
                Artists who adapt.
              </p>
              <p className="text-xl text-sacred-gold font-medium">
                Artists who lead.
              </p>
            </div>
          </div>

          <p className="text-2xl text-amber-glow font-semibold text-center pt-8">
            A new era of music is emerging — and the Sacred Rebels are rising.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 p-12 bg-gradient-to-br from-deep-indigo/30 to-midnight border border-sacred-gold/20 rounded-lg card-glow">
          <h2 className="text-3xl font-display text-sacred-gold mb-6 text-center">MISSION</h2>
          <p className="text-lg text-white/90 text-center font-light leading-relaxed">
            To create music that awakens, unites, and empowers. To build a movement of conscious creators who refuse to compromise their vision. To prove that independence, authenticity, and technology can coexist in service of something greater than ourselves.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/music"
            className="inline-block px-8 py-4 bg-sacred-gold text-midnight font-bold text-sm tracking-wider rounded hover:bg-amber-glow transition-all hover:scale-105"
          >
            EXPLORE THE MUSIC
          </a>
        </div>
      </div>
    </div>
  );
}
