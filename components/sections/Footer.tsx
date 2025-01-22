/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandInstagram,
} from '@tabler/icons-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-radial from-gray-800 via-gray-900 to-black  text-white xs:pb-12 xs:pt-0 py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-50 bg-black"></div>
      <div className="relative z-10 md:container mx-auto px-4 xs:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-[1440px] mx-auto">
          {/* Company Info */}
          <div>
            <div className="flex flex-row gap-3 items-center xs:py-3 xs:px-4">
              <picture>
                <source
                  media="(min-width: 639px)"
                  srcSet="/HybridBatterySolutionsLogo2.png"
                />
                <Image
                  src={'/HybridBatterySolutionsLogo2.png'}
                  width={128}
                  height={128}
                  alt="companylogo"
                  className="pb-3 xs:block flex-1"
                />
              </picture>
              <h1 className="text-2xl font-bold block text-left md:text-sm lg:text-xl xl:text-xl 2xl:text-2xl  break-words text-wrap  xs:font-bold bg-clip-text text-transparent text-gradient flex-1 ">
                Hybrid Battery Solutions
              </h1>
            </div>

            <p className="text-sm text-gray-300 xs:px-4">
              Revitalize your hybrid vehicle's performance with our expert
              battery repair and reconditioning services. We extend battery
              life, enhance efficiency, and save you money.
            </p>
          </div>

          {/* Quick Links */}
          <div className="xs:px-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="#hero"
                  className="hover:text-gradient transition duration-300"
                >
                  Back To Top of Page
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="hover:text-gradient transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="hover:text-gradient transition duration-300"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="#vehicles"
                  className="hover:text-gradient transition duration-300"
                >
                  Makes & Models
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="hover:text-gradient transition duration-300"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="xs:px-4">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-sm text-gray-300 mb-2">
                1366 Doolittle Dr, San Leandro, CA., 94577
              </p>
              {/* <p className="text-sm text-gray-300 mb-2">Email: HybridBatterySolutions@mail.com</p> */}
              <a
                href="tel:5104141929"
                className="text-sm text-gray-300 hover:text-gradient block"
              >
                Phone: 510-414-1929
              </a>
              <a
                href="tel:5104141929"
                className="text-sm text-gray-300 hover:text-gradient block"
              >
                WhatsApp: 510-414-1929
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="xs:px-4">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/hybrid.batter.solutions?mibextid=ZbWKwL"
                className="text-[#1877F2] transition duration-300"
              >
                <IconBrandFacebook size={30} />
              </a>

              <a
                href="https://www.instagram.com/hybrid.battery.solutions/profilecard/?igsh=MTc4MmM1YmI2Ng=="
                className="text-[#C13584] transition duration-300"
              >
                <IconBrandInstagram size={30} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-center text-gradient xs:px-4">
          © {new Date().getFullYear()} Hybrid Battery Solutions{' '}
          <span className="border border-[#03F804]  mr-2 ml-1"></span>All Rights
          Reserved
        </div>
        <div className="text-xs text-center text-gray-500 mt-2">
          For website development inquiries, please contact |
          <a
            href="mailto:ryoshi16421@proton.me"
            className="hover:underline ml-1"
            target='_blank'
          >
            Email Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
