'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-adeb0063.js');
const dom = require('./dom-c66de328.js');
const key = require('./key-d6a0381e.js');
const popper = require('./popper-1fd7a0cb.js');
const calciteDatePickerResources = require('./calcite-date-picker-resources-8c6dc508.js');
const date = require('./date-78d7e2bf.js');

const calciteInputDatePickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:inline-block;vertical-align:top;width:100%;position:relative;overflow:visible;box-shadow:none}:host .menu-container .calcite-popper-anim{position:relative;z-index:1;transition:var(--calcite-popper-transition);visibility:hidden;transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);border-radius:var(--calcite-border-radius)}:host .menu-container[data-popper-placement^=bottom] .calcite-popper-anim{transform:translateY(-5px)}:host .menu-container[data-popper-placement^=top] .calcite-popper-anim{transform:translateY(5px)}:host .menu-container[data-popper-placement^=left] .calcite-popper-anim{transform:translateX(5px)}:host .menu-container[data-popper-placement^=right] .calcite-popper-anim{transform:translateX(-5px)}:host .menu-container[data-popper-placement] .calcite-popper-anim--active{opacity:1;visibility:visible;transform:translate(0)}.calendar-picker-wrapper{box-shadow:none;position:static;transform:translate3d(0, 0, 0);width:100%;line-height:0}:host([scale=s]){max-width:216px}:host([scale=m]){max-width:286px}:host([scale=l]){max-width:398px}.input-wrapper{position:relative}:host([range]) .input-container{display:flex;align-items:center}:host([range]) .input-wrapper{flex:1 1 auto}:host([range]) .horizontal-arrow-container{background-color:var(--calcite-ui-background);padding:0 var(--calcite-spacing-quarter);border:1px solid var(--calcite-ui-border-1);border-left:none;border-right:none;height:42px;display:flex;align-items:center;flex:0 0 auto}:host([range][layout=vertical]) .input-wrapper{width:100%}:host([range][layout=vertical]) .input-container{flex-direction:column;align-items:start}:host([range][layout=vertical]) .calendar-picker-wrapper--end{transform:translate3d(0, 0, 0)}:host([range][layout=vertical]) .vertical-arrow-container{position:absolute;left:0;top:36px;z-index:1;background-color:var(--calcite-ui-foreground-1);padding-left:0.625rem;padding-right:0.625rem;margin-left:1px;margin-right:1px}:host([scale=s][range]:not([layout=vertical])){max-width:462px}:host([scale=s][range]:not([layout=vertical])) .calendar-picker-wrapper{width:216px}:host([scale=s][range]:not([layout=vertical])) .horizontal-arrow-container{height:30px}:host([scale=m][range]:not([layout=vertical])){max-width:596px}:host([scale=m][range]:not([layout=vertical])) .calendar-picker-wrapper{width:286px}:host([scale=l][range]:not([layout=vertical])){max-width:820px}:host([scale=l][range]:not([layout=vertical])) .calendar-picker-wrapper{width:398px}:host([scale=l][range]:not([layout=vertical])) .horizontal-arrow-container{height:54px}.menu-container{display:block;position:absolute;z-index:900;transform:scale(0);visibility:hidden;pointer-events:none;width:100%}:host([active]) .menu-container{pointer-events:initial;visibility:visible}.input .calcite-input-wrapper{margin-top:0}:host([range][layout=vertical][scale=s]) .vertical-arrow-container{top:24px}:host([range][layout=vertical][scale=l]) .vertical-arrow-container{top:50px;padding-left:0.875rem;padding-right:0.875rem}:host([range][layout=vertical][active]) .vertical-arrow-container{display:none}";

