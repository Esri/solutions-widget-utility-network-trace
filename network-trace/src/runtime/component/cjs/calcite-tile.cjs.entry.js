'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-adeb0063.js');

const calciteTileCss = "@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host-context([theme=dark]){--calcite-ui-blue-1:#00A0FF;--calcite-ui-blue-2:#0087D7;--calcite-ui-blue-3:#47BBFF;--calcite-ui-green-1:#36DA43;--calcite-ui-green-2:#11AD1D;--calcite-ui-green-3:#44ED51;--calcite-ui-yellow-1:#FFC900;--calcite-ui-yellow-2:#F4B000;--calcite-ui-yellow-3:#FFE24D;--calcite-ui-red-1:#FE583E;--calcite-ui-red-2:#F3381B;--calcite-ui-red-3:#FF7465;--calcite-ui-background:#202020;--calcite-ui-foreground-1:#2b2b2b;--calcite-ui-foreground-2:#353535;--calcite-ui-foreground-3:#404040;--calcite-ui-text-1:#ffffff;--calcite-ui-text-2:#bfbfbf;--calcite-ui-text-3:#9f9f9f;--calcite-ui-border-1:#4a4a4a;--calcite-ui-border-2:#404040;--calcite-ui-border-3:#353535;--calcite-ui-border-4:#757575;--calcite-ui-border-5:#9f9f9f}:host{background-color:var(--calcite-ui-foreground-1);box-sizing:border-box;color:var(--calcite-ui-text-3);display:inline-block;transition:150ms ease-in-out;-webkit-user-select:none;-ms-user-select:none;user-select:none}:host(:not([embed])){box-shadow:0 0 0 1px var(--calcite-ui-border-2);max-width:300px;padding:0.75rem}:host(:not([embed])[href]:hover){box-shadow:0 0 0 2px var(--calcite-ui-blue-1);cursor:pointer}:host(:not([embed])[href]:active){box-shadow:0 0 0 3px var(--calcite-ui-blue-1)}:host([icon][heading]:not([description]):not([embed])){padding:unset}.tile{display:grid;grid-template-columns:1fr;grid-gap:0.75rem;pointer-events:none}.heading{font-size:1rem;line-height:1.5;color:var(--calcite-ui-text-2);transition:150ms ease-in-out;font-weight:500;pointer-events:none}.large-visual{justify-items:center;min-height:200px}.large-visual .icon{align-self:self-end}.large-visual .heading{align-self:center}.description{font-size:0.9375rem;line-height:1.5;color:var(--calcite-ui-text-3);transition:150ms ease-in-out;pointer-events:none}:host(:hover) .heading,:host([active]) .heading{color:var(--calcite-ui-text-1)}:host(:hover) .description,:host([active]) .description{color:var(--calcite-ui-text-2)}";

const CalciteTile = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** The embed mode of the tile.  When true, renders without a border and padding for use by other components. */
    this.embed = false;
    /** The focused state of the tile. */
    this.focused = false;
    /** The hidden state of the tile. */
    this.hidden = false;
    /** The theme of the tile. */
    this.theme = "light";
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTile() {
    const isLargeVisual = this.heading && this.icon && !this.description;
    const iconStyle = isLargeVisual
      ? {
        height: "64px",
        width: "64px"
      }
      : undefined;
    return (index.h("div", { class: { "large-visual": isLargeVisual, tile: true } }, this.icon && (index.h("div", { class: "icon" }, index.h("calcite-icon", { icon: this.icon, scale: "l", style: iconStyle }))), this.heading && index.h("div", { class: "heading" }, this.heading), this.description && index.h("div", { class: "description" }, this.description)));
  }
  render() {
    return (index.h(index.Host, null, this.href ? (index.h("calcite-link", { href: this.href, theme: this.theme, "user-select": "false" }, this.renderTile())) : (this.renderTile())));
  }
};
CalciteTile.style = calciteTileCss;

exports.calcite_tile = CalciteTile;
