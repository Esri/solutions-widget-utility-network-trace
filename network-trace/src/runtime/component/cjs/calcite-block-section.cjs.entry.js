'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-adeb0063.js');
const dom = require('./dom-38a6a540.js');
const guid = require('./guid-f05bb751.js');
const resources = require('./resources-c7d5cc25.js');

const CSS = {
  content: "content",
  toggle: "toggle",
  toggleSwitch: "toggle--switch",
  sectionHeader: "section-header",
  sectionHeaderText: "section-header__text"
};
const TEXT = {
  collapse: "Collapse",
  expand: "Expand"
};
const ICONS = {
  menuOpen: "chevron-down",
  menuClosedLeft: "chevron-left",
  menuClosedRight: "chevron-right"
};

const calciteBlockSectionCss = "@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}:host([open]){border-bottom:1px solid var(--calcite-ui-border-3)}:host(:last-child){border-bottom:none}.toggle{background-color:transparent;border:none;color:var(--calcite-ui-text-2);font-family:Avenir Next, Avenir, Helvetica Neue, sans-serif;font-weight:400;width:100%}.toggle--switch,.section-header{align-items:center;cursor:pointer;display:flex;margin:var(--calcite-spacing-quarter) 0;padding:var(--calcite-spacing-half) 0;-webkit-user-select:none;-ms-user-select:none;user-select:none;font-size:0.875rem;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header__text{margin:0 var(--calcite-spacing-quarter)}.toggle--switch{justify-content:space-between}.toggle--switch calcite-switch{pointer-events:none;margin:0 0 0 var(--calcite-spacing-half)}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:var(--calcite-spacing-half)}";

const CalciteBlockSection = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteBlockSectionToggle = index.createEvent(this, "calciteBlockSectionToggle", 7);
    /**
     * When true, the block's section content will be displayed.
     */
    this.open = false;
    /**
     * This property determines the look of the section toggle.
     * If the value is "switch", a toggle-switch will be displayed.
     * If the value is "button", a clickable header is displayed.
     *
     * @todo revisit doc
     */
    this.toggleDisplay = "button";
    this.guid = `calcite-block-section-${guid.guid()}`;
    this.toggleSection = () => {
      this.open = !this.open;
      this.calciteBlockSectionToggle.emit();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  handleHeaderLabelKeyDown(event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.click();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, guid: id, intlCollapse, intlExpand, open, text, toggleDisplay } = this;
    const dir = dom.getElementDir(el);
    const arrowIcon = open
      ? ICONS.menuOpen
      : dir === "rtl"
        ? ICONS.menuClosedLeft
        : ICONS.menuClosedRight;
    const toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
    const labelId = `${id}__label`;
    const headerNode = toggleDisplay === "switch" ? (index.h("label", { "aria-label": toggleLabel, class: {
        [CSS.toggle]: true,
        [CSS.toggleSwitch]: true
      }, id: labelId, onKeyDown: this.handleHeaderLabelKeyDown, tabIndex: 0, title: toggleLabel }, text, index.h("calcite-switch", { "aria-labelledby": labelId, onCalciteSwitchChange: this.toggleSection, scale: "s", switched: open, tabIndex: -1 }))) : (index.h("button", { "aria-label": toggleLabel, class: {
        [CSS.sectionHeader]: true,
        [CSS.toggle]: true
      }, name: toggleLabel, onClick: this.toggleSection, onKeyDown: this.handleHeaderLabelKeyDown }, index.h("calcite-icon", { icon: arrowIcon, scale: "s" }), index.h("span", { class: CSS.sectionHeaderText }, text)));
    return (index.h("section", { "aria-expanded": open.toString(), class: { [resources.CSS_UTILITY.rtl]: dir === "rtl" } }, headerNode, index.h("div", { class: CSS.content, hidden: !open }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
CalciteBlockSection.style = calciteBlockSectionCss;

exports.calcite_block_section = CalciteBlockSection;
