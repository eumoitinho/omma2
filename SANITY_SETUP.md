# Configuração do Sanity CMS - OMMA Engenharia

## 📋 Pré-requisitos

1. Conta no Sanity.io (crie em https://www.sanity.io/get-started)
2. Node.js instalado

## 🚀 Passos de Configuração

### 1. Criar Projeto no Sanity

```bash
# Instalar a CLI do Sanity globalmente (se ainda não tiver)
npm install -g @sanity/cli

# Fazer login
sanity login

# Criar um novo projeto (ou usar um existente)
sanity init
```

Ao executar `sanity init`, você pode escolher:
- Criar um novo projeto
- Nome do projeto: **OMMA Engenharia**
- Dataset: **production**

### 2. Configurar Variáveis de Ambiente

Copie o arquivo `.env.local.example` para `.env.local` e preencha:

```bash
cp .env.local.example .env.local
```

Edite `.env.local` com as informações do seu projeto:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=seu-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=seu-token-aqui
```

**Como encontrar essas informações:**
- **Project ID**: Disponível no painel do Sanity (https://www.sanity.io/manage)
- **Token**: Gere em https://www.sanity.io/manage > API > Tokens
  - Crie um token com permissão de **Editor** ou **Admin**

### 3. Acessar o Sanity Studio

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Acesse: **http://localhost:3000/studio**

## 📝 Populando o Conteúdo

### Homepage

1. No Studio, vá em **Homepage**
2. Crie um novo documento
3. Preencha os 11 blocos conforme o conteúdo fornecido:

#### Bloco 1 - Hero
- **Título**: "TRANSFORMANDO\nAMBIENTES\nEM RESULTADOS"
- **Subtítulo**: "Projetos de alto padrão que traduzem a identidade da sua empresa em cada detalhe."
- **CTA Text**: "FALE COM NOSSOS ESPECIALISTAS"
- **CTA Link**: "#contato"
- **Background Image**: Upload da imagem de fundo

#### Bloco 2 - Estatísticas
- **Título da Seção**: "Resultados que comprovam nossa expertise"
- **Estatísticas**:
  1. Número: "+1.000", Label: "obras entregues", Descrição: "Experiência comprovada em projetos de grande escala."
  2. Número: "+850", Label: "clientes", Descrição: "Parcerias de sucesso com empresas que confiam na OMMA."
  3. Número: "+24 anos", Label: "de experiência", Descrição: "Tradição e inovação a serviço do seu projeto corporativo."

#### Bloco 3 - Gestão Completa
- **Título**: "Gestão completa para obras rápidas e eficientes"
- **Descrição**: (Use o texto fornecido no briefing)
- **Features**:
  - "Obras a partir de 300m²"
  - "Projetos em edifícios AAA"
  - "Método Design & Built"
  - "Gestão completa da obra"
- **CTA Text**: "FAÇA SEU PROJETO COM A OMMA!"
- **CTA Link**: "#contato"

#### Bloco 4 - Expertise em Setores
- **Título**: "Expertise OMMA em diversos setores"
- **Setores**: Adicione os setores com seus ícones:
  - Corporativo
  - Saúde
  - Educação
  - Varejo
  - Infraestrutura pública

_(Continue preenchendo os outros blocos seguindo o conteúdo fornecido)_

### Páginas Individuais

Crie documentos para cada página:

1. **Quem Somos** - Preencha com o conteúdo da Pg. 1
2. **Áreas de Atuação** - Preencha com o conteúdo da Pg. 2
3. **Metodologia** - Preencha com o conteúdo da Pg. 3
4. **Obras Realizadas** - Preencha com o conteúdo da Pg. 4
5. **Trabalhe Conosco** - Preencha com o conteúdo da Pg. 5
6. **Contato** - Preencha com o conteúdo da Pg. 6

### Configurações Globais

#### Site Settings
- **Nome do Site**: "OMMA Engenharia"
- **Descrição**: "Transformando ambientes em resultados desde 1998"
- **Logo**: Upload do logo
- **Informações de Contato**:
  - Endereço: "Avenida Dr. Cardoso de Melo, 1666, 2º andar, Vila Olímpia - São Paulo/SP\n04546-005"
  - Telefone: "+55 11 3056 2340"
  - E-mails:
    - contato@omma.com.br
    - fornecedores@omma.com.br
    - trabalheaqui@omma.com.br
- **Redes Sociais**:
  - Instagram: https://www.instagram.com/omma_oficial
  - LinkedIn: https://www.linkedin.com/company/omma-desenvolvimento-e-construcoes
  - Facebook: https://www.facebook.com/omma4.0

#### Navbar
- Configure os itens do menu
- Defina o botão CTA

#### Footer
- Configure informações da empresa
- Links do footer

## 🎨 Upload de Imagens

Para fazer upload de imagens no Sanity:

1. Clique no campo de imagem
2. Arraste e solte a imagem ou clique para selecionar
3. As imagens serão automaticamente otimizadas pelo Sanity

### Imagens Necessárias

- **Hero Background**: Imagem de fundo da homepage
- **Ícones dos Setores**: Ícones para os 5 setores de atuação
- **Logos dos Clientes**: Logos de Ambev, Azul, Sensitech, Onofre, Nutrien, McDonalds, Decathlon, Unimed, Ultracargo, Movile
- **Fotos das Obras**: Imagens dos projetos realizados

## 🔧 Comandos Úteis

```bash
# Iniciar desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Deploy do Sanity Studio
sanity deploy
```

## 📚 Recursos Adicionais

- [Documentação do Sanity](https://www.sanity.io/docs)
- [Guia de GROQ (Query Language)](https://www.sanity.io/docs/groq)
- [Next.js com Sanity](https://www.sanity.io/plugins/next-sanity)

## 🆘 Problemas Comuns

### Erro: "Invalid project ID"
- Verifique se o `NEXT_PUBLIC_SANITY_PROJECT_ID` está correto no `.env.local`

### Erro: "Unauthorized"
- Verifique se o `SANITY_API_TOKEN` está correto e tem as permissões adequadas

### Imagens não aparecem
- Certifique-se de que as imagens foram carregadas corretamente no Sanity Studio
- Verifique se o token tem permissões de leitura

## 📞 Suporte

Para questões relacionadas ao Sanity, consulte:
- [Comunidade do Sanity](https://www.sanity.io/community)
- [Slack do Sanity](https://slack.sanity.io/)
