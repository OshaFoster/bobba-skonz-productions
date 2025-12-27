'use client';

import { useEffect, useMemo, useState } from 'react';

const NAV_SECTIONS = ['home', 'sound', 'visuals', 'media'];
const OBSERVE_SECTIONS = [...NAV_SECTIONS];
const NAV_LABELS = {
  home: 'HOME',
  sound: 'SOUND',
  visuals: 'VISUALS',
  media: 'MEDIA'
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const root = document.getElementById('scroll-container');
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root,
        threshold: 0.6,
      }
    );

    OBSERVE_SECTIONS.forEach((id) => {
      const sectionEl = document.getElementById(id);
      if (sectionEl) observer.observe(sectionEl);
    });

    return () => observer.disconnect();
  }, []);

  const linkClasses = useMemo(() => {
    const shared = 'transition-all tracking-[0.25em]';
    return {
      base: shared,
      active: 'text-white text-base',
      inactive: 'text-gray-500 text-sm hover:text-gray-300',
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm" style={{ paddingTop: 'var(--safe-area-inset-top)' }}>
      <div className="max-w-[1600px] mx-auto w-full flex items-center justify-between py-6 md:px-0 md:py-6 border-l border-r border-white/15" style={{ paddingLeft: 'var(--safe-area-inset-left)', paddingRight: 'var(--safe-area-inset-right)' }}>
        {/* Logo/Brand */}
        <div className="pl-6 md:pl-0 md:ml-[50px]">
          <h1 className="font-light tracking-wider text-white">
            <span className="text-base md:text-lg lg:text-xl" style={{ fontFamily: "'Barrio', sans-serif" }}>bobbaSkonz productions</span>
          </h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 pr-6"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 mr-[50px]">
          {NAV_SECTIONS.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`${linkClasses.base} ${
                activeSection === section ? linkClasses.active : linkClasses.inactive
              }`}
            >
              {NAV_LABELS[section]}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-left transition-all tracking-[0.2em] ${
                  activeSection === section ? 'text-white text-base' : 'text-gray-500 text-sm hover:text-gray-300'
                }`}
              >
                {NAV_LABELS[section]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
