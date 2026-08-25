# Gustavo Bueno · Portfólio

Portfólio pessoal construído em **Vue 3 + Vite**, com internacionalização (pt-BR/en), tema claro/escuro e deploy automático no GitHub Pages.

## Stack

- Vue 3 (Composition API, `<script setup>`)
- Vite
- Vue I18n

## Como editar o conteúdo (sem mexer em código)

Todo o conteúdo do site (perfil, experiências, formação, skills, interesses, prêmios e links sociais) fica em um único arquivo JSON:

```
src/data/portfolio.json
```

Basta editar os valores desse arquivo — não é necessário tocar em nenhum componente `.vue`. Campos traduzíveis usam o formato:

```json
{ "pt-BR": "Texto em português", "en": "Text in english" }
```

Textos fixos da interface (rótulos de menu, seções, tema, idioma) ficam em:

```
src/locales/pt-BR.json
src/locales/en.json
```

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

O resultado é gerado em `dist/`. O deploy para o GitHub Pages é feito automaticamente via GitHub Actions (`.github/workflows/deploy.yml`) a cada push na branch `master`.

## Estrutura

```
src/
├── components/
│   ├── layout/     # Header, Footer, LanguageSwitcher, ThemeToggle
│   ├── sections/    # Seções da página (About, Experience, Education, Skills, Interests, Awards)
│   └── ui/          # Componentes de UI genéricos (BaseIcon)
├── composables/     # useLocale, useTheme
├── data/
│   └── portfolio.json  # Conteúdo editável do portfólio
├── locales/         # Strings de interface (i18n)
├── styles/          # Design tokens e estilos globais
├── App.vue
└── main.js
```

Arquivos estáticos legados (template Bootstrap original) foram mantidos em `legacy-static/` como referência histórica.
