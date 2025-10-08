"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { getSiteSettings } from '@/lib/sanity';
import Link from 'next/link';

const Footer: React.FC = () => {
    const pathname = usePathname();
    const [settings, setSettings] = useState<any>(null);
    const year = new Date().getFullYear();

    useEffect(() => {
        getSiteSettings().then(setSettings);
    }, []);

    if (pathname?.startsWith('/lp') || pathname?.startsWith('/studio')) return null;

    return (
        <footer className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <img src="/omma_logo.png" alt="OMMA Engenharia" className="h-8 w-auto" />
                    </div>
                    <p className="mt-3 text-sm text-white/60">
                        {settings?.siteDescription || 'Transformando ambientes em resultados desde 1998.'}
                    </p>
                </div>

                <div>
                    <h5 className="text-sm tracking-tight font-semibold mb-3">Contato</h5>
                    <ul className="space-y-2 text-sm text-white/70">
                        {settings?.contactInfo?.emails?.[0] && (
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-amber-400" />
                                <a href={`mailto:${settings.contactInfo.emails[0].email}`} className="hover:text-amber-400 transition">
                                    {settings.contactInfo.emails[0].email}
                                </a>
                            </li>
                        )}
                        {settings?.contactInfo?.phone && (
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-amber-400" />
                                <a href={`tel:${settings.contactInfo.phone}`} className="hover:text-amber-400 transition">
                                    {settings.contactInfo.phone}
                                </a>
                            </li>
                        )}
                        <li className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-amber-400" /> São Paulo, SP
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-sm tracking-tight font-semibold mb-3">Links Rápidos</h5>
                    <ul className="space-y-2 text-sm text-white/70">
                        <li><Link href="/quem-somos" className="hover:text-amber-400 transition">Quem Somos</Link></li>
                        <li><Link href="/areas-de-atuacao" className="hover:text-amber-400 transition">Áreas de Atuação</Link></li>
                        <li><Link href="/metodologia" className="hover:text-amber-400 transition">Metodologia</Link></li>
                        <li><Link href="/obras-realizadas" className="hover:text-amber-400 transition">Obras Realizadas</Link></li>
                        <li><Link href="/trabalhe-conosco" className="hover:text-amber-400 transition">Trabalhe Conosco</Link></li>
                        <li><Link href="/contato" className="hover:text-amber-400 transition">Contato</Link></li>
                    </ul>
                </div>
            </div>

            {/* Social Media */}
            {settings?.socialMedia && (
                <div className="border-t border-white/10">
                    <div className="mx-auto max-w-7xl px-4 py-6 flex justify-center gap-4">
                        {settings.socialMedia.instagram && (
                            <a
                                href={settings.socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400 transition-all"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        )}
                        {settings.socialMedia.linkedin && (
                            <a
                                href={settings.socialMedia.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400 transition-all"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                        {settings.socialMedia.facebook && (
                            <a
                                href={settings.socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-amber-400/20 hover:border-amber-400 transition-all"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            )}

            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-3">
                    <span>© {year} OMMA Engenharia. Todos os direitos reservados.</span>
                    <span>Política de Privacidade • Termos de Uso</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;