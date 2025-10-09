"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (pathname?.startsWith('/lp') || pathname?.startsWith('/studio')) return null;

    return (
        <header className="fixed top-4 inset-x-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-xl">
                    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                        <div className="flex items-center gap-3">
                            <Link href="/" className="inline-flex items-center gap-2">
                                <img src="/omma_logo.png" alt="OMMA Engenharia" className="h-7 w-auto" />
                            </Link>
                            <nav className="hidden md:flex items-center gap-7 text-sm" style={{ fontFamily: 'DM Sans, Inter' }}>
                                <Link href="/" className="text-white/90 hover:text-white transition">Home</Link>
                                <Link href="/quem-somos" className="text-white/90 hover:text-white transition">Quem somos</Link>
                                <Link href="/areas-de-atuacao" className="text-white/90 hover:text-white transition">Atuação</Link>
                                <Link href="/metodologia" className="text-white/90 hover:text-white transition">Metodologia</Link>
                                <Link href="/obras" className="text-white/90 hover:text-white transition">Obras</Link>
                                <Link href="/trabalhe-conosco" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition">
                                    <span>Trabalhe conosco</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-400"><path d="m9 18 6-6-6-6"></path></svg>
                                </Link>
                            </nav>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href="/contato" className="hidden sm:inline-flex items-center justify-center rounded-full border border-amber-400/90 px-5 py-2.5 text-sm text-amber-400 hover:bg-amber-400/10 transition outline-none ring-1 ring-inset ring-white/10 hover:ring-white/20 active:scale-[0.98]" style={{ fontFamily: 'DM Sans, Inter' }}>
                                Contato
                            </Link>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition"
                                aria-label="Toggle menu"
                            >
                                {isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                                        <path d="M18 6 6 18"></path>
                                        <path d="m6 6 12 12"></path>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
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
                        <div className="md:hidden border-t border-white/10 px-4 py-4">
                            <nav className="flex flex-col gap-4 text-sm" style={{ fontFamily: 'DM Sans, Inter' }}>
                                <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white transition py-2">Home</Link>
                                <Link href="/quem-somos" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white transition py-2">Quem somos</Link>
                                <Link href="/areas-de-atuacao" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white transition py-2">Atuação</Link>
                                <Link href="/metodologia" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white transition py-2">Metodologia</Link>
                                <Link href="/obras" onClick={() => setIsMenuOpen(false)} className="text-white/90 hover:text-white transition py-2">Obras</Link>
                                <Link href="/trabalhe-conosco" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center gap-2 text-white/90 hover:text-white transition py-2">
                                    <span>Trabalhe conosco</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-400"><path d="m9 18 6-6-6-6"></path></svg>
                                </Link>
                                <Link href="/contato" onClick={() => setIsMenuOpen(false)} className="inline-flex items-center justify-center rounded-full border border-amber-400/90 px-5 py-2.5 text-sm text-amber-400 hover:bg-amber-400/10 transition outline-none ring-1 ring-inset ring-white/10 hover:ring-white/20 mt-2">
                                    Contato
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