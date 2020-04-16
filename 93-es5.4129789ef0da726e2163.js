function _defineProperties(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _toConsumableArray(n){return _arrayWithoutHoles(n)||_iterableToArray(n)||_unsupportedIterableToArray(n)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArray(n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n))return Array.from(n)}function _arrayWithoutHoles(n){if(Array.isArray(n))return _arrayLikeToArray(n)}function _slicedToArray(n,t){return _arrayWithHoles(n)||_iterableToArrayLimit(n,t)||_unsupportedIterableToArray(n,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(n,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,l=!1,u=void 0;try{for(var o,a=n[Symbol.iterator]();!(r=(o=a.next()).done)&&(e.push(o.value),!t||e.length!==t);r=!0);}catch(i){l=!0,u=i}finally{try{r||null==a.return||a.return()}finally{if(l)throw u}}return e}}function _arrayWithHoles(n){if(Array.isArray(n))return n}function _createForOfIteratorHelper(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=_unsupportedIterableToArray(n))){var t=0,e=function(){};return{s:e,n:function(){return t>=n.length?{done:!0}:{done:!1,value:n[t++]}},e:function(n){throw n},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,u=!0,o=!1;return{s:function(){r=n[Symbol.iterator]()},n:function(){var n=r.next();return u=n.done,n},e:function(n){o=!0,l=n},f:function(){try{u||null==r.return||r.return()}finally{if(o)throw l}}}}function _unsupportedIterableToArray(n,t){if(n){if("string"==typeof n)return _arrayLikeToArray(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(n,t):void 0}}function _arrayLikeToArray(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{"25C3":function(n){n.exports=JSON.parse('{"a":{"API_URL":"http://localhost:8000/api","API_V2_URL":"http://localhost:8000/api/v2"}}')},"8jRI":function(n,t,e){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),l=new RegExp("(%[a-f0-9]{2})+","gi");function u(n,t){try{return decodeURIComponent(n.join(""))}catch(l){}if(1===n.length)return n;var e=n.slice(0,t=t||1),r=n.slice(t);return Array.prototype.concat.call([],u(e),u(r))}function o(n){try{return decodeURIComponent(n)}catch(l){for(var t=n.match(r),e=1;e<t.length;e++)t=(n=u(t,e).join("")).match(r);return n}}n.exports=function(n){if("string"!=typeof n)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof n+"`");try{return n=n.replace(/\+/g," "),decodeURIComponent(n)}catch(t){return function(n){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=l.exec(n);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var u=o(r[0]);u!==r[0]&&(e[r[0]]=u)}r=l.exec(n)}e["%C2"]="\ufffd";for(var a=Object.keys(e),i=0;i<a.length;i++){var c=a[i];n=n.replace(new RegExp(c,"g"),e[c])}return n}(n)}}},"8yz6":function(n,t,e){"use strict";n.exports=function(n,t){if("string"!=typeof n||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[n];var e=n.indexOf(t);return-1===e?[n]:[n.slice(0,e),n.slice(e+t.length)]}},ZFOp:function(n,t,e){"use strict";n.exports=function(n){return encodeURIComponent(n).replace(/[!'()*]/g,(function(n){return"%".concat(n.charCodeAt(0).toString(16).toUpperCase())}))}},"cr+I":function(n,t,e){"use strict";var r=e("ZFOp"),l=e("8jRI"),u=e("8yz6");function o(n){if("string"!=typeof n||1!==n.length)throw new TypeError("arrayFormatSeparator must be single character string")}function a(n,t){return t.encode?t.strict?r(n):encodeURIComponent(n):n}function i(n,t){return t.decode?l(n):n}function c(n){var t=n.indexOf("#");return-1!==t&&(n=n.slice(0,t)),n}function s(n){var t=(n=c(n)).indexOf("?");return-1===t?"":n.slice(t+1)}function f(n,t){return t.parseNumbers&&!Number.isNaN(Number(n))&&"string"==typeof n&&""!==n.trim()?n=Number(n):!t.parseBooleans||null===n||"true"!==n.toLowerCase()&&"false"!==n.toLowerCase()||(n="true"===n.toLowerCase()),n}function p(n,t){o((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var e=function(n){var t;switch(n.arrayFormat){case"index":return function(n,e,r){t=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),t?(void 0===r[n]&&(r[n]={}),r[n][t[1]]=e):r[n]=e};case"bracket":return function(n,e,r){t=/(\[\])$/.exec(n),r[n=n.replace(/\[\]$/,"")]=t?void 0!==r[n]?[].concat(r[n],e):[e]:e};case"comma":case"separator":return function(t,e,r){var l="string"==typeof e&&e.split("").indexOf(n.arrayFormatSeparator)>-1?e.split(n.arrayFormatSeparator).map((function(t){return i(t,n)})):null===e?e:i(e,n);r[t]=l};default:return function(n,t,e){e[n]=void 0!==e[n]?[].concat(e[n],t):t}}}(t),r=Object.create(null);if("string"!=typeof n)return r;if(!(n=n.trim().replace(/^[?#&]/,"")))return r;var l,a=_createForOfIteratorHelper(n.split("&"));try{for(a.s();!(l=a.n()).done;){var c=l.value,s=_slicedToArray(u(t.decode?c.replace(/\+/g," "):c,"="),2),p=s[0],b=s[1];b=void 0===b?null:["comma","separator"].includes(t.arrayFormat)?b:i(b,t),e(i(p,t),b,r)}}catch(x){a.e(x)}finally{a.f()}for(var h=0,d=Object.keys(r);h<d.length;h++){var y=d[h],m=r[y];if("object"==typeof m&&null!==m)for(var g=0,v=Object.keys(m);g<v.length;g++){var k=v[g];m[k]=f(m[k],t)}else r[y]=f(m,t)}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce((function(n,t){var e=r[t];return n[t]=Boolean(e)&&"object"==typeof e&&!Array.isArray(e)?function n(t){return Array.isArray(t)?t.sort():"object"==typeof t?n(Object.keys(t)).sort((function(n,t){return Number(n)-Number(t)})).map((function(n){return t[n]})):t}(e):e,n}),Object.create(null))}t.extract=s,t.parse=p,t.stringify=function(n,t){if(!n)return"";o((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var e=function(e){return t.skipNull&&null==n[e]||t.skipEmptyString&&""===n[e]},r=function(n){switch(n.arrayFormat){case"index":return function(t){return function(e,r){var l=e.length;return void 0===r||n.skipNull&&null===r||n.skipEmptyString&&""===r?e:[].concat(_toConsumableArray(e),null===r?[[a(t,n),"[",l,"]"].join("")]:[[a(t,n),"[",a(l,n),"]=",a(r,n)].join("")])}};case"bracket":return function(t){return function(e,r){return void 0===r||n.skipNull&&null===r||n.skipEmptyString&&""===r?e:[].concat(_toConsumableArray(e),null===r?[[a(t,n),"[]"].join("")]:[[a(t,n),"[]=",a(r,n)].join("")])}};case"comma":case"separator":return function(t){return function(e,r){return null==r||0===r.length?e:0===e.length?[[a(t,n),"=",a(r,n)].join("")]:[[e,a(r,n)].join(n.arrayFormatSeparator)]}};default:return function(t){return function(e,r){return void 0===r||n.skipNull&&null===r||n.skipEmptyString&&""===r?e:[].concat(_toConsumableArray(e),null===r?[a(t,n)]:[[a(t,n),"=",a(r,n)].join("")])}}}}(t),l={},u=0,i=Object.keys(n);u<i.length;u++){var c=i[u];e(c)||(l[c]=n[c])}var s=Object.keys(l);return!1!==t.sort&&s.sort(t.sort),s.map((function(e){var l=n[e];return void 0===l?"":null===l?a(e,t):Array.isArray(l)?l.reduce(r(e),[]).join("&"):a(e,t)+"="+a(l,t)})).filter((function(n){return n.length>0})).join("&")},t.parseUrl=function(n,t){return{url:c(n).split("?")[0]||"",query:p(s(n),t)}},t.stringifyUrl=function(n,e){var r=c(n.url).split("?")[0]||"",l=t.extract(n.url),u=t.parse(l),o=function(n){var t="",e=n.indexOf("#");return-1!==e&&(t=n.slice(e)),t}(n.url),a=Object.assign(u,n.query),i=t.stringify(a,e);return i&&(i="?".concat(i)),"".concat(r).concat(i).concat(o)}},mPJX:function(n,t,e){"use strict";e.r(t);var r=e("8Y7J"),l=function n(){_classCallCheck(this,n)},u=e("pMnS"),o=e("MKJQ"),a=e("sZkV"),i=e("SVse"),c=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){this.loading=!0,this.placeholderSrc="assets/img/no-image.png",this.error=!1}},{key:"ionImgDidLoad",value:function(){this.loading=!1}},{key:"ionError",value:function(){this.error=!0}}]),n}(),s=r.nb({encapsulation:0,styles:[["ion-img[_ngcontent-%COMP%]:nth-of-type(1){position:absolute;left:0;top:0;z-index:999}"]],data:{}});function f(n){return r.Ib(0,[(n()(),r.pb(0,0,null,null,1,"ion-img",[],null,null,null,o.M,o.m)),r.ob(1,49152,null,0,a.B,[r.h,r.k,r.x],{alt:[0,"alt"],src:[1,"src"]},null)],(function(n,t){var e=t.component;n(t,1,0,e.alt,e.placeholderSrc)}),null)}function p(n){return r.Ib(0,[(n()(),r.pb(0,0,null,null,1,"ion-img",[],null,[[null,"ionError"],[null,"ionImgDidLoad"]],(function(n,t,e){var r=!0,l=n.component;return"ionError"===t&&(r=!1!==l.ionError()&&r),"ionImgDidLoad"===t&&(r=!1!==l.ionImgDidLoad()&&r),r}),o.M,o.m)),r.ob(1,49152,null,0,a.B,[r.h,r.k,r.x],{alt:[0,"alt"],src:[1,"src"]},null)],(function(n,t){var e=t.component;n(t,1,0,e.alt,e.src)}),null)}function b(n){return r.Ib(0,[(n()(),r.eb(16777216,null,null,1,null,f)),r.ob(1,16384,null,0,i.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null),(n()(),r.eb(16777216,null,null,1,null,p)),r.ob(3,16384,null,0,i.i,[r.M,r.J],{ngIf:[0,"ngIf"]},null)],(function(n,t){var e=t.component;n(t,1,0,e.loading),n(t,3,0,!e.error)}),null)}var h,d,y=e("mrSG"),m=e("IheW"),g=e("cr+I"),v=e("2Vo4"),k=e("xgBC"),x=((h=function(){function n(t,e){var r=this;_classCallCheck(this,n),this.storage=t,this.platform=e,this.authenticationState=new v.a(!1),this.platform.ready().then((function(){r.checkToken()}))}return _createClass(n,[{key:"checkToken",value:function(){var n=this;this.storage.get("duocun-auth-token").then((function(t){t&&n.authenticationState.next(!0)}))}},{key:"login",value:function(n){var t=this;return this.storage.set("duocun-auth-token",n).then((function(){t.authenticationState.next(!0)}))}},{key:"logout",value:function(){var n=this;return this.storage.remove("duocun-auth-token").then((function(){n.authenticationState.next(!1)}))}},{key:"isAuthenticated",value:function(){return this.authenticationState.value}},{key:"getToken",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){t.storage.get("duocun-auth-token").then((function(t){n(t)})).catch((function(){n("")}))})));case 1:case"end":return n.stop()}}),n)})))}}]),n}()).ngInjectableDef=r.Mb({factory:function(){return new h(r.Nb(k.b),r.Nb(a.Eb))},token:h,providedIn:"root"}),h),w=e("25C3").a,I=((d=function(){function n(t,e){_classCallCheck(this,n),this.http=t,this.auth=e}return _createClass(n,[{key:"v1",value:function(){return new _(w.API_URL,this.http,this.auth)}},{key:"v2",value:function(){return new _(w.API_V2_URL,this.http,this.auth)}}]),n}()).ngInjectableDef=r.Mb({factory:function(){return new d(r.Nb(m.c),r.Nb(x))},token:d,providedIn:"root"}),d),_=function(){function n(t,e,r){_classCallCheck(this,n),this.apiHost=t,this.http=e,this.auth=r}return _createClass(n,[{key:"buildUrl",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return n=this.apiHost+(n.startsWith("/")?n:"/".concat(n)),t?"string"==typeof t?n+t:"object"==typeof t?"".concat(n,"?").concat(g.stringify(t)):n:n}},{key:"buildAuthHeader",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.auth.getToken();case 2:return t=n.sent,n.abrupt("return",t?{headers:(new m.g).set("Authorization","Bearer ".concat(t))}:{});case 4:case"end":return n.stop()}}),n,this)})))}},{key:"get",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return y.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var u;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(r&&(n=this.buildUrl(n,t)),!e){l.next=5;break}return l.next=3,this.buildAuthHeader();case 3:return u=l.sent,l.abrupt("return",this.http.get(n,u));case 5:return l.abrupt("return",this.http.get(n));case 6:case"end":return l.stop()}}),l,this)})))}},{key:"post",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return y.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var u;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(r&&(n=this.buildUrl(n)),!e){l.next=5;break}return l.next=3,this.buildAuthHeader();case 3:return u=l.sent,l.abrupt("return",this.http.post(n,t,u));case 5:return l.abrupt("return",this.http.post(n,t));case 6:case"end":return l.stop()}}),l,this)})))}},{key:"put",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return y.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var u;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(r&&(n=this.buildUrl(n)),!e){l.next=5;break}return l.next=3,this.buildAuthHeader();case 3:return u=l.sent,l.abrupt("return",this.http.put(n,t,u));case 5:return l.abrupt("return",this.http.put(n,t));case 6:case"end":return l.stop()}}),l,this)})))}},{key:"delete",value:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return y.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){var u;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(r&&(n=this.buildUrl(n,t)),!e){l.next=5;break}return l.next=3,this.buildAuthHeader();case 3:return u=l.sent,l.abrupt("return",this.http.delete(n,u));case 5:return l.abrupt("return",this.http.delete(n));case 6:case"end":return l.stop()}}),l,this)})))}}]),n}(),j=function(){function n(t){_classCallCheck(this,n),this.apiService=t,this.loading=!1,this.featuredProducts=[]}return _createClass(n,[{key:"ngOnInit",value:function(){this.loading=!0}}]),n}(),A=r.nb({encapsulation:0,styles:[[""]],data:{}});function C(n){return r.Ib(0,[(n()(),r.pb(0,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),r.Gb(-1,null,["loaded"]))],null,null)}function S(n){return r.Ib(0,[(n()(),r.pb(0,0,null,null,31,"ion-row",[],null,null,null,o.T,o.t)),r.ob(1,49152,null,0,a.eb,[r.h,r.k,r.x],null,null),(n()(),r.pb(2,0,null,0,14,"ion-col",[["size","6"]],null,null,null,o.H,o.h)),r.ob(3,49152,null,0,a.r,[r.h,r.k,r.x],{size:[0,"size"]},null),(n()(),r.pb(4,0,null,0,12,"ion-card",[["class","ion-no-margin"]],null,null,null,o.G,o.f)),r.ob(5,49152,null,0,a.k,[r.h,r.k,r.x],null,null),(n()(),r.pb(6,0,null,0,10,"ion-card-content",[],null,null,null,o.F,o.g)),r.ob(7,49152,null,0,a.l,[r.h,r.k,r.x],null,null),(n()(),r.pb(8,0,null,0,2,"div",[["class","featured-product-image-container ion-margin-bottom"]],null,null,null,null,null)),(n()(),r.pb(9,0,null,null,1,"app-ion-image",[["alt","awesome product"],["src","assets/img/no-image.png"]],null,null,null,b,s)),r.ob(10,114688,null,0,c,[],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),r.pb(11,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,o.U,o.u)),r.ob(12,49152,null,0,a.kb,[r.h,r.k,r.x],{animated:[0,"animated"]},null),(n()(),r.pb(13,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width:80%"]],null,null,null,o.U,o.u)),r.ob(14,49152,null,0,a.kb,[r.h,r.k,r.x],{animated:[0,"animated"]},null),(n()(),r.pb(15,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width:60%"]],null,null,null,o.U,o.u)),r.ob(16,49152,null,0,a.kb,[r.h,r.k,r.x],{animated:[0,"animated"]},null),(n()(),r.pb(17,0,null,0,14,"ion-col",[["size","6"]],null,null,null,o.H,o.h)),r.ob(18,49152,null,0,a.r,[r.h,r.k,r.x],{size:[0,"size"]},null),(n()(),r.pb(19,0,null,0,12,"ion-card",[["class","ion-no-margin"]],null,null,null,o.G,o.f)),r.ob(20,49152,null,0,a.k,[r.h,r.k,r.x],null,null),(n()(),r.pb(21,0,null,0,10,"ion-card-content",[],null,null,null,o.F,o.g)),r.ob(22,49152,null,0,a.l,[r.h,r.k,r.x],null,null),(n()(),r.pb(23,0,null,0,2,"div",[["class","featured-product-image-container ion-margin-bottom"]],null,null,null,null,null)),(n()(),r.pb(24,0,null,null,1,"app-ion-image",[["alt","awesome product"],["src","assets/img/no-image.png"]],null,null,null,b,s)),r.ob(25,114688,null,0,c,[],{src:[0,"src"],alt:[1,"alt"]},null),(n()(),r.pb(26,0,null,0,1,"ion-skeleton-text",[["animated",""]],null,null,null,o.U,o.u)),r.ob(27,49152,null,0,a.kb,[r.h,r.k,r.x],{animated:[0,"animated"]},null),(n()(),r.pb(28,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width:80%"]],null,null,null,o.U,o.u)),r.ob(29,49152,null,0,a.kb,[r.h,r.k,r.x],{animated:[0,"animated"]},null),(n()(),r.pb(30,0,null,0,1,"ion-skeleton-text",[["animated",""],["style","width:60%"]],null,null,null,o.U,o.u)),r.ob(31,49152,null,0,a.kb,[r.h,r.k,r.x],{animated:[0,"animated"]},null)],(function(n,t){n(t,3,0,"6"),n(t,10,0,"assets/img/no-image.png","awesome product"),n(t,12,0,""),n(t,14,0,""),n(t,16,0,""),n(t,18,0,"6"),n(t,25,0,"assets/img/no-image.png","awesome product"),n(t,27,0,""),n(t,29,0,""),n(t,31,0,"")}),null)}function O(n){return r.Ib(0,[(n()(),r.eb(16777216,null,null,2,null,S)),r.ob(1,278528,null,0,i.h,[r.M,r.J,r.q],{ngForOf:[0,"ngForOf"]},null),r.Bb(2,3),(n()(),r.eb(0,null,null,0))],(function(n,t){var e=n(t,2,0,1,2,3);n(t,1,0,e)}),null)}function F(n){return r.Ib(0,[(n()(),r.pb(0,0,null,null,10,"ion-header",[],null,null,null,o.K,o.k)),r.ob(1,49152,null,0,a.z,[r.h,r.k,r.x],null,null),(n()(),r.pb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.Z,o.z)),r.ob(3,49152,null,0,a.xb,[r.h,r.k,r.x],null,null),(n()(),r.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.E,o.e)),r.ob(5,49152,null,0,a.j,[r.h,r.k,r.x],null,null),(n()(),r.pb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.R,o.s)),r.ob(7,49152,null,0,a.P,[r.h,r.k,r.x],null,null),(n()(),r.pb(8,0,null,0,2,"ion-title",[],null,null,null,o.Y,o.y)),r.ob(9,49152,null,0,a.vb,[r.h,r.k,r.x],null,null),(n()(),r.Gb(-1,0,["browse"])),(n()(),r.pb(11,0,null,null,5,"ion-content",[],null,null,null,o.I,o.i)),r.ob(12,49152,null,0,a.s,[r.h,r.k,r.x],null,null),(n()(),r.pb(13,0,null,0,3,"ion-grid",[],null,null,null,o.J,o.j)),r.ob(14,49152,null,0,a.y,[r.h,r.k,r.x],null,null),(n()(),r.eb(16777216,null,0,1,null,C)),r.ob(16,16384,null,0,i.i,[r.M,r.J],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),r.eb(0,[["skeleton",2]],null,0,null,O))],(function(n,t){n(t,16,0,!t.component.loading,r.Ab(t,17))}),null)}var R=r.lb("app-browse",j,(function(n){return r.Ib(0,[(n()(),r.pb(0,0,null,null,2,"app-browse",[],null,null,null,F,A)),r.Db(512,null,I,I,[m.c,x]),r.ob(2,114688,null,0,j,[I],null,null)],(function(n,t){n(t,2,0)}),null)}),{},{},[]),T=e("s7LF"),E=e("TSSN"),U=e("iInd"),N=function n(){_classCallCheck(this,n)},L=function n(){_classCallCheck(this,n)};e.d(t,"BrowsePageModuleNgFactory",(function(){return H}));var H=r.mb(l,[],(function(n){return r.xb([r.yb(512,r.j,r.X,[[8,[u.a,R]],[3,r.j],r.v]),r.yb(4608,i.k,i.j,[r.s,[2,i.q]]),r.yb(4608,T.g,T.g,[]),r.yb(4608,a.a,a.a,[r.x,r.g]),r.yb(4608,a.Cb,a.Cb,[a.a,r.j,r.p]),r.yb(4608,a.Fb,a.Fb,[a.a,r.j,r.p]),r.yb(4608,E.i,E.h,[]),r.yb(4608,E.d,E.g,[]),r.yb(4608,E.k,E.e,[]),r.yb(4608,E.c,E.b,[]),r.yb(4608,E.m,E.m,[E.n,E.i,E.d,E.k,E.c,E.o,E.q,E.p,E.a]),r.yb(1073742336,i.b,i.b,[]),r.yb(1073742336,T.f,T.f,[]),r.yb(1073742336,T.b,T.b,[]),r.yb(1073742336,a.zb,a.zb,[]),r.yb(1073742336,U.q,U.q,[[2,U.v],[2,U.m]]),r.yb(1073742336,N,N,[]),r.yb(1073742336,E.j,E.j,[]),r.yb(1073742336,L,L,[]),r.yb(1073742336,l,l,[]),r.yb(1024,U.k,(function(){return[[{path:"",component:j}]]}),[]),r.yb(256,E.q,void 0,[]),r.yb(256,E.o,void 0,[]),r.yb(256,E.p,void 0,[]),r.yb(256,E.a,void 0,[])])}))}}]);