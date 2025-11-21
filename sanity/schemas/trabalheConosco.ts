import { defineType, defineField } from 'sanity';
import { Users } from 'lucide-react';

export default defineType({
  name: 'trabalheConosco',
  title: 'Trabalhe Conosco',
  type: 'document',
  icon: Users,
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
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'benefits',
      title: 'Benefícios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              title: 'Ícone',
              type: 'string',
              options: {
                list: [
                  { title: 'Trophy (Crescimento)', value: 'trophy' },
                  { title: 'Heart (Bem-estar)', value: 'heart' },
                  { title: 'Users (Equipe)', value: 'users' },
                  { title: 'Zap (Inovação)', value: 'zap' },
                  { title: 'Award (Reconhecimento)', value: 'award' },
                  { title: 'Book (Aprendizado)', value: 'book' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Título',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Descrição',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'formTitle',
      title: 'Título do Formulário',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'formDescription',
      title: 'Descrição do Formulário',
      type: 'text',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Trabalhe Conosco',
      };
    },
  },
});
