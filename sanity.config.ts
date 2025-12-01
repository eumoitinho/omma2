import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'OMMA Engenharia',

  projectId: '6xp8522n',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    // Cast para any para evitar conflito de tipos entre versões do @sanity/types
    types: schemaTypes as any,
  },

  basePath: '/studio',

  apiVersion: '2024-01-01',
});
