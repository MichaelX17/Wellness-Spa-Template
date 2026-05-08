// app/components/Testimonials.tsx

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
      staggerChildren: 0.15 // Slightly more delay between testimonials
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Animate from bottom
  visible: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once: false,       // Allow both enter and exit animations
    amount: 0.2        // Trigger when 20% of component is visible
  });

  const reviews = [
    { name: 'Ana M.', text: 'The best spa I have visited. The massage was a divine experience, and the staff was very attentive. Absolutely recommended!' },
    { name: 'Carlos R.', text: 'An oasis of peace in the city. I left renewed after my facial treatment. The atmosphere is incredibly relaxing.' },
    { name: 'Sofía P.', text: 'I am impressed with the results of my body contouring treatment. They exceeded my expectations. Thank you, Body Sensation Medspa!' },
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-16 md:py-24 bg-background text-foreground"
      initial="hidden"       
      animate={inView ? "visible" : "hidden"}
      variants={sectionVariants} 
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-gray-800 mb-12 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <motion.blockquote 
              key={r.name} 
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between"
              variants={itemVariants}
            >
              <p className="text-lg text-gray-700 mb-6 italic">"{r.text}"</p>
              <footer className="font-semibold text-accent text-right text-xl">— {r.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </motion.section>
  );
}