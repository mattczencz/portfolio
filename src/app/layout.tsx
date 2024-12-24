import type { Metadata } from 'next';
import './globals.css';
import { SanityLive } from '@/sanity/live';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Matt Czencz - Portfolio',
  description: `Matt Czencz's Full Stack Engineer Portfolio. View his work and enjoy!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />

        <SanityLive />
      </body>
    </html>
  );
}
