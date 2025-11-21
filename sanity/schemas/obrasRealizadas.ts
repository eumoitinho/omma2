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
            {
              name: 'clientName',
              title: 'Nome do Cliente',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'clientDescription',
              title: 'Descrição do Cliente',
              type: 'string',
            },
            {
              name: 'location',
              title: 'Local',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'area',
              title: 'Área de Intervenção',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'duration',
              title: 'Tempo de Intervenção',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Descrição do Projeto',
              type: 'array',
              of: [{ type: 'block' }],
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
            {
              name: 'fallbackImage',
              title: 'Fallback Image (caminho local)',
              type: 'string',
              description: 'Caminho relativo para imagem fallback (usado por scripts locais).',
            },
            {
              name: 'localImages',
              title: 'Local Images (caminhos locais)',
              type: 'array',
              of: [
                { type: 'string' }
              ],
              description: 'Lista de caminhos locais para imagens (apenas para uso interno).',
            },
            {
              name: 'architect',
              title: 'Arquitetura',
              type: 'string',
            },
          ],
          preview: {
            select: {
              title: 'clientName',
              subtitle: 'location',
              media: 'images.0',
            },
            prepare({ title, subtitle, media }) {
              return {
                title: title || 'Projeto sem nome',
                subtitle: subtitle || 'Local não definido',
                media,
              };
            },
          },
        },
      ],
    }),
  ],
});
