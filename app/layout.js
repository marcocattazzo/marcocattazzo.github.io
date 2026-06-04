import { Cormorant_Garamond, EB_Garamond, Outfit } from 'next/font/google';
import '../styles/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap'
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
  display: 'swap'
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-outfit',
  display: 'swap'
});

export const metadata = {
  title: "Fil d'Or",
  description: "Uno spazio per pensare — matematica, fede, parole, musica, giochi.",
  icons: { icon: '/assets/logo.png' }
};

export default function RootLayout({ children }) {
  return (
    <html className={`${cormorant.variable} ${ebGaramond.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
