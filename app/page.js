import Navigation from './components/Navigation';
import Footer from './components/Footer';
import GalleryMasonry from './components/GalleryMasonry';
import AudioButton from './components/AudioButton';

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
        className="absolute top-[5rem] bottom-[4rem] left-0 right-0 overflow-y-auto scroll-smooth md:snap-y md:snap-mandatory max-w-[1600px] mx-auto border-l border-r border-white/15"
      >

        {/* Home Section */}
        <section id="home" className="relative w-full h-full md:snap-start flex justify-center items-center pb-px md:pb-0">
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
            <div className="w-full md:w-[30%] h-1/2 md:h-full flex flex-row md:flex-col justify-center items-center md:items-start gap-4 md:gap-0 md:space-y-6">
              <h2 className="text-xl md:text-4xl lg:text-5xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>SOUND</h2>
              <h2 className="text-xl md:text-4xl lg:text-5xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>VISUALS</h2>
              <h2 className="text-xl md:text-4xl lg:text-5xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>MEDIA</h2>
            </div>
          </div>
        </section>

          {/* Sound Section */}
          <section id="sound" className="relative w-full md:snap-start bg-black flex flex-col justify-start items-center mt-0 md:mt-2 pb-px md:pb-0 md:border-t border-b border-white/15">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30 md:hidden"></div>
          <div className="w-full px-6 md:px-12 py-8 md:py-12">
            <div className="max-w-6xl mx-auto flex flex-col justify-start space-y-10">
              {/* Section Title */}
              <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white text-center mb-8 md:mb-10" style={{ fontFamily: "'Barrio', sans-serif" }}>
                SOUND
              </h2>

              {/* Top Row: Album Cover + Title/Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pb-6">
                {/* Album Cover */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-full max-w-md aspect-[4/5] bg-zinc-800 flex items-center justify-center">
                    <p className="text-gray-500 text-xs">Album Cover</p>
                  </div>
                </div>

                {/* Title + Description */}
                <div className="space-y-3 text-gray-300">
                  <div>
                    <h3 className="text-xl md:text-2xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                      IT KEEPS GETTING BETTER
                    </h3>
                    <p className="text-xs text-gray-400 tracking-wide mb-4">
                      ALBUM SAMPLE
                    </p>
                  </div>
                  <div className="mb-4 flex items-center gap-4">
                    <AudioButton />
                    <p className="text-sm md:text-base text-gray-300 tracking-wide">WARPZ</p>
                  </div>
                  <div className="space-y-3 text-sm md:text-base leading-relaxed">
                    <p>
                      It Keeps Getting Better is a fully self-produced album that blurs reality and imagination—finding peace in the midst of chaos. Built at the intersection of hip-hop, psychedelics, and lived experience, the project explores identity, perception, and the social constructs we're shaped by—questioning everything beneath the surface.
                    </p>
                    <p>
                      Across the album, I document life as a starving artist: hustling, living out of my van, traveling, and betting everything on an art form I've been sharpening since I was 14. Each track captures the tension between where I am and where I know I'm headed.
                    </p>
                    <p>
                      Layered throughout are metaphors and references to the movies, cartoons, and artists that shaped me—threads of nostalgia woven into the narrative. The album evolves as it unfolds, with every song adding a new layer to the story. My intention was to create something timeless—an album that deepens all the way through.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Row: Centered Content */}
              <div className="space-y-8 max-w-3xl mx-auto">
                {/* Artistic Vision */}
                <div className="space-y-3 text-gray-300">
                  <h3 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                    ARTISTIC VISION
                  </h3>
                  <div className="space-y-3 text-sm md:text-base leading-relaxed">
                    <p>
                      I produce and perform psychedelic hip-hop rooted in consciousness, lyricism, and lived experience. My sound blends trippy, bass-heavy beats with thought-provoking bars, weaving introspection, storytelling, and raw presence into every track.
                    </p>
                    <p>
                      At my core, I'm an MC. Freestyling, crowd engagement, and embodiment are central to how I create and perform. Whether on a festival stage or in an intimate underground space, I aim to pull listeners fully into the moment—keeping energy high while creating a genuine connection between artist and audience.
                    </p>
                  </div>
                </div>

                {/* Live Energy */}
                <div className="space-y-3 text-gray-300">
                  <h3 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                    LIVE ENERGY
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    My performances are immersive and alive, shaped by intuition and real-time interaction. Each set is an exchange—reading the room, responding to the energy, and letting the moment guide the experience.
                  </p>
                </div>

                {/* Bookings & Inquiries */}
                <div className="space-y-3 text-gray-300">
                  <h3 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                    BOOKINGS & INQUIRIES
                  </h3>
                  <p className="text-sm md:text-base mb-2">
                    For bookings, features, or collaborations:
                  </p>
                  <a href="mailto:Devinleeflores@gmail.com" className="text-sm md:text-base text-white hover:text-gray-300 transition-colors">
                    Devinleeflores@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

          {/* Visuals Section */}
          <section id="visuals" className="w-full md:snap-start bg-black border-b border-white/15">
          <div className="w-full overflow-y-auto">
            {/* Header Image - Desktop Only */}
            <div className="hidden md:block w-full px-12 pt-12">
              <div className="max-w-md mx-auto overflow-hidden">
                <img
                  src="/images/about.webp"
                  alt="Gallery Feature"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Description Section */}
            <div className="w-full px-6 md:px-12 py-8 md:py-10">
              <div className="max-w-5xl mx-auto space-y-4 text-sm md:text-base text-gray-300 leading-relaxed">
                <h3 className="text-3xl md:text-5xl font-light tracking-wider text-white text-center mb-8 md:mb-10" style={{ fontFamily: "'Barrio', sans-serif" }}>
                  VISUALS
                </h3>

                {/* Mobile Header Image */}
                <div className="md:hidden w-full max-w-sm mx-auto mb-6 overflow-hidden">
                  <img
                    src="/images/about.webp"
                    alt="Gallery Feature"
                    className="w-full h-auto object-cover"
                  />
                </div>

                <div className="space-y-8 max-w-3xl mx-auto">
                  {/* Approach */}
                  <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                      APPROACH
                    </h4>
                    <p>
                      I approach photography and videography the same way I approach music: as art, presence, and storytelling. I focus on real moments as they unfold, prioritizing emotion, movement, and energy over staged perfection.
                    </p>
                    <p>
                      My work leans toward vibrant, candid imagery—full of life, color, and feeling. Whether I'm photographing portraits, families, nature, or live events, the goal is always the same: to capture the moment honestly and artistically.
                    </p>
                    <p>
                      From intimate human connections to expansive landscapes, from musicians on stage to people lost in the dance, each frame is treated as a living piece of art.
                    </p>
                  </div>

                  {/* Festivals & Events */}
                  <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                      FESTIVALS & EVENTS
                    </h4>
                    <p className="mb-2">
                      I've provided photo and video coverage for festivals, gatherings, and creative productions, including:
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
                  </div>

                  {/* Ongoing Collaboration */}
                  <div className="space-y-3">
                    <h4 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                      ONGOING COLLABORATION
                    </h4>
                    <p className="mb-1">
                      Cosmic Coral — Traveling Circus Troupe
                    </p>
                    <p>
                      Photo and video documentation of performances, events, and creative gatherings across the Midwest.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery - Full width */}
            <div className="w-full px-4 md:px-12 pb-12">
              <div className="hidden md:block">
                <GalleryMasonry images={galleryImages} />
              </div>

              {/* Mobile: Stacked images */}
              <div className="md:hidden space-y-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="w-full">
                    <img src={image.src} alt={image.alt} className="w-full h-auto block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

          {/* Media Section */}
          <section id="media" className="relative w-full md:snap-start bg-black flex flex-col justify-start items-center pb-px md:pb-0">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-white/30 md:hidden"></div>
          <div className="w-full px-6 md:px-12 py-12 md:py-16">
            <div className="space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-light tracking-wider text-white text-center mb-8 md:mb-10" style={{ fontFamily: "'Barrio', sans-serif" }}>
                MEDIA
              </h2>

              {/* Live Performance */}
              <div className="space-y-3 text-gray-300">
                <h3 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                  LIVE PERFORMANCE
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  I perform high-energy, immersive sets across festivals, gatherings, and underground scenes.
                </p>
              </div>

              {/* Selected Performances */}
              <div className="space-y-3 text-gray-300">
                <h3 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                  SELECTED PERFORMANCES
                </h3>
                <ul className="text-sm md:text-base space-y-1 ml-4">
                  <li>• Summersend Festival — British Columbia</li>
                  <li>• Desert Reverie Festival — The Land, Utah</li>
                  <li>• Dirtnap Festival — The Land, Utah</li>
                  <li>• Independent underground parties, cyphers, and community gatherings throughout the Midwest and East Coast</li>
                </ul>
              </div>

              {/* Collaborations */}
              <div className="space-y-3 text-gray-300">
                <h3 className="text-lg md:text-xl font-light tracking-wider text-white mb-3" style={{ fontFamily: "'Barrio', sans-serif" }}>
                  COLLABORATIONS
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  I've freestyled live over DJ sets by respected selectors, including:
                </p>
                <ul className="text-sm md:text-base space-y-1 ml-4">
                  <li>• n00nz</li>
                  <li>• Codestar</li>
                  <li>• Kosmik!</li>
                </ul>
                <p className="text-sm md:text-base leading-relaxed pt-3">
                  I've also collaborated in the studio with Redfoot Music, releasing a professionally produced track.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
