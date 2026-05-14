import{j as a,a as e}from"./jsx-runtime-b60708da.js";/* empty css               */import"./index-8a57d176.js";import"./_commonjsHelpers-725317a4.js";const C={title:"Design System/Typography",tags:["autodocs"],parameters:{docs:{description:{component:"76 Text Styles — Polymath (UI) + Mokoko (Editorial). Organizados em Headings, Body, Price e Editorial."}}}},o=({token:E,sample:x,size:n,weight:l,family:p="Polymath",textCase:d="none"})=>a("div",{style:{display:"grid",gridTemplateColumns:"280px 160px 1fr",gap:16,alignItems:"baseline",padding:"12px 0",borderBottom:"1px solid #f0d2ac"},children:[e("code",{style:{fontSize:10,color:"#965b3b",fontFamily:"monospace"},children:E}),a("span",{style:{fontSize:10,color:"#a8a5a0",fontFamily:"monospace"},children:[n,"px / ",l," / ",p]}),e("span",{style:{fontFamily:`var(--font-${p.toLowerCase()==="mokoko"?"editorial":"primary"}, sans-serif)`,fontSize:n,fontWeight:l,color:"#47250c",textTransform:d,fontVariant:d==="small-caps"?"small-caps":"normal"},children:x})]}),s={name:"Headings",render:()=>a("div",{style:{padding:32,background:"#fffbf5"},children:[e("h2",{style:{fontFamily:"sans-serif",color:"#813623",marginBottom:24},children:"Headings — Polymath"}),e(o,{token:"Headings/H-1",sample:"Viver com bossa",size:56,weight:400}),e(o,{token:"Headings/H-2",sample:"Nova Coleção Outono",size:40,weight:700}),e(o,{token:"Headings/H-3",sample:"Calçados para o dia real",size:32,weight:700}),e(o,{token:"Headings/H-4",sample:"Leveza que acompanha",size:24,weight:500}),e(o,{token:"Headings/H-5",sample:"Sandália Coleção Verão",size:20,weight:500}),e(o,{token:"Headings/H-6",sample:"Destaque de seção",size:16,weight:500}),e(o,{token:"Headings/H-7",sample:"Label de categoria",size:14,weight:500})]})},i={name:"Body",render:()=>a("div",{style:{padding:32,background:"#fffbf5"},children:[e("h2",{style:{fontFamily:"sans-serif",color:"#813623",marginBottom:24},children:"Body — Polymath"}),e(o,{token:"Body/Regular/B-1",sample:"Feito com calma, feito com alma.",size:18,weight:400}),e(o,{token:"Body/Regular/B-2",sample:"Conforto que se sente, leveza que acompanha.",size:16,weight:400}),e(o,{token:"Body/Regular/B-3",sample:"Frete grátis em compras acima de R$ 299.",size:14,weight:400}),e(o,{token:"Body/Regular/B-4",sample:"*Válido para compras no site.",size:12,weight:400}),e(o,{token:"Body/Regular/Link",sample:"Ver detalhes do produto →",size:16,weight:400}),e(o,{token:"Body/Medium/B-1",sample:"Navegação e labels de destaque",size:16,weight:500}),e(o,{token:"Body/Medium/B-2",sample:"Label de formulário",size:14,weight:500}),e(o,{token:"Body/Bold/B-1",sample:"Destaque em parágrafo — bold large.",size:18,weight:700}),e(o,{token:"Body/Bold/B-2",sample:"Destaque em parágrafo — bold médio.",size:16,weight:700}),e(o,{token:"Body/Bold/B-3",sample:"OVERLINE — CATEGORIA",size:11,weight:700,textCase:"uppercase"})]})},r={name:"Price & Editorial",render:()=>a("div",{style:{padding:32,background:"#fffbf5"},children:[e("h2",{style:{fontFamily:"sans-serif",color:"#813623",marginBottom:24},children:"Price — Polymath"}),e(o,{token:"Price/Price-LG",sample:"R$ 289,00",size:24,weight:700}),e(o,{token:"Price/Price-MD",sample:"R$ 189,00",size:18,weight:500}),e(o,{token:"Price/Price-SM",sample:"R$ 359,00",size:14,weight:400}),e("h2",{style:{fontFamily:"sans-serif",color:"#813623",margin:"32px 0 24px"},children:"Editorial — Mokoko"}),e(o,{token:"Editorial/Display",sample:"Casual com bossa.",size:40,weight:700,family:"Mokoko"}),e(o,{token:"Editorial/Quote-LG",sample:'"feito com calma, feito com alma"',size:32,weight:400,family:"Mokoko"}),e(o,{token:"Editorial/Quote-MD",sample:'"Perfeito pra qualquer aventura."',size:24,weight:400,family:"Mokoko"}),e(o,{token:"Editorial/Quote-SM",sample:'"Estilo é um modo de viver."',size:20,weight:400,family:"Mokoko"})]})},t={name:"Uppercase & Small Caps",render:()=>a("div",{style:{padding:32,background:"#fffbf5"},children:[e("h2",{style:{fontFamily:"sans-serif",color:"#813623",marginBottom:24},children:"Uppercase (+5% letter-spacing)"}),e(o,{token:"Headings/Uppercase/H-5",sample:"Nova Coleção",size:20,weight:500,textCase:"uppercase"}),e(o,{token:"Headings/Uppercase/H-6",sample:"Categoria",size:16,weight:500,textCase:"uppercase"}),e(o,{token:"Body/Regular/Uppercase/B-2",sample:"Ver detalhes",size:16,weight:400,textCase:"uppercase"}),e(o,{token:"Body/Bold/Uppercase/B-2",sample:"Finalizar compra",size:16,weight:700,textCase:"uppercase"})]})};var m,c,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Headings',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5'
  }}>\r
      <h2 style={{
      fontFamily: 'sans-serif',
      color: '#813623',
      marginBottom: 24
    }}>Headings — Polymath</h2>\r
      <TypeRow token="Headings/H-1" sample="Viver com bossa" size={56} weight={400} />\r
      <TypeRow token="Headings/H-2" sample="Nova Coleção Outono" size={40} weight={700} />\r
      <TypeRow token="Headings/H-3" sample="Calçados para o dia real" size={32} weight={700} />\r
      <TypeRow token="Headings/H-4" sample="Leveza que acompanha" size={24} weight={500} />\r
      <TypeRow token="Headings/H-5" sample="Sandália Coleção Verão" size={20} weight={500} />\r
      <TypeRow token="Headings/H-6" sample="Destaque de seção" size={16} weight={500} />\r
      <TypeRow token="Headings/H-7" sample="Label de categoria" size={14} weight={500} />\r
    </div>
}`,...(g=(c=s.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var y,h,u;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Body',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5'
  }}>\r
      <h2 style={{
      fontFamily: 'sans-serif',
      color: '#813623',
      marginBottom: 24
    }}>Body — Polymath</h2>\r
      <TypeRow token="Body/Regular/B-1" sample="Feito com calma, feito com alma." size={18} weight={400} />\r
      <TypeRow token="Body/Regular/B-2" sample="Conforto que se sente, leveza que acompanha." size={16} weight={400} />\r
      <TypeRow token="Body/Regular/B-3" sample="Frete grátis em compras acima de R$ 299." size={14} weight={400} />\r
      <TypeRow token="Body/Regular/B-4" sample="*Válido para compras no site." size={12} weight={400} />\r
      <TypeRow token="Body/Regular/Link" sample="Ver detalhes do produto →" size={16} weight={400} />\r
      <TypeRow token="Body/Medium/B-1" sample="Navegação e labels de destaque" size={16} weight={500} />\r
      <TypeRow token="Body/Medium/B-2" sample="Label de formulário" size={14} weight={500} />\r
      <TypeRow token="Body/Bold/B-1" sample="Destaque em parágrafo — bold large." size={18} weight={700} />\r
      <TypeRow token="Body/Bold/B-2" sample="Destaque em parágrafo — bold médio." size={16} weight={700} />\r
      <TypeRow token="Body/Bold/B-3" sample="OVERLINE — CATEGORIA" size={11} weight={700} textCase="uppercase" />\r
    </div>
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var f,k,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Price & Editorial',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5'
  }}>\r
      <h2 style={{
      fontFamily: 'sans-serif',
      color: '#813623',
      marginBottom: 24
    }}>Price — Polymath</h2>\r
      <TypeRow token="Price/Price-LG" sample="R$ 289,00" size={24} weight={700} />\r
      <TypeRow token="Price/Price-MD" sample="R$ 189,00" size={18} weight={500} />\r
      <TypeRow token="Price/Price-SM" sample="R$ 359,00" size={14} weight={400} />\r
\r
      <h2 style={{
      fontFamily: 'sans-serif',
      color: '#813623',
      margin: '32px 0 24px'
    }}>Editorial — Mokoko</h2>\r
      <TypeRow token="Editorial/Display" sample="Casual com bossa." size={40} weight={700} family="Mokoko" />\r
      <TypeRow token="Editorial/Quote-LG" sample='"feito com calma, feito com alma"' size={32} weight={400} family="Mokoko" />\r
      <TypeRow token="Editorial/Quote-MD" sample='"Perfeito pra qualquer aventura."' size={24} weight={400} family="Mokoko" />\r
      <TypeRow token="Editorial/Quote-SM" sample='"Estilo é um modo de viver."' size={20} weight={400} family="Mokoko" />\r
    </div>
}`,...(w=(k=r.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var B,z,R;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Uppercase & Small Caps',
  render: () => <div style={{
    padding: 32,
    background: '#fffbf5'
  }}>\r
      <h2 style={{
      fontFamily: 'sans-serif',
      color: '#813623',
      marginBottom: 24
    }}>Uppercase (+5% letter-spacing)</h2>\r
      <TypeRow token="Headings/Uppercase/H-5" sample="Nova Coleção" size={20} weight={500} textCase="uppercase" />\r
      <TypeRow token="Headings/Uppercase/H-6" sample="Categoria" size={16} weight={500} textCase="uppercase" />\r
      <TypeRow token="Body/Regular/Uppercase/B-2" sample="Ver detalhes" size={16} weight={400} textCase="uppercase" />\r
      <TypeRow token="Body/Bold/Uppercase/B-2" sample="Finalizar compra" size={16} weight={700} textCase="uppercase" />\r
    </div>
}`,...(R=(z=t.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const P=["Headings","Body","PriceAndEditorial","Uppercase"];export{i as Body,s as Headings,r as PriceAndEditorial,t as Uppercase,P as __namedExportsOrder,C as default};
