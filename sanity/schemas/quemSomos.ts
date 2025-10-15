import { defineType, defineField } from 'sanity';
import { Users } from 'lucide-react';

export default defineType({
  name: 'quemSomos',
  title: 'Quem Somos',
  type: 'document',
  icon: Users,
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Título da Página',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroTitle',
      title: 'Título Hero',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagem Hero',
      type: 'image',
      options: { hotspot: true },
      description: 'Imagem de fundo da seção hero',
    }),
    defineField({
      name: 'introSection',
      title: 'Seção de Introdução',
      type: 'object',
      fields: [
        {
          name: 'content',
          title: 'Conteúdo',
          type: 'array',
          of: [{ type: 'block' }],
          validation: (Rule: any) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'purposeSection',
      title: 'Seção Nossa Missão',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'content',
          title: 'Conteúdo',
          type: 'array',
          of: [{ type: 'block' }],
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'mainImage',
          title: 'Imagem Principal',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'secondaryImage',
          title: 'Imagem Secundária',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'statsSection',
      title: 'Seção de Estatísticas',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'stats',
          title: 'Estatísticas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'number',
                  title: 'Número',
                  type: 'string',
                  description: 'Ex: +27, +1000, etc',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'label',
                  title: 'Rótulo',
                  type: 'string',
                  description: 'Ex: anos de experiência',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Descrição',
                  type: 'text',
                  rows: 2,
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'number',
                  subtitle: 'label',
                },
              },
            },
          ],
          validation: (Rule: any) => Rule.required().min(3).max(4),
        },
      ],
    }),
    defineField({
      name: 'gallerySection',
      title: 'Seção Galeria de Projetos',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'projects',
          title: 'Projetos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Título do Projeto',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'image',
                  title: 'Imagem',
                  type: 'image',
                  options: { hotspot: true },
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  media: 'image',
                },
              },
            },
          ],
          validation: (Rule: any) => Rule.required().min(3).max(12),
        },
      ],
    }),
    defineField({
      name: 'valuesSection',
      title: 'Seção Nossos Valores',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'values',
          title: 'Valores',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Título',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Descrição',
                  type: 'text',
                  rows: 3,
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
          validation: (Rule: any) => Rule.required().min(3).max(6),
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Quem Somos',
      };
    },
  },
});
