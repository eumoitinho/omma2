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
        <footer className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_50%)]" />

            <div className="relative mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <img src="/omma_logo.png" alt="OMMA Engenharia" className="h-10 w-auto" />
                    </div>
                    <p className="mt-3 text-base text-white/90" style={{ fontFamily: 'Inter' }}>
                        {settings?.siteDescription || 'Transformando ambientes em resultados desde 1998.'}
                    </p>
                </div>

                <div>
                    <h5 className="text-base tracking-tight font-semibold mb-4 text-white" style={{ fontFamily: 'Exo, Inter' }}>Contato</h5>
                    <ul className="space-y-3 text-base text-white/90" style={{ fontFamily: 'Inter' }}>
                        {settings?.contactInfo?.emails?.[0] && (
                            <li className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-white" />
                                <a href={`mailto:${settings.contactInfo.emails[0].email}`} className="hover:text-white transition">
                                    {settings.contactInfo.emails[0].email}
                                </a>
                            </li>
                        )}
                        {settings?.contactInfo?.phone && (
                            <li className="flex items-center gap-2">
                                <Phone className="h-5 w-5 text-white" />
                                <a href={`tel:${settings.contactInfo.phone}`} className="hover:text-white transition">
                                    {settings.contactInfo.phone}
                                </a>
                            </li>
                        )}
                        <li className="flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-white" /> São Paulo, SP
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-base tracking-tight font-semibold mb-4 text-white" style={{ fontFamily: 'Exo, Inter' }}>Links Rápidos</h5>
                    <ul className="space-y-3 text-base text-white/90 font-medium" style={{ fontFamily: 'Inter' }}>
                        <li><Link href="/quem-somos" className="hover:text-white transition">Quem Somos</Link></li>
                        <li><Link href="/areas-de-atuacao" className="hover:text-white transition">Áreas de Atuação</Link></li>
                        <li><Link href="/metodologia" className="hover:text-white transition">Metodologia</Link></li>
                        <li><Link href="/obras" className="hover:text-white transition">Obras</Link></li>
                        <li><Link href="/trabalhe-conosco" className="hover:text-white transition">Trabalhe Conosco</Link></li>
                        <li><Link href="/contato" className="hover:text-white transition">Contato</Link></li>
                    </ul>
                </div>
            </div>

            {/* Social Media */}
            {settings?.socialMedia && (
                <div className="relative border-t border-white/20">
                    <div className="mx-auto max-w-7xl px-4 py-6 flex justify-center gap-4">
                        {settings.socialMedia.instagram && (
                            <a
                                href={settings.socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all text-white"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                        )}
                        {settings.socialMedia.linkedin && (
                            <a
                                href={settings.socialMedia.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all text-white"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                        )}
                        {settings.socialMedia.facebook && (
                            <a
                                href={settings.socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 hover:border-white/50 transition-all text-white"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                        )}
                    </div>
                </div>
            )}

            <div className="relative border-t border-white/20">
                <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-white/80 flex flex-col sm:flex-row justify-between gap-3" style={{ fontFamily: 'Inter' }}>
                    <span>© {year} OMMA Engenharia. Todos os direitos reservados.</span>
                    <span>Política de Privacidade • Termos de Uso</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;