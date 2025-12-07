import Navigation from './components/Navigation';
import AudioPlayer from './components/AudioPlayer';
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

      {/* Horizontal Scrolling Container */}
      <div id="scroll-container" className="flex h-screen overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scroll-smooth">

        {/* Home Section */}
        <section id="home" className="w-screen h-screen snap-start flex-shrink-0 flex">
          {/* Hero Background Image - Left Side (70%) */}
          <div className="w-[70vw] h-full flex items-center justify-center bg-black flex-shrink-0">
            <img
              src="/images/hero.webp"
              alt="Hero"
              className="h-full object-contain"
            />
          </div>

          {/* Right Side - Black Background with Title (30%) */}
          <div className="w-[30vw] h-full flex flex-col justify-center bg-black px-6 lg:px-8 flex-shrink-0">
            <div>
              <h1 className="font-light tracking-wider text-white leading-tight">
                <span className="text-4xl md:text-5xl lg:text-6xl block" style={{ fontFamily: "'Barrio', sans-serif" }}>BOBBA SKONZ</span>
                <span className="text-xl md:text-2xl lg:text-3xl block mt-2">PRODUCTIONS</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="w-screen h-screen snap-start flex-shrink-0 flex flex-col">
          {/* Music Image - Top 2/3 */}
          <div className="w-full h-2/3 overflow-hidden bg-black">
            <img
              src="/images/music.webp"
              alt="Music"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bottom 1/3 - Audio Player */}
          <div className="w-full h-1/3 flex flex-col md:flex-row items-center justify-between bg-black px-8 lg:px-16 gap-8">
            <div className="text-center md:text-left">
              <h2 className="font-light tracking-wider text-white text-2xl md:text-3xl" style={{ fontFamily: "'Barrio', sans-serif" }}>
                CURRENT MIX
              </h2>
              <p className="mt-3 text-sm text-gray-300 max-w-md">
                Press play to experience the latest cut straight from the studio.
              </p>
            </div>
            <AudioPlayer audioSrc="/audio/LANDR-warps mixed2-Balanced-Medium-REV_V2.m4a" />
          </div>
        </section>

        {/* Photography Section */}
        <section id="photography" className="w-screen h-screen snap-start flex-shrink-0 bg-black">
          <div className="flex h-full flex-col md:flex-row">
            <div className="md:basis-[70%] md:max-w-[70%] h-full overflow-hidden">
              <div className="h-full overflow-hidden pt-12 pb-12">
                <GalleryMasonry images={galleryImages} />
              </div>
            </div>

            <div className="md:basis-[30%] md:max-w-[30%] h-full flex flex-col justify-center items-center bg-black border-t border-white/10 md:border-t-0 md:border-l md:border-white/10 px-8 py-10 space-y-8">
              <div className="w-full max-w-sm overflow-hidden">
                <img
                  src="/images/about.webp"
                  alt="Gallery Feature"
                  className="w-full object-cover"
                />
              </div>
              <div className="w-full max-w-sm space-y-4 text-sm text-gray-300 leading-relaxed">
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
