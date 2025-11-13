// Import all schema types
import homepage from './homepage';
import siteSettings from './siteSettings';
import quemSomos from './quemSomos';
import areasAtuacao from './areasAtuacao';
import metodologia from './metodologia';
import obrasRealizadas from './obrasRealizadas';
import trabalheConosco from './trabalheConosco';
import contato from './contato';
import navbar from './navbar';
import footer from './footer';
import blogCategory from './blogCategory';
import blogPost from './blogPost';

export const schemaTypes = [
  // Site Settings
  siteSettings,
  navbar,
  footer,

  // Pages
  homepage,
  quemSomos,
  areasAtuacao,
  metodologia,
  obrasRealizadas,
  trabalheConosco,
  contato,

  // Blog
  blogCategory,
  blogPost,
];
