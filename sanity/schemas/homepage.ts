import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    // Bloco 1: Hero
    defineField({
      name: 'heroSection',
      title: 'Bloco 1 - Hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'text',
          rows: 3,
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
        },
        {
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
        },
        {
          name: 'ctaLink',
          title: 'Link do CTA',
          type: 'string',
        },
        {
          name: 'backgroundImage',
          title: 'Imagem de Fundo',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),

    // Bloco 2: Stats
    defineField({
      name: 'statsSection',
      title: 'Bloco 2 - Estatísticas',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Título da Seção',
          type: 'string',
        },
        {
          name: 'stats',
          title: 'Estatísticas',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'number', title: 'Número', type: 'string' },
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'description', title: 'Descrição', type: 'text' },
              ],
            },
          ],
        },
      ],
    }),

    // Bloco 3: Gestão Completa
    defineField({
      name: 'managementSection',
      title: 'Bloco 3 - Gestão Completa',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'features',
          title: 'Características',
          type: 'array',
          of: [{ type: 'string' }],
        },
        {
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
        },
        {
          name: 'ctaLink',
          title: 'Link do CTA',
          type: 'string',
        },
      ],
    }),

    // Bloco 4: Expertise em Setores
    defineField({
      name: 'sectorsSection',
      title: 'Bloco 4 - Expertise em Setores',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'sectors',
          title: 'Setores',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Nome', type: 'string' },
                {
                  name: 'icon',
                  title: 'Ícone',
                  type: 'image',
                  options: { hotspot: true },
                },
                { name: 'link', title: 'Link', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),

    // Bloco 5: Por que escolher
    defineField({
      name: 'whyChooseSection',
      title: 'Bloco 5 - Por que escolher a OMMA',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'benefits',
          title: 'Benefícios',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Título', type: 'string' },
                { name: 'description', title: 'Descrição', type: 'text' },
              ],
            },
          ],
        },
      ],
    }),

    // Bloco 6: Clientes
    defineField({
      name: 'clientsSection',
      title: 'Bloco 6 - Nossos Clientes',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'clients',
          title: 'Logos dos Clientes',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'name', title: 'Nome', type: 'string' },
                {
                  name: 'logo',
                  title: 'Logo',
                  type: 'image',
                  options: { hotspot: true },
                },
              ],
            },
          ],
        },
      ],
    }),

    // Bloco 7: Metodologia
    defineField({
      name: 'methodologySection',
      title: 'Bloco 7 - Metodologia OMMA',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'string',
        },
        {
          name: 'phases',
          title: 'Fases',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'number', title: 'Número da Fase', type: 'number' },
                { name: 'name', title: 'Nome', type: 'string' },
                { name: 'title', title: 'Título', type: 'string' },
                {
                  name: 'steps',
                  title: 'Etapas',
                  type: 'array',
                  of: [{ type: 'string' }],
                },
              ],
            },
          ],
        },
        {
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
        },
        {
          name: 'ctaLink',
          title: 'Link do CTA',
          type: 'string',
        },
      ],
    }),

    // Bloco 8: Arquitetos Parceiros
    defineField({
      name: 'architectsSection',
      title: 'Bloco 8 - Arquitetos Parceiros',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
        },
        {
          name: 'ctaLink',
          title: 'Link do CTA',
          type: 'string',
        },
      ],
    }),

    // Bloco 9: Quem Somos
    defineField({
      name: 'aboutSection',
      title: 'Bloco 9 - Quem Somos',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Descrição',
          type: 'array',
          of: [{ type: 'block' }],
        },
        {
          name: 'ctaText',
          title: 'Texto do CTA',
          type: 'string',
        },
        {
          name: 'ctaLink',
          title: 'Link do CTA',
          type: 'string',
        },
      ],
    }),

    // Bloco 10: Formulário
    defineField({
      name: 'contactFormSection',
      title: 'Bloco 10 - Formulário de Contato',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Subtítulo',
          type: 'text',
        },
      ],
    }),

    // Bloco 11: Informações de Contato
    defineField({
      name: 'contactInfoSection',
      title: 'Bloco 11 - Informações de Contato',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Título',
          type: 'string',
        },
        {
          name: 'address',
          title: 'Endereço',
          type: 'text',
        },
        {
          name: 'phone',
          title: 'Telefone',
          type: 'string',
        },
        {
          name: 'emails',
          title: 'E-mails',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'email', title: 'E-mail', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
