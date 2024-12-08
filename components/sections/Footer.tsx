/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-radial from-gray-800 via-gray-900 to-black text-white py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
      <div className="relative z-10 md:container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gradient">Hybrid Battery Solutions</h3>
            <p className="text-sm text-gray-300">
              Revitalize your hybrid vehicle's performance with our expert battery repair and reconditioning services. We extend battery life, enhance efficiency, and save you money.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="#hero" className="hover:text-gray-300 transition duration-300">
                  Back To Top of Page
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-300 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gray-300 transition duration-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#vehicles" className="hover:text-gray-300 transition duration-300">
                  Makes & Models
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-gray-300 transition duration-300">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 mb-2">1366 Doolittle Dr, San Leandro, CA 94577</p>
            <p className="text-sm text-gray-300 mb-2">Email: HybridBatterySolutions@mail.com</p>
            <p className="text-sm text-gray-300">Phone: +1 510 414 1929</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us <span className='text-sm'>(comming soon)</span></h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <IconBrandFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <IconBrandTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <IconBrandInstagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition duration-300">
                <IconBrandLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center text-gray-400">
          © {new Date().getFullYear()} Hybrid Battery Solutions. All rights reserved. Developed By: Ajmal Karimi
        </div>
      </div>
    </footer>
  );
};

export default Footer;