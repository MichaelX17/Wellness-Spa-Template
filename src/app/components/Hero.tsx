// app/components/Hero.tsx

'use client'; 

import Image from 'next/image';
// Importamos useInView y useRef
import { motion, Variants, useInView } from 'framer-motion'; 
import { useRef } from 'react'; 

// --- VARIANTS ---

// Variantes para el contenedor principal de texto
const textContainerVariants: Variants = {
  // Animación de salida (Fade-Out/Desplazamiento)
  hidden: { opacity: 0, x: -100, transition: { duration: 0.5, ease: "easeIn" } }, 
  // Animación de entrada
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.15, 
      delayChildren: 0.5 
    } 
  },
};

// Variantes para los elementos internos del texto
const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Variantes para la imagen de la chica
const imageVariants: Variants = {
  // Animación de salida (Fade-Out/Zoom-Out)
  hidden: { opacity: 0, x: 100, scale: 0.95, transition: { duration: 0.5, ease: "easeIn" } }, 
  // Animación de entrada
  visible: { 
    opacity: 1, 
    x: 0, 
    scale: 1,
    transition: {
      duration: 0.6, 
      ease: "easeOut",
      delay: 0 
    }
  },
};

// --- COMPONENTE ---

export default function Hero() {
  // 1. Hook and Ref setup
  const ref = useRef(null);
  const inView = useInView(ref, { 
    once: false,       // CLAVE: Permite la animación de entrada y salida repetida
    amount: 0.2        // La animación se dispara cuando el 20% del componente entra/sale
  });

  return (
    // SECCIÓN ESTÁTICA (sin motion) para mantener el fondo fijo
    <section 
      ref={ref} // <--- Adjuntamos la referencia para detectar la visibilidad
      className="relative w-full h-screen flex items-center pt-20 overflow-hidden"
    >
      
      {/* Fondo degradado estático */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple via-purple-light to-blue z-0"></div>

      {/* Imagen superpuesta ANIMADA */}
      <motion.div 
        className="absolute inset-0 z-10 flex justify-end items-center"
        initial="hidden" 
        animate={inView ? "visible" : "hidden"} // APLICAMOS LA LÓGICA BIDIRECCIONAL
        variants={imageVariants} 
      >
        <div className="relative w-full h-full md:w-3/5 lg:w-1/2">
          <Image
            src="/spa-hero.png" 
            alt="Mujer relajándose en un spa"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="opacity-90 md:opacity-100" 
          />
        </div>
      </motion.div>

      {/* Contenido de texto ANIMADO */}
      <motion.div 
        className="relative z-20 max-w-7xl mx-auto px-4 py-8 text-white md:w-1/2 lg:w-2/5 md:text-left text-center"
        initial="hidden" 
        animate={inView ? "visible" : "hidden"} // APLICAMOS LA LÓGICA BIDIRECCIONAL
        variants={textContainerVariants}
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-serif font-extrabold mb-4 leading-tight"
          variants={textItemVariants} 
        >
          BEAUTY, WEIGHT LOSS & PAIN THERAPY
        </motion.h1>
        <motion.p 
          className="text-2xl md:text-3xl font-semibold mb-6"
          variants={textItemVariants}
        >
          BODY SENSATION MEDSPA & WELLNESS
        </motion.p>
        <motion.p 
          className="text-lg md:text-xl mb-8 leading-relaxed"
          variants={textItemVariants}
        >
          Body Sensation Medspa de Miramar Florida se especializa en tratamientos no invasivos de contorno corporal, esculpido, reducción de celulitis, drenaje linfático, rejuvenecimiento de la piel y más.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block bg-accent px-8 py-4 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
          variants={textItemVariants}
        >
          Learn More
        </motion.a>
      </motion.div>
    </section>
  );
}