const DEFAULT_PLACEMENT = "bottom-start";
const CalciteInputDatePicker = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteDatePickerChange = index.createEvent(this, "calciteDatePickerChange", 7);
    this.calciteDatePickerRangeChange = index.createEvent(this, "calciteDatePickerRangeChange", 7);
    /** Expand or collapse when calendar does not have input */
    this.active = false;
    /** Localized string for "previous month" (used for aria label) */
    this.intlPrevMonth = calciteDatePickerResources.TEXT.prevMonth;
    /** Localized string for "next month" (used for aria label) */
    this.intlNextMonth = calciteDatePickerResources.TEXT.nextMonth;
    /** BCP 47 language tag for desired language and country format */
    this.locale = document.documentElement.lang || "en";
    /** specify the scale of the date picker */
    this.scale = "m";
    /** Range mode activation */
    this.range = false;
    /** Disables the default behaviour on the third click of narrowing or extending the range and instead starts a new range. */
    this.proximitySelectionDisabled = false;
    /** Layout */
    this.layout = "horizontal";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.focusedInput = "start";
    this.hasShadow =  !!document.head.attachShadow;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setEndInput = (el) => {
      this.endInput = el;
    };
    this.deactivate = () => {
      this.active = false;
    };
    this.keyUpHandler = (e) => {
      if (key.getKey(e.key) === "Escape") {
        this.active = false;
      }
    };
    this.inputBlur = (e) => {
      this.blur(e.detail);
    };
    this.startInputFocus = () => {
      this.active = true;
      this.focusedInput = "start";
    };
    this.endInputFocus = () => {
      this.active = true;
      this.focusedInput = "end";
    };
    this.inputInput = (e) => {
      this.input(e.detail.value);
    };
    this.setMenuEl = (el) => {
      if (el) {
        this.menuEl = el;
        this.createPopper();
      }
    };
    this.setStartWrapper = (el) => {
      this.startWrapper = el;
      this.setReferenceEl();
    };
    this.setEndWrapper = (el) => {
      this.endWrapper = el;
      this.setReferenceEl();
    };
    /**
     * Event handler for when the selected date changes
     */
    this.handleDateChange = (event) => {
      if (this.range) {
        return;
      }
      this.valueAsDate = event.detail;
    };
    this.handleDateRangeChange = (event) => {
      if (!this.range || !event.detail) {
        return;
      }
      const { startDate, endDate } = event.detail;
      this.startAsDate = startDate;
      this.endAsDate = endDate;
      clearTimeout(this.endInputFocusTimeout);
      if (startDate && this.focusedInput === "start") {
        this.endInputFocusTimeout = window.setTimeout(() => { var _a; return (_a = this.endInput) === null || _a === void 0 ? void 0 : _a.setFocus(); }, 150);
      }
    };
  }
  activeHandler() {
    this.reposition();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  /**
   * Blur doesn't fire properly when there is no shadow dom (Edge/IE11)
   * Check if the focused element is inside the date picker, if not close
   */
  focusInHandler(e) {
    if (!this.hasShadow && !this.el.contains(e.target)) {
      this.active = false;
    }
  }
  calciteDaySelectHandler() {
    this.active = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async reposition() {
    const { popper: popper$1, menuEl } = this;
    const modifiers = this.getModifiers();
    popper$1
      ? popper.updatePopper({
        el: menuEl,
        modifiers,
        placement: DEFAULT_PLACEMENT,
        popper: popper$1
      })
      : this.createPopper();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.loadLocaleData();
    if (this.value) {
      this.valueAsDate = date.dateFromISO(this.value);
    }
    if (this.start) {
      this.setStartAsDate(date.dateFromISO(this.start));
    }
    if (this.end) {
      this.setEndAsDate(date.dateFromISO(this.end));
    }
    this.createPopper();
  }
  disconnectedCallback() {
    this.destroyPopper();
  }
  render() {
    var _a, _b;
    const min = date.dateFromISO(this.min);
    const max = date.dateFromISO(this.max);
    const date$1 = date.dateFromRange(this.range ? this.startAsDate : this.valueAsDate, min, max);
    const endDate = this.range ? date.dateFromRange(this.endAsDate, min, max) : null;
    const formattedEndDate = endDate ? endDate.toLocaleDateString(this.locale) : "";
    const formattedDate = date$1 ? date$1.toLocaleDateString(this.locale) : "";
    const dir = dom.getElementDir(this.el);
    return (index.h(index.Host, { dir: dir, onBlur: this.deactivate, onKeyUp: this.keyUpHandler, role: "application" }, this.localeData && (index.h("div", { "aria-expanded": this.active.toString(), class: "input-container", role: "application" }, index.h("div", { class: "input-wrapper", ref: this.setStartWrapper }, index.h("calcite-input", { class: `input ${this.layout === "vertical" && this.range ? `no-bottom-border` : ``}`, icon: "calendar", "number-button-type": "none", onCalciteInputBlur: this.inputBlur, onCalciteInputFocus: this.startInputFocus, onCalciteInputInput: this.inputInput, placeholder: (_a = this.localeData) === null || _a === void 0 ? void 0 : _a.placeholder, scale: this.scale, type: "text", value: formattedDate })), index.h("div", { "aria-hidden": (!this.active).toString(), class: "menu-container", ref: this.setMenuEl }, index.h("div", { class: {
        ["calendar-picker-wrapper"]: true,
        ["calendar-picker-wrapper--end"]: this.focusedInput === "end",
        [popper.CSS.animation]: true,
        [popper.CSS.animationActive]: this.active
      } }, index.h("calcite-date-picker", { activeRange: this.focusedInput, dir: dir, endAsDate: this.endAsDate, headingLevel: this.headingLevel, intlNextMonth: this.intlNextMonth, intlPrevMonth: this.intlPrevMonth, locale: this.locale, max: this.max, min: this.min, onCalciteDatePickerChange: this.handleDateChange, onCalciteDatePickerRangeChange: this.handleDateRangeChange, proximitySelectionDisabled: this.proximitySelectionDisabled, range: this.range, scale: this.scale, startAsDate: this.startAsDate, tabIndex: 0, valueAsDate: this.valueAsDate }))), this.range && this.layout === "horizontal" && (index.h("div", { class: "horizontal-arrow-container" }, index.h("calcite-icon", { flipRtl: true, icon: "arrow-right", scale: "s" }))), this.range && this.layout === "vertical" && (index.h("div", { class: "vertical-arrow-container" }, index.h("calcite-icon", { icon: "arrow-down", scale: "s" }))), this.range && (index.h("div", { class: "input-wrapper", ref: this.setEndWrapper }, index.h("calcite-input", { class: "input", icon: "calendar", "number-button-type": "none", onCalciteInputBlur: this.inputBlur, onCalciteInputFocus: this.endInputFocus, onCalciteInputInput: this.inputInput, placeholder: (_b = this.localeData) === null || _b === void 0 ? void 0 : _b.placeholder, ref: this.setEndInput, scale: this.scale, type: "text", value: formattedEndDate })))))));
  }
  setReferenceEl() {
    const { focusedInput, layout, endWrapper, startWrapper } = this;
    this.referenceEl =
      focusedInput === "end" || layout === "vertical"
        ? endWrapper || startWrapper
        : startWrapper || endWrapper;
    this.createPopper();
  }
  getModifiers() {
    const flipModifier = {
      name: "flip",
      enabled: true
    };
    flipModifier.options = {
      fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
    };
    return [flipModifier];
  }
  createPopper() {
    this.destroyPopper();
    const { menuEl, referenceEl } = this;
    if (!menuEl || !referenceEl) {
      return;
    }
    const modifiers = this.getModifiers();
    this.popper = popper.createPopper({
      el: menuEl,
      modifiers,
      placement: DEFAULT_PLACEMENT,
      referenceEl
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  valueWatcher(value) {
    this.valueAsDate = date.dateFromISO(value);
  }
  startWatcher(start) {
    this.setStartAsDate(date.dateFromISO(start));
  }
  endWatcher(end) {
    this.setEndAsDate(date.dateFromISO(end));
  }
  async loadLocaleData() {
    const { locale } = this;
    this.localeData = await calciteDatePickerResources.getLocaleData(locale);
  }
  /**
   * Update date instance of start if valid
   */
  setStartAsDate(startDate) {
    this.startAsDate = startDate;
  }
  /**
   * Update date instance of end if valid
   */
  setEndAsDate(endDate) {
    this.endAsDate = endDate;
  }
  /**
   * If inputted string is a valid date, update value/active
   */
  input(value) {
    const date$1 = this.getDateFromInput(value);
    if (date$1) {
      if (!this.range) {
        this.valueAsDate = date$1;
      }
      else {
        let changed = false;
        if (this.focusedInput === "start") {
          changed = !this.startAsDate || !date.sameDate(date$1, this.startAsDate);
          if (changed) {
            this.startAsDate = date$1;
          }
        }
        else if (this.focusedInput === "end") {
          changed = !this.endAsDate || !date.sameDate(date$1, this.endAsDate);
          if (changed) {
            this.endAsDate = date$1;
          }
        }
      }
    }
  }
  /**
   * Clean up invalid date from input on blur
   */
  blur(target) {
    const { locale, focusedInput, endAsDate, range, startAsDate, valueAsDate } = this;
    const date = this.getDateFromInput(target.value);
    if (!date) {
      if (!range && valueAsDate) {
        target.value = valueAsDate.toLocaleDateString(locale);
      }
      else if (focusedInput === "start" && startAsDate) {
        target.value = startAsDate.toLocaleDateString(locale);
      }
      else if (focusedInput === "end" && endAsDate) {
        target.value = endAsDate.toLocaleDateString(locale);
      }
    }
  }
  /**
   * Find a date from input string
   * return false if date is invalid, or out of range
   */
  getDateFromInput(value) {
    if (!this.localeData) {
      return false;
    }
    const { separator } = this.localeData;
    const { day, month, year } = date.parseDateString(value, this.localeData);
    const validDay = day > 0;
    const validMonth = month > -1;
    const date$1 = new Date(year, month, day);
    date$1.setFullYear(year);
    const validDate = !isNaN(date$1.getTime());
    const validLength = value.split(separator).filter((c) => c).length > 2;
    const validYear = year.toString().length > 0;
    if (validDay &&
      validMonth &&
      validDate &&
      validLength &&
      validYear &&
      date.inRange(date$1, this.min, this.max)) {
      return date$1;
    }
    return false;
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "active": ["activeHandler"],
    "layout": ["setReferenceEl"],
    "focusedInput": ["setReferenceEl"],
    "value": ["valueWatcher"],
    "start": ["startWatcher"],
    "end": ["endWatcher"],
    "locale": ["loadLocaleData"]
  }; }
};
CalciteInputDatePicker.style = calciteInputDatePickerCss;

exports.calcite_input_date_picker = CalciteInputDatePicker;
