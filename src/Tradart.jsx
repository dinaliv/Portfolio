import pencil from './assets/pencil.png'
import acrylic from './assets/acrylic.png'
import watercolor from './assets/watercolor.png'

export default function TradArt() {
  
  const artworks = [
    { 
      id: 1, 
      img: pencil, 
      title: "Still Life Composition", 
      medium: "Graphite Pencils" 
    },
    { 
      id: 2, 
      img: acrylic, 
      title: "Copy of Hammerfest. The Arctic Lights", 
      medium: "Acrylic" 
    },
    { 
      id: 3, 
      img: watercolor, 
      title: "Samovar Study", 
      medium: "Watercolor" 
    },
  ]

  return (
    <section id="traditional-art" className="w-full py-10">
      <h2 className="font-display text-3xl text-center mb-12">Traditional Art</h2>
      
      {/* Grid Layout: 1 column on mobile, 3 columns on medium screens and up */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {artworks.map((art) => (
          <div key={art.id} className="flex flex-col gap-3 group cursor-pointer">
            <div className="overflow-hidden rounded-sm shadow-md">
              <img 
                src={art.img} 
                alt={art.title}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-lg font-medium">{art.title}</h3>
              <p className="font-sans text-sm text-neutral-500">{art.medium}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}