# Configuração Sanity - Páginas Editáveis

## ✅ O que foi implementado

Todas as páginas agora são completamente editáveis pelo Sanity Studio:

### Páginas Integradas:
1. ✅ **Áreas de Atuação** (/areas-de-atuacao)
   - Hero section com título e imagem
   - Setores com ícones, títulos, descrições e imagens
   - Seção CTA personalizável

2. ✅ **Metodologia** (/metodologia)
   - Hero section com título e imagem
   - Fases da metodologia editáveis
   - Seção CTA personalizável

3. ✅ **Trabalhe Conosco** (/trabalhe-conosco)
   - Hero section com título e imagem
   - Benefícios com ícones e descrições
   - Formulário de candidatura

4. ✅ **Quem Somos** (já estava integrado)
5. ✅ **Obras** (já estava integrado)
6. ✅ **Obras Realizadas** (já estava integrado)
7. ✅ **Contato** (já estava integrado)

## 🚀 Como acessar o Sanity Studio

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse o Sanity Studio em: http://localhost:3000/studio

3. Faça login com suas credenciais do Sanity

## 📝 Como editar cada página

### Áreas de Atuação

1. No Sanity Studio, vá em **"Áreas de Atuação"**
2. Edite os campos:
   - **Título da Página**: Meta título da página
   - **Título Hero**: Texto principal do hero
   - **Imagem Hero**: Imagem de fundo (opcional)
   - **Texto de Introdução**: Parágrafo abaixo do título
   - **Setores**: Adicione/edite setores
     - Escolha um ícone da lista
     - Adicione título, descrição e características
     - Adicione até 5 imagens por setor
   - **CTA**: Título, descrição e texto do botão

### Metodologia

1. No Sanity Studio, vá em **"Metodologia"**
2. Edite os campos:
   - **Título da Página**: Meta título
   - **Título Hero**: Texto principal
   - **Imagem Hero**: Imagem de fundo (opcional)
   - **Subtítulo**: Descrição abaixo do título
   - **Fases**: Adicione/edite fases da metodologia
     - Label da fase (ex: FASE 1)
     - Título da fase
     - Itens/etapas da fase
   - **CTA**: Título, descrição e texto do botão

### Trabalhe Conosco

1. No Sanity Studio, vá em **"Trabalhe Conosco"**
2. Edite os campos:
   - **Título da Página**: Meta título
   - **Título Hero**: Texto principal
   - **Imagem Hero**: Imagem de fundo (opcional)
   - **Descrição**: Parágrafo abaixo do título
   - **Benefícios**: Adicione/edite benefícios
     - Escolha um ícone da lista
     - Adicione título e descrição
   - **Título do Formulário**: Título do formulário
   - **Descrição do Formulário**: Subtítulo do formulário

## 🎨 Ícones Disponíveis

### Áreas de Atuação:
- **Briefcase** (Corporativo)
- **Rocket** (Startups)
- **Users** (Coworking)
- **Heart** (Clínicas)
- **Dumbbell** (Academias)
- **Building** (Comercial)

### Trabalhe Conosco:
- **Trophy** (Crescimento)
- **Heart** (Bem-estar)
- **Users** (Equipe)
- **Zap** (Inovação)
- **Award** (Reconhecimento)
- **Book** (Aprendizado)

## 🔄 Revalidação

Todas as páginas têm revalidação automática a cada 60 segundos. Isso significa que:
- Alterações no Sanity aparecem em até 1 minuto no site
- O site mantém alta performance com cache

## ✨ Dados Iniciais

Dados de exemplo foram criados automaticamente. Para recriá-los:

```bash
npx tsx scripts/seed-sanity-pages.ts
```

## 🎯 Próximos Passos

1. Acesse o Sanity Studio
2. Adicione imagens aos setores em Áreas de Atuação
3. Adicione imagens hero para cada página
4. Personalize todos os textos
5. Teste as páginas no navegador

## 📊 Status dos Testes

- ✅ Build de produção: OK
- ✅ Verificação de tipos: OK
- ✅ Integração Sanity: OK
- ✅ Todas as páginas: FUNCIONANDO

---

**Pronto!** Todas as páginas agora são completamente editáveis pelo Sanity Studio. 🎉
