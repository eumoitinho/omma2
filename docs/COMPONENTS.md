# Guia de Componentes

Documentação completa de todos os componentes React do projeto OMMA Engenharia.

---

## 📋 Índice

- [Estrutura de Componentes](#estrutura-de-componentes)
- [Analytics](#analytics)
- [Layout](#layout)
- [Sections](#sections)
- [Landing Pages](#landing-pages)
- [UI Components](#ui-components)
- [Core](#core)
- [Convenções e Padrões](#convenções-e-padrões)

---

## Estrutura de Componentes

```
src/components/
├── analytics/           # Componentes de rastreamento
│   ├── PageAnalytics.tsx
│   └── ScrollAndSections.tsx
├── layout/             # Componentes de layout global
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── Container.tsx
├── sections/           # Seções da home page
│   ├── Section01.tsx   # Hero
│   ├── Section02.tsx   # Resultados
│   ├── Section03.tsx   # Sem Dor
│   ├── Section04.tsx   # Impacto
│   ├── Section05.tsx   # Setores
│   └── Section06.tsx   # Contato
├── lp/                 # Componentes de landing pages
│   ├── ContactForm.tsx
│   ├── LeadForm.tsx
│   └── ProjectsCarousel.tsx
├── ui/                 # Componentes UI reutilizáveis
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Section.tsx
│   ├── Logo.tsx
│   ├── HeroCardStack.tsx
│   └── useReveal.tsx
├── GTMProvider.tsx     # Provider GTM
├── ConsentBanner.tsx   # Banner de cookies
└── FeedbackWidget.tsx  # Widget de feedback
```

---

## Analytics

### PageAnalytics

**Arquivo**: `src/components/analytics/PageAnalytics.tsx`

Componente para rastreamento de visualização de página e hero section.

#### Props

```typescript
interface PageAnalyticsProps {
  pageId: string; // Identificador único da página
}
```

#### Uso

```tsx
import PageAnalytics from '@/components/analytics/PageAnalytics';

export default function MinhaPage() {
  return (
    <>
      <PageAnalytics pageId="minha_pagina" />
      {/* Seu conteúdo */}
    </>
  );
}
```

#### Funcionalidades

1. **Page View Tracking**
   - Dispara `page_view` no carregamento
   - Marca timestamp para cálculo de timing
   - Captura pathname

2. **Hero Section Tracking**
   - Observa elemento `#hero`
   - Dispara `section_view` quando 40% visível
   - Desconecta observer após disparo

#### Eventos Disparados

- `page_view`: Carregamento da página
- `section_view`: Hero section visível

---

### ScrollAndSections

**Arquivo**: `src/components/analytics/ScrollAndSections.tsx`

Componente para rastreamento de scroll depth e visualização de seções.

#### Props

```typescript
interface ScrollAndSectionsProps {
  pageId: string; // Identificador único da página
}
```

#### Uso

```tsx
import ScrollAndSections from '@/components/analytics/ScrollAndSections.tsx';

export default function MinhaPage() {
  return (
    <>
      <ScrollAndSections pageId="minha_pagina" />

      <section id="hero">{/* ... */}</section>
      <section id="resultados">{/* ... */}</section>
      <section id="contato">{/* ... */}</section>
    </>
  );
}
```

#### Funcionalidades

1. **Section Impressions**
   - Observa seções definidas em `SECTION_IDS`
   - Dispara quando 40% visível
   - Garante disparo único por seção

2. **Scroll Depth**
   - Rastreia marcos de 25%, 50%, 75%, 100%
   - Calcula baseado em scroll total da página
   - Remove listener após 100%

#### Seções Observadas

```typescript
const SECTION_IDS = [
  'hero',
  'resultados',
  'sem-dor',
  'impacto',
  'setores',
  'comparativo',
  'metodologia',
  'clientes',
  'projetos',
  'porque-escolher',
  'contato'
];
```

#### Eventos Disparados

- `section_view`: Seção visível (para cada ID)
- `scroll_depth`: Marcos de scroll (25, 50, 75, 100)

---

## Layout

### Navbar

**Arquivo**: `src/components/layout/Navbar.tsx`

Barra de navegação principal do site.

#### Estrutura

```tsx
<nav>
  <Container>
    <Logo />
    <NavigationLinks />
    <CTAButton />
  </Container>
</nav>
```

#### Features

- Logo clicável (link para home)
- Links de navegação
- Botão CTA principal
- Sticky on scroll (opcional)
- Responsivo (mobile menu)

#### Estilo

- Background: Preto com transparência
- Font: Inter/Exo
- Altura: 80px
- Z-index: 50

---

### Footer

**Arquivo**: `src/components/layout/Footer.tsx`

Rodapé do site com informações e links.

#### Estrutura

```tsx
<footer>
  <Container>
    <FooterTop>
      <Logo />
      <SocialLinks />
    </FooterTop>
    <FooterLinks>
      <LinkColumn />
      <LinkColumn />
    </FooterLinks>
    <FooterBottom>
      <Copyright />
      <LegalLinks />
    </FooterBottom>
  </Container>
</footer>
```

#### Seções

1. **Footer Top**: Logo e redes sociais
2. **Footer Links**: Colunas de links organizados
3. **Footer Bottom**: Copyright e links legais

#### Estilo

- Background: Preto
- Padding: 4rem vertical
- Border-top: Sutil linha branca

---

### Container

**Arquivo**: `src/components/layout/Container.tsx`

Wrapper para conteúdo com padding e max-width consistentes.

#### Props

```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
```

#### Uso

```tsx
import Container from '@/components/layout/Container';

<Container>
  <h1>Título</h1>
  <p>Conteúdo</p>
</Container>
```

#### Estilo Padrão

- `max-width`: 1280px (xl breakpoint)
- `padding-x`: 1.5rem (mobile), 2rem (desktop)
- `margin-x`: auto (centralizado)

---

## Sections

Componentes que compõem a home page.

### Section01 - Hero

**Arquivo**: `src/components/sections/Section01.tsx`

Seção hero principal da home page.

#### Estrutura

```tsx
<section id="hero">
  <HeroCardStack />
  <Heading />
  <Subheading />
  <CTAButtons />
  <Stats />
</section>
```

#### Features

- Hero cards empilhados com imagens
- Título e subtítulo principal
- Dois CTAs (primário e secundário)
- Estatísticas em destaque
- Background gradiente animado

#### Analytics

- `section_view` no PageAnalytics
- `cta_click` nos botões

---

### Section02 - Resultados

**Arquivo**: `src/components/sections/Section02.tsx`

Seção de resultados e diferenciais.

#### Conteúdo

- Título da seção
- Grid de resultados/métricas
- Cards com ícones e números
- Breve descrição de cada resultado

#### Analytics

- `section_view` quando visível

---

### Section03 - Sem Dor de Cabeça

**Arquivo**: `src/components/sections/Section03.tsx`

Seção focada em pain points e soluções.

#### Conteúdo

- Problema (dores do cliente)
- Solução (como a OMMA resolve)
- Benefícios visuais
- CTA secundário

#### Analytics

- `section_view` quando visível
- `cta_click` no botão

---

### Section04 - Impacto

**Arquivo**: `src/components/sections/Section04.tsx`

Seção demonstrando impacto e cases de sucesso.

#### Conteúdo

- Título de impacto
- Cases destacados
- Métricas de resultados
- Depoimentos (opcional)

---

### Section05 - Setores

**Arquivo**: `src/components/sections/Section05.tsx`

Seção de setores atendidos.

#### Conteúdo

- Grid de cards de setores
- Ícone + Nome + Descrição
- Botão CTA em cada card

#### Analytics

- `section_view` quando visível
- `sector_card_cta` ao clicar em card

---

### Section06 - Contato

**Arquivo**: `src/components/sections/Section06.tsx`

Seção de contato com formulário.

#### Estrutura

```tsx
<section id="contato">
  <ContactInfo />
  <ContactForm />
</section>
```

#### Features

- Informações de contato
- Formulário completo
- Mapa ou imagem de localização (opcional)

#### Analytics

- `section_view` quando visível
- Eventos do formulário (ver ContactForm)

---

## Landing Pages

### ContactForm

**Arquivo**: `src/components/lp/ContactForm.tsx`

Formulário completo de contato para captura de leads.

#### Props

Nenhuma prop obrigatória. Componente standalone.

#### Campos

```typescript
interface ContactFormData {
  nome: string;
  email: string;
  empresa: string;
  orcamento: string;      // Select: 250k-500k, 500k-1m, 1m-3m, custom
  prazo: string;          // Select: asap, 1-2m, 3m+
  servico: string;        // Select: Obra completa, Retrofit, etc
  detalhes: string;       // Textarea
}
```

#### Estados

```typescript
type FormStatus = 'idle' | 'sending' | 'ok' | 'error';
```

#### Validação

- `nome`: required
- `email`: required, type="email"
- Outros campos: opcionais

#### Fluxo

```
1. Usuário preenche formulário
   ↓
2. Click em "Enviar interesse"
   ↓
3. Status → 'sending'
   ↓
4. form_submit_attempt disparado
   ↓
5. Simulação de envio (800ms)
   ↓
6. Sucesso:
   - Status → 'ok'
   - form_submit_success + lead_submit disparados
   - user_identify disparado (com email hash)
   - Mensagem de sucesso exibida
   ↓
7. Erro:
   - Status → 'error'
   - form_submit_error disparado
   - Mensagem de erro exibida
   ↓
8. Reset status após 4s
```

#### Analytics

- `form_view`: Montagem do componente
- `form_submit_attempt`: Submit do form
- `form_submit_success`: Sucesso
- `lead_submit`: Alias de success
- `form_submit_error`: Erro
- `user_identify`: Hash do email após sucesso

#### Hash de Email

```typescript
// SHA-256 do email (lowercased e trimmed)
const encoder = new TextEncoder();
const bytes = encoder.encode(email.trim().toLowerCase());
const digest = await crypto.subtle.digest('SHA-256', bytes);
const hashArray = Array.from(new Uint8Array(digest));
const email_hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
```

#### Uso

```tsx
import ContactForm from '@/components/lp/ContactForm';

<section id="contato">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-1">
      <h2>Entre em contato</h2>
      <p>Informações...</p>
    </div>
    <ContactForm />
  </div>
</section>
```

---

### LeadForm

**Arquivo**: `src/components/lp/LeadForm.tsx`

Formulário simplificado de captura de lead.

#### Props

```typescript
interface LeadFormProps {
  formId?: string;          // ID para analytics (padrão: 'lead_form')
  title?: string;           // Título do formulário
  buttonText?: string;      // Texto do botão (padrão: 'Enviar')
}
```

#### Campos

```typescript
interface LeadFormData {
  nome: string;
  email: string;
  telefone?: string;
}
```

#### Diferenças do ContactForm

- Menos campos (apenas essenciais)
- Mais rápido para preenchimento
- Foco em captura rápida
- Usado em modais/pop-ups

#### Uso

```tsx
import LeadForm from '@/components/lp/LeadForm';

<LeadForm
  formId="popup_lead_form"
  title="Receba uma proposta"
  buttonText="Quero receber"
/>
```

---

### ProjectsCarousel

**Arquivo**: `src/components/lp/ProjectsCarousel.tsx`

Carrossel de projetos com navegação.

#### Props

```typescript
interface ProjectsCarouselProps {
  projects: Project[];
}

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category?: string;
}
```

#### Features

1. **Navegação**
   - Setas prev/next
   - Dots de navegação
   - Auto-play (opcional)
   - Swipe touch

2. **Transições**
   - Slide suave
   - Fade (opcional)
   - Customizável

3. **Responsivo**
   - Mobile: 1 slide
   - Tablet: 2 slides
   - Desktop: 3 slides

#### Analytics

- `slide_view`: Quando slide visível
- `carousel_navigation`: Click em prev/next/dot

#### Implementação

```typescript
function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Prev
  function handlePrev() {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    trackEvent({
      event: 'carousel_navigation',
      event_category: 'engagement',
      event_label: 'prev',
      direction: 'prev'
    });
  }

  // Next
  function handleNext() {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    trackEvent({
      event: 'carousel_navigation',
      event_category: 'engagement',
      event_label: 'next',
      direction: 'next'
    });
  }

  // Dot
  function handleDot(index: number) {
    setCurrentIndex(index);
    trackEvent({
      event: 'carousel_navigation',
      event_category: 'engagement',
      event_label: 'dot',
      direction: 'dot',
      slide_index: index
    });
  }

  // Track slide view
  useEffect(() => {
    if (projects[currentIndex]) {
      trackEvent({
        event: 'slide_view',
        event_category: 'engagement',
        event_label: projects[currentIndex].id,
        slide_index: currentIndex
      });
    }
  }, [currentIndex, projects]);

  return (/* JSX */);
}
```

#### Uso

```tsx
import ProjectsCarousel from '@/components/lp/ProjectsCarousel';

const projects = [
  {
    id: 'projeto-1',
    title: 'Edifício Comercial ABC',
    description: '15.000m² de área construída',
    image: '/images/projects/abc.jpg',
    category: 'Comercial'
  },
  // ...
];

<section id="projetos">
  <h2>Nossos Projetos</h2>
  <ProjectsCarousel projects={projects} />
</section>
```

---

## UI Components

### Button

**Arquivo**: `src/components/ui/Button.tsx`

Botão estilizado reutilizável.

#### Props

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}
```

#### Variantes

**Primary**
- Background: Amber-400
- Text: Neutral-900
- Hover: Amber-300
- Shadow: Amber-400/40

**Secondary**
- Background: Transparent
- Text: White
- Border: White/20
- Hover: White/10

**Ghost**
- Background: None
- Text: White/70
- Hover: White

#### Tamanhos

- `sm`: px-3 py-1.5, text-sm
- `md`: px-4 py-2.5, text-base
- `lg`: px-6 py-3.5, text-lg

#### Uso

```tsx
import Button from '@/components/ui/Button';

<Button variant="primary" size="lg" onClick={handleClick}>
  Fale conosco
</Button>
```

---

### Card

**Arquivo**: `src/components/ui/Card.tsx`

Card reutilizável para conteúdo.

#### Props

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
}
```

#### Variantes

**Default**
- Background: Neutral-900/50
- Border: White/10
- Backdrop-blur: md

**Outlined**
- Background: Transparent
- Border: White/20

**Elevated**
- Background: Neutral-900
- Shadow: 2xl
- Border: White/5

#### Uso

```tsx
import Card from '@/components/ui/Card';

<Card variant="elevated">
  <h3>Título do Card</h3>
  <p>Conteúdo do card...</p>
</Card>
```

---

### Section

**Arquivo**: `src/components/ui/Section.tsx`

Wrapper para seções com padding consistente.

#### Props

```typescript
interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  background?: 'transparent' | 'dark' | 'darker';
}
```

#### Uso

```tsx
import Section from '@/components/ui/Section';

<Section id="resultados" background="dark">
  <Container>
    <h2>Resultados</h2>
    <div>...</div>
  </Container>
</Section>
```

---

### Logo

**Arquivo**: `src/components/ui/Logo.tsx`

Logo da OMMA com variações.

#### Props

```typescript
interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

#### Variantes

- `full`: Logo completo (icon + text)
- `icon`: Apenas ícone
- `text`: Apenas texto "OMMA"

#### Uso

```tsx
import Logo from '@/components/ui/Logo';

<Logo variant="full" size="md" />
```

---

### HeroCardStack

**Arquivo**: `src/components/ui/HeroCardStack.tsx`

Cards empilhados para hero section.

#### Props

```typescript
interface HeroCardStackProps {
  cards: HeroCard[];
}

interface HeroCard {
  id: string;
  image: string;
  alt: string;
  title?: string;
  offset?: { x: number; y: number; z: number };
}
```

#### Features

- Cards sobrepostos com offset 3D
- Animação de parallax no mouse
- Imagens otimizadas
- Hover effects

#### Uso

```tsx
import HeroCardStack from '@/components/ui/HeroCardStack';

const cards = [
  {
    id: 'card-1',
    image: '/images/hero/img1.jpg',
    alt: 'Projeto 1',
    offset: { x: 0, y: 0, z: 0 }
  },
  {
    id: 'card-2',
    image: '/images/hero/img2.jpg',
    alt: 'Projeto 2',
    offset: { x: 20, y: -30, z: -10 }
  },
];

<HeroCardStack cards={cards} />
```

---

### useReveal

**Arquivo**: `src/components/ui/useReveal.tsx`

Hook customizado para animações de reveal.

#### Uso

```tsx
import { useReveal } from '@/components/ui/useReveal';

function MyComponent() {
  const ref = useReveal<HTMLDivElement>({
    threshold: 0.3,
    animationClass: 'fade-in-up'
  });

  return (
    <div ref={ref} className="opacity-0">
      Conteúdo que será animado
    </div>
  );
}
```

#### Opções

```typescript
interface UseRevealOptions {
  threshold?: number;           // 0-1, padrão 0.2
  animationClass?: string;      // Classe CSS para animação
  once?: boolean;               // Animar apenas uma vez (padrão true)
  delay?: number;               // Delay em ms
}
```

---

## Core

### GTMProvider

**Arquivo**: `src/components/GTMProvider.tsx`

Provider para injeção do Google Tag Manager.

#### Funcionalidades

1. **Inicialização do dataLayer**
   ```typescript
   getDataLayer(); // window.dataLayer = window.dataLayer || []
   ```

2. **Injeção do script GTM**
   ```typescript
   const script = document.createElement('script');
   script.innerHTML = `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','${GTM_ID}')`;
   document.head.appendChild(script);
   ```

3. **NoScript Fallback**
   ```tsx
   <noscript>
     <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} />
   </noscript>
   ```

#### Uso

```tsx
// src/app/layout.tsx
import GTMProvider from '@/components/GTMProvider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GTMProvider />
      </body>
    </html>
  );
}
```

---

### ConsentBanner

**Arquivo**: `src/components/ConsentBanner.tsx`

Banner de consentimento de cookies (LGPD/GDPR).

#### Features

1. **Gestão de Estado**
   - Estado local para preferências
   - Persistência em localStorage
   - Controle de visibilidade do banner

2. **Opções de Consentimento**
   - Analytics Storage
   - Personalization Storage
   - Ad Storage
   - Functionality Storage (sempre granted)
   - Security Storage (sempre granted)

3. **Ações**
   - Aceitar Tudo
   - Salvar Preferências
   - Fechar (mantém padrão denied)

#### Fluxo

```
1. Primeira visita
   ↓
2. Verifica localStorage ('omma_consent_v1')
   ↓
3. Se não existe → mostra banner
   ↓
4. Usuário interage:
   - Aceita tudo → todos granted
   - Customiza → salva escolhas
   - Fecha → mantém denied
   ↓
5. Salva em localStorage
   ↓
6. updateConsent() → window.dataLayer
   ↓
7. GTM processa consent
```

#### Analytics

- `consent_accept_all`: Aceitar tudo
- `consent_save_preferences`: Salvar customizado
- `consent_banner_dismiss`: Fechar sem ação

#### Uso

```tsx
// src/app/layout.tsx
import ConsentBanner from '@/components/ConsentBanner';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <ConsentBanner />
      </body>
    </html>
  );
}
```

---

### FeedbackWidget

**Arquivo**: `src/components/FeedbackWidget.tsx`

Widget de feedback do usuário.

#### Props

```typescript
interface FeedbackWidgetProps {
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  primaryColor?: string;
  title?: string;
  subtitle?: string;
}
```

#### Features

- Botão flutuante
- Modal de feedback
- Formulário simples
- Envio para endpoint

#### Uso

```tsx
// src/app/layout.tsx
import FeedbackWidget from '@/components/FeedbackWidget';

<FeedbackWidget
  position="bottom-right"
  primaryColor="#667eea"
  title="Enviar Feedback"
  subtitle="Adoraríamos ouvir sua opinião!"
/>
```

---

## Convenções e Padrões

### Nomenclatura

#### Componentes
- **PascalCase**: `ContactForm.tsx`
- **Descriptive**: Nome deve descrever propósito
- **Singular**: Exceto quando plural faz sentido

#### Props
- **camelCase**: `primaryColor`, `formId`
- **Prefixos**: `on` para callbacks (onClick, onSubmit)
- **Sufixos**: `Id` para identificadores

#### Funções
- **camelCase**: `handleSubmit`, `trackEvent`
- **Prefixos**:
  - `handle`: Event handlers
  - `get`: Retorna valor
  - `set`: Define valor
  - `is/has`: Retorna boolean

### Estrutura de Arquivo

```tsx
// 1. Imports
import React, { useState, useEffect } from 'react';
import { trackEvent } from '@/lib/gtm';

// 2. Types/Interfaces
interface MyComponentProps {
  title: string;
  onSubmit?: () => void;
}

// 3. Component
export default function MyComponent({ title, onSubmit }: MyComponentProps) {
  // 3.1. Hooks
  const [value, setValue] = useState('');

  // 3.2. Effects
  useEffect(() => {
    // ...
  }, []);

  // 3.3. Handlers
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  // 3.4. Render
  return (
    <div>
      <h2>{title}</h2>
      <input value={value} onChange={handleChange} />
    </div>
  );
}
```

### TypeScript

#### Props com Children

```typescript
interface Props {
  children: React.ReactNode;
}
```

#### Props com Eventos

```typescript
interface Props {
  onClick?: () => void;
  onChange?: (value: string) => void;
}
```

#### Props com Style Override

```typescript
interface Props {
  className?: string;
  style?: React.CSSProperties;
}
```

#### Extending HTML Elements

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}
```

### Acessibilidade

#### ARIA Labels

```tsx
<button aria-label="Fechar menu">
  <XIcon />
</button>
```

#### Keyboard Navigation

```tsx
<div
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  onClick={handleClick}
>
  Clicável
</div>
```

#### Alt Text

```tsx
<img src="/img.jpg" alt="Descrição significativa" />
```

### Performance

#### Lazy Loading

```tsx
import dynamic from 'next/dynamic';

const FeedbackWidget = dynamic(() => import('@/components/FeedbackWidget'), {
  ssr: false
});
```

#### Memoização

```tsx
import { useMemo } from 'react';

const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

#### useCallback

```tsx
import { useCallback } from 'react';

const handleClick = useCallback(() => {
  trackEvent({ event: 'click' });
}, []);
```

---

**Última atualização**: 2025-09-30
**Versão**: 1.0.0