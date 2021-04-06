import { r as registerInstance, c as createEvent, h, g as getElement } from './index-cbdbef9d.js';
import { f as focusElement, g as getElementDir } from './dom-558ef00c.js';
import { g as getKey } from './key-6f340c70.js';
import { n as normalizeHex, C as CSSColorMode, p as parseMode, c as colorEqual } from './utils-62431832.js';
import { c as color } from './index-5c2e0d3a.js';
import { D as DEFAULT_COLOR, T as TEXT, a as DIMENSIONS, C as CSS, H as HSV_LIMITS, b as DEFAULT_STORAGE_KEY_PREFIX, R as RGB_LIMITS } from './resources-3ce03a54.js';
import { d as debounce, i as isObject } from './debounce-b227f776.js';

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

const calciteColorPickerCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) .container{width:156px}:host([scale=s]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(20px, 1fr))}:host([scale=s]) .channels{flex-direction:column}:host([scale=s]) .channel{width:100%;margin-bottom:4px}:host([scale=s]) .channel:last-child{margin-bottom:0}:host([scale=m]) .container{width:272px}:host([scale=l][dir=rtl]) .control-section>:nth-child(2){margin-left:0;margin-right:12px}:host([scale=l]) .container{width:420px}:host([scale=l]) .color-field-and-slider{margin-bottom:-20px}:host([scale=l]) .section{padding:0 16px 16px}:host([scale=l]) .section:first-of-type{padding-top:16px}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(28px, 1fr));grid-gap:12px;padding-top:16px}:host([scale=l]) .control-section{flex-wrap:nowrap}:host([scale=l]) .control-section>:nth-child(2){margin-left:12px}:host([scale=l]) .color-hex-options{flex-shrink:1}:host([scale=l]) .color-mode-container{flex-shrink:3}:host([appearance=minimal]) .container{border:none}.container{display:inline-block;border:1px solid var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}.color-field-and-slider{margin-bottom:-16px}.color-field-and-slider--interactive{cursor:pointer}.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding:0 12px 12px}.section:first-of-type{padding-top:12px}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-ui-text-3);font-weight:500;font-size:0.875rem;line-height:1.5}.header.header--underlined{border-bottom:1px solid var(--calcite-ui-border-1)}.header--hex{line-height:1.5;font-size:0.875rem;line-height:1.5;padding:12px 0 15px}.control{margin-top:8px}.channels{display:flex;justify-content:space-between}.channel{width:31%}.saved-colors{padding-top:12px;display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill, minmax(24px, 1fr));grid-gap:8px;width:100%}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.saved-color:hover{transition:outline-color 100ms ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}";

