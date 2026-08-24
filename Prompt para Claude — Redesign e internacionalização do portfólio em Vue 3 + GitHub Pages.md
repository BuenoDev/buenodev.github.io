# Prompt para o Claude Code

Você vai atuar como **desenvolvedor frontend sênior, especialista em Vue 3 e UI/UX**, responsável por modernizar completamente meu portfólio digital hospedado no **GitHub Pages**.

O projeto final deve ser desenvolvido em **Vue 3**, utilizando uma arquitetura moderna, componentizada, responsiva, acessível e fácil de manter.

O objetivo não é apenas “deixar o site mais bonito”. Quero transformar o projeto em um portfólio profissional, moderno, rápido e convincente para recrutadores e clientes, utilizando as referências visuais existentes no projeto.

---

# 1. Stack obrigatória

O projeto deve utilizar:

```text
Vue 3
Vite
JavaScript ou TypeScript
Vue Router, quando necessário
Vue I18n
CSS moderno
Git
GitHub Pages
```

### Preferência de implementação

Utilize:

- Vue 3 com Composition API;
- `<script setup>`;
- Vite;
- componentes reutilizáveis;
- CSS moderno;
- CSS variables/design tokens;
- estrutura adequada para produção.

Caso TypeScript seja apropriado para o projeto atual, você pode utilizá-lo. Caso contrário, JavaScript é aceitável.

Não utilize Vue 2.

Não utilize Options API para novos componentes, exceto se existir uma justificativa muito forte para manter algum componente legado.

---

# 2. Antes de alterar qualquer código

Primeiro, faça uma análise completa do projeto atual.

Inspecione:

- estrutura de pastas;
- `package.json`;
- dependências;
- framework atual;
- configuração do Vite, caso exista;
- configuração do GitHub Pages;
- componentes;
- páginas;
- estilos;
- imagens;
- fontes;
- ícones;
- animações;
- roteamento;
- conteúdo profissional;
- arquivos de configuração;
- GitHub Actions;
- README.

Não altere o código imediatamente.

Primeiro identifique:

1. stack atual;
2. arquitetura atual;
3. o que pode ser reaproveitado;
4. o que precisa ser refatorado;
5. o que precisa ser removido;
6. problemas de UX/UI;
7. problemas de responsividade;
8. problemas de acessibilidade;
9. problemas de performance;
10. problemas de SEO;
11. estratégia recomendada para migrar ou reconstruir em Vue 3.

Depois dessa análise, prossiga automaticamente com a implementação.

Não me faça perguntas sobre detalhes que possam ser inferidos analisando o projeto.

---

# 3. Migração para Vue 3

Caso o projeto atual não seja Vue 3, faça a migração para uma arquitetura Vue 3 + Vite.

A implementação final deve ter uma estrutura semelhante a:

```text
src/
├── assets/
├── components/
├── composables/
├── layouts/
├── pages/
├── router/
├── locales/
├── data/
├── styles/
├── App.vue
└── main.js
```

A estrutura pode ser adaptada conforme a necessidade real do projeto.

Evite criar pastas ou abstrações sem necessidade.

---

# 4. Arquitetura Vue

Utilize:

```vue
<script setup>
```

para os componentes.

Prefira:

```js
ref()
reactive()
computed()
watch()
onMounted()
```

e composables próprios quando houver lógica reutilizável.

Exemplo:

```text
src/composables/
├── useTheme.js
├── useLocale.js
└── useScrollReveal.js
```

Não crie composables apenas para mover código sem necessidade.

---

# 5. Componentização

Organize a interface em componentes independentes e reutilizáveis.

Uma estrutura possível:

```text
components/
├── layout/
│   ├── AppHeader.vue
│   ├── AppFooter.vue
│   └── LanguageSwitcher.vue
│
├── sections/
│   ├── HeroSection.vue
│   ├── AboutSection.vue
│   ├── SkillsSection.vue
│   ├── ProjectsSection.vue
│   ├── ExperienceSection.vue
│   └── ContactSection.vue
│
├── projects/
│   ├── ProjectCard.vue
│   └── ProjectGrid.vue
│
└── ui/
    ├── BaseButton.vue
    ├── BaseIcon.vue
    └── BaseContainer.vue
```

