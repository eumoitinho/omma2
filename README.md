# OMMA Engenharia - Site Institucional

[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.x-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.x-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

Site institucional da OMMA Engenharia desenvolvido com Next.js 15, React 19, TypeScript e TailwindCSS 4. Inclui sistema completo de analytics com Google Tag Manager (GTM) e Google Analytics 4 (GA4), com suporte a Google Consent Mode v2.

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Arquitetura](#-arquitetura)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Tecnologias](#-tecnologias)
- [Instalação e Configuração](#-instalação-e-configuração)
- [Desenvolvimento](#-desenvolvimento)
- [Sistema de Analytics](#-sistema-de-analytics)
- [Componentes](#-componentes)
- [Deploy](#-deploy)
- [Documentação Adicional](#-documentação-adicional)

---

## 🎯 Visão Geral

Este projeto é o site institucional da OMMA Engenharia, focado em captura de leads B2B através de landing pages otimizadas. O site possui:

- **Landing Pages Segmentadas**: Para arquitetos e empresas/corporativos
- **Sistema de Analytics Robusto**: Rastreamento completo de comportamento do usuário
- **Gestão de Consentimento**: Implementação do Google Consent Mode v2
- **Performance Otimizada**: Server-Side Rendering (SSR) e otimização de imagens
- **Formulários de Lead**: Com validação e rastreamento de conversão

### Objetivos de Negócio

1. Captação de leads qualificados B2B
2. Apresentação de portfólio e credenciais
3. Segmentação de público por perfil (arquitetos vs corporativos)
4. Mensuração de performance e otimização de conversão

---

## 🏗️ Arquitetura

### Stack Tecnológico

```
┌─────────────────────────────────────────┐
│           Frontend (Next.js)            │
├─────────────────────────────────────────┤
│  React 19 + TypeScript                  │
│  TailwindCSS 4 (Styling)                │
│  Lucide React (Icons)                   │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│      Analytics & Tracking Layer         │
├─────────────────────────────────────────┤
│  Google Tag Manager (GTM)               │
│  Google Analytics 4 (GA4)               │
│  Google Consent Mode v2                 │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│         Data Collection                 │
├─────────────────────────────────────────┤
│  Custom Events                          │
│  User Behavior Tracking                 │
│  Conversion Tracking                    │
└─────────────────────────────────────────┘
```

### Fluxo de Dados

```
Usuário → Página → React Component → Analytics Hook
                                           ↓
                                    window.dataLayer
                                           ↓
                                     GTM Container
                                           ↓
                                    GA4 Property
```

---

## 📁 Estrutura do Projeto

```
omma2/
├── docs/                           # Documentação completa
│   ├── ARCHITECTURE.md            # Arquitetura detalhada
│   ├── ANALYTICS.md               # Sistema de analytics
│   ├── COMPONENTS.md              # Guia de componentes
│   ├── GTM_SETUP.md               # Configuração GTM
│   ├── DEPLOYMENT.md              # Deploy e CI/CD
│   └── gtm-container-[92].json   # Container GTM exportado
│
├── public/                        # Arquivos estáticos
│   ├── images/                   # Imagens do site
│   └── assets/                   # Outros assets
│
├── src/
│   ├── app/                      # App Router (Next.js 15)
│   │   ├── layout.tsx           # Layout root
│   │   ├── page.tsx             # Página home
│   │   ├── globals.css          # Estilos globais
│   │   ├── api/                 # API Routes
│   │   │   └── lead/
│   │   │       └── route.ts     # Endpoint de leads
│   │   └── lp/                  # Landing Pages
│   │       ├── arquitetos/
│   │       │   └── page.tsx     # LP Arquitetos
│   │       └── corporativos/
│   │           └── page.tsx     # LP Corporativos
│   │
│   ├── components/
│   │   ├── analytics/           # Componentes de analytics
│   │   │   ├── PageAnalytics.tsx        # Analytics de página
│   │   │   └── ScrollAndSections.tsx    # Tracking de scroll
│   │   │
│   │   ├── layout/              # Componentes de layout
│   │   │   ├── Navbar.tsx       # Barra de navegação
│   │   │   ├── Footer.tsx       # Rodapé
│   │   │   └── Container.tsx    # Container wrapper
│   │   │
│   │   ├── sections/            # Seções da home
│   │   │   ├── Section01.tsx    # Hero
│   │   │   ├── Section02.tsx    # Resultados
│   │   │   ├── Section03.tsx    # Sem Dor de Cabeça
│   │   │   ├── Section04.tsx    # Impacto
│   │   │   ├── Section05.tsx    # Setores
│   │   │   └── Section06.tsx    # Contato
│   │   │
│   │   ├── lp/                  # Componentes específicos de LPs
│   │   │   ├── ContactForm.tsx          # Formulário de contato
│   │   │   ├── LeadForm.tsx             # Formulário de lead
│   │   │   └── ProjectsCarousel.tsx     # Carrossel de projetos
│   │   │
│   │   ├── ui/                  # Componentes UI reutilizáveis
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── HeroCardStack.tsx
│   │   │   └── useReveal.tsx    # Hook de animação
│   │   │
│   │   ├── GTMProvider.tsx      # Provider do GTM
│   │   ├── ConsentBanner.tsx    # Banner de consentimento
│   │   └── FeedbackWidget.tsx   # Widget de feedback
│   │
│   ├── lib/
│   │   └── gtm.ts               # Biblioteca GTM/Analytics
│   │
│   └── types/
│       ├── index.ts             # Types gerais
│       └── analytics.ts         # Types de analytics
│
├── .env.local                    # Variáveis de ambiente
├── next.config.ts               # Configuração Next.js
├── tailwind.config.ts           # Configuração Tailwind
├── tsconfig.json                # Configuração TypeScript
└── package.json                 # Dependências
```

---

## 🛠️ Tecnologias

### Core
- **Next.js 15**: Framework React com App Router e RSC
- **React 19**: Biblioteca UI com Server Components
- **TypeScript 5**: Type safety e developer experience
- **TailwindCSS 4**: Utility-first CSS framework

### Analytics & Tracking
- **Google Tag Manager (GTM)**: Gerenciamento de tags
- **Google Analytics 4 (GA4)**: Analytics e relatórios
- **Google Consent Mode v2**: Gestão de consentimento

### UI & Assets
- **Lucide React**: Biblioteca de ícones
- **Google Fonts**: Fontes (DM Sans, Exo, Inter, Manrope, Roboto)

### DevOps & Tooling
- **ESLint**: Linting
- **Prettier**: Code formatting
- **Git**: Controle de versão

---

## 🚀 Instalação e Configuração

### Pré-requisitos

- Node.js 18.x ou superior
- npm, yarn ou pnpm
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/omma2.git
cd omma2

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# API Configuration (se aplicável)
NEXT_PUBLIC_API_URL=https://api.omma.com.br

# Environment
NODE_ENV=development
```

### Configuração do GTM

1. Acesse o [Google Tag Manager](https://tagmanager.google.com/)
2. Crie um novo container ou use existente
3. Importe o arquivo `docs/gtm-container-[92].json`
4. Configure o ID do GA4 na variável `[92] GA4 Measurement ID`
5. Publique o container

Para mais detalhes, consulte [GTM_SETUP.md](./docs/GTM_SETUP.md).

---

## 💻 Desenvolvimento

### Comandos

```bash
# Desenvolvimento
npm run dev              # Inicia servidor em http://localhost:3000

# Build
npm run build           # Gera build de produção
npm run start           # Inicia servidor de produção

# Linting
npm run lint            # Executa ESLint
```

### Estrutura de Desenvolvimento

#### Criar Nova Landing Page

1. Crie arquivo em `src/app/lp/[nome]/page.tsx`
2. Implemente o componente com analytics
3. Configure eventos GTM específicos

Exemplo:
```tsx
import PageAnalytics from '@/components/analytics/PageAnalytics';
import ScrollAndSections from '@/components/analytics/ScrollAndSections';

export default function MinhaLP() {
  return (
    <>
      <PageAnalytics pageId="minha-lp" />
      <ScrollAndSections pageId="minha-lp" />
      {/* Seu conteúdo */}
    </>
  );
}
```

#### Adicionar Novo Componente

1. Crie arquivo em `src/components/[categoria]/[Nome].tsx`
2. Exporte como default
3. Adicione tipos TypeScript
4. Implemente tracking se necessário

---

## 📊 Sistema de Analytics

### Eventos Rastreados

| Evento | Descrição | Trigger |
|--------|-----------|---------|
| `page_view` | Visualização de página | Carregamento da página |
| `section_view` | Visualização de seção | Seção 40% visível |
| `scroll_depth` | Profundidade de scroll | 25%, 50%, 75%, 100% |
| `cta_click` | Click em CTA | Click em botões principais |
| `sector_card_cta` | Click em card de setor | Click em cards de setores |
| `slide_view` | Visualização de slide | Slide visível no carrossel |
| `carousel_navigation` | Navegação no carrossel | Click em prev/next/dot |
| `form_view` | Visualização de formulário | Formulário visível |
| `form_submit_attempt` | Tentativa de envio | Submit do formulário |
| `form_submit_success` | Envio bem-sucedido | Sucesso no envio |
| `lead_submit` | Lead capturado (alias) | Mesmo que success |
| `form_submit_error` | Erro no envio | Falha no envio |
| `user_identify` | Identificação de usuário | Email hash após conversão |
| `first_cta_click_time` | Tempo até primeiro CTA | Primeiro click em CTA |

### DataLayer

Estrutura do dataLayer:

```typescript
window.dataLayer.push({
  event: 'cta_click',
  event_category: 'engagement',
  event_label: 'hero_cta',
  location: 'hero',
  ts: 1234567890
});
```

### Consent Mode

Implementação do Google Consent Mode v2:

```typescript
{
  ad_storage: 'denied',
  analytics_storage: 'granted',
  functionality_storage: 'granted',
  personalization_storage: 'denied',
  security_storage: 'granted'
}
```

Para documentação completa, consulte [ANALYTICS.md](./docs/ANALYTICS.md).

---

## 🧩 Componentes

### Analytics

- **PageAnalytics**: Rastreamento de página
- **ScrollAndSections**: Rastreamento de scroll e seções

### Layout

- **Navbar**: Navegação principal
- **Footer**: Rodapé com links
- **Container**: Wrapper com padding consistente

### Forms

- **ContactForm**: Formulário de contato completo
- **LeadForm**: Formulário simplificado de captura

### UI

- **Button**: Botão estilizado
- **Card**: Card reutilizável
- **Section**: Wrapper de seção
- **HeroCardStack**: Hero com cards empilhados

Para documentação completa, consulte [COMPONENTS.md](./docs/COMPONENTS.md).

---

## 🚢 Deploy

### Vercel (Recomendado)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build Manual

```bash
# Build
npm run build

# Start production server
npm start
```

Para mais detalhes, consulte [DEPLOYMENT.md](./docs/DEPLOYMENT.md).

---

## 📚 Documentação Adicional

- [ARCHITECTURE.md](./docs/ARCHITECTURE.md) - Arquitetura detalhada do sistema
- [ANALYTICS.md](./docs/ANALYTICS.md) - Sistema de analytics e tagueamento
- [COMPONENTS.md](./docs/COMPONENTS.md) - Guia completo de componentes
- [GTM_SETUP.md](./docs/GTM_SETUP.md) - Setup e configuração do GTM
- [DEPLOYMENT.md](./docs/DEPLOYMENT.md) - Deploy e CI/CD

---

## 📝 License

Este projeto é propriedade da OMMA Engenharia. Todos os direitos reservados.

---

## 👥 Equipe

**OMMA Engenharia**
Website: [omma.com.br](https://omma.com.br)
Email: contato@omma.com.br

---

## 🔄 Changelog

### [1.0.0] - 2025-09-30
- ✅ Implementação inicial do site
- ✅ Sistema completo de analytics com GTM e GA4
- ✅ Landing pages para arquitetos e corporativos
- ✅ Formulários de captura de lead
- ✅ Google Consent Mode v2
- ✅ Widget de feedback
- ✅ Documentação completa