"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{6579:(S,M,i)=>{i.d(M,{c:()=>e});var f=i(4363),u=i(4081),d=i(405);const e=(o,r)=>{let t,s;const _=(c,w,y)=>{if(typeof document>"u")return;const C=document.elementFromPoint(c,w);C&&r(C)?C!==t&&(a(),m(C,y)):a()},m=(c,w)=>{t=c,s||(s=t);const y=t;(0,f.w)(()=>y.classList.add("ion-activated")),w()},a=(c=!1)=>{if(!t)return;const w=t;(0,f.w)(()=>w.classList.remove("ion-activated")),c&&s!==t&&t.click(),t=void 0};return(0,d.createGesture)({el:o,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>_(c.currentX,c.currentY,u.a),onMove:c=>_(c.currentX,c.currentY,u.b),onEnd:()=>{a(!0),(0,u.h)(),s=void 0}})}},8438:(S,M,i)=>{i.d(M,{g:()=>u});var f=i(8476);const u=()=>{if(void 0!==f.w)return f.w.Capacitor}},5572:(S,M,i)=>{i.d(M,{c:()=>f,i:()=>u});const f=(d,e,o)=>"function"==typeof o?o(d,e):"string"==typeof o?d[o]===e[o]:Array.isArray(e)?e.includes(d):d===e,u=(d,e,o)=>void 0!==d&&(Array.isArray(d)?d.some(r=>f(r,e,o)):f(d,e,o))},3351:(S,M,i)=>{i.d(M,{g:()=>f});const f=(r,t,s,_,m)=>d(r[1],t[1],s[1],_[1],m).map(a=>u(r[0],t[0],s[0],_[0],a)),u=(r,t,s,_,m)=>m*(3*t*Math.pow(m-1,2)+m*(-3*s*m+3*s+_*m))-r*Math.pow(m-1,3),d=(r,t,s,_,m)=>o((_-=m)-3*(s-=m)+3*(t-=m)-(r-=m),3*s-6*t+3*r,3*t-3*r,r).filter(c=>c>=0&&c<=1),o=(r,t,s,_)=>{if(0===r)return((r,t,s)=>{const _=t*t-4*r*s;return _<0?[]:[(-t+Math.sqrt(_))/(2*r),(-t-Math.sqrt(_))/(2*r)]})(t,s,_);const m=(3*(s/=r)-(t/=r)*t)/3,a=(2*t*t*t-9*t*s+27*(_/=r))/27;if(0===m)return[Math.pow(-a,1/3)];if(0===a)return[Math.sqrt(-m),-Math.sqrt(-m)];const c=Math.pow(a/2,2)+Math.pow(m/3,3);if(0===c)return[Math.pow(a/2,.5)-t/3];if(c>0)return[Math.pow(-a/2+Math.sqrt(c),1/3)-Math.pow(a/2+Math.sqrt(c),1/3)-t/3];const w=Math.sqrt(Math.pow(-m/3,3)),y=Math.acos(-a/(2*Math.sqrt(Math.pow(-m/3,3)))),C=2*Math.pow(w,1/3);return[C*Math.cos(y/3)-t/3,C*Math.cos((y+2*Math.PI)/3)-t/3,C*Math.cos((y+4*Math.PI)/3)-t/3]}},7464:(S,M,i)=>{i.d(M,{i:()=>f});const f=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(S,M,i)=>{i.r(M),i.d(M,{startFocusVisible:()=>e});const f="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],e=o=>{let r=[],t=!0;const s=o?o.shadowRoot:document,_=o||document.body,m=p=>{r.forEach(h=>h.classList.remove(f)),p.forEach(h=>h.classList.add(f)),r=p},a=()=>{t=!1,m([])},c=p=>{t=d.includes(p.key),t||m([])},w=p=>{if(t&&void 0!==p.composedPath){const h=p.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));m(h)}},y=()=>{s.activeElement===_&&m([])};return s.addEventListener("keydown",c),s.addEventListener("focusin",w),s.addEventListener("focusout",y),s.addEventListener("touchstart",a,{passive:!0}),s.addEventListener("mousedown",a),{destroy:()=>{s.removeEventListener("keydown",c),s.removeEventListener("focusin",w),s.removeEventListener("focusout",y),s.removeEventListener("touchstart",a),s.removeEventListener("mousedown",a)},setFocus:m}}},8281:(S,M,i)=>{i.d(M,{c:()=>u});var f=i(5638);const u=r=>{const t=r;let s;return{hasLegacyControl:()=>{if(void 0===s){const m=void 0!==t.label||d(t),a=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,c=(0,f.h)(t);s=!0===t.legacy||!m&&!a&&null!==c}return s}}},d=r=>!!(e.includes(r.tagName)&&null!==r.querySelector('[slot="label"]')||o.includes(r.tagName)&&""!==r.textContent),e=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],o=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4081:(S,M,i)=>{i.d(M,{I:()=>u,a:()=>t,b:()=>s,c:()=>r,d:()=>m,h:()=>_});var f=i(8438),u=function(a){return a.Heavy="HEAVY",a.Medium="MEDIUM",a.Light="LIGHT",a}(u||{});const e={getEngine(){const a=window.TapticEngine;if(a)return a;const c=(0,f.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,f.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,f.g)(),impact(a){const c=this.getEngine();if(!c)return;const w=this.isCapacitor()?a.style:a.style.toLowerCase();c.impact({style:w})},notification(a){const c=this.getEngine();if(!c)return;const w=this.isCapacitor()?a.type:a.type.toLowerCase();c.notification({type:w})},selection(){const a=this.isCapacitor()?u.Light:"light";this.impact({style:a})},selectionStart(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionStart():a.gestureSelectionStart())},selectionChanged(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionChanged():a.gestureSelectionChanged())},selectionEnd(){const a=this.getEngine();a&&(this.isCapacitor()?a.selectionEnd():a.gestureSelectionEnd())}},o=()=>e.available(),r=()=>{o()&&e.selection()},t=()=>{o()&&e.selectionStart()},s=()=>{o()&&e.selectionChanged()},_=()=>{o()&&e.selectionEnd()},m=a=>{o()&&e.impact(a)}},2885:(S,M,i)=>{i.d(M,{I:()=>r,a:()=>m,b:()=>o,c:()=>w,d:()=>C,f:()=>a,g:()=>_,i:()=>s,p:()=>y,r:()=>p,s:()=>c});var f=i(467),u=i(5638),d=i(4929);const o="ion-content",r=".ion-content-scroll-host",t="".concat(o,", ").concat(r),s=h=>"ION-CONTENT"===h.tagName,_=function(){var h=(0,f.A)(function*(g){return s(g)?(yield new Promise(n=>(0,u.c)(g,n)),g.getScrollElement()):g});return function(n){return h.apply(this,arguments)}}(),m=h=>h.querySelector(r)||h.querySelector(t),a=h=>h.closest(t),c=(h,g)=>s(h)?h.scrollToTop(g):Promise.resolve(h.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),w=(h,g,n,v)=>s(h)?h.scrollByPoint(g,n,v):Promise.resolve(h.scrollBy({top:n,left:g,behavior:v>0?"smooth":"auto"})),y=h=>(0,d.b)(h,o),C=h=>{if(s(h)){const n=h.scrollY;return h.scrollY=!1,n}return h.style.setProperty("overflow","hidden"),!0},p=(h,g)=>{s(h)?h.scrollY=g:h.style.removeProperty("overflow")}},6726:(S,M,i)=>{i.d(M,{a:()=>f,b:()=>w,c:()=>t,d:()=>y,e:()=>O,f:()=>r,g:()=>C,h:()=>d,i:()=>u,j:()=>v,k:()=>E,l:()=>s,m:()=>a,n:()=>p,o:()=>m,p:()=>o,q:()=>e,r:()=>n,s:()=>l,t:()=>c,u:()=>h,v:()=>g,w:()=>_});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},275:(S,M,i)=>{i.d(M,{c:()=>e,g:()=>o});var f=i(8476),u=i(5638),d=i(4929);const e=(t,s,_)=>{let m,a;if(void 0!==f.w&&"MutationObserver"in f.w){const C=Array.isArray(s)?s:[s];m=new MutationObserver(p=>{for(const h of p)for(const g of h.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&C.includes(g.slot))return _(),void(0,u.r)(()=>c(g))}),m.observe(t,{childList:!0})}const c=C=>{var p;a&&(a.disconnect(),a=void 0),a=new MutationObserver(h=>{_();for(const g of h)for(const n of g.removedNodes)n.nodeType===Node.ELEMENT_NODE&&n.slot===s&&y()}),a.observe(null!==(p=C.parentElement)&&void 0!==p?p:C,{subtree:!0,childList:!0})},y=()=>{a&&(a.disconnect(),a=void 0)};return{destroy:()=>{m&&(m.disconnect(),m=void 0),y()}}},o=(t,s,_)=>{const m=null==t?0:t.toString().length,a=r(m,s);if(void 0===_)return a;try{return _(m,s)}catch(c){return(0,d.a)("Exception in provided `counterFormatter`.",c),a}},r=(t,s)=>"".concat(t," / ").concat(s)},1622:(S,M,i)=>{i.r(M),i.d(M,{KEYBOARD_DID_CLOSE:()=>o,KEYBOARD_DID_OPEN:()=>e,copyVisualViewport:()=>E,keyboardDidClose:()=>h,keyboardDidOpen:()=>C,keyboardDidResize:()=>p,resetKeyboardAssist:()=>m,setKeyboardClose:()=>y,setKeyboardOpen:()=>w,startKeyboardAssist:()=>a,trackViewportChanges:()=>v});var f=i(4379);i(8438),i(8476);const e="ionKeyboardDidShow",o="ionKeyboardDidHide";let t={},s={},_=!1;const m=()=>{t={},s={},_=!1},a=l=>{if(f.K.getEngine())c(l);else{if(!l.visualViewport)return;s=E(l.visualViewport),l.visualViewport.onresize=()=>{v(l),C()||p(l)?w(l):h(l)&&y(l)}}},c=l=>{l.addEventListener("keyboardDidShow",O=>w(l,O)),l.addEventListener("keyboardDidHide",()=>y(l))},w=(l,O)=>{g(l,O),_=!0},y=l=>{n(l),_=!1},C=()=>!_&&t.width===s.width&&(t.height-s.height)*s.scale>150,p=l=>_&&!h(l),h=l=>_&&s.height===l.innerHeight,g=(l,O)=>{const D=new CustomEvent(e,{detail:{keyboardHeight:O?O.keyboardHeight:l.innerHeight-s.height}});l.dispatchEvent(D)},n=l=>{const O=new CustomEvent(o);l.dispatchEvent(O)},v=l=>{t=Object.assign({},s),s=E(l.visualViewport)},E=l=>({width:Math.round(l.width),height:Math.round(l.height),offsetTop:l.offsetTop,offsetLeft:l.offsetLeft,pageTop:l.pageTop,pageLeft:l.pageLeft,scale:l.scale})},4379:(S,M,i)=>{i.d(M,{K:()=>e,a:()=>d});var f=i(8438),u=function(o){return o.Unimplemented="UNIMPLEMENTED",o.Unavailable="UNAVAILABLE",o}(u||{}),d=function(o){return o.Body="body",o.Ionic="ionic",o.Native="native",o.None="none",o}(d||{});const e={getEngine(){const o=(0,f.g)();if(null!=o&&o.isPluginAvailable("Keyboard"))return o.Plugins.Keyboard},getResizeMode(){const o=this.getEngine();return null!=o&&o.getResizeMode?o.getResizeMode().catch(r=>{if(r.code!==u.Unimplemented)throw r}):Promise.resolve(void 0)}}},4731:(S,M,i)=>{i.d(M,{c:()=>r});var f=i(467),u=i(8476),d=i(4379);const e=t=>{if(void 0===u.d||t===d.a.None||void 0===t)return null;const s=u.d.querySelector("ion-app");return null!=s?s:u.d.body},o=t=>{const s=e(t);return null===s?0:s.clientHeight},r=function(){var t=(0,f.A)(function*(s){let _,m,a,c;const w=function(){var g=(0,f.A)(function*(){const n=yield d.K.getResizeMode(),v=void 0===n?void 0:n.mode;_=()=>{void 0===c&&(c=o(v)),a=!0,y(a,v)},m=()=>{a=!1,y(a,v)},null==u.w||u.w.addEventListener("keyboardWillShow",_),null==u.w||u.w.addEventListener("keyboardWillHide",m)});return function(){return g.apply(this,arguments)}}(),y=(g,n)=>{s&&s(g,C(n))},C=g=>{if(0===c||c===o(g))return;const n=e(g);return null!==n?new Promise(v=>{const l=new ResizeObserver(()=>{n.clientHeight===c&&(l.disconnect(),v())});l.observe(n)}):void 0};return yield w(),{init:w,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",_),null==u.w||u.w.removeEventListener("keyboardWillHide",m),_=m=void 0},isKeyboardVisible:()=>a}});return function(_){return t.apply(this,arguments)}}()},7838:(S,M,i)=>{i.d(M,{c:()=>u});var f=i(467);const u=()=>{let d;return{lock:function(){var o=(0,f.A)(function*(){const r=d;let t;return d=new Promise(s=>t=s),void 0!==r&&(yield r),t});return function(){return o.apply(this,arguments)}}()}}},2172:(S,M,i)=>{i.d(M,{c:()=>d});var f=i(8476),u=i(5638);const d=(e,o,r)=>{let t;const s=()=>!(void 0===o()||void 0!==e.label||null===r()),m=()=>{const c=o();if(void 0===c)return;if(!s())return void c.style.removeProperty("width");const w=r().scrollWidth;if(0===w&&null===c.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==t)return;const y=t=new IntersectionObserver(C=>{1===C[0].intersectionRatio&&(m(),y.disconnect(),t=void 0)},{threshold:.01,root:e});y.observe(c)}else c.style.setProperty("width","".concat(.75*w,"px"))};return{calculateNotchWidth:()=>{s()&&(0,u.r)(()=>{m()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7895:(S,M,i)=>{i.d(M,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(d,e,o)=>{const r="".concat(d*e/o-d,"ms"),t=2*Math.PI*e/o;return{r:5,style:{top:"".concat(32*Math.sin(t),"%"),left:"".concat(32*Math.cos(t),"%"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(d,e,o)=>{const r=e/o,t="".concat(d*r-d,"ms"),s=2*Math.PI*r;return{r:5,style:{top:"".concat(32*Math.sin(s),"%"),left:"".concat(32*Math.cos(s),"%"),"animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,e)=>{const o=-110*e+"ms";return{r:6,style:{left:"".concat(32-32*e,"%"),"animation-delay":o}}}},lines:{dur:1e3,lines:8,fn:(d,e,o)=>({y1:14,y2:26,style:{transform:"rotate(".concat(360/o*e+(e<o/2?180:-180),"deg)"),"animation-delay":"".concat(d*e/o-d,"ms")}})},"lines-small":{dur:1e3,lines:8,fn:(d,e,o)=>({y1:12,y2:20,style:{transform:"rotate(".concat(360/o*e+(e<o/2?180:-180),"deg)"),"animation-delay":"".concat(d*e/o-d,"ms")}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,e,o)=>({y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(d*e/o-d,"ms")}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,e,o)=>({y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(d*e/o-d,"ms")}})}}},6492:(S,M,i)=>{i.r(M),i.d(M,{createSwipeBackGesture:()=>o});var f=i(5638),u=i(7464),d=i(405);i(8221);const o=(r,t,s,_,m)=>{const a=r.ownerDocument.defaultView;let c=(0,u.i)(r);const y=n=>c?-n.deltaX:n.deltaX;return(0,d.createGesture)({el:r,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:n=>(c=(0,u.i)(r),(n=>{const{startX:E}=n;return c?E>=a.innerWidth-50:E<=50})(n)&&t()),onStart:s,onMove:n=>{const E=y(n)/a.innerWidth;_(E)},onEnd:n=>{const v=y(n),E=a.innerWidth,l=v/E,O=(n=>c?-n.velocityX:n.velocityX)(n),D=O>=0&&(O>.2||v>E/2),P=(D?1-l:l)*E;let L=0;if(P>5){const T=P/Math.abs(O);L=Math.min(T,540)}m(D,l<=0?.01:(0,f.l)(0,l,.9999),L)}})}},2935:(S,M,i)=>{i.d(M,{w:()=>f});const f=(e,o,r)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(s=>{r(u(s,o))});return t.observe(e,{childList:!0,subtree:!0}),t},u=(e,o)=>{let r;return e.forEach(t=>{for(let s=0;s<t.addedNodes.length;s++)r=d(t.addedNodes[s],o)||r}),r},d=(e,o)=>{if(1!==e.nodeType)return;const r=e;return(r.tagName===o.toUpperCase()?[r]:Array.from(r.querySelectorAll(o))).find(s=>s.value===r.value)}},7862:(S,M,i)=>{i.d(M,{P:()=>o});var f=i(177),u=i(4341),d=i(8974),e=i(4438);let o=(()=>{var r;class t{}return(r=t).\u0275fac=function(_){return new(_||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[f.MD,u.YN,d.bv]}),t})()},6123:(S,M,i)=>{i.d(M,{M:()=>C});var f=i(467),u=i(6839);const d={production:!1,webVersion:!0,version:"3.0.0"};var e=i(4438),o=i(8974),r=i(7709),t=i(851),s=i(143),_=i(6824),m=i(6857),a=i(177),c=i(4341);function w(p,h){if(1&p){const g=e.RV6();e.j41(0,"ion-item"),e.nrm(1,"ion-icon",15),e.j41(2,"ion-toggle",5),e.mxI("ngModelChange",function(v){e.eBV(g);const E=e.XpG();return e.DH7(E.skipSslValidation,v)||(E.skipSslValidation=v),e.Njj(v)}),e.EFF(3,"Skip SSL validation"),e.k0s()()}if(2&p){const g=e.XpG();e.R7$(2),e.R50("ngModel",g.skipSslValidation)}}function y(p,h){if(1&p){const g=e.RV6();e.j41(0,"ion-item"),e.nrm(1,"ion-icon",16),e.j41(2,"ion-select",17),e.mxI("ngModelChange",function(v){e.eBV(g);const E=e.XpG();return e.DH7(E.screenOrientation,v)||(E.screenOrientation=v),e.Njj(v)}),e.j41(3,"ion-select-option",9),e.EFF(4,"Auto"),e.k0s(),e.j41(5,"ion-select-option",10),e.EFF(6,"Landscape"),e.k0s(),e.j41(7,"ion-select-option",11),e.EFF(8,"Landscape alternative"),e.k0s(),e.j41(9,"ion-select-option",18),e.EFF(10,"Portrait"),e.k0s()()()}if(2&p){const g=e.XpG();e.R7$(2),e.R50("ngModel",g.screenOrientation)}}let C=(()=>{var p;class h{constructor(n,v,E,l,O,b,D){this.modalController=n,this.settingsService=v,this.wakelockService=E,this.alertController=l,this.screenOrientationService=O,this.diagnosticService=b,this.themeService=D,this.preventScreenTimeout=!1,this.showMenuButton=!0,this.skipSslValidation=!1,this.buttonLongPressDelay=1e3,this.appearanceType="0",this.screenOrientation="0",this.environment=d}ngOnInit(){var n=this;return(0,f.A)(function*(){yield n.loadCurrentSettings()})()}confirm(){var n=this;return(0,f.A)(function*(){yield n.saveSettings(),yield n.modalController.dismiss(null,"confirm")})()}cancel(){var n=this;return(0,f.A)(function*(){yield n.modalController.dismiss(null,"cancel")})()}saveSettings(){var n=this;return(0,f.A)(function*(){yield n.settingsService.setWakeLockEnabled(n.preventScreenTimeout),yield n.settingsService.setShowMenuButton(n.showMenuButton),yield n.settingsService.setSkipSslValidation(n.skipSslValidation),yield n.settingsService.setButtonLongPressDelay(n.buttonLongPressDelay),yield n.settingsService.setAppearance(Number.parseInt(n.appearanceType)),yield n.settingsService.setScreenOrientation(Number.parseInt(n.screenOrientation)),yield n.wakelockService.updateWakeLock(),yield n.screenOrientationService.updateScreenOrientation(),yield n.themeService.updateTheme(),n.diagnosticService.isAndroid()&&u.b.skipValidation({value:n.skipSslValidation})})()}loadCurrentSettings(){var n=this;return(0,f.A)(function*(){n.preventScreenTimeout=yield n.settingsService.getWakeLockEnabled(),n.showMenuButton=yield n.settingsService.getShowMenuButton(),n.skipSslValidation=yield n.settingsService.getSkipSslValidation(),n.buttonLongPressDelay=yield n.settingsService.getButtonLongPressDelay(),n.appearanceType=(yield n.settingsService.getAppearance()).toString(),n.screenOrientation=(yield n.settingsService.getScreenOrientation()).toString()})()}preventScreenTimeoutChange(n){var v=this;return(0,f.A)(function*(){!0===n&&(yield(yield v.alertController.create({header:"Warning",message:"Displaying a static image for a long time can cause screen burn-in on some screens.",buttons:["OK"]})).present())})()}displayMenuButtonChange(n){var v=this;return(0,f.A)(function*(){!1===n&&(yield(yield v.alertController.create({header:"Information",message:"To access the menu, swipe from the left edge of the screen",buttons:["OK"]})).present())})()}isAndroid(){return this.diagnosticService.isAndroid()}isiOSorAndroid(){return this.diagnosticService.isiOSorAndroid()}}return(p=h).\u0275fac=function(n){return new(n||p)(e.rXU(o.W3),e.rXU(r.h),e.rXU(t.r),e.rXU(o.hG),e.rXU(s.y),e.rXU(_.T),e.rXU(m.F))},p.\u0275cmp=e.VBU({type:p,selectors:[["app-settings-modal"]],decls:36,vars:8,consts:[["slot","start"],[3,"click"],["slot","end"],[3,"click","strong"],["name","timer","slot","start"],[3,"ngModelChange","ngModel"],["name","menu-outline","slot","start"],["slot","start",1,"mdi","mdi-theme-light-dark","d-flex","align-items-center"],["label","Appearance",3,"ngModelChange","ngModel"],["value","0"],["value","1"],["value","2"],[4,"ngIf"],["slot","start",1,"mdi","mdi-gesture-tap-box","d-flex","align-items-center"],["label-placement","start","label","Button long press delay","ticks","true","step","100","snaps","true","min","100","max","2000",3,"ngModelChange","ngModel"],["slot","start",1,"mdi","mdi-lock-off","d-flex","align-items-center"],["slot","start",1,"mdi","mdi-screen-rotation","d-flex","align-items-center"],["label","Screen orientation",3,"ngModelChange","ngModel"],["value","3"]],template:function(n,v){1&n&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.bIt("click",function(){return v.cancel()}),e.EFF(4,"Cancel"),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6,"Settings"),e.k0s(),e.j41(7,"ion-buttons",2)(8,"ion-button",3),e.bIt("click",function(){return v.confirm()}),e.EFF(9,"Save"),e.k0s()()()(),e.j41(10,"ion-content")(11,"ion-list")(12,"ion-item"),e.nrm(13,"ion-icon",4),e.j41(14,"ion-toggle",5),e.bIt("ngModelChange",function(l){return v.preventScreenTimeoutChange(l)}),e.mxI("ngModelChange",function(l){return e.DH7(v.preventScreenTimeout,l)||(v.preventScreenTimeout=l),l}),e.EFF(15,"Prevent screen timeout"),e.k0s()(),e.j41(16,"ion-item"),e.nrm(17,"ion-icon",6),e.j41(18,"ion-toggle",5),e.bIt("ngModelChange",function(l){return v.displayMenuButtonChange(l)}),e.mxI("ngModelChange",function(l){return e.DH7(v.showMenuButton,l)||(v.showMenuButton=l),l}),e.EFF(19,"Show menu button"),e.k0s()(),e.j41(20,"ion-item"),e.nrm(21,"ion-icon",7),e.j41(22,"ion-select",8),e.mxI("ngModelChange",function(l){return e.DH7(v.appearanceType,l)||(v.appearanceType=l),l}),e.j41(23,"ion-select-option",9),e.EFF(24,"System"),e.k0s(),e.j41(25,"ion-select-option",10),e.EFF(26,"Dark"),e.k0s(),e.j41(27,"ion-select-option",11),e.EFF(28,"Light"),e.k0s()()(),e.DNE(29,w,4,1,"ion-item",12),e.j41(30,"ion-item"),e.nrm(31,"ion-icon",13),e.j41(32,"ion-range",14),e.mxI("ngModelChange",function(l){return e.DH7(v.buttonLongPressDelay,l)||(v.buttonLongPressDelay=l),l}),e.k0s(),e.j41(33,"ion-label",2),e.EFF(34),e.k0s()(),e.DNE(35,y,11,1,"ion-item",12),e.k0s()()),2&n&&(e.R7$(8),e.Y8G("strong",!0),e.R7$(6),e.R50("ngModel",v.preventScreenTimeout),e.R7$(4),e.R50("ngModel",v.showMenuButton),e.R7$(4),e.R50("ngModel",v.appearanceType),e.R7$(7),e.Y8G("ngIf",v.isAndroid()),e.R7$(3),e.R50("ngModel",v.buttonLongPressDelay),e.R7$(2),e.SpI("",v.buttonLongPressDelay,"ms"),e.R7$(),e.Y8G("ngIf",v.isiOSorAndroid()))},dependencies:[a.bT,o.Jm,o.QW,o.W9,o.eU,o.iq,o.uz,o.he,o.nf,o.Ob,o.Nm,o.Ip,o.BC,o.BY,o.ai,o.hB,o.Je,o.Gw,c.BC,c.vS]}),h})()},1473:(S,M,i)=>{i.r(M),i.d(M,{WebHomePageModule:()=>C});var f=i(177),u=i(4341),d=i(8974),e=i(8160),o=i(467),r=i(5312),t=i(4438),s=i(1969),_=i(7709);function m(p,h){if(1&p){const g=t.RV6();t.j41(0,"div",3),t.nrm(1,"div",4),t.j41(2,"h4"),t.EFF(3,"I lost the connection to the server \u{1fae4}"),t.k0s(),t.j41(4,"p"),t.EFF(5),t.k0s(),t.j41(6,"ion-button",5),t.bIt("click",function(){t.eBV(g);const v=t.XpG();return t.Njj(v.connect())}),t.EFF(7,"Retry now"),t.k0s()()}if(2&p){const g=t.XpG();t.R7$(5),t.SpI("I'll try to reconnect in ",g.retryCountdown,"...")}}const c=[{path:"",component:(()=>{var p;class h{constructor(n,v,E){this.document=n,this.websocketService=v,this.settingsService=E,this.connectionLost=!1,this.retryCountdown=10,this.environment=r.c}ngOnInit(){var n=this;return(0,o.A)(function*(){n.clientId=yield n.settingsService.getClientId(),n.version="Web Version",yield n.connect(),n.websocketService.connectionLost.subscribe((0,o.A)(function*(){yield n.lostConnection()}))})()}lostConnection(){var n=this;return(0,o.A)(function*(){n.connectionLost=!0,n.retryCountdown=10,n.interval=setInterval((0,o.A)(function*(){n.retryCountdown--,0==n.retryCountdown&&(yield n.connect())}),1e3)})()}connect(){var n=this;return(0,o.A)(function*(){clearInterval(n.interval),n.connectionLost=!1;const E=n.document.baseURI.split("/"),l=E[0].toLowerCase().replace("http","ws"),O=E[2],b="".concat(l,"//").concat(O);yield n.websocketService.connectToString(b)})()}}return(p=h).\u0275fac=function(n){return new(n||p)(t.rXU(f.qQ),t.rXU(s.H),t.rXU(_.h))},p.\u0275cmp=t.VBU({type:p,selectors:[["app-web-home"]],decls:7,vars:3,consts:[[1,"d-flex","justify-content-center","align-items-center","align-content-center","h-100"],["class","d-flex flex-column align-items-center",4,"ngIf"],[1,"ms-3"],[1,"d-flex","flex-column","align-items-center"],[1,"icon","mb-2"],[1,"mt-5",3,"click"]],template:function(n,v){1&n&&(t.j41(0,"ion-content")(1,"div",0),t.DNE(2,m,8,1,"div",1),t.k0s()(),t.j41(3,"ion-footer")(4,"ion-toolbar")(5,"ion-text",2),t.EFF(6),t.k0s()()()),2&n&&(t.R7$(2),t.Y8G("ngIf",v.connectionLost),t.R7$(4),t.Lme("",v.version," | Client Id: ",v.clientId,""))},dependencies:[f.bT,d.Jm,d.W9,d.M0,d.IO,d.ai],styles:[".icon[_ngcontent-%COMP%]{background-image:url(assets/icon.png);width:10rem;height:10rem;background-size:contain;background-repeat:no-repeat;background-position:center;transform:scale(.9);animation:_ngcontent-%COMP%_pulseAnimation 2s ease 1s infinite normal forwards}@keyframes _ngcontent-%COMP%_pulseAnimation{0%{transform:scale(.9)}50%{transform:scale(1)}to{transform:scale(.9)}}"]}),h})()}];let w=(()=>{var p;class h{}return(p=h).\u0275fac=function(n){return new(n||p)},p.\u0275mod=t.$C({type:p}),p.\u0275inj=t.G2t({imports:[e.iI.forChild(c),e.iI]}),h})();var y=i(7862);let C=(()=>{var p;class h{}return(p=h).\u0275fac=function(n){return new(n||p)},p.\u0275mod=t.$C({type:p}),p.\u0275inj=t.G2t({imports:[f.MD,u.YN,d.bv,w,y.P]}),h})()}}]);