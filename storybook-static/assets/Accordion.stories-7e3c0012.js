import{j as c}from"./jsx-runtime-2aae9559.js";import{r as v,g as Pe,R as W}from"./index-ff614419.js";import{p as C}from"./styled-components.browser.esm-442cc764.js";import{t as k,f as $}from"./theme-003d45ab.js";import{M as Ie,u as be,P as Ne,a as je,L as Te,m as D}from"./motion-16d45a39.js";import{R as Oe}from"./RoundButton-51877f28.js";import{T as de}from"./Title-e67b3418.js";import{P as x}from"./index-96bde590.js";import{a as ke}from"./Icon-d5118378.js";class De extends v.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const n=this.props.sizeRef.current;n.height=t.offsetHeight||0,n.width=t.offsetWidth||0,n.top=t.offsetTop,n.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Ve({children:r,isPresent:e}){const t=v.useId(),n=v.useRef(null),a=v.useRef({width:0,height:0,top:0,left:0}),{nonce:o}=v.useContext(Ie);return v.useInsertionEffect(()=>{const{width:f,height:d,top:u,left:s}=a.current;if(e||!n.current||!f||!d)return;n.current.dataset.motionPopId=t;const i=document.createElement("style");return o&&(i.nonce=o),document.head.appendChild(i),i.sheet&&i.sheet.insertRule(`
          [data-motion-pop-id="${t}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${d}px !important;
            top: ${u}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(i)}},[e]),c.jsx(De,{isPresent:e,childRef:n,sizeRef:a,children:v.cloneElement(r,{ref:n})})}const Me=({children:r,initial:e,isPresent:t,onExitComplete:n,custom:a,presenceAffectsLayout:o,mode:f})=>{const d=be(Ye),u=v.useId(),s=v.useMemo(()=>({id:u,initial:e,isPresent:t,custom:a,onExitComplete:i=>{d.set(i,!0);for(const l of d.values())if(!l)return;n&&n()},register:i=>(d.set(i,!1),()=>d.delete(i))}),o?[Math.random()]:[t]);return v.useMemo(()=>{d.forEach((i,l)=>d.set(l,!1))},[t]),v.useEffect(()=>{!t&&!d.size&&n&&n()},[t]),f==="popLayout"&&(r=c.jsx(Ve,{isPresent:t,children:r})),c.jsx(Ne.Provider,{value:s,children:r})};function Ye(){return new Map}const F=r=>r.key||"";function ce(r){const e=[];return v.Children.forEach(r,t=>{v.isValidElement(t)&&e.push(t)}),e}const Le=({children:r,exitBeforeEnter:e,custom:t,initial:n=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:f="sync"})=>{const d=v.useMemo(()=>ce(r),[r]),u=d.map(F),s=v.useRef(!0),i=v.useRef(d),l=be(()=>new Map),[g,P]=v.useState(d),[p,w]=v.useState(d);je(()=>{s.current=!1,i.current=d;for(let y=0;y<p.length;y++){const h=F(p[y]);u.includes(h)?l.delete(h):l.get(h)!==!0&&l.set(h,!1)}},[p,u.length,u.join("-")]);const b=[];if(d!==g){let y=[...d];for(let h=0;h<p.length;h++){const m=p[h],E=F(m);u.includes(E)||(y.splice(h,0,m),b.push(m))}f==="wait"&&b.length&&(y=b),w(ce(y)),P(d);return}const{forceRender:_}=v.useContext(Te);return c.jsx(c.Fragment,{children:p.map(y=>{const h=F(y),m=d===p||u.includes(h),E=()=>{if(l.has(h))l.set(h,!0);else return;let T=!0;l.forEach(N=>{N||(T=!1)}),T&&(_==null||_(),w(i.current),a&&a())};return c.jsx(Me,{isPresent:m,initial:!s.current||n?void 0:!1,custom:m?void 0:t,presenceAffectsLayout:o,mode:f,onExitComplete:m?void 0:E,children:y},h)})})},Ue=C.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 22px 0px 22px;

  align-items: center;
  border-radius: 20px 20px 16px 16px;
  box-shadow: 0px 4px 8.1px 0px rgba(0, 0, 0, 0.03);
  background: var(--Grayscale-Neutral0, #fff);
`,$e=C.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`,Fe=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 18px;
  background: var(--Grayscale-Neutral0, #fff);
`,Be=C.div``,qe=C.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,He=C.span`
  color: ${k.Netural900};
  ${$.d1}
`,ze=C(D.div)`
  border-radius: 12px;
  overflow: hidden;
`,We=C(D.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,Ge=C(D.span)`
  color: ${k.Netural800};
  ${$.b4};
  line-height: 165%;
  letter-spacing: -0.16px;
`,Qe=C(D.span)`
  display: flex;
  padding: 14px 16px;
  align-items: center;
  gap: 32px;
  border-radius: 10px;
  border: 2px solid #0b98ff;
  background: #eef7ff;
`,Je=C(D.span)`
  color: ${k.Brand600};
  ${$.b6};
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    width: 24px;
    height: 24px;
  }
`,Ke=C.div`
  display: flex;
  height: 24px;
  align-items: center;
  gap: 14px;
`,Xe=C.div`
  color: ${k.Brand600};
  ${$.h4};
`,Ze=C.button`
  position: relative;
  display: flex;
  padding: 14px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: ${k.Netural0};
  color: ${k.Netural700};

  ${$.d1}
`,et=C.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 1px;
  transform: translateX(-50%);
  background-color: ${k.Netural200};
  left: 50%;
`,tt=C(D.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,xe=({children:r,onClick:e,bodyParts:t,count:n})=>{const{visible:a}=oe();return c.jsx($e,{children:c.jsxs(Fe,{$visible:a,children:[c.jsx(Be,{children:c.jsxs(de,{variant:"midB",children:[r,c.jsx(de.SubBottomTitle,{children:t})]})}),c.jsxs(qe,{children:[c.jsx(He,{children:n&&n>0&&`${n}개 루틴에 이미 추가됨`}),c.jsx(Oe,{leftIcon:"Add",variant:"blue",size:"small",onClick:e,children:"루틴에 추가"})]})]})})};xe.__docgenInfo={description:"",methods:[],displayName:"Header",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ce=()=>{const{visible:r,toggle:e}=oe();return c.jsxs(Ze,{onClick:e,children:[c.jsx(et,{}),r?"접기":"자세히 보기"]})};Ce.__docgenInfo={description:"",methods:[],displayName:"Trigger"};var rt=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,a,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(a=n;a--!==0;)if(!r(e[a],t[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(a=n;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[a]))return!1;for(a=n;a--!==0;){var f=o[a];if(!r(e[f],t[f]))return!1}return!0}return e!==e&&t!==t};const nt=Pe(rt);var G={exports:{}},we;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/we=function(){var r={},e={};return r.on=function(t,n){var a={name:t,handler:n};return e[t]=e[t]||[],e[t].unshift(a),a},r.off=function(t){var n=e[t.name].indexOf(t);n!==-1&&e[t.name].splice(n,1)},r.trigger=function(t,n){var a=e[t],o;if(a)for(o=a.length;o--;)a[o].handler(n)},r};var at=we,Q={exports:{}},ot=function(e,t,n){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");typeof t=="function"&&(n=t,t={}),t=t||{},n=n||function(){},o.type=t.type||"text/javascript",o.charset=t.charset||"utf8",o.async="async"in t?!!t.async:!0,o.src=e,t.attrs&&it(o,t.attrs),t.text&&(o.text=""+t.text);var f="onload"in o?fe:st;f(o,n),o.onload||fe(o,n),a.appendChild(o)};function it(r,e){for(var t in e)r.setAttribute(t,e[t])}function fe(r,e){r.onload=function(){this.onerror=this.onload=null,e(null,r)},r.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),r)}}function st(r,e){r.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,r))}}(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=ot,n=a(t);function a(o){return o&&o.__esModule?o:{default:o}}e.default=function(o){var f=new Promise(function(d){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){d(window.YT);return}else{var u=window.location.protocol==="http:"?"http:":"https:";(0,n.default)(u+"//www.youtube.com/iframe_api",function(i){i&&o.trigger("error",i)})}var s=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){s&&s(),d(window.YT)}});return f},r.exports=e.default})(Q,Q.exports);var lt=Q.exports,J={exports:{}},K={exports:{}},X={exports:{}},M=1e3,Y=M*60,L=Y*60,U=L*24,ut=U*365.25,dt=function(r,e){e=e||{};var t=typeof r;if(t==="string"&&r.length>0)return ct(r);if(t==="number"&&isNaN(r)===!1)return e.long?pt(r):ft(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function ct(r){if(r=String(r),!(r.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(r);if(e){var t=parseFloat(e[1]),n=(e[2]||"ms").toLowerCase();switch(n){case"years":case"year":case"yrs":case"yr":case"y":return t*ut;case"days":case"day":case"d":return t*U;case"hours":case"hour":case"hrs":case"hr":case"h":return t*L;case"minutes":case"minute":case"mins":case"min":case"m":return t*Y;case"seconds":case"second":case"secs":case"sec":case"s":return t*M;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function ft(r){return r>=U?Math.round(r/U)+"d":r>=L?Math.round(r/L)+"h":r>=Y?Math.round(r/Y)+"m":r>=M?Math.round(r/M)+"s":r+"ms"}function pt(r){return B(r,U,"day")||B(r,L,"hour")||B(r,Y,"minute")||B(r,M,"second")||r+" ms"}function B(r,e,t){if(!(r<e))return r<e*1.5?Math.floor(r/e)+" "+t:Math.ceil(r/e)+" "+t+"s"}(function(r,e){e=r.exports=a.debug=a.default=a,e.coerce=u,e.disable=f,e.enable=o,e.enabled=d,e.humanize=dt,e.names=[],e.skips=[],e.formatters={};var t;function n(s){var i=0,l;for(l in s)i=(i<<5)-i+s.charCodeAt(l),i|=0;return e.colors[Math.abs(i)%e.colors.length]}function a(s){function i(){if(i.enabled){var l=i,g=+new Date,P=g-(t||g);l.diff=P,l.prev=t,l.curr=g,t=g;for(var p=new Array(arguments.length),w=0;w<p.length;w++)p[w]=arguments[w];p[0]=e.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");var b=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,function(y,h){if(y==="%%")return y;b++;var m=e.formatters[h];if(typeof m=="function"){var E=p[b];y=m.call(l,E),p.splice(b,1),b--}return y}),e.formatArgs.call(l,p);var _=i.log||e.log||console.log.bind(console);_.apply(l,p)}}return i.namespace=s,i.enabled=e.enabled(s),i.useColors=e.useColors(),i.color=n(s),typeof e.init=="function"&&e.init(i),i}function o(s){e.save(s),e.names=[],e.skips=[];for(var i=(typeof s=="string"?s:"").split(/[\s,]+/),l=i.length,g=0;g<l;g++)i[g]&&(s=i[g].replace(/\*/g,".*?"),s[0]==="-"?e.skips.push(new RegExp("^"+s.substr(1)+"$")):e.names.push(new RegExp("^"+s+"$")))}function f(){e.enable("")}function d(s){var i,l;for(i=0,l=e.skips.length;i<l;i++)if(e.skips[i].test(s))return!1;for(i=0,l=e.names.length;i<l;i++)if(e.names[i].test(s))return!0;return!1}function u(s){return s instanceof Error?s.stack||s.message:s}})(X,X.exports);var ht=X.exports;(function(r,e){e=r.exports=ht,e.log=a,e.formatArgs=n,e.save=o,e.load=f,e.useColors=t,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:d(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function t(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(u){try{return JSON.stringify(u)}catch(s){return"[UnexpectedJSONParseError]: "+s.message}};function n(u){var s=this.useColors;if(u[0]=(s?"%c":"")+this.namespace+(s?" %c":" ")+u[0]+(s?"%c ":" ")+"+"+e.humanize(this.diff),!!s){var i="color: "+this.color;u.splice(1,0,i,"color: inherit");var l=0,g=0;u[0].replace(/%[a-zA-Z%]/g,function(P){P!=="%%"&&(l++,P==="%c"&&(g=l))}),u.splice(g,0,i)}}function a(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function o(u){try{u==null?e.storage.removeItem("debug"):e.storage.debug=u}catch{}}function f(){var u;try{u=e.storage.debug}catch{}return!u&&typeof process<"u"&&"env"in process&&(u={}.DEBUG),u}e.enable(f());function d(){try{return window.localStorage}catch{}}})(K,K.exports);var yt=K.exports,Z={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],r.exports=e.default})(Z,Z.exports);var gt=Z.exports,ee={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],r.exports=e.default})(ee,ee.exports);var vt=ee.exports,te={exports:{}},re={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},r.exports=e.default})(re,re.exports);var mt=re.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=mt,n=a(t);function a(o){return o&&o.__esModule?o:{default:o}}e.default={pauseVideo:{acceptableStates:[n.default.ENDED,n.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[n.default.ENDED,n.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[n.default.ENDED,n.default.PLAYING,n.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},r.exports=e.default})(te,te.exports);var Pt=te.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=yt,n=i(t),a=gt,o=i(a),f=vt,d=i(f),u=Pt,s=i(u);function i(P){return P&&P.__esModule?P:{default:P}}var l=(0,n.default)("youtube-player"),g={};g.proxyEvents=function(P){var p={},w=function(N){var A="on"+N.slice(0,1).toUpperCase()+N.slice(1);p[A]=function(j){l('event "%s"',A,j),P.trigger(N,j)}},b=!0,_=!1,y=void 0;try{for(var h=d.default[Symbol.iterator](),m;!(b=(m=h.next()).done);b=!0){var E=m.value;w(E)}}catch(T){_=!0,y=T}finally{try{!b&&h.return&&h.return()}finally{if(_)throw y}}return p},g.promisifyPlayer=function(P){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,w={},b=function(A){p&&s.default[A]?w[A]=function(){for(var j=arguments.length,V=Array(j),R=0;R<j;R++)V[R]=arguments[R];return P.then(function(S){var O=s.default[A],Se=S.getPlayerState(),ie=S[A].apply(S,V);return O.stateChangeRequired||Array.isArray(O.acceptableStates)&&O.acceptableStates.indexOf(Se)===-1?new Promise(function(se){var Ae=function le(){var Re=S.getPlayerState(),ue=void 0;typeof O.timeout=="number"&&(ue=setTimeout(function(){S.removeEventListener("onStateChange",le),se()},O.timeout)),Array.isArray(O.acceptableStates)&&O.acceptableStates.indexOf(Re)!==-1&&(S.removeEventListener("onStateChange",le),clearTimeout(ue),se())};S.addEventListener("onStateChange",Ae)}).then(function(){return ie}):ie})}:w[A]=function(){for(var j=arguments.length,V=Array(j),R=0;R<j;R++)V[R]=arguments[R];return P.then(function(S){return S[A].apply(S,V)})}},_=!0,y=!1,h=void 0;try{for(var m=o.default[Symbol.iterator](),E;!(_=(E=m.next()).done);_=!0){var T=E.value;b(T)}}catch(N){y=!0,h=N}finally{try{!_&&m.return&&m.return()}finally{if(y)throw h}}return w},e.default=g,r.exports=e.default})(J,J.exports);var bt=J.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},n=at,a=s(n),o=lt,f=s(o),d=bt,u=s(d);function s(l){return l&&l.__esModule?l:{default:l}}var i=void 0;e.default=function(l){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},P=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,p=(0,a.default)();if(i||(i=(0,f.default)(p)),g.events)throw new Error("Event handlers cannot be overwritten.");if(typeof l=="string"&&!document.getElementById(l))throw new Error('Element "'+l+'" does not exist.');g.events=u.default.proxyEvents(p);var w=new Promise(function(_){if((typeof l>"u"?"undefined":t(l))==="object"&&l.playVideo instanceof Function){var y=l;_(y)}else i.then(function(h){var m=new h.Player(l,g);return p.on("ready",function(){_(m)}),null})}),b=u.default.promisifyPlayer(w,P);return b.on=p.on,b.off=p.off,b},r.exports=e.default})(G,G.exports);var xt=G.exports;const Ct=Pe(xt);var wt=Object.defineProperty,_t=Object.defineProperties,Et=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertySymbols,St=Object.prototype.hasOwnProperty,At=Object.prototype.propertyIsEnumerable,he=(r,e,t)=>e in r?wt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,ne=(r,e)=>{for(var t in e||(e={}))St.call(e,t)&&he(r,t,e[t]);if(pe)for(var t of pe(e))At.call(e,t)&&he(r,t,e[t]);return r},ae=(r,e)=>_t(r,Et(e)),Rt=(r,e,t)=>new Promise((n,a)=>{var o=u=>{try{d(t.next(u))}catch(s){a(s)}},f=u=>{try{d(t.throw(u))}catch(s){a(s)}},d=u=>u.done?n(u.value):Promise.resolve(u.value).then(o,f);d((t=t.apply(r,e)).next())});function It(r,e){var t,n;if(r.videoId!==e.videoId)return!0;const a=((t=r.opts)==null?void 0:t.playerVars)||{},o=((n=e.opts)==null?void 0:n.playerVars)||{};return a.start!==o.start||a.end!==o.end}function ye(r={}){return ae(ne({},r),{height:0,width:0,playerVars:ae(ne({},r.playerVars),{autoplay:0,start:0,end:0})})}function Nt(r,e){return r.videoId!==e.videoId||!nt(ye(r.opts),ye(e.opts))}function jt(r,e){var t,n,a,o;return r.id!==e.id||r.className!==e.className||((t=r.opts)==null?void 0:t.width)!==((n=e.opts)==null?void 0:n.width)||((a=r.opts)==null?void 0:a.height)!==((o=e.opts)==null?void 0:o.height)||r.iframeClassName!==e.iframeClassName||r.title!==e.title}var Tt={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},Ot={videoId:x.string,id:x.string,className:x.string,iframeClassName:x.string,style:x.object,title:x.string,loading:x.oneOf(["lazy","eager"]),opts:x.objectOf(x.any),onReady:x.func,onError:x.func,onPlay:x.func,onPause:x.func,onEnd:x.func,onStateChange:x.func,onPlaybackRateChange:x.func,onPlaybackQualityChange:x.func},H=class extends W.Component{constructor(r){super(r),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,n;return(n=(t=this.props).onReady)==null?void 0:n.call(t,e)},this.onPlayerError=e=>{var t,n;return(n=(t=this.props).onError)==null?void 0:n.call(t,e)},this.onPlayerStateChange=e=>{var t,n,a,o,f,d,u,s;switch((n=(t=this.props).onStateChange)==null||n.call(t,e),e.data){case H.PlayerState.ENDED:(o=(a=this.props).onEnd)==null||o.call(a,e);break;case H.PlayerState.PLAYING:(d=(f=this.props).onPlay)==null||d.call(f,e);break;case H.PlayerState.PAUSED:(s=(u=this.props).onPause)==null||s.call(u,e);break}},this.onPlayerPlaybackRateChange=e=>{var t,n;return(n=(t=this.props).onPlaybackRateChange)==null?void 0:n.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,n;return(n=(t=this.props).onPlaybackQualityChange)==null?void 0:n.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=ae(ne({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=Ct(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(t=>{this.props.title&&t.setAttribute("title",this.props.title),this.props.loading&&t.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(t=>{this.props.id?t.setAttribute("id",this.props.id):t.removeAttribute("id"),this.props.iframeClassName?t.setAttribute("class",this.props.iframeClassName):t.removeAttribute("class"),this.props.opts&&this.props.opts.width?t.setAttribute("width",this.props.opts.width.toString()):t.removeAttribute("width"),this.props.opts&&this.props.opts.height?t.setAttribute("height",this.props.opts.height.toString()):t.removeAttribute("height"),this.props.title?t.setAttribute("title",this.props.title):t.setAttribute("title","YouTube video player"),this.props.loading?t.setAttribute("loading",this.props.loading):t.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,n,a;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let o=!1;const f={videoId:this.props.videoId};if((t=this.props.opts)!=null&&t.playerVars&&(o=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(f.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(f.endSeconds=this.props.opts.playerVars.end)),o){(n=this.internalPlayer)==null||n.loadVideoById(f);return}(a=this.internalPlayer)==null||a.cueVideoById(f)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(r){return Rt(this,null,function*(){jt(r,this.props)&&this.updatePlayer(),Nt(r,this.props)&&(yield this.resetPlayer()),It(r,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return W.createElement("div",{className:this.props.className,style:this.props.style},W.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},z=H;z.propTypes=Ot;z.defaultProps=Tt;z.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var kt=z;const Dt={width:"100%",height:350,playerVars:{rel:0,modestbranding:1}},_e=({children:r,recommend:e,videoId:t})=>{const{visible:n}=oe();return c.jsx(Le,{initial:!1,children:n&&c.jsx(We,{initial:{height:0},animate:{height:"auto"},exit:{height:0},transition:{type:"spring",duration:.4,bounce:0},children:c.jsxs(tt,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"spring",duration:0,bounce:0},children:[c.jsx(Ge,{children:r}),c.jsxs(Qe,{children:[c.jsxs(Je,{children:[c.jsx(ke,{icon:"Star"}),"AI 추천 운동량"]}),c.jsx(Ke,{children:e.map(a=>c.jsx(Xe,{children:a},a))})]}),c.jsx(ze,{children:c.jsx(kt,{opts:Dt,videoId:t,loading:"lazy"})})]})})})};_e.__docgenInfo={description:"",methods:[],displayName:"Content",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Ee=v.createContext({visible:!1,toggle:()=>{}}),oe=()=>{const r=v.useContext(Ee);if(!r)throw new Error("Header, Content 컴포넌트는 Accordion 컴포넌트 내부에서 사용되어야 합니다.");return r},I=({children:r})=>{const[e,t]=v.useState(!1),n=()=>{t(a=>!a)};return c.jsx(Ee.Provider,{value:{visible:e,toggle:n},children:c.jsx(Ue,{$visible:e,children:r})})};I.Header=xe;I.Content=_e;I.Trigger=Ce;I.__docgenInfo={description:"",methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{\r
  children,\r
  onClick,\r
  bodyParts,\r
  count,\r
}: StrictPropsWithChildren<HeaderProps>`,optional:!1,type:{name:"intersection",raw:`P & {\r
  children: ReactNode\r
}`,elements:[{name:"HeaderProps"},{name:"signature",type:"object",raw:`{\r
  children: ReactNode\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"StrictPropsWithChildren"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:`{\r
  children,\r
  recommend,\r
  videoId,\r
}: StrictPropsWithChildren<ContentProps>`,optional:!1,type:{name:"intersection",raw:`P & {\r
  children: ReactNode\r
}`,elements:[{name:"ContentProps"},{name:"signature",type:"object",raw:`{\r
  children: ReactNode\r
}`,signature:{properties:[{key:"children",value:{name:"ReactNode",required:!0}}]}}],alias:"StrictPropsWithChildren"}}],returns:null},{name:"Trigger",docblock:null,modifiers:["static"],params:[],returns:null}],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const Vt=c.jsxs(I,{children:[c.jsx(I.Header,{onClick:()=>{console.log("2")},bodyParts:"가슴, 등",count:1,children:"푸쉬업"}),c.jsx(I.Content,{videoId:"https://www.youtube.com/watch?v=XIxSN7OewtA".split("=")[1],recommend:["20kg","5세트","12회"],children:"팔굽혀펴기 또는 푸쉬업은 대표적인 근력 운동 중 하나이다. 일반적으로 기구 등을 사용하지 않고 할 수 있는 운동으로, 엎드린 상태에서 전신의 체중을 두 손과 두 발가락의 4개소에 집중하여 양팔을 늘리는 힘에 의해 신체를 올린다. 동작과 팔꿈치 관절을 굽혀 몸을 지상에 붙지 않을 정도까지 낮추고, 반복하는 것이 기본적인 방법이다. 군대에서 기본적인 얼차려로 많이 적용된다."}),c.jsx(I.Trigger,{})]}),zt={component:I,title:"components/Accordion",tags:["autodocs"],parameters:{layout:"centered"},decorators:[r=>c.jsx("div",{style:{width:"100vw",height:"100vh",background:"#F2F4F6",display:"flex",justifyContent:"center",alignItems:"center"},children:c.jsx("div",{style:{width:"716px"},children:c.jsx(r,{})})})]},q={render:()=>Vt};var ge,ve,me;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    return DUMMY_DATA;
  }
}`,...(me=(ve=q.parameters)==null?void 0:ve.docs)==null?void 0:me.source}}};const Wt=["Primary"];export{q as Primary,Wt as __namedExportsOrder,zt as default};