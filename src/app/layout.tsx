import type { Metadata } from "next";
import { Source_Serif_4, Public_Sans } from "next/font/google";
import { PHONE_NUMBERS } from "@/components/phone-numbers";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
  // Variable font with the optical-size axis — the reference loads
  // opsz 8..60, which is what keeps display sizes narrow and elegant.
  // Italic carries the marketing pack's gold-serif pull-quote treatment.
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rondason.com"),
  title: {
    default: "Rondason Group - Connecting Global Commodity Markets",
    template: "%s | Rondason Group",
  },
  description:
    "Founded by industry experts with global expertise, Rondason Group is built for the next era of commodity trading — spanning energy, metals, and the infrastructure that connects them.",
  keywords: [
    "commodity trading",
    "physical commodity trading",
    "energy trading",
    "metals and mining",
    "crude and refined products",
    "base metals",
    "global trading house",
    "Singapore",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rondason Group - Connecting Global Commodity Markets",
    description:
      "Global physical commodity trading across energy, metals and mining — founded by industry experts, headquartered in Singapore.",
    url: "https://www.rondason.com",
    siteName: "Rondason Group",
    locale: "en_SG",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${sourceSerif.variable} ${publicSans.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.rondason.com/#organization",
                  "name": "Rondason Group",
                  "url": "https://www.rondason.com",
                  "description":
                    "Global physical commodity trading house spanning energy, metals and mining, headquartered in Singapore.",
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Gateway East, 152 Beach Road, #10-07",
                    "addressLocality": "Singapore",
                    "postalCode": "189761",
                    "addressCountry": "SG",
                  },
                  "identifier": {
                    "@type": "PropertyValue",
                    "propertyID": "UEN",
                    "name": "Unique Entity Number",
                    "value": "202637629K",
                  },
                  "contactPoint": PHONE_NUMBERS.map(({ tel, country }) => ({
                    "@type": "ContactPoint",
                    "telephone": tel,
                    "email": "info@rondason.com",
                    "contactType": "customer service",
                    "areaServed": country,
                  })),
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.rondason.com/#website",
                  "url": "https://www.rondason.com",
                  "name": "Rondason Group",
                  "publisher": {
                    "@id": "https://www.rondason.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
