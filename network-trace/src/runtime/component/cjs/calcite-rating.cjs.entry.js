'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-adeb0063.js');
const dom = require('./dom-38a6a540.js');
const guid = require('./guid-f05bb751.js');

const TEXT = {
  rating: "Rating",
  stars: "stars: ${num}"
};

const calciteRatingCss = "@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-rating-spacing-unit:0.25rem}:host{--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){--calcite-rating-spacing-unit:0.75rem}:host{display:flex;align-items:center;position:relative;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}:host([disabled]){pointer-events:none;opacity:0.5}:host([read-only]){pointer-events:none}.fieldset{padding:0;margin:0;border-width:0;display:inline-block}.wrapper{margin-right:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .wrapper{margin-right:0;margin-left:var(--calcite-rating-spacing-unit)}.star{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;position:relative;display:inline-block;color:var(--calcite-ui-border-1);transition:150ms ease-in-out;transform:scale(1);cursor:pointer}.star:active{transform:scale(1.1)}.focused{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-yellow-1)}.hovered,.selected,:host([read-only]) .average,:host([read-only]) .fraction{color:var(--calcite-ui-blue-1)}.hovered:not(.selected){transform:scale(0.9)}:host .fraction{position:absolute;overflow:hidden;pointer-events:none;top:0;left:0;transition:150ms ease-in-out}:host([dir=rtl]) .fraction{right:0;left:unset}calcite-chip{cursor:default;pointer-events:none}.number--average{font-weight:700}.number--count{font-style:italic;color:var(--calcite-ui-text-2)}.number--count:not(:first-child){margin-left:var(--calcite-rating-spacing-unit)}:host([dir=rtl]) .number--count:not(:first-child){margin-right:var(--calcite-rating-spacing-unit);margin-left:0}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";

const CalciteRating = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteRatingChange = index.createEvent(this, "calciteRatingChange", 7);
    /** specify the scale of the component, defaults to m */
    this.scale = "m";
    /** the value of the rating component */
    this.value = 0;
    /** is the rating component in a selectable mode */
    this.readOnly = false;
    /** is the rating component in a selectable mode */
    this.disabled = false;
    /** display rating value */
    this.displayValue = false;
    /** Localized string for "Rating" (used for aria label) */
    this.intlRating = TEXT.rating;
    /** Localized string for labelling each star, `${num}` in the string will be replaced by the number */
    this.intlStars = TEXT.stars;
    this.guid = `calcite-ratings-${guid.guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleLabelFocus(e) {
    if (dom.hasLabel(e.detail.labelEl, this.el) &&
      e.detail.interactedEl !== this.el &&
      !this.el.contains(e.detail.interactedEl)) {
      this.setFocus();
    }
  }
  blurHandler() {
    this.hasFocus = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStars() {
    return [1, 2, 3, 4, 5].map((i) => {
      const selected = this.value >= i;
      const average = this.average && !this.value && i <= this.average;
      const hovered = i <= this.hoverValue;
      const fraction = this.average && this.average + 1 - i;
      const partial = !this.value && !hovered && fraction > 0 && fraction < 1;
      const focused = this.hasFocus && this.focusValue === i;
      return (index.h("span", { class: { wrapper: true } }, index.h("label", { class: { star: true, focused, selected, average, hovered, partial }, htmlFor: `${this.guid}-${i}`, onMouseOver: () => {
          this.hoverValue = i;
        } }, index.h("calcite-icon", { "aria-hidden": "true", class: "icon", icon: selected || average || this.readOnly ? "star-f" : "star", scale: this.scale }), partial && (index.h("div", { class: "fraction", style: { width: `${fraction * 100}%` } }, index.h("calcite-icon", { icon: "star-f", scale: this.scale, theme: this.theme }))), index.h("span", { class: "visually-hidden" }, this.intlStars.replace("${num}", `${i}`))), index.h("input", { checked: i === this.value, class: "visually-hidden", disabled: this.disabled || this.readOnly, id: `${this.guid}-${i}`, name: this.guid, onChange: () => this.updateValue(i), onFocus: () => {
          this.hasFocus = true;
          this.focusValue = i;
        }, type: "radio", value: i })));
    });
  }
  render() {
    var _a, _b;
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { dir: dir }, index.h("fieldset", { class: "fieldset", onBlur: () => (this.hoverValue = null), onMouseLeave: () => (this.hoverValue = null), onTouchEnd: () => (this.hoverValue = null) }, index.h("legend", { class: "visually-hidden" }, this.intlRating), this.renderStars()), this.count || this.average ? (index.h("calcite-chip", { dir: dir, scale: this.scale, theme: this.theme, value: (_a = this.count) === null || _a === void 0 ? void 0 : _a.toString() }, this.average && index.h("span", { class: "number--average" }, this.average.toString()), this.count && index.h("span", { class: "number--count" }, "(", (_b = this.count) === null || _b === void 0 ? void 0 :
      _b.toString(), ")"))) : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  updateValue(value) {
    this.value = value;
    this.calciteRatingChange.emit({ value });
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async setFocus() {
    this.el.querySelector("input").focus();
    this.hasFocus = true;
  }
  get el() { return index.getElement(this); }
};
CalciteRating.style = calciteRatingCss;

exports.calcite_rating = CalciteRating;
