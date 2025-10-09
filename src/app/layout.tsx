import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './globals.css';
import GTMProvider from '@/components/GTMProvider';
import ConsentBanner from '@/components/ConsentBanner';
import ClientFeedbackWidget from '@/components/ClientFeedbackWidget';

export const metadata = {
    title: 'OMMA Engenharia — Hero + Second Section',
    description: 'Site institucional OMMA Engenharia',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR">
            <head>
                {/* Google Fonts (match original) */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link
                    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,500;1,9..40,600&family=Exo:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Manrope:wght@600;700;800&family=Roboto:wght@400;500&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="antialiased min-h-screen text-gray-900 bg-white" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, Apple Color Emoji, Segoe UI Emoji' }}>
                {/* Background with texture and overlay */}
                <div className="pointer-events-none fixed inset-0 -z-10">
                    {/* Background image */}
                    <div className="absolute inset-0">
                        <img
                            src="/bg.jpeg"
                            alt=""
                            className="w-full h-full object-cover opacity-40"
                        />
                    </div>
                    {/* Light overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
                    {/* Ambient glows */}
                    <div className="absolute -top-[20%] -left-[10%] h-[40rem] w-[40rem] rounded-full bg-amber-400/8 blur-[160px]" />
                    <div className="absolute -bottom-[10%] -right-[10%] h-[36rem] w-[36rem] rounded-full bg-blue-400/5 blur-[140px]" />
                </div>
                {/* Feedback widget (client-only) */}
                <ClientFeedbackWidget />
                <script async type="text/javascript" src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/69c4f434-0cd5-40c9-895e-c70ffc37e85c-loader.js"></script>
                <Navbar />
                <main>{children}</main>
                <Footer />
                {/* GTM + Consent */}
                <GTMProvider />
                <ConsentBanner />
            </body>
        </html>
    );
}