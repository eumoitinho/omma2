import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'metodologia',
  title: 'Metodologia',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Título da Página',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Título Hero',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
    }),
    defineField({
      name: 'introContent',
      title: 'Conteúdo Introdutório',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'methodologyTitle',
      title: 'Título da Metodologia',
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
            { name: 'number', title: 'Número da Fase', type: 'number' },
            { name: 'name', title: 'Nome', type: 'string' },
            { name: 'title', title: 'Título', type: 'string' },
            {
              name: 'steps',
              title: 'Etapas',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    }),
  ],
});
