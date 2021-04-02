import Color from 'color';

const CSS = {
  container: "container",
  controlSection: "control-section",
  hexOptions: "color-hex-options",
  section: "section",
  header: "header",
  control: "control",
  splitSection: "section--split",
  underlinedHeader: "header--underlined",
  colorModeContainer: "color-mode-container",
  colorMode: "color-mode",
  channels: "channels",
  channel: "channel",
  savedColors: "saved-colors",
  savedColorsSection: "saved-colors-section",
  saveColor: "save-color",
  deleteColor: "delete-color",
  savedColorsButtons: "saved-colors-buttons",
  headerHex: "header--hex",
  colorFieldAndSlider: "color-field-and-slider",
  colorFieldAndSliderInteractive: "color-field-and-slider--interactive",
  savedColor: "saved-color"
};
const DEFAULT_COLOR = Color("#007AC2");
const DEFAULT_STORAGE_KEY_PREFIX = "calcite-color-";
const RGB_LIMITS = {
  r: 255,
  g: 255,
  b: 255
};
const HSV_LIMITS = {
  h: 360,
  s: 100,
  v: 100
};
const TEXT = {
  b: "B",
  blue: "Blue",
  deleteColor: "Delete color",
  g: "G",
  green: "Green",
  h: "H",
  hsv: "HSV",
  hex: "Hex",
  hue: "Hue",
  r: "R",
  red: "Red",
  rgb: "RGB",
  s: "S",
  saturation: "Saturation",
  saveColor: "Save color",
  saved: "Saved",
  v: "V",
  value: "Value"
};
const DIMENSIONS = {
  s: {
    slider: {
      height: 10,
      width: 156
    },
    colorField: {
      height: 80,
      width: 156
    },
    thumb: {
      radius: 8
    }
  },
  m: {
    slider: {
      height: 14,
      width: 272
    },
    colorField: {
      height: 150,
      width: 272
    },
    thumb: {
      radius: 10
    }
  },
  l: {
    slider: {
      height: 16,
      width: 420
    },
    colorField: {
      height: 200,
      width: 420
    },
    thumb: {
      radius: 12
    }
  }
};

export { CSS as C, DEFAULT_COLOR as D, HSV_LIMITS as H, RGB_LIMITS as R, TEXT as T, DIMENSIONS as a, DEFAULT_STORAGE_KEY_PREFIX as b };
