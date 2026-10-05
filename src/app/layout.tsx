import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { profile } from '@/lib/profile';

/**
 * This file wraps every page on the site.
 * Whatever you put around {children} appears on all of them — which is why
 * the top bar and the footer live here instead of being copied onto each page.
 */

// `metadata` is what browsers and Google show about your site: the text in the
// browser tab, and the description in search results. Both come from profile.ts.
export const metadata: Metadata = {
  title: profile.name,
  description: profile.tagline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Nav />
        {/* {children} is the page you are actually looking at. */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
