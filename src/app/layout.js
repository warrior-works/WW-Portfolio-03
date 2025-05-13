import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ashutosh Kumar's Portfolio",
  description: "I'm Ashutosh Kumar by work and aashuu in real life. I am a passionate web developer showcasing my projects and expertise on this portfolio. Explore my work in web development, MERN projects, web applications, and more!",
  keywords: "ashutoshkumar, ashutoshkumarportfolio, ashutosh, Ashutosh Kumar, Ashutosh Kumar Portfolio, portfolio, HTML, CSS, portfolio , codeaashu, DevDisplay, Ashutosh Kumar codeaashu, aashuu portfolio, aashuu, Ashutosh Kumar linkedin, AshutoshKumar website, web developer, MERN projects, web applications",
  author: "Ashutosh Kumar",
  canonical: "https://www.ashutoshkumar.me",
  openGraph: {
    title: "Ashutosh Kumar's Portfolio",
    description: "I'm Ashutosh Kumar by work and aashuu in real life. I am a passionate web developer showcasing my projects and expertise on this portfolio. Explore my work in web development, MERN projects, web applications, and more!",
    url: "https://www.ashutoshkumar.me",
    type: "website",
    images: [
      {
        url: "http://www.ashutoshkumar.me/",
        width: 800,
        height: 600,
        alt: "Ashutosh Kumar's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ashutosh Kumar Portfolio",
    description: "I'm Ashutosh Kumar by work and aashuu in real life. I am a passionate web developer showcasing my projects and expertise on this portfolio. Explore my work in web development, MERN projects, web applications, and more!",
    images: "",
  },
  robots: {
    index: true,
    follow: true,
  },
  googleSiteVerification: "#",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link href="/aashuuprofile.png" rel="icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <title> Ashutosh Kumar's Portfolio</title>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ActiveSectionContextProvider>
          {children}
        </ActiveSectionContextProvider>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}