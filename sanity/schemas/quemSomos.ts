import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'quemSomos',
  title: 'Quem Somos',
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
      name: 'introSection',
      title: 'Seção de Introdução',
      type: 'object',
      fields: [
        {
          name: 'content',
          title: 'Conteúdo',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    }),
    defineField({
      name: 'purposeSection',
      title: 'Seção Nosso Propósito',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'content',
          title: 'Conteúdo',
          type: 'array',
          of: [{ type: 'block' }],
        },
      ],
    }),
  ],
});
