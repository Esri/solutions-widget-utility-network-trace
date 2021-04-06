import{r as t,c as e,h as i,g as s}from"./p-551d452f.js";import"./p-f450c62e.js";import"lodash-es";import{g as a}from"./p-7b3393a7.js";import"./p-485d2f2d.js";import{m as r,d as o,s as n,h as c,g as l,k as h,i as p,a as d,c as m,r as f,b as u,e as g,f as y,j as v,L as b}from"./p-285fe02e.js";import{S as x}from"./p-14b00fa9.js";var D;!function(t){t.grip="grip"}(D||(D={}));const w=class{constructor(i){t(this,i),this.calciteListChange=e(this,"calciteListChange",7),this.calciteListOrderChange=e(this,"calciteListOrderChange",7),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.observer=new MutationObserver(r.bind(this)),this.deselectSiblingItems=o.bind(this),this.selectSiblings=n.bind(this),this.handleFilter=c.bind(this),this.getItemData=l.bind(this),this.keyDownHandler=t=>{const e=t.composedPath().find((t=>{var e;return null===(e=t.dataset)||void 0===e?void 0:e.jsHandle})),i=t.composedPath().find((t=>{var e;return"calcite-value-list-item"===(null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase())}));if(!e||!i.handleActivated)return void h.call(this,t);if("ArrowUp"!==t.key&&"ArrowDown"!==t.key)return;t.preventDefault();const{el:s,items:r}=this,o="ArrowDown"===t.key?1:-1,n=r.indexOf(i),c=a(n+o,r.length);if(c===r.length-1)s.appendChild(i);else{const t=s.children[c];s.insertBefore(i,t===i.nextElementSibling?t.nextElementSibling:t)}requestAnimationFrame((()=>e.focus())),i.handleActivated=!0}}connectedCallback(){p.call(this),d.call(this)}componentDidLoad(){this.setUpDragAndDrop()}disconnectedCallback(){m.call(this),this.cleanUpDragAndDrop()}calciteListItemRemoveHandler(t){f.call(this,t)}calciteListItemChangeHandler(t){u.call(this,t)}calciteListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteListItemValueChangeHandler(t){g.call(this,t)}setUpItems(){y.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.dragEnabled&&(this.sortable=x.create(this.el,{handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map((t=>t.value));this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){this.dragEnabled&&this.sortable.destroy()}async getSelectedItems(){return this.selectedValues}async setFocus(){return v.call(this)}getIconType(){let t=null;return this.dragEnabled&&(t=D.grip),t}render(){return i(b,{onKeyDown:this.keyDownHandler,props:this})}get el(){return s(this)}};w.style="@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{align-items:stretch;background-color:transparent;display:flex;flex:0 0 auto;flex-flow:column;position:relative}calcite-value-list-item:last-of-type{box-shadow:none}header{background-color:var(--calcite-ui-foreground-1);display:flex;justify-content:flex-end;align-items:center;margin-bottom:var(--calcite-spacing-quarter);box-shadow:0 1px 0 var(--calcite-ui-border-3)}header.sticky{position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:1px}calcite-scrim{display:flex;flex:0 0 auto;flex-flow:column;pointer-events:none}";export{w as calcite_value_list}