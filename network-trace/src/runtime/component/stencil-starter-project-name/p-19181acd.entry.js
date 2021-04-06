import{r as t,c as i,h as s,g as e}from"./p-551d452f.js";import{f as o,g as l}from"./p-ddb29161.js";import{g as a}from"./p-4bacf9d8.js";import{n as h,C as n,p as r,c}from"./p-23057e5c.js";import{c as d}from"./p-5852966b.js";import{D as u,T as p,a as m,C as f,H as g,b as x,R as b}from"./p-9f9d8725.js";import{d as v,i as w}from"./p-7758183a.js";const C=h(u.hex()),y=class{constructor(e){var o,l,r,c;t(this,e),this.calciteColorPickerChange=i(this,"calciteColorPickerChange",7),this.allowEmpty=!1,this.appearance="default",this.color=u,this.format="auto",this.hideHex=!1,this.hideChannels=!1,this.hideSaved=!1,this.intlB=p.b,this.intlBlue=p.blue,this.intlDeleteColor=p.deleteColor,this.intlG=p.g,this.intlGreen=p.green,this.intlH=p.h,this.intlHsv=p.hsv,this.intlHex=p.hex,this.intlHue=p.hue,this.intlNoColor=p.noColor,this.intlR=p.r,this.intlRed=p.red,this.intlRgb=p.rgb,this.intlS=p.s,this.intlSaturation=p.saturation,this.intlSaveColor=p.saveColor,this.intlSaved=p.saved,this.intlV=p.v,this.intlValue=p.value,this.scale="m",this.theme="light",this.value=C,this.colorUpdateLocked=!1,this.hueThumbState="idle",this.mode=n.HEX,this.shiftKeyChannelAdjustment=0,this.sliderThumbState="idle",this.colorFieldAndSliderInteractive=!1,this.channelMode="rgb",this.channels=this.toChannels(u),this.dimensions=m.m,this.savedColors=[],this.handleTabActivate=t=>{this.channelMode=t.currentTarget.getAttribute("data-color-mode"),this.updateChannelsFromColor(this.color)},this.handleHexInputChange=t=>{t.stopPropagation();const{allowEmpty:i,color:s}=this,e=t.target.value;!i||e?e!==(s&&h(s.hex()))&&this.internalColorSet(d(e)):this.internalColorSet(null)},this.handleSavedColorSelect=t=>{this.internalColorSet(d(t.currentTarget.color))},this.handleChannelInput=t=>{const i=t.currentTarget,s=t.target,e=Number(s.getAttribute("data-channel-index")),o="rgb"===this.channelMode?b[Object.keys(b)[e]]:g[Object.keys(g)[e]];let l;if(this.allowEmpty&&!s.value)l="";else{const t=Number(s.value)+this.shiftKeyChannelAdjustment;l=Math.max(0,Math.min(t,o)).toString()}i.value=l,s.value=l},this.handleChannelKeyUpOrDown=t=>{const{shiftKey:i}=t,s=a(t.key);this.color||"ArrowUp"!==s&&"ArrowDown"!==s?this.shiftKeyChannelAdjustment="ArrowUp"===s&&i?9:"ArrowDown"===s&&i?-9:0:t.preventDefault()},this.handleChannelChange=t=>{const i=t.target,s=Number(i.getAttribute("data-channel-index")),e=[...this.channels];if(this.allowEmpty&&!i.value)return this.channels=[null,null,null],void this.internalColorSet(null);e[s]=Number(i.value),this.updateColorFromChannels(e)},this.handleSavedColorKeyDown=t=>{" "!==t.key&&"Enter"!==t.key||(t.preventDefault(),t.stopPropagation(),this.handleSavedColorSelect(t))},this.handleColorFieldAndSliderMouseLeave=()=>{this.colorFieldAndSliderInteractive=!1},this.handleColorFieldAndSliderMouseEnterOrMove=({offsetY:t})=>{const{dimensions:{colorField:{height:i},slider:{height:s}}}=this;this.colorFieldAndSliderInteractive=t<=i+s},this.storeHexInputRef=t=>{this.hexInputNode=t},this.renderChannelsTabTitle=t=>{const{channelMode:i,intlRgb:e,intlHsv:o}=this;return s("calcite-tab-title",{active:t===i,class:f.colorMode,"data-color-mode":t,onCalciteTabsActivate:this.handleTabActivate},"rgb"===t?e:o)},this.renderChannelsTab=t=>{const{channelMode:i,channels:e,intlB:o,intlBlue:l,intlG:a,intlGreen:h,intlH:n,intlHue:r,intlR:c,intlRed:d,intlS:u,intlSaturation:p,intlV:m,intlValue:g}=this,x="rgb"===t,b=x?[c,a,o]:[n,u,m],v=x?[d,h,l]:[r,p,g];return s("calcite-tab",{active:t===i,class:f.control},s("div",{class:f.channels},e.map(((t,i)=>this.renderChannel(t,i,b[i],v[i])))))},this.renderChannel=(t,i,e,o)=>s("calcite-input",{"aria-label":o,class:f.channel,"data-channel-index":i,numberButtonType:"none",onChange:this.handleChannelChange,onInput:this.handleChannelInput,onKeyDown:this.handleChannelKeyUpOrDown,onKeyUp:this.handleChannelKeyUpOrDown,prefixText:e,scale:"s",type:"number",value:null!==t?t.toString():""}),this.deleteColor=()=>{const t=this.color.hex();if(!(this.savedColors.indexOf(t)>-1))return;const i=this.savedColors.filter((i=>i!==t));this.savedColors=i,this.storageId&&localStorage.setItem(`${x}${this.storageId}`,JSON.stringify(i))},this.saveColor=()=>{const t=this.color.hex();if(this.savedColors.indexOf(t)>-1)return;const i=[...this.savedColors,t];this.savedColors=i,this.storageId&&localStorage.setItem(`${x}${this.storageId}`,JSON.stringify(i))},this.drawColorFieldAndSlider=(o=()=>{this.fieldAndSliderRenderingContext&&(this.drawColorField(),this.drawHueSlider())},r=!0,c=!0,w(l)&&(r="leading"in l?!!l.leading:r,c="trailing"in l?!!l.trailing:c),v(o,16,{leading:r,maxWait:16,trailing:c})),this.initColorFieldAndSlider=t=>{this.fieldAndSliderRenderingContext=t.getContext("2d"),this.setCanvasContextSize(t,{width:this.dimensions.colorField.width,height:this.dimensions.colorField.height+this.dimensions.slider.height+2*this.getSliderCapSpacing()}),this.drawColorFieldAndSlider();const i=t=>{const{dimensions:{colorField:{height:i},slider:{height:s}}}=this;return t<=i?"color-field":t<=i+s?"slider":"none"},s=(t,i)=>{const{dimensions:{colorField:{height:s,width:e}}}=this,o=Math.round(g.s/e*t),l=Math.round(g.v/s*(s-i));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(o).value(l))};t.addEventListener("mousedown",(({offsetX:t,offsetY:o})=>{const l=i(o);"color-field"===l?(this.hueThumbState="drag",s(t,o)):"slider"===l&&(this.sliderThumbState="drag",e(t))})),t.addEventListener("mouseout",(()=>{this.hueThumbState="idle",this.sliderThumbState="idle",this.drawColorFieldAndSlider()})),t.addEventListener("mouseup",(()=>{this.hueThumbState="hover",this.sliderThumbState="hover",this.drawColorFieldAndSlider()})),t.addEventListener("mousemove",(({offsetX:t,offsetY:o})=>{const l=i(o);if("color-field"===l){const i=this.hueThumbState,e=this.baseColorFieldColor.hsv(),{dimensions:{colorField:{height:l,width:a},thumb:{radius:h}}}=this,n=Math.round(e.saturationv()/(g.s/a)),r=Math.round(l-e.value()/(g.v/l)),c=this.containsPoint(t,o,n,r,h);let d=!1;if("idle"===i&&c?(this.hueThumbState="hover",d=!0):"hover"!==i||c||(this.hueThumbState="idle",d=!0),"drag"!==this.hueThumbState)return void(d&&this.drawColorFieldAndSlider());s(t,o)}else if("slider"===l){const{dimensions:{slider:{height:i,width:s},thumb:{radius:l}}}=this,a=this.sliderThumbState,h=this.baseColorFieldColor.hsv().saturationv(100).value(100),n=Math.round(h.hue()/(360/s)),r=Math.round((i+this.getSliderCapSpacing())/2),c=this.containsPoint(t,o,n,r,l);let d=!1;if("idle"===a&&c?(this.sliderThumbState="hover",d=!0):"hover"!==a||c||(this.sliderThumbState="idle",d=!0),"drag"!==this.sliderThumbState)return void(d&&this.drawColorFieldAndSlider());e(t)}}));const e=t=>{const{dimensions:{slider:{width:i}}}=this;this.internalColorSet(this.baseColorFieldColor.hue(360/i*t),!1)}}}handleColorChange(t,i){this.drawColorFieldAndSlider(),this.updateChannelsFromColor(t),this.previousColor=i,this.colorUpdateLocked||(this.value=this.toValue(t))}handleFormatChange(t){this.mode="auto"===t?this.mode:t,this.value=this.toValue(this.color)}handleScaleChange(t="m"){this.updateDimensions(t)}handleValueChange(t,i){const{allowEmpty:s,format:e}=this;let o=!1;if(!s||t){const s=r(t);if(!s||"auto"!==e&&s!==e)return console.warn("ignoring invalid color value: "+t),void(this.value=i);o=this.mode!==s,this.mode=s}if(this.colorUpdateLocked)return void this.calciteColorPickerChange.emit();const l=s&&!t?null:d(t),a=!c(l,this.color);(o||a)&&(this.color=l,this.calciteColorPickerChange.emit())}get baseColorFieldColor(){return this.color||this.previousColor||u}async setFocus(){o(this.hexInputNode)}componentWillLoad(){const t=`${x}${this.storageId}`;this.storageId&&localStorage.getItem(t)&&(this.savedColors=JSON.parse(localStorage.getItem(t)));const{color:i,format:s,value:e}=this,o="auto"!==s?this.toValue(i,s):C;this.handleValueChange("auto"!==s&&e===C?o:e,o),this.updateDimensions(this.scale)}render(){const{allowEmpty:t,color:i,intlDeleteColor:e,el:o,hideHex:a,hideChannels:h,hideSaved:n,intlHex:r,intlSaved:c,intlSaveColor:d,savedColors:u,scale:p,theme:m}=this,g=i?i.hex():null,x="s"!==p?"m":p,{colorFieldAndSliderInteractive:b}=this,v=l(o),w=null===i;return s("div",{class:f.container},s("canvas",{class:{[f.colorFieldAndSlider]:!0,[f.colorFieldAndSliderInteractive]:b},onMouseEnter:this.handleColorFieldAndSliderMouseEnterOrMove,onMouseLeave:this.handleColorFieldAndSliderMouseLeave,onMouseMove:this.handleColorFieldAndSliderMouseEnterOrMove,ref:this.initColorFieldAndSlider}),a&&h?null:s("div",{class:{[f.controlSection]:!0,[f.section]:!0}},a?null:s("div",{class:f.hexOptions},s("span",{class:{[f.header]:!0,[f.headerHex]:!0,[f.underlinedHeader]:!0}},r),s("calcite-color-picker-hex-input",{allowEmpty:t,class:f.control,dir:v,onCalciteColorPickerHexInputChange:this.handleHexInputChange,ref:this.storeHexInputRef,scale:x,theme:m,value:g})),h?null:s("calcite-tabs",{class:{[f.colorModeContainer]:!0,[f.splitSection]:!0},dir:v},s("calcite-tab-nav",{slot:"tab-nav"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv"))),n?null:s("div",{class:{[f.savedColorsSection]:!0,[f.section]:!0}},s("div",{class:f.header},s("label",null,c),s("div",{class:f.savedColorsButtons},s("calcite-button",{appearance:"transparent","aria-label":e,class:f.deleteColor,color:"neutral",disabled:w,iconStart:"minus",onClick:this.deleteColor,scale:p,theme:m}),s("calcite-button",{appearance:"transparent","aria-label":d,class:f.saveColor,color:"neutral",disabled:w,iconStart:"plus",onClick:this.saveColor,scale:p,theme:m}))),u.length>0?s("div",{class:f.savedColors},[...u.map((t=>s("calcite-color-picker-swatch",{active:g===t,class:f.savedColor,color:t,key:t,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:p,tabIndex:0,theme:m})))]):null))}internalColorSet(t,i=!0){i&&c(t,this.color)||(this.colorUpdateLocked=!0,this.color=t,this.value=this.toValue(t),this.colorUpdateLocked=!1)}toValue(t,i=this.mode){if(!t)return null;if(i.includes("hex"))return h(t.round().hex());if(i.includes("-css"))return t[i.replace("-css","").replace("a","")]().round().string();const s=t[i]().round().object();return i.endsWith("a")&&(s.a=s.alpha,delete s.alpha),s}getSliderCapSpacing(){const{dimensions:{slider:{height:t},thumb:{radius:i}}}=this;return 2*i-t}updateDimensions(t="m"){this.dimensions=m[t]}drawColorField(){const t=this.fieldAndSliderRenderingContext,{dimensions:{colorField:{height:i,width:s}}}=this;t.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).string(),t.fillRect(0,0,s,i);const e=t.createLinearGradient(0,0,s,0);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,s,i);const o=t.createLinearGradient(0,0,0,i);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),t.fillStyle=o,t.fillRect(0,0,s,i),this.drawActiveColorFieldColor()}setCanvasContextSize(t,{height:i,width:s}){const e=window.devicePixelRatio||1;t.width=s*e,t.height=i*e,t.style.height=i+"px",t.style.width=s+"px",t.getContext("2d").scale(e,e)}containsPoint(t,i,s,e,o){return Math.pow(t-s,2)+Math.pow(i-e,2)<=Math.pow(o,2)}drawActiveColorFieldColor(){const{color:t}=this;if(!t)return;const i=t.hsv(),{dimensions:{colorField:{height:s,width:e},thumb:{radius:o}}}=this,l=i.saturationv()/(g.s/e),a=s-i.value()/(g.v/s);this.drawThumb(this.fieldAndSliderRenderingContext,o,l,a,i,this.hueThumbState)}drawThumb(t,i,s,e,o,l){const a=2*Math.PI;t.beginPath(),t.arc(s,e,i,0,a),t.shadowBlur="hover"===l?32:16,t.shadowColor=`rgba(0, 0, 0, ${"drag"===l?.32:.16})`,t.fillStyle="#fff",t.fill(),t.beginPath(),t.arc(s,e,i-3,0,a),t.shadowBlur=0,t.shadowColor="transparent",t.fillStyle=o.rgb().string(),t.fill()}drawActiveHueSliderColor(){const{color:t}=this;if(!t)return;const i=t.hsv().saturationv(100).value(100),{dimensions:{colorField:{height:s},slider:{height:e,width:o},thumb:{radius:l}}}=this,a=i.hue()/(360/o);this.drawThumb(this.fieldAndSliderRenderingContext,l,a,e/2+s,i,this.sliderThumbState)}drawHueSlider(){const t=this.fieldAndSliderRenderingContext,{dimensions:{colorField:{height:i},slider:{height:s,width:e}}}=this,o=t.createLinearGradient(0,0,e,0),l=["red","yellow","lime","cyan","blue","magenta","red"],a=1/(l.length-1);let h=0;l.forEach((t=>{o.addColorStop(h,d(t).string()),h+=a})),t.fillStyle=o,t.clearRect(0,i,e,s+2*this.getSliderCapSpacing()),t.fillRect(0,i,e,s),this.drawActiveHueSliderColor()}updateColorFromChannels(t){this.internalColorSet(d(t,this.channelMode))}updateChannelsFromColor(t){this.channels=t?this.toChannels(t):[null,null,null]}toChannels(t){const{channelMode:i}=this;return t[i]().array().map((t=>Math.floor(t)))}get el(){return e(this)}static get watchers(){return{color:["handleColorChange"],format:["handleFormatChange"],scale:["handleScaleChange"],value:["handleValueChange"]}}};y.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host([scale=s]) .container{width:156px}:host([scale=s]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(20px, 1fr))}:host([scale=s]) .channels{flex-direction:column}:host([scale=s]) .channel{width:100%;margin-bottom:4px}:host([scale=s]) .channel:last-child{margin-bottom:0}:host([scale=m]) .container{width:272px}:host([scale=l][dir=rtl]) .control-section>:nth-child(2){margin-left:0;margin-right:12px}:host([scale=l]) .container{width:420px}:host([scale=l]) .color-field-and-slider{margin-bottom:-20px}:host([scale=l]) .section{padding:0 16px 16px}:host([scale=l]) .section:first-of-type{padding-top:16px}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(28px, 1fr));grid-gap:12px;padding-top:16px}:host([scale=l]) .control-section{flex-wrap:nowrap}:host([scale=l]) .control-section>:nth-child(2){margin-left:12px}:host([scale=l]) .color-hex-options{flex-shrink:1}:host([scale=l]) .color-mode-container{flex-shrink:3}:host([appearance=minimal]) .container{border:none}.container{display:inline-block;border:1px solid var(--calcite-ui-border-1);background-color:var(--calcite-ui-foreground-1)}.color-field-and-slider{margin-bottom:-16px}.color-field-and-slider--interactive{cursor:pointer}.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding:0 12px 12px}.section:first-of-type{padding-top:12px}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;color:var(--calcite-ui-text-3);font-weight:500;font-size:0.875rem;line-height:1.5}.header.header--underlined{border-bottom:1px solid var(--calcite-ui-border-1)}.header--hex{line-height:1.5;font-size:0.875rem;line-height:1.5;padding:12px 0 15px}.control{margin-top:8px}.channels{display:flex;justify-content:space-between}.channel{width:31%}.saved-colors{padding-top:12px;display:-ms-grid;display:grid;grid-template-columns:repeat(auto-fill, minmax(24px, 1fr));grid-gap:8px;width:100%}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.saved-color:hover{transition:outline-color 100ms ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}";export{y as calcite_color_picker}