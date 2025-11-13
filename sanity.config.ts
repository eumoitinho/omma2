import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
// import { codeInput } from '@sanity/code-input'; // Temporariamente desabilitado para testar deploy
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'default',
  title: 'OMMA Engenharia',

  projectId: '6xp8522n',
  dataset: 'production',

  plugins: [structureTool(), visionTool()], // codeInput() temporariamente removido

  schema: {
    types: schemaTypes,
  },

  basePath: '/studio',
  
  apiVersion: '2024-01-01',
});
