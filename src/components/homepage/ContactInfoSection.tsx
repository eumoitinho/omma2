'use client';
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

interface ContactInfoSectionProps {
  data: {
    title?: string;
    address?: string;
    phone?: string;
    emails?: Array<{
      label: string;
      email: string;
    }>;
  };
}

export default function ContactInfoSection({ data }: ContactInfoSectionProps) {
  if (!data) return null;

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {data.title && (
          <h2
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: "'DM Sans', Inter" }}
          >
            {data.title}
          </h2>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          {data.address && (
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Endereço</h3>
              <p className="text-white/70 text-sm">{data.address}</p>
            </div>
          )}

          {/* Phone */}
          {data.phone && (
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Telefone</h3>
              <a href={`tel:${data.phone}`} className="text-white/70 text-sm hover:text-amber-400">
                {data.phone}
              </a>
            </div>
          )}

          {/* Emails */}
          {data.emails && data.emails.length > 0 && (
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 rounded-full bg-amber-400/20 flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">E-mails</h3>
              <div className="space-y-1">
                {data.emails.map((item, index) => (
                  <div key={index}>
                    <p className="text-xs text-white/50">{item.label}</p>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-white/70 text-sm hover:text-amber-400"
                    >
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
