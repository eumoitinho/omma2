import React from 'react';

const Navbar: React.FC = () => {
    return (
        <header className="fixed top-4 inset-x-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="rounded-2xl bg-white/5 backdrop-blur-xl ring-1 ring-white/10 shadow-xl">
                    <div className="flex items-center justify-between px-4 py-3 sm:px-6">
                        <div className="flex items-center gap-3">
                            <a href="#" className="inline-flex items-center gap-2">
                                <img src="/omma_logo.png" alt="OMMA Engenharia" className="h-7 w-auto" />
                            </a>
                            <nav className="hidden md:flex items-center gap-7 text-sm" style={{ fontFamily: 'DM Sans, Inter' }}>
                                <a href="#" className="text-white/90 hover:text-white transition">Home</a>
                                <a href="#sobre" className="text-white/90 hover:text-white transition">Quem somos</a>
                                <a href="#" className="text-white/90 hover:text-white transition">Atuação</a>
                                <a href="#" className="text-white/90 hover:text-white transition">Metodologia</a>
                                <a href="#contato" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition">
                                    <span>Trabalhe conosco</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-400"><path d="m9 18 6-6-6-6"></path></svg>
                                </a>
                            </nav>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="inline-flex items-center justify-center rounded-full border border-amber-400/90 px-5 py-2.5 text-sm text-amber-400 hover:bg-amber-400/10 transition outline-none ring-1 ring-inset ring-white/10 hover:ring-white/20 active:scale-[0.98]" style={{ fontFamily: 'DM Sans, Inter' }}>
                                Contato
                            </button>
                            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-white/10"></div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;