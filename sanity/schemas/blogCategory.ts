import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'blogCategory',
  title: 'Categoria de Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'color',
      title: 'Cor',
      type: 'string',
      description: 'Cor hexadecimal para identificação visual (ex: #FFC107)',
      initialValue: '#FFC107',
    }),
  ],
});
