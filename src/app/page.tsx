import Header from './components/Header'; // Importa el nuevo Header
import Hero from './components/Hero';
import AboutSection from './components/AboutSection'; // Usamos el AboutSection combinado
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Incluye el header aquí */}
      <main> {/* Envuelve las secciones en un main semántico */}
        <Hero />
        <AboutSection /> {/* Usamos el AboutSection aquí */}
        <Services />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}