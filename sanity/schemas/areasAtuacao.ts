import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'areasAtuacao',
  title: 'Áreas de Atuação',
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
      name: 'introText',
      title: 'Texto de Introdução',
      type: 'text',
    }),
    defineField({
      name: 'areas',
      title: 'Áreas',
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
              rows: 4,
              validation: (Rule: any) => Rule.required(),
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
    }),
  ],
});
