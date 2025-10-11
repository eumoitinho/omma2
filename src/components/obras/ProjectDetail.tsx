'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, MapPin, Maximize2, X } from 'lucide-react';

interface Project {
  _id: string;
  slug: string;
  client: string;
  title: string;
  category: string;
  location: string;
  area: string;
  duration: string;
  year?: string;
  description?: string;
  thumbnail: string;
  gallery: string[];
}

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900/50 to-black"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          {/* Back button */}
          <Link
            href="/obras"
            className="inline-flex items-center gap-2 text-white/70 hover:text-amber-400 transition mb-8 group"
            style={{ fontFamily: 'Inter' }}
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Voltar para Obras
          </Link>

          {/* Project header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="mb-4">
                <span className="inline-block px-4 py-2 text-sm font-bold rounded-full bg-amber-400/95 text-black" style={{ fontFamily: 'Exo, Inter' }}>
                  {project.category}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Exo, Inter' }}>
                {project.title}
              </h1>

              {project.description && (
                <p className="text-base text-white/70 leading-relaxed mb-8" style={{ fontFamily: 'Inter' }}>
                  {project.description}
                </p>
              )}

              {/* Project details grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span className="text-xs text-white/50" style={{ fontFamily: 'Inter' }}>Localização</span>
                  </div>
                  <p className="text-base font-semibold text-white" style={{ fontFamily: 'Exo, Inter' }}>
                    {project.location}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Maximize2 className="w-5 h-5 text-amber-400" />
                    <span className="text-xs text-white/50" style={{ fontFamily: 'Inter' }}>Área Total</span>
                  </div>
                  <p className="text-base font-semibold text-white" style={{ fontFamily: 'Exo, Inter' }}>
                    {project.area}
                  </p>
                </div>
              </div>
            </div>

            {/* Main image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-400/10">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24 bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'Exo, Inter' }}>
            Galeria de Fotos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/40 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`${project.client} - Foto ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform scale-75 group-hover:scale-100 duration-300">
                    <Maximize2 className="w-6 h-6 text-black" />
                  </div>
                </div>

                {/* Image number */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-white" style={{ fontFamily: 'Inter' }}>
                    {index + 1} / {project.gallery.length}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
            aria-label="Fechar"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Navigation buttons */}
          {selectedImage > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage - 1);
              }}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Anterior"
            >
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
          )}

          {selectedImage < project.gallery.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(selectedImage + 1);
              }}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              aria-label="Próxima"
            >
              <ArrowLeft className="w-6 h-6 text-white rotate-180" />
            </button>
          )}

          {/* Image */}
          <div className="relative w-full h-full max-w-6xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={project.gallery[selectedImage]}
              alt={`${project.client} - Foto ${selectedImage + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm">
            <span className="text-sm font-semibold text-white" style={{ fontFamily: 'Inter' }}>
              {selectedImage + 1} / {project.gallery.length}
            </span>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'Exo, Inter' }}>
            Interessado em um projeto similar?
          </h2>
          <p className="text-base text-white/70 mb-8" style={{ fontFamily: 'Inter' }}>
            Entre em contato conosco e descubra como podemos transformar sua visão em realidade
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-500 transition-all duration-300 shadow-lg shadow-amber-400/25"
            style={{ fontFamily: 'Exo, Inter' }}
          >
            Fale Conosco
          </Link>
        </div>
      </section>
    </>
  );
}
