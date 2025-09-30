# Arquitetura do Sistema

Documentação da arquitetura técnica do site OMMA Engenharia.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológico](#stack-tecnológico)
- [Arquitetura de Frontend](#arquitetura-de-frontend)
- [Padrões de Código](#padrões-de-código)
- [Performance](#performance)
- [Segurança](#segurança)

---

## Visão Geral

### Princípios Arquiteturais

1. **Component-First**: Tudo é componente reutilizável
2. **Type-Safe**: TypeScript em todo o código
3. **Performance-Oriented**: SSR, otimização de imagens, lazy loading
4. **Analytics-Driven**: Rastreamento completo de comportamento
5. **Maintainable**: Código limpo, documentado e testável

### Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────┐
│                  Next.js 15 (App Router)            │
├─────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐ │
│  │   Pages      │  │  Components  │  │   API    │ │
│  │   Routes     │  │   (React 19) │  │  Routes  │ │
│  └──────────────┘  └──────────────┘  └──────────┘ │
├─────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────┐  │
│  │        Analytics Layer (GTM + GA4)           │  │
│  └──────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐ │
│  │   Styles     │  │    Types     │  │   Lib    │ │
│  │ (Tailwind)   │  │ (TypeScript) │  │ (Utils)  │ │
│  └──────────────┘  └──────────────┘  └──────────┘ │
└─────────────────────────────────────────────────────┘
```

---

## Stack Tecnológico

### Frontend Core

**Next.js 15**
- App Router (novo roteamento)
- Server Components (RSC)
- Server Actions
- Otimização automática de imagens
- Font optimization

**React 19**
- Hooks modernos
- Concurrent rendering
- Suspense e Streaming
- Automatic batching

**TypeScript 5**
- Strict mode ativado
- Type inference melhorado
- Interfaces e tipos customizados

### Styling

**TailwindCSS 4**
- Utility-first approach
- Custom design tokens
- JIT (Just-In-Time) compilation
- PurgeCSS para otimização

### Analytics

**Google Tag Manager**
- Gerenciamento centralizado de tags
- Custom events
- Triggers e variables

**Google Analytics 4**
- Event-based tracking
- Custom dimensions
- Enhanced measurement

**Consent Mode v2**
- LGPD/GDPR compliance
- Granular control
- LocalStorage persistence

### Build & Dev Tools

- **ESLint**: Linting e code quality
- **Prettier**: Code formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: Browser compatibility

---

## Arquitetura de Frontend

### App Router Structure

```
src/app/
├── layout.tsx              # Root layout (global)
├── page.tsx                # Home page
├── globals.css             # Global styles
│
├── lp/                     # Landing pages
│   ├── arquitetos/
│   │   └── page.tsx        # LP Arquitetos
│   └── corporativos/
│       └── page.tsx        # LP Corporativos
│
└── api/                    # API Routes
    └── lead/
        └── route.ts        # Lead submission endpoint
```

### Component Architecture

**Atomic Design Principles**

```
Components
├── atoms/              # UI básicos (Button, Input)
├── molecules/          # Combinações (Card, FormField)
├── organisms/          # Complexos (Form, Navbar)
└── templates/          # Layouts (Section, Container)
```

**Atual Structure**

```
components/
├── ui/                 # Atoms & Molecules
├── layout/             # Organisms (Navbar, Footer)
├── sections/           # Page sections
├── lp/                 # LP-specific components
└── analytics/          # Analytics components
```

### Data Flow

#### Server → Client

```typescript
// Server Component (default)
async function Page() {
  const data = await fetchData();
  return <ClientComponent data={data} />;
}

// Client Component (interactive)
'use client';
function ClientComponent({ data }) {
  const [state, setState] = useState(data);
  return <div>{state}</div>;
}
```

#### Client → Analytics

```typescript
// Component
function Button() {
  function handleClick() {
    trackEvent({
      event: 'cta_click',
      event_category: 'engagement',
      event_label: 'hero_cta'
    });
  }
  return <button onClick={handleClick}>CTA</button>;
}

// Analytics lib
export function trackEvent(params) {
  window.dataLayer.push({ ...params, ts: Date.now() });
}
```

### State Management

**Local State (useState)**
- Component-specific state
- Forms, toggles, temporary data

**Server State**
- Fetched via Server Components
- No need for client-side cache

**Global State (Context)**
- Consent preferences
- User session (futuro)

### Routing

**File-based Routing**

```
src/app/
├── page.tsx                 → /
├── lp/
│   ├── arquitetos/
│   │   └── page.tsx        → /lp/arquitetos
│   └── corporativos/
│       └── page.tsx        → /lp/corporativos
```

**Dynamic Routes (futuro)**

```
src/app/
└── projetos/
    └── [slug]/
        └── page.tsx        → /projetos/[slug]
```

---

## Padrões de Código

### TypeScript Patterns

**Props Interface**

```typescript
interface ComponentProps {
  title: string;
  subtitle?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Component({
  title,
  subtitle,
  onClick,
  children
}: ComponentProps) {
  // ...
}
```

**Extending HTML Elements**

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}
```

**Event Handlers**

```typescript
function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  // ...
}

function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  setValue(e.target.value);
}
```

### React Patterns

**Custom Hooks**

```typescript
function useFormSubmit(formId: string) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');

  async function submit(data: FormData) {
    setStatus('sending');
    trackEvent({ event: 'form_submit_attempt', form_id: formId });

    try {
      await api.submitForm(data);
      setStatus('ok');
      trackEvent({ event: 'form_submit_success', form_id: formId });
    } catch {
      setStatus('error');
      trackEvent({ event: 'form_submit_error', form_id: formId });
    }
  }

  return { status, submit };
}
```

**Composition over Inheritance**

```typescript
// ❌ Evitar herança
class Button extends Component { }

// ✅ Preferir composição
function PrimaryButton({ children, ...props }: ButtonProps) {
  return <Button variant="primary" {...props}>{children}</Button>;
}
```

### CSS Patterns (Tailwind)

**Component Classes**

```tsx
// Define classes reutilizáveis
const buttonClasses = {
  base: "px-4 py-2 rounded-xl font-medium transition",
  primary: "bg-amber-400 text-neutral-900 hover:bg-amber-300",
  secondary: "border border-white/20 text-white hover:bg-white/10"
};

// Use em componente
<button className={`${buttonClasses.base} ${buttonClasses.primary}`}>
  Click me
</button>
```

**Responsive Design**

```tsx
<div className="
  grid
  grid-cols-1           /* Mobile */
  md:grid-cols-2        /* Tablet */
  lg:grid-cols-3        /* Desktop */
  gap-4
">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

## Performance

### Otimizações Implementadas

**1. Server-Side Rendering (SSR)**
- Pages renderizadas no servidor
- HTML completo no first paint
- Melhor SEO

**2. Image Optimization**
```tsx
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1920}
  height={1080}
  priority        // Para above-the-fold images
  placeholder="blur"
/>
```

**3. Font Optimization**
```tsx
// Google Fonts com preconnect
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
```

**4. Code Splitting**
```typescript
// Dynamic imports para componentes pesados
import dynamic from 'next/dynamic';

const FeedbackWidget = dynamic(() => import('@/components/FeedbackWidget'), {
  ssr: false
});
```

**5. Lazy Loading**
- Imagens: `loading="lazy"`
- Components: `dynamic()`
- Analytics: Carregado após interação

**6. Memoization**
```typescript
import { useMemo, useCallback } from 'react';

// Valores computados
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// Callbacks estáveis
const handleClick = useCallback(() => {
  doSomething(value);
}, [value]);
```

### Métricas Alvo

| Métrica | Alvo | Descrição |
|---------|------|-----------|
| FCP | < 1.8s | First Contentful Paint |
| LCP | < 2.5s | Largest Contentful Paint |
| FID | < 100ms | First Input Delay |
| CLS | < 0.1 | Cumulative Layout Shift |
| TTI | < 3.8s | Time to Interactive |

---

## Segurança

### Práticas Implementadas

**1. Environment Variables**
```env
# Apenas variáveis com NEXT_PUBLIC_ são expostas ao client
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Outras variáveis são server-only
DATABASE_URL=...
API_SECRET=...
```

**2. Email Hashing**
```typescript
// SHA-256 antes de enviar ao analytics
const encoder = new TextEncoder();
const bytes = encoder.encode(email.toLowerCase());
const digest = await crypto.subtle.digest('SHA-256', bytes);
```

**3. Content Security Policy (futuro)**
```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;"
  }
];
```

**4. HTTPS Only**
- Produção sempre em HTTPS
- HSTS habilitado
- Secure cookies

**5. Consent Mode**
- Respeita LGPD/GDPR
- Opt-in para analytics
- LocalStorage para persistência

**6. Input Validation**
```typescript
// Validação no cliente E servidor
function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
```

**7. Rate Limiting (futuro)**
```typescript
// API Routes com rate limit
import { rateLimit } from '@/lib/rate-limit';

export async function POST(request: Request) {
  await rateLimit(request);
  // Process request
}
```

---

## Escalabilidade

### Preparação para Crescimento

**1. Component Library**
- Componentes reutilizáveis documentados
- Storybook (futuro)
- Design system tokens

**2. API Layer**
- Separação clara de concerns
- Easy to add endpoints
- Pronto para backend integration

**3. Analytics Infrastructure**
- GTM permite mudanças sem deploy
- GA4 escalável para milhões de eventos
- BigQuery integration (futuro)

**4. Deployment**
- Vercel Edge Network (CDN global)
- Automatic scaling
- Zero-downtime deployments

---

**Última atualização**: 2025-09-30
**Versão**: 1.0.0