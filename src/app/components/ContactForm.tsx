// app/components/ContactForm.tsx

'use client';

import { useState, useRef } from 'react';
import { motion, Variants, useInView } from 'framer-motion';

// Animation variants
const contentVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, transition: { duration: 0.5, ease: "easeIn" } },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.15
    }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactForm() {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: false,
    amount: 0.15
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, service });

    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setName('');
    setEmail('');
    setService('');
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-r from-primary-light to-primary text-white"
    >
      <motion.div
        ref={ref}
        className="max-w-xl mx-auto px-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <motion.h2
          className="text-4xl font-serif font-bold mb-8 text-center"
          variants={itemVariants}
        >
          Book Your Experience
        </motion.h2>

        {submitted ? (
          <motion.div
            className="bg-white text-primary p-8 rounded-lg shadow-xl text-center"
            variants={itemVariants}
          >
            <p className="text-2xl font-semibold mb-4">Thank you for your booking!</p>
            <p className="text-lg">We will contact you soon to confirm the details.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-xl text-foreground"
            variants={itemVariants}
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-200"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all duration-200"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-gray-700 text-lg font-medium mb-2">Service of Interest</label>
              <select
                id="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 appearance-none bg-white pr-8 focus:ring-2 focus:ring-accent focus:border-transparent hover:cursor-pointer outline-none transition-all duration-200"
              >
                <option value="">Select one...</option>
                <option value="Therapeutic Massages">Therapeutic Massages</option>
                <option value="Facial Treatments">Facial Treatments</option>
                <option value="Integral Aromatherapy">Integral Aromatherapy</option>
                <option value="Wellness Packages">Wellness Packages</option>
                <option value="Body Contouring">Body Contouring</option>
                <option value="Weight Reduction">Weight Reduction</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-md cursor-pointer"
            >
              Send Booking
            </button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}