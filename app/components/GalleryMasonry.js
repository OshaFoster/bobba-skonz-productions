'use client';

export default function GalleryMasonry({ images = [] }) {
  const columns = 3;
  const rows = Math.max(1, Math.ceil(images.length / columns));
  const gridStyle = {
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
  };

  return (
    <div className="h-full w-full overflow-hidden">
      <div className="grid h-full w-full gap-2" style={gridStyle}>
        {images.map(({ src, alt }) => (
          <div
            key={src}
            className="flex items-center justify-center overflow-hidden bg-black"
          >
            <img
              src={src}
              alt={alt}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
