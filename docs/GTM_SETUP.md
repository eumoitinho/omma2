# Configuração do Google Tag Manager

Guia completo para configuração do Google Tag Manager (GTM) no projeto OMMA Engenharia.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Criação da Conta e Container](#criação-da-conta-e-container)
- [Importação do Container](#importação-do-container)
- [Configuração de Variáveis](#configuração-de-variáveis)
- [Publicação](#publicação)
- [Integração com GA4](#integração-com-ga4)
- [Verificação e Testes](#verificação-e-testes)
- [Troubleshooting](#troubleshooting)

---

## Visão Geral

O projeto utiliza Google Tag Manager para gerenciar todos os eventos de analytics enviados ao Google Analytics 4 (GA4).

### Por que GTM?

1. **Centralização**: Todos os tags em um só lugar
2. **Flexibilidade**: Alterações sem deploy de código
3. **Testabilidade**: Preview mode e debugging
4. **Versionamento**: Histórico de alterações
5. **Segurança**: Controle de permissões

### Fluxo de Dados

```
React Component → trackEvent() → window.dataLayer → GTM → GA4
```

---

## Criação da Conta e Container

### Passo 1: Criar Conta GTM

1. Acesse [tagmanager.google.com](https://tagmanager.google.com)
2. Click em "Criar conta"
3. Preencha:
   - **Nome da conta**: OMMA Engenharia
   - **País**: Brasil
   - **Compartilhamento de dados**: Configure conforme necessário

### Passo 2: Criar Container

1. **Nome do container**: OMMA Website
2. **Tipo de segmentação**: Web
3. Click em "Criar"

### Passo 3: Copiar Container ID

Após criação, você receberá um **Container ID** no formato `GTM-XXXXXXX`.

**IMPORTANTE**: Guarde esse ID, você precisará dele no `.env.local`.

---

## Importação do Container

Ao invés de configurar manualmente, importe o container pré-configurado.

### Opção 1: Importar JSON (Recomendado)

1. No GTM, acesse **Admin** → **Importar container**
2. Click em "Escolher arquivo de container"
3. Selecione `docs/gtm-container-[92].json` do repositório
4. Escolha workspace: **Novo** (recomendado) ou **Existente**
5. Opção de importação: **Mesclar** ou **Substituir**
   - **Mesclar**: Mantém configurações existentes
   - **Substituir**: Apaga tudo e importa limpo (recomendado para novo container)
6. Click em "Confirmar"

### Opção 2: Configuração Manual

Se preferir configurar manualmente, siga as seções abaixo.

---

## Configuração de Variáveis

### Variável do GA4 Measurement ID

**IMPORTANTE**: Esta é a única configuração obrigatória após importar o container.

1. Acesse **Variáveis** no menu lateral
2. Localize `[92] GA4 Measurement ID`
3. Click para editar
4. No campo **Valor**, substitua `G-XXXXXXXXXX` pelo seu GA4 Measurement ID real
5. Salve

### Onde encontrar GA4 Measurement ID?

1. Acesse [analytics.google.com](https://analytics.google.com)
2. Admin → Propriedade → Streams de dados
3. Click no seu Web Data Stream
4. Copie o **Measurement ID** (formato `G-XXXXXXXXXX`)

### Outras Variáveis (já configuradas)

Se você importou o JSON, essas variáveis já estão configuradas:

| Nome | Tipo | Camada de Dados | Descrição |
|------|------|----------------|-----------|
| DLV - event_label | Data Layer Variable | event_label | Label do evento |
| DLV - location | Data Layer Variable | location | Localização no site |
| DLV - section_id | Data Layer Variable | section_id | ID da seção |
| DLV - scroll_percent | Data Layer Variable | depth_percent | Percentual de scroll |
| DLV - ms_since_page_view | Data Layer Variable | ms_since_page_view | Tempo desde page view |
| DLV - email_hash | Data Layer Variable | email_hash | Hash do email |
| DLV - form_id | Data Layer Variable | form_id | ID do formulário |
| DLV - slide_index | Data Layer Variable | slide_index | Índice do slide |
| DLV - error_type | Data Layer Variable | error_type | Tipo de erro |
| DLV - sector_name | Data Layer Variable | sector_name | Nome do setor |

---

## Configuração Manual (se necessário)

### Criar Variável Constant

1. **Variáveis** → **Nova**
2. **Configuração da variável** → **Constant**
3. Preencha:
   - **Nome**: `[92] GA4 Measurement ID`
   - **Valor**: Seu GA4 Measurement ID (G-XXXXXXXXXX)
4. Salve

### Criar Variável da Camada de Dados

Exemplo para `event_label`:

1. **Variáveis** → **Nova**
2. **Configuração da variável** → **Data Layer Variable**
3. Preencha:
   - **Nome**: `DLV - event_label`
   - **Nome da variável da camada de dados**: `event_label`
   - **Versão da camada de dados**: Versão 2
4. Salve

Repita para todas as variáveis listadas acima.

---

## Triggers (Acionadores)

### Criar Custom Event Trigger

Exemplo para `page_view`:

1. **Acionadores** → **Novo**
2. **Configuração do acionador** → **Evento personalizado**
3. Preencha:
   - **Nome**: `[92] CE - page_view`
   - **Nome do evento**: `page_view`
   - **Usar correspondência de expressão regular**: Desativado
4. Salve

### Lista Completa de Triggers

Crie um trigger para cada evento:

| Nome | Tipo | Nome do Evento |
|------|------|----------------|
| [92] CE - page_view | Custom Event | page_view |
| [92] CE - section_view | Custom Event | section_view |
| [92] CE - scroll_depth | Custom Event | scroll_depth |
| [92] CE - cta_click | Custom Event | cta_click |
| [92] CE - sector_card_cta | Custom Event | sector_card_cta |
| [92] CE - slide_view | Custom Event | slide_view |
| [92] CE - carousel_prev | Custom Event | carousel_prev |
| [92] CE - carousel_next | Custom Event | carousel_next |
| [92] CE - carousel_dot | Custom Event | carousel_dot |
| [92] CE - form_view | Custom Event | form_view |
| [92] CE - form_submit_attempt | Custom Event | form_submit_attempt |
| [92] CE - form_submit_success | Custom Event | form_submit_success |
| [92] CE - lead_submit | Custom Event | lead_submit |
| [92] CE - form_submit_error | Custom Event | form_submit_error |
| [92] CE - user_identify | Custom Event | user_identify |
| [92] CE - first_cta_click_time | Custom Event | first_cta_click_time |

---

## Tags

### Criar GA4 Event Tag

Exemplo para `page_view`:

1. **Tags** → **Nova**
2. **Configuração da tag** → **Google Analytics: Evento do GA4**
3. Preencha:
   - **Nome**: `[92] GA4 - Page View`
   - **ID de medição**: `{{[92] GA4 Measurement ID}}`
   - **Nome do evento**: `page_view`
4. **Acionamento** → Selecione `[92] CE - page_view`
5. Salve

### Tags com Event Parameters

Para eventos com parâmetros adicionais (ex: section_view), adicione:

1. Em **Parâmetros do evento**, click em **Adicionar linha**
2. Adicione cada parâmetro:
   - `event_category` → Built-in: Event Category
   - `event_label` → Built-in: Event Label
   - `section_id` → `{{DLV - section_id}}`

### Lista Completa de Tags

| Nome | Evento GA4 | Trigger | Parâmetros Adicionais |
|------|------------|---------|----------------------|
| [92] GA4 - Page View | page_view | CE - page_view | - |
| [92] GA4 - Section View | section_view | CE - section_view | section_id |
| [92] GA4 - Scroll Depth | scroll_depth | CE - scroll_depth | scroll_percent |
| [92] GA4 - CTA Click | cta_click | CE - cta_click | location |
| [92] GA4 - Sector Card CTA | sector_card_cta | CE - sector_card_cta | sector_name |
| [92] GA4 - Slide View | slide_view | CE - slide_view | slide_index |
| [92] GA4 - Carousel Navigation | carousel_navigation | CE - carousel_prev, CE - carousel_next, CE - carousel_dot | direction |
| [92] GA4 - Form View | form_view | CE - form_view | form_id |
| [92] GA4 - Form Submit Attempt | form_submit_attempt | CE - form_submit_attempt | form_id |
| [92] GA4 - Form Submit Success | form_submit_success | CE - form_submit_success | form_id |
| [92] GA4 - Lead Submit | lead_submit | CE - lead_submit | form_id |
| [92] GA4 - Form Submit Error | form_submit_error | CE - form_submit_error | form_id, error_type |
| [92] GA4 - User Identify | user_identify | CE - user_identify | email_hash, source |
| [92] GA4 - First CTA Click Time | first_cta_click_time | CE - first_cta_click_time | ms_since_page_view |

---

## Publicação

### Preview Mode

Antes de publicar, teste em Preview Mode:

1. Click em **Visualizar** (canto superior direito)
2. Digite a URL do seu site: `http://localhost:3000` ou produção
3. Uma nova aba abrirá com o site + debug panel
4. Navegue e interaja no site
5. Observe eventos disparados no debug panel
6. Verifique:
   - ✅ Eventos corretos disparados
   - ✅ Triggers ativados
   - ✅ Tags executadas
   - ✅ Variáveis com valores corretos

### Publicar Container

Quando tudo estiver funcionando:

1. Click em **Enviar** (canto superior direito)
2. Preencha:
   - **Nome da versão**: `v1.0 - Setup inicial`
   - **Descrição da versão**: Breve descrição das mudanças
3. Click em **Publicar**

### Ambientes

GTM suporta múltiplos ambientes:

- **Live**: Produção (padrão após publicar)
- **Latest**: Última versão (para testes)
- **Custom**: Ambientes customizados (dev, staging)

Para criar ambiente customizado:

1. **Admin** → **Ambientes**
2. **Novo**
3. Configure nome e descrição
4. Copie o snippet de código do ambiente
5. Use no site de desenvolvimento

---

## Integração com GA4

### Criar Propriedade GA4

Se ainda não tem:

1. Acesse [analytics.google.com](https://analytics.google.com)
2. Admin → **Criar propriedade**
3. Preencha:
   - **Nome da propriedade**: OMMA Website
   - **Fuso horário**: (GMT-03:00) Brasília
   - **Moeda**: Real brasileiro (R$)
4. **Próximo**
5. Categoria: Negócios e indústria
6. **Criar**

### Criar Data Stream

1. Na nova propriedade, vá para **Streams de dados**
2. **Adicionar stream** → **Web**
3. Preencha:
   - **URL do site**: https://omma.com.br
   - **Nome do stream**: OMMA Website
4. **Criar stream**
5. Copie o **Measurement ID** (G-XXXXXXXXXX)

### Configurar Enhanced Measurement

No Data Stream criado:

1. Role até **Enhanced measurement**
2. Click na engrenagem ⚙️
3. Ative:
   - ✅ Page views
   - ✅ Scrolls (90%)
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Video engagement
   - ✅ File downloads
4. Salve

### Vincular GTM ao GA4

Já feito automaticamente através da variável `[92] GA4 Measurement ID` nos tags.

---

## Verificação e Testes

### Teste Local

1. Configure `.env.local`:
   ```env
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```

2. Inicie o projeto:
   ```bash
   npm run dev
   ```

3. Abra `http://localhost:3000`

4. Abra DevTools → Console

5. Digite:
   ```javascript
   window.dataLayer
   ```

6. Deve ver array com eventos

### Teste com GTM Preview

1. No GTM, click em **Visualizar**
2. Digite `http://localhost:3000`
3. Navegue no site
4. Observe debug panel:
   - Tags Fired: Verde (sucesso)
   - Tags Not Fired: Vermelho (problema)

### Teste em GA4 DebugView

1. Em GA4, vá para **Configure** → **DebugView**
2. No site, abra Console e digite:
   ```javascript
   window.dataLayer.push({ 'gtm.allowlist': ['google'] });
   ```
3. Navegue e interaja
4. Veja eventos em tempo real no DebugView

### Teste em Produção

1. Publique o site
2. Acesse URL de produção
3. Abra GTM Tag Assistant (Chrome Extension)
4. Ative e recarregue página
5. Verifique tags disparados

### Checklist de Verificação

- [ ] GTM_ID configurado em `.env.local`
- [ ] GTM script carregando (view source)
- [ ] dataLayer inicializado
- [ ] Eventos custom disparando
- [ ] Triggers ativando
- [ ] Tags executando
- [ ] Eventos aparecendo no GA4 DebugView
- [ ] Consent Mode funcionando
- [ ] Nenhum erro no console

---

## Troubleshooting

### GTM não carrega

**Problema**: Script GTM não aparece no HTML

**Solução**:
1. Verifique `.env.local` tem `NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX`
2. Verifique `GTMProvider` está no `layout.tsx`
3. Restart do servidor de desenvolvimento
4. Clear cache do navegador

### Eventos não disparam

**Problema**: dataLayer recebe eventos mas GTM não dispara

**Solução**:
1. Verifique trigger tem nome do evento correto
2. Verifique trigger está associado ao tag
3. Use Preview Mode para debug
4. Verifique consent (se analytics_storage = denied, eventos não disparam)

### Tags não aparecem no GA4

**Problema**: Tags disparam no GTM mas não aparecem no GA4

**Solução**:
1. Verifique Measurement ID correto na variável GTM
2. Verifique propriedade GA4 está correta
3. Aguarde alguns minutos (latência normal)
4. Use DebugView para ver eventos em tempo real
5. Verifique não há AdBlocker ativo

### dataLayer undefined

**Problema**: `window.dataLayer` retorna undefined

**Solução**:
1. Verifique GTMProvider está montado
2. Abra DevTools → Network → verifique gtm.js carregou
3. Verifique não há erro no console bloqueando script
4. Tente em aba anônima (sem extensions)

### Consent bloqueando eventos

**Problema**: Eventos não disparam após negar consent

**Comportamento esperado**: Analytics events só disparam se `analytics_storage = granted`

**Solução**:
1. Aceite cookies no banner
2. Ou configure tag para disparar sem consent (não recomendado)
3. Ou use Consent Mode adequadamente

### Preview Mode não conecta

**Problema**: Preview Mode não abre ou não conecta ao site

**Solução**:
1. Desative HTTPS/SSL no localhost (use HTTP)
2. Permita cookies de terceiros no navegador
3. Desative AdBlockers
4. Use Chrome/Edge (melhor suporte)
5. Limpe cookies do GTM

---

## Boas Práticas

### Nomenclatura

- **Prefixos**: `[92]` para identificar projeto (substitua 92 pelo seu número)
- **Tipos**: `CE` (Custom Event), `GA4` (Google Analytics 4), `DLV` (Data Layer Variable)
- **Descritivo**: Nomes claros e autoexplicativos

### Organização

- **Pastas**: Organize tags, triggers e variáveis em pastas lógicas
- **Comentários**: Adicione notas em configurações complexas
- **Versionamento**: Sempre adicione descrição ao publicar

### Testes

- **Preview antes de publicar**: Sempre teste em Preview Mode
- **QA em staging**: Teste em ambiente de staging antes de produção
- **Monitore erros**: Configure alertas no GA4 para eventos críticos

### Segurança

- **Permissões**: Limite acesso ao container
- **Ambientes**: Use ambientes separados para dev/staging/prod
- **Auditoria**: Revise histórico de versões regularmente

---

**Última atualização**: 2025-09-30
**Versão**: 1.0.0