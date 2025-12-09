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
    <div className="bg-black text-white h-screen overflow-hidden">
      <Navigation />
      <Footer />

      {/* Vertical Scrolling Container */}
      <div id="scroll-container" className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

        {/* Home Section */}
        <section id="home" className="w-screen h-screen snap-start flex flex-col pt-16 pb-12 md:flex-row md:pt-16 md:pb-12">
          {/* Hero Background Image - Top on mobile, Left on desktop (70%) */}
          <div className="w-full md:w-[70vw] h-2/3 md:h-full bg-black flex-shrink-0">
            <img
              src="/images/hero.webp"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title - Bottom on mobile, Right on desktop (30%) */}
          <div className="w-full md:w-[30vw] h-1/3 md:h-full flex flex-col justify-center bg-black px-6 lg:px-8 flex-shrink-0">
            <div>
              <h1 className="font-light tracking-wider text-white leading-tight">
                <span className="text-4xl md:text-5xl lg:text-6xl block" style={{ fontFamily: "'Barrio', sans-serif" }}>BOBBA SKONZ</span>
                <span className="text-xl md:text-2xl lg:text-3xl block mt-2">PRODUCTIONS</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="w-screen h-screen snap-start bg-black pt-16 pb-12 md:pt-0 md:pb-0">
          <div className="flex h-full flex-col md:flex-row">
            {/* Music Video - Top on mobile, Left on desktop (70%) */}
            <div className="w-full md:basis-[70%] md:max-w-[70%] h-2/3 md:h-full flex items-center justify-center bg-zinc-900 p-8 md:p-12">
              <video
                src="/video/WARPZ PROMO DONE (2).mp4"
                controls
                className="max-w-full h-auto max-h-[75vh] object-contain"
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Song Info - Bottom on mobile, Right on desktop (30%) */}
            <div className="w-full md:basis-[30%] md:max-w-[30%] h-1/3 md:h-full flex flex-col justify-center bg-black border-t border-white/10 md:border-t-0 md:border-l md:border-white/10 px-8 py-10 space-y-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-light tracking-wider text-white mb-2" style={{ fontFamily: "'Barrio', sans-serif" }}>
                    WARPZ
                  </h2>
                  <p className="text-sm text-gray-400 tracking-wide">
                    SINGLE
                  </p>
                </div>

                <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
                  <p>
                    A sonic journey through layered beats and atmospheric textures. WARPZ pushes boundaries with its hypnotic rhythms and bold production.
                  </p>
                  <p>
                    Experience the energy that defines Bobba Skonz Productions - raw, authentic, and unapologetically creative.
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">
                    Release Date
                  </p>
                  <p className="text-sm text-white">
                    Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photography Section */}
        <section id="photography" className="w-screen snap-start bg-black pt-16 pb-12 md:h-screen md:pt-0 md:pb-0">
          {/* Mobile: Vertical scroll layout */}
          <div className="md:hidden">
            {/* Gallery - Full width stacked images */}
            <div className="w-full px-4 space-y-4">
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full">
                  <img src={image.src} alt={image.alt} className="w-full h-auto block" />
                </div>
              ))}
            </div>

            {/* Gallery Info - After all images */}
            <div className="w-full flex flex-col justify-center items-center bg-black border-t border-white/10 px-8 py-10 space-y-6">
              <div className="w-full max-w-sm overflow-hidden">
                <img
                  src="/images/about.webp"
                  alt="Gallery Feature"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full max-w-sm space-y-3 text-sm text-gray-300 leading-relaxed">
                <h3 className="text-xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>
                  VISUAL STORIES
                </h3>
                <p className="text-xs">
                  Spotlight moments from recent shoots, showcasing the bold energy behind Bobba Skonz Productions. Larger frames highlight the latest work while the flow keeps every shot connected.
                </p>
                <p className="text-xs">
                  Stay tuned for rotating features, behind-the-scenes glimpses, and future announcements from the studio.
                </p>
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
            <div className="basis-[30%] max-w-[30%] h-full flex flex-col justify-center items-center bg-black border-l border-white/10 px-8 py-10 space-y-8">
              <div className="w-full max-w-sm overflow-hidden">
                <img
                  src="/images/about.webp"
                  alt="Gallery Feature"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="w-full max-w-sm space-y-3 text-sm text-gray-300 leading-relaxed">
                <h3 className="text-2xl font-light tracking-wider text-white" style={{ fontFamily: "'Barrio', sans-serif" }}>
                  VISUAL STORIES
                </h3>
                <p>
                  Spotlight moments from recent shoots, showcasing the bold energy behind Bobba Skonz Productions. Larger frames highlight the latest work while the flow keeps every shot connected.
                </p>
                <p>
                  Stay tuned for rotating features, behind-the-scenes glimpses, and future announcements from the studio.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
