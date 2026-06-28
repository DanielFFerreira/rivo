# Rivo — Fashion E-commerce Landing Page

Landing page de moda desenvolvida com **Nuxt 4**, **Vue 3**, **TypeScript**, **Tailwind CSS v4** e **DaisyUI v5**. Projeto construído como estudo prático de front-end moderno com foco em componentização, responsividade e boas práticas.

## ✨ Funcionalidades

- Layout totalmente responsivo (mobile-first)
- Cabeçalho com menu hambúrguer animado para mobile
- Seção hero com chamada para ação
- Grade de produtos mais vendidos
- Catálogo com filtro reativo por categoria
- Banner de oferta exclusiva com contador regressivo funcional
- Formulário de newsletter com feedback de confirmação
- Rodapé com colunas de links e ícones sociais
- Página de erro personalizada
- Acessibilidade com `aria-label`, `aria-pressed` e `aria-expanded`

## 🛠️ Stack

| Tecnologia | Versão | Uso |
|---|---|---|
| Nuxt | 4 | Framework full-stack com SSR |
| Vue | 3 | Composition API + `<script setup>` |
| TypeScript | — | Tipagem em todos os componentes |
| Tailwind CSS | v4 | Estilização utilitária via plugin Vite |
| DaisyUI | v5 | Plugin CSS (tema light) |
| @nuxt/image | 2 | Otimização e lazy loading de imagens |
| @nuxt/fonts | 0.14 | Carregamento automático de fontes Google |

## 🎨 Design System

**Cores da marca:**
```
#224F34  → Verde escuro primário (textos, botões, bordas)
#C2EFD4  → Verde claro (backgrounds de seções e cards)
#267D49  → Verde médio (textos secundários e destaques)
```

**Fontes:**
```
Rufina        → Títulos de seção (font-rufina)
Poppins       → Corpo, botões e labels (font-poppins)
Roboto Slab   → Subtítulos descritivos (font-slab)
Roboto Mono   → Uso utilitário (font-mono)
```

## 📁 Estrutura

```
app/
├── pages/
│   └── index.vue                    # Composição da landing page
├── components/
│   ├── Layout/
│   │   ├── Header.vue               # Cabeçalho + menu mobile
│   │   └── Footer.vue               # Rodapé com links e redes sociais
│   └── LandingPage/
│       ├── HeroSection.vue          # Seção inicial com CTA
│       ├── BestSellingSection.vue   # Produtos em destaque
│       ├── ProductCard.vue          # Card reutilizável de produto
│       ├── OurProductsSection.vue   # Catálogo com filtro por categoria
│       ├── ExclusiveOfferSection.vue # Banner com countdown regressivo
│       └── NewsletterSection.vue    # Captura de e-mail
└── assets/css/
    └── main.css                     # @theme, fontes e DaisyUI
public/
├── logo/, icon/, hero/, products/   # Assets estáticos
└── offer/                           # Imagem da seção de oferta
```

## 🚀 Como rodar

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento (http://localhost:3000)
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview

# Geração estática
npm run generate
```

## 📌 Observações de arquitetura

- A configuração do Tailwind v4 é **CSS-first**: sem `tailwind.config.js`, tudo fica em `app/assets/css/main.css` via `@theme` e `@plugin`
- Componentes são **auto-importados** pelo Nuxt com nome baseado no caminho: `components/Layout/Header.vue` → `<LayoutHeader />`
- Dados de produtos e conteúdo ficam **diretamente nos componentes** (sem backend ou store), alteráveis pelo `<script setup>` de cada seção
- O `ProductCard` tem modo `compact` para uso no catálogo (grid 4 colunas) e modo normal para best selling (grid 3 colunas)
- O countdown da `ExclusiveOfferSection` inicializa no `onMounted` para evitar hydration mismatch com SSR

## 📎 Repositório

[github.com/DanielFFerreira/rivo](https://github.com/DanielFFerreira/rivo)
