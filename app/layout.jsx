import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: "Vaibhav Baliyan - Software Programmer | Portfolio",
  description:
    "Software Programmer specializing in React, Next.js, Node.js, and modern web development. View my projects, skills, and experience.",
  keywords: [
    "Software Developer",
    "React Developer",
    "Next.js",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Vaibhav Baliyan" }],
  openGraph: {
    title: "Vaibhav Baliyan - Software Programmer",
    description:
      "Software Programmer specializing in React, Next.js, and modern web development",
    url: "https://vaibhavbaliyan2002.com",
    siteName: "Vaibhav Baliyan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Baliyan - Software Programmer",
    description:
      "Software Programmer specializing in React, Next.js, and modern web development",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} antialiased`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
