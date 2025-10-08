import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'obrasRealizadas',
  title: 'Obras Realizadas',
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
      type: 'text',
    }),
    defineField({
      name: 'projects',
      title: 'Projetos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'clientName', title: 'Nome do Cliente', type: 'string' },
            { name: 'clientDescription', title: 'Descrição do Cliente', type: 'string' },
            { name: 'location', title: 'Local', type: 'string' },
            { name: 'area', title: 'Área de Intervenção', type: 'string' },
            { name: 'duration', title: 'Tempo de Intervenção', type: 'string' },
            {
              name: 'description',
              title: 'Descrição do Projeto',
              type: 'array',
              of: [{ type: 'block' }],
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
            {
              name: 'architect',
              title: 'Arquitetura',
              type: 'string',
            },
          ],
        },
      ],
    }),
  ],
});
