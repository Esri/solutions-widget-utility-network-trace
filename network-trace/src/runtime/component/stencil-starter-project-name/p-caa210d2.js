import{h as t}from"./p-551d452f.js";import{g as n}from"./p-f450c62e.js";function e({parent:t,expanded:n}){t.querySelectorAll("calcite-action").forEach((t=>t.textEnabled=n))}const o=({expanded:e,intlExpand:o,intlCollapse:l,toggleExpand:a,el:i,position:c,tooltipExpand:r})=>{const p="rtl"===n(i),s=e?l:o,d=["chevrons-left","chevrons-right"];p&&d.reverse();const f="end"===function(t,n){var e;return t||(null===(e=n.closest("calcite-shell-panel"))||void 0===e?void 0:e.position)||"start"}(c,i),x=t("calcite-action",{icon:e?f?d[1]:d[0]:f?d[0]:d[1],onClick:a,ref:t=>((t,n,e)=>(t&&(t.referenceElement=!e&&n),n))(r,t,e),text:s,textEnabled:e});return r?t("calcite-tooltip-manager",null,x):x};export{o as C,e as t}