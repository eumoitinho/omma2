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
            { name: 'title', title: 'Título', type: 'string' },
            { name: 'description', title: 'Descrição', type: 'text' },
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
        },
      ],
    }),
  ],
});
