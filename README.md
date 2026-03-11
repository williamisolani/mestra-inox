## Mestra Inox – Landing Page

Landing page institucional para a **Mestra Inox**, focada em apresentação da marca, diferenciais e geração de leads por **WhatsApp** e **formulário de contato**.

---

## Tecnologias

- **Vite** (build tool)
- **React** + **TypeScript**
- **React Router**
- **Tailwind CSS**
- **shadcn-ui**
- **lucide-react** (ícones)

---

## Como rodar o projeto

### Requisitos

- Node.js 18+ (recomendado)
- npm (ou pnpm/yarn, se preferir adaptar os comandos)

### Passos

```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# pré-visualizar o build
npm run preview
```

Por padrão, o Vite sobe em algo como `http://localhost:5173`.

---

## Estrutura principal

Principais arquivos/pastas:

- `src/main.tsx` – bootstrap do React + Provider de tema/shadcn/etc.
- `src/App.tsx` – provedores globais (React Query, toasts, tooltip) e rotas.
- `src/pages/Index.tsx` – página principal (home), que monta todas as seções.
- `src/components/`
  - `Header.tsx` – cabeçalho fixo com:
    - Tarja superior de contato (telefone, e‑mail, horário).
    - Navegação por âncoras (`#porque`, `#solucoes`, `#sobmedida`, `#galeria`, `#contato`).
    - Botão de WhatsApp “Solicitar orçamento”.
  - `HeroSection.tsx` – seção hero com imagem de fundo, headline e CTAs:
    - Botão **“Fale com um Consultor”** (WhatsApp).
    - Botão **“Linha de Produtos”** (scroll para a seção de soluções).
  - `WhySection.tsx`, `SolutionsSection.tsx`, `CustomProjectsSection.tsx`,
    `InoxSection.tsx`, `SegmentsSection.tsx`, `GallerySection.tsx` – seções de conteúdo
    apresentando diferenciais, linhas de produtos, projetos sob medida, inox, segmentos atendidos e galeria.
  - `ContactSection.tsx` – seção de contato com:
    - Bloco de WhatsApp com CTA forte.
    - Dados de contato (telefone, e‑mail, endereço) clicáveis.
    - Formulário de orçamento (estado local de “enviado”, sem backend por padrão).
  - `FooterSection.tsx` – rodapé com:
    - Logo Mestra Inox.
    - Mini descrição institucional.
    - Navegação por âncoras.
    - Contatos (telefone, e‑mail, endereço) clicáveis.
    - Ícones de redes sociais (Instagram, Facebook, LinkedIn).
  - `AnimatedSection.tsx` – wrapper para animações de entrada suave das seções.
- `src/lib/constants.ts` – centraliza os **dados de contato** e o **link de WhatsApp**.

---

## Configurando os dados da empresa

Todas as informações de contato e links principais ficam em `src/lib/constants.ts`:

## Comportamentos importantes

- **Header fixo**
  - Tarja de contato (desktop) fixa no topo.
  - Logo e navegação logo abaixo, também fixos, com proporção ajustada (1/3 logo, 2/3 menu).

- **Links de contato clicáveis**
  - Telefone: `tel:` com número somente em dígitos.
  - E‑mail: `mailto:`.
  - Endereço: abre o Google Maps com busca para o endereço:
    - `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`.

- **WhatsApp como principal canal de conversão**
  - Hero, seção de contato e pós-envio do formulário direcionam para o WhatsApp usando `WHATSAPP_LINK`.

- **Responsividade**
  - Layout em grid/flex com breakpoints Tailwind (`sm`, `md`, `lg`).
  - Cuidados específicos em:
    - Hero: `padding-bottom` extra para evitar que o bloco de benefícios (fixo no bottom do hero) sobreponha os botões no mobile.
    - Header/menus: navegação desktop e menu mobile (hambúrguer).

---

## Formulário de contato

O formulário da `ContactSection` atualmente:

- Usa estado local (`submitted`) para exibir uma mensagem de sucesso após o envio.
- **Não envia dados para nenhum backend** por padrão.

Para integrar com uma API (por exemplo, enviar para um CRM ou e‑mail):

- Adapte a função `handleSubmit` em `src/components/ContactSection.tsx` para:
  - Prevenir o submit padrão (já está feito).
  - Coletar os valores dos campos.
  - Chamar um endpoint (via `fetch` ou `react-query`).
  - Tratar estados de loading/erro/sucesso.

---

## Customização

Alguns pontos comuns de customização:

- **Logo**
  - Substituir o arquivo `src/assets/logo-mestra-inox.png` pela nova marca (mantendo o mesmo nome ou ajustando os imports).

- **Textos e seções**
  - Headline, subtítulos e descrições estão espalhados pelas seções em `src/components/*Section.tsx`.
  - É possível adicionar/remover cards de produtos, segmentos etc. diretamente nos arrays de cada seção.

- **Cores e tema**
  - As cores principais (`primary`, `accent`) vêm do Tailwind/shadcn (ver `tailwind.config.ts` e tema shadcn).
  - `accent` é usado para destaques/CTAs (amarelo).

---

## Deploy

O projeto é um front-end estático; após `npm run build`, a pasta `dist/` pode ser servida em qualquer serviço de hospedagem estática, por exemplo:

- Vercel
- Netlify
- GitHub Pages
- Static hosting em servidores próprios

A configuração específica depende da plataforma escolhida (normalmente basta apontar para a pasta `dist`).

---

## Licença

Este projeto é de uso interno para a Mestra Inox (ou para quem o mantiver).  
Defina aqui a licença apropriada (por exemplo, MIT, privativo, etc.), se necessário.
