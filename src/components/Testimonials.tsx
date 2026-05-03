import { Star, MessageSquareQuote } from 'lucide-react';
import { motion } from 'motion/react';

const reviews = [
  {
    name: "Michael R.",
    location: "Sunterra, Chandler",
    text: "Absolutely incredible service. I didn't think my Tesla's paint could look this good. The mobile aspect is so convenient for my busy schedule.",
    rating: 5
  },
  {
    name: "Sarah J.",
    location: "Ocotillo, Chandler",
    text: "Best detailing company in the valley. They did a full interior deep clean on my SUV and it looks brand new. Highly recommended!",
    rating: 5
  },
  {
    name: "David L.",
    location: "Chandler Heights",
    text: "Great experience from start to finish. The Ceramic Pro package was worth every penny. Water just beads right off now.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-brand-slate overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
          <div>
            <div className="text-brand-blue font-bold tracking-[0.2em] text-xs uppercase mb-4">Social Proof</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold">TRUSTED BY <span className="text-brand-blue">CHANDLER</span> RESIDENTS</h2>
          </div>
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
             <div className="flex text-yellow-500">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
             </div>
             <span className="font-bold text-xl">5.0</span>
             <span className="text-sm text-white/50">200+ Reviews</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative"
            >
              <div className="flex text-yellow-500 mb-6">
                 {[...Array(review.rating)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-white/80 italic mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-full flex items-center justify-center font-bold text-brand-blue">
                   {review.name[0]}
                </div>
                <div>
                   <h4 className="font-bold text-sm">{review.name}</h4>
                   <p className="text-[10px] uppercase tracking-wider text-white/40">{review.location}</p>
                </div>
              </div>
              <MessageSquareQuote size={60} className="absolute top-4 right-4 text-white/[0.03] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
