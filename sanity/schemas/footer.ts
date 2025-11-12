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
      name: 'quickLinksTitle',
      title: 'Título da Seção de Links Rápidos',
      type: 'string',
      initialValue: 'Links Rápidos',
    }),
    defineField({
      name: 'links',
      title: 'Links Rápidos',
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
    defineField({
      name: 'contactTitle',
      title: 'Título da Seção de Contato',
      type: 'string',
      initialValue: 'Contato',
    }),
    defineField({
      name: 'contactEmail',
      title: 'E-mail de Contato',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Telefone de Contato',
      type: 'string',
    }),
    defineField({
      name: 'addressTitle',
      title: 'Título da Seção de Endereço',
      type: 'string',
      initialValue: 'Endereço',
    }),
    defineField({
      name: 'address',
      title: 'Endereço Completo',
      type: 'text',
      description: 'Use quebras de linha para formatar o endereço',
    }),
    defineField({
      name: 'legalLinks',
      title: 'Links Legais (Política/Termos)',
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
