import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';

export default function ComparisonSlider() {
  const [percent, setPercent] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e 
      ? (e as unknown as TouchEvent).touches[0].clientX - rect.left 
      : (e as unknown as MouseEvent).clientX - rect.left;
    
    const newPercent = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setPercent(newPercent);
  };

  return (
    <section className="py-24 bg-brand-slate/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              SEE THE <span className="text-brand-blue">DIFFERENCE</span>
            </h2>
            <p className="text-white/60 mb-8 text-lg">
              Our professional paint correction and interior restoration processes turn back the clock on your vehicle. Slide the handle to see a real-world transformation.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full border border-brand-blue/30 flex items-center justify-center font-display font-bold text-brand-blue">01</div>
                <div>
                  <h4 className="font-bold">Decontamination</h4>
                  <p className="text-sm text-white/50">Removing iron particles and road grime.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full border border-brand-blue/30 flex items-center justify-center font-display font-bold text-brand-blue">02</div>
                <div>
                  <h4 className="font-bold">Paint Correction</h4>
                  <p className="text-sm text-white/50">Removing 90%+ of swirls and scratches.</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full border border-brand-blue/30 flex items-center justify-center font-display font-bold text-brand-blue">03</div>
                <div>
                  <h4 className="font-bold">Surface Sealed</h4>
                  <p className="text-sm text-white/50">Locking in the shine with ceramic coating.</p>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={containerRef}
            className="relative aspect-[4/3] rounded-[32px] overflow-hidden cursor-ew-resize shadow-2xl border border-white/10"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
               <img 
                 src="https://images.unsplash.com/photo-1599256872237-5dcc0fbe9638?q=80&w=2600&auto=format&fit=crop" 
                 alt="After Detailing"
                 className="w-full h-full object-cover"
               />
               <div className="absolute top-4 right-4 bg-brand-blue/80 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded text-white uppercase tracking-widest">After</div>
            </div>

            {/* Before Image (Foreground) */}
            <div 
              className="absolute inset-0 z-10"
              style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
            >
              <img 
                 src="https://images.unsplash.com/photo-1552933078-433e8b4618e7?q=80&w=2600&auto=format&fit=crop" 
                 alt="Before Detailing"
                 className="w-full h-full object-cover grayscale-[0.3]"
              />
              <div className="absolute top-4 left-4 bg-brand-slate/80 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded text-white uppercase tracking-widest">Before</div>
            </div>

            {/* Handle */}
            <div 
              className="absolute top-0 bottom-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]"
              style={{ left: `${percent}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="flex gap-1">
                  <div className="w-1 h-3 bg-brand-slate/50 rounded-full" />
                  <div className="w-1 h-3 bg-brand-slate/50 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
