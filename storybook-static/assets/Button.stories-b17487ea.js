import{a as e,j as n,F as _}from"./jsx-runtime-b60708da.js";import"./index-8a57d176.js";import"./_commonjsHelpers-725317a4.js";const $="_button_1t9b4_2",J="_primary_1t9b4_39",K="_secondary_1t9b4_53",Q="_tertiary_1t9b4_67",U="_danger_1t9b4_81",Y="_loading_1t9b4_102",Z="_spinner_1t9b4_107",ee="_spin_1t9b4_107",r={button:$,"size-lg":"_size-lg_1t9b4_24","size-md":"_size-md_1t9b4_25","size-sm":"_size-sm_1t9b4_26","size-xs":"_size-xs_1t9b4_27","icon-only":"_icon-only_1t9b4_30","full-width":"_full-width_1t9b4_36",primary:J,secondary:K,tertiary:Q,danger:U,loading:Y,spinner:Z,spin:ee},a=({label:s,variant:P="primary",size:j="md",icon:l="none",iconElement:y,disabled:b=!1,loading:t=!1,fullWidth:G=!1,onClick:v,className:X,type:H="button",ariaLabel:O})=>{const i=l==="only",g=l!=="none"&&y,k=[r.button,r[P],r[`size-${j}`],i?r["icon-only"]:"",G?r["full-width"]:"",t?r.loading:"",X||""].filter(Boolean).join(" "),R=f=>{b||t||v==null||v(f)},x=f=>e("span",{className:r.iconWrapper,"aria-hidden":"true",children:f});return e("button",{type:H,className:k,disabled:b||t,"aria-disabled":b||t,"aria-label":i?O??s:void 0,"aria-busy":t,onClick:R,children:(()=>t?n(_,{children:[e("span",{className:r.spinner,"aria-hidden":"true"}),!i&&e("span",{children:"Carregando..."})]}):n(_,{children:[(l==="left"||l==="only")&&g&&x(y),!i&&s&&e("span",{children:s}),l==="right"&&g&&x(y)]}))()})};try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:null,description:"Texto exibido no botão",name:"label",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"primary"},description:"Variante visual",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"danger"'}]}},size:{defaultValue:{value:"md"},description:"Tamanho",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'},{value:'"xs"'}]}},icon:{defaultValue:{value:"none"},description:"Posição do ícone",name:"icon",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"left"'},{value:'"right"'},{value:'"only"'}]}},iconElement:{defaultValue:null,description:"Elemento de ícone (ex: componente Phosphor)",name:"iconElement",required:!1,type:{name:"ReactNode"}},disabled:{defaultValue:{value:"false"},description:"Estado desabilitado",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Estado de carregamento",name:"loading",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Largura total do container",name:"fullWidth",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Callback de clique",name:"onClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"Classe CSS adicional",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"button"},description:"Tipo HTML do botão",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},ariaLabel:{defaultValue:null,description:"aria-label para ícone only",name:"ariaLabel",required:!1,type:{name:"string"}}}}}catch{}const le={title:"Components/Button",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"\nComponente Button do Design System Cravo & Canella.\n\n**Variants:** `primary` · `secondary` · `tertiary` · `danger`\n**Sizes:** `lg` (52px) · `md` (44px) · `sm` (36px) · `xs` (28px)\n**Icons:** `none` · `left` · `right` · `only`\n\nTodas as cores são vinculadas às variáveis do DS via CSS Custom Properties.\n        "}}},argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","danger"],description:"Variante visual do botão"},size:{control:"select",options:["lg","md","sm","xs"],description:"Tamanho do botão"},icon:{control:"select",options:["none","left","right","only"],description:"Posição do ícone"},label:{control:"text",description:"Texto do botão"},disabled:{control:"boolean",description:"Estado desabilitado"},loading:{control:"boolean",description:"Estado de carregamento"},fullWidth:{control:"boolean",description:"Largura total do container"}},args:{label:"Comprar",variant:"primary",size:"md",icon:"none",disabled:!1,loading:!1,fullWidth:!1}},o={},d={name:"Todos os Variants",render:()=>n("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"},children:[e(a,{label:"Primary",variant:"primary"}),e(a,{label:"Secondary",variant:"secondary"}),e(a,{label:"Tertiary",variant:"tertiary"}),e(a,{label:"Danger",variant:"danger"})]})},u={name:"Todos os Tamanhos",render:()=>n("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[e(a,{label:"LG — 52px",size:"lg"}),e(a,{label:"MD — 44px",size:"md"}),e(a,{label:"SM — 36px",size:"sm"}),e(a,{label:"XS — 28px",size:"xs"})]})},c={name:"Estados",render:()=>n("div",{style:{display:"flex",gap:16,flexWrap:"wrap",alignItems:"center"},children:[e(a,{label:"Default",variant:"primary"}),e(a,{label:"Disabled",variant:"primary",disabled:!0}),e(a,{label:"Loading",variant:"primary",loading:!0}),e(a,{label:"Default",variant:"secondary"}),e(a,{label:"Disabled",variant:"secondary",disabled:!0}),e(a,{label:"Tertiary",variant:"tertiary"}),e(a,{label:"Disabled",variant:"tertiary",disabled:!0})]})},p={name:"Secondary — Todos os Tamanhos",render:()=>n("div",{style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[e(a,{label:"LG — 52px",variant:"secondary",size:"lg"}),e(a,{label:"MD — 44px",variant:"secondary",size:"md"}),e(a,{label:"SM — 36px",variant:"secondary",size:"sm"}),e(a,{label:"XS — 28px",variant:"secondary",size:"xs"})]})},m={name:"Full Width",render:()=>n("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e(a,{label:"Finalizar compra",variant:"primary",fullWidth:!0}),e(a,{label:"Continuar comprando",variant:"secondary",fullWidth:!0})]})};var h,z,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(S=(z=o.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var B,D,T;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Todos os Variants',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>\r
      <Button label="Primary" variant="primary" />\r
      <Button label="Secondary" variant="secondary" />\r
      <Button label="Tertiary" variant="tertiary" />\r
      <Button label="Danger" variant="danger" />\r
    </div>
}`,...(T=(D=d.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var W,V,E;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Todos os Tamanhos',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Button label="LG — 52px" size="lg" />\r
      <Button label="MD — 44px" size="md" />\r
      <Button label="SM — 36px" size="sm" />\r
      <Button label="XS — 28px" size="xs" />\r
    </div>
}`,...(E=(V=u.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var C,q,I;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Estados',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>\r
      <Button label="Default" variant="primary" />\r
      <Button label="Disabled" variant="primary" disabled />\r
      <Button label="Loading" variant="primary" loading />\r
      <Button label="Default" variant="secondary" />\r
      <Button label="Disabled" variant="secondary" disabled />\r
      <Button label="Tertiary" variant="tertiary" />\r
      <Button label="Disabled" variant="tertiary" disabled />\r
    </div>
}`,...(I=(q=c.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var L,M,w;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Secondary — Todos os Tamanhos',
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Button label="LG — 52px" variant="secondary" size="lg" />\r
      <Button label="MD — 44px" variant="secondary" size="md" />\r
      <Button label="SM — 36px" variant="secondary" size="sm" />\r
      <Button label="XS — 28px" variant="secondary" size="xs" />\r
    </div>
}`,...(w=(M=p.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var F,N,A;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Full Width',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400
  }}>\r
      <Button label="Finalizar compra" variant="primary" fullWidth />\r
      <Button label="Continuar comprando" variant="secondary" fullWidth />\r
    </div>
}`,...(A=(N=m.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const se=["Default","AllVariants","AllSizes","States","SecondaryAllSizes","FullWidth"];export{u as AllSizes,d as AllVariants,o as Default,m as FullWidth,p as SecondaryAllSizes,c as States,se as __namedExportsOrder,le as default};
