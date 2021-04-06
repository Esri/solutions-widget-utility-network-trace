import { r as registerInstance, f as forceUpdate, h, H as Host, g as getElement } from './index-cbdbef9d.js';
import { g as getElementDir } from './dom-b2b7d90d.js';
import { C as CSS_UTILITY } from './resources-c23b068d.js';

const CSS = {
  button: "button",
  buttonTextVisible: "button--text-visible",
  buttonCompact: "button--compact",
  iconContainer: "icon-container",
  slotContainer: "slot-container",
  slotContainerHidden: "slot-container--hidden",
  textContainer: "text-container",
  textContainerVisible: "text-container--visible"
};

const calciteActionCss = "@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;background-color:transparent}:host([disabled]){pointer-events:none}.button{font-family:inherit;display:flex;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2);background-color:var(--calcite-ui-foreground-1);margin:0;justify-content:flex-start;align-items:center;border:none;width:auto;cursor:pointer;text-align:unset;position:relative;font-size:0.75rem;outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.button:hover,.button:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1)}.button:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1);fill:var(--calcite-ui-text-1);outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}.button .icon-container{min-width:1rem;min-height:1rem;margin:0;justify-content:center;align-items:center;display:flex;pointer-events:none}.button .text-container{color:inherit;line-height:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin:0;opacity:0;width:0;transition:opacity 150ms ease-in-out, margin 150ms ease-in-out, width 150ms ease-in-out}.button .text-container--visible{flex:1 1 auto;opacity:1;width:auto}:host([scale=s]) .button{padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}:host([scale=m]) .button{padding:var(--calcite-spacing) var(--calcite-spacing)}:host([scale=l]) .button{padding:var(--calcite-spacing-plus-quarter) var(--calcite-spacing-plus-quarter);font-size:0.9375rem;line-height:1.5}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-left:0;padding-right:0}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{width:100%}.button--text-visible .icon-container{margin:0 var(--calcite-spacing-half) 0 0}.button--text-visible .text-container--visible{margin:0 var(--calcite-spacing-half) 0 0}.button--text-visible.calcite--rtl .icon-container{margin:0 0 0 var(--calcite-spacing-half)}.button--text-visible.calcite--rtl .text-container--visible{margin:0 0 0 var(--calcite-spacing-half)}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus,:host([active][loading]) .button{color:var(--calcite-ui-text-current);fill:var(--calcite-ui-text-current);background-color:var(--calcite-ui-foreground-current)}:host([appearance=clear]) .button{background-color:transparent;transition:box-shadow 150ms ease-in-out}:host([appearance=clear]) .button:hover,:host([appearance=clear]) .button:focus{background-color:transparent;box-shadow:0 0 0 2px var(--calcite-ui-border-1) inset}:host([active][appearance=clear]) .button,:host([active][appearance=clear]) .button:hover,:host([active][appearance=clear]) .button:focus{box-shadow:none;color:var(--calcite-ui-text-current);fill:var(--calcite-ui-text-current);background-color:var(--calcite-ui-foreground-current)}:host([appearance=clear][loading]) .button,:host([appearance=clear][disabled]) .button{background-color:transparent}:host([loading]) .button,:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-ui-foreground-1)}:host([loading]) .button .text-container,:host([loading]) .button:hover .text-container,:host([loading]) .button:focus .text-container{opacity:var(--calcite-ui-opacity-disabled)}:host([loading]) calcite-loader[inline]{color:var(--calcite-ui-border-5);margin-right:0}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;opacity:var(--calcite-ui-opacity-disabled);background-color:var(--calcite-ui-foreground-1)}:host([disabled][active]) .button,:host([disabled][active]) .button:hover,:host([disabled][active]) .button:focus{opacity:var(--calcite-ui-opacity-disabled);background-color:var(--calcite-ui-foreground-current)}:host([indicator]) .button--text-visible,:host([indicator][scale=s]) .button--text-visible,:host([indicator][scale=l]) .button--text-visible{padding-right:var(--calcite-spacing)}:host([indicator]) .button::after{content:\"\";border-radius:50%;width:var(--calcite-spacing-half);height:var(--calcite-spacing-half);border:var(--calcite-spacing-eighth) solid var(--calcite-ui-foreground-1);background-color:var(--calcite-ui-text-current);position:absolute;bottom:var(--calcite-spacing-half);right:var(--calcite-spacing-half);z-index:1}:host([indicator][scale=s]) .button::after{bottom:var(--calcite-spacing-quarter);right:var(--calcite-spacing-quarter)}:host([indicator][scale=l]) .button::after{bottom:var(--calcite-spacing-half);right:var(--calcite-spacing-half)}:host([indicator]) .calcite--rtl::after{right:unset;left:var(--calcite-spacing-quarter)}:host([indicator]) .button--text-visible.calcite--rtl{padding-right:var(--calcite-spacing-three-quarters);padding-left:var(--calcite-spacing)}:host([indicator]) .button:hover::after,:host([indicator]) .button:focus::after{border-color:var(--calcite-ui-foreground-1)}:host([indicator][active]) .button::after{border-color:var(--calcite-ui-foreground-current)}:host([indicator]) .button--text-visible::after,:host([indicator][scale=s]) .button--text-visible::after,:host([indicator][scale=l]) .button--text-visible::after{bottom:unset;right:var(--calcite-spacing-half)}:host([indicator]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=s]) .button--text-visible.calcite--rtl::after,:host([indicator][scale=l]) .button--text-visible.calcite--rtl::after{right:unset;left:var(--calcite-spacing-half)}";

