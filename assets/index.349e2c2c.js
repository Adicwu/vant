import{c as u,b as m,B as p,u as h,p as V}from"./use-translate.7145ee20.js";import{n as g,u as k,w as d}from"./with-install.756837d9.js";import{z as l,x as b,e as s,A as f}from"./vue-libs.84e059bd.js";import{c as C,C as v}from"./Checker.9c26c32e.js";const[c,P]=u("radio-group"),R={disabled:Boolean,iconSize:g,direction:String,modelValue:k,checkedColor:String},i=Symbol(c);var w=l({name:c,props:R,emits:["change","update:modelValue"],setup(e,{emit:r,slots:n}){const{linkChildren:o}=m(i),t=a=>r("update:modelValue",a);return b(()=>e.modelValue,a=>r("change",a)),o({props:e,updateValue:t}),p(()=>e.modelValue),()=>{var a;return s("div",{class:P([e.direction]),role:"radiogroup"},[(a=n.default)==null?void 0:a.call(n)])}}});const I=d(w),[j,S]=u("radio");var G=l({name:j,props:C,emits:["update:modelValue"],setup(e,{emit:r,slots:n}){const{parent:o}=h(i),t=()=>(o?o.props.modelValue:e.modelValue)===e.name,a=()=>{o?o.updateValue(e.name):r("update:modelValue",e.name)};return()=>s(v,f({bem:S,role:"radio",parent:o,checked:t(),onToggle:a},e),V(n,["default","icon"]))}});const N=d(G);export{N as R,I as a};
