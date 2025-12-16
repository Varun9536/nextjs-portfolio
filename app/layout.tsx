import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Varun Kumar — Full-Stack Developer (MERN) | Software Engineer",
  description:
    "Varun Kumar is a full-stack MERN developer and software engineer with expertise in React, Next.js, Node.js, PHP, Electron, MySQL, and scalable backend systems.",
  keywords: [
    "Varun Kumar",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Software Engineer",
    "Node.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Varun Kumar" }],
  creator: "Varun Kumar",
  publisher: "Varun Kumar",

  metadataBase: new URL("https://varunkumar.online"),
  alternates: {
    canonical: "https://varunkumar.online",
  },

  openGraph: {
    title: "Varun Kumar — Full-Stack Developer (MERN)",
    description:
      "Full-stack developer skilled in React, Next.js, Node.js, PHP, MySQL, MongoDB, and scalable systems.",
    url: "https://varunkumar.online",
    siteName: "Varun Kumar Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Varun Kumar — Full-Stack Developer (MERN)",
    description:
      "Portfolio of Varun Kumar — Full-stack MERN developer & software engineer.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Varun Kumar",
              jobTitle: "Full-Stack Developer (MERN)",
              url: "https://varunkumar.online",
              image: "https://varunkumar.online/og-image.png",
              sameAs: [
                "https://www.linkedin.com/in/varun-kumar-7b48332aa/",
                "mailto:varunkumar953685@gmail.com",
                "https://wa.me/919536855214",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Eice Technology Pvt. Ltd.",
              },
              description:
                "Full-stack MERN developer with experience in React, Next.js, Node.js, Electron, PHP, MySQL, MongoDB, and scalable systems.",
            }),
          }}
        />
      </body>




    </html>
  );
}
