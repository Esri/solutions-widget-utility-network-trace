'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-adeb0063.js');

const calciteRadioButtonGroupCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:flex;max-width:100vw}:host([layout=horizontal]){flex-direction:row;flex-wrap:wrap}:host([layout=vertical]){flex-direction:column}";

const CalciteRadioButtonGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteRadioButtonGroupChange = index.createEvent(this, "calciteRadioButtonGroupChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The disabled state of the radio button group. */
    this.disabled = false;
    /** The radio button group's hidden status.  When a radio button group is hidden none of its options are focusable or checkable. */
    this.hidden = false;
    /** The layout direction of the radio buttons in a group. */
    this.layout = "horizontal";
    /** Requires that a value is selected for the radio button group before the parent form will submit. */
    this.required = false;
    /** The scale (size) of the radio button group. */
    this.scale = "m";
    /** The color theme of the radio button group. */
    this.theme = "light";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.passPropsToRadioButtons = () => {
      const radioButtons = this.el.querySelectorAll("calcite-radio-button");
      if (radioButtons.length > 0) {
        radioButtons.forEach((radioButton) => {
          radioButton.disabled = this.disabled || radioButton.disabled;
          radioButton.hidden = this.hidden;
          radioButton.name = this.name;
          radioButton.required = this.required;
          radioButton.scale = this.scale;
          radioButton.theme = this.theme;
        });
      }
    };
  }
  onDisabledChange() {
    this.passPropsToRadioButtons();
  }
  onHiddenChange() {
    this.passPropsToRadioButtons();
  }
  onLayoutChange() {
    this.passPropsToRadioButtons();
  }
  onScaleChange() {
    this.passPropsToRadioButtons();
  }
  onThemeChange() {
    this.passPropsToRadioButtons();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.passPropsToRadioButtons();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  radioButtonChangeHandler(event) {
    this.calciteRadioButtonGroupChange.emit(event.target.value);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (index.h(index.Host, { role: "radiogroup" }, index.h("slot", null)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["onDisabledChange"],
    "hidden": ["onHiddenChange"],
    "layout": ["onLayoutChange"],
    "scale": ["onScaleChange"],
    "theme": ["onThemeChange"]
  }; }
};
CalciteRadioButtonGroup.style = calciteRadioButtonGroupCss;

exports.calcite_radio_button_group = CalciteRadioButtonGroup;