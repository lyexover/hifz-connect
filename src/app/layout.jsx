// app/layout.js
import { Inter, Amiri } from 'next/font/google';
import './globals.css';

// Configure Inter font for the entire application
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

const amiri = Amiri({
  subsets: ['arabic'],         // Spécifie les caractères arabes pour le Coran
  weight: ['400', '700'],      // Définit deux poids : normal et gras
  display: 'swap',             // Utilise une police de secours pendant le chargement
  variable: '--font-amiri',    // Crée une variable CSS pour cette police
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body>{children}</body>
    </html>
  );
}