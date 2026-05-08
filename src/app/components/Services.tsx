// app/components/Services.tsx

'use client';

import { motion, Variants, useInView } from 'framer-motion'; 
import { useRef } from 'react'; 

// Animation variants
const sectionVariants: Variants = { 
  hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.5, ease: "easeIn" } }, 
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1 // Delay between child elements
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 }, // Animate from bottom with scale
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once: false,       // Allow both enter and exit animations
    amount: 0.15       // Trigger when 15% of component is visible
  });
  
  const services = [
    { name: 'Therapeutic Massages', desc: 'Relieve tension and promote deep relaxation with our personalized massages.' },
    { name: 'Facial Treatments', desc: 'Rejuvenate your skin and enhance your natural beauty with our expert facial treatments.' },
    { name: 'Integral Aromatherapy', desc: 'Experience the healing benefits of essential oils with our aromatherapy sessions.' },
    { name: 'Wellness Packages', desc: 'Enjoy a complete day of pampering and exclusive treatments to renew body and mind.' },
    { name: 'Body Contouring', desc: 'Shape and tone your figure with our advanced body contouring solutions.' },
    { name: 'Weight Reduction', desc: 'Specialized programs to help you achieve your weight goals in a healthy way.' },
  ];

  return (
    <motion.section 
      ref={ref}
      id="services" 
      className="py-16 md:py-24 bg-background text-foreground"
      initial="hidden"       
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants} 
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-12 text-center">
          Our Exclusive Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {services.map((s) => (
            <motion.div 
              key={s.name} 
              className="p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-purple-100 to-white transform hover:-translate-y-1"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3">{s.name}</h3>
              <p className="text-gray-700 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}