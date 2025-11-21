import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'contato',
  title: 'Contato',
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
      name: 'address',
      title: 'Endereço',
      type: 'text',
    }),
    defineField({
      name: 'phone',
      title: 'Telefone',
      type: 'string',
    }),
    defineField({
      name: 'emails',
      title: 'E-mails',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'email',
              title: 'E-mail',
              type: 'string',
              validation: (Rule) => Rule.required().email(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'email',
            },
          },
        },
      ],
    }),
  ],
});
