import{r as t,c as e,h as i,H as o,g as r}from"./p-551d452f.js";import{b as s,g as c}from"./p-f450c62e.js";import{g as n}from"./p-46d99191.js";const a=class{constructor(i){t(this,i),this.calciteDropdownItemSelect=e(this,"calciteDropdownItemSelect",7),this.calciteDropdownItemKeyEvent=e(this,"calciteDropdownItemKeyEvent",7),this.calciteDropdownItemRegister=e(this,"calciteDropdownItemRegister",7),this.calciteDropdownCloseRequest=e(this,"calciteDropdownCloseRequest",7),this.active=!1}async setFocus(){this.el.focus()}connectedCallback(){this.selectionMode=s(this.el,"selection-mode","single"),this.parentDropdownGroupEl=this.el.closest("calcite-dropdown-group"),"none"===this.selectionMode&&(this.active=!1)}componentWillLoad(){this.itemPosition=this.getItemPosition(),this.calciteDropdownItemRegister.emit({position:this.itemPosition})}render(){const t=this.getAttributes(),e=c(this.el),r=s(this.el,"scale","m"),n="l"===r?"m":"s",a=i("calcite-icon",{class:"dropdown-item-icon-start",dir:e,flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:n}),l=i("span",{class:"dropdown-item-content"},i("slot",null)),d=i("calcite-icon",{class:"dropdown-item-icon-end",dir:e,flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:n}),h=this.iconStart&&this.iconEnd?[a,l,d]:this.iconStart?[a,i("slot",null)]:this.iconEnd?[l,d]:l,m=this.href?i("a",Object.assign({},t,{class:"dropdown-link",ref:t=>this.childLink=t}),h):h;return i(o,{"aria-checked":this.active.toString(),dir:e,isLink:this.href,role:"menuitem",scale:r,"selection-mode":this.selectionMode,tabindex:"0"},"multi"===this.selectionMode?i("calcite-icon",{class:"dropdown-item-check-icon",icon:"check",scale:"s"}):null,m)}onClick(){this.emitRequestedItem()}keyDownHandler(t){switch(n(t.key)){case" ":this.emitRequestedItem(),this.href&&(t.preventDefault(),this.childLink.click());break;case"Enter":this.emitRequestedItem(),this.href&&this.childLink.click();break;case"Escape":this.calciteDropdownCloseRequest.emit();break;case"Tab":case"ArrowUp":case"ArrowDown":case"Home":case"End":this.calciteDropdownItemKeyEvent.emit({keyboardEvent:t})}t.preventDefault()}updateActiveItemOnChange(t){t.composedPath().includes(this.parentDropdownGroupEl)&&(this.requestedDropdownGroup=t.detail.requestedDropdownGroup,this.requestedDropdownItem=t.detail.requestedDropdownItem,this.determineActiveItem())}determineActiveItem(){switch(this.selectionMode){case"multi":this.el===this.requestedDropdownItem&&(this.active=!this.active);break;case"single":this.el===this.requestedDropdownItem?this.active=!0:this.requestedDropdownGroup===this.parentDropdownGroupEl&&(this.active=!1);break;case"none":this.active=!1}}emitRequestedItem(){this.calciteDropdownItemSelect.emit({requestedDropdownItem:this.el,requestedDropdownGroup:this.parentDropdownGroupEl})}getAttributes(){const t=["icon-start","icon-end","active","hasText","isLink","dir","id","theme"];return Array.from(this.el.attributes).filter((e=>e&&!t.includes(e.name))).reduce(((t,{name:e,value:i})=>Object.assign(Object.assign({},t),{[e]:i})),{})}getItemPosition(){const t=this.el.closest("calcite-dropdown-group");return t?Array.prototype.indexOf.call(t.querySelectorAll("calcite-dropdown-item"),this.el):1}get el(){return r(this)}};a.style='@charset "UTF-8";@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host([scale=s]){font-size:0.75rem;padding-right:0.75rem;padding-left:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=m]){font-size:0.875rem;padding-right:1rem;padding-left:2rem;padding-top:0.75rem;padding-bottom:0.75rem}:host([scale=l]){font-size:1.125rem;padding-right:1.25rem;padding-left:2.5rem;padding-top:1rem;padding-bottom:1rem}:host([dir=rtl][scale=s]){padding-right:1.5rem;padding-left:0.75rem}:host([dir=rtl][scale=m]){padding-right:2rem;padding-left:1rem}:host([dir=rtl][scale=l]){padding-right:2.5rem;padding-left:1.25rem}:host{display:flex;flex-grow:1;align-items:center;color:var(--calcite-ui-text-3);transition:150ms ease-in-out;cursor:pointer;text-decoration:none;outline:none;position:relative}:host:before{content:"•";position:absolute;opacity:0;color:var(--calcite-ui-border-1);transition:150ms ease-in-out}.dropdown-item-content{margin-right:auto}:host([dir=rtl]) .dropdown-item-content{margin-right:unset;margin-left:auto}:host,:host([islink]) a{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus),:host([islink]) a:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}:host([islink]){padding:0}:host([islink]) a{display:flex;flex-grow:1;align-items:center;color:var(--calcite-ui-text-3);transition:150ms ease-in-out;cursor:pointer;text-decoration:none;outline:none;position:relative}:host([islink]) a:before{content:"•";position:absolute;opacity:0;color:var(--calcite-ui-border-1);transition:150ms ease-in-out}:host([scale=s]) .dropdown-link{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=m]) .dropdown-link{padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem}:host([scale=l]) .dropdown-link{padding-left:1.25rem;padding-right:1.25rem;padding-top:1rem;padding-bottom:1rem}:host(:hover),:host(:active){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration:none}:host(:focus){color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host(:hover):before,:host(:active):before,:host(:focus):before{opacity:1}:host([dir=rtl]):before{left:unset;right:1rem}:host([active]:not([selection-mode=none])){color:var(--calcite-ui-text-1);font-weight:500}:host([active]:not([selection-mode=none])):before{opacity:1;color:var(--calcite-ui-blue-1)}:host([active]:not([selection-mode=none])) calcite-icon{color:var(--calcite-ui-blue-1)}:host([selection-mode=multi]):before,:host([selection-mode=none]):before{display:none}:host([scale=s]):before{left:0.5rem}:host([scale=m]):before{left:0.75rem}:host([scale=l]):before{left:1rem}:host([dir=rtl]):before{left:unset}:host([dir=rtl][scale=s]):before{right:0.5rem}:host([dir=rtl][scale=m]):before{right:0.75rem}:host([dir=rtl][scale=l]):before{right:1rem}:host .dropdown-item-check-icon{position:absolute;opacity:0;transform:scale(0.9);transition:150ms ease-in-out}:host([scale=s]) .dropdown-item-check-icon{left:0.25rem}:host([scale=m]) .dropdown-item-check-icon{left:0.5rem}:host([scale=l]) .dropdown-item-check-icon{left:0.75rem}:host([dir=rtl]) .dropdown-item-check-icon{left:unset;margin-left:0}:host([dir=rtl][scale=s]) .dropdown-item-check-icon{right:0.25rem}:host([dir=rtl][scale=m]) .dropdown-item-check-icon{right:0.5rem}:host([dir=rtl][scale=l]) .dropdown-item-check-icon{right:0.75rem}:host(:hover) .dropdown-item-check-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-check-icon{color:var(--calcite-ui-blue-1);opacity:1}:host([scale=s]) .dropdown-item-icon-start{margin-right:0.5rem}:host([scale=s]) .dropdown-item-icon-end{margin-left:0.5rem}:host([scale=m]) .dropdown-item-icon-start{margin-right:0.75rem}:host([scale=m]) .dropdown-item-icon-end{margin-left:0.75rem}:host([scale=l]) .dropdown-item-icon-start{margin-right:1rem}:host([scale=l]) .dropdown-item-icon-end{margin-left:1rem}:host([dir=rtl]) .dropdown-item-icon-start{margin-right:0}:host([dir=rtl]) .dropdown-item-icon-end{margin-left:0}:host([dir=rtl][scale=s]) .dropdown-item-icon-start{margin-left:0.5rem}:host([dir=rtl][scale=s]) .dropdown-item-icon-end{margin-right:0.5rem}:host([dir=rtl][scale=m]) .dropdown-item-icon-start{margin-left:0.75rem}:host([dir=rtl][scale=m]) .dropdown-item-icon-end{margin-right:0.75rem}:host([dir=rtl][scale=l]) .dropdown-item-icon-start{margin-left:1rem}:host([dir=rtl][scale=l]) .dropdown-item-icon-end{margin-right:1rem}:host([dir=rtl]) calcite-icon{margin-right:0;margin-left:1rem}';export{a as calcite_dropdown_item}