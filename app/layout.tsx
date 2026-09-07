import type { Metadata } from 'next';
import './globals.css';
import SiteHeader from './site-header';
export const metadata: Metadata = {
 title: 'Jihye Han, PharmD, MPH | Pharmaceutical Policy Research',
 description: 'Jihye Han is a PhD student in Health Policy at Vanderbilt University. Explore her research, publications, curriculum vitae, and media coverage.',
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><SiteHeader/><main id="main">{children}</main><footer><div><strong>Jihye Han, PharmD, MPH</strong><p>Pharmaceutical Policy Research · Nashville, Tennessee</p></div><a href="mailto:jihye.han@vanderbilt.edu">jihye.han@vanderbilt.edu</a><span>Updated September 2026</span><p className="copyright">© Copyright 2026 Jihye Han. Hosted by GitHub Pages.</p></footer></body></html>;
}
