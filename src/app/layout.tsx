import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Lewis Sawe - DevOps & Cloud Engineer",
  description: "Cloud and DevOps Engineer with 2+ years of experience in cloud infrastructure, automation, and CI/CD pipelines. Passionate about infrastructure as code, containerization, and cloud-native technologies.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "CI/CD"],
  authors: [{ name: "Lewis Sawe" }],
  creator: "Lewis Sawe",
  openGraph: {
    title: "Lewis Sawe - DevOps & Cloud Engineer",
    description: "Cloud and DevOps Engineer specializing in AWS, Azure, and cloud-native technologies",
    url: "https://lewisawe.github.io",
    siteName: "Lewis Sawe Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lewis Sawe - DevOps & Cloud Engineer",
    description: "Cloud and DevOps Engineer specializing in AWS, Azure, and cloud-native technologies",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
      </body>
    </html>
  );
}
