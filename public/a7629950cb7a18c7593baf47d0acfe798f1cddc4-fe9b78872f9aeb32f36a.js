/*! For license information please see a7629950cb7a18c7593baf47d0acfe798f1cddc4-fe9b78872f9aeb32f36a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"0pJf":function(e,t){e.exports={isExternalUrl:function(e){return new RegExp("^((https?:)?//)","i").test(e)}}},"0xIW":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("q1tI");t.default=function(e){r.useEffect(e,[])}},"6R+2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),o=n("q1tI"),i=n("9+Sh"),a=r.__importDefault(n("eM9k"));t.default=function(){var e=a.default({x:i.isClient?window.pageXOffset:0,y:i.isClient?window.pageYOffset:0}),t=e[0],n=e[1];return o.useEffect((function(){var e=function(){n({x:window.pageXOffset,y:window.pageYOffset})};return window.addEventListener("scroll",e,{capture:!1,passive:!0}),function(){window.removeEventListener("scroll",e)}}),[]),t}},"8+s/":function(e,t,n){"use strict";var r,o=n("q1tI"),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},"9+Sh":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDeepEqual=t.off=t.on=t.isClient=void 0;var r=n("mrSG").__importDefault(n("nkPT"));t.isClient="object"==typeof window,t.on=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.addEventListener.apply(e,t)},t.off=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return e.removeEventListener.apply(e,t)},t.isDeepEqual=r.default},Emr8:function(e,t){function n(e,t){return("/"+e+"/"+t).replace(/\/\/+/g,"/")}function r(e){return new RegExp("^((https?:)?//)","i").test(e)}e.exports={resolveLink:function(e,t){return r(e)?e:n(t,e)},normalizeBasePath:n,isExternalUrl:r}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&(n[r[o]]=e[r[o]])}return n};function u(e){return function(t){return r.createElement(l,a({attr:a({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))}))}(e.child))}}function l(e){var t=function(t){var n,o=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var i=e.attr,u=e.title,l=c(e,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,l,{className:n,style:a({color:e.color||t.color},t.style,e.style),height:o,width:o,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},"T/ZZ":function(e,t,n){var r,o,i;i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var o=e[r];if("string"!=typeof o)throw new TypeError("Url must be a string. Received "+o);""!==o&&(r>0&&(o=o.replace(/^[\/]+/,"")),o=r<e.length-1?o.replace(/[\/]+$/,""):o.replace(/[\/]+$/,"/"),t.push(o))}var i=t.join("/"),a=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=a.shift()+(a.length>0?"?":"")+a.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(o="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=o)},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,o="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(!e(t[u],a[u]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],a.get(u.value[0])))return!1;return!0}if(o&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((c=t.length)!=a.length)return!1;for(u=c;0!=u--;)if(t[u]!==a[u])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(n&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],a[l[u]]))return!1;return!0}return t!=t&&a!=a}(e,t)}catch(a){if((a.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw a}}},dcqB:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("q1tI");var r=n("qhky"),o=n("T/ZZ"),i=n.n(o),a=n("Wbzz"),c=n("qKvR");function u(e){var t=e.description,n=e.title,o=e.slug,u=e.image,l=e.children,s=Object(a.useStaticQuery)("2501019404").site.siteMetadata,f=s.siteTitle,d=s.siteTitleShort,p=s.siteUrl,h=s.defaultTitle,m=s.siteImage,b=s.siteDescription,y=s.siteLanguage,g=s.siteAuthor,v=s.siteIcon,w=n?n+" | "+f:h,O=i()(p,o),j=i()(p,u||m),x=t||b,T=[{"@context":"http://schema.org","@type":"WebSite",url:O,name:n,alternateName:d}];return Object(c.d)(r.a,{htmlAttributes:{lang:y},title:w},v&&Object(c.d)("link",{rel:"icon",href:v}),Object(c.d)("meta",{name:"description",content:x}),Object(c.d)("meta",{name:"image",content:j}),Object(c.d)("meta",{httpEquiv:"x-ua-compatible",content:"IE=edge,chrome=1"}),Object(c.d)("meta",{name:"MobileOptimized",content:"320"}),Object(c.d)("meta",{name:"HandheldFriendly",content:"True"}),Object(c.d)("meta",{name:"google",content:"notranslate"}),Object(c.d)("meta",{name:"referrer",content:"no-referrer-when-downgrade"}),Object(c.d)("meta",{property:"og:url",content:O}),Object(c.d)("meta",{property:"og:type",content:"website"}),Object(c.d)("meta",{property:"og:title",content:w}),Object(c.d)("meta",{property:"og:description",content:x}),Object(c.d)("meta",{property:"og:locale",content:y}),Object(c.d)("meta",{property:"og:site_name",content:f}),Object(c.d)("meta",{property:"og:image",content:j}),Object(c.d)("meta",{property:"og:image:secure_url",content:j}),Object(c.d)("meta",{property:"og:image:alt",content:"Banner"}),Object(c.d)("meta",{property:"og:image:type",content:"image/png"}),Object(c.d)("meta",{property:"og:image:width",content:"1200"}),Object(c.d)("meta",{property:"og:image:height",content:"630"}),Object(c.d)("meta",{name:"twitter:card",content:"summary_large_image"}),Object(c.d)("meta",{name:"twitter:title",content:w}),Object(c.d)("meta",{name:"twitter:site",content:g}),Object(c.d)("meta",{name:"twitter:creator",content:g}),Object(c.d)("meta",{name:"twitter:image",content:j}),Object(c.d)("meta",{name:"twitter:image:src",content:j}),Object(c.d)("meta",{name:"twitter:image:alt",content:"Banner"}),Object(c.d)("meta",{name:"twitter:image:width",content:"1200"}),Object(c.d)("meta",{name:"twitter:image:height",content:"630"}),Object(c.d)("script",{type:"application/ld+json"},JSON.stringify(T)),l)}u.defaultProps={title:"",description:"",slug:"",image:"",children:""}},eM9k:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),o=n("q1tI"),i=r.__importDefault(n("n5OK"));t.default=function(e){var t=o.useRef(0),n=o.useState(e),r=n[0],a=n[1],c=o.useCallback((function(e){cancelAnimationFrame(t.current),t.current=requestAnimationFrame((function(){a(e)}))}),[]);return i.default((function(){cancelAnimationFrame(t.current)})),[r,c]}},mrSG:function(e,t,n){"use strict";n.r(t),n.d(t,"__extends",(function(){return o})),n.d(t,"__assign",(function(){return i})),n.d(t,"__rest",(function(){return a})),n.d(t,"__decorate",(function(){return c})),n.d(t,"__param",(function(){return u})),n.d(t,"__metadata",(function(){return l})),n.d(t,"__awaiter",(function(){return s})),n.d(t,"__generator",(function(){return f})),n.d(t,"__createBinding",(function(){return d})),n.d(t,"__exportStar",(function(){return p})),n.d(t,"__values",(function(){return h})),n.d(t,"__read",(function(){return m})),n.d(t,"__spread",(function(){return b})),n.d(t,"__spreadArrays",(function(){return y})),n.d(t,"__spreadArray",(function(){return g})),n.d(t,"__await",(function(){return v})),n.d(t,"__asyncGenerator",(function(){return w})),n.d(t,"__asyncDelegator",(function(){return O})),n.d(t,"__asyncValues",(function(){return j})),n.d(t,"__makeTemplateObject",(function(){return x})),n.d(t,"__importStar",(function(){return S})),n.d(t,"__importDefault",(function(){return E})),n.d(t,"__classPrivateFieldGet",(function(){return _})),n.d(t,"__classPrivateFieldSet",(function(){return k}));var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function c(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a}function u(e,t){return function(n,r){t(n,r,e)}}function l(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function s(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function c(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))}function f(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var d=Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function p(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||d(t,e,n)}function h(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function y(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}function g(e,t){for(var n=0,r=t.length,o=e.length;n<r;n++,o++)e[o]=t[n];return e}function v(e){return this instanceof v?(this.v=e,this):new v(e)}function w(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||c(e,t)}))})}function c(e,t){try{(n=o[e](t)).value instanceof v?Promise.resolve(n.value.v).then(u,l):s(i[0][2],n)}catch(r){s(i[0][3],r)}var n}function u(e){c("next",e)}function l(e){c("throw",e)}function s(e,t){e(t),i.shift(),i.length&&c(i[0][0],i[0][1])}}function O(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:v(e[r](t)),done:"return"===r}:o?o(t):t}:o}}function j(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=h(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function x(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var T=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function S(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&d(t,e,n);return T(t,e),t}function E(e){return e&&e.__esModule?e:{default:e}}function _(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function k(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}},n5OK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),o=n("q1tI"),i=r.__importDefault(n("0xIW"));t.default=function(e){var t=o.useRef(e);t.current=e,i.default((function(){return function(){return t.current()}}))}},nkPT:function(e,t,n){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!=o--;){var a=i[o];if(("_owner"!==a||!t.$$typeof)&&!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},pW3x:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("mrSG"),o=n("q1tI"),i=r.__importDefault(n("eM9k")),a=n("9+Sh");t.default=function(e,t){void 0===e&&(e=1/0),void 0===t&&(t=1/0);var n=i.default({width:a.isClient?window.innerWidth:e,height:a.isClient?window.innerHeight:t}),r=n[0],c=n[1];return o.useEffect((function(){if(a.isClient){var e=function(){c({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}}),[]),r}},qhky:function(e,t,n){"use strict";(function(e){n("E9XD");var r,o,i,a,c=n("17x9"),u=n.n(c),l=n("8+s/"),s=n.n(l),f=n("bmMU"),d=n.n(f),p=n("q1tI"),h=n.n(p),m=n("YVoz"),b=n.n(m),y="bodyAttributes",g="htmlAttributes",v="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},O=(Object.keys(w).map((function(e){return w[e]})),"charset"),j="cssText",x="href",T="http-equiv",S="innerHTML",E="itemprop",_="name",k="property",C="rel",A="src",P="target",I={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",L="defer",R="encodeSpecialCharacters",q="onChangeClientState",N="titleTemplate",D=Object.keys(I).reduce((function(e,t){return e[I[t]]=t,e}),{}),z=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=Z(e,w.TITLE),n=Z(e,N);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,M);return t||r||void 0},$=function(e){return Z(e,q)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===C&&"canonical"===e[n].toLowerCase()||u===C&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==S&&c!==j&&c!==E||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=b()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;ue(w.BODY,r),ue(w.HTML,o),ce(f,d);var p={baseTag:le(w.BASE,n),linkTags:le(w.LINK,i),metaTags:le(w.META,a),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,s)},h={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),u(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),ue(w.TITLE,t)},ue=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==a.join(",")&&n.setAttribute("data-react-helmet",a.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===j)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[I[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,o=fe(n,r),[h.a.createElement(w.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=I[e]||e;if(n===S||n===j){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),h.a.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===S||e===j)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(w.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,o,r),link:de(w.LINK,i,r),meta:de(w.META,a,r),noscript:de(w.NOSCRIPT,c,r),script:de(w.SCRIPT,u,r),style:de(w.STYLE,l,r),title:de(w.TITLE,{title:f,titleAttributes:d},r)}},he=s()((function(e){return{baseTag:J([x,P],e),bodyAttributes:V(y,e),defer:Z(e,L),encode:Z(e,R),htmlAttributes:V(g,e),linkTags:Q(w.LINK,[C,x],e),metaTags:Q(w.META,[_,O,T,k,E],e),noscriptTags:Q(w.NOSCRIPT,[S],e),onChangeClientState:$(e),scriptTags:Q(w.SCRIPT,[A,S],e),styleTags:Q(w.STYLE,[j],e),title:G(e),titleAttributes:V(v,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),me=(o=he,a=i=function(e){function t(){return B(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return H({},o,((t={})[r.type]=a,t.titleAttributes=H({},i),t));case w.BODY:return H({},o,{bodyAttributes:H({},i)});case w.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Y(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(o,r)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(h.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind,t.a=me}).call(this,n("yLpj"))},tnhK:function(e,t,n){"use strict";n.d(t,"a",(function(){return B}));var r=n("q1tI"),o=n.n(r),i=n("qKvR"),a=n("wLTh"),c=n("6R+2"),u=n.n(c),l=n("pW3x"),s=n.n(l);var f=n("wTIg");var d=Object(f.a)("div",{target:"e10o0eax0"})({name:"7dasph",styles:"position:sticky;top:0;order:2;padding-top:72px;max-height:calc(100vh - 72px);overflow-y:auto;overflow-x:hidden;width:100%;max-width:200px;@media (max-width:1200px){position:relative;top:auto;order:0;max-width:100%;margin-left:0;padding-top:0;}"}),p=Object(f.a)("div",{target:"e10o0eax1"})({name:"1hx1hrk",styles:"h2{text-transform:uppercase;font-size:14px;font-weight:bold;letter-spacing:0.142em;margin-top:0rem;border:none;margin:0 0 16px 0;}nav ul{padding-left:0;margin-bottom:0;list-style:none;li{margin-bottom:12px;line-height:1.1;a{font-size:14px;font-weight:400;text-decoration:none;transition:all 0.2s;overflow-wrap:break-word;&:hover{text-decoration:underline;}}}}@media (max-width:1200px){margin:0 0 24px 0;padding-bottom:16px;border-bottom:1px solid rgba(120,117,122,0.2);}"});function h(e){var t=e.headings,n=e.disableTOC,o=e.contentRef,c=u()().y,l=Object(a.b)(),f=s()(),h=f.width,m=f.height,b=Object(r.useState)([]),y=b[0],g=b[1],v=h<=1200;Object(r.useEffect)((function(){if(!v||n){var e,t=null===(e=o.current)||void 0===e?void 0:e.querySelectorAll("h2, h3");g(t&&Array.from(t).map((function(e){var t=e.querySelector("a");return t?{id:e.id,offset:e.offsetTop+t.offsetTop}:{}})).filter(Boolean))}}),[h,m,o,v,n]);var w=Object(r.useMemo)((function(){if(!v||n){var e=c+m/2;if(y)for(var t=y.length-1;t>=0;t-=1){var r=y[t],o=r.id;if(e>=r.offset)return o}}return null}),[y,m,c,v,n]);return n?Object(i.d)(d,null):Object(i.d)(d,null,Object(i.d)(p,null,Object(i.d)("h2",null,"On this page"),Object(i.d)("nav",null,Object(i.d)("ul",null,t.filter((function(e){return 2===e.depth||3===e.depth})).map((function(e){var t=e.value.toString().toLowerCase().trim().replace(/\s/g,"-").replace(/[^\w\-\u00b4\u00C0-\u00C3\u00c7\u00C9-\u00CA\u00CD\u00D3-\u00D5\u00DA\u00E0-\u00E3\u00E7\u00E9-\u00EA\u00ED\u00F3-\u00F5\u00FA]+/g,"");return Object(i.d)("li",{key:e.value,style:{marginLeft:3===e.depth?"8px":null}},Object(i.d)("a",{href:"#"+t,style:{color:w===t?l.colors.primary:l.colors.text}},e.value))}))))))}h.defaultProps={headings:null};var m=n("Wbzz"),b=n("Emr8");var y=Object(f.a)("aside",{target:"e1wh78ri0"})("width:100%;overflow-y:auto;display:flex;justify-content:space-between;align-items:center;flex-direction:column;position:sticky;top:0;padding-top:36px;transition:transform 0.5s;height:calc(100vh - 1px);nav{width:100%;padding-top:24px;align-self:flex-start;flex:1;}@media (max-width:780px){max-width:75%;min-width:auto;z-index:1001;position:fixed;top:0;bottom:0;left:0;padding-top:32px;background:",(function(e){return e.theme.colors.background}),";transform:translate3d( ",(function(e){return e.isMenuOpen?"0":"-100%"}),",0,0 );}"),g=Object(f.a)("div",{target:"e1wh78ri1"})({name:"2yrou",styles:"width:100%;a{width:100%;padding-left:30px;display:flex;justify-content:flex-start;align-items:center;}"}),v=Object(f.a)("ul",{target:"e1wh78ri2"})({name:"mbmci8",styles:"list-style:none;width:100%;padding-left:0;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;"}),w=Object(f.a)("li",{target:"e1wh78ri3"})("padding-left:30px;width:100%;text-transform:uppercase;font-size:14px;font-weight:bold;margin-top:20px;color:",(function(e){return e.theme.colors.title}),";letter-spacing:0.142em;"),O=Object(f.a)("li",{target:"e1wh78ri4"})("font-size:15px;width:100%;transition:all 200ms ease-in-out;padding:0 20px;cursor:pointer;a,span{display:block;font-size:15px;color:",(function(e){return e.theme.colors.text}),";background-color:",(function(e){return e.theme.colors.background}),";padding:4px 10px;margin:4px 0;border-radius:4px;font-weight:normal;text-decoration:none;width:100%;height:100%;display:flex;justify-content:flex-start;align-items:center;cursor:pointer;margin:0 auto;transition:all 0.2s ease;svg{width:20px;height:20px;margin-right:10px;}&:not(.active-link):hover{color:",(function(e){return e.theme.colors.primary}),";}&.active-link{color:",(function(e){return e.theme.colors.primary}),";background-color:",(function(e){return e.theme.colors.shape}),";}@media (max-width:780px){&.active-link{background:",(function(e){return e.theme.colors.shape}),";}}}"),j=Object(f.a)(v,{target:"e1wh78ri5"})({name:"1lo7kqu",styles:"margin:5px 0 0 0;"}),x=n("0pJf"),T=n("Tgqd");function S(e){var t=e.link,n=e.label;return Object(i.d)("a",{href:t,rel:"noopener noreferrer"},n,Object(i.d)(T.a,{style:{width:"16px",height:"16px",marginLeft:"10px"}}))}function E(e){var t=e.link,n=e.label;return Object(i.d)(m.Link,{to:t,activeClassName:"active-link"},n)}function _(e){return Object(i.d)("svg",{width:180,height:34,viewBox:"0 0 180 34",fill:"none"})}function k(e){var t=e.children,n=e.text;return Object(i.d)(o.a.Fragment,null,Object(i.d)(w,null,n),Object(i.d)(j,null,t))}function C(e){var t=e.isMenuOpen,n=Object(m.useStaticQuery)("2328931024").site.siteMetadata.basePath,r=function(){var e=Object(m.useStaticQuery)("1954253342"),t=e.site.siteMetadata.basePath,n=e.allSidebarItems.edges;return t?n.map((function(e){var n=e.node,r=n.label,o=n.link,i=n.items,a=n.id;return Array.isArray(i)&&(i=i.map((function(e){return{label:e.label,link:Object(b.resolveLink)(e.link,t)}}))),{node:{id:a,label:r,items:i,link:Object(b.resolveLink)(o,t)}}})):n}();function o(e,t){return Object(x.isExternalUrl)(e)?Object(i.d)(S,{link:e,label:t}):Object(i.d)(E,{link:e,label:t})}return Object(i.d)(y,{isMenuOpen:t},Object(i.d)(g,null,Object(i.d)(m.Link,{to:n,"aria-label":"Go to home page"},Object(i.d)(_,{"aria-hidden":"true"}))),Object(i.d)("nav",null,Object(i.d)(v,null,r.map((function(e){var t=e.node,n=t.label,r=t.link,a=t.items,c=t.id;if(Array.isArray(a)){var u=a.map((function(e){return Object(i.d)(O,{key:e.link},o(e.link,e.label))}));return Object(i.d)(k,{key:c,text:n},u)}return Object(i.d)(O,{key:c},o(r,n))})))))}var A=n("tjd4");var P=Object(f.a)("header",{target:"esnpb7p0"})({name:"9q3p0l",styles:"display:flex;justify-content:flex-start;align-items:center;height:40px;margin-bottom:24px;h2{margin:0;border:none;padding:0;font-size:18px;@media (max-width:359px){font-size:14px;}}button{border:none;background:none;cursor:pointer;margin-right:16px;display:flex;justify-content:flex-start;align-items:center;}@media (min-width:780px){display:none;}"});function I(e){var t=e.handleMenuOpen,n=Object(m.useStaticQuery)("973074209").site.siteMetadata.siteTitle;return Object(i.d)(P,null,Object(i.d)("button",{"aria-label":"Open sidebar",type:"button",onClick:t},Object(i.d)(A.a,{size:23,"aria-hidden":"true"})),Object(i.d)("h2",null,n))}var M=n("wx14"),L=n("zLVn");function R(e){var t=e.isMenuOpen,n=Object(L.a)(e,["isMenuOpen"]);return Object(i.d)("div",Object(M.a)({css:Object(i.c)("::after{content:'';position:fixed;width:100%;height:100%;left:0;right:0;bottom:0;background-color:rgba(0,0,0,0.8);z-index:999;display:",t?"block":"none",";}"),"aria-label":"Close menu"},n))}R.defaultProps={isMenuOpen:!1};var q=Object(f.a)("div",{target:"eees1d50"})({name:"1i3ij69",styles:"width:100%;max-width:1400px;margin:0 auto;padding:0 24px;display:grid;grid-template-columns:280px calc(100% - 320px);grid-auto-flow:row;grid-gap:40px;@media (max-width:780px){padding:24px;grid-template-columns:100%;}"}),N=Object(f.a)("main",{target:"eees1d51"})({name:"19vacph",styles:"height:100%;padding-top:36px;width:100%;display:flex;justify-content:flex-start;position:relative;@media (max-width:1200px){flex-direction:column;}@media (max-width:780px){padding-top:0;}"}),D=Object(f.a)("div",{target:"eees1d52"})({name:"oprxly",styles:"width:100%;max-width:calc(75% - 64px);padding-right:64px;@media (max-width:1200px){max-width:100%;padding-right:0;order:3;}h1,h2,h3,h4,h5,h6{overflow-wrap:break-word;}"});var z={name:"enx1eb",styles:"display:none;@media (max-width:1200px){display:block;}"},F={name:"1n3b8my",styles:"@media (max-width:1200px){display:none;}"};function B(e){var t=e.children,n=e.disableTableOfContents,o=e.title,a=e.headings,c=Object(r.useRef)(null),u=Object(r.useState)(!1),l=u[0],s=u[1],f=!0===n||!a||0===a.length;function d(){s(!l)}return Object(i.d)(r.Fragment,null,Object(i.d)(R,{isMenuOpen:l,onClick:d}),Object(i.d)(q,null,Object(i.d)(C,{isMenuOpen:l}),Object(i.d)(N,null,Object(i.d)(I,{handleMenuOpen:d}),o&&Object(i.d)("h1",{css:z},o),Object(i.d)(D,{ref:c},o&&Object(i.d)("h1",{css:F},o),t),Object(i.d)(h,{headings:a,disableTOC:f,contentRef:c}))))}B.defaultProps={disableTableOfContents:!1,title:"",headings:null}}}]);
//# sourceMappingURL=a7629950cb7a18c7593baf47d0acfe798f1cddc4-fe9b78872f9aeb32f36a.js.map