const throttleFor60FpsInMs = 16;
const defaultValue = normalizeHex(DEFAULT_COLOR.hex());
const defaultFormat = "auto";
const CalciteColorPicker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteColorPickerChange = createEvent(this, "calciteColorPickerChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Public properties
    //
    //--------------------------------------------------------------------------
    /**
     * When false, empty color (null) will be allowed as a value. Otherwise, a color value is always enforced by the component.
     *
     * When true, clearing the input and blurring will restore the last valid color set. When false, it will set it to empty.
     */
    this.allowEmpty = false;
    /** specify the appearance - default (containing border), or minimal (no containing border) */
    this.appearance = "default";
    /**
     * Internal prop for advanced use-cases.
     *
     * @internal
     */
    this.color = DEFAULT_COLOR;
    /**
     * The format of the value property.
     *
     * When "auto", the format will be inferred from `value` when set.
     */
    this.format = defaultFormat;
    /** When true, hides the hex input */
    this.hideHex = false;
    /** When true, hides the RGB/HSV channel inputs */
    this.hideChannels = false;
    /** When true, hides the saved colors section */
    this.hideSaved = false;
    /** Label used for the blue channel */
    this.intlB = TEXT.b;
    /** Label used for the blue channel description */
    this.intlBlue = TEXT.blue;
    /** Label used for the delete color button. */
    this.intlDeleteColor = TEXT.deleteColor;
    /** Label used for the green channel */
    this.intlG = TEXT.g;
    /** Label used for the green channel description */
    this.intlGreen = TEXT.green;
    /** Label used for the hue channel */
    this.intlH = TEXT.h;
    /** Label used for the HSV mode */
    this.intlHsv = TEXT.hsv;
    /** Label used for the hex input */
    this.intlHex = TEXT.hex;
    /** Label used for the hue channel description */
    this.intlHue = TEXT.hue;
    /**
     * Label used for the hex input when there is no color selected.
     */
    this.intlNoColor = TEXT.noColor;
    /** Label used for the red channel */
    this.intlR = TEXT.r;
    /** Label used for the red channel description */
    this.intlRed = TEXT.red;
    /** Label used for the RGB mode */
    this.intlRgb = TEXT.rgb;
    /** Label used for the saturation channel */
    this.intlS = TEXT.s;
    /** Label used for the saturation channel description */
    this.intlSaturation = TEXT.saturation;
    /** Label used for the save color button. */
    this.intlSaveColor = TEXT.saveColor;
    /** Label used for the saved colors section */
    this.intlSaved = TEXT.saved;
    /** Label used for the value channel */
    this.intlV = TEXT.v;
    /** Label used for the  */
    this.intlValue = TEXT.value;
    /**
     * The scale of the color picker.
     */
    this.scale = "m";
    /**
     * The component's theme.
     */
    this.theme = "light";
    /**
     * The color value.
     *
     * This value can be either a {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color|CSS string}
     * a RGB, HSL or HSV object.
     *
     * The type will be preserved as the color is updated.
     */
    this.value = defaultValue;
    this.colorUpdateLocked = false;
    this.hueThumbState = "idle";
    this.mode = CSSColorMode.HEX;
    this.shiftKeyChannelAdjustment = 0;
    this.sliderThumbState = "idle";
    this.colorFieldAndSliderInteractive = false;
    this.channelMode = "rgb";
    this.channels = this.toChannels(DEFAULT_COLOR);
    this.dimensions = DIMENSIONS.m;
    this.savedColors = [];
    this.handleTabActivate = (event) => {
      this.channelMode = event.currentTarget.getAttribute("data-color-mode");
      this.updateChannelsFromColor(this.color);
    };
    this.handleHexInputChange = (event) => {
      event.stopPropagation();
      const { allowEmpty, color: color$1 } = this;
      const input = event.target;
      const hex = input.value;
      if (allowEmpty && !hex) {
        this.internalColorSet(null);
        return;
      }
      const normalizedHex = color$1 && normalizeHex(color$1.hex());
      if (hex !== normalizedHex) {
        this.internalColorSet(color(hex));
      }
    };
    this.handleSavedColorSelect = (event) => {
      const swatch = event.currentTarget;
      this.internalColorSet(color(swatch.color));
    };
    this.handleChannelInput = (event) => {
      const input = event.currentTarget;
      const internalInput = event.target;
      const channelIndex = Number(internalInput.getAttribute("data-channel-index"));
      const limit = this.channelMode === "rgb"
        ? RGB_LIMITS[Object.keys(RGB_LIMITS)[channelIndex]]
        : HSV_LIMITS[Object.keys(HSV_LIMITS)[channelIndex]];
      let inputValue;
      if (this.allowEmpty && !internalInput.value) {
        inputValue = "";
      }
      else {
        const value = Number(internalInput.value) + this.shiftKeyChannelAdjustment;
        const clamped = Math.max(0, Math.min(value, limit));
        inputValue = clamped.toString();
      }
      // need to update both calcite-input and its internal input to keep them in sync
      input.value = inputValue;
      internalInput.value = inputValue;
    };
    this.handleChannelKeyUpOrDown = (event) => {
      const { shiftKey } = event;
      const key = getKey(event.key);
      if (!this.color && (key === "ArrowUp" || key === "ArrowDown")) {
        event.preventDefault();
        return;
      }
      // this gets applied to the input's up/down arrow increment/decrement
      const complementaryBump = 9;
      this.shiftKeyChannelAdjustment =
        key === "ArrowUp" && shiftKey
          ? complementaryBump
          : key === "ArrowDown" && shiftKey
            ? -complementaryBump
            : 0;
    };
    this.handleChannelChange = (event) => {
      const input = event.target;
      const channelIndex = Number(input.getAttribute("data-channel-index"));
      const channels = [...this.channels];
      const shouldClearChannels = this.allowEmpty && !input.value;
      if (shouldClearChannels) {
        this.channels = [null, null, null];
        this.internalColorSet(null);
        return;
      }
      channels[channelIndex] = Number(input.value);
      this.updateColorFromChannels(channels);
    };
    this.handleSavedColorKeyDown = (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        event.stopPropagation();
        this.handleSavedColorSelect(event);
      }
    };
    this.handleColorFieldAndSliderMouseLeave = () => {
      this.colorFieldAndSliderInteractive = false;
    };
    this.handleColorFieldAndSliderMouseEnterOrMove = ({ offsetY }) => {
      const { dimensions: { colorField: { height: colorFieldHeight }, slider: { height: sliderHeight } } } = this;
      this.colorFieldAndSliderInteractive = offsetY <= colorFieldHeight + sliderHeight;
    };
    this.storeHexInputRef = (node) => {
      this.hexInputNode = node;
    };
    this.renderChannelsTabTitle = (channelMode) => {
      const { channelMode: activeChannelMode, intlRgb, intlHsv } = this;
      const active = channelMode === activeChannelMode;
      const label = channelMode === "rgb" ? intlRgb : intlHsv;
      return (h("calcite-tab-title", { active: active, class: CSS.colorMode, "data-color-mode": channelMode, onCalciteTabsActivate: this.handleTabActivate }, label));
    };
    this.renderChannelsTab = (channelMode) => {
      const { channelMode: activeChannelMode, channels, intlB, intlBlue, intlG, intlGreen, intlH, intlHue, intlR, intlRed, intlS, intlSaturation, intlV, intlValue } = this;
      const active = channelMode === activeChannelMode;
      const isRgb = channelMode === "rgb";
      const channelLabels = isRgb ? [intlR, intlG, intlB] : [intlH, intlS, intlV];
      const channelAriaLabels = isRgb
        ? [intlRed, intlGreen, intlBlue]
        : [intlHue, intlSaturation, intlValue];
      return (h("calcite-tab", { active: active, class: CSS.control }, h("div", { class: CSS.channels }, channels.map((channel, index) => this.renderChannel(channel, index, channelLabels[index], channelAriaLabels[index])))));
    };
    this.renderChannel = (value, index, label, ariaLabel) => (h("calcite-input", { "aria-label": ariaLabel, class: CSS.channel, "data-channel-index": index, numberButtonType: "none", onChange: this.handleChannelChange, onInput: this.handleChannelInput, onKeyDown: this.handleChannelKeyUpOrDown, onKeyUp: this.handleChannelKeyUpOrDown, prefixText: label, scale: "s", type: "number", value: value !== null ? value.toString() : "" }));
    this.deleteColor = () => {
      const colorToDelete = this.color.hex();
      const inStorage = this.savedColors.indexOf(colorToDelete) > -1;
      if (!inStorage) {
        return;
      }
      const savedColors = this.savedColors.filter((color) => color !== colorToDelete);
      this.savedColors = savedColors;
      const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
      if (this.storageId) {
        localStorage.setItem(storageKey, JSON.stringify(savedColors));
      }
    };
    this.saveColor = () => {
      const colorToSave = this.color.hex();
      const alreadySaved = this.savedColors.indexOf(colorToSave) > -1;
      if (alreadySaved) {
        return;
      }
      const savedColors = [...this.savedColors, colorToSave];
      this.savedColors = savedColors;
      const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
      if (this.storageId) {
        localStorage.setItem(storageKey, JSON.stringify(savedColors));
      }
    };
    this.drawColorFieldAndSlider = throttle(() => {
      if (!this.fieldAndSliderRenderingContext) {
        return;
      }
      this.drawColorField();
      this.drawHueSlider();
    }, throttleFor60FpsInMs);
    this.initColorFieldAndSlider = (canvas) => {
      this.fieldAndSliderRenderingContext = canvas.getContext("2d");
      this.setCanvasContextSize(canvas, {
        width: this.dimensions.colorField.width,
        height: this.dimensions.colorField.height +
          this.dimensions.slider.height +
          this.getSliderCapSpacing() * 2
      });
      this.drawColorFieldAndSlider();
      const yWithin = (y) => {
        const { dimensions: { colorField: { height: colorFieldHeight }, slider: { height: sliderHeight } } } = this;
        if (y <= colorFieldHeight) {
          return "color-field";
        }
        if (y <= colorFieldHeight + sliderHeight) {
          return "slider";
        }
        return "none";
      };
      const captureColor = (x, y) => {
        const { dimensions: { colorField: { height, width } } } = this;
        const saturation = Math.round((HSV_LIMITS.s / width) * x);
        const value = Math.round((HSV_LIMITS.v / height) * (height - y));
        this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(saturation).value(value));
      };
      canvas.addEventListener("mousedown", ({ offsetX, offsetY }) => {
        const region = yWithin(offsetY);
        if (region === "color-field") {
          this.hueThumbState = "drag";
          captureColor(offsetX, offsetY);
        }
        else if (region === "slider") {
          this.sliderThumbState = "drag";
          captureSliderColor(offsetX);
        }
      });
      canvas.addEventListener("mouseout", () => {
        this.hueThumbState = "idle";
        this.sliderThumbState = "idle";
        this.drawColorFieldAndSlider();
      });
      canvas.addEventListener("mouseup", () => {
        this.hueThumbState = "hover";
        this.sliderThumbState = "hover";
        this.drawColorFieldAndSlider();
      });
      canvas.addEventListener("mousemove", ({ offsetX, offsetY }) => {
        const region = yWithin(offsetY);
        if (region === "color-field") {
          const prevHueThumbState = this.hueThumbState;
          const color = this.baseColorFieldColor.hsv();
          const { dimensions: { colorField: { height, width }, thumb: { radius } } } = this;
          const centerX = Math.round(color.saturationv() / (HSV_LIMITS.s / width));
          const centerY = Math.round(height - color.value() / (HSV_LIMITS.v / height));
          const hoveringThumb = this.containsPoint(offsetX, offsetY, centerX, centerY, radius);
          let transitionedBetweenHoverAndIdle = false;
          if (prevHueThumbState === "idle" && hoveringThumb) {
            this.hueThumbState = "hover";
            transitionedBetweenHoverAndIdle = true;
          }
          else if (prevHueThumbState === "hover" && !hoveringThumb) {
            this.hueThumbState = "idle";
            transitionedBetweenHoverAndIdle = true;
          }
          if (this.hueThumbState !== "drag") {
            if (transitionedBetweenHoverAndIdle) {
              // refresh since we won't update color and thus no redraw
              this.drawColorFieldAndSlider();
            }
            return;
          }
          captureColor(offsetX, offsetY);
        }
        else if (region === "slider") {
          const { dimensions: { slider: { height: sliderHeight, width: sliderWidth }, thumb: { radius: thumbRadius } } } = this;
          const prevSliderThumbState = this.sliderThumbState;
          const sliderThumbColor = this.baseColorFieldColor.hsv().saturationv(100).value(100);
          const sliderThumbCenterX = Math.round(sliderThumbColor.hue() / (360 / sliderWidth));
          const sliderThumbCenterY = Math.round((sliderHeight + this.getSliderCapSpacing()) / 2);
          const hoveringSliderThumb = this.containsPoint(offsetX, offsetY, sliderThumbCenterX, sliderThumbCenterY, thumbRadius);
          let sliderThumbTransitionedBetweenHoverAndIdle = false;
          if (prevSliderThumbState === "idle" && hoveringSliderThumb) {
            this.sliderThumbState = "hover";
            sliderThumbTransitionedBetweenHoverAndIdle = true;
          }
          else if (prevSliderThumbState === "hover" && !hoveringSliderThumb) {
            this.sliderThumbState = "idle";
            sliderThumbTransitionedBetweenHoverAndIdle = true;
          }
          if (this.sliderThumbState !== "drag") {
            if (sliderThumbTransitionedBetweenHoverAndIdle) {
              // refresh since we won't update color and thus no redraw
              this.drawColorFieldAndSlider();
            }
            return;
          }
          captureSliderColor(offsetX);
        }
      });
      const captureSliderColor = (x) => {
        const { dimensions: { slider: { width } } } = this;
        const hue = (360 / width) * x;
        this.internalColorSet(this.baseColorFieldColor.hue(hue), false);
      };
    };
  }
  handleColorChange(color, oldColor) {
    this.drawColorFieldAndSlider();
    this.updateChannelsFromColor(color);
    this.previousColor = oldColor;
    if (this.colorUpdateLocked) {
      return;
    }
    this.value = this.toValue(color);
  }
  handleFormatChange(format) {
    this.mode = format === "auto" ? this.mode : format;
    this.value = this.toValue(this.color);
  }
  handleScaleChange(scale = "m") {
    this.updateDimensions(scale);
  }
  handleValueChange(value, oldValue) {
    const { allowEmpty, format } = this;
    const checkMode = !allowEmpty || value;
    let modeChanged = false;
    if (checkMode) {
      const nextMode = parseMode(value);
      if (!nextMode || (format !== "auto" && nextMode !== format)) {
        console.warn(`ignoring invalid color value: ${value}`);
        this.value = oldValue;
        return;
      }
      modeChanged = this.mode !== nextMode;
      this.mode = nextMode;
    }
    if (this.colorUpdateLocked) {
      this.calciteColorPickerChange.emit();
      return;
    }
    const color$1 = allowEmpty && !value ? null : color(value);
    const colorChanged = !colorEqual(color$1, this.color);
    if (modeChanged || colorChanged) {
      this.color = color$1;
      this.calciteColorPickerChange.emit();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Internal State/Props
  //
  //--------------------------------------------------------------------------
  get baseColorFieldColor() {
    return this.color || this.previousColor || DEFAULT_COLOR;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    focusElement(this.hexInputNode);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    const storageKey = `${DEFAULT_STORAGE_KEY_PREFIX}${this.storageId}`;
    if (this.storageId && localStorage.getItem(storageKey)) {
      this.savedColors = JSON.parse(localStorage.getItem(storageKey));
    }
    const { color, format, value } = this;
    const initialValueDefault = format !== "auto" ? this.toValue(color, format) : defaultValue;
    const initialValue = format !== "auto" && value === defaultValue ? initialValueDefault : value;
    this.handleValueChange(initialValue, initialValueDefault);
    this.updateDimensions(this.scale);
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  render() {
    const { allowEmpty, color, intlDeleteColor, el, hideHex, hideChannels, hideSaved, intlHex, intlSaved, intlSaveColor, savedColors, scale, theme } = this;
    const selectedColorInHex = color ? color.hex() : null;
    const hexInputScale = scale !== "s" ? "m" : scale;
    const { colorFieldAndSliderInteractive } = this;
    const elementDir = getElementDir(el);
    const noColor = color === null;
    return (h("div", { class: CSS.container }, h("canvas", { class: {
        [CSS.colorFieldAndSlider]: true,
        [CSS.colorFieldAndSliderInteractive]: colorFieldAndSliderInteractive
      }, onMouseEnter: this.handleColorFieldAndSliderMouseEnterOrMove, onMouseLeave: this.handleColorFieldAndSliderMouseLeave, onMouseMove: this.handleColorFieldAndSliderMouseEnterOrMove, ref: this.initColorFieldAndSlider }), hideHex && hideChannels ? null : (h("div", { class: { [CSS.controlSection]: true, [CSS.section]: true } }, hideHex ? null : (h("div", { class: CSS.hexOptions }, h("span", { class: {
        [CSS.header]: true,
        [CSS.headerHex]: true,
        [CSS.underlinedHeader]: true
      } }, intlHex), h("calcite-color-picker-hex-input", { allowEmpty: allowEmpty, class: CSS.control, dir: elementDir, onCalciteColorPickerHexInputChange: this.handleHexInputChange, ref: this.storeHexInputRef, scale: hexInputScale, theme: theme, value: selectedColorInHex }))), hideChannels ? null : (h("calcite-tabs", { class: {
        [CSS.colorModeContainer]: true,
        [CSS.splitSection]: true
      }, dir: elementDir }, h("calcite-tab-nav", { slot: "tab-nav" }, this.renderChannelsTabTitle("rgb"), this.renderChannelsTabTitle("hsv")), this.renderChannelsTab("rgb"), this.renderChannelsTab("hsv"))))), hideSaved ? null : (h("div", { class: { [CSS.savedColorsSection]: true, [CSS.section]: true } }, h("div", { class: CSS.header }, h("label", null, intlSaved), h("div", { class: CSS.savedColorsButtons }, h("calcite-button", { appearance: "transparent", "aria-label": intlDeleteColor, class: CSS.deleteColor, color: "neutral", disabled: noColor, iconStart: "minus", onClick: this.deleteColor, scale: scale, theme: theme }), h("calcite-button", { appearance: "transparent", "aria-label": intlSaveColor, class: CSS.saveColor, color: "neutral", disabled: noColor, iconStart: "plus", onClick: this.saveColor, scale: scale, theme: theme }))), savedColors.length > 0 ? (h("div", { class: CSS.savedColors }, [
      ...savedColors.map((color) => (h("calcite-color-picker-swatch", { active: selectedColorInHex === color, class: CSS.savedColor, color: color, key: color, onClick: this.handleSavedColorSelect, onKeyDown: this.handleSavedColorKeyDown, scale: scale, tabIndex: 0, theme: theme })))
    ])) : null))));
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  internalColorSet(color, skipEqual = true) {
    if (skipEqual && colorEqual(color, this.color)) {
      return;
    }
    this.colorUpdateLocked = true;
    this.color = color;
    this.value = this.toValue(color);
    this.colorUpdateLocked = false;
  }
  toValue(color, format = this.mode) {
    if (!color) {
      return null;
    }
    const hexMode = "hex";
    if (format.includes(hexMode)) {
      return normalizeHex(color.round()[hexMode]());
    }
    if (format.includes("-css")) {
      return color[format.replace("-css", "").replace("a", "")]().round().string();
    }
    const colorObject = color[format]().round().object();
    if (format.endsWith("a")) {
      // normalize alpha prop
      colorObject.a = colorObject.alpha;
      delete colorObject.alpha;
    }
    return colorObject;
  }
  getSliderCapSpacing() {
    const { dimensions: { slider: { height }, thumb: { radius } } } = this;
    return radius * 2 - height;
  }
  updateDimensions(scale = "m") {
    this.dimensions = DIMENSIONS[scale];
  }
  drawColorField() {
    const context = this.fieldAndSliderRenderingContext;
    const { dimensions: { colorField: { height, width } } } = this;
    context.fillStyle = this.baseColorFieldColor.hsv().saturationv(100).value(100).string();
    context.fillRect(0, 0, width, height);
    const whiteGradient = context.createLinearGradient(0, 0, width, 0);
    whiteGradient.addColorStop(0, "rgba(255,255,255,1)");
    whiteGradient.addColorStop(1, "rgba(255,255,255,0)");
    context.fillStyle = whiteGradient;
    context.fillRect(0, 0, width, height);
    const blackGradient = context.createLinearGradient(0, 0, 0, height);
    blackGradient.addColorStop(0, "rgba(0,0,0,0)");
    blackGradient.addColorStop(1, "rgba(0,0,0,1)");
    context.fillStyle = blackGradient;
    context.fillRect(0, 0, width, height);
    this.drawActiveColorFieldColor();
  }
  setCanvasContextSize(canvas, { height, width }) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    canvas.width = width * devicePixelRatio;
    canvas.height = height * devicePixelRatio;
    canvas.style.height = `${height}px`;
    canvas.style.width = `${width}px`;
    const context = canvas.getContext("2d");
    context.scale(devicePixelRatio, devicePixelRatio);
  }
  containsPoint(testPointX, testPointY, boundsX, boundsY, boundsRadius) {
    return (Math.pow(testPointX - boundsX, 2) + Math.pow(testPointY - boundsY, 2) <=
      Math.pow(boundsRadius, 2));
  }
  drawActiveColorFieldColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv();
    const { dimensions: { colorField: { height, width }, thumb: { radius } } } = this;
    const x = hsvColor.saturationv() / (HSV_LIMITS.s / width);
    const y = height - hsvColor.value() / (HSV_LIMITS.v / height);
    this.drawThumb(this.fieldAndSliderRenderingContext, radius, x, y, hsvColor, this.hueThumbState);
  }
  drawThumb(context, radius, x, y, color, state) {
    const startAngle = 0;
    const endAngle = 2 * Math.PI;
    context.beginPath();
    context.arc(x, y, radius, startAngle, endAngle);
    context.shadowBlur = state === "hover" ? 32 : 16;
    context.shadowColor = `rgba(0, 0, 0, ${state === "drag" ? 0.32 : 0.16})`;
    context.fillStyle = "#fff";
    context.fill();
    context.beginPath();
    context.arc(x, y, radius - 3, startAngle, endAngle);
    context.shadowBlur = 0;
    context.shadowColor = "transparent";
    context.fillStyle = color.rgb().string();
    context.fill();
  }
  drawActiveHueSliderColor() {
    const { color } = this;
    if (!color) {
      return;
    }
    const hsvColor = color.hsv().saturationv(100).value(100);
    const { dimensions: { colorField: { height: colorFieldHeight }, slider: { height, width }, thumb: { radius } } } = this;
    const x = hsvColor.hue() / (360 / width);
    const y = height / 2 + colorFieldHeight;
    this.drawThumb(this.fieldAndSliderRenderingContext, radius, x, y, hsvColor, this.sliderThumbState);
  }
  drawHueSlider() {
    const context = this.fieldAndSliderRenderingContext;
    const { dimensions: { colorField: { height: colorFieldHeight }, slider: { height, width } } } = this;
    const gradient = context.createLinearGradient(0, 0, width, 0);
    const hueSliderColorStopKeywords = ["red", "yellow", "lime", "cyan", "blue", "magenta", "red"];
    const offset = 1 / (hueSliderColorStopKeywords.length - 1);
    let currentOffset = 0;
    hueSliderColorStopKeywords.forEach((keyword) => {
      gradient.addColorStop(currentOffset, color(keyword).string());
      currentOffset += offset;
    });
    context.fillStyle = gradient;
    context.clearRect(0, colorFieldHeight, width, height + this.getSliderCapSpacing() * 2);
    context.fillRect(0, colorFieldHeight, width, height);
    this.drawActiveHueSliderColor();
  }
  updateColorFromChannels(channels) {
    this.internalColorSet(color(channels, this.channelMode));
  }
  updateChannelsFromColor(color) {
    this.channels = color ? this.toChannels(color) : [null, null, null];
  }
  toChannels(color) {
    const { channelMode } = this;
    return color[channelMode]()
      .array()
      .map((value) => Math.floor(value));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "color": ["handleColorChange"],
    "format": ["handleFormatChange"],
    "scale": ["handleScaleChange"],
    "value": ["handleValueChange"]
  }; }
};
CalciteColorPicker.style = calciteColorPickerCss;

export { CalciteColorPicker as calcite_color_picker };