const CalciteAction = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /** Specify the appearance style of the action, defaults to solid. */
    this.appearance = "solid";
    /**
     * Indicates whether the action is highlighted.
     */
    this.active = false;
    /**
     * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
     */
    this.compact = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * Indicates unread changes.
     */
    this.indicator = false;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * Specifies the size of the action.
     */
    this.scale = "m";
    /**
     * Indicates whether the text is displayed.
     */
    this.textEnabled = false;
    this.observer = new MutationObserver(() => forceUpdate(this));
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.observer.observe(this.el, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  async setFocus() {
    this.buttonEl.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderTextContainer() {
    const { text, textEnabled } = this;
    const textContainerClasses = {
      [CSS.textContainer]: true,
      [CSS.textContainerVisible]: textEnabled
    };
    return text ? (h("div", { class: textContainerClasses, key: "text-container" }, text)) : null;
  }
  renderIconContainer() {
    var _a;
    const { loading, icon, scale, el } = this;
    const iconScale = scale === "l" ? "m" : "s";
    const calciteLoaderNode = loading ? h("calcite-loader", { active: true, inline: true, scale: iconScale }) : null;
    const calciteIconNode = icon ? h("calcite-icon", { icon: icon, scale: iconScale }) : null;
    const iconNode = calciteLoaderNode || calciteIconNode;
    const hasIconToDisplay = iconNode || ((_a = el.children) === null || _a === void 0 ? void 0 : _a.length);
    const slotContainerNode = (h("div", { class: {
        [CSS.slotContainer]: true,
        [CSS.slotContainerHidden]: loading
      } }, h("slot", null)));
    return hasIconToDisplay ? (h("div", { "aria-hidden": "true", class: CSS.iconContainer, key: "icon-container" }, iconNode, slotContainerNode)) : null;
  }
  render() {
    const { compact, disabled, loading, el, textEnabled, label, text } = this;
    const ariaLabel = label || text;
    const rtl = getElementDir(el) === "rtl";
    const buttonClasses = {
      [CSS.button]: true,
      [CSS.buttonTextVisible]: textEnabled,
      [CSS.buttonCompact]: compact,
      [CSS_UTILITY.rtl]: rtl
    };
    return (h(Host, null, h("button", { "aria-busy": loading.toString(), "aria-disabled": disabled.toString(), "aria-label": ariaLabel, class: buttonClasses, disabled: disabled, ref: (buttonEl) => (this.buttonEl = buttonEl) }, this.renderIconContainer(), this.renderTextContainer())));
  }
  get el() { return getElement(this); }
};
CalciteAction.style = calciteActionCss;

export { CalciteAction as calcite_action };
