import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'trabalheConosco',
  title: 'Trabalhe Conosco',
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
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'formTitle',
      title: 'Título do Formulário',
      type: 'string',
    }),
  ],
});
