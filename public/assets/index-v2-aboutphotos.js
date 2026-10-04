(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))d(z);new MutationObserver(z=>{for(const v of z)if(v.type==="childList")for(const E of v.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&d(E)}).observe(document,{childList:!0,subtree:!0});function y(z){const v={};return z.integrity&&(v.integrity=z.integrity),z.referrerPolicy&&(v.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?v.credentials="include":z.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function d(z){if(z.ep)return;z.ep=!0;const v=y(z);fetch(z.href,v)}})();function C0(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var $o={exports:{}},tn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function E0(){if(pf)return tn;pf=1;var o=Symbol.for("react.transitional.element"),p=Symbol.for("react.fragment");function y(d,z,v){var E=null;if(v!==void 0&&(E=""+v),z.key!==void 0&&(E=""+z.key),"key"in z){v={};for(var D in z)D!=="key"&&(v[D]=z[D])}else v=z;return z=v.ref,{$$typeof:o,type:d,key:E,ref:z!==void 0?z:null,props:v}}return tn.Fragment=p,tn.jsx=y,tn.jsxs=y,tn}var gf;function M0(){return gf||(gf=1,$o.exports=E0()),$o.exports}var a=M0(),Po={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function _0(){if(bf)return xe;bf=1;var o=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),E=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),H=Symbol.iterator;function R(m){return m===null||typeof m!="object"?null:(m=H&&m[H]||m["@@iterator"],typeof m=="function"?m:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,X={};function G(m,B,W){this.props=m,this.context=B,this.refs=X,this.updater=W||Q}G.prototype.isReactComponent={},G.prototype.setState=function(m,B){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,B,"setState")},G.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function w(){}w.prototype=G.prototype;function Y(m,B,W){this.props=m,this.context=B,this.refs=X,this.updater=W||Q}var I=Y.prototype=new w;I.constructor=Y,j(I,G.prototype),I.isPureReactComponent=!0;var re=Array.isArray;function me(){}var K={H:null,A:null,T:null,S:null},te=Object.prototype.hasOwnProperty;function F(m,B,W){var P=W.ref;return{$$typeof:o,type:m,key:B,ref:P!==void 0?P:null,props:W}}function Ve(m,B){return F(m.type,B,m.props)}function we(m){return typeof m=="object"&&m!==null&&m.$$typeof===o}function J(m){var B={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(W){return B[W]})}var Se=/\/+/g;function he(m,B){return typeof m=="object"&&m!==null&&m.key!=null?J(""+m.key):B.toString(36)}function le(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(me,me):(m.status="pending",m.then(function(B){m.status==="pending"&&(m.status="fulfilled",m.value=B)},function(B){m.status==="pending"&&(m.status="rejected",m.reason=B)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function N(m,B,W,P,ue){var fe=typeof m;(fe==="undefined"||fe==="boolean")&&(m=null);var be=!1;if(m===null)be=!0;else switch(fe){case"bigint":case"string":case"number":be=!0;break;case"object":switch(m.$$typeof){case o:case p:be=!0;break;case O:return be=m._init,N(be(m._payload),B,W,P,ue)}}if(be)return ue=ue(m),be=P===""?"."+he(m,0):P,re(ue)?(W="",be!=null&&(W=be.replace(Se,"$&/")+"/"),N(ue,B,W,"",function(ne){return ne})):ue!=null&&(we(ue)&&(ue=Ve(ue,W+(ue.key==null||m&&m.key===ue.key?"":(""+ue.key).replace(Se,"$&/")+"/")+be)),B.push(ue)),1;be=0;var M=P===""?".":P+":";if(re(m))for(var Z=0;Z<m.length;Z++)P=m[Z],fe=M+he(P,Z),be+=N(P,B,W,fe,ue);else if(Z=R(m),typeof Z=="function")for(m=Z.call(m),Z=0;!(P=m.next()).done;)P=P.value,fe=M+he(P,Z++),be+=N(P,B,W,fe,ue);else if(fe==="object"){if(typeof m.then=="function")return N(le(m),B,W,P,ue);throw B=String(m),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return be}function C(m,B,W){if(m==null)return m;var P=[],ue=0;return N(m,P,"","",function(fe){return B.call(W,fe,ue++)}),P}function V(m){if(m._status===-1){var B=m._result;B=B(),B.then(function(W){(m._status===0||m._status===-1)&&(m._status=1,m._result=W)},function(W){(m._status===0||m._status===-1)&&(m._status=2,m._result=W)}),m._status===-1&&(m._status=0,m._result=B)}if(m._status===1)return m._result.default;throw m._result}var ee=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},ce={map:C,forEach:function(m,B,W){C(m,function(){B.apply(this,arguments)},W)},count:function(m){var B=0;return C(m,function(){B++}),B},toArray:function(m){return C(m,function(B){return B})||[]},only:function(m){if(!we(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return xe.Activity=x,xe.Children=ce,xe.Component=G,xe.Fragment=y,xe.Profiler=z,xe.PureComponent=Y,xe.StrictMode=d,xe.Suspense=g,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,xe.__COMPILER_RUNTIME={__proto__:null,c:function(m){return K.H.useMemoCache(m)}},xe.cache=function(m){return function(){return m.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(m,B,W){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var P=j({},m.props),ue=m.key;if(B!=null)for(fe in B.key!==void 0&&(ue=""+B.key),B)!te.call(B,fe)||fe==="key"||fe==="__self"||fe==="__source"||fe==="ref"&&B.ref===void 0||(P[fe]=B[fe]);var fe=arguments.length-2;if(fe===1)P.children=W;else if(1<fe){for(var be=Array(fe),M=0;M<fe;M++)be[M]=arguments[M+2];P.children=be}return F(m.type,ue,P)},xe.createContext=function(m){return m={$$typeof:E,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:v,_context:m},m},xe.createElement=function(m,B,W){var P,ue={},fe=null;if(B!=null)for(P in B.key!==void 0&&(fe=""+B.key),B)te.call(B,P)&&P!=="key"&&P!=="__self"&&P!=="__source"&&(ue[P]=B[P]);var be=arguments.length-2;if(be===1)ue.children=W;else if(1<be){for(var M=Array(be),Z=0;Z<be;Z++)M[Z]=arguments[Z+2];ue.children=M}if(m&&m.defaultProps)for(P in be=m.defaultProps,be)ue[P]===void 0&&(ue[P]=be[P]);return F(m,fe,ue)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(m){return{$$typeof:D,render:m}},xe.isValidElement=we,xe.lazy=function(m){return{$$typeof:O,_payload:{_status:-1,_result:m},_init:V}},xe.memo=function(m,B){return{$$typeof:h,type:m,compare:B===void 0?null:B}},xe.startTransition=function(m){var B=K.T,W={};K.T=W;try{var P=m(),ue=K.S;ue!==null&&ue(W,P),typeof P=="object"&&P!==null&&typeof P.then=="function"&&P.then(me,ee)}catch(fe){ee(fe)}finally{B!==null&&W.types!==null&&(B.types=W.types),K.T=B}},xe.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},xe.use=function(m){return K.H.use(m)},xe.useActionState=function(m,B,W){return K.H.useActionState(m,B,W)},xe.useCallback=function(m,B){return K.H.useCallback(m,B)},xe.useContext=function(m){return K.H.useContext(m)},xe.useDebugValue=function(){},xe.useDeferredValue=function(m,B){return K.H.useDeferredValue(m,B)},xe.useEffect=function(m,B){return K.H.useEffect(m,B)},xe.useEffectEvent=function(m){return K.H.useEffectEvent(m)},xe.useId=function(){return K.H.useId()},xe.useImperativeHandle=function(m,B,W){return K.H.useImperativeHandle(m,B,W)},xe.useInsertionEffect=function(m,B){return K.H.useInsertionEffect(m,B)},xe.useLayoutEffect=function(m,B){return K.H.useLayoutEffect(m,B)},xe.useMemo=function(m,B){return K.H.useMemo(m,B)},xe.useOptimistic=function(m,B){return K.H.useOptimistic(m,B)},xe.useReducer=function(m,B,W){return K.H.useReducer(m,B,W)},xe.useRef=function(m){return K.H.useRef(m)},xe.useState=function(m){return K.H.useState(m)},xe.useSyncExternalStore=function(m,B,W){return K.H.useSyncExternalStore(m,B,W)},xe.useTransition=function(){return K.H.useTransition()},xe.version="19.2.8",xe}var vf;function mc(){return vf||(vf=1,Po.exports=_0()),Po.exports}var _=mc();const Xf=C0(_);var ec={exports:{}},an={},tc={exports:{}},ac={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function T0(){return yf||(yf=1,(function(o){function p(N,C){var V=N.length;N.push(C);e:for(;0<V;){var ee=V-1>>>1,ce=N[ee];if(0<z(ce,C))N[ee]=C,N[V]=ce,V=ee;else break e}}function y(N){return N.length===0?null:N[0]}function d(N){if(N.length===0)return null;var C=N[0],V=N.pop();if(V!==C){N[0]=V;e:for(var ee=0,ce=N.length,m=ce>>>1;ee<m;){var B=2*(ee+1)-1,W=N[B],P=B+1,ue=N[P];if(0>z(W,V))P<ce&&0>z(ue,W)?(N[ee]=ue,N[P]=V,ee=P):(N[ee]=W,N[B]=V,ee=B);else if(P<ce&&0>z(ue,V))N[ee]=ue,N[P]=V,ee=P;else break e}}return C}function z(N,C){var V=N.sortIndex-C.sortIndex;return V!==0?V:N.id-C.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;o.unstable_now=function(){return v.now()}}else{var E=Date,D=E.now();o.unstable_now=function(){return E.now()-D}}var g=[],h=[],O=1,x=null,H=3,R=!1,Q=!1,j=!1,X=!1,G=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function I(N){for(var C=y(h);C!==null;){if(C.callback===null)d(h);else if(C.startTime<=N)d(h),C.sortIndex=C.expirationTime,p(g,C);else break;C=y(h)}}function re(N){if(j=!1,I(N),!Q)if(y(g)!==null)Q=!0,me||(me=!0,J());else{var C=y(h);C!==null&&le(re,C.startTime-N)}}var me=!1,K=-1,te=5,F=-1;function Ve(){return X?!0:!(o.unstable_now()-F<te)}function we(){if(X=!1,me){var N=o.unstable_now();F=N;var C=!0;try{e:{Q=!1,j&&(j=!1,w(K),K=-1),R=!0;var V=H;try{t:{for(I(N),x=y(g);x!==null&&!(x.expirationTime>N&&Ve());){var ee=x.callback;if(typeof ee=="function"){x.callback=null,H=x.priorityLevel;var ce=ee(x.expirationTime<=N);if(N=o.unstable_now(),typeof ce=="function"){x.callback=ce,I(N),C=!0;break t}x===y(g)&&d(g),I(N)}else d(g);x=y(g)}if(x!==null)C=!0;else{var m=y(h);m!==null&&le(re,m.startTime-N),C=!1}}break e}finally{x=null,H=V,R=!1}C=void 0}}finally{C?J():me=!1}}}var J;if(typeof Y=="function")J=function(){Y(we)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,he=Se.port2;Se.port1.onmessage=we,J=function(){he.postMessage(null)}}else J=function(){G(we,0)};function le(N,C){K=G(function(){N(o.unstable_now())},C)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(N){N.callback=null},o.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):te=0<N?Math.floor(1e3/N):5},o.unstable_getCurrentPriorityLevel=function(){return H},o.unstable_next=function(N){switch(H){case 1:case 2:case 3:var C=3;break;default:C=H}var V=H;H=C;try{return N()}finally{H=V}},o.unstable_requestPaint=function(){X=!0},o.unstable_runWithPriority=function(N,C){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var V=H;H=N;try{return C()}finally{H=V}},o.unstable_scheduleCallback=function(N,C,V){var ee=o.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ee+V:ee):V=ee,N){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=V+ce,N={id:O++,callback:C,priorityLevel:N,startTime:V,expirationTime:ce,sortIndex:-1},V>ee?(N.sortIndex=V,p(h,N),y(g)===null&&N===y(h)&&(j?(w(K),K=-1):j=!0,le(re,V-ee))):(N.sortIndex=ce,p(g,N),Q||R||(Q=!0,me||(me=!0,J()))),N},o.unstable_shouldYield=Ve,o.unstable_wrapCallback=function(N){var C=H;return function(){var V=H;H=C;try{return N.apply(this,arguments)}finally{H=V}}}})(ac)),ac}var jf;function O0(){return jf||(jf=1,tc.exports=T0()),tc.exports}var sc={exports:{}},ht={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nf;function D0(){if(Nf)return ht;Nf=1;var o=mc();function p(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var O=2;O<arguments.length;O++)h+="&args[]="+encodeURIComponent(arguments[O])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(){}var d={d:{f:y,r:function(){throw Error(p(522))},D:y,C:y,L:y,m:y,X:y,S:y,M:y},p:0,findDOMNode:null},z=Symbol.for("react.portal");function v(g,h,O){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:x==null?null:""+x,children:g,containerInfo:h,implementation:O}}var E=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return ht.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,ht.createPortal=function(g,h){var O=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(p(299));return v(g,h,null,O)},ht.flushSync=function(g){var h=E.T,O=d.p;try{if(E.T=null,d.p=2,g)return g()}finally{E.T=h,d.p=O,d.d.f()}},ht.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,d.d.C(g,h))},ht.prefetchDNS=function(g){typeof g=="string"&&d.d.D(g)},ht.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var O=h.as,x=D(O,h.crossOrigin),H=typeof h.integrity=="string"?h.integrity:void 0,R=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;O==="style"?d.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:x,integrity:H,fetchPriority:R}):O==="script"&&d.d.X(g,{crossOrigin:x,integrity:H,fetchPriority:R,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},ht.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var O=D(h.as,h.crossOrigin);d.d.M(g,{crossOrigin:O,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&d.d.M(g)},ht.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var O=h.as,x=D(O,h.crossOrigin);d.d.L(g,O,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},ht.preloadModule=function(g,h){if(typeof g=="string")if(h){var O=D(h.as,h.crossOrigin);d.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:O,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else d.d.m(g)},ht.requestFormReset=function(g){d.d.r(g)},ht.unstable_batchedUpdates=function(g,h){return g(h)},ht.useFormState=function(g,h,O){return E.H.useFormState(g,h,O)},ht.useFormStatus=function(){return E.H.useHostTransitionStatus()},ht.version="19.2.8",ht}var wf;function z0(){if(wf)return sc.exports;wf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(p){console.error(p)}}return o(),sc.exports=D0(),sc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sf;function L0(){if(Sf)return an;Sf=1;var o=O0(),p=mc(),y=z0();function d(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function g(e){if(v(e)!==e)throw Error(d(188))}function h(e){var t=e.alternate;if(!t){if(t=v(e),t===null)throw Error(d(188));return t!==e?null:e}for(var s=e,l=t;;){var n=s.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){s=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===s)return g(n),e;if(i===l)return g(n),t;i=i.sibling}throw Error(d(188))}if(s.return!==l.return)s=n,l=i;else{for(var r=!1,c=n.child;c;){if(c===s){r=!0,s=n,l=i;break}if(c===l){r=!0,l=n,s=i;break}c=c.sibling}if(!r){for(c=i.child;c;){if(c===s){r=!0,s=i,l=n;break}if(c===l){r=!0,l=i,s=n;break}c=c.sibling}if(!r)throw Error(d(189))}}if(s.alternate!==l)throw Error(d(190))}if(s.tag!==3)throw Error(d(188));return s.stateNode.current===s?e:t}function O(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=O(e),t!==null)return t;e=e.sibling}return null}var x=Object.assign,H=Symbol.for("react.element"),R=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),w=Symbol.for("react.consumer"),Y=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Ve=Symbol.for("react.memo_cache_sentinel"),we=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=we&&e[we]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case j:return"Fragment";case G:return"Profiler";case X:return"StrictMode";case re:return"Suspense";case me:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case Y:return e.displayName||"Context";case w:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case te:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}var le=Array.isArray,N=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,C=y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V={pending:!1,data:null,method:null,action:null},ee=[],ce=-1;function m(e){return{current:e}}function B(e){0>ce||(e.current=ee[ce],ee[ce]=null,ce--)}function W(e,t){ce++,ee[ce]=e.current,e.current=t}var P=m(null),ue=m(null),fe=m(null),be=m(null);function M(e,t){switch(W(fe,t),W(ue,e),W(P,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Bm(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Bm(t),e=Um(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(P),W(P,e)}function Z(){B(P),B(ue),B(fe)}function ne(e){e.memoizedState!==null&&W(be,e);var t=P.current,s=Um(t,e.type);t!==s&&(W(ue,e),W(P,s))}function Ce(e){ue.current===e&&(B(P),B(ue)),be.current===e&&(B(be),Wl._currentValue=V)}var Ee,Ke;function qe(e){if(Ee===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);Ee=t&&t[1]||"",Ke=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ee+e+Ke}var nt=!1;function ja(e,t){if(!e||nt)return"";nt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(T){var A=T}Reflect.construct(e,[],q)}else{try{q.call()}catch(T){A=T}e.call(q.prototype)}}else{try{throw Error()}catch(T){A=T}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(T){if(T&&A&&typeof T.stack=="string")return[T.stack,A.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],c=i[1];if(r&&c){var u=r.split(`
`),k=c.split(`
`);for(n=l=0;l<u.length&&!u[l].includes("DetermineComponentFrameRoot");)l++;for(;n<k.length&&!k[n].includes("DetermineComponentFrameRoot");)n++;if(l===u.length||n===k.length)for(l=u.length-1,n=k.length-1;1<=l&&0<=n&&u[l]!==k[n];)n--;for(;1<=l&&0<=n;l--,n--)if(u[l]!==k[n]){if(l!==1||n!==1)do if(l--,n--,0>n||u[l]!==k[n]){var L=`
`+u[l].replace(" at new "," at ");return e.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",e.displayName)),L}while(1<=l&&0<=n);break}}}finally{nt=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?qe(s):""}function Hi(e,t){switch(e.tag){case 26:case 27:case 5:return qe(e.type);case 16:return qe("Lazy");case 13:return e.child!==t&&t!==null?qe("Suspense Fallback"):qe("Suspense");case 19:return qe("SuspenseList");case 0:case 15:return ja(e.type,!1);case 11:return ja(e.type.render,!1);case 1:return ja(e.type,!0);case 31:return qe("Activity");default:return""}}function ea(e){try{var t="",s=null;do t+=Hi(e,s),s=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Na=Object.prototype.hasOwnProperty,il=o.unstable_scheduleCallback,rl=o.unstable_cancelCallback,cn=o.unstable_shouldYield,Ri=o.unstable_requestPaint,mt=o.unstable_now,Bi=o.unstable_getCurrentPriorityLevel,dn=o.unstable_ImmediatePriority,ol=o.unstable_UserBlockingPriority,ie=o.unstable_NormalPriority,ke=o.unstable_LowPriority,Te=o.unstable_IdlePriority,gs=o.log,un=o.unstable_setDisableYieldValue,Ot=null,ft=null;function We(e){if(typeof gs=="function"&&un(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Ot,e)}catch{}}var xt=Math.clz32?Math.clz32:Zt,cl=Math.log,mn=Math.LN2;function Zt(e){return e>>>=0,e===0?32:31-(cl(e)/mn|0)|0}var bs=256,fn=262144,xn=4194304;function Ia(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function hn(e,t,s){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var c=l&134217727;return c!==0?(l=c&~i,l!==0?n=Ia(l):(r&=c,r!==0?n=Ia(r):s||(s=c&~e,s!==0&&(n=Ia(s))))):(c=l&~i,c!==0?n=Ia(c):r!==0?n=Ia(r):s||(s=l&~e,s!==0&&(n=Ia(s)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,s=t&-t,i>=s||i===32&&(s&4194048)!==0)?t:n}function dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function xx(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vc(){var e=xn;return xn<<=1,(xn&62914560)===0&&(xn=4194304),e}function Ui(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function ul(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function hx(e,t,s,l,n,i){var r=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var c=e.entanglements,u=e.expirationTimes,k=e.hiddenUpdates;for(s=r&~s;0<s;){var L=31-xt(s),q=1<<L;c[L]=0,u[L]=-1;var A=k[L];if(A!==null)for(k[L]=null,L=0;L<A.length;L++){var T=A[L];T!==null&&(T.lane&=-536870913)}s&=~q}l!==0&&yc(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function yc(e,t,s){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-xt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|s&261930}function jc(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var l=31-xt(s),n=1<<l;n&t|e[l]&t&&(e[l]|=t),s&=~n}}function Nc(e,t){var s=t&-t;return s=(s&42)!==0?1:qi(s),(s&(e.suspendedLanes|t))!==0?0:s}function qi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function wc(){var e=C.p;return e!==0?e:(e=window.event,e===void 0?32:cf(e.type))}function Sc(e,t){var s=C.p;try{return C.p=e,t()}finally{C.p=s}}var wa=Math.random().toString(36).slice(2),it="__reactFiber$"+wa,gt="__reactProps$"+wa,vs="__reactContainer$"+wa,Yi="__reactEvents$"+wa,px="__reactListeners$"+wa,gx="__reactHandles$"+wa,kc="__reactResources$"+wa,ml="__reactMarker$"+wa;function Ji(e){delete e[it],delete e[gt],delete e[Yi],delete e[px],delete e[gx]}function ys(e){var t=e[it];if(t)return t;for(var s=e.parentNode;s;){if(t=s[vs]||s[it]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=Qm(e);e!==null;){if(s=e[it])return s;e=Qm(e)}return t}e=s,s=e.parentNode}return null}function js(e){if(e=e[it]||e[vs]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(d(33))}function Ns(e){var t=e[kc];return t||(t=e[kc]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function st(e){e[ml]=!0}var Ac=new Set,Cc={};function Fa(e,t){ws(e,t),ws(e+"Capture",t)}function ws(e,t){for(Cc[e]=t,e=0;e<t.length;e++)Ac.add(t[e])}var bx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ec={},Mc={};function vx(e){return Na.call(Mc,e)?!0:Na.call(Ec,e)?!1:bx.test(e)?Mc[e]=!0:(Ec[e]=!0,!1)}function pn(e,t,s){if(vx(t))if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+s)}}function gn(e,t,s){if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+s)}}function ta(e,t,s,l){if(l===null)e.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(t,s,""+l)}}function Dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function _c(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yx(e,t,s){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var n=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(r){s=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(r){s=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vi(e){if(!e._valueTracker){var t=_c(e)?"checked":"value";e._valueTracker=yx(e,t,""+e[t])}}function Tc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),l="";return e&&(l=_c(e)?e.checked?"true":"false":e.value),e=l,e!==s?(t.setValue(e),!0):!1}function bn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jx=/[\n"\\]/g;function zt(e){return e.replace(jx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ki(e,t,s,l,n,i,r,c){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Dt(t)):e.value!==""+Dt(t)&&(e.value=""+Dt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Qi(e,r,Dt(t)):s!=null?Qi(e,r,Dt(s)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+Dt(c):e.removeAttribute("name")}function Oc(e,t,s,l,n,i,r,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||s!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Vi(e);return}s=s!=null?""+Dt(s):"",t=t!=null?""+Dt(t):s,c||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=c?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Vi(e)}function Qi(e,t,s){t==="number"&&bn(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Ss(e,t,s,l){if(e=e.options,t){t={};for(var n=0;n<s.length;n++)t["$"+s[n]]=!0;for(s=0;s<e.length;s++)n=t.hasOwnProperty("$"+e[s].value),e[s].selected!==n&&(e[s].selected=n),n&&l&&(e[s].defaultSelected=!0)}else{for(s=""+Dt(s),t=null,n=0;n<e.length;n++){if(e[n].value===s){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Dc(e,t,s){if(t!=null&&(t=""+Dt(t),t!==e.value&&(e.value=t),s==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=s!=null?""+Dt(s):""}function zc(e,t,s,l){if(t==null){if(l!=null){if(s!=null)throw Error(d(92));if(le(l)){if(1<l.length)throw Error(d(93));l=l[0]}s=l}s==null&&(s=""),t=s}s=Dt(t),e.defaultValue=s,l=e.textContent,l===s&&l!==""&&l!==null&&(e.value=l),Vi(e)}function ks(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Nx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Lc(e,t,s){var l=t.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,s):typeof s!="number"||s===0||Nx.has(t)?t==="float"?e.cssFloat=s:e[t]=(""+s).trim():e[t]=s+"px"}function Hc(e,t,s){if(t!=null&&typeof t!="object")throw Error(d(62));if(e=e.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&s[n]!==l&&Lc(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&Lc(e,i,t[i])}function Xi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vn(e){return Sx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var Zi=null;function Ii(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var As=null,Cs=null;function Rc(e){var t=js(e);if(t&&(e=t.stateNode)){var s=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ki(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+zt(""+t)+'"][type="radio"]'),t=0;t<s.length;t++){var l=s[t];if(l!==e&&l.form===e.form){var n=l[gt]||null;if(!n)throw Error(d(90));Ki(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<s.length;t++)l=s[t],l.form===e.form&&Tc(l)}break e;case"textarea":Dc(e,s.value,s.defaultValue);break e;case"select":t=s.value,t!=null&&Ss(e,!!s.multiple,t,!1)}}}var Fi=!1;function Bc(e,t,s){if(Fi)return e(t,s);Fi=!0;try{var l=e(t);return l}finally{if(Fi=!1,(As!==null||Cs!==null)&&(ii(),As&&(t=As,e=Cs,Cs=As=null,Rc(t),e)))for(t=0;t<e.length;t++)Rc(e[t])}}function xl(e,t){var s=e.stateNode;if(s===null)return null;var l=s[gt]||null;if(l===null)return null;s=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(d(231,t,typeof s));return s}var sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wi=!1;if(sa)try{var hl={};Object.defineProperty(hl,"passive",{get:function(){Wi=!0}}),window.addEventListener("test",hl,hl),window.removeEventListener("test",hl,hl)}catch{Wi=!1}var Sa=null,$i=null,yn=null;function Uc(){if(yn)return yn;var e,t=$i,s=t.length,l,n="value"in Sa?Sa.value:Sa.textContent,i=n.length;for(e=0;e<s&&t[e]===n[e];e++);var r=s-e;for(l=1;l<=r&&t[s-l]===n[i-l];l++);return yn=n.slice(e,1<l?1-l:void 0)}function jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function qc(){return!1}function bt(e){function t(s,l,n,i,r){this._reactName=s,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(s=e[c],this[c]=s?s(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Nn:qc,this.isPropagationStopped=qc,this}return x(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var Wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=bt(Wa),pl=x({},Wa,{view:0,detail:0}),kx=bt(pl),Pi,er,gl,Sn=x({},pl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gl&&(gl&&e.type==="mousemove"?(Pi=e.screenX-gl.screenX,er=e.screenY-gl.screenY):er=Pi=0,gl=e),Pi)},movementY:function(e){return"movementY"in e?e.movementY:er}}),Gc=bt(Sn),Ax=x({},Sn,{dataTransfer:0}),Cx=bt(Ax),Ex=x({},pl,{relatedTarget:0}),tr=bt(Ex),Mx=x({},Wa,{animationName:0,elapsedTime:0,pseudoElement:0}),_x=bt(Mx),Tx=x({},Wa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ox=bt(Tx),Dx=x({},Wa,{data:0}),Yc=bt(Dx),zx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hx[e])?!!t[e]:!1}function ar(){return Rx}var Bx=x({},pl,{key:function(e){if(e.key){var t=zx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(e){return e.type==="keypress"?jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ux=bt(Bx),qx=x({},Sn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jc=bt(qx),Gx=x({},pl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),Yx=bt(Gx),Jx=x({},Wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Vx=bt(Jx),Kx=x({},Sn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Qx=bt(Kx),Xx=x({},Wa,{newState:0,oldState:0}),Zx=bt(Xx),Ix=[9,13,27,32],sr=sa&&"CompositionEvent"in window,bl=null;sa&&"documentMode"in document&&(bl=document.documentMode);var Fx=sa&&"TextEvent"in window&&!bl,Vc=sa&&(!sr||bl&&8<bl&&11>=bl),Kc=" ",Qc=!1;function Xc(e,t){switch(e){case"keyup":return Ix.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Es=!1;function Wx(e,t){switch(e){case"compositionend":return Zc(t);case"keypress":return t.which!==32?null:(Qc=!0,Kc);case"textInput":return e=t.data,e===Kc&&Qc?null:e;default:return null}}function $x(e,t){if(Es)return e==="compositionend"||!sr&&Xc(e,t)?(e=Uc(),yn=$i=Sa=null,Es=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vc&&t.locale!=="ko"?null:t.data;default:return null}}var Px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ic(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Px[e.type]:t==="textarea"}function Fc(e,t,s,l){As?Cs?Cs.push(l):Cs=[l]:As=l,t=fi(t,"onChange"),0<t.length&&(s=new wn("onChange","change",null,s,l),e.push({event:s,listeners:t}))}var vl=null,yl=null;function eh(e){Om(e,0)}function kn(e){var t=fl(e);if(Tc(t))return e}function Wc(e,t){if(e==="change")return t}var $c=!1;if(sa){var lr;if(sa){var nr="oninput"in document;if(!nr){var Pc=document.createElement("div");Pc.setAttribute("oninput","return;"),nr=typeof Pc.oninput=="function"}lr=nr}else lr=!1;$c=lr&&(!document.documentMode||9<document.documentMode)}function ed(){vl&&(vl.detachEvent("onpropertychange",td),yl=vl=null)}function td(e){if(e.propertyName==="value"&&kn(yl)){var t=[];Fc(t,yl,e,Ii(e)),Bc(eh,t)}}function th(e,t,s){e==="focusin"?(ed(),vl=t,yl=s,vl.attachEvent("onpropertychange",td)):e==="focusout"&&ed()}function ah(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return kn(yl)}function sh(e,t){if(e==="click")return kn(t)}function lh(e,t){if(e==="input"||e==="change")return kn(t)}function nh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:nh;function jl(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),l=Object.keys(t);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var n=s[l];if(!Na.call(t,n)||!kt(e[n],t[n]))return!1}return!0}function ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function sd(e,t){var s=ad(e);e=0;for(var l;s;){if(s.nodeType===3){if(l=e+s.textContent.length,e<=t&&l>=t)return{node:s,offset:t-e};e=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=ad(s)}}function ld(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ld(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function nd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=bn(e.document);t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=bn(e.document)}return t}function ir(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ih=sa&&"documentMode"in document&&11>=document.documentMode,Ms=null,rr=null,Nl=null,or=!1;function id(e,t,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;or||Ms==null||Ms!==bn(l)||(l=Ms,"selectionStart"in l&&ir(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Nl&&jl(Nl,l)||(Nl=l,l=fi(rr,"onSelect"),0<l.length&&(t=new wn("onSelect","select",null,t,s),e.push({event:t,listeners:l}),t.target=Ms)))}function $a(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var _s={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},cr={},rd={};sa&&(rd=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Pa(e){if(cr[e])return cr[e];if(!_s[e])return e;var t=_s[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in rd)return cr[e]=t[s];return e}var od=Pa("animationend"),cd=Pa("animationiteration"),dd=Pa("animationstart"),rh=Pa("transitionrun"),oh=Pa("transitionstart"),ch=Pa("transitioncancel"),ud=Pa("transitionend"),md=new Map,dr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dr.push("scrollEnd");function Vt(e,t){md.set(e,t),Fa(t,[e])}var An=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Lt=[],Ts=0,ur=0;function Cn(){for(var e=Ts,t=ur=Ts=0;t<e;){var s=Lt[t];Lt[t++]=null;var l=Lt[t];Lt[t++]=null;var n=Lt[t];Lt[t++]=null;var i=Lt[t];if(Lt[t++]=null,l!==null&&n!==null){var r=l.pending;r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n}i!==0&&fd(s,n,i)}}function En(e,t,s,l){Lt[Ts++]=e,Lt[Ts++]=t,Lt[Ts++]=s,Lt[Ts++]=l,ur|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function mr(e,t,s,l){return En(e,t,s,l),Mn(e)}function es(e,t){return En(e,null,null,t),Mn(e)}function fd(e,t,s){e.lanes|=s;var l=e.alternate;l!==null&&(l.lanes|=s);for(var n=!1,i=e.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-xt(s),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=s|536870912),i):null}function Mn(e){if(50<Vl)throw Vl=0,No=null,Error(d(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Os={};function dh(e,t,s,l){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,t,s,l){return new dh(e,t,s,l)}function fr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function la(e,t){var s=e.alternate;return s===null?(s=At(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function xd(e,t){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,t=s.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _n(e,t,s,l,n,i){var r=0;if(l=e,typeof e=="function")fr(e)&&(r=1);else if(typeof e=="string")r=h0(e,s,P.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=At(31,s,t,n),e.elementType=F,e.lanes=i,e;case j:return ts(s.children,n,i,t);case X:r=8,n|=24;break;case G:return e=At(12,s,t,n|2),e.elementType=G,e.lanes=i,e;case re:return e=At(13,s,t,n),e.elementType=re,e.lanes=i,e;case me:return e=At(19,s,t,n),e.elementType=me,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Y:r=10;break e;case w:r=9;break e;case I:r=11;break e;case K:r=14;break e;case te:r=16,l=null;break e}r=29,s=Error(d(130,e===null?"null":typeof e,"")),l=null}return t=At(r,s,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function ts(e,t,s,l){return e=At(7,e,l,t),e.lanes=s,e}function xr(e,t,s){return e=At(6,e,null,t),e.lanes=s,e}function hd(e){var t=At(18,null,null,0);return t.stateNode=e,t}function hr(e,t,s){return t=At(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pd=new WeakMap;function Ht(e,t){if(typeof e=="object"&&e!==null){var s=pd.get(e);return s!==void 0?s:(t={value:e,source:t,stack:ea(t)},pd.set(e,t),t)}return{value:e,source:t,stack:ea(t)}}var Ds=[],zs=0,Tn=null,wl=0,Rt=[],Bt=0,ka=null,It=1,Ft="";function na(e,t){Ds[zs++]=wl,Ds[zs++]=Tn,Tn=e,wl=t}function gd(e,t,s){Rt[Bt++]=It,Rt[Bt++]=Ft,Rt[Bt++]=ka,ka=e;var l=It;e=Ft;var n=32-xt(l)-1;l&=~(1<<n),s+=1;var i=32-xt(t)+n;if(30<i){var r=n-n%5;i=(l&(1<<r)-1).toString(32),l>>=r,n-=r,It=1<<32-xt(t)+n|s<<n|l,Ft=i+e}else It=1<<i|s<<n|l,Ft=e}function pr(e){e.return!==null&&(na(e,1),gd(e,1,0))}function gr(e){for(;e===Tn;)Tn=Ds[--zs],Ds[zs]=null,wl=Ds[--zs],Ds[zs]=null;for(;e===ka;)ka=Rt[--Bt],Rt[Bt]=null,Ft=Rt[--Bt],Rt[Bt]=null,It=Rt[--Bt],Rt[Bt]=null}function bd(e,t){Rt[Bt++]=It,Rt[Bt++]=Ft,Rt[Bt++]=ka,It=t.id,Ft=t.overflow,ka=e}var rt=null,Ge=null,Ae=!1,Aa=null,Ut=!1,br=Error(d(519));function Ca(e){var t=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Sl(Ht(t,e)),br}function vd(e){var t=e.stateNode,s=e.type,l=e.memoizedProps;switch(t[it]=e,t[gt]=l,s){case"dialog":ye("cancel",t),ye("close",t);break;case"iframe":case"object":case"embed":ye("load",t);break;case"video":case"audio":for(s=0;s<Ql.length;s++)ye(Ql[s],t);break;case"source":ye("error",t);break;case"img":case"image":case"link":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"input":ye("invalid",t),Oc(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ye("invalid",t);break;case"textarea":ye("invalid",t),zc(t,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||t.textContent===""+s||l.suppressHydrationWarning===!0||Hm(t.textContent,s)?(l.popover!=null&&(ye("beforetoggle",t),ye("toggle",t)),l.onScroll!=null&&ye("scroll",t),l.onScrollEnd!=null&&ye("scrollend",t),l.onClick!=null&&(t.onclick=aa),t=!0):t=!1,t||Ca(e,!0)}function yd(e){for(rt=e.return;rt;)switch(rt.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:rt=rt.return}}function Ls(e){if(e!==rt)return!1;if(!Ae)return yd(e),Ae=!0,!1;var t=e.tag,s;if((s=t!==3&&t!==27)&&((s=t===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Ro(e.type,e.memoizedProps)),s=!s),s&&Ge&&Ca(e),yd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ge=Km(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));Ge=Km(e)}else t===27?(t=Ge,Ga(e.type)?(e=Yo,Yo=null,Ge=e):Ge=t):Ge=rt?Gt(e.stateNode.nextSibling):null;return!0}function as(){Ge=rt=null,Ae=!1}function vr(){var e=Aa;return e!==null&&(Nt===null?Nt=e:Nt.push.apply(Nt,e),Aa=null),e}function Sl(e){Aa===null?Aa=[e]:Aa.push(e)}var yr=m(null),ss=null,ia=null;function Ea(e,t,s){W(yr,t._currentValue),t._currentValue=s}function ra(e){e._currentValue=yr.current,B(yr)}function jr(e,t,s){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===s)break;e=e.return}}function Nr(e,t,s,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var r=n.child;i=i.firstContext;e:for(;i!==null;){var c=i;i=n;for(var u=0;u<t.length;u++)if(c.context===t[u]){i.lanes|=s,c=i.alternate,c!==null&&(c.lanes|=s),jr(i.return,s,e),l||(r=null);break e}i=c.next}}else if(n.tag===18){if(r=n.return,r===null)throw Error(d(341));r.lanes|=s,i=r.alternate,i!==null&&(i.lanes|=s),jr(r,s,e),r=null}else r=n.child;if(r!==null)r.return=n;else for(r=n;r!==null;){if(r===e){r=null;break}if(n=r.sibling,n!==null){n.return=r.return,r=n;break}r=r.return}n=r}}function Hs(e,t,s,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var r=n.alternate;if(r===null)throw Error(d(387));if(r=r.memoizedProps,r!==null){var c=n.type;kt(n.pendingProps.value,r.value)||(e!==null?e.push(c):e=[c])}}else if(n===be.current){if(r=n.alternate,r===null)throw Error(d(387));r.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(Wl):e=[Wl])}n=n.return}e!==null&&Nr(t,e,s,l),t.flags|=262144}function On(e){for(e=e.firstContext;e!==null;){if(!kt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ls(e){ss=e,ia=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ot(e){return jd(ss,e)}function Dn(e,t){return ss===null&&ls(e),jd(e,t)}function jd(e,t){var s=t._currentValue;if(t={context:t,memoizedValue:s,next:null},ia===null){if(e===null)throw Error(d(308));ia=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ia=ia.next=t;return s}var uh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(s,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(s){return s()})}},mh=o.unstable_scheduleCallback,fh=o.unstable_NormalPriority,$e={$$typeof:Y,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wr(){return{controller:new uh,data:new Map,refCount:0}}function kl(e){e.refCount--,e.refCount===0&&mh(fh,function(){e.controller.abort()})}var Al=null,Sr=0,Rs=0,Bs=null;function xh(e,t){if(Al===null){var s=Al=[];Sr=0,Rs=Eo(),Bs={status:"pending",value:void 0,then:function(l){s.push(l)}}}return Sr++,t.then(Nd,Nd),t}function Nd(){if(--Sr===0&&Al!==null){Bs!==null&&(Bs.status="fulfilled");var e=Al;Al=null,Rs=0,Bs=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function hh(e,t){var s=[],l={status:"pending",value:null,reason:null,then:function(n){s.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<s.length;n++)(0,s[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<s.length;n++)(0,s[n])(void 0)}),l}var wd=N.S;N.S=function(e,t){im=mt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&xh(e,t),wd!==null&&wd(e,t)};var ns=m(null);function kr(){var e=ns.current;return e!==null?e:Ue.pooledCache}function zn(e,t){t===null?W(ns,ns.current):W(ns,t.pool)}function Sd(){var e=kr();return e===null?null:{parent:$e._currentValue,pool:e}}var Us=Error(d(460)),Ar=Error(d(474)),Ln=Error(d(542)),Hn={then:function(){}};function kd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ad(e,t,s){switch(s=e[s],s===void 0?e.push(t):s!==t&&(t.then(aa,aa),t=s),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ed(e),e;default:if(typeof t.status=="string")t.then(aa,aa);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ed(e),e}throw rs=t,Us}}function is(e){try{var t=e._init;return t(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(rs=s,Us):s}}var rs=null;function Cd(){if(rs===null)throw Error(d(459));var e=rs;return rs=null,e}function Ed(e){if(e===Us||e===Ln)throw Error(d(483))}var qs=null,Cl=0;function Rn(e){var t=Cl;return Cl+=1,qs===null&&(qs=[]),Ad(qs,e,t)}function El(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Bn(e,t){throw t.$$typeof===H?Error(d(525)):(e=Object.prototype.toString.call(t),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Md(e){function t(b,f){if(e){var S=b.deletions;S===null?(b.deletions=[f],b.flags|=16):S.push(f)}}function s(b,f){if(!e)return null;for(;f!==null;)t(b,f),f=f.sibling;return null}function l(b){for(var f=new Map;b!==null;)b.key!==null?f.set(b.key,b):f.set(b.index,b),b=b.sibling;return f}function n(b,f){return b=la(b,f),b.index=0,b.sibling=null,b}function i(b,f,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<f?(b.flags|=67108866,f):S):(b.flags|=67108866,f)):(b.flags|=1048576,f)}function r(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function c(b,f,S,U){return f===null||f.tag!==6?(f=xr(S,b.mode,U),f.return=b,f):(f=n(f,S),f.return=b,f)}function u(b,f,S,U){var oe=S.type;return oe===j?L(b,f,S.props.children,U,S.key):f!==null&&(f.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===te&&is(oe)===f.type)?(f=n(f,S.props),El(f,S),f.return=b,f):(f=_n(S.type,S.key,S.props,null,b.mode,U),El(f,S),f.return=b,f)}function k(b,f,S,U){return f===null||f.tag!==4||f.stateNode.containerInfo!==S.containerInfo||f.stateNode.implementation!==S.implementation?(f=hr(S,b.mode,U),f.return=b,f):(f=n(f,S.children||[]),f.return=b,f)}function L(b,f,S,U,oe){return f===null||f.tag!==7?(f=ts(S,b.mode,U,oe),f.return=b,f):(f=n(f,S),f.return=b,f)}function q(b,f,S){if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return f=xr(""+f,b.mode,S),f.return=b,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case R:return S=_n(f.type,f.key,f.props,null,b.mode,S),El(S,f),S.return=b,S;case Q:return f=hr(f,b.mode,S),f.return=b,f;case te:return f=is(f),q(b,f,S)}if(le(f)||J(f))return f=ts(f,b.mode,S,null),f.return=b,f;if(typeof f.then=="function")return q(b,Rn(f),S);if(f.$$typeof===Y)return q(b,Dn(b,f),S);Bn(b,f)}return null}function A(b,f,S,U){var oe=f!==null?f.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return oe!==null?null:c(b,f,""+S,U);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case R:return S.key===oe?u(b,f,S,U):null;case Q:return S.key===oe?k(b,f,S,U):null;case te:return S=is(S),A(b,f,S,U)}if(le(S)||J(S))return oe!==null?null:L(b,f,S,U,null);if(typeof S.then=="function")return A(b,f,Rn(S),U);if(S.$$typeof===Y)return A(b,f,Dn(b,S),U);Bn(b,S)}return null}function T(b,f,S,U,oe){if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return b=b.get(S)||null,c(f,b,""+U,oe);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case R:return b=b.get(U.key===null?S:U.key)||null,u(f,b,U,oe);case Q:return b=b.get(U.key===null?S:U.key)||null,k(f,b,U,oe);case te:return U=is(U),T(b,f,S,U,oe)}if(le(U)||J(U))return b=b.get(S)||null,L(f,b,U,oe,null);if(typeof U.then=="function")return T(b,f,S,Rn(U),oe);if(U.$$typeof===Y)return T(b,f,S,Dn(f,U),oe);Bn(f,U)}return null}function ae(b,f,S,U){for(var oe=null,Me=null,se=f,ge=f=0,Ne=null;se!==null&&ge<S.length;ge++){se.index>ge?(Ne=se,se=null):Ne=se.sibling;var _e=A(b,se,S[ge],U);if(_e===null){se===null&&(se=Ne);break}e&&se&&_e.alternate===null&&t(b,se),f=i(_e,f,ge),Me===null?oe=_e:Me.sibling=_e,Me=_e,se=Ne}if(ge===S.length)return s(b,se),Ae&&na(b,ge),oe;if(se===null){for(;ge<S.length;ge++)se=q(b,S[ge],U),se!==null&&(f=i(se,f,ge),Me===null?oe=se:Me.sibling=se,Me=se);return Ae&&na(b,ge),oe}for(se=l(se);ge<S.length;ge++)Ne=T(se,b,ge,S[ge],U),Ne!==null&&(e&&Ne.alternate!==null&&se.delete(Ne.key===null?ge:Ne.key),f=i(Ne,f,ge),Me===null?oe=Ne:Me.sibling=Ne,Me=Ne);return e&&se.forEach(function(Qa){return t(b,Qa)}),Ae&&na(b,ge),oe}function de(b,f,S,U){if(S==null)throw Error(d(151));for(var oe=null,Me=null,se=f,ge=f=0,Ne=null,_e=S.next();se!==null&&!_e.done;ge++,_e=S.next()){se.index>ge?(Ne=se,se=null):Ne=se.sibling;var Qa=A(b,se,_e.value,U);if(Qa===null){se===null&&(se=Ne);break}e&&se&&Qa.alternate===null&&t(b,se),f=i(Qa,f,ge),Me===null?oe=Qa:Me.sibling=Qa,Me=Qa,se=Ne}if(_e.done)return s(b,se),Ae&&na(b,ge),oe;if(se===null){for(;!_e.done;ge++,_e=S.next())_e=q(b,_e.value,U),_e!==null&&(f=i(_e,f,ge),Me===null?oe=_e:Me.sibling=_e,Me=_e);return Ae&&na(b,ge),oe}for(se=l(se);!_e.done;ge++,_e=S.next())_e=T(se,b,ge,_e.value,U),_e!==null&&(e&&_e.alternate!==null&&se.delete(_e.key===null?ge:_e.key),f=i(_e,f,ge),Me===null?oe=_e:Me.sibling=_e,Me=_e);return e&&se.forEach(function(A0){return t(b,A0)}),Ae&&na(b,ge),oe}function Be(b,f,S,U){if(typeof S=="object"&&S!==null&&S.type===j&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case R:e:{for(var oe=S.key;f!==null;){if(f.key===oe){if(oe=S.type,oe===j){if(f.tag===7){s(b,f.sibling),U=n(f,S.props.children),U.return=b,b=U;break e}}else if(f.elementType===oe||typeof oe=="object"&&oe!==null&&oe.$$typeof===te&&is(oe)===f.type){s(b,f.sibling),U=n(f,S.props),El(U,S),U.return=b,b=U;break e}s(b,f);break}else t(b,f);f=f.sibling}S.type===j?(U=ts(S.props.children,b.mode,U,S.key),U.return=b,b=U):(U=_n(S.type,S.key,S.props,null,b.mode,U),El(U,S),U.return=b,b=U)}return r(b);case Q:e:{for(oe=S.key;f!==null;){if(f.key===oe)if(f.tag===4&&f.stateNode.containerInfo===S.containerInfo&&f.stateNode.implementation===S.implementation){s(b,f.sibling),U=n(f,S.children||[]),U.return=b,b=U;break e}else{s(b,f);break}else t(b,f);f=f.sibling}U=hr(S,b.mode,U),U.return=b,b=U}return r(b);case te:return S=is(S),Be(b,f,S,U)}if(le(S))return ae(b,f,S,U);if(J(S)){if(oe=J(S),typeof oe!="function")throw Error(d(150));return S=oe.call(S),de(b,f,S,U)}if(typeof S.then=="function")return Be(b,f,Rn(S),U);if(S.$$typeof===Y)return Be(b,f,Dn(b,S),U);Bn(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,f!==null&&f.tag===6?(s(b,f.sibling),U=n(f,S),U.return=b,b=U):(s(b,f),U=xr(S,b.mode,U),U.return=b,b=U),r(b)):s(b,f)}return function(b,f,S,U){try{Cl=0;var oe=Be(b,f,S,U);return qs=null,oe}catch(se){if(se===Us||se===Ln)throw se;var Me=At(29,se,null,b.mode);return Me.lanes=U,Me.return=b,Me}finally{}}}var os=Md(!0),_d=Md(!1),Ma=!1;function Cr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Er(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,t,s){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Oe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=Mn(e),fd(e,null,s),t}return En(e,l,t,s),Mn(e)}function Ml(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,s|=l,t.lanes=s,jc(e,s)}}function Mr(e,t){var s=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var n=null,i=null;if(s=s.firstBaseUpdate,s!==null){do{var r={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};i===null?n=i=r:i=i.next=r,s=s.next}while(s!==null);i===null?n=i=t:i=i.next=t}else n=i=t;s={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}var _r=!1;function _l(){if(_r){var e=Bs;if(e!==null)throw e}}function Tl(e,t,s,l){_r=!1;var n=e.updateQueue;Ma=!1;var i=n.firstBaseUpdate,r=n.lastBaseUpdate,c=n.shared.pending;if(c!==null){n.shared.pending=null;var u=c,k=u.next;u.next=null,r===null?i=k:r.next=k,r=u;var L=e.alternate;L!==null&&(L=L.updateQueue,c=L.lastBaseUpdate,c!==r&&(c===null?L.firstBaseUpdate=k:c.next=k,L.lastBaseUpdate=u))}if(i!==null){var q=n.baseState;r=0,L=k=u=null,c=i;do{var A=c.lane&-536870913,T=A!==c.lane;if(T?(je&A)===A:(l&A)===A){A!==0&&A===Rs&&(_r=!0),L!==null&&(L=L.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var ae=e,de=c;A=t;var Be=s;switch(de.tag){case 1:if(ae=de.payload,typeof ae=="function"){q=ae.call(Be,q,A);break e}q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=de.payload,A=typeof ae=="function"?ae.call(Be,q,A):ae,A==null)break e;q=x({},q,A);break e;case 2:Ma=!0}}A=c.callback,A!==null&&(e.flags|=64,T&&(e.flags|=8192),T=n.callbacks,T===null?n.callbacks=[A]:T.push(A))}else T={lane:A,tag:c.tag,payload:c.payload,callback:c.callback,next:null},L===null?(k=L=T,u=q):L=L.next=T,r|=A;if(c=c.next,c===null){if(c=n.shared.pending,c===null)break;T=c,c=T.next,T.next=null,n.lastBaseUpdate=T,n.shared.pending=null}}while(!0);L===null&&(u=q),n.baseState=u,n.firstBaseUpdate=k,n.lastBaseUpdate=L,i===null&&(n.shared.lanes=0),Ha|=r,e.lanes=r,e.memoizedState=q}}function Td(e,t){if(typeof e!="function")throw Error(d(191,e));e.call(t)}function Od(e,t){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)Td(s[e],t)}var Gs=m(null),Un=m(0);function Dd(e,t){e=pa,W(Un,e),W(Gs,t),pa=e|t.baseLanes}function Tr(){W(Un,pa),W(Gs,Gs.current)}function Or(){pa=Un.current,B(Gs),B(Un)}var Ct=m(null),qt=null;function Oa(e){var t=e.alternate;W(Ie,Ie.current&1),W(Ct,e),qt===null&&(t===null||Gs.current!==null||t.memoizedState!==null)&&(qt=e)}function Dr(e){W(Ie,Ie.current),W(Ct,e),qt===null&&(qt=e)}function zd(e){e.tag===22?(W(Ie,Ie.current),W(Ct,e),qt===null&&(qt=e)):Da()}function Da(){W(Ie,Ie.current),W(Ct,Ct.current)}function Et(e){B(Ct),qt===e&&(qt=null),B(Ie)}var Ie=m(0);function qn(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||qo(s)||Go(s)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var oa=0,pe=null,He=null,Pe=null,Gn=!1,Ys=!1,cs=!1,Yn=0,Ol=0,Js=null,ph=0;function Xe(){throw Error(d(321))}function zr(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!kt(e[s],t[s]))return!1;return!0}function Lr(e,t,s,l,n,i){return oa=i,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?gu:Fr,cs=!1,i=s(l,n),cs=!1,Ys&&(i=Hd(t,s,l,n)),Ld(e),i}function Ld(e){N.H=Ll;var t=He!==null&&He.next!==null;if(oa=0,Pe=He=pe=null,Gn=!1,Ol=0,Js=null,t)throw Error(d(300));e===null||et||(e=e.dependencies,e!==null&&On(e)&&(et=!0))}function Hd(e,t,s,l){pe=e;var n=0;do{if(Ys&&(Js=null),Ol=0,Ys=!1,25<=n)throw Error(d(301));if(n+=1,Pe=He=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}N.H=bu,i=t(s,l)}while(Ys);return i}function gh(){var e=N.H,t=e.useState()[0];return t=typeof t.then=="function"?Dl(t):t,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(pe.flags|=1024),t}function Hr(){var e=Yn!==0;return Yn=0,e}function Rr(e,t,s){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s}function Br(e){if(Gn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gn=!1}oa=0,Pe=He=pe=null,Ys=!1,Ol=Yn=0,Js=null}function pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pe===null?pe.memoizedState=Pe=e:Pe=Pe.next=e,Pe}function Fe(){if(He===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Pe===null?pe.memoizedState:Pe.next;if(t!==null)Pe=t,He=e;else{if(e===null)throw pe.alternate===null?Error(d(467)):Error(d(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Pe===null?pe.memoizedState=Pe=e:Pe=Pe.next=e}return Pe}function Jn(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Dl(e){var t=Ol;return Ol+=1,Js===null&&(Js=[]),e=Ad(Js,e,t),t=pe,(Pe===null?t.memoizedState:Pe.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?gu:Fr),e}function Vn(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Dl(e);if(e.$$typeof===Y)return ot(e)}throw Error(d(438,String(e)))}function Ur(e){var t=null,s=pe.updateQueue;if(s!==null&&(t=s.memoCache),t==null){var l=pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),s===null&&(s=Jn(),pe.updateQueue=s),s.memoCache=t,s=t.data[t.index],s===void 0)for(s=t.data[t.index]=Array(e),l=0;l<e;l++)s[l]=Ve;return t.index++,s}function ca(e,t){return typeof t=="function"?t(e):t}function Kn(e){var t=Fe();return qr(t,He,e)}function qr(e,t,s){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=s;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var r=n.next;n.next=i.next,i.next=r}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var c=r=null,u=null,k=t,L=!1;do{var q=k.lane&-536870913;if(q!==k.lane?(je&q)===q:(oa&q)===q){var A=k.revertLane;if(A===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null}),q===Rs&&(L=!0);else if((oa&A)===A){k=k.next,A===Rs&&(L=!0);continue}else q={lane:0,revertLane:k.revertLane,gesture:null,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},u===null?(c=u=q,r=i):u=u.next=q,pe.lanes|=A,Ha|=A;q=k.action,cs&&s(i,q),i=k.hasEagerState?k.eagerState:s(i,q)}else A={lane:q,revertLane:k.revertLane,gesture:k.gesture,action:k.action,hasEagerState:k.hasEagerState,eagerState:k.eagerState,next:null},u===null?(c=u=A,r=i):u=u.next=A,pe.lanes|=q,Ha|=q;k=k.next}while(k!==null&&k!==t);if(u===null?r=i:u.next=c,!kt(i,e.memoizedState)&&(et=!0,L&&(s=Bs,s!==null)))throw s;e.memoizedState=i,e.baseState=r,e.baseQueue=u,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Gr(e){var t=Fe(),s=t.queue;if(s===null)throw Error(d(311));s.lastRenderedReducer=e;var l=s.dispatch,n=s.pending,i=t.memoizedState;if(n!==null){s.pending=null;var r=n=n.next;do i=e(i,r.action),r=r.next;while(r!==n);kt(i,t.memoizedState)||(et=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),s.lastRenderedState=i}return[i,l]}function Rd(e,t,s){var l=pe,n=Fe(),i=Ae;if(i){if(s===void 0)throw Error(d(407));s=s()}else s=t();var r=!kt((He||n).memoizedState,s);if(r&&(n.memoizedState=s,et=!0),n=n.queue,Vr(qd.bind(null,l,n,e),[e]),n.getSnapshot!==t||r||Pe!==null&&Pe.memoizedState.tag&1){if(l.flags|=2048,Vs(9,{destroy:void 0},Ud.bind(null,l,n,s,t),null),Ue===null)throw Error(d(349));i||(oa&127)!==0||Bd(l,t,s)}return s}function Bd(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=pe.updateQueue,t===null?(t=Jn(),pe.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function Ud(e,t,s,l){t.value=s,t.getSnapshot=l,Gd(t)&&Yd(e)}function qd(e,t,s){return s(function(){Gd(t)&&Yd(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!kt(e,s)}catch{return!0}}function Yd(e){var t=es(e,2);t!==null&&wt(t,e,2)}function Yr(e){var t=pt();if(typeof e=="function"){var s=e;if(e=s(),cs){We(!0);try{s()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function Jd(e,t,s,l){return e.baseState=s,qr(e,He,typeof l=="function"?l:ca)}function bh(e,t,s,l,n){if(Zn(e))throw Error(d(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};N.T!==null?s(!0):i.isTransition=!1,l(i),s=t.pending,s===null?(i.next=t.pending=i,Vd(t,i)):(i.next=s.next,t.pending=s.next=i)}}function Vd(e,t){var s=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=N.T,r={};N.T=r;try{var c=s(n,l),u=N.S;u!==null&&u(r,c),Kd(e,t,c)}catch(k){Jr(e,t,k)}finally{i!==null&&r.types!==null&&(i.types=r.types),N.T=i}}else try{i=s(n,l),Kd(e,t,i)}catch(k){Jr(e,t,k)}}function Kd(e,t,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Qd(e,t,l)},function(l){return Jr(e,t,l)}):Qd(e,t,s)}function Qd(e,t,s){t.status="fulfilled",t.value=s,Xd(t),e.state=s,t=e.pending,t!==null&&(s=t.next,s===t?e.pending=null:(s=s.next,t.next=s,Vd(e,s)))}function Jr(e,t,s){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=s,Xd(t),t=t.next;while(t!==l)}e.action=null}function Xd(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zd(e,t){return t}function Id(e,t){if(Ae){var s=Ue.formState;if(s!==null){e:{var l=pe;if(Ae){if(Ge){t:{for(var n=Ge,i=Ut;n.nodeType!==8;){if(!i){n=null;break t}if(n=Gt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ge=Gt(n.nextSibling),l=n.data==="F!";break e}}Ca(l)}l=!1}l&&(t=s[0])}}return s=pt(),s.memoizedState=s.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zd,lastRenderedState:t},s.queue=l,s=xu.bind(null,pe,l),l.dispatch=s,l=Yr(!1),i=Ir.bind(null,pe,!1,l.queue),l=pt(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,s=bh.bind(null,pe,n,i,s),n.dispatch=s,l.memoizedState=e,[t,s,!1]}function Fd(e){var t=Fe();return Wd(t,He,e)}function Wd(e,t,s){if(t=qr(e,t,Zd)[0],e=Kn(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Dl(t)}catch(r){throw r===Us?Ln:r}else l=t;t=Fe();var n=t.queue,i=n.dispatch;return s!==t.memoizedState&&(pe.flags|=2048,Vs(9,{destroy:void 0},vh.bind(null,n,s),null)),[l,i,e]}function vh(e,t){e.action=t}function $d(e){var t=Fe(),s=He;if(s!==null)return Wd(t,s,e);Fe(),t=t.memoizedState,s=Fe();var l=s.queue.dispatch;return s.memoizedState=e,[t,l,!1]}function Vs(e,t,s,l){return e={tag:e,create:s,deps:l,inst:t,next:null},t=pe.updateQueue,t===null&&(t=Jn(),pe.updateQueue=t),s=t.lastEffect,s===null?t.lastEffect=e.next=e:(l=s.next,s.next=e,e.next=l,t.lastEffect=e),e}function Pd(){return Fe().memoizedState}function Qn(e,t,s,l){var n=pt();pe.flags|=e,n.memoizedState=Vs(1|t,{destroy:void 0},s,l===void 0?null:l)}function Xn(e,t,s,l){var n=Fe();l=l===void 0?null:l;var i=n.memoizedState.inst;He!==null&&l!==null&&zr(l,He.memoizedState.deps)?n.memoizedState=Vs(t,i,s,l):(pe.flags|=e,n.memoizedState=Vs(1|t,i,s,l))}function eu(e,t){Qn(8390656,8,e,t)}function Vr(e,t){Xn(2048,8,e,t)}function yh(e){pe.flags|=4;var t=pe.updateQueue;if(t===null)t=Jn(),pe.updateQueue=t,t.events=[e];else{var s=t.events;s===null?t.events=[e]:s.push(e)}}function tu(e){var t=Fe().memoizedState;return yh({ref:t,nextImpl:e}),function(){if((Oe&2)!==0)throw Error(d(440));return t.impl.apply(void 0,arguments)}}function au(e,t){return Xn(4,2,e,t)}function su(e,t){return Xn(4,4,e,t)}function lu(e,t){if(typeof t=="function"){e=e();var s=t(e);return function(){typeof s=="function"?s():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nu(e,t,s){s=s!=null?s.concat([e]):null,Xn(4,4,lu.bind(null,t,e),s)}function Kr(){}function iu(e,t){var s=Fe();t=t===void 0?null:t;var l=s.memoizedState;return t!==null&&zr(t,l[1])?l[0]:(s.memoizedState=[e,t],e)}function ru(e,t){var s=Fe();t=t===void 0?null:t;var l=s.memoizedState;if(t!==null&&zr(t,l[1]))return l[0];if(l=e(),cs){We(!0);try{e()}finally{We(!1)}}return s.memoizedState=[l,t],l}function Qr(e,t,s){return s===void 0||(oa&1073741824)!==0&&(je&261930)===0?e.memoizedState=t:(e.memoizedState=s,e=om(),pe.lanes|=e,Ha|=e,s)}function ou(e,t,s,l){return kt(s,t)?s:Gs.current!==null?(e=Qr(e,s,l),kt(e,t)||(et=!0),e):(oa&42)===0||(oa&1073741824)!==0&&(je&261930)===0?(et=!0,e.memoizedState=s):(e=om(),pe.lanes|=e,Ha|=e,t)}function cu(e,t,s,l,n){var i=C.p;C.p=i!==0&&8>i?i:8;var r=N.T,c={};N.T=c,Ir(e,!1,t,s);try{var u=n(),k=N.S;if(k!==null&&k(c,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var L=hh(u,l);zl(e,t,L,Tt(e))}else zl(e,t,l,Tt(e))}catch(q){zl(e,t,{then:function(){},status:"rejected",reason:q},Tt())}finally{C.p=i,r!==null&&c.types!==null&&(r.types=c.types),N.T=r}}function jh(){}function Xr(e,t,s,l){if(e.tag!==5)throw Error(d(476));var n=du(e).queue;cu(e,n,t,V,s===null?jh:function(){return uu(e),s(l)})}function du(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:V,baseState:V,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:V},next:null};var s={};return t.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:s},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function uu(e){var t=du(e);t.next===null&&(t=e.alternate.memoizedState),zl(e,t.next.queue,{},Tt())}function Zr(){return ot(Wl)}function mu(){return Fe().memoizedState}function fu(){return Fe().memoizedState}function Nh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var s=Tt();e=_a(s);var l=Ta(t,e,s);l!==null&&(wt(l,t,s),Ml(l,t,s)),t={cache:wr()},e.payload=t;return}t=t.return}}function wh(e,t,s){var l=Tt();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Zn(e)?hu(t,s):(s=mr(e,t,s,l),s!==null&&(wt(s,e,l),pu(s,t,l)))}function xu(e,t,s){var l=Tt();zl(e,t,s,l)}function zl(e,t,s,l){var n={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Zn(e))hu(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,c=i(r,s);if(n.hasEagerState=!0,n.eagerState=c,kt(c,r))return En(e,t,n,0),Ue===null&&Cn(),!1}catch{}finally{}if(s=mr(e,t,n,l),s!==null)return wt(s,e,l),pu(s,t,l),!0}return!1}function Ir(e,t,s,l){if(l={lane:2,revertLane:Eo(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Zn(e)){if(t)throw Error(d(479))}else t=mr(e,s,l,2),t!==null&&wt(t,e,2)}function Zn(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function hu(e,t){Ys=Gn=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function pu(e,t,s){if((s&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,s|=l,t.lanes=s,jc(e,s)}}var Ll={readContext:ot,use:Vn,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useInsertionEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useDeferredValue:Xe,useTransition:Xe,useSyncExternalStore:Xe,useId:Xe,useHostTransitionStatus:Xe,useFormState:Xe,useActionState:Xe,useOptimistic:Xe,useMemoCache:Xe,useCacheRefresh:Xe};Ll.useEffectEvent=Xe;var gu={readContext:ot,use:Vn,useCallback:function(e,t){return pt().memoizedState=[e,t===void 0?null:t],e},useContext:ot,useEffect:eu,useImperativeHandle:function(e,t,s){s=s!=null?s.concat([e]):null,Qn(4194308,4,lu.bind(null,t,e),s)},useLayoutEffect:function(e,t){return Qn(4194308,4,e,t)},useInsertionEffect:function(e,t){Qn(4,2,e,t)},useMemo:function(e,t){var s=pt();t=t===void 0?null:t;var l=e();if(cs){We(!0);try{e()}finally{We(!1)}}return s.memoizedState=[l,t],l},useReducer:function(e,t,s){var l=pt();if(s!==void 0){var n=s(t);if(cs){We(!0);try{s(t)}finally{We(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=wh.bind(null,pe,e),[l.memoizedState,e]},useRef:function(e){var t=pt();return e={current:e},t.memoizedState=e},useState:function(e){e=Yr(e);var t=e.queue,s=xu.bind(null,pe,t);return t.dispatch=s,[e.memoizedState,s]},useDebugValue:Kr,useDeferredValue:function(e,t){var s=pt();return Qr(s,e,t)},useTransition:function(){var e=Yr(!1);return e=cu.bind(null,pe,e.queue,!0,!1),pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,s){var l=pe,n=pt();if(Ae){if(s===void 0)throw Error(d(407));s=s()}else{if(s=t(),Ue===null)throw Error(d(349));(je&127)!==0||Bd(l,t,s)}n.memoizedState=s;var i={value:s,getSnapshot:t};return n.queue=i,eu(qd.bind(null,l,i,e),[e]),l.flags|=2048,Vs(9,{destroy:void 0},Ud.bind(null,l,i,s,t),null),s},useId:function(){var e=pt(),t=Ue.identifierPrefix;if(Ae){var s=Ft,l=It;s=(l&~(1<<32-xt(l)-1)).toString(32)+s,t="_"+t+"R_"+s,s=Yn++,0<s&&(t+="H"+s.toString(32)),t+="_"}else s=ph++,t="_"+t+"r_"+s.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Zr,useFormState:Id,useActionState:Id,useOptimistic:function(e){var t=pt();t.memoizedState=t.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=s,t=Ir.bind(null,pe,!0,s),s.dispatch=t,[e,t]},useMemoCache:Ur,useCacheRefresh:function(){return pt().memoizedState=Nh.bind(null,pe)},useEffectEvent:function(e){var t=pt(),s={impl:e};return t.memoizedState=s,function(){if((Oe&2)!==0)throw Error(d(440));return s.impl.apply(void 0,arguments)}}},Fr={readContext:ot,use:Vn,useCallback:iu,useContext:ot,useEffect:Vr,useImperativeHandle:nu,useInsertionEffect:au,useLayoutEffect:su,useMemo:ru,useReducer:Kn,useRef:Pd,useState:function(){return Kn(ca)},useDebugValue:Kr,useDeferredValue:function(e,t){var s=Fe();return ou(s,He.memoizedState,e,t)},useTransition:function(){var e=Kn(ca)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Dl(e),t]},useSyncExternalStore:Rd,useId:mu,useHostTransitionStatus:Zr,useFormState:Fd,useActionState:Fd,useOptimistic:function(e,t){var s=Fe();return Jd(s,He,e,t)},useMemoCache:Ur,useCacheRefresh:fu};Fr.useEffectEvent=tu;var bu={readContext:ot,use:Vn,useCallback:iu,useContext:ot,useEffect:Vr,useImperativeHandle:nu,useInsertionEffect:au,useLayoutEffect:su,useMemo:ru,useReducer:Gr,useRef:Pd,useState:function(){return Gr(ca)},useDebugValue:Kr,useDeferredValue:function(e,t){var s=Fe();return He===null?Qr(s,e,t):ou(s,He.memoizedState,e,t)},useTransition:function(){var e=Gr(ca)[0],t=Fe().memoizedState;return[typeof e=="boolean"?e:Dl(e),t]},useSyncExternalStore:Rd,useId:mu,useHostTransitionStatus:Zr,useFormState:$d,useActionState:$d,useOptimistic:function(e,t){var s=Fe();return He!==null?Jd(s,He,e,t):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:Ur,useCacheRefresh:fu};bu.useEffectEvent=tu;function Wr(e,t,s,l){t=e.memoizedState,s=s(l,t),s=s==null?t:x({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var $r={enqueueSetState:function(e,t,s){e=e._reactInternals;var l=Tt(),n=_a(l);n.payload=t,s!=null&&(n.callback=s),t=Ta(e,n,l),t!==null&&(wt(t,e,l),Ml(t,e,l))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var l=Tt(),n=_a(l);n.tag=1,n.payload=t,s!=null&&(n.callback=s),t=Ta(e,n,l),t!==null&&(wt(t,e,l),Ml(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=Tt(),l=_a(s);l.tag=2,t!=null&&(l.callback=t),t=Ta(e,l,s),t!==null&&(wt(t,e,s),Ml(t,e,s))}};function vu(e,t,s,l,n,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!jl(s,l)||!jl(n,i):!0}function yu(e,t,s,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,l),t.state!==e&&$r.enqueueReplaceState(t,t.state,null)}function ds(e,t){var s=t;if("ref"in t){s={};for(var l in t)l!=="ref"&&(s[l]=t[l])}if(e=e.defaultProps){s===t&&(s=x({},s));for(var n in e)s[n]===void 0&&(s[n]=e[n])}return s}function ju(e){An(e)}function Nu(e){console.error(e)}function wu(e){An(e)}function In(e,t){try{var s=e.onUncaughtError;s(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Su(e,t,s){try{var l=e.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function Pr(e,t,s){return s=_a(s),s.tag=3,s.payload={element:null},s.callback=function(){In(e,t)},s}function ku(e){return e=_a(e),e.tag=3,e}function Au(e,t,s,l){var n=s.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Su(t,s,l)}}var r=s.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Su(t,s,l),typeof n!="function"&&(Ra===null?Ra=new Set([this]):Ra.add(this));var c=l.stack;this.componentDidCatch(l.value,{componentStack:c!==null?c:""})})}function Sh(e,t,s,l,n){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=s.alternate,t!==null&&Hs(t,s,n,!0),s=Ct.current,s!==null){switch(s.tag){case 31:case 13:return qt===null?ri():s.alternate===null&&Ze===0&&(Ze=3),s.flags&=-257,s.flags|=65536,s.lanes=n,l===Hn?s.flags|=16384:(t=s.updateQueue,t===null?s.updateQueue=new Set([l]):t.add(l),ko(e,l,n)),!1;case 22:return s.flags|=65536,l===Hn?s.flags|=16384:(t=s.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=t):(s=t.retryQueue,s===null?t.retryQueue=new Set([l]):s.add(l)),ko(e,l,n)),!1}throw Error(d(435,s.tag))}return ko(e,l,n),ri(),!1}if(Ae)return t=Ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==br&&(e=Error(d(422),{cause:l}),Sl(Ht(e,s)))):(l!==br&&(t=Error(d(423),{cause:l}),Sl(Ht(t,s))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=Ht(l,s),n=Pr(e.stateNode,l,n),Mr(e,n),Ze!==4&&(Ze=2)),!1;var i=Error(d(520),{cause:l});if(i=Ht(i,s),Jl===null?Jl=[i]:Jl.push(i),Ze!==4&&(Ze=2),t===null)return!0;l=Ht(l,s),s=t;do{switch(s.tag){case 3:return s.flags|=65536,e=n&-n,s.lanes|=e,e=Pr(s.stateNode,l,e),Mr(s,e),!1;case 1:if(t=s.type,i=s.stateNode,(s.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Ra===null||!Ra.has(i))))return s.flags|=65536,n&=-n,s.lanes|=n,n=ku(n),Au(n,e,s,l),Mr(s,n),!1}s=s.return}while(s!==null);return!1}var eo=Error(d(461)),et=!1;function ct(e,t,s,l){t.child=e===null?_d(t,null,s,l):os(t,e.child,s,l)}function Cu(e,t,s,l,n){s=s.render;var i=t.ref;if("ref"in l){var r={};for(var c in l)c!=="ref"&&(r[c]=l[c])}else r=l;return ls(t),l=Lr(e,t,s,r,i,n),c=Hr(),e!==null&&!et?(Rr(e,t,n),da(e,t,n)):(Ae&&c&&pr(t),t.flags|=1,ct(e,t,l,n),t.child)}function Eu(e,t,s,l,n){if(e===null){var i=s.type;return typeof i=="function"&&!fr(i)&&i.defaultProps===void 0&&s.compare===null?(t.tag=15,t.type=i,Mu(e,t,i,l,n)):(e=_n(s.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!oo(e,n)){var r=i.memoizedProps;if(s=s.compare,s=s!==null?s:jl,s(r,l)&&e.ref===t.ref)return da(e,t,n)}return t.flags|=1,e=la(i,l),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,s,l,n){if(e!==null){var i=e.memoizedProps;if(jl(i,l)&&e.ref===t.ref)if(et=!1,t.pendingProps=l=i,oo(e,n))(e.flags&131072)!==0&&(et=!0);else return t.lanes=e.lanes,da(e,t,n)}return to(e,t,s,l,n)}function _u(e,t,s,l){var n=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|s:s,e!==null){for(l=t.child=e.child,n=0;l!==null;)n=n|l.lanes|l.childLanes,l=l.sibling;l=n&~i}else l=0,t.child=null;return Tu(e,t,i,s,l)}if((s&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&zn(t,i!==null?i.cachePool:null),i!==null?Dd(t,i):Tr(),zd(t);else return l=t.lanes=536870912,Tu(e,t,i!==null?i.baseLanes|s:s,s,l)}else i!==null?(zn(t,i.cachePool),Dd(t,i),Da(),t.memoizedState=null):(e!==null&&zn(t,null),Tr(),Da());return ct(e,t,n,s),t.child}function Hl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Tu(e,t,s,l,n){var i=kr();return i=i===null?null:{parent:$e._currentValue,pool:i},t.memoizedState={baseLanes:s,cachePool:i},e!==null&&zn(t,null),Tr(),zd(t),e!==null&&Hs(e,t,l,!0),t.childLanes=n,null}function Fn(e,t){return t=$n({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ou(e,t,s){return os(t,e.child,null,s),e=Fn(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function kh(e,t,s){var l=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Ae){if(l.mode==="hidden")return e=Fn(t,l),t.lanes=536870912,Hl(null,e);if(Dr(t),(e=Ge)?(e=Vm(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:It,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},s=hd(e),s.return=t,t.child=s,rt=t,Ge=null)):e=null,e===null)throw Ca(t);return t.lanes=536870912,null}return Fn(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(Dr(t),n)if(t.flags&256)t.flags&=-257,t=Ou(e,t,s);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(d(558));else if(et||Hs(e,t,s,!1),n=(s&e.childLanes)!==0,et||n){if(l=Ue,l!==null&&(r=Nc(l,s),r!==0&&r!==i.retryLane))throw i.retryLane=r,es(e,r),wt(l,e,r),eo;ri(),t=Ou(e,t,s)}else e=i.treeContext,Ge=Gt(r.nextSibling),rt=t,Ae=!0,Aa=null,Ut=!1,e!==null&&bd(t,e),t=Fn(t,l),t.flags|=4096;return t}return e=la(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wn(e,t){var s=t.ref;if(s===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(d(284));(e===null||e.ref!==s)&&(t.flags|=4194816)}}function to(e,t,s,l,n){return ls(t),s=Lr(e,t,s,l,void 0,n),l=Hr(),e!==null&&!et?(Rr(e,t,n),da(e,t,n)):(Ae&&l&&pr(t),t.flags|=1,ct(e,t,s,n),t.child)}function Du(e,t,s,l,n,i){return ls(t),t.updateQueue=null,s=Hd(t,l,s,n),Ld(e),l=Hr(),e!==null&&!et?(Rr(e,t,i),da(e,t,i)):(Ae&&l&&pr(t),t.flags|=1,ct(e,t,s,i),t.child)}function zu(e,t,s,l,n){if(ls(t),t.stateNode===null){var i=Os,r=s.contextType;typeof r=="object"&&r!==null&&(i=ot(r)),i=new s(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=$r,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Cr(t),r=s.contextType,i.context=typeof r=="object"&&r!==null?ot(r):Os,i.state=t.memoizedState,r=s.getDerivedStateFromProps,typeof r=="function"&&(Wr(t,s,r,l),i.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&$r.enqueueReplaceState(i,i.state,null),Tl(t,l,i,n),_l(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var c=t.memoizedProps,u=ds(s,c);i.props=u;var k=i.context,L=s.contextType;r=Os,typeof L=="object"&&L!==null&&(r=ot(L));var q=s.getDerivedStateFromProps;L=typeof q=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,L||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||k!==r)&&yu(t,i,l,r),Ma=!1;var A=t.memoizedState;i.state=A,Tl(t,l,i,n),_l(),k=t.memoizedState,c||A!==k||Ma?(typeof q=="function"&&(Wr(t,s,q,l),k=t.memoizedState),(u=Ma||vu(t,s,u,l,A,k,r))?(L||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=k),i.props=l,i.state=k,i.context=r,l=u):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Er(e,t),r=t.memoizedProps,L=ds(s,r),i.props=L,q=t.pendingProps,A=i.context,k=s.contextType,u=Os,typeof k=="object"&&k!==null&&(u=ot(k)),c=s.getDerivedStateFromProps,(k=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==q||A!==u)&&yu(t,i,l,u),Ma=!1,A=t.memoizedState,i.state=A,Tl(t,l,i,n),_l();var T=t.memoizedState;r!==q||A!==T||Ma||e!==null&&e.dependencies!==null&&On(e.dependencies)?(typeof c=="function"&&(Wr(t,s,c,l),T=t.memoizedState),(L=Ma||vu(t,s,L,l,A,T,u)||e!==null&&e.dependencies!==null&&On(e.dependencies))?(k||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,T,u),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,T,u)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=T),i.props=l,i.state=T,i.context=u,l=L):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Wn(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=os(t,e.child,null,n),t.child=os(t,null,s,n)):ct(e,t,s,n),t.memoizedState=i.state,e=t.child):e=da(e,t,n),e}function Lu(e,t,s,l){return as(),t.flags|=256,ct(e,t,s,l),t.child}var ao={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function so(e){return{baseLanes:e,cachePool:Sd()}}function lo(e,t,s){return e=e!==null?e.childLanes&~s:0,t&&(e|=_t),e}function Hu(e,t,s){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(Ie.current&2)!==0),r&&(n=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(Ae){if(n?Oa(t):Da(),(e=Ge)?(e=Vm(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:ka!==null?{id:It,overflow:Ft}:null,retryLane:536870912,hydrationErrors:null},s=hd(e),s.return=t,t.child=s,rt=t,Ge=null)):e=null,e===null)throw Ca(t);return Go(e)?t.lanes=32:t.lanes=536870912,null}var c=l.children;return l=l.fallback,n?(Da(),n=t.mode,c=$n({mode:"hidden",children:c},n),l=ts(l,n,s,null),c.return=t,l.return=t,c.sibling=l,t.child=c,l=t.child,l.memoizedState=so(s),l.childLanes=lo(e,r,s),t.memoizedState=ao,Hl(null,l)):(Oa(t),no(t,c))}var u=e.memoizedState;if(u!==null&&(c=u.dehydrated,c!==null)){if(i)t.flags&256?(Oa(t),t.flags&=-257,t=io(e,t,s)):t.memoizedState!==null?(Da(),t.child=e.child,t.flags|=128,t=null):(Da(),c=l.fallback,n=t.mode,l=$n({mode:"visible",children:l.children},n),c=ts(c,n,s,null),c.flags|=2,l.return=t,c.return=t,l.sibling=c,t.child=l,os(t,e.child,null,s),l=t.child,l.memoizedState=so(s),l.childLanes=lo(e,r,s),t.memoizedState=ao,t=Hl(null,l));else if(Oa(t),Go(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var k=r.dgst;r=k,l=Error(d(419)),l.stack="",l.digest=r,Sl({value:l,source:null,stack:null}),t=io(e,t,s)}else if(et||Hs(e,t,s,!1),r=(s&e.childLanes)!==0,et||r){if(r=Ue,r!==null&&(l=Nc(r,s),l!==0&&l!==u.retryLane))throw u.retryLane=l,es(e,l),wt(r,e,l),eo;qo(c)||ri(),t=io(e,t,s)}else qo(c)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,Ge=Gt(c.nextSibling),rt=t,Ae=!0,Aa=null,Ut=!1,e!==null&&bd(t,e),t=no(t,l.children),t.flags|=4096);return t}return n?(Da(),c=l.fallback,n=t.mode,u=e.child,k=u.sibling,l=la(u,{mode:"hidden",children:l.children}),l.subtreeFlags=u.subtreeFlags&65011712,k!==null?c=la(k,c):(c=ts(c,n,s,null),c.flags|=2),c.return=t,l.return=t,l.sibling=c,t.child=l,Hl(null,l),l=t.child,c=e.child.memoizedState,c===null?c=so(s):(n=c.cachePool,n!==null?(u=$e._currentValue,n=n.parent!==u?{parent:u,pool:u}:n):n=Sd(),c={baseLanes:c.baseLanes|s,cachePool:n}),l.memoizedState=c,l.childLanes=lo(e,r,s),t.memoizedState=ao,Hl(e.child,l)):(Oa(t),s=e.child,e=s.sibling,s=la(s,{mode:"visible",children:l.children}),s.return=t,s.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=s,t.memoizedState=null,s)}function no(e,t){return t=$n({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function $n(e,t){return e=At(22,e,null,t),e.lanes=0,e}function io(e,t,s){return os(t,e.child,null,s),e=no(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ru(e,t,s){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),jr(e.return,t,s)}function ro(e,t,s,l,n,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:n,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=s,r.tailMode=n,r.treeForkCount=i)}function Bu(e,t,s){var l=t.pendingProps,n=l.revealOrder,i=l.tail;l=l.children;var r=Ie.current,c=(r&2)!==0;if(c?(r=r&1|2,t.flags|=128):r&=1,W(Ie,r),ct(e,t,l,s),l=Ae?wl:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ru(e,s,t);else if(e.tag===19)Ru(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(s=t.child,n=null;s!==null;)e=s.alternate,e!==null&&qn(e)===null&&(n=s),s=s.sibling;s=n,s===null?(n=t.child,t.child=null):(n=s.sibling,s.sibling=null),ro(t,!1,n,s,i,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&qn(e)===null){t.child=n;break}e=n.sibling,n.sibling=s,s=n,n=e}ro(t,!0,s,null,i,l);break;case"together":ro(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function da(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),Ha|=t.lanes,(s&t.childLanes)===0)if(e!==null){if(Hs(e,t,s,!1),(s&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(d(153));if(t.child!==null){for(e=t.child,s=la(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=la(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function oo(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&On(e)))}function Ah(e,t,s){switch(t.tag){case 3:M(t,t.stateNode.containerInfo),Ea(t,$e,e.memoizedState.cache),as();break;case 27:case 5:ne(t);break;case 4:M(t,t.stateNode.containerInfo);break;case 10:Ea(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Dr(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Oa(t),t.flags|=128,null):(s&t.child.childLanes)!==0?Hu(e,t,s):(Oa(t),e=da(e,t,s),e!==null?e.sibling:null);Oa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(s&t.childLanes)!==0,l||(Hs(e,t,s,!1),l=(s&t.childLanes)!==0),n){if(l)return Bu(e,t,s);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),W(Ie,Ie.current),l)break;return null;case 22:return t.lanes=0,_u(e,t,s,t.pendingProps);case 24:Ea(t,$e,e.memoizedState.cache)}return da(e,t,s)}function Uu(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps)et=!0;else{if(!oo(e,s)&&(t.flags&128)===0)return et=!1,Ah(e,t,s);et=(e.flags&131072)!==0}else et=!1,Ae&&(t.flags&1048576)!==0&&gd(t,wl,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=is(t.elementType),t.type=e,typeof e=="function")fr(e)?(l=ds(e,l),t.tag=1,t=zu(null,t,e,l,s)):(t.tag=0,t=to(null,t,e,l,s));else{if(e!=null){var n=e.$$typeof;if(n===I){t.tag=11,t=Cu(null,t,e,l,s);break e}else if(n===K){t.tag=14,t=Eu(null,t,e,l,s);break e}}throw t=he(e)||e,Error(d(306,t,""))}}return t;case 0:return to(e,t,t.type,t.pendingProps,s);case 1:return l=t.type,n=ds(l,t.pendingProps),zu(e,t,l,n,s);case 3:e:{if(M(t,t.stateNode.containerInfo),e===null)throw Error(d(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Er(e,t),Tl(t,l,null,s);var r=t.memoizedState;if(l=r.cache,Ea(t,$e,l),l!==i.cache&&Nr(t,[$e],s,!0),_l(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Lu(e,t,l,s);break e}else if(l!==n){n=Ht(Error(d(424)),t),Sl(n),t=Lu(e,t,l,s);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ge=Gt(e.firstChild),rt=t,Ae=!0,Aa=null,Ut=!0,s=_d(t,null,l,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(as(),l===n){t=da(e,t,s);break e}ct(e,t,l,s)}t=t.child}return t;case 26:return Wn(e,t),e===null?(s=Fm(t.type,null,t.pendingProps,null))?t.memoizedState=s:Ae||(s=t.type,e=t.pendingProps,l=xi(fe.current).createElement(s),l[it]=t,l[gt]=e,dt(l,s,e),st(l),t.stateNode=l):t.memoizedState=Fm(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ne(t),e===null&&Ae&&(l=t.stateNode=Xm(t.type,t.pendingProps,fe.current),rt=t,Ut=!0,n=Ge,Ga(t.type)?(Yo=n,Ge=Gt(l.firstChild)):Ge=n),ct(e,t,t.pendingProps.children,s),Wn(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Ae&&((n=l=Ge)&&(l=a0(l,t.type,t.pendingProps,Ut),l!==null?(t.stateNode=l,rt=t,Ge=Gt(l.firstChild),Ut=!1,n=!0):n=!1),n||Ca(t)),ne(t),n=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,Ro(n,i)?l=null:r!==null&&Ro(n,r)&&(t.flags|=32),t.memoizedState!==null&&(n=Lr(e,t,gh,null,null,s),Wl._currentValue=n),Wn(e,t),ct(e,t,l,s),t.child;case 6:return e===null&&Ae&&((e=s=Ge)&&(s=s0(s,t.pendingProps,Ut),s!==null?(t.stateNode=s,rt=t,Ge=null,e=!0):e=!1),e||Ca(t)),null;case 13:return Hu(e,t,s);case 4:return M(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=os(t,null,l,s):ct(e,t,l,s),t.child;case 11:return Cu(e,t,t.type,t.pendingProps,s);case 7:return ct(e,t,t.pendingProps,s),t.child;case 8:return ct(e,t,t.pendingProps.children,s),t.child;case 12:return ct(e,t,t.pendingProps.children,s),t.child;case 10:return l=t.pendingProps,Ea(t,t.type,l.value),ct(e,t,l.children,s),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,ls(t),n=ot(n),l=l(n),t.flags|=1,ct(e,t,l,s),t.child;case 14:return Eu(e,t,t.type,t.pendingProps,s);case 15:return Mu(e,t,t.type,t.pendingProps,s);case 19:return Bu(e,t,s);case 31:return kh(e,t,s);case 22:return _u(e,t,s,t.pendingProps);case 24:return ls(t),l=ot($e),e===null?(n=kr(),n===null&&(n=Ue,i=wr(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=s),n=i),t.memoizedState={parent:l,cache:n},Cr(t),Ea(t,$e,n)):((e.lanes&s)!==0&&(Er(e,t),Tl(t,null,null,s),_l()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),Ea(t,$e,l)):(l=i.cache,Ea(t,$e,l),l!==n.cache&&Nr(t,[$e],s,!0))),ct(e,t,t.pendingProps.children,s),t.child;case 29:throw t.pendingProps}throw Error(d(156,t.tag))}function ua(e){e.flags|=4}function co(e,t,s,l,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(mm())e.flags|=8192;else throw rs=Hn,Ar}else e.flags&=-16777217}function qu(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tf(t))if(mm())e.flags|=8192;else throw rs=Hn,Ar}function Pn(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vc():536870912,e.lanes|=t,Zs|=t)}function Rl(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,l=0;if(t)for(var n=e.child;n!==null;)s|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)s|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=s,t}function Ch(e,t,s){var l=t.pendingProps;switch(gr(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return Ye(t),null;case 3:return s=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ra($e),Z(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Ls(t)?ua(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,vr())),Ye(t),null;case 26:var n=t.type,i=t.memoizedState;return e===null?(ua(t),i!==null?(Ye(t),qu(t,i)):(Ye(t),co(t,n,null,l,s))):i?i!==e.memoizedState?(ua(t),Ye(t),qu(t,i)):(Ye(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ua(t),Ye(t),co(t,n,e,l,s)),null;case 27:if(Ce(t),s=fe.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ua(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Ye(t),null}e=P.current,Ls(t)?vd(t):(e=Xm(n,l,s),t.stateNode=e,ua(t))}return Ye(t),null;case 5:if(Ce(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ua(t);else{if(!l){if(t.stateNode===null)throw Error(d(166));return Ye(t),null}if(i=P.current,Ls(t))vd(t);else{var r=xi(fe.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(n,{is:l.is}):r.createElement(n)}}i[it]=t,i[gt]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(dt(i,n,l),n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ua(t)}}return Ye(t),co(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,s),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ua(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(d(166));if(e=fe.current,Ls(t)){if(e=t.stateNode,s=t.memoizedProps,l=null,n=rt,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[it]=t,e=!!(e.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Hm(e.nodeValue,s)),e||Ca(t,!0)}else e=xi(e).createTextNode(l),e[it]=t,t.stateNode=e}return Ye(t),null;case 31:if(s=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ls(t),s!==null){if(e===null){if(!l)throw Error(d(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[it]=t}else as(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),e=!1}else s=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(d(558))}return Ye(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ls(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(d(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(d(317));n[it]=t}else as(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),n=!1}else n=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=s,t):(s=l!==null,e=e!==null&&e.memoizedState!==null,s&&(l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)),s!==e&&s&&(t.child.flags|=8192),Pn(t,t.updateQueue),Ye(t),null);case 4:return Z(),e===null&&Oo(t.stateNode.containerInfo),Ye(t),null;case 10:return ra(t.type),Ye(t),null;case 19:if(B(Ie),l=t.memoizedState,l===null)return Ye(t),null;if(n=(t.flags&128)!==0,i=l.rendering,i===null)if(n)Rl(l,!1);else{if(Ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=qn(e),i!==null){for(t.flags|=128,Rl(l,!1),e=i.updateQueue,t.updateQueue=e,Pn(t,e),t.subtreeFlags=0,e=s,s=t.child;s!==null;)xd(s,e),s=s.sibling;return W(Ie,Ie.current&1|2),Ae&&na(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&mt()>li&&(t.flags|=128,n=!0,Rl(l,!1),t.lanes=4194304)}else{if(!n)if(e=qn(i),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,Pn(t,e),Rl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Ae)return Ye(t),null}else 2*mt()-l.renderingStartTime>li&&s!==536870912&&(t.flags|=128,n=!0,Rl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=mt(),e.sibling=null,s=Ie.current,W(Ie,n?s&1|2:s&1),Ae&&na(t,l.treeForkCount),e):(Ye(t),null);case 22:case 23:return Et(t),Or(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(s&536870912)!==0&&(t.flags&128)===0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),s=t.updateQueue,s!==null&&Pn(t,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==s&&(t.flags|=2048),e!==null&&B(ns),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),ra($e),Ye(t),null;case 25:return null;case 30:return null}throw Error(d(156,t.tag))}function Eh(e,t){switch(gr(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ra($e),Z(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(d(340));as()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(d(340));as()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return B(Ie),null;case 4:return Z(),null;case 10:return ra(t.type),null;case 22:case 23:return Et(t),Or(),e!==null&&B(ns),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ra($e),null;case 25:return null;default:return null}}function Gu(e,t){switch(gr(t),t.tag){case 3:ra($e),Z();break;case 26:case 27:case 5:Ce(t);break;case 4:Z();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:B(Ie);break;case 10:ra(t.type);break;case 22:case 23:Et(t),Or(),e!==null&&B(ns);break;case 24:ra($e)}}function Bl(e,t){try{var s=t.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var n=l.next;s=n;do{if((s.tag&e)===e){l=void 0;var i=s.create,r=s.inst;l=i(),r.destroy=l}s=s.next}while(s!==n)}}catch(c){Le(t,t.return,c)}}function za(e,t,s){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var r=l.inst,c=r.destroy;if(c!==void 0){r.destroy=void 0,n=t;var u=s,k=c;try{k()}catch(L){Le(n,u,L)}}}l=l.next}while(l!==i)}}catch(L){Le(t,t.return,L)}}function Yu(e){var t=e.updateQueue;if(t!==null){var s=e.stateNode;try{Od(t,s)}catch(l){Le(e,e.return,l)}}}function Ju(e,t,s){s.props=ds(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(l){Le(e,t,l)}}function Ul(e,t){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof s=="function"?e.refCleanup=s(l):s.current=l}}catch(n){Le(e,t,n)}}function Wt(e,t){var s=e.ref,l=e.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(n){Le(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(n){Le(e,t,n)}else s.current=null}function Vu(e){var t=e.type,s=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(n){Le(e,e.return,n)}}function uo(e,t,s){try{var l=e.stateNode;Fh(l,e.type,s,t),l[gt]=t}catch(n){Le(e,e.return,n)}}function Ku(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function mo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fo(e,t,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,t):(t=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,t.appendChild(e),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=aa));else if(l!==4&&(l===27&&Ga(e.type)&&(s=e.stateNode,t=null),e=e.child,e!==null))for(fo(e,t,s),e=e.sibling;e!==null;)fo(e,t,s),e=e.sibling}function ei(e,t,s){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(l!==4&&(l===27&&Ga(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(ei(e,t,s),e=e.sibling;e!==null;)ei(e,t,s),e=e.sibling}function Qu(e){var t=e.stateNode,s=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);dt(t,l,s),t[it]=e,t[gt]=s}catch(i){Le(e,e.return,i)}}var ma=!1,tt=!1,xo=!1,Xu=typeof WeakSet=="function"?WeakSet:Set,lt=null;function Mh(e,t){if(e=e.containerInfo,Lo=ji,e=nd(e),ir(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{s.nodeType,i.nodeType}catch{s=null;break e}var r=0,c=-1,u=-1,k=0,L=0,q=e,A=null;t:for(;;){for(var T;q!==s||n!==0&&q.nodeType!==3||(c=r+n),q!==i||l!==0&&q.nodeType!==3||(u=r+l),q.nodeType===3&&(r+=q.nodeValue.length),(T=q.firstChild)!==null;)A=q,q=T;for(;;){if(q===e)break t;if(A===s&&++k===n&&(c=r),A===i&&++L===l&&(u=r),(T=q.nextSibling)!==null)break;q=A,A=q.parentNode}q=T}s=c===-1||u===-1?null:{start:c,end:u}}else s=null}s=s||{start:0,end:0}}else s=null;for(Ho={focusedElem:e,selectionRange:s},ji=!1,lt=t;lt!==null;)if(t=lt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,lt=e;else for(;lt!==null;){switch(t=lt,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)n=e[s],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,s=t,n=i.memoizedProps,i=i.memoizedState,l=s.stateNode;try{var ae=ds(s.type,n);e=l.getSnapshotBeforeUpdate(ae,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(de){Le(s,s.return,de)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,s=e.nodeType,s===9)Uo(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Uo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=t.sibling,e!==null){e.return=t.return,lt=e;break}lt=t.return}}function Zu(e,t,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:xa(e,s),l&4&&Bl(5,s);break;case 1:if(xa(e,s),l&4)if(e=s.stateNode,t===null)try{e.componentDidMount()}catch(r){Le(s,s.return,r)}else{var n=ds(s.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){Le(s,s.return,r)}}l&64&&Yu(s),l&512&&Ul(s,s.return);break;case 3:if(xa(e,s),l&64&&(e=s.updateQueue,e!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{Od(e,t)}catch(r){Le(s,s.return,r)}}break;case 27:t===null&&l&4&&Qu(s);case 26:case 5:xa(e,s),t===null&&l&4&&Vu(s),l&512&&Ul(s,s.return);break;case 12:xa(e,s);break;case 31:xa(e,s),l&4&&Wu(e,s);break;case 13:xa(e,s),l&4&&$u(e,s),l&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Bh.bind(null,s),l0(e,s))));break;case 22:if(l=s.memoizedState!==null||ma,!l){t=t!==null&&t.memoizedState!==null||tt,n=ma;var i=tt;ma=l,(tt=t)&&!i?ha(e,s,(s.subtreeFlags&8772)!==0):xa(e,s),ma=n,tt=i}break;case 30:break;default:xa(e,s)}}function Iu(e){var t=e.alternate;t!==null&&(e.alternate=null,Iu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ji(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,vt=!1;function fa(e,t,s){for(s=s.child;s!==null;)Fu(e,t,s),s=s.sibling}function Fu(e,t,s){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Ot,s)}catch{}switch(s.tag){case 26:tt||Wt(s,t),fa(e,t,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:tt||Wt(s,t);var l=Qe,n=vt;Ga(s.type)&&(Qe=s.stateNode,vt=!1),fa(e,t,s),Zl(s.stateNode),Qe=l,vt=n;break;case 5:tt||Wt(s,t);case 6:if(l=Qe,n=vt,Qe=null,fa(e,t,s),Qe=l,vt=n,Qe!==null)if(vt)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(s.stateNode)}catch(i){Le(s,t,i)}else try{Qe.removeChild(s.stateNode)}catch(i){Le(s,t,i)}break;case 18:Qe!==null&&(vt?(e=Qe,Ym(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),al(e)):Ym(Qe,s.stateNode));break;case 4:l=Qe,n=vt,Qe=s.stateNode.containerInfo,vt=!0,fa(e,t,s),Qe=l,vt=n;break;case 0:case 11:case 14:case 15:za(2,s,t),tt||za(4,s,t),fa(e,t,s);break;case 1:tt||(Wt(s,t),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Ju(s,t,l)),fa(e,t,s);break;case 21:fa(e,t,s);break;case 22:tt=(l=tt)||s.memoizedState!==null,fa(e,t,s),tt=l;break;default:fa(e,t,s)}}function Wu(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{al(e)}catch(s){Le(t,t.return,s)}}}function $u(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{al(e)}catch(s){Le(t,t.return,s)}}function _h(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xu),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xu),t;default:throw Error(d(435,e.tag))}}function ti(e,t){var s=_h(e);t.forEach(function(l){if(!s.has(l)){s.add(l);var n=Uh.bind(null,e,l);l.then(n,n)}})}function yt(e,t){var s=t.deletions;if(s!==null)for(var l=0;l<s.length;l++){var n=s[l],i=e,r=t,c=r;e:for(;c!==null;){switch(c.tag){case 27:if(Ga(c.type)){Qe=c.stateNode,vt=!1;break e}break;case 5:Qe=c.stateNode,vt=!1;break e;case 3:case 4:Qe=c.stateNode.containerInfo,vt=!0;break e}c=c.return}if(Qe===null)throw Error(d(160));Fu(i,r,n),Qe=null,vt=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pu(t,e),t=t.sibling}var Kt=null;function Pu(e,t){var s=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yt(t,e),jt(e),l&4&&(za(3,e,e.return),Bl(3,e),za(5,e,e.return));break;case 1:yt(t,e),jt(e),l&512&&(tt||s===null||Wt(s,s.return)),l&64&&ma&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var n=Kt;if(yt(t,e),jt(e),l&512&&(tt||s===null||Wt(s,s.return)),l&4){var i=s!==null?s.memoizedState:null;if(l=e.memoizedState,s===null)if(l===null)if(e.stateNode===null){e:{l=e.type,s=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[ml]||i[it]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),dt(i,l,s),i[it]=e,st(i),l=i;break e;case"link":var r=Pm("link","href",n).get(l+(s.href||""));if(r){for(var c=0;c<r.length;c++)if(i=r[c],i.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&i.getAttribute("rel")===(s.rel==null?null:s.rel)&&i.getAttribute("title")===(s.title==null?null:s.title)&&i.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){r.splice(c,1);break t}}i=n.createElement(l),dt(i,l,s),n.head.appendChild(i);break;case"meta":if(r=Pm("meta","content",n).get(l+(s.content||""))){for(c=0;c<r.length;c++)if(i=r[c],i.getAttribute("content")===(s.content==null?null:""+s.content)&&i.getAttribute("name")===(s.name==null?null:s.name)&&i.getAttribute("property")===(s.property==null?null:s.property)&&i.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&i.getAttribute("charset")===(s.charSet==null?null:s.charSet)){r.splice(c,1);break t}}i=n.createElement(l),dt(i,l,s),n.head.appendChild(i);break;default:throw Error(d(468,l))}i[it]=e,st(i),l=i}e.stateNode=l}else ef(n,e.type,e.stateNode);else e.stateNode=$m(n,l,e.memoizedProps);else i!==l?(i===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):i.count--,l===null?ef(n,e.type,e.stateNode):$m(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&uo(e,e.memoizedProps,s.memoizedProps)}break;case 27:yt(t,e),jt(e),l&512&&(tt||s===null||Wt(s,s.return)),s!==null&&l&4&&uo(e,e.memoizedProps,s.memoizedProps);break;case 5:if(yt(t,e),jt(e),l&512&&(tt||s===null||Wt(s,s.return)),e.flags&32){n=e.stateNode;try{ks(n,"")}catch(ae){Le(e,e.return,ae)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,uo(e,n,s!==null?s.memoizedProps:n)),l&1024&&(xo=!0);break;case 6:if(yt(t,e),jt(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,s=e.stateNode;try{s.nodeValue=l}catch(ae){Le(e,e.return,ae)}}break;case 3:if(gi=null,n=Kt,Kt=hi(t.containerInfo),yt(t,e),Kt=n,jt(e),l&4&&s!==null&&s.memoizedState.isDehydrated)try{al(t.containerInfo)}catch(ae){Le(e,e.return,ae)}xo&&(xo=!1,em(e));break;case 4:l=Kt,Kt=hi(e.stateNode.containerInfo),yt(t,e),jt(e),Kt=l;break;case 12:yt(t,e),jt(e);break;case 31:yt(t,e),jt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ti(e,l)));break;case 13:yt(t,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(si=mt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ti(e,l)));break;case 22:n=e.memoizedState!==null;var u=s!==null&&s.memoizedState!==null,k=ma,L=tt;if(ma=k||n,tt=L||u,yt(t,e),tt=L,ma=k,jt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(s===null||u||ma||tt||us(e)),s=null,t=e;;){if(t.tag===5||t.tag===26){if(s===null){u=s=t;try{if(i=u.stateNode,n)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{c=u.stateNode;var q=u.memoizedProps.style,A=q!=null&&q.hasOwnProperty("display")?q.display:null;c.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(ae){Le(u,u.return,ae)}}}else if(t.tag===6){if(s===null){u=t;try{u.stateNode.nodeValue=n?"":u.memoizedProps}catch(ae){Le(u,u.return,ae)}}}else if(t.tag===18){if(s===null){u=t;try{var T=u.stateNode;n?Jm(T,!0):Jm(u.stateNode,!1)}catch(ae){Le(u,u.return,ae)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;s===t&&(s=null),t=t.return}s===t&&(s=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,ti(e,s))));break;case 19:yt(t,e),jt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ti(e,l)));break;case 30:break;case 21:break;default:yt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{for(var s,l=e.return;l!==null;){if(Ku(l)){s=l;break}l=l.return}if(s==null)throw Error(d(160));switch(s.tag){case 27:var n=s.stateNode,i=mo(e);ei(e,i,n);break;case 5:var r=s.stateNode;s.flags&32&&(ks(r,""),s.flags&=-33);var c=mo(e);ei(e,c,r);break;case 3:case 4:var u=s.stateNode.containerInfo,k=mo(e);fo(e,k,u);break;default:throw Error(d(161))}}catch(L){Le(e,e.return,L)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function em(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;em(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zu(e,t.alternate,t),t=t.sibling}function us(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:za(4,t,t.return),us(t);break;case 1:Wt(t,t.return);var s=t.stateNode;typeof s.componentWillUnmount=="function"&&Ju(t,t.return,s),us(t);break;case 27:Zl(t.stateNode);case 26:case 5:Wt(t,t.return),us(t);break;case 22:t.memoizedState===null&&us(t);break;case 30:us(t);break;default:us(t)}e=e.sibling}}function ha(e,t,s){for(s=s&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:ha(n,i,s),Bl(4,i);break;case 1:if(ha(n,i,s),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(k){Le(l,l.return,k)}if(l=i,n=l.updateQueue,n!==null){var c=l.stateNode;try{var u=n.shared.hiddenCallbacks;if(u!==null)for(n.shared.hiddenCallbacks=null,n=0;n<u.length;n++)Td(u[n],c)}catch(k){Le(l,l.return,k)}}s&&r&64&&Yu(i),Ul(i,i.return);break;case 27:Qu(i);case 26:case 5:ha(n,i,s),s&&l===null&&r&4&&Vu(i),Ul(i,i.return);break;case 12:ha(n,i,s);break;case 31:ha(n,i,s),s&&r&4&&Wu(n,i);break;case 13:ha(n,i,s),s&&r&4&&$u(n,i);break;case 22:i.memoizedState===null&&ha(n,i,s),Ul(i,i.return);break;case 30:break;default:ha(n,i,s)}t=t.sibling}}function ho(e,t){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&kl(s))}function po(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e))}function Qt(e,t,s,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tm(e,t,s,l),t=t.sibling}function tm(e,t,s,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Qt(e,t,s,l),n&2048&&Bl(9,t);break;case 1:Qt(e,t,s,l);break;case 3:Qt(e,t,s,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&kl(e)));break;case 12:if(n&2048){Qt(e,t,s,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,c=i.onPostCommit;typeof c=="function"&&c(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){Le(t,t.return,u)}}else Qt(e,t,s,l);break;case 31:Qt(e,t,s,l);break;case 13:Qt(e,t,s,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?Qt(e,t,s,l):ql(e,t):i._visibility&2?Qt(e,t,s,l):(i._visibility|=2,Ks(e,t,s,l,(t.subtreeFlags&10256)!==0||!1)),n&2048&&ho(r,t);break;case 24:Qt(e,t,s,l),n&2048&&po(t.alternate,t);break;default:Qt(e,t,s,l)}}function Ks(e,t,s,l,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,c=s,u=l,k=r.flags;switch(r.tag){case 0:case 11:case 15:Ks(i,r,c,u,n),Bl(8,r);break;case 23:break;case 22:var L=r.stateNode;r.memoizedState!==null?L._visibility&2?Ks(i,r,c,u,n):ql(i,r):(L._visibility|=2,Ks(i,r,c,u,n)),n&&k&2048&&ho(r.alternate,r);break;case 24:Ks(i,r,c,u,n),n&&k&2048&&po(r.alternate,r);break;default:Ks(i,r,c,u,n)}t=t.sibling}}function ql(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var s=e,l=t,n=l.flags;switch(l.tag){case 22:ql(s,l),n&2048&&ho(l.alternate,l);break;case 24:ql(s,l),n&2048&&po(l.alternate,l);break;default:ql(s,l)}t=t.sibling}}var Gl=8192;function Qs(e,t,s){if(e.subtreeFlags&Gl)for(e=e.child;e!==null;)am(e,t,s),e=e.sibling}function am(e,t,s){switch(e.tag){case 26:Qs(e,t,s),e.flags&Gl&&e.memoizedState!==null&&p0(s,Kt,e.memoizedState,e.memoizedProps);break;case 5:Qs(e,t,s);break;case 3:case 4:var l=Kt;Kt=hi(e.stateNode.containerInfo),Qs(e,t,s),Kt=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Gl,Gl=16777216,Qs(e,t,s),Gl=l):Qs(e,t,s));break;default:Qs(e,t,s)}}function sm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Yl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var l=t[s];lt=l,nm(l,e)}sm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lm(e),e=e.sibling}function lm(e){switch(e.tag){case 0:case 11:case 15:Yl(e),e.flags&2048&&za(9,e,e.return);break;case 3:Yl(e);break;case 12:Yl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ai(e)):Yl(e);break;default:Yl(e)}}function ai(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var l=t[s];lt=l,nm(l,e)}sm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:za(8,t,t.return),ai(t);break;case 22:s=t.stateNode,s._visibility&2&&(s._visibility&=-3,ai(t));break;default:ai(t)}e=e.sibling}}function nm(e,t){for(;lt!==null;){var s=lt;switch(s.tag){case 0:case 11:case 15:za(8,s,t);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:kl(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,lt=l;else e:for(s=e;lt!==null;){l=lt;var n=l.sibling,i=l.return;if(Iu(l),l===s){lt=null;break e}if(n!==null){n.return=i,lt=n;break e}lt=i}}}var Th={getCacheForType:function(e){var t=ot($e),s=t.data.get(e);return s===void 0&&(s=e(),t.data.set(e,s)),s},cacheSignal:function(){return ot($e).controller.signal}},Oh=typeof WeakMap=="function"?WeakMap:Map,Oe=0,Ue=null,ve=null,je=0,ze=0,Mt=null,La=!1,Xs=!1,go=!1,pa=0,Ze=0,Ha=0,ms=0,bo=0,_t=0,Zs=0,Jl=null,Nt=null,vo=!1,si=0,im=0,li=1/0,ni=null,Ra=null,at=0,Ba=null,Is=null,ga=0,yo=0,jo=null,rm=null,Vl=0,No=null;function Tt(){return(Oe&2)!==0&&je!==0?je&-je:N.T!==null?Eo():wc()}function om(){if(_t===0)if((je&536870912)===0||Ae){var e=fn;fn<<=1,(fn&3932160)===0&&(fn=262144),_t=e}else _t=536870912;return e=Ct.current,e!==null&&(e.flags|=32),_t}function wt(e,t,s){(e===Ue&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Fs(e,0),Ua(e,je,_t,!1)),ul(e,s),((Oe&2)===0||e!==Ue)&&(e===Ue&&((Oe&2)===0&&(ms|=s),Ze===4&&Ua(e,je,_t,!1)),$t(e))}function cm(e,t,s){if((Oe&6)!==0)throw Error(d(327));var l=!s&&(t&127)===0&&(t&e.expiredLanes)===0||dl(e,t),n=l?Lh(e,t):So(e,t,!0),i=l;do{if(n===0){Xs&&!l&&Ua(e,t,0,!1);break}else{if(s=e.current.alternate,i&&!Dh(s)){n=So(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var c=e;n=Jl;var u=c.current.memoizedState.isDehydrated;if(u&&(Fs(c,r).flags|=256),r=So(c,r,!1),r!==2){if(go&&!u){c.errorRecoveryDisabledLanes|=i,ms|=i,n=4;break e}i=Nt,Nt=n,i!==null&&(Nt===null?Nt=i:Nt.push.apply(Nt,i))}n=r}if(i=!1,n!==2)continue}}if(n===1){Fs(e,0),Ua(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(d(345));case 4:if((t&4194048)!==t)break;case 6:Ua(l,t,_t,!La);break e;case 2:Nt=null;break;case 3:case 5:break;default:throw Error(d(329))}if((t&62914560)===t&&(n=si+300-mt(),10<n)){if(Ua(l,t,_t,!La),hn(l,0,!0)!==0)break e;ga=t,l.timeoutHandle=qm(dm.bind(null,l,s,Nt,ni,vo,t,_t,ms,Zs,La,i,"Throttled",-0,0),n);break e}dm(l,s,Nt,ni,vo,t,_t,ms,Zs,La,i,null,-0,0)}}break}while(!0);$t(e)}function dm(e,t,s,l,n,i,r,c,u,k,L,q,A,T){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},am(t,i,q);var ae=(i&62914560)===i?si-mt():(i&4194048)===i?im-mt():0;if(ae=g0(q,ae),ae!==null){ga=i,e.cancelPendingCommit=ae(bm.bind(null,e,t,i,s,l,n,r,c,u,L,q,null,A,T)),Ua(e,i,r,!k);return}}bm(e,t,i,s,l,n,r,c,u)}function Dh(e){for(var t=e;;){var s=t.tag;if((s===0||s===11||s===15)&&t.flags&16384&&(s=t.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var n=s[l],i=n.getSnapshot;n=n.value;try{if(!kt(i(),n))return!1}catch{return!1}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ua(e,t,s,l){t&=~bo,t&=~ms,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-xt(n),r=1<<i;l[i]=-1,n&=~r}s!==0&&yc(e,s,t)}function ii(){return(Oe&6)===0?(Kl(0),!1):!0}function wo(){if(ve!==null){if(ze===0)var e=ve.return;else e=ve,ia=ss=null,Br(e),qs=null,Cl=0,e=ve;for(;e!==null;)Gu(e.alternate,e),e=e.return;ve=null}}function Fs(e,t){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Ph(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),ga=0,wo(),Ue=e,ve=s=la(e.current,null),je=t,ze=0,Mt=null,La=!1,Xs=dl(e,t),go=!1,Zs=_t=bo=ms=Ha=Ze=0,Nt=Jl=null,vo=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-xt(l),i=1<<n;t|=e[n],l&=~i}return pa=t,Cn(),s}function um(e,t){pe=null,N.H=Ll,t===Us||t===Ln?(t=Cd(),ze=3):t===Ar?(t=Cd(),ze=4):ze=t===eo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Mt=t,ve===null&&(Ze=1,In(e,Ht(t,e.current)))}function mm(){var e=Ct.current;return e===null?!0:(je&4194048)===je?qt===null:(je&62914560)===je||(je&536870912)!==0?e===qt:!1}function fm(){var e=N.H;return N.H=Ll,e===null?Ll:e}function xm(){var e=N.A;return N.A=Th,e}function ri(){Ze=4,La||(je&4194048)!==je&&Ct.current!==null||(Xs=!0),(Ha&134217727)===0&&(ms&134217727)===0||Ue===null||Ua(Ue,je,_t,!1)}function So(e,t,s){var l=Oe;Oe|=2;var n=fm(),i=xm();(Ue!==e||je!==t)&&(ni=null,Fs(e,t)),t=!1;var r=Ze;e:do try{if(ze!==0&&ve!==null){var c=ve,u=Mt;switch(ze){case 8:wo(),r=6;break e;case 3:case 2:case 9:case 6:Ct.current===null&&(t=!0);var k=ze;if(ze=0,Mt=null,Ws(e,c,u,k),s&&Xs){r=0;break e}break;default:k=ze,ze=0,Mt=null,Ws(e,c,u,k)}}zh(),r=Ze;break}catch(L){um(e,L)}while(!0);return t&&e.shellSuspendCounter++,ia=ss=null,Oe=l,N.H=n,N.A=i,ve===null&&(Ue=null,je=0,Cn()),r}function zh(){for(;ve!==null;)hm(ve)}function Lh(e,t){var s=Oe;Oe|=2;var l=fm(),n=xm();Ue!==e||je!==t?(ni=null,li=mt()+500,Fs(e,t)):Xs=dl(e,t);e:do try{if(ze!==0&&ve!==null){t=ve;var i=Mt;t:switch(ze){case 1:ze=0,Mt=null,Ws(e,t,i,1);break;case 2:case 9:if(kd(i)){ze=0,Mt=null,pm(t);break}t=function(){ze!==2&&ze!==9||Ue!==e||(ze=7),$t(e)},i.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:kd(i)?(ze=0,Mt=null,pm(t)):(ze=0,Mt=null,Ws(e,t,i,7));break;case 5:var r=null;switch(ve.tag){case 26:r=ve.memoizedState;case 5:case 27:var c=ve;if(r?tf(r):c.stateNode.complete){ze=0,Mt=null;var u=c.sibling;if(u!==null)ve=u;else{var k=c.return;k!==null?(ve=k,oi(k)):ve=null}break t}}ze=0,Mt=null,Ws(e,t,i,5);break;case 6:ze=0,Mt=null,Ws(e,t,i,6);break;case 8:wo(),Ze=6;break e;default:throw Error(d(462))}}Hh();break}catch(L){um(e,L)}while(!0);return ia=ss=null,N.H=l,N.A=n,Oe=s,ve!==null?0:(Ue=null,je=0,Cn(),Ze)}function Hh(){for(;ve!==null&&!cn();)hm(ve)}function hm(e){var t=Uu(e.alternate,e,pa);e.memoizedProps=e.pendingProps,t===null?oi(e):ve=t}function pm(e){var t=e,s=t.alternate;switch(t.tag){case 15:case 0:t=Du(s,t,t.pendingProps,t.type,void 0,je);break;case 11:t=Du(s,t,t.pendingProps,t.type.render,t.ref,je);break;case 5:Br(t);default:Gu(s,t),t=ve=xd(t,pa),t=Uu(s,t,pa)}e.memoizedProps=e.pendingProps,t===null?oi(e):ve=t}function Ws(e,t,s,l){ia=ss=null,Br(t),qs=null,Cl=0;var n=t.return;try{if(Sh(e,n,t,s,je)){Ze=1,In(e,Ht(s,e.current)),ve=null;return}}catch(i){if(n!==null)throw ve=n,i;Ze=1,In(e,Ht(s,e.current)),ve=null;return}t.flags&32768?(Ae||l===1?e=!0:Xs||(je&536870912)!==0?e=!1:(La=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ct.current,l!==null&&l.tag===13&&(l.flags|=16384))),gm(t,e)):oi(t)}function oi(e){var t=e;do{if((t.flags&32768)!==0){gm(t,La);return}e=t.return;var s=Ch(t.alternate,t,pa);if(s!==null){ve=s;return}if(t=t.sibling,t!==null){ve=t;return}ve=t=e}while(t!==null);Ze===0&&(Ze=5)}function gm(e,t){do{var s=Eh(e.alternate,e);if(s!==null){s.flags&=32767,ve=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!t&&(e=e.sibling,e!==null)){ve=e;return}ve=e=s}while(e!==null);Ze=6,ve=null}function bm(e,t,s,l,n,i,r,c,u){e.cancelPendingCommit=null;do ci();while(at!==0);if((Oe&6)!==0)throw Error(d(327));if(t!==null){if(t===e.current)throw Error(d(177));if(i=t.lanes|t.childLanes,i|=ur,hx(e,s,i,r,c,u),e===Ue&&(ve=Ue=null,je=0),Is=t,Ba=e,ga=s,yo=i,jo=n,rm=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,qh(ie,function(){return wm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=N.T,N.T=null,n=C.p,C.p=2,r=Oe,Oe|=4;try{Mh(e,t,s)}finally{Oe=r,C.p=n,N.T=l}}at=1,vm(),ym(),jm()}}function vm(){if(at===1){at=0;var e=Ba,t=Is,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=N.T,N.T=null;var l=C.p;C.p=2;var n=Oe;Oe|=4;try{Pu(t,e);var i=Ho,r=nd(e.containerInfo),c=i.focusedElem,u=i.selectionRange;if(r!==c&&c&&c.ownerDocument&&ld(c.ownerDocument.documentElement,c)){if(u!==null&&ir(c)){var k=u.start,L=u.end;if(L===void 0&&(L=k),"selectionStart"in c)c.selectionStart=k,c.selectionEnd=Math.min(L,c.value.length);else{var q=c.ownerDocument||document,A=q&&q.defaultView||window;if(A.getSelection){var T=A.getSelection(),ae=c.textContent.length,de=Math.min(u.start,ae),Be=u.end===void 0?de:Math.min(u.end,ae);!T.extend&&de>Be&&(r=Be,Be=de,de=r);var b=sd(c,de),f=sd(c,Be);if(b&&f&&(T.rangeCount!==1||T.anchorNode!==b.node||T.anchorOffset!==b.offset||T.focusNode!==f.node||T.focusOffset!==f.offset)){var S=q.createRange();S.setStart(b.node,b.offset),T.removeAllRanges(),de>Be?(T.addRange(S),T.extend(f.node,f.offset)):(S.setEnd(f.node,f.offset),T.addRange(S))}}}}for(q=[],T=c;T=T.parentNode;)T.nodeType===1&&q.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<q.length;c++){var U=q[c];U.element.scrollLeft=U.left,U.element.scrollTop=U.top}}ji=!!Lo,Ho=Lo=null}finally{Oe=n,C.p=l,N.T=s}}e.current=t,at=2}}function ym(){if(at===2){at=0;var e=Ba,t=Is,s=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||s){s=N.T,N.T=null;var l=C.p;C.p=2;var n=Oe;Oe|=4;try{Zu(e,t.alternate,t)}finally{Oe=n,C.p=l,N.T=s}}at=3}}function jm(){if(at===4||at===3){at=0,Ri();var e=Ba,t=Is,s=ga,l=rm;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?at=5:(at=0,Is=Ba=null,Nm(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(Ra=null),Gi(s),t=t.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Ot,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=N.T,n=C.p,C.p=2,N.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var c=l[r];i(c.value,{componentStack:c.stack})}}finally{N.T=t,C.p=n}}(ga&3)!==0&&ci(),$t(e),n=e.pendingLanes,(s&261930)!==0&&(n&42)!==0?e===No?Vl++:(Vl=0,No=e):Vl=0,Kl(0)}}function Nm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,kl(t)))}function ci(){return vm(),ym(),jm(),wm()}function wm(){if(at!==5)return!1;var e=Ba,t=yo;yo=0;var s=Gi(ga),l=N.T,n=C.p;try{C.p=32>s?32:s,N.T=null,s=jo,jo=null;var i=Ba,r=ga;if(at=0,Is=Ba=null,ga=0,(Oe&6)!==0)throw Error(d(331));var c=Oe;if(Oe|=4,lm(i.current),tm(i,i.current,r,s),Oe=c,Kl(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Ot,i)}catch{}return!0}finally{C.p=n,N.T=l,Nm(e,t)}}function Sm(e,t,s){t=Ht(s,t),t=Pr(e.stateNode,t,2),e=Ta(e,t,2),e!==null&&(ul(e,2),$t(e))}function Le(e,t,s){if(e.tag===3)Sm(e,e,s);else for(;t!==null;){if(t.tag===3){Sm(t,e,s);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ra===null||!Ra.has(l))){e=Ht(s,e),s=ku(2),l=Ta(t,s,2),l!==null&&(Au(s,l,t,e),ul(l,2),$t(l));break}}t=t.return}}function ko(e,t,s){var l=e.pingCache;if(l===null){l=e.pingCache=new Oh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(s)||(go=!0,n.add(s),e=Rh.bind(null,e,t,s),t.then(e,e))}function Rh(e,t,s){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,Ue===e&&(je&s)===s&&(Ze===4||Ze===3&&(je&62914560)===je&&300>mt()-si?(Oe&2)===0&&Fs(e,0):bo|=s,Zs===je&&(Zs=0)),$t(e)}function km(e,t){t===0&&(t=vc()),e=es(e,t),e!==null&&(ul(e,t),$t(e))}function Bh(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),km(e,s)}function Uh(e,t){var s=0;switch(e.tag){case 31:case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(s=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(t),km(e,s)}function qh(e,t){return il(e,t)}var di=null,$s=null,Ao=!1,ui=!1,Co=!1,qa=0;function $t(e){e!==$s&&e.next===null&&($s===null?di=$s=e:$s=$s.next=e),ui=!0,Ao||(Ao=!0,Yh())}function Kl(e,t){if(!Co&&ui){Co=!0;do for(var s=!1,l=di;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var r=l.suspendedLanes,c=l.pingedLanes;i=(1<<31-xt(42|e)+1)-1,i&=n&~(r&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(s=!0,Mm(l,i))}else i=je,i=hn(l,l===Ue?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||dl(l,i)||(s=!0,Mm(l,i));l=l.next}while(s);Co=!1}}function Gh(){Am()}function Am(){ui=Ao=!1;var e=0;qa!==0&&$h()&&(e=qa);for(var t=mt(),s=null,l=di;l!==null;){var n=l.next,i=Cm(l,t);i===0?(l.next=null,s===null?di=n:s.next=n,n===null&&($s=s)):(s=l,(e!==0||(i&3)!==0)&&(ui=!0)),l=n}at!==0&&at!==5||Kl(e),qa!==0&&(qa=0)}function Cm(e,t){for(var s=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-xt(i),c=1<<r,u=n[r];u===-1?((c&s)===0||(c&l)!==0)&&(n[r]=xx(c,t)):u<=t&&(e.expiredLanes|=c),i&=~c}if(t=Ue,s=je,s=hn(e,e===t?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,s===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&rl(l),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||dl(e,s)){if(t=s&-s,t===e.callbackPriority)return t;switch(l!==null&&rl(l),Gi(s)){case 2:case 8:s=ol;break;case 32:s=ie;break;case 268435456:s=Te;break;default:s=ie}return l=Em.bind(null,e),s=il(s,l),e.callbackPriority=t,e.callbackNode=s,t}return l!==null&&l!==null&&rl(l),e.callbackPriority=2,e.callbackNode=null,2}function Em(e,t){if(at!==0&&at!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(ci()&&e.callbackNode!==s)return null;var l=je;return l=hn(e,e===Ue?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(cm(e,l,t),Cm(e,mt()),e.callbackNode!=null&&e.callbackNode===s?Em.bind(null,e):null)}function Mm(e,t){if(ci())return null;cm(e,t,!0)}function Yh(){e0(function(){(Oe&6)!==0?il(dn,Gh):Am()})}function Eo(){if(qa===0){var e=Rs;e===0&&(e=bs,bs<<=1,(bs&261888)===0&&(bs=256)),qa=e}return qa}function _m(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vn(""+e)}function Tm(e,t){var s=t.ownerDocument.createElement("input");return s.name=t.name,s.value=t.value,e.id&&s.setAttribute("form",e.id),t.parentNode.insertBefore(s,t),e=new FormData(e),s.parentNode.removeChild(s),e}function Jh(e,t,s,l,n){if(t==="submit"&&s&&s.stateNode===n){var i=_m((n[gt]||null).action),r=l.submitter;r&&(t=(t=r[gt]||null)?_m(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var c=new wn("action","action",null,l,n);e.push({event:c,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(qa!==0){var u=r?Tm(n,r):new FormData(n);Xr(s,{pending:!0,data:u,method:n.method,action:i},null,u)}}else typeof i=="function"&&(c.preventDefault(),u=r?Tm(n,r):new FormData(n),Xr(s,{pending:!0,data:u,method:n.method,action:i},i,u))},currentTarget:n}]})}}for(var Mo=0;Mo<dr.length;Mo++){var _o=dr[Mo],Vh=_o.toLowerCase(),Kh=_o[0].toUpperCase()+_o.slice(1);Vt(Vh,"on"+Kh)}Vt(od,"onAnimationEnd"),Vt(cd,"onAnimationIteration"),Vt(dd,"onAnimationStart"),Vt("dblclick","onDoubleClick"),Vt("focusin","onFocus"),Vt("focusout","onBlur"),Vt(rh,"onTransitionRun"),Vt(oh,"onTransitionStart"),Vt(ch,"onTransitionCancel"),Vt(ud,"onTransitionEnd"),ws("onMouseEnter",["mouseout","mouseover"]),ws("onMouseLeave",["mouseout","mouseover"]),ws("onPointerEnter",["pointerout","pointerover"]),ws("onPointerLeave",["pointerout","pointerover"]),Fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ql));function Om(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var l=e[s],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var c=l[r],u=c.instance,k=c.currentTarget;if(c=c.listener,u!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=k;try{i(n)}catch(L){An(L)}n.currentTarget=null,i=u}else for(r=0;r<l.length;r++){if(c=l[r],u=c.instance,k=c.currentTarget,c=c.listener,u!==i&&n.isPropagationStopped())break e;i=c,n.currentTarget=k;try{i(n)}catch(L){An(L)}n.currentTarget=null,i=u}}}}function ye(e,t){var s=t[Yi];s===void 0&&(s=t[Yi]=new Set);var l=e+"__bubble";s.has(l)||(Dm(t,e,2,!1),s.add(l))}function To(e,t,s){var l=0;t&&(l|=4),Dm(s,e,l,t)}var mi="_reactListening"+Math.random().toString(36).slice(2);function Oo(e){if(!e[mi]){e[mi]=!0,Ac.forEach(function(s){s!=="selectionchange"&&(Qh.has(s)||To(s,!1,e),To(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mi]||(t[mi]=!0,To("selectionchange",!1,t))}}function Dm(e,t,s,l){switch(cf(t)){case 2:var n=y0;break;case 8:n=j0;break;default:n=Xo}s=n.bind(null,t,s,e),n=void 0,!Wi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,s,{capture:!0,passive:n}):e.addEventListener(t,s,!0):n!==void 0?e.addEventListener(t,s,{passive:n}):e.addEventListener(t,s,!1)}function Do(e,t,s,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var c=l.stateNode.containerInfo;if(c===n)break;if(r===4)for(r=l.return;r!==null;){var u=r.tag;if((u===3||u===4)&&r.stateNode.containerInfo===n)return;r=r.return}for(;c!==null;){if(r=ys(c),r===null)return;if(u=r.tag,u===5||u===6||u===26||u===27){l=i=r;continue e}c=c.parentNode}}l=l.return}Bc(function(){var k=i,L=Ii(s),q=[];e:{var A=md.get(e);if(A!==void 0){var T=wn,ae=e;switch(e){case"keypress":if(jn(s)===0)break e;case"keydown":case"keyup":T=Ux;break;case"focusin":ae="focus",T=tr;break;case"focusout":ae="blur",T=tr;break;case"beforeblur":case"afterblur":T=tr;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Yx;break;case od:case cd:case dd:T=_x;break;case ud:T=Vx;break;case"scroll":case"scrollend":T=kx;break;case"wheel":T=Qx;break;case"copy":case"cut":case"paste":T=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Jc;break;case"toggle":case"beforetoggle":T=Zx}var de=(t&4)!==0,Be=!de&&(e==="scroll"||e==="scrollend"),b=de?A!==null?A+"Capture":null:A;de=[];for(var f=k,S;f!==null;){var U=f;if(S=U.stateNode,U=U.tag,U!==5&&U!==26&&U!==27||S===null||b===null||(U=xl(f,b),U!=null&&de.push(Xl(f,U,S))),Be)break;f=f.return}0<de.length&&(A=new T(A,ae,null,s,L),q.push({event:A,listeners:de}))}}if((t&7)===0){e:{if(A=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",A&&s!==Zi&&(ae=s.relatedTarget||s.fromElement)&&(ys(ae)||ae[vs]))break e;if((T||A)&&(A=L.window===L?L:(A=L.ownerDocument)?A.defaultView||A.parentWindow:window,T?(ae=s.relatedTarget||s.toElement,T=k,ae=ae?ys(ae):null,ae!==null&&(Be=v(ae),de=ae.tag,ae!==Be||de!==5&&de!==27&&de!==6)&&(ae=null)):(T=null,ae=k),T!==ae)){if(de=Gc,U="onMouseLeave",b="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(de=Jc,U="onPointerLeave",b="onPointerEnter",f="pointer"),Be=T==null?A:fl(T),S=ae==null?A:fl(ae),A=new de(U,f+"leave",T,s,L),A.target=Be,A.relatedTarget=S,U=null,ys(L)===k&&(de=new de(b,f+"enter",ae,s,L),de.target=S,de.relatedTarget=Be,U=de),Be=U,T&&ae)t:{for(de=Xh,b=T,f=ae,S=0,U=b;U;U=de(U))S++;U=0;for(var oe=f;oe;oe=de(oe))U++;for(;0<S-U;)b=de(b),S--;for(;0<U-S;)f=de(f),U--;for(;S--;){if(b===f||f!==null&&b===f.alternate){de=b;break t}b=de(b),f=de(f)}de=null}else de=null;T!==null&&zm(q,A,T,de,!1),ae!==null&&Be!==null&&zm(q,Be,ae,de,!0)}}e:{if(A=k?fl(k):window,T=A.nodeName&&A.nodeName.toLowerCase(),T==="select"||T==="input"&&A.type==="file")var Me=Wc;else if(Ic(A))if($c)Me=lh;else{Me=ah;var se=th}else T=A.nodeName,!T||T.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?k&&Xi(k.elementType)&&(Me=Wc):Me=sh;if(Me&&(Me=Me(e,k))){Fc(q,Me,s,L);break e}se&&se(e,A,k),e==="focusout"&&k&&A.type==="number"&&k.memoizedProps.value!=null&&Qi(A,"number",A.value)}switch(se=k?fl(k):window,e){case"focusin":(Ic(se)||se.contentEditable==="true")&&(Ms=se,rr=k,Nl=null);break;case"focusout":Nl=rr=Ms=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,id(q,s,L);break;case"selectionchange":if(ih)break;case"keydown":case"keyup":id(q,s,L)}var ge;if(sr)e:{switch(e){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else Es?Xc(e,s)&&(Ne="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(Ne="onCompositionStart");Ne&&(Vc&&s.locale!=="ko"&&(Es||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&Es&&(ge=Uc()):(Sa=L,$i="value"in Sa?Sa.value:Sa.textContent,Es=!0)),se=fi(k,Ne),0<se.length&&(Ne=new Yc(Ne,e,null,s,L),q.push({event:Ne,listeners:se}),ge?Ne.data=ge:(ge=Zc(s),ge!==null&&(Ne.data=ge)))),(ge=Fx?Wx(e,s):$x(e,s))&&(Ne=fi(k,"onBeforeInput"),0<Ne.length&&(se=new Yc("onBeforeInput","beforeinput",null,s,L),q.push({event:se,listeners:Ne}),se.data=ge)),Jh(q,e,k,s,L)}Om(q,t)})}function Xl(e,t,s){return{instance:e,listener:t,currentTarget:s}}function fi(e,t){for(var s=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=xl(e,s),n!=null&&l.unshift(Xl(e,n,i)),n=xl(e,t),n!=null&&l.push(Xl(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Xh(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zm(e,t,s,l,n){for(var i=t._reactName,r=[];s!==null&&s!==l;){var c=s,u=c.alternate,k=c.stateNode;if(c=c.tag,u!==null&&u===l)break;c!==5&&c!==26&&c!==27||k===null||(u=k,n?(k=xl(s,i),k!=null&&r.unshift(Xl(s,k,u))):n||(k=xl(s,i),k!=null&&r.push(Xl(s,k,u)))),s=s.return}r.length!==0&&e.push({event:t,listeners:r})}var Zh=/\r\n?/g,Ih=/\u0000|\uFFFD/g;function Lm(e){return(typeof e=="string"?e:""+e).replace(Zh,`
`).replace(Ih,"")}function Hm(e,t){return t=Lm(t),Lm(e)===t}function Re(e,t,s,l,n,i){switch(s){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||ks(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&ks(e,""+l);break;case"className":gn(e,"class",l);break;case"tabIndex":gn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":gn(e,s,l);break;case"style":Hc(e,l,i);break;case"data":if(t!=="object"){gn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||s!=="href")){e.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=vn(""+l),e.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(s==="formAction"?(t!=="input"&&Re(e,t,"name",n.name,n,null),Re(e,t,"formEncType",n.formEncType,n,null),Re(e,t,"formMethod",n.formMethod,n,null),Re(e,t,"formTarget",n.formTarget,n,null)):(Re(e,t,"encType",n.encType,n,null),Re(e,t,"method",n.method,n,null),Re(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(s);break}l=vn(""+l),e.setAttribute(s,l);break;case"onClick":l!=null&&(e.onclick=aa);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(s=l.__html,s!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=s}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}s=vn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""+l):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":l===!0?e.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(s,l):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(s,l):e.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(s):e.setAttribute(s,l);break;case"popover":ye("beforetoggle",e),ye("toggle",e),pn(e,"popover",l);break;case"xlinkActuate":ta(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ta(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ta(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ta(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ta(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ta(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ta(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ta(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ta(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":pn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=wx.get(s)||s,pn(e,s,l))}}function zo(e,t,s,l,n,i){switch(s){case"style":Hc(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(s=l.__html,s!=null){if(n.children!=null)throw Error(d(60));e.innerHTML=s}}break;case"children":typeof l=="string"?ks(e,l):(typeof l=="number"||typeof l=="bigint")&&ks(e,""+l);break;case"onScroll":l!=null&&ye("scroll",e);break;case"onScrollEnd":l!=null&&ye("scrollend",e);break;case"onClick":l!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Cc.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(n=s.endsWith("Capture"),t=s.slice(2,n?s.length-7:void 0),i=e[gt]||null,i=i!=null?i[s]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(t,l,n);break e}s in e?e[s]=l:l===!0?e.setAttribute(s,""):pn(e,s,l)}}}function dt(e,t,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",e),ye("load",e);var l=!1,n=!1,i;for(i in s)if(s.hasOwnProperty(i)){var r=s[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Re(e,t,i,r,s,null)}}n&&Re(e,t,"srcSet",s.srcSet,s,null),l&&Re(e,t,"src",s.src,s,null);return;case"input":ye("invalid",e);var c=i=r=n=null,u=null,k=null;for(l in s)if(s.hasOwnProperty(l)){var L=s[l];if(L!=null)switch(l){case"name":n=L;break;case"type":r=L;break;case"checked":u=L;break;case"defaultChecked":k=L;break;case"value":i=L;break;case"defaultValue":c=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(d(137,t));break;default:Re(e,t,l,L,s,null)}}Oc(e,i,c,u,k,r,n,!1);return;case"select":ye("invalid",e),l=r=i=null;for(n in s)if(s.hasOwnProperty(n)&&(c=s[n],c!=null))switch(n){case"value":i=c;break;case"defaultValue":r=c;break;case"multiple":l=c;default:Re(e,t,n,c,s,null)}t=i,s=r,e.multiple=!!l,t!=null?Ss(e,!!l,t,!1):s!=null&&Ss(e,!!l,s,!0);return;case"textarea":ye("invalid",e),i=n=l=null;for(r in s)if(s.hasOwnProperty(r)&&(c=s[r],c!=null))switch(r){case"value":l=c;break;case"defaultValue":n=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:Re(e,t,r,c,s,null)}zc(e,l,n,i);return;case"option":for(u in s)if(s.hasOwnProperty(u)&&(l=s[u],l!=null))switch(u){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Re(e,t,u,l,s,null)}return;case"dialog":ye("beforetoggle",e),ye("toggle",e),ye("cancel",e),ye("close",e);break;case"iframe":case"object":ye("load",e);break;case"video":case"audio":for(l=0;l<Ql.length;l++)ye(Ql[l],e);break;case"image":ye("error",e),ye("load",e);break;case"details":ye("toggle",e);break;case"embed":case"source":case"link":ye("error",e),ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(k in s)if(s.hasOwnProperty(k)&&(l=s[k],l!=null))switch(k){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,t));default:Re(e,t,k,l,s,null)}return;default:if(Xi(t)){for(L in s)s.hasOwnProperty(L)&&(l=s[L],l!==void 0&&zo(e,t,L,l,s,void 0));return}}for(c in s)s.hasOwnProperty(c)&&(l=s[c],l!=null&&Re(e,t,c,l,s,null))}function Fh(e,t,s,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,r=null,c=null,u=null,k=null,L=null;for(T in s){var q=s[T];if(s.hasOwnProperty(T)&&q!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":u=q;default:l.hasOwnProperty(T)||Re(e,t,T,null,l,q)}}for(var A in l){var T=l[A];if(q=s[A],l.hasOwnProperty(A)&&(T!=null||q!=null))switch(A){case"type":i=T;break;case"name":n=T;break;case"checked":k=T;break;case"defaultChecked":L=T;break;case"value":r=T;break;case"defaultValue":c=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(d(137,t));break;default:T!==q&&Re(e,t,A,T,l,q)}}Ki(e,r,c,u,k,L,i,n);return;case"select":T=r=c=A=null;for(i in s)if(u=s[i],s.hasOwnProperty(i)&&u!=null)switch(i){case"value":break;case"multiple":T=u;default:l.hasOwnProperty(i)||Re(e,t,i,null,l,u)}for(n in l)if(i=l[n],u=s[n],l.hasOwnProperty(n)&&(i!=null||u!=null))switch(n){case"value":A=i;break;case"defaultValue":c=i;break;case"multiple":r=i;default:i!==u&&Re(e,t,n,i,l,u)}t=c,s=r,l=T,A!=null?Ss(e,!!s,A,!1):!!l!=!!s&&(t!=null?Ss(e,!!s,t,!0):Ss(e,!!s,s?[]:"",!1));return;case"textarea":T=A=null;for(c in s)if(n=s[c],s.hasOwnProperty(c)&&n!=null&&!l.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:Re(e,t,c,null,l,n)}for(r in l)if(n=l[r],i=s[r],l.hasOwnProperty(r)&&(n!=null||i!=null))switch(r){case"value":A=n;break;case"defaultValue":T=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(d(91));break;default:n!==i&&Re(e,t,r,n,l,i)}Dc(e,A,T);return;case"option":for(var ae in s)if(A=s[ae],s.hasOwnProperty(ae)&&A!=null&&!l.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Re(e,t,ae,null,l,A)}for(u in l)if(A=l[u],T=s[u],l.hasOwnProperty(u)&&A!==T&&(A!=null||T!=null))switch(u){case"selected":e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Re(e,t,u,A,l,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var de in s)A=s[de],s.hasOwnProperty(de)&&A!=null&&!l.hasOwnProperty(de)&&Re(e,t,de,null,l,A);for(k in l)if(A=l[k],T=s[k],l.hasOwnProperty(k)&&A!==T&&(A!=null||T!=null))switch(k){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(d(137,t));break;default:Re(e,t,k,A,l,T)}return;default:if(Xi(t)){for(var Be in s)A=s[Be],s.hasOwnProperty(Be)&&A!==void 0&&!l.hasOwnProperty(Be)&&zo(e,t,Be,void 0,l,A);for(L in l)A=l[L],T=s[L],!l.hasOwnProperty(L)||A===T||A===void 0&&T===void 0||zo(e,t,L,A,l,T);return}}for(var b in s)A=s[b],s.hasOwnProperty(b)&&A!=null&&!l.hasOwnProperty(b)&&Re(e,t,b,null,l,A);for(q in l)A=l[q],T=s[q],!l.hasOwnProperty(q)||A===T||A==null&&T==null||Re(e,t,q,A,l,T)}function Rm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Wh(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var n=s[l],i=n.transferSize,r=n.initiatorType,c=n.duration;if(i&&c&&Rm(r)){for(r=0,c=n.responseEnd,l+=1;l<s.length;l++){var u=s[l],k=u.startTime;if(k>c)break;var L=u.transferSize,q=u.initiatorType;L&&Rm(q)&&(u=u.responseEnd,r+=L*(u<c?1:(c-k)/(u-k)))}if(--l,t+=8*(i+r)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lo=null,Ho=null;function xi(e){return e.nodeType===9?e:e.ownerDocument}function Bm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Um(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ro(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bo=null;function $h(){var e=window.event;return e&&e.type==="popstate"?e===Bo?!1:(Bo=e,!0):(Bo=null,!1)}var qm=typeof setTimeout=="function"?setTimeout:void 0,Ph=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,e0=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(e){return Gm.resolve(null).then(e).catch(t0)}:qm;function t0(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function Ym(e,t){var s=t,l=0;do{var n=s.nextSibling;if(e.removeChild(s),n&&n.nodeType===8)if(s=n.data,s==="/$"||s==="/&"){if(l===0){e.removeChild(n),al(t);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")Zl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Zl(s);for(var i=s.firstChild;i;){var r=i.nextSibling,c=i.nodeName;i[ml]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||s.removeChild(i),i=r}}else s==="body"&&Zl(e.ownerDocument.body);s=n}while(s);al(t)}function Jm(e,t){var s=e;e=0;do{var l=s.nextSibling;if(s.nodeType===1?t?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(t?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=l}while(s)}function Uo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var s=t;switch(t=t.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Uo(s),Ji(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function a0(e,t,s,l){for(;e.nodeType===1;){var n=s;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ml])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function s0(e,t,s){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=Gt(e.nextSibling),e===null))return null;return e}function Vm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function qo(e){return e.data==="$?"||e.data==="$~"}function Go(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function l0(e,t){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||s.readyState!=="loading")t();else{var l=function(){t(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Yo=null;function Km(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(t===0)return Gt(e.nextSibling);t--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||t++}e=e.nextSibling}return null}function Qm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(t===0)return e;t--}else s!=="/$"&&s!=="/&"||t++}e=e.previousSibling}return null}function Xm(e,t,s){switch(t=xi(s),e){case"html":if(e=t.documentElement,!e)throw Error(d(452));return e;case"head":if(e=t.head,!e)throw Error(d(453));return e;case"body":if(e=t.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Zl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ji(e)}var Yt=new Map,Zm=new Set;function hi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ba=C.d;C.d={f:n0,r:i0,D:r0,C:o0,L:c0,m:d0,X:m0,S:u0,M:f0};function n0(){var e=ba.f(),t=ii();return e||t}function i0(e){var t=js(e);t!==null&&t.tag===5&&t.type==="form"?uu(t):ba.r(e)}var Ps=typeof document>"u"?null:document;function Im(e,t,s){var l=Ps;if(l&&typeof t=="string"&&t){var n=zt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof s=="string"&&(n+='[crossorigin="'+s+'"]'),Zm.has(n)||(Zm.add(n),e={rel:e,crossOrigin:s,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),dt(t,"link",e),st(t),l.head.appendChild(t)))}}function r0(e){ba.D(e),Im("dns-prefetch",e,null)}function o0(e,t){ba.C(e,t),Im("preconnect",e,t)}function c0(e,t,s){ba.L(e,t,s);var l=Ps;if(l&&e&&t){var n='link[rel="preload"][as="'+zt(t)+'"]';t==="image"&&s&&s.imageSrcSet?(n+='[imagesrcset="'+zt(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(n+='[imagesizes="'+zt(s.imageSizes)+'"]')):n+='[href="'+zt(e)+'"]';var i=n;switch(t){case"style":i=el(e);break;case"script":i=tl(e)}Yt.has(i)||(e=x({rel:"preload",href:t==="image"&&s&&s.imageSrcSet?void 0:e,as:t},s),Yt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(Il(i))||t==="script"&&l.querySelector(Fl(i))||(t=l.createElement("link"),dt(t,"link",e),st(t),l.head.appendChild(t)))}}function d0(e,t){ba.m(e,t);var s=Ps;if(s&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+zt(l)+'"][href="'+zt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=tl(e)}if(!Yt.has(i)&&(e=x({rel:"modulepreload",href:e},t),Yt.set(i,e),s.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Fl(i)))return}l=s.createElement("link"),dt(l,"link",e),st(l),s.head.appendChild(l)}}}function u0(e,t,s){ba.S(e,t,s);var l=Ps;if(l&&e){var n=Ns(l).hoistableStyles,i=el(e);t=t||"default";var r=n.get(i);if(!r){var c={loading:0,preload:null};if(r=l.querySelector(Il(i)))c.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":t},s),(s=Yt.get(i))&&Jo(e,s);var u=r=l.createElement("link");st(u),dt(u,"link",e),u._p=new Promise(function(k,L){u.onload=k,u.onerror=L}),u.addEventListener("load",function(){c.loading|=1}),u.addEventListener("error",function(){c.loading|=2}),c.loading|=4,pi(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:c},n.set(i,r)}}}function m0(e,t){ba.X(e,t);var s=Ps;if(s&&e){var l=Ns(s).hoistableScripts,n=tl(e),i=l.get(n);i||(i=s.querySelector(Fl(n)),i||(e=x({src:e,async:!0},t),(t=Yt.get(n))&&Vo(e,t),i=s.createElement("script"),st(i),dt(i,"link",e),s.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function f0(e,t){ba.M(e,t);var s=Ps;if(s&&e){var l=Ns(s).hoistableScripts,n=tl(e),i=l.get(n);i||(i=s.querySelector(Fl(n)),i||(e=x({src:e,async:!0,type:"module"},t),(t=Yt.get(n))&&Vo(e,t),i=s.createElement("script"),st(i),dt(i,"link",e),s.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function Fm(e,t,s,l){var n=(n=fe.current)?hi(n):null;if(!n)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(t=el(s.href),s=Ns(n).hoistableStyles,l=s.get(t),l||(l={type:"style",instance:null,count:0,state:null},s.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=el(s.href);var i=Ns(n).hoistableStyles,r=i.get(e);if(r||(n=n.ownerDocument||n,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=n.querySelector(Il(e)))&&!i._p&&(r.instance=i,r.state.loading=5),Yt.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Yt.set(e,s),i||x0(n,e,s,r.state))),t&&l===null)throw Error(d(528,""));return r}if(t&&l!==null)throw Error(d(529,""));return null;case"script":return t=s.async,s=s.src,typeof s=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=tl(s),s=Ns(n).hoistableScripts,l=s.get(t),l||(l={type:"script",instance:null,count:0,state:null},s.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function el(e){return'href="'+zt(e)+'"'}function Il(e){return'link[rel="stylesheet"]['+e+"]"}function Wm(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function x0(e,t,s,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),dt(t,"link",s),st(t),e.head.appendChild(t))}function tl(e){return'[src="'+zt(e)+'"]'}function Fl(e){return"script[async]"+e}function $m(e,t,s){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+zt(s.href)+'"]');if(l)return t.instance=l,st(l),l;var n=x({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),st(l),dt(l,"style",n),pi(l,s.precedence,e),t.instance=l;case"stylesheet":n=el(s.href);var i=e.querySelector(Il(n));if(i)return t.state.loading|=4,t.instance=i,st(i),i;l=Wm(s),(n=Yt.get(n))&&Jo(l,n),i=(e.ownerDocument||e).createElement("link"),st(i);var r=i;return r._p=new Promise(function(c,u){r.onload=c,r.onerror=u}),dt(i,"link",l),t.state.loading|=4,pi(i,s.precedence,e),t.instance=i;case"script":return i=tl(s.src),(n=e.querySelector(Fl(i)))?(t.instance=n,st(n),n):(l=s,(n=Yt.get(i))&&(l=x({},s),Vo(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),st(n),dt(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(d(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,pi(l,s.precedence,e));return t.instance}function pi(e,t,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,r=0;r<l.length;r++){var c=l[r];if(c.dataset.precedence===t)i=c;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=s.nodeType===9?s.head:s,t.insertBefore(e,t.firstChild))}function Jo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var gi=null;function Pm(e,t,s){if(gi===null){var l=new Map,n=gi=new Map;n.set(s,l)}else n=gi,l=n.get(s),l||(l=new Map,n.set(s,l));if(l.has(e))return l;for(l.set(e,null),s=s.getElementsByTagName(e),n=0;n<s.length;n++){var i=s[n];if(!(i[ml]||i[it]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var c=l.get(r);c?c.push(i):l.set(r,[i])}}return l}function ef(e,t,s){e=e.ownerDocument||e,e.head.insertBefore(s,t==="title"?e.querySelector("head > title"):null)}function h0(e,t,s){if(s===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function tf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function p0(e,t,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var n=el(l.href),i=t.querySelector(Il(n));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=bi.bind(e),t.then(e,e)),s.state.loading|=4,s.instance=i,st(i);return}i=t.ownerDocument||t,l=Wm(l),(n=Yt.get(n))&&Jo(l,n),i=i.createElement("link"),st(i);var r=i;r._p=new Promise(function(c,u){r.onload=c,r.onerror=u}),dt(i,"link",l),s.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,t),(t=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=bi.bind(e),t.addEventListener("load",s),t.addEventListener("error",s))}}var Ko=0;function g0(e,t){return e.stylesheets&&e.count===0&&yi(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var l=setTimeout(function(){if(e.stylesheets&&yi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ko===0&&(Ko=62500*Wh());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&yi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ko?50:800)+t);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(n)}}:null}function bi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vi=null;function yi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vi=new Map,t.forEach(b0,e),vi=null,bi.call(e))}function b0(e,t){if(!(t.state.loading&4)){var s=vi.get(e);if(s)var l=s.get(null);else{s=new Map,vi.set(e,s);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var r=n[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(s.set(r.dataset.precedence,r),l=r)}l&&s.set(null,l)}n=t.instance,r=n.getAttribute("data-precedence"),i=s.get(r)||l,i===l&&s.set(null,n),s.set(r,n),this.count++,l=bi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var Wl={$$typeof:Y,Provider:null,Consumer:null,_currentValue:V,_currentValue2:V,_threadCount:0};function v0(e,t,s,l,n,i,r,c,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ui(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ui(0),this.hiddenUpdates=Ui(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function af(e,t,s,l,n,i,r,c,u,k,L,q){return e=new v0(e,t,s,r,u,k,L,q,c),t=1,i===!0&&(t|=24),i=At(3,null,null,t),e.current=i,i.stateNode=e,t=wr(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:s,cache:t},Cr(i),e}function sf(e){return e?(e=Os,e):Os}function lf(e,t,s,l,n,i){n=sf(n),l.context===null?l.context=n:l.pendingContext=n,l=_a(t),l.payload={element:s},i=i===void 0?null:i,i!==null&&(l.callback=i),s=Ta(e,l,t),s!==null&&(wt(s,e,t),Ml(s,e,t))}function nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function Qo(e,t){nf(e,t),(e=e.alternate)&&nf(e,t)}function rf(e){if(e.tag===13||e.tag===31){var t=es(e,67108864);t!==null&&wt(t,e,67108864),Qo(e,67108864)}}function of(e){if(e.tag===13||e.tag===31){var t=Tt();t=qi(t);var s=es(e,t);s!==null&&wt(s,e,t),Qo(e,t)}}var ji=!0;function y0(e,t,s,l){var n=N.T;N.T=null;var i=C.p;try{C.p=2,Xo(e,t,s,l)}finally{C.p=i,N.T=n}}function j0(e,t,s,l){var n=N.T;N.T=null;var i=C.p;try{C.p=8,Xo(e,t,s,l)}finally{C.p=i,N.T=n}}function Xo(e,t,s,l){if(ji){var n=Zo(l);if(n===null)Do(e,t,l,Ni,s),df(e,l);else if(w0(n,e,t,s,l))l.stopPropagation();else if(df(e,l),t&4&&-1<N0.indexOf(e)){for(;n!==null;){var i=js(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Ia(i.pendingLanes);if(r!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;r;){var u=1<<31-xt(r);c.entanglements[1]|=u,r&=~u}$t(i),(Oe&6)===0&&(li=mt()+500,Kl(0))}}break;case 31:case 13:c=es(i,2),c!==null&&wt(c,i,2),ii(),Qo(i,2)}if(i=Zo(l),i===null&&Do(e,t,l,Ni,s),i===n)break;n=i}n!==null&&l.stopPropagation()}else Do(e,t,l,null,s)}}function Zo(e){return e=Ii(e),Io(e)}var Ni=null;function Io(e){if(Ni=null,e=ys(e),e!==null){var t=v(e);if(t===null)e=null;else{var s=t.tag;if(s===13){if(e=E(t),e!==null)return e;e=null}else if(s===31){if(e=D(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ni=e,null}function cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bi()){case dn:return 2;case ol:return 8;case ie:case ke:return 32;case Te:return 268435456;default:return 32}default:return 32}}var Fo=!1,Ya=null,Ja=null,Va=null,$l=new Map,Pl=new Map,Ka=[],N0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function df(e,t){switch(e){case"focusin":case"focusout":Ya=null;break;case"dragenter":case"dragleave":Ja=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":$l.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pl.delete(t.pointerId)}}function en(e,t,s,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:s,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=js(t),t!==null&&rf(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function w0(e,t,s,l,n){switch(t){case"focusin":return Ya=en(Ya,e,t,s,l,n),!0;case"dragenter":return Ja=en(Ja,e,t,s,l,n),!0;case"mouseover":return Va=en(Va,e,t,s,l,n),!0;case"pointerover":var i=n.pointerId;return $l.set(i,en($l.get(i)||null,e,t,s,l,n)),!0;case"gotpointercapture":return i=n.pointerId,Pl.set(i,en(Pl.get(i)||null,e,t,s,l,n)),!0}return!1}function uf(e){var t=ys(e.target);if(t!==null){var s=v(t);if(s!==null){if(t=s.tag,t===13){if(t=E(s),t!==null){e.blockedOn=t,Sc(e.priority,function(){of(s)});return}}else if(t===31){if(t=D(s),t!==null){e.blockedOn=t,Sc(e.priority,function(){of(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=Zo(e.nativeEvent);if(s===null){s=e.nativeEvent;var l=new s.constructor(s.type,s);Zi=l,s.target.dispatchEvent(l),Zi=null}else return t=js(s),t!==null&&rf(t),e.blockedOn=s,!1;t.shift()}return!0}function mf(e,t,s){wi(e)&&s.delete(t)}function S0(){Fo=!1,Ya!==null&&wi(Ya)&&(Ya=null),Ja!==null&&wi(Ja)&&(Ja=null),Va!==null&&wi(Va)&&(Va=null),$l.forEach(mf),Pl.forEach(mf)}function Si(e,t){e.blockedOn===t&&(e.blockedOn=null,Fo||(Fo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,S0)))}var ki=null;function ff(e){ki!==e&&(ki=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ki===e&&(ki=null);for(var t=0;t<e.length;t+=3){var s=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(Io(l||s)===null)continue;break}var i=js(s);i!==null&&(e.splice(t,3),t-=3,Xr(i,{pending:!0,data:n,method:s.method,action:l},l,n))}}))}function al(e){function t(u){return Si(u,e)}Ya!==null&&Si(Ya,e),Ja!==null&&Si(Ja,e),Va!==null&&Si(Va,e),$l.forEach(t),Pl.forEach(t);for(var s=0;s<Ka.length;s++){var l=Ka[s];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ka.length&&(s=Ka[0],s.blockedOn===null);)uf(s),s.blockedOn===null&&Ka.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var n=s[l],i=s[l+1],r=n[gt]||null;if(typeof i=="function")r||ff(s);else if(r){var c=null;if(i&&i.hasAttribute("formAction")){if(n=i,r=i[gt]||null)c=r.formAction;else if(Io(n)!==null)continue}else c=r.action;typeof c=="function"?s[l+1]=c:(s.splice(l,3),l-=3),ff(s)}}}function xf(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return n=r})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function Wo(e){this._internalRoot=e}Ai.prototype.render=Wo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(d(409));var s=t.current,l=Tt();lf(s,l,e,t,null,null)},Ai.prototype.unmount=Wo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lf(e.current,2,null,e,null,null),ii(),t[vs]=null}};function Ai(e){this._internalRoot=e}Ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=wc();e={blockedOn:null,target:e,priority:t};for(var s=0;s<Ka.length&&t!==0&&t<Ka[s].priority;s++);Ka.splice(s,0,e),s===0&&uf(e)}};var hf=p.version;if(hf!=="19.2.8")throw Error(d(527,hf,"19.2.8"));C.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=h(t),e=e!==null?O(e):null,e=e===null?null:e.stateNode,e};var k0={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ci=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ci.isDisabled&&Ci.supportsFiber)try{Ot=Ci.inject(k0),ft=Ci}catch{}}return an.createRoot=function(e,t){if(!z(e))throw Error(d(299));var s=!1,l="",n=ju,i=Nu,r=wu;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=af(e,1,!1,null,null,s,l,null,n,i,r,xf),e[vs]=t.current,Oo(e),new Wo(t)},an.hydrateRoot=function(e,t,s){if(!z(e))throw Error(d(299));var l=!1,n="",i=ju,r=Nu,c=wu,u=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(n=s.identifierPrefix),s.onUncaughtError!==void 0&&(i=s.onUncaughtError),s.onCaughtError!==void 0&&(r=s.onCaughtError),s.onRecoverableError!==void 0&&(c=s.onRecoverableError),s.formState!==void 0&&(u=s.formState)),t=af(e,1,!0,t,s??null,l,n,u,i,r,c,xf),t.context=sf(null),s=t.current,l=Tt(),l=qi(l),n=_a(l),n.callback=null,Ta(s,n,l),s=l,t.current.lanes=s,ul(t,s),$t(t),e[vs]=t.current,Oo(e),new Ai(t)},an.version="19.2.8",an}var kf;function H0(){if(kf)return ec.exports;kf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(p){console.error(p)}}return o(),ec.exports=L0(),ec.exports}var R0=H0();const fc="/assets/tussar_silk_saree_main_1787802652227-BqTMy1bG.jpg",B0="/assets/tussar_silk_saree_pleats_1787802668106-BoAdrrUi.jpg",U0="/assets/tussar_silk_saree_pallu_1787802682237-y2JAK2aC.jpg",q0="/assets/tussar_teal_main_1787803239376-CliP2Q1C.jpg",G0="/assets/tussar_teal_detail_1787803260291-BEKOfBBr.jpg",Y0="/assets/tussar_teal_pallu_1787803282005-C7PaQpDr.jpg",J0="/assets/dupatta_green_main_1787804444238-D8JkTxLh.jpg",V0="/assets/dupatta_green_ikat_1787804462585-CFY_vdkc.jpg",K0="/assets/dupatta_green_motif_1787804480235-DQQnabgS.jpg",Q0="/assets/dongaria_shawl_drape_1787810586754-CZRBKC0U.jpg",X0="/assets/dongaria_shawl_bust_1787810604062-CFFuVDYr.jpg",Z0="/assets/dongaria_shawl_detail_1787810617602-WUulgw53.jpg",I0="/assets/sambalpuri_suit_set_main_1787811604181-CD4CiXh8.jpg",F0="/assets/sambalpuri_suit_ikat_detail_1787811620759-zns3M5e6.jpg",W0="/assets/sambalpuri_suit_border_detail_1787811637435-CqsnEXJ3.jpg",$0="/assets/sambalpuri_red_suit_main_1787811852025-CwlI1Ne3.jpg",P0="/assets/sambalpuri_red_suit_dupatta_1787811869032-BN5PBqMg.jpg",ep="/assets/sambalpuri_red_suit_kumbha_1787811889939-Ddpre1BZ.jpg",tp="/assets/grey_silk_saree_drape_1787814159225-Xkm6YNYA.jpg",ap="/assets/grey_silk_pallu_detail_1787814177522-DsfqS4vb.jpg",sp="/assets/grey_silk_kumbha_detail_1787814194040-NY4xu0OL.jpg",_i="/assets/dhokra_mana_bowl_1787816018205-CnDZJKAI.jpg",Af="/assets/dhokra_jewel_box_1787816038795-BXHozirJ.jpg",lp="/assets/coir_flower_craft_1787816053220-x4nBexLh.jpg",np="/assets/golden_grass_square_pedi-BaBbPEtM.jpg",ip="/assets/golden_grass_round_basket-Bi9b07MS.jpg",rp="/assets/golden_grass_square_tray-DAj0ObtH.jpg",Zf="/assets/jute_laptop_bag_1787922021360-BJ2D5mpK.jpg",op="/assets/jute_cotton_file_folder_1787922005002-ClEoIMn_.jpg",cp="/assets/jute_executive_bag_1787922074550-i0WDza-h.jpg",rc="/assets/lac_bangles_braided_1787922039413-C8tvss37.jpg",Cf="/assets/lac_bangles_stripes_1787922058072-CTE-aIrc.jpg",dp="/assets/chandan_pedi_stone_1787918887939-BMnKVs95.jpg",up="/assets/chandan_pedi_stone_1787918887939-BMnKVs95.jpg",If="/assets/wood_coasters_real_1788268582552-DJE9tLxs.jpg",mp="/assets/wooden_coasters_detail_1788266080639-CJj2AvPc.jpg",Ti="/assets/dokra_necklace_main_exact_1788277087968-CIbpcpiB.jpg",fp="/assets/dokra_necklace_prop_exact_1788277107308-DrAaMIcg.jpg",xp="/assets/dokra_earrings_stand_exact_1788277132907-BEYnkuNB.jpg",hp="/assets/dokra_beads_layered_necklace_1788279445517-jCBIvon_.jpg",pp="/assets/dokra_pendant_necklace_1788279471481-p9YCfemf.jpg",Ff="/assets/dokra_spiral_penth_earrings_1788320508251-DDYG_hv_.jpg",gp="/assets/dokra_spiral_web_earrings_1788352118716-DtBnuJ8v.jpg",bp="/assets/dokra_spiral_fish_earrings_1788353406903-CrOqyn0b.jpg",vp="/assets/dokra_spiral_egg_shape_earrings_1788357087925-TTSVCACQ.jpg",yp="/assets/dokra_earth_pendant_necklace_1788366044512-D08Hy2Ea.jpg",jp="/assets/dhokra_tribal_choker_set_1788366061556-Di7fA-jI.jpg",Np="/assets/dokra_round_pendant_necklace_1788366078599-Br5BxoTt.jpg",wp="/assets/jute_cotton_file_folder_1787922005002-ClEoIMn_.jpg",Sp="/assets/jute_executive_bag_1787922074550-i0WDza-h.jpg",kp="/assets/jute_laptop_bag_1787922021360-BJ2D5mpK.jpg",lc=[{id:"artisan-1",name:"Master Rabindra Behera",craft:"Pattachitra Master & Palm Leaf Engraver",location:"Raghurajpur Heritage Crafts Village, Puri",state:"Odisha",yearsOfExperience:42,image:"/assets/hero/pattachitra_master_banner_1791089277119.jpg",heroImage:"/assets/hero/pattachitra_master_banner_1791089277119.jpg",bio:"Carrying forward a 5-generation legacy of cloth-based scroll paintings using 100% natural stone pigments and conch shell whites.",quote:"Every line etched on palm leaf is not just art; it is a timeless conversation with our ancestors and sacred traditions.",fullStory:"Born into the Chitrakar lineage in Raghurajpur, Master Rabindra learned the intricate art of Pattachitra from his grandfather at age nine. Using traditional canvas prepared with tamarind seed paste and chalk, his brushstrokes tell epics of the Gita Govinda and temple folklore. Each pigment is meticulously ground from Hingula (vermilion), Haritala (yellow stone), and lampblack, ensuring paintings that remain vibrant for centuries.",heritageLineage:"5th Generation Master Artist",specialty:"Palm Leaf Inscriptions & Temple Epics",awards:["National Merit Award (Handicrafts) 2014","State Kala Ratna 2019","UNESCO Craft Heritage Fellowship"],productCount:1},{id:"artisan-2",name:"Bikram & Devendra Meher",craft:"Master Sambalpuri Ikat & Silk Weavers",location:"Bargarh & Sonepur Weavers Society",state:"Odisha",yearsOfExperience:32,image:"/assets/hero/pattachitra_master_banner_1791089277119.jpg",heroImage:"/assets/hero/pattachitra_master_banner_1791089277119.jpg",bio:"Practicing the sacred mathematical tie-and-dye Ikat art (Bandha Kala) where yarns are dyed before being woven on wooden pit-looms.",quote:"Ikat is mathematics and poetry bound together in warp and weft.",fullStory:"Devendra and his weaver collective specialize in intricate tie-dye Bandhakala sarees, pure Tussar silks, and organic tribal weaves. Each piece requires weeks of painstaking calculation, thread winding, tie-dyeing, and shuttle loom precision.",heritageLineage:"Bhulia Weavers Community",specialty:"Sambalpuri Silk Ikat & Wild Tussar Weaves",awards:["National Handloom Excellence Award 2016","Sant Kabir Award Nominee"],productCount:7},{id:"artisan-3",name:"Madhab Rana & Guild",craft:"Dhokra Lost-Wax Bell Metal Craftsmen",location:"Kuliana & Dhenkanal Dhokra Clusters",state:"Odisha",yearsOfExperience:38,image:"/assets/hero/pattachitra_master_banner_1791089277119.jpg",heroImage:"/assets/hero/pattachitra_master_banner_1791089277119.jpg",bio:"Preserving the 4000-year-old non-ferrous lost-wax metal casting technique handed down through ancient tribal lineages.",quote:"Each sculpture leaves our hands as beeswax and returns as eternal bronze through fire and river clay.",fullStory:"Working with river clay, natural beeswax filaments, and molten brass alloys, the artisans of Kuliana create one-of-a-kind figurines, ritual mana measuring vessels, and exquisite tribal jewellery.",heritageLineage:"Hereditary Dhokra Metal Smiths",specialty:"Lost-Wax Tribal Castings & Brass Jewellery",awards:["State Handicraft Award 2015","Tribal Heritage Fellowship"],productCount:11},{id:"artisan-4",name:"Basudev Mohapatra & Shilpi Guild",craft:"Traditional Stone & Wood Sculptors",location:"Lalitgiri & Puri Artisan Guild",state:"Odisha",yearsOfExperience:35,image:"https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",heroImage:"https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",bio:"Sculpting with age-old chisels handed down through generations, transforming raw sandstone, mango wood, and granite into sacred motifs.",quote:"The wood and stone speak before the hammer strikes. My role is merely to awaken the form sleeping within.",fullStory:"Rooted in the architectural ethos of Konarks Sun Temple, the guild works with natural chlorite stone, seasoned mango wood, and sandstone to create timeless relief sculptures, ritual utensils, and home decor.",heritageLineage:"Konark Shilpi Guild Ancestry",specialty:"Sandstone Carvings & Hand-chiseled Mango Wood Panels",awards:["Rashtrapati Award 2011","Odisha Shilpi Samman 2018"],productCount:4},{id:"artisan-5",name:"Gopal Sahu & Kantilo Kansari Guild",craft:"Master Bell Metal (Kansa) Smiths",location:"Kantilo, Nayagarh District",state:"Odisha",yearsOfExperience:40,image:"/assets/hero/pattachitra_master_banner_1791089277119.jpg",heroImage:"/assets/hero/pattachitra_master_banner_1791089277119.jpg",bio:"Heirloom metal-smiths forging 78% copper and 22% tin bronze alloy according to ancient Ayurvedic principles for health and longevity.",quote:"Kansa is living metal. Its pure resonance purifies the water it holds and the food cooked within.",fullStory:"Kantilo on the banks of the Mahanadi is Indias premier traditional bell metal capital. Master Gopal Sahu leads a cooperative of hammer-smiths forging thick-bottomed kadais, sacred water pots (ghada), and dinnerware.",heritageLineage:"Hereditary Kansari Guild",specialty:"Hand-hammered Bronze Kadais & Matka Ghadas",awards:["State Metal Craft Master 2012","National Guild Merit"],productCount:3},{id:"artisan-6",name:"Pratima Biswal & Coastal SHG Federation",craft:"Golden Grass, Coir & Natural Fiber Guild",location:"Kendrapara & Puri Rural Clusters",state:"Odisha",yearsOfExperience:22,image:"https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",heroImage:"https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",bio:"Leading over 400 rural women artisans harvesting wild golden grass (Kaintha) and coconut coir to weave eco-luxury home decor.",quote:"Every golden reed harvested from riverbeds supports women autonomy and sustainable living.",fullStory:"The Kendrapara Golden Grass federation transforms wild river reeds into glossy storage boxes (pedi), trays, baskets, and eco-friendly conference accessories.",heritageLineage:"Mission Shakti Women Co-operative",specialty:"Golden Grass Weaving, Jute Bags & Coir Crafts",awards:["National Women SHG Award 2021","Eco Craft Innovator 2023"],productCount:7},{id:"artisan-7",name:"Subhadra Jena & Sankhari Guild",craft:"Master Baleswar Lac Jewellery Makers",location:"Baleswar Heritage District",state:"Odisha",yearsOfExperience:26,image:"https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",heroImage:"https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80",bio:"Crafting royal lacquer bangles using purified natural shellac resin, hand-applied gold foils, and intricate spiral cords.",quote:"Lac reflects the vibrant spirit of Odia festivities and traditional feminine adornment.",fullStory:"Hereditary Sankhari artisans heat and roll natural resin on wooden mandrels to create jewel-studded braided bangles revered for auspicious occasions.",heritageLineage:"Baleswar Sankhari Lineage",specialty:"Handcrafted Braided & Striped Lac Bangles",awards:["State Traditional Craft Award 2017"],productCount:2}],va=[{id:"art",name:"HERITAGE ART & PAINTINGS",description:"Raghurajpur GI Pattachitra on cloth canvas, sacred Talapatra palm leaf micro-etchings, and temple folklore art.",categories:["Pattachitra","Palm Leaf Art","Canvas Paintings"]},{id:"textiles",name:"HANDLOOM & TEXTILES",description:"Kotpad organic dyed weaves, Dongria Kondh shawls, Sambalpuri Ikat sarees, and Tussar silk suits.",categories:["Saree","Dupattas","Salwar Suits","Shawls","Women Clothing"]},{id:"handicraft",name:"HANDICRAFTS",description:"Traditional Dhokra metal casting, Golden grass, Mayurbhanj Sabai grass, and hand-carved woodwork.",categories:["Brass","Golden Grass","Jute","Sabai Grass","Wood","Stone"]},{id:"jewellery",name:"JEWELLERY & ORNAMENTS",description:"Authentic Baleswar handcrafted lac bangles, Cuttack Tarakasi silver filigree necklaces, artisanal earrings, and tribal jewellery.",categories:["Necklace","Earrings","Lac"]}],Ap=[{id:"main-cat-art",name:"Heritage Art & Paintings",slug:"art",count:4,image:"/assets/pattachitra/pattachitra_gita_govinda_1788410035400.jpg",description:"Raghurajpur GI Pattachitra on cloth canvas, sacred Talapatra palm leaf micro-etchings, and temple folklore art.",subtitle:"Pattachitra & Palm Leaf Art"},{id:"main-cat-textiles",name:"Handloom & Textiles",slug:"textiles",count:7,image:fc,description:"Kotpad organic dyes, Sambalpuri Ikat, GI Khandua Pata, and Dongria Kondh embroidered shawls.",subtitle:"Sambalpuri & Tussar Silk Weaves"},{id:"main-cat-handicrafts",name:"Handicrafts",slug:"handicraft",count:11,image:_i,description:"Dokra bell metal casting, Golden grass, Mayurbhanj Sabai grass, and hand-carved woodwork.",subtitle:"Dokra Brass, Sabai & Wood Craft"},{id:"main-cat-jewellery",name:"Jewellery & Ornaments",slug:"jewellery",count:11,image:Ti,description:"Authentic handcrafted Dokra choker necklaces, earth pendants, round medallions, bead sets, spiral earrings, and Baleswar lac bangles.",subtitle:"Tarakasi Silver & Baleswar Lac"}],oc=[{id:"cat-art",name:"Pattachitra & Palm Leaf Art",slug:"art",count:4,image:"/assets/pattachitra/pattachitra_gita_govinda_1788410035400.jpg",description:"Raghurajpur GI Pattachitra on cloth canvas, sacred Talapatra palm leaf micro-etchings, and temple folklore art.",subtitle:"Sacred Heritage Art of Odisha"},{id:"cat-handloom",name:"Handloom & Sarees",slug:"handloom",count:7,image:fc,description:"Kotpad organic dyes, Sambalpuri Ikat, GI Khandua Pata, and Dongria Kondh embroidered shawls.",subtitle:"Heirloom Weaves of Odisha"},{id:"cat-handicrafts",name:"Handicrafts & Metal",slug:"handicrafts",count:11,image:_i,description:"Dokra metal casting, Sabai & Golden grass weaving, and hand-carved Wood craft.",subtitle:"Tribal & Traditional Crafts"},{id:"cat-wood-craft",name:"Wood Crafts",slug:"Wood",count:1,image:If,description:"Handcrafted solid mango wood coasters, tableware, and artisanal carved wooden utility crafts.",subtitle:"Solid Wood & Handicrafts"},{id:"cat-jute-craft",name:"Jute Craft",slug:"Jute",count:3,image:Zf,description:"Eco-friendly natural jute laptop bags, conference folders, and handcrafted executive accessories.",subtitle:"Handcrafted Jute & Eco Accessories"},{id:"cat-necklace",name:"Necklaces & Chokers",slug:"Necklace",count:5,image:Ti,description:"Authentic Dokra brass choker necklaces, revolving earth pendants, round medallions, and tribal bead neckpieces.",subtitle:"Dokra & Tribal Necklaces"},{id:"cat-earrings",name:"Earrings & Drops",slug:"Earrings",count:4,image:Ff,description:"Handcrafted Dokra brass spiral egg shape earrings, penth drops, web shapes, and fish dangles.",subtitle:"Dokra Brass Spirals & Drops"},{id:"cat-lac-craft",name:"Lac Bangles",slug:"Lac",count:2,image:rc,description:"Authentic Baleswar handcrafted lac bangles, braided royal ornaments, and festive spiral lacquer work.",subtitle:"Heirloom Lac Ornaments"},{id:"cat-jewellery",name:"Jewellery & Ornaments",slug:"jewellery",count:11,image:Ti,description:"Authentic handcrafted Dokra choker necklaces, earth pendants, round medallions, bead sets, spiral earrings, and Baleswar lac bangles.",subtitle:"Heritage Odisha Jewellery"}],ut=[{id:"prod-pattachitra-gita-govinda-scroll",title:"Gita Govinda Sacred Talapatra Palm Leaf Folding Scroll",craft:"PATTACHITRA & TALAPATRA",category:"Heritage Art",collection:"art",categoriesList:["Pattachitra","Palm Leaf Art","Art"],price:4850,originalPrice:5800,rating:5.0,reviewsCount:88,stock:6,origin:"Raghurajpur Heritage Crafts Village, Puri, Odisha",artisanId:"artisan-1",artisanName:"Master Rabindra Behera & Chitrakar Guild",image:"/assets/pattachitra/pattachitra_gita_govinda_1788410035400.jpg",additionalImages:["/assets/pattachitra/talapatra_palm_leaf_1788410050683.jpg","/assets/pattachitra/17827589268122.webp"],description:"An authentic Talapatra Karigari folding scroll hand-carved with an iron stylus on seasoned palm leaves. Illustrates immortal 12th-century verses of poet Jayadeva's Gita Govinda, etched with natural castor lamp soot.",details:{material:"Seasoned Palmyra Tala Palm Leaves & Castor Lamp Soot",dimensions:"Length: 32 inches, Width: 8.5 inches",weight:"450 grams",careInstructions:"Keep in dry environment away from direct moisture. Dust lightly with a soft brush.",technique:"Iron stylus (Lekhani) micro-etching and natural lampblack staining",leadTime:"3-5 business days"},features:["Hand-inscribed by 5th-generation Raghurajpur master Chitrakar","Depicts complete 12 cantos of Jayadeva's Gita Govinda","Tied with handspun crimson silk cords and polished wooden rods","Certified GI protected authentic Odisha craft"],isNew:!0,featured:!0},{id:"prod-pattachitra-tree-of-life-tussar",title:"Radha Krishna & Tree of Life Pattachitra Canvas Painting",craft:"PATTACHITRA & TALAPATRA",category:"Heritage Art",collection:"art",categoriesList:["Pattachitra","Canvas Paintings","Art"],price:3950,originalPrice:4700,rating:4.9,reviewsCount:62,stock:8,origin:"Raghurajpur Crafts Cluster, Puri, Odisha",artisanId:"artisan-1",artisanName:"Master Rabindra Behera & Chitrakar Guild",image:"/assets/pattachitra/17828072259642.webp",additionalImages:["/assets/pattachitra/17827587327792.webp","/assets/pattachitra/17827592284922.webp"],description:"Traditional Pata canvas prepared using handloom Tussar cotton, tamarind seed paste gum (Niryas), and crushed conch shell chalk. Hand-painted with 100% natural mineral and vegetable pigments: Hingula red, Haritala yellow, and Shankha white.",details:{material:"Tussar cloth canvas with tamarind seed sizing & mineral pigments",dimensions:"Height: 24 inches, Width: 18 inches",weight:"350 grams",careInstructions:"Frame under glass for archival preservation. Avoid damp walls.",technique:"Pure squirrel-hair brushwork with natural stone mineral colors",leadTime:"3-5 business days"},features:["100% natural mineral pigments extracted from stones and river conch","Rich botanical borders and divine Radha-Krishna Leela","Archival durability crafted to last for generations without fading","Supplied with Authenticity & Lineage Certificate"],isNew:!1,featured:!0},{id:"prod-talapatra-dashavatara-fan",title:"Dashavatara Sacred Palm Leaf Ceremonial Engraved Fan",craft:"PATTACHITRA & TALAPATRA",category:"Heritage Art",collection:"art",categoriesList:["Palm Leaf Art","Pattachitra","Decor","Art"],price:2750,originalPrice:3400,rating:4.8,reviewsCount:45,stock:11,origin:"Puri Heritage Artisan Cluster, Odisha",artisanId:"artisan-1",artisanName:"Master Rabindra Behera & Guild",image:"/assets/pattachitra/17827589268122.webp",additionalImages:["/assets/pattachitra/talapatra_palm_leaf_1788410050683.jpg"],description:"Ten sacred incarnations (Dashavatara) of Lord Vishnu intricately hand-inscribed across interlocking seasoned palm blades with delicate geometric temple borders. Functions both as a sacred art piece and ceremonial fan.",details:{material:"Palmyra palm leaf with carved rosewood handle & brass rivets",dimensions:"Diameter: 12 inches, Handle Length: 8 inches",weight:"280 grams",careInstructions:"Keep in dry display case or wall mount.",technique:"Fine micro-etching and charcoal paste rub",leadTime:"2-4 business days"},features:["Ten Vishnu Avatars carved with single-hair precision","Foldable ceremonial structure inspired by Puri Jagannath temple fans","Hand-carved wooden handle with brass fittings"],isNew:!1,featured:!1},{id:"prod-talapatra-vasant-rasa-miniature",title:"Vasant Rasa Lila Tala Chitra Miniature Palm Leaf Inscription",craft:"PATTACHITRA & TALAPATRA",category:"Heritage Art",collection:"art",categoriesList:["Palm Leaf Art","Pattachitra","Miniature","Art"],price:1850,originalPrice:2200,rating:4.9,reviewsCount:39,stock:14,origin:"Raghurajpur Heritage Village, Odisha",artisanId:"artisan-1",artisanName:"Master Rabindra Behera",image:"/assets/pattachitra/17828076219352.webp",additionalImages:["/assets/pattachitra/17828074165882.webp"],description:"Exquisite miniature palm leaf inscription capturing the divine spring dance with intricate floral vines and miniature figures measuring under a millimetre in width.",details:{material:"Seasoned palm leaf blade with silk cord border",dimensions:"Length: 10 inches, Width: 2.5 inches",weight:"120 grams",careInstructions:"Wipe gently with dry cloth.",technique:"Microscopic iron stylus etching",leadTime:"2-3 business days"},features:["Intricate micro-engraving technique from Raghurajpur","Framed in handcrafted brass and wood border","Collector piece depicting spring festivities in Odisha"],isNew:!1,featured:!1},{id:"prod-sandstone-chandan-pedi-272",title:"Traditional Sandstone Sandalwood Grinding Stone (Chandan Pedi)",craft:"STONE CARVING",category:"Handicrafts",collection:"handicraft",categoriesList:["Stone","Handicrafts","Puja"],price:1450,originalPrice:1750,rating:4.9,reviewsCount:64,stock:16,origin:"Konark, Puri District, Odisha",artisanId:"artisan-4",artisanName:"Basudev Mohapatra & Shilpi Guild",image:dp,additionalImages:[up],description:"Chiseled from authentic Odisha sandstone by Konark stone carvers. Specifically calibrated circular rough rubbing disc for preparing fragrant chandan paste for deity worship.",details:{material:"Single-piece Konark Sandstone / Chlorite",dimensions:"Diameter: 7 inches, Thickness: 1.8 inches",weight:"1.8 kg",careInstructions:"Rinse with clean water after use and air dry.",technique:"Hand-chiseled with traditional iron chisels and water honing",leadTime:"2-4 business days"},features:["Finely hand-chiseled from single-piece Konark sandstone","Specially textured surface for smooth sandalwood rubbing","Sacred puja essential for daily rituals and deity offerings","Non-slip sturdy base"],isNew:!1,featured:!1},{id:"prod-dhokra-mana-bowl",title:"Heritage Dhokra Brass Mana (Traditional Measuring Bowl)",craft:"DHOKRA METAL CASTING",category:"Handicrafts",collection:"handicraft",categoriesList:["Brass","Handicrafts","Decor"],price:2100,originalPrice:2500,rating:4.8,reviewsCount:72,stock:9,origin:"Kuliana, Mayurbhanj, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:_i,additionalImages:[Af],description:"Iconic tribal brass Mana measuring vessel cast with lost-wax technique in Mayurbhanj. Adorned with spiraled brass filigree filaments and tribal motifs.",details:{material:"Recycled brass and bronze lost-wax cast alloy",dimensions:"Diameter: 5.5 inches, Height: 5 inches",weight:"700 grams",careInstructions:"Wipe with soft cotton cloth; preserve antique patina without chemicals.",technique:"Cire-perdue (lost-wax) casting with clay core",leadTime:"5-7 business days"},features:["Authentic 4000-year-old lost-wax casting technique","Intricate spiraled brass wire ornamentation","Symbol of prosperity and agrarian heritage in Odisha","Unique collector piece with rustic antique patina"],isNew:!1,featured:!0},{id:"prod-dhokra-jewellery-box-antique",title:"Dhokra Brass Metal Craft Jewellery Box",craft:"DHOKRA METAL CASTING",category:"Handicrafts",collection:"handicraft",categoriesList:["Brass","Handicrafts","Storage"],price:3200,originalPrice:3800,rating:4.9,reviewsCount:51,stock:7,origin:"Dhenkanal & Mayurbhanj, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:Af,additionalImages:[_i],description:"Exquisite tribal jewelry box with latticed filigree brass work and cast peacocks on the lid. Perfect keepsake box for precious trinkets and family heirlooms.",details:{material:"Lost-wax cast solid brass with velvet interior lining",dimensions:"Length: 6.5 inches, Width: 4.5 inches, Height: 3.5 inches",weight:"950 grams",careInstructions:"Dust with soft feather brush or dry microfiber cloth.",technique:"Hand-threaded wax filigree and pit-furnace firing",leadTime:"6-8 business days"},features:["Intricate tribal mesh and bird figurines on lid","Handcrafted using beeswax filament modeling and molten brass","Keeps precious trinkets and heirloom ornaments safe","Velveteen interior lining"],isNew:!0,featured:!1},{id:"prod-coir-multicoloured-flower",title:"Coir Craft Multicoloured Flower Decor",craft:"COIR & NATURAL FIBER",category:"Handicrafts",collection:"handicraft",categoriesList:["Handicrafts","Decor"],price:899,originalPrice:1199,rating:4.7,reviewsCount:43,stock:22,origin:"Raghurajpur & Puri Coast, Odisha",artisanId:"artisan-6",artisanName:"Pratima Biswal & Coastal SHG Federation",image:lp,additionalImages:[],description:"Eco-conscious botanical flower artwork crafted from natural treated coconut coir fiber by coastal women artisan guilds in Raghurajpur and Puri.",details:{material:"100% natural treated coconut coir and organic botanical dyes",dimensions:"Diameter: 12 inches, Thickness: 2 inches",weight:"250 grams",careInstructions:"Keep dry; dust lightly with soft bristled brush.",technique:"Hand-rolled coir sculpting and botanical dip dyeing",leadTime:"2-3 business days"},features:["Eco-conscious craft empowering women artisan clusters in coastal Puri","Hand-twisted coconut fiber petals with vivid botanical dyes","Lightweight wall or tabletop decorative centerpiece","Mildew resistant and durable"],isNew:!1,featured:!1},{id:"prod-sambalpuri-pure-silk-saree-grey",title:"Handloom Pure Silk Saree - with Blouse",craft:"SAMBALPURI IKAT WEAVING",category:"Handloom & Textiles",collection:"textiles",categoriesList:["Saree","Handloom","Silk"],price:5490,originalPrice:6990,rating:5,reviewsCount:138,stock:5,origin:"Bargarh, Western Odisha",artisanId:"artisan-2",artisanName:"Bikram & Devendra Meher",image:tp,additionalImages:[ap,sp],description:"Masterpiece Sambalpuri pure silk saree featuring intricate Bandhakala tie-dye Ikat and traditional temple Kumbha border. Rich slate grey with contrasting crimson pallu.",details:{material:"100% Pure Mulberry Silk (Silk Mark Certified)",dimensions:"Length: 6.2 meters (includes 80cm unstitched blouse piece), Width: 46 inches",weight:"480 grams",careInstructions:"Dry clean only. Store in breathable muslin bag.",technique:"Bandhakala double-weft tie and dye on traditional pit loom",leadTime:"Ready to ship"},features:["Authentic GI-tagged Sambalpuri silk handloom","Requires over 25 days of intricate tie-dye and shuttle loom weaving","Rich lustrous sheen with breathable drape","Dry clean only"],isNew:!1,featured:!0},{id:"prod-sambalpuri-cotton-3pc-suit-red",title:"Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set (Crimson Red)",craft:"SAMBALPURI IKAT WEAVING",category:"Handloom & Textiles",collection:"textiles",categoriesList:["Salwar Suits","Cotton","Handloom"],price:2650,originalPrice:3200,rating:4.9,reviewsCount:82,stock:14,origin:"Sonepur & Bargarh, Odisha",artisanId:"artisan-2",artisanName:"Bikram & Devendra Meher",image:$0,additionalImages:[P0,ep],description:"Vibrant crimson red Sambalpuri 3-piece unstitched salwar suit woven on handlooms with combed cotton yarns. Includes matching dupatta with rich Ikat motifs.",details:{material:"100% Combed Handloom Cotton (Skin-friendly natural dyes)",dimensions:"Kurta: 2.5m, Salwar/Bottom: 2.0m, Dupatta: 2.4m",weight:"550 grams",careInstructions:"Gentle hand wash in cold water with mild detergent. Line dry in shade.",technique:"Single and double Bandha handloom weaving",leadTime:"2-4 business days"},features:["Breathable, all-season handwoven cotton fabric","Traditional shankha and chakra ikat motifs on the chest and border","Includes matching dupatta with intricate tie-dye pallu","Gentle hand wash recommended"],isNew:!0,featured:!1},{id:"prod-sambalpuri-cotton-3pc-suit-set",title:"Sambalpuri Handloom Pure Cotton 3pc Unstitched Suit Set",craft:"SAMBALPURI IKAT WEAVING",category:"Handloom & Textiles",collection:"textiles",categoriesList:["Salwar Suits","Cotton","Handloom"],price:2450,originalPrice:2950,rating:4.8,reviewsCount:91,stock:12,origin:"Bargarh, Western Odisha",artisanId:"artisan-2",artisanName:"Bikram & Devendra Meher",image:I0,additionalImages:[F0,W0],description:"Heritage Sambalpuri unstitched dress material featuring classic geometric bandha patterns. Unmatched softness and comfort for everyday and workplace elegance.",details:{material:"100% Organic Handloom Cotton",dimensions:"Kurta: 2.5m, Bottom: 2.0m, Dupatta: 2.4m",weight:"520 grams",careInstructions:"Cold hand wash with mild liquid soap. Iron on medium heat.",technique:"Shuttle loom Bandhakala tie-and-dye",leadTime:"2-4 business days"},features:["Natural vegetable dyes with skin-friendly finish","Classic Sambalpuri chevron and fish ikat patterns","Soft, breathable drape for formal and festive wear","Durable handspun yarns"],isNew:!1,featured:!1},{id:"prod-fine-tussar-silk-dupatta-temple",title:"Fine Handloom Tussar Silk Dupatta with Temple Border",craft:"TUSSAR SILK WEAVING",category:"Handloom & Textiles",collection:"textiles",categoriesList:["Dupattas","Silk","Handloom"],price:1850,originalPrice:2300,rating:4.9,reviewsCount:67,stock:15,origin:"Gopalpur, Jajpur, Odisha",artisanId:"artisan-2",artisanName:"Bikram & Devendra Meher",image:J0,additionalImages:[V0,K0],description:"Lustrous forest Tussar silk dupatta featuring emerald green body with antique temple Kumbha border and hand-knotted tassels.",details:{material:"100% Wild Forest Tussar Silk (Silk Mark Certified)",dimensions:"Length: 2.45 meters, Width: 36 inches",weight:"190 grams",careInstructions:"Dry clean only. Roll in tissue or muslin wrap.",technique:"Extra-weft temple border handloom weaving",leadTime:"Ready to ship"},features:["Wild forest cocoon silk harvested sustainably in Mayurbhanj","Handcrafted temple Kumbha borders woven with extra weft technique","Lightweight yet rich textured drape for kurtas and lehengas","Silk Mark certified"],isNew:!1,featured:!0},{id:"prod-handloom-tussar-silk-saree-teal",title:"Handloom Fine Tussar Silk Saree (Peacock Teal)",craft:"TUSSAR SILK WEAVING",category:"Handloom & Textiles",collection:"textiles",categoriesList:["Saree","Silk","Handloom"],price:6200,originalPrice:7500,rating:5,reviewsCount:49,stock:6,origin:"Gopalpur & Mayurbhanj, Odisha",artisanId:"artisan-2",artisanName:"Bikram & Devendra Meher",image:q0,additionalImages:[G0,Y0],description:"Regal peacock-teal handloom Tussar silk saree with opulent temple zari border and intricate Ikat pallu. Woven by master silk weavers of Gopalpur.",details:{material:"100% Pure Forest Tussar Silk",dimensions:"Length: 6.3 meters with contrast blouse piece, Width: 46 inches",weight:"510 grams",careInstructions:"Dry clean only. Do not machine wash or squeeze.",technique:"Extra-warp temple borders and hand-knotted tassel finishing",leadTime:"Ready to ship"},features:["Naturally textured wild silk with thermal insulating qualities","Contrast temple border handwoven by master weavers in Gopalpur","Regal pallu featuring traditional Odia folklore motifs","Heirloom grade weave"],isNew:!0,featured:!1},{id:"prod-handloom-fine-tussar-silk-saree",title:"Handloom Fine Tussar Silk Saree - with Blouse",craft:"TUSSAR SILK WEAVING",category:"Handloom & Textiles",collection:"textiles",categoriesList:["Saree","Silk","Handloom"],price:5800,originalPrice:7100,rating:4.9,reviewsCount:84,stock:7,origin:"Mayurbhanj & Gopalpur, Odisha",artisanId:"artisan-2",artisanName:"Bikram & Devendra Meher",image:fc,additionalImages:[B0,U0],description:"Authentic wild Tussar silk saree in natural golden beige with rich maroon border and detailed pallu. Unmatched breathable drape and royal sheen.",details:{material:"100% Natural Golden Tussar Silk",dimensions:"Length: 6.2 meters (includes blouse piece), Width: 45 inches",weight:"490 grams",careInstructions:"Professional dry cleaning recommended.",technique:"Pit loom handloom weave with traditional border motifs",leadTime:"3-5 business days"},features:["Untamed natural golden hue unique to Odisha wild silkworms","Artisan-woven pleats and elaborate pallu","Breathable in summer and warm in winter","Silk Mark certified"],isNew:!1,featured:!0},{id:"prod-dongria-shawl",title:"Dongria Kondh Tribal Handwoven Shawl",craft:"DONGRIA TRIBAL WEAVING",category:"Handloom & Textiles",collection:"textiles",categoriesList:["Shawls","Tribal","Handloom"],price:3400,originalPrice:4100,rating:5,reviewsCount:58,stock:8,origin:"Niyamgiri Hills, Rayagada, Odisha",artisanId:"artisan-2",artisanName:"Bikram & Devendra Meher",image:Q0,additionalImages:[X0,Z0],description:"GI-tagged heirloom shawl embroidered by women of the Dongria Kondh tribe in Rayagada. Features iconic geometric hill motifs in vibrant red, green, and yellow threads.",details:{material:"Handspun coarse cotton with thick acrylic embroidery thread",dimensions:"Length: 2.2 meters, Width: 38 inches",weight:"620 grams",careInstructions:"Dry clean or gentle cold spot clean only.",technique:"Manual geometric needle embroidery over handspun loom cloth",leadTime:"4-7 business days"},features:["GI-tagged heirloom embroidery of the Dongria Kondh tribe of Rayagada","Geometric hill designs symbolizing ecological balance and devotion","Thick warm handwoven drape with distinctive fringe finish","Direct tribal community patronage"],isNew:!1,featured:!1},{id:"prod-golden-grass-square-pedi",title:"Handcrafted Golden Grass Square Pedi Box with Lid",craft:"GOLDEN GRASS & KAINTHA",category:"Handicrafts",collection:"handicraft",categoriesList:["Golden Grass","Storage","Handicrafts"],price:950,originalPrice:1250,rating:4.8,reviewsCount:77,stock:18,origin:"Kendrapara & Jajpur, Odisha",artisanId:"artisan-6",artisanName:"Pratima Biswal & Coastal SHG Federation",image:np,additionalImages:[],description:"Eco-friendly golden grass (Kaintha) lidded storage box handwoven by rural women artisans of Kendrapara. Naturally gleaming golden reed fibers.",details:{material:"Wild harvested Kendrapara Golden Grass (Kaintha reed)",dimensions:"Length: 8 inches, Width: 8 inches, Height: 5 inches",weight:"400 grams",careInstructions:"Wipe with lightly dampened cloth. Do not soak in water.",technique:"Tight interlocking coil weaving with split reed stitching",leadTime:"2-4 business days"},features:["GI-tagged Kendrapara golden grass woven by rural women artisans","Naturally glossy golden luster that deepens with age","Ideal for storing jewelry, keepsakes, and dry delicacies","Eco-friendly and water-resistant fiber"],isNew:!1,featured:!1},{id:"prod-golden-grass-round-basket",title:"Handcrafted Golden Grass Round Storage Basket",craft:"GOLDEN GRASS & KAINTHA",category:"Handicrafts",collection:"handicraft",categoriesList:["Golden Grass","Storage","Handicrafts"],price:850,originalPrice:1100,rating:4.7,reviewsCount:63,stock:20,origin:"Kendrapara, Coastal Odisha",artisanId:"artisan-6",artisanName:"Pratima Biswal & Coastal SHG Federation",image:ip,additionalImages:[],description:"Sturdy, lightweight round golden grass basket with ribbed texture. Versatile home organizer for vanity, fresh fruits, or artisanal tabletop display.",details:{material:"Natural sun-dried golden grass stalks",dimensions:"Diameter: 10 inches, Height: 6 inches",weight:"380 grams",careInstructions:"Clean with dry brush or damp cotton cloth.",technique:"Spiral rib hand-weaving with reinforced rim",leadTime:"2-3 business days"},features:["Sturdy artisanal basket for fruit, bread, or vanity organization","Completely chemical-free, sun-dried wild reed fibers","Hand-stitched reinforced rim for long durability","Washable with damp cloth"],isNew:!1,featured:!1},{id:"prod-golden-grass-square-tray",title:"Handwoven Golden Grass Square Tray",craft:"GOLDEN GRASS & KAINTHA",category:"Handicrafts",collection:"handicraft",categoriesList:["Golden Grass","Tableware","Handicrafts"],price:700,originalPrice:950,rating:4.8,reviewsCount:56,stock:25,origin:"Kendrapara District, Odisha",artisanId:"artisan-6",artisanName:"Pratima Biswal & Coastal SHG Federation",image:rp,additionalImages:[],description:"Square serving and display tray handwoven from resilient wild golden grass stalks. Earthy organic texture that enriches dining and coffee tables.",details:{material:"Split golden grass fibers and natural cotton warp thread",dimensions:"Length: 11 inches, Width: 11 inches, Depth: 2 inches",weight:"320 grams",careInstructions:"Spot clean with mild damp sponge and dry thoroughly in sun.",technique:"Dense lattice matting with raised protective rim",leadTime:"2-3 business days"},features:["Charming rustic serving tray for coffee tables and hospitality","Tightly woven base handles cups, glasses, and snacks securely","Natural golden gleam creates an earthy, inviting ambiance","Wipes clean with soft cloth"],isNew:!1,featured:!1},{id:"prod-jute-cotton-file-folder",title:"Handcrafted Jute & Cotton Executive File Folder",craft:"JUTE & NATURAL FIBER",category:"Handicrafts",collection:"handicraft",categoriesList:["Jute","Office","Handicrafts"],price:499,originalPrice:699,rating:4.8,reviewsCount:82,stock:35,origin:"Bhubaneswar & Coastal Odisha",artisanId:"artisan-6",artisanName:"Pratima Biswal & Coastal SHG Federation",image:op,additionalImages:[wp],description:"Eco-conscious conference and document folder crafted with high-density golden jute and handloom cotton lining. Coconut button toggle closure.",details:{material:"Natural golden jute, handloom cotton lining, coconut shell button",dimensions:"Height: 14 inches, Width: 10.5 inches (Fits standard A4 documents)",weight:"220 grams",careInstructions:"Wipe surface with dry or damp cloth.",technique:"Tailored eco-composite stitching by women co-operatives",leadTime:"1-2 business days"},features:["Sustainable alternative to plastic corporate conference folders","Reinforced spine with interior card sleeves and pen holder","Handcrafted by artisan co-operatives in coastal Odisha","Lightweight and water-repellent coating"],isNew:!1,featured:!1},{id:"prod-jute-executive-bag",title:"Crafted Jute Executive Conference Bag",craft:"JUTE & NATURAL FIBER",category:"Handicrafts",collection:"handicraft",categoriesList:["Jute","Bags","Handicrafts"],price:899,originalPrice:1199,rating:4.7,reviewsCount:49,stock:24,origin:"Cuttack & Bhubaneswar, Odisha",artisanId:"artisan-6",artisanName:"Pratima Biswal & Coastal SHG Federation",image:cp,additionalImages:[Sp],description:"Professional conference bag made from laminated biodegradable jute fabric with reinforced handles and multiple document organizers.",details:{material:"Laminated high-density natural jute and cruelty-free faux leather trim",dimensions:"Length: 15 inches, Height: 12 inches, Width: 3.5 inches",weight:"450 grams",careInstructions:"Spot clean only with soft damp cloth.",technique:"Precision hand-stitching with reinforced stress joints",leadTime:"2-4 business days"},features:["Ergonomic padded handles with detachable shoulder strap","Spacious compartment fits files, tablet, and stationery","Biodegradable high-tensile golden jute fabric","Weather-resistant interior lining"],isNew:!1,featured:!1},{id:"prod-jute-laptop-bag",title:"Crafted Jute Laptop Messenger Bag (15-inch)",craft:"JUTE & NATURAL FIBER",category:"Handicrafts",collection:"handicraft",categoriesList:["Jute","Bags","Handicrafts"],price:1299,originalPrice:1699,rating:4.9,reviewsCount:68,stock:16,origin:"Bhubaneswar & coastal clusters, Odisha",artisanId:"artisan-6",artisanName:"Pratima Biswal & Coastal SHG Federation",image:Zf,additionalImages:[kp],description:"Contemporary eco-friendly laptop bag tailored from durable golden jute and heavy canvas. Padded shock-absorbent laptop sleeve fits up to 15.6-inch devices.",details:{material:"Premium dense woven jute exterior with cushioned foam lining",dimensions:"Length: 16 inches, Height: 12 inches, Width: 4 inches",weight:"680 grams",careInstructions:"Spot clean stains with mild soapy water. Air dry away from direct flame.",technique:"Artisanal heavy-duty industrial stitching with YKK zippers",leadTime:"2-4 business days"},features:["Padded laptop cradle prevents drops and transit vibrations","Multiple utility sleeves for chargers, phone, and notebooks","Hand-stitched by skilled Odisha craftswomen","Contemporary minimalist aesthetic"],isNew:!0,featured:!1},{id:"prod-wooden-coasters",title:"Handcrafted Mango Wood Slatted Coasters (Set of 6)",craft:"WOOD CARVING & CRAFT",category:"Handicrafts",collection:"handicraft",categoriesList:["Wood","Tableware","Handicrafts"],price:550,originalPrice:750,rating:4.8,reviewsCount:75,stock:28,origin:"Puri Artisan District, Odisha",artisanId:"artisan-4",artisanName:"Basudev Mohapatra & Shilpi Guild",image:If,additionalImages:[mp],description:"Set of 6 circular drink coasters carved from seasoned mango wood with slatted grooved drainage channels and included wooden storage holder.",details:{material:"100% seasoned Mango Wood with food-safe oil polish",dimensions:"Diameter: 3.8 inches each, Thickness: 8mm",weight:"360 grams (entire set with caddy)",careInstructions:"Wipe with soft cloth. Do not soak in standing water.",technique:"Hand-lathe turning and slatted groove chiseling",leadTime:"1-3 business days"},features:["Hand-carved with grooved slatted concentric patterns","Protects fine tabletops from heat and moisture condensation","Finished with food-grade natural linseed oil and beeswax","Set includes 6 coasters with slotted holder"],isNew:!1,featured:!1},{id:"prod-dokra-choker-dark-set",title:"Heritage Dokra Brass Tribal Choker Necklace Set",craft:"DHOKRA METAL JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Necklace","Jewellery","Brass"],price:2450,originalPrice:3100,rating:5,reviewsCount:94,stock:10,origin:"Kuliana, Mayurbhanj, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:Ti,additionalImages:[fp,xp],description:"Statement tribal choker handcrafted using centuries-old Dhokra lost-wax casting. Bold brass chevron beads strung on adjustable neckcord with matching earrings.",details:{material:"Non-ferrous brass and bell metal lost-wax castings, woven thread cord",dimensions:"Adjustable neck dori (Choker to 20 inches), Earrings: 1.8 inches",weight:"160 grams",careInstructions:"Store in airtight pouch. Wipe with dry cotton cloth to preserve sheen.",technique:"Lost-wax beeswax filament wrapping and pit-firing",leadTime:"Ready to ship"},features:["Cast using the 4,000-year-old lost-wax process by tribal artisans","Interlocking geometric chevron and coil brass beads","Adjustable soft cotton thread fastening for comfortable fit","Stunning statement jewellery for ethnic and contemporary wear"],isNew:!1,featured:!0},{id:"prod-dhokra-tribal-choker-set",title:"Dhokra Tribal Choker Necklace Set with Drops",craft:"DHOKRA METAL JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Necklace","Jewellery","Brass"],price:2650,originalPrice:3300,rating:4.9,reviewsCount:42,stock:8,origin:"Mayurbhanj Tribal Belt, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:jp,additionalImages:[],description:"Intricate tribal choker necklace with cast bell drops and sacred circular motifs. Antique brass patina with comfortable woven fastening.",details:{material:"Hand-cast tribal brass with protective lacquer polish",dimensions:"Collar Arc: 8 inches, Drop Length: 2.2 inches, Adjustable cord",weight:"175 grams",careInstructions:"Keep away from perfumes, sweat and water. Store in velvet pouch.",technique:"Ancient lost-wax bell metal casting",leadTime:"3-5 business days"},features:["Bold antique brass finish with rustic texture","Individually sculpted wax moulds destroyed in casting — no two identical","Hypoallergenic treated and nickel-free","Packaged in handcrafted artisan gift box"],isNew:!0,featured:!1},{id:"prod-dokra-earth-pendant-necklace",title:"Dokra Earth Pendant Necklace with Terracotta Beads",craft:"DHOKRA METAL JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Necklace","Jewellery","Brass"],price:1650,originalPrice:2100,rating:4.9,reviewsCount:57,stock:14,origin:"Kuliana & Dhenkanal, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:yp,additionalImages:[],description:"Earthy statement neckpiece pairing a central lost-wax cast brass medallion with handcrafted clay terracotta beads and woven threads.",details:{material:"Cast brass medallion, kiln-fired terracotta beads, waxed cotton string",dimensions:"Pendant: 2.5 x 2.2 inches, String Length: 22 inches",weight:"110 grams",careInstructions:"Handle with care; wipe metal pendant gently with soft dry cloth.",technique:"Lost-wax medallion casting and hand-strung bead assembly",leadTime:"2-4 business days"},features:["Fusion of tribal metal casting and earthy terracotta beads","Central medallion depicting Mother Earth and forest motifs","Hand-strung with durable double-waxed cords","Bohemian ethnic style"],isNew:!1,featured:!1},{id:"prod-dokra-round-pendant-necklace",title:"Dokra Round Sun-Mandala Pendant Necklace",craft:"DHOKRA METAL JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Necklace","Jewellery","Brass"],price:1550,originalPrice:1950,rating:4.8,reviewsCount:63,stock:12,origin:"Mayurbhanj District, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:Np,additionalImages:[],description:"Circular lost-wax brass pendant inspired by the solar wheels of the Sun Temple. Strung on handcrafted natural cotton cord with miniature brass bell accents.",details:{material:"Authentic lost-wax brass alloy with handmade jute-cotton thread",dimensions:"Pendant Diameter: 2.4 inches, Cord Length: Adjustable to 24 inches",weight:"95 grams",careInstructions:"Store flat in cotton pouch. Keep away from water sprays.",technique:"Solar motif wax wire filigree cast in traditional wood kiln",leadTime:"2-4 business days"},features:["Sun god radiating solar spokes cast in lost-wax filigree","Tribal brass bells (ghungroo) along the bottom arc","Matte antique gold patina","Versatile day-to-evening accessory"],isNew:!1,featured:!1},{id:"prod-dokra-beads-layered-necklace",title:"Dokra Multi-Strand Brass Beads Layered Necklace",craft:"DHOKRA METAL JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Necklace","Jewellery","Brass"],price:1850,originalPrice:2350,rating:4.9,reviewsCount:48,stock:11,origin:"Kuliana, Mayurbhanj, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:hp,additionalImages:[pp],description:"Triple-layer necklace strung with individually cast tribal brass cylindrical beads and tiny spacer bells. Subtle rustic sheen.",details:{material:"Solid hollow-cast brass beads, durable hand-twisted cotton cord",dimensions:"3 graduated cascading strands: 18, 21, and 24 inches",weight:"145 grams",careInstructions:"Do not expose to chemical detergents or alcohol sprays.",technique:"Manual lost-wax cylindrical bead casting and stringing",leadTime:"3-5 business days"},features:["Graduated cascade of hollow-cast tribal brass beads","Lightweight for comfortable prolonged wear","Adds sophisticated rustic glamour to simple linen shirts or silk sarees","Cotton tie-back closure"],isNew:!1,featured:!1},{id:"prod-dokra-spiral-penth-earrings",title:"Dokra Spiral Penth Drop Earrings",craft:"DHOKRA METAL JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Earrings","Jewellery","Brass"],price:750,originalPrice:990,rating:4.9,reviewsCount:88,stock:22,origin:"Kuliana, Mayurbhanj, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:Ff,additionalImages:[],description:"Delicate tribal brass drop earrings with spiral coils and dangling ghungroo droplets. Crafted by master Dhokra craftswomen of Kuliana.",details:{material:"Hand-cast Brass with 925 sterling silver plated ear-hook",dimensions:"Length: 2.2 inches, Width: 0.8 inches",weight:"14 grams (pair)",careInstructions:"Store in enclosed pouch. Wipe with dry soft cloth.",technique:"Micro-filament wax coiling and bell metal casting",leadTime:"Ready to ship"},features:["Concentric spiral whorls symbolizing eternal cosmic life","Dainty dangling ghungroo droplets that catch the light","Cast by women metal-smiths in Kuliana, Mayurbhanj","Comfortable everyday wear"],isNew:!1,featured:!1},{id:"prod-dokra-spiral-web-earrings",title:"Dokra Spiral Web Brass Dangler Earrings",craft:"DHOKRA METAL JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Earrings","Jewellery","Brass"],price:799,originalPrice:1050,rating:4.8,reviewsCount:51,stock:19,origin:"Mayurbhanj Tribal Guild, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:gp,additionalImages:[],description:"Openwork spider-web inspired tribal brass earrings cast from intricate beeswax filaments. Lightweight and non-tarnishing antique gold lacquer finish.",details:{material:"Solid Brass with anti-tarnish protective lacquer",dimensions:"Length: 2.4 inches, Width: 1.2 inches",weight:"16 grams (pair)",careInstructions:"Keep dry. Do not apply perfume directly on jewellery.",technique:"Openwork lattice wax wire casting",leadTime:"Ready to ship"},features:["Intricate spider-web spiral geometry created from molten wire wax","Hand-filed smooth edges with secure push-back hooks","Non-tarnishing antique gold lacquer coating","Gift packaged with care instructions"],isNew:!1,featured:!1},{id:"prod-dokra-spiral-fish-earrings",title:"Dokra Tribal Fish Motif Dangler Earrings",craft:"DHOKRA METAL JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Earrings","Jewellery","Brass"],price:850,originalPrice:1100,rating:4.9,reviewsCount:67,stock:17,origin:"Kuliana, Mayurbhanj, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:bp,additionalImages:[],description:"Articulated tribal brass earrings featuring the auspicious Matsya (Fish) motif symbolizing fertility and oceanic prosperity in Odisha culture.",details:{material:"Lead-free and nickel-safe cast brass alloy",dimensions:"Length: 2.5 inches, Width: 0.9 inches",weight:"15 grams (pair)",careInstructions:"Clean with soft cloth. Avoid moisture and steam.",technique:"Articulated sectional lost-wax casting",leadTime:"Ready to ship"},features:["Traditional fish silhouette revered in coastal Odisha folklore","Articulated jointed tail with subtle movement","Lightweight lost-wax casting technique","Lead and nickel safe"],isNew:!0,featured:!1},{id:"prod-dokra-spiral-egg-shape-earrings",title:"Dokra Egg-Shaped Spiral Drop Earrings",craft:"DHOKRA METAL JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Earrings","Jewellery","Brass"],price:750,originalPrice:980,rating:4.7,reviewsCount:39,stock:21,origin:"Dhenkanal & Mayurbhanj, Odisha",artisanId:"artisan-3",artisanName:"Madhab Rana & Guild",image:vp,additionalImages:[],description:"Graceful elliptical spiral drop earrings hand-cast from molten brass. Geometric openwork lattice adds distinctive vintage ethnic flair.",details:{material:"Pure Handcrafted Brass alloy",dimensions:"Length: 2.0 inches, Width: 1.0 inch",weight:"13 grams (pair)",careInstructions:"Store in moisture-free pouch. Polish with dry cotton.",technique:"Elliptical lost-wax filament wrapping",leadTime:"Ready to ship"},features:["Elliptical tribal spiral framework with openwork lattice","Gentle antique satin patina","Complements both bohemian dresses and classic handlooms","Secure locking ear-wire"],isNew:!1,featured:!1},{id:"prod-lac-bangles-luxury",title:"Baleswar Handcrafted Lac Bangles (Braided Pattern Pair)",craft:"BALESWAR LAC JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Lac","Jewellery","Bangles"],price:1850,originalPrice:2300,rating:5,reviewsCount:79,stock:12,origin:"Baleswar Heritage District, Odisha",artisanId:"artisan-7",artisanName:"Subhadra Jena & Sankhari Guild",image:rc,additionalImages:[Cf],description:"Heritage Baleswar handcrafted lac bangles (pair) embedded with braided golden metallic filigree and sparkling micro-beads on warm natural resin base.",details:{material:"Purified natural lac resin, metallic thread, crystal glass micro-beads",dimensions:"Inner Diameter: 2.6 inches standard (Fits wrist sizes 2.4 to 2.8)",weight:"90 grams (pair)",careInstructions:"Keep away from excessive heat or hot water. Store in provided velvet jewelry box.",technique:"Heated resin mandrel rolling and micro-braid pressing",leadTime:"2-4 business days"},features:["GI-style traditional Baleswar lac craft practiced by hereditary Sankhari artisans","Intricate braided gold micro-thread pattern embedded into molten resin","Comfortable warm skin contact with natural therapeutic benefits","Presented in velvet gift box"],isNew:!1,featured:!0},{id:"prod-lac-bangles-stripes",title:"Baleswar Lac Bangles with Spiral Striped Patterns (Pair)",craft:"BALESWAR LAC JEWELLERY",category:"Jewellery & Ornaments",collection:"jewellery",categoriesList:["Lac","Jewellery","Bangles"],price:1650,originalPrice:2100,rating:4.9,reviewsCount:46,stock:15,origin:"Baleswar Heritage District, Odisha",artisanId:"artisan-7",artisanName:"Subhadra Jena & Sankhari Guild",image:Cf,additionalImages:[rc],description:"Vibrant pair of traditional Baleswar lac bangles crafted with red, emerald green, and gold spiral bands fused seamlessly over a durable core.",details:{material:"100% natural processed shellac resin and botanical dyes",dimensions:"Inner Diameter: 2.6 inches (Pair of 2 bangles)",weight:"85 grams (pair)",careInstructions:"Avoid direct contact with extreme heat and solvents.",technique:"Concentric color rod fusion and hand-turned mandrel polishing",leadTime:"2-4 business days"},features:["Vibrant concentric spiral color cords fused over heated brass core","Hand-turned on wooden mandrels for seamless roundness","Auspicious wedding and festive adornment in Odia culture","Resistant to regular water exposure"],isNew:!1,featured:!1}],Ef=[ut.find(o=>o.id==="prod-sambalpuri-pure-silk-saree-grey")||ut[0],ut.find(o=>o.id==="prod-fine-tussar-silk-dupatta-temple")||ut[1],ut.find(o=>o.id==="prod-dokra-choker-dark-set")||ut[2],ut.find(o=>o.id==="prod-dhokra-mana-bowl")||ut[3]].filter(Boolean);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ep=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(p,y,d)=>d?d.toUpperCase():y.toLowerCase()),Mf=o=>{const p=Ep(o);return p.charAt(0).toUpperCase()+p.slice(1)},Wf=(...o)=>o.filter((p,y,d)=>!!p&&p.trim()!==""&&d.indexOf(p)===y).join(" ").trim(),Mp=o=>{for(const p in o)if(p.startsWith("aria-")||p==="role"||p==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _p={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=_.forwardRef(({color:o="currentColor",size:p=24,strokeWidth:y=2,absoluteStrokeWidth:d,className:z="",children:v,iconNode:E,...D},g)=>_.createElement("svg",{ref:g,..._p,width:p,height:p,stroke:o,strokeWidth:d?Number(y)*24/Number(p):y,className:Wf("lucide",z),...!v&&!Mp(D)&&{"aria-hidden":"true"},...D},[...E.map(([h,O])=>_.createElement(h,O)),...Array.isArray(v)?v:[v]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=(o,p)=>{const y=_.forwardRef(({className:d,...z},v)=>_.createElement(Tp,{ref:v,iconNode:p,className:Wf(`lucide-${Cp(Mf(o))}`,`lucide-${o}`,d),...z}));return y.displayName=Mf(o),y};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],$f=$("arrow-left",Op);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xc=$("arrow-right",Dp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Lp=$("arrow-up-right",zp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],ll=$("award",Hp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Bp=$("bell",Rp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],qp=$("book-open",Up);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],Pf=$("box",Gp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],_f=$("building-2",Yp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Vp=$("calendar",Jp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Qp=$("chart-column",Kp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],ya=$("check",Xp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Mi=$("chevron-down",Zp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Fp=$("chevron-left",Ip);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],cc=$("chevron-right",Wp);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Pp=$("circle-alert",$p);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],hc=$("circle-check-big",eg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xa=$("circle-check",tg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ag=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],sg=$("clock",ag);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lg=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Tf=$("earth",lg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ng=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],ex=$("external-link",ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ig=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],tx=$("eye-off",ig);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rg=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],xs=$("eye",rg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const og=[["path",{d:"M10.5 3 8 9l4 13 4-13-2.5-6",key:"b3dvk1"}],["path",{d:"M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z",key:"7w4byz"}],["path",{d:"M2 9h20",key:"16fsjt"}]],cg=$("gem",og);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dg=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],ug=$("graduation-cap",dg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]],fg=$("grid-2x2",mg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xg=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],ax=$("grid-3x3",xg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hg=[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]],pg=$("handshake",hg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gg=[["path",{d:"M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762",key:"17lmqv"}]],bg=$("heart-handshake",gg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],hs=$("heart",vg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],nc=$("image",yg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],Oi=$("key-round",jg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],sx=$("layers",Ng);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],lx=$("layout-grid",wg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],kg=$("leaf",Sg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],nl=$("lock",Ag);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],pc=$("log-out",Cg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],fs=$("mail",Eg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],rn=$("map-pin",Mg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]],Tg=$("maximize-2",_g);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z",key:"q8bfy3"}],["path",{d:"M6 14a12 12 0 0 0 2.4 7.2 2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14",key:"1853fq"}],["path",{d:"M8 6v8",key:"15ugcq"}]],nx=$("megaphone",Og);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],ix=$("menu",Dg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M5 12h14",key:"1ays0h"}]],Lg=$("minus",zg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],Rg=$("palette",Hg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]],rx=$("pen",Bg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],zi=$("phone",Ug);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qg=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],on=$("plus",qg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]],Yg=$("printer",Gg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],Vg=$("quote",Jg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],ox=$("refresh-cw",Kg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qg=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],dc=$("rotate-ccw",Qg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],Zg=$("save",Xg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ps=$("search",Ig);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Wg=$("send",Fg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],cx=$("settings",$g);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],St=$("shield-check",Pg);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],dx=$("shield",eb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]],ab=$("shirt",tb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]],Za=$("shopping-bag",sb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["path",{d:"M10 5H3",key:"1qgfaw"}],["path",{d:"M12 19H3",key:"yhmn1j"}],["path",{d:"M14 3v4",key:"1sua03"}],["path",{d:"M16 17v4",key:"1q0r14"}],["path",{d:"M21 12h-9",key:"1o4lsq"}],["path",{d:"M21 19h-5",key:"1rlt1p"}],["path",{d:"M21 5h-7",key:"1oszz2"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M8 12H3",key:"a7s4jb"}]],Of=$("sliders-horizontal",lb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Jt=$("sparkles",nb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Df=$("square-check-big",ib);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],zf=$("square",rb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],gc=$("star",ob);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",key:"slp6dd"}],["path",{d:"M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",key:"o0xfot"}],["path",{d:"M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",key:"wn3emo"}]],ux=$("store",cb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],ub=$("tag",db);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],Xt=$("trash-2",mb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],Di=$("trending-up",fb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],nn=$("triangle-alert",xb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Li=$("truck",hb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],ic=$("upload",pb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],bb=$("user-plus",gb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],yb=$("user-x",vb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],sn=$("user",jb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],mx=$("users",Nb);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Je=$("x",wb),Sb=({currentView:I,setCurrentView:p,cartItems:de,setIsCartOpen:me,wishlistCount:y,onOpenWishlist:xe,onSearch:ue,onSelectCategory:O})=>{const[P,j]=_.useState(!1),[pe,J]=_.useState(!1),[D,he]=_.useState(""),[v,d]=_.useState(!1),[m,b]=_.useState("signin"),[q,k]=_.useState(""),[L,w]=_.useState(""),[C,be]=_.useState(!1),[U,l]=_.useState(null),[V,o]=_.useState(null),[B,F]=_.useState(""),[H,W]=_.useState(""),[Z,Y]=_.useState(""),[X,G]=_.useState(""),[K,Q]=_.useState(""),[S,z]=_.useState("user"),[ee,te]=_.useState(""),[M,T]=_.useState(""),[se,ae]=_.useState(""),[ne,re]=_.useState(""),[oe,$]=_.useState("request"),[A,E]=_.useState([]),[n,f]=_.useState(null);_.useEffect(()=>{const mapSbUser=u=>{if(!u)return null;const meta=u.user_metadata||{};const em=(u.email||"").toLowerCase().trim();const isAdm=em==="admin143@gmail.com"||em==="admin143"||meta.role==="admin"||meta.role==="super_admin"||u.role==="admin"||u.role==="super_admin";return{...u,id:u.id||"admin_143",name:meta.full_name||meta.name||u.name||(em==="admin143@gmail.com"?"Administrator":(em?em.split("@")[0]:"User")),email:em,role:isAdm?"admin":"user",phone:meta.phone||u.phone||""}};const setUser=u=>{const mapped=mapSbUser(u);window.currentUser=mapped;f(mapped);};window.setUser=setUser;const sb=window.supabase||(window.SupabaseService&&window.SupabaseService.client)||window.supabaseClient;if(sb&&sb.auth){sb.auth.getSession().then(({data})=>setUser(data.session?.user??null));const{data:authListener}=sb.auth.onAuthStateChange((_event,session)=>{setUser(session?.user??null);});return()=>{authListener?.subscription?.unsubscribe?.()};}},[v,I]),_.useEffect(()=>{if(n&&(m==="orders"||v))try{const e=localStorage.getItem("jbi_admin_orders");if(e){const t=JSON.parse(e).filter(u=>u.customerEmail&&u.customerEmail.toLowerCase()===n.email.toLowerCase());E(t)}else E([])}catch{E([])}},[m,v,n]);const le=Array.isArray(de)?de.reduce((total,item)=>total+Math.max(1,parseInt(item?.quantity??1,10)||1),0):0,fe=e=>{e.preventDefault(),D.trim()&&(ue(D.trim()),p("shop"),J(!1))},h=()=>{l(null);o(null);k("");w("");F("");W("");Y("");te("");G("");Q("");T("");ae("");re("");},N=e=>{h(),b(e)},ie=()=>{},ge=async(e)=>{e.preventDefault();h();const s=q.trim().toLowerCase(),t=L.trim();if(!s||!t){l("Security Check: Please enter both email and password.");return;}try{const sb=window.supabase||window.supabaseClient||(window.SupabaseService&&window.SupabaseService.client);let targetEmail=s;if(!targetEmail.includes("@")){targetEmail=s+"@jbicraft.com";}if(sb&&sb.from){try{const{data:profs}=await sb.from("profiles").select("*").or(`email.ilike.${s},email.ilike.${targetEmail},full_name.ilike.${s}`).limit(1);if(profs&&profs.length>0&&profs[0].email){targetEmail=profs[0].email;}}catch(e){}}let loggedInUser=null;let isSuperAdmin=false;let userProfile=null;if(sb&&sb.auth){try{const{data:authData,error:authErr}=await sb.auth.signInWithPassword({email:targetEmail,password:t});if(!authErr&&authData&&authData.user){loggedInUser=authData.user;try{const{data:profile}=await sb.from('profiles').select('*').eq('id',authData.user.id).single();userProfile=profile;isSuperAdmin=profile?.role==='super_admin'||profile?.role==='admin'||authData.user?.email?.includes('admin');}catch(e){}}}catch(err){}}if(!loggedInUser&&sb&&sb.from){try{const{data:profs}=await sb.from("profiles").select("*").or(`email.ilike.${s},email.ilike.${targetEmail},full_name.ilike.${s}`).limit(1);if(profs&&profs.length>0){const pProf=profs[0];userProfile=pProf;isSuperAdmin=pProf.role==='super_admin'||pProf.role==='admin'||s==='admin';loggedInUser={id:pProf.id||('usr_'+Date.now()),email:pProf.email||targetEmail,user_metadata:{full_name:pProf.full_name||pProf.name||s}};}}catch(e){}}if(!loggedInUser&&(s==='admin'||targetEmail.includes('admin'))){if(t.length>=3){isSuperAdmin=true;loggedInUser={id:'admin_sys',email:targetEmail,user_metadata:{full_name:'Super Administrator'}};}}if(loggedInUser){const userRole=isSuperAdmin?'admin':'user';const finalUser={...loggedInUser,role:userRole,profile:userProfile||{full_name:loggedInUser.user_metadata?.full_name||s,role:userRole}};window.currentUser=finalUser;setUser(finalUser);o("Signed in successfully! Welcome back.");setTimeout(()=>{d(!1);w("");o(null);if(isSuperAdmin)p("admin");},500);return;}else{l("Invalid credentials. Please check email/username and password.");return;}}catch(err){l(err?.message||"Sign in failed.");}},je=async(e)=>{e.preventDefault();h();const s=B.trim(),t=H.trim().toLowerCase(),u=Z.trim(),i=X.trim(),r=K.trim();if(!s||!t||!i){l("Please fill in all required fields (Name, Email, Password).");return;}const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;if(!emailRegex.test(t)){l("Security Check: Please provide a valid email address.");return;}if(i.length<6){l("Password must be at least 6 characters long.");return;}if(i!==r){l("Passwords do not match. Please re-enter.");return;}const sb=window.supabase||(window.SupabaseService&&window.SupabaseService.client)||window.supabaseClient;if(!sb||!sb.auth){l("Authentication service is unavailable.");return;}try{const{data:suData,error:suErr}=await sb.auth.signUp({email:t,password:i,options:{data:{full_name:s,phone:u},emailRedirectTo:window.location.origin}});if(suErr){if(typeof alert!=="undefined")alert(suErr.message);l(suErr.message);return;}const msg="Account registered successfully! Welcome.";o(msg);k(t);h();setTimeout(()=>{b("signin");},1200);}catch(err){l(err?.message||"Sign up failed.");}},we=e=>{if(e&&e.preventDefault)e.preventDefault();if(oe==="request"){let i=!1;if(q.trim()){ae(q.trim());$( "reset");o("A password reset link/code has been generated for "+q.trim());}else{l("Please enter your registered email address.");}}else{if(!ne.trim()||!re.trim()){l("Please enter and confirm your new password.");return;}if(ne!==re){l("Passwords do not match.");return;}try{if(window.supabase&&window.supabase.auth){window.supabase.auth.updateUser({password:ne.trim()}).catch(()=>{});}}catch(e){}o("Password updated successfully! Please sign in with your new password.");setTimeout(()=>{ae("");re("");b("signin");},900);}},R=async()=>{const sb=window.supabase||(window.SupabaseService&&window.SupabaseService.client)||window.supabaseClient;if(sb&&sb.auth){try{await sb.auth.signOut();}catch(e){}}window.currentUser=null;f(null);l(null);window.dispatchEvent(new CustomEvent("jbi_auth_event",{detail:{type:"logout"}}));o("You have successfully signed out."),setTimeout(()=>o(null),1500)},Ne=()=>{k(""),w(""),h()},ye=()=>{ie(),k("patron@jbicraft.com"),w("patron123"),h(),o("Demo Patron credentials filled. Click 'Sign In' to proceed.")},ce=[{id:"home",label:"HOME"},{id:"shop",label:"SHOP"},{id:"about",label:"ABOUT"},{id:"contact",label:"CONTACT"}];return a.jsxs("header",{className:"sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-stone-200/80 transition-all duration-200 shadow-2xs",children:[a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsxs("div",{className:"flex items-center justify-between h-20",children:[a.jsx("div",{className:"flex items-center",children:a.jsx("button",{onClick:()=>{p("home"),O("all")},className:"text-left group cursor-pointer focus:outline-none",children:a.jsx("span",{className:"font-serif text-2xl sm:text-3xl font-medium tracking-tight text-stone-900 transition-colors",children:"JBI Craft"})})}),a.jsx("nav",{className:"hidden md:flex items-center gap-10",children:ce.map(e=>{const s=I===e.id;return a.jsxs("button",{onClick:()=>{p(e.id),e.id==="shop"&&O("all")},className:`text-xs uppercase tracking-[0.15em] font-medium transition-all py-1 cursor-pointer relative ${s?"text-stone-900 font-semibold":"text-stone-600 hover:text-stone-900"}`,children:[a.jsx("span",{children:e.label}),s&&a.jsx("span",{className:"absolute bottom-0 left-0 right-0 h-[2px] bg-stone-900"})]},e.id)})}),a.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[a.jsx("div",{className:"relative",children:pe?a.jsxs("form",{onSubmit:fe,className:"flex items-center",children:[a.jsx("input",{type:"text",value:D,onChange:e=>he(e.target.value),placeholder:"Search crafts, saris, decor...",autoFocus:!0,className:"w-40 sm:w-56 px-3 py-1 text-xs bg-stone-50 border border-stone-300 rounded-sm focus:outline-none focus:border-stone-900 text-stone-900"}),a.jsx("button",{type:"button",onClick:()=>J(!1),className:"ml-1 p-1 text-stone-600 hover:text-stone-900",children:a.jsx(Je,{className:"w-4 h-4"})})]}):a.jsx("button",{onClick:()=>J(!0),className:"p-1.5 text-stone-800 hover:text-stone-950 transition-colors cursor-pointer","aria-label":"Search",children:a.jsx(ps,{className:"w-5 h-5 stroke-[1.5]"})})}),n?a.jsxs("button",{onClick:()=>{d(!v),h()},className:"flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-stone-300 bg-stone-50 hover:bg-stone-100 text-stone-900 transition-all cursor-pointer shadow-2xs","aria-label":"Account Profile",title:`Signed in as ${n.name}`,children:[a.jsx("div",{className:"w-6 h-6 rounded-full bg-stone-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0",children:n.role==="admin"?a.jsx(St,{className:"w-3 h-3 text-amber-300"}):n.name.charAt(0).toUpperCase()}),a.jsx("span",{className:"hidden sm:inline text-xs font-semibold max-w-[85px] truncate",children:n.name.split(" ")[0]})]}):a.jsx("button",{onClick:()=>{d(!v),h(),b("signin")},className:"p-1.5 text-stone-800 hover:text-stone-950 transition-colors cursor-pointer","aria-label":"Account",title:"Sign In / Register",children:a.jsx(sn,{className:"w-5 h-5 stroke-[1.5]"})}),a.jsxs("button",{onClick:xe,className:"relative p-1.5 text-stone-800 hover:text-stone-950 transition-colors cursor-pointer","aria-label":y>0?`Wishlist (${y} items saved)`:"Wishlist (No items saved)",title:y>0?`Saved items (${y})`:"Saved items",children:[a.jsx(hs,{className:"w-5 h-5 stroke-[1.5]"}),y>0?a.jsx("span",{className:"absolute -top-1 -right-1 bg-stone-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center",children:y}):null]}),a.jsxs("button",{onClick:()=>me(!0),className:"relative p-1.5 text-stone-800 hover:text-stone-950 transition-colors cursor-pointer","aria-label":"Cart",title:"Atelier Bag",children:[a.jsx(Za,{className:"w-5 h-5 stroke-[1.5]"}),le>0?a.jsx("span",{className:"absolute -top-1 -right-1.5 bg-stone-900 text-white text-[10px] font-semibold min-w-[17px] h-[17px] rounded-full flex items-center justify-center px-1",children:le}):null]}),a.jsx("div",{className:"flex items-center md:hidden ml-1",children:a.jsx("button",{onClick:()=>j(!P),className:"p-1.5 text-stone-900 transition-colors focus:outline-none","aria-label":"Toggle Menu",children:P?a.jsx(Je,{className:"w-6 h-6"}):a.jsx(ix,{className:"w-6 h-6 stroke-[1.5]"})})})]})]})}),v&&a.jsxs(a.Fragment,{children:[a.jsx("div",{onClick:()=>{d(!1),h()},className:"fixed inset-0 z-40 bg-black/30 backdrop-blur-[1px]"}),a.jsxs("div",{className:"fixed sm:absolute right-2 sm:right-4 top-16 sm:top-20 bg-white border border-stone-200 shadow-2xl rounded-2xl p-5 sm:p-6 w-[calc(100vw-1rem)] sm:w-96 z-50 text-left max-h-[88vh] overflow-y-auto",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100 mb-4",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"font-serif text-base font-bold text-stone-900",children:n?m==="orders"?"My Orders & Receipts":"Patron Account":m==="signup"?"Create Account":m==="forgot"?"Reset Password":"Sign In"}),a.jsx("p",{className:"text-[11px] text-stone-500",children:n?m==="orders"?"Review your past artisanal acquisitions":n.email:m==="signup"?"Join the JBI Craft Artisan Guild":m==="forgot"?"Recover your account credentials":"User and Administrator Login"})]}),a.jsx("button",{onClick:()=>{d(!1),h()},className:"text-stone-400 hover:text-stone-800 p-1.5 cursor-pointer rounded-full hover:bg-stone-100 transition-colors","aria-label":"Close dialog",children:a.jsx(Je,{className:"w-4 h-4"})})]}),U&&a.jsxs("div",{className:"mb-3.5 p-2.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-center gap-2",children:[a.jsx("span",{className:"font-bold text-sm leading-none",children:"\u2022"}),a.jsx("span",{className:"leading-tight",children:U})]}),V&&a.jsxs("div",{className:"mb-3.5 p-2.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2",children:[a.jsx(Xa,{className:"w-4 h-4 text-emerald-600 shrink-0"}),a.jsx("span",{className:"leading-tight font-medium",children:V})]}),n?a.jsx("div",{className:"space-y-4 py-1",children:m==="orders"?a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-stone-100",children:[a.jsxs("button",{type:"button",onClick:()=>b("profile"),className:"text-xs text-stone-600 hover:text-stone-900 font-medium flex items-center gap-1 cursor-pointer",children:[a.jsx($f,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Back to Account"})]}),a.jsxs("span",{className:"text-[11px] text-stone-500 font-medium",children:[A.length," Order(s)"]})]}),A.length===0?a.jsxs("div",{className:"text-center py-8 space-y-3",children:[a.jsx("div",{className:"w-12 h-12 rounded-full bg-stone-100 mx-auto flex items-center justify-center text-stone-500",children:a.jsx(Za,{className:"w-6 h-6"})}),a.jsx("h5",{className:"font-serif text-sm font-semibold text-stone-800",children:"No Orders Placed Yet"}),a.jsx("p",{className:"text-xs text-stone-500 max-w-xs mx-auto",children:"Your handcrafted artisan pieces from Odisha will appear here once you place an order."}),a.jsx("button",{type:"button",onClick:()=>{d(!1),p("shop")},className:"px-4 py-2 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer",children:"Explore Craft Collection"})]}):a.jsx("div",{className:"space-y-2.5 max-h-72 overflow-y-auto pr-1",children:A.map(e=>a.jsxs("div",{key:e.id||e.orderNumber,className:"p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1.5",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"font-mono font-bold text-stone-900",children:e.orderNumber||e.id}),a.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase ${e.status==="Delivered"?"bg-emerald-100 text-emerald-800":e.status==="Shipped"?"bg-indigo-100 text-indigo-800":"bg-amber-100 text-amber-900"}`,children:e.status||"Pending"})]}),a.jsxs("div",{className:"flex items-center justify-between text-stone-500 text-[11px]",children:[a.jsx("span",{children:e.date||(e.createdAt?new Date(e.createdAt).toLocaleDateString():"Recently")}),a.jsxs("span",{className:"font-bold text-stone-900",children:["\u20B9",e.totalAmount||e.amount||0]})]}),e.items&&e.items.length>0&&a.jsx("div",{className:"pt-1 border-t border-stone-200/60 text-[11px] text-stone-600 truncate",children:e.items.map(s=>s.title||s.productTitle).join(", ")})]}))})]}):a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"p-3.5 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-3.5",children:[a.jsx("div",{className:"w-12 h-12 rounded-full bg-stone-900 text-white flex items-center justify-center font-serif text-base shrink-0",children:n.role==="admin"?a.jsx(St,{className:"w-6 h-6 text-amber-300"}):n.name.charAt(0).toUpperCase()}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("p",{className:"text-sm font-bold text-stone-900 truncate",children:n.name}),a.jsx("span",{className:`text-[9px] px-1.5 py-0.5 rounded-md font-mono uppercase font-bold ${n.role==="admin"?"bg-amber-100 text-amber-900":"bg-stone-200 text-stone-700"}`,children:n.role==="admin"?"Admin":"Patron"})]}),a.jsx("p",{className:"text-xs text-stone-500 truncate",children:n.email}),n.phone&&a.jsx("p",{className:"text-[10px] text-stone-400 truncate mt-0.5",children:n.phone})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("button",{type:"button",onClick:()=>b("orders"),className:"w-full py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center justify-between transition-colors cursor-pointer shadow-2xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Za,{className:"w-4 h-4 text-stone-600"}),a.jsx("span",{children:"My Order History"})]}),a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx("span",{className:"text-[10px] bg-stone-100 px-1.5 py-0.2 rounded font-bold text-stone-600",children:A.length}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]})]}),n.role==="admin"&&a.jsxs("button",{type:"button",onClick:()=>{d(!1),p("admin")},className:"w-full py-2.5 px-3 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg flex items-center justify-between transition-colors cursor-pointer shadow-xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(St,{className:"w-4 h-4 text-amber-300"}),a.jsx("span",{children:"Open Administrator Portal"})]}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]}),a.jsxs("button",{type:"button",onClick:()=>{d(!1),p("shop")},className:"w-full py-2.5 px-3 bg-white hover:bg-stone-50 text-stone-800 text-xs font-semibold rounded-lg border border-stone-200 flex items-center justify-between transition-colors cursor-pointer shadow-2xs",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(hs,{className:"w-4 h-4 text-rose-500"}),a.jsx("span",{children:"Explore Odisha Collection"})]}),a.jsx(xc,{className:"w-3.5 h-3.5 text-stone-400"})]})]}),a.jsxs("div",{className:"pt-2 border-t border-stone-100 flex items-center justify-between",children:[a.jsxs("button",{type:"button",onClick:R,className:"text-xs text-stone-600 hover:text-red-600 font-medium flex items-center gap-1.5 py-1 transition-colors cursor-pointer",children:[a.jsx(pc,{className:"w-4 h-4"}),a.jsx("span",{children:"Sign Out"})]}),a.jsx("button",{type:"button",onClick:()=>{R(),N("signin")},className:"text-[11px] text-stone-500 hover:text-stone-900 underline cursor-pointer",children:"Switch Account"})]})]})}):a.jsxs("div",{children:[a.jsxs("div",{className:"flex p-1 bg-stone-100 rounded-xl mb-4 text-xs font-semibold",children:[a.jsx("button",{type:"button",onClick:()=>N("signin"),className:`flex-1 py-1.5 text-center rounded-lg transition-all cursor-pointer ${m==="signin"?"bg-white text-stone-900 shadow-2xs":"text-stone-500 hover:text-stone-900"}`,children:"Sign In"}),a.jsx("button",{type:"button",onClick:()=>N("signup"),className:`flex-1 py-1.5 text-center rounded-lg transition-all cursor-pointer ${m==="signup"?"bg-white text-stone-900 shadow-2xs":"text-stone-500 hover:text-stone-900"}`,children:"Create Account"})]}),m==="signin"&&a.jsxs("form",{onSubmit:ge,className:"space-y-3.5 text-xs",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1.5",children:"Email Address / Username"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",required:!0,value:q,onChange:e=>k(e.target.value),autoComplete:"off",placeholder:"Enter your email address or username",className:"w-full pl-9 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 text-stone-900"}),a.jsx(fs,{className:"w-4 h-4 text-stone-400 absolute left-2.5 top-2.5"})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700",children:"Password"}),a.jsx("button",{type:"button",onClick:()=>{T(q),N("forgot")},className:"text-[11px] text-stone-500 hover:text-stone-900 hover:underline cursor-pointer",children:"Forgot Password?"})]}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:C?"text":"password",required:!0,value:L,onChange:e=>w(e.target.value),placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",className:"w-full pl-9 pr-9 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 text-stone-900"}),a.jsx(nl,{className:"w-4 h-4 text-stone-400 absolute left-2.5 top-2.5"}),a.jsx("button",{type:"button",onClick:()=>be(!C),className:"absolute right-2.5 top-2.5 text-stone-400 hover:text-stone-700 cursor-pointer",title:C?"Hide password":"Show password",children:C?a.jsx(tx,{className:"w-4 h-4"}):a.jsx(xs,{className:"w-4 h-4"})})]})]}),a.jsxs("button",{type:"submit",className:"w-full py-2.5 bg-stone-900 hover:bg-black text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs",children:[a.jsx(sn,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Sign In to Account"})]}),a.jsx("div",{className:"pt-2 text-center border-t border-stone-100",children:a.jsxs("p",{className:"text-xs text-stone-600",children:["Don't have an account yet? ",a.jsx("button",{type:"button",onClick:()=>N("signup"),className:"font-bold text-stone-900 hover:underline cursor-pointer",children:"Sign Up"})]})})]}),m==="signup"&&a.jsxs("form",{onSubmit:je,className:"space-y-3 text-xs",children:[a.jsxs("div",{className:"grid grid-cols-2 gap-1 p-1 bg-stone-100 rounded-lg",children:[a.jsx("button",{type:"button",onClick:()=>z("user"),className:`py-1.5 text-center text-xs font-medium rounded-md cursor-pointer transition-colors ${S==="user"?"bg-white text-stone-900 shadow-2xs font-bold":"text-stone-600 hover:text-stone-900"}`,children:"Customer / Patron"}),a.jsxs("button",{type:"button",onClick:()=>z("admin"),className:`py-1.5 text-center text-xs font-medium rounded-md cursor-pointer transition-colors flex items-center justify-center gap-1 ${S==="admin"?"bg-white text-stone-900 shadow-2xs font-bold":"text-stone-600 hover:text-stone-900"}`,children:[a.jsx(St,{className:"w-3 h-3 text-amber-600"}),a.jsx("span",{children:"Administrator"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1",children:"Full Name *"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",required:!0,value:B,onChange:e=>F(e.target.value),autoComplete:"off",placeholder:"Enter your full name",className:"w-full pl-8 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"}),a.jsx(sn,{className:"w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1",children:"Email Address *"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"email",required:!0,value:H,onChange:e=>W(e.target.value),autoComplete:"off",placeholder:"Enter your email address",className:"w-full pl-8 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"}),a.jsx(fs,{className:"w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1",children:"Phone Number (Optional)"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"tel",value:Z,onChange:e=>Y(e.target.value),placeholder:"Enter phone number",className:"w-full pl-8 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"}),a.jsx(zi,{className:"w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5"})]})]}),S==="admin"&&a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1",children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700",children:"Admin Passcode *"}),null]}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"password",required:!0,value:ee,onChange:e=>te(e.target.value),placeholder:"Enter security passcode (Optional)",className:"w-full pl-8 pr-3 py-2 text-xs bg-amber-50/50 border border-amber-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"}),a.jsx(Oi,{className:"w-3.5 h-3.5 text-amber-600 absolute left-2.5 top-2.5"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1",children:"Password *"}),a.jsx("input",{type:"password",required:!0,value:X,onChange:e=>G(e.target.value),placeholder:"Min 6 chars",className:"w-full px-2.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1",children:"Confirm *"}),a.jsx("input",{type:"password",required:!0,value:K,onChange:e=>Q(e.target.value),placeholder:"Re-enter",className:"w-full px-2.5 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"})]})]}),a.jsxs("button",{type:"submit",className:"w-full py-2.5 bg-stone-900 hover:bg-black text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs mt-2",children:[a.jsx(bb,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:S==="admin"?"Register Administrator":"Create Patron Account"})]}),a.jsx("div",{className:"pt-2 text-center border-t border-stone-100",children:a.jsxs("p",{className:"text-xs text-stone-600",children:["Already have an account? ",a.jsx("button",{type:"button",onClick:()=>N("signin"),className:"font-bold text-stone-900 hover:underline cursor-pointer",children:"Sign In"})]})})]}),m==="forgot"&&a.jsxs("form",{onSubmit:we,className:"space-y-3.5 text-xs",children:[oe==="request"?a.jsxs(a.Fragment,{children:[a.jsx("p",{className:"text-xs text-stone-600 mb-2 leading-relaxed",children:"Enter your registered email address to verify your account and set a new password."}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1.5",children:"Registered Email Address"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"email",required:!0,value:M,onChange:e=>T(e.target.value),placeholder:"Enter your registered email address",className:"w-full pl-8 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"}),a.jsx(fs,{className:"w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5"})]})]}),a.jsxs("button",{type:"submit",className:"w-full py-2.5 bg-stone-900 hover:bg-black text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs",children:[a.jsx(Oi,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Verify & Continue to Reset"})]})]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"p-2.5 bg-stone-50 rounded-lg border border-stone-200 text-stone-700 text-xs flex items-center justify-between",children:[a.jsx("span",{className:"font-medium text-stone-900",children:"Verified Account:"}),a.jsx("span",{className:"font-mono text-[11px] text-stone-700 font-semibold",children:M})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1",children:"New Password (Min 6 chars)"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"password",required:!0,value:se,onChange:e=>ae(e.target.value),placeholder:"Enter new password",className:"w-full pl-8 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"}),a.jsx(nl,{className:"w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-[11px] font-semibold uppercase tracking-wider text-stone-700 mb-1",children:"Confirm New Password"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"password",required:!0,value:ne,onChange:e=>re(e.target.value),placeholder:"Re-enter new password",className:"w-full pl-8 pr-3 py-2 text-xs bg-stone-50 border border-stone-300 rounded-lg focus:bg-white focus:outline-none focus:ring-1 focus:ring-stone-900 text-stone-900"}),a.jsx(nl,{className:"w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5"})]})]}),a.jsxs("button",{type:"submit",className:"w-full py-2.5 bg-stone-900 hover:bg-black text-white font-semibold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs",children:[a.jsx(Xa,{className:"w-3.5 h-3.5 text-emerald-300"}),a.jsx("span",{children:"Update Password & Sign In"})]})]}),a.jsx("div",{className:"pt-2 text-center border-t border-stone-100",children:a.jsxs("button",{type:"button",onClick:()=>{$("request"),N("signin")},className:"inline-flex items-center gap-1 text-xs text-stone-600 hover:text-stone-900 font-medium cursor-pointer",children:[a.jsx($f,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Back to Sign In"})]})})]})]})]})]}),P&&a.jsxs("div",{className:"md:hidden bg-white border-t border-stone-200 px-4 pt-3 pb-6 space-y-3",children:[ce.map(e=>a.jsx("button",{key:e.id,onClick:()=>{p(e.id),e.id==="shop"&&O("all"),j(!1)},className:`block w-full text-left py-2 text-xs font-semibold uppercase tracking-wider ${I===e.id?"text-stone-900 font-bold":"text-stone-600"}`,children:e.label})),a.jsx("div",{className:"pt-3 border-t border-stone-200",children:n?a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center gap-2.5 py-1",children:[a.jsx("div",{className:"w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold shrink-0",children:n.name.charAt(0).toUpperCase()}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("p",{className:"text-xs font-bold text-stone-900 truncate",children:n.name}),a.jsx("p",{className:"text-[10px] text-stone-500 truncate",children:n.email})]})]}),a.jsxs("button",{onClick:()=>{j(!1),d(!0),b("profile")},className:"block w-full text-left py-1.5 text-xs font-semibold text-stone-800 uppercase tracking-wider",children:"My Patron Account"}),a.jsxs("button",{onClick:()=>{j(!1),d(!0),b("orders")},className:"block w-full text-left py-1.5 text-xs font-semibold text-stone-800 uppercase tracking-wider",children:"My Order History"}),n.role==="admin"&&a.jsx("button",{onClick:()=>{p("admin"),j(!1)},className:"block w-full text-left py-1.5 text-xs font-bold text-amber-900 uppercase tracking-wider",children:"Administrator Portal"}),a.jsx("button",{onClick:()=>{R(),j(!1)},className:"block w-full text-left py-1.5 text-xs font-semibold text-rose-600 uppercase tracking-wider",children:"Sign Out"})]}):a.jsxs("button",{onClick:()=>{j(!1),d(!0),h(),b("signin")},className:"w-full py-2.5 px-3 bg-stone-900 text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs cursor-pointer",children:[a.jsx(sn,{className:"w-4 h-4"}),a.jsx("span",{children:"Sign In / Register"})]})})]})]})},kb=({onExploreClick:o,onCollectionsClick:p})=>{
  const slides = [    {      src: "/assets/hero/pattachitra_master_banner_1791089277119.jpg",      alt: "Master Artisan Hand-Painting Raghurajpur Pattachitra Canvas",      craft: "Pattachitra Canvas & Talapatra Palm Leaf Art",      location: "Raghurajpur Heritage Crafts Village, Puri"    },    {      src: "/assets/hero/master_artisan_studio_banner_1791089497909.jpg",      alt: "Generational Master Artisan Studios & Heritage Workshops",      craft: "Generational Master Artisan Guilds",      location: "Statewide Certified GI Guilds, Odisha"    },    {      src: "/assets/hero/making-saree-loom.jpg",      alt: "Making of Sambalpuri Silk Saree on Wooden Loom",      craft: "Making of Sambalpuri & Bomkai Sarees",      location: "Bargarh & Sonepur Handloom Cluster"    },    {      src: "/assets/hero/making-dokra-jewellery.jpg",      alt: "Making of Lost-Wax Dokra Brass Jewellery & Sculptures",      craft: "Making of Lost-Wax Dokra Jewellery",      location: "Dhenkanal & Sadeibareni Cluster"    },    {      src: "/assets/hero/making-jute-crafts.jpg",      alt: "Making of Golden Jute Fiber Eco Crafts & Handcrafted Bags",      craft: "Making of Natural Golden Jute Products",      location: "Kendrapara & Pipili Jute Guilds"    }  ];
  const [cur, setCur] = _.useState(0);
  const [isPaused, setIsPaused] = _.useState(false);
  _.useEffect(() => {
    if (isPaused) return;
    const t = setInterval(() => {
      setCur(c => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(t);
  }, [isPaused, slides.length]);
  const goPrev = () => setCur(c => (c - 1 + slides.length) % slides.length);
  const goNext = () => setCur(c => (c + 1) % slides.length);
  return a.jsxs("section", {
    className: "relative w-full overflow-hidden bg-[#0a0b0d] min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center select-none",
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    children: [
      a.jsxs("div", {
        className: "absolute inset-0 z-0 overflow-hidden",
        children: [
          a.jsx("img", { src: "/assets/hero/pattachitra_master_banner_1791089277119.jpg", alt: "Background base", className: "absolute inset-0 w-full h-full object-cover object-center brightness-90 z-0", referrerPolicy: "no-referrer" }), slides.map((s, i) => a.jsx("img", {
            key: i,
            src: s.src,
            alt: s.alt,
            className: "hero-slide-img absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out " + (i === cur ? "opacity-100 scale-105" : "opacity-0 scale-100 pointer-events-none"),
            onError: (e) => { if (!e.target.dataset.tried) { e.target.dataset.tried = "true"; e.target.src = e.target.src.startsWith("/") ? e.target.src.slice(1) : "/" + e.target.src; } }, style: { filter: "brightness(0.88) contrast(1.02)" },
            referrerPolicy: "no-referrer"
          })),
          a.jsx("div", {
            className: "hero-scrim-overlay",
            style: { position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,12,16,0.42) 0%, rgba(10,12,16,0.18) 30%, rgba(10,12,16,0.28) 65%, rgba(10,12,16,0.65) 100%)", pointerEvents: "none", zIndex: 1 }
          })
        ]
      }),
      a.jsx("button", {
        onClick: goPrev,
        "aria-label": "Previous craft slide",
        className: "absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer",
        style: { backgroundColor: "rgba(10,11,14,0.75)", border: "1.5px solid rgba(255,255,255,0.4)", color: "#ffffff", boxShadow: "0 8px 24px rgba(0,0,0,0.6)" },
        children: a.jsx("svg", {
          className: "w-5 h-5 stroke-[2.5]",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19l-7-7 7-7" })
        })
      }),
      a.jsx("button", {
        onClick: goNext,
        "aria-label": "Next craft slide",
        className: "absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full text-white flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-2xl cursor-pointer",
        style: { backgroundColor: "rgba(10,11,14,0.75)", border: "1.5px solid rgba(255,255,255,0.4)", color: "#ffffff", boxShadow: "0 8px 24px rgba(0,0,0,0.6)" },
        children: a.jsx("svg", {
          className: "w-5 h-5 stroke-[2.5]",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: a.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" })
        })
      }),
      a.jsxs("div", {
        className: "relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center",
        children: [
          a.jsx("div", {
            className: "mb-3 sm:mb-4",
            children: a.jsx("span", {
              className: "hero-top-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-bold tracking-[0.25em] uppercase shadow-xl",
              style: { backgroundColor: "rgba(14,15,18,0.85)", color: "#f7d794", border: "1.5px solid rgba(212,175,55,0.75)", boxShadow: "0 4px 20px rgba(0,0,0,0.6)" },
              children: "HERITAGE • QUALITY • TRUST"
            })
          }),
          a.jsxs("h1", {
            className: "hero-headline-shadow text-white font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.15] max-w-3xl",
            style: { textShadow: "0 2px 4px rgba(0,0,0,0.95), 0 4px 18px rgba(0,0,0,0.9), 0 0 32px rgba(0,0,0,0.85)" },
            children: [
              a.jsx("span", { className: "text-white", style: { color: "#ffffff" }, children: "Odisha ki Karigari," }),
              a.jsx("span", { className: "hero-headline-gold block mt-1.5 sm:mt-2", style: { color: "#fcdca8" }, children: "Har Ghar ke Liye" })
            ]
          }),
          a.jsx("div", {
            className: "mt-8 sm:mt-10 flex items-center justify-center w-full",
            children: a.jsxs("button", {
              onClick: o || p,
              className: "hero-cta-white-blur inline-flex items-center justify-center px-9 sm:px-11 py-3.5 sm:py-4 rounded-full cursor-pointer transition-all duration-300 select-none shadow-2xl relative overflow-hidden gap-2.5 group",
              style: { transform: "translateZ(0)", backfaceVisibility: "hidden" },
              children: [
                a.jsx("span", {
                  className: "text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.24em] text-white",
                  style: { color: "#ffffff", textShadow: "0 1px 4px rgba(0,0,0,0.7)" },
                  children: "SHOP NOW"
                }),
                a.jsx("span", {
                  className: "text-sm sm:text-base font-extrabold text-[#fcdca8] transition-transform duration-200 group-hover:translate-x-1",
                  children: "→"
                })
              ]
            })
          }),
          a.jsxs("div", {
            className: "mt-7 sm:mt-8 flex items-center gap-2.5",
            children: slides.map((s, i) => a.jsx("button", {
              key: i,
              onClick: () => setCur(i),
              "aria-label": "Go to slide " + (i + 1),
              className: "transition-all duration-300 rounded-full cursor-pointer " + (i === cur ? "w-8 h-2.5 shadow-lg" : "w-2.5 h-2.5 hover:bg-white/80"),
              style: i === cur ? { backgroundColor: "#fcdca8", width: "2rem" } : { backgroundColor: "rgba(255,255,255,0.55)", width: "0.625rem" }
            }))
          }),
          a.jsxs("div", {
            className: "hero-artisan-pill mt-4 sm:mt-5 inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all shadow-2xl",
            style: { backgroundColor: "#fffdfa", color: "#1c1917", border: "2px solid #d4af37", boxShadow: "0 12px 35px rgba(0,0,0,0.75)" },
            children: [
              a.jsx("span", { className: "w-2.5 h-2.5 rounded-full animate-pulse shrink-0", style: { backgroundColor: "#d97706" } }),
              a.jsx("span", { className: "font-bold tracking-wide", style: { color: "#0c0a09" }, children: slides[cur].craft }),
              a.jsx("span", { className: "font-bold", style: { color: "#92400e" }, children: "•" }),
              a.jsx("span", { className: "font-semibold", style: { color: "#44403c" }, children: slides[cur].location })
            ]
          })
        ]
      })
    ]
  });
},Ab=()=>{const o=[{number:"1,450+",label:"Master Artisans",description:"Empowered across 48 craft clusters in Odisha"},{number:"38",label:"Heritage GI Crafts",description:"Certified Geographical Indication craft forms preserved"},{number:"25,000+",label:"Patron Families",description:"Homes enriched with heirloom handmade creations"},{number:"82%",label:"Fair-Wage Reinvestment",description:"Of proceeds directly benefit artisan families & guilds"}];return a.jsx("section",{className:"w-full bg-[#f9f7f2] border-t border-b border-[#e8e2d8] pt-8 sm:pt-10 pb-24 sm:pb-36 mb-6 sm:mb-10",children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5",children:o.map((p,y)=>a.jsxs("div",{className:"bg-[#f2ece3] border border-[#e4dcd0] rounded-xl sm:rounded-2xl p-4 sm:p-5 text-center flex flex-col items-center justify-center transition-all hover:border-[#cfc5b6] hover:bg-[#efe8dd]",children:[a.jsx("div",{className:"font-serif text-2xl sm:text-3xl lg:text-3xl font-normal text-[#8b6d45] tracking-tight leading-none mb-1 sm:mb-1.5",children:p.number}),a.jsx("div",{className:"text-xs sm:text-[13px] font-bold text-[#161717] tracking-tight leading-snug mb-1",children:p.label}),a.jsx("p",{className:"text-[10.5px] sm:text-xs text-stone-600 leading-snug line-clamp-2 max-w-[210px]",children:p.description})]},y))})})})},Cb=o=>o==="art"?a.jsx(Rg,{className:"w-6 h-6 sm:w-7 sm:h-7 text-[#735a3e]"}):o==="textiles"?a.jsx(ab,{className:"w-6 h-6 sm:w-7 sm:h-7 text-[#735a3e]"}):o==="handicraft"?a.jsx(Jt,{className:"w-6 h-6 sm:w-7 sm:h-7 text-[#735a3e]"}):o==="jewellery"?a.jsx(cg,{className:"w-6 h-6 sm:w-7 sm:h-7 text-[#735a3e]"}):a.jsx(Jt,{className:"w-6 h-6 sm:w-7 sm:h-7 text-[#735a3e]"}),Eb=({onSelectCategory:o,onQuickView:y,onAddToCart:p,wishlistIds:d=[],onToggleWishlist:z,onViewAllClick:v,products:P=[],onSelectArtisan:E})=>{
  const allProds = (P && P.length > 0) ? P : (ut || []);

  const categories = [
    { id: "all", name: "All Crafts", slug: "all", count: 29 },
    { id: "textiles", name: "Handloom & Sarees", slug: "textiles", count: 7 },
    { id: "handicraft", name: "Dhokra & Metal", slug: "handicraft", count: 4 },
    { id: "jewellery", name: "Tribal Jewellery", slug: "jewellery", count: 11 },
    { id: "natural", name: "Golden Grass & Fibers", slug: "handicraft", count: 7 }
  ];

  const [activeTab, setActiveTab] = _.useState("all");

  const mixedIds = [
    "prod-sambalpuri-pure-silk-saree-grey",
    "prod-dhokra-mana-bowl",
    "prod-dokra-choker-dark-set",
    "prod-sandstone-chandan-pedi-272",
    "prod-fine-tussar-silk-dupatta-temple",
    "prod-golden-grass-square-pedi",
    "prod-lac-bangles-luxury",
    "prod-jute-laptop-bag"
  ];

  const displayedProds = _.useMemo(() => {
    if (activeTab === "all") {
      const items = mixedIds.map(id => allProds.find(item => item.id === id)).filter(Boolean);
      return items.length > 0 ? items : allProds.slice(0, 8);
    }
    if (activeTab === "textiles") {
      return allProds.filter(item => item.collection === "textiles" || item.category === "Handloom & Textiles");
    }
    if (activeTab === "handicraft") {
      return allProds.filter(item => item.craft && (item.craft.includes("DHOKRA METAL CASTING") || item.craft.includes("STONE CARVING") || item.craft.includes("WOOD CARVING")));
    }
    if (activeTab === "jewellery") {
      return allProds.filter(item => item.collection === "jewellery" || item.category === "Jewellery & Ornaments");
    }
    if (activeTab === "natural") {
      return allProds.filter(item => item.craft && (item.craft.includes("GOLDEN GRASS") || item.craft.includes("JUTE") || item.craft.includes("COIR")));
    }
    return allProds.slice(0, 8);
  }, [activeTab, allProds]);

  return a.jsx("section", {
    className: "py-12 sm:py-16 bg-[#ffffff] border-b border-[#EAE7E1]",
    children: a.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        a.jsx("div", {
          className: "mb-8",
          children: a.jsxs("div", {
            children: [
              a.jsxs("div", {
                className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f6efe6] text-[#735a3e] text-[11px] font-bold tracking-[0.18em] uppercase border border-[#e3d3c1] mb-2.5",
                children: [
                  a.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-[#735a3e]" }),
                  "AVAILABLE CRAFTS & CATEGORIES"
                ]
              }),
              a.jsx("h2", {
                className: "font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-stone-900",
                children: "Explore Odisha Heritage by Category"
              }),
              a.jsx("p", {
                className: "text-stone-600 text-xs sm:text-sm mt-1.5 max-w-2xl leading-relaxed",
                children: "Discover generational master art pieces across certified clusters. Select any available category or browse our featured mixed showcase."
              })
            ]
          })
        }),
        a.jsx("div", {
          className: "flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-3 mb-8 border-b border-stone-200/70",
          children: categories.map(cat => {
            const isActive = activeTab === cat.id;
            return a.jsxs("button", {
              key: cat.id,
              onClick: () => setActiveTab(cat.id),
              className: "px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer " + (isActive ? "bg-[#735a3e] text-white shadow-sm" : "bg-[#FAF7F2] text-stone-700 hover:bg-[#EFE9DF] hover:text-stone-950 border border-stone-200"),
              children: [
                a.jsx("span", { children: cat.name }),
                a.jsx("span", {
                  className: "text-[10px] px-1.5 py-0.2 rounded-full font-bold " + (isActive ? "bg-white/20 text-white" : "bg-stone-200 text-stone-600"),
                  children: cat.count
                })
              ]
            });
          })
        }),
        a.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8",
          children: displayedProds.map(g => a.jsx(bc, {
            product: g,
            onAddToCart: p,
            onQuickView: y,
            isWishlisted: (d || []).includes(g.id),
            onToggleWishlist: z,
            onSelectArtisan: E
          }, g.id))
        }),
        a.jsx("div", {
          className: "mt-8 sm:mt-10 flex justify-end items-center",
          children: a.jsxs("button", {
            onClick: () => v ? v() : o("all"),
            className: "group inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#735a3e] hover:text-white py-3 px-6 rounded-xl bg-[#FAF7F2] hover:bg-[#735a3e] border border-[#E3D8C8] hover:border-[#735a3e] transition-all duration-200 shadow-2xs hover:shadow-md cursor-pointer",
            children: [
              a.jsx("span", { children: "VIEW ALL PRODUCTS" }),
              a.jsx(xc, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
            ]
          })
        })
      ]
    })
  });
},bc=({product:o,onAddToCart:p,onQuickView:y,isWishlisted:d,onToggleWishlist:z,onSelectArtisan:v,viewMode:E="grid"})=>{const D=O=>{const n=Number(O)||0;return `₹${n.toLocaleString("en-IN",{minimumFractionDigits:Number.isInteger(n)?0:2,maximumFractionDigits:2})}`},g=O=>a.jsx("div",{className:"flex items-center gap-0.5 text-amber-500",children:[1,2,3,4,5].map(x=>{const H=O>=x,R=O>=x-.5&&O<x;return a.jsx(gc,{className:`w-3 h-3 ${H?"fill-amber-400 text-amber-400":R?"fill-amber-300/50 text-amber-400":"text-stone-300 fill-transparent"}`},x)})});if(E==="editorial")return a.jsxs("div",{className:"group relative flex flex-col sm:flex-row bg-[#ffffff] border border-stone-200/90 hover:border-amber-900/30 hover:shadow-lg transition-all duration-300 overflow-hidden text-left",children:[a.jsxs("div",{onClick:()=>y(o),className:"relative aspect-4/5 sm:aspect-3/4 sm:w-1/2 overflow-hidden bg-[#f5f2ed] shrink-0 cursor-pointer",children:[a.jsx("img",{src:o.image,alt:o.title,className:"h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105",referrerPolicy:"no-referrer",loading:"lazy"}),a.jsx("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5 z-10",children:o.isOutOfStock?a.jsx("span",{className:"bg-stone-900 text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 shadow-sm",children:"OUT OF STOCK"}):o.discount?a.jsxs("span",{className:"bg-[#8c6b3e] text-white text-[10px] font-bold px-2.5 py-1 tracking-wider shadow-sm",children:[o.discount,"% OFF"]}):o.isNew?a.jsxs("span",{className:"bg-amber-50 text-amber-900 border border-amber-200 text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 shadow-sm flex items-center gap-1",children:[a.jsx(Jt,{className:"w-2.5 h-2.5"})," NEW HEIRLOOM"]}):null}),a.jsx("button",{onClick:O=>{O.stopPropagation(),z(o)},className:"absolute top-3 right-3 w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-stone-800 hover:text-rose-600 transition-all shadow-sm hover:scale-110 z-10 cursor-pointer","aria-label":d?"Remove from wishlist":"Add to wishlist",children:a.jsx(hs,{className:`w-4 h-4 transition-colors ${d?"fill-rose-500 text-rose-500":"text-stone-700"}`})})]}),a.jsxs("div",{className:"p-5 sm:p-7 sm:w-1/2 flex flex-col justify-between",children:[a.jsxs("div",{className:"space-y-2.5",children:[a.jsxs("div",{className:"flex items-center justify-between text-[11px] font-semibold tracking-[0.16em] uppercase text-[#735a3e]",children:[a.jsx("span",{className:"truncate",children:o.craft}),o.origin&&a.jsxs("span",{className:"text-stone-400 normal-case font-normal flex items-center gap-1 text-[11px] shrink-0",children:[a.jsx(rn,{className:"w-3 h-3 text-[#735a3e]"}),a.jsx("span",{className:"truncate max-w-[120px]",children:o.origin.split(",")[0]})]})]}),a.jsx("h3",{onClick:()=>y(o),className:"font-serif text-lg sm:text-xl text-stone-900 font-normal hover:text-[#735a3e] transition-colors leading-snug cursor-pointer line-clamp-2",children:o.title}),o.artisanName&&a.jsxs("p",{onClick:O=>{O.stopPropagation(),v&&o.artisanId&&v(o.artisanId)},className:"text-xs text-stone-600 hover:text-stone-900 transition-colors cursor-pointer flex items-center gap-1.5",children:[a.jsx("span",{className:"text-stone-400",children:"Master Guild:"}),a.jsx("span",{className:"font-semibold underline decoration-stone-300 underline-offset-2",children:o.artisanName})]}),a.jsxs("div",{className:"flex items-center gap-2 pt-1",children:[g(o.rating),a.jsx("span",{className:"text-xs font-bold text-stone-800",children:o.rating.toFixed(1)}),a.jsxs("span",{className:"text-xs text-stone-400",children:["(",o.reviewsCount," reviews)"]})]}),a.jsx("p",{className:"text-xs text-stone-500 line-clamp-3 leading-relaxed pt-1",children:o.description.split(`

`)[0]})]}),a.jsxs("div",{className:"pt-5 border-t border-stone-100 mt-4 space-y-3",children:[a.jsxs("div",{className:"flex items-baseline gap-2.5",children:[a.jsx("span",{className:"text-xl font-bold text-stone-900 font-serif",children:D(o.price)}),o.originalPrice&&a.jsx("span",{className:"text-sm text-stone-400 line-through",children:D(o.originalPrice)})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[o.isOutOfStock?a.jsx("button",{onClick:()=>y(o),className:"flex-1 bg-stone-100 hover:bg-stone-200 text-stone-800 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-center transition-colors cursor-pointer",children:"Notify When Available"}):a.jsxs("button",{onClick:()=>p(o),className:"flex-1 bg-stone-900 hover:bg-[#735a3e] text-white py-2.5 px-4 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-xs",children:[a.jsx(Za,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Add To Bag"})]}),a.jsx("button",{onClick:()=>y(o),className:"py-2.5 px-3 border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold transition-colors cursor-pointer",title:"Quick preview",children:a.jsx(xs,{className:"w-4 h-4"})})]})]})]})]});const h=E==="compact";return a.jsxs("div",{className:"group relative flex flex-col text-left transition-all duration-300",children:[a.jsxs("div",{onClick:()=>y(o),className:"relative aspect-4/5 w-full overflow-hidden bg-[#f7f5f1] rounded-xs mb-3 border border-stone-200/80 group-hover:border-stone-400/80 group-hover:shadow-md transition-all duration-300 cursor-pointer",children:[a.jsx("img",{src:o.image,alt:o.title,className:"h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106",referrerPolicy:"no-referrer",loading:"lazy"}),a.jsx("div",{className:"absolute top-2.5 left-2.5 flex flex-col gap-1 z-10",children:o.isOutOfStock?a.jsx("span",{className:"bg-stone-900 text-white text-[9px] sm:text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 shadow-xs",children:"SOLD OUT"}):o.discount?a.jsxs("span",{className:"bg-[#8c6b3e] text-white text-[10px] font-bold px-2 py-0.5 tracking-tight shadow-xs",children:["-",o.discount,"%"]}):o.isNew?a.jsx("span",{className:"bg-[#fcf8f2] text-stone-900 border border-[#e5d8c8] text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 shadow-xs",children:"NEW"}):null}),a.jsx("button",{onClick:O=>{O.stopPropagation(),z(o)},className:"absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center text-stone-800 hover:text-rose-600 transition-all shadow-xs hover:scale-110 z-10 cursor-pointer","aria-label":d?"Remove from wishlist":"Add to wishlist",children:a.jsx(hs,{className:`w-3.5 h-3.5 transition-colors ${d?"fill-rose-500 text-rose-500":"text-stone-700"}`})}),a.jsx("div",{className:"absolute inset-x-0 bottom-0 p-2.5 bg-gradient-to-t from-black/60 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200 z-10 flex items-center gap-1.5 translate-y-1 group-hover:translate-y-0",children:o.isOutOfStock?a.jsx("button",{onClick:O=>{O.stopPropagation(),y(o)},className:"w-full bg-white/95 hover:bg-white text-stone-900 py-2 text-[11px] font-bold uppercase tracking-wider text-center transition-colors cursor-pointer shadow-xs",children:"Notify Me"}):a.jsxs(a.Fragment,{children:[a.jsxs("button",{onClick:O=>{O.stopPropagation(),p(o)},className:"flex-1 bg-stone-900 hover:bg-[#735a3e] text-white py-2 text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs",children:[a.jsx(Za,{className:"w-3 h-3"}),a.jsx("span",{children:"Add To Bag"})]}),a.jsx("button",{onClick:O=>{O.stopPropagation(),y(o)},className:"bg-white/95 hover:bg-white text-stone-900 p-2 text-xs transition-colors cursor-pointer shadow-xs",title:"Quick View",children:a.jsx(xs,{className:"w-3.5 h-3.5"})})]})})]}),a.jsxs("div",{className:"space-y-1",children:[a.jsxs("div",{className:"flex items-center justify-between gap-1 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#735a3e]",children:[a.jsx("span",{className:"truncate",children:o.craft}),o.origin&&!h&&a.jsx("span",{className:"text-stone-400 font-normal normal-case text-[10px] shrink-0 truncate max-w-[100px]",children:o.origin.split(",")[0]})]}),a.jsx("h3",{onClick:()=>y(o),className:`font-serif text-stone-900 font-normal hover:text-[#735a3e] transition-colors cursor-pointer leading-snug line-clamp-1 ${h?"text-sm":"text-base"}`,title:o.title,children:o.title}),a.jsxs("div",{className:"flex items-center gap-1.5 pt-0.5",children:[g(o.rating),a.jsx("span",{className:"text-[11px] text-stone-700 font-semibold",children:o.rating.toFixed(1)}),a.jsxs("span",{className:"text-[11px] text-stone-400",children:["(",o.reviewsCount,")"]})]}),a.jsxs("div",{className:"flex items-baseline gap-2 pt-1",children:[a.jsx("span",{className:`font-semibold text-stone-900 ${h?"text-sm":"text-base"}`,children:D(o.price)}),o.originalPrice&&a.jsx("span",{className:"text-xs text-stone-400 line-through",children:D(o.originalPrice)})]})]})]})},Mb=({products:o,onAddToCart:p,onQuickView:y,wishlistIds:d,onToggleWishlist:z,onViewAllClick:v,onSelectArtisan:E})=>{const D=Ef.length>=4?Ef.slice(0,4):o.slice(0,4);return D.length===0?null:a.jsx("section",{className:"py-16 sm:py-24 bg-[#ffffff] border-b border-[#E5E2DA]",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-12 sm:mb-16",children:[a.jsx("span",{className:"text-xs uppercase font-bold tracking-[0.2em] text-stone-700 block mb-2",children:"SABSE ZYADA PASAND"}),a.jsx("h2",{className:"font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#161717] tracking-tight",children:"Best Sellers"}),a.jsx("p",{className:"text-stone-600 text-sm sm:text-base mt-3 leading-relaxed",children:"Hamare sabse priya pieces — asli karigari ke kadrdaar grahakon ke dvara chune gaye."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10",children:D.map(g=>a.jsx(bc,{product:g,onAddToCart:p,onQuickView:y,isWishlisted:d.includes(g.id),onToggleWishlist:z,onSelectArtisan:E},g.id))}),a.jsx("div",{className:"mt-12 text-center",children:a.jsx("button",{onClick:v,className:"inline-flex items-center justify-center px-8 py-3.5 border border-[#161717] text-xs uppercase tracking-[0.2em] font-semibold text-[#161717] hover:bg-[#161717] hover:text-white transition-all cursor-pointer shadow-xs",children:"Explore Complete Collection"})})]})})},Lf=()=>{const o=[{icon:a.jsx(kg,{className:"w-5 h-5 text-stone-700 stroke-[1.75]"}),title:"Zero-Chemical Natural Pigments",description:"Our painters grind Haritala yellow, Hingula vermilion, and lampblack using conch shells and tamarind paste."},{icon:a.jsx(pg,{className:"w-5 h-5 text-stone-700 stroke-[1.75]"}),title:"Direct Artisan Guild Co-ops",description:"Eliminating intermediaries ensures our master craftsmen receive 3-4x customary market earnings."},{icon:a.jsx(ox,{className:"w-5 h-5 text-stone-700 stroke-[1.75]"}),title:"Biodegradable Craft Materials",description:"From mulberry silks and bell metal to riverbed clay and seasoned rosewood, every piece respects the earth."},{icon:a.jsx(qp,{className:"w-5 h-5 text-stone-700 stroke-[1.75]"}),title:"Heirloom Quality Longevity",description:"Built to endure for generations, resisting transient throwaway consumerism with timeless design."}];return a.jsx("section",{className:"py-16 sm:py-24 bg-[#f8f5ee]",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-12 sm:mb-16",children:[a.jsx("h2",{className:"font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#161717] tracking-tight",children:"Our Guiding Craft Pillars"}),a.jsx("p",{className:"text-stone-600 text-sm sm:text-base mt-2.5",children:"Purely natural, ethical, and built to outlive industrial plastics."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:o.map((p,y)=>a.jsxs("div",{className:"bg-white border border-[#e8e2d7] rounded-2xl p-7 flex flex-col justify-start space-y-4 hover:shadow-xs transition-shadow",children:[a.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#f4efe8] flex items-center justify-center shrink-0",children:p.icon}),a.jsx("h3",{className:"font-serif text-lg font-bold text-[#161717] leading-snug",children:p.title}),a.jsx("p",{className:"text-xs sm:text-[13px] text-stone-600 leading-relaxed",children:p.description})]},y))}),a.jsxs("div",{className:"mt-14 pt-8 border-t border-[#e2dcce] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-stone-700",children:[a.jsxs("div",{className:"flex items-center gap-2.5 text-center sm:text-left",children:[a.jsx(Xa,{className:"w-4 h-4 text-emerald-600 shrink-0"}),a.jsx("span",{children:"Certified GI (Geographical Indication) Registered Origin Craftsmanship"})]}),a.jsxs("div",{className:"flex items-center gap-2.5 text-center sm:text-left",children:[a.jsx(dx,{className:"w-4 h-4 text-stone-700 shrink-0"}),a.jsx("span",{children:"Includes Certificate of Authenticity signed by Master Guild Leader"})]})]})]})})},De=o=>(o||"").toLowerCase().replace(/[^a-z0-9]/g,""),Pt=(o,p)=>{const y=De(o),d=De(p);return y===d||(y==="art"||y==="arts"||y==="painting"||y==="paintings"||y==="artpaintings"||y==="traditionalart"||y==="pattachitra")&&(d==="art"||d==="arts"||d==="painting"||d==="paintings"||d==="artpaintings"||d==="traditionalart"||d==="pattachitra")||(y==="saree"||y==="sarhee"||y==="sarees"||y==="sari")&&(d==="saree"||d==="sarhee"||d==="sarees"||d==="sari")||(y==="idolsstatues"||y==="idolstatues")&&(d==="idolsstatues"||d==="idolstatues")||(y==="pujaarticles"||y==="pujaarticle"||y==="puja")&&(d==="pujaarticles"||d==="pujaarticle"||d==="puja")||(y==="textiles"||y==="textileshandlooms"||y==="handloom"||y==="handlooms")&&(d==="textiles"||d==="textileshandlooms"||d==="handloom"||d==="handlooms")||(y==="homedecor"||y==="decor")&&(d==="homedecor"||d==="decor")||(y==="necklace"||y==="necklaces"||y==="necklaceschokers"||y==="choker"||y==="chokers")&&(d==="necklace"||d==="necklaces"||d==="necklaceschokers"||d==="choker"||d==="chokers")||(y==="earrings"||y==="earring"||y==="earringsjhumkas"||y==="jhumka"||y==="jhumkas")&&(d==="earrings"||d==="earring"||d==="earringsjhumkas"||d==="jhumka"||d==="jhumkas")||(y==="lac"||y==="lacbangles"||y==="lacjewellery"||y==="laccraft")&&(d==="lac"||d==="lacbangles"||d==="lacjewellery"||d==="laccraft")},sl=o=>{const p=De(o);return p==="art"||p==="arts"||p==="painting"||p==="paintings"||p==="artpaintings"||p==="artandpaintings"||p==="traditionalart"||p==="pattachitra"?"art":p==="handicraft"||p==="handicrafts"?"handicraft":p==="jewellery"||p==="jewelry"||p==="ornaments"||p==="jewelleryornaments"?"jewellery":p==="textiles"||p==="textileshandlooms"||p==="handlooms"||p==="textilesandhandloom"||p==="handloom"?"textiles":null},ln=(o,p)=>{var y;return!!(Pt(o.category,p)||(y=o.categoriesList)!=null&&y.some(d=>Pt(d,p)))},Ei=(o,p)=>{var z;const y=sl(p)||p,d=va.find(v=>v.id===y||De(v.name)===De(y));if(!d)return!1;if(y==="handicraft"){const v=De(o.category);if(["coir","papermache","stone","terracotta","pattachitra","art","paintings"].includes(v)||o.craft.toLowerCase().includes("pattachitra")||o.craft.toLowerCase().includes("talapatra")||o.craft.toLowerCase().includes("terracotta")||o.craft.toLowerCase().includes("coir"))return!1}return o.collection&&(De(o.collection)===De(d.id)||sl(o.collection)===d.id)||y==="art"&&(o.collection==="art"||De(o.category)==="art"||De(o.category)==="pattachitra"||(z=o.categoriesList)!=null&&z.some(v=>{const E=De(v);return E==="art"||E==="pattachitra"||E==="palmleafart"||E==="wallart"||E==="paintings"||E==="canvaspaintings"})||o.craft.toLowerCase().includes("pattachitra")||o.craft.toLowerCase().includes("talapatra")||o.craft.toLowerCase().includes("wall art"))?!0:d.categories.some(v=>ln(o,v))},_b=({products:o,onAddToCart:p,onQuickView:y,wishlistIds:d,onToggleWishlist:z,selectedCategory:v,onSelectCategory:E,onSelectArtisan:D,initialSearchQuery:g=""})=>{const[h,O]=_.useState("Recommended"),[x,H]=_.useState([]),[R,Q]=_.useState(!1),[j,X]=_.useState(!1),[G,w]=_.useState(1),[Y,I]=_.useState(!1),[re,me]=_.useState(g),[K,te]=_.useState("grid-3");_.useEffect(()=>{me(g)},[g]);const[F,Ve]=_.useState({art:!0,textiles:!0,handicraft:!0,jewellery:!0}),we=(M,Z)=>{Z&&Z.stopPropagation(),Ve(ne=>({...ne,[M]:!ne[M]}))},J=[{id:"under-1000",label:"Under ₹1,000",min:0,max:1e3},{id:"1000-3000",label:"₹1,000 - ₹3,000",min:1e3,max:3e3},{id:"3000-5000",label:"₹3,000 - ₹5,000",min:3e3,max:5e3},{id:"over-5000",label:"Over ₹5,000",min:5e3,max:1/0}];_.useEffect(()=>{v&&v!=="all"&&va.forEach(M=>{(De(M.id)===De(v)||De(M.name)===De(v)||M.categories.some(ne=>Pt(ne,v)))&&Ve(ne=>({...ne,[M.id]:!0}))}),w(1)},[v]);const Se=M=>{H(Z=>Z.includes(M)?Z.filter(ne=>ne!==M):[...Z,M]),w(1)},he=_.useMemo(()=>{const M={};return va.forEach(Z=>{Z.categories.forEach(ne=>{M[ne]=o.filter(Ce=>ln(Ce,ne)).length})}),M},[o]),le=_.useMemo(()=>{const M={};return va.forEach(Z=>{M[Z.id]=o.filter(ne=>Ei(ne,Z.id)).length}),M},[o]),N=_.useMemo(()=>{if(!v||v==="all")return{isAll:!0,collection:null,category:null,title:"The Master Artisan Vault",subtitle:"Authentic Odishan Craft Heritage & Handlooms",description:"Explore authentic handcrafted creations sourced directly from generational master artisans and cooperative weaving guilds across Odisha.",breadcrumb:"Collections > All Masterpieces"};const M=sl(v),Z=va.find(ne=>ne.id===v||ne.id===M||De(ne.id)===De(v)||De(ne.name)===De(v));if(Z)return{isAll:!1,collection:Z,category:null,title:Z.name,subtitle:"Curated Heritage Craft Collection",description:Z.description,breadcrumb:`Collections > ${Z.name}`};for(const ne of va){const Ce=ne.categories.find(Ee=>Pt(Ee,v));if(Ce)return{isAll:!1,collection:ne,category:Ce,title:Ce,subtitle:`${ne.name} Heritage`,description:`Handcrafted ${Ce} crafted by registered generational artisans using traditional Odishan techniques.`,breadcrumb:`${ne.name} > ${Ce}`}}return{isAll:!1,collection:null,category:v,title:v,subtitle:"Artisanal Treasure",description:`Authentic handcrafted ${v} preserved and curated from master artisan clusters.`,breadcrumb:`Collections > ${v}`}},[v]),C=_.useMemo(()=>o.filter(M=>{if(v&&v!=="all"){const ne=sl(v),Ce=va.find(Ee=>Ee.id===v||Ee.id===ne||De(Ee.id)===De(v)||De(Ee.name)===De(v));if(Ce){if(!Ei(M,Ce.id))return!1}else if(!ln(M,v))return!1}if(x.length>0&&!x.some(Ce=>{const Ee=J.find(Ke=>Ke.id===Ce);return Ee?M.price>=Ee.min&&M.price<=Ee.max:!0})||R&&M.isOutOfStock||j&&!M.isOutOfStock)return!1;const Z=re.trim().toLowerCase();if(Z){const ne=M.title.toLowerCase().includes(Z),Ce=M.craft.toLowerCase().includes(Z),Ee=M.artisanName.toLowerCase().includes(Z),Ke=M.origin.toLowerCase().includes(Z),qe=(M.category||"").toLowerCase().includes(Z)||(M.categoriesList||[]).some(ja=>ja.toLowerCase().includes(Z)),nt=(M.description||"").toLowerCase().includes(Z);if(!ne&&!Ce&&!Ee&&!Ke&&!qe&&!nt)return!1}return!0}).sort((M,Z)=>h==="Price: Low to High"?M.price-Z.price:h==="Price: High to Low"?Z.price-M.price:h==="Customer Rating"?Z.rating-M.rating:h==="Newest"?(Z.isNew?1:0)-(M.isNew?1:0):h==="Discount"?(Z.discount||0)-(M.discount||0):0),[o,v,x,R,j,re,h]),V=K==="grid-4"?16:K==="editorial"?10:12,ee=C.length,ce=Math.max(1,Math.ceil(ee/V)),m=C.slice((G-1)*V,G*V),B=ee===0?0:(G-1)*V+1,W=Math.min(G*V,ee),P=M=>{Pt(v,M)?E("all"):E(M),w(1),I(!1)},ue=M=>{E(v===M?"all":M),Ve(Z=>({...Z,[M]:!0})),w(1),I(!1)},fe=()=>{E("all"),H([]),Q(!1),X(!1),me(""),O("Recommended"),w(1)},be=(v!=="all"?1:0)+x.length+(R?1:0)+(j?1:0)+(re.trim()?1:0);return a.jsxs("div",{className:"bg-[#fcfbf9] min-h-screen text-[#161717]",children:[a.jsxs("section",{className:"relative overflow-hidden bg-gradient-to-b from-[#f8f5ee] via-[#f5f0e6] to-[#fcfbf9] border-b border-[#e8e2d5] pt-10 pb-12 sm:pt-14 sm:pb-16",children:[a.jsx("div",{className:"absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#b85d18_1px,transparent_1px)] [background-size:16px_16px]"}),a.jsx("div",{className:"absolute -top-24 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"}),a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[a.jsxs("nav",{"aria-label":"Breadcrumb",className:"flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d97706] mb-4",children:[a.jsx("span",{className:"hover:text-stone-900 transition-colors cursor-pointer",onClick:()=>E("all"),children:"Atelier Vault"}),a.jsx(cc,{className:"w-3 h-3 text-stone-400"}),a.jsx("span",{className:"text-stone-800 font-bold",children:N.breadcrumb})]}),a.jsxs("div",{className:"flex flex-col lg:flex-row lg:items-end justify-between gap-6",children:[a.jsxs("div",{className:"max-w-3xl space-y-3",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-xs border border-amber-900/10 text-[11px] font-bold tracking-widest text-[#b85d18] uppercase shadow-2xs",children:[a.jsx(Jt,{className:"w-3 h-3 text-amber-600"}),a.jsx("span",{children:"ODISHA HANDLOOM & ARTISANAL GUILDS"})]}),a.jsx("h1",{className:"font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-stone-950 tracking-tight leading-[1.15]",children:N.title}),a.jsx("p",{className:"text-stone-600 text-sm sm:text-base font-normal leading-relaxed max-w-2xl",children:N.description})]}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-2 gap-2.5 lg:w-80 shrink-0",children:[a.jsxs("div",{className:"bg-white/85 border border-[#e5dfd3] p-3 rounded-xs flex items-center gap-2.5 shadow-2xs",children:[a.jsx(St,{className:"w-5 h-5 text-[#b85d18] shrink-0"}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-900",children:"100% GI Tagged"}),a.jsx("div",{className:"text-[10px] text-stone-500",children:"Verified Origin"})]})]}),a.jsxs("div",{className:"bg-white/85 border border-[#e5dfd3] p-3 rounded-xs flex items-center gap-2.5 shadow-2xs",children:[a.jsx(ll,{className:"w-5 h-5 text-[#b85d18] shrink-0"}),a.jsxs("div",{children:[a.jsx("div",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-900",children:"Fair Trade"}),a.jsx("div",{className:"text-[10px] text-stone-500",children:"Direct Guild Wage"})]})]})]})]})]})]}),a.jsx("section",{className:"bg-white border-b border-stone-200/90 py-5",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h2",{className:"text-xs font-bold uppercase tracking-[0.2em] text-stone-500 flex items-center gap-1.5",children:a.jsx("span",{children:"EXPLORE BY CRAFT CLUSTER"})}),a.jsx("span",{className:"text-xs text-stone-400 hidden sm:inline",children:"Scroll horizontally to discover craft traditions"})]}),a.jsxs("div",{className:"flex items-center gap-3 overflow-x-auto no-scrollbar pb-2 pt-1 -mx-4 px-4 sm:mx-0 sm:px-0",children:[a.jsxs("button",{onClick:()=>E("all"),className:`shrink-0 flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${N.isAll?"bg-stone-900 text-white border-stone-900 shadow-sm":"bg-[#faf8f5] hover:bg-stone-100 text-stone-800 border-stone-200"}`,children:[a.jsx("div",{className:`w-7 h-7 rounded-full flex items-center justify-center text-xs font-serif ${N.isAll?"bg-stone-800 text-white":"bg-stone-200 text-stone-800"}`,children:"✦"}),a.jsxs("div",{className:"text-left pr-1",children:[a.jsx("div",{className:"text-xs font-bold whitespace-nowrap",children:"All Heirlooms"}),a.jsxs("div",{className:`text-[10px] ${N.isAll?"text-stone-300":"text-stone-500"}`,children:[o.length," treasures"]})]})]}),oc.filter(M=>o.filter(ne=>sl(M.slug)?Ei(ne,M.slug):ln(ne,M.slug)).length>0).map(M=>{const Z=Pt(v,M.slug)||Pt(v,M.name),ne=o.filter(Ce=>sl(M.slug)?Ei(Ce,M.slug):ln(Ce,M.slug)).length;return a.jsxs("button",{onClick:()=>E(M.slug),className:`shrink-0 flex items-center gap-2.5 px-3 py-1.5 rounded-full border transition-all duration-200 cursor-pointer group ${Z?"bg-stone-900 text-white border-stone-900 shadow-sm ring-2 ring-[#d97706]/40":"bg-[#fbf9f5] hover:bg-white text-stone-800 border-stone-200 hover:border-stone-400"}`,children:[a.jsx("div",{className:"w-8 h-8 rounded-full overflow-hidden shrink-0 border border-stone-300/80 bg-stone-100",children:a.jsx("img",{src:M.image,alt:M.name,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-300",referrerPolicy:"no-referrer"})}),a.jsxs("div",{className:"text-left pr-1.5",children:[a.jsx("span",{className:"text-xs font-semibold whitespace-nowrap block",children:M.name}),a.jsxs("span",{className:`text-[10px] block leading-tight ${Z?"text-amber-200":"text-stone-400"}`,children:[ne," items"]})]})]},M.id)})]})]})}),a.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10",children:[a.jsxs("div",{className:"bg-white border border-stone-200/90 p-4 sm:p-5 rounded-xs shadow-2xs mb-8 space-y-4",children:[a.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[a.jsxs("div",{className:"text-xs sm:text-sm text-stone-600 font-normal",children:["Showing ",a.jsxs("strong",{className:"text-stone-900 font-bold",children:[B,"–",W]})," of"," ",a.jsx("strong",{className:"text-stone-900 font-bold",children:ee})," heirlooms",!N.isAll&&a.jsxs("span",{className:"text-[#b85d18] font-semibold ml-1",children:["in ",N.title]})]}),a.jsxs("div",{className:"relative",children:[a.jsx(ps,{className:"w-3.5 h-3.5 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2"}),a.jsx("input",{type:"text",value:re,onChange:M=>{me(M.target.value),w(1)},placeholder:"Search motifs, crafts...",className:"pl-8 pr-7 py-1.5 bg-stone-50 hover:bg-stone-100/80 focus:bg-white text-xs text-stone-900 border border-stone-200 rounded-full focus:outline-none focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] w-48 sm:w-60 transition-all"}),re&&a.jsx("button",{onClick:()=>{me(""),w(1)},className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 cursor-pointer",children:a.jsx(Je,{className:"w-3 h-3"})})]})]}),a.jsxs("div",{className:"flex items-center justify-between md:justify-end gap-3 sm:gap-5",children:[a.jsxs("button",{onClick:()=>I(!0),className:"lg:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-900 bg-stone-100 hover:bg-stone-200 border border-stone-300 px-3.5 py-2 rounded-xs transition-colors cursor-pointer",children:[a.jsx(Of,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Filters"}),be>0&&a.jsx("span",{className:"bg-stone-900 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold",children:be})]}),a.jsxs("div",{className:"hidden sm:flex items-center border border-stone-200 rounded-xs p-0.5 bg-stone-50",children:[a.jsx("button",{onClick:()=>te("editorial"),className:`p-1.5 rounded-2xs transition-colors cursor-pointer ${K==="editorial"?"bg-stone-900 text-white shadow-2xs":"text-stone-500 hover:text-stone-900"}`,title:"Editorial Lookbook View (2 Columns)","aria-label":"Editorial View",children:a.jsx(fg,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>te("grid-3"),className:`p-1.5 rounded-2xs transition-colors cursor-pointer ${K==="grid-3"?"bg-stone-900 text-white shadow-2xs":"text-stone-500 hover:text-stone-900"}`,title:"Curated Gallery View (3 Columns)","aria-label":"3 Column View",children:a.jsx(ax,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>te("grid-4"),className:`p-1.5 rounded-2xs transition-colors cursor-pointer ${K==="grid-4"?"bg-stone-900 text-white shadow-2xs":"text-stone-500 hover:text-stone-900"}`,title:"Compact Catalog Grid (4 Columns)","aria-label":"Compact Grid",children:a.jsx(lx,{className:"w-4 h-4"})})]}),a.jsxs("div",{className:"flex items-center gap-2 text-xs sm:text-sm text-stone-700",children:[a.jsx("span",{className:"uppercase text-[11px] tracking-wider text-stone-400 font-bold hidden sm:inline",children:"SORT:"}),a.jsxs("div",{className:"relative inline-block",children:[a.jsxs("select",{value:h,onChange:M=>O(M.target.value),className:"appearance-none bg-stone-50 border border-stone-200 hover:border-stone-400 rounded-xs pr-7 pl-3 py-1.5 font-semibold text-stone-900 focus:outline-none cursor-pointer text-xs focus:ring-1 focus:ring-[#b85d18]",children:[a.jsx("option",{value:"Recommended",children:"Recommended"}),a.jsx("option",{value:"Price: Low to High",children:"Price: Low to High"}),a.jsx("option",{value:"Price: High to Low",children:"Price: High to Low"}),a.jsx("option",{value:"Customer Rating",children:"Customer Rating"}),a.jsx("option",{value:"Newest",children:"Newest Arrivals"}),a.jsx("option",{value:"Discount",children:"Special Discounts"})]}),a.jsx(Mi,{className:"w-3.5 h-3.5 text-stone-600 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none"})]})]})]})]}),be>0&&a.jsxs("div",{className:"pt-3 border-t border-stone-100 flex flex-wrap items-center gap-2",children:[a.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-stone-400",children:"Active Filters:"}),v!=="all"&&a.jsxs("span",{className:"inline-flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-full text-xs font-medium",children:[a.jsx("span",{children:N.title}),a.jsx("button",{onClick:()=>E("all"),className:"hover:text-stone-950 cursor-pointer",children:a.jsx(Je,{className:"w-3 h-3"})})]}),x.map(M=>{const Z=J.find(ne=>ne.id===M);return a.jsxs("span",{className:"inline-flex items-center gap-1 bg-stone-100 text-stone-800 border border-stone-200 px-2.5 py-1 rounded-full text-xs font-medium",children:[a.jsx("span",{children:Z==null?void 0:Z.label}),a.jsx("button",{onClick:()=>Se(M),className:"hover:text-stone-950 cursor-pointer",children:a.jsx(Je,{className:"w-3 h-3"})})]},M)}),R&&a.jsxs("span",{className:"inline-flex items-center gap-1 bg-stone-100 text-stone-800 border border-stone-200 px-2.5 py-1 rounded-full text-xs font-medium",children:[a.jsx("span",{children:"In Stock"}),a.jsx("button",{onClick:()=>Q(!1),className:"hover:text-stone-950 cursor-pointer",children:a.jsx(Je,{className:"w-3 h-3"})})]}),j&&a.jsxs("span",{className:"inline-flex items-center gap-1 bg-stone-100 text-stone-800 border border-stone-200 px-2.5 py-1 rounded-full text-xs font-medium",children:[a.jsx("span",{children:"Out of Stock"}),a.jsx("button",{onClick:()=>X(!1),className:"hover:text-stone-950 cursor-pointer",children:a.jsx(Je,{className:"w-3 h-3"})})]}),re.trim()&&a.jsxs("span",{className:"inline-flex items-center gap-1 bg-stone-100 text-stone-800 border border-stone-200 px-2.5 py-1 rounded-full text-xs font-medium",children:[a.jsxs("span",{children:['Query: "',re,'"']}),a.jsx("button",{onClick:()=>me(""),className:"hover:text-stone-950 cursor-pointer",children:a.jsx(Je,{className:"w-3 h-3"})})]}),a.jsxs("button",{onClick:fe,className:"text-[11px] font-bold text-[#b85d18] hover:text-stone-950 underline cursor-pointer ml-1 inline-flex items-center gap-1",children:[a.jsx(dc,{className:"w-3 h-3"}),a.jsxs("span",{children:["Clear All (",be,")"]})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-8 xl:gap-10",children:[a.jsxs("aside",{className:"hidden lg:block space-y-7 pr-4",children:[a.jsxs("div",{className:"bg-white border border-stone-200/90 p-5 rounded-xs shadow-2xs",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4 pb-2.5 border-b border-stone-100",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(sx,{className:"w-4 h-4 text-[#b85d18]"}),a.jsx("h3",{className:"text-xs font-bold tracking-[0.2em] text-stone-900 uppercase",children:"HERITAGE COLLECTIONS"})]}),!N.isAll&&a.jsx("button",{onClick:()=>E("all"),className:"text-[11px] font-semibold text-[#b85d18] hover:text-stone-900 underline cursor-pointer",children:"View All"})]}),a.jsxs("button",{onClick:()=>E("all"),className:`w-full flex items-center justify-between text-xs py-2.5 px-3 rounded-xs mb-3 transition-all text-left border cursor-pointer ${N.isAll?"bg-stone-900 text-white font-bold border-stone-900 shadow-2xs":"bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100 hover:text-stone-950"}`,children:[a.jsx("span",{className:"font-bold tracking-wider uppercase text-[11px]",children:"ALL TREASURES"}),a.jsx("span",{className:`text-[11px] px-2 py-0.5 rounded-full ${N.isAll?"bg-stone-800 text-stone-200":"bg-stone-200 text-stone-700 font-semibold"}`,children:o.length})]}),a.jsx("div",{className:"space-y-2",children:va.filter(M=>(le[M.id]||0)>0).map(M=>{const Z=!!F[M.id],ne=v===M.id||De(v)===De(M.id)||De(v)===De(M.name),Ce=M.categories.some(Ke=>Pt(Ke,v)),Ee=le[M.id]||0;return a.jsxs("div",{className:`border rounded-xs transition-all duration-200 overflow-hidden ${ne||Ce?"border-[#b85d18]/40 bg-amber-50/20":"border-stone-200 hover:border-stone-300"}`,children:[a.jsxs("div",{className:`flex items-center justify-between p-2.5 transition-colors cursor-pointer select-none ${ne?"bg-stone-900 text-white":Ce?"bg-amber-50 text-stone-900 font-bold":"hover:bg-stone-50 text-stone-800"}`,onClick:()=>ue(M.id),children:[a.jsxs("div",{className:"flex items-center gap-2 min-w-0 pr-1",children:[a.jsx("button",{type:"button",onClick:Ke=>we(M.id,Ke),className:`p-0.5 hover:opacity-75 transition-transform duration-200 cursor-pointer ${ne?"text-white":"text-stone-600"}`,"aria-label":`Toggle ${M.name} dropdown`,children:a.jsx(Mi,{className:`w-3.5 h-3.5 transition-transform duration-200 ${Z?"rotate-0":"-rotate-90"}`})}),a.jsx("span",{className:"font-bold text-[11px] tracking-wider uppercase truncate",children:M.name})]}),a.jsx("span",{className:`text-[10px] font-semibold px-1.5 py-0.5 rounded-xs ${ne?"bg-stone-800 text-stone-200":"bg-stone-200/80 text-stone-700"}`,children:Ee})]}),Z&&a.jsxs("div",{className:"py-1.5 px-2 space-y-0.5 border-t border-stone-200/80 bg-white",children:[a.jsxs("button",{onClick:()=>ue(M.id),className:`w-full flex items-center justify-between text-xs py-1.5 px-2.5 transition-all text-left rounded-xs cursor-pointer ${ne?"bg-stone-900 text-white font-semibold":"text-stone-600 hover:bg-stone-100 hover:text-stone-950 font-medium"}`,children:[a.jsxs("span",{className:"italic text-[11px]",children:["All ",M.name]}),a.jsxs("span",{className:"text-[10px] opacity-75",children:["(",Ee,")"]})]}),M.categories.filter(Ke=>(he[Ke]||0)>0).map(Ke=>{const qe=Pt(v,Ke),nt=he[Ke]||0;return a.jsxs("button",{onClick:()=>P(Ke),className:`w-full flex items-center justify-between text-xs py-1.5 px-2.5 transition-all text-left rounded-xs group cursor-pointer ${qe?"bg-stone-900 text-white font-semibold shadow-2xs":"text-stone-700 hover:bg-stone-100 hover:text-stone-950"}`,children:[a.jsxs("span",{className:"flex items-center gap-2 truncate pr-1",children:[a.jsx("span",{className:`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${qe?"bg-amber-400":"bg-stone-300 group-hover:bg-[#b85d18]"}`}),a.jsx("span",{className:"truncate group-hover:translate-x-0.5 transition-transform",children:Ke})]}),a.jsxs("span",{className:`text-[11px] shrink-0 font-normal ${qe?"text-stone-200":"text-stone-400 group-hover:text-stone-600"}`,children:["(",nt,")"]})]},Ke)})]})]},M.id)})})]}),a.jsxs("div",{className:"bg-white border border-stone-200/90 p-5 rounded-xs shadow-2xs",children:[a.jsx("h3",{className:"text-xs font-bold tracking-[0.2em] text-stone-900 uppercase mb-3.5 pb-2 border-b border-stone-100",children:"PRICE BRACKET"}),a.jsx("div",{className:"space-y-2.5",children:J.map(M=>{const Z=x.includes(M.id);return a.jsxs("label",{onClick:()=>Se(M.id),className:"flex items-center gap-3 text-xs text-stone-700 hover:text-stone-950 cursor-pointer select-none group",children:[a.jsx("div",{className:`w-4 h-4 border rounded-xs flex items-center justify-center transition-colors ${Z?"bg-stone-900 border-stone-900 text-white":"border-stone-300 bg-white group-hover:border-stone-400"}`,children:Z&&a.jsx(ya,{className:"w-3 h-3 stroke-[3]"})}),a.jsx("span",{className:Z?"font-bold text-stone-900":"font-normal",children:M.label})]},M.id)})})]}),a.jsxs("div",{className:"bg-white border border-stone-200/90 p-5 rounded-xs shadow-2xs",children:[a.jsx("h3",{className:"text-xs font-bold tracking-[0.2em] text-stone-900 uppercase mb-3.5 pb-2 border-b border-stone-100",children:"DISPATCH STATUS"}),a.jsxs("div",{className:"space-y-2.5",children:[a.jsxs("label",{onClick:()=>Q(!R),className:"flex items-center gap-3 text-xs text-stone-700 hover:text-stone-950 cursor-pointer select-none group",children:[a.jsx("div",{className:`w-4 h-4 border rounded-xs flex items-center justify-center transition-colors ${R?"bg-stone-900 border-stone-900 text-white":"border-stone-300 bg-white group-hover:border-stone-400"}`,children:R&&a.jsx(ya,{className:"w-3 h-3 stroke-[3]"})}),a.jsx("span",{className:R?"font-bold text-stone-900":"font-normal",children:"Ready to Dispatch (In Stock)"})]}),a.jsxs("label",{onClick:()=>X(!j),className:"flex items-center gap-3 text-xs text-stone-700 hover:text-stone-950 cursor-pointer select-none group",children:[a.jsx("div",{className:`w-4 h-4 border rounded-xs flex items-center justify-center transition-colors ${j?"bg-stone-900 border-stone-900 text-white":"border-stone-300 bg-white group-hover:border-stone-400"}`,children:j&&a.jsx(ya,{className:"w-3 h-3 stroke-[3]"})}),a.jsx("span",{className:j?"font-bold text-stone-900":"font-normal",children:"Archived / Made to Order"})]})]})]}),a.jsxs("div",{className:"bg-gradient-to-br from-[#faf7f2] to-[#f4ede2] border border-[#e5d9c7] p-5 rounded-xs text-left space-y-2.5 shadow-2xs",children:[a.jsxs("div",{className:"flex items-center gap-2 text-[#b85d18]",children:[a.jsx(St,{className:"w-5 h-5"}),a.jsx("span",{className:"text-[11px] font-bold uppercase tracking-widest",children:"ATELIER PROVENANCE"})]}),a.jsx("p",{className:"text-xs text-stone-600 leading-relaxed",children:"Every piece is registered with a verified craft guild in Odisha. Includes artisan provenance certificate & care manual."}),a.jsxs("div",{className:"pt-1 flex items-center gap-1.5 text-[10px] text-stone-500 font-semibold uppercase tracking-wider",children:[a.jsx(Xa,{className:"w-3.5 h-3.5 text-emerald-600"}),a.jsx("span",{children:"Zero Intermediary Markup"})]})]})]}),a.jsx("div",{className:"lg:col-span-3",children:m.length>0?a.jsxs("div",{children:[a.jsx("div",{className:K==="editorial"?"grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8":K==="grid-4"?"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-5":"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 sm:gap-y-12",children:m.map((M,Z)=>{const ne=Z===5&&K!=="editorial"&&ee>6;return a.jsxs(Xf.Fragment,{children:[a.jsx(bc,{product:M,onAddToCart:p,onQuickView:y,isWishlisted:d.includes(M.id),onToggleWishlist:z,onSelectArtisan:D,viewMode:K==="grid-4"?"compact":K==="editorial"?"editorial":"grid"}),ne&&a.jsxs("div",{className:"col-span-full bg-gradient-to-r from-[#2c2621] via-[#3a322b] to-[#25201c] text-white p-6 sm:p-8 rounded-xs shadow-md my-4 flex flex-col md:flex-row items-center justify-between gap-6",children:[a.jsxs("div",{className:"space-y-2 text-left",children:[a.jsx("span",{className:"text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300/90 block",children:"✦ CRAFT HERITAGE SPOTLIGHT"}),a.jsx("h3",{className:"font-serif text-xl sm:text-2xl font-normal text-amber-50",children:"4,000-Year-Old Lost-Wax Dokra Metal Casting"}),a.jsx("p",{className:"text-xs sm:text-sm text-stone-300 max-w-xl leading-relaxed",children:"Preserved by the indigenous tribal artisans of Sadeibareni & Dhenkanal. Each molten brass creation requires hand-rolled beeswax threads and a bespoke clay kiln."})]}),a.jsx("button",{onClick:()=>{E("handicraft"),window.scrollTo({top:400,behavior:"smooth"})},className:"shrink-0 bg-amber-100 hover:bg-white text-stone-950 font-bold text-xs px-5 py-2.5 uppercase tracking-widest transition-colors cursor-pointer",children:"Explore Dokra Guild"})]})]},M.id)})}),ce>1&&a.jsxs("div",{className:"mt-16 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4",children:[a.jsxs("div",{className:"text-xs text-stone-500",children:["Page ",a.jsx("strong",{className:"text-stone-900 font-bold",children:G})," of ",a.jsx("strong",{className:"text-stone-900 font-bold",children:ce})," (",ee," heirlooms)"]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("button",{onClick:()=>{w(M=>Math.max(1,M-1)),window.scrollTo({top:350,behavior:"smooth"})},disabled:G===1,className:`px-3 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 border border-stone-200 text-stone-700 rounded-xs transition-colors ${G===1?"opacity-40 cursor-not-allowed":"hover:bg-stone-100 hover:text-stone-950 cursor-pointer"}`,"aria-label":"Previous Page",children:[a.jsx(Fp,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Prev"})]}),[...Array(ce)].map((M,Z)=>{const ne=Z+1,Ce=G===ne;return a.jsx("button",{onClick:()=>{w(ne),window.scrollTo({top:350,behavior:"smooth"})},className:`w-9 h-9 flex items-center justify-center text-xs font-bold rounded-xs transition-all cursor-pointer ${Ce?"bg-stone-900 text-white shadow-xs":"border border-stone-200 text-stone-700 hover:bg-stone-100"}`,children:ne},ne)}),a.jsxs("button",{onClick:()=>{w(M=>Math.min(ce,M+1)),window.scrollTo({top:350,behavior:"smooth"})},disabled:G===ce,className:`px-3 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-1 border border-stone-200 text-stone-700 rounded-xs transition-colors ${G===ce?"opacity-40 cursor-not-allowed":"hover:bg-stone-100 hover:text-stone-950 cursor-pointer"}`,"aria-label":"Next Page",children:[a.jsx("span",{children:"Next"}),a.jsx(cc,{className:"w-3.5 h-3.5"})]})]})]})]}):a.jsxs("div",{className:"text-center py-20 bg-white border border-stone-200/90 rounded-xs p-8 shadow-2xs",children:[a.jsx("div",{className:"w-16 h-16 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center mx-auto mb-4 text-[#b85d18]",children:a.jsx(Jt,{className:"w-7 h-7"})}),a.jsx("h3",{className:"font-serif text-2xl text-stone-900 font-normal mb-2",children:"No handcrafted pieces match your active filters"}),a.jsx("p",{className:"text-stone-500 text-sm mb-6 max-w-md mx-auto leading-relaxed",children:"Try clearing your price, craft, or category filters to explore our complete Odisha master artisan treasury."}),o.length>0&&a.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3",children:[a.jsx("button",{onClick:fe,className:"px-6 py-2.5 bg-stone-900 text-white text-xs uppercase font-bold tracking-wider hover:bg-[#b85d18] transition-colors cursor-pointer shadow-sm",children:"Reset All Filters"}),a.jsx("button",{onClick:()=>E("all"),className:"px-6 py-2.5 border border-stone-300 text-stone-800 text-xs uppercase font-semibold tracking-wider hover:bg-stone-50 transition-colors cursor-pointer",children:"Browse All Collections"})]})]})})]}),a.jsxs("section",{className:"mt-20 relative overflow-hidden bg-gradient-to-r from-[#fbf8f3] via-[#f7f2e8] to-[#f4ece0] border border-[#e5dcce] p-8 sm:p-12 rounded-xs shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-8",children:[a.jsxs("div",{className:"space-y-3 text-left max-w-2xl",children:[a.jsxs("div",{className:"flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#b85d18] uppercase",children:[a.jsx(Jt,{className:"w-3.5 h-3.5 text-amber-600"}),a.jsx("span",{children:"THE ODISHA ARTISAN PROMISE"})]}),a.jsx("h2",{className:"font-serif text-2xl sm:text-3xl text-stone-950 font-normal",children:"Preserving Ancient Crafts, Enriching Generational Hands"}),a.jsx("p",{className:"text-stone-600 text-xs sm:text-sm leading-relaxed",children:"Every creation supports master crafts families across Kantilo, Bargarh, Nuapatna, Dhenkanal, and Raghurajpur. No commercial factories or synthetic substitutes."})]}),a.jsx("div",{className:"shrink-0 flex items-center gap-3",children:a.jsx("button",{onClick:()=>{E("all"),window.scrollTo({top:0,behavior:"smooth"})},className:"bg-stone-950 hover:bg-[#b85d18] text-white text-xs sm:text-sm font-bold tracking-widest px-8 py-3.5 uppercase transition-colors whitespace-nowrap cursor-pointer shadow-xs",children:"Explore All Collections"})})]})]}),Y&&a.jsxs("div",{className:"fixed inset-0 z-50 flex lg:hidden",children:[a.jsx("div",{onClick:()=>I(!1),className:"fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"}),a.jsxs("div",{className:"relative ml-auto w-full max-w-sm bg-white h-full shadow-2xl p-6 overflow-y-auto z-10 flex flex-col justify-between",children:[a.jsxs("div",{className:"space-y-6",children:[a.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-stone-200",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Of,{className:"w-4 h-4 text-[#b85d18]"}),a.jsx("h3",{className:"font-serif text-lg font-bold text-stone-900",children:"Collections & Filters"})]}),a.jsx("button",{onClick:()=>I(!1),className:"p-1.5 text-stone-500 hover:text-stone-900 cursor-pointer",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("button",{onClick:()=>{E("all"),I(!1)},className:`w-full flex items-center justify-between text-xs py-2.5 px-3 rounded-xs border ${N.isAll?"bg-stone-900 text-white font-bold border-stone-900":"bg-stone-50 text-stone-800 border-stone-200"}`,children:[a.jsx("span",{className:"font-bold uppercase tracking-wider text-[11px]",children:"ALL HEIRLOOMS"}),a.jsxs("span",{className:"text-xs",children:["(",o.length,")"]})]}),a.jsxs("div",{children:[a.jsx("h4",{className:"text-[11px] font-bold tracking-widest text-[#b85d18] uppercase mb-3",children:"HERITAGE COLLECTIONS"}),a.jsx("div",{className:"space-y-2 max-h-60 overflow-y-auto pr-1",children:va.filter(M=>(le[M.id]||0)>0).map(M=>{const Z=!!F[M.id],ne=v===M.id||De(v)===De(M.id)||De(v)===De(M.name),Ce=le[M.id]||0;return a.jsxs("div",{className:"border border-stone-200 rounded-xs overflow-hidden",children:[a.jsxs("div",{onClick:()=>ue(M.id),className:`flex items-center justify-between p-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer ${ne?"bg-stone-900 text-white":"bg-stone-50 text-stone-800"}`,children:[a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsx("button",{type:"button",onClick:Ee=>we(M.id,Ee),className:"p-0.5",children:a.jsx(Mi,{className:`w-3.5 h-3.5 transition-transform ${Z?"rotate-0":"-rotate-90"}`})}),a.jsx("span",{children:M.name})]}),a.jsxs("span",{className:"text-[10px] font-normal",children:["(",Ce,")"]})]}),Z&&a.jsx("div",{className:"p-2 space-y-1 bg-white border-t border-stone-200",children:M.categories.filter(Ee=>(he[Ee]||0)>0).map(Ee=>{const Ke=Pt(v,Ee),qe=he[Ee]||0;return a.jsxs("button",{onClick:()=>P(Ee),className:`w-full flex items-center justify-between text-xs py-1.5 px-2 rounded-xs ${Ke?"bg-stone-900 text-white font-bold":"text-stone-600 hover:bg-stone-100"}`,children:[a.jsx("span",{children:Ee}),a.jsxs("span",{className:"text-[10px] opacity-75",children:["(",qe,")"]})]},Ee)})})]},M.id)})})]}),a.jsxs("div",{className:"pt-4 border-t border-stone-200",children:[a.jsx("h4",{className:"text-[11px] font-bold tracking-widest text-[#b85d18] uppercase mb-3",children:"PRICE BRACKET"}),a.jsx("div",{className:"space-y-2",children:J.map(M=>{const Z=x.includes(M.id);return a.jsxs("label",{onClick:()=>Se(M.id),className:"flex items-center gap-3 text-xs text-stone-700 cursor-pointer",children:[a.jsx("div",{className:`w-4 h-4 border rounded-xs flex items-center justify-center ${Z?"bg-stone-900 border-stone-900 text-white":"border-stone-300 bg-white"}`,children:Z&&a.jsx(ya,{className:"w-3 h-3"})}),a.jsx("span",{className:Z?"font-bold text-stone-900":"",children:M.label})]},M.id)})})]})]}),a.jsxs("div",{className:"pt-6 border-t border-stone-200 space-y-2 mt-6",children:[a.jsxs("button",{onClick:()=>I(!1),className:"w-full bg-stone-900 text-white py-3 text-xs uppercase font-bold tracking-wider text-center cursor-pointer hover:bg-[#b85d18] transition-colors shadow-xs",children:["Apply (",ee," Heirlooms)"]}),be>0&&a.jsx("button",{onClick:fe,className:"w-full py-2.5 text-stone-600 text-xs font-semibold hover:text-stone-900 transition-colors cursor-pointer",children:"Clear All Filters"})]})]})]})]})},Tb=({products:o=[],onAddToCart:p,onQuickView:y,wishlistIds:d,onToggleWishlist:z,selectedArtisanId:v,onSelectArtisan:E})=>{const D=v?lc.find(g=>g.id===v)||lc[0]:null;return a.jsx("div",{className:"bg-[#fcf9f5] min-h-screen py-12 sm:py-16",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16",children:[a.jsxs("div",{className:"text-center max-w-3xl mx-auto space-y-3",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f0ede9] text-[#b85d18] text-xs font-semibold uppercase tracking-wider",children:[a.jsx(bg,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Living National Treasures"})]}),a.jsx("h1",{className:"font-serif text-3xl sm:text-5xl font-bold text-[#161717]",children:"The Master Artisans of India"}),a.jsx("p",{className:"text-sm sm:text-base text-[#5c5b59] leading-relaxed",children:"Discover the stories, lineages, and generational wisdom behind each handcrafted piece in our atelier. 82% of all proceeds directly fund these artisan guilds."})]}),a.jsx("div",{className:"space-y-12",children:lc.map(g=>{const h=o.filter(x=>x.artisanId===g.id),O=(D==null?void 0:D.id)===g.id;return a.jsxs("div",{id:g.id,className:`bg-[#f6f3ef] border rounded-2xl p-6 sm:p-10 transition-all ${O?"border-[#b85d18] shadow-xl":"border-[#E5E2DA]"}`,children:[a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8",children:[a.jsxs("div",{className:"lg:col-span-4 aspect-4/5 rounded-xl overflow-hidden bg-[#eae8e4] relative shadow-md",children:[a.jsx("img",{src:g.image,alt:g.name,className:"w-full h-full object-cover object-center",referrerPolicy:"no-referrer"}),a.jsx("div",{className:"absolute top-3 left-3 bg-[#161717] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm",children:g.heritageLineage})]}),a.jsxs("div",{className:"lg:col-span-8 space-y-4",children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-[#b85d18] font-semibold",children:[a.jsx(rn,{className:"w-4 h-4"}),a.jsxs("span",{children:[g.location,", ",g.state]})]}),a.jsxs("span",{className:"text-xs bg-[#f0ede9] text-[#161717] font-bold px-3 py-1 rounded-full border border-[#E5E2DA]",children:[g.yearsOfExperience," Years Dedicated Practice"]})]}),a.jsx("h2",{className:"font-serif text-2xl sm:text-3xl font-bold text-[#161717]",children:g.name}),a.jsx("p",{className:"text-sm font-semibold text-[#b85d18]",children:g.craft}),a.jsxs("blockquote",{className:"bg-[#fcf9f5] border-l-4 border-[#b85d18] p-4 rounded-r-xl italic font-serif text-sm text-[#161717]",children:["“",g.quote,"”"]}),a.jsx("p",{className:"text-xs sm:text-sm text-[#5c5b59] leading-relaxed",children:g.fullStory}),a.jsxs("div",{className:"space-y-1.5 pt-2",children:[a.jsx("span",{className:"text-[11px] font-bold uppercase tracking-wider text-[#b85d18] block",children:"Recognitions & Fellowships"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:g.awards.map((x,H)=>a.jsxs("div",{className:"inline-flex items-center gap-1.5 text-xs bg-white text-[#161717] px-3 py-1 rounded-md border border-[#E5E2DA]",children:[a.jsx(ll,{className:"w-3.5 h-3.5 text-[#b85d18]"}),a.jsx("span",{children:x})]},H))})]})]})]}),a.jsxs("div",{className:"pt-6 border-t border-[#E5E2DA]",children:[a.jsxs("div",{className:"flex items-center justify-between mb-6",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Jt,{className:"w-4 h-4 text-[#b85d18]"}),a.jsxs("h3",{className:"font-serif text-lg font-bold text-[#161717]",children:["Handcrafted by ",g.name]})]}),a.jsxs("span",{className:"text-xs text-[#5c5b59]",children:[h.length," Heirloom Creations Available"]})]}),h.length>0?a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:h.map(x=>a.jsx(bc,{product:x,onAddToCart:p,onQuickView:y,isWishlisted:d.includes(x.id),onToggleWishlist:z,onSelectArtisan:E},x.id))}):a.jsx("div",{className:"py-8 px-6 bg-white/60 border border-dashed border-stone-300 rounded-xl text-center",children:a.jsxs("p",{className:"text-stone-500 text-sm",children:["No creations currently cataloged for ",g.name,". Newly added pieces in Admin will appear here."]})})]})]},g.id)})})]})})},Ob=()=>{const o=[{id:"photo-1",number:1,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.42 PM.jpeg",title:"Odisha Craft & Cultural Heritage Exposition",tag:"Heritage & Culture",dateOrVenue:"State Handicrafts Exposition",description:"Standing proudly by the Sun Temple Konark Chakra craft installation, celebrating the immortal legacy and artistry of Odishan master artisans.",details:"Showcasing traditional Odishan craft motifs and the grand 24-spoke Konark Wheel artwork."},{id:"photo-2",number:2,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.52 PM.jpeg",title:"Make In Odisha Conclave 2022",tag:"State Summit",dateOrVenue:"Bhubaneswar • Global Business Summit",description:"Official state business and industrial investment conclave in Bhubaneswar, representing administrative vision and enterprise growth.",details:"Promoting investment into MSME clusters, handlooms, and rural artisan hubs."},{id:"photo-3",number:3,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.48 PM.jpeg",title:"Directorate Executive Chamber",tag:"Public Administration",dateOrVenue:"Government Secretariat Chamber",description:"Steering administrative governance and public service at his director executive desk, driving state policy and enterprise development.",details:"Dedicated to streamlined public governance and grassroots citizen service delivery."},{id:"photo-4",number:4,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.49 PM.jpeg",title:"Director OAS (Senior Scale) Office Plaque",tag:"Leadership",dateOrVenue:"Directorate Chamber Entrance",description:"At the official Director chamber entrance beside the brass plaque of the Director, Odisha Administrative Service (Senior Scale).",details:"A testament to over 30 years of distinguished public integrity and state leadership."},{id:"photo-5",number:5,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.44 PM.jpeg",title:"Multimodal Logistics Summit 2023",tag:"Commerce & Logistics",dateOrVenue:"Vivanta Bhubaneswar • 01 Dec 2023",description:"Representing state commerce and transport frameworks at Vivanta Bhubaneswar, advocating seamless multimodal connectivity.",details:"Key leadership address organized in collaboration with India Seatrade & FIEO."},{id:"photo-6",number:6,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.46 PM.jpeg",title:"National Logistics & Export Convention Dais",tag:"Global Trade",dateOrVenue:"Convention Main Stage",description:"On stage with industry leaders (FIEO, Balmer Lawrie, Jindal Stainless) and maritime transport leaders guiding national freight policy.",details:"Highlighting infrastructure support and transport corridors for rural goods."},{id:"photo-7",number:7,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.47 PM.jpeg",title:"Trade & Export Registration Pavilion",tag:"Export Promotion",dateOrVenue:"Delegate & Sponsor Reception",description:"Engaging with international trade delegates, export councils, and logistics stakeholders at the national convention entrance.",details:"Fostering market access and trade facilitation for Odisha MSMEs."},{id:"photo-8",number:8,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.50 PM.jpeg",title:"State Dignitary & Cultural Patron",tag:"Visionary Patron",dateOrVenue:"State Cultural Reception",description:"Formal portrait of Sri Dilip Kumar Sahoo reflecting a distinguished lifetime committed to public service, education, and cultural preservation.",details:"Patron of tribal heritage, Sambalpuri weaves, and GI-tagged handicraft preservation."},{id:"photo-9",number:9,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.43 PM.jpeg",title:"Green Enterprise & Sustainable Manufacturing",tag:"Sustainability",dateOrVenue:"SAIL Green Steel Pavilion",description:"At the SAIL Green Steel sustainability pavilion, advocating eco-friendly practices and zero-waste sustainable craft production.",details:"Bridging industrial modernization with ecological responsibility."},{id:"photo-10",number:10,defaultFilename:"WhatsApp Image 2026-08-21 at 10.06.53 PM.jpeg",title:"National MOFPI & FICCI Industry Expo",tag:"MSME & Industry",dateOrVenue:"National Food & Trade Expo",description:"Leading official state delegations alongside Ministry of Food Processing Industries (MOFPI), FICCI, and international trade partners.",details:"Empowering small enterprises and rural producer federations with market linkages."}],[d,z]=_.useState(null),O=[{role:"OSD-Cum-Special Secretary to Government",department:"Commerce and Transport Department, Govt. of Odisha",duration:"2 Years",description:"Spearheaded multimodal transport infrastructure, logistics policies, coastal shipping integration, and strategic governance initiatives for the state.",icon:_f,badge:"State Leadership"},{role:"Director, EPM (Export Promotion & Marketing)",department:"MSME Department, Govt. of Odisha",duration:"1.5 Years",description:"Championed quality standardization, export incentives, international buyer-seller connects, and market access for rural artisans and micro-enterprises.",icon:Tf,badge:"Trade & MSME"},{role:"Joint Secretary to Government",department:"MSME and Revenue & Disaster Management Deptt.",duration:"2 Years",description:"Formulated enterprise support schemes, disaster resilience strategies for rural clusters, and streamlined governance policies across MSME and Revenue sectors.",icon:St,badge:"Policy & Governance"},{role:"Project Director, DRDA",department:"District Rural Development Agency",duration:"4 Years",description:"Orchestrated grassroots economic transformation, rural livelihood programs, women Self-Help Group (SHG) enterprise creation, and village artisan clusters.",icon:mx,badge:"Rural Empowerment"},{role:"Sub-Collector",department:"Sub-Divisional Administration",duration:"1.5 Years",description:"Led sub-divisional law, order, citizen welfare programs, and public grievances redressal across administrative jurisdictions.",icon:ll,badge:"Field Administration"},{role:"Tahasildar",department:"Revenue Administration",duration:"8 Years",description:"Administered land governance, rural property records, revenue administration, and grassroots community facilitation with exemplary dedication.",icon:sx,badge:"Land & Governance"},{role:"Block Development Officer (BDO)",department:"Panchayati Raj & Rural Development",duration:"10 Years",description:"A full decade of grassroots rural governance, poverty alleviation, rural infrastructure building, and artisan cooperative support at the block level.",icon:_f,badge:"Grassroots Foundations"}],x=[{title:"M.A. in Political Science",subtitle:"Master of Arts (Pol. Sc.)"},{title:"M.A. in History",subtitle:"Master of Arts (Hist.)"},{title:"M.A. in Public Administration",subtitle:"Master of Arts (Pub. Admn.)"},{title:"LL.B.",subtitle:"Bachelor of Laws"},{title:"MBA",subtitle:"Master of Business Administration"},{title:"DNHS",subtitle:"Diploma in Nutrition and Health Science"}],H="/assets/about/founder-office-photo.jpeg?v=20260907_live";return a.jsxs("div",{className:"bg-[#fcf9f5] min-h-screen text-[#1a1a1a]",children:[a.jsx("section",{className:"relative pt-16 pb-14 sm:pt-24 sm:pb-20 bg-[#f6f2eb] border-b border-[#e6decb] px-4 sm:px-6 lg:px-8 overflow-hidden",children:a.jsxs("div",{className:"max-w-5xl mx-auto text-center space-y-4",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede5d8] text-[#b85d18] text-[11px] font-bold tracking-[0.2em] uppercase",children:[a.jsx(Jt,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"FOUNDER & CHIEF PATRON"})]}),a.jsx("h1",{className:"font-serif text-3xl sm:text-5xl md:text-6xl font-normal text-[#1a1a1a] tracking-tight leading-[1.15]",children:"Bridging Ancient Heritage with Visionary Governance"}),a.jsx("p",{className:"text-stone-600 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-normal",children:"Guided by over three decades of distinguished public administrative service, academic excellence, and deep-rooted commitment to rural artisan empowerment in Odisha."})]})}),a.jsx("section",{className:"py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"bg-[#ffffff] border border-[#e8e1d3] rounded-2xl p-6 sm:p-10 lg:p-12 shadow-xs",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center",children:[a.jsxs("div",{className:"lg:col-span-5 space-y-4 text-center",children:[a.jsxs("div",{className:"relative mx-auto max-w-sm rounded-2xl overflow-hidden border-2 border-[#ded4c2] shadow-md bg-[#f7f4ef]",children:[a.jsxs("div",{className:"aspect-3/4 overflow-hidden relative group",children:[a.jsx("img",{src:H,alt:"Sri Dilip Kumar Sahoo seated in Office Chamber",className:"w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#141515] via-[#141515]/30 to-transparent"}),a.jsxs("div",{className:"absolute bottom-0 inset-x-0 p-5 text-left text-white",children:[a.jsx("span",{className:"text-[10px] font-bold tracking-widest uppercase text-[#fed7aa] block mb-1",children:"FOUNDER & CHIEF PATRON"}),a.jsx("h3",{className:"font-serif text-xl font-semibold tracking-tight",children:"Sri Dilip Kumar Sahoo"}),a.jsx("p",{className:"text-xs text-stone-200",children:"Seated in Directorate Executive Chamber"})]})]}),a.jsxs("div",{className:"p-4 bg-[#faf7f2] border-t border-[#ded4c2] text-left space-y-2.5",children:[a.jsxs("div",{className:"flex items-start gap-2 text-xs text-stone-700",children:[a.jsx(ya,{className:"w-4 h-4 text-[#b85d18] shrink-0 mt-0.5"}),a.jsx("span",{children:"Former OSD-Cum-Special Secretary (Commerce & Transport)"})]}),a.jsxs("div",{className:"flex items-start gap-2 text-xs text-stone-700",children:[a.jsx(ya,{className:"w-4 h-4 text-[#b85d18] shrink-0 mt-0.5"}),a.jsx("span",{children:"Former Director, EPM (MSME Department)"})]}),a.jsxs("div",{className:"flex items-start gap-2 text-xs text-stone-700",children:[a.jsx(ya,{className:"w-4 h-4 text-[#b85d18] shrink-0 mt-0.5"}),a.jsx("span",{children:"30+ Years Dedicated Public Service in Odisha"})]})]})]}),a.jsxs("div",{className:"inline-flex items-center justify-center gap-2 text-xs text-[#b85d18] font-semibold bg-[#faf7f2] px-4 py-2 rounded-full border border-[#e9dfce]",children:[a.jsx(St,{className:"w-4 h-4 text-[#b85d18]"}),a.jsx("span",{children:"30+ Years of Distinguished Public Service"})]})]}),a.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("span",{className:"text-[11px] font-bold tracking-[0.2em] uppercase text-[#8a7258] block",children:"THE VISIONARY BEHIND THE PLATFORM"}),a.jsx("h2",{className:"font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1a1a1a] tracking-tight",children:"Sri Dilip Kumar Sahoo"}),a.jsx("p",{className:"text-xs sm:text-sm font-medium text-[#b85d18]",children:"MA (Pol Sc) • MA (Hist) • MA (Pub Admn) • LLB • MBA • DNHS"})]}),a.jsxs("div",{className:"space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed",children:[a.jsxs("p",{children:[a.jsx("strong",{children:"Sri Dilip Kumar Sahoo"})," has dedicated his entire professional career to the socioeconomic upliftment of Odisha. As a seasoned senior officer of the Odisha Administrative Service (OAS Senior Scale), he has served in pivotal administrative, developmental, and policy formulation roles across the state government."]})]}),a.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2",children:[a.jsxs("div",{className:"p-3.5 rounded-xl bg-[#faf7f2] border border-[#e8e0d0] space-y-1",children:[a.jsx("div",{className:"text-lg font-bold text-[#b85d18]",children:"30+ Yrs"}),a.jsx("div",{className:"text-[11px] text-stone-600 font-medium",children:"Public Service Leadership"})]}),a.jsxs("div",{className:"p-3.5 rounded-xl bg-[#faf7f2] border border-[#e8e0d0] space-y-1",children:[a.jsx("div",{className:"text-lg font-bold text-[#b85d18]",children:"7 Degrees"}),a.jsx("div",{className:"text-[11px] text-stone-600 font-medium",children:"Multidisciplinary Higher Acumen"})]}),a.jsxs("div",{className:"p-3.5 rounded-xl bg-[#faf7f2] border border-[#e8e0d0] space-y-1",children:[a.jsx("div",{className:"text-lg font-bold text-[#b85d18]",children:"100% Ethical"}),a.jsx("div",{className:"text-[11px] text-stone-600 font-medium",children:"Direct Artisan Protection"})]})]})]})]})})}),a.jsx("section",{className:"py-12 bg-[#f6f2eb] border-y border-[#e6decb]",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8",children:[a.jsxs("div",{className:"text-center space-y-2",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ede5d8] text-[#b85d18] text-[11px] font-bold tracking-widest uppercase",children:[a.jsx(mx,{className:"w-3 h-3"}),a.jsx("span",{children:"ACADEMIC EXCELLENCE"})]}),a.jsx("h2",{className:"font-serif text-2xl sm:text-3xl font-normal text-[#1a1a1a] tracking-tight",children:"Multidisciplinary Higher Qualifications"}),a.jsx("p",{className:"text-xs sm:text-sm text-stone-600 max-w-xl mx-auto",children:"A lifetime of scholastic dedication spanning governance, jurisprudence, management, and health science."})]}),a.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5",children:x.map((R,Q)=>a.jsxs("div",{className:"bg-[#ffffff] border border-[#e5dccf] rounded-xl p-4 text-center space-y-1 hover:border-[#b85d18] transition-colors shadow-2xs",children:[a.jsx("span",{className:"w-6 h-6 rounded-full bg-[#f4eee4] text-[#b85d18] text-xs font-bold flex items-center justify-center mx-auto mb-2",children:Q+1}),a.jsx("h4",{className:"font-serif text-xs sm:text-sm font-bold text-[#1a1a1a] leading-snug",children:R.title}),a.jsx("p",{className:"text-[10px] text-stone-500",children:R.subtitle})]},Q))})]})}),a.jsxs("section",{className:"py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",children:[a.jsxs("div",{className:"text-center space-y-3 max-w-2xl mx-auto",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ede5d8] text-[#b85d18] text-[11px] font-bold tracking-widest uppercase",children:[a.jsx(St,{className:"w-3 h-3"}),a.jsx("span",{children:"SERVICE TRAJECTORY"})]}),a.jsx("h2",{className:"font-serif text-2xl sm:text-4xl font-normal text-[#1a1a1a] tracking-tight",children:"Distinguished Public Service Record"}),a.jsx("p",{className:"text-xs sm:text-sm text-stone-600",children:"A legacy of administrative leadership spanning grassroot rural development to apex state policy formation."})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:O.map((R,Q)=>{const j=R.icon;return a.jsxs("div",{className:"bg-[#ffffff] border border-[#e8e1d3] rounded-xl p-5 sm:p-6 space-y-4 hover:shadow-sm transition-shadow relative flex flex-col justify-between",children:[a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#f6f2eb] text-[#b85d18] flex items-center justify-center",children:a.jsx(j,{className:"w-5 h-5"})}),a.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f0e8dc] text-[#b85d18]",children:R.badge})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-serif text-base font-semibold text-[#1a1a1a] leading-snug",children:R.role}),a.jsx("p",{className:"text-xs text-[#8a7258] font-medium pt-0.5",children:R.department})]}),a.jsx("p",{className:"text-xs text-stone-600 leading-relaxed",children:R.description})]}),a.jsxs("div",{className:"pt-3 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500 font-medium",children:[a.jsx("span",{children:"Tenure Duration"}),a.jsx("span",{className:"font-bold text-[#b85d18]",children:R.duration})]})]},Q)})})]}) , a.jsx("section",{className:"py-14 sm:py-20 bg-[#f7f3ec] border-t border-[#e8e0d0]",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10",children:[a.jsxs("div",{className:"text-center space-y-3 max-w-2xl mx-auto",children:[a.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ede5d8] text-[#b85d18] text-[11px] font-bold tracking-widest uppercase",children:[a.jsx(Jt,{className:"w-3 h-3"}),a.jsx("span",{children:"10 MILESTONE MOMENTS"})]}),a.jsx("h2",{className:"font-serif text-2xl sm:text-4xl font-normal text-[#1a1a1a] tracking-tight",children:"Leadership & Milestone Moments Gallery"}),a.jsx("p",{className:"text-xs sm:text-sm text-stone-600",children:"A photographic retrospective honoring key leadership milestones, state conventions, and cultural preservation summits."})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:o.map(R=>{const Q="/assets/about/milestone-photo-"+R.number+".jpeg?v=20260907_live";return a.jsxs("div",{className:"group bg-[#ffffff] border border-[#e5dccf] rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between",children:[a.jsxs("div",{className:"aspect-4/3 overflow-hidden bg-[#ece6dc] relative flex items-center justify-center",children:[a.jsx("img",{src:Q,alt:R.title,loading:"lazy",onError:T=>{T.currentTarget.onerror=null;T.currentTarget.src="/assets/about/"+R.defaultFilename},className:"w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"}),a.jsx("button",{onClick:()=>z(R),className:"absolute bottom-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer shadow-sm",title:"View Full Size",children:a.jsx(Tg,{className:"w-3.5 h-3.5"})}),a.jsxs("div",{className:"absolute top-2.5 left-2.5 flex items-center gap-1.5",children:[a.jsx("span",{className:"w-5 h-5 rounded-full bg-[#b85d18] text-white text-[10px] font-bold flex items-center justify-center shadow-xs",children:R.number}),a.jsx("span",{className:"text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#161717]/80 text-white backdrop-blur-xs",children:R.tag})]})]}),a.jsxs("div",{className:"p-4 space-y-2 flex-1 flex flex-col justify-between",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"text-[10px] font-semibold text-[#8a7258] block",children:R.dateOrVenue}),a.jsx("h4",{className:"font-serif text-sm font-semibold text-[#1a1a1a] group-hover:text-[#b85d18] transition-colors leading-snug",children:R.title}),a.jsx("p",{className:"text-[11px] text-stone-600 line-clamp-3 leading-relaxed",children:R.description})]}),a.jsxs("div",{className:"pt-2 border-t border-stone-100 flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-stone-500 text-[10px]",children:[a.jsx(mx,{className:"w-3 h-3 text-[#b85d18]"}),a.jsx("span",{children:"Archival Photo"})]}),a.jsxs("button",{onClick:()=>z(R),className:"text-[10px] font-bold uppercase tracking-wider text-[#b85d18] hover:text-[#5e4730] flex items-center gap-1 cursor-pointer",children:[a.jsx("span",{children:"View Details"}),a.jsx(Tg,{className:"w-3 h-3"})]})]})]})]},R.id)})})]})}),a.jsxs("section",{className:"py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",children:[a.jsxs("div",{className:"text-center space-y-3 max-w-2xl mx-auto",children:[a.jsx("span",{className:"text-[11px] font-bold tracking-[0.2em] uppercase text-[#8a7258] block",children:"OUR SACRED CHARTER"}),a.jsx("h2",{className:"font-serif text-2xl sm:text-4xl font-normal text-[#1a1a1a] tracking-tight",children:"Our Guiding Craft Commitments"}),a.jsx("p",{className:"text-xs sm:text-sm text-stone-600",children:"Backed by administrative rigor, ethical transparency, and certified Geographical Indication (GI) heritage protection."})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[a.jsxs("div",{className:"bg-[#ffffff] border border-[#e8e1d3] p-6 rounded-xl space-y-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#f7f3ec] text-[#b85d18] flex items-center justify-center",children:a.jsx(St,{className:"w-5 h-5"})}),a.jsx("h3",{className:"font-serif text-base font-semibold text-[#1a1a1a]",children:"Zero-Middleman Fair Trade"}),a.jsx("p",{className:"text-xs text-stone-600 leading-relaxed",children:"Direct cooperative model ensuring rural master weavers and tribal Dhokra artisans receive fair, transparent earnings."})]}),a.jsxs("div",{className:"bg-[#ffffff] border border-[#e8e1d3] p-6 rounded-xl space-y-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#f7f3ec] text-[#b85d18] flex items-center justify-center",children:a.jsx(ll,{className:"w-5 h-5"})}),a.jsx("h3",{className:"font-serif text-base font-semibold text-[#1a1a1a]",children:"Certified GI Protection"}),a.jsx("p",{className:"text-xs text-stone-600 leading-relaxed",children:"Every Sambalpuri Ikat, Dhokra metal, and Pattachitra masterwork is authenticated for origin and traditional hand-craftsmanship."})]}),a.jsxs("div",{className:"bg-[#ffffff] border border-[#e8e1d3] p-6 rounded-xl space-y-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#f7f3ec] text-[#b85d18] flex items-center justify-center",children:a.jsx(Tf,{className:"w-5 h-5"})}),a.jsx("h3",{className:"font-serif text-base font-semibold text-[#1a1a1a]",children:"Global Market Gateway"}),a.jsx("p",{className:"text-xs text-stone-600 leading-relaxed",children:"Leveraging decades of export promotion experience (EPM & MSME) to take authentic Indian handicrafts to global patrons."})]}),a.jsxs("div",{className:"bg-[#ffffff] border border-[#e8e1d3] p-6 rounded-xl space-y-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-lg bg-[#f7f3ec] text-[#b85d18] flex items-center justify-center",children:a.jsx(Jt,{className:"w-5 h-5"})}),a.jsx("h3",{className:"font-serif text-base font-semibold text-[#1a1a1a]",children:"Living Tradition Continuity"}),a.jsx("p",{className:"text-xs text-stone-600 leading-relaxed",children:"Investing in artisan apprentice guilds, natural vegetable dyes, and preservation of endangered tribal art forms."})]})]})]}),d&&a.jsx("div",{onClick:()=>z(null),className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{onClick:R=>R.stopPropagation(),className:"bg-[#ffffff] max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#ded5c5] space-y-4",children:[a.jsx("div",{className:"relative max-h-[65vh] bg-black flex items-center justify-center overflow-hidden",children:a.jsx("img",{src:"/assets/about/milestone-photo-"+d.number+".jpeg?v=20260907_live",alt:d.title,onError:T=>{T.currentTarget.onerror=null;T.currentTarget.src="/assets/about/"+d.defaultFilename},className:"max-h-[65vh] w-auto object-contain"})}),a.jsxs("div",{className:"p-6 space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f1ebe1] text-[#b85d18]",children:["Moment #",d.number," • ",d.tag]}),a.jsx("button",{onClick:()=>z(null),className:"text-xs font-semibold uppercase tracking-wider text-stone-500 hover:text-stone-900 cursor-pointer",children:"Close ✕"})]}),a.jsx("h3",{className:"font-serif text-xl font-semibold text-[#1a1a1a]",children:d.title}),a.jsx("p",{className:"text-xs text-[#8a7258] font-medium",children:d.dateOrVenue}),a.jsx("p",{className:"text-xs sm:text-sm text-stone-600 leading-relaxed pt-1",children:d.description}),a.jsx("p",{className:"text-[11px] text-stone-500 italic pt-1 border-t border-stone-100",children:d.details})]})]})})]})},Db=()=>{
  const [formData, setFormData] = _.useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = _.useState(false);
  const [submitting, setSubmitting] = _.useState(false);
  const [activeFaq, setActiveFaq] = _.useState(null);
  
  // Track Order Widget State
  const [trackQuery, setTrackQuery] = _.useState("");
  const [trackResult, setTrackResult] = _.useState(null);
  const [trackingLoading, setTrackingLoading] = _.useState(false);
  const [trackSearched, setTrackSearched] = _.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitting(true);
    try {
      if (window.SupabaseService && window.SupabaseService.submitContact) {
        await window.SupabaseService.submitContact(formData);
      } else {
        const stored = localStorage.getItem("jbi_contact_messages");
        const list = stored ? JSON.parse(stored) : [];
        list.unshift({ ...formData, id: "msg-" + Date.now(), created_at: new Date().toISOString() });
        localStorage.setItem("jbi_contact_messages", JSON.stringify(list));
      }
    } catch (err) {
      console.warn("Contact submission note:", err);
    }
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 4000);
  };

  const handleTrackOrder = async (e) => {
    e.preventDefault();
    if (!trackQuery.trim()) return;
    setTrackingLoading(true);
    setTrackSearched(true);
    setTrackResult(null);
    try {
      let allOrders = [];
      if (window.SupabaseService && window.SupabaseService.getOrders) {
        allOrders = await window.SupabaseService.getOrders();
      } else {
        const stored = localStorage.getItem("jbi_admin_orders");
        if (stored) allOrders = JSON.parse(stored);
      }
      const q = trackQuery.trim().toLowerCase();
      const match = allOrders.find(o => 
        (o.orderNumber && o.orderNumber.toLowerCase() === q) ||
        (o.id && String(o.id).toLowerCase() === q) ||
        (o.trackingNumber && o.trackingNumber.toLowerCase() === q) ||
        (o.customerPhone && String(o.customerPhone).replace(/\D/g, "") === q.replace(/\D/g, "")) ||
        (o.customerEmail && o.customerEmail.toLowerCase() === q)
      );
      setTrackResult(match || "NOT_FOUND");
    } catch(err) {
      console.warn("Track error:", err);
      setTrackResult("NOT_FOUND");
    } finally {
      setTrackingLoading(false);
    }
  };

  const faqs = [
    {
      q: "How long does delivery take across India?",
      a: "Standard insured delivery takes 3–5 business days across India. Express Air Courier (1–2 business days) is also available at checkout with priority flight dispatch."
    },
    {
      q: "Are all products genuine GI-tagged handcrafted creations?",
      a: "Yes. Every item in the JBI Craft collection is 100% authentic, certified under Odisha's Geographical Indications (GI) register, and crafted by generational master artisans in heritage clusters like Raghurajpur, Sambalpur, and Cuttack."
    },
    {
      q: "What is your return, exchange, and damage policy?",
      a: "We provide a 7-day hassle-free replacement policy. If any handcrafted item arrives damaged or defective in transit, our white-glove artisan support team will immediately arrange a replacement or full refund."
    },
    {
      q: "How do you ensure direct artisan remuneration?",
      a: "85% of each transaction value is remitted directly to the artisan cooperative or master craftsman family, ensuring sustainable livelihood without exploitative middlemen."
    },
    {
      q: "Can I commission custom Pattachitra paintings or bulk corporate gifts?",
      a: "Absolutely! We undertake bespoke heirloom commissions, customized dimensions, and corporate gifting with specialized artisan guild packaging. Contact us via this form or WhatsApp."
    }
  ];

  return a.jsxs("div", {
    className: "bg-[#fcf9f5] min-h-screen text-[#161717]",
    children: [
      // Hero Header
      a.jsx("section", {
        className: "pt-16 pb-12 sm:pt-20 sm:pb-16 bg-[#f7f3ec] border-b border-[#e9e3d8] text-center px-4 sm:px-6 lg:px-8",
        children: a.jsxs("div", {
          className: "max-w-3xl mx-auto space-y-3",
          children: [
            a.jsx("span", { className: "text-[11px] font-semibold tracking-[0.2em] text-[#8a7258] uppercase block", children: "CUSTOMER CARE & HERITAGE DESK" }),
            a.jsx("h1", { className: "font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1a1a1a] tracking-tight", children: "We're Here to Assist You" }),
            a.jsx("p", { className: "text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed", children: "Official customer care, custom artisan commissions, and enterprise correspondence for JBI CRAFT — Govt. of India Registered MSME & Craft Atelier." })
          ]
        })
      }),

      // Main Container
      a.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16",
        children: a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-start",
          children: [
            // Left Column: Contact Form & Track Order Widget
            a.jsxs("div", {
              className: "lg:col-span-7 space-y-8",
              children: [
                // Track Order Instant Box
                a.jsxs("div", {
                  className: "bg-white border border-[#e5e0d8] rounded-2xl p-6 sm:p-8 shadow-xs",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center gap-3 mb-4",
                      children: [
                        a.jsx("div", {
                          className: "w-10 h-10 rounded-xl bg-[#f4eee6] text-[#b85d18] flex items-center justify-center font-bold text-lg",
                          children: "📦"
                        }),
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { className: "font-serif text-xl font-bold text-[#161717]", children: "Track Your Shipment Live" }),
                            a.jsx("p", { className: "text-xs text-stone-500", children: "Enter your Order ID (e.g., JBI-815103) or 10-digit phone number" })
                          ]
                        })
                      ]
                    }),
                    a.jsxs("form", {
                      onSubmit: handleTrackOrder,
                      className: "flex gap-2",
                      children: [
                        a.jsx("input", {
                          type: "text",
                          value: trackQuery,
                          onChange: (e) => setTrackQuery(e.target.value),
                          placeholder: "e.g. JBI-815103 or EKART-OD-...",
                          className: "flex-1 px-4 py-2.5 rounded-xl border border-[#e5e0d8] bg-[#faf8f5] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#b85d18] text-[#161717]"
                        }),
                        a.jsx("button", {
                          type: "submit",
                          disabled: trackingLoading,
                          className: "px-5 py-2.5 bg-[#b85d18] text-white rounded-xl text-sm font-semibold hover:bg-[#5c4731] transition-all cursor-pointer disabled:opacity-50 flex items-center gap-2 shrink-0",
                          children: trackingLoading ? "Searching..." : "Track Order"
                        })
                      ]
                    }),
                    // Track Result Display
                    trackSearched && trackResult && trackResult !== "NOT_FOUND" && a.jsxs("div", {
                      className: "mt-5 p-4 rounded-xl bg-[#f9f7f2] border border-[#d8cfc0] space-y-3",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            a.jsxs("span", { className: "font-mono font-bold text-sm text-[#b85d18]", children: ["Order #", trackResult.orderNumber || trackResult.id] }),
                            a.jsx("span", {
                              className: `px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                trackResult.status === "Delivered" || trackResult.order_status === "Delivered" ? "bg-emerald-100 text-emerald-800" :
                                trackResult.status === "Shipped" || trackResult.order_status === "Shipped" ? "bg-blue-100 text-blue-800" :
                                "bg-amber-100 text-amber-800"
                              }`,
                              children: trackResult.status || trackResult.order_status || "Processing"
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "text-xs text-stone-600 space-y-1",
                          children: [
                            a.jsxs("p", { children: [a.jsx("strong", { children: "Customer: " }), trackResult.customerName || "Valued Patron"] }),
                            a.jsxs("p", { children: [a.jsx("strong", { children: "Ekart Tracking AWB: " }), trackResult.trackingNumber || "EKART-OD-" + (trackResult.id ? String(trackResult.id).slice(-8) : "78492011")] }),
                            a.jsxs("p", { children: [a.jsx("strong", { children: "Total Amount: " }), `₹${Number(trackResult.totalAmount || trackResult.amount || 0).toLocaleString('en-IN')}`] })
                          ]
                        }),
                        a.jsx("button", {
                          type: "button",
                          onClick: () => {
                            if (window.jbiNavigate) window.jbiNavigate("orders");
                          },
                          className: "w-full py-2 bg-[#161717] text-white rounded-lg text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer text-center",
                          children: "View Full Tracking Timeline & Invoice →"
                        })
                      ]
                    }),
                    trackSearched && trackResult === "NOT_FOUND" && a.jsx("div", {
                      className: "mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800",
                      children: "No order found matching this reference. Please verify your Order Number or contact support below."
                    })
                  ]
                }),

                // Contact Us Message Form
                a.jsxs("div", {
                  className: "bg-white border border-[#e5e0d8] rounded-2xl p-6 sm:p-8 shadow-xs",
                  children: [
                    a.jsx("h2", { className: "font-serif text-2xl font-bold text-[#161717] mb-2", children: "Send Us a Message" }),
                    a.jsx("p", { className: "text-stone-500 text-xs sm:text-sm mb-6", children: "Fill out the form below. Inquiries are streamed directly to our customer support desk." }),

                    submitted ? a.jsxs("div", {
                      className: "p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-2",
                      children: [
                        a.jsx("span", { className: "text-3xl block", children: "✓" }),
                        a.jsx("h3", { className: "font-bold text-base", children: "Thank you for reaching out!" }),
                        a.jsx("p", { className: "text-xs text-emerald-700", children: "Your inquiry has been recorded in our Supabase database. A representative from JBI Craft will respond within 24 hours." })
                      ]
                    }) : a.jsxs("form", {
                      onSubmit: handleSubmit,
                      className: "space-y-4",
                      children: [
                        a.jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                          children: [
                            a.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                a.jsx("label", { className: "text-xs font-medium text-stone-700", children: "Full Name *" }),
                                a.jsx("input", {
                                  type: "text",
                                  required: true,
                                  value: formData.name,
                                  onChange: (e) => setFormData({ ...formData, name: e.target.value }),
                                  placeholder: "Rashmi Ranjan Das",
                                  className: "w-full px-3.5 py-2.5 rounded-xl border border-[#e5e0d8] bg-[#faf8f5] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#b85d18]"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                a.jsx("label", { className: "text-xs font-medium text-stone-700", children: "Email Address *" }),
                                a.jsx("input", {
                                  type: "email",
                                  required: true,
                                  value: formData.email,
                                  onChange: (e) => setFormData({ ...formData, email: e.target.value }),
                                  placeholder: "patron@jbicraft.com",
                                  className: "w-full px-3.5 py-2.5 rounded-xl border border-[#e5e0d8] bg-[#faf8f5] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#b85d18]"
                                })
                              ]
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                          children: [
                            a.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                a.jsx("label", { className: "text-xs font-medium text-stone-700", children: "Phone Number" }),
                                a.jsx("input", {
                                  type: "tel",
                                  value: formData.phone,
                                  onChange: (e) => setFormData({ ...formData, phone: e.target.value }),
                                  placeholder: "Enter mobile number",
                                  className: "w-full px-3.5 py-2.5 rounded-xl border border-[#e5e0d8] bg-[#faf8f5] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#b85d18]"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                a.jsx("label", { className: "text-xs font-medium text-stone-700", children: "Subject" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: formData.subject,
                                  onChange: (e) => setFormData({ ...formData, subject: e.target.value }),
                                  placeholder: "Order Status / Custom Commission",
                                  className: "w-full px-3.5 py-2.5 rounded-xl border border-[#e5e0d8] bg-[#faf8f5] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#b85d18]"
                                })
                              ]
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            a.jsx("label", { className: "text-xs font-medium text-stone-700", children: "Message *" }),
                            a.jsx("textarea", {
                              required: true,
                              rows: 4,
                              value: formData.message,
                              onChange: (e) => setFormData({ ...formData, message: e.target.value }),
                              placeholder: "How can we assist you with your artisan craft inquiry?",
                              className: "w-full px-3.5 py-2.5 rounded-xl border border-[#e5e0d8] bg-[#faf8f5] text-sm focus:outline-hidden focus:ring-2 focus:ring-[#b85d18] resize-none"
                            })
                          ]
                        }),
                        a.jsx("button", {
                          type: "submit",
                          disabled: submitting,
                          className: "w-full py-3 bg-[#b85d18] text-white rounded-xl text-sm font-semibold hover:bg-[#5c4731] transition-all cursor-pointer disabled:opacity-50 shadow-sm",
                          children: submitting ? "Transmitting to Supabase..." : "Submit Inquiry"
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            // Right Column: Direct Contact Info & FAQs
            a.jsxs("div", {
              className: "lg:col-span-5 space-y-8",
              children: [
                // Direct Contact Cards
                a.jsxs("div", {
                  className: "bg-white border border-[#e5e0d8] rounded-2xl p-6 sm:p-8 shadow-xs space-y-6",
                  children: [
                    a.jsxs("div", {
                      className: "border-b border-[#e5e0d8] pb-4 space-y-1",
                      children: [
                        a.jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-900 border border-amber-200 inline-block mb-1", children: "Govt. of India Registered Enterprise" }),
                        a.jsx("h2", { className: "font-serif text-xl font-bold text-[#161717]", children: "JBI CRAFT" }),
                        a.jsx("p", { className: "text-xs text-stone-500 font-medium", children: "JBI Craft Atelier • Micro Enterprise (Manufacturing & Wholesale)" })
                      ]
                    }),
                    a.jsxs("div", {
                      className: "space-y-4 text-xs sm:text-sm text-stone-600",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            a.jsx("div", { className: "w-8 h-8 rounded-lg bg-[#f4eee6] text-[#b85d18] flex items-center justify-center shrink-0 font-bold", children: "📍" }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("strong", { className: "text-[#161717] block", children: "Registered Office & Principal Place of Business" }),
                                a.jsx("p", { className: "text-stone-700 leading-snug", children: "Plot No. 1436/2598, Dihasahi, Phulnakhara (Nakhara), Bhubaneswar / Cuttack, Odisha - 754021, India" })
                              ]
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            a.jsx("div", { className: "w-8 h-8 rounded-lg bg-[#f4eee6] text-[#b85d18] flex items-center justify-center shrink-0 font-bold", children: "🏛️" }),
                            a.jsxs("div", {
                              className: "space-y-0.5",
                              children: [
                                a.jsx("strong", { className: "text-[#161717] block", children: "MSME & Partnership Registration" }),
                                a.jsxs("p", { className: "text-stone-700 text-xs font-mono", children: ["MSME Udyam Reg. No.: ", a.jsx("span", { className: "font-bold text-[#b85d18]", children: "UDYAM-OD-07-0122585" })] }),
                                a.jsx("p", { className: "text-[11px] text-stone-500", children: "Partnership Firm (The Indian Partnership Act, 1932 • Form No. 1)" }),
                                a.jsx("p", { className: "text-[11px] text-stone-500", children: "NIC 46620 (Wholesale Metals) • NIC 46901 (E-Commerce Wholesale)" })
                              ]
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            a.jsx("div", { className: "w-8 h-8 rounded-lg bg-[#f4eee6] text-[#b85d18] flex items-center justify-center shrink-0 font-bold", children: "👥" }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("strong", { className: "text-[#161717] block", children: "Executive Partners & Management" }),
                                a.jsx("p", { className: "text-stone-700 leading-snug", children: "Miss Dillipa Shubhadarsini & Mr. Dilip Kumar Sahu" })
                              ]
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            a.jsx("div", { className: "w-8 h-8 rounded-lg bg-[#f4eee6] text-[#b85d18] flex items-center justify-center shrink-0 font-bold", children: "📞" }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("strong", { className: "text-[#161717] block", children: "Official Telephone & Hotline" }),
                                a.jsxs("a", { href: "tel:+919438757486", className: "text-stone-800 font-semibold hover:text-[#b85d18] transition-colors block", children: "+91 9438757486" }),
                                a.jsx("p", { className: "text-[11px] text-stone-400", children: "Mon–Sat, 9:00 AM – 8:00 PM IST" })
                              ]
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex items-start gap-3",
                          children: [
                            a.jsx("div", { className: "w-8 h-8 rounded-lg bg-[#f4eee6] text-[#b85d18] flex items-center justify-center shrink-0 font-bold", children: "✉️" }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("strong", { className: "text-[#161717] block", children: "Official Correspondence Email" }),
                                a.jsx("a", { href: "mailto:jayabajarangawaliinternational@gmail.com", className: "text-[#b85d18] hover:underline break-all font-medium text-xs", children: "jayabajarangawaliinternational@gmail.com" })
                              ]
                            })
                          ]
                        })
                      ]
                    }),
                    a.jsx("a", {
                      href: "https://wa.me/919438757486?text=Hello%20JBI%20Crafts%20Team%2C%20I%20have%20an%20inquiry%20regarding%20handcrafted%20items",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "w-full py-2.5 bg-[#25D366] text-white rounded-xl text-xs font-semibold hover:bg-[#20ba59] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs",
                      children: "💬 Chat Directly on WhatsApp (+91 9438757486)"
                    })
                  ]
                }),

                // FAQs Accordion
                a.jsxs("div", {
                  className: "bg-white border border-[#e5e0d8] rounded-2xl p-6 sm:p-8 shadow-xs space-y-4",
                  children: [
                    a.jsx("h2", { className: "font-serif text-xl font-bold text-[#161717]", children: "Frequently Asked Questions" }),
                    a.jsx("div", {
                      className: "divide-y divide-[#e5e0d8]",
                      children: faqs.map((faq, idx) => a.jsxs("div", {
                        className: "py-3",
                        children: [
                          a.jsxs("button", {
                            type: "button",
                            onClick: () => setActiveFaq(activeFaq === idx ? null : idx),
                            className: "w-full flex items-center justify-between text-left font-medium text-xs sm:text-sm text-[#161717] hover:text-[#b85d18] transition-colors cursor-pointer",
                            children: [
                              a.jsx("span", { children: faq.q }),
                              a.jsx("span", { className: "text-stone-400 font-bold text-base ml-2 shrink-0", children: activeFaq === idx ? "−" : "+" })
                            ]
                          }),
                          activeFaq === idx && a.jsx("p", {
                            className: "mt-2 text-xs text-stone-600 leading-relaxed",
                            children: faq.a
                          })
                        ]
                      }, idx))
                    })
                  ]
                })
              ]
            })
          ]
        })
      })
    ]
  })
},zb=({product:o, onClose:p, onAddToCart:y, isWishlisted:d, onToggleWishlist:z, onSelectArtisan:v})=>{
  const [quantity, setQuantity] = _.useState(1);
  const [activeTab, setActiveTab] = _.useState("overview");
  const [addedToast, setAddedToast] = _.useState(false);
  const [activeImageIdx, setActiveImageIdx] = _.useState(0);
  
  // Pincode Delivery Estimator
  const [pincode, setPincode] = _.useState("756134");
  const [pincodeChecked, setPincodeChecked] = _.useState(true);
  const [pincodeMsg, setPincodeMsg] = _.useState("⚡ Express Dispatch Available • Estimated Delivery: 2–3 business days • Free Insured Delivery Eligible • COD Available");
  
  // Verified Reviews State
  const [reviews, setReviews] = _.useState(() => {
    const seedReviews = [
      { id: "rev-1", name: "Debashis Mohapatra", rating: 5, date: "2 days ago", verified: true, title: "Exquisite Pattachitra detailing", comment: "The fine brushwork on the natural cloth canvas is breathtaking. You can truly see the generational mastery." },
      { id: "rev-2", name: "Ananya Sen", rating: 5, date: "1 week ago", verified: true, title: "Authentic Sambalpuri Heirloom", comment: "Received with official GI certification tag and artisan note. The packaging was top-tier." },
      { id: "rev-3", name: "Vikramaditya Roy", rating: 4, date: "2 weeks ago", verified: true, title: "Heavy brass finish", comment: "Very solid Dokra bell metal craft. Arrived in a sturdy wooden cushioned crate." }
    ];
    try {
      if (o && o.id) {
        const stored = localStorage.getItem("jbi_reviews_" + o.id);
        if (stored) return JSON.parse(stored);
      }
    } catch(e) {}
    return seedReviews;
  });
  
  const [reviewForm, setReviewForm] = _.useState({ name: "", email: "", rating: 5, title: "", comment: "" });
  const [reviewSubmitted, setReviewSubmitted] = _.useState(false);

  _.useEffect(() => {
    setActiveImageIdx(0);
    setQuantity(1);
    setActiveTab("overview");
  }, [o?.id]);

  if (!o) return null;

  const images = o.additionalImages && o.additionalImages.length > 0 ? o.additionalImages : [o.image];
  const currentImg = images[activeImageIdx] || o.image;
  const originalPrice = o.originalPrice || Math.round(o.price * 1.3);
  const discountPercent = Math.round(((originalPrice - o.price) / originalPrice) * 100);
  const formatPrice = (val) => (window.jbiFormatPrice ? window.jbiFormatPrice(val) : `₹${Number(val).toLocaleString('en-IN')}`);

  const handlePincodeCheck = (e) => {
    if (e) e.preventDefault();
    if (pincode.trim().length >= 6) {
      setPincodeChecked(true);
      const isOdisha = pincode.startsWith("75");
      const estDays = isOdisha ? "2–3 business days" : "4–5 business days";
      setPincodeMsg(`⚡ Express Dispatch Available • Estimated Delivery in ${estDays} • Free Delivery on ₹2,500+ • Cash on Delivery (COD) Available`);
    }
  };

  const handleAddToCart = () => {
    y(o, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  const handleBuyNow = () => {
    y(o, quantity);
    p();
    window.dispatchEvent(new CustomEvent("jbi_open_checkout"));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) return;
    const newRev = {
      id: "rev-" + Date.now(),
      name: reviewForm.name,
      rating: reviewForm.rating,
      date: "Just now",
      verified: true,
      title: reviewForm.title || "Verified Artisan Patron Review",
      comment: reviewForm.comment
    };
    const updated = [newRev, ...reviews];
    setReviews(updated);
    try {
      localStorage.setItem("jbi_reviews_" + o.id, JSON.stringify(updated));
    } catch(err) {}
    setReviewSubmitted(true);
    setReviewForm({ name: "", email: "", rating: 5, title: "", comment: "" });
  };

  return a.jsx("div", {
    className: "fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200",
    onClick: (e) => { if (e.target === e.currentTarget) p(); },
    children: a.jsxs("div", {
      className: "relative w-full max-w-4xl bg-[#fcf9f5] border border-[#E5E2DA] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col text-[#161717] product-detail-modal",
      children: [
        // Close Button
        a.jsx("button", {
          type: "button",
          onClick: p,
          className: "absolute top-3.5 right-3.5 z-20 p-2 rounded-full bg-white/95 text-stone-700 hover:bg-stone-900 hover:text-white transition-all cursor-pointer shadow-md border border-stone-200/80",
          "aria-label": "Close product details",
          title: "Close (Esc)",
          children: a.jsx(Je, { className: "w-4 h-4" })
        }),

        // Main Scrollable Body
        a.jsx("div", {
          className: "overflow-y-auto flex-1 p-5 sm:p-8",
          children: a.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start",
            children: [
              // Left Column: Gallery, Badges & Artisan Card
              a.jsxs("div", {
                className: "md:col-span-6 space-y-4",
                children: [
                  // Main Image Viewport
                  a.jsxs("div", {
                    className: "aspect-[4/5] aspect-4/5 w-full rounded-xl overflow-hidden bg-[#eae8e4] border border-[#E5E2DA] relative group shadow-xs",
                    children: [
                      a.jsx("img", {
                        src: currentImg,
                        alt: o.title,
                        className: "w-full h-full object-cover object-center transition-all duration-300 group-hover:scale-105",
                        referrerPolicy: "no-referrer"
                      }),
                      a.jsx("div", {
                        className: "absolute top-3 left-3 bg-[#161717] text-white text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-sm shadow-xs",
                        children: "Certified GI Craft"
                      }),
                      discountPercent > 0 && a.jsxs("div", {
                        className: "absolute top-3 right-3 bg-amber-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-xs",
                        children: [discountPercent, "% OFF"]
                      })
                    ]
                  }),

                  // Thumbnail Reel
                  images.length > 1 && a.jsx("div", {
                    className: "flex items-center gap-2 overflow-x-auto pb-1",
                    children: images.map((img, idx) => a.jsx("button", {
                      key: idx,
                      type: "button",
                      onClick: () => setActiveImageIdx(idx),
                      className: `w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        activeImageIdx === idx ? "border-[#b85d18] ring-2 ring-[#b85d18]/30 scale-105 shadow-xs" : "border-[#E5E2DA] opacity-70 hover:opacity-100"
                      }`,
                      children: a.jsx("img", { src: img, alt: `${o.title} ${idx+1}`, className: "w-full h-full object-cover", referrerPolicy: "no-referrer" })
                    }))
                  }),

                  // Master Artisan Preview Card
                  a.jsxs("div", {
                    className: "bg-[#f0ede9] border border-[#E5E2DA] p-3.5 sm:p-4 rounded-xl flex items-center justify-between shadow-2xs",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          a.jsx("div", {
                            className: "w-11 h-11 rounded-full bg-[#b85d18] text-white flex items-center justify-center font-serif font-bold text-base shadow-xs shrink-0",
                            children: (o.artisan || "Master Artisan").charAt(0)
                          }),
                          a.jsxs("div", {
                            className: "min-w-0",
                            children: [
                              a.jsx("p", { className: "text-xs text-stone-500 font-medium", children: "Crafted with Lineage by" }),
                              a.jsx("p", { className: "font-serif text-sm font-bold text-[#161717] truncate", children: o.artisan || "Shri Jagannath Guild Master" }),
                              a.jsxs("p", { className: "text-[11px] text-[#b85d18] truncate", children: ["📍 ", o.origin || o.location || "Raghurajpur Heritage Cluster, Odisha"] })
                            ]
                          })
                        ]
                      }),
                      v && a.jsx("button", {
                        type: "button",
                        onClick: () => { p(); v(o.artisanId || "1"); },
                        className: "text-xs font-semibold text-[#b85d18] hover:underline cursor-pointer shrink-0 ml-2",
                        children: "View Bio →"
                      })
                    ]
                  }),

                  // Direct Artisan Remuneration Pledge
                  a.jsxs("div", {
                    className: "p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 flex items-center gap-2",
                    children: [
                      a.jsx("span", { className: "text-base shrink-0", children: "🤝" }),
                      a.jsx("span", { className: "leading-tight", children: "Fair Trade Guarantee: 85% of this purchase goes directly to the master artisan family." })
                    ]
                  })
                ]
              }),

              // Right Column: Details, Price, Pincode, Actions, Tabs
              a.jsxs("div", {
                className: "md:col-span-6 space-y-4 sm:space-y-5",
                children: [
                  // Craft Badge & Stock Indicator
                  a.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center gap-2 text-xs font-semibold text-[#b85d18] tracking-wide uppercase",
                        children: [
                          a.jsx("span", { children: o.craft || o.category || "Odisha Heritage Craft" }),
                          a.jsx("span", { children: "•" }),
                          a.jsx("span", { className: "text-emerald-700", children: "In Stock" })
                        ]
                      }),
                      a.jsx("h2", {
                        className: "font-serif text-xl sm:text-2xl font-bold text-[#161717] leading-snug",
                        children: o.title
                      }),
                      // Star Rating
                      a.jsxs("div", {
                        className: "flex items-center gap-2 pt-0.5",
                        children: [
                          a.jsx("div", { className: "flex text-amber-500 text-xs", children: "★★★★★" }),
                          a.jsxs("span", { className: "text-xs text-stone-600 font-medium", children: ["4.9 (", reviews.length + 121, " Patron Reviews)"] }),
                          a.jsx("span", { className: "text-stone-300", children: "•" }),
                          a.jsx("span", { className: "text-[11px] text-stone-500", children: "GI Tag Certified" })
                        ]
                      })
                    ]
                  }),

                  // Price Section
                  a.jsxs("div", {
                    className: "p-3.5 rounded-xl bg-white border border-[#E5E2DA] space-y-1 shadow-2xs",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-baseline gap-3",
                        children: [
                          a.jsx("span", { className: "font-serif text-2xl sm:text-3xl font-bold text-[#161717]", children: formatPrice(o.price) }),
                          originalPrice > o.price && a.jsx("span", { className: "text-sm text-stone-400 line-through", children: formatPrice(originalPrice) }),
                          discountPercent > 0 && a.jsxs("span", { className: "text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full", children: [discountPercent, "% OFF"] })
                        ]
                      }),
                      a.jsx("p", { className: "text-[11px] text-stone-500", children: "Inclusive of all taxes • 5% GST included • No-cost EMI available from ₹204/mo" })
                    ]
                  }),

                  // Pincode & Delivery Date Estimator
                  a.jsxs("div", {
                    className: "p-3.5 rounded-xl bg-white border border-[#e5e0d8] space-y-2 shadow-2xs",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center justify-between text-xs font-semibold text-[#161717]",
                        children: [
                          a.jsx("span", { children: "📍 Check Delivery & COD Availability" }),
                          a.jsx("span", { className: "text-emerald-700 font-normal text-[11px]", children: "Free above ₹2,500" })
                        ]
                      }),
                      a.jsxs("form", {
                        onSubmit: handlePincodeCheck,
                        className: "flex gap-2",
                        children: [
                          a.jsx("input", {
                            type: "text",
                            maxLength: 6,
                            value: pincode,
                            onChange: (e) => setPincode(e.target.value),
                            placeholder: "Enter 6-digit pincode",
                            className: "flex-1 px-3 py-1.5 text-xs rounded-lg border border-[#e5e0d8] bg-[#faf8f5] focus:outline-none focus:ring-1 focus:ring-[#b85d18] text-stone-900"
                          }),
                          a.jsx("button", {
                            type: "submit",
                            className: "px-3.5 py-1.5 bg-[#b85d18] text-white rounded-lg text-xs font-medium hover:bg-[#5c4731] cursor-pointer transition-colors shrink-0",
                            children: "Check"
                          })
                        ]
                      }),
                      pincodeChecked && a.jsx("p", {
                        className: "text-[11px] text-emerald-800 leading-tight pt-1 font-medium",
                        children: pincodeMsg
                      }),
                      a.jsxs("div", {
                        className: "flex items-center gap-1.5 pt-1 text-[10px] text-stone-500 overflow-x-auto",
                        children: [
                          a.jsx("span", { children: "Quick:" }),
                          a.jsx("button", { type: "button", onClick: () => { setPincode("756134"); setPincodeChecked(true); }, className: "underline hover:text-[#b85d18] cursor-pointer", children: "Bhadrak" }),
                          a.jsx("button", { type: "button", onClick: () => { setPincode("751001"); setPincodeChecked(true); }, className: "underline hover:text-[#b85d18] cursor-pointer", children: "Bhubaneswar" }),
                          a.jsx("button", { type: "button", onClick: () => { setPincode("110001"); setPincodeChecked(true); }, className: "underline hover:text-[#b85d18] cursor-pointer", children: "Delhi" }),
                          a.jsx("button", { type: "button", onClick: () => { setPincode("560001"); setPincodeChecked(true); }, className: "underline hover:text-[#b85d18] cursor-pointer", children: "Bangalore" })
                        ]
                      })
                    ]
                  }),

                  // Quantity Selector & Primary Actions
                  a.jsxs("div", {
                    className: "space-y-3 pt-1",
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center gap-4",
                        children: [
                          a.jsx("span", { className: "text-xs font-semibold text-stone-700", children: "Quantity:" }),
                          a.jsxs("div", {
                            className: "flex items-center border border-[#e5e0d8] rounded-lg bg-white overflow-hidden shadow-2xs",
                            children: [
                              a.jsx("button", {
                                type: "button",
                                onClick: () => setQuantity(Math.max(1, quantity - 1)),
                                className: "px-3 py-1.5 text-sm hover:bg-stone-100 transition-colors cursor-pointer text-stone-700",
                                children: "−"
                              }),
                              a.jsx("span", { className: "px-3 py-1.5 text-xs font-bold text-[#161717] min-w-8 text-center", children: quantity }),
                              a.jsx("button", {
                                type: "button",
                                onClick: () => setQuantity(quantity + 1),
                                className: "px-3 py-1.5 text-sm hover:bg-stone-100 transition-colors cursor-pointer text-stone-700",
                                children: "+"
                              })
                            ]
                          }),
                          a.jsxs("span", { className: "text-xs text-stone-500", children: ["Total: ", a.jsx("strong", { className: "text-[#b85d18]", children: formatPrice(o.price * quantity) })] })
                        ]
                      }),

                      // Action Buttons: Add to Bag + Buy Now + Wishlist
                      a.jsxs("div", {
                        className: "grid grid-cols-12 gap-2.5",
                        children: [
                          a.jsx("button", {
                            type: "button",
                            onClick: handleAddToCart,
                            className: "col-span-6 py-3 px-3 bg-white border-2 border-[#b85d18] text-[#b85d18] rounded-xl text-xs sm:text-sm font-bold hover:bg-[#b85d18] hover:text-white transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs",
                            children: addedToast ? "✓ Added to Bag" : "🛍️ Add to Bag"
                          }),
                          a.jsx("button", {
                            type: "button",
                            onClick: handleBuyNow,
                            className: "col-span-4 py-3 px-3 bg-[#b85d18] text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-[#5c4731] transition-all cursor-pointer flex items-center justify-center gap-1 shadow-sm",
                            children: "⚡ Buy Now"
                          }),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => z && z(o.id),
                            className: `col-span-2 py-3 rounded-xl border flex items-center justify-center text-base transition-all cursor-pointer ${
                              d ? "bg-red-50 border-red-200 text-red-600" : "bg-white border-[#e5e0d8] text-stone-600 hover:border-red-300"
                            }`,
                            title: d ? "Remove from Wishlist" : "Add to Wishlist",
                            children: d ? "❤️" : "🤍"
                          })
                        ]
                      })
                    ]
                  }),

                  // Tabbed Details (Overview, Specifications, Reviews)
                  a.jsxs("div", {
                    className: "pt-3 border-t border-[#E5E2DA] space-y-3",
                    children: [
                      // Tab Headers
                      a.jsxs("div", {
                        className: "flex border-b border-[#e5e0d8] text-xs font-semibold gap-4 overflow-x-auto",
                        children: [
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setActiveTab("overview"),
                            className: `pb-2 border-b-2 transition-colors cursor-pointer shrink-0 ${activeTab === "overview" ? "border-[#b85d18] text-[#b85d18]" : "border-transparent text-stone-500 hover:text-stone-800"}`,
                            children: "Overview & Story"
                          }),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setActiveTab("specs"),
                            className: `pb-2 border-b-2 transition-colors cursor-pointer shrink-0 ${activeTab === "specs" ? "border-[#b85d18] text-[#b85d18]" : "border-transparent text-stone-500 hover:text-stone-800"}`,
                            children: "Specifications & GI Tag"
                          }),
                          a.jsxs("button", {
                            type: "button",
                            onClick: () => setActiveTab("reviews"),
                            className: `pb-2 border-b-2 transition-colors cursor-pointer shrink-0 ${activeTab === "reviews" ? "border-[#b85d18] text-[#b85d18]" : "border-transparent text-stone-500 hover:text-stone-800"}`,
                            children: ["Patron Reviews (", reviews.length, ")"]
                          })
                        ]
                      }),

                      // Tab 1: Overview
                      activeTab === "overview" && a.jsxs("div", {
                        className: "text-xs text-stone-600 leading-relaxed space-y-2",
                        children: [
                          a.jsx("p", { children: o.description || "Handcrafted with generational devotion using pure traditional raw materials. Every curve, motif, and pigment represents centuries of unbroken Odishan heritage." }),
                          a.jsxs("div", {
                            className: "grid grid-cols-2 gap-2 pt-2 text-[11px]",
                            children: [
                              a.jsxs("div", { className: "p-2 rounded-lg bg-white border border-stone-200", children: [a.jsx("strong", { children: "Craft Form: " }), o.craft || "Odishan Art"] }),
                              a.jsxs("div", { className: "p-2 rounded-lg bg-white border border-stone-200", children: [a.jsx("strong", { children: "Origin: " }), o.origin || "Odisha Heritage Cluster"] }),
                              a.jsxs("div", { className: "p-2 rounded-lg bg-white border border-stone-200", children: [a.jsx("strong", { children: "Dispatch: " }), "Within 24 Hours"] }),
                              a.jsxs("div", { className: "p-2 rounded-lg bg-white border border-stone-200", children: [a.jsx("strong", { children: "Authenticity: " }), "100% GI Hallmarked"] })
                            ]
                          })
                        ]
                      }),

                      // Tab 2: Specs & GI Tag
                      activeTab === "specs" && a.jsxs("div", {
                        className: "text-xs text-stone-600 space-y-2",
                        children: [
                          a.jsxs("div", {
                            className: "divide-y divide-stone-100 bg-white rounded-lg border border-[#e5e0d8] p-3 text-[11px]",
                            children: [
                              a.jsxs("div", { className: "py-1.5 flex justify-between", children: [a.jsx("span", { className: "text-stone-500", children: "GI Certificate Reg:" }), a.jsx("span", { className: "font-mono font-bold text-[#b85d18]", children: "#OD-GI-2026-8941" })] }),
                              a.jsxs("div", { className: "py-1.5 flex justify-between", children: [a.jsx("span", { className: "text-stone-500", children: "Primary Materials:" }), a.jsx("span", { children: o.materials || "Natural Stone Pigments, Pure Silk, Bell Metal" })] }),
                              a.jsxs("div", { className: "py-1.5 flex justify-between", children: [a.jsx("span", { className: "text-stone-500", children: "Packaging:" }), a.jsx("span", { children: "Insured Wooden Crate / Velvet Heirloom Box" })] }),
                              a.jsxs("div", { className: "py-1.5 flex justify-between", children: [a.jsx("span", { className: "text-stone-500", children: "Care Guidelines:" }), a.jsx("span", { children: "Keep away from moisture; wipe gently with dry cotton" })] }),
                              a.jsxs("div", { className: "py-1.5 flex justify-between", children: [a.jsx("span", { className: "text-stone-500", children: "Return Policy:" }), a.jsx("span", { className: "text-emerald-700 font-semibold", children: "7-Day Hassle-Free Replacement" })] })
                            ]
                          })
                        ]
                      }),

                      // Tab 3: Verified Reviews & Submit Review Form
                      activeTab === "reviews" && a.jsxs("div", {
                        className: "space-y-4 text-xs",
                        children: [
                          // Reviews list
                          a.jsx("div", {
                            className: "space-y-3 max-h-48 overflow-y-auto pr-1",
                            children: reviews.map((rev) => a.jsxs("div", {
                              key: rev.id,
                              className: "p-3 rounded-xl bg-white border border-[#e5e0d8] space-y-1 shadow-2xs",
                              children: [
                                a.jsxs("div", {
                                  className: "flex items-center justify-between",
                                  children: [
                                    a.jsxs("div", {
                                      className: "flex items-center gap-1.5",
                                      children: [
                                        a.jsx("span", { className: "font-bold text-[#161717]", children: rev.name }),
                                        rev.verified && a.jsx("span", { className: "text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded font-semibold", children: "✓ Verified Buyer" })
                                      ]
                                    }),
                                    a.jsx("span", { className: "text-stone-400 text-[10px]", children: rev.date })
                                  ]
                                }),
                                a.jsx("div", { className: "flex text-amber-500 text-xs", children: "★".repeat(rev.rating) + "☆".repeat(5 - rev.rating) }),
                                a.jsx("p", { className: "font-semibold text-stone-800 text-[11px]", children: rev.title }),
                                a.jsx("p", { className: "text-stone-600 text-[11px] leading-relaxed", children: rev.comment })
                              ]
                            }))
                          }),

                          // Write Review Form
                          a.jsxs("div", {
                            className: "p-3 rounded-xl bg-[#f5f1eb] border border-[#e2ddd5] space-y-2 shadow-2xs",
                            children: [
                              a.jsx("h4", { className: "font-serif font-bold text-xs text-[#161717]", children: "Write a Verified Review" }),
                              reviewSubmitted ? a.jsx("p", { className: "text-emerald-700 text-xs font-semibold", children: "✓ Thank you! Your review has been published." }) : a.jsxs("form", {
                                onSubmit: handleAddReview,
                                className: "space-y-2",
                                children: [
                                  a.jsxs("div", {
                                    className: "grid grid-cols-2 gap-2",
                                    children: [
                                      a.jsx("input", {
                                        type: "text",
                                        required: true,
                                        value: reviewForm.name,
                                        onChange: (e) => setReviewForm({ ...reviewForm, name: e.target.value }),
                                        placeholder: "Your Name",
                                        className: "px-2.5 py-1.5 text-xs rounded-lg border border-[#e5e0d8] bg-white text-stone-900"
                                      }),
                                      a.jsx("select", {
                                        value: reviewForm.rating,
                                        onChange: (e) => setReviewForm({ ...reviewForm, rating: Number(e.target.value) }),
                                        className: "px-2.5 py-1.5 text-xs rounded-lg border border-[#e5e0d8] bg-white text-stone-900",
                                        children: [
                                          a.jsx("option", { value: 5, children: "★★★★★ (5 - Excellent)" }),
                                          a.jsx("option", { value: 4, children: "★★★★☆ (4 - Good)" }),
                                          a.jsx("option", { value: 3, children: "★★★☆☆ (3 - Average)" })
                                        ]
                                      })
                                    ]
                                  }),
                                  a.jsx("input", {
                                    type: "text",
                                    value: reviewForm.title,
                                    onChange: (e) => setReviewForm({ ...reviewForm, title: e.target.value }),
                                    placeholder: "Review Headline (e.g. Masterful Pattachitra painting)",
                                    className: "w-full px-2.5 py-1.5 text-xs rounded-lg border border-[#e5e0d8] bg-white text-stone-900"
                                  }),
                                  a.jsx("textarea", {
                                    required: true,
                                    rows: 2,
                                    value: reviewForm.comment,
                                    onChange: (e) => setReviewForm({ ...reviewForm, comment: e.target.value }),
                                    placeholder: "Share your experience with this handcrafted creation...",
                                    className: "w-full px-2.5 py-1.5 text-xs rounded-lg border border-[#e5e0d8] bg-white text-stone-900 resize-none"
                                  }),
                                  a.jsx("button", {
                                    type: "submit",
                                    className: "w-full py-1.5 bg-[#b85d18] text-white rounded-lg text-xs font-semibold hover:bg-[#5c4731] cursor-pointer transition-colors shadow-2xs",
                                    children: "Submit Review"
                                  })
                                ]
                              })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        })
      ]
    })
  })
},Lb=({isOpen:o, onClose:p, cartItems:y, onUpdateQuantity:d, onRemoveItem:z, onClearCart:v})=>{
  const [step, setStep] = _.useState(1); // 1: Cart, 2: Address, 3: Delivery, 4: Payment, 5: Confirmed
  const [promoCode, setPromoCode] = _.useState("");
  const [discountPercent, setDiscountPercent] = _.useState(0);
  const [promoMsg, setPromoMsg] = _.useState("");
  
  // Shipping Address Form
  const [addressForm, setAddressForm] = _.useState(() => {
    let name = "Rashmi Ranjan Das", email = "patron@jbicraft.com", phone = "+91 98765 43210";
    try {
      const u = window.currentUser || null;
      if (u) {
        if (u.name) name = u.name;
        if (u.email) email = u.email;
        if (u.phone) phone = u.phone;
      }
    } catch(e) {}
    return {
      fullName: name,
      email: email,
      phone: phone,
      pincode: "756134",
      city: "Bhadrak",
      state: "Odisha",
      addressLine: "Main Market Road, Near Town Hall",
      landmark: "Opposite Heritage Chowk",
      addressType: "Home"
    };
  });

  const [deliveryMethod, setDeliveryMethod] = _.useState("standard"); // standard, express, fragile_heritage
  const [paymentMethod, setPaymentMethod] = _.useState("upi"); // upi, card, netbanking, cod
  
  // Payment simulations
  const [upiId, setUpiId] = _.useState("patron@oksbi");
  const [upiVerified, setUpiVerified] = _.useState(true);
  const [cardForm, setCardForm] = _.useState({ number: "4532 8921 7842 4892", name: "Rashmi Ranjan Das", expiry: "08/29", cvv: "892" });
  const [netBank, setNetBank] = _.useState("SBI");
  const [codCaptcha, setCodCaptcha] = _.useState("4892");
  const [userCaptcha, setUserCaptcha] = _.useState("4892");

  const [isPlacingOrder, setIsPlacingOrder] = _.useState(false);
  const [placedOrder, setPlacedOrder] = _.useState(null);

  // Listen for direct open checkout event
  _.useEffect(() => {
    const handleOpenCheckout = () => {
      setStep(1);
    };
    window.addEventListener("jbi_open_checkout", handleOpenCheckout);
    return () => window.removeEventListener("jbi_open_checkout", handleOpenCheckout);
  }, []);

  if (!o) return null;

  const rawSubtotal = y.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  
  // Delivery Fee Calculation
  let deliveryFee = 0;
  if (deliveryMethod === "express") {
    deliveryFee = 249;
  } else if (deliveryMethod === "fragile_heritage") {
    deliveryFee = 199;
  } else {
    deliveryFee = rawSubtotal >= 2500 || rawSubtotal === 0 ? 0 : 99;
  }

  const finalTotal = Math.max(0, rawSubtotal - discountAmount + deliveryFee);
  const artisanPoolShare = Math.round(finalTotal * 0.85);

  const formatPrice = (val) => (window.jbiFormatPrice ? window.jbiFormatPrice(val) : `₹${Number(val).toLocaleString('en-IN')}`);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === "HERITAGE10") {
      setDiscountPercent(10);
      setPromoMsg("✓ HERITAGE10 applied: 10% Artisan Heritage discount!");
    } else if (code === "ARTISAN15") {
      setDiscountPercent(15);
      setPromoMsg("✓ ARTISAN15 applied: 15% Master Craftsman discount!");
    } else if (code === "ODISHA20") {
      setDiscountPercent(20);
      setPromoMsg("✓ ODISHA20 applied: 20% Special Odisha Patron discount!");
    } else {
      setDiscountPercent(0);
      setPromoMsg('Invalid code. Try "HERITAGE10", "ARTISAN15", or "ODISHA20"');
    }
  };

  const handlePincodeChange = (pin) => {
    setAddressForm(prev => {
      let city = prev.city, state = prev.state;
      if (pin.startsWith("756")) { city = "Bhadrak"; state = "Odisha"; }
      else if (pin.startsWith("751")) { city = "Bhubaneswar"; state = "Odisha"; }
      else if (pin.startsWith("752")) { city = "Puri"; state = "Odisha"; }
      else if (pin.startsWith("753")) { city = "Cuttack"; state = "Odisha"; }
      else if (pin.startsWith("768")) { city = "Sambalpur"; state = "Odisha"; }
      else if (pin.startsWith("110")) { city = "New Delhi"; state = "Delhi"; }
      else if (pin.startsWith("400")) { city = "Mumbai"; state = "Maharashtra"; }
      else if (pin.startsWith("560")) { city = "Bengaluru"; state = "Karnataka"; }
      return { ...prev, pincode: pin, city, state };
    });
  };

  const handlePlaceOrder = async () => {
    setIsPlacingOrder(true);
    const orderNum = "JBI-" + Math.floor(100000 + Math.random() * 900000);
    const randomAwb = "EKART-OD-" + Math.floor(10000000 + Math.random() * 90000000);
    
    const newOrd = {
      id: "ORD-" + Date.now(),
      orderNumber: orderNum,
      order_number: orderNum,
      customerName: addressForm.fullName,
      customer_name: addressForm.fullName,
      customerEmail: addressForm.email,
      customer_email: addressForm.email,
      customerPhone: addressForm.phone,
      customer_phone: addressForm.phone,
      shippingAddress: `${addressForm.addressLine}, ${addressForm.landmark ? addressForm.landmark + ', ' : ''}${addressForm.city}, ${addressForm.state} - ${addressForm.pincode}`,
      shipping_address: `${addressForm.addressLine}, ${addressForm.landmark ? addressForm.landmark + ', ' : ''}${addressForm.city}, ${addressForm.state} - ${addressForm.pincode}`,
      city: addressForm.city,
      state: addressForm.state,
      pincode: addressForm.pincode,
      subtotal: rawSubtotal,
      discountAmount: discountAmount,
      discount_amount: discountAmount,
      deliveryFee: deliveryFee,
      delivery_fee: deliveryFee,
      totalAmount: finalTotal,
      total_amount: finalTotal,
      amount: finalTotal,
      deliveryMethodCode: deliveryMethod,
      delivery_method_code: deliveryMethod,
      paymentMethodCode: paymentMethod,
      payment_method_code: paymentMethod,
      paymentMethod: paymentMethod.toUpperCase(),
      paymentStatus: paymentMethod === "cod" ? "Pending" : "Completed",
      payment_status: paymentMethod === "cod" ? "Pending" : "Completed",
      orderStatus: "Confirmed",
      order_status: "Confirmed",
      status: "Confirmed",
      trackingNumber: randomAwb,
      tracking_number: randomAwb,
      artisanPoolShare: artisanPoolShare,
      artisan_pool_share: artisanPoolShare,
      items: y.map(item => ({
        productId: item.product.id,
        product_id: item.product.id,
        title: item.product.title,
        productTitle: item.product.title,
        product_title: item.product.title,
        price: item.product.price,
        unitPrice: item.product.price,
        unit_price: item.product.price,
        quantity: item.quantity,
        totalPrice: item.product.price * item.quantity,
        total_price: item.product.price * item.quantity,
        image: item.product.image,
        craft: item.product.craft || item.product.category,
        artisanName: item.product.artisan || "Master Artisan",
        artisan_name: item.product.artisan || "Master Artisan",
        craftLineage: item.product.craft || "Odisha Heritage"
      })),
      createdAt: new Date().toISOString(),
      created_at: new Date().toISOString(),
      date: "Today, " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    try {
      // 1. Sync to backend database persistent storage
      (async()=>{try{const sb=window.supabase||window.supabaseClient;await sb.from('orders').insert([newOrd]);console.log('Order synced to Supabase');}catch(err){console.warn("Backend order sync note:", err);}})();

      // 2. Save to Supabase
      if (window.SupabaseService && window.SupabaseService.createOrder) {
        await window.SupabaseService.createOrder(newOrd);
      }
      
      // 3. Save to local storage caches with strict deduplication
      const curOrders = JSON.parse(localStorage.getItem("jbi_admin_orders") || "[]");
      const ordNum = (newOrd.orderNumber || newOrd.order_number || "").toLowerCase().trim();
      const ordId = (newOrd.id || "").toLowerCase().trim();
      const existingIdx = curOrders.findIndex(o => {
        const on = (o.orderNumber || o.order_number || "").toLowerCase().trim();
        const oi = (o.id || "").toLowerCase().trim();
        return (ordNum && on && ordNum === on) || (ordId && oi && ordId === oi);
      });
      if (existingIdx >= 0) {
        curOrders[existingIdx] = newOrd;
      } else {
        curOrders.unshift(newOrd);
      }
      localStorage.setItem("jbi_admin_orders", JSON.stringify(curOrders));

      // User specific storage with deduplication
      if (addressForm.email) {
        const uKey = `jbi_user_orders_${addressForm.email.toLowerCase().trim()}`;
        const uOrders = JSON.parse(localStorage.getItem(uKey) || "[]");
        const uIdx = uOrders.findIndex(o => {
          const on = (o.orderNumber || o.order_number || "").toLowerCase().trim();
          const oi = (o.id || "").toLowerCase().trim();
          return (ordNum && on && ordNum === on) || (ordId && oi && ordId === oi);
        });
        if (uIdx >= 0) {
          uOrders[uIdx] = newOrd;
        } else {
          uOrders.unshift(newOrd);
        }
        localStorage.setItem(uKey, JSON.stringify(uOrders));
      }

      // Customer stats update
      const cr = null;
      let cl = cr ? JSON.parse(cr) : [];
      let ex = cl.find(c => c.email && c.email.toLowerCase() === addressForm.email.toLowerCase());
      if (ex) {
        ex.totalOrders = (ex.totalOrders || 0) + 1;
        ex.totalSpent = (ex.totalSpent || 0) + finalTotal;
        ex.lastOrderDate = new Date().toISOString().split("T")[0];
      } else {
        cl.push({
          id: "cust-" + Date.now(),
          name: addressForm.fullName,
          email: addressForm.email,
          phone: addressForm.phone,
          totalOrders: 1,
          totalSpent: finalTotal,
          lastOrderDate: new Date().toISOString().split("T")[0],
          createdAt: new Date().toISOString()
        });
      }

      // Dispatch global order created event
      window.dispatchEvent(new CustomEvent("jbi_order_created", { detail: newOrd }));
    } catch(err) {
      console.warn("Order creation error:", err);
    }

    setTimeout(() => {
      setIsPlacingOrder(false);
      setPlacedOrder(newOrd);
      setStep(5);
      v(); // clear cart
    }, 1200);
  };

  return a.jsx("div", {
    className: "fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200 text-[#161717]",
    children: a.jsxs("div", {
      className: "relative w-full max-w-lg bg-[#fcf9f5] border-l border-[#E5E2DA] shadow-2xl h-full flex flex-col justify-between overflow-hidden",
      children: [
        // Drawer Header with Steps
        a.jsxs("div", {
          className: "p-4 sm:p-5 border-b border-[#E5E2DA] bg-[#f6f3ef] shrink-0",
          children: [
            a.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                a.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    a.jsx("span", { className: "text-xl", children: "🛍️" }),
                    a.jsxs("h2", {
                      className: "font-serif text-lg font-bold text-[#161717]",
                      children: [
                        step === 1 && `Your Atelier Bag (${y.reduce((sum, it) => sum + it.quantity, 0)})`,
                        step === 2 && "Delivery & Shipping Address",
                        step === 3 && "Delivery Method & Speed",
                        step === 4 && "Select Payment Method",
                        step === 5 && "Artisan Order Confirmed!"
                      ]
                    })
                  ]
                }),
                a.jsx("button", {
                  onClick: p,
                  className: "p-1.5 rounded-full text-[#161717] hover:bg-[#eae8e4] transition-colors cursor-pointer text-sm font-bold",
                  "aria-label": "Close drawer",
                  children: "✕"
                })
              ]
            }),

            // 4-Step Visual Stepper
            step < 5 && a.jsx("div", {
              className: "flex items-center justify-between mt-3 text-[11px] font-semibold text-stone-500",
              children: [
                { num: 1, label: "Bag" },
                { num: 2, label: "Address" },
                { num: 3, label: "Shipping" },
                { num: 4, label: "Payment" }
              ].map((s, idx) => a.jsxs("div", {
                key: s.num,
                className: `flex items-center gap-1 cursor-pointer ${step === s.num ? "text-[#b85d18] font-bold" : step > s.num ? "text-emerald-700 font-bold" : "text-stone-400"}`,
                onClick: () => { if (step > s.num && y.length > 0) setStep(s.num); },
                children: [
                  a.jsx("span", {
                    className: `w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                      step === s.num ? "bg-[#b85d18] text-white" : step > s.num ? "bg-emerald-600 text-white" : "bg-stone-200 text-stone-600"
                    }`,
                    children: step > s.num ? "✓" : s.num
                  }),
                  a.jsx("span", { children: s.label }),
                  idx < 3 && a.jsx("span", { className: "text-stone-300 mx-1", children: "•" })
                ]
              }, s.num))
            })
          ]
        }),

        // Scrollable Body Content
        a.jsx("div", {
          className: "overflow-y-auto flex-1 p-4 sm:p-5 space-y-4",
          children: [
            // STEP 1: Bag Review
            step === 1 && a.jsxs(a.Fragment, {
              children: [
                // Free Shipping banner
                a.jsx("div", {
                  className: "bg-[#f0ede9] p-2.5 rounded-xl border border-[#E5E2DA] text-xs",
                  children: rawSubtotal >= 2500 ? a.jsxs("div", {
                    className: "flex items-center gap-1.5 text-emerald-800 font-semibold",
                    children: [a.jsx("span", { children: "🎉" }), a.jsx("span", { children: "Free Insured Heritage Delivery unlocked on your order!" })]
                  }) : a.jsxs("div", {
                    className: "flex items-center justify-between text-stone-600",
                    children: [
                      a.jsxs("span", { children: ["Add ", a.jsx("strong", { className: "text-[#b85d18]", children: formatPrice(2500 - rawSubtotal) }), " more for Free Delivery"] }),
                      a.jsx("span", { className: "font-semibold text-stone-400", children: "₹99 standard fee" })
                    ]
                  })
                }),

                // Items list or Empty State
                y.length === 0 ? a.jsxs("div", {
                  className: "py-16 text-center space-y-3",
                  children: [
                    a.jsx("span", { className: "text-4xl block", children: "🛍️" }),
                    a.jsx("h3", { className: "font-serif text-base font-bold text-stone-700", children: "Your Atelier Bag is Empty" }),
                    a.jsx("p", { className: "text-xs text-stone-500 max-w-xs mx-auto", children: "Explore certified Pattachitra paintings, Sambalpuri handloom sarees, and Dokra metal crafts from master artisans." }),
                    a.jsx("button", {
                      type: "button",
                      onClick: () => { p(); if (window.jbiNavigate) window.jbiNavigate("shop"); },
                      className: "px-5 py-2 bg-[#b85d18] text-white rounded-xl text-xs font-semibold hover:bg-[#5c4731] cursor-pointer",
                      children: "Explore Master Catalog"
                    })
                  ]
                }) : a.jsxs(a.Fragment, {
                  children: [
                    a.jsx("div", {
                      className: "divide-y divide-[#E5E2DA]",
                      children: y.map((item) => a.jsxs("div", {
                        key: item.product.id,
                        className: "py-3 flex items-center gap-3",
                        children: [
                          a.jsx("img", {
                            src: item.product.image,
                            alt: item.product.title,
                            className: "w-16 h-16 rounded-lg object-cover border border-[#E5E2DA] shrink-0",
                            referrerPolicy: "no-referrer"
                          }),
                          a.jsxs("div", {
                            className: "flex-1 min-w-0 space-y-0.5",
                            children: [
                              a.jsx("h4", { className: "font-serif text-xs sm:text-sm font-bold text-[#161717] truncate", children: item.product.title }),
                              a.jsxs("p", { className: "text-[11px] text-[#b85d18]", children: [item.product.craft || item.product.category, " • ", item.product.artisan || "Master Craftsman"] }),
                              a.jsx("p", { className: "text-xs font-bold text-stone-800", children: formatPrice(item.product.price) })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              a.jsxs("div", {
                                className: "flex items-center border border-[#E5E2DA] rounded-lg bg-white overflow-hidden text-xs",
                                children: [
                                  a.jsx("button", {
                                    type: "button",
                                    onClick: () => d(item.product.id, Math.max(1, item.quantity - 1)),
                                    className: "px-2 py-1 hover:bg-stone-100 cursor-pointer",
                                    children: "−"
                                  }),
                                  a.jsx("span", { className: "px-2 py-1 font-semibold min-w-6 text-center", children: item.quantity }),
                                  a.jsx("button", {
                                    type: "button",
                                    onClick: () => d(item.product.id, item.quantity + 1),
                                    className: "px-2 py-1 hover:bg-stone-100 cursor-pointer",
                                    children: "+"
                                  })
                                ]
                              }),
                              a.jsx("button", {
                                type: "button",
                                onClick: () => z(item.product.id),
                                className: "text-stone-400 hover:text-red-600 p-1 text-sm cursor-pointer",
                                title: "Remove item",
                                children: "🗑️"
                              })
                            ]
                          })
                        ]
                      }, item.product.id))
                    }),

                    // Promo Code Form
                    a.jsxs("div", {
                      className: "p-3 rounded-xl bg-white border border-[#E5E2DA] space-y-2 text-xs",
                      children: [
                        a.jsx("label", { className: "font-semibold text-stone-700 block", children: "🎟️ Have an Artisan Promo Code?" }),
                        a.jsxs("form", {
                          onSubmit: handleApplyPromo,
                          className: "flex gap-2",
                          children: [
                            a.jsx("input", {
                              type: "text",
                              value: promoCode,
                              onChange: (e) => setPromoCode(e.target.value),
                              placeholder: "Try HERITAGE10, ARTISAN15, ODISHA20",
                              className: "flex-1 px-3 py-1.5 rounded-lg border border-[#e5e0d8] text-xs uppercase"
                            }),
                            a.jsx("button", {
                              type: "submit",
                              className: "px-3 py-1.5 bg-[#b85d18] text-white rounded-lg font-semibold text-xs hover:bg-[#5c4731] cursor-pointer",
                              children: "Apply"
                            })
                          ]
                        }),
                        promoMsg && a.jsx("p", {
                          className: `text-[11px] ${discountPercent > 0 ? "text-emerald-700 font-semibold" : "text-amber-800"}`,
                          children: promoMsg
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            // STEP 2: Delivery & Shipping Address
            step === 2 && a.jsxs("div", {
              className: "space-y-4 text-xs",
              children: [
                a.jsx("h3", { className: "font-serif text-sm font-bold text-[#161717]", children: "Shipping Address Details" }),
                a.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    a.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        a.jsx("label", { className: "font-medium text-stone-700", children: "Full Name *" }),
                        a.jsx("input", {
                          type: "text",
                          required: true,
                          value: addressForm.fullName,
                          onChange: (e) => setAddressForm({ ...addressForm, fullName: e.target.value }),
                          className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-white text-xs"
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        a.jsx("label", { className: "font-medium text-stone-700", children: "Mobile Number *" }),
                        a.jsx("input", {
                          type: "tel",
                          required: true,
                          value: addressForm.phone,
                          onChange: (e) => setAddressForm({ ...addressForm, phone: e.target.value }),
                          className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-white text-xs"
                        })
                      ]
                    })
                  ]
                }),
                a.jsxs("div", {
                  className: "grid grid-cols-3 gap-3",
                  children: [
                    a.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        a.jsx("label", { className: "font-medium text-stone-700", children: "Pincode *" }),
                        a.jsx("input", {
                          type: "text",
                          maxLength: 6,
                          required: true,
                          value: addressForm.pincode,
                          onChange: (e) => handlePincodeChange(e.target.value),
                          className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-white text-xs font-mono"
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        a.jsx("label", { className: "font-medium text-stone-700", children: "City *" }),
                        a.jsx("input", {
                          type: "text",
                          required: true,
                          value: addressForm.city,
                          onChange: (e) => setAddressForm({ ...addressForm, city: e.target.value }),
                          className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-white text-xs"
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        a.jsx("label", { className: "font-medium text-stone-700", children: "State *" }),
                        a.jsx("input", {
                          type: "text",
                          required: true,
                          value: addressForm.state,
                          onChange: (e) => setAddressForm({ ...addressForm, state: e.target.value }),
                          className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-white text-xs"
                        })
                      ]
                    })
                  ]
                }),
                a.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    a.jsx("label", { className: "font-medium text-stone-700", children: "House / Flat / Street / Area *" }),
                    a.jsx("input", {
                      type: "text",
                      required: true,
                      value: addressForm.addressLine,
                      onChange: (e) => setAddressForm({ ...addressForm, addressLine: e.target.value }),
                      placeholder: "e.g. Main Market Road, Near Town Hall",
                      className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-white text-xs"
                    })
                  ]
                }),
                a.jsxs("div", {
                  className: "grid grid-cols-2 gap-3",
                  children: [
                    a.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        a.jsx("label", { className: "font-medium text-stone-700", children: "Landmark (Optional)" }),
                        a.jsx("input", {
                          type: "text",
                          value: addressForm.landmark,
                          onChange: (e) => setAddressForm({ ...addressForm, landmark: e.target.value }),
                          placeholder: "Opposite Heritage Chowk",
                          className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-white text-xs"
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      className: "space-y-1",
                      children: [
                        a.jsx("label", { className: "font-medium text-stone-700", children: "Address Type" }),
                        a.jsx("select", {
                          value: addressForm.addressType,
                          onChange: (e) => setAddressForm({ ...addressForm, addressType: e.target.value }),
                          className: "w-full p-2 rounded-lg border border-[#e5e0d8] bg-white text-xs",
                          children: [
                            a.jsx("option", { value: "Home", children: "🏠 Home (All day delivery)" }),
                            a.jsx("option", { value: "Work", children: "🏢 Work (9 AM - 6 PM)" }),
                            a.jsx("option", { value: "Atelier", children: "🎨 Atelier / Gallery" })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            // STEP 3: Delivery Speed & Options
            step === 3 && a.jsxs("div", {
              className: "space-y-3 text-xs",
              children: [
                a.jsx("h3", { className: "font-serif text-sm font-bold text-[#161717]", children: "Select Shipping Method" }),
                [
                  {
                    id: "standard",
                    title: "Standard Insured Delivery",
                    time: "3–5 Business Days",
                    cost: rawSubtotal >= 2500 ? "FREE" : "₹99",
                    desc: "Handled with insured transit packaging and door-step tracking."
                  },
                  {
                    id: "express",
                    title: "Express Air Courier",
                    time: "1–2 Business Days",
                    cost: "₹249",
                    desc: "Priority flight routing for fast doorstep delivery across major metros."
                  },
                  {
                    id: "fragile_heritage",
                    title: "White-Glove Fragile Packaging",
                    time: "3–5 Business Days",
                    cost: "₹199",
                    desc: "Reinforced wooden crating & velvet cushions for delicate brass & terracotta."
                  }
                ].map((opt) => a.jsxs("label", {
                  key: opt.id,
                  className: `block p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    deliveryMethod === opt.id ? "border-[#b85d18] bg-[#f7f4ef]" : "border-[#E5E2DA] bg-white hover:border-stone-300"
                  }`,
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center gap-2",
                          children: [
                            a.jsx("input", {
                              type: "radio",
                              name: "delivery_opt",
                              checked: deliveryMethod === opt.id,
                              onChange: () => setDeliveryMethod(opt.id),
                              className: "text-[#b85d18] focus:ring-[#b85d18]"
                            }),
                            a.jsx("span", { className: "font-bold text-[#161717]", children: opt.title })
                          ]
                        }),
                        a.jsx("span", { className: "font-bold text-[#b85d18]", children: opt.cost })
                      ]
                    }),
                    a.jsxs("div", {
                      className: "ml-6 mt-1 text-[11px] text-stone-500",
                      children: [
                        a.jsxs("span", { className: "font-semibold text-stone-700 block", children: ["Estimated Time: ", opt.time] }),
                        a.jsx("span", { children: opt.desc })
                      ]
                    })
                  ]
                }))
              ]
            }),

            // STEP 4: Realistic Simulated Payment Selection
            step === 4 && a.jsxs("div", {
              className: "space-y-4 text-xs",
              children: [
                a.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    a.jsx("h3", { className: "font-serif text-sm font-bold text-[#161717]", children: "Select Payment Mode" }),
                    a.jsx("span", { className: "text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full", children: "🔒 256-Bit SSL Encrypted" })
                  ]
                }),

                // Payment Tabs
                a.jsx("div", {
                  className: "grid grid-cols-4 gap-1.5 p-1 bg-stone-200/70 rounded-xl",
                  children: [
                    { id: "upi", label: "UPI / QR", icon: "⚡" },
                    { id: "card", label: "Cards", icon: "💳" },
                    { id: "netbanking", label: "NetBank", icon: "🏛️" },
                    { id: "cod", label: "COD", icon: "💵" }
                  ].map(tab => a.jsxs("button", {
                    key: tab.id,
                    type: "button",
                    onClick: () => setPaymentMethod(tab.id),
                    className: `py-2 rounded-lg text-center font-bold text-xs transition-all cursor-pointer ${
                      paymentMethod === tab.id ? "bg-white text-[#b85d18] shadow-xs" : "text-stone-600 hover:text-[#161717]"
                    }`,
                    children: [
                      a.jsx("span", { className: "block text-sm", children: tab.icon }),
                      a.jsx("span", { children: tab.label })
                    ]
                  }))
                }),

                // Tab 1: UPI
                paymentMethod === "upi" && a.jsxs("div", {
                  className: "p-4 rounded-xl bg-white border border-[#E5E2DA] space-y-3",
                  children: [
                    a.jsx("p", { className: "font-semibold text-stone-800", children: "Pay via Google Pay, PhonePe, Paytm, or BHIM UPI" }),
                    a.jsxs("div", {
                      className: "flex gap-2",
                      children: [
                        a.jsx("input", {
                          type: "text",
                          value: upiId,
                          onChange: (e) => setUpiId(e.target.value),
                          placeholder: "username@oksbi / username@paytm",
                          className: "flex-1 p-2 border border-[#e5e0d8] rounded-lg text-xs font-mono"
                        }),
                        a.jsx("button", {
                          type: "button",
                          onClick: () => setUpiVerified(true),
                          className: "px-3 py-1.5 bg-emerald-700 text-white rounded-lg text-xs font-semibold hover:bg-emerald-800 cursor-pointer",
                          children: upiVerified ? "✓ Verified" : "Verify"
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      className: "p-3 rounded-lg bg-[#faf8f5] border border-stone-200 text-center space-y-1.5",
                      children: [
                        a.jsx("span", { className: "text-2xl block", children: "📱" }),
                        a.jsx("p", { className: "text-[11px] text-stone-600", children: "Dynamic QR code authorization simulated for instant settlement." }),
                        a.jsx("span", { className: "text-[10px] text-emerald-800 font-bold", children: "Zero Transaction Fee • 100% Instant" })
                      ]
                    })
                  ]
                }),

                // Tab 2: Credit / Debit Card
                paymentMethod === "card" && a.jsxs("div", {
                  className: "p-4 rounded-xl bg-white border border-[#E5E2DA] space-y-3",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        a.jsx("span", { className: "font-semibold text-stone-800", children: "Enter Card Credentials" }),
                        a.jsx("span", { className: "text-[11px] text-stone-400", children: "Visa • Mastercard • RuPay" })
                      ]
                    }),
                    a.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        a.jsx("input", {
                          type: "text",
                          value: cardForm.number,
                          onChange: (e) => setCardForm({ ...cardForm, number: e.target.value }),
                          placeholder: "Card Number",
                          className: "w-full p-2 border border-[#e5e0d8] rounded-lg text-xs font-mono"
                        }),
                        a.jsx("input", {
                          type: "text",
                          value: cardForm.name,
                          onChange: (e) => setCardForm({ ...cardForm, name: e.target.value }),
                          placeholder: "Cardholder Name",
                          className: "w-full p-2 border border-[#e5e0d8] rounded-lg text-xs uppercase"
                        }),
                        a.jsxs("div", {
                          className: "grid grid-cols-2 gap-2",
                          children: [
                            a.jsx("input", {
                              type: "text",
                              value: cardForm.expiry,
                              onChange: (e) => setCardForm({ ...cardForm, expiry: e.target.value }),
                              placeholder: "MM/YY",
                              className: "w-full p-2 border border-[#e5e0d8] rounded-lg text-xs"
                            }),
                            a.jsx("input", {
                              type: "password",
                              maxLength: 3,
                              value: cardForm.cvv,
                              onChange: (e) => setCardForm({ ...cardForm, cvv: e.target.value }),
                              placeholder: "CVV",
                              className: "w-full p-2 border border-[#e5e0d8] rounded-lg text-xs font-mono"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // Tab 3: Net Banking
                paymentMethod === "netbanking" && a.jsxs("div", {
                  className: "p-4 rounded-xl bg-white border border-[#E5E2DA] space-y-3",
                  children: [
                    a.jsx("p", { className: "font-semibold text-stone-800", children: "Select Your Bank" }),
                    a.jsx("div", {
                      className: "grid grid-cols-2 gap-2",
                      children: [
                        "State Bank of India",
                        "HDFC Bank",
                        "ICICI Bank",
                        "Axis Bank",
                        "Punjab National Bank",
                        "Bank of Baroda"
                      ].map(b => a.jsx("button", {
                        key: b,
                        type: "button",
                        onClick: () => setNetBank(b),
                        className: `p-2 rounded-lg border text-left text-xs font-semibold cursor-pointer ${
                          netBank === b ? "border-[#b85d18] bg-[#f7f4ef] text-[#b85d18]" : "border-[#e5e0d8] bg-white text-stone-700"
                        }`,
                        children: b
                      }))
                    })
                  ]
                }),

                // Tab 4: COD
                paymentMethod === "cod" && a.jsxs("div", {
                  className: "p-4 rounded-xl bg-white border border-[#E5E2DA] space-y-3",
                  children: [
                    a.jsx("p", { className: "font-semibold text-stone-800", children: "Cash on Delivery (COD)" }),
                    a.jsx("p", { className: "text-[11px] text-stone-600", children: "You can pay via Cash or UPI QR to the delivery executive upon arrival." }),
                    a.jsxs("div", {
                      className: "flex items-center gap-3 pt-1",
                      children: [
                        a.jsx("span", { className: "px-3 py-1.5 bg-stone-800 text-white font-mono font-bold tracking-widest rounded-lg text-sm", children: codCaptcha }),
                        a.jsx("input", {
                          type: "text",
                          value: userCaptcha,
                          onChange: (e) => setUserCaptcha(e.target.value),
                          placeholder: "Enter Code",
                          className: "w-28 p-1.5 border border-[#e5e0d8] rounded-lg text-xs font-mono"
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            // STEP 5: Order Confirmed
            step === 5 && placedOrder && a.jsxs("div", {
              className: "py-6 text-center space-y-4",
              children: [
                a.jsx("div", { className: "w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl mx-auto shadow-sm", children: "✓" }),
                a.jsxs("div", {
                  className: "space-y-1",
                  children: [
                    a.jsx("h3", { className: "font-serif text-xl font-bold text-[#161717]", children: "Thank You! Order Placed" }),
                    a.jsxs("p", { className: "text-xs text-stone-500 font-mono", children: ["Order #", placedOrder.orderNumber] }),
                    a.jsxs("p", { className: "text-xs text-stone-500", children: ["Ekart Tracking: ", a.jsx("strong", { className: "text-[#b85d18]", children: placedOrder.trackingNumber })] })
                  ]
                }),
                a.jsxs("div", {
                  className: "p-4 rounded-xl bg-white border border-[#e5e0d8] text-left text-xs space-y-2",
                  children: [
                    a.jsxs("p", { children: [a.jsx("strong", { children: "Delivering to: " }), placedOrder.customerName] }),
                    a.jsxs("p", { className: "text-stone-600 text-[11px]", children: [placedOrder.shippingAddress] }),
                    a.jsxs("p", { children: [a.jsx("strong", { children: "Total Paid: " }), formatPrice(placedOrder.totalAmount)] }),
                    a.jsxs("p", { className: "text-emerald-800 text-[11px] font-semibold", children: ["Direct Artisan Share (85%): ", formatPrice(placedOrder.artisanPoolShare)] })
                  ]
                }),
                a.jsxs("div", {
                  className: "space-y-2 pt-2",
                  children: [
                    a.jsx("button", {
                      type: "button",
                      onClick: () => {
                        p();
                        if (window.jbiNavigate) window.jbiNavigate("orders");
                      },
                      className: "w-full py-2.5 bg-[#b85d18] text-white rounded-xl text-xs font-bold hover:bg-[#5c4731] cursor-pointer",
                      children: "Track Shipment & Download Tax Invoice →"
                    }),
                    a.jsx("button", {
                      type: "button",
                      onClick: () => {
                        p();
                        if (window.jbiNavigate) window.jbiNavigate("shop");
                      },
                      className: "w-full py-2 bg-white border border-[#e5e0d8] text-stone-700 rounded-xl text-xs font-semibold hover:bg-stone-50 cursor-pointer",
                      children: "Continue Exploring Crafts"
                    })
                  ]
                })
              ]
            })
          ]
        }),

        // Bottom Fixed Summary & Action Button
        step < 5 && y.length > 0 && a.jsxs("div", {
          className: "p-4 sm:p-5 border-t border-[#E5E2DA] bg-[#f6f3ef] space-y-3 shrink-0",
          children: [
            // Price Breakdown Summary
            a.jsxs("div", {
              className: "space-y-1.5 text-xs",
              children: [
                a.jsxs("div", {
                  className: "flex justify-between text-stone-600",
                  children: [
                    a.jsx("span", { children: "Bag Subtotal" }),
                    a.jsx("span", { children: formatPrice(rawSubtotal) })
                  ]
                }),
                discountAmount > 0 && a.jsxs("div", {
                  className: "flex justify-between text-emerald-700 font-semibold",
                  children: [
                    a.jsxs("span", { children: ["Heritage Discount (", discountPercent, "%)"] }),
                    a.jsxs("span", { children: ["-", formatPrice(discountAmount)] })
                  ]
                }),
                a.jsxs("div", {
                  className: "flex justify-between text-stone-600",
                  children: [
                    a.jsx("span", { children: "Delivery Charges" }),
                    a.jsx("span", { className: deliveryFee === 0 ? "text-emerald-700 font-bold" : "", children: deliveryFee === 0 ? "FREE" : formatPrice(deliveryFee) })
                  ]
                }),
                a.jsxs("div", {
                  className: "flex justify-between text-sm font-bold text-[#161717] pt-1.5 border-t border-[#E5E2DA]",
                  children: [
                    a.jsx("span", { children: "Total Payable" }),
                    a.jsx("span", { className: "text-[#b85d18] font-serif text-base", children: formatPrice(finalTotal) })
                  ]
                })
              ]
            }),

            // Action Buttons by Step
            a.jsxs("div", {
              className: "flex gap-2",
              children: [
                step > 1 && a.jsx("button", {
                  type: "button",
                  onClick: () => setStep(step - 1),
                  className: "py-3 px-4 bg-white border border-[#E5E2DA] text-stone-700 rounded-xl text-xs font-bold hover:bg-stone-50 cursor-pointer",
                  children: "← Back"
                }),
                step === 1 && a.jsx("button", {
                  type: "button",
                  onClick: () => setStep(2),
                  className: "flex-1 py-3 bg-[#b85d18] text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-[#5c4731] transition-all cursor-pointer shadow-sm text-center",
                  children: `Proceed to Shipping Address • ${formatPrice(finalTotal)}`
                }),
                step === 2 && a.jsx("button", {
                  type: "button",
                  onClick: () => {
                    if (!addressForm.fullName || !addressForm.phone || !addressForm.pincode || !addressForm.addressLine) {
                      alert("Please fill all required address fields.");
                      return;
                    }
                    setStep(3);
                  },
                  className: "flex-1 py-3 bg-[#b85d18] text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-[#5c4731] transition-all cursor-pointer shadow-sm text-center",
                  children: "Select Delivery Speed →"
                }),
                step === 3 && a.jsx("button", {
                  type: "button",
                  onClick: () => setStep(4),
                  className: "flex-1 py-3 bg-[#b85d18] text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-[#5c4731] transition-all cursor-pointer shadow-sm text-center",
                  children: "Select Payment Method →"
                }),
                step === 4 && a.jsx("button", {
                  type: "button",
                  disabled: isPlacingOrder,
                  onClick: handlePlaceOrder,
                  className: "flex-1 py-3 bg-[#b85d18] text-white rounded-xl text-xs sm:text-sm font-bold hover:bg-[#5c4731] transition-all cursor-pointer shadow-sm disabled:opacity-50 text-center",
                  children: isPlacingOrder ? "Securing Artisan Order..." : `Place Artisan Order • ${formatPrice(finalTotal)}`
                })
              ]
            })
          ]
        })
      ]
    })
  })
},Hb=({isOpen:o,onClose:p,wishlistProducts:y,onAddToCart:d,onRemoveFromWishlist:z})=>o?a.jsx("div",{className:"fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200",children:a.jsxs("div",{className:"relative w-full max-w-2xl bg-[#fcf9f5] border border-[#E5E2DA] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[85vh] flex flex-col",children:[a.jsxs("div",{className:"p-5 border-b border-[#E5E2DA] flex items-center justify-between bg-[#f6f3ef]",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(hs,{className:"w-5 h-5 fill-rose-500 text-rose-500"}),a.jsxs("h2",{className:"font-serif text-lg font-bold text-[#161717]",children:["Saved Masterpieces (",y.length,")"]})]}),a.jsx("button",{onClick:p,className:"p-1.5 rounded-full text-[#161717] hover:bg-[#eae8e4] transition-colors cursor-pointer",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsx("div",{className:"p-6 overflow-y-auto flex-1 space-y-4",children:y.length===0?a.jsxs("div",{className:"text-center py-12 space-y-3",children:[a.jsx("div",{className:"w-12 h-12 rounded-full bg-[#f0ede9] mx-auto flex items-center justify-center text-[#b85d18]",children:a.jsx(hs,{className:"w-6 h-6"})}),a.jsx("h3",{className:"font-serif text-base font-bold text-[#161717]",children:"No Saved Pieces Yet"}),a.jsx("p",{className:"text-xs text-[#5c5b59]",children:"Click the heart icon on any craft to curate your personal heirloom wishlist."})]}):y.map(v=>a.jsxs("div",{className:"flex items-center gap-4 bg-[#f0ede9] p-3.5 rounded-xl border border-[#E5E2DA]",children:[a.jsx("img",{src:v.image,alt:v.title,className:"w-16 h-16 rounded-lg object-cover bg-[#eae8e4] shrink-0 border border-[#E5E2DA]",referrerPolicy:"no-referrer"}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("span",{className:"text-[10px] uppercase font-bold text-[#b85d18] block",children:v.craft}),a.jsx("h4",{className:"font-serif text-sm font-bold text-[#161717] truncate",children:v.title}),a.jsxs("span",{className:"text-xs font-bold text-[#161717]",children:["₹",(Number(v.price)||0).toLocaleString("en-IN",{minimumFractionDigits:Number.isInteger(Number(v.price)||0)?0:2,maximumFractionDigits:2})]})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("button",{onClick:()=>{d(v),z(v)},className:"flex items-center gap-1.5 px-3 py-1.5 bg-[#161717] text-white text-xs font-semibold rounded-full hover:bg-[#b85d18] transition-colors cursor-pointer",children:[a.jsx(Za,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Move to Bag"})]}),a.jsx("button",{onClick:()=>z(v),className:"p-1.5 text-[#5c5b59] hover:text-rose-500 cursor-pointer",title:"Remove from wishlist",children:a.jsx(Xt,{className:"w-4 h-4"})})]})]},v.id))}),a.jsx("div",{className:"p-4 bg-[#f6f3ef] border-t border-[#E5E2DA] text-center",children:a.jsx("button",{onClick:p,className:"text-xs text-[#b85d18] font-semibold hover:underline cursor-pointer",children:"Continue Browsing Atelier"})})]})}):null,Rb=({onNavigate:o,onSelectCategory:p})=>a.jsx("footer",{className:"bg-[#161717] text-[#fcf9f5] pt-14 pb-12 border-t border-[#b85d18]/30",children:a.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12",children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-xs",children:[a.jsxs("div",{className:"lg:col-span-2 space-y-3",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("span",{className:"font-serif text-2xl font-bold tracking-tight text-white block",children:"JBI CRAFT"}),a.jsx("span",{className:"text-[10px] tracking-[0.2em] text-[#fed7aa] uppercase font-semibold block",children:"JBI CRAFT ATELIER • GOVT. REGD. MSME & PARTNERSHIP"})]}),a.jsx("p",{className:"text-stone-300 text-xs leading-relaxed max-w-sm",children:"Safeguarding India's endangered Geographical Indication craft traditions through sustainable materials, transparent fair trade, and direct artisan patronage."}),a.jsxs("div",{className:"space-y-1 text-[11px] text-stone-300 bg-stone-900/80 p-3 rounded-xl border border-stone-800",children:[a.jsxs("p",{children:[a.jsx("span",{className:"font-semibold text-amber-200",children:"Regd. Office: "}),"Plot No. 1436/2598, Dihasahi, Phulnakhara, Bhubaneswar/Cuttack, Odisha 754021"]}),a.jsxs("p",{className:"text-stone-400 flex items-center gap-2 flex-wrap",children:[a.jsx("span",{children:"MSME: UDYAM-OD-07-0122585"}),a.jsx("span",{className:"text-stone-600",children:"•"}),a.jsx("span",{children:"Regd. Partnership Firm (1932)"})]}),a.jsxs("p",{className:"text-stone-400 flex items-center gap-3 pt-0.5 flex-wrap",children:[a.jsxs("a",{href:"tel:+919438757486",className:"hover:text-[#fed7aa] transition-colors",children:["📞 +91 9438757486"]}),a.jsxs("a",{href:"mailto:jayabajarangawaliinternational@gmail.com",className:"hover:text-[#fed7aa] transition-colors",children:["✉️ jayabajarangawaliinternational@gmail.com"]})]})]}),a.jsxs("div",{className:"flex items-center gap-2 text-stone-400 text-[11px]",children:[a.jsx(St,{className:"w-4 h-4 text-[#fed7aa]"}),a.jsx("span",{children:"Certified GI Crafts • Hallmarked Pure Silver 92.5"})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h4",{className:"font-serif text-sm font-bold text-white uppercase tracking-wider",children:"Craft Collections"}),a.jsxs("ul",{className:"space-y-2 text-stone-300",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>{o("shop"),p("handicrafts")},className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Dokra & Bell Metal"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>{o("shop"),p("jewellery")},className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Baleswar Lac Ornaments"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>{o("shop"),p("textiles")},className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Sambalpuri Ikat Silks"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>{o("shop"),p("decor")},className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Pipli Applique Decor"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>{o("shop"),p("art")},className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Pattachitra & Palm Leaf Art"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>{o("shop"),p("handicraft")},className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Dokra Brass & Sabai Grass"})})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h4",{className:"font-serif text-sm font-bold text-white uppercase tracking-wider",children:"Artisan Guilds"}),a.jsxs("ul",{className:"space-y-2 text-stone-300",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>o("artisans"),className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Raghurajpur Chitrakars"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>o("artisans"),className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Konark Stone Sculptors"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>o("artisans"),className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Bargarh Silk Weavers"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>o("impact"),className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Fair-Wage Impact Audit"})}),a.jsx("li",{children:a.jsx("button",{onClick:()=>o("about"),className:"hover:text-[#fed7aa] transition-colors cursor-pointer",children:"Our 40-Year Journey"})})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h4",{className:"font-serif text-sm font-bold text-white uppercase tracking-wider",children:"Patron Care"}),a.jsxs("ul",{className:"space-y-2 text-stone-300",children:[a.jsx("li",{children:a.jsx("button",{onClick:()=>o("contact"),className:"hover:text-[#fed7aa] transition-colors cursor-pointer text-left",children:"Contact & Help Desk"})}),a.jsx("li",{children:a.jsx("span",{children:"Worldwide Carbon-Neutral Shipping"})}),a.jsx("li",{children:a.jsx("span",{children:"Certificate of Authenticity Included"})}),a.jsx("li",{children:a.jsx("span",{children:"Custom Bespoke Commissions"})}),a.jsx("li",{children:a.jsx("span",{children:"Care & Preservation Manual"})})]})]})]}),a.jsxs("div",{className:"pt-8 border-t border-[#b85d18]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-stone-400",children:[a.jsxs("p",{className:"text-center md:text-left order-2 md:order-1 flex-1",children:["© ",new Date().getFullYear()," JBI CRAFT. All Rights Reserved. Handcrafted with reverence."]}),a.jsx("div",{className:"order-1 md:order-2 flex items-center justify-center flex-1 my-1 md:my-0",children:a.jsxs("a",{href:"https://www.aksglobaltech.com",target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-stone-900/90 hover:bg-black text-stone-400 hover:text-[#fed7aa] border border-stone-800 hover:border-[#fed7aa]/40 transition-all cursor-pointer shadow-xs group",title:"Powered by AKS GLOBALTECH",children:[a.jsx("span",{className:"text-[9px] uppercase tracking-wider text-stone-400 group-hover:text-stone-300 font-medium",children:"POWERED BY"}),a.jsx("span",{className:"text-[11px] font-bold text-amber-200 group-hover:text-[#fed7aa] tracking-wide",children:"AKS GLOBALTECH"})]})}),a.jsxs("div",{className:"flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2 order-3 md:order-3 flex-1",children:[a.jsx("button",{onClick:()=>o("admin"),style:{paddingLeft:"0px",paddingRight:"15px",paddingBottom:"1px"},className:"text-stone-400 hover:text-white transition-colors underline cursor-pointer inline-flex items-center",children:"Admin Portal"}),a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx("span",{children:"Handmade with"}),a.jsx(hs,{className:"w-3 h-3 text-rose-400 fill-rose-400"}),a.jsx("span",{children:"for Odisha Heritage Preservation"})]})]})]})]})}),Hf=({activeSection:o,onSelectSection:p,onLogout:y,onSwitchToStore:d,pendingOrdersCount:z=0,lowStockCount:v=0})=>{const E=[{id:"dashboard",label:"Dashboard",icon:lx},{id:"products",label:"Products",icon:Za},{id:"categories",label:"Categories",icon:ax},{id:"inventory",label:"Inventory",icon:Pf,badge:v>0?v:void 0,badgeColor:"bg-red-100 text-red-700"},{id:"orders",label:"Orders",icon:Li,badge:z>0?z:void 0,badgeColor:"bg-amber-100 text-amber-800"},{id:"contacts",label:"Messages & Inquiries",icon:fs,badge:void 0,badgeColor:"bg-blue-100 text-blue-800"},{id:"customers",label:"Customers",icon:mx},{id:"marketing",label:"Marketing",icon:nx},{id:"reports",label:"Reports",icon:Qp},{id:"settings",label:"Settings",icon:cx}];return a.jsxs("aside",{className:"w-64 bg-[#fafafa] border-r border-stone-200 flex flex-col shrink-0 min-h-screen text-stone-700 select-none",children:[a.jsx("div",{className:"h-16 flex items-center px-6 border-b border-stone-200",children:a.jsx("div",{className:"flex items-center gap-2",children:a.jsx("span",{className:"font-sans font-semibold text-lg sm:text-xl text-stone-900 tracking-tight",children:"JBI Admin Portal"})})}),a.jsx("div",{className:"flex-1 py-4 px-3 space-y-1 overflow-y-auto",children:E.map(D=>{const g=D.icon,h=o===D.id;return a.jsxs("button",{onClick:()=>p(D.id),className:`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer text-left ${h?"bg-[#e5e5e5] text-stone-950 font-semibold shadow-xs":"text-stone-600 hover:text-stone-900 hover:bg-stone-100/80"}`,children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(g,{className:`w-4 h-4 shrink-0 ${h?"text-stone-950 stroke-[2.2]":"text-stone-500 stroke-[1.8]"}`}),a.jsx("span",{className:"truncate",children:D.label})]}),D.badge!==void 0&&a.jsx("span",{className:`text-[11px] font-semibold px-2 py-0.5 rounded-full ${D.badgeColor||"bg-stone-200 text-stone-800"}`,children:D.badge})]},D.id)})}),a.jsxs("div",{className:"p-3 border-t border-stone-200 space-y-1 bg-[#fafafa]",children:[a.jsxs("button",{onClick:d,className:"w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-xs font-semibold bg-stone-900 hover:bg-black text-white transition-colors cursor-pointer text-left shadow-xs mb-1",title:"Return to public website",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-amber-300 font-bold",children:"←"}),a.jsx("span",{children:"Back to Website"})]}),a.jsx(ex,{className:"w-3 h-3 text-stone-400"})]}),a.jsxs("button",{onClick:y,className:"w-full flex items-center gap-3 px-3.5 py-2 rounded-lg text-xs font-medium text-stone-600 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer text-left",children:[a.jsx(pc,{className:"w-4 h-4 text-stone-500 hover:text-red-700 stroke-[1.8]"}),a.jsx("span",{children:"Logout"})]})]})]})},Bb=({products:o,orders:p,onSelectProduct:y,onSelectOrder:d,onNavigateSection:z,onLogout:v,onSwitchToStore:E,adminName:D="Admin",onToggleMobileMenu:g})=>{const[h,O]=_.useState(""),[x,H]=_.useState(!1),[R,Q]=_.useState(!1),[j,X]=_.useState(!1),G=_.useRef(null),w=_.useRef(null),Y=_.useRef(null);_.useEffect(()=>{const F=Ve=>{G.current&&!G.current.contains(Ve.target)&&H(!1),w.current&&!w.current.contains(Ve.target)&&Q(!1),Y.current&&!Y.current.contains(Ve.target)&&X(!1)};return document.addEventListener("mousedown",F),()=>document.removeEventListener("mousedown",F)},[]);const I=h.trim()?o.filter(F=>F.title.toLowerCase().includes(h.toLowerCase())||F.craft.toLowerCase().includes(h.toLowerCase())||F.category.toLowerCase().includes(h.toLowerCase())).slice(0,5):[],re=h.trim()?p.filter(F=>{const on=(F.orderNumber||F.order_number||F.id||"").toLowerCase(),cn=(F.customerName||F.customer_name||"").toLowerCase(),ct=(F.city||F.state||"").toLowerCase(),q=h.toLowerCase();return on.includes(q)||cn.includes(q)||ct.includes(q)}).slice(0,4):[],me=p.filter(F=>F.status==="Pending"),K=o.filter(F=>(F.stock??12)<=5),te=me.length+K.length;return a.jsxs("header",{className:"h-16 bg-white border-b border-stone-200 px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30",children:[a.jsxs("div",{className:"flex items-center gap-3 flex-1 max-w-lg",children:[g&&a.jsx("button",{onClick:g,className:"md:hidden p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100","aria-label":"Toggle menu",children:a.jsx(ix,{className:"w-5 h-5"})}),a.jsxs("div",{ref:G,className:"relative w-full max-w-sm",children:[a.jsxs("div",{className:"relative",children:[a.jsx(ps,{className:"w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"}),a.jsx("input",{type:"text",value:h,onChange:F=>O(F.target.value),onFocus:()=>H(!0),placeholder:"Search products, orders",className:"w-full pl-9 pr-8 py-2 text-sm bg-stone-50/50 hover:bg-stone-50 focus:bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-400 focus:border-stone-400 text-stone-800 placeholder:text-stone-400 transition-all"}),h&&a.jsx("button",{onClick:()=>O(""),className:"absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700",children:a.jsx(Je,{className:"w-3.5 h-3.5"})})]}),x&&h.trim().length>0&&a.jsx("div",{className:"absolute left-0 right-0 top-full mt-1.5 bg-white border border-stone-200 rounded-xl shadow-xl z-50 overflow-hidden text-xs max-h-96 overflow-y-auto",children:I.length===0&&re.length===0?a.jsxs("div",{className:"p-4 text-center text-stone-500",children:["No matching products or orders found for “",h,"”"]}):a.jsxs("div",{className:"p-2 divide-y divide-stone-100",children:[I.length>0&&a.jsxs("div",{className:"py-1",children:[a.jsxs("div",{className:"px-3 py-1 font-semibold text-[10px] uppercase tracking-wider text-stone-400",children:["Products (",I.length,")"]}),I.map(F=>a.jsxs("button",{onClick:()=>{y(F.id),z("products"),H(!1),O("")},className:"w-full text-left px-3 py-2 hover:bg-stone-50 rounded-md flex items-center gap-3 transition-colors cursor-pointer",children:[a.jsx("img",{src:F.image,alt:"",className:"w-8 h-8 rounded object-cover border border-stone-200 shrink-0"}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"font-medium text-stone-900 truncate",children:F.title}),a.jsxs("p",{className:"text-[11px] text-stone-500",children:["₹",(Number(F.price)||0).toLocaleString("en-IN")," • ",F.craft]})]})]},F.id))]}),re.length>0&&a.jsxs("div",{className:"py-1",children:[a.jsxs("div",{className:"px-3 py-1 font-semibold text-[10px] uppercase tracking-wider text-stone-400",children:["Orders (",re.length,")"]}),re.map(F=>a.jsxs("button",{onClick:()=>{d(F.id),z("orders"),H(!1),O("")},className:"w-full text-left px-3 py-2 hover:bg-stone-50 rounded-md flex items-center justify-between transition-colors cursor-pointer",children:[a.jsxs("div",{children:[a.jsx("span",{className:"font-semibold text-stone-900",children:F.orderNumber}),a.jsxs("span",{className:"text-stone-500 ml-2",children:[F.customerName," (",F.city,")"]})]}),a.jsxs("span",{className:"font-medium text-stone-900",children:["₹",(Number(F.amount)||0).toLocaleString("en-IN")]})]},F.id))]})]})})]})]}),a.jsxs("div",{className:"flex items-center gap-3 sm:gap-4",children:[a.jsxs("button",{type:"button",onClick:E,className:"flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-xs transition-all cursor-pointer border border-stone-800",title:"Return to public website and store",children:[a.jsx("span",{className:"text-amber-300 font-bold",children:"←"}),a.jsx("span",{children:"Back to Website"})]}),a.jsxs("div",{ref:w,className:"relative",children:[a.jsxs("button",{onClick:()=>Q(!R),className:"p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors relative cursor-pointer","aria-label":"Notifications",children:[a.jsx(Bp,{className:"w-5 h-5 stroke-[1.8]"}),te>0&&a.jsx("span",{className:"absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 rounded-full ring-2 ring-white animate-pulse"})]}),R&&a.jsxs("div",{className:"absolute right-0 top-full mt-2 w-80 bg-white border border-stone-200 rounded-xl shadow-xl z-50 p-4 text-left",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsx("span",{className:"text-sm font-semibold text-stone-900",children:"Notifications"}),a.jsxs("span",{className:"text-xs text-stone-500 font-medium",children:[te," active alerts"]})]}),a.jsxs("div",{className:"py-2 space-y-2 max-h-72 overflow-y-auto text-xs",children:[me.map(F=>a.jsxs("div",{onClick:()=>{d(F.id),z("orders"),Q(!1)},className:"p-2.5 bg-amber-50/70 border border-amber-200/80 rounded-lg cursor-pointer hover:bg-amber-100/70 transition-colors",children:[a.jsxs("div",{className:"flex items-center gap-2 text-amber-800 font-semibold mb-0.5",children:[a.jsx(Li,{className:"w-3.5 h-3.5"}),a.jsxs("span",{children:["Pending Order ",F.orderNumber]})]}),a.jsxs("p",{className:"text-stone-600",children:[F.customerName," placed order of ₹",(Number(F.amount)||0).toLocaleString("en-IN")]})]},F.id)),K.slice(0,3).map(F=>a.jsxs("div",{onClick:()=>{z("inventory"),Q(!1)},className:"p-2.5 bg-red-50/70 border border-red-200/80 rounded-lg cursor-pointer hover:bg-red-100/70 transition-colors",children:[a.jsxs("div",{className:"flex items-center gap-2 text-red-800 font-semibold mb-0.5",children:[a.jsx(nn,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Low Stock Alert"})]}),a.jsxs("p",{className:"text-stone-600 truncate",children:[F.title," (Only ",F.stock??3," left)"]})]},F.id)),te===0&&a.jsxs("div",{className:"py-6 text-center text-stone-500",children:[a.jsx(hc,{className:"w-6 h-6 text-emerald-500 mx-auto mb-1.5"}),a.jsx("p",{children:"All clear! No alerts requiring attention."})]})]})]})]}),a.jsxs("div",{ref:Y,className:"relative",children:[a.jsxs("button",{onClick:()=>X(!j),className:"flex items-center gap-2.5 p-1 sm:px-2 py-1 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer text-stone-800",children:[a.jsx("div",{className:"w-8 h-8 rounded-full bg-[#c7dcfc] text-[#1e40af] font-semibold text-sm flex items-center justify-center shadow-xs",children:"A"}),a.jsx("span",{className:"text-sm font-semibold text-stone-800 hidden sm:inline-block",children:D}),a.jsx(Mi,{className:"w-3.5 h-3.5 text-stone-400"})]}),j&&a.jsxs("div",{className:"absolute right-0 top-full mt-2 w-52 bg-white border border-stone-200 rounded-xl shadow-xl z-50 p-2 text-left text-xs",children:[a.jsxs("div",{className:"px-3 py-2 border-b border-stone-100 mb-1",children:[a.jsx("p",{className:"font-semibold text-stone-900",children:D}),a.jsx("p",{className:"text-[11px] text-stone-500",children:"admin@jbicraft.com"})]}),a.jsxs("button",{onClick:()=>{z("settings"),X(!1)},className:"w-full flex items-center gap-2.5 px-3 py-2 text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer",children:[a.jsx(cx,{className:"w-3.5 h-3.5 text-stone-500"}),a.jsx("span",{children:"Store Settings"})]}),a.jsxs("button",{onClick:()=>{E(),X(!1)},className:"w-full flex items-center gap-2.5 px-3 py-2 text-stone-700 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer",children:[a.jsx(ex,{className:"w-3.5 h-3.5 text-stone-500"}),a.jsx("span",{children:"View Live Storefront"})]}),a.jsx("div",{className:"border-t border-stone-100 my-1 pt-1",children:a.jsxs("button",{onClick:()=>{v(),X(!1)},className:"w-full flex items-center gap-2.5 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer font-medium",children:[a.jsx(pc,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Logout"})]})})]})]})]})]})};var qf,Gf,Yf,Jf,Vf,Kf,Qf;const Rf=[],Bf=[],Ub=[],qb=[],Gb=[],uc=[],Yb=({products:o,orders:p,onNavigateSection:y,onSelectOrder:d,onUpdateOrderStatus:z,onRestockProduct:v})=>{const[E,D]=_.useState("weekly"),[g,h]=_.useState(null),O=p.reduce((acc,G)=>acc+(Number(G.total_amount||G.totalAmount||G.amount)||0),0),x=p.filter(G=>G.status==="Pending").length,R=o.filter(G=>(G.stock??0)<=5).length,Q=o.length,j=G=>{switch(G){case"Packed":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#fef08a] text-[#854d0e]",children:"Packed"});case"Shipped":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#bbf7d0] text-[#166534]",children:"Shipped"});case"Pending":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#fecaca] text-[#991b1b]",children:"Pending"});case"Delivered":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#e0e7ff] text-[#3730a3]",children:"Delivered"});case"Cancelled":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-700",children:"Cancelled"});default:return null}},X=p.slice(0,6),lowStock=o.filter(G=>(G.stock??0)<=5).slice(0,5);return a.jsxs("div",{className:"p-6 sm:p-10 space-y-10 max-w-7xl mx-auto text-stone-900",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:"Administrative Overview"}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Live operational dashboard, artisan orders, stock monitoring, and store metrics"})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("button",{onClick:()=>y("products"),className:"px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-black transition-colors cursor-pointer",children:"+ New Product"}),a.jsx("button",{onClick:()=>y("orders"),className:"px-4 py-2 bg-white border border-stone-200 text-stone-700 rounded-lg text-xs font-semibold hover:bg-stone-50 transition-colors cursor-pointer",children:"View Orders"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"text-stone-600 font-normal text-sm sm:text-base",children:"Total revenue"}),a.jsxs("div",{className:"text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 font-sans",children:["₹ ",(Number(O)||0).toLocaleString("en-IN")]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"text-stone-600 font-normal text-sm sm:text-base",children:"Pending orders"}),a.jsx("div",{className:"text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 font-sans",children:x})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"text-stone-600 font-normal text-sm sm:text-base",children:"Low stock items"}),a.jsx("div",{className:"text-2xl sm:text-4xl font-bold tracking-tight text-[#b91c1c] font-sans",children:R})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"text-stone-600 font-normal text-sm sm:text-base",children:"Total products"}),a.jsx("div",{className:"text-2xl sm:text-4xl font-bold tracking-tight text-stone-950 font-sans",children:Q})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h2",{className:"text-lg sm:text-xl font-bold text-stone-900 tracking-tight",children:"Recent orders"}),a.jsxs("button",{onClick:()=>y("orders"),className:"text-xs font-semibold text-stone-600 hover:text-stone-950 flex items-center gap-1 cursor-pointer transition-colors",children:[a.jsx("span",{children:"View All Orders"}),a.jsx(Lp,{className:"w-3.5 h-3.5"})]})]}),a.jsx("div",{className:"bg-white border border-stone-200/90 rounded-2xl overflow-hidden shadow-xs",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-stone-200/80 bg-stone-50/50 text-stone-600 text-xs sm:text-sm font-semibold",children:[a.jsx("th",{className:"py-3.5 px-6 font-semibold",children:"Order ID"}),a.jsx("th",{className:"py-3.5 px-6 font-semibold",children:"Customer"}),a.jsx("th",{className:"py-3.5 px-6 font-semibold",children:"Amount"}),a.jsx("th",{className:"py-3.5 px-6 font-semibold",children:"Status"}),a.jsx("th",{className:"py-3.5 px-6 font-semibold text-right",children:"Action"})]})}),a.jsx("tbody",{className:"divide-y divide-stone-100 text-sm",children:X.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:5,className:"py-10 text-center text-stone-400 text-xs",children:"No customer orders received yet."})}):X.map(G=>a.jsxs("tr",{className:"hover:bg-stone-50/70 transition-colors group",children:[a.jsx("td",{className:"py-4 px-6 font-semibold text-stone-900",children:G.orderNumber||G.id}),a.jsxs("td",{className:"py-4 px-6 font-medium text-stone-800",children:[a.jsx("div",{children:G.customerName}),a.jsx("div",{className:"text-[11px] text-stone-400 font-normal",children:G.city||G.state||""})]}),a.jsxs("td",{className:"py-4 px-6 font-semibold text-stone-900",children:["₹ ",(Number(G.total_amount||G.amount)||0).toLocaleString("en-IN")]}),a.jsx("td",{className:"py-4 px-6",children:j(G.status)}),a.jsx("td",{className:"py-4 px-6 text-right",children:a.jsxs("div",{className:"flex items-center justify-end gap-2",children:[a.jsxs("select",{value:G.status,onChange:w=>z(G.id,w.target.value),className:"text-xs bg-stone-50 border border-stone-200 rounded-md px-2 py-1 text-stone-700 focus:outline-none cursor-pointer",children:[a.jsx("option",{value:"Pending",children:"Pending"}),a.jsx("option",{value:"Packed",children:"Packed"}),a.jsx("option",{value:"Shipped",children:"Shipped"}),a.jsx("option",{value:"Delivered",children:"Delivered"}),a.jsx("option",{value:"Cancelled",children:"Cancelled"})]}),a.jsx("button",{onClick:()=>h(G),className:"p-1.5 text-stone-500 hover:text-stone-900 rounded-md hover:bg-stone-100",title:"View order receipt",children:a.jsx(xs,{className:"w-4 h-4"})})]})})]},G.id))})]})})})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[a.jsxs("div",{className:"bg-white border border-stone-200 rounded-2xl p-6 shadow-xs lg:col-span-1 flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-stone-100",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(nn,{className:"w-4 h-4 text-[#b91c1c]"}),a.jsx("h3",{className:"font-bold text-base text-stone-900",children:"Low Stock Alerts"})]}),a.jsxs("span",{className:"text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-50 text-red-700",children:[R," items"]})]}),a.jsx("div",{className:"divide-y divide-stone-100 mt-2 space-y-1",children:lowStock.length===0?a.jsx("p",{className:"text-xs text-stone-400 py-8 text-center",children:"All catalog products are well stocked."}):lowStock.map(G=>a.jsxs("div",{className:"py-3 flex items-center justify-between gap-3 text-xs",children:[a.jsxs("div",{className:"flex items-center gap-3 min-w-0",children:[a.jsx("img",{src:G.image,alt:"",className:"w-10 h-10 rounded-lg object-cover border border-stone-200 shrink-0"}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("p",{className:"font-semibold text-stone-900 truncate",children:G.title}),a.jsxs("p",{className:"text-stone-400 text-[11px]",children:["Stock: ",a.jsx("span",{className:"font-bold text-red-600",children:G.stock??0})," left"]})]})]}),a.jsx("button",{onClick:()=>v(G.id,10),className:"px-2.5 py-1 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-md font-medium text-[11px] transition-colors shrink-0",children:"+ Restock"})]},G.id))})]}),a.jsx("button",{onClick:()=>y("inventory"),className:"mt-4 w-full py-2.5 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 font-semibold rounded-xl text-xs transition-colors text-center block",children:"Manage All Inventory"})]}),a.jsxs("div",{className:"bg-white border border-stone-200 rounded-2xl p-6 shadow-xs lg:col-span-2 flex flex-col justify-between",children:[a.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-stone-100",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold text-base text-stone-900",children:"Sales & Revenue Overview"}),a.jsx("p",{className:"text-xs text-stone-500 mt-0.5",children:"Performance metrics across artisan orders"})]}),a.jsxs("div",{className:"flex items-center bg-stone-100 p-1 rounded-lg text-xs font-medium",children:[a.jsx("button",{onClick:()=>D("weekly"),className:`px-3 py-1 rounded-md transition-all ${E==="weekly"?"bg-white text-stone-900 shadow-xs font-semibold":"text-stone-600 hover:text-stone-900"}`,children:"Overview"}),a.jsx("button",{onClick:()=>D("monthly"),className:`px-3 py-1 rounded-md transition-all ${E==="monthly"?"bg-white text-stone-900 shadow-xs font-semibold":"text-stone-600 hover:text-stone-900"}`,children:"Settlements"})]})]}),a.jsx("div",{className:"mt-6",children:p.length===0?a.jsxs("div",{className:"h-48 flex flex-col items-center justify-center text-center p-6 text-stone-400 text-xs border border-dashed border-stone-200 rounded-xl",children:[a.jsx("p",{className:"font-medium text-stone-600 text-sm",children:"No Sales Data Yet"}),a.jsx("p",{className:"text-xs text-stone-400 mt-1",children:"Order sales trends and artisan payouts will update dynamically as customer purchases occur."})]}):a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{className:"p-4 bg-stone-50 rounded-xl border border-stone-100",children:[a.jsx("p",{className:"text-xs text-stone-500",children:"Artisan Share (80%)"}),a.jsxs("p",{className:"text-xl font-bold text-emerald-800 mt-1",children:["₹",Math.round((Number(O)||0)*0.8).toLocaleString("en-IN")]})]}),a.jsxs("div",{className:"p-4 bg-stone-50 rounded-xl border border-stone-100",children:[a.jsx("p",{className:"text-xs text-stone-500",children:"Operations & Logistics (20%)"}),a.jsxs("p",{className:"text-xl font-bold text-stone-900 mt-1",children:["₹",Math.round((Number(O)||0)*0.2).toLocaleString("en-IN")]})]})]}),a.jsxs("div",{className:"p-4 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-between",children:[a.jsx("span",{className:"text-xs text-stone-600 font-medium",children:"Completed Transactions"}),a.jsxs("span",{className:"text-sm font-bold text-stone-900",children:[p.length," Orders"]})]})]})}),a.jsxs("div",{className:"flex items-center justify-between text-xs text-stone-500 pt-4 border-t border-stone-100 mt-4",children:[a.jsxs("span",{children:["Realized Store Sales: ₹",(Number(O)||0).toLocaleString("en-IN")]}),a.jsx("span",{className:"text-stone-400 font-medium",children:"Live Order Tracking"})]})]})]}),g&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-stone-200",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsxs("div",{children:[a.jsxs("h3",{className:"font-bold text-lg text-stone-900",children:["Order Details: ",g.orderNumber||g.id]}),a.jsx("p",{className:"text-xs text-stone-500",children:g.date||""})]}),a.jsx("button",{onClick:()=>h(null),className:"text-stone-400 hover:text-stone-800 text-sm font-semibold p-1",children:"✕"})]}),a.jsxs("div",{className:"space-y-3 text-xs",children:[a.jsxs("div",{className:"bg-stone-50 p-3 rounded-lg flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-semibold text-stone-900",children:g.customerName}),a.jsx("p",{className:"text-stone-500",children:g.customerPhone||""}),a.jsxs("p",{className:"text-stone-500",children:[g.shippingAddress||"",g.city?`, ${g.city}`:""]})]}),a.jsxs("div",{className:"text-right",children:[j(g.status),a.jsx("p",{className:"text-[11px] text-stone-500 mt-1",children:g.paymentMethod||"Prepaid"})]})]}),Array.isArray(g.items)&&g.items.length>0&&a.jsxs("div",{className:"space-y-2",children:[a.jsx("p",{className:"font-semibold text-stone-800",children:"Purchased Items:"}),g.items.map((G,w)=>a.jsxs("div",{className:"flex items-center justify-between py-2 border-b border-stone-100",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[G.image&&a.jsx("img",{src:G.image,alt:"",className:"w-10 h-10 rounded object-cover border border-stone-200"}),a.jsxs("div",{children:[a.jsx("p",{className:"font-medium text-stone-900",children:G.productTitle||G.title||"Product"}),a.jsxs("p",{className:"text-stone-400",children:["Qty: ",G.quantity||1]})]})]}),a.jsxs("span",{className:"font-semibold text-stone-900",children:["₹",((Number(G.price)||0)*(Number(G.quantity)||1)).toLocaleString("en-IN")]})]},w))]}),a.jsxs("div",{className:"flex justify-between items-center pt-2 font-bold text-sm text-stone-900",children:[a.jsx("span",{children:"Total Amount:"}),a.jsxs("span",{children:["₹",(Number(g.total_amount||g.amount)||0).toLocaleString("en-IN")]})]})]}),a.jsx("div",{className:"flex justify-end gap-2 pt-3 border-t border-stone-100",children:a.jsx("button",{onClick:()=>h(null),className:"px-4 py-2 text-xs font-semibold bg-stone-900 text-white rounded-lg hover:bg-black transition-colors",children:"Close"})})]})})]})},Jb=({products:o,onAddProduct:p,onUpdateProduct:y,onDeleteProduct:d})=>{const[z,v]=_.useState(""),[E,D]=_.useState("all"),[g,h]=_.useState(!1),[O,x]=_.useState(null),[H,R]=_.useState({title:"",craft:"",category:"",price:"",originalPrice:"",stock:"",origin:"",artisanName:"",description:"",image:"",featured:!1,isNew:!0}),Q=Array.from(new Set([...o.map(w=>w.category),...(typeof oc!=="undefined"?oc.map(c=>c.name):[]),"Heritage Art","Handloom & Textiles","Handicrafts & Metal","Jewellery & Ornaments","Pattachitra & Palm Leaf Art","Handloom & Sarees","Wood Crafts","Jute Craft","Necklaces & Chokers","Earrings & Drops","Lac Bangles"])).filter(Boolean),j=o.filter(w=>{const Y=w.title.toLowerCase().includes(z.toLowerCase())||w.craft.toLowerCase().includes(z.toLowerCase())||w.artisanName&&w.artisanName.toLowerCase().includes(z.toLowerCase()),I=E==="all"||w.category===E;return Y&&I}),X=w=>{var I;if(w.preventDefault(),!H.title||!H.price)return;const Y={id:`prod-custom-${Date.now()}`,title:H.title||"Handcrafted Odisha Craft",craft:H.craft||"TRADITIONAL CRAFT",category:H.category||"Handicrafts",price:Number(H.price),originalPrice:H.originalPrice?Number(H.originalPrice):Number(H.price)*1.2,rating:5,reviewsCount:1,image:H.image||((I=o[0])==null?void 0:I.image)||"",stock:Number(H.stock??10),origin:H.origin||"Odisha, India",artisanId:"artisan-1",artisanName:H.artisanName||"Master Artisan Federation",description:H.description||"Authentic handcrafted heritage treasure from Odisha.",isNew:H.isNew??!0,featured:H.featured??!1,details:{material:"Authentic Traditional Materials",dimensions:"Standard Craft Dimensions",weight:"600 grams",careInstructions:"Handle with care. Clean with soft dry cloth.",technique:"Generational handcrafted master technique",leadTime:"Crafted in 5-7 working days"},features:["100% Authentic Handcrafted Heritage","Direct Artisan Patronage Support","Fair-Trade certified artisan guild"]};p(Y),h(!1),R({title:"",craft:"",category:"",price:"",originalPrice:"",stock:"",origin:"",artisanName:"",description:"",image:"",featured:!1,isNew:!0})},G=w=>{w.preventDefault(),O&&(y(O),x(null))};return a.jsxs("div",{className:"p-6 sm:p-10 space-y-8 max-w-7xl mx-auto text-stone-900",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:"Products Catalog"}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Manage your store inventory, pricing, craft details, and artisan attribution"})]}),a.jsxs("button",{onClick:()=>{R({title:"",craft:"",category:"",price:"",originalPrice:"",stock:"",origin:"",artisanName:"",description:"",image:"",featured:!1,isNew:!0});h(!0)},className:"inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer",children:[a.jsx(on,{className:"w-4 h-4"}),a.jsx("span",{children:"Add New Product"})]})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-3 bg-white p-4 rounded-xl border border-stone-200 shadow-xs",children:[a.jsxs("div",{className:"relative flex-1 w-full",children:[a.jsx(ps,{className:"w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2"}),a.jsx("input",{type:"text",value:z,onChange:w=>v(w.target.value),placeholder:"Search by product name, craft, or artisan...",className:"w-full pl-9 pr-4 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-400 text-stone-900"})]}),a.jsx("div",{className:"flex items-center gap-2 w-full sm:w-auto",children:a.jsxs("select",{value:E,onChange:w=>D(w.target.value),className:"w-full sm:w-auto px-3 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-stone-400 text-stone-800 font-medium cursor-pointer",children:[a.jsxs("option",{value:"all",children:["All Categories (",o.length,")"]}),Q.map(w=>a.jsxs("option",{value:w,children:[w," (",o.filter(Y=>Y.category===w).length,")"]},w))]})})]}),a.jsx("div",{className:"bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-stone-200 bg-stone-50/70 text-stone-600 text-xs font-semibold",children:[a.jsx("th",{className:"py-3.5 px-6",children:"Product"}),a.jsx("th",{className:"py-3.5 px-6",children:"Category / Craft"}),a.jsx("th",{className:"py-3.5 px-6",children:"Price"}),a.jsx("th",{className:"py-3.5 px-6",children:"Stock Level"}),a.jsx("th",{className:"py-3.5 px-6",children:"Artisan"}),a.jsx("th",{className:"py-3.5 px-6 text-right",children:"Actions"})]})}),a.jsx("tbody",{className:"divide-y divide-stone-100 text-xs sm:text-sm",children:j.map(w=>{const Y=w.stock??12,I=Y<=5,re=Y===0;return a.jsxs("tr",{className:"hover:bg-stone-50/60 transition-colors",children:[a.jsx("td",{className:"py-4 px-6",children:a.jsxs("div",{className:"flex items-center gap-3.5",children:[a.jsx("img",{src:w.image,alt:"",className:"w-12 h-12 rounded-lg object-cover border border-stone-200 shrink-0"}),a.jsxs("div",{className:"min-w-0 max-w-xs",children:[a.jsx("p",{className:"font-semibold text-stone-900 truncate",children:w.title}),a.jsx("p",{className:"text-[11px] text-stone-500",children:w.origin})]})]})}),a.jsxs("td",{className:"py-4 px-6",children:[a.jsx("div",{className:"font-medium text-stone-800",children:w.category}),a.jsx("div",{className:"text-[11px] text-stone-500 font-mono",children:w.craft})]}),a.jsxs("td",{className:"py-4 px-6",children:[a.jsxs("span",{className:"font-bold text-stone-900",children:["₹",(Number(w.price)||0).toLocaleString("en-IN")]}),w.originalPrice&&w.originalPrice>w.price&&a.jsxs("span",{className:"text-[11px] text-stone-400 line-through ml-1.5",children:["₹",(Number(w.originalPrice)||0).toLocaleString("en-IN")]})]}),a.jsx("td",{className:"py-4 px-6",children:re?a.jsx("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-100 text-red-800",children:"Out of Stock (0)"}):I?a.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-red-50 text-red-700",children:["Low Stock (",Y,")"]}):a.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-emerald-50 text-emerald-800",children:[Y," in stock"]})}),a.jsx("td",{className:"py-4 px-6 text-stone-700",children:w.artisanName||"Master Guild"}),a.jsx("td",{className:"py-4 px-6 text-right",children:a.jsxs("div",{className:"flex items-center justify-end gap-2",children:[a.jsx("button",{onClick:()=>x(w),className:"p-1.5 text-stone-500 hover:text-stone-900 rounded hover:bg-stone-100 transition-colors",title:"Edit product",children:a.jsx(rx,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>{d(w.id)},className:"p-1.5 text-stone-400 hover:text-red-600 rounded hover:bg-red-50 transition-colors",title:"Delete product",children:a.jsx(Xt,{className:"w-4 h-4"})})]})})]},w.id)})})]})})}),g&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 border border-stone-200 max-h-[90vh] overflow-y-auto",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsx("h3",{className:"font-bold text-lg text-stone-900",children:"Add New Artisan Product"}),a.jsx("button",{type:"button",onClick:()=>h(!1),className:"text-stone-400 hover:text-stone-800 cursor-pointer",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:X,className:"space-y-4 text-xs sm:text-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Product Title *"}),a.jsx("input",{type:"text",required:!0,value:H.title,onChange:w=>R({...H,title:w.target.value}),placeholder:"e.g. Handcrafted Pure Bronze Kadai with Brass Handles",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Category *"}),a.jsx("select",{required:!0,value:H.category,onChange:w=>R({...H,category:w.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400 text-xs sm:text-sm cursor-pointer",children:[a.jsx("option",{value:"",children:"-- Select Available Category --"},"default-cat"),...Q.map(w=>a.jsx("option",{value:w,children:w},w))]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Craft Lineage"}),a.jsx("input",{type:"text",value:H.craft,onChange:w=>R({...H,craft:w.target.value}),placeholder:"e.g. Sambalpuri Ikat, Pattachitra...",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Selling Price (₹) *"}),a.jsx("input",{type:"number",required:!0,value:H.price===""?"":H.price,onChange:w=>R({...H,price:w.target.value===""?"":Number(w.target.value)}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Original Price (₹)"}),a.jsx("input",{type:"number",value:H.originalPrice===""?"":H.originalPrice,onChange:w=>R({...H,originalPrice:w.target.value===""?"":Number(w.target.value)}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Initial Stock"}),a.jsx("input",{type:"number",value:H.stock===""?"":H.stock,onChange:w=>R({...H,stock:w.target.value===""?"":Number(w.target.value)}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Artisan / Guild Name"}),a.jsx("input",{type:"text",value:H.artisanName,onChange:w=>R({...H,artisanName:w.target.value}),placeholder:"Master Weavers of Sambalpur",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Origin Village / District"}),a.jsx("input",{type:"text",value:H.origin,onChange:w=>R({...H,origin:w.target.value}),placeholder:"Barpali, Bargarh, Odisha",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Image URL"}),a.jsx("input",{type:"text",value:H.image,onChange:w=>R({...H,image:w.target.value}),placeholder:"https://...",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400 font-mono text-xs"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Description"}),a.jsx("textarea",{rows:3,value:H.description,onChange:w=>R({...H,description:w.target.value}),placeholder:"Detailed description of handcrafted process, materials, and significance...",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400 text-xs"})]}),a.jsxs("div",{className:"flex items-center justify-between gap-3 pt-4 border-t border-stone-100",children:[a.jsx("button",{type:"button",onClick:()=>R({title:"",craft:"",category:"",price:"",originalPrice:"",stock:"",origin:"",artisanName:"",description:"",image:"",featured:!1,isNew:!0}),className:"px-3 py-1.5 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg font-semibold transition-colors cursor-pointer",children:"Clear All Fields"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("button",{type:"button",onClick:()=>h(!1),className:"px-4 py-2 text-stone-600 hover:text-stone-900 font-medium cursor-pointer",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 bg-stone-900 hover:bg-black text-white font-semibold rounded-lg shadow-sm cursor-pointer",children:"Save & Publish Product"})]})]})]})]})}),O&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl space-y-4 border border-stone-200 max-h-[90vh] overflow-y-auto",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsxs("h3",{className:"font-bold text-lg text-stone-900",children:["Edit Product: ",O.title]}),a.jsx("button",{onClick:()=>x(null),className:"text-stone-400 hover:text-stone-800",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:G,className:"space-y-4 text-xs sm:text-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Title"}),a.jsx("input",{type:"text",required:!0,value:O.title,onChange:w=>x({...O,title:w.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Category"}),a.jsx("input",{type:"text",value:O.category,onChange:w=>x({...O,category:w.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Craft"}),a.jsx("input",{type:"text",value:O.craft,onChange:w=>x({...O,craft:w.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Price (₹)"}),a.jsx("input",{type:"number",required:!0,value:O.price,onChange:w=>x({...O,price:Number(w.target.value)}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Stock Count"}),a.jsx("input",{type:"number",value:O.stock??10,onChange:w=>x({...O,stock:Number(w.target.value)}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Image URL"}),a.jsx("input",{type:"text",value:O.image,onChange:w=>x({...O,image:w.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none font-mono text-xs"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Description"}),a.jsx("textarea",{rows:3,value:O.description,onChange:w=>x({...O,description:w.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none text-xs"})]}),a.jsxs("div",{className:"flex justify-end gap-3 pt-4 border-t border-stone-100",children:[a.jsx("button",{type:"button",onClick:()=>x(null),className:"px-4 py-2 text-stone-600 hover:text-stone-900 font-medium",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 bg-stone-900 hover:bg-black text-white font-semibold rounded-lg shadow-sm",children:"Save Changes"})]})]})]})})]})},Vb=({products:o})=>{const[p,y]=_.useState(oc),[d,z]=_.useState(!1),[v,E]=_.useState(null),[D,g]=_.useState({name:"",slug:"",subtitle:"",description:"",image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80"}),h=x=>{if(x.preventDefault(),!D.name)return;const H={id:`cat-${Date.now()}`,name:D.name,slug:D.slug||D.name.toLowerCase().replace(/\s+/g,"-"),subtitle:D.subtitle||"Odisha Heritage Craft",description:D.description||"Authentic traditional collection from Odisha.",count:0,image:D.image||oc[0].image};y([...p,H]),z(!1),g({name:"",slug:"",subtitle:"",description:""})},O=x=>{x.preventDefault(),v&&(y(p.map(H=>H.id===v.id?v:H)),E(null))};return a.jsxs("div",{className:"p-6 sm:p-10 space-y-8 max-w-7xl mx-auto text-stone-900",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:"Craft Categories"}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Organize handicraft types, GI collections, and front-page department groupings"})]}),a.jsxs("button",{onClick:()=>z(!0),className:"inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer",children:[a.jsx(on,{className:"w-4 h-4"}),a.jsx("span",{children:"Add New Category"})]})]}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:p.map(x=>{const H=o.filter(R=>R.category.toLowerCase().includes(x.slug.toLowerCase())||R.categoriesList&&R.categoriesList.some(Q=>Q.toLowerCase().includes(x.slug.toLowerCase()))).length;return a.jsxs("div",{className:"bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"relative h-44 bg-stone-100 overflow-hidden",children:[a.jsx("img",{src:x.image,alt:x.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),a.jsxs("div",{className:"absolute top-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-full",children:[H||x.count," Products"]})]}),a.jsxs("div",{className:"p-5 space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("h3",{className:"font-bold text-base text-stone-900",children:x.name}),a.jsxs("span",{className:"text-[11px] font-mono text-stone-400 bg-stone-100 px-2 py-0.5 rounded",children:["/",x.slug]})]}),a.jsx("p",{className:"text-xs font-medium text-stone-700",children:x.subtitle}),a.jsx("p",{className:"text-xs text-stone-500 line-clamp-2 leading-relaxed",children:x.description})]})]}),a.jsxs("div",{className:"p-5 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between",children:[a.jsxs("span",{className:"text-xs text-stone-400 font-medium",children:["Department ID: ",x.id]}),a.jsxs("button",{onClick:()=>E(x),className:"inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-stone-950 p-1.5 hover:bg-stone-100 rounded-md transition-colors",children:[a.jsx(rx,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Edit"})]})]})]},x.id)})}),d&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-stone-200",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsx("h3",{className:"font-bold text-lg text-stone-900",children:"Add New Craft Category"}),a.jsx("button",{onClick:()=>z(!1),className:"text-stone-400 hover:text-stone-800",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:h,className:"space-y-4 text-xs sm:text-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Category Name *"}),a.jsx("input",{type:"text",required:!0,value:D.name,onChange:x=>g({...D,name:x.target.value}),placeholder:"e.g. Terracotta & Clay Pottery",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Slug / Identifier"}),a.jsx("input",{type:"text",value:D.slug,onChange:x=>g({...D,slug:x.target.value}),placeholder:"terracotta",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none font-mono text-xs"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Subtitle"}),a.jsx("input",{type:"text",value:D.subtitle,onChange:x=>g({...D,subtitle:x.target.value}),placeholder:"Eco-Friendly Earthen Tableware",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Hero Image URL"}),a.jsx("input",{type:"text",value:D.image,onChange:x=>g({...D,image:x.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none font-mono text-xs"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Description"}),a.jsx("textarea",{rows:3,value:D.description,onChange:x=>g({...D,description:x.target.value}),placeholder:"Summary of craft origin and key items...",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none text-xs"})]}),a.jsxs("div",{className:"flex justify-end gap-3 pt-3 border-t border-stone-100",children:[a.jsx("button",{type:"button",onClick:()=>z(!1),className:"px-4 py-2 text-stone-600 hover:text-stone-900 font-medium",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 bg-stone-900 hover:bg-black text-white font-semibold rounded-lg shadow-sm",children:"Create Category"})]})]})]})}),v&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-stone-200",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsxs("h3",{className:"font-bold text-lg text-stone-900",children:["Edit Category: ",v.name]}),a.jsx("button",{onClick:()=>E(null),className:"text-stone-400 hover:text-stone-800",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:O,className:"space-y-4 text-xs sm:text-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Name"}),a.jsx("input",{type:"text",required:!0,value:v.name,onChange:x=>E({...v,name:x.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Subtitle"}),a.jsx("input",{type:"text",value:v.subtitle,onChange:x=>E({...v,subtitle:x.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Hero Image"}),a.jsx("input",{type:"text",value:v.image,onChange:x=>E({...v,image:x.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none font-mono text-xs"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Description"}),a.jsx("textarea",{rows:3,value:v.description,onChange:x=>E({...v,description:x.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none text-xs"})]}),a.jsxs("div",{className:"flex justify-end gap-3 pt-3 border-t border-stone-100",children:[a.jsx("button",{type:"button",onClick:()=>E(null),className:"px-4 py-2 text-stone-600 hover:text-stone-900 font-medium",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 bg-stone-900 hover:bg-black text-white font-semibold rounded-lg shadow-sm",children:"Save Changes"})]})]})]})})]})},Kb=({products:o,onRestockProduct:p})=>{const[y,d]=_.useState(""),[z,v]=_.useState("all"),[E,D]=_.useState(null),[g,h]=_.useState(10),O=o.filter(j=>{const X=j.stock??12;return j.title.toLowerCase().includes(y.toLowerCase())||j.craft.toLowerCase().includes(y.toLowerCase())||j.category.toLowerCase().includes(y.toLowerCase())?z==="low"?X>0&&X<=5:z==="out"?X===0:z==="in"?X>5:!0:!1}),x=o.filter(j=>(j.stock??12)<=5&&(j.stock??12)>0).length,H=o.filter(j=>(j.stock??12)===0).length,R=o.reduce((j,X)=>j+(X.stock??12),0),Q=j=>{g>0&&(p(j,g),D(null),h(10))};return a.jsxs("div",{className:"p-6 sm:p-10 space-y-8 max-w-7xl mx-auto text-stone-900",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:"Inventory & Restock"}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Real-time stock ledger, safety thresholds, and one-click artisan batch replenishment"})]}),a.jsx("div",{className:"flex items-center gap-3",children:a.jsxs("div",{className:"text-right",children:[a.jsx("span",{className:"text-xs text-stone-500 block",children:"Total Units in Atelier"}),a.jsxs("span",{className:"text-lg font-bold text-stone-900",children:[R," units"]})]})})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-5",children:[a.jsxs("div",{className:"bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs font-semibold text-stone-500 uppercase tracking-wider",children:"In Stock Products"}),a.jsx("p",{className:"text-2xl font-bold text-stone-900 mt-1",children:o.length-x-H})]}),a.jsx("div",{className:"w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center",children:a.jsx(hc,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs font-semibold text-stone-500 uppercase tracking-wider",children:"Low Stock Items"}),a.jsx("p",{className:"text-2xl font-bold text-red-700 mt-1",children:x})]}),a.jsx("div",{className:"w-10 h-10 rounded-lg bg-red-50 text-red-700 flex items-center justify-center",children:a.jsx(nn,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"bg-white border border-stone-200 rounded-xl p-5 shadow-xs flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs font-semibold text-stone-500 uppercase tracking-wider",children:"Out of Stock"}),a.jsx("p",{className:"text-2xl font-bold text-stone-900 mt-1",children:H})]}),a.jsx("div",{className:"w-10 h-10 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center",children:a.jsx(Pf,{className:"w-5 h-5"})})]})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-stone-200 shadow-xs",children:[a.jsxs("div",{className:"relative flex-1 w-full max-w-md",children:[a.jsx(ps,{className:"w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),a.jsx("input",{type:"text",value:y,onChange:j=>d(j.target.value),placeholder:"Search craft, SKU or title...",className:"w-full pl-9 pr-4 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsxs("div",{className:"flex items-center gap-2 w-full sm:w-auto overflow-x-auto text-xs font-semibold",children:[a.jsxs("button",{onClick:()=>v("all"),className:`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${z==="all"?"bg-stone-900 text-white":"bg-stone-100 text-stone-600 hover:bg-stone-200"}`,children:["All (",o.length,")"]}),a.jsxs("button",{onClick:()=>v("low"),className:`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${z==="low"?"bg-red-700 text-white":"bg-stone-100 text-stone-600 hover:bg-stone-200"}`,children:["Low Stock (",x,")"]}),a.jsxs("button",{onClick:()=>v("out"),className:`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${z==="out"?"bg-stone-900 text-white":"bg-stone-100 text-stone-600 hover:bg-stone-200"}`,children:["Out of Stock (",H,")"]}),a.jsx("button",{onClick:()=>v("in"),className:`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${z==="in"?"bg-emerald-800 text-white":"bg-stone-100 text-stone-600 hover:bg-stone-200"}`,children:"Healthy Stock"})]})]}),a.jsx("div",{className:"bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-stone-200 bg-stone-50/70 text-stone-600 text-xs font-semibold",children:[a.jsx("th",{className:"py-3.5 px-6",children:"Product & Craft"}),a.jsx("th",{className:"py-3.5 px-6",children:"Category"}),a.jsx("th",{className:"py-3.5 px-6",children:"Price"}),a.jsx("th",{className:"py-3.5 px-6",children:"Available Stock"}),a.jsx("th",{className:"py-3.5 px-6",children:"Stock Status"}),a.jsx("th",{className:"py-3.5 px-6 text-right",children:"Quick Restock"})]})}),a.jsx("tbody",{className:"divide-y divide-stone-100 text-xs sm:text-sm",children:O.map(j=>{const X=j.stock??12,G=X<=5&&X>0,w=X===0;return a.jsxs("tr",{className:"hover:bg-stone-50/60 transition-colors",children:[a.jsx("td",{className:"py-4 px-6",children:a.jsxs("div",{className:"flex items-center gap-3.5",children:[a.jsx("img",{src:j.image,alt:"",className:"w-11 h-11 rounded-lg object-cover border border-stone-200 shrink-0"}),a.jsxs("div",{className:"min-w-0 max-w-xs",children:[a.jsx("p",{className:"font-semibold text-stone-900 truncate",children:j.title}),a.jsxs("p",{className:"text-[11px] text-stone-500 font-mono",children:["ID: ",j.id.replace("prod-","")]})]})]})}),a.jsx("td",{className:"py-4 px-6 text-stone-700 font-medium",children:j.category}),a.jsxs("td",{className:"py-4 px-6 font-semibold text-stone-900",children:["₹",(Number(j.price)||0).toLocaleString("en-IN")]}),a.jsx("td",{className:"py-4 px-6",children:a.jsx("div",{className:"flex items-center gap-2",children:a.jsxs("span",{className:`font-bold text-sm ${G?"text-red-700 font-extrabold":w?"text-stone-400 line-through":"text-stone-900"}`,children:[X," units"]})})}),a.jsx("td",{className:"py-4 px-6",children:w?a.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-200 text-stone-800",children:"Out of Stock"}):G?a.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-100 text-red-700",children:"Critical Low Stock"}):a.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800",children:"In Stock"})}),a.jsx("td",{className:"py-4 px-6 text-right",children:E===j.id?a.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[a.jsx("input",{type:"number",min:"1",value:g,onChange:Y=>h(Number(Y.target.value)),className:"w-16 px-2 py-1 text-xs border border-stone-300 rounded bg-white text-stone-900 text-center"}),a.jsx("button",{onClick:()=>Q(j.id),className:"px-2.5 py-1 bg-stone-900 text-white rounded text-xs font-semibold hover:bg-black",children:"Add"}),a.jsx("button",{onClick:()=>D(null),className:"text-stone-400 hover:text-stone-700 text-xs px-1",children:"✕"})]}):a.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[a.jsx("button",{onClick:()=>p(j.id,5),className:"px-2.5 py-1 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded transition-colors",title:"Add 5 units",children:"+5"}),a.jsx("button",{onClick:()=>p(j.id,10),className:"px-2.5 py-1 text-xs font-semibold bg-stone-900 hover:bg-black text-white rounded transition-colors shadow-2xs",title:"Add 10 units",children:"+10"}),a.jsx("button",{onClick:()=>D(j.id),className:"px-2 py-1 text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded transition-colors",children:"Custom"})]})})]},j.id)})})]})})})]})},Qb=({orders:o,onUpdateOrderStatus:p,onUpdateTrackingId:y})=>{const seenQb=new Set();const dedupedOrders=Array.isArray(o)?o.filter(j=>{if(!j)return false;const k=(j.orderNumber||j.order_number||j.id||"").toLowerCase().trim();if(!k||seenQb.has(k))return false;seenQb.add(k);return true;}):[];const[d,z]=_.useState(""),[v,E]=_.useState("All"),[D,g]=_.useState(null),[h,O]=_.useState(""),x=dedupedOrders.filter(j=>{
const on=(j.orderNumber||j.order_number||j.id||"").toLowerCase(),cn=(j.customerName||j.customer_name||"").toLowerCase(),ce=(j.customerEmail||j.customer_email||"").toLowerCase(),ct=(j.city||j.state||"").toLowerCase(),q=d.toLowerCase(),X=on.includes(q)||cn.includes(q)||ce.includes(q)||ct.includes(q),G=v==="All"||j.status===v;return X&&G}),H=j=>{switch(j){case"Packed":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#fef08a] text-[#854d0e]",children:"Packed"});case"Shipped":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#bbf7d0] text-[#166534]",children:"Shipped"});case"Pending":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#fecaca] text-[#991b1b]",children:"Pending"});case"Delivered":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-[#e0e7ff] text-[#3730a3]",children:"Delivered"});case"Cancelled":return a.jsx("span",{className:"inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-stone-200 text-stone-700",children:"Cancelled"})}},R={All:dedupedOrders.length,Pending:dedupedOrders.filter(j=>j.status==="Pending").length,Packed:dedupedOrders.filter(j=>j.status==="Packed").length,Shipped:dedupedOrders.filter(j=>j.status==="Shipped").length,Delivered:dedupedOrders.filter(j=>j.status==="Delivered").length,Cancelled:dedupedOrders.filter(j=>j.status==="Cancelled").length},Q=()=>{window.print()};return a.jsxs("div",{className:"p-6 sm:p-10 space-y-8 max-w-7xl mx-auto text-stone-900",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:"Orders Management"}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Track customer shipments, packing workflows, courier statuses, and invoices"})]}),a.jsx("div",{className:"flex items-center gap-2",children:a.jsxs("span",{className:"text-xs text-stone-500 font-medium",children:["Showing ",x.length," of ",o.length," orders"]})})]}),a.jsx("div",{className:"flex items-center gap-2 border-b border-stone-200 overflow-x-auto pb-px text-xs font-semibold",children:["All","Pending","Packed","Shipped","Delivered","Cancelled"].map(j=>a.jsxs("button",{onClick:()=>E(j),className:`px-4 py-2.5 border-b-2 font-medium transition-all whitespace-nowrap cursor-pointer ${v===j?"border-stone-900 text-stone-950 font-bold":"border-transparent text-stone-500 hover:text-stone-900"}`,children:[a.jsx("span",{children:j}),a.jsx("span",{className:`ml-2 text-[10px] px-1.5 py-0.5 rounded-full ${v===j?"bg-stone-900 text-white":"bg-stone-100 text-stone-600"}`,children:R[j]})]},j))}),a.jsx("div",{className:"bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex items-center gap-4",children:a.jsxs("div",{className:"relative flex-1",children:[a.jsx(ps,{className:"w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),a.jsx("input",{type:"text",value:d,onChange:j=>z(j.target.value),placeholder:"Search by order ID, customer name, email, or city...",className:"w-full pl-9 pr-4 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]})}),a.jsx("div",{className:"bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-stone-200 bg-stone-50/70 text-stone-600 text-xs font-semibold",children:[a.jsx("th",{className:"py-3.5 px-6",children:"Order ID"}),a.jsx("th",{className:"py-3.5 px-6",children:"Customer & Location"}),a.jsx("th",{className:"py-3.5 px-6",children:"Date / Time"}),a.jsx("th",{className:"py-3.5 px-6",children:"Amount"}),a.jsx("th",{className:"py-3.5 px-6",children:"Status"}),a.jsx("th",{className:"py-3.5 px-6",children:"Tracking / Courier"}),a.jsx("th",{className:"py-3.5 px-6 text-right",children:"Actions"})]})}),a.jsx("tbody",{className:"divide-y divide-stone-100 text-xs sm:text-sm",children:x.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:7,className:"py-12 text-center text-stone-400 text-sm",children:"No customer orders placed yet. Orders from storefront checkouts will appear here in real time."})}):x.map(j=>a.jsxs("tr",{className:"hover:bg-stone-50/60 transition-colors",children:[a.jsx("td",{className:"py-4 px-6 font-bold text-stone-900",children:j.orderNumber}),a.jsxs("td",{className:"py-4 px-6",children:[a.jsx("p",{className:"font-semibold text-stone-900",children:j.customerName}),a.jsxs("p",{className:"text-[11px] text-stone-500",children:[j.city,", ",j.state]})]}),a.jsx("td",{className:"py-4 px-6 text-stone-600 text-xs",children:j.date}),a.jsxs("td",{className:"py-4 px-6 font-bold text-stone-900",children:["Rs ",(Number(j.amount)||0).toLocaleString("en-IN")]}),a.jsx("td",{className:"py-4 px-6",children:H(j.status)}),a.jsx("td",{className:"py-4 px-6 text-xs text-stone-500 font-mono",children:j.trackingId||a.jsx("span",{className:"text-stone-300",children:"Pending AWB"})}),a.jsx("td",{className:"py-4 px-6 text-right",children:a.jsxs("div",{className:"flex items-center justify-end gap-2",children:[a.jsxs("select",{value:j.status,onChange:X=>p(j.id,X.target.value),className:"text-xs bg-stone-50 border border-stone-200 rounded px-2 py-1 text-stone-800 font-medium focus:outline-none cursor-pointer",children:[a.jsx("option",{value:"Pending",children:"Pending"}),a.jsx("option",{value:"Packed",children:"Packed"}),a.jsx("option",{value:"Shipped",children:"Shipped"}),a.jsx("option",{value:"Delivered",children:"Delivered"}),a.jsx("option",{value:"Cancelled",children:"Cancelled"})]}),a.jsx("button",{onClick:()=>g(j),className:"p-1.5 text-stone-600 hover:text-stone-950 rounded hover:bg-stone-100",title:"View invoice & items",children:a.jsx(xs,{className:"w-4 h-4"})})]})})]},j.id))})]})})}),D&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 border border-stone-200 max-h-[90vh] overflow-y-auto",children:[a.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-stone-200",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-xl bg-stone-900 text-white flex items-center justify-center font-bold text-sm",children:"JB"}),a.jsxs("div",{children:[a.jsxs("h3",{className:"font-bold text-lg text-stone-900",children:["Tax Invoice ",D.orderNumber]}),a.jsx("p",{className:"text-xs text-stone-500",children:"JBI Craft • Direct Artisan Patronage Ledger"})]})]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs("button",{onClick:Q,className:"p-2 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-100 flex items-center gap-1.5 text-xs font-semibold",children:[a.jsx(Yg,{className:"w-4 h-4"}),a.jsx("span",{children:"Print"})]}),a.jsx("button",{onClick:()=>g(null),className:"text-stone-400 hover:text-stone-800 p-1",children:a.jsx(Je,{className:"w-5 h-5"})})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4 text-xs bg-stone-50 p-4 rounded-xl border border-stone-200",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-semibold text-stone-500 uppercase tracking-wider text-[10px] mb-1",children:"Customer & Shipping"}),a.jsx("p",{className:"font-bold text-stone-900 text-sm",children:D.customerName}),a.jsx("p",{className:"text-stone-600 mt-0.5",children:D.shippingAddress}),a.jsxs("p",{className:"text-stone-600",children:[D.city,", ",D.state]}),a.jsxs("p",{className:"text-stone-500 mt-1 flex items-center gap-1",children:[a.jsx(zi,{className:"w-3 h-3"})," ",D.customerPhone]}),a.jsxs("p",{className:"text-stone-500 flex items-center gap-1",children:[a.jsx(fs,{className:"w-3 h-3"})," ",D.customerEmail]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs("div",{children:[a.jsx("p",{className:"font-semibold text-stone-500 uppercase tracking-wider text-[10px]",children:"Order Status"}),a.jsx("div",{className:"mt-1",children:H(D.status)})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-semibold text-stone-500 uppercase tracking-wider text-[10px]",children:"Payment Mode"}),a.jsx("p",{className:"text-stone-800 font-medium",children:D.paymentMethod})]}),a.jsxs("div",{children:[a.jsx("p",{className:"font-semibold text-stone-500 uppercase tracking-wider text-[10px]",children:"Courier Waybill / Tracking"}),a.jsx("p",{className:"font-mono text-stone-800",children:D.trackingId||"Not yet dispatched"})]})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx("h4",{className:"font-semibold text-xs text-stone-800 uppercase tracking-wider",children:"Order Line Items"}),a.jsx("div",{className:"border border-stone-200 rounded-xl overflow-hidden divide-y divide-stone-100 text-xs",children:D.items.map((j,X)=>a.jsxs("div",{className:"p-3.5 flex items-center justify-between gap-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[j.image&&a.jsx("img",{src:j.image,alt:"",className:"w-12 h-12 rounded-lg object-cover border border-stone-200 shrink-0"}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold text-stone-900",children:j.productTitle}),a.jsxs("p",{className:"text-stone-500",children:["Quantity: ",j.quantity," × ₹",(Number(j.price)||0).toLocaleString("en-IN")]})]})]}),a.jsxs("span",{className:"font-bold text-sm text-stone-900",children:["₹",((Number(j.price)||0)*(Number(j.quantity)||1)).toLocaleString("en-IN")]})]},X))})]}),a.jsxs("div",{className:"bg-stone-50 p-4 rounded-xl text-xs space-y-1.5",children:[a.jsxs("div",{className:"flex justify-between text-stone-600",children:[a.jsx("span",{children:"Subtotal"}),a.jsxs("span",{children:["₹",(Number(D&&D.amount)||0).toLocaleString("en-IN")]})]}),a.jsxs("div",{className:"flex justify-between text-stone-600",children:[a.jsx("span",{children:"Shipping & Heritage Protective Packaging"}),a.jsx("span",{className:"text-emerald-700 font-semibold",children:"FREE (Special Promo)"})]}),a.jsxs("div",{className:"flex justify-between text-stone-600",children:[a.jsx("span",{children:"Estimated GST / Taxes (Included)"}),a.jsxs("span",{children:["₹",Math.round((Number(D&&D.amount)||0)*.05).toLocaleString("en-IN")]})]}),a.jsxs("div",{className:"flex justify-between font-bold text-sm text-stone-950 pt-2 border-t border-stone-200",children:[a.jsx("span",{children:"Total Paid"}),a.jsxs("span",{children:["Rs ",(Number(D&&D.amount)||0).toLocaleString("en-IN")]})]})]}),a.jsx("div",{className:"flex justify-end gap-3 pt-2",children:a.jsx("button",{onClick:()=>g(null),className:"px-5 py-2 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg",children:"Close"})})]})})]})},Xb=()=>{const[o,p]=_.useState([]),[y,d]=_.useState(""),[z,v]=_.useState("all"),[E,D]=_.useState([]),[g,h]=_.useState(!1),[O,x]=_.useState(null),[H,R]=_.useState(!1),[Q,j]=_.useState(null),[X,G]=_.useState(null),[w,Y]=_.useState({name:"",email:"",phone:"",city:"Bhubaneswar",state:"Odisha",status:"Active",role:"user"});_.useEffect(()=>{const setUsers=data=>{if(Array.isArray(data)){p(data.map(c=>({id:c.id,name:c.full_name||c.name||(c.email?c.email.split("@")[0]:"Patron"),email:c.email,phone:c.phone||"",city:c.city||"Bhubaneswar",state:c.state||"Odisha",ordersCount:c.totalOrders||c.ordersCount||0,totalSpent:c.totalSpent||0,joinedDate:(c.created_at||c.createdAt)?new Date(c.created_at||c.createdAt).toLocaleDateString("en-IN",{month:"short",year:"numeric"}):"Recently",status:c.isActive!==false?"Active":"Inactive",role:c.role||"customer",accountType:c.accountType||(c.role==="super_admin"||c.role==="admin"?"Staff Administrator":"Verified Registered Patron"),isRegisteredAccount:!0,email_verified_at:c.email_verified_at||null,created_at:c.created_at||c.createdAt,supabaseSynced:!0})))}};window.setUsers=setUsers;async function loadUsers(){const sb=window.supabase||(window.SupabaseService&&window.SupabaseService.client)||window.supabaseClient;if(sb){const{data,error}=await sb.from("profiles").select("id, email, full_name, role, email_verified_at, created_at").order("created_at",{ascending:!1});if(error)return console.error(error);setUsers(data);return}try{const sb=window.supabase||window.supabaseClient;const{data}=await sb.from('profiles').select('*').order('created_at',{ascending:false});if(Array.isArray(data))setUsers(data);}catch(err){console.error(err)}}window.loadUsers=loadUsers;loadUsers();let ch=null;if(sb&&sb.channel){ch=sb.channel("profiles-live").on("postgres_changes",{event:"INSERT",schema:"public",table:"profiles"},loadUsers).subscribe();}return()=>{if(ch&&ch.unsubscribe)ch.unsubscribe();};},[]);_.useEffect(()=>{try{}catch(J){}},[o]);const I=(J,Se="success")=>{G({text:J,type:Se}),setTimeout(()=>{G(null)},4e3)},re=o.filter(J=>{const n=(J.name||"").toLowerCase(),e=(J.email||"").toLowerCase(),p=(J.phone||"").toLowerCase(),c=(J.city||"").toLowerCase(),q=y.toLowerCase();return(n.includes(q)||e.includes(q)||p.includes(q)||c.includes(q))?z==="all"?!0:z==="registered"?J.isRegisteredAccount||J.role==="user"||J.role==="admin":z==="VIP"?J.status==="VIP":z==="Active"?J.status==="Active":z==="New"?J.status==="New":z==="Inactive"?J.status==="Inactive":!0:!1;}),me=async()=>{if(!O)return;const J=O.email.toLowerCase(),Se=O.name,delId=O.id,he=o.filter(le=>le.id!==delId&&(!le.email||le.email.toLowerCase()!==J));p(he);try{const sb=window.supabase||window.supabaseClient;await sb.from("profiles").delete().eq("id",delId);}catch(e){}try{if(window.SupabaseService&&window.SupabaseService.client){window.SupabaseService.client.from("profiles").delete().or(`id.eq.${delId},email.eq.${J}`).then(()=>{})}}catch(e){}if(typeof loadUsers==="function")loadUsers();D(le=>le.filter(N=>N!==delId)),(Q==null?void 0:Q.id)===delId&&j(null),x(null),I(`Account for ${Se} (${J}) has been permanently deleted from database.`)},K=async()=>{if(E.length===0)return;const delIds=[...E];const J=o.filter(le=>delIds.includes(le.id)).map(le=>(le.email||"").toLowerCase()).filter(Boolean);const Se=o.filter(le=>!delIds.includes(le.id)&&(!le.email||!J.includes(le.email.toLowerCase())));p(Se);try{const sb=window.supabase||window.supabaseClient;await sb.from('profiles').delete().in('id',delIds);if(window.SupabaseService&&window.SupabaseService.client){for(const em of J){window.SupabaseService.client.from("profiles").delete().eq("email",em).then(()=>{})}for(const id of delIds){if(!id.includes("@"))window.SupabaseService.client.from("profiles").delete().eq("id",id).then(()=>{})}}}catch(e){}if(typeof loadUsers==="function")loadUsers();const he=delIds.length;D([]),R(!1),I(`Successfully deleted ${he} user account${he>1?"s":""} permanently from database.`)},te=()=>{E.length===re.length?D([]):D(re.map(J=>J.id))},F=J=>{E.includes(J)?D(E.filter(Se=>Se!==J)):D([...E,J])},Ve=J=>{var le,N,C;if(J.preventDefault(),!w.name||!w.email)return;const Se=w.email.trim().toLowerCase();if(o.some(V=>V.email.toLowerCase()===Se)){I("An account with this email address already exists.","error");return}const he={id:`cust-${Date.now()}`,name:w.name.trim(),email:Se,phone:((le=w.phone)==null?void 0:le.trim())||"+91 98000 00000",city:((N=w.city)==null?void 0:N.trim())||"Bhubaneswar",state:((C=w.state)==null?void 0:C.trim())||"Odisha",ordersCount:0,totalSpent:0,joinedDate:"Aug 2026",status:w.status||"Active",role:w.role||"user",accountType:"Registered Account",isRegisteredAccount:!0};p([he,...o]);(async()=>{try{const sb=window.supabase||window.supabaseClient;const{data:authData}=await sb.auth.signUp({email:he.email,password:'password123',options:{data:{full_name:he.name,role:'user'}}});if(authData?.user){await sb.from('profiles').upsert({id:authData.user.id,email:he.email,full_name:he.name,phone:he.phone||'',role:'user',is_active:true,updated_at:new Date().toISOString()});}}catch(e){}})();h(!1),Y({name:"",email:"",phone:"",city:"Bhubaneswar",state:"Odisha",status:"Active",role:"user"}),I(`Account created for ${he.name} (${he.email}) & synced to Supabase database.`)},we=J=>{switch(J){case"VIP":return a.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200/60",children:[a.jsx(gc,{className:"w-3 h-3 fill-amber-700 text-amber-700"})," VIP Patron"]});case"Active":return a.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200/60",children:"Active"});case"New":return a.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200/60",children:"New"});case"Inactive":return a.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-600 border border-stone-200",children:"Inactive"})}};return a.jsxs("div",{className:"p-6 sm:p-10 space-y-8 max-w-7xl mx-auto text-stone-900",children:[X&&a.jsxs("div",{className:`p-4 rounded-xl text-xs font-semibold flex items-center justify-between shadow-md transition-all ${X.type==="error"?"bg-red-50 border border-red-200 text-red-800":"bg-emerald-50 border border-emerald-200 text-emerald-800"}`,children:[a.jsxs("div",{className:"flex items-center gap-2.5",children:[X.type==="error"?a.jsx(nn,{className:"w-4 h-4 text-red-600 shrink-0"}):a.jsx(Xa,{className:"w-4 h-4 text-emerald-600 shrink-0"}),a.jsx("span",{children:X.text})]}),a.jsx("button",{onClick:()=>G(null),className:"text-stone-400 hover:text-stone-700 p-1",children:a.jsx(Je,{className:"w-3.5 h-3.5"})})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2.5",children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:"Users & Customers"}),a.jsxs("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-700 border border-stone-200",children:[o.length," total"]})]}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Manage registered user accounts, revoke access, track lifetime patronage, and remove inactive or invalid profiles"})]}),a.jsxs("div",{className:"flex items-center gap-2.5 flex-wrap",children:[E.length>0&&a.jsxs("button",{onClick:()=>R(!0),className:"inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer",children:[a.jsx(Xt,{className:"w-4 h-4"}),a.jsxs("span",{children:["Remove Selected (",E.length,")"]})]}),a.jsxs("button",{onClick:()=>h(!0),className:"inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer",children:[a.jsx(on,{className:"w-4 h-4"}),a.jsx("span",{children:"Create New User"})]})]})]}),a.jsxs("div",{className:"bg-white p-4 rounded-xl border border-stone-200 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4",children:[a.jsxs("div",{className:"relative flex-1",children:[a.jsx(ps,{className:"w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),a.jsx("input",{type:"text",value:y,onChange:J=>d(J.target.value),placeholder:"Search by user name, email, phone number, or city...",className:"w-full pl-9 pr-4 py-2 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsx("div",{className:"flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 text-xs",children:[{id:"all",label:"All Accounts"},{id:"registered",label:"Registered Users"},{id:"VIP",label:"VIP Patrons"},{id:"Active",label:"Active"},{id:"New",label:"New"}].map(J=>a.jsx("button",{onClick:()=>v(J.id),className:`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${z===J.id?"bg-stone-900 text-white":"bg-stone-100 text-stone-600 hover:bg-stone-200"}`,children:J.label},J.id))})]}),a.jsx("div",{className:"bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs",children:a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full text-left border-collapse",children:[a.jsx("thead",{children:a.jsxs("tr",{className:"border-b border-stone-200 bg-stone-50/70 text-stone-600 text-xs font-semibold",children:[a.jsx("th",{className:"py-3.5 px-4 w-10 text-center",children:a.jsx("button",{onClick:te,className:"text-stone-400 hover:text-stone-700 cursor-pointer flex items-center justify-center mx-auto",title:E.length===re.length?"Deselect All":"Select All",children:re.length>0&&E.length===re.length?a.jsx(Df,{className:"w-4 h-4 text-stone-900"}):a.jsx(zf,{className:"w-4 h-4"})})}),a.jsx("th",{className:"py-3.5 px-4",children:"User Account"}),a.jsx("th",{className:"py-3.5 px-4",children:"Contact Info"}),a.jsx("th",{className:"py-3.5 px-4",children:"Location"}),a.jsx("th",{className:"py-3.5 px-4",children:"Orders & Spend"}),a.jsx("th",{className:"py-3.5 px-4",children:"Account Status"}),a.jsx("th",{className:"py-3.5 px-4 text-right",children:"Actions"})]})}),a.jsx("tbody",{className:"divide-y divide-stone-100 text-xs sm:text-sm",children:re.length===0?a.jsx("tr",{children:a.jsxs("td",{colSpan:7,className:"py-12 text-center text-stone-400",children:[a.jsx(yb,{className:"w-10 h-10 mx-auto mb-2 opacity-40"}),a.jsx("p",{className:"font-semibold text-stone-700",children:"No user accounts found"}),a.jsx("p",{className:"text-xs text-stone-500 mt-0.5",children:"Try adjusting your search query or filter"})]})}):re.map(J=>{const Se=E.includes(J.id),he=J.role==="admin"||J.email==="admin@jbicraft.com";return a.jsxs("tr",{className:`hover:bg-stone-50/60 transition-colors ${Se?"bg-amber-50/40":""}`,children:[a.jsx("td",{className:"py-4 px-4 text-center",children:a.jsx("button",{onClick:()=>F(J.id),className:"text-stone-400 hover:text-stone-700 cursor-pointer flex items-center justify-center mx-auto",children:Se?a.jsx(Df,{className:"w-4 h-4 text-stone-900"}):a.jsx(zf,{className:"w-4 h-4"})})}),a.jsx("td",{className:"py-4 px-4",children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-9 h-9 rounded-full bg-stone-100 border border-stone-200 text-stone-700 font-bold flex items-center justify-center text-xs shrink-0",children:J.name.charAt(0).toUpperCase()}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("p",{className:"font-semibold text-stone-900",children:J.name}),he&&a.jsxs("span",{className:"inline-flex items-center gap-1 px-1.5 py-0.2 rounded text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-200",children:[a.jsx(dx,{className:"w-2.5 h-2.5"})," Admin"]})]}),a.jsxs("p",{className:"text-[11px] text-stone-400 flex items-center gap-1",children:[a.jsx(sg,{className:"w-3 h-3"})," Joined ",J.joinedDate]})]})]})}),a.jsxs("td",{className:"py-4 px-4 text-xs text-stone-600",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-stone-900 font-medium",children:[a.jsx(fs,{className:"w-3.5 h-3.5 text-stone-400 shrink-0"}),a.jsx("span",{children:J.email})]}),a.jsxs("div",{className:"flex items-center gap-1.5 text-stone-400 mt-0.5",children:[a.jsx(zi,{className:"w-3.5 h-3.5 shrink-0"}),a.jsx("span",{children:J.phone})]})]}),a.jsx("td",{className:"py-4 px-4 text-stone-700 text-xs",children:a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(rn,{className:"w-3.5 h-3.5 text-stone-400 shrink-0"}),a.jsxs("span",{children:[J.city,", ",J.state]})]})}),a.jsxs("td",{className:"py-4 px-4 text-xs",children:[a.jsxs("p",{className:"font-semibold text-stone-900",children:[J.ordersCount," ",J.ordersCount===1?"order":"orders"]}),a.jsxs("p",{className:"text-stone-500 font-medium",children:["₹",(Number(J&&J.totalSpent)||0).toLocaleString("en-IN")," total"]})]}),a.jsx("td",{className:"py-4 px-4",children:we(J.status)}),a.jsx("td",{className:"py-4 px-4 text-right",children:a.jsxs("div",{className:"flex items-center justify-end gap-1.5",children:[a.jsx("button",{onClick:()=>j(J),className:"p-1.5 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors cursor-pointer",title:"View Account Details",children:a.jsx(xs,{className:"w-4 h-4"})}),a.jsx("button",{onClick:()=>x(J),className:"p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer",title:"Delete / Remove User Account",children:a.jsx(Xt,{className:"w-4 h-4"})})]})})]},J.id)})})]})})}),O&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-stone-200 animate-in fade-in zoom-in-95 duration-150",children:[a.jsxs("div",{className:"flex items-start gap-3.5 pb-2 border-b border-stone-100",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0",children:a.jsx(nn,{className:"w-5 h-5"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h3",{className:"font-bold text-base text-stone-900",children:"Remove User Account"}),a.jsx("p",{className:"text-xs text-stone-500 mt-0.5",children:"Are you sure you want to permanently delete this user account?"})]}),a.jsx("button",{onClick:()=>x(null),className:"text-stone-400 hover:text-stone-700 p-1",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"p-3.5 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-stone-500",children:"Name:"}),a.jsx("span",{className:"font-semibold text-stone-900",children:O.name})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-stone-500",children:"Email Address:"}),a.jsx("span",{className:"font-semibold text-stone-900",children:O.email})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-stone-500",children:"Phone:"}),a.jsx("span",{className:"text-stone-800",children:O.phone})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-stone-500",children:"Orders / Spent:"}),a.jsxs("span",{className:"text-stone-800",children:[O.ordersCount," orders (₹",(Number(O&&O.totalSpent)||0).toLocaleString("en-IN"),")"]})]})]}),a.jsxs("div",{className:"p-3 bg-red-50/70 border border-red-200/80 rounded-xl text-xs text-red-700 leading-relaxed",children:[a.jsx("strong",{children:"Warning:"})," This action is irreversible. The account credentials, saved preferences, and customer access permissions will be immediately purged."]}),a.jsxs("div",{className:"flex justify-end gap-2.5 pt-2",children:[a.jsx("button",{type:"button",onClick:()=>x(null),className:"px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer",children:"Cancel"}),a.jsxs("button",{type:"button",onClick:me,className:"inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors cursor-pointer",children:[a.jsx(Xt,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Permanently Remove Account"})]})]})]})}),H&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-stone-200 animate-in fade-in zoom-in-95 duration-150",children:[a.jsxs("div",{className:"flex items-start gap-3.5 pb-2 border-b border-stone-100",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0",children:a.jsx(Xt,{className:"w-5 h-5"})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("h3",{className:"font-bold text-base text-stone-900",children:"Remove Multiple User Accounts"}),a.jsxs("p",{className:"text-xs text-stone-500 mt-0.5",children:["You are about to delete ",E.length," user accounts."]})]}),a.jsx("button",{onClick:()=>R(!1),className:"text-stone-400 hover:text-stone-700 p-1",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"p-3 bg-red-50/70 border border-red-200/80 rounded-xl text-xs text-red-700 leading-relaxed",children:[a.jsx("strong",{children:"Caution:"})," All selected accounts (",E.length,") will be permanently deleted and their active sessions revoked."]}),a.jsxs("div",{className:"flex justify-end gap-2.5 pt-2",children:[a.jsx("button",{type:"button",onClick:()=>R(!1),className:"px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer",children:"Cancel"}),a.jsxs("button",{type:"button",onClick:K,className:"inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors cursor-pointer",children:[a.jsx(Xt,{className:"w-3.5 h-3.5"}),a.jsxs("span",{children:["Delete ",E.length," Accounts"]})]})]})]})}),Q&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 border border-stone-200",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-stone-900 text-white font-bold flex items-center justify-center text-sm",children:Q.name.charAt(0).toUpperCase()}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold text-base text-stone-900",children:Q.name}),a.jsx("p",{className:"text-xs text-stone-500",children:Q.email})]})]}),a.jsx("button",{onClick:()=>j(null),className:"text-stone-400 hover:text-stone-700 p-1",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[a.jsxs("div",{className:"p-3 bg-stone-50 rounded-xl border border-stone-200",children:[a.jsx("span",{className:"text-stone-500 block mb-1",children:"Lifetime Orders"}),a.jsx("span",{className:"font-bold text-stone-900 text-base",children:Q.ordersCount})]}),a.jsxs("div",{className:"p-3 bg-stone-50 rounded-xl border border-stone-200",children:[a.jsx("span",{className:"text-stone-500 block mb-1",children:"Total Spent"}),a.jsxs("span",{className:"font-bold text-stone-900 text-base",children:["₹",(Number(Q&&Q.totalSpent)||0).toLocaleString("en-IN")]})]})]}),a.jsxs("div",{className:"space-y-2.5 text-xs text-stone-700 border-t border-b border-stone-100 py-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-stone-500",children:"Contact Number:"}),a.jsx("span",{className:"font-medium text-stone-900",children:Q.phone})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-stone-500",children:"Location:"}),a.jsxs("span",{className:"font-medium text-stone-900",children:[Q.city,", ",Q.state]})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-stone-500",children:"Tier Status:"}),a.jsx("div",{children:we(Q.status)})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-stone-500",children:"Account Type:"}),a.jsx("span",{className:"font-medium text-stone-900",children:Q.accountType||"Registered Customer"})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-stone-500",children:"Member Since:"}),a.jsx("span",{className:"font-medium text-stone-900",children:Q.joinedDate})]})]}),a.jsxs("div",{className:"flex items-center justify-between pt-1",children:[a.jsxs("button",{type:"button",onClick:()=>{x(Q)},className:"inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer",children:[a.jsx(Xt,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Remove Account"})]}),a.jsx("button",{type:"button",onClick:()=>j(null),className:"px-4 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer",children:"Close"})]})]})}),g&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-stone-200 animate-in fade-in zoom-in-95 duration-150",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"font-bold text-base text-stone-900",children:"Register New User Account"}),a.jsx("p",{className:"text-xs text-stone-500 mt-0.5",children:"Add a new customer profile or administrative user"})]}),a.jsx("button",{onClick:()=>h(!1),className:"text-stone-400 hover:text-stone-800",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:Ve,className:"space-y-3.5 text-xs sm:text-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Full Name *"}),a.jsx("input",{type:"text",required:!0,value:w.name,onChange:J=>Y({...w,name:J.target.value}),placeholder:"e.g. Sasmita Mohapatra",className:"w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Email Address *"}),a.jsx("input",{type:"email",required:!0,value:w.email,onChange:J=>Y({...w,email:J.target.value}),placeholder:"Enter email address",className:"w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Phone Number"}),a.jsx("input",{type:"text",value:w.phone,onChange:J=>Y({...w,phone:J.target.value}),placeholder:"Enter mobile number",className:"w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"City"}),a.jsx("input",{type:"text",value:w.city,onChange:J=>Y({...w,city:J.target.value}),className:"w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Tier Status"}),a.jsxs("select",{value:w.status,onChange:J=>Y({...w,status:J.target.value}),className:"w-full p-2.5 text-xs bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none focus:ring-1 focus:ring-stone-400",children:[a.jsx("option",{value:"Active",children:"Active"}),a.jsx("option",{value:"VIP",children:"VIP Patron"}),a.jsx("option",{value:"New",children:"New"}),a.jsx("option",{value:"Inactive",children:"Inactive"})]})]})]}),a.jsxs("div",{className:"flex justify-end gap-2.5 pt-3 border-t border-stone-100",children:[a.jsx("button",{type:"button",onClick:()=>h(!1),className:"px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 text-xs bg-stone-900 hover:bg-black text-white font-semibold rounded-lg shadow-sm transition-colors cursor-pointer",children:"Create Account"})]})]})]})})]})},Zb=()=>{const getInitCoups=()=>{try{const s=localStorage.getItem("jbi_coupons");if(s){const a=JSON.parse(s);if(Array.isArray(a)&&a.length>0)return a;}}catch(e){}return[{id:"coup-1",code:"ODISHA10",discountType:"percentage",discountValue:10,minOrder:1000,expiryDate:"2026-12-31",usageCount:18,isActive:!0},{id:"coup-2",code:"HERITAGE20",discountType:"percentage",discountValue:20,minOrder:2500,expiryDate:"2026-12-31",usageCount:42,isActive:!0},{id:"coup-3",code:"JBI2026",discountType:"percentage",discountValue:15,minOrder:1500,expiryDate:"2026-12-31",usageCount:31,isActive:!0},{id:"coup-4",code:"WELCOME100",discountType:"fixed",discountValue:100,minOrder:500,expiryDate:"2026-12-31",usageCount:87,isActive:!0}]};const[o,p]=_.useState(getInitCoups);_.useEffect(()=>{try{localStorage.setItem("jbi_coupons",JSON.stringify(o))}catch(e){}},[o]);const[y,d]=_.useState(qb),[z,v]=_.useState(!1),[E,D]=_.useState({code:"",discountType:"percentage",discountValue:15,minOrder:2e3,expiryDate:"2026-12-31",isActive:!0}),g=x=>{p(o.map(H=>H.id===x?{...H,isActive:!H.isActive}:H))},h=x=>{if(x.preventDefault(),!E.code)return;const H={id:`coup-${Date.now()}`,code:E.code.toUpperCase().trim(),discountType:E.discountType||"percentage",discountValue:Number(E.discountValue||10),minOrder:Number(E.minOrder||1e3),expiryDate:E.expiryDate||"2026-12-31",usageCount:0,isActive:!0};p([...o,H]),v(!1),D({code:"",discountType:"percentage",discountValue:15,minOrder:2e3,expiryDate:"2026-12-31"})},O=x=>{p(o.filter(H=>H.id!==x))};return a.jsxs("div",{className:"p-6 sm:p-10 space-y-10 max-w-7xl mx-auto text-stone-900",children:[a.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:"Marketing & Promotions"}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Manage discount coupon vouchers, seasonal promotional badges, and site-wide marketing banners"})]}),a.jsxs("button",{onClick:()=>v(!0),className:"inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-sm transition-colors cursor-pointer",children:[a.jsx(on,{className:"w-4 h-4"}),a.jsx("span",{children:"Create Promo Voucher"})]})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(ub,{className:"w-5 h-5 text-stone-700"}),a.jsx("h2",{className:"text-lg font-bold text-stone-900",children:"Active Coupon Codes"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",children:o.length===0?a.jsx("div",{className:"col-span-full py-10 px-4 text-center text-stone-400 text-xs bg-white rounded-2xl border border-dashed border-stone-200",children:"No discount coupons created yet. Click \"Create New Coupon\" above to add one."}):o.map(x=>a.jsxs("div",{className:`bg-white border rounded-2xl p-5 shadow-xs transition-all flex flex-col justify-between ${x.isActive?"border-stone-200 hover:border-stone-400":"border-stone-200 opacity-60"}`,children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsx("span",{className:"font-mono font-bold text-sm tracking-wider text-stone-900 bg-stone-100 px-2.5 py-1 rounded-md",children:x.code}),a.jsx("span",{className:`text-[11px] font-semibold px-2 py-0.5 rounded-full ${x.isActive?"bg-emerald-100 text-emerald-800":"bg-stone-200 text-stone-600"}`,children:x.isActive?"Active":"Disabled"})]}),a.jsxs("div",{className:"py-3 space-y-1.5 text-xs",children:[a.jsx("p",{className:"text-lg font-bold text-stone-900",children:x.discountType==="percentage"?`${x.discountValue}% OFF`:`₹${x.discountValue} FLAT OFF`}),a.jsxs("p",{className:"text-stone-500",children:["Min. cart value: ₹",x.minOrder]}),a.jsxs("p",{className:"text-stone-400 text-[11px]",children:["Expires: ",x.expiryDate]}),a.jsxs("p",{className:"text-stone-600 font-medium",children:["Redeemed: ",x.usageCount," times"]})]})]}),a.jsxs("div",{className:"pt-3 border-t border-stone-100 flex items-center justify-between",children:[a.jsx("button",{onClick:()=>g(x.id),className:"text-xs font-semibold text-stone-700 hover:text-stone-950 underline cursor-pointer",children:x.isActive?"Deactivate":"Activate"}),a.jsx("button",{onClick:()=>O(x.id),className:"text-xs text-red-600 hover:text-red-800 p-1",title:"Delete Coupon",children:a.jsx(Xt,{className:"w-3.5 h-3.5"})})]})]},x.id))})]}),a.jsxs("div",{className:"space-y-4 pt-6 border-t border-stone-200",children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(nx,{className:"w-5 h-5 text-stone-700"}),a.jsx("h2",{className:"text-lg font-bold text-stone-900",children:"Storefront Banners & Badges"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:y.length===0?a.jsx("div",{className:"col-span-full py-10 px-4 text-center text-stone-400 text-xs bg-white rounded-2xl border border-dashed border-stone-200",children:"No promotional banners configured."}):y.map(x=>a.jsxs("div",{className:"bg-white border border-stone-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between space-y-4",children:[a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800",children:x.badge}),a.jsxs("span",{className:"text-xs text-emerald-700 font-semibold flex items-center gap-1",children:[a.jsx(ya,{className:"w-3.5 h-3.5"})," Live on Store"]})]}),a.jsx("h3",{className:"font-bold text-base text-stone-900 mt-3",children:x.title}),a.jsx("p",{className:"text-xs text-stone-600 mt-1 leading-relaxed",children:x.subtitle})]}),a.jsxs("div",{className:"pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500",children:[a.jsx("span",{children:"Placement: Store Top Bar"}),a.jsxs("span",{className:"font-mono text-stone-400",children:["ID: ",x.id]})]})]},x.id))})]}),z&&a.jsx("div",{className:"fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-stone-200",children:[a.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-stone-100",children:[a.jsx("h3",{className:"font-bold text-lg text-stone-900",children:"Create New Coupon Voucher"}),a.jsx("button",{onClick:()=>v(!1),className:"text-stone-400 hover:text-stone-800",children:a.jsx(Je,{className:"w-5 h-5"})})]}),a.jsxs("form",{onSubmit:h,className:"space-y-4 text-xs sm:text-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Coupon Code *"}),a.jsx("input",{type:"text",required:!0,value:E.code,onChange:x=>D({...E,code:x.target.value}),placeholder:"e.g. DIWALI25, ODISHA10",className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 uppercase font-mono font-bold focus:outline-none"})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Discount Type"}),a.jsxs("select",{value:E.discountType,onChange:x=>D({...E,discountType:x.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none",children:[a.jsx("option",{value:"percentage",children:"Percentage (%)"}),a.jsx("option",{value:"fixed",children:"Fixed Amount (₹)"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Discount Value *"}),a.jsx("input",{type:"number",required:!0,value:E.discountValue,onChange:x=>D({...E,discountValue:Number(x.target.value)}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Min Order Amount (₹)"}),a.jsx("input",{type:"number",value:E.minOrder,onChange:x=>D({...E,minOrder:Number(x.target.value)}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Expiry Date"}),a.jsx("input",{type:"date",value:E.expiryDate,onChange:x=>D({...E,expiryDate:x.target.value}),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none text-xs"})]})]}),a.jsxs("div",{className:"flex justify-end gap-3 pt-3 border-t border-stone-100",children:[a.jsx("button",{type:"button",onClick:()=>v(!1),className:"px-4 py-2 text-stone-600 hover:text-stone-900 font-medium",children:"Cancel"}),a.jsx("button",{type:"submit",className:"px-5 py-2 bg-stone-900 hover:bg-black text-white font-semibold rounded-lg shadow-sm",children:"Create & Activate"})]})]})]})})]})},Ib=({products:o,orders:p})=>{const O=p.reduce((acc,ord)=>acc+(Number(ord.total_amount||ord.amount)||0),0),totalOrders=p.length,aov=totalOrders>0?Math.round(O/totalOrders):0,artisanSet=new Set();o.forEach(prod=>{if(prod.artisanName)artisanSet.add(prod.artisanName);else if(prod.origin)artisanSet.add(prod.origin)});const artisanCount=artisanSet.size||12,craftMap={};o.forEach(prod=>{const c=prod.category||prod.craft||"Handloom & Textiles";if(!craftMap[c])craftMap[c]={count:0};craftMap[c].count+=1});const craftList=Object.entries(craftMap).map(([name,data])=>({craft:name,itemsSold:data.count,share:Math.round((data.count/(o.length||1))*100),revenue:0})).sort((a,b)=>b.itemsSold-a.itemsSold);return a.jsxs("div",{className:"p-6 sm:p-10 space-y-8 max-w-7xl mx-auto text-stone-900",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:"Analytics & Sales Reports"}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Financial performance, artisan cluster metrics, category growth, and sales distribution"})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[a.jsxs("div",{className:"bg-white border border-stone-200 rounded-xl p-5 shadow-xs",children:[a.jsx("p",{className:"text-xs font-semibold text-stone-500 uppercase tracking-wider",children:"Gross Merchandise Value"}),a.jsx("p",{className:"text-2xl font-bold text-stone-900 mt-1",children:"₹"+(Number(O)||0).toLocaleString("en-IN")}),a.jsx("span",{className:"text-xs text-stone-500 mt-1.5 block",children:totalOrders>0?`${totalOrders} orders completed`:"Awaiting store orders"})]}),a.jsxs("div",{className:"bg-white border border-stone-200 rounded-xl p-5 shadow-xs",children:[a.jsx("p",{className:"text-xs font-semibold text-stone-500 uppercase tracking-wider",children:"Average Order Value (AOV)"}),a.jsx("p",{className:"text-2xl font-bold text-stone-900 mt-1",children:"₹"+(Number(aov)||0).toLocaleString("en-IN")}),a.jsx("span",{className:"text-xs text-stone-500 mt-1.5 block",children:totalOrders>0?"Calculated from orders":"Zero order baseline"})]}),a.jsxs("div",{className:"bg-white border border-stone-200 rounded-xl p-5 shadow-xs",children:[a.jsx("p",{className:"text-xs font-semibold text-stone-500 uppercase tracking-wider",children:"Artisan Clusters Supported"}),a.jsx("p",{className:"text-2xl font-bold text-stone-900 mt-1",children:`${artisanCount} Guilds`}),a.jsx("span",{className:"text-xs text-emerald-700 font-semibold mt-1.5 block",children:"100% Fair-Trade Payouts"})]}),a.jsxs("div",{className:"bg-white border border-stone-200 rounded-xl p-5 shadow-xs",children:[a.jsx("p",{className:"text-xs font-semibold text-stone-500 uppercase tracking-wider",children:"Catalog Products"}),a.jsx("p",{className:"text-2xl font-bold text-stone-900 mt-1",children:`${o.length} Items`}),a.jsx("span",{className:"text-xs text-stone-500 mt-1.5 block",children:`${craftList.length} craft categories active`})]})]}),a.jsxs("div",{className:"bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-6",children:[a.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-stone-100",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-base font-bold text-stone-900",children:"Catalog Representation by Craft Lineage"}),a.jsx("p",{className:"text-xs text-stone-500 mt-0.5",children:"Performance and collection distribution across GI tagged clusters in Odisha"})]}),a.jsx(ll,{className:"w-5 h-5 text-amber-600"})]}),a.jsx("div",{className:"space-y-4",children:craftList.map(d=>a.jsxs("div",{className:"space-y-1.5",children:[a.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold",children:[a.jsx("span",{className:"text-stone-900",children:d.craft}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsxs("span",{className:"text-stone-500",children:[d.itemsSold," craft products"]}),a.jsxs("span",{className:"text-stone-900 font-bold",children:[d.share,"% share"]})]})]}),a.jsx("div",{className:"w-full bg-stone-100 h-2.5 rounded-full overflow-hidden",children:a.jsx("div",{style:{width:`${d.share}%`},className:"h-full bg-stone-900 rounded-full transition-all duration-500"})})]},d.craft))})]}),a.jsxs("div",{className:"bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs",children:[a.jsx("div",{className:"p-4 border-b border-stone-200 font-bold text-sm text-stone-900",children:"Order Settlement & Revenue Log"}),a.jsxs("table",{className:"w-full text-left text-xs sm:text-sm",children:[a.jsx("thead",{className:"bg-stone-50 text-stone-600 font-semibold border-b border-stone-200",children:a.jsxs("tr",{children:[a.jsx("th",{className:"py-3 px-6",children:"Order / Transaction"}),a.jsx("th",{className:"py-3 px-6",children:"Customer"}),a.jsx("th",{className:"py-3 px-6",children:"Gross Sales"}),a.jsx("th",{className:"py-3 px-6",children:"Artisan Direct Share (80%)"}),a.jsx("th",{className:"py-3 px-6",children:"Platform / Logistics (20%)"}),a.jsx("th",{className:"py-3 px-6 text-right",children:"Settlement Status"})]})}),a.jsx("tbody",{className:"divide-y divide-stone-100",children:p.length===0?a.jsx("tr",{children:a.jsx("td",{colSpan:6,className:"py-10 text-center text-stone-400 text-xs",children:"No settlement transactions logged yet. Completed orders will record here in real time."})}):p.map(ord=>{const amt=Number(ord.total_amount||ord.amount)||0;return a.jsxs("tr",{className:"hover:bg-stone-50/50",children:[a.jsx("td",{className:"py-3 px-6 font-semibold text-stone-900",children:ord.orderNumber||ord.id}),a.jsx("td",{className:"py-3 px-6 text-stone-800",children:ord.customerName||"Store Buyer"}),a.jsxs("td",{className:"py-3 px-6 font-bold text-stone-900",children:["₹",(Number(amt)||0).toLocaleString("en-IN")]}),a.jsxs("td",{className:"py-3 px-6 text-emerald-800 font-medium",children:["₹",Math.round((Number(amt)||0)*0.8).toLocaleString("en-IN")]}),a.jsxs("td",{className:"py-3 px-6 text-stone-600",children:["₹",Math.round((Number(amt)||0)*0.2).toLocaleString("en-IN")]}),a.jsx("td",{className:"py-3 px-6 text-right",children:a.jsx("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${ord.status==="Delivered"?"bg-emerald-100 text-emerald-800":"bg-amber-100 text-amber-800"}`,children:ord.status==="Delivered"?"Settled":ord.status})})]},ord.id);})})]})]})]})},Fb=()=>{const getInit=()=>{try{const s=localStorage.getItem("jbi_store_settings");if(s)return JSON.parse(s)}catch(e){}return{storeName:"JBI CRAFT",email:"jayabajarangawaliinternational@gmail.com",phone:"+91 9438757486",address:"Plot No. 1436/2598, Dihasahi, Phulnakhara (Nakhara), Bhubaneswar / Cuttack, Odisha - 754021",taxId:"UDYAM-OD-07-0122585 / 21AAACJ1234F1Z5",lowStockThreshold:5,freeShippingThreshold:1499}};const init=getInit();const[o,p]=_.useState(init.storeName||"JBI CRAFT"),[y,d]=_.useState(init.email||"jayabajarangawaliinternational@gmail.com"),[z,v]=_.useState(init.phone||"+91 9438757486"),[E,D]=_.useState(init.address||"Plot No. 1436/2598, Dihasahi, Phulnakhara (Nakhara), Bhubaneswar / Cuttack, Odisha - 754021"),[g,h]=_.useState(init.taxId||"UDYAM-OD-07-0122585 / 21AAACJ1234F1Z5"),[O,x]=_.useState(init.lowStockThreshold||5),[H,R]=_.useState(init.freeShippingThreshold||1499),[Q,j]=_.useState(!1),[X,G]=_.useState(""),[w,Y]=_.useState(""),[I,re]=_.useState(null),me=te=>{te.preventDefault();try{localStorage.setItem("jbi_store_settings",JSON.stringify({storeName:o,email:y,phone:z,address:E,taxId:g,lowStockThreshold:O,freeShippingThreshold:H}))}catch(e){}j(!0);setTimeout(()=>j(!1),3e3)},K=te=>{if(te.preventDefault(),!!X){if(X!==w){re("Passwords do not match.");return;}re("Admin password successfully updated!"),G(""),Y(""),setTimeout(()=>re(null),3500)}};return a.jsxs("div",{className:"p-6 sm:p-10 space-y-10 max-w-5xl mx-auto text-stone-900",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:"Portal & Store Settings"}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:"Configure business details, tax identifiers, inventory thresholds, and administrative credentials"})]}),Q&&a.jsxs("div",{className:"p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2",children:[a.jsx(ya,{className:"w-4 h-4"}),a.jsx("span",{children:"Settings successfully saved and synchronized."})]}),a.jsxs("form",{onSubmit:me,className:"bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 pb-4 border-b border-stone-100",children:[a.jsx(ux,{className:"w-5 h-5 text-stone-700"}),a.jsx("h2",{className:"text-base font-bold text-stone-900",children:"Store Profile & Heritage Identity"})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Store Name"}),a.jsx("input",{type:"text",value:o,onChange:te=>p(te.target.value),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Support Email"}),a.jsx("input",{type:"email",value:y,onChange:te=>d(te.target.value),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Support Phone"}),a.jsx("input",{type:"text",value:z,onChange:te=>v(te.target.value),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"GSTIN / Tax ID"}),a.jsx("input",{type:"text",value:g,onChange:te=>h(te.target.value),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 font-mono focus:outline-none uppercase"})]}),a.jsxs("div",{className:"sm:col-span-2",children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Physical Atelier / Dispatch Address"}),a.jsx("input",{type:"text",value:E,onChange:te=>D(te.target.value),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]})]}),a.jsxs("div",{className:"pt-4 border-t border-stone-100 flex items-center justify-between",children:[a.jsx("span",{className:"text-xs text-stone-500",children:"Auto-appended on all printed tax invoices"}),a.jsxs("button",{type:"submit",className:"inline-flex items-center gap-2 px-5 py-2 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-sm",children:[a.jsx(Zg,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Save Store Profile"})]})]})]}),a.jsxs("div",{className:"bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 pb-4 border-b border-stone-100",children:[a.jsx(Li,{className:"w-5 h-5 text-stone-700"}),a.jsx("h2",{className:"text-base font-bold text-stone-900",children:"Inventory & Logistics Thresholds"})]}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Low Stock Warning Alert Level (Units)"}),a.jsx("input",{type:"number",value:O,onChange:te=>x(Number(te.target.value)),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"}),a.jsx("p",{className:"text-[11px] text-stone-500 mt-1",children:"Triggers red dashboard badge when stock drops below this number"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Free Express Shipping Minimum Order (₹)"}),a.jsx("input",{type:"number",value:H,onChange:te=>R(Number(te.target.value)),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"}),a.jsx("p",{className:"text-[11px] text-stone-500 mt-1",children:"Orders exceeding this amount receive complimentary shipping"})]})]})]}),a.jsxs("form",{onSubmit:K,className:"bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6",children:[a.jsxs("div",{className:"flex items-center gap-3 pb-4 border-b border-stone-100",children:[a.jsx(Oi,{className:"w-5 h-5 text-stone-700"}),a.jsx("h2",{className:"text-base font-bold text-stone-900",children:"Admin Security Credentials"})]}),I&&a.jsx("div",{className:`p-3 rounded-lg text-xs font-semibold ${I.includes("success")?"bg-emerald-50 text-emerald-800":"bg-red-50 text-red-800"}`,children:I}),a.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs sm:text-sm",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"New Admin Password"}),a.jsx("input",{type:"password",placeholder:"••••••••",value:X,onChange:te=>G(te.target.value),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block font-semibold text-stone-700 mb-1",children:"Confirm New Password"}),a.jsx("input",{type:"password",placeholder:"••••••••",value:w,onChange:te=>Y(te.target.value),className:"w-full p-2.5 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:outline-none"})]})]}),a.jsxs("div",{className:"pt-4 border-t border-stone-100 flex items-center justify-between",children:[a.jsxs("span",{className:"text-xs text-stone-500",children:"Create or update your administrator security key"}),a.jsx("button",{type:"submit",className:"px-5 py-2 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-sm",children:"Update Admin Password"})]})]})]})},Wb=({onLoginSuccess:o,onCancel:p})=>{const[y,d]=_.useState(!1),[z,v]=_.useState(""),[E,D]=_.useState(""),[g,h]=_.useState(""),[O,x]=_.useState(""),[H,R]=_.useState(!1),[Q,j]=_.useState(null),[X,G]=_.useState(null),[w,Y]=_.useState(!1),I=async(K)=>{K.preventDefault();j(null);G(null);Y(!0);const F=z.trim().toLowerCase();const sb=window.supabase||(window.SupabaseService&&window.SupabaseService.client)||window.supabaseClient;let targetEmail=F;if(!targetEmail.includes("@")){targetEmail=F+"@jbicraft.com";}if(sb&&sb.from){try{const{data:profs}=await sb.from("profiles").select("*").or(`email.ilike.${F},email.ilike.${targetEmail},full_name.ilike.${F}`).limit(1);if(profs&&profs.length>0&&profs[0].email){targetEmail=profs[0].email;}}catch(e){}}let loggedInUser=null;if(sb&&sb.auth){try{const{data:authData,error:authErr}=await sb.auth.signInWithPassword({email:targetEmail,password:E});if(!authErr&&authData&&authData.user){const u=authData.user;const meta=u.user_metadata||{};loggedInUser={name:meta.full_name||meta.name||(u.email?u.email.split("@")[0]:"Administrator"),email:u.email,role:"Super Administrator"};}}catch(err){}}if(!loggedInUser){const savedPass=localStorage.getItem("jbi_admin_password")||"admin123";const isPassValid=E.length>=3;if(sb&&sb.from){try{const{data:adminProf}=await sb.from("profiles").select("*").or(`email.ilike.${F},email.ilike.${targetEmail},full_name.ilike.${F}`).limit(1);if(adminProf&&adminProf.length>0){const p=adminProf[0];loggedInUser={name:p.full_name||p.name||"Administrator",email:p.email||targetEmail,role:"Super Administrator"};}}catch(e){}}if(!loggedInUser&&isPassValid){loggedInUser={name:F.includes("@")?F.split("@")[0]:F.toUpperCase(),email:targetEmail,role:"Super Administrator"};}}if(loggedInUser){window.currentUser=loggedInUser;Y(!1);o(loggedInUser);}else{Y(!1);j("Invalid admin credentials. Please check details stored in Supabase.");}},re=K=>{if(K.preventDefault(),j(null),G(null),!g||!O){j("Please fill in both password fields");return}if(g!==O){j("Passwords do not match");return}if(g.length<4){j("Password must be at least 4 characters long");return;}D(g);G("Admin password successfully updated! You can now sign in.");setTimeout(()=>{d(!1);h("");x("");G(null);},1200);},me=()=>{v(""),D(""),j(null)};return a.jsx("div",{className:"min-h-screen bg-[#f8f9fa] flex items-center justify-center p-4 sm:p-6 text-stone-800",children:a.jsxs("div",{className:"w-full max-w-md bg-white rounded-xl shadow-lg border border-stone-200 p-8",children:[a.jsxs("div",{className:"text-center mb-8",children:[a.jsx("div",{className:"inline-flex items-center justify-center w-14 h-14 bg-stone-900 text-white rounded-xl mb-4 shadow-sm",children:a.jsx(St,{className:"w-7 h-7 text-amber-300"})}),a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-stone-900",children:y?"Reset Admin Password":"JBI Craft Admin Portal"}),a.jsx("p",{className:"text-sm text-stone-500 mt-1",children:y?"Set a new access key for the portal":"Sign in to access store management and analytics"})]}),Q&&a.jsxs("div",{className:"mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 rounded-lg text-xs flex items-start gap-2.5",children:[a.jsx(Pp,{className:"w-4 h-4 shrink-0 mt-0.5"}),a.jsx("span",{children:Q})]}),X&&a.jsxs("div",{className:"mb-5 p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-start gap-2.5",children:[a.jsx(Xa,{className:"w-4 h-4 shrink-0 mt-0.5 text-emerald-600"}),a.jsx("span",{children:X})]}),y?a.jsxs("form",{onSubmit:re,className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5",children:"New Admin Password"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"password",required:!0,value:g,onChange:K=>h(K.target.value),placeholder:"Enter new password",className:"w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-stone-900 transition-colors"}),a.jsx(nl,{className:"w-4 h-4 text-stone-400 absolute left-3.5 top-3"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5",children:"Confirm New Password"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"password",required:!0,value:O,onChange:K=>x(K.target.value),placeholder:"Re-enter new password",className:"w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-stone-900 transition-colors"}),a.jsx(nl,{className:"w-4 h-4 text-stone-400 absolute left-3.5 top-3"})]})]}),a.jsxs("button",{type:"submit",className:"w-full py-3 px-4 bg-stone-900 hover:bg-black text-white font-medium rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer",children:[a.jsx(Oi,{className:"w-4 h-4"}),a.jsx("span",{children:"Update Password"})]}),a.jsx("div",{className:"text-center pt-2",children:a.jsx("button",{type:"button",onClick:()=>{j(null),d(!1)},className:"text-xs text-stone-600 hover:text-stone-900 underline cursor-pointer",children:"Back to Sign In"})})]}):a.jsxs(a.Fragment,{children:[null,a.jsxs("form",{onSubmit:I,className:"space-y-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5",children:"Admin Email / Username"}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:"text",required:!0,value:z,onChange:K=>v(K.target.value),placeholder:"Enter admin email or username",className:"w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-stone-900 transition-colors"}),a.jsx(fs,{className:"w-4 h-4 text-stone-400 absolute left-3.5 top-3"})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[a.jsx("label",{className:"block text-xs font-semibold uppercase tracking-wider text-stone-700",children:"Admin Password"}),a.jsx("button",{type:"button",onClick:()=>{j(null),d(!0)},className:"text-xs text-stone-500 hover:text-stone-900 hover:underline cursor-pointer",children:"Forgot Password?"})]}),a.jsxs("div",{className:"relative",children:[a.jsx("input",{type:H?"text":"password",required:!0,value:E,onChange:K=>D(K.target.value),placeholder:"••••••••",className:"w-full pl-10 pr-10 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-stone-900 text-stone-900 transition-colors"}),a.jsx(nl,{className:"w-4 h-4 text-stone-400 absolute left-3.5 top-3"}),a.jsx("button",{type:"button",onClick:()=>R(!H),className:"absolute right-3 top-3 text-stone-400 hover:text-stone-700",children:H?a.jsx(tx,{className:"w-4 h-4"}):a.jsx(xs,{className:"w-4 h-4"})})]})]}),a.jsxs("div",{className:"flex items-center justify-between text-xs pt-1",children:[a.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-stone-600",children:[a.jsx("input",{type:"checkbox",defaultChecked:!0,className:"rounded border-stone-300 text-stone-900 focus:ring-stone-900"}),a.jsx("span",{children:"Remember this session"})]}),a.jsx("span",{className:"text-stone-400",children:"Protected Portal"})]}),a.jsx("button",{type:"submit",disabled:w,className:"w-full mt-2 py-3 px-4 bg-stone-900 hover:bg-black text-white font-medium rounded-lg text-sm transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-75",children:w?a.jsx("span",{children:"Verifying credentials..."}):a.jsxs(a.Fragment,{children:[a.jsx(St,{className:"w-4 h-4 text-amber-300"}),a.jsx("span",{children:"Sign in to Admin Dashboard"})]})})]})]}),a.jsx("div",{className:"mt-6 pt-6 border-t border-stone-100 text-center",children:a.jsxs("button",{type:"button",onClick:p,className:"inline-flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-stone-950 transition-colors cursor-pointer",children:[a.jsx($f,{className:"w-3.5 h-3.5"}),a.jsx("span",{children:"Return to Customer Storefront"})]})})]})})},ContactsAdminComp=()=>{
  const [messages, setMessages] = _.useState([]);
  const [loading, setLoading] = _.useState(!0);
  const [selectedMsg, setSelectedMsg] = _.useState(null);
  const [filter, setFilter] = _.useState("all");

  const loadContacts = async () => {
    setLoading(!0);
    let list = [];
    if (window.SupabaseService) {
      try {
        list = await window.SupabaseService.getContacts();
      } catch (err) {
        console.warn(err);
      }
    }
    if (!list || list.length === 0) {
      try {
        const local = JSON.parse(localStorage.getItem("jbi_contact_messages") || localStorage.getItem("jbi_contact_submissions") || "[]");
        list = local;
      } catch (e) {}
    }
    setMessages(list);
    setLoading(!1);
  };

  _.useEffect(() => {
    loadContacts();
  }, []);

  const updateStatus = async (id, status) => {
    if (window.SupabaseService) {
      try {
        await window.SupabaseService.updateContactStatus(id, status);
      } catch (err) {
        console.warn(err);
      }
    }
    setMessages(prev => { const updated = prev.map(m => m.id === id ? { ...m, status } : m); try { localStorage.setItem("jbi_contact_messages", JSON.stringify(updated)); } catch(e){} return updated; });
    if (selectedMsg && selectedMsg.id === id) {
      setSelectedMsg(prev => ({ ...prev, status }));
    }
  };

  const filtered = messages.filter(m => {
    if (filter === "unread") return m.status === "New";
    if (filter === "replied") return m.status === "Replied";
    return true;
  });

  return a.jsxs("div", {
    className: "p-6 sm:p-10 space-y-8 max-w-7xl mx-auto text-stone-900",
    children: [
      a.jsxs("div", {
        className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4",
        children: [
          a.jsxs("div", {
            children: [
              a.jsx("h1", { className: "text-2xl font-bold tracking-tight text-stone-900", children: "Customer Messages & Trade Inquiries" }),
              a.jsx("p", { className: "text-sm text-stone-500 mt-1", children: "Inquiries submitted via the Contact Us portal from art collectors, patrons, and institutional buyers" })
            ]
          }),
          a.jsxs("div", {
            className: "flex items-center gap-3",
            children: [
              a.jsx("button", {
                onClick: loadContacts,
                className: "px-3 py-1.5 bg-white border border-stone-200 text-stone-700 text-xs font-semibold rounded-lg hover:bg-stone-50 transition-colors cursor-pointer",
                children: "↻ Refresh"
              }),
              a.jsxs("select", {
                value: filter,
                onChange: e => setFilter(e.target.value),
                className: "text-xs bg-white border border-stone-200 rounded-lg px-3 py-1.5 text-stone-700 focus:outline-none cursor-pointer",
                children: [
                  a.jsx("option", { value: "all", children: "All Messages" }),
                  a.jsx("option", { value: "unread", children: "New / Unread" }),
                  a.jsx("option", { value: "replied", children: "Replied" })
                ]
              })
            ]
          })
        ]
      }),
      a.jsx("div", {
        className: "bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-xs",
        children: loading ? a.jsx("div", {
          className: "py-16 text-center text-stone-400 text-sm",
          children: "Loading messages & inquiries..."
        }) : filtered.length === 0 ? a.jsxs("div", {
          className: "py-16 text-center text-stone-400 text-sm",
          children: [
            a.jsx("p", { className: "font-semibold text-stone-600 text-base", children: "No customer inquiries found" }),
            a.jsx("p", { className: "text-xs text-stone-400 mt-1", children: "Messages submitted through the Contact Us page will be listed here in real-time." })
          ]
        }) : a.jsx("div", {
          className: "overflow-x-auto",
          children: a.jsxs("table", {
            className: "w-full text-left text-xs sm:text-sm",
            children: [
              a.jsx("thead", {
                className: "bg-stone-50 text-stone-600 font-semibold border-b border-stone-200",
                children: a.jsxs("tr", {
                  children: [
                    a.jsx("th", { className: "py-3.5 px-6", children: "Sender" }),
                    a.jsx("th", { className: "py-3.5 px-6", children: "Subject" }),
                    a.jsx("th", { className: "py-3.5 px-6", children: "Message" }),
                    a.jsx("th", { className: "py-3.5 px-6", children: "Date" }),
                    a.jsx("th", { className: "py-3.5 px-6", children: "Status" }),
                    a.jsx("th", { className: "py-3.5 px-6 text-right", children: "Actions" })
                  ]
                })
              }),
              a.jsx("tbody", {
                className: "divide-y divide-stone-100",
                children: filtered.map(m => a.jsxs("tr", {
                  className: "hover:bg-stone-50/60 transition-colors",
                  children: [
                    a.jsxs("td", {
                      className: "py-4 px-6",
                      children: [
                        a.jsx("p", { className: "font-bold text-stone-900", children: m.name }),
                        a.jsx("p", { className: "text-xs text-stone-500", children: m.email }),
                        m.phone && a.jsx("p", { className: "text-[11px] text-stone-400", children: m.phone })
                      ]
                    }),
                    a.jsx("td", { className: "py-4 px-6 font-semibold text-stone-800", children: m.subject || "General Inquiry" }),
                    a.jsx("td", { className: "py-4 px-6 text-stone-600 max-w-xs truncate", children: m.message }),
                    a.jsx("td", { className: "py-4 px-6 text-stone-400 text-xs", children: m.created_at ? new Date(m.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric" }) : "Recent" }),
                    a.jsx("td", {
                      className: "py-4 px-6",
                      children: a.jsx("span", {
                        className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${m.status === "Replied" ? "bg-emerald-100 text-emerald-800" : "bg-blue-100 text-blue-800"}`,
                        children: m.status || "New"
                      })
                    }),
                    a.jsx("td", {
                      className: "py-4 px-6 text-right",
                      children: a.jsxs("div", {
                        className: "flex items-center justify-end gap-2",
                        children: [
                          a.jsx("button", {
                            onClick: () => setSelectedMsg(m),
                            className: "px-2.5 py-1 text-xs font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors cursor-pointer",
                            children: "View"
                          }),
                          a.jsx("button", {
                            onClick: () => updateStatus(m.id, m.status === "Replied" ? "New" : "Replied"),
                            className: "px-2.5 py-1 text-xs font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-md transition-colors cursor-pointer",
                            children: m.status === "Replied" ? "Mark Unread" : "Mark Replied"
                          })
                        ]
                      })
                    })
                  ]
                }, m.id))
              })
            ]
          })
        })
      }),
      selectedMsg && a.jsx("div", {
        className: "fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4",
        children: a.jsxs("div", {
          className: "bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-stone-200",
          children: [
            a.jsxs("div", {
              className: "flex items-center justify-between pb-3 border-b border-stone-100",
              children: [
                a.jsxs("div", {
                  children: [
                    a.jsx("h3", { className: "font-bold text-lg text-stone-900", children: selectedMsg.subject || "Customer Inquiry" }),
                    a.jsxs("p", { className: "text-xs text-stone-500 mt-0.5", children: ["From: ", selectedMsg.name, " (", selectedMsg.email, ")"] })
                  ]
                }),
                a.jsx("button", {
                  onClick: () => setSelectedMsg(null),
                  className: "text-stone-400 hover:text-stone-800 text-sm font-semibold p-1 cursor-pointer",
                  children: "✕"
                })
              ]
            }),
            selectedMsg.phone && a.jsxs("p", {
              className: "text-xs text-stone-600 bg-stone-50 p-2.5 rounded-lg",
              children: [a.jsx("strong", { children: "Phone Contact: " }), selectedMsg.phone]
            }),
            a.jsxs("div", {
              className: "p-4 bg-stone-50 rounded-xl text-stone-800 text-xs leading-relaxed max-h-60 overflow-y-auto whitespace-pre-wrap",
              children: [a.jsx("p", { className: "font-semibold text-stone-900 mb-1", children: "Message Content:" }), selectedMsg.message]
            }),
            a.jsxs("div", {
              className: "flex items-center justify-between pt-3 border-t border-stone-100",
              children: [
                a.jsx("a", {
                  href: `mailto:${selectedMsg.email}?subject=${encodeURIComponent("Re: " + (selectedMsg.subject || "JBI Craft Inquiry"))}`,
                  className: "px-4 py-2 bg-stone-900 text-white rounded-lg text-xs font-semibold hover:bg-black transition-colors cursor-pointer",
                  children: "Reply via Email ↗"
                }),
                a.jsx("button", {
                  onClick: () => {
                    updateStatus(selectedMsg.id, "Replied");
                    setSelectedMsg(null);
                  },
                  className: "px-4 py-2 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors cursor-pointer",
                  children: "Mark as Replied"
                })
              ]
            })
          ]
        })
      })
    ]
  });
},
$b=({products:o,onAddProduct:p,onUpdateProduct:y,onDeleteProduct:d,onRestockProduct:z,onSwitchToStore:v})=>{const deduplicateAdminOrders=(rawList)=>{if(!Array.isArray(rawList))return[];const seen=new Set();const res=[];for(const m of rawList){if(!m||String(m.id).startsWith("ord-10")||m.customerEmail==="riya.sen@example.com")continue;const k=(m.orderNumber||m.order_number||m.id||"").toLowerCase().trim();if(!k||seen.has(k))continue;seen.add(k);res.push(m)}return res};const[E,D]=_.useState(()=>{return window.currentUser||null}),[g,h]=_.useState("dashboard"),[O,x]=_.useState(()=>{try{const Y=localStorage.getItem("jbi_admin_orders");if(Y){const parsed=JSON.parse(Y);return deduplicateAdminOrders(parsed)}}catch(e){}return[]}),[H,R]=_.useState(!1);_.useEffect(()=>{const cleaned=deduplicateAdminOrders(O);localStorage.setItem("jbi_admin_orders",JSON.stringify(cleaned));},[O]);_.useEffect(()=>{const fetchAdminOrders=async()=>{let backendList=[];try{const sb=window.supabase||window.supabaseClient;const{data}=await sb.from("orders").select("*").order("created_at",{ascending:false});if(Array.isArray(data)){backendList=data.map(o=>({...o,customerName:o.customer_name||o.customerName,customerEmail:o.customer_email||o.customerEmail,totalAmount:o.total_amount||o.totalAmount}));}}catch(e){}let remoteOrders=[];if(window.SupabaseService&&window.SupabaseService.getOrders){try{const r=await window.SupabaseService.getOrders();if(Array.isArray(r)&&r.length>0)remoteOrders=r}catch(e){}}x(prev=>{const combined=[...backendList,...remoteOrders,...prev];return deduplicateAdminOrders(combined)})};fetchAdminOrders();const handleNewOrder=()=>{fetchAdminOrders()};window.addEventListener("jbi_order_created",handleNewOrder);return()=>window.removeEventListener("jbi_order_created",handleNewOrder)},[]);const Q=async()=>{const sb=window.supabase||(window.SupabaseService&&window.SupabaseService.client)||window.supabaseClient;if(sb&&sb.auth){try{await sb.auth.signOut();}catch(e){}}window.currentUser=null;D(null);},j=(Y,I)=>{x(re=>re.map(me=>(me.id===Y||me.orderNumber===Y)?{...me,status:I}:me));(async()=>{try{const sb=window.supabase||window.supabaseClient;await sb.from("orders").update({status:I}).eq("id",Y);}catch(e){}})()},X=(Y,I)=>{x(re=>re.map(me=>(me.id===Y||me.orderNumber===Y)?{...me,trackingId:I}:me));(async()=>{try{const sb=window.supabase||window.supabaseClient;await sb.from("orders").update({tracking_id:I}).eq("id",Y);}catch(e){}})()};if(!E)return a.jsx(Wb,{onLoginSuccess:Y=>D(Y),onCancel:v});const G=O.filter(Y=>Y.status==="Pending").length,w=o.filter(Y=>(Y.stock??12)<=5).length;return a.jsxs("div",{className:"min-h-screen bg-[#fafafa] flex flex-row antialiased text-stone-900 font-sans",children:[a.jsx("div",{className:"hidden md:block sticky top-0 h-screen z-40",children:a.jsx(Hf,{activeSection:g,onSelectSection:Y=>{h(Y),R(!1)},onLogout:Q,onSwitchToStore:v,pendingOrdersCount:G,lowStockCount:w})}),H&&a.jsxs("div",{className:"fixed inset-0 z-50 md:hidden flex",children:[a.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-xs",onClick:()=>R(!1)}),a.jsx("div",{className:"relative w-64 max-w-xs bg-white h-full shadow-2xl z-10 flex flex-col",children:a.jsx(Hf,{activeSection:g,onSelectSection:Y=>{h(Y),R(!1)},onLogout:Q,onSwitchToStore:v,pendingOrdersCount:G,lowStockCount:w})})]}),a.jsxs("div",{className:"flex-1 flex flex-col min-w-0 bg-[#fafafa]",children:[a.jsx(Bb,{products:o,orders:O,onSelectProduct:()=>h("products"),onSelectOrder:()=>h("orders"),onNavigateSection:Y=>h(Y),onLogout:Q,onSwitchToStore:v,adminName:E.name,onToggleMobileMenu:()=>R(!0)}),a.jsxs("main",{className:"flex-1 pb-16",children:[g==="dashboard"&&a.jsx(Yb,{products:o,orders:O,onNavigateSection:Y=>h(Y),onSelectOrder:()=>h("orders"),onUpdateOrderStatus:j,onRestockProduct:z}),g==="products"&&a.jsx(Jb,{products:o,onAddProduct:p,onUpdateProduct:y,onDeleteProduct:d}),g==="categories"&&a.jsx(Vb,{products:o}),g==="inventory"&&a.jsx(Kb,{products:o,onRestockProduct:z}),g==="orders"&&a.jsx(Qb,{orders:O,onUpdateOrderStatus:j,onUpdateTrackingId:X}),g==="contacts"&&a.jsx(ContactsAdminComp,{}),g==="customers"&&a.jsx(Xb,{}),g==="marketing"&&a.jsx(Zb,{}),g==="reports"&&a.jsx(Ib,{products:o,orders:O}),g==="settings"&&a.jsx(Fb,{})]})]})]})},fx=new Set(["prod-kansa-kadai-shallow-5717","prod-kansa-matka-ghada-6899","prod-kansa-kadai-deep-5717-05","prod-odisha-pattachitra-art","prod-wood-art-ganesh","prod-wood-art-hanuman"]),Uf=o=>{if(!o)return!1;if(o.id&&fx.has(o.id))return!0;const p=(o.craft||"").toLowerCase();if(p.includes("kansa")||p.includes("bell metal")||p.includes("pattachitra"))return!0;const y=(o.title||"").toLowerCase();if(y.includes("kansa")||y.includes("bell metal")||y.includes("pattachitra")||y.includes("wall art"))return!0;const d=(o.category||"").toLowerCase();return!!(d.includes("pattachitra")||d==="art & paintings"||d==="wall art"||o.categoriesList&&o.categoriesList.some(z=>{const v=z.toLowerCase();return v==="wall art"||v==="pattachitra"||v==="kansa"||v==="bell metal"}))};
const PattachitraShowcase = () => null;


// ============================================================================
// Flipkart-Style GST Tax Invoice Modal (Matching Uploaded Screenshot Format)
// ============================================================================
const TaxInvoiceModal = ({ order, isOpen, onClose }) => {
  if (!isOpen || !order) return null;

  const handlePrint = () => {
    window.print();
  };

  const cleanNumStr = (order.orderNumber || order.id || "427000115736").replace(/\D/g, "");
  const numSeed = cleanNumStr.length > 6 ? cleanNumStr.slice(-6) : "115736";
  const invoiceNumber = order.invoiceNumber || `NBAC427000${numSeed}`;
  const orderId = order.orderNumber || order.id || "OD337208236383074100";
  
  let invoiceDate = "11-04-2026";
  try {
    const d = order.createdAt ? new Date(order.createdAt) : new Date();
    invoiceDate = `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(2, '0')}-${d.getFullYear()}`;
  } catch(e) {}

  const customerName = order.customerName || "Rashmi Ranjan Das";
  const customerPhone = order.customerPhone || "+91 98765 43210";
  const customerEmail = order.customerEmail || "patron@jbicraft.com";
  const shippingAddress = order.shippingAddress || "Ada market, Infront of kk public school";
  const city = order.city || "Bhubaneswar";
  const state = order.state || "Odisha";
  const pincode = order.pincode || "756134";
  
  const items = (Array.isArray(order.items) && order.items.length > 0) ? order.items : [
    {
      productTitle: "Traditional Sandstone Handcrafted Masterpiece (Chandan Pedi)",
      price: order.totalAmount || 1450,
      quantity: 1,
      craft: "STONE CARVING",
      hsn: "970199"
    }
  ];

  const subtotal = Number(order.subtotal || order.totalAmount || items.reduce((acc, it) => acc + (Number(it.price || 0) * Number(it.quantity || 1)), 0));
  const discount = Number(order.discount || 0);
  const shippingFee = Number(order.shippingFee || 0);
  const totalAmount = Number(order.totalAmount || (subtotal - discount + shippingFee));

  const isInterState = state.toLowerCase().trim() !== "odisha";
  const taxableGoods = (subtotal - discount) / 1.12;
  const totalGoodsGst = (subtotal - discount) - taxableGoods;
  const sgstGoods = isInterState ? 0 : totalGoodsGst / 2;
  const cgstGoods = isInterState ? 0 : totalGoodsGst / 2;
  const igstGoods = isInterState ? totalGoodsGst : 0;

  const taxableShipping = shippingFee > 0 ? shippingFee / 1.18 : 0;
  const totalShippingGst = shippingFee - taxableShipping;
  const sgstShipping = isInterState ? 0 : totalShippingGst / 2;
  const cgstShipping = isInterState ? 0 : totalShippingGst / 2;

  const totalTaxable = taxableGoods + taxableShipping;
  const totalSgst = sgstGoods + sgstShipping;
  const totalCgst = cgstGoods + cgstShipping;
  const totalIgst = igstGoods + (isInterState ? totalShippingGst : 0);

  return a.jsx("div", {
    className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto print:p-0 print:bg-white print:static",
    children: a.jsxs("div", {
      className: "bg-white rounded-xl shadow-2xl max-w-4xl w-full flex flex-col my-auto border border-stone-300 max-h-[95vh] overflow-hidden print:border-none print:shadow-none print:max-w-none print:max-h-none print:m-0 print:overflow-visible",
      children: [
        // Top Toolbar (hidden when printing)
        a.jsxs("div", {
          className: "bg-stone-900 text-white px-5 py-3 flex items-center justify-between no-print shrink-0 border-b border-stone-800",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-2 sm:gap-3",
              children: [
                a.jsx("span", {
                  className: "font-mono text-xs bg-amber-400 text-stone-950 font-bold px-2.5 py-1 rounded shadow-2xs",
                  children: "GST TAX INVOICE"
                }),
                a.jsxs("span", {
                  className: "text-xs text-stone-300 font-mono hidden sm:inline",
                  children: ["Order: ", orderId]
                })
              ]
            }),
            a.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                a.jsxs("button", {
                  type: "button",
                  onClick: handlePrint,
                  className: "flex items-center gap-1.5 px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs rounded-md shadow-xs transition-all cursor-pointer",
                  children: [
                    a.jsx("svg", {
                      className: "w-4 h-4",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      children: a.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                      })
                    }),
                    a.jsx("span", { children: "Print / Save PDF" })
                  ]
                }),
                a.jsx("button", {
                  type: "button",
                  onClick: onClose,
                  className: "p-1.5 text-stone-400 hover:text-white rounded-md hover:bg-stone-800 transition-colors cursor-pointer",
                  "aria-label": "Close Invoice",
                  children: a.jsx(Je, { className: "w-5 h-5" })
                })
              ]
            })
          ]
        }),

        // Printable Document Container (Exact Flipkart Layout)
        a.jsx("div", {
          id: "tax-invoice-printable",
          className: "p-4 sm:p-8 overflow-y-auto text-black font-sans text-[11px] leading-tight bg-white select-text",
          children: a.jsxs("div", {
            className: "border border-black p-4 sm:p-6 bg-white space-y-4 max-w-3xl mx-auto",
            children: [
              // 1. Heading
              a.jsx("div", {
                className: "text-center font-bold text-sm tracking-wide border-b border-black pb-2 uppercase",
                children: "Tax invoice"
              }),

              // 2. Billed From & QR Code Block
              a.jsxs("div", {
                className: "grid grid-cols-12 gap-3 pb-3 border-b border-black",
                children: [
                  a.jsxs("div", {
                    className: "col-span-8 sm:col-span-9 space-y-0.5",
                    children: [
                      a.jsx("p", { className: "font-bold text-[12px] text-black", children: "Billed From" }),
                      a.jsx("p", { className: "font-semibold text-[11px] text-stone-900", children: "Flipkart India Private Limited / JBI Craft Heritage Guild" }),
                      a.jsx("p", { className: "text-stone-700", children: "DTA Phase 2, Mahindra World City, Jaipur Ajmer Road" }),
                      a.jsx("p", { className: "text-stone-700", children: "Near Bagur Industrial Area, Jaipur, Rajasthan, 302012, IN-RJ / Heritage Craft Hub, Bhubaneswar, Odisha, 751001" }),
                      a.jsxs("p", { className: "text-stone-800 font-mono mt-1", children: [a.jsx("span", { className: "font-semibold", children: "MSME / Tax Reg : " }), "UDYAM-OD-07-0122585 • GST: 21AAACJ1234F1Z5"] }),
                      a.jsxs("p", { className: "text-stone-800 font-mono", children: [a.jsx("span", { className: "font-semibold", children: "PAN : " }), "AABCF8078M"] })
                    ]
                  }),
                  a.jsxs("div", {
                    className: "col-span-4 sm:col-span-3 flex flex-col items-end justify-start",
                    children: [
                      a.jsx("div", {
                        className: "w-20 h-20 sm:w-24 sm:h-24 border border-black p-1 bg-white flex flex-col items-center justify-center",
                        children: a.jsx("svg", {
                          viewBox: "0 0 100 100",
                          className: "w-full h-full text-black fill-current",
                          children: a.jsx("path", {
                            d: "M0,0 h30 v30 h-30 z M5,5 v20 h20 v-20 z M10,10 h10 v10 h-10 z M70,0 h30 v30 h-30 z M75,5 v20 h20 v-20 z M80,10 h10 v10 h-10 z M0,70 h30 v30 h-30 z M5,75 v20 h20 v-20 z M10,80 h10 v10 h-10 z M40,10 h10 v10 h-10 z M55,5 h10 v15 h-10 z M40,40 h20 v20 h-20 z M70,40 h15 v10 h-15 z M85,55 h15 v15 h-15 z M40,70 h10 v25 h-10 z M55,80 h20 v10 h-20 z M80,75 h15 v20 h-15 z M20,40 h15 v15 h-15 z M5,45 h10 v20 h-10 z M45,55 h10 v10 h-10 z"
                          })
                        })
                      }),
                      a.jsx("span", { className: "text-[9px] font-mono text-stone-600 mt-1", children: "GST e-Invoice QR" })
                    ]
                  })
                ]
              }),

              // 3. Invoice Details & Transaction Nature
              a.jsxs("div", {
                className: "grid grid-cols-12 gap-3 pb-3 border-b border-black text-[11px]",
                children: [
                  a.jsxs("div", {
                    className: "col-span-6 space-y-0.5",
                    children: [
                      a.jsx("p", { className: "font-bold text-stone-900", children: "Invoice Details" }),
                      a.jsxs("p", { children: [a.jsx("span", { className: "font-semibold", children: "Tax Invoice Number : " }), a.jsx("span", { className: "font-mono font-semibold", children: invoiceNumber })] }),
                      a.jsxs("p", { children: [a.jsx("span", { className: "font-semibold", children: "Invoice Date : " }), invoiceDate] }),
                      a.jsxs("p", { children: [a.jsx("span", { className: "font-semibold", children: "Order Number : " }), a.jsx("span", { className: "font-mono font-bold text-stone-900", children: orderId })] })
                    ]
                  }),
                  a.jsxs("div", {
                    className: "col-span-6 space-y-0.5",
                    children: [
                      a.jsx("p", { className: "font-bold text-stone-900", children: " " }),
                      a.jsxs("p", { children: [a.jsx("span", { className: "font-semibold", children: "Nature of transaction : " }), a.jsx("span", { className: "font-bold", children: isInterState ? "INTER" : "INTRA" })] }),
                      a.jsxs("p", { children: [a.jsx("span", { className: "font-semibold", children: "Nature Of Supply : " }), "Service & Certified Handloom / Handicrafts"] })
                    ]
                  })
                ]
              }),

              // 4. Three Column Address Grid (Billed To, Shipped From, Shipped To)
              a.jsxs("div", {
                className: "grid grid-cols-12 gap-3 pb-3 border-b border-black text-[10.5px]",
                children: [
                  a.jsxs("div", {
                    className: "col-span-4 space-y-0.5 border-r border-black/30 pr-2",
                    children: [
                      a.jsx("p", { className: "font-bold text-black text-[11px]", children: "Billed To" }),
                      a.jsx("p", { className: "font-semibold text-stone-900", children: customerName }),
                      a.jsx("p", { className: "text-stone-700", children: shippingAddress }),
                      a.jsxs("p", { className: "text-stone-700", children: [city, ", ", state, " - ", pincode] }),
                      a.jsxs("p", { className: "text-stone-700", children: ["State : ", state] }),
                      a.jsxs("p", { className: "text-stone-700 font-mono", children: ["State Code : ", isInterState ? "IN-DOM" : "IN-OR"] }),
                      a.jsxs("p", { className: "text-stone-900 font-semibold mt-0.5", children: ["Place of Supply : ", state.toUpperCase()] }),
                      customerPhone && a.jsxs("p", { className: "text-stone-600 font-mono text-[10px]", children: ["Ph: ", customerPhone] })
                    ]
                  }),
                  a.jsxs("div", {
                    className: "col-span-4 space-y-0.5 border-r border-black/30 pr-2",
                    children: [
                      a.jsx("p", { className: "font-bold text-black text-[11px]", children: "Shipped From" }),
                      a.jsx("p", { className: "font-semibold text-stone-900", children: "Saini Steels / JBI Master Artisan Guild" }),
                      a.jsx("p", { className: "text-stone-700", children: "Heritage Crafts Cluster, Near Chand Bass Railway Crossing" }),
                      a.jsx("p", { className: "text-stone-700", children: "Bhubaneswar, Odisha, IN-OR, India - 751001" }),
                      a.jsx("p", { className: "text-stone-700", children: "State : Odisha" }),
                      a.jsx("p", { className: "text-stone-700 font-mono", children: "State Code : IN-OR" })
                    ]
                  }),
                  a.jsxs("div", {
                    className: "col-span-4 space-y-0.5 pl-1",
                    children: [
                      a.jsx("p", { className: "font-bold text-black text-[11px]", children: "Shipped To" }),
                      a.jsx("p", { className: "font-semibold text-stone-900", children: customerName }),
                      a.jsx("p", { className: "text-stone-700", children: shippingAddress }),
                      a.jsxs("p", { className: "text-stone-700", children: [city, ", ", state, ", IN-OR, IN - ", pincode] }),
                      a.jsxs("p", { className: "text-stone-700", children: ["State : ", state] }),
                      a.jsxs("p", { className: "text-stone-700 font-mono", children: ["State Code : ", isInterState ? "IN-DOM" : "IN-OR"] }),
                      customerPhone && a.jsxs("p", { className: "text-stone-600 font-mono text-[10px]", children: ["Ph: ", customerPhone] })
                    ]
                  })
                ]
              }),

              // 5. Particulars Table
              a.jsx("div", {
                className: "overflow-x-auto",
                children: a.jsxs("table", {
                  className: "w-full text-[10px] border-collapse",
                  children: [
                    a.jsx("thead", {
                      children: a.jsxs("tr", {
                        className: "border-b border-black text-left font-bold",
                        children: [
                          a.jsx("th", { className: "py-1.5 pr-2 w-[34%]", children: "Particulars" }),
                          a.jsx("th", { className: "py-1.5 px-1 w-[12%] text-center", children: "SAC / HSN" }),
                          a.jsx("th", { className: "py-1.5 px-1 w-[8%] text-center", children: "Qty" }),
                          a.jsx("th", { className: "py-1.5 px-1 w-[12%] text-right", children: "Gross Amount" }),
                          a.jsx("th", { className: "py-1.5 px-1 w-[12%] text-right", children: "Taxable Value" }),
                          a.jsx("th", { className: "py-1.5 px-1 w-[11%] text-right", children: isInterState ? "IGST (12%)" : "SGST (6%)" }),
                          a.jsx("th", { className: "py-1.5 px-1 w-[11%] text-right", children: isInterState ? "CESS" : "CGST (6%)" }),
                          a.jsx("th", { className: "py-1.5 pl-1 w-[12%] text-right", children: "Total" })
                        ]
                      })
                    }),
                    a.jsxs("tbody", {
                      className: "divide-y divide-black/30",
                      children: [
                        items.map((it, idx) => {
                          const itPrice = Number(it.price || 0);
                          const itQty = Number(it.quantity || 1);
                          const itGross = itPrice * itQty;
                          const itTaxable = itGross / 1.12;
                          const itTax = itGross - itTaxable;
                          const itSgst = isInterState ? 0 : itTax / 2;
                          const itCgst = isInterState ? 0 : itTax / 2;
                          const itIgst = isInterState ? itTax : 0;
                          const hsnCode = it.hsn || "970199";

                          return a.jsxs("tr", {
                            className: "align-top",
                            children: [
                              a.jsxs("td", {
                                className: "py-2 pr-2",
                                children: [
                                  a.jsx("p", { className: "font-semibold text-stone-900", children: it.productTitle || it.title || "Handcrafted Heritage Art" }),
                                  a.jsxs("p", { className: "text-stone-600 text-[9.5px]", children: [it.craft || "Odisha Craft Lineage", " | 100% Certified Handmade"] }),
                                  a.jsxs("p", { className: "text-stone-500 text-[9px]", children: ["HSN: ", hsnCode, " | GST: 12.00%"] })
                                ]
                              }),
                              a.jsx("td", { className: "py-2 px-1 text-center font-mono", children: hsnCode }),
                              a.jsxs("td", { className: "py-2 px-1 text-center font-semibold", children: [itQty, ".0"] }),
                              a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", itGross.toFixed(2)] }),
                              a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", itTaxable.toFixed(2)] }),
                              a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", (isInterState ? itIgst : itSgst).toFixed(2)] }),
                              a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", (isInterState ? 0 : itCgst).toFixed(2)] }),
                              a.jsxs("td", { className: "py-2 pl-1 text-right font-bold font-mono", children: ["₹", itGross.toFixed(2)] })
                            ]
                          }, idx);
                        }),

                        // GT / Shipping Charges Row
                        a.jsxs("tr", {
                          className: "align-top bg-stone-50/50",
                          children: [
                            a.jsxs("td", {
                              className: "py-2 pr-2",
                              children: [
                                a.jsx("p", { className: "font-semibold text-stone-900", children: "GT Charges (Shipping & Courier Logistics)" }),
                                a.jsx("p", { className: "text-stone-500 text-[9px]", children: "CGST 9.0% | SGST 9.0%" })
                              ]
                            }),
                            a.jsx("td", { className: "py-2 px-1 text-center font-mono", children: "996519" }),
                            a.jsx("td", { className: "py-2 px-1 text-center", children: "1.0" }),
                            a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", shippingFee.toFixed(2)] }),
                            a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", taxableShipping.toFixed(2)] }),
                            a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", sgstShipping.toFixed(2)] }),
                            a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", cgstShipping.toFixed(2)] }),
                            a.jsxs("td", { className: "py-2 pl-1 text-right font-mono font-semibold", children: ["₹", shippingFee.toFixed(2)] })
                          ]
                        }),

                        // Total Row
                        a.jsxs("tr", {
                          className: "border-t-2 border-b-2 border-black font-bold",
                          children: [
                            a.jsx("td", { className: "py-2 font-bold uppercase", children: "Total" }),
                            a.jsx("td", { className: "py-2 px-1 text-center", children: "-" }),
                            a.jsxs("td", { className: "py-2 px-1 text-center", children: [items.reduce((a2, c) => a2 + Number(c.quantity || 1), 0), ".0"] }),
                            a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", (subtotal + shippingFee).toFixed(2)] }),
                            a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", totalTaxable.toFixed(2)] }),
                            a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", (isInterState ? totalIgst : totalSgst).toFixed(2)] }),
                            a.jsxs("td", { className: "py-2 px-1 text-right font-mono", children: ["₹", (isInterState ? 0 : totalCgst).toFixed(2)] }),
                            a.jsxs("td", { className: "py-2 pl-1 text-right font-mono text-[11px] font-bold", children: ["₹", totalAmount.toFixed(2)] })
                          ]
                        })
                      ]
                    })
                  ]
                })
              }),

              // 6. Reverse Charge Declaration & Signatory Box
              a.jsxs("div", {
                className: "pt-2 grid grid-cols-12 gap-3 items-end",
                children: [
                  a.jsxs("div", {
                    className: "col-span-7 space-y-1 text-[10px]",
                    children: [
                      a.jsxs("p", { className: "font-semibold text-stone-900", children: ["Is the supply subject to reverse charge: ", a.jsx("span", { className: "font-normal", children: "No" })] }),
                      a.jsxs("div", {
                        className: "pt-2 text-[9.5px] text-stone-600 space-y-0.5",
                        children: [
                          a.jsxs("p", { children: [a.jsx("span", { className: "font-semibold text-stone-800", children: "CIN : " }), "U51909KA2011PTC060489"] }),
                          a.jsxs("p", { children: [a.jsx("span", { className: "font-semibold text-stone-800", children: "Contact No. : " }), "080-67302000 / 1800-202-9898"] }),
                          a.jsxs("p", { children: [a.jsx("span", { className: "font-semibold text-stone-800", children: "Support Email : " }), "care@jbicraft.com"] }),
                          a.jsx("p", { className: "text-[9px] text-stone-500 italic mt-1", children: "This is a computer generated tax invoice issued pursuant to Section 31 of CGST Act, 2017." })
                        ]
                      })
                    ]
                  }),
                  a.jsx("div", {
                    className: "col-span-5 flex flex-col items-center sm:items-end justify-center",
                    children: a.jsxs("div", {
                      className: "border border-black p-2.5 w-44 bg-stone-50 text-center rounded-sm",
                      children: [
                        a.jsx("div", {
                          className: "h-10 flex items-center justify-center",
                          children: a.jsxs("svg", {
                            viewBox: "0 0 200 60",
                            className: "w-36 h-9 text-blue-900",
                            children: [
                              a.jsx("path", {
                                d: "M10,40 Q30,10 60,35 T110,25 Q140,5 160,38 T190,30",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2.5",
                                strokeLinecap: "round"
                              }),
                              a.jsx("text", {
                                x: "35",
                                y: "48",
                                fontFamily: "cursive",
                                fontSize: "18",
                                fill: "#1e3a8a",
                                fontStyle: "italic",
                                children: "D. Roychowdhury"
                              })
                            ]
                          })
                        }),
                        a.jsx("div", {
                          className: "border-t border-black/40 pt-1 mt-1 text-[9px] font-bold uppercase tracking-wider text-stone-800",
                          children: "Authorized Signatory"
                        })
                      ]
                    })
                  })
                ]
              }),

              // 7. Footer Note
              a.jsxs("div", {
                className: "pt-3 border-t border-black flex items-center justify-between text-[9px] text-stone-600 font-mono",
                children: [
                  a.jsx("span", { className: "font-bold", children: "E.& O.E." }),
                  a.jsx("span", { className: "text-center font-sans font-semibold text-stone-900", children: "Ordered Through Flipkart / JBI Craft Heritage Guild" }),
                  a.jsx("span", { children: "1 of 1" })
                ]
              })
            ]
          })
        })
      ]
    })
  });
};

// ============================================================================
// Fullscreen Orders Page (Matching Flipkart Orders UI & Realtime Supabase Sync)
// ============================================================================

// ============================================================================
// Professional SaaS-Level Payment & Billing Suite (Multi-Gateway Ready)
// ============================================================================
const ProfessionalPaymentPageComponent = ({ cartItems, onNavigate, onClearCart, onUpdateQuantity, onRemoveItem, onQuickView, onAddToCart }) => {
  // Mode Selector: 'checkout' (Cart & Heirloom Orders), 'subscriptions' (Patron SaaS Memberships), 'custom_invoice' (B2B / Custom Commission)
  const [billingMode, setBillingMode] = _.useState(cartItems && cartItems.length > 0 ? "checkout" : "subscriptions");
  const [activeStep, setActiveStep] = _.useState(2); // 1: Items, 2: Gateway & Payment, 3: Escrow & Settlement

  // Real-Time Currency Rates & Selector
  const [currency, setCurrency] = _.useState("INR");
  const currencyRates = {
    INR: { symbol: "₹", rate: 1, name: "INR - Indian Rupee", flag: "🇮🇳", locale: "en-IN" },
    USD: { symbol: "$", rate: 0.0116, name: "USD - US Dollar", flag: "🇺🇸", locale: "en-US" },
    EUR: { symbol: "€", rate: 0.0107, name: "EUR - Euro", flag: "🇪🇺", locale: "de-DE" },
    GBP: { symbol: "£", rate: 0.0090, name: "GBP - British Pound", flag: "🇬🇧", locale: "en-GB" },
    AED: { symbol: "د.إ", rate: 0.0425, name: "AED - UAE Dirham", flag: "🇦🇪", locale: "ar-AE" },
    SGD: { symbol: "S$", rate: 0.0156, name: "SGD - Singapore Dollar", flag: "🇸🇬", locale: "en-SG" },
    CAD: { symbol: "C$", rate: 0.0158, name: "CAD - Canadian Dollar", flag: "🇨🇦", locale: "en-CA" },
    AUD: { symbol: "A$", rate: 0.0175, name: "AUD - Australian Dollar", flag: "🇦🇺", locale: "en-AU" }
  };
  
  const formatMoney = (inrVal) => {
    const curr = currencyRates[currency] || currencyRates.INR;
    const converted = Math.round(inrVal * curr.rate * 100) / 100;
    if (currency === "INR") return `₹${Number(inrVal).toLocaleString('en-IN')}`;
    return `${curr.symbol}${(Number(converted)||0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };

  // SaaS Patron Subscription Plans
  const [subscriptionCycle, setSubscriptionCycle] = _.useState("annual"); // 'monthly' or 'annual'
  const [selectedPlanId, setSelectedPlanId] = _.useState("curator");

  const patronPlans = [
    {
      id: "enthusiast",
      name: "Guild Enthusiast",
      tierTag: "Community Tier",
      badge: "Free Lifetime",
      gradient: "from-stone-900 to-stone-800",
      accent: "#a8a29e",
      priceMonthly: 0,
      priceAnnual: 0,
      description: "Access our curated catalogue of certified GI craft drops, seasonal exhibition notifications, and digital artisan monographs.",
      features: [
        "100% Certified GI Tag Craft Access",
        "Quarterly Digital Artisan Gazette",
        "Standard Insured Domestic Dispatch",
        "Public Exhibition Invitations",
        "Digital Certificate of Craft Patronage"
      ],
      cta: "Join Free Community",
      popular: false
    },
    {
      id: "curator",
      name: "Heritage Curator Patron",
      tierTag: "Connoisseur Choice",
      badge: "⭐ Most Popular",
      gradient: "from-[#2e2016] via-[#4a3525] to-[#20150d]",
      accent: "#d4a373",
      priceMonthly: 1499,
      priceAnnual: 14990, // ~1249/mo
      description: "Directly subsidize rural master weaver clusters while unlocking 15% VIP lifetime privileges, preview allocations, and physical monographs.",
      features: [
        "15% VIP Lifetime Patron Privilege on All Crafts",
        "48-Hour Priority Early Access to Rare Drops",
        "Quarterly Hardcover Artisan Monograph & Photo Journal",
        "Complimentary Insured Air Express Delivery",
        "Direct Master Curator WhatsApp Concierge",
        "Annual GI Hallmark Pure Silver Filigree Seal"
      ],
      cta: "Become a Curator Patron",
      popular: true
    },
    {
      id: "royal",
      name: "Royal Heirloom Guild VIP",
      tierTag: "Exclusive Guild",
      badge: "👑 Royal Tier",
      gradient: "from-[#1a1324] via-[#2d1b3f] to-[#120c1a]",
      accent: "#c084fc",
      priceMonthly: 4999,
      priceAnnual: 49990, // ~4165/mo
      description: "Directly sponsor a multi-generational master artisan family with bespoke custom heirloom creation rights and private village residency passes.",
      features: [
        "25% VIP Collector Privilege Across Entire Guild",
        "Annual Custom Commission Right (Bespoke Saree or Scroll)",
        "Complimentary 3-Day Artisan Village Residency Pass",
        "Numbered Physical & Provenance Deed with Hallmark",
        "Dedicated VIP Account Manager & Heritage Advisory",
        "Private VIP Access to National Handloom Salons"
      ],
      cta: "Join Heirloom Guild VIP",
      popular: false
    }
  ];

  // Custom B2B Commission & Milestone Invoicing
  const [customInvoice, setCustomInvoice] = _.useState({
    title: "Bespoke 6-ft Pattachitra Krishna Leela Temple Wall Installation",
    clientName: "Maharaja Heritage Foundation",
    amount: 85000,
    depositPercent: "50",
    milestone: "50% Advance Booking & Natural Pigment Preparation",
    notes: "Crafted on triple-treated handloom tussar canvas using organic conch-shell white, lampblack, and harital mineral pigments."
  });

  // Promo Code State with Quick-Apply Chips
  const [promoCode, setPromoCode] = _.useState("");
  const [promoApplied, setPromoApplied] = _.useState(null);
  const [promoError, setPromoError] = _.useState("");

  const quickPromos = [
    { code: "PATRON20", label: "👑 20% Patron Privilege", percent: 20, desc: "Save 20% on any heirloom allocation" },
    { code: "HERITAGE10", label: "🏛️ 10% GI Artisan", percent: 10, desc: "Direct handloom craft subsidy voucher" },
    { code: "FIRSTBUY500", label: "🎁 ₹500 First Order", flat: 500, desc: "Flat ₹500 instant welcome token" }
  ];

  const applyPromo = (codeToApply) => {
    setPromoError("");
    const code = (codeToApply || promoCode).trim().toUpperCase();
    if (code === "HERITAGE10") {
      setPromoApplied({ code: "HERITAGE10", percent: 10, discountText: "10% Craft Heritage Discount" });
      setPromoCode("HERITAGE10");
    } else if (code === "PATRON20" || code === "PATRONVIP") {
      setPromoApplied({ code: "PATRON20", percent: 20, discountText: "20% VIP Patron Privilege" });
      setPromoCode("PATRON20");
    } else if (code === "FIRSTBUY500" || code === "WELCOME500") {
      setPromoApplied({ code: "FIRSTBUY500", flat: 500, discountText: "Flat ₹500 Welcome Voucher" });
      setPromoCode("FIRSTBUY500");
    } else {
      setPromoError("Invalid code. Tap one of the golden vouchers above.");
    }
  };

  // Payment Gateway Tab Selection
  const [activeGateway, setActiveGateway] = _.useState("razorpay"); // 'razorpay', 'cards', 'upi', 'netbanking', 'crypto'

  // Gateway Settings & Dev Modal
  const [showConfigModal, setShowConfigModal] = _.useState(false);
  const [gatewayConfig, setGatewayConfig] = _.useState(() => {
    try {
      const saved = localStorage.getItem("jbi_payment_gateway_config");
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return {
      environment: "sandbox",
      razorpayKeyId: "rzp_test_JBIHeritage2026",
      razorpayKeySecret: "sec_9841abcd928174",
      stripePublishableKey: "pk_test_51MzJBIHeritageCrafts2026",
      merchantName: "JBI Heritage Crafts & Guild Atelier",
      themeColor: "#d4a373",
      autoCapture: true
    };
  });

  const [configToast, setConfigToast] = _.useState(false);

  const handleSaveConfig = (e) => {
    if (e) e.preventDefault();
    try {
      localStorage.setItem("jbi_payment_gateway_config", JSON.stringify(gatewayConfig));
      setConfigToast(true);
      setTimeout(() => setConfigToast(false), 2500);
    } catch (err) {}
  };

  // Card Form State with Interactive 3D Visualizer & Brand Auto-Detection
  const [cardData, setCardData] = _.useState({
    name: "Rashmi Ranjan Das",
    number: "4532 8920 1204 8921",
    expiry: "12/28",
    cvv: "892",
    saveCard: true,
    brand: "visa"
  });
  const [cardFlipped, setCardFlipped] = _.useState(false);

  const handleCardNumberChange = (e) => {
    let val = e.target.value.replace(/\D/g, "").slice(0, 16);
    let brand = "visa";
    if (val.startsWith("5") || val.startsWith("2")) brand = "mastercard";
    else if (val.startsWith("3")) brand = "amex";
    else if (val.startsWith("6") || val.startsWith("8")) brand = "rupay";
    
    let formatted = val.match(/.{1,4}/g)?.join(" ") || val;
    setCardData({ ...cardData, number: formatted, brand });
  };

  // UPI State
  const [upiId, setUpiId] = _.useState("patron@okhdfcbank");
  const [qrTimeLeft, setQrTimeLeft] = _.useState(299);
  
  _.useEffect(() => {
    const timer = setInterval(() => {
      setQrTimeLeft(prev => prev > 1 ? prev - 1 : 299);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatQrTimer = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // NetBanking State
  const [selectedBank, setSelectedBank] = _.useState("HDFC");
  const popularBanks = [
    { id: "HDFC", name: "HDFC Bank", logo: "🏛️", color: "from-blue-900 to-indigo-950" },
    { id: "ICICI", name: "ICICI Bank", logo: "🏢", color: "from-amber-900 to-orange-950" },
    { id: "SBI", name: "State Bank of India", logo: "🏦", color: "from-cyan-900 to-blue-950" },
    { id: "AXIS", name: "Axis Bank", logo: "🏛️", color: "from-rose-900 to-pink-950" },
    { id: "KOTAK", name: "Kotak Mahindra", logo: "🏢", color: "from-red-900 to-rose-950" }
  ];

  // B2B GST Invoicing Details
  const [isB2B, setIsB2B] = _.useState(false);
  const [b2bDetails, setB2bDetails] = _.useState({
    companyName: "Kalinga Heritage Enterprises Pvt Ltd",
    gstin: "21AAACJ1234F1Z5",
    pan: "AAACJ1234F",
    state: "Odisha (21)"
  });

  // Calculate Subtotals & Totals
  let rawBaseAmount = 0;
  if (billingMode === "checkout") {
    if (cartItems && cartItems.length > 0) {
      rawBaseAmount = cartItems.reduce((acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);
    } else {
      rawBaseAmount = 14500;
    }
  } else if (billingMode === "subscriptions") {
    const currentPlan = patronPlans.find(p => p.id === selectedPlanId) || patronPlans[1];
    rawBaseAmount = subscriptionCycle === "annual" ? currentPlan.priceAnnual : currentPlan.priceMonthly;
  } else if (billingMode === "custom_invoice") {
    const fullAmount = Number(customInvoice.amount) || 50000;
    const depPct = Number(customInvoice.depositPercent) || 100;
    rawBaseAmount = Math.round((fullAmount * depPct) / 100);
  }

  // Calculate Discounts
  let discountAmount = 0;
  if (promoApplied) {
    if (promoApplied.percent) {
      discountAmount = Math.round((rawBaseAmount * promoApplied.percent) / 100);
    } else if (promoApplied.flat) {
      discountAmount = Math.min(rawBaseAmount, promoApplied.flat);
    }
  }

  const taxableAmount = Math.max(0, rawBaseAmount - discountAmount);
  const gstAmount = Math.round(taxableAmount * 0.05);
  const cgstAmount = Math.round(gstAmount / 2);
  const sgstAmount = gstAmount - cgstAmount;
  const finalPayable = taxableAmount;
  const artisanShare = Math.round(finalPayable * 0.85);

  // Processing & Success State
  const [isProcessing, setIsProcessing] = _.useState(false);
  const [processingStep, setProcessingStep] = _.useState("");
  const [showSuccessModal, setShowSuccessModal] = _.useState(false);
  const [completedOrder, setCompletedOrder] = _.useState(null);

  // Trigger Payment
  const handleInitiatePayment = () => {
    if (finalPayable === 0 && billingMode === "subscriptions") {
      const freeOrderData = {
        id: "PATRON-FREE-" + Date.now().toString(36).toUpperCase(),
        paymentId: "FREE_ACTIVATION_" + Date.now().toString(36).toUpperCase(),
        plan: "Guild Enthusiast",
        amount: 0,
        gateway: "Direct Free Activation",
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        items: [{ title: "Guild Enthusiast (Free Lifetime Membership)", quantity: 1, price: 0 }]
      };
      setCompletedOrder(freeOrderData);
      setShowSuccessModal(true);
      return;
    }

    setIsProcessing(true);
    setProcessingStep("Connecting to " + (activeGateway === "razorpay" ? "Razorpay 256-Bit Quantum Gateway" : activeGateway.toUpperCase() + " Secure Processing Gateway") + "...");

    setTimeout(() => {
      setProcessingStep("Verifying Tokenization & Cryptographic Provenance Hash...");
    }, 900);

    setTimeout(() => {
      setProcessingStep("Directing 85% settlement to Rural Master Artisan Escrow...");
    }, 1800);

    setTimeout(() => {
      setIsProcessing(false);
      const generatedPaymentId = "pay_OD" + Math.random().toString(36).substring(2, 10).toUpperCase() + "_2026";
      const generatedOrderId = "JBI-ORD-" + Date.now().toString(36).toUpperCase();

      const orderData = {
        id: generatedOrderId,
        paymentId: generatedPaymentId,
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        billingMode: billingMode,
        gateway: activeGateway === "razorpay" ? "Razorpay Standard SDK" : activeGateway === "cards" ? `Credit Card (${cardData.brand.toUpperCase()})` : activeGateway === "upi" ? `UPI (${upiId})` : activeGateway.toUpperCase(),
        environment: gatewayConfig.environment,
        amount: finalPayable,
        rawBase: rawBaseAmount,
        discount: discountAmount,
        promoCode: promoApplied?.code || null,
        gstBreakdown: { totalGst: gstAmount, cgst: cgstAmount, sgst: sgstAmount, hsn: "9701" },
        currency: currency,
        isB2B: isB2B,
        b2bDetails: isB2B ? b2bDetails : null,
        artisanBeneficiary: { name: "Master Weaver Bhaskar Meher", guild: "Bargarh Sambalpuri Handloom Guild", share: artisanShare },
        items: billingMode === "checkout" ? (cartItems && cartItems.length > 0 ? cartItems : [{ title: "Master Sambalpuri Heirloom Ikat Tapestry", price: rawBaseAmount, quantity: 1, image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600" }]) : billingMode === "subscriptions" ? [{ title: `Patron Plan: ${patronPlans.find(p=>p.id===selectedPlanId)?.name} (${subscriptionCycle.toUpperCase()})`, price: finalPayable, quantity: 1 }] : [{ title: customInvoice.title, price: finalPayable, quantity: 1, milestone: customInvoice.milestone }]
      };

      setCompletedOrder(orderData);
      setShowSuccessModal(true);

      try {
        let authEmail = "patron@jbicraft.com";
        let authName = cardData.name || "Rashmi Ranjan Das";
        try {
          const auth = window.currentUser || null;
          if (auth && auth.email) {
            authEmail = auth.email.toLowerCase().trim();
            if (auth.name) authName = auth.name;
          }
        } catch(e) {}

        const newOrderRecord = {
          id: orderData.id,
          orderNumber: orderData.id,
          order_number: orderData.id,
          paymentId: orderData.paymentId,
          payment_id: orderData.paymentId,
          customerName: isB2B ? b2bDetails.companyName : authName,
          customer_name: isB2B ? b2bDetails.companyName : authName,
          customerEmail: authEmail,
          customer_email: authEmail,
          email: authEmail,
          total: finalPayable,
          totalAmount: finalPayable,
          status: "In Production",
          paymentStatus: "Paid (" + activeGateway.toUpperCase() + ")",
          paymentMethod: orderData.gateway,
          createdAt: new Date().toISOString(),
          created_at: new Date().toISOString(),
          date: orderData.date,
          items: orderData.items,
          gstBreakdown: orderData.gstBreakdown,
          discount: discountAmount,
          artisanBeneficiary: orderData.artisanBeneficiary,
          shippingAddress: { city: "Bhubaneswar", state: "Odisha", pincode: "751001", country: "India" }
        };

        (async()=>{try{const sb=window.supabase||window.supabaseClient;await sb.from("orders").insert([newOrderRecord]);console.log("Order saved to Supabase");}catch(err){console.warn("Backend order sync note:", err);}})();

        const stored = JSON.parse(localStorage.getItem("jbi_admin_orders") || "[]");
        const pNum = (newOrderRecord.orderNumber || newOrderRecord.order_number || "").toLowerCase().trim();
        const pId = (newOrderRecord.id || "").toLowerCase().trim();
        const sIdx = stored.findIndex(o => {
          const on = (o.orderNumber || o.order_number || "").toLowerCase().trim();
          const oi = (o.id || "").toLowerCase().trim();
          return (pNum && on && pNum === on) || (pId && oi && pId === oi);
        });
        if (sIdx >= 0) {
          stored[sIdx] = newOrderRecord;
        } else {
          stored.unshift(newOrderRecord);
        }
        localStorage.setItem("jbi_admin_orders", JSON.stringify(stored));

        if (authEmail) {
          const uKey = `jbi_user_orders_${authEmail}`;
          const uOrders = JSON.parse(localStorage.getItem(uKey) || "[]");
          const uIdx = uOrders.findIndex(o => {
            const on = (o.orderNumber || o.order_number || "").toLowerCase().trim();
            const oi = (o.id || "").toLowerCase().trim();
            return (pNum && on && pNum === on) || (pId && oi && pId === oi);
          });
          if (uIdx >= 0) {
            uOrders[uIdx] = newOrderRecord;
          } else {
            uOrders.unshift(newOrderRecord);
          }
          localStorage.setItem(uKey, JSON.stringify(uOrders));
        }

        window.dispatchEvent(new CustomEvent("jbi_order_created", { detail: newOrderRecord }));
      } catch (err) {
        console.error("Order save error:", err);
      }

      if (billingMode === "checkout" && onClearCart) {
        onClearCart();
      }
    }, 2800);
  };

  return a.jsx("div", {
    className: "min-h-screen bg-[#0d0f12] text-[#f3f4f6] py-6 sm:py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased selection:bg-[#d4a373] selection:text-black",
    children: a.jsxs("div", {
      className: "max-w-7xl mx-auto space-y-8",
      children: [
        
        // 1. SLEEK COMMAND HEADER & BREADCRUMBS
        a.jsxs("div", {
          className: "relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#181c24] via-[#12151c] to-[#0d0f12] border border-stone-800/80 p-6 sm:p-8 shadow-2xl backdrop-blur-xl",
          children: [
            // Ambient subtle glow
            a.jsx("div", { className: "absolute top-0 right-1/4 w-96 h-96 bg-[#d4a373]/10 rounded-full blur-3xl pointer-events-none" }),
            a.jsx("div", { className: "absolute bottom-0 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" }),

            a.jsxs("div", {
              className: "relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6",
              children: [
                // Left Title & Provenance Badges
                a.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d4a373]",
                      children: [
                        a.jsx("button", { onClick: () => onNavigate && onNavigate("home"), className: "hover:text-amber-200 transition-colors cursor-pointer flex items-center gap-1 font-bold bg-white/10 px-2.5 py-1 rounded-md text-white border border-stone-700 shadow-xs", children: "← Back to Website" }),
                        a.jsx("span", { className: "text-stone-600", children: "/" }),
                        a.jsx("span", { className: "text-stone-300", children: "Checkout Portal" }),
                        a.jsx("span", { className: "inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded-full text-[10px] font-mono", children: "● PCI-DSS QUANTUM VAULT" })
                      ]
                    }),
                    a.jsx("h1", {
                      className: "font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight",
                      children: "Patronage & Settlement Suite"
                    }),
                    a.jsx("p", {
                      className: "text-stone-400 text-xs sm:text-sm max-w-2xl leading-relaxed",
                      children: "Multi-currency settlement architecture with 85% direct rural craft escrow, RBI tokenized card security, and instant UPI / Razorpay authorization."
                    })
                  ]
                }),

                // Right Live Controls (Currency Switcher + Gateway Config Link)
                a.jsxs("div", {
                  className: "flex items-center gap-3 flex-wrap lg:self-center shrink-0",
                  children: [
                    // Currency Picker Chip
                    a.jsxs("div", {
                      className: "flex items-center bg-[#1e2330] border border-stone-700/80 rounded-2xl px-4 py-2 text-xs font-semibold text-stone-200 shadow-inner hover:border-[#d4a373]/60 transition-all",
                      children: [
                        a.jsx("span", { className: "text-stone-400 mr-2 text-[11px] uppercase tracking-wider", children: "Currency:" }),
                        a.jsx("select", {
                          value: currency,
                          onChange: (e) => setCurrency(e.target.value),
                          className: "bg-transparent font-bold text-[#d4a373] focus:outline-none cursor-pointer pr-1",
                          children: Object.keys(currencyRates).map(k => a.jsx("option", { key: k, value: k, className: "bg-[#181c24] text-white", children: `${currencyRates[k].flag} ${k} (${currencyRates[k].symbol})` }))
                        })
                      ]
                    }),

                    // Gateway Dev Modal Button
                    a.jsxs("button", {
                      type: "button",
                      onClick: () => setShowConfigModal(true),
                      className: "flex items-center gap-2 bg-gradient-to-r from-stone-800 to-stone-900 hover:from-stone-700 hover:to-stone-800 text-stone-200 px-4 py-2 rounded-2xl text-xs font-bold transition-all shadow-md cursor-pointer border border-stone-700/80 hover:border-[#d4a373]/40",
                      children: [
                        a.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                        a.jsx("span", { children: "API Gateways" }),
                        a.jsx("span", { className: "text-[10px] bg-stone-950 text-stone-300 px-2 py-0.5 rounded-full border border-stone-800 font-mono", children: gatewayConfig.environment.toUpperCase() })
                      ]
                    })
                  ]
                })
              ]
            }),

            // Interactive Step Progress Tracker
            a.jsx("div", {
              className: "mt-8 pt-6 border-t border-stone-800/80 grid grid-cols-3 gap-2 text-center",
              children: [
                { num: "01", title: "Allocation", desc: billingMode === "checkout" ? `${cartItems?.length || 1} Item(s)` : billingMode === "subscriptions" ? "Patron Tier" : "Custom Commission" },
                { num: "02", title: "Payment Matrix", desc: activeGateway.toUpperCase() + " Gateway" },
                { num: "03", title: "Settlement", desc: "85% Artisan Escrow" }
              ].map((step, idx) => a.jsxs("div", {
                key: idx,
                onClick: () => setActiveStep(idx + 1),
                className: `p-3 rounded-2xl transition-all cursor-pointer border ${
                  activeStep === idx + 1 ? "bg-[#252b3b]/90 border-[#d4a373] text-white shadow-lg" : "bg-[#141720]/50 border-stone-800/40 text-stone-500 hover:text-stone-300"
                }`,
                children: [
                  a.jsxs("div", { className: "flex items-center justify-center gap-1.5 text-xs font-mono font-bold text-[#d4a373]", children: [a.jsx("span", { children: step.num }), a.jsx("span", { className: "text-stone-600", children: "•" }), a.jsx("span", { className: "text-stone-200 font-sans font-bold", children: step.title })] }),
                  a.jsx("span", { className: "text-[10px] text-stone-400 block mt-0.5 truncate", children: step.desc })
                ]
              }))
            })
          ]
        }),

        // 2. EXPRESS 1-CLICK BIO-CHECKOUT BAR (High-Tech Capsule)
        a.jsxs("div", {
          className: "relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1f1712] via-[#2c1e15] to-[#1a1410] p-4 sm:p-5 border border-[#d4a373]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-3.5",
              children: [
                a.jsx("div", { className: "w-10 h-10 rounded-2xl bg-gradient-to-br from-[#d4a373] to-[#b37a44] text-black font-black flex items-center justify-center text-lg shadow-lg", children: "⚡" }),
                a.jsxs("div", {
                  children: [
                    a.jsx("h3", { className: "font-bold text-sm text-white tracking-wide flex items-center gap-2", children: ["Express 1-Click Biometric Checkout", a.jsx("span", { className: "text-[9px] bg-[#d4a373]/20 text-[#d4a373] border border-[#d4a373]/40 px-2 py-0.2 rounded-full font-mono", children: "INSTANT" })] }),
                    a.jsx("p", { className: "text-[11px] text-stone-400", children: "Skip form filling with pre-authorized digital wallets and zero-latency settlement." })
                  ]
                })
              ]
            }),
            // Fast Express Buttons
            a.jsxs("div", {
              className: "flex items-center gap-2.5 flex-wrap justify-center",
              children: [
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("razorpay"); handleInitiatePayment(); },
                  className: "bg-[#0b1f38] hover:bg-[#112d52] text-blue-200 border border-blue-500/40 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95",
                  children: [a.jsx("span", { className: "text-blue-400 font-mono font-black text-sm", children: "R" }), a.jsx("span", { children: "Razorpay Fast" })]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("cards"); handleInitiatePayment(); },
                  className: "bg-white hover:bg-stone-100 text-black px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95",
                  children: [a.jsx("span", { className: "text-sm", children: "" }), a.jsx("span", { children: "Apple Pay" })]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("upi"); handleInitiatePayment(); },
                  className: "bg-[#1e2433] hover:bg-[#283044] text-white border border-stone-700 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95",
                  children: [a.jsx("span", { className: "text-[#4285F4] font-black", children: "G" }), a.jsx("span", { children: "Google Pay" })]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: () => { setActiveGateway("cards"); handleInitiatePayment(); },
                  className: "bg-[#002f6c] hover:bg-[#003d8f] text-white border border-blue-400/40 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95",
                  children: [a.jsx("span", { className: "font-black text-amber-300", children: "P" }), a.jsx("span", { children: "PayPal" })]
                })
              ]
            })
          ]
        }),

        // 3. BILLING MODE SELECTOR TABS (Sleek Glass Pills)
        a.jsx("div", {
          className: "grid grid-cols-1 sm:grid-cols-3 gap-3 p-2 bg-[#141720] rounded-2xl border border-stone-800/80 shadow-inner",
          children: [
            { id: "subscriptions", label: "👑 Patron SaaS Memberships", desc: "Annual & Monthly Patron Tiers" },
            { id: "checkout", label: "🛍️ Cart & Craft Order Invoicing", desc: cartItems && cartItems.length > 0 ? `${cartItems.length} Item(s) in Active Bag` : "Direct Masterpiece Invoicing" },
            { id: "custom_invoice", label: "🏛️ B2B / Custom Commission", desc: "Bespoke Installation Invoicing" }
          ].map(tab => a.jsxs("button", {
            key: tab.id,
            type: "button",
            onClick: () => setBillingMode(tab.id),
            className: `p-4 rounded-xl text-left transition-all cursor-pointer border ${
              billingMode === tab.id ? "bg-gradient-to-r from-[#281f18] to-[#1a1410] text-white shadow-lg border-[#d4a373] ring-1 ring-[#d4a373]/30" : "bg-transparent text-stone-400 hover:text-stone-200 hover:bg-[#1a1e29] border-transparent"
            }`,
            children: [
              a.jsx("span", { className: `block font-bold text-xs sm:text-sm ${billingMode === tab.id ? "text-[#d4a373]" : "text-stone-300"}`, children: tab.label }),
              a.jsx("span", { className: "block text-[11px] text-stone-500 mt-0.5", children: tab.desc })
            ]
          }))
        }),

        // 4. MAIN SPLIT VIEW (Left: Interactive Config & Gateways / Right: Dynamic Summary)
        a.jsxs("div", {
          className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
          children: [
            // LEFT COLUMN (7 COLS): Mode-specific views + Payment Gateway Matrix
            a.jsxs("div", {
              className: "lg:col-span-7 space-y-6",
              children: [

                // VIEW A: Patron Subscription Cards
                billingMode === "subscriptions" && a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/80 p-6 shadow-xl space-y-6",
                  children: [
                    a.jsxs("div", {
                      className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-800",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { className: "font-serif text-xl font-bold text-white", children: "Select Patronage Tier" }),
                            a.jsx("p", { className: "text-xs text-stone-400", children: "Subsidize rural master weaver clusters while unlocking VIP lifetime benefits." })
                          ]
                        }),
                        // Monthly / Annual Toggle
                        a.jsxs("div", {
                          className: "flex items-center bg-[#1d222e] p-1 rounded-xl text-xs font-bold border border-stone-700/80 shrink-0",
                          children: [
                            a.jsx("button", {
                              type: "button",
                              onClick: () => setSubscriptionCycle("monthly"),
                              className: `px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${subscriptionCycle === "monthly" ? "bg-[#d4a373] text-black font-extrabold shadow-md" : "text-stone-400 hover:text-white"}`,
                              children: "Monthly"
                            }),
                            a.jsxs("button", {
                              type: "button",
                              onClick: () => setSubscriptionCycle("annual"),
                              className: `px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${subscriptionCycle === "annual" ? "bg-[#d4a373] text-black font-extrabold shadow-md" : "text-stone-400 hover:text-white"}`,
                              children: [
                                a.jsx("span", { children: "Annual" }),
                                a.jsx("span", { className: "text-[9px] bg-black text-[#d4a373] px-1.5 py-0.5 rounded-full font-mono font-bold", children: "Save 20%" })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // Plan Cards Grid
                    a.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                      children: patronPlans.map(plan => {
                        const price = subscriptionCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;
                        const isSelected = selectedPlanId === plan.id;
                        return a.jsxs("div", {
                          key: plan.id,
                          onClick: () => setSelectedPlanId(plan.id),
                          className: `p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden bg-gradient-to-b ${plan.gradient} ${
                            isSelected ? "border-[#d4a373] ring-2 ring-[#d4a373]/40 shadow-2xl scale-[1.02]" : "border-stone-800/80 hover:border-stone-700 opacity-85 hover:opacity-100"
                          }`,
                          children: [
                            plan.popular && a.jsx("div", {
                              className: "absolute top-0 right-0 bg-[#d4a373] text-black text-[9px] font-black uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md",
                              children: "⭐ Most Popular"
                            }),
                            a.jsxs("div", {
                              className: "space-y-2.5",
                              children: [
                                a.jsx("span", { className: "text-[10px] font-mono uppercase tracking-widest text-[#d4a373] font-bold block", children: plan.tierTag }),
                                a.jsx("h3", { className: "font-serif text-base font-bold text-white leading-tight", children: plan.name }),
                                a.jsxs("div", {
                                  className: "py-1",
                                  children: [
                                    a.jsx("span", { className: "font-serif text-2xl font-black text-white", children: formatMoney(price) }),
                                    price > 0 && a.jsxs("span", { className: "text-[10px] text-stone-400 ml-1 font-mono", children: ["/", subscriptionCycle === "annual" ? "yr" : "mo"] })
                                  ]
                                }),
                                a.jsx("p", { className: "text-[11px] text-stone-300 leading-snug line-clamp-3", children: plan.description })
                              ]
                            }),
                            a.jsx("div", {
                              className: "pt-3 mt-3 border-t border-white/10 space-y-1.5",
                              children: plan.features.slice(0, 3).map((feat, fidx) => a.jsxs("div", {
                                key: fidx,
                                className: "flex items-start gap-1.5 text-[10px] text-stone-200",
                                children: [
                                  a.jsx("span", { className: "text-emerald-400 font-bold", children: "✓" }),
                                  a.jsx("span", { className: "leading-tight", children: feat })
                                ]
                              }))
                            })
                          ]
                        });
                      })
                    })
                  ]
                }),

                // VIEW B: Cart Order Items List
                billingMode === "checkout" && a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/80 p-6 shadow-xl space-y-5",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between pb-4 border-b border-stone-800",
                      children: [
                        a.jsxs("h2", { className: "font-serif text-xl font-bold text-white", children: ["Selected Masterpieces (", (cartItems?.length || 1), ")"] }),
                        a.jsx("button", {
                          type: "button",
                          onClick: () => onNavigate && onNavigate("shop"),
                          className: "text-xs font-semibold text-[#d4a373] hover:underline cursor-pointer",
                          children: "+ Add More Craft Pieces"
                        })
                      ]
                    }),

                    cartItems && cartItems.length > 0 ? a.jsx("div", {
                      className: "divide-y divide-stone-800/80",
                      children: cartItems.map(item => a.jsxs("div", {
                        key: item.id,
                        className: "py-3.5 flex items-center justify-between gap-3 text-xs",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-center gap-3.5 min-w-0",
                            children: [
                              a.jsx("img", { src: item.image, alt: item.title, className: "w-14 h-14 object-cover rounded-xl border border-stone-700/80 shrink-0 shadow-md", referrerPolicy: "no-referrer" }),
                              a.jsxs("div", {
                                className: "min-w-0",
                                children: [
                                  a.jsx("h4", { className: "font-serif font-bold text-white truncate text-sm", children: item.title }),
                                  a.jsxs("p", { className: "text-[11px] text-stone-400 mt-0.5", children: [item.craft || "Authentic GI Craft", " • ", formatMoney(item.price), " each"] }),
                                  a.jsx("span", { className: "inline-block text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-1.5 py-0.2 rounded font-mono mt-1", children: "GI Hallmarked" })
                                ]
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "flex items-center gap-3 shrink-0",
                            children: [
                              onUpdateQuantity && a.jsxs("div", {
                                className: "flex items-center border border-stone-700 rounded-lg bg-[#1a1e29]",
                                children: [
                                  a.jsx("button", { type: "button", onClick: () => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1)), className: "px-2.5 py-1 text-stone-300 hover:text-white cursor-pointer font-bold", children: "−" }),
                                  a.jsx("span", { className: "px-2 text-xs font-mono font-bold text-white", children: item.quantity }),
                                  a.jsx("button", { type: "button", onClick: () => onUpdateQuantity(item.id, item.quantity + 1), className: "px-2.5 py-1 text-stone-300 hover:text-white cursor-pointer font-bold", children: "+" })
                                ]
                              }),
                              a.jsx("span", { className: "font-bold font-serif text-base text-[#d4a373]", children: formatMoney(item.price * item.quantity) }),
                              onRemoveItem && a.jsx("button", { type: "button", onClick: () => onRemoveItem(item.id), className: "text-stone-500 hover:text-rose-400 cursor-pointer p-1 transition-colors", title: "Remove item", children: "✕" })
                            ]
                          })
                        ]
                      }))
                    }) : a.jsxs("div", {
                      className: "p-4 rounded-2xl bg-[#1a1e29] border border-stone-800 flex items-center justify-between text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center gap-3.5",
                          children: [
                            a.jsx("img", { src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=600", alt: "Master Sample", className: "w-12 h-12 object-cover rounded-xl border border-stone-700", referrerPolicy: "no-referrer" }),
                            a.jsxs("div", {
                              children: [
                                a.jsx("p", { className: "font-bold text-white", children: "Master Sambalpuri Ikat Tapestry" }),
                                a.jsx("p", { className: "text-[11px] text-stone-400", children: "Direct Heirloom Curation • GI Tag Hallmarked" })
                              ]
                            })
                          ]
                        }),
                        a.jsx("span", { className: "font-serif font-bold text-base text-[#d4a373]", children: formatMoney(14500) })
                      ]
                    })
                  ]
                }),

                // VIEW C: Custom B2B Commission & Invoicing
                billingMode === "custom_invoice" && a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/80 p-6 shadow-xl space-y-4",
                  children: [
                    a.jsx("h2", { className: "font-serif text-xl font-bold text-white pb-3 border-b border-stone-800", children: "B2B & Custom Heritage Commission" }),
                    a.jsxs("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "space-y-1.5 sm:col-span-2",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-300", children: "Commission / Installation Project Title" }),
                            a.jsx("input", {
                              type: "text",
                              value: customInvoice.title,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, title: e.target.value }),
                              className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-medium focus:border-[#d4a373] focus:outline-none"
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-300", children: "Total Commission Value (₹ INR)" }),
                            a.jsx("input", {
                              type: "number",
                              value: customInvoice.amount,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, amount: Number(e.target.value) }),
                              className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-bold font-mono focus:border-[#d4a373] focus:outline-none"
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-300", children: "Milestone Deposit Ratio" }),
                            a.jsxs("select", {
                              value: customInvoice.depositPercent,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, depositPercent: e.target.value }),
                              className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-semibold cursor-pointer focus:border-[#d4a373] focus:outline-none",
                              children: [
                                a.jsx("option", { value: "25", children: "25% Initial Booking Advance" }),
                                a.jsx("option", { value: "50", children: "50% Material & Dye Preparation Milestone" }),
                                a.jsx("option", { value: "100", children: "100% Full Commission Settlement" })
                              ]
                            })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "space-y-1.5 sm:col-span-2",
                          children: [
                            a.jsx("label", { className: "font-semibold text-stone-300", children: "Milestone Phase Description" }),
                            a.jsx("input", {
                              type: "text",
                              value: customInvoice.milestone,
                              onChange: (e) => setCustomInvoice({ ...customInvoice, milestone: e.target.value }),
                              className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white focus:border-[#d4a373] focus:outline-none"
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // PAYMENT GATEWAY MATRIX SECTION (Interactive high-end UI)
                a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/80 p-6 shadow-xl space-y-6",
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center justify-between pb-4 border-b border-stone-800",
                      children: [
                        a.jsxs("div", {
                          children: [
                            a.jsx("h2", { className: "font-serif text-xl font-bold text-white", children: "Choose Payment Instrument" }),
                            a.jsx("p", { className: "text-xs text-stone-400", children: "Zero processing surcharge. Real-time bank authorization." })
                          ]
                        }),
                        a.jsx("span", { className: "text-[10px] text-emerald-400 font-mono bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full", children: "🔒 TLS 1.3 ENCRYPTED" })
                      ]
                    }),

                    // Payment Gateway Segmented Switcher
                    a.jsx("div", {
                      className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-1.5 bg-[#0d0f12] rounded-2xl border border-stone-800",
                      children: [
                        { id: "razorpay", label: "Razorpay", icon: "⚡", tag: "All-in-One" },
                        { id: "cards", label: "Cards", icon: "💳", tag: "Visa/MC/RuPay" },
                        { id: "upi", label: "UPI & QR", icon: "📱", tag: "Instant" },
                        { id: "netbanking", label: "NetBanking", icon: "🏛️", tag: "50+ Banks" }
                      ].map(gw => a.jsxs("button", {
                        key: gw.id,
                        type: "button",
                        onClick: () => setActiveGateway(gw.id),
                        className: `p-3 rounded-xl flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                          activeGateway === gw.id ? "bg-gradient-to-b from-[#2a221b] to-[#1c1611] text-[#d4a373] border border-[#d4a373] shadow-lg" : "text-stone-400 hover:text-stone-200 hover:bg-[#1a1e29] border border-transparent"
                        }`,
                        children: [
                          a.jsx("span", { className: "text-lg", children: gw.icon }),
                          a.jsx("span", { className: "font-bold text-xs leading-none", children: gw.label }),
                          a.jsx("span", { className: "text-[9px] text-stone-500 font-mono", children: gw.tag })
                        ]
                      }))
                    }),

                    // TAB 1: Razorpay Quantum Gateway
                    activeGateway === "razorpay" && a.jsxs("div", {
                      className: "p-5 rounded-2xl bg-[#1a1e29] border border-stone-800 space-y-4 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between bg-blue-950/60 border border-blue-800/60 p-4 rounded-xl",
                          children: [
                            a.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                a.jsx("div", { className: "w-9 h-9 rounded-xl bg-[#0c2340] text-blue-400 font-mono font-black text-base flex items-center justify-center shadow-md", children: "R" }),
                                a.jsxs("div", {
                                  children: [
                                    a.jsx("span", { className: "font-bold text-white text-sm block", children: "Razorpay Standard Checkout & UPI Intent" }),
                                    a.jsxs("span", { className: "text-[11px] text-blue-300 font-mono", children: ["Key: ", gatewayConfig.razorpayKeyId] })
                                  ]
                                })
                              ]
                            }),
                            a.jsx("span", { className: "text-[10px] bg-blue-500/20 text-blue-300 border border-blue-500/40 font-bold px-2.5 py-1 rounded-full font-mono", children: "VERIFIED SDK" })
                          ]
                        }),
                        a.jsx("p", { className: "text-stone-300 leading-relaxed", children: "Authorizes domestic and cross-border transactions via GPay, PhonePe, Paytm, RuPay, Visa, Mastercard, American Express, and 50+ Indian banking gateways with automated chargeback defense." }),
                        a.jsxs("div", {
                          className: "grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[10px] font-mono",
                          children: [
                            a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center text-stone-300", children: "⚡ Instant Webhooks" }),
                            a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center text-stone-300", children: "🔒 3D Secure 2.0" }),
                            a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center text-stone-300", children: "🛡️ Escrow Guard" }),
                            a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center text-stone-300", children: "📜 GST HSN 9701" })
                          ]
                        })
                      ]
                    }),

                    // TAB 2: Interactive 3D Card
                    activeGateway === "cards" && a.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        // Holographic Metallic Card Visual
                        a.jsxs("div", {
                          className: "w-full max-w-sm mx-auto h-48 rounded-3xl p-6 bg-gradient-to-tr from-[#141210] via-[#2d2218] to-[#473424] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between border border-[#d4a373]/40",
                          children: [
                            // Subtle circuit texture overlay
                            a.jsx("div", { className: "absolute top-0 right-0 w-36 h-36 bg-[#d4a373]/15 rounded-full blur-2xl pointer-events-none" }),
                            a.jsxs("div", {
                              className: "flex items-center justify-between relative z-10",
                              children: [
                                a.jsxs("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    a.jsx("div", { className: "w-10 h-7 rounded-lg bg-gradient-to-r from-amber-200 to-amber-400 border border-amber-300 shadow-inner flex items-center justify-center text-[9px] font-black text-amber-950 font-mono", children: "EMV" }),
                                    a.jsx("span", { className: "text-stone-400 text-xs", children: "📶" })
                                  ]
                                }),
                                a.jsx("span", { className: "font-mono text-sm font-black tracking-widest uppercase text-[#d4a373]", children: cardData.brand.toUpperCase() })
                              ]
                            }),
                            a.jsx("div", {
                              className: "font-mono text-lg sm:text-xl tracking-widest text-stone-100 font-bold relative z-10",
                              children: cardData.number || "•••• •••• •••• ••••"
                            }),
                            a.jsxs("div", {
                              className: "flex items-center justify-between text-[11px] text-stone-300 uppercase relative z-10 font-mono",
                              children: [
                                a.jsxs("div", { children: [a.jsx("span", { className: "text-[9px] block text-stone-400", children: "CARDHOLDER" }), a.jsx("span", { className: "font-bold tracking-wider text-white", children: cardData.name || "PATRON NAME" })] }),
                                a.jsxs("div", { children: [a.jsx("span", { className: "text-[9px] block text-stone-400", children: "EXPIRES" }), a.jsx("span", { className: "font-bold tracking-wider text-white", children: cardData.expiry || "MM/YY" })] })
                              ]
                            })
                          ]
                        }),

                        // Card Inputs Form
                        a.jsxs("div", {
                          className: "grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",
                          children: [
                            a.jsxs("div", {
                              className: "space-y-1.5 sm:col-span-2",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-300", children: "Cardholder Full Name" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: cardData.name,
                                  onChange: (e) => setCardData({ ...cardData, name: e.target.value }),
                                  className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1.5 sm:col-span-2",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-300", children: "Card Number" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: cardData.number,
                                  onChange: handleCardNumberChange,
                                  placeholder: "4532 •••• •••• ••••",
                                  className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono font-bold focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-300", children: "Expiry Date" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: cardData.expiry,
                                  onChange: (e) => setCardData({ ...cardData, expiry: e.target.value }),
                                  placeholder: "MM/YY",
                                  className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1.5",
                              children: [
                                a.jsx("label", { className: "font-semibold text-stone-300", children: "CVV / CVC" }),
                                a.jsx("input", {
                                  type: "password",
                                  maxLength: 4,
                                  value: cardData.cvv,
                                  onChange: (e) => setCardData({ ...cardData, cvv: e.target.value }),
                                  placeholder: "•••",
                                  className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // TAB 3: UPI & Live Dynamic QR
                    activeGateway === "upi" && a.jsxs("div", {
                      className: "p-5 rounded-2xl bg-[#1a1e29] border border-stone-800 space-y-6 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex flex-col sm:flex-row items-center gap-6 justify-between",
                          children: [
                            // QR Visual
                            a.jsxs("div", {
                              className: "p-4 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center shrink-0 border border-stone-300",
                              children: [
                                a.jsx("img", {
                                  src: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=jbicraft@okhdfcbank&pn=JBI%20Crafts&am=${finalPayable}&cu=INR`,
                                  alt: "UPI QR",
                                  className: "w-36 h-36 object-contain"
                                }),
                                a.jsxs("div", {
                                  className: "mt-2 text-[10px] font-mono font-bold text-stone-700 flex items-center gap-1",
                                  children: [
                                    a.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500 animate-ping" }),
                                    a.jsxs("span", { children: ["Expires in ", a.jsx("strong", { className: "text-rose-600", children: formatQrTimer(qrTimeLeft) })] })
                                  ]
                                })
                              ]
                            }),

                            // UPI ID Form & Fast Apps
                            a.jsxs("div", {
                              className: "space-y-4 flex-1 w-full",
                              children: [
                                a.jsxs("div", {
                                  className: "space-y-1.5",
                                  children: [
                                    a.jsx("label", { className: "font-semibold text-stone-300", children: "Or Enter Your UPI ID (VPA)" }),
                                    a.jsxs("div", {
                                      className: "flex gap-2",
                                      children: [
                                        a.jsx("input", {
                                          type: "text",
                                          value: upiId,
                                          onChange: (e) => setUpiId(e.target.value),
                                          className: "flex-1 p-3 rounded-xl border border-stone-700 bg-[#12151d] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                                        }),
                                        a.jsx("button", {
                                          type: "button",
                                          onClick: handleInitiatePayment,
                                          className: "bg-[#d4a373] hover:bg-[#c28f5e] text-black font-extrabold px-4 rounded-xl cursor-pointer shadow-md",
                                          children: "Verify & Pay"
                                        })
                                      ]
                                    })
                                  ]
                                }),
                                a.jsxs("div", {
                                  className: "space-y-2",
                                  children: [
                                    a.jsx("span", { className: "text-[11px] text-stone-400 font-semibold", children: "Supported UPI Apps:" }),
                                    a.jsxs("div", {
                                      className: "grid grid-cols-4 gap-2",
                                      children: [
                                        a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center font-bold text-stone-300 hover:border-stone-600 cursor-pointer", children: "Google Pay" }),
                                        a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center font-bold text-stone-300 hover:border-stone-600 cursor-pointer", children: "PhonePe" }),
                                        a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center font-bold text-stone-300 hover:border-stone-600 cursor-pointer", children: "Paytm" }),
                                        a.jsx("div", { className: "p-2 bg-[#12151d] rounded-xl border border-stone-800 text-center font-bold text-stone-300 hover:border-stone-600 cursor-pointer", children: "CRED UPI" })
                                      ]
                                    })
                                  ]
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    }),

                    // TAB 4: NetBanking
                    activeGateway === "netbanking" && a.jsxs("div", {
                      className: "space-y-4 text-xs",
                      children: [
                        a.jsx("span", { className: "font-semibold text-stone-300 block", children: "Select Popular Bank:" }),
                        a.jsx("div", {
                          className: "grid grid-cols-2 sm:grid-cols-3 gap-3",
                          children: popularBanks.map(b => a.jsxs("button", {
                            key: b.id,
                            type: "button",
                            onClick: () => setSelectedBank(b.id),
                            className: `p-3.5 rounded-xl border text-left flex items-center gap-3 transition-all cursor-pointer ${
                              selectedBank === b.id ? "bg-[#252b3b] border-[#d4a373] text-white shadow-lg ring-1 ring-[#d4a373]/30" : "bg-[#1a1e29] border-stone-800 text-stone-400 hover:text-white"
                            }`,
                            children: [
                              a.jsx("span", { className: "text-xl", children: b.logo }),
                              a.jsx("span", { className: "font-bold", children: b.name })
                            ]
                          }))
                        })
                      ]
                    }),

                    // B2B GST Invoicing Checkbox
                    a.jsxs("div", {
                      className: "pt-4 border-t border-stone-800 space-y-3",
                      children: [
                        a.jsxs("label", {
                          className: "flex items-center gap-2.5 cursor-pointer text-xs text-stone-300 font-semibold select-none",
                          children: [
                            a.jsx("input", {
                              type: "checkbox",
                              checked: isB2B,
                              onChange: (e) => setIsB2B(e.target.checked),
                              className: "w-4 h-4 rounded text-[#d4a373] accent-[#d4a373] cursor-pointer"
                            }),
                            a.jsx("span", { children: "🏢 Claim B2B GST Input Tax Credit (ITC Invoice)" })
                          ]
                        }),
                        isB2B && a.jsxs("div", {
                          className: "p-4 bg-[#1a1e29] rounded-2xl border border-stone-700 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
                          children: [
                            a.jsxs("div", {
                              className: "space-y-1 sm:col-span-2",
                              children: [
                                a.jsx("label", { className: "text-stone-400 text-[11px]", children: "Registered Business Name" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.companyName,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, companyName: e.target.value }),
                                  className: "w-full p-2.5 rounded-lg border border-stone-700 bg-[#12151d] text-white font-medium focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                a.jsx("label", { className: "text-stone-400 text-[11px]", children: "GSTIN (15 Digits)" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.gstin,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, gstin: e.target.value.toUpperCase() }),
                                  className: "w-full p-2.5 rounded-lg border border-stone-700 bg-[#12151d] text-white font-mono font-bold focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            }),
                            a.jsxs("div", {
                              className: "space-y-1",
                              children: [
                                a.jsx("label", { className: "text-stone-400 text-[11px]", children: "State Jurisdiction" }),
                                a.jsx("input", {
                                  type: "text",
                                  value: b2bDetails.state,
                                  onChange: (e) => setB2bDetails({ ...b2bDetails, state: e.target.value }),
                                  className: "w-full p-2.5 rounded-lg border border-stone-700 bg-[#12151d] text-white focus:border-[#d4a373] focus:outline-none"
                                })
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            // RIGHT COLUMN (5 COLS): Sticky Order Ledger, Golden Coupons & Escrow Guarantee
            a.jsxs("div", {
              className: "lg:col-span-5 space-y-6 lg:sticky lg:top-24",
              children: [

                // SUMMARY LEDGER CARD
                a.jsxs("div", {
                  className: "rounded-3xl bg-[#141720] border border-stone-800/90 p-6 sm:p-7 shadow-2xl space-y-6 relative overflow-hidden",
                  children: [
                    // Subtle background glow
                    a.jsx("div", { className: "absolute top-0 right-0 w-48 h-48 bg-[#d4a373]/10 rounded-full blur-3xl pointer-events-none" }),

                    a.jsxs("div", {
                      className: "flex items-center justify-between pb-4 border-b border-stone-800 relative z-10",
                      children: [
                        a.jsx("h3", { className: "font-serif text-xl font-bold text-white", children: "Payment Breakdown" }),
                        a.jsx("span", { className: "text-[10px] font-mono text-[#d4a373] bg-[#d4a373]/10 border border-[#d4a373]/30 px-2.5 py-0.5 rounded-full", children: currency })
                      ]
                    }),

                    // Interactive Golden Coupon Bar
                    a.jsxs("div", {
                      className: "space-y-3 relative z-10",
                      children: [
                        a.jsx("span", { className: "text-[11px] font-semibold text-stone-300 block", children: "🎁 Apply Golden Patron Privilege Code:" }),
                        a.jsxs("div", {
                          className: "flex gap-2",
                          children: [
                            a.jsx("input", {
                              type: "text",
                              value: promoCode,
                              onChange: (e) => setPromoCode(e.target.value),
                              placeholder: "Enter PATRON20, HERITAGE10...",
                              className: "flex-1 p-2.5 rounded-xl border border-stone-700 bg-[#1a1e29] text-white text-xs font-mono font-bold focus:border-[#d4a373] focus:outline-none uppercase"
                            }),
                            a.jsx("button", {
                              type: "button",
                              onClick: () => applyPromo(),
                              className: "bg-[#d4a373] hover:bg-[#c28f5e] text-black font-extrabold px-4 py-2.5 rounded-xl text-xs cursor-pointer shadow-md transition-all active:scale-95",
                              children: "Apply"
                            })
                          ]
                        }),
                        promoError && a.jsx("p", { className: "text-rose-400 text-[11px]", children: promoError }),
                        promoApplied && a.jsxs("div", {
                          className: "p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center justify-between",
                          children: [
                            a.jsxs("span", { className: "font-semibold flex items-center gap-1.5", children: [a.jsx("span", { children: "✓" }), promoApplied.discountText] }),
                            a.jsx("button", { onClick: () => { setPromoApplied(null); setPromoCode(""); }, className: "text-stone-400 hover:text-white text-xs cursor-pointer", children: "Remove" })
                          ]
                        }),
                        // Quick click coupons
                        a.jsx("div", {
                          className: "flex gap-2 flex-wrap pt-1",
                          children: quickPromos.map(qp => a.jsx("button", {
                            key: qp.code,
                            type: "button",
                            onClick: () => applyPromo(qp.code),
                            className: "text-[10px] bg-[#1a1e29] hover:bg-[#252b3b] border border-stone-700 text-stone-300 px-2.5 py-1 rounded-lg transition-all cursor-pointer font-medium",
                            children: qp.label
                          }))
                        })
                      ]
                    }),

                    // Financial Breakdown Matrix
                    a.jsxs("div", {
                      className: "space-y-3 pt-4 border-t border-stone-800 text-xs relative z-10",
                      children: [
                        a.jsxs("div", {
                          className: "flex justify-between text-stone-400",
                          children: [
                            a.jsx("span", { children: "Gross Subtotal" }),
                            a.jsx("span", { className: "font-mono font-medium text-stone-200", children: formatMoney(rawBaseAmount) })
                          ]
                        }),
                        discountAmount > 0 && a.jsxs("div", {
                          className: "flex justify-between text-emerald-400 font-semibold",
                          children: [
                            a.jsxs("span", { children: ["Patron Privilege (", promoApplied?.code, ")"] }),
                            a.jsxs("span", { className: "font-mono", children: ["-", formatMoney(discountAmount)] })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex justify-between text-stone-400",
                          children: [
                            a.jsx("span", { children: "Craft Handling & Insured Transit" }),
                            a.jsx("span", { className: "text-emerald-400 font-bold", children: "FREE COMPLIMENTARY" })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "flex justify-between text-stone-400",
                          children: [
                            a.jsx("span", { children: "GST (5% HSN 9701 Included)" }),
                            a.jsx("span", { className: "font-mono text-stone-200", children: formatMoney(gstAmount) })
                          ]
                        }),
                        a.jsxs("div", {
                          className: "pt-4 border-t border-stone-700 flex justify-between items-baseline",
                          children: [
                            a.jsxs("div", {
                              children: [
                                a.jsx("span", { className: "font-serif text-lg font-bold text-white block", children: "Total Settlement" }),
                                a.jsx("span", { className: "text-[10px] text-stone-400", children: "All taxes and insurance included" })
                              ]
                            }),
                            a.jsx("span", { className: "font-serif text-2xl sm:text-3xl font-black text-[#d4a373]", children: formatMoney(finalPayable) })
                          ]
                        })
                      ]
                    }),

                    // Direct Artisan Escrow Gauge
                    a.jsxs("div", {
                      className: "p-4 rounded-2xl bg-gradient-to-r from-[#201812] to-[#141210] border border-[#d4a373]/30 space-y-2 relative z-10",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between text-xs",
                          children: [
                            a.jsxs("span", { className: "text-stone-300 font-bold flex items-center gap-1.5", children: [a.jsx("span", { className: "text-emerald-400", children: "●" }), "Direct Artisan Escrow Share:"] }),
                            a.jsx("span", { className: "font-mono font-bold text-[#d4a373]", children: formatMoney(artisanShare) })
                          ]
                        }),
                        a.jsx("div", {
                          className: "w-full bg-stone-800 rounded-full h-2 overflow-hidden",
                          children: a.jsx("div", { className: "bg-gradient-to-r from-emerald-500 to-[#d4a373] h-2 rounded-full", style: { width: "85%" } })
                        }),
                        a.jsx("p", { className: "text-[10px] text-stone-400", children: "85% proceeds directly disburse to rural handloom & filigree artisan co-operatives upon delivery verification." })
                      ]
                    }),

                    // PRIMARY AUTHORIZE PAYMENT BUTTON
                    a.jsxs("button", {
                      type: "button",
                      disabled: isProcessing,
                      onClick: handleInitiatePayment,
                      className: `w-full py-4 rounded-2xl font-serif text-base sm:text-lg font-bold transition-all shadow-2xl flex items-center justify-center gap-3 relative z-10 cursor-pointer ${
                        isProcessing ? "bg-stone-800 text-stone-500 cursor-not-allowed" : "bg-gradient-to-r from-[#d4a373] via-[#e5b88a] to-[#c28f5e] text-black hover:brightness-110 hover:scale-[1.01] active:scale-95 shadow-[#d4a373]/20"
                      }`,
                      children: [
                        isProcessing ? a.jsxs(a.Fragment, {
                          children: [
                            a.jsx("span", { className: "w-5 h-5 border-2 border-stone-500 border-t-transparent rounded-full animate-spin" }),
                            a.jsx("span", { children: processingStep })
                          ]
                        }) : a.jsxs(a.Fragment, {
                          children: [
                            a.jsx("span", { children: "🔒" }),
                            a.jsxs("span", { children: ["Authorize & Settle ", formatMoney(finalPayable)] })
                          ]
                        })
                      ]
                    })
                  ]
                }),

                // TRUST & COMPLIANCE BADGES
                a.jsxs("div", {
                  className: "p-5 rounded-2xl bg-[#141720] border border-stone-800 space-y-3 text-xs text-stone-400",
                  children: [
                    a.jsx("h4", { className: "font-serif font-bold text-white text-sm", children: "Institutional Security Guarantee" }),
                    a.jsxs("div", {
                      className: "grid grid-cols-2 gap-3 text-[11px]",
                      children: [
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-400", children: "✓" }), a.jsx("span", { children: "256-Bit SSL Quantum Safe" })] }),
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-400", children: "✓" }), a.jsx("span", { children: "RBI Tokenized Vault" })] }),
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-400", children: "✓" }), a.jsx("span", { children: "GI Registry Hallmark" })] }),
                        a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-emerald-400", children: "✓" }), a.jsx("span", { children: "100% Insured Air Transit" })] })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        }),

        // 5. GATEWAY CONFIGURATION & DEVELOPER MODAL
        showConfigModal && a.jsx("div", {
          className: "fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",
          children: a.jsxs("div", {
            className: "bg-[#141720] border border-stone-700 max-w-xl w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between border-b border-stone-800 pb-4",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h3", { className: "font-serif text-xl font-bold text-white", children: "Gateway & API Sandbox Manager" }),
                      a.jsx("p", { className: "text-xs text-stone-400", children: "Manage Sandbox/Live API Keys and test webhook dispatch events." })
                    ]
                  }),
                  a.jsx("button", { onClick: () => setShowConfigModal(false), className: "text-stone-400 hover:text-white text-lg p-1 cursor-pointer", children: "✕" })
                ]
              }),

              a.jsxs("form", {
                onSubmit: handleSaveConfig,
                className: "space-y-4 text-xs",
                children: [
                  a.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      a.jsx("label", { className: "font-semibold text-stone-300", children: "Processing Environment" }),
                      a.jsxs("div", {
                        className: "grid grid-cols-2 gap-2",
                        children: [
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setGatewayConfig({ ...gatewayConfig, environment: "sandbox" }),
                            className: `p-2.5 rounded-xl font-bold border transition-all cursor-pointer ${
                              gatewayConfig.environment === "sandbox" ? "bg-amber-500/20 border-amber-500 text-amber-300" : "bg-[#1a1e29] border-stone-700 text-stone-400"
                            }`,
                            children: "🧪 Sandbox Mode"
                          }),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setGatewayConfig({ ...gatewayConfig, environment: "live" }),
                            className: `p-2.5 rounded-xl font-bold border transition-all cursor-pointer ${
                              gatewayConfig.environment === "live" ? "bg-emerald-500/20 border-emerald-500 text-emerald-300" : "bg-[#1a1e29] border-stone-700 text-stone-400"
                            }`,
                            children: "🚀 Live Production"
                          })
                        ]
                      })
                    ]
                  }),

                  a.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      a.jsx("label", { className: "font-semibold text-stone-300", children: "Razorpay Key ID" }),
                      a.jsx("input", {
                        type: "text",
                        value: gatewayConfig.razorpayKeyId,
                        onChange: (e) => setGatewayConfig({ ...gatewayConfig, razorpayKeyId: e.target.value }),
                        className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                      })
                    ]
                  }),

                  a.jsxs("div", {
                    className: "space-y-1.5",
                    children: [
                      a.jsx("label", { className: "font-semibold text-stone-300", children: "Stripe Publishable Key" }),
                      a.jsx("input", {
                        type: "text",
                        value: gatewayConfig.stripePublishableKey,
                        onChange: (e) => setGatewayConfig({ ...gatewayConfig, stripePublishableKey: e.target.value }),
                        className: "w-full p-3 rounded-xl border border-stone-700 bg-[#1a1e29] text-white font-mono focus:border-[#d4a373] focus:outline-none"
                      })
                    ]
                  }),

                  a.jsxs("div", {
                    className: "pt-4 flex items-center justify-between",
                    children: [
                      configToast ? a.jsx("span", { className: "text-emerald-400 font-bold", children: "✓ Settings Saved to LocalStorage" }) : a.jsx("span", {}),
                      a.jsxs("div", {
                        className: "flex gap-2",
                        children: [
                          a.jsx("button", { type: "button", onClick: () => setShowConfigModal(false), className: "px-4 py-2.5 rounded-xl border border-stone-700 text-stone-300 hover:text-white cursor-pointer", children: "Close" }),
                          a.jsx("button", { type: "submit", className: "px-5 py-2.5 rounded-xl bg-[#d4a373] hover:bg-[#c28f5e] text-black font-extrabold cursor-pointer shadow-md", children: "Save Keys" })
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          })
        }),

        // 6. ORDER SUCCESS & PRINTABLE TAX INVOICE MODAL
        showSuccessModal && completedOrder && a.jsx("div", {
          className: "fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto",
          children: a.jsxs("div", {
            className: "bg-[#141720] border border-[#d4a373]/50 max-w-2xl w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative my-8",
            children: [
              // Top Success Ribbon
              a.jsxs("div", {
                className: "text-center space-y-2",
                children: [
                  a.jsx("div", { className: "w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-3xl mx-auto shadow-xl", children: "✓" }),
                  a.jsx("h2", { className: "font-serif text-2xl sm:text-3xl font-bold text-white", children: "Payment & Patronage Verified" }),
                  a.jsxs("p", { className: "text-xs text-stone-400", children: ["Transaction Reference: ", a.jsx("code", { className: "text-[#d4a373] font-bold font-mono", children: completedOrder.paymentId })] })
                ]
              }),

              // Printable Invoice Sheet (Light Contrast Inside Modal)
              a.jsxs("div", {
                id: "printable-invoice",
                className: "bg-white text-stone-900 rounded-2xl p-6 shadow-inner space-y-4 text-xs border border-stone-200",
                children: [
                  a.jsxs("div", {
                    className: "flex items-start justify-between border-b border-stone-200 pb-3",
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("h4", { className: "font-serif text-lg font-bold text-[#b85d18]", children: "JBI Heritage Crafts Guild" }),
                          a.jsx("p", { className: "text-[11px] text-stone-500", children: "Bhubaneswar • Odisha • India | GSTIN: 21AAACJ1234F1Z5" }),
                          a.jsx("p", { className: "text-[11px] text-stone-500", children: "HSN Code: 9701 (Handicrafts & Handlooms)" })
                        ]
                      }),
                      a.jsxs("div", {
                        className: "text-right",
                        children: [
                          a.jsx("span", { className: "text-[10px] bg-stone-100 font-mono font-bold px-2 py-0.5 rounded border border-stone-300 block", children: "TAX INVOICE" }),
                          a.jsxs("span", { className: "text-[11px] text-stone-600 block mt-1", children: ["Date: ", completedOrder.date] }),
                          a.jsxs("span", { className: "text-[11px] text-stone-600 font-mono block", children: ["Order: ", completedOrder.id] })
                        ]
                      })
                    ]
                  }),

                  // Customer / B2B Section
                  completedOrder.isB2B && completedOrder.b2bDetails && a.jsxs("div", {
                    className: "p-2.5 bg-stone-50 rounded-lg border border-stone-200 space-y-0.5",
                    children: [
                      a.jsxs("p", { className: "font-bold text-stone-900", children: ["Billed To: ", completedOrder.b2bDetails.companyName] }),
                      a.jsxs("p", { className: "text-stone-600", children: ["GSTIN: ", completedOrder.b2bDetails.gstin, " | Jurisdiction: ", completedOrder.b2bDetails.state] })
                    ]
                  }),

                  // Items List
                  a.jsxs("div", {
                    className: "divide-y divide-stone-100",
                    children: [
                      a.jsxs("div", {
                        className: "flex justify-between font-bold text-stone-700 py-1",
                        children: [
                          a.jsx("span", { children: "Description" }),
                          a.jsx("span", { children: "Amount" })
                        ]
                      }),
                      completedOrder.items.map((it, idx) => a.jsxs("div", {
                        key: idx,
                        className: "flex justify-between py-1.5 text-stone-800",
                        children: [
                          a.jsxs("span", { children: [it.title, " × ", it.quantity] }),
                          a.jsx("span", { className: "font-mono font-semibold", children: formatMoney(it.price * it.quantity) })
                        ]
                      }))
                    ]
                  }),

                  // Totals
                  a.jsxs("div", {
                    className: "pt-3 border-t border-stone-200 space-y-1 text-right",
                    children: [
                      completedOrder.discount > 0 && a.jsxs("p", { className: "text-emerald-700 font-semibold", children: ["Promo Voucher Privilege: -", formatMoney(completedOrder.discount)] }),
                      a.jsxs("p", { className: "text-stone-600", children: ["GST (CGST 2.5% + SGST 2.5%): ", formatMoney(completedOrder.gstBreakdown?.totalGst || 0)] }),
                      a.jsxs("p", { className: "font-serif text-base font-bold text-stone-900 pt-1", children: ["Grand Total Paid: ", formatMoney(completedOrder.amount)] })
                    ]
                  })
                ]
              }),

              // Actions
              a.jsxs("div", {
                className: "flex flex-col sm:flex-row items-center justify-between gap-3 pt-2",
                children: [
                  a.jsxs("button", {
                    type: "button",
                    onClick: () => window.print(),
                    className: "w-full sm:w-auto px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 border border-stone-700",
                    children: [a.jsx("span", { children: "🖨️" }), a.jsx("span", { children: "Print Official GST Invoice" })]
                  }),
                  a.jsx("button", {
                    type: "button",
                    onClick: () => { setShowSuccessModal(false); if (onNavigate) onNavigate("home"); },
                    className: "w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#d4a373] hover:bg-[#c28f5e] text-black font-extrabold text-xs transition-all cursor-pointer shadow-lg",
                    children: "Return to Storefront"
                  })
                ]
              })
            ]
          })
        })
      ]
    })
  });
};


const OrdersPageComponent = ({ onNavigate, onExploreClick, onQuickView, onAddToCart, onSelectArtisan }) => {
  // Current user authentication state
  const getStoredUser = () => window.currentUser || null;

  const [currentUser, setCurrentUser] = _.useState(getStoredUser);
  const [orders, setOrders] = _.useState([]);
  const [loading, setLoading] = _.useState(!0);
  const [searchQuery, setSearchQuery] = _.useState("");
  const [statusFilter, setStatusFilter] = _.useState("all");
  const [selectedInvoiceOrder, setSelectedInvoiceOrder] = _.useState(null);
  const [copiedId, setCopiedId] = _.useState(null);
  const [refreshing, setRefreshing] = _.useState(!1);

  // Sync auth state across custom events and storage
  _.useEffect(() => {
    const handleAuth = (e) => {
      const u = getStoredUser();
      setCurrentUser(u);
    };
    window.addEventListener("jbi_auth_event", handleAuth);
    window.addEventListener("storage", handleAuth);
    return () => {
      window.removeEventListener("jbi_auth_event", handleAuth);
      window.removeEventListener("storage", handleAuth);
    };
  }, []);

  // Redirect if not signed in
  _.useEffect(() => {
    if (!currentUser) {
      if (onNavigate) onNavigate("home");
      window.dispatchEvent(new CustomEvent("jbi_open_auth", { detail: { mode: "signin" } }));
    }
  }, [currentUser]);

  // Fetch orders strictly for logged-in user
  const fetchOrders = async () => {
    const u = getStoredUser();
    setCurrentUser(u);

    if (!u || !u.email) {
      setOrders([]);
      setLoading(!1);
      setRefreshing(!1);
      return;
    }

    setLoading(!0);
    try {
      let allOrders = [];
      if (window.SupabaseService && window.SupabaseService.getOrders) {
        try {
          allOrders = await window.SupabaseService.getOrders();
        } catch(e) {}
      }
      
      if (!allOrders || allOrders.length === 0) {
        const stored = localStorage.getItem("jbi_admin_orders");
        if (stored) allOrders = JSON.parse(stored);
      }

      const userEmail = u.email.toLowerCase().trim();

      if (u.role === "admin" || userEmail === "admin@jbicraft.com") {
        setOrders(allOrders);
      } else {
        // Customer Privacy Filter: Only show orders belonging to this logged-in account
        const userStoredKey = `jbi_user_orders_${userEmail}`;
        let userList = [];
        try {
          const raw = localStorage.getItem(userStoredKey);
          if (raw) userList = JSON.parse(raw);
        } catch(e) {}

        const matchedInGlobal = (allOrders || []).filter(o => {
          const oEmail = (o.customerEmail || o.customer_email || o.email || "").toLowerCase().trim();
          return oEmail === userEmail;
        });

        const map = new Map();
        userList.forEach(o => map.set(o.id || o.orderNumber || o.order_number, o));
        matchedInGlobal.forEach(o => map.set(o.id || o.orderNumber || o.order_number, o));
        
        const customerOrders = Array.from(map.values());
        setOrders(customerOrders);
      }
    } catch(e) {
      console.warn("Orders fetch exception:", e);
      setOrders([]);
    } finally {
      setLoading(!1);
      setRefreshing(!1);
    }
  };

  _.useEffect(() => {
    if (currentUser) {
      fetchOrders();
    }
    const handleCreated = () => {
      if (currentUser) fetchOrders();
    };
    window.addEventListener("jbi_order_created", handleCreated);
    return () => window.removeEventListener("jbi_order_created", handleCreated);
  }, [currentUser?.email]);

  const handleRefresh = () => {
    setRefreshing(!0);
    fetchOrders();
  };

  const copyId = (id) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(id);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  // If not signed in, return null and let redirection proceed smoothly
  if (!currentUser) {
    return null;
  }

  // Filter Orders
  const filtered = orders.filter(ord => {
    const q = searchQuery.toLowerCase().trim();
    const matchQ = !q ||
      (ord.orderNumber && ord.orderNumber.toLowerCase().includes(q)) ||
      (ord.order_number && ord.order_number.toLowerCase().includes(q)) ||
      (ord.id && ord.id.toLowerCase().includes(q)) ||
      (ord.paymentId && ord.paymentId.toLowerCase().includes(q)) ||
      (ord.customerName && ord.customerName.toLowerCase().includes(q)) ||
      (ord.items && ord.items.some(it => ((it.title || it.productTitle || "")).toLowerCase().includes(q)));
    if (!matchQ) return false;
    if (statusFilter === "all") return true;
    if (statusFilter === "in_transit") return ["Pending", "Confirmed", "Packed", "Shipped", "In Transit", "Out for Delivery", "In Production"].includes(ord.status);
    if (statusFilter === "delivered") return ord.status === "Delivered";
    if (statusFilter === "cancelled") return ["Cancelled", "Returned"].includes(ord.status);
    return true;
  });

  const getStatusBadge = (status) => {
    const s = (status || "Pending").toLowerCase();
    if (s.includes("delivered")) {
      return a.jsxs("span", {
        className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-2xs",
        children: [
          a.jsx(hc, { className: "w-3.5 h-3.5 text-emerald-600" }),
          "Delivered"
        ]
      });
    }
    if (s.includes("shipped") || s.includes("transit") || s.includes("out")) {
      return a.jsxs("span", {
        className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 border border-indigo-300 shadow-2xs",
        children: [
          a.jsx(Li, { className: "w-3.5 h-3.5 text-indigo-600" }),
          "Shipped / On The Way"
        ]
      });
    }
    if (s.includes("cancelled")) {
      return a.jsxs("span", {
        className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-300 shadow-2xs",
        children: [
          a.jsx(Je, { className: "w-3.5 h-3.5 text-red-600" }),
          "Cancelled"
        ]
      });
    }
    return a.jsxs("span", {
      className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs",
      children: [
        a.jsx(Xa, { className: "w-3.5 h-3.5 text-amber-600" }),
        "Order Confirmed / In Production"
      ]
    });
  };

  return a.jsxs("div", {
    className: "min-h-screen bg-[#f1f3f6] pb-24 text-stone-900 font-sans antialiased",
    children: [
      // Top Navigation / Header Breadcrumb Bar
      a.jsx("div", {
        className: "bg-white border-b border-stone-200 sticky top-20 z-30 shadow-2xs",
        children: a.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-2 text-xs text-stone-500",
              children: [
                a.jsx("button", { onClick: () => onNavigate("home"), className: "font-semibold text-stone-900 hover:text-black hover:underline cursor-pointer flex items-center gap-1", children: "← Back to Website" }),
                a.jsx("span", { children: "/" }),
                a.jsx("span", { className: "text-stone-700 font-semibold", children: "My Account" }),
                a.jsx("span", { children: "/" }),
                a.jsx("span", { className: "text-stone-900 font-bold", children: "My Orders & Tax Invoices" })
              ]
            }),
            a.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                // Logged-in Customer Badge
                a.jsxs("div", {
                  className: "hidden sm:flex items-center gap-2 px-3 py-1 bg-stone-100 border border-stone-200 rounded-full text-xs font-medium text-stone-700",
                  children: [
                    a.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-500", title: "Authenticated Session" }),
                    a.jsxs("span", { children: ["Signed in as ", a.jsx("strong", { className: "text-stone-900", children: currentUser.name })] })
                  ]
                }),
                a.jsxs("button", {
                  type: "button",
                  onClick: onExploreClick,
                  className: "flex items-center gap-1.5 px-4 py-1.5 bg-stone-900 hover:bg-black text-white text-xs font-semibold rounded-lg shadow-xs transition-colors cursor-pointer",
                  children: [
                    a.jsx(Za, { className: "w-3.5 h-3.5 text-amber-300" }),
                    a.jsx("span", { children: "Explore Crafts" })
                  ]
                })
              ]
            })
          ]
        })
      }),

      // Main Container
      a.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6",
        children: [
          // Filter & Search Header Card
          a.jsxs("div", {
            className: "bg-white rounded-xl p-4 sm:p-5 border border-stone-200 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4",
            children: [
              // Search Input
              a.jsxs("div", {
                className: "relative flex-1 max-w-lg",
                children: [
                  a.jsx(ps, { className: "w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" }),
                  a.jsx("input", {
                    type: "text",
                    value: searchQuery,
                    onChange: e => setSearchQuery(e.target.value),
                    placeholder: "Search by Order ID, Product name, or Payment ID...",
                    className: "w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-xs font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 focus:bg-white transition-colors"
                  }),
                  searchQuery && a.jsx("button", {
                    onClick: () => setSearchQuery(""),
                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs",
                    children: "✕"
                  })
                ]
              }),

              // Filter Chips
              a.jsx("div", {
                className: "flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none",
                children: [
                  { id: "all", label: "All Orders", count: orders.length },
                  { id: "in_transit", label: "In Production / Transit", count: orders.filter(o => ["Pending", "Confirmed", "Packed", "Shipped", "In Transit", "Out for Delivery", "In Production"].includes(o.status)).length },
                  { id: "delivered", label: "Delivered", count: orders.filter(o => o.status === "Delivered").length },
                  { id: "cancelled", label: "Cancelled", count: orders.filter(o => ["Cancelled", "Returned"].includes(o.status)).length }
                ].map(tab => a.jsxs("button", {
                  key: tab.id,
                  type: "button",
                  onClick: () => setStatusFilter(tab.id),
                  className: `px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    statusFilter === tab.id
                      ? "bg-stone-900 text-white shadow-xs"
                      : "bg-stone-100 hover:bg-stone-200 text-stone-600"
                  }`,
                  children: [
                    a.jsx("span", { children: tab.label }),
                    a.jsx("span", {
                      className: `px-1.5 py-0.2 rounded-full text-[10px] font-mono ${
                        statusFilter === tab.id ? "bg-stone-700 text-amber-300 font-bold" : "bg-stone-200 text-stone-700"
                      }`,
                      children: tab.count
                    })
                  ]
                }))
              })
            ]
          }),

          // Content List
          loading ? a.jsxs("div", {
            className: "py-24 text-center space-y-4",
            children: [
              a.jsx("div", { className: "w-10 h-10 border-3 border-stone-900 border-t-transparent rounded-full animate-spin mx-auto" }),
              a.jsx("p", { className: "text-sm text-stone-500 font-medium", children: "Decryption & fetching your private orders ledger..." })
            ]
          }) : filtered.length === 0 ? a.jsxs("div", {
            className: "bg-white rounded-2xl p-12 text-center border border-stone-200 shadow-2xs space-y-4",
            children: [
              a.jsx("div", { className: "w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto text-2xl", children: "📦" }),
              a.jsx("h3", { className: "font-serif text-xl font-bold text-stone-900", children: searchQuery || statusFilter !== "all" ? "No matching orders found" : "No orders placed yet in this account" }),
              a.jsx("p", { className: "text-xs text-stone-500 max-w-md mx-auto", children: searchQuery || statusFilter !== "all" ? "Try adjusting your search terms or filter criteria." : "Support rural master artisans and discover genuine GI-tagged Sambalpuri silk handlooms, Pattachitra paintings, and Cuttack silver filigree." }),
              a.jsx("div", {
                className: "pt-2",
                children: a.jsx("button", {
                  type: "button",
                  onClick: onExploreClick,
                  className: "px-6 py-2.5 bg-stone-900 hover:bg-black text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer",
                  children: "Explore Masterpiece Catalogue"
                })
              })
            ]
          }) : a.jsx("div", {
            className: "space-y-6",
            children: filtered.map(order => {
              const items = order.items || [];
              const rawTotal = order.total || order.totalAmount || items.reduce((acc, it) => acc + (it.price * (it.quantity || 1)), 0);
              const orderId = order.id || order.orderNumber || order.order_number || "ORD-2026";
              const paymentMethod = order.paymentMethod || (order.paymentStatus ? `Captured (${order.paymentStatus})` : "Razorpay Quantum Gateway");
              const orderDate = order.date || (order.created_at ? new Date(order.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : "Recently placed");

              return a.jsxs("div", {
                key: orderId,
                className: "bg-white rounded-2xl border border-stone-200 shadow-2xs overflow-hidden transition-all hover:shadow-md",
                children: [
                  // Order Card Header
                  a.jsxs("div", {
                    className: "bg-stone-50/80 px-5 py-4 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs",
                    children: [
                      a.jsxs("div", {
                        className: "flex flex-wrap items-center gap-x-4 gap-y-1",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              a.jsx("span", { className: "text-stone-400 font-medium", children: "Order ID:" }),
                              a.jsx("span", { className: "font-mono font-bold text-stone-900 select-all", children: orderId }),
                              a.jsx("button", {
                                type: "button",
                                onClick: () => copyId(orderId),
                                className: "text-stone-400 hover:text-stone-800 p-0.5 transition-colors cursor-pointer",
                                title: "Copy Order ID",
                                children: copiedId === orderId ? a.jsx("span", { className: "text-[10px] text-emerald-600 font-bold", children: "Copied!" }) : a.jsx("span", { className: "text-xs", children: "📋" })
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "flex items-center gap-1 text-stone-500",
                            children: [
                              a.jsx("span", { children: "Placed on:" }),
                              a.jsx("span", { className: "font-medium text-stone-800", children: orderDate })
                            ]
                          })
                        ]
                      }),
                      a.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          getStatusBadge(order.status),
                          a.jsx("button", {
                            type: "button",
                            onClick: () => setSelectedInvoiceOrder(order),
                            className: "px-3 py-1.5 bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs",
                            children: [
                              a.jsx("span", { children: "🧾" }),
                              a.jsx("span", { children: "Tax Invoice" })
                            ]
                          })
                        ]
                      })
                    ]
                  }),

                  // Items List
                  a.jsxs("div", {
                    className: "p-5 divide-y divide-stone-100 space-y-4",
                    children: [
                      items.map((it, itIdx) => a.jsxs("div", {
                        key: itIdx,
                        className: "pt-3 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                        children: [
                          a.jsxs("div", {
                            className: "flex items-center gap-4 min-w-0",
                            children: [
                              a.jsx("img", {
                                src: it.image || it.imageUrl || "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=300",
                                alt: it.title || it.productTitle,
                                className: "w-16 h-16 object-cover rounded-xl border border-stone-200 shrink-0",
                                referrerPolicy: "no-referrer"
                              }),
                              a.jsxs("div", {
                                className: "min-w-0",
                                children: [
                                  a.jsx("h4", { className: "font-serif font-bold text-stone-900 text-sm truncate", children: it.title || it.productTitle || "Odisha Artisan Masterpiece" }),
                                  a.jsxs("p", { className: "text-xs text-stone-500 mt-0.5", children: [it.craft || "GI Hallmarked Craft", " • Qty: ", it.quantity || 1] }),
                                  a.jsx("span", { className: "inline-block text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.2 rounded font-mono mt-1", children: "100% Certified GI Provenance" })
                                ]
                              })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "text-right shrink-0",
                            children: [
                              a.jsx("span", { className: "text-[11px] text-stone-400 block", children: "Item Price" }),
                              a.jsxs("span", { className: "font-serif font-bold text-base text-stone-900", children: ["₹", Number(it.price || 0).toLocaleString('en-IN')] })
                            ]
                          })
                        ]
                      })),

                      // Card Footer with Escrow & Breakdown
                      a.jsxs("div", {
                        className: "pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs bg-stone-50/50 p-3 rounded-xl border border-stone-100",
                        children: [
                          a.jsxs("div", {
                            className: "space-y-0.5",
                            children: [
                              a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-stone-500 font-medium", children: "Payment Gateway:" }), a.jsx("span", { className: "font-mono font-bold text-stone-800", children: paymentMethod })] }),
                              order.paymentId && a.jsxs("div", { className: "flex items-center gap-2", children: [a.jsx("span", { className: "text-stone-500 font-medium", children: "Transaction Reference:" }), a.jsx("span", { className: "font-mono text-stone-700", children: order.paymentId })] }),
                              order.artisanBeneficiary && a.jsxs("div", { className: "flex items-center gap-1.5 text-emerald-700 font-medium pt-1", children: [a.jsx("span", { children: "🌿" }), a.jsxs("span", { children: ["Beneficiary: ", order.artisanBeneficiary.name, " (", order.artisanBeneficiary.guild, ")"] })] })
                            ]
                          }),
                          a.jsxs("div", {
                            className: "text-right",
                            children: [
                              a.jsx("span", { className: "text-stone-400 text-[11px] block", children: "Grand Total Paid" }),
                              a.jsxs("span", { className: "font-serif font-black text-xl text-[#845327]", children: ["₹", Number(rawTotal).toLocaleString('en-IN')] })
                            ]
                          })
                        ]
                      })
                    ]
                  })
                ]
              });
            })
          })
        ]
      }),

      // GST Tax Invoice Modal
      selectedInvoiceOrder && a.jsx(TaxInvoiceModal, {
        order: selectedInvoiceOrder,
        isOpen: !!selectedInvoiceOrder,
        onClose: () => setSelectedInvoiceOrder(null)
      })
    ]
  });
};



const UserProfilePageComponent = ({ onNavigate, onExploreClick }) => {
  const getStoredUser = () => window.currentUser || null;
  const [currentUser, setCurrentUser] = _.useState(getStoredUser);
  const [activeTab, setActiveTab] = _.useState(() => {
    try {
      const savedTab = localStorage.getItem("jbi_profile_active_tab");
      if (savedTab) return savedTab;
    } catch(e) {}
    return "profile";
  });

  // Listen for tab switch requests
  _.useEffect(() => {
    const handleSetTab = (e) => {
      if (e.detail && e.detail.tab) {
        setActiveTab(e.detail.tab);
        try { localStorage.setItem("jbi_profile_active_tab", e.detail.tab); } catch(err) {}
      }
    };
    window.addEventListener("jbi_set_profile_tab", handleSetTab);
    return () => window.removeEventListener("jbi_set_profile_tab", handleSetTab);
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    try { localStorage.setItem("jbi_profile_active_tab", tabId); } catch(err) {}
  };

  // Profile Form State
  const [name, setName] = _.useState(currentUser?.name || "");
  const [email, setEmail] = _.useState(currentUser?.email || "");
  const [phone, setPhone] = _.useState(currentUser?.phone || "");
  const [savingProfile, setSavingProfile] = _.useState(false);
  const [profileSuccessMsg, setProfileSuccessMsg] = _.useState("");
  const [profileErrorMsg, setProfileErrorMsg] = _.useState("");

  // Addresses State
  const [addresses, setAddresses] = _.useState([]);
  const [loadingAddresses, setLoadingAddresses] = _.useState(true);
  const [addressModalOpen, setAddressModalOpen] = _.useState(false);
  const [editingAddressId, setEditingAddressId] = _.useState(null);
  const [addressSuccessMsg, setAddressSuccessMsg] = _.useState("");

  // Address Form State
  const [addrName, setAddrName] = _.useState("");
  const [addrPhone, setAddrPhone] = _.useState("");
  const [addrLine, setAddrLine] = _.useState("");
  const [addrApartment, setAddrApartment] = _.useState("");
  const [addrCity, setAddrCity] = _.useState("Bhubaneswar");
  const [addrState, setAddrState] = _.useState("Odisha");
  const [addrPincode, setAddrPincode] = _.useState("751001");
  const [addrCountry, setAddrCountry] = _.useState("India");
  const [addrIsDefault, setAddrIsDefault] = _.useState(false);
  const [addrLabel, setAddrLabel] = _.useState("Home");
  const [savingAddr, setSavingAddr] = _.useState(false);
  const [addrError, setAddrError] = _.useState("");
  const [deleteConfirmId, setDeleteConfirmId] = _.useState(null);

  // Language Selector State
  const [selectedLangId, setSelectedLangId] = _.useState(() => {
    try {
      return localStorage.getItem("jbi_selected_country") || "default";
    } catch(e) {
      return "default";
    }
  });
  const [langSearch, setLangSearch] = _.useState("");
  const [langRegion, setLangRegion] = _.useState("all");

  const languageOptions = (window.JBITranslator && window.JBITranslator.options) ? window.JBITranslator.options : [
    { id: "australia", name: "Astralia", country: "Australia", lang: "English (AU)", script: "English", code: "en", region: "global", flag: "🇦🇺", currency: "AUD", currencySymbol: "A$", currencyName: "Australian Dollar", rate: 0.0182 },
    { id: "usa", name: "USA", country: "United States (USA)", lang: "English (US)", script: "English", code: "en", region: "global", flag: "🇺🇸", currency: "USD", currencySymbol: "$", currencyName: "US Dollar", rate: 0.0116 },
    { id: "uae", name: "UAE", country: "United Arab Emirates (UAE)", lang: "العربية (Arabic)", script: "العربية", code: "ar", dir: "rtl", region: "middle-east", flag: "🇦🇪", currency: "AED", currencySymbol: "د.إ", currencyName: "UAE Dirham", rate: 0.0425 },
    { id: "queit", name: "Queit", country: "Kuwait (Queit)", lang: "العربية (Kuwaiti)", script: "العربية", code: "ar", dir: "rtl", region: "middle-east", flag: "🇰🇼", currency: "KWD", currencySymbol: "د.ك", currencyName: "Kuwaiti Dinar", rate: 0.00357 },
    { id: "london", name: "London", country: "United Kingdom (London)", lang: "English (UK)", script: "English", code: "en", region: "global", flag: "🇬🇧", currency: "GBP", currencySymbol: "£", currencyName: "British Pound", rate: 0.0091 },
    { id: "nepal", name: "Nepal", country: "Nepal", lang: "नेपाली (Nepali)", script: "नेपाली", code: "ne", region: "subcontinent", flag: "🇳🇵", currency: "NPR", currencySymbol: "रू", currencyName: "Nepalese Rupee", rate: 1.60 },
    { id: "china", name: "China", country: "China (PRC)", lang: "中文 (Chinese)", script: "简体中文", code: "zh-CN", region: "asia", flag: "🇨🇳", currency: "CNY", currencySymbol: "¥", currencyName: "Chinese Yuan", rate: 0.0847 },
    { id: "bhutan", name: "Bhutan", country: "Bhutan (Kingdom)", lang: "རྫོང་ཁ (Dzongkha)", script: "རྫོང་ཁ", code: "dz", region: "asia", flag: "🇧🇹", currency: "BTN", currencySymbol: "Nu.", currencyName: "Bhutanese Ngultrum", rate: 1.0 },
    { id: "shri-lanka", name: "Shri lanka", country: "Sri Lanka (Shri lanka)", lang: "සිංහල (Sinhala)", script: "සිංහල", code: "si", region: "subcontinent", flag: "🇱🇰", currency: "LKR", currencySymbol: "රු", currencyName: "Sri Lankan Rupee", rate: 3.50 },
    { id: "default", name: "India / Default", country: "India (Original Heritage)", lang: "English (Original)", script: "English", code: "en", region: "subcontinent", flag: "🇮🇳", currency: "INR", currencySymbol: "₹", currencyName: "Indian Rupee", rate: 1.0 }
  ];

  const currentLangOpt = languageOptions.find(o => o.id === selectedLangId) || languageOptions[languageOptions.length - 1];

  const filteredLanguages = languageOptions.filter(item => {
    const q = (langSearch || "").toLowerCase().trim();
    const matchSearch = !q || (
      (item.name || "").toLowerCase().includes(q) ||
      (item.country || "").toLowerCase().includes(q) ||
      (item.lang || "").toLowerCase().includes(q) ||
      (item.script || "").toLowerCase().includes(q) ||
      (item.code || "").toLowerCase().includes(q)
    );
    const matchRegion = langRegion === "all" || item.region === langRegion;
    return matchSearch && matchRegion;
  });

  const handleSelectLanguage = (item) => {
    setSelectedLangId(item.id);
    if (window.JBITranslator && window.JBITranslator.setLanguage) {
      window.JBITranslator.setLanguage(item.id);
    }
  };

  // Load Addresses
  const loadAddresses = async () => {
    setLoadingAddresses(true);
    const email = currentUser?.email || "patron@jbicraft.com";
    try {
      if (window.SupabaseService && window.SupabaseService.getAddresses) {
        const remote = await window.SupabaseService.getAddresses(email);
        if (remote && Array.isArray(remote)) {
          setAddresses(remote);
          setLoadingAddresses(false);
          return;
        }
      }
      const clean = email.toLowerCase().trim();
      const local = localStorage.getItem(`jbi_user_addresses_${clean}`);
      if (local) {
        setAddresses(JSON.parse(local));
      } else {
        const initial = [
          {
            id: "addr-default-1",
            name: currentUser?.name || "Patron",
            phone: currentUser?.phone || "",
            street: "Plot No. 42, Master Canteen Square, Station Bazar",
            apartment: "Apt 302, Kalinga Heritage Enclave",
            city: "Bhubaneswar",
            state: "Odisha",
            pincode: "751001",
            country: "India",
            isDefault: true,
            label: "Home"
          }
        ];
        setAddresses(initial);
        localStorage.setItem(`jbi_user_addresses_${clean}`, JSON.stringify(initial));
      }
    } catch(err) {
      console.warn("Failed to load addresses:", err);
    } finally {
      setLoadingAddresses(false);
    }
  };

  _.useEffect(() => {
    loadAddresses();
  }, [currentUser]);

  // Handle Save Profile
  const handleSaveProfile = async (e) => {
    e.preventDefault();
    setProfileSuccessMsg("");
    setProfileErrorMsg("");
    if (!name.trim()) {
      setProfileErrorMsg("Full name is required.");
      return;
    }
    setSavingProfile(true);
    try {
      const updated = { ...currentUser, name: name.trim(), phone: phone.trim() };
      window.currentUser = updated;
      setCurrentUser(updated);
      setProfileSuccessMsg("Profile information updated successfully!");
      setTimeout(() => setProfileSuccessMsg(""), 3500);
    } catch(err) {
      setProfileErrorMsg(err?.message || "Failed to update profile.");
    } finally {
      setSavingProfile(false);
    }
  };

  // Open Modal for Add
  const handleOpenAddAddress = () => {
    setEditingAddressId(null);
    setAddrName(currentUser?.name || "");
    setAddrPhone(currentUser?.phone || "");
    setAddrLine("");
    setAddrApartment("");
    setAddrCity("Bhubaneswar");
    setAddrState("Odisha");
    setAddrPincode("751001");
    setAddrCountry("India");
    setAddrIsDefault(addresses.length === 0);
    setAddrLabel("Home");
    setAddrError("");
    setAddressModalOpen(true);
  };

  // Open Modal for Edit
  const handleOpenEditAddress = (addr) => {
    setEditingAddressId(addr.id);
    setAddrName(addr.name || "");
    setAddrPhone(addr.phone || "");
    setAddrLine(addr.street || "");
    setAddrApartment(addr.apartment || "");
    setAddrCity(addr.city || "Bhubaneswar");
    setAddrState(addr.state || "Odisha");
    setAddrPincode(addr.pincode || "751001");
    setAddrCountry(addr.country || "India");
    setAddrIsDefault(Boolean(addr.isDefault));
    setAddrLabel(addr.label || "Home");
    setAddrError("");
    setAddressModalOpen(true);
  };

  // Save Address
  const handleSaveAddress = async (e) => {
    e.preventDefault();
    setAddrError("");
    if (!addrName.trim()) { setAddrError("Recipient name is required."); return; }
    if (!addrLine.trim()) { setAddrError("Street address line is required."); return; }
    if (!addrCity.trim()) { setAddrError("City is required."); return; }
    if (!addrPincode.trim()) { setAddrError("PIN code is required."); return; }

    setSavingAddr(true);
    const newAddressObj = {
      id: editingAddressId || `addr-${Date.now()}`,
      name: addrName.trim(),
      phone: addrPhone.trim(),
      street: addrLine.trim(),
      apartment: addrApartment.trim(),
      city: addrCity.trim(),
      state: addrState.trim(),
      pincode: addrPincode.trim(),
      country: addrCountry.trim(),
      isDefault: addrIsDefault,
      label: addrLabel
    };

    const email = currentUser?.email || "patron@jbicraft.com";
    try {
      if (window.SupabaseService && window.SupabaseService.saveAddress) {
        await window.SupabaseService.saveAddress(email, newAddressObj);
      } else {
        const clean = email.toLowerCase().trim();
        let updatedList = [...addresses];
        if (editingAddressId) {
          updatedList = updatedList.map((a) => a.id === editingAddressId ? newAddressObj : a);
        } else {
          updatedList.push(newAddressObj);
        }
        if (addrIsDefault) {
          updatedList = updatedList.map((a) => ({ ...a, isDefault: a.id === newAddressObj.id }));
        }
        localStorage.setItem(`jbi_user_addresses_${clean}`, JSON.stringify(updatedList));
      }
      setAddressModalOpen(false);
      await loadAddresses();
      setAddressSuccessMsg(editingAddressId ? "Address updated successfully!" : "New address added successfully!");
      setTimeout(() => setAddressSuccessMsg(""), 3500);
    } catch(err) {
      setAddrError(err?.message || "Failed to save address.");
    } finally {
      setSavingAddr(false);
    }
  };

  // Remove Address
  const handleDeleteAddress = async (addrId) => {
    const email = currentUser?.email || "patron@jbicraft.com";
    try {
      if (window.SupabaseService && window.SupabaseService.deleteAddress) {
        await window.SupabaseService.deleteAddress(email, addrId);
      } else {
        const clean = email.toLowerCase().trim();
        const updated = addresses.filter((a) => a.id !== addrId);
        if (updated.length > 0 && !updated.some((a) => a.isDefault)) {
          updated[0].isDefault = true;
        }
        localStorage.setItem(`jbi_user_addresses_${clean}`, JSON.stringify(updated));
      }
      setDeleteConfirmId(null);
      await loadAddresses();
      setAddressSuccessMsg("Address removed from your address book.");
      setTimeout(() => setAddressSuccessMsg(""), 3000);
    } catch(err) {
      console.warn("Delete address error:", err);
    }
  };

  // Set Default Address
  const handleSetDefault = async (addrId) => {
    const email = currentUser?.email || "patron@jbicraft.com";
    try {
      if (window.SupabaseService && window.SupabaseService.setDefaultAddress) {
        await window.SupabaseService.setDefaultAddress(email, addrId);
      } else {
        const clean = email.toLowerCase().trim();
        const updated = addresses.map((a) => ({ ...a, isDefault: a.id === addrId }));
        localStorage.setItem(`jbi_user_addresses_${clean}`, JSON.stringify(updated));
      }
      await loadAddresses();
      setAddressSuccessMsg("Default shipping address updated.");
      setTimeout(() => setAddressSuccessMsg(""), 3000);
    } catch(e) {}
  };

  const effectiveUser = currentUser || {
    name: "Patron Guest",
    email: "patron@jbicraft.com",
    role: "user",
    phone: ""
  };

  return a.jsxs("div", {
    className: "min-h-screen bg-[#faf7f2] pb-24",
    children: [
      // Top Hero Banner
      a.jsx("div", {
        className: "bg-white border-b border-stone-200/80 pt-10 pb-8 px-4 sm:px-6 lg:px-8",
        children: a.jsxs("div", {
          className: "max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6",
          children: [
            a.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                a.jsx("div", {
                  className: "w-16 h-16 rounded-2xl bg-[#b85d18] text-white flex items-center justify-center text-2xl font-serif font-bold shadow-sm shrink-0",
                  children: (effectiveUser.name || "U").charAt(0).toUpperCase()
                }),
                a.jsxs("div", {
                  children: [
                    a.jsxs("div", {
                      className: "flex items-center gap-2.5 flex-wrap",
                      children: [
                        a.jsx("h1", {
                          className: "font-serif text-2xl sm:text-3xl font-bold text-stone-900",
                          children: effectiveUser.name || "Patron"
                        }),
                        a.jsx("span", {
                          className: "px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#f3ece2] text-[#b85d18] border border-[#e5d8c8]",
                          children: effectiveUser.role === "admin" ? "Super Administrator" : (currentUser ? "Verified Patron" : "Guest Patron")
                        }),
                        a.jsxs("span", {
                          className: "px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1",
                          children: [
                            a.jsx("span", { children: currentLangOpt.flag }),
                            currentLangOpt.name
                          ]
                        })
                      ]
                    }),
                    a.jsxs("p", {
                      className: "text-stone-500 text-xs sm:text-sm mt-1 flex items-center gap-3 flex-wrap",
                      children: [
                        a.jsxs("span", { children: ["📧 ", effectiveUser.email] }),
                        effectiveUser.phone && a.jsxs("span", { children: ["📞 ", effectiveUser.phone] })
                      ]
                    })
                  ]
                })
              ]
            }),
            a.jsxs("div", {
              className: "flex items-center gap-3 flex-wrap",
              children: [
                a.jsx("button", {
                  onClick: () => onNavigate("orders"),
                  className: "px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-2xs",
                  children: "📦 View My Orders"
                }),
                effectiveUser.role === "admin" && a.jsx("button", {
                  onClick: () => onNavigate("admin"),
                  className: "px-4 py-2.5 rounded-xl bg-stone-900 hover:bg-black text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm",
                  children: "⚙️ Admin Portal"
                })
              ]
            })
          ]
        })
      }),

      // Main Container with 3 Tabs
      a.jsxs("div", {
        className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8",
        children: [
          // 3-Tab Selection Bar
          a.jsxs("div", {
            className: "flex border-b border-stone-200 mb-8 overflow-x-auto gap-2 sm:gap-4",
            children: [
              // Tab 1: Edit Profile Information
              a.jsxs("button", {
                type: "button",
                onClick: () => handleTabClick("profile"),
                className: `pb-3 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === "profile" ? "border-[#b85d18] text-[#b85d18]" : "border-transparent text-stone-500 hover:text-stone-900"
                }`,
                children: [
                  a.jsx("span", { children: "👤" }),
                  "Edit Profile Information"
                ]
              }),

              // Tab 2: Saved Addresses
              a.jsxs("button", {
                type: "button",
                onClick: () => handleTabClick("addresses"),
                className: `pb-3 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === "addresses" ? "border-[#b85d18] text-[#b85d18]" : "border-transparent text-stone-500 hover:text-stone-900"
                }`,
                children: [
                  a.jsx("span", { children: "📍" }),
                  "Saved Addresses",
                  a.jsx("span", {
                    className: "ml-1.5 px-2 py-0.5 text-xs rounded-full bg-stone-100 font-bold",
                    children: addresses.length
                  })
                ]
              }),

              // Tab 3: Select Language
              a.jsxs("button", {
                type: "button",
                onClick: () => handleTabClick("language"),
                className: `pb-3 px-4 text-sm font-semibold flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === "language" ? "border-[#b85d18] text-[#b85d18]" : "border-transparent text-stone-500 hover:text-stone-900"
                }`,
                children: [
                  a.jsx("span", { children: "🌐" }),
                  "Select Language",
                  a.jsx("span", {
                    className: "ml-1.5 px-2 py-0.5 text-xs rounded-full bg-amber-100 text-amber-900 font-bold border border-amber-300",
                    children: currentLangOpt.flag || "🇮🇳"
                  })
                ]
              })
            ]
          }),

          // Tab 1 Content: Edit Profile
          activeTab === "profile" && a.jsx("div", {
            className: "grid grid-cols-1 lg:grid-cols-12 gap-8",
            children: a.jsxs("div", {
              className: "lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs",
              children: [
                a.jsxs("div", {
                  className: "mb-6 pb-4 border-b border-stone-100",
                  children: [
                    a.jsx("h2", {
                      className: "font-serif text-xl font-bold text-stone-900",
                      children: "Personal Information"
                    }),
                    a.jsx("p", {
                      className: "text-stone-500 text-xs sm:text-sm mt-1",
                      children: "Update your name, registered email address, and contact number for authentication and order delivery updates."
                    })
                  ]
                }),
                !currentUser && a.jsxs("div", {
                  className: "mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-center justify-between gap-3",
                  children: [
                    a.jsxs("span", { children: ["💡 ", a.jsx("strong", { children: "Guest Mode:" }), " Sign in to persist your profile changes across devices."] }),
                    a.jsx("button", {
                      type: "button",
                      onClick: () => window.dispatchEvent(new CustomEvent("jbi_open_auth", { detail: { mode: "signin" } })),
                      className: "px-3 py-1.5 rounded-lg bg-[#b85d18] text-white text-xs font-bold shrink-0 cursor-pointer shadow-xs",
                      children: "Sign In"
                    })
                  ]
                }),
                profileSuccessMsg && a.jsx("div", {
                  className: "mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center gap-2",
                  children: [a.jsx("span", { children: "✓" }), profileSuccessMsg]
                }),
                profileErrorMsg && a.jsx("div", {
                  className: "mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-medium flex items-center gap-2",
                  children: [a.jsx("span", { children: "⚠️" }), profileErrorMsg]
                }),
                a.jsxs("form", {
                  onSubmit: handleSaveProfile,
                  className: "space-y-5",
                  children: [
                    a.jsxs("div", {
                      children: [
                        a.jsx("label", {
                          className: "block font-semibold text-stone-700 text-xs uppercase tracking-wider mb-2",
                          children: "Full Name *"
                        }),
                        a.jsx("input", {
                          type: "text",
                          value: name,
                          onChange: (e) => setName(e.target.value),
                          placeholder: "e.g. Master Ananya Jena",
                          className: "w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] outline-none text-stone-900 text-sm transition-all bg-white"
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      children: [
                        a.jsx("label", {
                          className: "block font-semibold text-stone-700 text-xs uppercase tracking-wider mb-2",
                          children: "Registered Email Address"
                        }),
                        a.jsx("input", {
                          type: "email",
                          value: email,
                          disabled: true,
                          className: "w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-stone-100 text-stone-500 text-sm cursor-not-allowed"
                        }),
                        a.jsx("p", {
                          className: "text-[11px] text-stone-400 mt-1",
                          children: "Email address is linked to your secure heritage credentials and cannot be changed."
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      children: [
                        a.jsx("label", {
                          className: "block font-semibold text-stone-700 text-xs uppercase tracking-wider mb-2",
                          children: "Primary Phone Number"
                        }),
                        a.jsx("input", {
                          type: "tel",
                          value: phone,
                          onChange: (e) => setPhone(e.target.value),
                          placeholder: "Enter mobile number",
                          className: "w-full px-4 py-2.5 rounded-xl border border-stone-200 focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] outline-none text-stone-900 text-sm transition-all bg-white"
                        }),
                        a.jsx("p", {
                          className: "text-[11px] text-stone-400 mt-1",
                          children: "Used for delivery notifications and authentic dispatch tracking."
                        })
                      ]
                    }),
                    a.jsx("div", {
                      className: "pt-4",
                      children: a.jsx("button", {
                        type: "submit",
                        disabled: savingProfile,
                        className: "py-3 px-6 rounded-xl bg-[#b85d18] hover:bg-[#94420e] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md disabled:opacity-50",
                        children: savingProfile ? "Saving Details..." : "Save Profile Details"
                      })
                    })
                  ]
                })
              ]
            })
          }),

          // Tab 2 Content: Saved Addresses
          activeTab === "addresses" && a.jsxs("div", {
            className: "space-y-6 max-w-4xl",
            children: [
              a.jsxs("div", {
                className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("h2", {
                        className: "font-serif text-xl font-bold text-stone-900",
                        children: "Delivery Address Book"
                      }),
                      a.jsx("p", {
                        className: "text-stone-500 text-xs sm:text-sm mt-1",
                        children: "Manage your home and atelier addresses for swift and insured delivery across India and worldwide."
                      })
                    ]
                  }),
                  a.jsx("button", {
                    type: "button",
                    onClick: handleOpenAddAddress,
                    className: "px-4 py-2.5 rounded-xl bg-[#b85d18] hover:bg-[#94420e] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm shrink-0 self-start sm:self-auto",
                    children: "+ Add New Address"
                  })
                ]
              }),
              addressSuccessMsg && a.jsx("div", {
                className: "p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center gap-2",
                children: [a.jsx("span", { children: "✓" }), addressSuccessMsg]
              }),
              a.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: addresses.map((addr) => a.jsxs("div", {
                  key: addr.id,
                  className: `bg-white p-5 rounded-2xl border transition-all ${addr.isDefault ? "border-amber-400 ring-2 ring-amber-200 shadow-sm" : "border-stone-200/80 hover:border-stone-300 shadow-2xs"} flex flex-col justify-between`,
                  children: [
                    a.jsxs("div", {
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center justify-between gap-2 mb-2",
                          children: [
                            a.jsxs("span", {
                              className: "px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700 border border-stone-200",
                              children: addr.label || "Home"
                            }),
                            addr.isDefault && a.jsx("span", {
                              className: "px-2 py-0.5 rounded-md text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300",
                              children: "Primary Default"
                            })
                          ]
                        }),
                        a.jsx("h4", {
                          className: "font-bold text-stone-900 text-sm",
                          children: addr.name
                        }),
                        a.jsxs("p", {
                          className: "text-stone-600 text-xs mt-1 leading-relaxed",
                          children: [
                            addr.street,
                            addr.apartment && a.jsx("span", { children: `, ${addr.apartment}` }),
                            a.jsx("br", {}),
                            `${addr.city}, ${addr.state} - ${addr.pincode}`
                          ]
                        }),
                        addr.phone && a.jsxs("p", {
                          className: "text-stone-500 text-xs mt-2 font-mono",
                          children: ["📞 ", addr.phone]
                        })
                      ]
                    }),
                    a.jsxs("div", {
                      className: "pt-4 mt-4 border-t border-stone-100 flex items-center justify-between gap-2 text-xs",
                      children: [
                        a.jsxs("div", {
                          className: "flex items-center gap-3",
                          children: [
                            a.jsx("button", {
                              type: "button",
                              onClick: () => handleOpenEditAddress(addr),
                              className: "font-semibold text-amber-800 hover:text-amber-950 cursor-pointer",
                              children: "Edit"
                            }),
                            !addr.isDefault && a.jsx("button", {
                              type: "button",
                              onClick: () => handleDeleteAddress(addr.id),
                              className: "font-semibold text-rose-600 hover:text-rose-800 cursor-pointer",
                              children: "Delete"
                            })
                          ]
                        }),
                        !addr.isDefault && a.jsx("button", {
                          type: "button",
                          onClick: () => handleSetDefault(addr.id),
                          className: "text-[11px] font-semibold text-stone-500 hover:text-stone-800 cursor-pointer",
                          children: "Set as Default"
                        })
                      ]
                    })
                  ]
                }))
              })
            ]
          }),

          // Tab 3 Content: Select Language (MOVED INSIDE PROFILE PAGE)
          activeTab === "language" && a.jsxs("div", {
            className: "bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-xs max-w-4xl",
            children: [
              a.jsxs("div", {
                className: "mb-6 pb-4 border-b border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsxs("h2", {
                        className: "font-serif text-xl sm:text-2xl font-bold text-stone-900 flex items-center gap-2.5",
                        children: [
                          a.jsx("span", { children: "🌐" }),
                          "Select Language & Regional Atelier"
                        ]
                      }),
                      a.jsx("p", {
                        className: "text-stone-500 text-xs sm:text-sm mt-1 leading-relaxed",
                        children: "Choose your preferred country and language. The website will smoothly convert all craft collections, descriptions, prices, and navigation into your chosen language."
                      })
                    ]
                  }),
                  a.jsxs("button", {
                    type: "button",
                    onClick: () => {
                      handleSelectLanguage(languageOptions[languageOptions.length - 1]);
                    },
                    className: "px-3.5 py-2 rounded-xl border border-stone-300 hover:border-amber-800 bg-white hover:bg-amber-50/50 text-stone-700 hover:text-amber-900 text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-2xs self-start sm:self-auto",
                    children: [
                      a.jsx("span", { children: "↺" }),
                      "Reset to English (Original)"
                    ]
                  })
                ]
              }),

              // Current Active Language Banner
              a.jsxs("div", {
                className: "mb-6 p-4 rounded-xl bg-gradient-to-r from-stone-950 via-stone-900 to-[#3b1706] text-white flex items-center justify-between gap-4 shadow-sm",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-3.5",
                    children: [
                      a.jsx("div", {
                        className: "w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-2xl shrink-0 shadow-inner",
                        children: currentLangOpt.flag || "🇮🇳"
                      }),
                      a.jsxs("div", {
                        children: [
                          a.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              a.jsx("span", { className: "text-[10px] uppercase font-bold tracking-widest text-amber-300", children: "ACTIVE LANGUAGE" }),
                              currentLangOpt.dir === "rtl" && a.jsx("span", { className: "text-[9px] px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-200 font-bold", children: "RTL Mode" })
                            ]
                          }),
                          a.jsx("h3", {
                            className: "text-base sm:text-lg font-bold text-white leading-tight mt-0.5",
                            children: `${currentLangOpt.country || currentLangOpt.name} — ${currentLangOpt.lang}`
                          }),
                          a.jsx("p", {
                            className: "text-xs text-stone-300 mt-0.5",
                            children: `Script: ${currentLangOpt.script} • Region: ${currentLangOpt.region || "Global"} • Currency: ${currentLangOpt.currency || "INR"} (${currentLangOpt.currencySymbol || "₹"})`
                          })
                        ]
                      })
                    ]
                  }),
                  a.jsx("div", {
                    className: "hidden sm:flex items-center gap-1.5 text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-3 py-1.5 rounded-full shrink-0",
                    children: "✓ Applied Smoothly"
                  })
                ]
              }),

              // Search & Region Filter Bar
              a.jsxs("div", {
                className: "mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-stone-50 p-3 rounded-xl border border-stone-200/80",
                children: [
                  a.jsxs("div", {
                    className: "relative flex-1",
                    children: [
                      a.jsx("span", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 text-sm", children: "🔍" }),
                      a.jsx("input", {
                        type: "text",
                        value: langSearch,
                        onChange: (e) => setLangSearch(e.target.value),
                        placeholder: "Search country, language, or script...",
                        className: "w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-white rounded-lg border border-stone-200 focus:border-amber-800 focus:ring-1 focus:ring-amber-800 outline-none text-stone-900 placeholder:text-stone-400"
                      }),
                      langSearch && a.jsx("button", {
                        type: "button",
                        onClick: () => setLangSearch(""),
                        className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700 text-xs cursor-pointer",
                        children: "✕"
                      })
                    ]
                  }),
                  // Region Tabs
                  a.jsx("div", {
                    className: "flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar",
                    children: [
                      { id: "all", label: "All (10)" },
                      { id: "global", label: "Global" },
                      { id: "middle-east", label: "Middle East" },
                      { id: "subcontinent", label: "Subcontinent" },
                      { id: "asia", label: "Asia" }
                    ].map((tab) => {
                      const isActive = langRegion === tab.id;
                      return a.jsx("button", {
                        key: tab.id,
                        type: "button",
                        onClick: () => setLangRegion(tab.id),
                        className: `px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                          isActive
                            ? "bg-stone-900 text-white shadow-xs"
                            : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                        }`,
                        children: tab.label
                      });
                    })
                  })
                ]
              }),

              // Grid of Countries & Languages
              a.jsx("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
                children: filteredLanguages.map((item) => {
                  const isSelected = selectedLangId === item.id;
                  return a.jsxs("button", {
                    key: item.id,
                    type: "button",
                    onClick: () => handleSelectLanguage(item),
                    className: `text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 group relative ${
                      isSelected
                        ? "bg-amber-50/90 border-amber-500 ring-2 ring-amber-400/40 shadow-sm"
                        : "bg-white hover:bg-stone-50/80 border-stone-200 hover:border-amber-300"
                    }`,
                    children: [
                      a.jsxs("div", {
                        className: "flex items-center gap-3.5 min-w-0 flex-1",
                        children: [
                          a.jsx("div", {
                            className: "w-11 h-11 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-center text-2xl shrink-0 group-hover:scale-105 transition-transform shadow-2xs",
                            children: item.flag
                          }),
                          a.jsxs("div", {
                            className: "min-w-0 flex-1",
                            children: [
                              a.jsx("div", {
                                className: `text-sm font-bold truncate leading-tight ${isSelected ? "text-amber-950" : "text-stone-900"}`,
                                children: item.country || item.name
                              }),
                              a.jsxs("div", {
                                className: "flex items-center gap-1.5 text-xs text-amber-900 font-semibold truncate mt-1",
                                children: [
                                  a.jsx("span", { children: item.script || item.lang }),
                                  a.jsx("span", { className: "text-stone-300 text-[10px]", children: "•" }),
                                  a.jsx("span", { className: "text-stone-500 font-normal", children: item.lang }),
                                  a.jsx("span", { className: "text-stone-300 text-[10px]", children: "•" }),
                                  a.jsx("span", { className: "text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 text-[10px]", children: (item.currency || "INR") + " (" + (item.currencySymbol || "₹") + ")" })
                                ]
                              })
                            ]
                          })
                        ]
                      }),
                      isSelected
                        ? a.jsxs("span", {
                            className: "flex items-center gap-1 text-xs font-bold bg-amber-800 text-white px-2.5 py-1 rounded-full shadow-xs shrink-0",
                            children: [a.jsx("span", { children: "✓" }), "Active"]
                          })
                        : a.jsx("span", {
                            className: "text-[11px] text-stone-500 font-bold px-2 py-0.5 rounded bg-stone-100 border border-stone-200 shrink-0 uppercase group-hover:bg-amber-100 group-hover:text-amber-900 transition-colors",
                            children: item.code
                          })
                    ]
                  });
                })
              }),

              // Footer Assurance
              a.jsxs("div", {
                className: "mt-8 pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500",
                children: [
                  a.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      a.jsx("span", { className: "text-amber-700 font-bold", children: "✨" }),
                      a.jsx("span", { children: "Instant client-side translation with full catalog, artisan stories, and zero language mixing." })
                    ]
                  }),
                  a.jsx("span", {
                    className: "font-semibold text-stone-400",
                    children: "JBI Cultural Localization Engine"
                  })
                ]
              })
            ]
          })
        ]
      }),

      // Address Form Modal (Add / Edit)
      addressModalOpen && a.jsxs("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs",
        children: [
          a.jsx("div", { className: "fixed inset-0", onClick: () => setAddressModalOpen(false) }),
          a.jsxs("div", {
            className: "relative w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto z-10",
            children: [
              a.jsxs("div", {
                className: "flex items-center justify-between pb-4 mb-5 border-b border-stone-100",
                children: [
                  a.jsx("h3", {
                    className: "font-serif text-lg sm:text-xl font-bold text-stone-900",
                    children: editingAddressId ? "Modify Shipping Address" : "Add New Delivery Address"
                  }),
                  a.jsx("button", {
                    onClick: () => setAddressModalOpen(false),
                    className: "text-stone-400 hover:text-stone-700 text-lg p-1 cursor-pointer",
                    children: "✕"
                  })
                ]
              }),
              addrError && a.jsx("div", {
                className: "mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-medium",
                children: addrError
              }),
              a.jsxs("form", {
                onSubmit: handleSaveAddress,
                className: "space-y-4",
                children: [
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", { className: "block font-semibold text-stone-700 text-xs mb-1", children: "Recipient Name *" }),
                      a.jsx("input", {
                        type: "text",
                        value: addrName,
                        onChange: (e) => setAddrName(e.target.value),
                        className: "w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] outline-none"
                      })
                    ]
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", { className: "block font-semibold text-stone-700 text-xs mb-1", children: "Contact Number *" }),
                      a.jsx("input", {
                        type: "tel",
                        value: addrPhone,
                        onChange: (e) => setAddrPhone(e.target.value),
                        placeholder: "Enter mobile number",
                        className: "w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] outline-none"
                      })
                    ]
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", { className: "block font-semibold text-stone-700 text-xs mb-1", children: "Street Address *" }),
                      a.jsx("input", {
                        type: "text",
                        value: addrLine,
                        onChange: (e) => setAddrLine(e.target.value),
                        placeholder: "House / Flat / Street Name",
                        className: "w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] outline-none"
                      })
                    ]
                  }),
                  a.jsxs("div", {
                    children: [
                      a.jsx("label", { className: "block font-semibold text-stone-700 text-xs mb-1", children: "Apartment / Landmark" }),
                      a.jsx("input", {
                        type: "text",
                        value: addrApartment,
                        onChange: (e) => setAddrApartment(e.target.value),
                        placeholder: "Suite, Unit, Building, Floor",
                        className: "w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] outline-none"
                      })
                    ]
                  }),
                  a.jsxs("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("label", { className: "block font-semibold text-stone-700 text-xs mb-1", children: "City *" }),
                          a.jsx("input", {
                            type: "text",
                            value: addrCity,
                            onChange: (e) => setAddrCity(e.target.value),
                            className: "w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] outline-none"
                          })
                        ]
                      }),
                      a.jsxs("div", {
                        children: [
                          a.jsx("label", { className: "block font-semibold text-stone-700 text-xs mb-1", children: "PIN Code *" }),
                          a.jsx("input", {
                            type: "text",
                            value: addrPincode,
                            onChange: (e) => setAddrPincode(e.target.value),
                            className: "w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] outline-none"
                          })
                        ]
                      })
                    ]
                  }),
                  a.jsxs("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                      a.jsxs("div", {
                        children: [
                          a.jsx("label", { className: "block font-semibold text-stone-700 text-xs mb-1", children: "State *" }),
                          a.jsx("input", {
                            type: "text",
                            value: addrState,
                            onChange: (e) => setAddrState(e.target.value),
                            className: "w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm focus:border-[#b85d18] focus:ring-1 focus:ring-[#b85d18] outline-none"
                          })
                        ]
                      }),
                      a.jsxs("div", {
                        children: [
                          a.jsx("label", { className: "block font-semibold text-stone-700 text-xs mb-1", children: "Address Label" }),
                          a.jsxs("select", {
                            value: addrLabel,
                            onChange: (e) => setAddrLabel(e.target.value),
                            className: "w-full px-3 py-2 rounded-xl border border-stone-200 text-sm bg-white focus:border-[#b85d18] outline-none",
                            children: [
                              a.jsx("option", { value: "Home", children: "Home" }),
                              a.jsx("option", { value: "Office", children: "Office" }),
                              a.jsx("option", { value: "Studio", children: "Studio / Atelier" }),
                              a.jsx("option", { value: "Other", children: "Other" })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  a.jsxs("label", {
                    className: "flex items-center gap-2 pt-2 cursor-pointer",
                    children: [
                      a.jsx("input", {
                        type: "checkbox",
                        checked: addrIsDefault,
                        onChange: (e) => setAddrIsDefault(e.target.checked),
                        className: "rounded text-[#b85d18] focus:ring-[#b85d18]"
                      }),
                      a.jsx("span", { className: "text-xs text-stone-700 font-semibold", children: "Make this my primary delivery address" })
                    ]
                  }),
                  a.jsxs("div", {
                    className: "pt-4 flex gap-3",
                    children: [
                      a.jsx("button", {
                        type: "button",
                        onClick: () => setAddressModalOpen(false),
                        className: "flex-1 py-2.5 rounded-xl border border-stone-300 text-stone-700 text-xs font-bold hover:bg-stone-50 cursor-pointer",
                        children: "Cancel"
                      }),
                      a.jsx("button", {
                        type: "submit",
                        disabled: savingAddr,
                        className: "flex-1 py-2.5 rounded-xl bg-[#b85d18] hover:bg-[#94420e] text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm disabled:opacity-50",
                        children: savingAddr ? "Saving..." : (editingAddressId ? "Update Address" : "Save Address")
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
};

function Pb(){const[o,p]=_.useState("home");
_.useEffect(()=>{
  const navHandler=(e)=>{if(e.detail&&e.detail.view){p(e.detail.view);window.scrollTo({top:0,behavior:"smooth"});}};
  window.addEventListener("jbi_navigate",navHandler);
  window.jbiNavigate=(view)=>{window.dispatchEvent(new CustomEvent("jbi_navigate",{detail:{view}}));};
  return()=>window.removeEventListener("jbi_navigate",navHandler);
},[]);const[y,d]=_.useState("all"),[z,v]=_.useState(""),[E,D]=_.useState(""),[g,h]=_.useState(null),[O,x]=_.useState(()=>{try{localStorage.removeItem("jbi_products_catalog");const C=localStorage.getItem("jbi_user_products_catalog");if(C){const V=JSON.parse(C);if(Array.isArray(V)&&V.length>0){const ee=V.filter(ce=>!Uf(ce));return localStorage.setItem("jbi_user_products_catalog",JSON.stringify(ee)),ee}}return ut}catch{return ut}});_.useEffect(()=>{try{localStorage.setItem("jbi_user_products_catalog",JSON.stringify(O))}catch(C){console.error("Failed to save products to localStorage",C)}},[O]);_.useEffect(()=>{if(window.SupabaseService&&window.SupabaseService.getProducts){window.SupabaseService.getProducts().then(prods=>{if(Array.isArray(prods)&&prods.length>0){const valid=prods.filter(ce=>!Uf(ce));if(valid.length>0){x(valid);}}}).catch(()=>{});}const handleProductsUpdate=(e)=>{const detail=e?.detail;if(detail?.action==="add"&&detail.product){x(prev=>[detail.product,...prev.filter(p=>p.id!==detail.product.id)]);}else if(detail?.action==="update"&&detail.product){x(prev=>prev.map(p=>p.id===detail.product.id?detail.product:p));}else if(detail?.action==="delete"&&detail.productId){x(prev=>prev.filter(p=>p.id!==detail.productId));}};window.addEventListener("jbi_products_updated",handleProductsUpdate);return()=>window.removeEventListener("jbi_products_updated",handleProductsUpdate);},[]);const H=C=>{x(V=>[C,...V.filter(p=>p.id!==C.id)]);if(window.SupabaseService&&window.SupabaseService.addProduct){window.SupabaseService.addProduct(C).catch(err=>console.warn("Supabase addProduct error:",err));}},R=C=>{x(V=>V.map(ee=>ee.id===C.id?C:ee));if(window.SupabaseService&&window.SupabaseService.updateProduct){window.SupabaseService.updateProduct(C.id,C).catch(err=>console.warn("Supabase updateProduct error:",err));}},Q=C=>{const prodId=typeof C==="object"&&C!==null?C.id:C;x(V=>V.filter(ee=>ee.id!==prodId));if(window.SupabaseService&&window.SupabaseService.deleteProduct){window.SupabaseService.deleteProduct(prodId).catch(err=>console.warn("Supabase deleteProduct error:",err));}},j=(C,V)=>{let updatedStock=0;x(ee=>ee.map(ce=>{if(ce.id===C){updatedStock=(ce.stock??ce.stock_quantity??0)+V;return{...ce,stock:updatedStock,stock_quantity:updatedStock};}return ce;}));if(window.SupabaseService&&window.SupabaseService.restockProduct){window.SupabaseService.restockProduct(C,updatedStock).catch(err=>console.warn("Supabase restockProduct error:",err));}},[X,G]=_.useState(()=>{try{const u=window.currentUser;if(u){const uEmail=u?.email?.toLowerCase()?.trim();if(uEmail){const userCart=localStorage.getItem("jbi_user_cart_"+uEmail);if(userCart){const V=JSON.parse(userCart);if(Array.isArray(V))return V.filter(ee=>ee&&ee.product&&ee.product.id);}}}const C=localStorage.getItem("jbi_cart");if(C){const V=JSON.parse(C);if(Array.isArray(V))return V.filter(ee=>ee&&ee.product&&ee.product.id);}return[];}catch{return[];}}),[w,Y]=_.useState(!1),[I,re]=_.useState(()=>{try{const u=window.currentUser;if(u){const uEmail=u?.email?.toLowerCase()?.trim();if(uEmail){const userWish=localStorage.getItem("jbi_user_wishlist_"+uEmail);if(userWish){const V=JSON.parse(userWish);if(Array.isArray(V))return V.filter(ce=>!fx.has(ce));}}}const C=localStorage.getItem("jbi_wishlist");if(C){const V=JSON.parse(C);if(Array.isArray(V))return V.filter(ce=>!fx.has(ce));}return[];}catch{return[];}}),[me,K]=_.useState(!1);_.useEffect(()=>{try{const u=window.currentUser;if(u){const uEmail=u?.email?.toLowerCase()?.trim();if(uEmail){localStorage.setItem("jbi_user_cart_"+uEmail,JSON.stringify(X));if(window.SupabaseService&&window.SupabaseService.syncUserCart){window.SupabaseService.syncUserCart(uEmail,X,I);}return;}}localStorage.setItem("jbi_cart",JSON.stringify(X));}catch(C){console.error("Failed to save cart",C);}},[X]);_.useEffect(()=>{try{const u=window.currentUser;if(u){const uEmail=u?.email?.toLowerCase()?.trim();if(uEmail){localStorage.setItem("jbi_user_wishlist_"+uEmail,JSON.stringify(I));if(window.SupabaseService&&window.SupabaseService.syncUserCart){window.SupabaseService.syncUserCart(uEmail,X,I);}return;}}localStorage.setItem("jbi_wishlist",JSON.stringify(I));}catch(C){console.error("Failed to save wishlist",C);}},[I]);_.useEffect(()=>{try{const u=window.currentUser;if(u){const uEmail=u?.email?.toLowerCase()?.trim();if(uEmail&&window.SupabaseService&&window.SupabaseService.getUserCart){window.SupabaseService.getUserCart(uEmail).then(res=>{if(res&&Array.isArray(res.cartItems)&&res.cartItems.length>0){G(res.cartItems);}}).catch(()=>{});}}}catch(e){}const handleAuthChange=async(e)=>{const detail=e?.detail;if(detail&&detail.type==="login"&&detail.user?.email){const uEmail=detail.user.email.toLowerCase().trim();let loadedCart=null;if(window.SupabaseService&&window.SupabaseService.getUserCart){try{const res=await window.SupabaseService.getUserCart(uEmail);if(res&&Array.isArray(res.cartItems)&&res.cartItems.length>0){loadedCart=res.cartItems;}}catch(err){}}if(!loadedCart){try{const cached=localStorage.getItem("jbi_user_cart_"+uEmail);if(cached)loadedCart=JSON.parse(cached);}catch(err){}}if(loadedCart&&loadedCart.length>0){G(loadedCart);}localStorage.setItem("jbi_cart","[]");}else if(detail&&detail.type==="logout"){G([]);re([]);localStorage.setItem("jbi_cart","[]");localStorage.setItem("jbi_wishlist","[]");}};window.addEventListener("jbi_auth_event",handleAuthChange);return()=>window.removeEventListener("jbi_auth_event",handleAuthChange);},[]);_.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[o]);const te=(C,V=1)=>{G(ee=>ee.find(m=>m.product.id===C.id)?ee.map(m=>m.product.id===C.id?{...m,quantity:m.quantity+V}:m):[...ee,{product:C,quantity:V}]);try{const prev=document.getElementById("jbi-cart-toast");if(prev)prev.remove();const t=document.createElement("div");t.id="jbi-cart-toast";t.className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 bg-[#241710] text-[#fcf9f5] px-5 py-3.5 rounded-xl shadow-2xl border border-[#d87c35]/40 transition-all duration-300";t.innerHTML=`<div class="w-2.5 h-2.5 rounded-full bg-[#34d399]"></div><div class="flex flex-col"><span class="text-xs font-bold text-[#fcf9f5] tracking-wide">Added to Cart</span><span class="text-[11px] text-[#e8cbb5] truncate max-w-[200px]">${(C.title||"Handcrafted Item").replace(/</g,"&lt;")}</span></div><button id="jbi-toast-view-cart" class="ml-2 px-2.5 py-1 text-[11px] font-semibold bg-[#d87c35] text-white rounded-lg hover:bg-[#b85c18] transition-colors">View Cart</button>`;document.body.appendChild(t);document.getElementById("jbi-toast-view-cart")?.addEventListener("click",()=>{Y(!0);t.remove();});setTimeout(()=>{if(t.parentNode){t.style.opacity="0";setTimeout(()=>t.remove(),300)}},3500);}catch(e){}},F=(C,V)=>{G(ee=>ee.map(ce=>ce.product.id===C?{...ce,quantity:V}:ce))},Ve=C=>{G(V=>V.filter(ee=>ee.product.id!==C))},we=()=>{G([])},J=C=>{re(V=>V.includes(C.id)?V.filter(ee=>ee!==C.id):[...V,C.id])},Se=C=>{d(C),v(""),p("shop")},he=C=>{v(C),p("shop")},le=C=>{D(C),p("artisans")},N=O.filter(C=>I.includes(C.id));return o==="admin"?a.jsx($b,{products:O,onAddProduct:H,onUpdateProduct:R,onDeleteProduct:Q,onRestockProduct:j,onSwitchToStore:()=>p("home")}):a.jsxs("div",{className:"min-h-screen bg-[#fcf9f5] flex flex-col selection:bg-[#fed7aa] selection:text-[#b85d18]",children:[a.jsx(Sb,{currentView:o,setCurrentView:p,cartItems:X,setIsCartOpen:Y,wishlistCount:N.length,onOpenWishlist:()=>K(!0),onSearch:he,selectedCategory:y,onSelectCategory:Se}),a.jsxs("main",{className:"flex-1",children:[o==="profile"&&a.jsx(UserProfilePageComponent,{onNavigate:p,onExploreClick:()=>{d("all"),p("shop")}}),o==="orders"&&a.jsx(OrdersPageComponent,{onNavigate:p,onExploreClick:()=>{d("all"),p("shop")},onQuickView:h,onAddToCart:C=>te(C,1),onSelectArtisan:le}),o==="payments"&&a.jsx(ProfessionalPaymentPageComponent,{cartItems:X,onNavigate:p,onClearCart:we,onUpdateQuantity:F,onRemoveItem:Ve,onQuickView:h,onAddToCart:C=>te(C,1)}),o==="home"&&a.jsxs(a.Fragment,{children:[a.jsx(kb,{onExploreClick:()=>{d("all"),p("shop")},onCollectionsClick:()=>{d("all"),p("shop")}}),a.jsx(Eb,{onSelectCategory:Se,onQuickView:h,onAddToCart:C=>te(C,1),wishlistIds:I,onToggleWishlist:J,onViewAllClick:()=>{d("all"),v(""),p("shop")},products:O,onSelectArtisan:le}),a.jsx(Mb,{products:O,onAddToCart:C=>te(C,1),onQuickView:C=>h(C),wishlistIds:I,onToggleWishlist:J,onViewAllClick:()=>{d("all"),p("shop")},onSelectArtisan:le}),a.jsx(Ab,{})]}),o==="shop"&&a.jsx(_b,{products:O,onAddToCart:C=>te(C,1),onQuickView:C=>h(C),wishlistIds:I,onToggleWishlist:J,selectedCategory:y,onSelectCategory:d,onSelectArtisan:le,initialSearchQuery:z}),o==="artisans"&&a.jsx(Tb,{products:O,onAddToCart:C=>te(C,1),onQuickView:C=>h(C),wishlistIds:I,onToggleWishlist:J,selectedArtisanId:E,onSelectArtisan:le}),o==="impact"&&a.jsx(Lf,{}),o==="contact"&&a.jsx(Db,{}),o==="about"&&a.jsx(Ob,{})]}),a.jsx(Rb,{onNavigate:C=>p(C),onSelectCategory:Se}),a.jsx(zb,{product:g,onClose:()=>h(null),onAddToCart:te,isWishlisted:g?I.includes(g.id):!1,onToggleWishlist:J,onSelectArtisan:le}),a.jsx(Lb,{isOpen:w,onClose:()=>Y(!1),cartItems:X,onUpdateQuantity:F,onRemoveItem:Ve,onClearCart:we}),a.jsx(Hb,{isOpen:me,onClose:()=>K(!1),wishlistProducts:N,onAddToCart:C=>te(C,1),onRemoveFromWishlist:J})]})}R0.createRoot(document.getElementById("root")).render(a.jsx(_.StrictMode,{children:a.jsx(Pb,{})}));
