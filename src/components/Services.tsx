import { Check, Sparkles, Shield, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

const tiers = [
  {
    name: 'Express Refresh',
    description: 'Perfect for regular maintenance and keeping that new car feel.',
    price: 'Starting at $149',
    icon: <Sparkles className="text-brand-blue" />,
    features: [
      'Foam Cannon Exterior Wash',
      'Wheel & Tire Cleaning/Shine',
      'Interior Vacuum & Blowout',
      'Wipe Down All Surfaces',
      'Window Cleaning (Interior/Exterior)',
      'High-Gloss Spray Sealant'
    ]
  },
  {
    name: 'The Chandler Standard',
    tag: 'MOST POPULAR',
    description: 'Deep decontamination and interior restoration for daily drivers.',
    price: 'Starting at $299',
    icon: <Rocket className="text-brand-blue" />,
    features: [
      'Chemical Paint Decontamination',
      'Clay Bar Treatment',
      'Interior Steam Cleaning',
      'Leather Conditioning',
      'Engine Bay Detailing',
      '6-Month Paint Protection'
    ]
  },
  {
    name: 'Ceramic Pro',
    description: 'Ultimate protection and shine with industry-leading technology.',
    price: 'Call for Quote',
    icon: <Shield className="text-brand-blue" />,
    features: [
      'Multi-Stage Paint Correction',
      'High-Solid Nano Ceramic Coating',
      'Full Interior Ceramic Shield',
      'Wheel Surface Coating',
      'Glass & Trim Hydrophobic Layer',
      'Lifetime Warranty Options'
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-slate relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-6xl font-bold mb-4"
          >
            PREMIUM <span className="text-brand-blue">SERVICE TIERS</span>
          </motion.h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose the level of care your vehicle deserves. From maintenance washes to multi-year protection, we deliver perfection.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group bg-white/5 border ${tier.tag ? 'border-brand-blue/50' : 'border-white/10'} p-8 rounded-3xl hover:bg-white/[0.08] transition-all hover:translate-y-[-8px]`}
            >
              {tier.tag && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-brand-blue text-white text-[10px] font-black px-3 py-1 rounded-full tracking-wider">
                  {tier.tag}
                </div>
              )}
              
              <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-6">
                {tier.icon}
              </div>

              <h3 className="font-display text-2xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">
                {tier.description}
              </p>
              
              <div className="text-2xl font-bold text-white mb-8">
                {tier.price}
              </div>

              <ul className="space-y-4 mb-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                    <Check size={16} className="text-brand-blue mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="#quote"
                className={`w-full py-4 rounded-xl font-bold text-center transition-all flex items-center justify-center gap-2 ${
                  tier.tag 
                    ? 'bg-brand-blue text-white shadow-lg shadow-brand-blue/20' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                SELECT PACKAGE
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
