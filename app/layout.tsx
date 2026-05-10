import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Sujan Bohara - Front-end Developer | Typescript, Javascript, ReactJs, NextJS, NodeJS",
  description:
    "Experienced Software Engineer specializing in Javascript,React, and Node.js.",
  keywords: [
    "Front-End Developer",
    "Javascript",
    "Typescript",
    "React",
    "NextJs",
    "Node.js",
    "Web Development",
    "Portfolio",
    "Digipearl",
    "Hamro Patro",
    "FinTech",
  ],
  authors: [{ name: "Sujan Bohara" }],
  creator: "Sujan Bohara",
  publisher: "Sujan Bohara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yougalbimali.dev",
    title: "Sujan Bohara - Full-Stack Developer",
    description:
        "Experienced Software Engineer specializing in Javascript,React, and Node.js.View my portfolio and get in touch for your next project.",
    siteName: "Sujan Bohara Portfolio",
    images: [
      {
        url: "/avatar.jpeg",
        width: 1200,
        height: 630,
        alt: "Sujan Bohara - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujan Bohara - Full-Stack Developer",
    description: "Experienced Full-Stack Developer specializing in Javascript, ReactJs, NextJs, NodeJs and modern web technologies.",
    images: ["/avatar.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Suspense fallback={null}>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
