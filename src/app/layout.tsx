import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Glyph • A new way to write",
  description:
    "Offline-first CMS and Markdown editor: write anywhere, embed images, sync online, and extend with a developer-friendly SDK.",
  keywords: [
    "offline CMS",
    "blog editor",
    "offline blogging",
    "content management",
    "headless CMS",
    "developer SDK",
    "rich media blogging",
    "nextjs CMS",
    "React blog editor",
    "synchronized publishing",
  ],
  authors: [
    {
      name: "Temitope Abolaji",
      url: "https://online-portfolio-2-topghostlys-projects.vercel.app/",
    },
  ],
  creator: "Temitope Abolaji",
  openGraph: {
    title: "Glyph • Offline-First CMS & Blog Editor",
    description:
      "Write and edit blogs offline, embed images, then sync to the web with Glyph's developer-friendly SDK.",
    url: "https://www.getglyph.app/",
    siteName: "Glyph CMS",
    images: [
      {
        url: "https://www.getglyph.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glyph CMS • Write Offline, Publish Online",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glyph • Offline-First CMS & Blog Editor",
    description:
      "Draft blogs offline, add images, and sync to the web with Glyph's SDK.",
    creator: "@theRealAyinla",
    images: ["https://www.getglyph.app/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#09090b" />
        <link rel="apple-touch-icon" href="/images/fill-image.png" />
        <link rel="canonical" href="https://www.getglyph.app/" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.getglyph.app/" />
        <meta
          property="og:title"
          content="Glyph • Offline-First CMS & Blog Editor"
        />
        <meta
          property="og:description"
          content="Offline-first CMS and Markdown editor: write anywhere, embed images, sync online, and extend with a developer-friendly SDK."
        />
        <meta
          property="og:image"
          content="https://www.getglyph.app/og-image.png"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Website",
              "name": "Glyph",
              "url": "https://www.getglyph.app/",
            }
            `}
        </script>
      </Head>
      <html lang="en">
        <body className={`${satoshi.className} antialiased`}>{children}</body>
      </html>
    </>
  );
}