Essa estrutura é apenas uma referência.

Crie somente componentes que realmente tragam benefício.

Evite componentes gigantes.

---

# 6. Gerenciamento de conteúdo

Separe dados de apresentação.

Projetos, skills e informações profissionais devem ser armazenados de maneira estruturada.

Exemplo:

```js
const projects = [
  {
    id: 'project-1',
    title: '...',
    description: '...',
    image: '...',
    technologies: ['Vue', 'Laravel'],
    links: {
      github: '...',
      demo: '...'
    }
  }
]
```

Não espalhe informações dos projetos diretamente em dezenas de componentes.

---

# 7. Internacionalização com Vue I18n

Utilize obrigatoriamente **Vue I18n** para internacionalização.

Idiomas:

```text
pt-BR
en
```

A aplicação deve:

1. verificar uma preferência salva anteriormente;
2. caso não exista, detectar `navigator.language`;
3. utilizar `pt-BR` para português;
4. utilizar `en` para inglês;
5. usar `pt-BR` como fallback;
6. permitir alteração manual;
7. persistir a escolha.

Estrutura sugerida:

```text
src/locales/
├── index.js
├── pt-BR.js
└── en.js
```

ou:

```text
src/locales/
├── pt-BR.json
└── en.json
```

Utilize a estrutura mais adequada à implementação.

---

# 8. Detecção automática do idioma

A lógica deverá seguir:

```text
Preferência manual salva
        ↓
localStorage
        ↓
navigator.language
        ↓
pt-BR / en
        ↓
fallback pt-BR
```

Exemplo conceitual:

```js
const supportedLocales = ['pt-BR', 'en']

const browserLocale = navigator.language

const locale = supportedLocales.includes(browserLocale)
  ? browserLocale
  : browserLocale.startsWith('pt')
    ? 'pt-BR'
    : 'en'
```

Adapte corretamente à biblioteca escolhida.

---

# 9. Estrutura do i18n

Não faça:

```vue
<h1>Olá, sou desenvolvedor</h1>
```

Prefira:

```vue
<h1>{{ t('hero.title') }}</h1>
```

Os textos devem estar centralizados nos arquivos de idioma.

Utilize uma organização semelhante a:

```json
{
  "nav": {
    "home": "Início",
    "about": "Sobre",
    "projects": "Projetos",
    "contact": "Contato"
  },
  "hero": {
    "title": "...",
    "description": "...",
    "cta": "..."
  },
  "about": {},
  "skills": {},
  "projects": {},
  "experience": {},
  "contact": {}
}
```

---

# 10. Diretório de referências visuais

Existe ou deve existir na raiz do projeto:

```text
baseline-design/
```

Essa pasta será utilizada como biblioteca de referências visuais.

Antes de implementar o design, analise os arquivos existentes.

Observe:

- composição;
- tipografia;
- cores;
- grids;
- espaçamento;
- cards;
- navegação;
- botões;
- imagens;
- animações;
- sombras;
- bordas;
- dark mode;
- organização das seções.

Use essas referências como inspiração.

Não copie literalmente outros sites.

---

# 11. Estrutura da pasta baseline-design

Caso ela ainda não exista, crie:

```text
baseline-design/
├── README.md
├── references/
├── screenshots/
├── inspiration/
└── assets/
```

Use:

- `references/` para referências visuais;
- `screenshots/` para screenshots;
- `inspiration/` para referências gerais;
- `assets/` para imagens que possam ser usadas no projeto;
- `README.md` para documentar a finalidade das pastas.

---

# 12. Imagens já existentes

Utilize as imagens que já estão no projeto.

Faça um inventário dos assets antes de substituí-los.

Para cada imagem relevante:

