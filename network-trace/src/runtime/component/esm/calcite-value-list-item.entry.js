import { r as registerInstance, h, H as Host, g as getElement } from './index-cbdbef9d.js';
import { c as getSlotted } from './dom-b2b7d90d.js';
import { g as guid } from './guid-9ad8042d.js';
import { I as ICON_TYPES } from './resources-8903dad2.js';
import { C as CSS, S as SLOTS$1 } from './resources-68a36a83.js';

const ICONS = {
  drag: "drag"
};
const SLOTS = {
  actionsEnd: "actions-end",
  actionsStart: "actions-start"
};

const calciteValueListItemCss = "@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{margin-bottom:1px;display:flex;transition:background-color 150ms ease-in-out, box-shadow 150ms ease-in-out;box-shadow:0 1px 0 var(--calcite-ui-border-3)}calcite-pick-list-item{box-shadow:none;flex-grow:1;position:relative;margin:0}:host([selected]){box-shadow:0 0 0 1px var(--calcite-ui-blue-3)}.handle{display:flex;align-items:center;justify-content:center;padding:0 var(--calcite-spacing-third);background-color:transparent;border:none;color:var(--calcite-ui-border-1);line-height:0;cursor:move;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-current);color:var(--calcite-ui-text-current)}";

const CalciteValueListItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * When true, the item cannot be clicked and is visually muted
     */
    this.disabled = false;
    /**
     * @internal When false, the item cannot be deselected by user interaction.
     */
    this.disableDeselect = false;
    /**
     * @internal - stores the activated state of the drag handle.
     */
    this.handleActivated = false;
    /**
     * Determines the icon SVG symbol that will be shown. Options are circle, square, grid or null.
     */
    this.icon = null;
    /**
     * Set this to true to display a remove action that removes the item from the list.
     */
    this.removable = false;
    /**
     * Set this to true to pre-select an item. Toggles when an item is checked/unchecked.
     */
    this.selected = false;
    this.pickListItem = null;
    this.guid = `calcite-value-list-item-${guid()}`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.getPickListRef = (el) => (this.pickListItem = el);
    this.handleKeyDown = (event) => {
      if (event.key === " ") {
        this.handleActivated = !this.handleActivated;
      }
    };
    this.handleBlur = () => {
      this.handleActivated = false;
    };
    this.handleSelectChange = (event) => {
      this.selected = event.detail.selected;
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  async toggleSelected(coerce) {
    this.pickListItem.toggleSelected(coerce);
  }
  async setFocus() {
    var _a;
    (_a = this.pickListItem) === null || _a === void 0 ? void 0 : _a.setFocus();
  }
  // --------------------------------------------------------------------------
  //
  //  Events
  //
  // --------------------------------------------------------------------------
  calciteListItemChangeHandler(event) {
    // adjust item payload from wrapped item before bubbling
    event.detail.item = this.el;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderActionsEnd() {
    const { el } = this;
    const hasActionsEnd = getSlotted(el, SLOTS.actionsEnd);
    return hasActionsEnd ? (h("slot", { name: SLOTS.actionsEnd, slot: SLOTS$1.actionsEnd })) : null;
  }
  renderActionsStart() {
    const { el } = this;
    const hasActionsStart = getSlotted(el, SLOTS.actionsStart);
    return hasActionsStart ? (h("slot", { name: SLOTS.actionsStart, slot: SLOTS$1.actionsStart })) : null;
  }
  renderHandle() {
    const { icon } = this;
    if (icon === ICON_TYPES.grip) {
      return (h("span", { "aria-pressed": this.handleActivated.toString(), class: {
          [CSS.handle]: true,
          [CSS.handleActivated]: this.handleActivated
        }, "data-js-handle": "true", onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, role: "button", tabindex: "0" }, h("calcite-icon", { icon: ICONS.drag, scale: "s" })));
    }
  }
  render() {
    return (h(Host, { "data-id": this.guid }, this.renderHandle(), h("calcite-pick-list-item", { description: this.description, disableDeselect: this.disableDeselect, disabled: this.disabled, label: this.label, metadata: this.metadata, onCalciteListItemChange: this.handleSelectChange, ref: this.getPickListRef, removable: this.removable, selected: this.selected, value: this.value }, this.renderActionsStart(), this.renderActionsEnd())));
  }
  get el() { return getElement(this); }
};
CalciteValueListItem.style = calciteValueListItemCss;

export { CalciteValueListItem as calcite_value_list_item };
