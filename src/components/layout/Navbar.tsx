"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { getNavbarData } from '@/lib/sanity';

interface NavbarData {
    menuItems?: Array<{
        label: string;
        link: string;
        highlighted?: boolean;
    }>;
    ctaButton?: {
        text: string;
        link: string;
    };
}

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [navbarData, setNavbarData] = useState<NavbarData | null>(null);

    // Verifica se está na homepage
    const isHomepage = pathname === '/';

    useEffect(() => {
        getNavbarData().then(setNavbarData);
    }, []);

    useEffect(() => {
        // Scroll listener apenas para homepage
        if (!isHomepage) {
            setIsScrolled(true); // Nas outras páginas, sempre "scrolled"
            return;
        }

        const handleScroll = () => {
            // Considera "scrolled" quando passar do viewport height (hero section)
            setIsScrolled(window.scrollY > window.innerHeight * 0.8);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomepage]);

    if (pathname?.startsWith('/lp') || pathname?.startsWith('/studio')) return null;

    // Fallback menu items
    const defaultMenuItems = [
        { label: 'Home', link: '/', highlighted: false },
        { label: 'Quem somos', link: '/quem-somos', highlighted: false },
        { label: 'Atuação', link: '/areas-de-atuacao', highlighted: false },
        { label: 'Metodologia', link: '/metodologia', highlighted: false },
        { label: 'Nossas Obras', link: '/obras', highlighted: false },
        { label: 'Trabalhe conosco', link: '/trabalhe-conosco', highlighted: true },
    ];

    const menuItems = navbarData?.menuItems || defaultMenuItems;
    const ctaButton = navbarData?.ctaButton || { text: 'Contato', link: '/contato' };

    return (
        <header className="fixed top-4 inset-x-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className={`rounded-2xl backdrop-blur-xl ring-1 shadow-xl ${isScrolled ? 'bg-white/90 ring-gray-200' : 'bg-white/5 ring-white/10'}`}>
                    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                        <div className="flex items-center justify-between w-full">
                            <Link href="/" className="inline-flex items-center gap-2">
                                <img
                                    src={isScrolled ? "/LANDSCAPE_LOGOTIPO_PRETO_2.png" : "/VETOR_LOGOTIPO_COR_2.png"}
                                    alt="OMMA Engenharia"
                                    className="h-8 w-auto transition-opacity duration-300"
                                />
                            </Link>
                            <nav className="hidden md:flex items-center gap-7 text-sm mx-auto" style={{ fontFamily: 'DM Sans, Inter' }}>
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className={`${item.highlighted ? 'inline-flex items-center gap-2' : ''} transition ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}`}
                                    >
                                        <span>{item.label}</span>
                                        {item.highlighted && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 ${isScrolled ? 'text-amber-500' : 'text-amber-400'}`}>
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        )}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="/blog" className={`hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition outline-none active:scale-[0.98] ${isScrolled ? 'bg-amber-500 text-neutral-900 hover:bg-amber-400' : 'bg-amber-400 text-neutral-900 hover:bg-amber-300'}`} style={{ fontFamily: 'DM Sans, Inter' }}>
                                Blog
                            </Link>
                            <Link href={ctaButton.link} className={`hidden sm:inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm transition outline-none ring-1 ring-inset active:scale-[0.98] ${isScrolled ? 'border-amber-500 text-amber-600 hover:bg-amber-50 ring-amber-200 hover:ring-amber-300' : 'border-amber-400/90 text-amber-400 hover:bg-amber-400/10 ring-white/10 hover:ring-white/20'}`} style={{ fontFamily: 'DM Sans, Inter' }}>
                                {ctaButton.text}
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className={`md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md ring-1 transition ${isScrolled ? 'bg-gray-100 ring-gray-200 hover:bg-gray-200' : 'bg-white/5 ring-white/10 hover:bg-white/10'}`}
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-5 w-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                                        <path d="M4 5h16"></path>
                                        <path d="M4 12h16"></path>
                                        <path d="M4 19h16"></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className={`md:hidden border-t px-4 py-4 ${isScrolled ? 'border-gray-200' : 'border-white/10'}`}>
                            <nav className="flex flex-col gap-4 text-sm" style={{ fontFamily: 'DM Sans, Inter' }}>
                                {menuItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`${item.highlighted ? 'inline-flex items-center gap-2' : ''} transition py-2 ${isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'}`}
                                    >
                                        <span>{item.label}</span>
                                        {item.highlighted && (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`h-4 w-4 ${isScrolled ? 'text-amber-500' : 'text-amber-400'}`}>
                                                <path d="m9 18 6-6-6-6"></path>
                                            </svg>
                                        )}
                                    </Link>
                                ))}
                                <Link
                                    href="/blog"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition outline-none mt-2 ${isScrolled ? 'bg-amber-500 text-neutral-900 hover:bg-amber-400' : 'bg-amber-400 text-neutral-900 hover:bg-amber-300'}`}
                                >
                                    Blog
                                </Link>
                                <Link
                                    href={ctaButton.link}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-sm transition outline-none ring-1 ring-inset mt-2 ${isScrolled ? 'border-amber-500 text-amber-600 hover:bg-amber-50 ring-amber-200 hover:ring-amber-300' : 'border-amber-400/90 text-amber-400 hover:bg-amber-400/10 ring-white/10 hover:ring-white/20'}`}
                                >
                                    {ctaButton.text}
                                </Link>
                            </nav>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;