- descubra onde ela é utilizada;
- verifique qualidade;
- considere otimização;
- preserve imagens importantes;
- utilize-as na nova interface quando apropriado.

Não substitua tudo indiscriminadamente.

---

# 13. Design

Quero um portfólio:

- moderno;
- profissional;
- elegante;
- limpo;
- tecnológico;
- visualmente forte;
- minimalista;
- responsivo.

Evite:

- exagero de gradientes;
- excesso de efeitos;
- animações constantes;
- visual genérico de template;
- excesso de cards;
- excesso de informação.

Priorize:

- tipografia;
- hierarquia;
- espaço negativo;
- contraste;
- grid;
- consistência;
- microinterações;
- imagens;
- navegação clara.

O resultado deve parecer um portfólio desenvolvido deliberadamente por um bom frontend developer.

---

# 14. Responsividade

A aplicação Vue deve funcionar corretamente em:

```text
320px
375px
425px
768px
1024px
1280px
1440px
1920px+
```

Teste:

- navegação;
- grids;
- imagens;
- textos;
- botões;
- cards;
- seções;
- espaçamentos.

Não permita overflow horizontal.

---

# 15. Tema

Avalie a implementação de:

```text
System
Light
Dark
```

Caso seja implementado:

- detectar preferência do sistema;
- permitir alteração manual;
- salvar preferência;
- evitar flash visual durante carregamento;
- garantir contraste adequado.

Crie um composable como:

```text
useTheme.js
```

quando isso realmente melhorar a arquitetura.

---

# 16. Página principal

A página principal deve conter aproximadamente:

```text
Header
Hero
About
Skills
Projects
Experience
Contact
Footer
```

Não crie seções apenas para preencher espaço.

---

# 17. Header

O header deve incluir:

- nome/logo;
- navegação;
- seletor de idioma;
- tema, caso implementado;
- CTA quando fizer sentido.

No mobile:

- menu compacto;
- navegação acessível;
- boa usabilidade por toque.

---

# 18. Hero

O Hero deve transmitir rapidamente:

- quem sou;
- o que faço;
- stack;
- diferencial profissional.

Inclua CTA para:

- projetos;
- contato;
- GitHub;
- LinkedIn, caso existam.

---

# 19. Sobre

Crie uma apresentação curta e profissional.

Não invente experiência.

Utilize somente informações presentes no projeto atual.

Melhore a redação apenas quando necessário.

---

# 20. Skills

Mostre as principais tecnologias encontradas no projeto.

Exemplos:

```text
Vue 3
JavaScript
TypeScript
Laravel
PHP
REST APIs
Quasar
Vuetify
Tailwind
Linux
Docker
Git
```

Não invente tecnologias que não façam parte da experiência real apresentada no projeto.

---

# 21. Projetos

Essa deve ser uma das seções mais importantes.

Cada projeto pode incluir:

- imagem;
- título;
- descrição;
- tecnologias;
- GitHub;
- demo;
- status.

Utilize componentes como:

```text
ProjectCard.vue
ProjectGrid.vue
```

quando fizer sentido.

---

# 22. Experiência

Caso existam informações profissionais suficientes, crie uma timeline ou estrutura equivalente.

No desktop:

```text
lado a lado / timeline
```

No mobile:

```text
layout vertical
```

Não invente cargos ou empresas.

---

# 23. Contato

Mantenha simples.

Priorize:

- email;
- GitHub;
- LinkedIn;
- outros links já existentes.

Não crie backend ou formulário complexo sem necessidade.

---

# 24. Animações

Utilize animações discretas.

Pode utilizar bibliotecas como:

```text
Motion
GSAP
AOS
```

Mas escolha somente o que realmente for necessário.

Para Vue 3, prefira soluções compatíveis com a arquitetura escolhida.

Também considere utilizar nativamente:

```text
Transition
TransitionGroup
IntersectionObserver
CSS transitions
```

antes de adicionar uma dependência.

Implemente `prefers-reduced-motion`.

