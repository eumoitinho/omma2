"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { getSiteSettings } from '@/lib/sanity';
import Link from 'next/link';

interface SiteSettings {
  siteDescription?: string;
  contactInfo?: {
    emails?: Array<{ email: string }>;
    phone?: string;
  };
  socialMedia?: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
}

const Footer: React.FC = () => {
    const pathname = usePathname();
    const [settings, setSettings] = useState<SiteSettings | null>(null);
    const year = new Date().getFullYear();

    useEffect(() => {
        getSiteSettings().then(setSettings);
    }, []);

    if (pathname?.startsWith('/lp') || pathname?.startsWith('/studio')) return null;

    return (
        <footer className="bg-black relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,193,7,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,193,7,0.03),transparent_50%)]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid gap-12 lg:grid-cols-4 md:grid-cols-2">
                    {/* Logo and Description */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/PORTRAIT_BRANCO_LOGOTIPO.png" alt="OMMA Engenharia" className="h-20 w-auto" />
                        </div>
                        <p className="text-base text-gray-400 leading-relaxed" style={{ fontFamily: 'Inter' }}>
                            {settings?.siteDescription || 'Transformando ambientes em resultados desde 1998.'}
                        </p>

                        {/* Social Media */}
                        {settings?.socialMedia && (
                            <div className="flex gap-3 mt-6">
                                {settings.socialMedia.instagram && (
                                    <a
                                        href={settings.socialMedia.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 transition-all text-white"
                                        aria-label="Instagram"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                )}
                                {settings.socialMedia.linkedin && (
                                    <a
                                        href={settings.socialMedia.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 transition-all text-white"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                )}
                                {settings.socialMedia.facebook && (
                                    <a
                                        href={settings.socialMedia.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400 hover:border-amber-400 transition-all text-white"
                                        aria-label="Facebook"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h5 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: 'Exo, Inter' }}>Links Rápidos</h5>
                        <ul className="space-y-3 text-base" style={{ fontFamily: 'Inter' }}>
                            <li><Link href="/" className="text-gray-400 hover:text-amber-400 transition">Home</Link></li>
                            <li><Link href="/quem-somos" className="text-gray-400 hover:text-amber-400 transition">Quem Somos</Link></li>
                            <li><Link href="/areas-de-atuacao" className="text-gray-400 hover:text-amber-400 transition">Áreas de Atuação</Link></li>
                            <li><Link href="/metodologia" className="text-gray-400 hover:text-amber-400 transition">Metodologia</Link></li>
                            <li><Link href="/obras" className="text-gray-400 hover:text-amber-400 transition">Obras</Link></li>
                            <li><Link href="/trabalhe-conosco" className="text-gray-400 hover:text-amber-400 transition">Trabalhe Conosco</Link></li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div>
                        <h5 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: 'Exo, Inter' }}>Contato</h5>
                        <ul className="space-y-4 text-base" style={{ fontFamily: 'Inter' }}>
                            <li className="flex items-start gap-3">
                                <Mail className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <a href="mailto:contato@omma.com.br" className="text-gray-400 hover:text-amber-400 transition">
                                    contato@omma.com.br
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <a href="tel:+551130562340" className="text-gray-400 hover:text-amber-400 transition">
                                    +55 11 3056 2340
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Endereço */}
                    <div>
                        <h5 className="text-lg font-bold mb-6 text-white" style={{ fontFamily: 'Exo, Inter' }}>Endereço</h5>
                        <div className="flex items-start gap-3 text-base" style={{ fontFamily: 'Inter' }}>
                            <MapPin className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <address className="not-italic text-gray-400 leading-relaxed">
                                Avenida Dr. Cardoso de Melo, 1666<br />
                                2º andar, Vila Olímpia<br />
                                São Paulo/SP<br />
                                CEP 04546-005
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                        <span>© {year} OMMA Engenharia. Todos os direitos reservados.</span>
                        <div className="flex gap-6">
                            <Link href="/politica-privacidade" className="hover:text-amber-400 transition">Política de Privacidade</Link>
                            <Link href="/termos-uso" className="hover:text-amber-400 transition">Termos de Uso</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;