'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-adeb0063.js');
require('./dom-c66de328.js');
require('./debounce-28722521.js');
const resources = require('./resources-1447adb6.js');
require('./array-3f4409d6.js');
const sharedListRender = require('./shared-list-render-df2ec5b8.js');

const calcitePickListCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{align-items:stretch;background-color:transparent;display:flex;flex:1 0 auto;flex-flow:column;padding-bottom:var(--calcite-cap-spacing);position:relative}header{background-color:var(--calcite-ui-foreground-1);display:flex;justify-content:flex-end;align-items:stretch;margin-bottom:var(--calcite-spacing-quarter);box-shadow:0 1px 0 var(--calcite-ui-border-3)}header.sticky{position:sticky;top:0;z-index:1}calcite-filter{margin-bottom:1px}calcite-scrim{display:flex;flex:0 0 auto;flex-flow:column;pointer-events:none}:host([loading][disabled]){min-height:2rem}";

const CalcitePickList = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteListChange = index.createEvent(this, "calciteListChange", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * When true, an input appears at the top of the list that can be used by end users to filter items in the list.
     */
    this.filterEnabled = false;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * Multiple works similar to standard radio buttons and checkboxes.
     * When true, a user can select multiple items at a time.
     * When false, only a single item can be selected at a time
     * and selecting a new item will deselect any other selected items.
     */
    this.multiple = false;
    // --------------------------------------------------------------------------
    //
    //  Private Properties
    //
    // --------------------------------------------------------------------------
    this.selectedValues = new Map();
    this.dataForFilter = [];
    this.lastSelectedItem = null;
    this.observer = new MutationObserver(sharedListRender.mutationObserverCallback.bind(this));
    this.deselectSiblingItems = sharedListRender.deselectSiblingItems.bind(this);
    this.selectSiblings = sharedListRender.selectSiblings.bind(this);
    this.handleFilter = sharedListRender.handleFilter.bind(this);
    this.getItemData = sharedListRender.getItemData.bind(this);
    this.keyDownHandler = sharedListRender.keyDownHandler.bind(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    sharedListRender.initialize.call(this);
    sharedListRender.initializeObserver.call(this);
  }
  disconnectedCallback() {
    sharedListRender.cleanUpObserver.call(this);
  }
  calciteListItemRemoveHandler(event) {
    sharedListRender.removeItem.call(this, event);
  }
  calciteListItemChangeHandler(event) {
    sharedListRender.calciteListItemChangeHandler.call(this, event);
  }
  calciteListItemPropsChangeHandler(event) {
    event.stopPropagation();
    this.setUpFilter();
  }
  calciteListItemValueChangeHandler(event) {
    sharedListRender.calciteListItemValueChangeHandler.call(this, event);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setUpItems() {
    sharedListRender.setUpItems.call(this, "calcite-pick-list-item");
  }
  setUpFilter() {
    if (this.filterEnabled) {
      this.dataForFilter = this.getItemData();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  async getSelectedItems() {
    return this.selectedValues;
  }
  async setFocus() {
    return sharedListRender.setFocus.call(this);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  getIconType() {
    return this.multiple ? resources.ICON_TYPES.square : resources.ICON_TYPES.circle;
  }
  render() {
    return index.h(sharedListRender.List, { onKeyDown: this.keyDownHandler, props: this });
  }
  get el() { return index.getElement(this); }
};
CalcitePickList.style = calcitePickListCss;

exports.calcite_pick_list = CalcitePickList;