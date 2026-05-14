import{j as a,a as n}from"./jsx-runtime-b60708da.js";/* empty css               */import"./index-8a57d176.js";import"./_commonjsHelpers-725317a4.js";const v={title:"Design System/Spacing",tags:["autodocs"],parameters:{docs:{description:{component:"Escala de espaçamento base 4px — spacing/1 (4px) até spacing/32 (128px)."}}}},i={name:"Escala de Espaçamento",render:()=>a("div",{style:{padding:32,background:"#fffbf5",fontFamily:"sans-serif"},children:[a("div",{style:{display:"grid",gridTemplateColumns:"120px 80px 80px 1fr",gap:8,marginBottom:16,fontSize:11,color:"#813623",fontWeight:700},children:[n("span",{children:"Token"}),n("span",{children:"Valor"}),n("span",{children:"Var CSS"}),n("span",{children:"Visual"})]}),[[1,4],[2,8],[3,12],[4,16],[5,20],[6,24],[7,28],[8,32],[9,36],[10,40],[12,48],[14,56],[16,64],[20,80],[24,96],[32,128]].map(([e,r])=>a("div",{style:{display:"grid",gridTemplateColumns:"120px 80px 80px 1fr",gap:8,alignItems:"center",padding:"6px 0",borderBottom:"1px solid #f0d2ac"},children:[a("code",{style:{fontSize:10,color:"#965b3b"},children:["spacing/",e]}),a("span",{style:{fontSize:11,color:"#47250c",fontWeight:500},children:[r,"px"]}),a("code",{style:{fontSize:9,color:"#a8a5a0"},children:["--spacing-",e]}),n("div",{style:{height:8,background:"#813623",borderRadius:2,width:`${Math.min(r,200)}px`}})]},e))]})},d={name:"Elevações",render:()=>n("div",{style:{padding:32,background:"#fffbf5",fontFamily:"sans-serif"},children:n("div",{style:{display:"flex",flexWrap:"wrap",gap:32},children:[["none","none"],["xs","0 1px 2px rgba(71,37,12,0.06)"],["sm","0 2px 8px rgba(71,37,12,0.08)"],["md","0 4px 16px rgba(71,37,12,0.10)"],["lg","0 8px 32px rgba(71,37,12,0.12)"],["xl","0 16px 48px rgba(71,37,12,0.14)"],["focus","0 0 0 3px rgba(100,149,173,0.35)"]].map(([e,r])=>a("div",{style:{textAlign:"center"},children:[n("div",{style:{width:80,height:80,background:"#fff",borderRadius:8,boxShadow:r,margin:"0 auto 8px",border:e==="none"?"1px solid #e2e1de":"none"}}),a("code",{style:{fontSize:10,color:"#965b3b"},children:["elevation/",e]})]},e))})})},s={name:"Border Radius",render:()=>n("div",{style:{padding:32,background:"#fffbf5",fontFamily:"sans-serif"},children:n("div",{style:{display:"flex",flexWrap:"wrap",gap:24,alignItems:"flex-end"},children:[["none","0px"],["xs","4px"],["sm","8px"],["md","16px"],["lg","24px"],["xl","32px"],["2xl","40px"],["full","9999px"]].map(([e,r])=>a("div",{style:{textAlign:"center"},children:[n("div",{style:{width:72,height:72,background:"#813623",borderRadius:r,margin:"0 auto 8px"}}),a("code",{style:{fontSize:10,color:"#965b3b",display:"block"},children:["radius/",e]}),n("span",{style:{fontSize:10,color:"#a8a5a0"},children:r})]},e))})})};var o,p,l;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'Escala de Espaçamento',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5',
    fontFamily: 'sans-serif'
  }}>\r
      <div style={{
      display: 'grid',
      gridTemplateColumns: '120px 80px 80px 1fr',
      gap: 8,
      marginBottom: 16,
      fontSize: 11,
      color: '#813623',
      fontWeight: 700
    }}>\r
        <span>Token</span><span>Valor</span><span>Var CSS</span><span>Visual</span>\r
      </div>\r
      {[[1, 4], [2, 8], [3, 12], [4, 16], [5, 20], [6, 24], [7, 28], [8, 32], [9, 36], [10, 40], [12, 48], [14, 56], [16, 64], [20, 80], [24, 96], [32, 128]].map(([t, v]) => <div key={t} style={{
      display: 'grid',
      gridTemplateColumns: '120px 80px 80px 1fr',
      gap: 8,
      alignItems: 'center',
      padding: '6px 0',
      borderBottom: '1px solid #f0d2ac'
    }}>\r
          <code style={{
        fontSize: 10,
        color: '#965b3b'
      }}>spacing/{t}</code>\r
          <span style={{
        fontSize: 11,
        color: '#47250c',
        fontWeight: 500
      }}>{v}px</span>\r
          <code style={{
        fontSize: 9,
        color: '#a8a5a0'
      }}>--spacing-{t}</code>\r
          <div style={{
        height: 8,
        background: '#813623',
        borderRadius: 2,
        width: \`\${Math.min(v, 200)}px\`
      }} />\r
        </div>)}\r
    </div>
}`,...(l=(p=i.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var t,c,x;d.parameters={...d.parameters,docs:{...(t=d.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: 'Elevações',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5',
    fontFamily: 'sans-serif'
  }}>\r
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32
    }}>\r
        {[['none', 'none'], ['xs', '0 1px 2px rgba(71,37,12,0.06)'], ['sm', '0 2px 8px rgba(71,37,12,0.08)'], ['md', '0 4px 16px rgba(71,37,12,0.10)'], ['lg', '0 8px 32px rgba(71,37,12,0.12)'], ['xl', '0 16px 48px rgba(71,37,12,0.14)'], ['focus', '0 0 0 3px rgba(100,149,173,0.35)']].map(([name, val]) => <div key={name} style={{
        textAlign: 'center'
      }}>\r
            <div style={{
          width: 80,
          height: 80,
          background: '#fff',
          borderRadius: 8,
          boxShadow: val,
          margin: '0 auto 8px',
          border: name === 'none' ? '1px solid #e2e1de' : 'none'
        }} />\r
            <code style={{
          fontSize: 10,
          color: '#965b3b'
        }}>elevation/{name}</code>\r
          </div>)}\r
      </div>\r
    </div>
}`,...(x=(c=d.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var g,f,m;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Border Radius',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5',
    fontFamily: 'sans-serif'
  }}>\r
      <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: 24,
      alignItems: 'flex-end'
    }}>\r
        {[['none', '0px'], ['xs', '4px'], ['sm', '8px'], ['md', '16px'], ['lg', '24px'], ['xl', '32px'], ['2xl', '40px'], ['full', '9999px']].map(([n, v]) => <div key={n} style={{
        textAlign: 'center'
      }}>\r
            <div style={{
          width: 72,
          height: 72,
          background: '#813623',
          borderRadius: v,
          margin: '0 auto 8px'
        }} />\r
            <code style={{
          fontSize: 10,
          color: '#965b3b',
          display: 'block'
        }}>radius/{n}</code>\r
            <span style={{
          fontSize: 10,
          color: '#a8a5a0'
        }}>{v}</span>\r
          </div>)}\r
      </div>\r
    </div>
}`,...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};const S=["SpacingScale","ElevationScale","RadiusScale"];export{d as ElevationScale,s as RadiusScale,i as SpacingScale,S as __namedExportsOrder,v as default};
