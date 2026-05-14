import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title:     'Components/Checkbox',
  component:  Checkbox,
  tags:      ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
Componente Checkbox do Design System Cravo & Canella.

**Estados:** \`unchecked\` · \`checked\` · \`indeterminate\` · \`error\` · \`disabled unchecked\` · \`disabled checked\`
        `,
      },
    },
  },
  argTypes: {
    label:         { control: 'text' },
    subLabel:      { control: 'text' },
    helperText:    { control: 'text' },
    checked:       { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled:      { control: 'boolean' },
    error:         { control: 'boolean' },
  },
  args: {
    label:   'Aceito os termos de uso',
    checked: false,
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Indeterminate: Story = { args: { indeterminate: true } };
export const WithError: Story = {
  name: 'Com Erro',
  args: { error: true, helperText: 'Campo obrigatório.' },
};
export const WithSubLabel: Story = {
  name: 'Com Sub-label',
  args: { checked: true, subLabel: 'Ao marcar, você concorda com nossa política de privacidade.' },
};

export const AllStates: Story = {
  name: 'Todos os Estados',
  render: () => (
    <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
      <Checkbox label="Unchecked"             checked={false} onChange={()=>{}} />
      <Checkbox label="Checked"               checked={true}  onChange={()=>{}} />
      <Checkbox label="Indeterminate"         indeterminate />
      <Checkbox label="Error"                 error helperText="Campo obrigatório." />
      <Checkbox label="Disabled Unchecked"    disabled />
      <Checkbox label="Disabled Checked"      disabled checked onChange={()=>{}} />
    </div>
  ),
};

export const GroupExample: Story = {
  name: 'Grupo de Checkboxes',
  render: () => (
    <fieldset style={{ border:'none', padding:0, display:'flex', flexDirection:'column', gap:12 }}>
      <legend style={{ fontFamily:'var(--font-primary)', fontSize:14, fontWeight:500, marginBottom:8 }}>
        Preferências de comunicação
      </legend>
      <Checkbox label="Receber novidades por e-mail"             checked={true}  onChange={()=>{}} />
      <Checkbox label="Aceitar termos e condições"               checked={false} onChange={()=>{}} />
      <Checkbox label="Participar do programa de fidelidade"     checked={true}  onChange={()=>{}} />
    </fieldset>
  ),
};
