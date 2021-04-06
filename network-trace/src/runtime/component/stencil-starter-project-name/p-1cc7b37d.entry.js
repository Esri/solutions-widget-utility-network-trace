import{r as t,c as a,h as e,H as i,g as o}from"./p-551d452f.js";const s=class{constructor(e){t(this,e),this.calciteRadioButtonGroupChange=a(this,"calciteRadioButtonGroupChange",7),this.disabled=!1,this.hidden=!1,this.layout="horizontal",this.required=!1,this.scale="m",this.theme="light",this.passPropsToRadioButtons=()=>{const t=this.el.querySelectorAll("calcite-radio-button");t.length>0&&t.forEach((t=>{t.disabled=this.disabled||t.disabled,t.hidden=this.hidden,t.name=this.name,t.required=this.required,t.scale=this.scale,t.theme=this.theme}))}}onDisabledChange(){this.passPropsToRadioButtons()}onHiddenChange(){this.passPropsToRadioButtons()}onLayoutChange(){this.passPropsToRadioButtons()}onScaleChange(){this.passPropsToRadioButtons()}onThemeChange(){this.passPropsToRadioButtons()}connectedCallback(){this.passPropsToRadioButtons()}radioButtonChangeHandler(t){this.calciteRadioButtonGroupChange.emit(t.target.value)}render(){return e(i,{role:"radiogroup"},e("slot",null))}get el(){return o(this)}static get watchers(){return{disabled:["onDisabledChange"],hidden:["onHiddenChange"],layout:["onLayoutChange"],scale:["onScaleChange"],theme:["onThemeChange"]}}};s.style="@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;max-width:100vw}:host([layout=horizontal]){flex-direction:row;flex-wrap:wrap}:host([layout=vertical]){flex-direction:column}";export{s as calcite_radio_button_group}