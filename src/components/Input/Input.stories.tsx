import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title:     'Components/Input',
  component:  Input,
  tags:      ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente Input de Texto do Design System Cravo & Canella.

**States:** \`default\` · \`focus\` · \`filled\` · \`error\` · \`success\` · \`disabled\`
**Icons:** \`none\` · \`left\` · \`right\` · \`both\`

Ícone padrão esquerdo: MagnifyingGlass (Phosphor) · Ícone padrão direito: Eye (Phosphor)
        `,
      },
    },
  },
  argTypes: {
    state: {
      control: 'select',
      options: ['default','focus','filled','error','success','disabled'],
    },
    icon: {
      control: 'select',
      options: ['none','left','right','both'],
    },
    label:      { control: 'text' },
    placeholder:{ control: 'text' },
    helperText: { control: 'text' },
    fullWidth:  { control: 'boolean' },
    disabled:   { control: 'boolean' },
  },
  args: {
    label:       'E-mail',
    placeholder: 'nome@email.com',
    state:       'default',
    icon:        'none',
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const AllStates: Story = {
  name: 'Todos os Estados',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:20, maxWidth:320 }}>
      <Input label="Default"  placeholder="nome@email.com" state="default" />
      <Input label="Focus"    placeholder="nome@email.com" state="focus" />
      <Input label="Filled"   value="ana@cravoecanella.com.br" state="filled" onChange={()=>{}} />
      <Input label="Error"    value="email inválido" state="error"   helperText="Informe um e-mail válido." onChange={()=>{}} />
      <Input label="Success"  value="ana@email.com"  state="success" helperText="E-mail validado com sucesso." onChange={()=>{}} />
      <Input label="Disabled" placeholder="desabilitado" state="disabled" disabled />
    </div>
  ),
};

export const WithIcons: Story = {
  name: 'Com Ícones',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:20, maxWidth:320 }}>
      <Input label="Buscar produto" placeholder="Buscar..."  icon="left"  iconLeft={<span>🔍</span>} />
      <Input label="Senha"          placeholder="••••••••"   icon="right" iconRight={<span>👁</span>} type="password" />
      <Input label="Código cupom"   placeholder="DESCONTO10" icon="both"  iconLeft={<span>🏷</span>} iconRight={<span>✕</span>} />
    </div>
  ),
};
