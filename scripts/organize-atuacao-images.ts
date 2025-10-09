// Script para mapear imagens de /public/atuacao por nicho/cliente

const imagesByClient = {
  unimed: [
    '/atuacao/image_2_uni2-1.jpg',
    '/atuacao/image_3_uni3-1.jpg',
    '/atuacao/image_4_uni4-1.jpg',
    '/atuacao/image_21_uni1-1.jpg',
    '/atuacao/image_22_uni2-1.jpg',
    '/atuacao/image_23_uni3-1.jpg',
    '/atuacao/image_24_uni4-1.jpg',
  ],
  ambev: [
    '/atuacao/image_5_ambev1.jpg',
    '/atuacao/image_6_ambev2.jpg',
    '/atuacao/image_7_ambev3.jpg',
    '/atuacao/image_8_ambev4.jpg',
    '/atuacao/image_9_ambev5.jpg',
    '/atuacao/image_25_ambev1.jpg',
    '/atuacao/image_26_ambev2.jpg',
    '/atuacao/image_27_ambev3.jpg',
  ],
  melhoramentos: [
    '/atuacao/image_10_melhoramentos1.jpg',
    '/atuacao/image_11_melhoramentos2.jpg',
    '/atuacao/image_12_melhoramentos3.jpg',
    '/atuacao/image_13_melhoramentos4.jpg',
  ],
  movile: [
    '/atuacao/image_14_movile1-1.jpg',
    '/atuacao/image_15_movile2-1.jpg',
    '/atuacao/image_16_movile3-1.jpg',
  ],
  scor: [
    '/atuacao/image_17_scor1.jpg',
    '/atuacao/image_18_scor2.jpg',
    '/atuacao/image_19_scor3.jpg',
    '/atuacao/image_20_scor4.jpg',
  ],
  fecomercio: [
    '/atuacao/image_28_fcomercio3.jpg',
    '/atuacao/image_29_fcomercio4.jpg',
    '/atuacao/image_30_fcomercio5.jpg',
    '/atuacao/image_38_fcomercio1.jpg',
    '/atuacao/image_39_fcomercio2.jpg',
    '/atuacao/image_40_fcomercio3.jpg',
    '/atuacao/image_41_fcomercio4.jpg',
    '/atuacao/image_42_fcomercio5.jpg',
  ],
  dante: [
    '/atuacao/image_31_dante1.jpg',
    '/atuacao/image_32_dante2.jpg',
    '/atuacao/image_33_dante3.jpg',
    '/atuacao/image_34_dante4.jpg',
    '/atuacao/image_35_dante5.jpg',
    '/atuacao/image_36_dante6.jpg',
    '/atuacao/image_37_dante7.jpg',
    '/atuacao/image_43_dante1.jpg',
    '/atuacao/image_44_dante2.jpg',
    '/atuacao/image_45_dante3.jpg',
  ],
  praca: [
    '/atuacao/image_46_praca7.jpg',
    '/atuacao/image_47_praca8.jpg',
    '/atuacao/image_48_praca9.jpg',
    '/atuacao/image_49_praca1.jpg',
    '/atuacao/image_50_praca2.jpg',
    '/atuacao/image_51_praca3.jpg',
    '/atuacao/image_52_praca4.jpg',
    '/atuacao/image_53_praca5.jpg',
    '/atuacao/image_54_praca6.jpg',
    '/atuacao/image_55_praca7.jpg',
    '/atuacao/image_56_praca8.jpg',
    '/atuacao/image_57_praca9.jpg',
    '/atuacao/image_58_praca1.jpg',
    '/atuacao/image_59_praca2.jpg',
    '/atuacao/image_60_praca3.jpg',
  ],
  nutrien: [
    '/atuacao/image_61_Nutrien-Uberlandia-6-1.jpg',
    '/atuacao/image_62_Nutrien-Uberlandia-7-1-1024x768.jpg',
    '/atuacao/image_63_Nutrien-Uberlandia-8.jpg',
    '/atuacao/image_74_Nutrien-Uberlandia-1.jpg',
    '/atuacao/image_75_Nutrien-Uberlandia-2-1.jpg',
    '/atuacao/image_76_Nutrien-Uberlandia-3-1.jpg',
    '/atuacao/image_77_Nutrien-Uberlandia-4-1.jpg',
    '/atuacao/image_78_Nutrien-Uberlandia-5-1.jpg',
    '/atuacao/image_79_Nutrien-Uberlandia-6-1.jpg',
    '/atuacao/image_80_Nutrien-Uberlandia-7-1-1024x768.jpg',
    '/atuacao/image_81_Nutrien-Uberlandia-8.jpg',
  ],
  burgerKing: [
    '/atuacao/image_64_Burguer-King-Boituva-3-1.jpg',
    '/atuacao/image_65_Burguer-King-Pamplona-1-1.jpg',
    '/atuacao/image_66_Burguer-King-Pamplona-2-1.jpg',
    '/atuacao/image_67_Burguer-King-Pamplona-3-1.jpg',
    '/atuacao/image_68_Burguer-King-Pamplona-4-1.jpg',
    '/atuacao/image_82_Burguer-King-Boituva-3-1.jpg',
    '/atuacao/image_83_Burguer-King-Pamplona-1-1.jpg',
    '/atuacao/image_84_Burguer-King-Pamplona-2-1.jpg',
  ],
  misha: [
    '/atuacao/image_69_Misha-1.jpg',
    '/atuacao/image_70_Misha-2.jpg',
    '/atuacao/image_71_Misha-3.jpg',
    '/atuacao/image_72_Misha-4.jpg',
    '/atuacao/image_73_Misha-5.jpg',
  ],
};

// Mapeamento por setor
export const sectorProjects = {
  saude: {
    title: 'Saúde',
    description: 'Infraestrutura hospitalar e clínicas com padrões técnicos rigorosos',
    projects: [
      { name: 'Unimed', images: imagesByClient.unimed },
    ]
  },
  corporativo: {
    title: 'Corporativo',
    description: 'Escritórios e espaços corporativos modernos',
    projects: [
      { name: 'Movile', images: imagesByClient.movile },
      { name: 'SCOR', images: imagesByClient.scor },
      { name: 'Fecomércio', images: imagesByClient.fecomercio },
    ]
  },
  industrial: {
    title: 'Industrial e Logística',
    description: 'Plantas industriais e centros de distribuição',
    projects: [
      { name: 'Ambev', images: imagesByClient.ambev },
      { name: 'Nutrien', images: imagesByClient.nutrien },
      { name: 'Melhoramentos', images: imagesByClient.melhoramentos },
    ]
  },
  varejo: {
    title: 'Varejo',
    description: 'Projetos comerciais e restaurantes',
    projects: [
      { name: 'Burger King', images: imagesByClient.burgerKing },
      { name: 'Misha', images: imagesByClient.misha },
    ]
  },
  infraestrutura: {
    title: 'Infraestrutura Pública',
    description: 'Obras públicas e espaços comunitários',
    projects: [
      { name: 'Praça da Cidadania', images: imagesByClient.praca },
      { name: 'Dante Pazzanese', images: imagesByClient.dante },
    ]
  },
};

console.log('Imagens organizadas por setor:', JSON.stringify(sectorProjects, null, 2));
