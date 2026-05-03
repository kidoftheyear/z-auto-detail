import { motion } from 'motion/react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=2600&auto=format&fit=crop",
    title: "Elite Ceramic Coating",
    category: "Protection"
  },
  {
    url: "/images/bmw-foam-wash.jpg",
    title: "Signature Foam Wash",
    category: "Exterior"
  },
  {
    url: "/images/porsche-wash.jpg",
    title: "Precision Cleaning",
    category: "Restoration"
  },
  {
    url: "/images/polishing-process.jpg",
    title: "Paint Correction",
    category: "Correction"
  },
  {
    url: "/images/car-side-reflection.jpg",
    title: "Mirror Reflection",
    category: "Protection"
  },
  {
    url: "/images/car-roof-gloss.jpg",
    title: "Signature Finish",
    category: "Showroom"
  },
  {
    url: "https://images.unsplash.com/photo-1621905252507-b35222cdadff?q=80&w=2600&auto=format&fit=crop",
    title: "Interior Restoration",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2600&auto=format&fit=crop",
    title: "Showroom Transformation",
    category: "Showroom"
  },
  {
    url: "https://images.unsplash.com/photo-1599256872237-5dcc0fbe9638?q=80&w=2600&auto=format&fit=crop",
    title: "Elite Nano Protection",
    category: "Protection"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-slate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <div className="text-brand-blue font-bold tracking-[0.2em] text-xs uppercase mb-4">Our Work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold">PORTFOLIO OF <span className="text-brand-blue">PRECISION</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-square rounded-[32px] overflow-hidden border border-white/5 bg-white/5"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-slate via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                 <p className="text-brand-blue text-[10px] font-black uppercase tracking-widest mb-1">{img.category}</p>
                 <h4 className="text-xl font-display font-bold">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
