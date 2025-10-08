import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Rodapé',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Nome da Empresa',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'copyrightText',
      title: 'Texto de Copyright',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Links do Footer',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Texto', type: 'string' },
            { name: 'url', title: 'URL', type: 'string' },
          ],
        },
      ],
    }),
  ],
});
