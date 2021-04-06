import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-cbdbef9d.js';
import { g as getElementDir } from './dom-558ef00c.js';

const CSS = {
  page: "page",
  selected: "is-selected",
  previous: "previous",
  next: "next",
  disabled: "is-disabled",
  ellipsis: "ellipsis",
  ellipsisStart: "ellipsis--start",
  ellipsisEnd: "ellipsis--end"
};
const TEXT = {
  nextLabel: "next",
  previousLabel: "previous"
};

const calcitePaginationCss = "@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]){--calcite-pagination-spacing:0.25rem 0.5rem}:host([scale=s]) .previous,:host([scale=s]) .next,:host([scale=s]) .page{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]){--calcite-pagination-spacing:0.5rem 0.75rem}:host([scale=m]) .previous,:host([scale=m]) .next,:host([scale=m]) .page{font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]){--calcite-pagination-spacing:0.75rem 1rem}:host([scale=l]) .previous,:host([scale=l]) .next,:host([scale=l]) .page{font-size:var(--calcite-font-size-1);line-height:1.5rem}:host{display:flex;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}:host button{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}:host button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.previous,.next,.page{display:flex;align-items:center;background-color:transparent;border-style:none;--border-opacity:0;font-size:var(--calcite-font-size-0);line-height:1.25rem;color:var(--calcite-ui-text-3);cursor:pointer;font-family:inherit;border-top:2px solid transparent;border-bottom:2px solid transparent}.previous:hover,.next:hover,.page:hover{color:var(--calcite-ui-text-1);transition:all 150ms ease-in-out}.page:hover{border-bottom-color:var(--calcite-ui-border-2)}.page.is-selected{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);border-bottom-color:var(--calcite-ui-brand)}.previous,.next{padding:var(--calcite-pagination-spacing)}.previous:hover,.next:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-link)}.previous:active,.next:active{background-color:var(--calcite-ui-foreground-3)}.previous.is-disabled,.next.is-disabled{background-color:transparent;pointer-events:none}.previous.is-disabled>calcite-icon,.next.is-disabled>calcite-icon{opacity:0.5}.next{margin-right:0}.page,.ellipsis{padding:var(--calcite-pagination-spacing)}.ellipsis{display:flex;align-items:flex-end;color:var(--calcite-ui-text-3)}";

const maxPagesDisplayed = 5;
const CalcitePagination = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calcitePaginationUpdate = createEvent(this, "calcitePaginationUpdate", 7);
    this.calcitePaginationChange = createEvent(this, "calcitePaginationChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    /** number of items per page */
    this.num = 20;
    /** index of item that should begin the page */
    this.start = 1;
    /** total number of items */
    this.total = 0;
    /** title of the next button */
    this.textLabelNext = TEXT.nextLabel;
    /** title of the previous button */
    this.textLabelPrevious = TEXT.previousLabel;
    /** The scale of the pagination */
    this.scale = "m";
    this.previousClicked = () => {
      this.previousPage().then();
      this.emitUpdate();
    };
    this.nextClicked = () => {
      this.nextPage();
      this.emitUpdate();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /** Go to the next page of results */
  async nextPage() {
    this.start = Math.min(this.getLastStart(), this.start + this.num);
  }
  /** Go to the previous page of results */
  async previousPage() {
    this.start = Math.max(1, this.start - this.num);
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  getLastStart() {
    const { total, num } = this;
    const lastStart = total % num === 0 ? total - num : Math.floor(total / num) * num;
    return lastStart + 1;
  }
  showLeftEllipsis() {
    return Math.floor(this.start / this.num) > 3;
  }
  showRightEllipsis() {
    return (this.total - this.start) / this.num > 3;
  }
  emitUpdate() {
    const changePayload = {
      start: this.start,
      total: this.total,
      num: this.num
    };
    this.calcitePaginationChange.emit(changePayload);
    this.calcitePaginationUpdate.emit(changePayload);
  }
  //--------------------------------------------------------------------------
  //
  //  Render Methods
  //
  //--------------------------------------------------------------------------
  renderPages() {
    const lastStart = this.getLastStart();
    let end;
    let nextStart;
    // if we don't need ellipses render the whole set
    if (this.total / this.num <= maxPagesDisplayed) {
      nextStart = 1 + this.num;
      end = lastStart - this.num;
    }
    else {
      // if we're within max pages of page 1
      if (this.start / this.num < maxPagesDisplayed - 1) {
        nextStart = 1 + this.num;
        end = 1 + 4 * this.num;
      }
      else {
        // if we're within max pages of last page
        if (this.start + 3 * this.num >= this.total) {
          nextStart = lastStart - 4 * this.num;
          end = lastStart - this.num;
        }
        else {
          nextStart = this.start - this.num;
          end = this.start + this.num;
        }
      }
    }
    const pages = [];
    while (nextStart <= end) {
      pages.push(nextStart);
      nextStart = nextStart + this.num;
    }
    return pages.map((page) => this.renderPage(page));
  }
  renderPage(start) {
    const page = Math.floor(start / this.num) + (this.num === 1 ? 0 : 1);
    return (h("button", { class: {
        [CSS.page]: true,
        [CSS.selected]: start === this.start
      }, onClick: () => {
        this.start = start;
        this.emitUpdate();
      } }, page));
  }
  renderLeftEllipsis(iconScale) {
    if (this.total / this.num > maxPagesDisplayed && this.showLeftEllipsis()) {
      return (h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisStart}` }, h("calcite-icon", { icon: "ellipsis", scale: iconScale })));
    }
  }
  renderRightEllipsis(iconScale) {
    if (this.total / this.num > maxPagesDisplayed && this.showRightEllipsis()) {
      return (h("span", { class: `${CSS.ellipsis} ${CSS.ellipsisEnd}` }, h("calcite-icon", { icon: "ellipsis", scale: iconScale })));
    }
  }
  render() {
    const dir = getElementDir(this.el);
    const { total, num, start } = this;
    const iconScale = this.scale === "l" ? "m" : "s";
    const prevDisabled = num === 1 ? start <= num : start < num;
    const nextDisabled = num === 1 ? start + num > total : start + num > total;
    return (h(Host, { dir: dir }, h("button", { "aria-label": this.textLabelPrevious, class: {
        [CSS.previous]: true,
        [CSS.disabled]: prevDisabled
      }, disabled: prevDisabled, onClick: this.previousClicked }, h("calcite-icon", { dir: dir, flipRtl: true, icon: "chevronLeft", scale: iconScale })), total > num ? this.renderPage(1) : null, this.renderLeftEllipsis(iconScale), this.renderPages(), this.renderRightEllipsis(iconScale), this.renderPage(this.getLastStart()), h("button", { "aria-label": this.textLabelNext, class: {
        [CSS.next]: true,
        [CSS.disabled]: nextDisabled
      }, disabled: nextDisabled, onClick: this.nextClicked }, h("calcite-icon", { dir: dir, flipRtl: true, icon: "chevronRight", scale: iconScale }))));
  }
  get el() { return getElement(this); }
};
CalcitePagination.style = calcitePaginationCss;

export { CalcitePagination as calcite_pagination };