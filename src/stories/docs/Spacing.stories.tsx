import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import '../../tokens/tokens.css';

const meta: Meta = {
  title: 'Design System/Spacing',
  tags: ['autodocs'],
  parameters: { docs: { description: { component: 'Escala de espaçamento base 4px — spacing/1 (4px) até spacing/32 (128px).' } } },
};
export default meta;

export const SpacingScale: StoryObj = {
  name: 'Escala de Espaçamento',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5', fontFamily:'sans-serif' }}>
      <div style={{ display:'grid', gridTemplateColumns:'120px 80px 80px 1fr', gap:8, marginBottom:16, fontSize:11, color:'#813623', fontWeight:700 }}>
        <span>Token</span><span>Valor</span><span>Var CSS</span><span>Visual</span>
      </div>
      {[
        [1,4],[2,8],[3,12],[4,16],[5,20],[6,24],[7,28],[8,32],[9,36],[10,40],
        [12,48],[14,56],[16,64],[20,80],[24,96],[32,128],
      ].map(([t,v]) => (
        <div key={t} style={{ display:'grid', gridTemplateColumns:'120px 80px 80px 1fr', gap:8, alignItems:'center', padding:'6px 0', borderBottom:'1px solid #f0d2ac' }}>
          <code style={{ fontSize:10, color:'#965b3b' }}>spacing/{t}</code>
          <span style={{ fontSize:11, color:'#47250c', fontWeight:500 }}>{v}px</span>
          <code style={{ fontSize:9, color:'#a8a5a0' }}>--spacing-{t}</code>
          <div style={{ height:8, background:'#813623', borderRadius:2, width:`${Math.min(v, 200)}px` }} />
        </div>
      ))}
    </div>
  ),
};

export const ElevationScale: StoryObj = {
  name: 'Elevações',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5', fontFamily:'sans-serif' }}>
      <div style={{ display:'flex', flexWrap:'wrap', gap:32 }}>
        {[
          ['none',  'none'],
          ['xs',    '0 1px 2px rgba(71,37,12,0.06)'],
          ['sm',    '0 2px 8px rgba(71,37,12,0.08)'],
          ['md',    '0 4px 16px rgba(71,37,12,0.10)'],
          ['lg',    '0 8px 32px rgba(71,37,12,0.12)'],
          ['xl',    '0 16px 48px rgba(71,37,12,0.14)'],
          ['focus', '0 0 0 3px rgba(100,149,173,0.35)'],
        ].map(([name, val]) => (
          <div key={name} style={{ textAlign:'center' }}>
            <div style={{ width:80, height:80, background:'#fff', borderRadius:8, boxShadow:val, margin:'0 auto 8px', border: name==='none' ? '1px solid #e2e1de' : 'none' }} />
            <code style={{ fontSize:10, color:'#965b3b' }}>elevation/{name}</code>
          </div>
        ))}
      </div>
    </div>
  ),
};

export const RadiusScale: StoryObj = {
  name: 'Border Radius',
  render: () => (
    <div style={{ padding:32, background:'#fffbf5', fontFamily:'sans-serif' }}>
      <div style={{ display:'flex', flexWrap:'wrap', gap:24, alignItems:'flex-end' }}>
        {[
          ['none','0px'],['xs','4px'],['sm','8px'],['md','16px'],
          ['lg','24px'],['xl','32px'],['2xl','40px'],['full','9999px'],
        ].map(([n,v]) => (
          <div key={n} style={{ textAlign:'center' }}>
            <div style={{ width:72, height:72, background:'#813623', borderRadius:v, margin:'0 auto 8px' }} />
            <code style={{ fontSize:10, color:'#965b3b', display:'block' }}>radius/{n}</code>
            <span style={{ fontSize:10, color:'#a8a5a0' }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  ),
};
