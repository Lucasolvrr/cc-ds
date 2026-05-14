import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../../tokens/tokens.css';

const meta: Meta = {
  title: 'Design System/Typography',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: '76 Text Styles — Polymath (UI) + Mokoko (Editorial). Organizados em Headings, Body, Price e Editorial.',
      },
    },
  },
};
export default meta;

const TypeRow = ({ token, sample, size, weight, family = 'Polymath', textCase = 'none' }: {
  token: string; sample: string; size: number; weight: number; family?: string; textCase?: string;
}) => (
  <div style={{
    display:'grid', gridTemplateColumns:'280px 160px 1fr',
    gap:16, alignItems:'baseline',
    padding:'12px 0', borderBottom:'1px solid #f0d2ac',
  }}>
    <code style={{ fontSize:10, color:'#965b3b', fontFamily:'monospace' }}>{token}</code>
    <span style={{ fontSize:10, color:'#a8a5a0', fontFamily:'monospace' }}>{size}px / {weight} / {family}</span>
    <span style={{
      fontFamily:`var(--font-${family.toLowerCase() === 'mokoko' ? 'editorial' : 'primary'}, sans-serif)`,
      fontSize:size, fontWeight:weight, color:'#47250c',
      textTransform: textCase as any,
      fontVariant: textCase === 'small-caps' ? 'small-caps' : 'normal',
    }}>{sample}</span>
  </div>
);

export const Headings: StoryObj = {
  name: 'Headings',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5' }}>
      <h2 style={{ fontFamily:'sans-serif', color:'#813623', marginBottom:24 }}>Headings — Polymath</h2>
      <TypeRow token="Headings/H-1" sample="Viver com bossa"           size={56} weight={400} />
      <TypeRow token="Headings/H-2" sample="Nova Coleção Outono"       size={40} weight={700} />
      <TypeRow token="Headings/H-3" sample="Calçados para o dia real"  size={32} weight={700} />
      <TypeRow token="Headings/H-4" sample="Leveza que acompanha"      size={24} weight={500} />
      <TypeRow token="Headings/H-5" sample="Sandália Coleção Verão"    size={20} weight={500} />
      <TypeRow token="Headings/H-6" sample="Destaque de seção"         size={16} weight={500} />
      <TypeRow token="Headings/H-7" sample="Label de categoria"        size={14} weight={500} />
    </div>
  ),
};

export const Body: StoryObj = {
  name: 'Body',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5' }}>
      <h2 style={{ fontFamily:'sans-serif', color:'#813623', marginBottom:24 }}>Body — Polymath</h2>
      <TypeRow token="Body/Regular/B-1" sample="Feito com calma, feito com alma."                    size={18} weight={400} />
      <TypeRow token="Body/Regular/B-2" sample="Conforto que se sente, leveza que acompanha."        size={16} weight={400} />
      <TypeRow token="Body/Regular/B-3" sample="Frete grátis em compras acima de R$ 299."            size={14} weight={400} />
      <TypeRow token="Body/Regular/B-4" sample="*Válido para compras no site."                       size={12} weight={400} />
      <TypeRow token="Body/Regular/Link" sample="Ver detalhes do produto →"                          size={16} weight={400} />
      <TypeRow token="Body/Medium/B-1"  sample="Navegação e labels de destaque"                      size={16} weight={500} />
      <TypeRow token="Body/Medium/B-2"  sample="Label de formulário"                                 size={14} weight={500} />
      <TypeRow token="Body/Bold/B-1"    sample="Destaque em parágrafo — bold large."                 size={18} weight={700} />
      <TypeRow token="Body/Bold/B-2"    sample="Destaque em parágrafo — bold médio."                 size={16} weight={700} />
      <TypeRow token="Body/Bold/B-3"    sample="OVERLINE — CATEGORIA"                                size={11} weight={700} textCase="uppercase" />
    </div>
  ),
};

export const PriceAndEditorial: StoryObj = {
  name: 'Price & Editorial',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5' }}>
      <h2 style={{ fontFamily:'sans-serif', color:'#813623', marginBottom:24 }}>Price — Polymath</h2>
      <TypeRow token="Price/Price-LG" sample="R$ 289,00"  size={24} weight={700} />
      <TypeRow token="Price/Price-MD" sample="R$ 189,00"  size={18} weight={500} />
      <TypeRow token="Price/Price-SM" sample="R$ 359,00"  size={14} weight={400} />

      <h2 style={{ fontFamily:'sans-serif', color:'#813623', margin:'32px 0 24px' }}>Editorial — Mokoko</h2>
      <TypeRow token="Editorial/Display"  sample="Casual com bossa."                       size={40} weight={700} family="Mokoko" />
      <TypeRow token="Editorial/Quote-LG" sample='"feito com calma, feito com alma"'       size={32} weight={400} family="Mokoko" />
      <TypeRow token="Editorial/Quote-MD" sample='"Perfeito pra qualquer aventura."'       size={24} weight={400} family="Mokoko" />
      <TypeRow token="Editorial/Quote-SM" sample='"Estilo é um modo de viver."'            size={20} weight={400} family="Mokoko" />
    </div>
  ),
};

export const Uppercase: StoryObj = {
  name: 'Uppercase & Small Caps',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5' }}>
      <h2 style={{ fontFamily:'sans-serif', color:'#813623', marginBottom:24 }}>Uppercase (+5% letter-spacing)</h2>
      <TypeRow token="Headings/Uppercase/H-5"      sample="Nova Coleção"     size={20} weight={500} textCase="uppercase" />
      <TypeRow token="Headings/Uppercase/H-6"      sample="Categoria"        size={16} weight={500} textCase="uppercase" />
      <TypeRow token="Body/Regular/Uppercase/B-2"  sample="Ver detalhes"     size={16} weight={400} textCase="uppercase" />
      <TypeRow token="Body/Bold/Uppercase/B-2"     sample="Finalizar compra" size={16} weight={700} textCase="uppercase" />
    </div>
  ),
};
