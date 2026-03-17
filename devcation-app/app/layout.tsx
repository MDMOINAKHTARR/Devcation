import type { Metadata } from 'next';
import './globals.css';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import DevBot from './components/DevBot';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: "Devcation Delhi 2026 — Hack 'N' Solve | GDG IIT Delhi × GDG IGDTUW",
  description:
    "Join Devcation Delhi 2026 — flagship hackathon by GDG IIT Delhi × GDG IGDTUW. ₹1,50,000 in prizes, 4 tracks, Grand Finale at IIT Delhi on April 12, 2026. Register now!",
  keywords: ['hackathon', 'IIT Delhi', 'GDG', 'IGDTUW', 'Devcation', '2026', 'TigerGraph'],
  openGraph: {
    title: "Devcation Delhi 2026 — Hack 'N' Solve",
    description: "₹1,50,000 · 4 Tracks · GDG IIT Delhi × GDG IGDTUW · Grand Finale Apr 12, 2026",
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <DevBot />
      </body>
    </html>
  );
}
