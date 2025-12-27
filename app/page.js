import Navigation from './components/Navigation';
import Footer from './components/Footer';
import GalleryMasonry from './components/GalleryMasonry';

const galleryImages = [
  { src: '/images/gallery2.webp', alt: 'Gallery 2' },
  { src: '/images/gallery3.webp', alt: 'Gallery 3' },
  { src: '/images/gallery4.webp', alt: 'Gallery 4' },
  { src: '/images/gallery5.webp', alt: 'Gallery 5' },
  { src: '/images/gallery6.webp', alt: 'Gallery 6' },
  { src: '/images/gallery7.webp', alt: 'Gallery 7' },
  { src: '/images/gallery8.webp', alt: 'Gallery 8' },
  { src: '/images/gallery9.webp', alt: 'Gallery 9' },
  { src: '/images/gallery10.webp', alt: 'Gallery 10' },
  { src: '/images/gallery11.webp', alt: 'Gallery 11' },
  { src: '/images/gallery12.webp', alt: 'Gallery 12' },
  { src: '/images/gallery.webp', alt: 'Gallery Feature' },
];

export default function Home() {
  return (
    <div className="bg-black text-white h-[100dvh] md:h-screen overflow-hidden">
      <Navigation />
      <Footer />

      {/* Vertical Scrolling Container */}
      <div
        id="scroll-container"
        className="absolute top-[5rem] bottom-[4rem] left-0 right-0 overflow-y-auto scroll-smooth md:snap-y md:snap-mandatory"
      >

        {/* Home Section */}
        <section id="home" className="relative w-screen h-full md:snap-start flex justify-center items-center pb-px md:pb-0">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30 md:hidden z-10"></div>
          {/* Hero Section - Logo and Text */}
          <div className="w-full h-full bg-black flex flex-col md:flex-row items-center">
            {/* Logo - Left (70%) */}
            <div className="w-full md:w-[70%] h-1/2 md:h-full flex items-center justify-center">
              <div className="max-w-md md:max-w-xl lg:max-w-2xl w-full aspect-square overflow-hidden flex items-center justify-center">
                <img
                  src="/images/logo.jpeg"
                  alt="Bobba Skonz Productions Logo"
                  className="w-full h-full object-cover mix-blend-screen scale-110"
                />
              </div>
            </div>
            {/* Keywords - Right (30%) */}
            <div className="w-full md:w-[30%] h-1/2 md:h-full flex flex-col justify-center items-start pl-8 md:pl-0 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>SOUND</h2>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>VISUALS</h2>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>MEDIA</h2>
            </div>
          </div>
        </section>

        {/* Sound Section */}
        <section id="sound" className="relative w-screen h-screen md:snap-start bg-black flex flex-col justify-center items-center -mt-16 md:mt-0 pb-px md:pb-0">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30 md:hidden"></div>
          <div className="w-full h-full overflow-y-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
            <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
              {/* Section Title */}
              <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white mb-8 md:mb-12 text-center" style={{ fontFamily: "'Barrio', sans-serif" }}>
                SOUND
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                {/* Left Column: Album Cover & Player */}
                <div className="md:col-span-3 flex flex-col items-start">
                  <div className="w-40 md:w-full aspect-[3/4] bg-zinc-800 flex items-center justify-center">
                    <p className="text-gray-500 text-xs">Album Cover</p>
                  </div>
                  <div className="mt-3 flex justify-start">
                    <button className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border-2 border-white/50 flex items-center justify-center transition-all">
                      <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Right Column: Content in Two Columns */}
                <div className="md:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Album Description */}
                  <div className="space-y-3 text-xs md:text-sm text-gray-300 leading-relaxed">
                    <div>
                      <h2 className="text-xl md:text-2xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                        IT KEEPS GETTING BETTER
                      </h2>
                      <p className="text-xs text-gray-400 tracking-wide mb-4">
                        ALBUM
                      </p>
                    </div>
                    <p>
                      This completely self produced album blurs reality and imagination. Finding peace in the midst of chaos. Immersive lyricism and sharp observations about the social constructs we're built on. A journey with hip-hop, psychedelics and life. Questioning everything.
                    </p>
                    <p>
                      Across the project, I document being the starving artist: Hustling, living out of my van, traveling and betting everything on an art form I've been sharpening since I was 14. Each song captures the tension between where I am and where I know I'm headed.
                    </p>
                    <p>
                      Layered throughout are metaphors and references to the movies, cartoons, and artist that shaped me—nostalgia. It Keeps Getting Better not just life but the album itself all the way till the end. I wanted to create timeless art. Every song adds a new layer to the story.
                    </p>
                  </div>

                  {/* Artistic Vision + Bookings */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                        ARTISTIC VISION
                      </h3>
                      <div className="space-y-3 text-xs md:text-sm text-gray-300 leading-relaxed">
                        <p>
                          I produce and perform psychedelic hip-hop rooted in consciousness, lyricism, and lived experience. My music blends trippy, bass-heavy beats with thought-provoking bars, weaving introspection, storytelling, and raw presence into every performance.
                        </p>
                        <p>
                          At my core, I'm an MC—freestyling, crowd-engaging, and fully embodied on stage. I curate a unique, immersive experience that pulls listeners into the moment, keeps energy high, and creates a genuine connection between artist and audience. Whether it's a festival stage or an intimate underground gathering, I love performing, sharing my art, and moving people through sound.
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <h3 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                        BOOKINGS & INQUIRIES
                      </h3>
                      <p className="text-xs md:text-sm text-gray-300 mb-2">
                        For bookings, features, or collaborations, please contact:
                      </p>
                      <a href="mailto:Devinleeflores@gmail.com" className="text-xs md:text-sm text-white hover:text-gray-300 transition-colors">
                        Devinleeflores@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Visuals Section */}
        <section id="visuals" className="w-screen md:h-screen md:snap-start bg-black md:pt-0 md:pb-0">
          {/* Mobile: Vertical scroll layout */}
          <div className="md:hidden">
            {/* Gallery - Full width stacked images */}
            <div className="w-full px-4 pt-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full">
                  <img src={image.src} alt={image.alt} className="w-full h-auto block" />
                </div>
              ))}
            </div>

            {/* Gallery Info - After all images */}
            <div className="w-full flex flex-col justify-center items-center bg-black border-t border-white/10 px-8 pt-10 pb-24 space-y-6">
              <div className="w-full max-w-sm overflow-hidden">
                <img
                  src="/images/about.webp"
                  alt="Gallery Feature"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full max-w-sm space-y-4 text-sm text-gray-300 leading-relaxed">
                <h3 className="text-3xl md:text-5xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>
                  VISUALS
                </h3>
                <div className="space-y-3">
                  <p className="text-xs">
                    I approach photography and videography the same way I approach music—as art, as presence, and as storytelling. My work is rooted in capturing real moments as they unfold, emphasizing emotion, movement, and energy rather than staged perfection.
                  </p>
                  <p className="text-xs">
                    As you'll see throughout the gallery, my style leans toward vibrant, candid imagery—full of life, color, and feeling. Whether I'm shooting portraits, headshots, nature, families, or live events, my goal is always the same: to capture the present moment honestly and artistically.
                  </p>
                  <p className="text-xs">
                    From intimate human connections to expansive landscapes, from music acts on stage to people lost in the dance, every frame is treated as a living piece of art.
                  </p>
                </div>

                {/* Festivals & Events */}
                <div className="pt-3 border-t border-white/10">
                  <h4 className="text-sm font-light tracking-wider text-white mb-2" style={{ fontFamily: "'Barrio', sans-serif" }}>
                    FESTIVALS & EVENTS
                  </h4>
                  <p className="text-xs mb-2">
                    I've provided photo and video coverage for a wide range of festivals, gatherings, and creative productions, including:
                  </p>
                  <ul className="text-xs space-y-1 ml-4">
                    <li>• Building Man — Green River, Utah</li>
                    <li>• Rise & Vibes — Durango, Colorado</li>
                    <li>• Desert Reverie Festival — The Land, Utah</li>
                    <li>• Dirtnap Festival — The Land, Utah</li>
                    <li>• Planet V — Naturita, Colorado</li>
                    <li>• Cultivate Festival — Paonia, Colorado</li>
                    <li>• Badger Bass Camp — Colorado</li>
                  </ul>
                  <p className="text-xs mt-2">
                    I also work extensively with Cosmic Coral, a traveling circus troupe, documenting performances, events, and creative gatherings across the Midwest.
                  </p>
                  <p className="text-xs mt-2">
                    No matter the subject—people, movement, music, or nature—I see it all through the same lens: it's art. My work is about connection, atmosphere, and authenticity, creating visuals that feel alive and true to the moment they were captured.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Side-by-side layout */}
          <div className="hidden md:flex h-full">
            {/* Gallery - Left on desktop (70%) */}
            <div className="basis-[70%] max-w-[70%] h-full overflow-hidden">
              <div className="h-full overflow-hidden py-12">
                <GalleryMasonry images={galleryImages} />
              </div>
            </div>

            {/* Gallery Info - Right on desktop (30%) */}
            <div className="basis-[30%] max-w-[30%] h-full flex flex-col justify-start items-center bg-black border-l border-white/10 px-8 py-10 space-y-8 overflow-y-auto">
              <div className="w-full max-w-sm overflow-hidden">
                <img
                  src="/images/about.webp"
                  alt="Gallery Feature"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full max-w-sm space-y-4 text-sm text-gray-300 leading-relaxed">
                <h3 className="text-3xl md:text-5xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>
                  VISUALS
                </h3>
                <div className="space-y-3">
                  <p>
                    I approach photography and videography the same way I approach music—as art, as presence, and as storytelling. My work is rooted in capturing real moments as they unfold, emphasizing emotion, movement, and energy rather than staged perfection.
                  </p>
                  <p>
                    As you'll see throughout the gallery, my style leans toward vibrant, candid imagery—full of life, color, and feeling. Whether I'm shooting portraits, headshots, nature, families, or live events, my goal is always the same: to capture the present moment honestly and artistically.
                  </p>
                  <p>
                    From intimate human connections to expansive landscapes, from music acts on stage to people lost in the dance, every frame is treated as a living piece of art.
                  </p>
                </div>

                {/* Festivals & Events */}
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-lg font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                    FESTIVALS & EVENTS
                  </h4>
                  <p className="mb-3">
                    I've provided photo and video coverage for a wide range of festivals, gatherings, and creative productions, including:
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li>• Building Man — Green River, Utah</li>
                    <li>• Rise & Vibes — Durango, Colorado</li>
                    <li>• Desert Reverie Festival — The Land, Utah</li>
                    <li>• Dirtnap Festival — The Land, Utah</li>
                    <li>• Planet V — Naturita, Colorado</li>
                    <li>• Cultivate Festival — Paonia, Colorado</li>
                    <li>• Badger Bass Camp — Colorado</li>
                  </ul>
                  <p className="mt-3">
                    I also work extensively with Cosmic Coral, a traveling circus troupe, documenting performances, events, and creative gatherings across the Midwest.
                  </p>
                  <p className="mt-3">
                    No matter the subject—people, movement, music, or nature—I see it all through the same lens: it's art. My work is about connection, atmosphere, and authenticity, creating visuals that feel alive and true to the moment they were captured.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Section */}
        <section id="media" className="relative w-screen h-screen md:snap-start bg-black flex flex-col justify-start items-center pb-px md:pb-0">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30 md:hidden"></div>
          <div className="w-full h-full overflow-y-auto px-6 md:px-12 py-12 md:py-16 space-y-8 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white text-center" style={{ fontFamily: "'Barrio', sans-serif" }}>
              MEDIA
            </h2>

            {/* Live Performances & Experience */}
            <div className="space-y-4 text-gray-300">
              <h3 className="text-xl md:text-2xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>
                LIVE PERFORMANCES & EXPERIENCE
              </h3>
              <p className="text-sm md:text-base leading-relaxed">
                I've had the honor of performing across a wide range of festivals, gatherings, and underground scenes, bringing a high-energy, immersive experience wherever I go.
              </p>

              <div className="pt-3">
                <p className="text-sm md:text-base font-medium text-white mb-2">Selected Performances Include:</p>
                <ul className="text-sm md:text-base space-y-1 ml-4">
                  <li>• Summersend Festival — British Columbia</li>
                  <li>• Desert Reverie Festival — The Land, Utah</li>
                  <li>• Dirtnap Festival — The Land, Utah</li>
                  <li>• Countless underground parties, cyphers, and community gatherings throughout the Midwest and East Coast</li>
                </ul>
              </div>

              <p className="text-sm md:text-base leading-relaxed pt-3">
                In addition to my own sets, I've free-styled live over DJ sets by respected selectors including:
              </p>
              <ul className="text-sm md:text-base space-y-1 ml-4">
                <li>• n00nz</li>
                <li>• Codestar</li>
                <li>• Kosmik!</li>
              </ul>

              <p className="text-sm md:text-base leading-relaxed pt-3">
                I've also collaborated in the studio with Redfoot Music, releasing a professionally produced track that further represents my evolving sound.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
