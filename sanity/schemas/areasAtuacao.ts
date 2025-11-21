import { defineType, defineField } from 'sanity';
import { Briefcase } from 'lucide-react';

export default defineType({
  name: 'areasAtuacao',
  title: 'Áreas de Atuação',
  type: 'document',
  icon: Briefcase,
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
    }),
    defineField({
      name: 'introText',
      title: 'Texto de Introdução',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaTitle',
      title: 'Título do CTA',
      type: 'string',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Descrição do CTA',
      type: 'text',
    }),
    defineField({
      name: 'ctaButtonText',
      title: 'Texto do Botão CTA',
      type: 'string',
    }),
    defineField({
      name: 'sectors',
      title: 'Setores',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Ícone',
              type: 'string',
              options: {
                list: [
                  { title: 'Briefcase (Corporativo)', value: 'briefcase' },
                  { title: 'Rocket (Startups)', value: 'rocket' },
                  { title: 'Users (Coworking)', value: 'users' },
                  { title: 'Heart (Clínicas)', value: 'heart' },
                  { title: 'Dumbbell (Academias)', value: 'dumbbell' },
                  { title: 'Building (Comercial)', value: 'building2' },
                ],
              },
                validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Título',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Descrição',
              type: 'text',
              rows: 4,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'features',
              title: 'Características',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule) => Rule.required().min(3).max(5),
            },
            {
              name: 'images',
              title: 'Imagens',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: { hotspot: true },
                },
              ],
              validation: (Rule) => Rule.required().min(1),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
              media: 'images.0',
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Áreas de Atuação',
      };
    },
  },
});
