function r(r,t,n){return r(n={path:t,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}var t={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},n=r((function(r){var t=Array.prototype.concat,n=Array.prototype.slice,e=r.exports=function(r){for(var e,a=[],i=0,u=r.length;i<u;i++){var s=r[i];(e=s)&&"string"!=typeof e&&(e instanceof Array||Array.isArray(e)||e.length>=0&&(e.splice instanceof Function||Object.getOwnPropertyDescriptor(e,e.length-1)&&"String"!==e.constructor.name))?a=t.call(a,n.call(s)):a.push(s)}return a};e.wrap=function(r){return function(){return r(e(arguments))}}})),e=r((function(r){var e={};for(var a in t)t.hasOwnProperty(a)&&(e[t[a]]=a);var i=r.exports={to:{},get:{}};function u(r,t,n){return Math.min(Math.max(t,r),n)}function s(r){var t=r.toString(16).toUpperCase();return t.length<2?"0"+t:t}i.get=function(r){var t,n;switch(r.substring(0,3).toLowerCase()){case"hsl":t=i.get.hsl(r),n="hsl";break;case"hwb":t=i.get.hwb(r),n="hwb";break;default:t=i.get.rgb(r),n="rgb"}return t?{model:n,value:t}:null},i.get.rgb=function(r){if(!r)return null;var n,e,a,i=[0,0,0,1];if(n=r.match(/^#([a-f0-9]{6})([a-f0-9]{2})?$/i)){for(a=n[2],n=n[1],e=0;e<3;e++){var s=2*e;i[e]=parseInt(n.slice(s,s+2),16)}a&&(i[3]=parseInt(a,16)/255)}else if(n=r.match(/^#([a-f0-9]{3,4})$/i)){for(a=(n=n[1])[3],e=0;e<3;e++)i[e]=parseInt(n[e]+n[e],16);a&&(i[3]=parseInt(a+a,16)/255)}else if(n=r.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)){for(e=0;e<3;e++)i[e]=parseInt(n[e+1],0);n[4]&&(i[3]=parseFloat(n[4]))}else{if(!(n=r.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/)))return(n=r.match(/(\D+)/))?"transparent"===n[1]?[0,0,0,0]:(i=t[n[1]])?(i[3]=1,i):null:null;for(e=0;e<3;e++)i[e]=Math.round(2.55*parseFloat(n[e+1]));n[4]&&(i[3]=parseFloat(n[4]))}for(e=0;e<3;e++)i[e]=u(i[e],0,255);return i[3]=u(i[3],0,1),i},i.get.hsl=function(r){if(!r)return null;var t=r.match(/^hsla?\(\s*([+-]?(?:\d{0,3}\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var n=parseFloat(t[4]);return[(parseFloat(t[1])+360)%360,u(parseFloat(t[2]),0,100),u(parseFloat(t[3]),0,100),u(isNaN(n)?1:n,0,1)]}return null},i.get.hwb=function(r){if(!r)return null;var t=r.match(/^hwb\(\s*([+-]?\d{0,3}(?:\.\d+)?)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/);if(t){var n=parseFloat(t[4]);return[(parseFloat(t[1])%360+360)%360,u(parseFloat(t[2]),0,100),u(parseFloat(t[3]),0,100),u(isNaN(n)?1:n,0,1)]}return null},i.to.hex=function(){var r=n(arguments);return"#"+s(r[0])+s(r[1])+s(r[2])+(r[3]<1?s(Math.round(255*r[3])):"")},i.to.rgb=function(){var r=n(arguments);return r.length<4||1===r[3]?"rgb("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+")":"rgba("+Math.round(r[0])+", "+Math.round(r[1])+", "+Math.round(r[2])+", "+r[3]+")"},i.to.rgb.percent=function(){var r=n(arguments),t=Math.round(r[0]/255*100),e=Math.round(r[1]/255*100),a=Math.round(r[2]/255*100);return r.length<4||1===r[3]?"rgb("+t+"%, "+e+"%, "+a+"%)":"rgba("+t+"%, "+e+"%, "+a+"%, "+r[3]+")"},i.to.hsl=function(){var r=n(arguments);return r.length<4||1===r[3]?"hsl("+r[0]+", "+r[1]+"%, "+r[2]+"%)":"hsla("+r[0]+", "+r[1]+"%, "+r[2]+"%, "+r[3]+")"},i.to.hwb=function(){var r=n(arguments),t="";return r.length>=4&&1!==r[3]&&(t=", "+r[3]),"hwb("+r[0]+", "+r[1]+"%, "+r[2]+"%"+t+")"},i.to.keyword=function(r){return e[r.slice(0,3)]}})),a=r((function(r){var n={};for(var e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);var a=r.exports={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};for(var i in a)if(a.hasOwnProperty(i)){if(!("channels"in a[i]))throw new Error("missing channels property: "+i);if(!("labels"in a[i]))throw new Error("missing channel labels property: "+i);if(a[i].labels.length!==a[i].channels)throw new Error("channel and label counts mismatch: "+i);var u=a[i].channels,s=a[i].labels;delete a[i].channels,delete a[i].labels,Object.defineProperty(a[i],"channels",{value:u}),Object.defineProperty(a[i],"labels",{value:s})}a.rgb.hsl=function(r){var t,n,e=r[0]/255,a=r[1]/255,i=r[2]/255,u=Math.min(e,a,i),s=Math.max(e,a,i),o=s-u;return s===u?t=0:e===s?t=(a-i)/o:a===s?t=2+(i-e)/o:i===s&&(t=4+(e-a)/o),(t=Math.min(60*t,360))<0&&(t+=360),n=(u+s)/2,[t,100*(s===u?0:n<=.5?o/(s+u):o/(2-s-u)),100*n]},a.rgb.hsv=function(r){var t,n,e,a,i,u=r[0]/255,s=r[1]/255,o=r[2]/255,h=Math.max(u,s,o),l=h-Math.min(u,s,o),c=function(r){return(h-r)/6/l+.5};return 0===l?a=i=0:(i=l/h,t=c(u),n=c(s),e=c(o),u===h?a=e-n:s===h?a=1/3+t-e:o===h&&(a=2/3+n-t),a<0?a+=1:a>1&&(a-=1)),[360*a,100*i,100*h]},a.rgb.hwb=function(r){var t=r[0],n=r[1],e=r[2];return[a.rgb.hsl(r)[0],1/255*Math.min(t,Math.min(n,e))*100,100*(e=1-1/255*Math.max(t,Math.max(n,e)))]},a.rgb.cmyk=function(r){var t,n=r[0]/255,e=r[1]/255,a=r[2]/255;return[100*((1-n-(t=Math.min(1-n,1-e,1-a)))/(1-t)||0),100*((1-e-t)/(1-t)||0),100*((1-a-t)/(1-t)||0),100*t]},a.rgb.keyword=function(r){var e=n[r];if(e)return e;var a,i,u,s=1/0;for(var o in t)if(t.hasOwnProperty(o)){var h=(i=r,u=t[o],Math.pow(i[0]-u[0],2)+Math.pow(i[1]-u[1],2)+Math.pow(i[2]-u[2],2));h<s&&(s=h,a=o)}return a},a.keyword.rgb=function(r){return t[r]},a.rgb.xyz=function(r){var t=r[0]/255,n=r[1]/255,e=r[2]/255;return[100*(.4124*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)),100*(.2126*t+.7152*n+.0722*e),100*(.0193*t+.1192*n+.9505*e)]},a.rgb.lab=function(r){var t=a.rgb.xyz(r),n=t[0],e=t[1],i=t[2];return e/=100,i/=108.883,n=(n/=95.047)>.008856?Math.pow(n,1/3):7.787*n+16/116,[116*(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116)-16,500*(n-e),200*(e-(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116))]},a.hsl.rgb=function(r){var t,n,e,a,i,u=r[0]/360,s=r[1]/100,o=r[2]/100;if(0===s)return[i=255*o,i,i];t=2*o-(n=o<.5?o*(1+s):o+s-o*s),a=[0,0,0];for(var h=0;h<3;h++)(e=u+1/3*-(h-1))<0&&e++,e>1&&e--,a[h]=255*(i=6*e<1?t+6*(n-t)*e:2*e<1?n:3*e<2?t+(n-t)*(2/3-e)*6:t);return a},a.hsl.hsv=function(r){var t=r[0],n=r[1]/100,e=r[2]/100,a=n,i=Math.max(e,.01);return n*=(e*=2)<=1?e:2-e,a*=i<=1?i:2-i,[t,100*(0===e?2*a/(i+a):2*n/(e+n)),(e+n)/2*100]},a.hsv.rgb=function(r){var t=r[0]/60,n=r[1]/100,e=r[2]/100,a=Math.floor(t)%6,i=t-Math.floor(t),u=255*e*(1-n),s=255*e*(1-n*i),o=255*e*(1-n*(1-i));switch(e*=255,a){case 0:return[e,o,u];case 1:return[s,e,u];case 2:return[u,e,o];case 3:return[u,s,e];case 4:return[o,u,e];case 5:return[e,u,s]}},a.hsv.hsl=function(r){var t,n,e,a=r[0],i=r[1]/100,u=r[2]/100,s=Math.max(u,.01);return e=(2-i)*u,n=i*s,[a,100*(n=(n/=(t=(2-i)*s)<=1?t:2-t)||0),100*(e/=2)]},a.hwb.rgb=function(r){var t,n,e,a,i,u,s,o=r[0]/360,h=r[1]/100,l=r[2]/100,c=h+l;switch(c>1&&(h/=c,l/=c),e=6*o-(t=Math.floor(6*o)),0!=(1&t)&&(e=1-e),a=h+e*((n=1-l)-h),t){default:case 6:case 0:i=n,u=a,s=h;break;case 1:i=a,u=n,s=h;break;case 2:i=h,u=n,s=a;break;case 3:i=h,u=a,s=n;break;case 4:i=a,u=h,s=n;break;case 5:i=n,u=h,s=a}return[255*i,255*u,255*s]},a.cmyk.rgb=function(r){var t=r[1]/100,n=r[2]/100,e=r[3]/100;return[255*(1-Math.min(1,r[0]/100*(1-e)+e)),255*(1-Math.min(1,t*(1-e)+e)),255*(1-Math.min(1,n*(1-e)+e))]},a.xyz.rgb=function(r){var t,n,e,a=r[0]/100,i=r[1]/100,u=r[2]/100;return n=-.9689*a+1.8758*i+.0415*u,e=.0557*a+-.204*i+1.057*u,t=(t=3.2406*a+-1.5372*i+-.4986*u)>.0031308?1.055*Math.pow(t,1/2.4)-.055:12.92*t,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:12.92*n,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:12.92*e,[255*(t=Math.min(Math.max(0,t),1)),255*(n=Math.min(Math.max(0,n),1)),255*(e=Math.min(Math.max(0,e),1))]},a.xyz.lab=function(r){var t=r[0],n=r[1],e=r[2];return n/=100,e/=108.883,t=(t/=95.047)>.008856?Math.pow(t,1/3):7.787*t+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(t-n),200*(n-(e=e>.008856?Math.pow(e,1/3):7.787*e+16/116))]},a.lab.xyz=function(r){var t,n,e;t=r[1]/500+(n=(r[0]+16)/116),e=n-r[2]/200;var a=Math.pow(n,3),i=Math.pow(t,3),u=Math.pow(e,3);return n=a>.008856?a:(n-16/116)/7.787,t=i>.008856?i:(t-16/116)/7.787,e=u>.008856?u:(e-16/116)/7.787,[t*=95.047,n*=100,e*=108.883]},a.lab.lch=function(r){var t,n=r[0],e=r[1],a=r[2];return(t=360*Math.atan2(a,e)/2/Math.PI)<0&&(t+=360),[n,Math.sqrt(e*e+a*a),t]},a.lch.lab=function(r){var t,n=r[1];return t=r[2]/360*2*Math.PI,[r[0],n*Math.cos(t),n*Math.sin(t)]},a.rgb.ansi16=function(r){var t=r[0],n=r[1],e=r[2],i=1 in arguments?arguments[1]:a.rgb.hsv(r)[2];if(0===(i=Math.round(i/50)))return 30;var u=30+(Math.round(e/255)<<2|Math.round(n/255)<<1|Math.round(t/255));return 2===i&&(u+=60),u},a.hsv.ansi16=function(r){return a.rgb.ansi16(a.hsv.rgb(r),r[2])},a.rgb.ansi256=function(r){var t=r[0],n=r[1],e=r[2];return t===n&&n===e?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(e/255*5)},a.ansi16.rgb=function(r){var t=r%10;if(0===t||7===t)return r>50&&(t+=3.5),[t=t/10.5*255,t,t];var n=.5*(1+~~(r>50));return[(1&t)*n*255,(t>>1&1)*n*255,(t>>2&1)*n*255]},a.ansi256.rgb=function(r){if(r>=232){var t=10*(r-232)+8;return[t,t,t]}var n;return r-=16,[Math.floor(r/36)/5*255,Math.floor((n=r%36)/6)/5*255,n%6/5*255]},a.rgb.hex=function(r){var t=(((255&Math.round(r[0]))<<16)+((255&Math.round(r[1]))<<8)+(255&Math.round(r[2]))).toString(16).toUpperCase();return"000000".substring(t.length)+t},a.hex.rgb=function(r){var t=r.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];var n=t[0];3===t[0].length&&(n=n.split("").map((function(r){return r+r})).join(""));var e=parseInt(n,16);return[e>>16&255,e>>8&255,255&e]},a.rgb.hcg=function(r){var t,n=r[0]/255,e=r[1]/255,a=r[2]/255,i=Math.max(Math.max(n,e),a),u=Math.min(Math.min(n,e),a),s=i-u;return t=s<=0?0:i===n?(e-a)/s%6:i===e?2+(a-n)/s:4+(n-e)/s+4,t/=6,[360*(t%=1),100*s,100*(s<1?u/(1-s):0)]},a.hsl.hcg=function(r){var t,n=r[1]/100,e=r[2]/100,a=0;return(t=e<.5?2*n*e:2*n*(1-e))<1&&(a=(e-.5*t)/(1-t)),[r[0],100*t,100*a]},a.hsv.hcg=function(r){var t=r[2]/100,n=r[1]/100*t,e=0;return n<1&&(e=(t-n)/(1-n)),[r[0],100*n,100*e]},a.hcg.rgb=function(r){var t=r[1]/100,n=r[2]/100;if(0===t)return[255*n,255*n,255*n];var e,a=[0,0,0],i=r[0]/360%1*6,u=i%1,s=1-u;switch(Math.floor(i)){case 0:a[0]=1,a[1]=u,a[2]=0;break;case 1:a[0]=s,a[1]=1,a[2]=0;break;case 2:a[0]=0,a[1]=1,a[2]=u;break;case 3:a[0]=0,a[1]=s,a[2]=1;break;case 4:a[0]=u,a[1]=0,a[2]=1;break;default:a[0]=1,a[1]=0,a[2]=s}return[255*(t*a[0]+(e=(1-t)*n)),255*(t*a[1]+e),255*(t*a[2]+e)]},a.hcg.hsv=function(r){var t=r[1]/100,n=t+r[2]/100*(1-t),e=0;return n>0&&(e=t/n),[r[0],100*e,100*n]},a.hcg.hsl=function(r){var t=r[1]/100,n=r[2]/100*(1-t)+.5*t,e=0;return n>0&&n<.5?e=t/(2*n):n>=.5&&n<1&&(e=t/(2*(1-n))),[r[0],100*e,100*n]},a.hcg.hwb=function(r){var t=r[1]/100,n=t+r[2]/100*(1-t);return[r[0],100*(n-t),100*(1-n)]},a.hwb.hcg=function(r){var t=1-r[2]/100,n=t-r[1]/100,e=0;return n<1&&(e=(t-n)/(1-n)),[r[0],100*n,100*e]},a.apple.rgb=function(r){return[r[0]/65535*255,r[1]/65535*255,r[2]/65535*255]},a.rgb.apple=function(r){return[r[0]/255*65535,r[1]/255*65535,r[2]/255*65535]},a.gray.rgb=function(r){return[r[0]/100*255,r[0]/100*255,r[0]/100*255]},a.gray.hsl=a.gray.hsv=function(r){return[0,0,r[0]]},a.gray.hwb=function(r){return[0,100,r[0]]},a.gray.cmyk=function(r){return[0,0,0,r[0]]},a.gray.lab=function(r){return[r[0],0,0]},a.gray.hex=function(r){var t=255&Math.round(r[0]/100*255),n=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(n.length)+n},a.rgb.gray=function(r){return[(r[0]+r[1]+r[2])/3/255*100]}}));function i(r,t){return function(n){return t(r(n))}}function u(r,t){for(var n=[t[r].parent,r],e=a[t[r].parent][r],u=t[r].parent;t[u].parent;)n.unshift(t[u].parent),e=i(a[t[u].parent][u],e),u=t[u].parent;return e.conversion=n,e}var s={};Object.keys(a).forEach((function(r){s[r]={},Object.defineProperty(s[r],"channels",{value:a[r].channels}),Object.defineProperty(s[r],"labels",{value:a[r].labels});var t=function(r){for(var t=function(r){var t=function(){for(var r={},t=Object.keys(a),n=t.length,e=0;e<n;e++)r[t[e]]={distance:-1,parent:null};return r}(),n=[r];for(t[r].distance=0;n.length;)for(var e=n.pop(),i=Object.keys(a[e]),u=i.length,s=0;s<u;s++){var o=i[s],h=t[o];-1===h.distance&&(h.distance=t[e].distance+1,h.parent=e,n.unshift(o))}return t}(r),n={},e=Object.keys(t),i=e.length,s=0;s<i;s++){var o=e[s];null!==t[o].parent&&(n[o]=u(o,t))}return n}(r);Object.keys(t).forEach((function(n){var e=t[n];s[r][n]=function(r){var t=function(t){if(null==t)return t;arguments.length>1&&(t=Array.prototype.slice.call(arguments));var n=r(t);if("object"==typeof n)for(var e=n.length,a=0;a<e;a++)n[a]=Math.round(n[a]);return n};return"conversion"in r&&(t.conversion=r.conversion),t}(e),s[r][n].raw=function(r){var t=function(t){return null==t?t:(arguments.length>1&&(t=Array.prototype.slice.call(arguments)),r(t))};return"conversion"in r&&(t.conversion=r.conversion),t}(e)}))}));var o=s,h=[].slice,l=["keyword","gray","hex"],c={};Object.keys(o).forEach((function(r){c[h.call(o[r].labels).sort().join("")]=r}));var f={};function v(r,t){if(!(this instanceof v))return new v(r,t);if(t&&t in l&&(t=null),t&&!(t in o))throw new Error("Unknown model: "+t);var n,a;if(null==r)this.model="rgb",this.color=[0,0,0],this.valpha=1;else if(r instanceof v)this.model=r.model,this.color=r.color.slice(),this.valpha=r.valpha;else if("string"==typeof r){var i=e.get(r);if(null===i)throw new Error("Unable to parse color from string: "+r);this.model=i.model,this.color=i.value.slice(0,a=o[this.model].channels),this.valpha="number"==typeof i.value[a]?i.value[a]:1}else if(r.length){this.model=t||"rgb";var u=h.call(r,0,a=o[this.model].channels);this.color=M(u,a),this.valpha="number"==typeof r[a]?r[a]:1}else if("number"==typeof r)r&=16777215,this.model="rgb",this.color=[r>>16&255,r>>8&255,255&r],this.valpha=1;else{this.valpha=1;var s=Object.keys(r);"alpha"in r&&(s.splice(s.indexOf("alpha"),1),this.valpha="number"==typeof r.alpha?r.alpha:0);var b=s.sort().join("");if(!(b in c))throw new Error("Unable to parse color from object: "+JSON.stringify(r));this.model=c[b];var g=o[this.model].labels,d=[];for(n=0;n<g.length;n++)d.push(r[g[n]]);this.color=M(d)}if(f[this.model])for(a=o[this.model].channels,n=0;n<a;n++){var y=f[this.model][n];y&&(this.color[n]=y(this.color[n]))}this.valpha=Math.max(0,Math.min(1,this.valpha)),Object.freeze&&Object.freeze(this)}function b(r,t,n){return(r=Array.isArray(r)?r:[r]).forEach((function(r){(f[r]||(f[r]=[]))[t]=n})),r=r[0],function(e){var a;return arguments.length?(n&&(e=n(e)),(a=this[r]()).color[t]=e,a):(a=this[r]().color[t],n&&(a=n(a)),a)}}function g(r){return function(t){return Math.max(0,Math.min(r,t))}}function d(r){return Array.isArray(r)?r:[r]}function M(r,t){for(var n=0;n<t;n++)"number"!=typeof r[n]&&(r[n]=0);return r}v.prototype={toString:function(){return this.string()},toJSON:function(){return this[this.model]()},string:function(r){var t=this.model in e.to?this:this.rgb(),n=1===(t=t.round("number"==typeof r?r:1)).valpha?t.color:t.color.concat(this.valpha);return e.to[t.model](n)},percentString:function(r){var t=this.rgb().round("number"==typeof r?r:1),n=1===t.valpha?t.color:t.color.concat(this.valpha);return e.to.rgb.percent(n)},array:function(){return 1===this.valpha?this.color.slice():this.color.concat(this.valpha)},object:function(){for(var r={},t=o[this.model].channels,n=o[this.model].labels,e=0;e<t;e++)r[n[e]]=this.color[e];return 1!==this.valpha&&(r.alpha=this.valpha),r},unitArray:function(){var r=this.rgb().color;return r[0]/=255,r[1]/=255,r[2]/=255,1!==this.valpha&&r.push(this.valpha),r},unitObject:function(){var r=this.rgb().object();return r.r/=255,r.g/=255,r.b/=255,1!==this.valpha&&(r.alpha=this.valpha),r},round:function(r){return r=Math.max(r||0,0),new v(this.color.map(function(r){return function(t){return function(r,t){return Number(r.toFixed(t))}(t,r)}}(r)).concat(this.valpha),this.model)},alpha:function(r){return arguments.length?new v(this.color.concat(Math.max(0,Math.min(1,r))),this.model):this.valpha},red:b("rgb",0,g(255)),green:b("rgb",1,g(255)),blue:b("rgb",2,g(255)),hue:b(["hsl","hsv","hsl","hwb","hcg"],0,(function(r){return(r%360+360)%360})),saturationl:b("hsl",1,g(100)),lightness:b("hsl",2,g(100)),saturationv:b("hsv",1,g(100)),value:b("hsv",2,g(100)),chroma:b("hcg",1,g(100)),gray:b("hcg",2,g(100)),white:b("hwb",1,g(100)),wblack:b("hwb",2,g(100)),cyan:b("cmyk",0,g(100)),magenta:b("cmyk",1,g(100)),yellow:b("cmyk",2,g(100)),black:b("cmyk",3,g(100)),x:b("xyz",0,g(100)),y:b("xyz",1,g(100)),z:b("xyz",2,g(100)),l:b("lab",0,g(100)),a:b("lab",1),b:b("lab",2),keyword:function(r){return arguments.length?new v(r):o[this.model].keyword(this.color)},hex:function(r){return arguments.length?new v(r):e.to.hex(this.rgb().round().color)},rgbNumber:function(){var r=this.rgb().color;return(255&r[0])<<16|(255&r[1])<<8|255&r[2]},luminosity:function(){for(var r=this.rgb().color,t=[],n=0;n<r.length;n++){var e=r[n]/255;t[n]=e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return.2126*t[0]+.7152*t[1]+.0722*t[2]},contrast:function(r){var t=this.luminosity(),n=r.luminosity();return t>n?(t+.05)/(n+.05):(n+.05)/(t+.05)},level:function(r){var t=this.contrast(r);return t>=7.1?"AAA":t>=4.5?"AA":""},isDark:function(){var r=this.rgb().color;return(299*r[0]+587*r[1]+114*r[2])/1e3<128},isLight:function(){return!this.isDark()},negate:function(){for(var r=this.rgb(),t=0;t<3;t++)r.color[t]=255-r.color[t];return r},lighten:function(r){var t=this.hsl();return t.color[2]+=t.color[2]*r,t},darken:function(r){var t=this.hsl();return t.color[2]-=t.color[2]*r,t},saturate:function(r){var t=this.hsl();return t.color[1]+=t.color[1]*r,t},desaturate:function(r){var t=this.hsl();return t.color[1]-=t.color[1]*r,t},whiten:function(r){var t=this.hwb();return t.color[1]+=t.color[1]*r,t},blacken:function(r){var t=this.hwb();return t.color[2]+=t.color[2]*r,t},grayscale:function(){var r=this.rgb().color,t=.3*r[0]+.59*r[1]+.11*r[2];return v.rgb(t,t,t)},fade:function(r){return this.alpha(this.valpha-this.valpha*r)},opaquer:function(r){return this.alpha(this.valpha+this.valpha*r)},rotate:function(r){var t=this.hsl(),n=t.color[0];return t.color[0]=n=(n=(n+r)%360)<0?360+n:n,t},mix:function(r,t){if(!r||!r.rgb)throw new Error('Argument to "mix" was not a Color instance, but rather an instance of '+typeof r);var n=r.rgb(),e=this.rgb(),a=void 0===t?.5:t,i=2*a-1,u=n.alpha()-e.alpha(),s=((i*u==-1?i:(i+u)/(1+i*u))+1)/2,o=1-s;return v.rgb(s*n.red()+o*e.red(),s*n.green()+o*e.green(),s*n.blue()+o*e.blue(),n.alpha()*a+e.alpha()*(1-a))}},Object.keys(o).forEach((function(r){if(-1===l.indexOf(r)){var t=o[r].channels;v.prototype[r]=function(){if(this.model===r)return new v(this);if(arguments.length)return new v(arguments,r);var n="number"==typeof arguments[t]?t:this.valpha;return new v(d(o[this.model][r].raw(this.color)).concat(n),r)},v[r]=function(n){return"number"==typeof n&&(n=M(h.call(arguments),t)),new v(n,r)}}}));var y=v;export{y as c}