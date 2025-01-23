import type { Metadata as NextMetadata } from 'next'; // Import the Metadata type from Next.js
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/sections/Footer';
import ModeBtn from '@/components/sections/ModeBtn';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
  display: 'swap',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
  display: 'swap',
});

interface OGImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface OpenGraph {
  title: string;
  description: string;
  url: string;
  images: OGImage[]; // Ensure this is an array
}

// Extend the imported Metadata type if necessary
interface Metadata extends NextMetadata {
  openGraph?: OpenGraph; // This can be optional
}

export const metadata: Metadata = {
  title: 'Hybrid Battery Repair | San Leandro, San Francisco, Bay Area.',
  description:
    'Free Diagnostics, Quick Turnaround, Same-Day Appointments Serving Alameda, Oakland, Palo Alto, Fremont, Hayward, & Surrounding Cities.  Save Up To 50% vs Dealership Costs. Call 510-414-1929.',
    keywords: [
      'hybrid battery repair Bay Area',
      'hybrid battery replacement San Leandro',
      'electric vehicle service Oakland',
      'EV battery maintenance San Francisco',
      'hybrid battery fix Union City', 
      'Prius hybrid battery repair Fremont',
      'hybrid battery service San Jose',
      'EV battery repair Hayward',
      'hybrid battery maintenance Santa Clara',
      'electric vehicle battery replacement Milpitas',
      'Prius battery repair Dublin',
      'hybrid battery diagnostics Pleasanton'
    ],    
  authors: [{ name: 'Hybrid Battery Solutions' }],
  openGraph: {
    title: 'Expert Hybrid Battery Repair Services',
    description:
      "Expert hybrid battery repair in the Bay Area. Free diagnostics, mobile service, 50% savings vs dealerships. Same-day appointments in SF, SJ, Fremont, surrounding cities. Full repairs, inverter replacement, error fixes. Warranty-backed for all models.",
    url: 'https://www.hybridbatterysolution.com', // Update with your actual URL
    images: [
      {
        url: 'https://www.hybridbatterysolution.com/SocialWebsitesOpenGraph.png',
        width: 1200,
        height: 630,
        alt: 'Hybrid Battery Repair Services',
      },
    ], // Update with your actual image path
  },
  icons: {
    icon: '/favicon.ico',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="hybrid battery repair, hybrid battery replacement, electric vehicle service, EV battery maintenance"
        />
        <link rel="icon" href="/favicon.ico"></link>

        {/* Open Graph Metadata with Safe Access */}
        <meta property="og:title" content={metadata.openGraph?.title || ''} />
        <meta
          property="og:description"
          content={metadata.openGraph?.description || ''}
        />
        <meta property="og:url" content={metadata.openGraph?.url || ''} />

        {/* Safely access the first image */}
        <meta
          property="og:image"
          content={metadata.openGraph?.images?.[0]?.url || ''}
        />
        <meta
          property="og:image:width"
          content={metadata.openGraph?.images?.[0]?.width?.toString() || ''}
        />
        <meta
          property="og:image:height"
          content={metadata.openGraph?.images?.[0]?.height?.toString() || ''}
        />
        <meta
          property="og:image:alt"
          content={metadata.openGraph?.images?.[0]?.alt || ''}
        />
      </Head>
      <body
        id="hero"
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
      >
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoRepair',
              name: 'Hybrid Battery Solutions',
              description:
                'Specialized hybrid battery repair and replacement services. Expert technicians, competitive pricing, and warranty-backed services for all models including Toyota Prius, Camry, Nissan, Lexus & GMC. Free diagnostics, quick turnaround, and 24/7 mobile service available. Save up to 50% vs. dealership costs. Visit website for list of all services offered. Call now for same-day appointments!',
              url: 'https://www.hybridbatterysolution.com',
              telephone: '+1-510-414-1929',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '1366 Doolittle Drive',
                addressLocality: 'San Leandro',
                addressRegion: 'California',
                postalCode: '94577',
                addressCountry: 'US',
              },
              areaServed: [
                'Oakland',
                'San Francisco',
                'Hayward',
                'Fremont',
                'Berkeley',
                'Richmond',
                'Concord',
                'Vallejo',
                'Antioch',
                'Fairfield',
                'Santa Clara',
                'San Jose',
                'Sunnyvale',
                'Daly City',
                'Vacaville',
                'San Mateo',
                'Tracy',
                'Livermore',
                'Napa',
                'Redwood City',
                'Alameda',
                'Union City',
                'Mountain View',
                'Pleasanton',
                'Walnut Creek',
                'Pittsburg',
                'Castro Valley',
                'Milpitas',
                'South San Francisco',
                'Santa Rosa',
                'Stockton',
                'Sacramento', 
                'California'
              ],
              serviceType: [
                'Hybrid Battery Repair',
                'Hybrid Battery fix',
                'Cheap Hybrid Battery Repair',
                'Toyota Prius Hybrid Battery Repair',
                'Toyota Camry Hybrid Battery Repair',
                'Nissan Altima Hybrid Battery Repair',
                'Lexus Hybrid Battery Repair',
                'GMC Hybrid Battery Repair',
                'Hyundai Hybrid Battery Repair',
                'Hybrid Battery Replacement',
                'Electric Vehicle Maintenance',
                'Hybrid Inverter Repair',
                'Hybrid Battery Recycling',
              ],
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ModeBtn />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
