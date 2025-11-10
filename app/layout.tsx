import type { Metadata } from "next";
import { Inter, Dancing_Script, Great_Vibes, Tangerine } from "next/font/google";
import "./globals.css";
import { MusicProvider } from "./contexts/MusicContext";
import MusicButton from "./components/MusicButton";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const dancing = Dancing_Script({ subsets: ["latin"], variable: '--font-dancing' });
const greatVibes = Great_Vibes({ 
  weight: '400',
  subsets: ["latin"], 
  variable: '--font-great-vibes' 
});
const aphrodite = Tangerine({ 
  weight: ['400', '700'],
  subsets: ["latin"], 
  variable: '--font-aphrodite' 
});

export const metadata: Metadata = {
  title: "Happy Birthday! 🎉",
  description: "A special birthday surprise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${dancing.variable} ${greatVibes.variable} ${aphrodite.variable} font-sans antialiased`}>
        <MusicProvider>
          <MusicButton />
          {children}
        </MusicProvider>
      </body>
    </html>
  );
}

