# Cravo & Canella Design System

Stack: **React 18 + TypeScript + CSS Modules + Storybook 8**

## Instalação

```bash
npm install
npm run storybook
```

Acesse `http://localhost:6006`

## Estrutura

```
src/
  tokens/
    tokens.css       ← CSS Custom Properties (137 variáveis do Figma)
    tokens.ts        ← Tipagem TypeScript dos tokens
  components/
    Button/          ← 4 variants × 5 states × 4 sizes × 4 icon positions
    Input/           ← 6 states × 4 icon positions
    Checkbox/        ← 6 states
  stories/
    docs/
      Colors.stories.tsx      ← Paleta completa
      Typography.stories.tsx  ← 76 text styles
      Spacing.stories.tsx     ← Spacing, Elevation, Radius
tokens/
  primitives.json    ← 41 tokens (Tokens Studio / Style Dictionary)
  semantic.json      ← 44 aliases
```

## Tokens

Os tokens seguem a arquitetura **Primitives → Semantic → Component**,
espelhando exatamente as Figma Variables do arquivo de DS.

Para usar em qualquer componente:

```css
.meu-componente {
  background-color: var(--color-background-accent);
  color: var(--color-text-on-dark);
  padding: var(--spacing-4) var(--spacing-6);
  border-radius: var(--radius-none);
  box-shadow: var(--elevation-sm);
}
```

## Fontes

Adicione as fontes **Polymath** e **Mokoko** no seu projeto antes de usar.

```css
/* Exemplo com @font-face ou import */
@font-face {
  font-family: 'Polymath';
  src: url('./fonts/Polymath-Regular.woff2') format('woff2');
  font-weight: 400;
}
```

## Componentes disponíveis

| Componente | Variants | Props |
|---|---|---|
| Button | 4 types × 5 states × 4 sizes × 4 icon | label, variant, size, icon, disabled, loading, fullWidth |
| Input | 6 states × 4 icon positions | label, placeholder, state, icon, helperText, type |
| Checkbox | 6 states | label, subLabel, checked, indeterminate, disabled, error |
