import{j as c,a as e}from"./jsx-runtime-b60708da.js";/* empty css               */import"./index-8a57d176.js";import"./_commonjsHelpers-725317a4.js";const x={title:"Design System/Colors",tags:["autodocs"],parameters:{docs:{description:{component:"Paleta de cores completa do DS Cravo & Canella. Primitives → Semantic → Component."}}}},r=({name:n,value:a,token:o})=>c("div",{style:{width:140,fontFamily:"var(--font-primary,sans-serif)"},children:[e("div",{style:{height:56,borderRadius:8,background:a,border:["#ffffff","#fffbf5","#fafaf9","#f5f4f2","#f8f0db"].includes(a)?"1px solid #e2e1de":"none",marginBottom:8}}),e("div",{style:{fontSize:11,fontWeight:500,color:"#47250c"},children:n}),e("div",{style:{fontSize:10,color:"#965b3b",fontFamily:"monospace"},children:a}),e("div",{style:{fontSize:9,color:"#a8a5a0",fontFamily:"monospace",marginTop:2,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:o})]}),t=({title:n,subtitle:a,children:o})=>c("div",{style:{marginBottom:48},children:[e("h3",{style:{fontFamily:"var(--font-primary,sans-serif)",color:"#47250c",fontSize:16,fontWeight:700,margin:"0 0 4px"},children:n}),a&&e("p",{style:{fontSize:12,color:"#965b3b",margin:"0 0 16px",fontFamily:"var(--font-primary,sans-serif)"},children:a}),e("div",{style:{display:"flex",flexWrap:"wrap",gap:12},children:o})]}),i={name:"Brand & Warm",render:()=>c("div",{style:{padding:32,background:"#fffbf5",minHeight:"100vh"},children:[c(t,{title:"Brand",subtitle:"primitive/brand/",children:[e(r,{name:"Off White",value:"#fffbf5",token:"brand/off-white"}),e(r,{name:"Creme",value:"#f8f0db",token:"brand/creme"}),e(r,{name:"Cocoa",value:"#47250c",token:"brand/cocoa"}),e(r,{name:"CC",value:"#813623",token:"brand/cc"})]}),c(t,{title:"Warm & Cold",subtitle:"primitive/warm/ · primitive/cold/",children:[e(r,{name:"Ocean",value:"#6495ad",token:"warm/ocean"}),e(r,{name:"Mostarda",value:"#eab257",token:"warm/mostarda"}),e(r,{name:"Ginger Q.",value:"#be4b0c",token:"warm/ginger-quente"}),e(r,{name:"Sand",value:"#f0d2ac",token:"warm/sand"}),e(r,{name:"Ginger F.",value:"#965b3b",token:"cold/ginger-fria"})]}),e(t,{title:"Neutral",subtitle:"primitive/neutral/ — warm-tint scale",children:[["#fafaf9","50"],["#f5f4f2","100"],["#edecea","150"],["#e2e1de","200"],["#c8c6c2","300"],["#a8a5a0","400"],["#888480","500"],["#6b6865","600"],["#524f4d","700"],["#3a3836","800"],["#2e2c2a","850"],["#222120","900"],["#141312","950"]].map(([n,a])=>e(r,{name:a,value:n,token:`neutral/${a}`},a))})]})},d={name:"Feedback",render:()=>e("div",{style:{padding:32,background:"#fffbf5"},children:["success","error","warning","info"].map(n=>e(t,{title:n.charAt(0).toUpperCase()+n.slice(1),subtitle:`semantic/feedback/${n}-*`,children:["bg","text","border","icon"].map(a=>e(r,{name:a,value:{success:{bg:"#edf5e9",text:"#3f6436",border:"#74b85a",icon:"#4a9332"},error:{bg:"#fcecea",text:"#8b1c13",border:"#d94f3d",icon:"#c0392b"},warning:{bg:"#fdf5e4",text:"#7a4e0c",border:"#e8a020",icon:"#d4860a"},info:{bg:"#eaf2f6",text:"#1e4d62",border:"#6495ad",icon:"#4a7f99"}}[n][a],token:`feedback/${n}-${a}`},a))},n))})},f={name:"Semantic Tokens",render:()=>c("div",{style:{padding:32,background:"#fffbf5"},children:[e(t,{title:"Background",subtitle:"semantic/background/",children:[["base","#fffbf5"],["surface","#f8f0db"],["inverse","#47250c"],["accent","#813623"],["muted","#f0d2ac"],["neutral-subtle","#fafaf9"],["neutral","#f5f4f2"],["neutral-strong","#e2e1de"]].map(([n,a])=>e(r,{name:n,value:a,token:`background/${n}`},n))}),e(t,{title:"Text",subtitle:"semantic/text/",children:[["primary","#47250c"],["secondary","#813623"],["muted","#222120"],["on-dark","#fffbf5"],["link","#6495ad"],["neutral","#524f4d"],["neutral-muted","#888480"],["neutral-placeholder","#a8a5a0"],["neutral-disabled","#c8c6c2"]].map(([n,a])=>e(r,{name:n,value:a,token:`text/${n}`},n))}),e(t,{title:"Border",subtitle:"semantic/border/",children:[["default","#f0d2ac"],["strong","#965b3b"],["focus","#47250c"],["neutral-subtle","#edecea"],["neutral","#c8c6c2"],["neutral-strong","#888480"]].map(([n,a])=>e(r,{name:n,value:a,token:`border/${n}`},n))})]})};var l,s,m;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Brand & Warm',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5',
    minHeight: '100vh'
  }}>\r
      <Section title="Brand" subtitle="primitive/brand/">\r
        <Swatch name="Off White" value="#fffbf5" token="brand/off-white" />\r
        <Swatch name="Creme" value="#f8f0db" token="brand/creme" />\r
        <Swatch name="Cocoa" value="#47250c" token="brand/cocoa" />\r
        <Swatch name="CC" value="#813623" token="brand/cc" />\r
      </Section>\r
      <Section title="Warm & Cold" subtitle="primitive/warm/ · primitive/cold/">\r
        <Swatch name="Ocean" value="#6495ad" token="warm/ocean" />\r
        <Swatch name="Mostarda" value="#eab257" token="warm/mostarda" />\r
        <Swatch name="Ginger Q." value="#be4b0c" token="warm/ginger-quente" />\r
        <Swatch name="Sand" value="#f0d2ac" token="warm/sand" />\r
        <Swatch name="Ginger F." value="#965b3b" token="cold/ginger-fria" />\r
      </Section>\r
      <Section title="Neutral" subtitle="primitive/neutral/ — warm-tint scale">\r
        {[['#fafaf9', '50'], ['#f5f4f2', '100'], ['#edecea', '150'], ['#e2e1de', '200'], ['#c8c6c2', '300'], ['#a8a5a0', '400'], ['#888480', '500'], ['#6b6865', '600'], ['#524f4d', '700'], ['#3a3836', '800'], ['#2e2c2a', '850'], ['#222120', '900'], ['#141312', '950']].map(([v, n]) => <Swatch key={n} name={n} value={v} token={\`neutral/\${n}\`} />)}\r
      </Section>\r
    </div>
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var b,u,p;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Feedback',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5'
  }}>\r
      {['success', 'error', 'warning', 'info'].map(type => <Section key={type} title={type.charAt(0).toUpperCase() + type.slice(1)} subtitle={\`semantic/feedback/\${type}-*\`}>\r
          {['bg', 'text', 'border', 'icon'].map(sub => {
        const map: Record<string, Record<string, string>> = {
          success: {
            bg: '#edf5e9',
            text: '#3f6436',
            border: '#74b85a',
            icon: '#4a9332'
          },
          error: {
            bg: '#fcecea',
            text: '#8b1c13',
            border: '#d94f3d',
            icon: '#c0392b'
          },
          warning: {
            bg: '#fdf5e4',
            text: '#7a4e0c',
            border: '#e8a020',
            icon: '#d4860a'
          },
          info: {
            bg: '#eaf2f6',
            text: '#1e4d62',
            border: '#6495ad',
            icon: '#4a7f99'
          }
        };
        return <Swatch key={sub} name={sub} value={map[type][sub]} token={\`feedback/\${type}-\${sub}\`} />;
      })}\r
        </Section>)}\r
    </div>
}`,...(p=(u=d.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,v,k;f.parameters={...f.parameters,docs:{...(g=f.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Semantic Tokens',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5'
  }}>\r
      <Section title="Background" subtitle="semantic/background/">\r
        {[['base', '#fffbf5'], ['surface', '#f8f0db'], ['inverse', '#47250c'], ['accent', '#813623'], ['muted', '#f0d2ac'], ['neutral-subtle', '#fafaf9'], ['neutral', '#f5f4f2'], ['neutral-strong', '#e2e1de']].map(([n, v]) => <Swatch key={n} name={n} value={v} token={\`background/\${n}\`} />)}\r
      </Section>\r
      <Section title="Text" subtitle="semantic/text/">\r
        {[['primary', '#47250c'], ['secondary', '#813623'], ['muted', '#222120'], ['on-dark', '#fffbf5'], ['link', '#6495ad'], ['neutral', '#524f4d'], ['neutral-muted', '#888480'], ['neutral-placeholder', '#a8a5a0'], ['neutral-disabled', '#c8c6c2']].map(([n, v]) => <Swatch key={n} name={n} value={v} token={\`text/\${n}\`} />)}\r
      </Section>\r
      <Section title="Border" subtitle="semantic/border/">\r
        {[['default', '#f0d2ac'], ['strong', '#965b3b'], ['focus', '#47250c'], ['neutral-subtle', '#edecea'], ['neutral', '#c8c6c2'], ['neutral-strong', '#888480']].map(([n, v]) => <Swatch key={n} name={n} value={v} token={\`border/\${n}\`} />)}\r
      </Section>\r
    </div>
}`,...(k=(v=f.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const C=["BrandPalette","FeedbackColors","SemanticTokens"];export{i as BrandPalette,d as FeedbackColors,f as SemanticTokens,C as __namedExportsOrder,x as default};
