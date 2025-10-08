import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'navbar',
  title: 'Menu de Navegação',
  type: 'document',
  fields: [
    defineField({
      name: 'menuItems',
      title: 'Itens do Menu',
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
              name: 'link',
              title: 'Link',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'highlighted',
              title: 'Destacado?',
              type: 'boolean',
              description: 'Mostrar com ícone de seta',
              initialValue: false,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'ctaButton',
      title: 'Botão CTA',
      type: 'object',
      fields: [
        { name: 'text', title: 'Texto', type: 'string' },
        { name: 'link', title: 'Link', type: 'string' },
      ],
    }),
  ],
});
