import "./globals.css";

import { Inter } from "next/font/google";
import { themeEffect } from "./theme-effect";
import { Analytics } from "./analytics";
import { Header } from "./header";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abolfazl Arabs's blog",
  description:
    "Abolfazl is a versatile entrepreneur and developer who excels in creating innovative tech solutions, ranging from mobile apps and games to blockchain applications.",
  openGraph: {
    title: "Abolfazl Arab's blog",
    description:
    "Abolfazl is a versatile entrepreneur and developer who excels in creating innovative tech solutions, ranging from mobile apps and games to blockchain applications.",
    url: "https://abolfazl.dev",
    siteName: "Abolfazl Arab's blog",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arab_eth",
    creator: "@arab_eth",
  },
  themeColor: "transparent",
  metadataBase: new URL("https://abolfazl.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} antialiased`}
      suppressHydrationWarning={true}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(${themeEffect.toString()})();`,
          }}
        />
      </head>

      <body className="dark:text-gray-100 max-w-2xl m-auto">
        <main className="p-6 pt-3 md:pt-6 min-h-screen">
          <Header />
          {children}
        </main>

        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
