import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function ContactForm() {
  return (
    <section id="quote" className="py-24 bg-brand-slate">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="bg-brand-blue/5 border border-white/5 rounded-[48px] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* Form Section */}
            <div className="p-8 md:p-16">
              <h2 className="font-display text-4xl font-bold mb-4">REQUEST A <span className="text-brand-blue">QUOTE</span></h2>
              <p className="text-white/50 mb-10">Send us your details and we'll get back to you with a custom quote within 24 hours.</p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue/50 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(602) 000-0000"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Vehicle Type</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Tesla Model 3, Ford F-150"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue/50 focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message / Package</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us what you're looking for..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-brand-blue/50 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,99,235,0.2)]"
                >
                  <Send size={18} />
                  SEND REQUEST
                </button>
              </form>
            </div>

            {/* Info Section */}
            <div className="relative p-8 md:p-16 bg-white/5 border-l border-white/5 flex flex-col justify-between">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/20 rounded-full animate-pulse" />
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-bold mb-8 uppercase tracking-tight">Contact Info</h3>
                <div className="space-y-8">
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                         <Phone className="text-brand-blue" />
                      </div>
                      <div>
                         <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Call / Text</p>
                         <p className="text-xl font-bold">602-935-1747</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                         <Mail className="text-brand-blue" />
                      </div>
                      <div>
                         <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Email</p>
                         <p className="text-xl font-bold">info@zautodetails.com</p>
                      </div>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center flex-shrink-0">
                         <MapPin className="text-brand-blue" />
                      </div>
                      <div>
                         <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-1">Service Area</p>
                         <p className="text-xl font-bold text-white">Chandler, AZ & Surrounding</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-white/5 relative z-10">
                 {/* Map Placeholder */}
                 <div className="w-full h-48 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden relative">
                    <img 
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2600&auto=format&fit=crop" 
                      className="w-full h-full object-cover opacity-30 grayscale"
                      alt="Chandler Map"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                       <MapPin className="text-brand-blue mb-2" size={32} />
                       <p className="text-xs font-bold uppercase tracking-widest">Mobile Services in<br />Chandler, Arizona</p>
                    </div>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-slate py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center font-display font-bold text-lg skew-x-[-12deg]">Z</div>
          <span className="font-display font-bold text-lg tracking-tight">AUTO DETAILS</span>
        </div>
        
        <p className="text-white/30 text-xs tracking-wider uppercase font-medium order-3 md:order-2">
          © {new Date().getFullYear()} Z Auto Details. All Rights Reserved.
        </p>

        <div className="flex items-center gap-6 order-2 md:order-3">
           <a href="#" className="hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
           <a href="#" className="hover:text-brand-blue transition-colors"><Facebook size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
