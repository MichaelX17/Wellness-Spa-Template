import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary-dark to-primary-light text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-serif font-bold">
          <Link href="/" className="hover:text-gray-200 transition-colors">
            SPA
          </Link>
        </div>
        <nav className="space-x-8 hidden md:block">
          <Link href="/" className="hover:text-gray-200 transition-colors text-lg">
            HOME
          </Link>
          <Link href="#services" className="hover:text-gray-200 transition-colors text-lg">
            SERVICES
          </Link>
          <Link href="#about" className="hover:text-gray-200 transition-colors text-lg">
            ABOUT
          </Link>
          <Link href="#contact" className="hover:text-gray-200 transition-colors text-lg">
            CONTACT
          </Link>
          {/* El segundo CONTACT en la imagen podría ser un botón o una reserva, lo dejo como enlace por ahora */}
          <Link href="#contact" className="hover:text-gray-200 transition-colors text-lg">
            CONTACT
          </Link>
        </nav>
        {/* Aquí podrías añadir un botón de menú para móviles */}
      </div>
    </header>
  );
}