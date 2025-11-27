import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Manar Capital | Guiding Light in Finance',
  description: 'Manar Capital - Your trusted partner for financial excellence. Illuminating the path to prosperity.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
