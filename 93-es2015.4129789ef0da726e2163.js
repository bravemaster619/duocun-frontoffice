(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"25C3":function(n){n.exports=JSON.parse('{"a":{"API_URL":"http://localhost:8000/api","API_V2_URL":"http://localhost:8000/api/v2"}}')},"8jRI":function(n,l,t){"use strict";var e=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function u(n,l){try{return decodeURIComponent(n.join(""))}catch(r){}if(1===n.length)return n;var t=n.slice(0,l=l||1),e=n.slice(l);return Array.prototype.concat.call([],u(t),u(e))}function o(n){try{return decodeURIComponent(n)}catch(r){for(var l=n.match(e),t=1;t<l.length;t++)l=(n=u(l,t).join("")).match(e);return n}}n.exports=function(n){if("string"!=typeof n)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof n+"`");try{return n=n.replace(/\+/g," "),decodeURIComponent(n)}catch(l){return function(n){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},e=r.exec(n);e;){try{t[e[0]]=decodeURIComponent(e[0])}catch(l){var u=o(e[0]);u!==e[0]&&(t[e[0]]=u)}e=r.exec(n)}t["%C2"]="\ufffd";for(var i=Object.keys(t),a=0;a<i.length;a++){var s=i[a];n=n.replace(new RegExp(s,"g"),t[s])}return n}(n)}}},"8yz6":function(n,l,t){"use strict";n.exports=(n,l)=>{if("string"!=typeof n||"string"!=typeof l)throw new TypeError("Expected the arguments to be of type `string`");if(""===l)return[n];const t=n.indexOf(l);return-1===t?[n]:[n.slice(0,t),n.slice(t+l.length)]}},ZFOp:function(n,l,t){"use strict";n.exports=n=>encodeURIComponent(n).replace(/[!'()*]/g,n=>`%${n.charCodeAt(0).toString(16).toUpperCase()}`)},"cr+I":function(n,l,t){"use strict";const e=t("ZFOp"),r=t("8jRI"),u=t("8yz6");function o(n){if("string"!=typeof n||1!==n.length)throw new TypeError("arrayFormatSeparator must be single character string")}function i(n,l){return l.encode?l.strict?e(n):encodeURIComponent(n):n}function a(n,l){return l.decode?r(n):n}function s(n){const l=n.indexOf("#");return-1!==l&&(n=n.slice(0,l)),n}function c(n){const l=(n=s(n)).indexOf("?");return-1===l?"":n.slice(l+1)}function b(n,l){return l.parseNumbers&&!Number.isNaN(Number(n))&&"string"==typeof n&&""!==n.trim()?n=Number(n):!l.parseBooleans||null===n||"true"!==n.toLowerCase()&&"false"!==n.toLowerCase()||(n="true"===n.toLowerCase()),n}function p(n,l){o((l=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},l)).arrayFormatSeparator);const t=function(n){let l;switch(n.arrayFormat){case"index":return(n,t,e)=>{l=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),l?(void 0===e[n]&&(e[n]={}),e[n][l[1]]=t):e[n]=t};case"bracket":return(n,t,e)=>{l=/(\[\])$/.exec(n),e[n=n.replace(/\[\]$/,"")]=l?void 0!==e[n]?[].concat(e[n],t):[t]:t};case"comma":case"separator":return(l,t,e)=>{const r="string"==typeof t&&t.split("").indexOf(n.arrayFormatSeparator)>-1?t.split(n.arrayFormatSeparator).map(l=>a(l,n)):null===t?t:a(t,n);e[l]=r};default:return(n,l,t)=>{t[n]=void 0!==t[n]?[].concat(t[n],l):l}}}(l),e=Object.create(null);if("string"!=typeof n)return e;if(!(n=n.trim().replace(/^[?#&]/,"")))return e;for(const r of n.split("&")){let[n,o]=u(l.decode?r.replace(/\+/g," "):r,"=");o=void 0===o?null:["comma","separator"].includes(l.arrayFormat)?o:a(o,l),t(a(n,l),o,e)}for(const r of Object.keys(e)){const n=e[r];if("object"==typeof n&&null!==n)for(const t of Object.keys(n))n[t]=b(n[t],l);else e[r]=b(n,l)}return!1===l.sort?e:(!0===l.sort?Object.keys(e).sort():Object.keys(e).sort(l.sort)).reduce((n,l)=>{const t=e[l];return n[l]=Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?function n(l){return Array.isArray(l)?l.sort():"object"==typeof l?n(Object.keys(l)).sort((n,l)=>Number(n)-Number(l)).map(n=>l[n]):l}(t):t,n},Object.create(null))}l.extract=c,l.parse=p,l.stringify=(n,l)=>{if(!n)return"";o((l=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},l)).arrayFormatSeparator);const t=t=>l.skipNull&&null==n[t]||l.skipEmptyString&&""===n[t],e=function(n){switch(n.arrayFormat){case"index":return l=>(t,e)=>{const r=t.length;return void 0===e||n.skipNull&&null===e||n.skipEmptyString&&""===e?t:null===e?[...t,[i(l,n),"[",r,"]"].join("")]:[...t,[i(l,n),"[",i(r,n),"]=",i(e,n)].join("")]};case"bracket":return l=>(t,e)=>void 0===e||n.skipNull&&null===e||n.skipEmptyString&&""===e?t:null===e?[...t,[i(l,n),"[]"].join("")]:[...t,[i(l,n),"[]=",i(e,n)].join("")];case"comma":case"separator":return l=>(t,e)=>null==e||0===e.length?t:0===t.length?[[i(l,n),"=",i(e,n)].join("")]:[[t,i(e,n)].join(n.arrayFormatSeparator)];default:return l=>(t,e)=>void 0===e||n.skipNull&&null===e||n.skipEmptyString&&""===e?t:null===e?[...t,i(l,n)]:[...t,[i(l,n),"=",i(e,n)].join("")]}}(l),r={};for(const o of Object.keys(n))t(o)||(r[o]=n[o]);const u=Object.keys(r);return!1!==l.sort&&u.sort(l.sort),u.map(t=>{const r=n[t];return void 0===r?"":null===r?i(t,l):Array.isArray(r)?r.reduce(e(t),[]).join("&"):i(t,l)+"="+i(r,l)}).filter(n=>n.length>0).join("&")},l.parseUrl=(n,l)=>({url:s(n).split("?")[0]||"",query:p(c(n),l)}),l.stringifyUrl=(n,t)=>{const e=s(n.url).split("?")[0]||"",r=l.extract(n.url),u=l.parse(r),o=function(n){let l="";const t=n.indexOf("#");return-1!==t&&(l=n.slice(t)),l}(n.url),i=Object.assign(u,n.query);let a=l.stringify(i,t);return a&&(a=`?${a}`),`${e}${a}${o}`}},mPJX:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J");class r{}var u=t("pMnS"),o=t("MKJQ"),i=t("sZkV"),a=t("SVse");class s{constructor(){}ngOnInit(){this.loading=!0,this.placeholderSrc="assets/img/no-image.png",this.error=!1}ionImgDidLoad(){this.loading=!1}ionError(){this.error=!0}}var c=e.nb({encapsulation:0,styles:[["ion-img[_ngcontent-%COMP%]:nth-of-type(1){position:absolute;left:0;top:0;z-index:999}"]],data:{}});function b(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-img",[],null,null,null,o.M,o.m)),e.ob(1,49152,null,0,i.B,[e.h,e.k,e.x],{alt:[0,"alt"],src:[1,"src"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.alt,t.placeholderSrc)}),null)}function p(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"ion-img",[],null,[[null,"ionError"],[null,"ionImgDidLoad"]],(function(n,l,t){var e=!0,r=n.component;return"ionError"===l&&(e=!1!==r.ionError()&&e),"ionImgDidLoad"===l&&(e=!1!==r.ionImgDidLoad()&&e),e}),o.M,o.m)),e.ob(1,49152,null,0,i.B,[e.h,e.k,e.x],{alt:[0,"alt"],src:[1,"src"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.alt,t.src)}),null)}function d(n){return e.Ib(0,[(n()(),e.eb(16777216,null,null,1,null,b)),e.ob(1,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,p)),e.ob(3,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,1,0,t.loading),n(l,3,0,!t.error)}),null)}var h=t("mrSG"),f=t("IheW"),g=t("cr+I"),m=t("2Vo4"),y=t("xgBC");let k=(()=>{class n{constructor(n,l){this.storage=n,this.platform=l,this.authenticationState=new m.a(!1),this.platform.ready().then(()=>{this.checkToken()})}checkToken(){this.storage.get("duocun-auth-token").then(n=>{n&&this.authenticationState.next(!0)})}login(n){return this.storage.set("duocun-auth-token",n).then(()=>{this.authenticationState.next(!0)})}logout(){return this.storage.remove("duocun-auth-token").then(()=>{this.authenticationState.next(!1)})}isAuthenticated(){return this.authenticationState.value}getToken(){return h.a(this,void 0,void 0,(function*(){return new Promise(n=>{this.storage.get("duocun-auth-token").then(l=>{n(l)}).catch(()=>{n("")})})}))}}return n.ngInjectableDef=e.Mb({factory:function(){return new n(e.Nb(y.b),e.Nb(i.Eb))},token:n,providedIn:"root"}),n})();const x=t("25C3").a;let v=(()=>{class n{constructor(n,l){this.http=n,this.auth=l}v1(){return new I(x.API_URL,this.http,this.auth)}v2(){return new I(x.API_V2_URL,this.http,this.auth)}}return n.ngInjectableDef=e.Mb({factory:function(){return new n(e.Nb(f.c),e.Nb(k))},token:n,providedIn:"root"}),n})();class I{constructor(n,l,t){this.apiHost=n,this.http=l,this.auth=t}buildUrl(n,l=null){return n=this.apiHost+(n.startsWith("/")?n:`/${n}`),l?"string"==typeof l?n+l:"object"==typeof l?`${n}?${g.stringify(l)}`:n:n}buildAuthHeader(){return h.a(this,void 0,void 0,(function*(){const n=yield this.auth.getToken();return n?{headers:(new f.g).set("Authorization",`Bearer ${n}`)}:{}}))}get(n,l=null,t=!0,e=!0){return h.a(this,void 0,void 0,(function*(){if(e&&(n=this.buildUrl(n,l)),t){const l=yield this.buildAuthHeader();return this.http.get(n,l)}return this.http.get(n)}))}post(n,l=null,t=!0,e=!0){return h.a(this,void 0,void 0,(function*(){if(e&&(n=this.buildUrl(n)),t){const t=yield this.buildAuthHeader();return this.http.post(n,l,t)}return this.http.post(n,l)}))}put(n,l=null,t=!0,e=!0){return h.a(this,void 0,void 0,(function*(){if(e&&(n=this.buildUrl(n)),t){const t=yield this.buildAuthHeader();return this.http.put(n,l,t)}return this.http.put(n,l)}))}delete(n,l=null,t=!0,e=!0){return h.a(this,void 0,void 0,(function*(){if(e&&(n=this.buildUrl(n,l)),t){const l=yield this.buildAuthHeader();return this.http.delete(n,l)}return this.http.delete(n)}))}}class j{constructor(n){this.apiService=n,this.loading=!1,this.featuredProducts=[]}ngOnInit(){this.loading=!0}}var w=e.nb({encapsulation:0,styles:[[""]],data:{}});function F(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),e.Gb(-1,null,["loaded"]))],null,null)}function S(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,31,"ion-row",[],null,null,null,o.T,o.t)),e.ob(1,49152,null,0,i.eb,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,14,"ion-col",[["size","6"]],null,null,null,o.H,o.h)),e.ob(3,49152,null,0,i.r,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(4,0,null,0,12,"ion-card",[["class","ion-no-margin"]],null,null,null,o.G,o.f)),e.ob(5,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(n()(),e.pb(6,0,null,0,10,"ion-card-content",[],null,null,null,o.F,o.g)),e.ob(7,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(n()(),e.pb(8,0,null,0,2,"div",[["class","featured-product-image-container ion-margin-bottom"]],null,null,null,null,null)),(n()(),e.pb(9,0,null,null,1,"app-ion-image",[["alt","awesome product"],["src","assets/img/no-image.png"]],null,null,null,d,c)),e.ob(10,114688,null,0,s,[],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),e.pb(11,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,o.U,o.u)),e.ob(12,49152,null,0,i.kb,[e.h,e.k,e.x],{animated:[0,"animated"]},null),(n()(),e.pb(13,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width:80%"]],null,null,null,o.U,o.u)),e.ob(14,49152,null,0,i.kb,[e.h,e.k,e.x],{animated:[0,"animated"]},null),(n()(),e.pb(15,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width:60%"]],null,null,null,o.U,o.u)),e.ob(16,49152,null,0,i.kb,[e.h,e.k,e.x],{animated:[0,"animated"]},null),(n()(),e.pb(17,0,null,0,14,"ion-col",[["size","6"]],null,null,null,o.H,o.h)),e.ob(18,49152,null,0,i.r,[e.h,e.k,e.x],{size:[0,"size"]},null),(n()(),e.pb(19,0,null,0,12,"ion-card",[["class","ion-no-margin"]],null,null,null,o.G,o.f)),e.ob(20,49152,null,0,i.k,[e.h,e.k,e.x],null,null),(n()(),e.pb(21,0,null,0,10,"ion-card-content",[],null,null,null,o.F,o.g)),e.ob(22,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(n()(),e.pb(23,0,null,0,2,"div",[["class","featured-product-image-container ion-margin-bottom"]],null,null,null,null,null)),(n()(),e.pb(24,0,null,null,1,"app-ion-image",[["alt","awesome product"],["src","assets/img/no-image.png"]],null,null,null,d,c)),e.ob(25,114688,null,0,s,[],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),e.pb(26,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,o.U,o.u)),e.ob(27,49152,null,0,i.kb,[e.h,e.k,e.x],{animated:[0,"animated"]},null),(n()(),e.pb(28,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width:80%"]],null,null,null,o.U,o.u)),e.ob(29,49152,null,0,i.kb,[e.h,e.k,e.x],{animated:[0,"animated"]},null),(n()(),e.pb(30,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width:60%"]],null,null,null,o.U,o.u)),e.ob(31,49152,null,0,i.kb,[e.h,e.k,e.x],{animated:[0,"animated"]},null)],(function(n,l){n(l,3,0,"6"),n(l,10,0,"assets/img/no-image.png","awesome product"),n(l,12,0,""),n(l,14,0,""),n(l,16,0,""),n(l,18,0,"6"),n(l,25,0,"assets/img/no-image.png","awesome product"),n(l,27,0,""),n(l,29,0,""),n(l,31,0,"")}),null)}function O(n){return e.Ib(0,[(n()(),e.eb(16777216,null,null,2,null,S)),e.ob(1,278528,null,0,a.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Bb(2,3),(n()(),e.eb(0,null,null,0))],(function(n,l){var t=n(l,2,0,1,2,3);n(l,1,0,t)}),null)}function U(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,10,"ion-header",[],null,null,null,o.K,o.k)),e.ob(1,49152,null,0,i.z,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.Z,o.z)),e.ob(3,49152,null,0,i.xb,[e.h,e.k,e.x],null,null),(n()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.E,o.e)),e.ob(5,49152,null,0,i.j,[e.h,e.k,e.x],null,null),(n()(),e.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.R,o.s)),e.ob(7,49152,null,0,i.P,[e.h,e.k,e.x],null,null),(n()(),e.pb(8,0,null,0,2,"ion-title",[],null,null,null,o.Y,o.y)),e.ob(9,49152,null,0,i.vb,[e.h,e.k,e.x],null,null),(n()(),e.Gb(-1,0,["browse"])),(n()(),e.pb(11,0,null,null,5,"ion-content",[],null,null,null,o.I,o.i)),e.ob(12,49152,null,0,i.s,[e.h,e.k,e.x],null,null),(n()(),e.pb(13,0,null,0,3,"ion-grid",[],null,null,null,o.J,o.j)),e.ob(14,49152,null,0,i.y,[e.h,e.k,e.x],null,null),(n()(),e.eb(16777216,null,0,1,null,F)),e.ob(16,16384,null,0,a.i,[e.M,e.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),e.eb(0,[["skeleton",2]],null,0,null,O))],(function(n,l){n(l,16,0,!l.component.loading,e.Ab(l,17))}),null)}function E(n){return e.Ib(0,[(n()(),e.pb(0,0,null,null,2,"app-browse",[],null,null,null,U,w)),e.Db(512,null,v,v,[f.c,k]),e.ob(2,114688,null,0,j,[v],null,null)],(function(n,l){n(l,2,0)}),null)}var A=e.lb("app-browse",j,E,{},{},[]),N=t("s7LF"),C=t("TSSN"),R=t("iInd");class z{}class ${}t.d(l,"BrowsePageModuleNgFactory",(function(){return L}));var L=e.mb(r,[],(function(n){return e.xb([e.yb(512,e.j,e.X,[[8,[u.a,A]],[3,e.j],e.v]),e.yb(4608,a.k,a.j,[e.s,[2,a.q]]),e.yb(4608,N.g,N.g,[]),e.yb(4608,i.a,i.a,[e.x,e.g]),e.yb(4608,i.Cb,i.Cb,[i.a,e.j,e.p]),e.yb(4608,i.Fb,i.Fb,[i.a,e.j,e.p]),e.yb(4608,C.i,C.h,[]),e.yb(4608,C.d,C.g,[]),e.yb(4608,C.k,C.e,[]),e.yb(4608,C.c,C.b,[]),e.yb(4608,C.m,C.m,[C.n,C.i,C.d,C.k,C.c,C.o,C.q,C.p,C.a]),e.yb(1073742336,a.b,a.b,[]),e.yb(1073742336,N.f,N.f,[]),e.yb(1073742336,N.b,N.b,[]),e.yb(1073742336,i.zb,i.zb,[]),e.yb(1073742336,R.q,R.q,[[2,R.v],[2,R.m]]),e.yb(1073742336,z,z,[]),e.yb(1073742336,C.j,C.j,[]),e.yb(1073742336,$,$,[]),e.yb(1073742336,r,r,[]),e.yb(1024,R.k,(function(){return[[{path:"",component:j}]]}),[]),e.yb(256,C.q,void 0,[]),e.yb(256,C.o,void 0,[]),e.yb(256,C.p,void 0,[]),e.yb(256,C.a,void 0,[])])}))}}]);