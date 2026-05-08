import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0">
        {/* Copyright Information */}
        <div className="flex-shrink-0">
          <p className="text-lg">© {new Date().getFullYear()} SPA Name. All rights reserved.</p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-6 text-2xl">
          <Link href="#" className="hover:text-white transition-colors">
            <FaInstagram />
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            <FaFacebookF />
          </Link>
        </div>

        {/* Contact Information */}
        <div className="space-y-2">
          <p className="flex items-center justify-center md:justify-start text-lg">
            <FaMapMarkerAlt className="mr-3 text-accent" /> Example Street 123, City
          </p>
          <p className="flex items-center justify-center md:justify-start text-lg">
            <FaPhoneAlt className="mr-3 text-accent" /> +xx xxx xxx xxx
          </p>
        </div>
      </div>
    </footer>
  );
}