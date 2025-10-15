import { defineType, defineField } from 'sanity';
import { GitBranch } from 'lucide-react';

export default defineType({
  name: 'metodologia',
  title: 'Metodologia',
  type: 'document',
  icon: GitBranch,
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
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
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
      name: 'phases',
      title: 'Fases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'phase',
              title: 'Label da Fase (ex: FASE 1)',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Título',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'items',
              title: 'Itens',
              type: 'array',
              of: [{ type: 'string' }],
              validation: (Rule: any) => Rule.required().min(1),
            },
          ],
          preview: {
            select: {
              phase: 'phase',
              title: 'title',
            },
            prepare({ phase, title }) {
              return {
                title: `${phase}: ${title}`,
              };
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
        title: 'Metodologia OMMA',
      };
    },
  },
});