---

# 25. Acessibilidade

Utilize:

- HTML semântico;
- headings corretos;
- labels;
- keyboard navigation;
- focus states;
- alt text;
- contraste;
- `aria-*` apenas quando necessário;
- navegação acessível.

Certifique-se de que o seletor de idioma também seja utilizável via teclado.

---

# 26. SEO

Configure:

- title;
- description;
- Open Graph;
- Twitter/X cards;
- canonical;
- favicon;
- robots.txt;
- sitemap;
- headings;
- alt text;
- structured data quando apropriado.

Para metadados que dependam do idioma, utilize Vue I18n e atualize-os dinamicamente.

---

# 27. Rotas

Caso o portfólio seja uma single-page application, mantenha a arquitetura simples.

Utilize Vue Router somente quando houver benefício real.

Caso seja utilizado:

- configure rotas adequadas;
- considere GitHub Pages;
- evite problemas ao recarregar URLs;
- verifique fallback/404;
- certifique-se de que todas as rotas funcionem no deploy.

Não introduza Vue Router apenas por convenção.

---

# 28. GitHub Pages

Garanta compatibilidade completa com GitHub Pages.

Verifique:

```text
base URL
assets
links
SPA routing
build
deploy
favicon
SEO
```

Configure corretamente o `base` do Vite quando necessário.

Exemplo conceitual:

```js
export default defineConfig({
  base: '/nome-do-repositorio/'
})
```

Mas determine automaticamente o valor correto com base na configuração real do repositório.

Não assuma o nome do repositório.

---

# 29. Deploy

Caso o projeto ainda não possua deploy automatizado, configure GitHub Actions para:

```text
push
 ↓
install
 ↓
build
 ↓
deploy
 ↓
GitHub Pages
```

Use uma configuração moderna e compatível com GitHub Pages.

Não quebre o fluxo atual de deploy caso já exista.

---

# 30. Performance

Otimize:

- imagens;
- fonts;
- JavaScript;
- CSS;
- assets;
- carregamento inicial.

Utilize, quando apropriado:

```text
WebP
AVIF
lazy loading
responsive images
code splitting
dynamic imports
```

Evite dependências pesadas sem necessidade.

---

# 31. Design System

Crie tokens reutilizáveis para:

- cores;
- tipografia;
- spacing;
- radius;
- shadows;
- transitions;
- breakpoints.

Por exemplo:

```css
:root {
  --space-xs: ...;
  --space-sm: ...;
  --space-md: ...;
  --space-lg: ...;

  --radius-sm: ...;
  --radius-md: ...;
  --radius-lg: ...;

  --transition-fast: ...;
  --transition-normal: ...;
}
```

Os valores devem ser definidos a partir do design escolhido.

---

# 32. Organização dos estilos

Prefira:

```text
src/styles/
├── tokens.css
├── base.css
├── typography.css
├── utilities.css
└── main.css
```

Caso essa estrutura seja adequada.

Evite CSS duplicado.

Evite estilos globais desnecessários.

---

# 33. Bibliotecas externas

Você pode instalar bibliotecas externas.

Antes de adicionar cada uma:

1. avalie necessidade;
2. verifique peso;
3. verifique manutenção;
4. verifique compatibilidade com Vue 3;
5. evite dependências redundantes.

Priorize bibliotecas maduras.

---

# 34. Regra sobre referências visuais

Imagens encontradas em:

```text
baseline-design/
```

servem como referência.

Não trate screenshots de sites de terceiros como projetos próprios.

Não apresente imagens de terceiros no portfólio como se fossem trabalhos meus.

---

# 35. Fluxo obrigatório de implementação

Execute as seguintes etapas:

### Etapa 1 — Auditoria

Analise o projeto existente.

### Etapa 2 — Inventário

Identifique:

- páginas;
- componentes;
- assets;
- imagens;
- conteúdo;
- links;
- dependências.

### Etapa 3 — Análise visual

Analise `baseline-design/`.

