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
        <footer className="border-t border-gray-200">
            <div className="mx-auto max-w-7xl px-4 py-10 grid gap-8 md:grid-cols-3">
                <div>
                    <div className="flex items-center gap-3 mb-3">
                        <img src="/cropped-OMMA-Engenharia-amarelo.png" alt="OMMA Engenharia" className="h-8 w-auto" />
                    </div>
                    <p className="mt-3 text-sm text-gray-600">
                        {settings?.siteDescription || 'Transformando ambientes em resultados desde 1998.'}
                    </p>
                </div>

                <div>
                    <h5 className="text-sm tracking-tight font-semibold mb-3 text-gray-900">Contato</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {settings?.contactInfo?.emails?.[0] && (
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-amber-500" />
                                <a href={`mailto:${settings.contactInfo.emails[0].email}`} className="hover:text-amber-600 transition">
                                    {settings.contactInfo.emails[0].email}
                                </a>
                            </li>
                        )}
                        {settings?.contactInfo?.phone && (
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-amber-500" />
                                <a href={`tel:${settings.contactInfo.phone}`} className="hover:text-amber-600 transition">
                                    {settings.contactInfo.phone}
                                </a>
                            </li>
                        )}
                        <li className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-amber-500" /> São Paulo, SP
                        </li>
                    </ul>
                </div>

                <div>
                    <h5 className="text-sm tracking-tight font-semibold mb-3 text-gray-900">Links Rápidos</h5>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li><Link href="/quem-somos" className="hover:text-amber-600 transition">Quem Somos</Link></li>
                        <li><Link href="/areas-de-atuacao" className="hover:text-amber-600 transition">Áreas de Atuação</Link></li>
                        <li><Link href="/metodologia" className="hover:text-amber-600 transition">Metodologia</Link></li>
                        <li><Link href="/obras" className="hover:text-amber-600 transition">Obras</Link></li>
                        <li><Link href="/trabalhe-conosco" className="hover:text-amber-600 transition">Trabalhe Conosco</Link></li>
                        <li><Link href="/contato" className="hover:text-amber-600 transition">Contato</Link></li>
                    </ul>
                </div>
            </div>

            {/* Social Media */}
            {settings?.socialMedia && (
                <div className="border-t border-gray-200">
                    <div className="mx-auto max-w-7xl px-4 py-6 flex justify-center gap-4">
                        {settings.socialMedia.instagram && (
                            <a
                                href={settings.socialMedia.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-400 transition-all text-gray-700"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        )}
                        {settings.socialMedia.linkedin && (
                            <a
                                href={settings.socialMedia.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-400 transition-all text-gray-700"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        )}
                        {settings.socialMedia.facebook && (
                            <a
                                href={settings.socialMedia.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-amber-50 hover:border-amber-400 transition-all text-gray-700"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        )}
                    </div>
                </div>
            )}

            <div className="border-t border-gray-200">
                <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-gray-500 flex flex-col sm:flex-row justify-between gap-3">
                    <span>© {year} OMMA Engenharia. Todos os direitos reservados.</span>
                    <span>Política de Privacidade • Termos de Uso</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;