import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../../tokens/tokens.css';

const meta: Meta = {
  title: 'Design System/Colors',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Paleta de cores completa do DS Cravo & Canella. Primitives → Semantic → Component.',
      },
    },
  },
};
export default meta;

// ── SWATCH ────────────────────────────────────────────────────────
const Swatch = ({ name, value, token }: { name: string; value: string; token: string }) => (
  <div style={{ width:140, fontFamily:'var(--font-primary,sans-serif)' }}>
    <div style={{
      height:56, borderRadius:8, background:value,
      border: ['#ffffff','#fffbf5','#fafaf9','#f5f4f2','#f8f0db'].includes(value)
        ? '1px solid #e2e1de' : 'none',
      marginBottom:8,
    }} />
    <div style={{ fontSize:11, fontWeight:500, color:'#47250c' }}>{name}</div>
    <div style={{ fontSize:10, color:'#965b3b', fontFamily:'monospace' }}>{value}</div>
    <div style={{ fontSize:9,  color:'#a8a5a0', fontFamily:'monospace', marginTop:2, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{token}</div>
  </div>
);

const Section = ({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) => (
  <div style={{ marginBottom:48 }}>
    <h3 style={{ fontFamily:'var(--font-primary,sans-serif)', color:'#47250c', fontSize:16, fontWeight:700, margin:'0 0 4px' }}>{title}</h3>
    {subtitle && <p style={{ fontSize:12, color:'#965b3b', margin:'0 0 16px', fontFamily:'var(--font-primary,sans-serif)' }}>{subtitle}</p>}
    <div style={{ display:'flex', flexWrap:'wrap', gap:12 }}>{children}</div>
  </div>
);

export const BrandPalette: StoryObj = {
  name: 'Brand & Warm',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5', minHeight:'100vh' }}>
      <Section title="Brand" subtitle="primitive/brand/">
        <Swatch name="Off White"   value="#fffbf5" token="brand/off-white" />
        <Swatch name="Creme"       value="#f8f0db" token="brand/creme" />
        <Swatch name="Cocoa"       value="#47250c" token="brand/cocoa" />
        <Swatch name="CC"          value="#813623" token="brand/cc" />
      </Section>
      <Section title="Warm & Cold" subtitle="primitive/warm/ · primitive/cold/">
        <Swatch name="Ocean"       value="#6495ad" token="warm/ocean" />
        <Swatch name="Mostarda"    value="#eab257" token="warm/mostarda" />
        <Swatch name="Ginger Q."   value="#be4b0c" token="warm/ginger-quente" />
        <Swatch name="Sand"        value="#f0d2ac" token="warm/sand" />
        <Swatch name="Ginger F."   value="#965b3b" token="cold/ginger-fria" />
      </Section>
      <Section title="Neutral" subtitle="primitive/neutral/ — warm-tint scale">
        {[['#fafaf9','50'],['#f5f4f2','100'],['#edecea','150'],['#e2e1de','200'],
          ['#c8c6c2','300'],['#a8a5a0','400'],['#888480','500'],['#6b6865','600'],
          ['#524f4d','700'],['#3a3836','800'],['#2e2c2a','850'],['#222120','900'],['#141312','950'],
        ].map(([v,n]) => <Swatch key={n} name={n} value={v} token={`neutral/${n}`} />)}
      </Section>
    </div>
  ),
};

export const FeedbackColors: StoryObj = {
  name: 'Feedback',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5' }}>
      {['success','error','warning','info'].map(type => (
        <Section key={type} title={type.charAt(0).toUpperCase()+type.slice(1)} subtitle={`semantic/feedback/${type}-*`}>
          {['bg','text','border','icon'].map(sub => {
            const map: Record<string,Record<string,string>> = {
              success:{ bg:'#edf5e9', text:'#3f6436', border:'#74b85a', icon:'#4a9332' },
              error:  { bg:'#fcecea', text:'#8b1c13', border:'#d94f3d', icon:'#c0392b' },
              warning:{ bg:'#fdf5e4', text:'#7a4e0c', border:'#e8a020', icon:'#d4860a' },
              info:   { bg:'#eaf2f6', text:'#1e4d62', border:'#6495ad', icon:'#4a7f99' },
            };
            return <Swatch key={sub} name={sub} value={map[type][sub]} token={`feedback/${type}-${sub}`} />;
          })}
        </Section>
      ))}
    </div>
  ),
};

export const SemanticTokens: StoryObj = {
  name: 'Semantic Tokens',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5' }}>
      <Section title="Background" subtitle="semantic/background/">
        {[
          ['base','#fffbf5'],['surface','#f8f0db'],['inverse','#47250c'],
          ['accent','#813623'],['muted','#f0d2ac'],['neutral-subtle','#fafaf9'],
          ['neutral','#f5f4f2'],['neutral-strong','#e2e1de'],
        ].map(([n,v]) => <Swatch key={n} name={n} value={v} token={`background/${n}`} />)}
      </Section>
      <Section title="Text" subtitle="semantic/text/">
        {[
          ['primary','#47250c'],['secondary','#813623'],['muted','#222120'],
          ['on-dark','#fffbf5'],['link','#6495ad'],['neutral','#524f4d'],
          ['neutral-muted','#888480'],['neutral-placeholder','#a8a5a0'],['neutral-disabled','#c8c6c2'],
        ].map(([n,v]) => <Swatch key={n} name={n} value={v} token={`text/${n}`} />)}
      </Section>
      <Section title="Border" subtitle="semantic/border/">
        {[
          ['default','#f0d2ac'],['strong','#965b3b'],['focus','#47250c'],
          ['neutral-subtle','#edecea'],['neutral','#c8c6c2'],['neutral-strong','#888480'],
        ].map(([n,v]) => <Swatch key={n} name={n} value={v} token={`border/${n}`} />)}
      </Section>
    </div>
  ),
};