### Etapa 4 — Arquitetura Vue 3

Defina:

- componentes;
- páginas;
- composables;
- data;
- estilos;
- i18n.

### Etapa 5 — Configuração

Configure:

- Vue 3;
- Vite;
- Vue I18n;
- Vue Router, quando necessário;
- GitHub Pages.

### Etapa 6 — Design System

Crie tokens de design.

### Etapa 7 — Internacionalização

Implemente:

```text
pt-BR
en
```

com autodetecção e persistência.

### Etapa 8 — Componentes

Implemente os componentes principais.

### Etapa 9 — Layout

Monte a página principal.

### Etapa 10 — Responsividade

Teste todos os breakpoints.

### Etapa 11 — Acessibilidade

Revise HTML, teclado, contraste e reduced motion.

### Etapa 12 — SEO

Configure metadados e arquivos necessários.

### Etapa 13 — Performance

Otimize assets e carregamento.

### Etapa 14 — Testes

Execute:

```bash
npm install
npm run build
```

e quaisquer testes existentes.

Caso existam erros, corrija-os.

### Etapa 15 — Revisão crítica

Avalie o resultado como:

- recrutador;
- designer;
- frontend developer;
- usuário mobile.

Corrija os problemas encontrados.

---

# 36. Requisitos de qualidade

O projeto final deve:

- ser Vue 3;
- utilizar Composition API;
- utilizar `<script setup>`;
- ser responsivo;
- possuir i18n;
- detectar idioma automaticamente;
- permitir troca de idioma;
- ser acessível;
- ter SEO;
- ser otimizado;
- funcionar no GitHub Pages;
- manter código organizado;
- utilizar as imagens existentes;
- utilizar `baseline-design/` como referência;
- possuir aparência profissional.

---

# 37. Regra de conteúdo

Não invente:

- empresas;
- clientes;
- cargos;
- projetos;
- resultados;
- certificações;
- tecnologias;
- experiências.

Utilize o conteúdo existente.

Quando melhorar textos, preserve os fatos.

---

# 38. Resultado final

Ao finalizar, quero que o site transmita imediatamente:

> “Este é um desenvolvedor profissional, organizado, experiente e tecnicamente competente.”

Não quero um template genérico.

Quero uma identidade visual própria, construída a partir das referências fornecidas.

---

# 39. Relatório final obrigatório

Ao finalizar, mostre:

### Arquitetura

- estrutura de pastas;
- componentes principais;
- composables;
- sistema de dados.

### Stack

- Vue;
- Vite;
- Vue I18n;
- outras bibliotecas instaladas.

### Internacionalização

Explique:

- detecção automática;
- fallback;
- persistência;
- seletor manual.

### Design

Explique brevemente:

- referências utilizadas;
- decisões visuais;
- responsividade;
- tema.

### Performance

Liste as principais otimizações.

### SEO

Liste as implementações.

### Acessibilidade

Liste as melhorias.

### Deploy

Explique como executar:

```bash
npm install
npm run dev
```

e como fazer build:

```bash
npm run build
```

e deploy no GitHub Pages.

### Alterações

Informe claramente:

- arquivos criados;
- arquivos modificados;
- arquivos removidos.

---

# Regra final

**Não pare no planejamento.**

Execute todo o trabalho.

A sequência obrigatória é:

```text
ANALISAR
    ↓
PLANEJAR
    ↓
MIGRAR/CONFIGURAR VUE 3
    ↓
ANALISAR REFERÊNCIAS
    ↓
CRIAR DESIGN SYSTEM
    ↓
IMPLEMENTAR
    ↓
INTERNACIONALIZAR
    ↓
TORNAR RESPONSIVO
    ↓
OTIMIZAR
    ↓
TESTAR
    ↓
CORRIGIR
    ↓
REVISAR
    ↓
FINALIZAR
```

Antes de considerar o trabalho concluído, execute o build de produção e valide que a aplicação funciona corretamente em **Vue 3 + Vite + GitHub Pages**.