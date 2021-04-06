'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-adeb0063.js');
const dom = require('./dom-c66de328.js');
const key = require('./key-d6a0381e.js');

const calciteDropdownItemCss = "@charset \"UTF-8\";@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){font-size:var(--calcite-font-size--2);padding-right:0.75rem;padding-left:1.5rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=m]){font-size:var(--calcite-font-size--1);padding-right:1rem;padding-left:2rem;padding-top:0.75rem;padding-bottom:0.75rem}:host([scale=l]){font-size:var(--calcite-font-size-1);padding-right:1.25rem;padding-left:2.5rem;padding-top:1rem;padding-bottom:1rem}:host([dir=rtl][scale=s]){padding-right:1.5rem;padding-left:0.75rem}:host([dir=rtl][scale=m]){padding-right:2rem;padding-left:1rem}:host([dir=rtl][scale=l]){padding-right:2.5rem;padding-left:1.25rem}:host{display:flex;flex-grow:1;align-items:center;color:var(--calcite-ui-text-3);transition:150ms ease-in-out;cursor:pointer;text-decoration:none;outline:none;position:relative}:host:before{content:\"•\";position:absolute;opacity:0;color:var(--calcite-ui-border-1);transition:150ms ease-in-out}.dropdown-item-content{margin-right:auto}:host([dir=rtl]) .dropdown-item-content{margin-right:unset;margin-left:auto}:host,:host([islink]) a{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host(:focus),:host([islink]) a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([islink]){padding:0}:host([islink]) a{display:flex;flex-grow:1;align-items:center;color:var(--calcite-ui-text-3);transition:150ms ease-in-out;cursor:pointer;text-decoration:none;outline:none;position:relative}:host([islink]) a:before{content:\"•\";position:absolute;opacity:0;color:var(--calcite-ui-border-1);transition:150ms ease-in-out}:host([scale=s]) .dropdown-link{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.5rem;padding-bottom:0.5rem}:host([scale=m]) .dropdown-link{padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem}:host([scale=l]) .dropdown-link{padding-left:1.25rem;padding-right:1.25rem;padding-top:1rem;padding-bottom:1rem}:host(:hover),:host(:active){background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);text-decoration:none}:host(:focus){color:var(--calcite-ui-text-1);text-decoration:none}:host(:active){background-color:var(--calcite-ui-foreground-3)}:host(:hover):before,:host(:active):before,:host(:focus):before{opacity:1}:host([dir=rtl]):before{left:unset;right:1rem}:host([active]:not([selection-mode=none])){color:var(--calcite-ui-text-1);font-weight:500}:host([active]:not([selection-mode=none])):before{opacity:1;color:var(--calcite-ui-brand)}:host([active]:not([selection-mode=none])) calcite-icon{color:var(--calcite-ui-brand)}:host([selection-mode=multi]):before,:host([selection-mode=none]):before{display:none}:host([scale=s]):before{left:0.5rem}:host([scale=m]):before{left:0.75rem}:host([scale=l]):before{left:1rem}:host([dir=rtl]):before{left:unset}:host([dir=rtl][scale=s]):before{right:0.5rem}:host([dir=rtl][scale=m]):before{right:0.75rem}:host([dir=rtl][scale=l]):before{right:1rem}:host .dropdown-item-check-icon{position:absolute;opacity:0;transform:scale(0.9);transition:150ms ease-in-out}:host([scale=s]) .dropdown-item-check-icon{left:0.25rem}:host([scale=m]) .dropdown-item-check-icon{left:0.5rem}:host([scale=l]) .dropdown-item-check-icon{left:0.75rem}:host([dir=rtl]) .dropdown-item-check-icon{left:unset;margin-left:0}:host([dir=rtl][scale=s]) .dropdown-item-check-icon{right:0.25rem}:host([dir=rtl][scale=m]) .dropdown-item-check-icon{right:0.5rem}:host([dir=rtl][scale=l]) .dropdown-item-check-icon{right:0.75rem}:host(:hover) .dropdown-item-check-icon{color:var(--calcite-ui-border-1);opacity:1}:host([active]) .dropdown-item-check-icon{color:var(--calcite-ui-brand);opacity:1}:host([scale=s]) .dropdown-item-icon-start{margin-right:0.5rem}:host([scale=s]) .dropdown-item-icon-end{margin-left:0.5rem}:host([scale=m]) .dropdown-item-icon-start{margin-right:0.75rem}:host([scale=m]) .dropdown-item-icon-end{margin-left:0.75rem}:host([scale=l]) .dropdown-item-icon-start{margin-right:1rem}:host([scale=l]) .dropdown-item-icon-end{margin-left:1rem}:host([dir=rtl]) .dropdown-item-icon-start{margin-right:0}:host([dir=rtl]) .dropdown-item-icon-end{margin-left:0}:host([dir=rtl][scale=s]) .dropdown-item-icon-start{margin-left:0.5rem}:host([dir=rtl][scale=s]) .dropdown-item-icon-end{margin-right:0.5rem}:host([dir=rtl][scale=m]) .dropdown-item-icon-start{margin-left:0.75rem}:host([dir=rtl][scale=m]) .dropdown-item-icon-end{margin-right:0.75rem}:host([dir=rtl][scale=l]) .dropdown-item-icon-start{margin-left:1rem}:host([dir=rtl][scale=l]) .dropdown-item-icon-end{margin-right:1rem}:host([dir=rtl]) calcite-icon{margin-right:0;margin-left:1rem}";

const CalciteDropdownItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDropdownItemSelect = index.createEvent(this, "calciteDropdownItemSelect", 7);
    this.calciteDropdownItemKeyEvent = index.createEvent(this, "calciteDropdownItemKeyEvent", 7);
    this.calciteDropdownItemRegister = index.createEvent(this, "calciteDropdownItemRegister", 7);
    this.calciteDropdownCloseRequest = index.createEvent(this, "calciteDropdownCloseRequest", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    this.active = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Focuses the selected item. */
  async setFocus() {
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.selectionMode = dom.getElementProp(this.el, "selection-mode", "single");
    this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group");
    if (this.selectionMode === "none")
      this.active = false;
  }
  componentWillLoad() {
    this.itemPosition = this.getItemPosition();
    this.calciteDropdownItemRegister.emit({
      position: this.itemPosition
    });
  }
  render() {
    const attributes = dom.getAttributes(this.el, [
      "icon-start",
      "icon-end",
      "active",
      "has-text",
      "is-link",
      "dir",
      "id",
      "theme"
    ]);
    const dir = dom.getElementDir(this.el);
    const scale = dom.getElementProp(this.el, "scale", "m");
    const iconScale = scale === "l" ? "m" : "s";
    const iconStartEl = (index.h("calcite-icon", { class: "dropdown-item-icon-start", dir: dir, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: iconScale }));
    const contentNode = (index.h("span", { class: "dropdown-item-content" }, index.h("slot", null)));
    const iconEndEl = (index.h("calcite-icon", { class: "dropdown-item-icon-end", dir: dir, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: iconScale }));
    const slottedContent = this.iconStart && this.iconEnd
      ? [iconStartEl, contentNode, iconEndEl]
      : this.iconStart
        ? [iconStartEl, index.h("slot", null)]
        : this.iconEnd
          ? [contentNode, iconEndEl]
          : contentNode;
    const contentEl = !this.href ? (slottedContent) : (index.h("a", Object.assign({}, attributes, { class: "dropdown-link", ref: (el) => (this.childLink = el) }), slottedContent));
    const itemRole = this.href
      ? null
      : this.selectionMode === "single"
        ? "menuitemradio"
        : this.selectionMode === "multi"
          ? "menuitemcheckbox"
          : "menuitem";
    const itemAria = this.selectionMode !== "none" ? this.active.toString() : null;
    return (index.h(index.Host, { "aria-checked": itemAria, dir: dir, isLink: this.href, role: itemRole, scale: scale, "selection-mode": this.selectionMode, tabindex: "0" }, this.selectionMode === "multi" ? (index.h("calcite-icon", { class: "dropdown-item-check-icon", icon: "check", scale: "s" })) : null, contentEl));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick() {
    this.emitRequestedItem();
  }
  keyDownHandler(e) {
    switch (key.getKey(e.key)) {
      case " ":
        this.emitRequestedItem();
        if (this.href) {
          e.preventDefault();
          this.childLink.click();
        }
        break;
      case "Enter":
        this.emitRequestedItem();
        if (this.href)
          this.childLink.click();
        break;
      case "Escape":
        this.calciteDropdownCloseRequest.emit();
        break;
      case "Tab":
      case "ArrowUp":
      case "ArrowDown":
      case "Home":
      case "End":
        this.calciteDropdownItemKeyEvent.emit({ keyboardEvent: e });
        break;
    }
    e.preventDefault();
  }
  updateActiveItemOnChange(event) {
    const parentEmittedChange = event.composedPath().includes(this.parentDropdownGroupEl);
    if (parentEmittedChange) {
      this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
      this.requestedDropdownItem = event.detail.requestedDropdownItem;
      this.determineActiveItem();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multi":
        if (this.el === this.requestedDropdownItem)
          this.active = !this.active;
        break;
      case "single":
        if (this.el === this.requestedDropdownItem)
          this.active = true;
        else if (this.requestedDropdownGroup === this.parentDropdownGroupEl)
          this.active = false;
        break;
      case "none":
        this.active = false;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteDropdownItemSelect.emit({
      requestedDropdownItem: this.el,
      requestedDropdownGroup: this.parentDropdownGroupEl
    });
  }
  getItemPosition() {
    const group = this.el.closest("calcite-dropdown-group");
    return group
      ? Array.prototype.indexOf.call(group.querySelectorAll("calcite-dropdown-item"), this.el)
      : 1;
  }
  get el() { return index.getElement(this); }
};
CalciteDropdownItem.style = calciteDropdownItemCss;

exports.calcite_dropdown_item = CalciteDropdownItem;
