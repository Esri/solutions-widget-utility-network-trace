import{r as t,c as e,h as a,H as i,g as o}from"./p-551d452f.js";import{f as n,d as s}from"./p-ddb29161.js";import{t as r,C as c}from"./p-ae478fd7.js";const l=class{constructor(a){t(this,a),this.calciteActionBarToggle=e(this,"calciteActionBarToggle",7),this.expandDisabled=!1,this.expanded=!1,this.observer=new MutationObserver((()=>{const{el:t,expanded:e}=this;r({parent:t,expanded:e})})),this.toggleExpand=()=>{this.expanded=!this.expanded},this.setExpandToggleRef=t=>{this.expandToggleEl=t}}expandHandler(t){t||r({parent:this.el,expanded:this.expanded})}expandedHandler(t){this.expandDisabled||r({parent:this.el,expanded:t}),this.calciteActionBarToggle.emit()}componentWillLoad(){const{el:t,expandDisabled:e,expanded:a}=this;e||r({parent:t,expanded:a}),this.observer.observe(t,{childList:!0})}disconnectedCallback(){this.observer.disconnect()}async setFocus(t){"expand-toggle"!==t?this.el.focus():await n(this.expandToggleEl)}renderBottomActionGroup(){const{expanded:t,expandDisabled:e,intlExpand:i,intlCollapse:o,el:n,position:r,toggleExpand:l,tooltipExpand:d}=this,p=e?null:a(c,{el:n,expanded:t,intlCollapse:o||"Collapse",intlExpand:i||"Expand",position:r,ref:this.setExpandToggleRef,toggle:l,tooltip:d});return s(n,"bottom-actions")||p?a("calcite-action-group",{class:"action-group--bottom"},a("slot",{name:"bottom-actions"}),p):null}render(){return a(i,null,a("slot",null),this.renderBottomActionGroup())}get el(){return o(this)}static get watchers(){return{expandDisabled:["expandHandler"],expanded:["expandedHandler"]}}};l.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{align-self:stretch;display:inline-flex;flex-direction:column;max-width:15vw;overflow-y:auto;pointer-events:auto}:host([expanded]){max-width:20vw}::slotted(calcite-action-group){border-bottom:1px solid var(--calcite-ui-border-2)}::slotted(calcite-action-group:last-child){border-bottom:none}.action-group--bottom{padding-bottom:0;flex-grow:1;justify-content:flex-end}";export{l as calcite_action_bar}