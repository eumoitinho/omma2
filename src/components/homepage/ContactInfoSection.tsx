'use client';
import React from 'react';
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook } from 'lucide-react';

interface ContactInfoSectionProps {
  data: {
    title?: string;
    address?: string;
    phone?: string;
    emails?: Array<{
      label: string;
      email: string;
    }>;
    socialMedia?: Array<{
      platform: string;
      url: string;
    }>;
  };
}

export default function ContactInfoSection({ data }: ContactInfoSectionProps) {
  if (!data) return null;

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'instagram':
        return <Instagram className="w-6 h-6" />;
      case 'linkedin':
        return <Linkedin className="w-6 h-6" />;
      case 'facebook':
        return <Facebook className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {data.title && (
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            {data.title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Address */}
          {data.address && (
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'Exo, Inter' }}>Endereço</h3>
              <p className="text-white/70 text-base whitespace-pre-line" style={{ fontFamily: 'Inter' }}>{data.address}</p>
            </div>
          )}

          {/* Phone */}
          {data.phone && (
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'Exo, Inter' }}>Telefone</h3>
              <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="text-white/70 text-base hover:text-amber-400 transition" style={{ fontFamily: 'Inter' }}>
                {data.phone}
              </a>
            </div>
          )}

          {/* Emails */}
          {data.emails && data.emails.length > 0 && (
            <div className="flex flex-col items-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-14 h-14 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white" style={{ fontFamily: 'Exo, Inter' }}>E-mails</h3>
              <div className="space-y-2">
                {data.emails.map((item, index) => (
                  <div key={index}>
                    <p className="text-xs text-white/50 mb-1" style={{ fontFamily: 'Inter' }}>{item.label}</p>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-white/70 text-base hover:text-amber-400 transition"
                      style={{ fontFamily: 'Inter' }}
                    >
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Social Media */}
        {data.socialMedia && data.socialMedia.length > 0 && (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-6 text-white" style={{ fontFamily: 'Exo, Inter' }}>Redes Sociais</h3>
            <div className="flex justify-center gap-4">
              {data.socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full bg-white/5 hover:bg-amber-400/20 border border-white/10 hover:border-amber-400/40 flex items-center justify-center text-white/70 hover:text-amber-400 transition"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
