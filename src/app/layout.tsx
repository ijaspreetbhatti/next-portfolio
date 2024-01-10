import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Jaspreet Bhatti",
    description: "Portfolio of Jaspreet Bhatti",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.jpg" sizes="any" />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
