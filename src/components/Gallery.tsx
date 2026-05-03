import { motion } from 'motion/react';

const images = [
  {
    url: "/images/porsche-wash.jpg",
    title: "Signature Foam Wash",
    category: "Exterior"
  },
  {
    url: "/images/polishing-process.jpg",
    title: "Paint Correction",
    category: "Correction"
  },
  {
    url: "/images/mercedes-interior.jpg",
    title: "Interior Restoration",
    category: "Interior"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/5 bg-white/5"
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
