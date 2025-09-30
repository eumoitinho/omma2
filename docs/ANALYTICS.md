# Sistema de Analytics e Tagueamento

Documentação completa do sistema de analytics, tagueamento GTM e rastreamento de eventos do site OMMA Engenharia.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Arquitetura de Analytics](#arquitetura-de-analytics)
- [Google Tag Manager (GTM)](#google-tag-manager-gtm)
- [Google Analytics 4 (GA4)](#google-analytics-4-ga4)
- [Eventos Customizados](#eventos-customizados)
- [Data Layer](#data-layer)
- [Consent Mode v2](#consent-mode-v2)
- [Implementação de Código](#implementação-de-código)
- [Debugging e QA](#debugging-e-qa)
- [Métricas e KPIs](#métricas-e-kpis)

---

## Visão Geral

O sistema de analytics foi projetado para rastrear o comportamento completo do usuário no site, desde a primeira visualização até a conversão em lead.

### Objetivos

1. **Rastreamento de Comportamento**: Entender como os usuários navegam pelo site
2. **Otimização de Conversão**: Identificar gargalos no funil de conversão
3. **Análise de Performance**: Medir efetividade de cada seção e CTA
4. **Segmentação**: Diferenciar comportamento entre páginas e públicos
5. **Compliance**: Implementar LGPD e GDPR através do Consent Mode

---

## Arquitetura de Analytics

### Camadas

```
┌────────────────────────────────────────────┐
│         1. Camada de Componentes           │
│  (React Components com hooks analytics)    │
└────────────────┬───────────────────────────┘
                 ↓
┌────────────────────────────────────────────┐
│         2. Camada de Eventos               │
│      (src/lib/gtm.ts - trackEvent)         │
└────────────────┬───────────────────────────┘
                 ↓
┌────────────────────────────────────────────┐
│         3. Data Layer (window.dataLayer)   │
│       (Fila de eventos para GTM)           │
└────────────────┬───────────────────────────┘
                 ↓
┌────────────────────────────────────────────┐
│         4. Google Tag Manager              │
│    (Processamento e roteamento tags)       │
└────────────────┬───────────────────────────┘
                 ↓
┌────────────────────────────────────────────┐
│         5. Google Analytics 4              │
│      (Armazenamento e relatórios)          │
└────────────────────────────────────────────┘
```

### Fluxo de Dados

```typescript
// 1. Componente dispara evento
trackEvent({
  event: 'cta_click',
  event_category: 'engagement',
  event_label: 'hero_cta',
  location: 'hero'
});

// 2. Função pushDL adiciona ao dataLayer
window.dataLayer.push({ ...event, ts: Date.now() });

// 3. GTM escuta dataLayer e dispara triggers

// 4. Triggers ativam tags do GA4

// 5. GA4 processa e armazena dados
```

---

## Google Tag Manager (GTM)

### Container

**ID**: `GTM-XXXXXXX` (definido em `.env.local`)
**Nome**: `[92] LP Corporativos - WEB`
**Tipo**: Web Container

### Estrutura do Container

#### Tags (14)

| ID | Nome | Tipo | Evento | Descrição |
|----|------|------|--------|-----------|
| 1 | [92] GA4 - Page View | GA4 Event | page_view | Visualização de página |
| 2 | [92] GA4 - Section View | GA4 Event | section_view | Visualização de seção |
| 3 | [92] GA4 - Scroll Depth | GA4 Event | scroll_depth | Profundidade de scroll |
| 4 | [92] GA4 - CTA Click | GA4 Event | cta_click | Click em CTA |
| 5 | [92] GA4 - Sector Card CTA | GA4 Event | sector_card_cta | Click em card de setor |
| 6 | [92] GA4 - Slide View | GA4 Event | slide_view | Visualização de slide |
| 7 | [92] GA4 - Carousel Navigation | GA4 Event | carousel_navigation | Navegação no carrossel |
| 8 | [92] GA4 - Form View | GA4 Event | form_view | Visualização de formulário |
| 9 | [92] GA4 - Form Submit Attempt | GA4 Event | form_submit_attempt | Tentativa de envio |
| 10 | [92] GA4 - Form Submit Success | GA4 Event | form_submit_success | Envio bem-sucedido |
| 11 | [92] GA4 - Lead Submit | GA4 Event | lead_submit | Lead capturado (alias) |
| 12 | [92] GA4 - Form Submit Error | GA4 Event | form_submit_error | Erro no envio |
| 13 | [92] GA4 - User Identify | GA4 Event | user_identify | Identificação de usuário |
| 14 | [92] GA4 - First CTA Click Time | GA4 Event | first_cta_click_time | Tempo até primeiro CTA |

#### Triggers (16)

| ID | Nome | Tipo | Condição |
|----|------|------|----------|
| 100 | [92] CE - page_view | Custom Event | event == 'page_view' |
| 101 | [92] CE - section_view | Custom Event | event == 'section_view' |
| 102 | [92] CE - scroll_depth | Custom Event | event == 'scroll_depth' |
| 103 | [92] CE - cta_click | Custom Event | event == 'cta_click' |
| 104 | [92] CE - sector_card_cta | Custom Event | event == 'sector_card_cta' |
| 105 | [92] CE - slide_view | Custom Event | event == 'slide_view' |
| 106 | [92] CE - carousel_prev | Custom Event | event == 'carousel_prev' |
| 107 | [92] CE - carousel_next | Custom Event | event == 'carousel_next' |
| 108 | [92] CE - carousel_dot | Custom Event | event == 'carousel_dot' |
| 109 | [92] CE - form_view | Custom Event | event == 'form_view' |
| 110 | [92] CE - form_submit_attempt | Custom Event | event == 'form_submit_attempt' |
| 111 | [92] CE - form_submit_success | Custom Event | event == 'form_submit_success' |
| 112 | [92] CE - lead_submit | Custom Event | event == 'lead_submit' |
| 113 | [92] CE - form_submit_error | Custom Event | event == 'form_submit_error' |
| 114 | [92] CE - user_identify | Custom Event | event == 'user_identify' |
| 115 | [92] CE - first_cta_click_time | Custom Event | event == 'first_cta_click_time' |

#### Variáveis (11)

| ID | Nome | Tipo | Descrição |
|----|------|------|-----------|
| 200 | [92] GA4 Measurement ID | Constant | ID do GA4 (G-XXXXXXXXXX) |
| 201 | DLV - event_label | Data Layer Variable | Label do evento |
| 202 | DLV - location | Data Layer Variable | Localização no site |
| 203 | DLV - section_id | Data Layer Variable | ID da seção |
| 204 | DLV - scroll_percent | Data Layer Variable | Percentual de scroll |
| 205 | DLV - ms_since_page_view | Data Layer Variable | Tempo desde page view |
| 206 | DLV - email_hash | Data Layer Variable | Hash SHA-256 do email |
| 207 | DLV - form_id | Data Layer Variable | ID do formulário |
| 208 | DLV - slide_index | Data Layer Variable | Índice do slide |
| 209 | DLV - error_type | Data Layer Variable | Tipo de erro |
| 210 | DLV - sector_name | Data Layer Variable | Nome do setor |

---

## Google Analytics 4 (GA4)

### Property Configuration

**Property ID**: `G-XXXXXXXXXX`
**Tipo**: Web + App
**Enhanced Measurement**: Ativado

### Enhanced Measurement Events

Eventos automáticos habilitados:
- ✅ Page views
- ✅ Scrolls (90%)
- ✅ Outbound clicks
- ✅ Site search
- ✅ Video engagement
- ✅ File downloads

### Custom Events (via GTM)

Todos os eventos listados na tabela de Tags são enviados como eventos customizados do GA4.

### Event Parameters

Cada evento envia os seguintes parâmetros:

| Parâmetro | Tipo | Descrição | Exemplo |
|-----------|------|-----------|---------|
| `event_category` | string | Categoria do evento | 'engagement', 'lead', 'navigation' |
| `event_label` | string | Label descritivo | 'hero_cta', 'contact_form' |
| `page` | string | ID da página | 'lp_corporativos' |
| `location` | string | Localização específica | 'hero', 'footer' |
| `ts` | number | Timestamp Unix (ms) | 1234567890123 |

Parâmetros específicos por evento:

**section_view**:
- `section_id`: ID da seção visualizada

**scroll_depth**:
- `depth_percent`: 25, 50, 75 ou 100

**form_view**:
- `form_id`: ID do formulário

**form_submit_***:
- `form_id`: ID do formulário

**user_identify**:
- `email_hash`: SHA-256 do email
- `source`: Origem da identificação

**first_cta_click_time**:
- `ms_since_page_view`: Tempo em ms

**slide_view**:
- `slide_index`: Índice do slide

**carousel_navigation**:
- `direction`: 'prev', 'next', 'dot'

**sector_card_cta**:
- `sector_name`: Nome do setor clicado

---

## Eventos Customizados

### Navegação

#### page_view
```typescript
trackEvent({
  event: 'page_view',
  event_category: 'navigation',
  event_label: 'lp_corporativos',
  path: '/lp/corporativos'
});
```

**Quando**: Carregamento da página
**Onde**: `PageAnalytics.tsx`
**Frequência**: Uma vez por pageview

#### section_view
```typescript
trackEvent({
  event: 'section_view',
  event_category: 'impression',
  event_label: 'hero',
  section_id: 'hero',
  page: 'lp_corporativos'
});
```

**Quando**: Seção 40% visível no viewport
**Onde**: `ScrollAndSections.tsx`, `PageAnalytics.tsx`
**Frequência**: Uma vez por seção

### Engajamento

#### scroll_depth
```typescript
trackEvent({
  event: 'scroll_depth',
  event_category: 'engagement',
  event_label: 'lp_corporativos',
  depth_percent: 50
});
```

**Quando**: 25%, 50%, 75%, 100% da página
**Onde**: `ScrollAndSections.tsx`
**Frequência**: Uma vez por marco

#### cta_click
```typescript
trackEvent({
  event: 'cta_click',
  event_category: 'engagement',
  event_label: 'hero_cta',
  location: 'hero'
});
```

**Quando**: Click em botões CTA
**Onde**: Componentes de seção, cards
**Frequência**: A cada click

#### sector_card_cta
```typescript
trackEvent({
  event: 'sector_card_cta',
  event_category: 'engagement',
  event_label: 'setor_industrial',
  sector_name: 'Industrial'
});
```

**Quando**: Click em card de setor
**Onde**: Componentes de setores
**Frequência**: A cada click

### Carrossel

#### slide_view
```typescript
trackEvent({
  event: 'slide_view',
  event_category: 'engagement',
  event_label: 'projeto_1',
  slide_index: 0
});
```

**Quando**: Slide visível
**Onde**: `ProjectsCarousel.tsx`
**Frequência**: Uma vez por slide

#### carousel_navigation
```typescript
trackEvent({
  event: 'carousel_navigation',
  event_category: 'engagement',
  event_label: 'next',
  direction: 'next'
});
```

**Quando**: Click em navegação do carrossel
**Onde**: `ProjectsCarousel.tsx`
**Frequência**: A cada click

### Formulários

#### form_view
```typescript
trackEvent({
  event: 'form_view',
  form_id: 'contact_form',
  event_category: 'engagement',
  event_label: 'Contact Form View'
});
```

**Quando**: Formulário visível no viewport
**Onde**: `ContactForm.tsx`, `LeadForm.tsx`
**Frequência**: Uma vez por sessão

#### form_submit_attempt
```typescript
trackEvent({
  event: 'form_submit_attempt',
  form_id: 'contact_form',
  event_category: 'lead',
  event_label: 'Contact Form Submit Attempt'
});
```

**Quando**: Submit do formulário
**Onde**: `ContactForm.tsx`, `LeadForm.tsx`
**Frequência**: A cada tentativa

#### form_submit_success + lead_submit
```typescript
trackWithAliases({
  event: 'form_submit_success',
  form_id: 'contact_form',
  event_category: 'lead',
  event_label: 'Contact Form Success'
}, ['lead_submit']);
```

**Quando**: Sucesso no envio
**Onde**: `ContactForm.tsx`, `LeadForm.tsx`
**Frequência**: Uma vez por conversão
**Nota**: Dispara 2 eventos (success + alias lead_submit)

#### form_submit_error
```typescript
trackEvent({
  event: 'form_submit_error',
  form_id: 'contact_form',
  event_category: 'lead',
  event_label: 'Contact Form Error',
  error_type: 'network_error'
});
```

**Quando**: Erro no envio
**Onde**: `ContactForm.tsx`, `LeadForm.tsx`
**Frequência**: A cada erro

### Identificação

#### user_identify
```typescript
trackEvent({
  event: 'user_identify',
  event_category: 'user',
  event_label: 'contact_form',
  email_hash: 'a3f2...', // SHA-256
  source: 'contact_form'
});
```

**Quando**: Após conversão bem-sucedida
**Onde**: `ContactForm.tsx`, `LeadForm.tsx`
**Frequência**: Uma vez por conversão
**Nota**: Email é hasheado com SHA-256 antes do envio

### Timing

#### first_cta_click_time
```typescript
trackEvent({
  event: 'first_cta_click_time',
  event_category: 'timing',
  event_label: 'hero_cta',
  ms_since_page_view: 5234
});
```

**Quando**: Primeiro click em qualquer CTA
**Onde**: `gtm.ts` (trackCtaWithTiming)
**Frequência**: Uma vez por sessão

### Consentimento

#### consent_accept_all
```typescript
trackEvent({
  event: 'consent_accept_all',
  event_category: 'consent',
  event_label: 'banner'
});
```

**Quando**: Usuário aceita todos os cookies
**Onde**: `ConsentBanner.tsx`

#### consent_save_preferences
```typescript
trackEvent({
  event: 'consent_save_preferences',
  event_category: 'consent',
  event_label: 'banner',
  analytics_storage: 'granted',
  ad_storage: 'denied'
});
```

**Quando**: Usuário salva preferências customizadas
**Onde**: `ConsentBanner.tsx`

#### consent_banner_dismiss
```typescript
trackEvent({
  event: 'consent_banner_dismiss',
  event_category: 'consent',
  event_label: 'banner'
});
```

**Quando**: Usuário fecha banner sem ação
**Onde**: `ConsentBanner.tsx`

---

## Data Layer

### Estrutura Base

```typescript
interface DataLayerEvent {
  event: string;                    // Nome do evento
  event_category?: string;          // Categoria
  event_label?: string;             // Label descritivo
  ts: number;                       // Timestamp Unix em ms
  [key: string]: unknown;           // Parâmetros adicionais
}
```

### Exemplo Completo

```typescript
window.dataLayer = [
  // Page view
  {
    event: 'page_view',
    event_category: 'navigation',
    event_label: 'lp_corporativos',
    path: '/lp/corporativos',
    ts: 1234567890123
  },
  // CTA click
  {
    event: 'cta_click',
    event_category: 'engagement',
    event_label: 'hero_cta',
    location: 'hero',
    ts: 1234567895456
  },
  // Form success
  {
    event: 'form_submit_success',
    form_id: 'contact_form',
    event_category: 'lead',
    event_label: 'Contact Form Success',
    ts: 1234567912789
  }
];
```

### Debug no Console

```javascript
// Ver todos os eventos
console.table(window.dataLayer);

// Ver último evento
console.log(window.dataLayer[window.dataLayer.length - 1]);

// Filtrar por tipo
window.dataLayer.filter(e => e.event === 'cta_click');
```

---

## Consent Mode v2

### Implementação

O Google Consent Mode v2 é implementado através do `ConsentBanner.tsx` e gerenciado pela biblioteca `gtm.ts`.

### Categorias de Consentimento

```typescript
interface ConsentStateRecord {
  ad_storage?: 'granted' | 'denied';              // Cookies de publicidade
  analytics_storage?: 'granted' | 'denied';       // Cookies de analytics
  functionality_storage?: 'granted' | 'denied';   // Cookies funcionais
  personalization_storage?: 'granted' | 'denied'; // Cookies de personalização
  security_storage?: 'granted' | 'denied';        // Cookies de segurança
}
```

### Estado Padrão (Denied by Default)

```typescript
const defaultConsent: ConsentStateRecord = {
  ad_storage: 'denied',
  analytics_storage: 'denied',
  functionality_storage: 'granted',  // Sempre granted (necessário)
  personalization_storage: 'denied',
  security_storage: 'granted'         // Sempre granted (necessário)
};
```

### Fluxo de Consentimento

```
1. Página carrega
   ↓
2. defaultDeniedConsent() aplicado
   ↓
3. Verifica localStorage ('omma_consent_v1')
   ↓
4. Se existe → aplica consentimento salvo
   Se não → mostra banner
   ↓
5. Usuário interage:
   - Aceita tudo → todos 'granted'
   - Customiza → salva escolhas
   - Fecha → mantém denied
   ↓
6. updateConsent() → window.dataLayer
   ↓
7. GTM processa consent
   ↓
8. Tags respeitam consent
```

### Código de Implementação

#### Inicialização (GTMProvider.tsx)

```typescript
useEffect(() => {
  initialConsentLoad(); // Carrega consent salvo ou aplica default
}, []);
```

#### Banner de Consentimento (ConsentBanner.tsx)

```typescript
// Aceitar tudo
function acceptAll() {
  const full: ConsentStateRecord = {
    ad_storage: 'granted',
    analytics_storage: 'granted',
    functionality_storage: 'granted',
    personalization_storage: 'granted',
    security_storage: 'granted'
  };
  updateConsent(full);
  saveConsent(full);
  trackEvent({ event: 'consent_accept_all' });
}

// Salvar preferências customizadas
function savePartial() {
  updateConsent(consent);
  saveConsent(consent);
  trackEvent({ event: 'consent_save_preferences' });
}
```

### Persistência

Consentimento é salvo no `localStorage`:

```typescript
// Key: 'omma_consent_v1'
// Value: JSON string do ConsentStateRecord

localStorage.setItem('omma_consent_v1', JSON.stringify(consent));
```

### Integração com GTM

```typescript
function updateConsent(consent: ConsentStateRecord) {
  // Push para dataLayer
  pushDL({ event: 'consent_update', consent });

  // Também atualiza via gtag (se disponível)
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', consent);
  }
}
```

---

## Implementação de Código

### Biblioteca GTM (src/lib/gtm.ts)

#### Funções Principais

```typescript
// Push para dataLayer
export function pushDL(event: AnalyticsEventBase) {
  if (typeof window === 'undefined') return;
  getDataLayer().push({ ...event, ts: Date.now() });
}

// Track evento simples
export function trackEvent(params: AnalyticsEventBase) {
  pushDL(params);
}

// Track com aliases (múltiplos eventos)
export function trackWithAliases(
  primary: AnalyticsEventBase,
  aliases: string[] = []
) {
  trackEvent(primary);
  aliases.forEach(ev => trackEvent({ ...primary, event: ev }));
}

// Track CTA com timing
export function trackCtaWithTiming(e: AnalyticsEventBase) {
  if (firstCtaTs == null) {
    firstCtaTs = Date.now();
    if (firstPageViewTs) {
      const diff = firstCtaTs - firstPageViewTs;
      trackEvent({
        event: 'first_cta_click_time',
        event_category: 'timing',
        event_label: e.event_label || 'unknown_cta',
        ms_since_page_view: diff
      });
    }
  }
  trackEvent(e);
}
```

### Componentes de Analytics

#### PageAnalytics.tsx

```typescript
export default function PageAnalytics({ pageId }: { pageId: string }) {
  useEffect(() => {
    // Marca timestamp do page view
    markPageViewTimestamp();

    // Track page view
    trackEvent({
      event: 'page_view',
      event_category: 'navigation',
      event_label: pageId,
      path: window.location.pathname,
    });

    // Track hero impression
    const hero = document.getElementById('hero');
    if (hero) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            trackEvent({
              event: 'section_view',
              event_category: 'impression',
              event_label: 'hero',
              page: pageId
            });
            observer.disconnect();
          }
        });
      }, { threshold: 0.4 });
      observer.observe(hero);
    }
  }, [pageId]);

  return null;
}
```

#### ScrollAndSections.tsx

```typescript
export default function ScrollAndSections({ pageId }: { pageId: string }) {
  useEffect(() => {
    // Section impressions
    const seen = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute('id');
          if (id && !seen.has(id)) {
            seen.add(id);
            trackEvent({
              event: 'section_view',
              event_category: 'impression',
              event_label: id,
              page: pageId
            });
          }
        }
      });
    }, { threshold: 0.4 });

    // Observar seções
    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Scroll depth
    const marks = [25, 50, 75, 100];
    const fired: Record<number, boolean> = {};

    function onScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight -
                       document.documentElement.clientHeight;
      if (docHeight <= 0) return;

      const percent = Math.min(100, Math.round((scrollTop / docHeight) * 100));

      marks.forEach(m => {
        if (percent >= m && !fired[m]) {
          fired[m] = true;
          trackEvent({
            event: 'scroll_depth',
            event_category: 'engagement',
            event_label: pageId,
            depth_percent: m
          });
        }
      });

      if (fired[100]) window.removeEventListener('scroll', onScroll);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // Check inicial

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pageId]);

  return null;
}
```

### Uso em Página

```tsx
import PageAnalytics from '@/components/analytics/PageAnalytics';
import ScrollAndSections from '@/components/analytics/ScrollAndSections';

export default function CorporativosLP() {
  return (
    <>
      <PageAnalytics pageId="lp_corporativos" />
      <ScrollAndSections pageId="lp_corporativos" />

      <section id="hero">
        {/* Conteúdo */}
      </section>

      <section id="resultados">
        {/* Conteúdo */}
      </section>
    </>
  );
}
```

---

## Debugging e QA

### Ferramentas

#### Google Tag Assistant (Chrome Extension)

1. Instale [Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk)
2. Ative no site
3. Navegue e interaja
4. Verifique tags disparadas

#### GTM Preview Mode

1. Acesse GTM → Workspace
2. Click em "Preview"
3. Digite URL do site
4. Navegue em nova aba
5. Veja debug panel no rodapé

#### GA4 DebugView

1. Acesse GA4 → Configure → DebugView
2. Ative debug mode:
   ```javascript
   window.dataLayer.push({ 'gtm.allowlist': ['google'] });
   ```
3. Veja eventos em tempo real

### Console do Navegador

```javascript
// Ver dataLayer
console.table(window.dataLayer);

// Ver último evento
window.dataLayer[window.dataLayer.length - 1];

// Ver GTM
console.log(google_tag_manager);

// Ativar debug
window.dataLayer.push({ event: 'gtm.allowlist', value: ['google'] });
```

### Checklist de QA

#### Navegação
- [ ] `page_view` dispara no carregamento
- [ ] `page_view` tem `path` correto
- [ ] `section_view` dispara quando seção 40% visível
- [ ] Apenas uma vez por seção

#### Scroll
- [ ] `scroll_depth` dispara em 25%, 50%, 75%, 100%
- [ ] Apenas uma vez por marco
- [ ] Não dispara múltiplas vezes ao scrollar para cima

#### CTAs
- [ ] `cta_click` dispara ao clicar
- [ ] `event_label` identifica corretamente o CTA
- [ ] `location` indica seção correta
- [ ] `first_cta_click_time` dispara apenas no primeiro CTA

#### Formulários
- [ ] `form_view` dispara quando visível
- [ ] `form_submit_attempt` dispara ao submeter
- [ ] `form_submit_success` dispara em sucesso
- [ ] `lead_submit` também dispara (alias)
- [ ] `form_submit_error` dispara em erro
- [ ] `user_identify` dispara após sucesso
- [ ] `email_hash` é válido SHA-256

#### Carrossel
- [ ] `slide_view` dispara para cada slide visível
- [ ] `carousel_navigation` dispara ao navegar
- [ ] `direction` correto ('prev', 'next', 'dot')

#### Consent
- [ ] Banner aparece na primeira visita
- [ ] Não aparece em visitas subsequentes
- [ ] `consent_accept_all` dispara ao aceitar
- [ ] `consent_save_preferences` dispara ao customizar
- [ ] Preferências salvas no localStorage
- [ ] GTM respeita consent

---

## Métricas e KPIs

### Principais KPIs

#### Conversão
- **Taxa de Conversão**: (form_submit_success / page_view) × 100
- **Leads Capturados**: Total de `lead_submit`
- **Taxa de Erro**: (form_submit_error / form_submit_attempt) × 100

#### Engajamento
- **Taxa de Scroll 100%**: (scroll_depth:100 / page_view) × 100
- **Média de Seções Vistas**: Avg(section_view) por sessão
- **Taxa de Click em CTA**: (cta_click / page_view) × 100
- **Tempo até Primeiro CTA**: Avg(ms_since_page_view) em `first_cta_click_time`

#### Formulário
- **Taxa de Visualização**: (form_view / page_view) × 100
- **Taxa de Tentativa**: (form_submit_attempt / form_view) × 100
- **Taxa de Sucesso**: (form_submit_success / form_submit_attempt) × 100

### Segmentações

#### Por Página
- Landing Page Corporativos
- Landing Page Arquitetos
- Home

#### Por Seção
- Hero
- Resultados
- Setores
- Comparativo
- Formulário de Contato

#### Por Fonte
- Tráfego Orgânico
- Tráfego Pago
- Direto
- Referral

### Relatórios Recomendados

#### GA4 Custom Reports

1. **Funil de Conversão**
   - page_view → section_view (form) → form_view → form_submit_attempt → form_submit_success

2. **Performance de CTAs**
   - cta_click agrupado por event_label
   - Taxa de conversão por CTA

3. **Engajamento de Seções**
   - section_view agrupado por section_id
   - Tempo médio até visualização

4. **Performance de Formulário**
   - form_submit_attempt
   - form_submit_success
   - form_submit_error
   - Taxa de conversão

---

## Próximos Passos

### Melhorias Futuras

1. **Enhanced Ecommerce**: Para produtos/serviços
2. **User ID Tracking**: Identificação persistente
3. **Cross-device Tracking**: Rastreamento entre dispositivos
4. **Server-side Tagging**: GTM server-side
5. **BigQuery Integration**: Para análises avançadas
6. **Testes A/B**: Integração com Google Optimize ou similar

### Otimizações

1. **Event Throttling**: Limitar frequência de eventos repetitivos
2. **Batch Events**: Agrupar eventos para envio
3. **Smart Sampling**: Sampling inteligente para high-traffic
4. **Custom Dimensions**: Adicionar dimensões customizadas

---

**Última atualização**: 2025-09-30
**Versão**: 1.0.0