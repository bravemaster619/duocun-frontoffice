(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{OOxL:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),o=u("MKJQ"),a=u("sZkV"),b=u("Dfpv"),r=u("H5eE"),s=u("cUpR"),c=u("SVse"),p=u("LeA6"),d=u("TSSN"),h=u("s7LF"),m=u("X9bV"),g=u("uFv3"),f=u("kYHd"),k=u("mrSG"),x=u("UU5k");function v(l,n){return l.valIdx==n.valIdx&&l.attrIdx==n.attrIdx}function q(l,n){if(!(l.values&&l.values.length||n.values&&n.values.length))return!0;if(l.values.length!==n.values.length)return!1;for(let u=0;u<l.values.length;u++)if(!n.values.find(n=>v(l.values[u],n)))return!1;return!0}var I=u("e/T/");class C{constructor(l,n,u,t,e,i,o){this.apiService=l,this.activatedRoute=n,this.translator=u,this.title=t,this.cartService=e,this.alert=i,this.router=o,this.loading=!0}ngOnInit(){this.href=window.location.href,this.translator.get("title.product").subscribe(l=>{this.title.setTitle(l)}),this.activatedRoute.params.subscribe(l=>{const n=l.id;this.apiService.v2().get(`products/${n}`).then(l=>{l.subscribe(l=>{l.success?(this.product=l.data,this.title.setTitle(this.product.name),this.item=this.getDefaultItemFromProduct(this.product)):this.router.navigate(["/not-found"]),this.loading=!1})})})}handleQuantityChange(l){this.item.quantity=l.value}handleCombinationSelect(l,n){const u=this.getNewCombination(l,parseInt(n));let t=this.product.combinations.findIndex(l=>q(l,u));if(-1===t&&(t=this.product.combinations.findIndex(u=>-1!==u.values.findIndex(u=>v(u,{attrIdx:l._id,valIdx:n})))),-1===t)throw new Error("Combination not available");this.item=this.getItemFromCombinationIndex(this.product,this.item,t)}addToCart(){return k.a(this,void 0,void 0,(function*(){this.cartService.addItem(this.item);const l="Product has been added to cart";this.translator.get(["Notice",l,"OK"]).subscribe(n=>{this.alert.create({header:n.Notice,message:n[l],buttons:[n.OK]}).then(l=>l.present())})}))}buyNow(){this.cartService.setBuyNowItem(this.item)}isInStock(){return!this.product.stock||!this.product.stock.enabled||(void 0!==this.item.combinationIdx?this.product.combinations[this.item.combinationIdx].quantity>0:this.product.stock.quantity>0)}getDefaultItemFromProduct(l){let n={product:l,productId:l._id,quantity:1};if(!l.combinations||!l.combinations.length)return n.price=l.price,n;if(!l.stock||!l.stock.enabled)return this.getItemFromCombinationIndex(l,n,0);let u=-1;for(let t=0;t<l.combinations.length;t++)l.combinations[t].quantity>0&&(u=t);return this.getItemFromCombinationIndex(l,n,-1!==u?u:0)}getItemFromCombinationIndex(l,n,u){return n.combinationIdx=u,n.price=l.combinations[u].price,n.attributeDescriptions=this.getAttributeDescriptions(l,n),this.getCombinationDescriptions(l,n)}getAttributeDescriptions(l,n){const u=[];return l.combinations[n.combinationIdx].values.forEach(({attrIdx:n,valIdx:t})=>{const e=l.attributes.find(({_id:l})=>l===n);e&&u.push(`${e.name}: ${e.values[t].name}`)}),u}getCombinationDescriptions(l,n){const u=[],t=[];return l.combinations[n.combinationIdx].values.forEach(({attrIdx:n,valIdx:e})=>{const i=l.attributes.find(({_id:l})=>l===n);i&&(u.push(`${i.name}: ${i.values[e].name}`),t.push(i.nameEN?`${i.nameEN}: ${i.values[e].nameEN}`:`${i.name}: ${i.values[e].name}`))}),n.combinationDescription=u.join(", "),n.combinationDescriptionEN=t.join(", "),n}isAttributeEnabled(l){return-1!==this.getAttributeSelectValue(l)}getAttributeSelectValue(l){const n=this.product.combinations[this.item.combinationIdx].values.find(({attrIdx:n})=>n===l._id);return n?parseInt(n.valIdx):-1}isAttributeValueAvailable(l,n){const u=this.getNewCombination(l,n);return this.isCombinationAvailable(u)}isCombinationAvailable(l){return!!this.product.combinations.find(n=>q(l,n))}getNewCombination(l,n){const u=this.product.combinations[this.item.combinationIdx],t=u.values.findIndex(n=>n.attrIdx===l._id),e=Object.assign({},u);return e.values=[],u.values.forEach(l=>{e.values.push(Object.assign({},l))}),e.values[t].valIdx=n,e}}var w=u("iInd"),M=t.ob({encapsulation:0,styles:[[".image-slide-container[_ngcontent-%COMP%], .image-slide-container[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]{height:300px}.purchase-row[_ngcontent-%COMP%] > ion-col[_ngcontent-%COMP%]:first-child{display:flex;align-items:center}.subtotal-row[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{line-height:2rem}.subtotal-row[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:first-child{margin-right:1rem}.subtotal-row[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]:last-child{font-size:1.25rem}.share-buttons-row[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{line-height:calc(1.75rem + 4px)}.share-buttons-row[_ngcontent-%COMP%]   .share-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.75rem;margin-right:1rem;padding:2px;border:1px solid #eee}.share-buttons-row[_ngcontent-%COMP%]   .share-button[_ngcontent-%COMP%]   ion-icon.facebook[_ngcontent-%COMP%]{color:#3b5998}.share-buttons-row[_ngcontent-%COMP%]   .share-button[_ngcontent-%COMP%]   ion-icon.twitter[_ngcontent-%COMP%]{color:#00acee}.share-buttons-row[_ngcontent-%COMP%]   .share-button[_ngcontent-%COMP%]   ion-icon.pinterest[_ngcontent-%COMP%]{color:#c8232c}.touchspin-row[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{line-height:2rem;margin-right:1rem}.touchspin-row[_ngcontent-%COMP%]   .touchspin-container[_ngcontent-%COMP%]{width:96px}"]],data:{}});function O(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,3,"ion-slide",[],null,null,null,o.cb,o.x)),t.pb(1,49152,null,0,a.mb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,1,"app-ion-image",[],null,null,null,b.b,b.a)),t.pb(3,114688,null,0,r.a,[s.b],{src:[0,"src"],alt:[1,"alt"]},null)],(function(l,n){l(n,3,0,n.context.$implicit.url,n.component.product.name)}),null)}function _(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,3,"ion-slides",[],null,null,null,o.db,o.y)),t.pb(1,49152,null,0,a.nb,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,O)),t.pb(3,278528,null,0,c.h,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.product.pictures)}),null)}function y(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,2,"ion-select-option",[["localValue",""]],null,null,null,o.Z,o.v)),t.pb(1,49152,null,0,a.kb,[t.h,t.k,t.x],{disabled:[0,"disabled"],value:[1,"value"]},null),t.pb(2,540672,null,0,p.a,[d.m,t.k],{data:[0,"data"],key:[1,"key"]},null)],(function(l,n){l(n,1,0,!n.component.isAttributeValueAvailable(n.parent.parent.context.$implicit,n.context.index),n.context.index),l(n,2,0,n.context.$implicit,"name")}),null)}function P(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,5,"ion-select",[],null,[[null,"ionChange"],[null,"ionBlur"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Bb(l,3)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Bb(l,3)._handleChangeEvent(u.target)&&e),"ionChange"===n&&(e=!1!==i.handleCombinationSelect(l.parent.context.$implicit,u.target.value)&&e),e}),o.ab,o.u)),t.Eb(5120,null,h.c,(function(l){return[l]}),[a.Ib]),t.pb(2,49152,null,0,a.jb,[t.h,t.k,t.x],{value:[0,"value"]},null),t.pb(3,16384,null,0,a.Ib,[t.k],null,null),(l()(),t.fb(16777216,null,0,1,null,y)),t.pb(5,278528,null,0,c.h,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.getAttributeSelectValue(n.parent.context.$implicit)),l(n,5,0,n.parent.context.$implicit.values)}),null)}function z(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,6,"ion-item",[],null,null,null,o.T,o.o)),t.pb(1,49152,null,0,a.G,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,2,"ion-label",[["localValue",""]],null,null,null,o.U,o.p)),t.pb(3,49152,null,0,a.M,[t.h,t.k,t.x],null,null),t.pb(4,540672,null,0,p.a,[d.m,t.k],{data:[0,"data"],key:[1,"key"]},null),(l()(),t.fb(16777216,null,0,1,null,P)),t.pb(6,16384,null,0,c.i,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null)],(function(l,n){var u=n.component;l(n,4,0,n.context.$implicit,"name"),l(n,6,0,u.isAttributeEnabled(n.context.$implicit),t.Bb(n.parent.parent.parent,3))}),null)}function B(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,3,"ion-list",[],null,null,null,o.V,o.q)),t.pb(1,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,z)),t.pb(3,278528,null,0,c.h,[t.N,t.K,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.product.attributes)}),null)}function E(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,41,"ion-row",[["class","purchase-row"]],null,null,null,o.Y,o.t)),t.pb(1,49152,null,0,a.fb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,18,"ion-col",[["size-md","4"],["size-sm","12"]],null,null,null,o.M,o.h)),t.pb(3,49152,null,0,a.s,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,7,"ion-row",[["class","touchspin-row ion-padding"]],null,null,null,o.Y,o.t)),t.pb(5,49152,null,0,a.fb,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,2,"ion-label",[["translate","Quantity"]],null,null,null,o.U,o.p)),t.pb(7,49152,null,0,a.M,[t.h,t.k,t.x],null,null),t.pb(8,8536064,null,0,d.f,[d.m,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.qb(9,0,null,0,2,"div",[["class","touchspin-container"]],null,null,null,null,null)),(l()(),t.qb(10,0,null,null,1,"ion-touchspin",[["size","md"]],null,[[null,"valueChange"]],(function(l,n,u){var t=!0;return"valueChange"===n&&(t=!1!==l.component.handleQuantityChange(u)&&t),t}),m.b,m.a)),t.pb(11,114688,null,0,g.a,[],{size:[0,"size"],initialValue:[1,"initialValue"]},{valueChange:"valueChange"}),(l()(),t.qb(12,0,null,0,8,"ion-row",[["class","subtotal-row ion-padding"]],null,null,null,o.Y,o.t)),t.pb(13,49152,null,0,a.fb,[t.h,t.k,t.x],null,null),(l()(),t.qb(14,0,null,0,6,"ion-label",[],null,null,null,o.U,o.p)),t.pb(15,49152,null,0,a.M,[t.h,t.k,t.x],null,null),(l()(),t.qb(16,0,null,0,1,"span",[["translate","Price"]],null,null,null,null,null)),t.pb(17,8536064,null,0,d.f,[d.m,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.qb(18,0,null,0,2,"span",[],null,null,null,null,null)),(l()(),t.Hb(19,null,["",""])),t.Db(0,f.a,[]),(l()(),t.qb(21,0,null,0,20,"ion-col",[["size-md","8"],["size-sm","12"]],null,null,null,o.M,o.h)),t.pb(22,49152,null,0,a.s,[t.h,t.k,t.x],null,null),(l()(),t.qb(23,0,null,0,18,"ion-row",[["class","purchase-buttons-row ion-padding"]],null,null,null,o.Y,o.t)),t.pb(24,49152,null,0,a.fb,[t.h,t.k,t.x],null,null),(l()(),t.qb(25,0,null,0,7,"ion-col",[],null,null,null,o.M,o.h)),t.pb(26,49152,null,0,a.s,[t.h,t.k,t.x],null,null),(l()(),t.qb(27,0,null,0,5,"ion-button",[["expand","full"],["size","medium"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.addToCart()&&t),t}),o.I,o.d)),t.pb(28,49152,null,0,a.j,[t.h,t.k,t.x],{expand:[0,"expand"],size:[1,"size"]},null),(l()(),t.qb(29,0,null,0,1,"ion-icon",[["name","cart-outline"],["slot","start"]],null,null,null,o.Q,o.l)),t.pb(30,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Hb(31,0,[" "," "])),t.Db(131072,d.l,[d.m,t.h]),(l()(),t.qb(33,0,null,0,8,"ion-col",[],null,null,null,o.M,o.h)),t.pb(34,49152,null,0,a.s,[t.h,t.k,t.x],null,null),(l()(),t.qb(35,0,null,0,6,"ion-button",[["color","danger"],["expand","full"],["size","medium"],["translate","Buy Now"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.buyNow()&&t),t}),o.I,o.d)),t.pb(36,49152,null,0,a.j,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],size:[2,"size"]},null),t.pb(37,8536064,null,0,d.f,[d.m,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.qb(38,0,null,0,1,"ion-icon",[["name","basket-outline"],["slot","start"]],null,null,null,o.Q,o.l)),t.pb(39,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.Hb(40,0,[" "," "])),t.Db(131072,d.l,[d.m,t.h])],(function(l,n){l(n,8,0,"Quantity"),l(n,11,0,"md",1),l(n,17,0,"Price"),l(n,28,0,"full","medium"),l(n,30,0,"cart-outline"),l(n,36,0,"danger","full","medium"),l(n,37,0,"Buy Now"),l(n,39,0,"basket-outline")}),(function(l,n){var u=n.component;l(n,19,0,t.Ib(n,19,0,t.Bb(n,20).transform(u.item))),l(n,31,0,t.Ib(n,31,0,t.Bb(n,32).transform("Add to Cart"))),l(n,40,0,t.Ib(n,40,0,t.Bb(n,41).transform("Buy Now")))}))}function N(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,40,null,null,null,null,null,null,null)),(l()(),t.qb(1,0,null,null,11,"ion-header",[],null,null,null,o.P,o.k)),t.pb(2,49152,null,0,a.A,[t.h,t.k,t.x],null,null),(l()(),t.qb(3,0,null,0,9,"ion-toolbar",[],null,null,null,o.jb,o.E)),t.pb(4,49152,null,0,a.yb,[t.h,t.k,t.x],null,null),(l()(),t.qb(5,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.J,o.e)),t.pb(6,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(l()(),t.qb(7,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,9).onClick(u)&&e),e}),o.G,o.b)),t.pb(8,49152,null,0,a.f,[t.h,t.k,t.x],null,null),t.pb(9,16384,null,0,a.g,[[2,a.eb],a.Eb],null,null),(l()(),t.qb(10,0,null,0,2,"ion-title",[["class","ion-text-center"],["localValue",""]],null,null,null,o.ib,o.D)),t.pb(11,49152,null,0,a.wb,[t.h,t.k,t.x],null,null),t.pb(12,540672,null,0,p.a,[d.m,t.k],{data:[0,"data"],key:[1,"key"],fallback:[2,"fallback"]},null),(l()(),t.qb(13,0,null,null,27,"ion-content",[["class","product-page"]],null,null,null,o.N,o.i)),t.pb(14,49152,null,0,a.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(15,0,null,0,2,"div",[["class","image-slide-container"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,_)),t.pb(17,16384,null,0,c.i,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.qb(18,0,null,0,4,"div",[["class","product-detail ion-padding"]],null,null,null,null,null)),(l()(),t.qb(19,0,null,null,1,"h3",[["localValue",""]],null,null,null,null,null)),t.pb(20,540672,null,0,p.a,[d.m,t.k],{data:[0,"data"],key:[1,"key"]},null),(l()(),t.qb(21,0,null,null,1,"p",[["localValue",""]],null,null,null,null,null)),t.pb(22,540672,null,0,p.a,[d.m,t.k],{data:[0,"data"],key:[1,"key"]},null),(l()(),t.fb(16777216,null,0,1,null,B)),t.pb(24,16384,null,0,c.i,[t.N,t.K],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,E)),t.pb(26,16384,null,0,c.i,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.qb(27,0,null,0,13,"ion-row",[["class","share-buttons-row ion-padding ion-justify-content-end"]],null,null,null,o.Y,o.t)),t.pb(28,49152,null,0,a.fb,[t.h,t.k,t.x],null,null),(l()(),t.qb(29,0,null,0,2,"ion-label",[["class","ion-margin-end"],["translate","Share"]],null,null,null,o.U,o.p)),t.pb(30,49152,null,0,a.M,[t.h,t.k,t.x],null,null),t.pb(31,8536064,null,0,d.f,[d.m,t.k,t.h],{translate:[0,"translate"]},null),(l()(),t.qb(32,0,null,0,2,"a",[["class","share-button"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.qb(33,0,null,null,1,"ion-icon",[["class","facebook"],["name","logo-facebook"]],null,null,null,o.Q,o.l)),t.pb(34,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(35,0,null,0,2,"a",[["class","share-button"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.qb(36,0,null,null,1,"ion-icon",[["class","twitter"],["name","logo-twitter"]],null,null,null,o.Q,o.l)),t.pb(37,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(38,0,null,0,2,"a",[["class","share-button"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.qb(39,0,null,null,1,"ion-icon",[["class","pinterest"],["name","logo-pinterest"]],null,null,null,o.Q,o.l)),t.pb(40,49152,null,0,a.B,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,12,0,u.product,"name","Product"),l(n,17,0,u.product.pictures&&u.product.pictures.length,t.Bb(n.parent,4)),l(n,20,0,u.product,"name"),l(n,22,0,u.product,"description"),l(n,24,0,u.product.attributes&&u.product.attributes.length),l(n,26,0,u.isInStock(),t.Bb(n.parent,2)),l(n,31,0,"Share"),l(n,34,0,"logo-facebook"),l(n,37,0,"logo-twitter"),l(n,40,0,"logo-pinterest")}),(function(l,n){var u=n.component;l(n,32,0,"https://www.facebook.com/sharer.php?u="+u.href),l(n,35,0,"https://twitter.com/intent/tweet?text="+u.product.name+" "+u.href),l(n,38,0,"https://www.pinterest.com/pin/create/button?media="+u.href)}))}function S(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,4,"ion-row",[["class","ion-padding"]],null,null,null,o.Y,o.t)),t.pb(1,49152,null,0,a.fb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,2,"ion-label",[["color","danger"],["localValue",""]],null,null,null,o.U,o.p)),t.pb(3,49152,null,0,a.M,[t.h,t.k,t.x],{color:[0,"color"]},null),t.pb(4,540672,null,0,p.a,[d.m,t.k],{data:[0,"data"],key:[1,"key"],fallback:[2,"fallback"]},null)],(function(l,n){var u=n.component;l(n,3,0,"danger"),l(n,4,0,u.product.stock,"outofstockMessage","Out of stock")}),null)}function A(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,3,"ion-select",[["disabled",""]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0;return"ionBlur"===n&&(e=!1!==t.Bb(l,3)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Bb(l,3)._handleChangeEvent(u.target)&&e),e}),o.ab,o.u)),t.Eb(5120,null,h.c,(function(l){return[l]}),[a.Ib]),t.pb(2,49152,null,0,a.jb,[t.h,t.k,t.x],{disabled:[0,"disabled"]},null),t.pb(3,16384,null,0,a.Ib,[t.k],null,null)],(function(l,n){l(n,2,0,"")}),null)}function J(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,5,"ion-slides",[],null,null,null,o.db,o.y)),t.pb(1,49152,null,0,a.nb,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,3,"ion-slide",[],null,null,null,o.cb,o.x)),t.pb(3,49152,null,0,a.mb,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,1,"ion-img",[["src","assets/img/no-image.png"]],null,null,null,o.R,o.m)),t.pb(5,49152,null,0,a.C,[t.h,t.k,t.x],{alt:[0,"alt"],src:[1,"src"]},null)],(function(l,n){l(n,5,0,n.component.product.name,"assets/img/no-image.png")}),null)}function j(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,10,"ion-header",[],null,null,null,o.P,o.k)),t.pb(1,49152,null,0,a.A,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,8,"ion-toolbar",[],null,null,null,o.jb,o.E)),t.pb(3,49152,null,0,a.yb,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.J,o.e)),t.pb(5,49152,null,0,a.k,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,8).onClick(u)&&e),e}),o.G,o.b)),t.pb(7,49152,null,0,a.f,[t.h,t.k,t.x],null,null),t.pb(8,16384,null,0,a.g,[[2,a.eb],a.Eb],null,null),(l()(),t.qb(9,0,null,0,1,"ion-title",[["class","ion-text-center"]],null,null,null,o.ib,o.D)),t.pb(10,49152,null,0,a.wb,[t.h,t.k,t.x],null,null),(l()(),t.qb(11,0,null,null,21,"ion-content",[["class","product-page"]],null,null,null,o.N,o.i)),t.pb(12,49152,null,0,a.t,[t.h,t.k,t.x],null,null),(l()(),t.qb(13,0,null,0,6,"div",[["class","image-slide-container"]],null,null,null,null,null)),(l()(),t.qb(14,0,null,null,5,"ion-slides",[],null,null,null,o.db,o.y)),t.pb(15,49152,null,0,a.nb,[t.h,t.k,t.x],null,null),(l()(),t.qb(16,0,null,0,3,"ion-slide",[],null,null,null,o.cb,o.x)),t.pb(17,49152,null,0,a.mb,[t.h,t.k,t.x],null,null),(l()(),t.qb(18,0,null,0,1,"ion-img",[["src","assets/img/no-image.png"]],null,null,null,o.R,o.m)),t.pb(19,49152,null,0,a.C,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.qb(20,0,null,0,12,"div",[["class","product-detail ion-padding"]],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(22,0,null,null,1,"ion-skeleton-text",[["animated",""],["class","ion-margin-bottom"],["style","height: 1.5rem;"]],null,null,null,o.bb,o.w)),t.pb(23,49152,null,0,a.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(24,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(25,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 80%; height: 1.2rem;"]],null,null,null,o.bb,o.w)),t.pb(26,49152,null,0,a.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(27,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(28,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%; height: 1.2rem;"]],null,null,null,o.bb,o.w)),t.pb(29,49152,null,0,a.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null),(l()(),t.qb(30,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.qb(31,0,null,null,1,"ion-skeleton-text",[["animated",""],["style","width: 50%; height: 1.2rem;"]],null,null,null,o.bb,o.w)),t.pb(32,49152,null,0,a.lb,[t.h,t.k,t.x],{animated:[0,"animated"]},null)],(function(l,n){l(n,19,0,"assets/img/no-image.png"),l(n,23,0,""),l(n,26,0,""),l(n,29,0,""),l(n,32,0,"")}),null)}function D(l){return t.Jb(0,[(l()(),t.fb(16777216,null,null,1,null,N)),t.pb(1,16384,null,0,c.i,[t.N,t.K],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(l()(),t.fb(0,[["outofStockMessage",2]],null,0,null,S)),(l()(),t.fb(0,[["disabledSelect",2]],null,0,null,A)),(l()(),t.fb(0,[["slidePlaceholder",2]],null,0,null,J)),(l()(),t.fb(0,[["skeleton",2]],null,0,null,j))],(function(l,n){l(n,1,0,!n.component.loading,t.Bb(n,5))}),null)}function V(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,1,"app-product",[],null,null,null,D,M)),t.pb(1,114688,null,0,C,[x.a,w.a,d.m,s.i,I.a,a.a,w.m],null,null)],(function(l,n){l(n,1,0)}),null)}var $=t.mb("app-product",C,V,{},{},[]);class F{}var K=u("+j1y"),Q=u("neiB"),Y=u("AF1L"),U=u("ziv8");u.d(n,"ProductPageModuleNgFactory",(function(){return T}));var T=t.nb(e,[],(function(l){return t.yb([t.zb(512,t.j,t.Y,[[8,[i.a,$]],[3,t.j],t.v]),t.zb(4608,c.k,c.j,[t.s,[2,c.q]]),t.zb(4608,h.g,h.g,[]),t.zb(4608,a.b,a.b,[t.x,t.g]),t.zb(4608,a.Db,a.Db,[a.b,t.j,t.p]),t.zb(4608,a.Gb,a.Gb,[a.b,t.j,t.p]),t.zb(1073742336,c.b,c.b,[]),t.zb(1073742336,h.f,h.f,[]),t.zb(1073742336,h.b,h.b,[]),t.zb(1073742336,a.Ab,a.Ab,[]),t.zb(1073742336,w.q,w.q,[[2,w.v],[2,w.m]]),t.zb(1073742336,F,F,[]),t.zb(1073742336,K.a,K.a,[]),t.zb(1073742336,Q.a,Q.a,[]),t.zb(1073742336,d.j,d.j,[]),t.zb(1073742336,Y.a,Y.a,[]),t.zb(1073742336,U.a,U.a,[]),t.zb(1073742336,e,e,[]),t.zb(1024,w.k,(function(){return[[{path:"",component:C}]]}),[])])}))}}]);