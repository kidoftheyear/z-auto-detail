import { Phone, ArrowRight, ShieldCheck, MapPin, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-slate via-brand-slate/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2600&auto=format&fit=crop" 
          alt="Luxury car showcase"
          className="w-full h-full object-cover grayscale-[0.2]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-6 text-brand-blue font-bold uppercase tracking-widest text-xs">
            <MapPin size={14} />
            Chandler, Arizona & Surrounding Areas
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight mb-6">
            CHANDLER’S <br />
            <span className="text-brand-blue">TOP-RATED</span> <br />
            MOBILE DETAILING
          </h1>
          
          <p className="text-xl text-white/70 max-w-lg mb-10 leading-relaxed">
            Showroom results delivered to your driveway. We specialize in Ceramic Coatings, Paint Correction, and Interior Restoration.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="tel:6029351747"
              className="group bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              <Phone size={20} />
              BOOK A DETAIL
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
            >
              VIEW SERVICES
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
            <div className="flex items-center gap-2">
              <ShieldCheck size={20} className="text-brand-blue" />
              <span className="text-xs font-bold uppercase tracking-wider tabular-nums">Ceramic Pro Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider">5.0 Rating</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Card for Mobile Desktop Balance */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="hidden lg:block relative"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[32px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 blur-[60px]" />
            <h3 className="font-display text-2xl font-bold mb-6">Expert Service</h3>
            <ul className="space-y-4">
              {[
                'Mobile Service (We come to you)',
                'Ceramic Coating Specialist',
                'Interior Steam Cleaning',
                'Paint Correction & Swirl Removal',
                'Odor Neutralization'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                   <div className="mt-1 w-5 h-5 bg-brand-blue/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <ShieldCheck size={12} className="text-brand-blue" />
                   </div>
                   <span className="text-white/80 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-8 border-t border-white/10">
               <div className="text-3xl font-display font-bold text-brand-blue">$50 OFF</div>
               <div className="text-sm text-white/50">on your first Ceramic Pro package</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-brand-slate to-transparent z-20" />
    </section>
  );
}
