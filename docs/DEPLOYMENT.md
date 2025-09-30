# Guia de Deploy e CI/CD

Documentação completa para deploy do site OMMA Engenharia.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Deploy em Vercel](#deploy-em-vercel)
- [Deploy Manual](#deploy-manual)
- [Variáveis de Ambiente](#variáveis-de-ambiente)
- [CI/CD com GitHub Actions](#cicd-com-github-actions)
- [Monitoramento](#monitoramento)
- [Rollback](#rollback)

---

## Visão Geral

### Plataformas Suportadas

1. **Vercel** ⭐ (Recomendado)
   - Deploy automático
   - Edge Network global
   - Preview deployments
   - Zero configuration

2. **Netlify**
   - Similar ao Vercel
   - Boa alternativa

3. **Manual (VPS/Docker)**
   - Controle total
   - Requer configuração

---

## Deploy em Vercel

### Método 1: Via GitHub (Recomendado)

**Passo 1: Push para GitHub**

```bash
# Adicione remote (se ainda não tem)
git remote add origin https://github.com/seu-usuario/omma2.git

# Push
git add .
git commit -m "feat: initial commit"
git push -u origin main
```

**Passo 2: Import no Vercel**

1. Acesse [vercel.com](https://vercel.com)
2. Click em **Add New** → **Project**
3. **Import Git Repository**
4. Selecione seu repositório `omma2`
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (padrão)
   - **Build Command**: `npm run build` (auto-detectado)
   - **Output Directory**: `.next` (auto-detectado)
6. **Environment Variables** → Adicione:
   ```
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
   ```
7. Click em **Deploy**

**Passo 3: Aguarde Build**

- First build leva ~2-5min
- Vercel mostra logs em tempo real
- Quando completar, recebe URL: `https://omma2.vercel.app`

**Passo 4: Configure Domínio Custom**

1. No projeto Vercel, vá para **Settings** → **Domains**
2. Click em **Add Domain**
3. Digite: `omma.com.br`
4. Vercel fornece DNS records:
   ```
   A     @       76.76.21.21
   CNAME www     cname.vercel-dns.com
   ```
5. Configure no seu provedor de DNS
6. Aguarde propagação (~5min a 48h)
7. Vercel provisiona SSL automático (Let's Encrypt)

### Método 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Seguir prompts:
# - Set up and deploy "~/omma2"? Y
# - Which scope? [Sua conta]
# - Link to existing project? N
# - What's your project's name? omma2
# - In which directory is your code located? ./
# - Auto-detected Project Settings: Y
# - Want to override settings? N

# Deploy completo!
# Vercel fornece URL: https://omma2-xxxxx.vercel.app

# Deploy para produção
vercel --prod
```

### Features Automáticas

**Preview Deployments**
- Cada PR recebe URL única
- Teste mudanças antes de merge
- URL formato: `https://omma2-git-[branch]-[user].vercel.app`

**Automatic Deployments**
- Push para `main` → deploy automático em produção
- Push para outras branches → preview deployment

**Analytics**
- Vercel Analytics (opcional)
- Web Vitals tracking
- Real User Monitoring

---

## Deploy Manual

### Pré-requisitos

- Node.js 18+
- Servidor com acesso SSH
- Nginx ou Apache
- PM2 (para process management)

### Build Local

```bash
# Install dependencies
npm install

# Build
npm run build

# Teste build localmente
npm start
```

### Deploy para VPS

**1. Preparar Servidor**

```bash
# SSH para servidor
ssh user@seu-servidor.com

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Create app directory
mkdir -p /var/www/omma
```

**2. Transfer Files**

```bash
# No seu local, build e compress
npm run build
tar -czf omma-build.tar.gz .next package.json package-lock.json next.config.ts public

# Upload
scp omma-build.tar.gz user@seu-servidor.com:/var/www/omma/

# No servidor, extract
cd /var/www/omma
tar -xzf omma-build.tar.gz

# Install production dependencies
npm ci --production
```

**3. Configure PM2**

```bash
# Start app with PM2
pm2 start npm --name "omma" -- start

# Save PM2 config
pm2 save

# Setup PM2 to start on reboot
pm2 startup

# Monitor
pm2 monit
```

**4. Configure Nginx**

```nginx
# /etc/nginx/sites-available/omma
server {
    listen 80;
    server_name omma.com.br www.omma.com.br;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/omma /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Reload
sudo systemctl reload nginx
```

**5. Setup SSL (Certbot)**

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d omma.com.br -d www.omma.com.br

# Auto-renewal (verificar)
sudo certbot renew --dry-run
```

### Docker (Opcional)

**Dockerfile**

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

**Build e Run**

```bash
# Build image
docker build -t omma-website .

# Run container
docker run -p 3000:3000 -e NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX omma-website
```

---

## Variáveis de Ambiente

### Development (.env.local)

```env
# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Development
NODE_ENV=development
```

### Production

**Vercel**
- Configure em: Project Settings → Environment Variables
- Separar por Environment: Production, Preview, Development

**Manual/VPS**
- Crie `.env.production`:
  ```env
  NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
  NODE_ENV=production
  ```

### Secrets

**NUNCA comite**:
- ❌ API keys
- ❌ Database credentials
- ❌ Tokens de autenticação

**Use**:
- ✅ Environment variables
- ✅ Secret management (Vercel, AWS Secrets, Vault)

---

## CI/CD com GitHub Actions

### Workflow Básico

**`.github/workflows/deploy.yml`**

```yaml
name: Deploy to Production

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_GTM_ID: ${{ secrets.GTM_ID }}

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### Workflow com Testes

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run lint

  build:
    runs-on: ubuntu-latest
    needs: lint
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
        env:
          NEXT_PUBLIC_GTM_ID: ${{ secrets.GTM_ID }}

  deploy-preview:
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel Preview
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}

  deploy-production:
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel Production
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

### GitHub Secrets

Configure em: Repository → Settings → Secrets and variables → Actions

```
VERCEL_TOKEN=xxxxx
VERCEL_ORG_ID=xxxxx
VERCEL_PROJECT_ID=xxxxx
GTM_ID=GTM-XXXXXXX
```

---

## Monitoramento

### Vercel Analytics

1. No projeto Vercel, vá para **Analytics**
2. Click em **Enable**
3. Instale package (opcional para API):
   ```bash
   npm install @vercel/analytics
   ```
4. Adicione ao layout:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

### Google Analytics 4

- Já configurado via GTM
- Acesse [analytics.google.com](https://analytics.google.com)
- Veja eventos em tempo real
- Configure alertas customizados

### Uptime Monitoring

**Opções**:
- [UptimeRobot](https://uptimerobot.com) (gratuito)
- [Pingdom](https://www.pingdom.com)
- [Better Uptime](https://betteruptime.com)

**Setup**:
1. Crie monitor HTTP(S)
2. URL: `https://omma.com.br`
3. Intervalo: 5 minutos
4. Alertas: Email/SMS em downtime

### Error Tracking

**Sentry (Recomendado)**

```bash
npm install @sentry/nextjs
```

```typescript
// sentry.client.config.ts
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

---

## Rollback

### Vercel

**Via Dashboard**
1. Acesse projeto → **Deployments**
2. Encontre deployment anterior estável
3. Click nos 3 pontos → **Promote to Production**
4. Confirme
5. Rollback instantâneo!

**Via CLI**
```bash
# List deployments
vercel ls

# Rollback para deployment específico
vercel rollback [deployment-url]
```

### Manual/VPS

**Com PM2**
```bash
# Backup before deploy
cp -r /var/www/omma /var/www/omma-backup-$(date +%Y%m%d-%H%M%S)

# Se algo der errado, restore
rm -rf /var/www/omma
cp -r /var/www/omma-backup-[timestamp] /var/www/omma
pm2 restart omma
```

**Com Git**
```bash
# Revert para commit anterior
git revert HEAD
git push origin main

# Ou reset (cuidado!)
git reset --hard [commit-hash]
git push --force origin main

# Rebuild
npm run build
pm2 restart omma
```

---

## Checklist de Deploy

### Pré-Deploy

- [ ] Build local funciona (`npm run build`)
- [ ] Linter sem erros (`npm run lint`)
- [ ] Variáveis de ambiente configuradas
- [ ] GTM publicado e testado
- [ ] GA4 recebendo eventos
- [ ] Commit e push para repositório

### Deploy

- [ ] Deploy executado com sucesso
- [ ] URL de produção acessível
- [ ] SSL ativo (HTTPS)
- [ ] Domínio custom configurado (se aplicável)

### Pós-Deploy

- [ ] Smoke test: página carrega
- [ ] GTM carregando (view source)
- [ ] DataLayer inicializado
- [ ] Eventos disparando (preview mode)
- [ ] GA4 recebendo dados (DebugView)
- [ ] Forms funcionando
- [ ] Performance aceitável (Lighthouse)
- [ ] Mobile responsivo
- [ ] Sem erros no console
- [ ] Analytics monitorado por 24h

---

## Troubleshooting

### Build Falha

**Erro**: `npm run build` falha

**Soluções**:
1. Limpe cache: `rm -rf .next node_modules && npm install`
2. Verifique `next.config.ts` syntax
3. Verifique imports e exports
4. Rode localmente primeiro

### Deployment Timeout

**Vercel**: Limite de 45min (hobby) ou 90min (pro)

**Soluções**:
1. Otimize dependências
2. Use `npm ci` ao invés de `npm install`
3. Verifique `.vercelignore`

### ENV Variables não funcionam

**Problema**: Variáveis undefined em produção

**Soluções**:
1. Verifique prefixo `NEXT_PUBLIC_`
2. Configure no Vercel dashboard
3. Redeploy após adicionar variáveis
4. Verifique typos

### 404 em Rotas

**Problema**: Páginas retornam 404

**Soluções**:
1. Verifique estrutura `app/` correta
2. `page.tsx` exporta default?
3. Clear cache e rebuild
4. Verifique logs de build

---

**Última atualização**: 2025-09-30
**Versão**: 1.0.0