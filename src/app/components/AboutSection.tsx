// app/components/AboutSection.tsx

'use client';

import { motion, Variants, useInView } from 'framer-motion'; 
import { useRef } from 'react'; 

// Animation variants
const sectionVariants: Variants = { 
  hidden: { opacity: 0, scale: 0.9, transition: { duration: 0.6, ease: "easeIn" } }, 
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1 // Stagger children appearance
    } 
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once: false,       // Allow animation to trigger every time
    amount: 0.2        // Trigger when 20% of component is visible
  });
  
  const benefits = [
    { title: 'Body Contour Sculpting', desc: 'Treatments to shape your figure.' },
    { title: 'Weight Loss Services', desc: 'Personalized weight loss programs.' },
    { title: 'Fat Reduction', desc: 'Effective methods to reduce localized fat.' },
    { title: 'Weight Retention', desc: 'Strategies to maintain your ideal weight.' },
  ];

  return (
    <motion.section 
        ref={ref}
        id="about" 
        className="py-16 md:py-24 bg-lightgray text-foreground"
        initial="hidden"       
        animate={inView ? "visible" : "hidden"} 
        variants={sectionVariants} 
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* About Us Column */}
        <motion.div 
            className="text-center md:text-left" 
            variants={itemVariants}
        >
          <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">ABOUT US</h2>
          <p className="text-lg leading-relaxed mb-4">
            Body Sensation Medspa is the most complete center in Miramar Florida, offering cutting-edge services in aesthetics and wellness. We are dedicated to providing exceptional results with a focus on client satisfaction and comfort.
          </p>
          <p className="text-lg leading-relaxed">
            Our team of highly trained specialists uses advanced technology and the latest techniques to help you achieve your beauty and wellness goals.
          </p>
        </motion.div>

        {/* Benefits/Services Highlights Column */}
        <div>
          <motion.h2 
            className="text-4xl font-serif font-bold text-gray-800 mb-6 text-center md:text-left"
            variants={itemVariants}
          >
            WEIGHT LOSS SERVICES BENEFITS
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="flex items-start space-x-3"
                variants={itemVariants} 
              >
                <svg className="w-6 h-6 text-accent flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}