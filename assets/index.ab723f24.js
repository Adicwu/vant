import{S as a}from"./index.f60a1126.js";import{a as _}from"./use-translate.82d1675a.js";import{T as C}from"./function-call.67aa4b4e.js";import{z as F,C as i,r as U,o as k,a as y,e as l,w as d,B as u,d as B,t as A,F as S}from"./vue-libs.d483629c.js";import"./with-install.1e1e6f3a.js";import"./use-touch.2a7e3be3.js";import"./mount-component.55786c8c.js";import"./use-expose.0b7af251.js";import"./index.1aafb839.js";import"./index.d942910e.js";import"./constant.80c6de18.js";import"./interceptor.693bb092.js";import"./use-lazy-render.13317edf.js";import"./on-popup-reopen.27c65306.js";import"./index.a7d685e6.js";import"./index.185a61a8.js";const E={class:"custom-button"},D={style:{height:"150px",paddingLeft:"30px"}},W=F({__name:"index",setup(z){const o=_({"zh-CN":{text:"\u5F53\u524D\u503C\uFF1A",title1:"\u57FA\u7840\u7528\u6CD5",title2:"\u53CC\u6ED1\u5757",title3:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4",title4:"\u7981\u7528",title5:"\u6307\u5B9A\u6B65\u957F",vertical:"\u5782\u76F4\u65B9\u5411",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customButton:"\u81EA\u5B9A\u4E49\u6309\u94AE"},"en-US":{text:"Current value: ",title1:"Basic Usage",title2:"Dual thumb mode",title3:"Range",title4:"Disabled",title5:"Step size",vertical:"Vertical",customStyle:"Custom Style",customButton:"Custom Button"}}),s=i(50),p=i([20,60]),v=i(0),V=i(50),f=i(50),c=i(50),r=i(50),g=i(50),x=i([20,60]),m=b=>C(o("text")+b);return(b,e)=>{const n=U("demo-block");return k(),y(S,null,[l(n,{title:u(o)("title1")},{default:d(()=>[l(u(a),{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=t=>s.value=t),onChange:m},null,8,["modelValue"])]),_:1},8,["title"]),l(n,{title:u(o)("title2")},{default:d(()=>[l(u(a),{range:"",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=t=>p.value=t),onChange:m},null,8,["modelValue"])]),_:1},8,["title"]),l(n,{title:u(o)("title3")},{default:d(()=>[l(u(a),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=t=>v.value=t),min:-50,max:50,onChange:m},null,8,["modelValue"])]),_:1},8,["title"]),l(n,{title:u(o)("title4")},{default:d(()=>[l(u(a),{modelValue:V.value,"onUpdate:modelValue":e[3]||(e[3]=t=>V.value=t),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(n,{title:u(o)("title5")},{default:d(()=>[l(u(a),{modelValue:f.value,"onUpdate:modelValue":e[4]||(e[4]=t=>f.value=t),step:10,onChange:m},null,8,["modelValue"])]),_:1},8,["title"]),l(n,{title:u(o)("customStyle")},{default:d(()=>[l(u(a),{modelValue:c.value,"onUpdate:modelValue":e[5]||(e[5]=t=>c.value=t),"bar-height":"4px","active-color":"#ee0a24",onChange:m},null,8,["modelValue"])]),_:1},8,["title"]),l(n,{title:u(o)("customButton")},{default:d(()=>[l(u(a),{modelValue:r.value,"onUpdate:modelValue":e[6]||(e[6]=t=>r.value=t),"active-color":"#ee0a24"},{button:d(()=>[B("div",E,A(r.value),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(n,{title:u(o)("vertical")},{default:d(()=>[B("div",D,[l(u(a),{modelValue:g.value,"onUpdate:modelValue":e[7]||(e[7]=t=>g.value=t),vertical:"",onChange:m},null,8,["modelValue"]),l(u(a),{modelValue:x.value,"onUpdate:modelValue":e[8]||(e[8]=t=>x.value=t),range:"",vertical:"",style:{"margin-left":"100px"},onChange:m},null,8,["modelValue"])])]),_:1},8,["title"])],64)}}});export{W as default};
