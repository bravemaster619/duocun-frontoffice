(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+j1y":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const r=`${t*e/n-t}ms`,o=2*Math.PI*e/n;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const r=e/n,o=`${t*r-t}ms`,i=2*Math.PI*r;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})}}},"8Nb5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{transform(t,e="$"){return"object"==typeof t?this.transform(t.price,e):(((t=parseFloat(t))<0||isNaN(t))&&(t=0),`${t.toFixed(2)} ${e}`)}}},"8jRI":function(t,e,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function i(t,e){try{return decodeURIComponent(t.join(""))}catch(o){}if(1===t.length)return t;var n=t.slice(0,e=e||1),r=t.slice(e);return Array.prototype.concat.call([],i(n),i(r))}function s(t){try{return decodeURIComponent(t)}catch(o){for(var e=t.match(r),n=1;n<e.length;n++)e=(t=i(e,n).join("")).match(r);return t}}t.exports=function(t){if("string"!=typeof t)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof t+"`");try{return t=t.replace(/\+/g," "),decodeURIComponent(t)}catch(e){return function(t){for(var n={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=o.exec(t);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(e){var i=s(r[0]);i!==r[0]&&(n[r[0]]=i)}r=o.exec(t)}n["%C2"]="\ufffd";for(var a=Object.keys(n),c=0;c<a.length;c++){var u=a[c];t=t.replace(new RegExp(u,"g"),n[u])}return t}(t)}}},"8yz6":function(t,e,n){"use strict";t.exports=(t,e)=>{if("string"!=typeof t||"string"!=typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[t];const n=t.indexOf(e);return-1===n?[t]:[t.slice(0,n),t.slice(n+e.length)]}},Dfpv:function(t,e,n){"use strict";var r=n("8Y7J"),o=n("MKJQ"),i=n("sZkV"),s=n("SVse");n("H5eE"),n("cUpR"),n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l}));var a=r.nb({encapsulation:0,styles:[["ion-img[_ngcontent-%COMP%]:nth-of-type(2){position:absolute;left:0;top:0;z-index:999}"]],data:{}});function c(t){return r.Jb(0,[(t()(),r.pb(0,0,null,null,1,"ion-img",[],[[1,"style",2]],[[null,"ionError"],[null,"ionImgDidLoad"]],(function(t,e,n){var r=!0,o=t.component;return"ionError"===e&&(r=!1!==o.ionError()&&r),"ionImgDidLoad"===e&&(r=!1!==o.ionImgDidLoad()&&r),r}),o.R,o.m)),r.ob(1,49152,null,0,i.B,[r.h,r.k,r.x],{alt:[0,"alt"],src:[1,"src"]},null)],(function(t,e){var n=e.component;t(e,1,0,n.alt,n.src)}),(function(t,e){t(e,0,0,e.component.safeStyle)}))}function u(t){return r.Jb(0,[(t()(),r.pb(0,0,null,null,1,"ion-img",[],[[1,"style",2]],null,null,o.R,o.m)),r.ob(1,49152,null,0,i.B,[r.h,r.k,r.x],{alt:[0,"alt"],src:[1,"src"]},null)],(function(t,e){var n=e.component;t(e,1,0,n.alt,n.placeholderSrc)}),(function(t,e){t(e,0,0,e.component.safeStyle)}))}function l(t){return r.Jb(0,[(t()(),r.eb(16777216,null,null,1,null,c)),r.ob(1,16384,null,0,s.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null),(t()(),r.eb(16777216,null,null,1,null,u)),r.ob(3,16384,null,0,s.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null)],(function(t,e){var n=e.component;t(e,1,0,!n.error),t(e,3,0,n.loading)}),null)}},H5eE:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t){this.sanitizer=t}ngOnInit(){this.loading=!0,this.placeholderSrc="assets/img/no-image.png",this.error=!1,this.safeStyle=this.sanitizer.bypassSecurityTrustStyle(this.style)}ionImgDidLoad(){this.loading=!1}ionError(){this.error=!0}}},KlQj:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{}},KwJk:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a}));const r=(t,e)=>null!==e.closest(t),o=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},s=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n)=>{if(null!=t&&"#"!==t[0]&&!s.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n)}return!1}},LeA6:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t,e){this.translator=t,this.el=e}ngOnChanges(){this.translator.onLangChange.subscribe(t=>{let e=this.getValueFromData(this.data,this.key,t.lang);this.setText(e)});let t=this.getValueFromData(this.data,this.key,this.translator.currentLang);this.setText(t)}getValueFromData(t,e,n){let r="";try{switch(n){case"zh":r=this.data[this.key];break;case"en":if(this.data[this.key+"EN"]){r=this.data[this.key+"EN"];break}default:r=this.data[this.key]}}catch(o){this.fallback&&this.translator.get(this.fallback).subscribe(t=>{r=t})}return r}setText(t){this.el.nativeElement.innerText=t}}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));const r=async(t,e,n,r,o)=>{if(t)return t.attachViewToDom(e,n,o,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return r&&r.forEach(t=>i.classList.add(t)),o&&Object.assign(i,o),e.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},o=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},PLN7:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("mrSG"),o=n("IheW"),i=n("cr+I"),s=n("bZGi"),a=n("25C3"),c=n("8Y7J");const u=a.c;let l=(()=>{class t{constructor(t,e){this.http=t,this.auth=e}v1(){return new f(u.API_URL,this.http,this.auth)}v2(){return new f(u.API_V2_URL,this.http,this.auth)}}return t.ngInjectableDef=c.Nb({factory:function(){return new t(c.Ob(o.c),c.Ob(s.a))},token:t,providedIn:"root"}),t})();class f{constructor(t,e,n){this.apiHost=t,this.http=e,this.auth=n}buildUrl(t,e=null){return t=this.apiHost+(t.startsWith("/")?t:`/${t}`),e?"string"==typeof e?t+e:"object"==typeof e?`${t}?${i.stringify(e)}`:t:t}buildAuthHeader(){return r.a(this,void 0,void 0,(function*(){const t=yield this.auth.getToken();return t?{headers:(new o.g).set("Authorization",`Bearer ${t}`)}:{}}))}get(t,e=null,n=!0,o=!0){return r.a(this,void 0,void 0,(function*(){if(o&&(t=this.buildUrl(t,e)),n){const e=yield this.buildAuthHeader();return this.http.get(t,e)}return this.http.get(t)}))}post(t,e=null,n=!0,o=!0){return r.a(this,void 0,void 0,(function*(){if(o&&(t=this.buildUrl(t)),n){const n=yield this.buildAuthHeader();return this.http.post(t,e,n)}return this.http.post(t,e)}))}put(t,e=null,n=!0,o=!0){return r.a(this,void 0,void 0,(function*(){if(o&&(t=this.buildUrl(t)),n){const n=yield this.buildAuthHeader();return this.http.put(t,e,n)}return this.http.put(t,e)}))}delete(t,e=null,n=!0,o=!0){return r.a(this,void 0,void 0,(function*(){if(o&&(t=this.buildUrl(t,e)),n){const e=yield this.buildAuthHeader();return this.http.delete(t,e)}return this.http.delete(t)}))}}},Uwmq:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r=t=>{try{if("string"!=typeof t||""===t)return t;const e=document.createDocumentFragment(),n=document.createElement("div");e.appendChild(n),n.innerHTML=t,a.forEach(t=>{const n=e.querySelectorAll(t);for(let r=n.length-1;r>=0;r--){const t=n[r];t.parentNode?t.parentNode.removeChild(t):e.removeChild(t);const s=i(t);for(let e=0;e<s.length;e++)o(s[e])}});const r=i(e);for(let t=0;t<r.length;t++)o(r[t]);const s=document.createElement("div");s.appendChild(e);const c=s.querySelector("div");return null!==c?c.innerHTML:s.innerHTML}catch(e){return console.error(e),""}},o=t=>{if(t.nodeType&&1!==t.nodeType)return;for(let n=t.attributes.length-1;n>=0;n--){const e=t.attributes.item(n),r=e.name;if(!s.includes(r.toLowerCase())){t.removeAttribute(r);continue}const o=e.value;null!=o&&o.toLowerCase().includes("javascript:")&&t.removeAttribute(r)}const e=i(t);for(let n=0;n<e.length;n++)o(e[n])},i=t=>null!=t.children?t.children:t.childNodes,s=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},ZFOp:function(t,e,n){"use strict";t.exports=t=>encodeURIComponent(t).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`)},bZGi:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("mrSG"),o=n("2Vo4"),i=n("25C3"),s=n("8Y7J"),a=n("xgBC"),c=n("sZkV");let u=(()=>{class t{constructor(t,e){this.storage=t,this.platform=e,this.authenticationState=new o.a(!1),this.platform.ready().then(()=>{this.checkToken()})}checkToken(){this.storage.get(i.a).then(t=>{t&&this.authenticationState.next(!0)})}login(t){return this.storage.set(i.a,t).then(()=>{this.authenticationState.next(!0)})}logout(){return this.storage.remove(i.a).then(()=>{this.authenticationState.next(!1)})}isAuthenticated(){return this.authenticationState.value}getToken(){return r.a(this,void 0,void 0,(function*(){return new Promise(t=>{this.storage.get(i.a).then(e=>{t(e)}).catch(()=>{t("")})})}))}}return t.ngInjectableDef=s.Nb({factory:function(){return new t(s.Ob(a.b),s.Ob(c.Eb))},token:t,providedIn:"root"}),t})()},"cr+I":function(t,e,n){"use strict";const r=n("ZFOp"),o=n("8jRI"),i=n("8yz6");function s(t){if("string"!=typeof t||1!==t.length)throw new TypeError("arrayFormatSeparator must be single character string")}function a(t,e){return e.encode?e.strict?r(t):encodeURIComponent(t):t}function c(t,e){return e.decode?o(t):t}function u(t){const e=t.indexOf("#");return-1!==e&&(t=t.slice(0,e)),t}function l(t){const e=(t=u(t)).indexOf("?");return-1===e?"":t.slice(e+1)}function f(t,e){return e.parseNumbers&&!Number.isNaN(Number(t))&&"string"==typeof t&&""!==t.trim()?t=Number(t):!e.parseBooleans||null===t||"true"!==t.toLowerCase()&&"false"!==t.toLowerCase()||(t="true"===t.toLowerCase()),t}function d(t,e){s((e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},e)).arrayFormatSeparator);const n=function(t){let e;switch(t.arrayFormat){case"index":return(t,n,r)=>{e=/\[(\d*)\]$/.exec(t),t=t.replace(/\[\d*\]$/,""),e?(void 0===r[t]&&(r[t]={}),r[t][e[1]]=n):r[t]=n};case"bracket":return(t,n,r)=>{e=/(\[\])$/.exec(t),r[t=t.replace(/\[\]$/,"")]=e?void 0!==r[t]?[].concat(r[t],n):[n]:n};case"comma":case"separator":return(e,n,r)=>{const o="string"==typeof n&&n.split("").indexOf(t.arrayFormatSeparator)>-1?n.split(t.arrayFormatSeparator).map(e=>c(e,t)):null===n?n:c(n,t);r[e]=o};default:return(t,e,n)=>{n[t]=void 0!==n[t]?[].concat(n[t],e):e}}}(e),r=Object.create(null);if("string"!=typeof t)return r;if(!(t=t.trim().replace(/^[?#&]/,"")))return r;for(const o of t.split("&")){let[t,s]=i(e.decode?o.replace(/\+/g," "):o,"=");s=void 0===s?null:["comma","separator"].includes(e.arrayFormat)?s:c(s,e),n(c(t,e),s,r)}for(const o of Object.keys(r)){const t=r[o];if("object"==typeof t&&null!==t)for(const n of Object.keys(t))t[n]=f(t[n],e);else r[o]=f(t,e)}return!1===e.sort?r:(!0===e.sort?Object.keys(r).sort():Object.keys(r).sort(e.sort)).reduce((t,e)=>{const n=r[e];return t[e]=Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?function t(e){return Array.isArray(e)?e.sort():"object"==typeof e?t(Object.keys(e)).sort((t,e)=>Number(t)-Number(e)).map(t=>e[t]):e}(n):n,t},Object.create(null))}e.extract=l,e.parse=d,e.stringify=(t,e)=>{if(!t)return"";s((e=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},e)).arrayFormatSeparator);const n=n=>e.skipNull&&null==t[n]||e.skipEmptyString&&""===t[n],r=function(t){switch(t.arrayFormat){case"index":return e=>(n,r)=>{const o=n.length;return void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,[a(e,t),"[",o,"]"].join("")]:[...n,[a(e,t),"[",a(o,t),"]=",a(r,t)].join("")]};case"bracket":return e=>(n,r)=>void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,[a(e,t),"[]"].join("")]:[...n,[a(e,t),"[]=",a(r,t)].join("")];case"comma":case"separator":return e=>(n,r)=>null==r||0===r.length?n:0===n.length?[[a(e,t),"=",a(r,t)].join("")]:[[n,a(r,t)].join(t.arrayFormatSeparator)];default:return e=>(n,r)=>void 0===r||t.skipNull&&null===r||t.skipEmptyString&&""===r?n:null===r?[...n,a(e,t)]:[...n,[a(e,t),"=",a(r,t)].join("")]}}(e),o={};for(const s of Object.keys(t))n(s)||(o[s]=t[s]);const i=Object.keys(o);return!1!==e.sort&&i.sort(e.sort),i.map(n=>{const o=t[n];return void 0===o?"":null===o?a(n,e):Array.isArray(o)?o.reduce(r(n),[]).join("&"):a(n,e)+"="+a(o,e)}).filter(t=>t.length>0).join("&")},e.parseUrl=(t,e)=>({url:u(t).split("?")[0]||"",query:d(l(t),e)}),e.stringifyUrl=(t,n)=>{const r=u(t.url).split("?")[0]||"",o=e.extract(t.url),i=e.parse(o),s=function(t){let e="";const n=t.indexOf("#");return-1!==n&&(e=t.slice(n)),e}(t.url),a=Object.assign(i,t.query);let c=e.stringify(a,n);return c&&(c=`?${c}`),`${r}${c}${s}`}},fzvj:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return r}));const r=()=>{const t=window.TapticEngine;t&&t.selection()},o=()=>{const t=window.TapticEngine;t&&t.gestureSelectionStart()},i=()=>{const t=window.TapticEngine;t&&t.gestureSelectionChanged()},s=()=>{const t=window.TapticEngine;t&&t.gestureSelectionEnd()}},neiB:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{}},sqKV:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{}}}]);