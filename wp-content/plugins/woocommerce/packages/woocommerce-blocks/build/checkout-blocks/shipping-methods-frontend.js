(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[45],{102:function(e,t,n){"use strict";var c=n(11),a=n.n(c),s=n(0),o=n(138),i=n(4),l=n.n(i);n(192);const r=e=>({thousandSeparator:e.thousandSeparator,decimalSeparator:e.decimalSeparator,decimalScale:e.minorUnit,fixedDecimalScale:!0,prefix:e.prefix,suffix:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:n,currency:c,onValueChange:i,displayType:p="text",...d}=e;const b="string"==typeof n?parseInt(n,10):n;if(!Number.isFinite(b))return null;const u=b/10**c.minorUnit;if(!Number.isFinite(u))return null;const m=l()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),g={...d,...r(c),value:void 0,currency:void 0,onValueChange:void 0},h=i?e=>{const t=+e.value*10**c.minorUnit;i(t)}:()=>{};return Object(s.createElement)(o.a,a()({className:m,displayType:p},g,{value:u,onValueChange:h}))}},135:function(e,t,n){"use strict";var c=n(0);n(191),t.a=()=>Object(c.createElement)("span",{className:"wc-block-components-spinner","aria-hidden":"true"})},137:function(e,t,n){"use strict";var c=n(0),a=n(1),s=n(4),o=n.n(s),i=(n(193),n(135));t.a=e=>{let{children:t,className:n,screenReaderLabel:s,showSpinner:l=!1,isLoading:r=!0}=e;return Object(c.createElement)("div",{className:o()(n,{"wc-block-components-loading-mask":r})},r&&l&&Object(c.createElement)(i.a,null),Object(c.createElement)("div",{className:o()({"wc-block-components-loading-mask__children":r}),"aria-hidden":r},t),r&&Object(c.createElement)("span",{className:"screen-reader-text"},s||Object(a.__)("Loading…","woocommerce")))}},191:function(e,t){},192:function(e,t){},193:function(e,t){},22:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a);t.a=e=>{let t,{label:n,screenReaderLabel:a,wrapperElement:o,wrapperProps:i={}}=e;const l=null!=n,r=null!=a;return!l&&r?(t=o||"span",i={...i,className:s()(i.className,"screen-reader-text")},Object(c.createElement)(t,i,a)):(t=o||c.Fragment,l&&r&&n!==a?Object(c.createElement)(t,i,Object(c.createElement)("span",{"aria-hidden":"true"},n),Object(c.createElement)("span",{className:"screen-reader-text"},a)):Object(c.createElement)(t,i,n))}},260:function(e,t,n){"use strict";var c=n(11),a=n.n(c),s=n(0),o=n(4),i=n.n(o);n(261),t.a=e=>{let{children:t,className:n,headingLevel:c,...o}=e;const l=i()("wc-block-components-title",n),r="h"+c;return Object(s.createElement)(r,a()({className:l},o),t)}},261:function(e,t){},262:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(263);t.a=e=>{let{checked:t,name:n,onChange:a,option:i}=e;const{value:l,label:r,description:p,secondaryLabel:d,secondaryDescription:b}=i;return Object(c.createElement)("label",{className:s()("wc-block-components-radio-control__option",{"wc-block-components-radio-control__option-checked":t}),htmlFor:`${n}-${l}`},Object(c.createElement)("input",{id:`${n}-${l}`,className:"wc-block-components-radio-control__input",type:"radio",name:n,value:l,onChange:e=>a(e.target.value),checked:t,"aria-describedby":s()({[`${n}-${l}__label`]:r,[`${n}-${l}__secondary-label`]:d,[`${n}-${l}__description`]:p,[`${n}-${l}__secondary-description`]:b})}),Object(c.createElement)(o.a,{id:`${n}-${l}`,label:r,secondaryLabel:d,description:p,secondaryDescription:b}))}},263:function(e,t,n){"use strict";var c=n(0);t.a=e=>{let{label:t,secondaryLabel:n,description:a,secondaryDescription:s,id:o}=e;return Object(c.createElement)("div",{className:"wc-block-components-radio-control__option-layout"},Object(c.createElement)("div",{className:"wc-block-components-radio-control__label-group"},t&&Object(c.createElement)("span",{id:o&&o+"__label",className:"wc-block-components-radio-control__label"},t),n&&Object(c.createElement)("span",{id:o&&o+"__secondary-label",className:"wc-block-components-radio-control__secondary-label"},n)),Object(c.createElement)("div",{className:"wc-block-components-radio-control__description-group"},a&&Object(c.createElement)("span",{id:o&&o+"__description",className:"wc-block-components-radio-control__description"},a),s&&Object(c.createElement)("span",{id:o&&o+"__secondary-description",className:"wc-block-components-radio-control__secondary-description"},s)))}},267:function(e,t){},270:function(e,t,n){"use strict";var c=n(1);t.a=e=>{let{defaultTitle:t=Object(c.__)("Step","woocommerce"),defaultDescription:n=Object(c.__)("Step description text.","woocommerce"),defaultShowStepNumber:a=!0}=e;return{title:{type:"string",default:t},description:{type:"string",default:n},showStepNumber:{type:"boolean",default:a}}}},284:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(13),i=n(262);n(285);const l=e=>{let{className:t="",id:n,selected:a,onChange:r=(()=>{}),options:p=[]}=e;const d=Object(o.useInstanceId)(l),b=n||d;return p.length?Object(c.createElement)("div",{className:s()("wc-block-components-radio-control",t)},p.map(e=>Object(c.createElement)(i.a,{key:`${b}-${e.value}`,name:"radio-control-"+b,checked:e.value===a,option:e,onChange:t=>{r(t),"function"==typeof e.onChange&&e.onChange(t)}}))):null};t.a=l},285:function(e,t){},290:function(e,t,n){"use strict";var c=n(0),a=n(4),s=n.n(a),o=n(260);n(267);const i=e=>{let{title:t,stepHeadingContent:n}=e;return Object(c.createElement)("div",{className:"wc-block-components-checkout-step__heading"},Object(c.createElement)(o.a,{"aria-hidden":"true",className:"wc-block-components-checkout-step__title",headingLevel:"2"},t),!!n&&Object(c.createElement)("span",{className:"wc-block-components-checkout-step__heading-content"},n))};t.a=e=>{let{id:t,className:n,title:a,legend:o,description:l,children:r,disabled:p=!1,showStepNumber:d=!0,stepHeadingContent:b=(()=>{})}=e;const u=o||a?"fieldset":"div";return Object(c.createElement)(u,{className:s()(n,"wc-block-components-checkout-step",{"wc-block-components-checkout-step--with-step-number":d,"wc-block-components-checkout-step--disabled":p}),id:t,disabled:p},!(!o&&!a)&&Object(c.createElement)("legend",{className:"screen-reader-text"},o||a),!!a&&Object(c.createElement)(i,{title:a,stepHeadingContent:b()}),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__container"},!!l&&Object(c.createElement)("p",{className:"wc-block-components-checkout-step__description"},l),Object(c.createElement)("div",{className:"wc-block-components-checkout-step__content"},r)))}},310:function(e,t){},325:function(e,t,n){"use strict";var c=n(8),a=n(0),s=n(4),o=n.n(s),i=n(13),l=n(40);t.a=function({icon:e,children:t,label:n,instructions:s,className:r,notices:p,preview:d,isColumnLayout:b,...u}){const[m,{width:g}]=Object(i.useResizeObserver)();let h;"number"==typeof g&&(h={"is-large":g>=480,"is-medium":g>=160&&g<480,"is-small":g<160});const O=o()("components-placeholder",r,h),j=o()("components-placeholder__fieldset",{"is-column-layout":b});return Object(a.createElement)("div",Object(c.a)({},u,{className:O}),m,p,d&&Object(a.createElement)("div",{className:"components-placeholder__preview"},d),Object(a.createElement)("div",{className:"components-placeholder__label"},Object(a.createElement)(l.a,{icon:e}),n),!!s&&Object(a.createElement)("div",{className:"components-placeholder__instructions"},s),Object(a.createElement)("div",{className:j},t))}},332:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(2),a=n(0),s=n(34),o=n(65),i=n(64);const l=()=>{const{needsShipping:e}=Object(i.a)(),{useShippingAsBilling:t,setUseShippingAsBilling:n}=Object(s.b)(),{billingData:l,setBillingData:r,shippingAddress:p,setShippingAddress:d}=Object(o.a)(),b=Object(a.useCallback)(e=>{r({email:e})},[r]),u=Object(a.useCallback)(e=>{r({phone:e})},[r]),m=Object(a.useCallback)(e=>{d({phone:e})},[d]);return{shippingAddress:p,billingData:l,setShippingAddress:d,setBillingData:r,setEmail:b,setBillingPhone:u,setShippingPhone:m,defaultAddressFields:c.defaultAddressFields,useShippingAsBilling:t,setUseShippingAsBilling:n,showShippingFields:e,showBillingFields:!e||!t}}},337:function(e,t,n){"use strict";var c=n(0),a=n(1),s=n(20),o=n(137),i=n(10),l=n(380),r=n(31),p=n(27),d=n(4),b=n.n(d),u=n(18),m=n(22),g=n(67),h=n(284),O=n(263),j=n(37),_=n(102),k=n(2);const w=e=>{const t=Object(k.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(u.decodeEntities)(e.name),value:e.rate_id,description:Object(c.createElement)(c.Fragment,null,Number.isFinite(t)&&Object(c.createElement)(_.a,{currency:Object(j.getCurrencyFromPriceResponse)(e),value:t}),Number.isFinite(t)&&e.delivery_time?" — ":null,Object(u.decodeEntities)(e.delivery_time))}};var E=e=>{let{className:t="",noResultsMessage:n,onSelectRate:a,rates:s,renderOption:o=w,selectedRate:i}=e;const l=(null==i?void 0:i.rate_id)||"",[r,p]=Object(c.useState)(l);if(Object(c.useEffect)(()=>{l&&p(l)},[l]),0===s.length)return n;if(s.length>1)return Object(c.createElement)(h.a,{className:t,onChange:e=>{p(e),a(e)},selected:r,options:s.map(o)});const{label:d,secondaryLabel:b,description:u,secondaryDescription:m}=o(s[0]);return Object(c.createElement)(O.a,{label:d,secondaryLabel:b,description:u,secondaryDescription:m})};n(310);var f=e=>{let{packageId:t,className:n="",noResultsMessage:s,renderOption:o,packageData:l,collapsible:r=!1,collapse:p=!1,showItems:d=!1}=e;const{selectShippingRate:h}=Object(g.a)(),O=Object(c.createElement)(c.Fragment,null,(d||r)&&Object(c.createElement)("div",{className:"wc-block-components-shipping-rates-control__package-title"},l.name),d&&Object(c.createElement)("ul",{className:"wc-block-components-shipping-rates-control__package-items"},Object.values(l.items).map(e=>{const t=Object(u.decodeEntities)(e.name),n=e.quantity;return Object(c.createElement)("li",{key:e.key,className:"wc-block-components-shipping-rates-control__package-item"},Object(c.createElement)(m.a,{label:n>1?`${t} × ${n}`:""+t,screenReaderLabel:Object(a.sprintf)(
/* translators: %1$s name of the product (ie: Sunglasses), %2$d number of units in the current cart package */
Object(a._n)("%1$s (%2$d unit)","%1$s (%2$d units)",n,"woocommerce"),t,n)}))}))),j=Object(c.createElement)(E,{className:n,noResultsMessage:s,rates:l.shipping_rates,onSelectRate:e=>h(e,t),selectedRate:l.shipping_rates.find(e=>e.selected),renderOption:o});return r?Object(c.createElement)(i.Panel,{className:"wc-block-components-shipping-rates-control__package",initialOpen:!p,title:O},j):Object(c.createElement)("div",{className:b()("wc-block-components-shipping-rates-control__package",n)},O,j)};const v=e=>{let{packages:t,collapse:n,showItems:a,collapsible:s,noResultsMessage:o,renderOption:i}=e;return t.length?Object(c.createElement)(c.Fragment,null,t.map(e=>{let{package_id:t,...l}=e;return Object(c.createElement)(f,{key:t,packageId:t,packageData:l,collapsible:s,collapse:n,showItems:a,noResultsMessage:o,renderOption:i})})):null};t.a=e=>{let{shippingRates:t,isLoadingRates:n,className:d,collapsible:b=!1,noResultsMessage:u,renderOption:m,context:g}=e;Object(c.useEffect)(()=>{if(n)return;const e=Object(l.a)(t),c=Object(l.b)(t);1===e?Object(s.speak)(Object(a.sprintf)(
/* translators: %d number of shipping options found. */
Object(a._n)("%d shipping option was found.","%d shipping options were found.",c,"woocommerce"),c)):Object(s.speak)(Object(a.sprintf)(
/* translators: %d number of shipping packages packages. */
Object(a._n)("Shipping option searched for %d package.","Shipping options searched for %d packages.",e,"woocommerce"),e)+" "+Object(a.sprintf)(
/* translators: %d number of shipping options available. */
Object(a._n)("%d shipping option was found","%d shipping options were found",c,"woocommerce"),c))},[n,t]);const{extensions:h,receiveCart:O,...j}=Object(r.a)(),_={className:d,collapsible:b,noResultsMessage:u,renderOption:m,extensions:h,cart:j,components:{ShippingRatesControlPackage:f},context:g},{isEditor:k}=Object(p.a)();return Object(c.createElement)(o.a,{isLoading:n,screenReaderLabel:Object(a.__)("Loading shipping rates…","woocommerce"),showSpinner:!0},k?Object(c.createElement)(v,{packages:t,noResultsMessage:u,renderOption:m}):Object(c.createElement)(c.Fragment,null,Object(c.createElement)(i.ExperimentalOrderShippingPackages.Slot,_),Object(c.createElement)(i.ExperimentalOrderShippingPackages,null,Object(c.createElement)(v,{packages:t,noResultsMessage:u,renderOption:m}))))}},380:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));const c=e=>e.length,a=e=>e.reduce((function(e,t){return e+t.shipping_rates.length}),0)},382:function(e,t){},383:function(e,t){},432:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(4),s=n.n(a),o=n(120),i=n(290),l=n(34),r=n(332),p=n(1),d=n(64),b=n(337),u=n(380),m=n(37),g=n(102),h=n(27),O=n(18),j=n(94),_=n(2),k=n(325),w=n(49),E=n(105),f=n(15),v=Object(c.createElement)(f.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(c.createElement)(f.Path,{d:"M3 6.75C3 5.784 3.784 5 4.75 5H15V7.313l.05.027 5.056 2.73.394.212v3.468a1.75 1.75 0 01-1.75 1.75h-.012a2.5 2.5 0 11-4.975 0H9.737a2.5 2.5 0 11-4.975 0H3V6.75zM13.5 14V6.5H4.75a.25.25 0 00-.25.25V14h.965a2.493 2.493 0 011.785-.75c.7 0 1.332.287 1.785.75H13.5zm4.535 0h.715a.25.25 0 00.25-.25v-2.573l-4-2.16v4.568a2.487 2.487 0 011.25-.335c.7 0 1.332.287 1.785.75zM6.282 15.5a1.002 1.002 0 00.968 1.25 1 1 0 10-.968-1.25zm9 0a1 1 0 101.937.498 1 1 0 00-1.938-.498z"}));n(383);var N=()=>Object(c.createElement)(k.a,{icon:Object(c.createElement)(E.a,{icon:v}),label:Object(p.__)("Shipping options","woocommerce"),className:"wc-block-checkout__no-shipping-placeholder"},Object(c.createElement)("span",{className:"wc-block-checkout__no-shipping-placeholder-description"},Object(p.__)("Your store does not have any Shipping Options configured. Once you have added your Shipping Options they will appear here.","woocommerce")),Object(c.createElement)(w.a,{isSecondary:!0,href:_.ADMIN_URL+"admin.php?page=wc-settings&tab=shipping",target:"_blank",rel:"noopener noreferrer"},Object(p.__)("Configure Shipping Options","woocommerce")));n(382);const y=e=>{const t=Object(_.getSetting)("displayCartPricesIncludingTax",!1)?parseInt(e.price,10)+parseInt(e.taxes,10):parseInt(e.price,10);return{label:Object(O.decodeEntities)(e.name),value:e.rate_id,description:Object(O.decodeEntities)(e.description),secondaryLabel:Object(c.createElement)(g.a,{currency:Object(m.getCurrencyFromPriceResponse)(e),value:t}),secondaryDescription:Object(O.decodeEntities)(e.delivery_time)}};var S=()=>{const{isEditor:e}=Object(h.a)(),{shippingRates:t,needsShipping:n,isLoadingRates:a,hasCalculatedShipping:o}=Object(d.a)();if(!n)return null;const i=Object(u.a)(t);return e||o||i?Object(c.createElement)(c.Fragment,null,e&&!i?Object(c.createElement)(N,null):Object(c.createElement)(b.a,{noResultsMessage:Object(c.createElement)(j.a,{isDismissible:!1,className:s()("wc-block-components-shipping-rates-control__no-results-notice","woocommerce-error")},Object(p.__)("There are no shipping options available. Please check your shipping address.","woocommerce")),renderOption:y,shippingRates:t,isLoadingRates:a,context:"woocommerce/checkout"})):Object(c.createElement)("p",null,Object(p.__)("Shipping options will be displayed here after entering your full shipping address.","woocommerce"))},R=n(270),C={...Object(R.a)({defaultTitle:Object(p.__)("Shipping options","woocommerce"),defaultDescription:""}),allowCreateAccount:{type:"boolean",default:!1},className:{type:"string",default:""},lock:{type:"object",default:{move:!0,remove:!0}}};t.default=Object(o.withFilteredAttributes)(C)(e=>{let{title:t,description:n,showStepNumber:a,children:o,className:p}=e;const{isProcessing:d}=Object(l.b)(),{showShippingFields:b}=Object(r.a)();return b?Object(c.createElement)(i.a,{id:"shipping-option",disabled:d,className:s()("wc-block-checkout__shipping-option",p),title:t,description:n,showStepNumber:a},Object(c.createElement)(S,null),o):null})}}]);