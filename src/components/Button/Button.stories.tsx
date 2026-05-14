import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title:     'Components/Button',
  component:  Button,
  tags:      ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente Button do Design System Cravo & Canella.

**Variants:** \`primary\` · \`secondary\` · \`tertiary\` · \`danger\`
**Sizes:** \`lg\` (52px) · \`md\` (44px) · \`sm\` (36px) · \`xs\` (28px)
**Icons:** \`none\` · \`left\` · \`right\` · \`only\`

Todas as cores são vinculadas às variáveis do DS via CSS Custom Properties.
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      description: 'Variante visual do botão',
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
      description: 'Tamanho do botão',
    },
    icon: {
      control: 'select',
      options: ['none', 'left', 'right', 'only'],
      description: 'Posição do ícone',
    },
    label:     { control: 'text',     description: 'Texto do botão' },
    disabled:  { control: 'boolean',  description: 'Estado desabilitado' },
    loading:   { control: 'boolean',  description: 'Estado de carregamento' },
    fullWidth: { control: 'boolean',  description: 'Largura total do container' },
  },
  args: {
    label:    'Comprar',
    variant:  'primary',
    size:     'md',
    icon:     'none',
    disabled: false,
    loading:  false,
    fullWidth:false,
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

// ── DEFAULT ────────────────────────────────────────────────────────
export const Default: Story = {};

// ── ALL VARIANTS ──────────────────────────────────────────────────
export const AllVariants: Story = {
  name: 'Todos os Variants',
  render: () => (
    <div style={{ display:'flex', gap:16, flexWrap:'wrap', alignItems:'center' }}>
      <Button label="Primary"   variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Tertiary"  variant="tertiary" />
      <Button label="Danger"    variant="danger" />
    </div>
  ),
};

// ── ALL SIZES ─────────────────────────────────────────────────────
export const AllSizes: Story = {
  name: 'Todos os Tamanhos',
  render: () => (
    <div style={{ display:'flex', gap:16, alignItems:'center', flexWrap:'wrap' }}>
      <Button label="LG — 52px" size="lg" />
      <Button label="MD — 44px" size="md" />
      <Button label="SM — 36px" size="sm" />
      <Button label="XS — 28px" size="xs" />
    </div>
  ),
};

// ── STATES ────────────────────────────────────────────────────────
export const States: Story = {
  name: 'Estados',
  render: () => (
    <div style={{ display:'flex', gap:16, flexWrap:'wrap', alignItems:'center' }}>
      <Button label="Default"    variant="primary" />
      <Button label="Disabled"   variant="primary" disabled />
      <Button label="Loading"    variant="primary" loading />
      <Button label="Default"    variant="secondary" />
      <Button label="Disabled"   variant="secondary" disabled />
      <Button label="Tertiary"   variant="tertiary" />
      <Button label="Disabled"   variant="tertiary" disabled />
    </div>
  ),
};

// ── SECONDARY ALL SIZES ───────────────────────────────────────────
export const SecondaryAllSizes: Story = {
  name: 'Secondary — Todos os Tamanhos',
  render: () => (
    <div style={{ display:'flex', gap:16, alignItems:'center', flexWrap:'wrap' }}>
      <Button label="LG — 52px" variant="secondary" size="lg" />
      <Button label="MD — 44px" variant="secondary" size="md" />
      <Button label="SM — 36px" variant="secondary" size="sm" />
      <Button label="XS — 28px" variant="secondary" size="xs" />
    </div>
  ),
};

// ── FULL WIDTH ────────────────────────────────────────────────────
export const FullWidth: Story = {
  name: 'Full Width',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:12, maxWidth:400 }}>
      <Button label="Finalizar compra"    variant="primary"   fullWidth />
      <Button label="Continuar comprando" variant="secondary" fullWidth />
    </div>
  ),
};
