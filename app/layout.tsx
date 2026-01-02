import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingQRButton from "@/components/FloatingQRButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AI Future Summit 2026 | Darshan University",
    description: "Empowering BCA Students for the AI-Driven Future. Join us for hands-on AI sessions, expert talks, and real-world career guidance at Darshan University.",
    keywords: "AI, BCA, MCA, Darshan University, Artificial Intelligence, Career Guidance, Academic Event",
    authors: [{ name: "Darshan University" }],
    openGraph: {
        title: "AI Future Summit 2026 | Darshan University",
        description: "Empowering BCA Students for the AI-Driven Future",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>{children}</main>
                <Footer />
                <FloatingQRButton />
            </body>
        </html>
    );
}
