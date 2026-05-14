import{j as s,a as e}from"./jsx-runtime-b60708da.js";import{r as K}from"./index-8a57d176.js";import"./_commonjsHelpers-725317a4.js";const Q="_wrapper_10jnb_2",X="_row_10jnb_9",Y="_box_10jnb_15",Z="_input_10jnb_55",ee="_dash_10jnb_68",ae="_label_10jnb_76",re="_helper_10jnb_97",a={wrapper:Q,row:X,box:Y,"box-disabled":"_box-disabled_10jnb_15","box-checked":"_box-checked_10jnb_35","box-indeterminate":"_box-indeterminate_10jnb_35","box-error":"_box-error_10jnb_39","box-disabled-checked":"_box-disabled-checked_10jnb_48",input:Z,"check-icon":"_check-icon_10jnb_60",dash:ee,"label-col":"_label-col_10jnb_76",label:ae,"sub-label":"_sub-label_10jnb_88","label-disabled":"_label-disabled_10jnb_95","label-error":"_label-error_10jnb_96",helper:re,"helper-error":"_helper-error_10jnb_103"},r=({label:h,subLabel:g,helperText:x,checked:o=!1,indeterminate:t=!1,disabled:n=!1,error:l=!1,value:U,name:z,id:M,onChange:R,className:$})=>{const H=K.useId(),f=M??`checkbox-${H}`,_=x?`${f}-helper`:void 0,O=[a.box,t?a["box-indeterminate"]:"",o&&!n?a["box-checked"]:"",o&&n?a["box-disabled-checked"]:"",!o&&n?a["box-disabled"]:"",l&&!o?a["box-error"]:""].filter(Boolean).join(" "),J=[a.label,n?a["label-disabled"]:"",l?a["label-error"]:""].filter(Boolean).join(" ");return s("div",{className:[a.wrapper,$??""].filter(Boolean).join(" "),children:[e("input",{type:"checkbox",id:f,name:z,value:U,checked:o,disabled:n,"aria-checked":t?"mixed":o,"aria-disabled":n,"aria-describedby":_,"aria-invalid":l,onChange:R,className:a.input}),s("label",{htmlFor:f,className:a.row,children:[e("span",{className:O,children:(o||t)&&e("span",{className:a["check-icon"],"aria-hidden":"true",children:t?e("span",{className:a.dash}):e("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e("path",{d:"M2 6l3 3 5-5",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})})})}),s("span",{className:a["label-col"],children:[h&&e("span",{className:J,children:h}),g&&e("span",{className:a["sub-label"],children:g})]})]}),x&&e("span",{id:_,className:[a.helper,l?a["helper-error"]:""].filter(Boolean).join(" "),role:l?"alert":void 0,children:x})]})};try{r.displayName="Checkbox",r.__docgenInfo={description:"",displayName:"Checkbox",props:{label:{defaultValue:null,description:"Texto principal do label",name:"label",required:!1,type:{name:"string"}},subLabel:{defaultValue:null,description:"Texto secundário (sub-label)",name:"subLabel",required:!1,type:{name:"string"}},helperText:{defaultValue:null,description:"Texto auxiliar (helper / erro)",name:"helperText",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:"Estado controlado",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"Estado indeterminado",name:"indeterminate",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Campo desabilitado",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"Estado de erro",name:"error",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Valor do checkbox",name:"value",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Nome do grupo",name:"name",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"ID do elemento",name:"id",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"Callback de mudança",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},className:{defaultValue:null,description:"Classe CSS adicional",name:"className",required:!1,type:{name:"string"}}}}}catch{}const se={title:"Components/Checkbox",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"\nComponente Checkbox do Design System Cravo & Canella.\n\n**Estados:** `unchecked` · `checked` · `indeterminate` · `error` · `disabled unchecked` · `disabled checked`\n        "}}},argTypes:{label:{control:"text"},subLabel:{control:"text"},helperText:{control:"text"},checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"}},args:{label:"Aceito os termos de uso",checked:!1}},c={},d={args:{checked:!0}},i={args:{indeterminate:!0}},b={name:"Com Erro",args:{error:!0,helperText:"Campo obrigatório."}},p={name:"Com Sub-label",args:{checked:!0,subLabel:"Ao marcar, você concorda com nossa política de privacidade."}},m={name:"Todos os Estados",render:()=>s("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e(r,{label:"Unchecked",checked:!1,onChange:()=>{}}),e(r,{label:"Checked",checked:!0,onChange:()=>{}}),e(r,{label:"Indeterminate",indeterminate:!0}),e(r,{label:"Error",error:!0,helperText:"Campo obrigatório."}),e(r,{label:"Disabled Unchecked",disabled:!0}),e(r,{label:"Disabled Checked",disabled:!0,checked:!0,onChange:()=>{}})]})},u={name:"Grupo de Checkboxes",render:()=>s("fieldset",{style:{border:"none",padding:0,display:"flex",flexDirection:"column",gap:12},children:[e("legend",{style:{fontFamily:"var(--font-primary)",fontSize:14,fontWeight:500,marginBottom:8},children:"Preferências de comunicação"}),e(r,{label:"Receber novidades por e-mail",checked:!0,onChange:()=>{}}),e(r,{label:"Aceitar termos e condições",checked:!1,onChange:()=>{}}),e(r,{label:"Participar do programa de fidelidade",checked:!0,onChange:()=>{}})]})};var k,C,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(y=(C=c.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var j,v,E;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var S,N,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    indeterminate: true
  }
}`,...(D=(N=i.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var V,q,T;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Com Erro',
  args: {
    error: true,
    helperText: 'Campo obrigatório.'
  }
}`,...(T=(q=b.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var I,w,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Com Sub-label',
  args: {
    checked: true,
    subLabel: 'Ao marcar, você concorda com nossa política de privacidade.'
  }
}`,...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var L,B,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Todos os Estados',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>\r
      <Checkbox label="Unchecked" checked={false} onChange={() => {}} />\r
      <Checkbox label="Checked" checked={true} onChange={() => {}} />\r
      <Checkbox label="Indeterminate" indeterminate />\r
      <Checkbox label="Error" error helperText="Campo obrigatório." />\r
      <Checkbox label="Disabled Unchecked" disabled />\r
      <Checkbox label="Disabled Checked" disabled checked onChange={() => {}} />\r
    </div>
}`,...(W=(B=m.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};var F,G,P;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Grupo de Checkboxes',
  render: () => <fieldset style={{
    border: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      <legend style={{
      fontFamily: 'var(--font-primary)',
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 8
    }}>\r
        Preferências de comunicação\r
      </legend>\r
      <Checkbox label="Receber novidades por e-mail" checked={true} onChange={() => {}} />\r
      <Checkbox label="Aceitar termos e condições" checked={false} onChange={() => {}} />\r
      <Checkbox label="Participar do programa de fidelidade" checked={true} onChange={() => {}} />\r
    </fieldset>
}`,...(P=(G=u.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};const te=["Default","Checked","Indeterminate","WithError","WithSubLabel","AllStates","GroupExample"];export{m as AllStates,d as Checked,c as Default,u as GroupExample,i as Indeterminate,b as WithError,p as WithSubLabel,te as __namedExportsOrder,se as default};
