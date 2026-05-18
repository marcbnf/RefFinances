(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ST(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var n_={exports:{}},Tu={},r_={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),RT=Symbol.for("react.portal"),AT=Symbol.for("react.fragment"),CT=Symbol.for("react.strict_mode"),PT=Symbol.for("react.profiler"),NT=Symbol.for("react.provider"),bT=Symbol.for("react.context"),DT=Symbol.for("react.forward_ref"),OT=Symbol.for("react.suspense"),VT=Symbol.for("react.memo"),MT=Symbol.for("react.lazy"),Sm=Symbol.iterator;function LT(t){return t===null||typeof t!="object"?null:(t=Sm&&t[Sm]||t["@@iterator"],typeof t=="function"?t:null)}var s_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i_=Object.assign,o_={};function gi(t,e,n){this.props=t,this.context=e,this.refs=o_,this.updater=n||s_}gi.prototype.isReactComponent={};gi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};gi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function a_(){}a_.prototype=gi.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=o_,this.updater=n||s_}var $d=Bd.prototype=new a_;$d.constructor=Bd;i_($d,gi.prototype);$d.isPureReactComponent=!0;var Rm=Array.isArray,l_=Object.prototype.hasOwnProperty,Hd={current:null},u_={key:!0,ref:!0,__self:!0,__source:!0};function c_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)l_.call(e,r)&&!u_.hasOwnProperty(r)&&(s[r]=e[r]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var l=Array(u),h=0;h<u;h++)l[h]=arguments[h+2];s.children=l}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return{$$typeof:sa,type:t,key:i,ref:o,props:s,_owner:Hd.current}}function jT(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qd(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function zT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Am=/\/+/g;function Ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?zT(""+t.key):e.toString(36)}function hl(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sa:case RT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Ac(o,0):r,Rm(s)?(n="",t!=null&&(n=t.replace(Am,"$&/")+"/"),hl(s,e,n,"",function(h){return h})):s!=null&&(qd(s)&&(s=jT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Am,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Rm(t))for(var u=0;u<t.length;u++){i=t[u];var l=r+Ac(i,u);o+=hl(i,e,n,l,s)}else if(l=LT(t),typeof l=="function")for(t=l.call(t),u=0;!(i=t.next()).done;)i=i.value,l=r+Ac(i,u++),o+=hl(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var r=[],s=0;return hl(t,r,"","",function(i){return e.call(n,i,s++)}),r}function FT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},dl={transition:null},UT={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:dl,ReactCurrentOwner:Hd};function h_(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!qd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=gi;ae.Fragment=AT;ae.Profiler=PT;ae.PureComponent=Bd;ae.StrictMode=CT;ae.Suspense=OT;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UT;ae.act=h_;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=i_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Hd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(l in e)l_.call(e,l)&&!u_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&u!==void 0?u[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){u=Array(l);for(var h=0;h<l;h++)u[h]=arguments[h+2];r.children=u}return{$$typeof:sa,type:t.type,key:s,ref:i,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:bT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:NT,_context:t},t.Consumer=t};ae.createElement=c_;ae.createFactory=function(t){var e=c_.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:DT,render:t}};ae.isValidElement=qd;ae.lazy=function(t){return{$$typeof:MT,_payload:{_status:-1,_result:t},_init:FT}};ae.memo=function(t,e){return{$$typeof:VT,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=dl.transition;dl.transition={};try{t()}finally{dl.transition=e}};ae.unstable_act=h_;ae.useCallback=function(t,e){return kt.current.useCallback(t,e)};ae.useContext=function(t){return kt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return kt.current.useEffect(t,e)};ae.useId=function(){return kt.current.useId()};ae.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return kt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};ae.useRef=function(t){return kt.current.useRef(t)};ae.useState=function(t){return kt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return kt.current.useTransition()};ae.version="18.3.1";r_.exports=ae;var H=r_.exports;const BT=ST(H);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $T=H,HT=Symbol.for("react.element"),qT=Symbol.for("react.fragment"),WT=Object.prototype.hasOwnProperty,KT=$T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,GT={key:!0,ref:!0,__self:!0,__source:!0};function d_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)WT.call(e,r)&&!GT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:HT,type:t,key:i,ref:o,props:s,_owner:KT.current}}Tu.Fragment=qT;Tu.jsx=d_;Tu.jsxs=d_;n_.exports=Tu;var f=n_.exports,Eh={},f_={exports:{}},Ht={},p_={exports:{}},m_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,q){var W=U.length;U.push(q);e:for(;0<W;){var J=W-1>>>1,se=U[J];if(0<s(se,q))U[J]=q,U[W]=se,W=J;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var q=U[0],W=U.pop();if(W!==q){U[0]=W;e:for(var J=0,se=U.length,ge=se>>>1;J<ge;){var $e=2*(J+1)-1,je=U[$e],we=$e+1,re=U[we];if(0>s(je,W))we<se&&0>s(re,je)?(U[J]=re,U[we]=W,J=we):(U[J]=je,U[$e]=W,J=$e);else if(we<se&&0>s(re,W))U[J]=re,U[we]=W,J=we;else break e}}return q}function s(U,q){var W=U.sortIndex-q.sortIndex;return W!==0?W:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var l=[],h=[],p=1,m=null,g=3,x=!1,k=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(U){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=U)r(h),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(h)}}function b(U){if(P=!1,R(U),!k)if(n(l)!==null)k=!0,Ve(V);else{var q=n(h);q!==null&&ie(b,q.startTime-U)}}function V(U,q){k=!1,P&&(P=!1,I(_),_=-1),x=!0;var W=g;try{for(R(q),m=n(l);m!==null&&(!(m.expirationTime>q)||U&&!C());){var J=m.callback;if(typeof J=="function"){m.callback=null,g=m.priorityLevel;var se=J(m.expirationTime<=q);q=t.unstable_now(),typeof se=="function"?m.callback=se:m===n(l)&&r(l),R(q)}else r(l);m=n(l)}if(m!==null)var ge=!0;else{var $e=n(h);$e!==null&&ie(b,$e.startTime-q),ge=!1}return ge}finally{m=null,g=W,x=!1}}var j=!1,T=null,_=-1,E=5,S=-1;function C(){return!(t.unstable_now()-S<E)}function A(){if(T!==null){var U=t.unstable_now();S=U;var q=!0;try{q=T(!0,U)}finally{q?w():(j=!1,T=null)}}else j=!1}var w;if(typeof v=="function")w=function(){v(A)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,ye=ne.port2;ne.port1.onmessage=A,w=function(){ye.postMessage(null)}}else w=function(){D(A,0)};function Ve(U){T=U,j||(j=!0,w())}function ie(U,q){_=D(function(){U(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){k||x||(k=!0,Ve(V))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var W=g;g=q;try{return U()}finally{g=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=g;g=U;try{return q()}finally{g=W}},t.unstable_scheduleCallback=function(U,q,W){var J=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,U){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=W+se,U={id:p++,callback:q,priorityLevel:U,startTime:W,expirationTime:se,sortIndex:-1},W>J?(U.sortIndex=W,e(h,U),n(l)===null&&U===n(h)&&(P?(I(_),_=-1):P=!0,ie(b,W-J))):(U.sortIndex=se,e(l,U),k||x||(k=!0,Ve(V))),U},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(U){var q=g;return function(){var W=g;g=q;try{return U.apply(this,arguments)}finally{g=W}}}})(m_);p_.exports=m_;var QT=p_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=H,$t=QT;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g_=new Set,Po={};function fs(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(Po[t]=e,t=0;t<e.length;t++)g_.add(e[t])}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Th=Object.prototype.hasOwnProperty,YT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},Pm={};function JT(t){return Th.call(Pm,t)?!0:Th.call(Cm,t)?!1:YT.test(t)?Pm[t]=!0:(Cm[t]=!0,!1)}function ZT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function eI(t,e,n,r){if(e===null||typeof e>"u"||ZT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function St(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var at={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){at[t]=new St(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];at[e]=new St(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){at[t]=new St(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){at[t]=new St(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){at[t]=new St(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){at[t]=new St(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){at[t]=new St(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){at[t]=new St(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){at[t]=new St(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wd=/[\-:]([a-z])/g;function Kd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wd,Kd);at[e]=new St(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wd,Kd);at[e]=new St(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wd,Kd);at[e]=new St(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){at[t]=new St(t,1,!1,t.toLowerCase(),null,!1,!1)});at.xlinkHref=new St("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){at[t]=new St(t,1,!1,t.toLowerCase(),null,!0,!0)});function Gd(t,e,n,r){var s=at.hasOwnProperty(e)?at[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(eI(e,n,s,r)&&(n=null),r||s===null?JT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kn=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ba=Symbol.for("react.element"),Ps=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),Ih=Symbol.for("react.profiler"),y_=Symbol.for("react.provider"),__=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),xh=Symbol.for("react.suspense"),kh=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),v_=Symbol.for("react.offscreen"),Nm=Symbol.iterator;function qi(t){return t===null||typeof t!="object"?null:(t=Nm&&t[Nm]||t["@@iterator"],typeof t=="function"?t:null)}var be=Object.assign,Cc;function no(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Pc=!1;function Nc(t,e){if(!t||Pc)return"";Pc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,u=i.length-1;1<=o&&0<=u&&s[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(s[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||s[o]!==i[u]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=u);break}}}finally{Pc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?no(t):""}function tI(t){switch(t.tag){case 5:return no(t.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return t=Nc(t.type,!1),t;case 11:return t=Nc(t.type.render,!1),t;case 1:return t=Nc(t.type,!0),t;default:return""}}function Sh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ns:return"Fragment";case Ps:return"Portal";case Ih:return"Profiler";case Qd:return"StrictMode";case xh:return"Suspense";case kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case __:return(t.displayName||"Context")+".Consumer";case y_:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:Sh(t.type)||"Memo";case nr:e=t._payload,t=t._init;try{return Sh(t(e))}catch{}}return null}function nI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sh(e);case 8:return e===Qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function w_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rI(t){var e=w_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=rI(t))}function E_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=w_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ol(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Rh(t,e){var n=e.checked;return be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function T_(t,e){e=e.checked,e!=null&&Gd(t,"checked",e,!1)}function Ah(t,e){T_(t,e);var n=Rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ch(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ch(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ch(t,e,n){(e!=="number"||Ol(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function Hs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Ph(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Om(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(ro(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function I_(t,e){var n=Rr(e.value),r=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Vm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function x_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?x_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,k_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function No(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sI=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){sI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function S_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function R_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=S_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var iI=be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bh(t,e){if(e){if(iI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Dh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oh=null;function Jd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vh=null,qs=null,Ws=null;function Mm(t){if(t=aa(t)){if(typeof Vh!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Ru(e),Vh(t.stateNode,t.type,e))}}function A_(t){qs?Ws?Ws.push(t):Ws=[t]:qs=t}function C_(){if(qs){var t=qs,e=Ws;if(Ws=qs=null,Mm(t),e)for(t=0;t<e.length;t++)Mm(e[t])}}function P_(t,e){return t(e)}function N_(){}var bc=!1;function b_(t,e,n){if(bc)return t(e,n);bc=!0;try{return P_(t,e,n)}finally{bc=!1,(qs!==null||Ws!==null)&&(N_(),C_())}}function bo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ru(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Mh=!1;if(zn)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Mh=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Mh=!1}function oI(t,e,n,r,s,i,o,u,l){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var po=!1,Vl=null,Ml=!1,Lh=null,aI={onError:function(t){po=!0,Vl=t}};function lI(t,e,n,r,s,i,o,u,l){po=!1,Vl=null,oI.apply(aI,arguments)}function uI(t,e,n,r,s,i,o,u,l){if(lI.apply(this,arguments),po){if(po){var h=Vl;po=!1,Vl=null}else throw Error(z(198));Ml||(Ml=!0,Lh=h)}}function ps(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function D_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Lm(t){if(ps(t)!==t)throw Error(z(188))}function cI(t){var e=t.alternate;if(!e){if(e=ps(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Lm(s),t;if(i===r)return Lm(s),e;i=i.sibling}throw Error(z(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,u=s.child;u;){if(u===n){o=!0,n=s,r=i;break}if(u===r){o=!0,r=s,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=s;break}if(u===r){o=!0,r=i,n=s;break}u=u.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function O_(t){return t=cI(t),t!==null?V_(t):null}function V_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=V_(t);if(e!==null)return e;t=t.sibling}return null}var M_=$t.unstable_scheduleCallback,jm=$t.unstable_cancelCallback,hI=$t.unstable_shouldYield,dI=$t.unstable_requestPaint,Fe=$t.unstable_now,fI=$t.unstable_getCurrentPriorityLevel,Zd=$t.unstable_ImmediatePriority,L_=$t.unstable_UserBlockingPriority,Ll=$t.unstable_NormalPriority,pI=$t.unstable_LowPriority,j_=$t.unstable_IdlePriority,Iu=null,gn=null;function mI(t){if(gn&&typeof gn.onCommitFiberRoot=="function")try{gn.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:_I,gI=Math.log,yI=Math.LN2;function _I(t){return t>>>=0,t===0?32:31-(gI(t)/yI|0)|0}var qa=64,Wa=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var u=o&~s;u!==0?r=so(u):(i&=o,i!==0&&(r=so(i)))}else o=n&~s,o!==0?r=so(o):i!==0&&(r=so(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),s=1<<n,r|=t[n],e&=~s;return r}function vI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-on(i),u=1<<o,l=s[o];l===-1?(!(u&n)||u&r)&&(s[o]=vI(u,e)):l<=e&&(t.expiredLanes|=u),i&=~u}}function jh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function z_(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function Dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ia(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function EI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-on(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var _e=0;function F_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var U_,tf,B_,$_,H_,zh=!1,Ka=[],pr=null,mr=null,gr=null,Do=new Map,Oo=new Map,sr=[],TI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zm(t,e){switch(t){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oo.delete(e.pointerId)}}function Ki(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=aa(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function II(t,e,n,r,s){switch(e){case"focusin":return pr=Ki(pr,t,e,n,r,s),!0;case"dragenter":return mr=Ki(mr,t,e,n,r,s),!0;case"mouseover":return gr=Ki(gr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Do.set(i,Ki(Do.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Oo.set(i,Ki(Oo.get(i)||null,t,e,n,r,s)),!0}return!1}function q_(t){var e=Gr(t.target);if(e!==null){var n=ps(e);if(n!==null){if(e=n.tag,e===13){if(e=D_(n),e!==null){t.blockedOn=e,H_(t.priority,function(){B_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Oh=r,n.target.dispatchEvent(r),Oh=null}else return e=aa(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){fl(t)&&n.delete(e)}function xI(){zh=!1,pr!==null&&fl(pr)&&(pr=null),mr!==null&&fl(mr)&&(mr=null),gr!==null&&fl(gr)&&(gr=null),Do.forEach(Fm),Oo.forEach(Fm)}function Gi(t,e){t.blockedOn===e&&(t.blockedOn=null,zh||(zh=!0,$t.unstable_scheduleCallback($t.unstable_NormalPriority,xI)))}function Vo(t){function e(s){return Gi(s,t)}if(0<Ka.length){Gi(Ka[0],t);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(pr!==null&&Gi(pr,t),mr!==null&&Gi(mr,t),gr!==null&&Gi(gr,t),Do.forEach(e),Oo.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)q_(n),n.blockedOn===null&&sr.shift()}var Ks=Kn.ReactCurrentBatchConfig,zl=!0;function kI(t,e,n,r){var s=_e,i=Ks.transition;Ks.transition=null;try{_e=1,nf(t,e,n,r)}finally{_e=s,Ks.transition=i}}function SI(t,e,n,r){var s=_e,i=Ks.transition;Ks.transition=null;try{_e=4,nf(t,e,n,r)}finally{_e=s,Ks.transition=i}}function nf(t,e,n,r){if(zl){var s=Fh(t,e,n,r);if(s===null)$c(t,e,r,Fl,n),zm(t,r);else if(II(s,t,e,n,r))r.stopPropagation();else if(zm(t,r),e&4&&-1<TI.indexOf(t)){for(;s!==null;){var i=aa(s);if(i!==null&&U_(i),i=Fh(t,e,n,r),i===null&&$c(t,e,r,Fl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else $c(t,e,r,null,n)}}var Fl=null;function Fh(t,e,n,r){if(Fl=null,t=Jd(r),t=Gr(t),t!==null)if(e=ps(t),e===null)t=null;else if(n=e.tag,n===13){if(t=D_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Fl=t,null}function W_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fI()){case Zd:return 1;case L_:return 4;case Ll:case pI:return 16;case j_:return 536870912;default:return 16}default:return 16}}var hr=null,rf=null,pl=null;function K_(){if(pl)return pl;var t,e=rf,n=e.length,r,s="value"in hr?hr.value:hr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return pl=s.slice(t,1<r?1-r:void 0)}function ml(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function Um(){return!1}function qt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ga:Um,this.isPropagationStopped=Um,this}return be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=qt(yi),oa=be({},yi,{view:0,detail:0}),RI=qt(oa),Oc,Vc,Qi,xu=be({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qi&&(Qi&&t.type==="mousemove"?(Oc=t.screenX-Qi.screenX,Vc=t.screenY-Qi.screenY):Vc=Oc=0,Qi=t),Oc)},movementY:function(t){return"movementY"in t?t.movementY:Vc}}),Bm=qt(xu),AI=be({},xu,{dataTransfer:0}),CI=qt(AI),PI=be({},oa,{relatedTarget:0}),Mc=qt(PI),NI=be({},yi,{animationName:0,elapsedTime:0,pseudoElement:0}),bI=qt(NI),DI=be({},yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),OI=qt(DI),VI=be({},yi,{data:0}),$m=qt(VI),MI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=jI[t])?!!e[t]:!1}function of(){return zI}var FI=be({},oa,{key:function(t){if(t.key){var e=MI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UI=qt(FI),BI=be({},xu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hm=qt(BI),$I=be({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),HI=qt($I),qI=be({},yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),WI=qt(qI),KI=be({},xu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),GI=qt(KI),QI=[9,13,27,32],af=zn&&"CompositionEvent"in window,mo=null;zn&&"documentMode"in document&&(mo=document.documentMode);var XI=zn&&"TextEvent"in window&&!mo,G_=zn&&(!af||mo&&8<mo&&11>=mo),qm=" ",Wm=!1;function Q_(t,e){switch(t){case"keyup":return QI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function X_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function YI(t,e){switch(t){case"compositionend":return X_(e);case"keypress":return e.which!==32?null:(Wm=!0,qm);case"textInput":return t=e.data,t===qm&&Wm?null:t;default:return null}}function JI(t,e){if(bs)return t==="compositionend"||!af&&Q_(t,e)?(t=K_(),pl=rf=hr=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return G_&&e.locale!=="ko"?null:e.data;default:return null}}var ZI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Km(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ZI[t.type]:e==="textarea"}function Y_(t,e,n,r){A_(r),e=Ul(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var go=null,Mo=null;function ex(t){lv(t,0)}function ku(t){var e=Vs(t);if(E_(e))return t}function tx(t,e){if(t==="change")return e}var J_=!1;if(zn){var Lc;if(zn){var jc="oninput"in document;if(!jc){var Gm=document.createElement("div");Gm.setAttribute("oninput","return;"),jc=typeof Gm.oninput=="function"}Lc=jc}else Lc=!1;J_=Lc&&(!document.documentMode||9<document.documentMode)}function Qm(){go&&(go.detachEvent("onpropertychange",Z_),Mo=go=null)}function Z_(t){if(t.propertyName==="value"&&ku(Mo)){var e=[];Y_(e,Mo,t,Jd(t)),b_(ex,e)}}function nx(t,e,n){t==="focusin"?(Qm(),go=e,Mo=n,go.attachEvent("onpropertychange",Z_)):t==="focusout"&&Qm()}function rx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ku(Mo)}function sx(t,e){if(t==="click")return ku(e)}function ix(t,e){if(t==="input"||t==="change")return ku(e)}function ox(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:ox;function Lo(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Th.call(e,s)||!ln(t[s],e[s]))return!1}return!0}function Xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=Xm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xm(n)}}function ev(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ev(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tv(){for(var t=window,e=Ol();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ol(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ax(t){var e=tv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ev(n.ownerDocument.documentElement,n)){if(r!==null&&lf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Ym(n,i);var o=Ym(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var lx=zn&&"documentMode"in document&&11>=document.documentMode,Ds=null,Uh=null,yo=null,Bh=!1;function Jm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bh||Ds==null||Ds!==Ol(r)||(r=Ds,"selectionStart"in r&&lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Lo(yo,r)||(yo=r,r=Ul(Uh,"onSelect"),0<r.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ds)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Os={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},zc={},nv={};zn&&(nv=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function Su(t){if(zc[t])return zc[t];if(!Os[t])return t;var e=Os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in nv)return zc[t]=e[n];return t}var rv=Su("animationend"),sv=Su("animationiteration"),iv=Su("animationstart"),ov=Su("transitionend"),av=new Map,Zm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){av.set(t,e),fs(e,[t])}for(var Fc=0;Fc<Zm.length;Fc++){var Uc=Zm[Fc],ux=Uc.toLowerCase(),cx=Uc[0].toUpperCase()+Uc.slice(1);Or(ux,"on"+cx)}Or(rv,"onAnimationEnd");Or(sv,"onAnimationIteration");Or(iv,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(ov,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);fs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fs("onBeforeInput",["compositionend","keypress","textInput","paste"]);fs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));fs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function eg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,uI(r,e,void 0,t),t.currentTarget=null}function lv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var u=r[o],l=u.instance,h=u.currentTarget;if(u=u.listener,l!==i&&s.isPropagationStopped())break e;eg(s,u,h),i=l}else for(o=0;o<r.length;o++){if(u=r[o],l=u.instance,h=u.currentTarget,u=u.listener,l!==i&&s.isPropagationStopped())break e;eg(s,u,h),i=l}}}if(Ml)throw t=Lh,Ml=!1,Lh=null,t}function xe(t,e){var n=e[Kh];n===void 0&&(n=e[Kh]=new Set);var r=t+"__bubble";n.has(r)||(uv(e,t,2,!1),n.add(r))}function Bc(t,e,n){var r=0;e&&(r|=4),uv(n,t,r,e)}var Xa="_reactListening"+Math.random().toString(36).slice(2);function jo(t){if(!t[Xa]){t[Xa]=!0,g_.forEach(function(n){n!=="selectionchange"&&(hx.has(n)||Bc(n,!1,t),Bc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xa]||(e[Xa]=!0,Bc("selectionchange",!1,e))}}function uv(t,e,n,r){switch(W_(e)){case 1:var s=kI;break;case 4:s=SI;break;default:s=nf}n=s.bind(null,e,n,t),s=void 0,!Mh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function $c(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;u!==null;){if(o=Gr(u),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}u=u.parentNode}}r=r.return}b_(function(){var h=i,p=Jd(n),m=[];e:{var g=av.get(t);if(g!==void 0){var x=sf,k=t;switch(t){case"keypress":if(ml(n)===0)break e;case"keydown":case"keyup":x=UI;break;case"focusin":k="focus",x=Mc;break;case"focusout":k="blur",x=Mc;break;case"beforeblur":case"afterblur":x=Mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Bm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=CI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=HI;break;case rv:case sv:case iv:x=bI;break;case ov:x=WI;break;case"scroll":x=RI;break;case"wheel":x=GI;break;case"copy":case"cut":case"paste":x=OI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Hm}var P=(e&4)!==0,D=!P&&t==="scroll",I=P?g!==null?g+"Capture":null:g;P=[];for(var v=h,R;v!==null;){R=v;var b=R.stateNode;if(R.tag===5&&b!==null&&(R=b,I!==null&&(b=bo(v,I),b!=null&&P.push(zo(v,b,R)))),D)break;v=v.return}0<P.length&&(g=new x(g,k,null,n,p),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",g&&n!==Oh&&(k=n.relatedTarget||n.fromElement)&&(Gr(k)||k[Fn]))break e;if((x||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,x?(k=n.relatedTarget||n.toElement,x=h,k=k?Gr(k):null,k!==null&&(D=ps(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(x=null,k=h),x!==k)){if(P=Bm,b="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Hm,b="onPointerLeave",I="onPointerEnter",v="pointer"),D=x==null?g:Vs(x),R=k==null?g:Vs(k),g=new P(b,v+"leave",x,n,p),g.target=D,g.relatedTarget=R,b=null,Gr(p)===h&&(P=new P(I,v+"enter",k,n,p),P.target=R,P.relatedTarget=D,b=P),D=b,x&&k)t:{for(P=x,I=k,v=0,R=P;R;R=ks(R))v++;for(R=0,b=I;b;b=ks(b))R++;for(;0<v-R;)P=ks(P),v--;for(;0<R-v;)I=ks(I),R--;for(;v--;){if(P===I||I!==null&&P===I.alternate)break t;P=ks(P),I=ks(I)}P=null}else P=null;x!==null&&tg(m,g,x,P,!1),k!==null&&D!==null&&tg(m,D,k,P,!0)}}e:{if(g=h?Vs(h):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var V=tx;else if(Km(g))if(J_)V=ix;else{V=rx;var j=nx}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(V=sx);if(V&&(V=V(t,h))){Y_(m,V,n,p);break e}j&&j(t,g,h),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Ch(g,"number",g.value)}switch(j=h?Vs(h):window,t){case"focusin":(Km(j)||j.contentEditable==="true")&&(Ds=j,Uh=h,yo=null);break;case"focusout":yo=Uh=Ds=null;break;case"mousedown":Bh=!0;break;case"contextmenu":case"mouseup":case"dragend":Bh=!1,Jm(m,n,p);break;case"selectionchange":if(lx)break;case"keydown":case"keyup":Jm(m,n,p)}var T;if(af)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else bs?Q_(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(G_&&n.locale!=="ko"&&(bs||_!=="onCompositionStart"?_==="onCompositionEnd"&&bs&&(T=K_()):(hr=p,rf="value"in hr?hr.value:hr.textContent,bs=!0)),j=Ul(h,_),0<j.length&&(_=new $m(_,t,null,n,p),m.push({event:_,listeners:j}),T?_.data=T:(T=X_(n),T!==null&&(_.data=T)))),(T=XI?YI(t,n):JI(t,n))&&(h=Ul(h,"onBeforeInput"),0<h.length&&(p=new $m("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=T))}lv(m,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ul(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=bo(t,n),i!=null&&r.unshift(zo(t,i,s)),i=bo(t,e),i!=null&&r.push(zo(t,i,s))),t=t.return}return r}function ks(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var u=n,l=u.alternate,h=u.stateNode;if(l!==null&&l===r)break;u.tag===5&&h!==null&&(u=h,s?(l=bo(n,i),l!=null&&o.unshift(zo(n,l,u))):s||(l=bo(n,i),l!=null&&o.push(zo(n,l,u)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var dx=/\r\n?/g,fx=/\u0000|\uFFFD/g;function ng(t){return(typeof t=="string"?t:""+t).replace(dx,`
`).replace(fx,"")}function Ya(t,e,n){if(e=ng(e),ng(t)!==e&&n)throw Error(z(425))}function Bl(){}var $h=null,Hh=null;function qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wh=typeof setTimeout=="function"?setTimeout:void 0,px=typeof clearTimeout=="function"?clearTimeout:void 0,rg=typeof Promise=="function"?Promise:void 0,mx=typeof queueMicrotask=="function"?queueMicrotask:typeof rg<"u"?function(t){return rg.resolve(null).then(t).catch(gx)}:Wh;function gx(t){setTimeout(function(){throw t})}function Hc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Vo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Vo(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function sg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var _i=Math.random().toString(36).slice(2),pn="__reactFiber$"+_i,Fo="__reactProps$"+_i,Fn="__reactContainer$"+_i,Kh="__reactEvents$"+_i,yx="__reactListeners$"+_i,_x="__reactHandles$"+_i;function Gr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Fn]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=sg(t);t!==null;){if(n=t[pn])return n;t=sg(t)}return e}t=n,n=t.parentNode}return null}function aa(t){return t=t[pn]||t[Fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Ru(t){return t[Fo]||null}var Gh=[],Ms=-1;function Vr(t){return{current:t}}function ke(t){0>Ms||(t.current=Gh[Ms],Gh[Ms]=null,Ms--)}function Te(t,e){Ms++,Gh[Ms]=t.current,t.current=e}var Ar={},_t=Vr(Ar),bt=Vr(!1),ns=Ar;function ti(t,e){var n=t.type.contextTypes;if(!n)return Ar;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Dt(t){return t=t.childContextTypes,t!=null}function $l(){ke(bt),ke(_t)}function ig(t,e,n){if(_t.current!==Ar)throw Error(z(168));Te(_t,e),Te(bt,n)}function cv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(z(108,nI(t)||"Unknown",s));return be({},n,r)}function Hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,ns=_t.current,Te(_t,t),Te(bt,bt.current),!0}function og(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=cv(t,e,ns),r.__reactInternalMemoizedMergedChildContext=t,ke(bt),ke(_t),Te(_t,t)):ke(bt),Te(bt,n)}var Pn=null,Au=!1,qc=!1;function hv(t){Pn===null?Pn=[t]:Pn.push(t)}function vx(t){Au=!0,hv(t)}function Mr(){if(!qc&&Pn!==null){qc=!0;var t=0,e=_e;try{var n=Pn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pn=null,Au=!1}catch(s){throw Pn!==null&&(Pn=Pn.slice(t+1)),M_(Zd,Mr),s}finally{_e=e,qc=!1}}return null}var Ls=[],js=0,ql=null,Wl=0,Kt=[],Gt=0,rs=null,Nn=1,bn="";function Hr(t,e){Ls[js++]=Wl,Ls[js++]=ql,ql=t,Wl=e}function dv(t,e,n){Kt[Gt++]=Nn,Kt[Gt++]=bn,Kt[Gt++]=rs,rs=t;var r=Nn;t=bn;var s=32-on(r)-1;r&=~(1<<s),n+=1;var i=32-on(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Nn=1<<32-on(e)+s|n<<s|r,bn=i+t}else Nn=1<<i|n<<s|r,bn=t}function uf(t){t.return!==null&&(Hr(t,1),dv(t,1,0))}function cf(t){for(;t===ql;)ql=Ls[--js],Ls[js]=null,Wl=Ls[--js],Ls[js]=null;for(;t===rs;)rs=Kt[--Gt],Kt[Gt]=null,bn=Kt[--Gt],Kt[Gt]=null,Nn=Kt[--Gt],Kt[Gt]=null}var Bt=null,zt=null,Ae=!1,sn=null;function fv(t,e){var n=Qt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ag(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Bt=t,zt=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Bt=t,zt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=rs!==null?{id:Nn,overflow:bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Qt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Bt=t,zt=null,!0):!1;default:return!1}}function Qh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xh(t){if(Ae){var e=zt;if(e){var n=e;if(!ag(t,e)){if(Qh(t))throw Error(z(418));e=yr(n.nextSibling);var r=Bt;e&&ag(t,e)?fv(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Bt=t)}}else{if(Qh(t))throw Error(z(418));t.flags=t.flags&-4097|2,Ae=!1,Bt=t}}}function lg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Ja(t){if(t!==Bt)return!1;if(!Ae)return lg(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qh(t.type,t.memoizedProps)),e&&(e=zt)){if(Qh(t))throw pv(),Error(z(418));for(;e;)fv(t,e),e=yr(e.nextSibling)}if(lg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){zt=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}zt=null}}else zt=Bt?yr(t.stateNode.nextSibling):null;return!0}function pv(){for(var t=zt;t;)t=yr(t.nextSibling)}function ni(){zt=Bt=null,Ae=!1}function hf(t){sn===null?sn=[t]:sn.push(t)}var wx=Kn.ReactCurrentBatchConfig;function Xi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var u=s.refs;o===null?delete u[i]:u[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function Za(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ug(t){var e=t._init;return e(t._payload)}function mv(t){function e(I,v){if(t){var R=I.deletions;R===null?(I.deletions=[v],I.flags|=16):R.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function s(I,v){return I=Er(I,v),I.index=0,I.sibling=null,I}function i(I,v,R){return I.index=R,t?(R=I.alternate,R!==null?(R=R.index,R<v?(I.flags|=2,v):R):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function u(I,v,R,b){return v===null||v.tag!==6?(v=Jc(R,I.mode,b),v.return=I,v):(v=s(v,R),v.return=I,v)}function l(I,v,R,b){var V=R.type;return V===Ns?p(I,v,R.props.children,b,R.key):v!==null&&(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===nr&&ug(V)===v.type)?(b=s(v,R.props),b.ref=Xi(I,v,R),b.return=I,b):(b=Tl(R.type,R.key,R.props,null,I.mode,b),b.ref=Xi(I,v,R),b.return=I,b)}function h(I,v,R,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==R.containerInfo||v.stateNode.implementation!==R.implementation?(v=Zc(R,I.mode,b),v.return=I,v):(v=s(v,R.children||[]),v.return=I,v)}function p(I,v,R,b,V){return v===null||v.tag!==7?(v=Zr(R,I.mode,b,V),v.return=I,v):(v=s(v,R),v.return=I,v)}function m(I,v,R){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Jc(""+v,I.mode,R),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ba:return R=Tl(v.type,v.key,v.props,null,I.mode,R),R.ref=Xi(I,null,v),R.return=I,R;case Ps:return v=Zc(v,I.mode,R),v.return=I,v;case nr:var b=v._init;return m(I,b(v._payload),R)}if(ro(v)||qi(v))return v=Zr(v,I.mode,R,null),v.return=I,v;Za(I,v)}return null}function g(I,v,R,b){var V=v!==null?v.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return V!==null?null:u(I,v,""+R,b);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ba:return R.key===V?l(I,v,R,b):null;case Ps:return R.key===V?h(I,v,R,b):null;case nr:return V=R._init,g(I,v,V(R._payload),b)}if(ro(R)||qi(R))return V!==null?null:p(I,v,R,b,null);Za(I,R)}return null}function x(I,v,R,b,V){if(typeof b=="string"&&b!==""||typeof b=="number")return I=I.get(R)||null,u(v,I,""+b,V);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ba:return I=I.get(b.key===null?R:b.key)||null,l(v,I,b,V);case Ps:return I=I.get(b.key===null?R:b.key)||null,h(v,I,b,V);case nr:var j=b._init;return x(I,v,R,j(b._payload),V)}if(ro(b)||qi(b))return I=I.get(R)||null,p(v,I,b,V,null);Za(v,b)}return null}function k(I,v,R,b){for(var V=null,j=null,T=v,_=v=0,E=null;T!==null&&_<R.length;_++){T.index>_?(E=T,T=null):E=T.sibling;var S=g(I,T,R[_],b);if(S===null){T===null&&(T=E);break}t&&T&&S.alternate===null&&e(I,T),v=i(S,v,_),j===null?V=S:j.sibling=S,j=S,T=E}if(_===R.length)return n(I,T),Ae&&Hr(I,_),V;if(T===null){for(;_<R.length;_++)T=m(I,R[_],b),T!==null&&(v=i(T,v,_),j===null?V=T:j.sibling=T,j=T);return Ae&&Hr(I,_),V}for(T=r(I,T);_<R.length;_++)E=x(T,I,_,R[_],b),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?_:E.key),v=i(E,v,_),j===null?V=E:j.sibling=E,j=E);return t&&T.forEach(function(C){return e(I,C)}),Ae&&Hr(I,_),V}function P(I,v,R,b){var V=qi(R);if(typeof V!="function")throw Error(z(150));if(R=V.call(R),R==null)throw Error(z(151));for(var j=V=null,T=v,_=v=0,E=null,S=R.next();T!==null&&!S.done;_++,S=R.next()){T.index>_?(E=T,T=null):E=T.sibling;var C=g(I,T,S.value,b);if(C===null){T===null&&(T=E);break}t&&T&&C.alternate===null&&e(I,T),v=i(C,v,_),j===null?V=C:j.sibling=C,j=C,T=E}if(S.done)return n(I,T),Ae&&Hr(I,_),V;if(T===null){for(;!S.done;_++,S=R.next())S=m(I,S.value,b),S!==null&&(v=i(S,v,_),j===null?V=S:j.sibling=S,j=S);return Ae&&Hr(I,_),V}for(T=r(I,T);!S.done;_++,S=R.next())S=x(T,I,_,S.value,b),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?_:S.key),v=i(S,v,_),j===null?V=S:j.sibling=S,j=S);return t&&T.forEach(function(A){return e(I,A)}),Ae&&Hr(I,_),V}function D(I,v,R,b){if(typeof R=="object"&&R!==null&&R.type===Ns&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ba:e:{for(var V=R.key,j=v;j!==null;){if(j.key===V){if(V=R.type,V===Ns){if(j.tag===7){n(I,j.sibling),v=s(j,R.props.children),v.return=I,I=v;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===nr&&ug(V)===j.type){n(I,j.sibling),v=s(j,R.props),v.ref=Xi(I,j,R),v.return=I,I=v;break e}n(I,j);break}else e(I,j);j=j.sibling}R.type===Ns?(v=Zr(R.props.children,I.mode,b,R.key),v.return=I,I=v):(b=Tl(R.type,R.key,R.props,null,I.mode,b),b.ref=Xi(I,v,R),b.return=I,I=b)}return o(I);case Ps:e:{for(j=R.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===R.containerInfo&&v.stateNode.implementation===R.implementation){n(I,v.sibling),v=s(v,R.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=Zc(R,I.mode,b),v.return=I,I=v}return o(I);case nr:return j=R._init,D(I,v,j(R._payload),b)}if(ro(R))return k(I,v,R,b);if(qi(R))return P(I,v,R,b);Za(I,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,v!==null&&v.tag===6?(n(I,v.sibling),v=s(v,R),v.return=I,I=v):(n(I,v),v=Jc(R,I.mode,b),v.return=I,I=v),o(I)):n(I,v)}return D}var ri=mv(!0),gv=mv(!1),Kl=Vr(null),Gl=null,zs=null,df=null;function ff(){df=zs=Gl=null}function pf(t){var e=Kl.current;ke(Kl),t._currentValue=e}function Yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Gs(t,e){Gl=t,df=zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Nt=!0),t.firstContext=null)}function Jt(t){var e=t._currentValue;if(df!==t)if(t={context:t,memoizedValue:e,next:null},zs===null){if(Gl===null)throw Error(z(308));zs=t,Gl.dependencies={lanes:0,firstContext:t}}else zs=zs.next=t;return e}var Qr=null;function mf(t){Qr===null?Qr=[t]:Qr.push(t)}function yv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,mf(e)):(n.next=s.next,s.next=n),e.interleaved=n,Un(t,r)}function Un(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var rr=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _v(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Un(t,n)}return s=r.interleaved,s===null?(e.next=e,mf(r)):(e.next=s.next,s.next=e),r.interleaved=e,Un(t,n)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}function cg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ql(t,e,n,r){var s=t.updateQueue;rr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var l=u,h=l.next;l.next=null,o===null?i=h:o.next=h,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==o&&(u===null?p.firstBaseUpdate=h:u.next=h,p.lastBaseUpdate=l))}if(i!==null){var m=s.baseState;o=0,p=h=l=null,u=i;do{var g=u.lane,x=u.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:x,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=t,P=u;switch(g=e,x=n,P.tag){case 1:if(k=P.payload,typeof k=="function"){m=k.call(x,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=P.payload,g=typeof k=="function"?k.call(x,m,g):k,g==null)break e;m=be({},m,g);break e;case 2:rr=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[u]:g.push(u))}else x={eventTime:x,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(h=p=x,l=m):p=p.next=x,o|=g;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;g=u,u=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(l=m),s.baseState=l,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);is|=o,t.lanes=o,t.memoizedState=m}}function hg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(z(191,s));s.call(r)}}}var la={},yn=Vr(la),Uo=Vr(la),Bo=Vr(la);function Xr(t){if(t===la)throw Error(z(174));return t}function yf(t,e){switch(Te(Bo,e),Te(Uo,t),Te(yn,la),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nh(e,t)}ke(yn),Te(yn,e)}function si(){ke(yn),ke(Uo),ke(Bo)}function vv(t){Xr(Bo.current);var e=Xr(yn.current),n=Nh(e,t.type);e!==n&&(Te(Uo,t),Te(yn,n))}function _f(t){Uo.current===t&&(ke(yn),ke(Uo))}var Pe=Vr(0);function Xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Wc=[];function vf(){for(var t=0;t<Wc.length;t++)Wc[t]._workInProgressVersionPrimary=null;Wc.length=0}var yl=Kn.ReactCurrentDispatcher,Kc=Kn.ReactCurrentBatchConfig,ss=0,Ne=null,He=null,Ye=null,Yl=!1,_o=!1,$o=0,Ex=0;function dt(){throw Error(z(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Ef(t,e,n,r,s,i){if(ss=i,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yl.current=t===null||t.memoizedState===null?kx:Sx,t=n(r,s),_o){i=0;do{if(_o=!1,$o=0,25<=i)throw Error(z(301));i+=1,Ye=He=null,e.updateQueue=null,yl.current=Rx,t=n(r,s)}while(_o)}if(yl.current=Jl,e=He!==null&&He.next!==null,ss=0,Ye=He=Ne=null,Yl=!1,e)throw Error(z(300));return t}function Tf(){var t=$o!==0;return $o=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?Ne.memoizedState=Ye=t:Ye=Ye.next=t,Ye}function Zt(){if(He===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Ye===null?Ne.memoizedState:Ye.next;if(e!==null)Ye=e,He=t;else{if(t===null)throw Error(z(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ye===null?Ne.memoizedState=Ye=t:Ye=Ye.next=t}return Ye}function Ho(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Zt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=He,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var u=o=null,l=null,h=i;do{var p=h.lane;if((ss&p)===p)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(u=l=m,o=r):l=l.next=m,Ne.lanes|=p,is|=p}h=h.next}while(h!==null&&h!==i);l===null?o=r:l.next=u,ln(r,e.memoizedState)||(Nt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ne.lanes|=i,is|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qc(t){var e=Zt(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);ln(i,e.memoizedState)||(Nt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function wv(){}function Ev(t,e){var n=Ne,r=Zt(),s=e(),i=!ln(r.memoizedState,s);if(i&&(r.memoizedState=s,Nt=!0),r=r.queue,If(xv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ye!==null&&Ye.memoizedState.tag&1){if(n.flags|=2048,qo(9,Iv.bind(null,n,r,s,e),void 0,null),Je===null)throw Error(z(349));ss&30||Tv(n,e,s)}return s}function Tv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iv(t,e,n,r){e.value=n,e.getSnapshot=r,kv(e)&&Sv(t)}function xv(t,e,n){return n(function(){kv(e)&&Sv(t)})}function kv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function Sv(t){var e=Un(t,1);e!==null&&an(e,t,1,-1)}function dg(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=xx.bind(null,Ne,t),[e.memoizedState,t]}function qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Rv(){return Zt().memoizedState}function _l(t,e,n,r){var s=fn();Ne.flags|=t,s.memoizedState=qo(1|e,n,void 0,r===void 0?null:r)}function Cu(t,e,n,r){var s=Zt();r=r===void 0?null:r;var i=void 0;if(He!==null){var o=He.memoizedState;if(i=o.destroy,r!==null&&wf(r,o.deps)){s.memoizedState=qo(e,n,i,r);return}}Ne.flags|=t,s.memoizedState=qo(1|e,n,i,r)}function fg(t,e){return _l(8390656,8,t,e)}function If(t,e){return Cu(2048,8,t,e)}function Av(t,e){return Cu(4,2,t,e)}function Cv(t,e){return Cu(4,4,t,e)}function Pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Nv(t,e,n){return n=n!=null?n.concat([t]):null,Cu(4,4,Pv.bind(null,e,t),n)}function xf(){}function bv(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Dv(t,e){var n=Zt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ov(t,e,n){return ss&21?(ln(n,e)||(n=z_(),Ne.lanes|=n,is|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Nt=!0),t.memoizedState=n)}function Tx(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{_e=n,Kc.transition=r}}function Vv(){return Zt().memoizedState}function Ix(t,e,n){var r=wr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Mv(t))Lv(e,n);else if(n=yv(t,e,n,r),n!==null){var s=xt();an(n,t,r,s),jv(n,e,r)}}function xx(t,e,n){var r=wr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mv(t))Lv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,u=i(o,n);if(s.hasEagerState=!0,s.eagerState=u,ln(u,o)){var l=e.interleaved;l===null?(s.next=s,mf(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=yv(t,e,s,r),n!==null&&(s=xt(),an(n,t,r,s),jv(n,e,r))}}function Mv(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function Lv(t,e){_o=Yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ef(t,n)}}var Jl={readContext:Jt,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},kx={readContext:Jt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Jt,useEffect:fg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_l(4194308,4,Pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _l(4194308,4,t,e)},useInsertionEffect:function(t,e){return _l(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Ix.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:dg,useDebugValue:xf,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=dg(!1),e=t[0];return t=Tx.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,s=fn();if(Ae){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),Je===null)throw Error(z(349));ss&30||Tv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,fg(xv.bind(null,r,i,t),[t]),r.flags|=2048,qo(9,Iv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=fn(),e=Je.identifierPrefix;if(Ae){var n=bn,r=Nn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ex++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sx={readContext:Jt,useCallback:bv,useContext:Jt,useEffect:If,useImperativeHandle:Nv,useInsertionEffect:Av,useLayoutEffect:Cv,useMemo:Dv,useReducer:Gc,useRef:Rv,useState:function(){return Gc(Ho)},useDebugValue:xf,useDeferredValue:function(t){var e=Zt();return Ov(e,He.memoizedState,t)},useTransition:function(){var t=Gc(Ho)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Ev,useId:Vv,unstable_isNewReconciler:!1},Rx={readContext:Jt,useCallback:bv,useContext:Jt,useEffect:If,useImperativeHandle:Nv,useInsertionEffect:Av,useLayoutEffect:Cv,useMemo:Dv,useReducer:Qc,useRef:Rv,useState:function(){return Qc(Ho)},useDebugValue:xf,useDeferredValue:function(t){var e=Zt();return He===null?e.memoizedState=t:Ov(e,He.memoizedState,t)},useTransition:function(){var t=Qc(Ho)[0],e=Zt().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Ev,useId:Vv,unstable_isNewReconciler:!1};function nn(t,e){if(t&&t.defaultProps){e=be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pu={isMounted:function(t){return(t=t._reactInternals)?ps(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),s=wr(t),i=Ln(r,s);i.payload=e,n!=null&&(i.callback=n),e=_r(t,i,s),e!==null&&(an(e,t,s,r),gl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),s=wr(t),i=Ln(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=_r(t,i,s),e!==null&&(an(e,t,s,r),gl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=wr(t),s=Ln(n,r);s.tag=2,e!=null&&(s.callback=e),e=_r(t,s,r),e!==null&&(an(e,t,r,n),gl(e,t,r))}};function pg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Lo(n,r)||!Lo(s,i):!0}function zv(t,e,n){var r=!1,s=Ar,i=e.contextType;return typeof i=="object"&&i!==null?i=Jt(i):(s=Dt(e)?ns:_t.current,r=e.contextTypes,i=(r=r!=null)?ti(t,s):Ar),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function mg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pu.enqueueReplaceState(e,e.state,null)}function Zh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},gf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Jt(i):(i=Dt(e)?ns:_t.current,s.context=ti(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Pu.enqueueReplaceState(s,s.state,null),Ql(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ii(t,e){try{var n="",r=e;do n+=tI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Xc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ed(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ax=typeof WeakMap=="function"?WeakMap:Map;function Fv(t,e,n){n=Ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){eu||(eu=!0,cd=r),ed(t,e)},n}function Uv(t,e,n){n=Ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){ed(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){ed(t,e),typeof r!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Ax;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Bx.bind(null,t,e,n),e.then(t,t))}function yg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _g(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ln(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var Cx=Kn.ReactCurrentOwner,Nt=!1;function It(t,e,n,r){e.child=t===null?gv(e,null,n,r):ri(e,t.child,n,r)}function vg(t,e,n,r,s){n=n.render;var i=e.ref;return Gs(e,s),r=Ef(t,e,n,r,i,s),n=Tf(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Bn(t,e,s)):(Ae&&n&&uf(e),e.flags|=1,It(t,e,r,s),e.child)}function wg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!bf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Bv(t,e,i,r,s)):(t=Tl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(o,r)&&t.ref===e.ref)return Bn(t,e,s)}return e.flags|=1,t=Er(i,r),t.ref=e.ref,t.return=e,e.child=t}function Bv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Lo(i,r)&&t.ref===e.ref)if(Nt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Nt=!0);else return e.lanes=t.lanes,Bn(t,e,s)}return td(t,e,n,r,s)}function $v(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Te(Us,jt),jt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Te(Us,jt),jt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Te(Us,jt),jt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Te(Us,jt),jt|=r;return It(t,e,s,n),e.child}function Hv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function td(t,e,n,r,s){var i=Dt(n)?ns:_t.current;return i=ti(e,i),Gs(e,s),n=Ef(t,e,n,r,i,s),r=Tf(),t!==null&&!Nt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Bn(t,e,s)):(Ae&&r&&uf(e),e.flags|=1,It(t,e,n,s),e.child)}function Eg(t,e,n,r,s){if(Dt(n)){var i=!0;Hl(e)}else i=!1;if(Gs(e,s),e.stateNode===null)vl(t,e),zv(e,n,r),Zh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var l=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Jt(h):(h=Dt(n)?ns:_t.current,h=ti(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||l!==h)&&mg(e,o,r,h),rr=!1;var g=e.memoizedState;o.state=g,Ql(e,r,o,s),l=e.memoizedState,u!==r||g!==l||bt.current||rr?(typeof p=="function"&&(Jh(e,n,p,r),l=e.memoizedState),(u=rr||pg(e,n,u,r,g,l,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=h,r=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,_v(t,e),u=e.memoizedProps,h=e.type===e.elementType?u:nn(e.type,u),o.props=h,m=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Jt(l):(l=Dt(n)?ns:_t.current,l=ti(e,l));var x=n.getDerivedStateFromProps;(p=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||g!==l)&&mg(e,o,r,l),rr=!1,g=e.memoizedState,o.state=g,Ql(e,r,o,s);var k=e.memoizedState;u!==m||g!==k||bt.current||rr?(typeof x=="function"&&(Jh(e,n,x,r),k=e.memoizedState),(h=rr||pg(e,n,h,r,g,k,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=l,r=h):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return nd(t,e,n,r,i,s)}function nd(t,e,n,r,s,i){Hv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&og(e,n,!1),Bn(t,e,i);r=e.stateNode,Cx.current=e;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ri(e,t.child,null,i),e.child=ri(e,null,u,i)):It(t,e,u,i),e.memoizedState=r.state,s&&og(e,n,!0),e.child}function qv(t){var e=t.stateNode;e.pendingContext?ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ig(t,e.context,!1),yf(t,e.containerInfo)}function Tg(t,e,n,r,s){return ni(),hf(s),e.flags|=256,It(t,e,n,r),e.child}var rd={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Wv(t,e,n){var r=e.pendingProps,s=Pe.current,i=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Te(Pe,s&1),t===null)return Xh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Du(o,r,0,null),t=Zr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=sd(n),e.memoizedState=rd,t):kf(e,o));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return Px(t,e,o,r,u,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,u=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Er(s,l),r.subtreeFlags=s.subtreeFlags&14680064),u!==null?i=Er(u,i):(i=Zr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=rd,r}return i=t.child,t=i.sibling,r=Er(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kf(t,e){return e=Du({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function el(t,e,n,r){return r!==null&&hf(r),ri(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Px(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Xc(Error(z(422))),el(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Du({mode:"visible",children:r.children},s,0,null),i=Zr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ri(e,t.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=rd,i);if(!(e.mode&1))return el(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(z(419)),r=Xc(i,r,void 0),el(t,e,o,r)}if(u=(o&t.childLanes)!==0,Nt||u){if(r=Je,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Un(t,s),an(r,t,s,-1))}return Nf(),r=Xc(Error(z(421))),el(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=$x.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,zt=yr(s.nextSibling),Bt=e,Ae=!0,sn=null,t!==null&&(Kt[Gt++]=Nn,Kt[Gt++]=bn,Kt[Gt++]=rs,Nn=t.id,bn=t.overflow,rs=e),e=kf(e,r.children),e.flags|=4096,e)}function Ig(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Yh(t.return,e,n)}function Yc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Kv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(It(t,e,r.children,n),r=Pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ig(t,n,e);else if(t.tag===19)Ig(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Te(Pe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Xl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Yc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Xl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Yc(e,!0,n,null,i);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Bn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),is|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Nx(t,e,n){switch(e.tag){case 3:qv(e),ni();break;case 5:vv(e);break;case 1:Dt(e.type)&&Hl(e);break;case 4:yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Te(Kl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Te(Pe,Pe.current&1),e.flags|=128,null):n&e.child.childLanes?Wv(t,e,n):(Te(Pe,Pe.current&1),t=Bn(t,e,n),t!==null?t.sibling:null);Te(Pe,Pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Kv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Te(Pe,Pe.current),r)break;return null;case 22:case 23:return e.lanes=0,$v(t,e,n)}return Bn(t,e,n)}var Gv,id,Qv,Xv;Gv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};id=function(){};Qv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Xr(yn.current);var i=null;switch(n){case"input":s=Rh(t,s),r=Rh(t,r),i=[];break;case"select":s=be({},s,{value:void 0}),r=be({},r,{value:void 0}),i=[];break;case"textarea":s=Ph(t,s),r=Ph(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Bl)}bh(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var u=s[h];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Po.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var l=r[h];if(u=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&l!==u&&(l!=null||u!=null))if(h==="style")if(u){for(o in u)!u.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&u[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,u=u?u.__html:void 0,l!=null&&u!==l&&(i=i||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Po.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&xe("scroll",t),i||u===l||(i=[])):(i=i||[]).push(h,l))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};Xv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yi(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function bx(t,e,n){var r=e.pendingProps;switch(cf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Dt(e.type)&&$l(),ft(e),null;case 3:return r=e.stateNode,si(),ke(bt),ke(_t),vf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ja(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,sn!==null&&(fd(sn),sn=null))),id(t,e),ft(e),null;case 5:_f(e);var s=Xr(Bo.current);if(n=e.type,t!==null&&e.stateNode!=null)Qv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return ft(e),null}if(t=Xr(yn.current),Ja(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[pn]=e,r[Fo]=i,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(s=0;s<io.length;s++)xe(io[s],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":bm(r,i),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},xe("invalid",r);break;case"textarea":Om(r,i),xe("invalid",r)}bh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Ya(r.textContent,u,t),s=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Ya(r.textContent,u,t),s=["children",""+u]):Po.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":$a(r),Dm(r,i,!0);break;case"textarea":$a(r),Vm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Bl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=x_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[pn]=e,t[Fo]=r,Gv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Dh(n,r),n){case"dialog":xe("cancel",t),xe("close",t),s=r;break;case"iframe":case"object":case"embed":xe("load",t),s=r;break;case"video":case"audio":for(s=0;s<io.length;s++)xe(io[s],t);s=r;break;case"source":xe("error",t),s=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),s=r;break;case"details":xe("toggle",t),s=r;break;case"input":bm(t,r),s=Rh(t,r),xe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=be({},r,{value:void 0}),xe("invalid",t);break;case"textarea":Om(t,r),s=Ph(t,r),xe("invalid",t);break;default:s=r}bh(n,s),u=s;for(i in u)if(u.hasOwnProperty(i)){var l=u[i];i==="style"?R_(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&k_(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&No(t,l):typeof l=="number"&&No(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Po.hasOwnProperty(i)?l!=null&&i==="onScroll"&&xe("scroll",t):l!=null&&Gd(t,i,l,o))}switch(n){case"input":$a(t),Dm(t,r,!1);break;case"textarea":$a(t),Vm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Rr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Hs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Hs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Bl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)Xv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Xr(Bo.current),Xr(yn.current),Ja(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(i=r.nodeValue!==n)&&(t=Bt,t!==null))switch(t.tag){case 3:Ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return ft(e),null;case 13:if(ke(Pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&zt!==null&&e.mode&1&&!(e.flags&128))pv(),ni(),e.flags|=98560,i=!1;else if(i=Ja(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(z(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(z(317));i[pn]=e}else ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),i=!1}else sn!==null&&(fd(sn),sn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Pe.current&1?Ke===0&&(Ke=3):Nf())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return si(),id(t,e),t===null&&jo(e.stateNode.containerInfo),ft(e),null;case 10:return pf(e.type._context),ft(e),null;case 17:return Dt(e.type)&&$l(),ft(e),null;case 19:if(ke(Pe),i=e.memoizedState,i===null)return ft(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Yi(i,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Xl(t),o!==null){for(e.flags|=128,Yi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Te(Pe,Pe.current&1|2),e.child}t=t.sibling}i.tail!==null&&Fe()>oi&&(e.flags|=128,r=!0,Yi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Xl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ae)return ft(e),null}else 2*Fe()-i.renderingStartTime>oi&&n!==1073741824&&(e.flags|=128,r=!0,Yi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Fe(),e.sibling=null,n=Pe.current,Te(Pe,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return Pf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?jt&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Dx(t,e){switch(cf(e),e.tag){case 1:return Dt(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return si(),ke(bt),ke(_t),vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _f(e),null;case 13:if(ke(Pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(Pe),null;case 4:return si(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var tl=!1,gt=!1,Ox=typeof WeakSet=="function"?WeakSet:Set,$=null;function Fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function od(t,e,n){try{n()}catch(r){Le(t,e,r)}}var xg=!1;function Vx(t,e){if($h=zl,t=tv(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,l=-1,h=0,p=0,m=t,g=null;t:for(;;){for(var x;m!==n||s!==0&&m.nodeType!==3||(u=o+s),m!==i||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(x=m.firstChild)!==null;)g=m,m=x;for(;;){if(m===t)break t;if(g===n&&++h===s&&(u=o),g===i&&++p===r&&(l=o),(x=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=x}n=u===-1||l===-1?null:{start:u,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hh={focusedElem:t,selectionRange:n},zl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var P=k.memoizedProps,D=k.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?P:nn(e.type,P),D);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(b){Le(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return k=xg,xg=!1,k}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&od(e,n,i)}s=s.next}while(s!==r)}}function Nu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yv(t){var e=t.alternate;e!==null&&(t.alternate=null,Yv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Fo],delete e[Kh],delete e[yx],delete e[_x])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Jv(t){return t.tag===5||t.tag===3||t.tag===4}function kg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ld(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Bl));else if(r!==4&&(t=t.child,t!==null))for(ld(t,e,n),t=t.sibling;t!==null;)ld(t,e,n),t=t.sibling}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}var tt=null,rn=!1;function Jn(t,e,n){for(n=n.child;n!==null;)Zv(t,e,n),n=n.sibling}function Zv(t,e,n){if(gn&&typeof gn.onCommitFiberUnmount=="function")try{gn.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:gt||Fs(n,e);case 6:var r=tt,s=rn;tt=null,Jn(t,e,n),tt=r,rn=s,tt!==null&&(rn?(t=tt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tt.removeChild(n.stateNode));break;case 18:tt!==null&&(rn?(t=tt,n=n.stateNode,t.nodeType===8?Hc(t.parentNode,n):t.nodeType===1&&Hc(t,n),Vo(t)):Hc(tt,n.stateNode));break;case 4:r=tt,s=rn,tt=n.stateNode.containerInfo,rn=!0,Jn(t,e,n),tt=r,rn=s;break;case 0:case 11:case 14:case 15:if(!gt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&od(n,e,o),s=s.next}while(s!==r)}Jn(t,e,n);break;case 1:if(!gt&&(Fs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Le(n,e,u)}Jn(t,e,n);break;case 21:Jn(t,e,n);break;case 22:n.mode&1?(gt=(r=gt)||n.memoizedState!==null,Jn(t,e,n),gt=r):Jn(t,e,n);break;default:Jn(t,e,n)}}function Sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ox),e.forEach(function(r){var s=Hx.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function tn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,u=o;e:for(;u!==null;){switch(u.tag){case 5:tt=u.stateNode,rn=!1;break e;case 3:tt=u.stateNode.containerInfo,rn=!0;break e;case 4:tt=u.stateNode.containerInfo,rn=!0;break e}u=u.return}if(tt===null)throw Error(z(160));Zv(i,o,s),tt=null,rn=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(h){Le(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)e0(e,t),e=e.sibling}function e0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tn(e,t),hn(t),r&4){try{vo(3,t,t.return),Nu(3,t)}catch(P){Le(t,t.return,P)}try{vo(5,t,t.return)}catch(P){Le(t,t.return,P)}}break;case 1:tn(e,t),hn(t),r&512&&n!==null&&Fs(n,n.return);break;case 5:if(tn(e,t),hn(t),r&512&&n!==null&&Fs(n,n.return),t.flags&32){var s=t.stateNode;try{No(s,"")}catch(P){Le(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,u=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&T_(s,i),Dh(u,o);var h=Dh(u,i);for(o=0;o<l.length;o+=2){var p=l[o],m=l[o+1];p==="style"?R_(s,m):p==="dangerouslySetInnerHTML"?k_(s,m):p==="children"?No(s,m):Gd(s,p,m,h)}switch(u){case"input":Ah(s,i);break;case"textarea":I_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Hs(s,!!i.multiple,x,!1):g!==!!i.multiple&&(i.defaultValue!=null?Hs(s,!!i.multiple,i.defaultValue,!0):Hs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Fo]=i}catch(P){Le(t,t.return,P)}}break;case 6:if(tn(e,t),hn(t),r&4){if(t.stateNode===null)throw Error(z(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Le(t,t.return,P)}}break;case 3:if(tn(e,t),hn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Vo(e.containerInfo)}catch(P){Le(t,t.return,P)}break;case 4:tn(e,t),hn(t);break;case 13:tn(e,t),hn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Af=Fe())),r&4&&Sg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(gt=(h=gt)||p,tn(e,t),gt=h):tn(e,t),hn(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(m=$=p;$!==null;){switch(g=$,x=g.child,g.tag){case 0:case 11:case 14:case 15:vo(4,g,g.return);break;case 1:Fs(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(P){Le(r,n,P)}}break;case 5:Fs(g,g.return);break;case 22:if(g.memoizedState!==null){Ag(m);continue}}x!==null?(x.return=g,$=x):Ag(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,u.style.display=S_("display",o))}catch(P){Le(t,t.return,P)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){Le(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:tn(e,t),hn(t),r&4&&Sg(t);break;case 21:break;default:tn(e,t),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Jv(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(No(s,""),r.flags&=-33);var i=kg(t);ud(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,u=kg(t);ld(t,u,o);break;default:throw Error(z(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Mx(t,e,n){$=t,t0(t)}function t0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||tl;if(!o){var u=s.alternate,l=u!==null&&u.memoizedState!==null||gt;u=tl;var h=gt;if(tl=o,(gt=l)&&!h)for($=s;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Cg(s):l!==null?(l.return=o,$=l):Cg(s);for(;i!==null;)$=i,t0(i),i=i.sibling;$=s,tl=u,gt=h}Rg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):Rg(t)}}function Rg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:gt||Nu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!gt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:nn(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&hg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hg(e,o,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Vo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}gt||e.flags&512&&ad(e)}catch(g){Le(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Ag(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Cg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nu(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){Le(e,s,l)}}var i=e.return;try{ad(e)}catch(l){Le(e,i,l)}break;case 5:var o=e.return;try{ad(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){$=null;break}var u=e.sibling;if(u!==null){u.return=e.return,$=u;break}$=e.return}}var Lx=Math.ceil,Zl=Kn.ReactCurrentDispatcher,Sf=Kn.ReactCurrentOwner,Xt=Kn.ReactCurrentBatchConfig,he=0,Je=null,Be=null,it=0,jt=0,Us=Vr(0),Ke=0,Wo=null,is=0,bu=0,Rf=0,wo=null,Ct=null,Af=0,oi=1/0,Cn=null,eu=!1,cd=null,vr=null,nl=!1,dr=null,tu=0,Eo=0,hd=null,wl=-1,El=0;function xt(){return he&6?Fe():wl!==-1?wl:wl=Fe()}function wr(t){return t.mode&1?he&2&&it!==0?it&-it:wx.transition!==null?(El===0&&(El=z_()),El):(t=_e,t!==0||(t=window.event,t=t===void 0?16:W_(t.type)),t):1}function an(t,e,n,r){if(50<Eo)throw Eo=0,hd=null,Error(z(185));ia(t,n,r),(!(he&2)||t!==Je)&&(t===Je&&(!(he&2)&&(bu|=n),Ke===4&&ir(t,it)),Ot(t,r),n===1&&he===0&&!(e.mode&1)&&(oi=Fe()+500,Au&&Mr()))}function Ot(t,e){var n=t.callbackNode;wI(t,e);var r=jl(t,t===Je?it:0);if(r===0)n!==null&&jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jm(n),e===1)t.tag===0?vx(Pg.bind(null,t)):hv(Pg.bind(null,t)),mx(function(){!(he&6)&&Mr()}),n=null;else{switch(F_(r)){case 1:n=Zd;break;case 4:n=L_;break;case 16:n=Ll;break;case 536870912:n=j_;break;default:n=Ll}n=u0(n,n0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function n0(t,e){if(wl=-1,El=0,he&6)throw Error(z(327));var n=t.callbackNode;if(Qs()&&t.callbackNode!==n)return null;var r=jl(t,t===Je?it:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=nu(t,r);else{e=r;var s=he;he|=2;var i=s0();(Je!==t||it!==e)&&(Cn=null,oi=Fe()+500,Jr(t,e));do try{Fx();break}catch(u){r0(t,u)}while(!0);ff(),Zl.current=i,he=s,Be!==null?e=0:(Je=null,it=0,e=Ke)}if(e!==0){if(e===2&&(s=jh(t),s!==0&&(r=s,e=dd(t,s))),e===1)throw n=Wo,Jr(t,0),ir(t,r),Ot(t,Fe()),n;if(e===6)ir(t,r);else{if(s=t.current.alternate,!(r&30)&&!jx(s)&&(e=nu(t,r),e===2&&(i=jh(t),i!==0&&(r=i,e=dd(t,i))),e===1))throw n=Wo,Jr(t,0),ir(t,r),Ot(t,Fe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:qr(t,Ct,Cn);break;case 3:if(ir(t,r),(r&130023424)===r&&(e=Af+500-Fe(),10<e)){if(jl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Wh(qr.bind(null,t,Ct,Cn),e);break}qr(t,Ct,Cn);break;case 4:if(ir(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-on(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Lx(r/1960))-r,10<r){t.timeoutHandle=Wh(qr.bind(null,t,Ct,Cn),r);break}qr(t,Ct,Cn);break;case 5:qr(t,Ct,Cn);break;default:throw Error(z(329))}}}return Ot(t,Fe()),t.callbackNode===n?n0.bind(null,t):null}function dd(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=nu(t,e),t!==2&&(e=Ct,Ct=n,e!==null&&fd(e)),t}function fd(t){Ct===null?Ct=t:Ct.push.apply(Ct,t)}function jx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!ln(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ir(t,e){for(e&=~Rf,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Pg(t){if(he&6)throw Error(z(327));Qs();var e=jl(t,0);if(!(e&1))return Ot(t,Fe()),null;var n=nu(t,e);if(t.tag!==0&&n===2){var r=jh(t);r!==0&&(e=r,n=dd(t,r))}if(n===1)throw n=Wo,Jr(t,0),ir(t,e),Ot(t,Fe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,qr(t,Ct,Cn),Ot(t,Fe()),null}function Cf(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(oi=Fe()+500,Au&&Mr())}}function os(t){dr!==null&&dr.tag===0&&!(he&6)&&Qs();var e=he;he|=1;var n=Xt.transition,r=_e;try{if(Xt.transition=null,_e=1,t)return t()}finally{_e=r,Xt.transition=n,he=e,!(he&6)&&Mr()}}function Pf(){jt=Us.current,ke(Us)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,px(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(cf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:si(),ke(bt),ke(_t),vf();break;case 5:_f(r);break;case 4:si();break;case 13:ke(Pe);break;case 19:ke(Pe);break;case 10:pf(r.type._context);break;case 22:case 23:Pf()}n=n.return}if(Je=t,Be=t=Er(t.current,null),it=jt=e,Ke=0,Wo=null,Rf=bu=is=0,Ct=wo=null,Qr!==null){for(e=0;e<Qr.length;e++)if(n=Qr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Qr=null}return t}function r0(t,e){do{var n=Be;try{if(ff(),yl.current=Jl,Yl){for(var r=Ne.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Yl=!1}if(ss=0,Ye=He=Ne=null,_o=!1,$o=0,Sf.current=null,n===null||n.return===null){Ke=1,Wo=e,Be=null;break}e:{var i=t,o=n.return,u=n,l=e;if(e=it,u.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,p=u,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var x=yg(o);if(x!==null){x.flags&=-257,_g(x,o,u,i,e),x.mode&1&&gg(i,h,e),e=x,l=h;var k=e.updateQueue;if(k===null){var P=new Set;P.add(l),e.updateQueue=P}else k.add(l);break e}else{if(!(e&1)){gg(i,h,e),Nf();break e}l=Error(z(426))}}else if(Ae&&u.mode&1){var D=yg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),_g(D,o,u,i,e),hf(ii(l,u));break e}}i=l=ii(l,u),Ke!==4&&(Ke=2),wo===null?wo=[i]:wo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=Fv(i,l,e);cg(i,I);break e;case 1:u=l;var v=i.type,R=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(vr===null||!vr.has(R)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Uv(i,u,e);cg(i,b);break e}}i=i.return}while(i!==null)}o0(n)}catch(V){e=V,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function s0(){var t=Zl.current;return Zl.current=Jl,t===null?Jl:t}function Nf(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),Je===null||!(is&268435455)&&!(bu&268435455)||ir(Je,it)}function nu(t,e){var n=he;he|=2;var r=s0();(Je!==t||it!==e)&&(Cn=null,Jr(t,e));do try{zx();break}catch(s){r0(t,s)}while(!0);if(ff(),he=n,Zl.current=r,Be!==null)throw Error(z(261));return Je=null,it=0,Ke}function zx(){for(;Be!==null;)i0(Be)}function Fx(){for(;Be!==null&&!hI();)i0(Be)}function i0(t){var e=l0(t.alternate,t,jt);t.memoizedProps=t.pendingProps,e===null?o0(t):Be=e,Sf.current=null}function o0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Dx(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,Be=null;return}}else if(n=bx(n,e,jt),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ke===0&&(Ke=5)}function qr(t,e,n){var r=_e,s=Xt.transition;try{Xt.transition=null,_e=1,Ux(t,e,n,r)}finally{Xt.transition=s,_e=r}return null}function Ux(t,e,n,r){do Qs();while(dr!==null);if(he&6)throw Error(z(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(EI(t,i),t===Je&&(Be=Je=null,it=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||nl||(nl=!0,u0(Ll,function(){return Qs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Xt.transition,Xt.transition=null;var o=_e;_e=1;var u=he;he|=4,Sf.current=null,Vx(t,n),e0(n,t),ax(Hh),zl=!!$h,Hh=$h=null,t.current=n,Mx(n),dI(),he=u,_e=o,Xt.transition=i}else t.current=n;if(nl&&(nl=!1,dr=t,tu=s),i=t.pendingLanes,i===0&&(vr=null),mI(n.stateNode),Ot(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(eu)throw eu=!1,t=cd,cd=null,t;return tu&1&&t.tag!==0&&Qs(),i=t.pendingLanes,i&1?t===hd?Eo++:(Eo=0,hd=t):Eo=0,Mr(),null}function Qs(){if(dr!==null){var t=F_(tu),e=Xt.transition,n=_e;try{if(Xt.transition=null,_e=16>t?16:t,dr===null)var r=!1;else{if(t=dr,dr=null,tu=0,he&6)throw Error(z(331));var s=he;for(he|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var u=i.deletions;if(u!==null){for(var l=0;l<u.length;l++){var h=u[l];for($=h;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:vo(8,p,i)}var m=p.child;if(m!==null)m.return=p,$=m;else for(;$!==null;){p=$;var g=p.sibling,x=p.return;if(Yv(p),p===h){$=null;break}if(g!==null){g.return=x,$=g;break}$=x}}}var k=i.alternate;if(k!==null){var P=k.child;if(P!==null){k.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:vo(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,$=I;break e}$=i.return}}var v=t.current;for($=v;$!==null;){o=$;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,$=R;else e:for(o=v;$!==null;){if(u=$,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Nu(9,u)}}catch(V){Le(u,u.return,V)}if(u===o){$=null;break e}var b=u.sibling;if(b!==null){b.return=u.return,$=b;break e}$=u.return}}if(he=s,Mr(),gn&&typeof gn.onPostCommitFiberRoot=="function")try{gn.onPostCommitFiberRoot(Iu,t)}catch{}r=!0}return r}finally{_e=n,Xt.transition=e}}return!1}function Ng(t,e,n){e=ii(n,e),e=Fv(t,e,1),t=_r(t,e,1),e=xt(),t!==null&&(ia(t,1,e),Ot(t,e))}function Le(t,e,n){if(t.tag===3)Ng(t,t,n);else for(;e!==null;){if(e.tag===3){Ng(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vr===null||!vr.has(r))){t=ii(n,t),t=Uv(e,t,1),e=_r(e,t,1),t=xt(),e!==null&&(ia(e,1,t),Ot(e,t));break}}e=e.return}}function Bx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(it&n)===n&&(Ke===4||Ke===3&&(it&130023424)===it&&500>Fe()-Af?Jr(t,0):Rf|=n),Ot(t,e)}function a0(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=xt();t=Un(t,e),t!==null&&(ia(t,e,n),Ot(t,n))}function $x(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),a0(t,n)}function Hx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),a0(t,n)}var l0;l0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Nt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Nt=!1,Nx(t,e,n);Nt=!!(t.flags&131072)}else Nt=!1,Ae&&e.flags&1048576&&dv(e,Wl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;vl(t,e),t=e.pendingProps;var s=ti(e,_t.current);Gs(e,n),s=Ef(null,e,r,t,s,n);var i=Tf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)?(i=!0,Hl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gf(e),s.updater=Pu,e.stateNode=s,s._reactInternals=e,Zh(e,r,t,n),e=nd(null,e,r,!0,i,n)):(e.tag=0,Ae&&i&&uf(e),It(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(vl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Wx(r),t=nn(r,t),s){case 0:e=td(null,e,r,t,n);break e;case 1:e=Eg(null,e,r,t,n);break e;case 11:e=vg(null,e,r,t,n);break e;case 14:e=wg(null,e,r,nn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:nn(r,s),td(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:nn(r,s),Eg(t,e,r,s,n);case 3:e:{if(qv(e),t===null)throw Error(z(387));r=e.pendingProps,i=e.memoizedState,s=i.element,_v(t,e),Ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ii(Error(z(423)),e),e=Tg(t,e,r,n,s);break e}else if(r!==s){s=ii(Error(z(424)),e),e=Tg(t,e,r,n,s);break e}else for(zt=yr(e.stateNode.containerInfo.firstChild),Bt=e,Ae=!0,sn=null,n=gv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===s){e=Bn(t,e,n);break e}It(t,e,r,n)}e=e.child}return e;case 5:return vv(e),t===null&&Xh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,qh(r,s)?o=null:i!==null&&qh(r,i)&&(e.flags|=32),Hv(t,e),It(t,e,o,n),e.child;case 6:return t===null&&Xh(e),null;case 13:return Wv(t,e,n);case 4:return yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ri(e,null,r,n):It(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:nn(r,s),vg(t,e,r,s,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Te(Kl,r._currentValue),r._currentValue=o,i!==null)if(ln(i.value,o)){if(i.children===s.children&&!bt.current){e=Bn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var l=u.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Ln(-1,n&-n),l.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?l.next=l:(l.next=p.next,p.next=l),h.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Yh(i.return,n,e),u.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(z(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Yh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}It(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Gs(e,n),s=Jt(s),r=r(s),e.flags|=1,It(t,e,r,n),e.child;case 14:return r=e.type,s=nn(r,e.pendingProps),s=nn(r.type,s),wg(t,e,r,s,n);case 15:return Bv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:nn(r,s),vl(t,e),e.tag=1,Dt(r)?(t=!0,Hl(e)):t=!1,Gs(e,n),zv(e,r,s),Zh(e,r,s,n),nd(null,e,r,!0,t,n);case 19:return Kv(t,e,n);case 22:return $v(t,e,n)}throw Error(z(156,e.tag))};function u0(t,e){return M_(t,e)}function qx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qt(t,e,n,r){return new qx(t,e,n,r)}function bf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wx(t){if(typeof t=="function")return bf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===Yd)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Qt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Tl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")bf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ns:return Zr(n.children,s,i,e);case Qd:o=8,s|=8;break;case Ih:return t=Qt(12,n,e,s|2),t.elementType=Ih,t.lanes=i,t;case xh:return t=Qt(13,n,e,s),t.elementType=xh,t.lanes=i,t;case kh:return t=Qt(19,n,e,s),t.elementType=kh,t.lanes=i,t;case v_:return Du(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case y_:o=10;break e;case __:o=9;break e;case Xd:o=11;break e;case Yd:o=14;break e;case nr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=Qt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Zr(t,e,n,r){return t=Qt(7,t,r,e),t.lanes=n,t}function Du(t,e,n,r){return t=Qt(22,t,r,e),t.elementType=v_,t.lanes=n,t.stateNode={isHidden:!1},t}function Jc(t,e,n){return t=Qt(6,t,null,e),t.lanes=n,t}function Zc(t,e,n){return e=Qt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Kx(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dc(0),this.expirationTimes=Dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,r,s,i,o,u,l){return t=new Kx(t,e,n,u,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Qt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(i),t}function Gx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ps,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function c0(t){if(!t)return Ar;t=t._reactInternals;e:{if(ps(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Dt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Dt(n))return cv(t,n,e)}return e}function h0(t,e,n,r,s,i,o,u,l){return t=Df(n,r,!0,t,s,i,o,u,l),t.context=c0(null),n=t.current,r=xt(),s=wr(n),i=Ln(r,s),i.callback=e??null,_r(n,i,s),t.current.lanes=s,ia(t,s,r),Ot(t,r),t}function Ou(t,e,n,r){var s=e.current,i=xt(),o=wr(s);return n=c0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ln(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(s,e,o),t!==null&&(an(t,s,o,i),gl(t,s,o)),o}function ru(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Of(t,e){bg(t,e),(t=t.alternate)&&bg(t,e)}function Qx(){return null}var d0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vf(t){this._internalRoot=t}Vu.prototype.render=Vf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));Ou(t,e,null,null)};Vu.prototype.unmount=Vf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;os(function(){Ou(null,t,null,null)}),e[Fn]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var e=$_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&q_(t)}};function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dg(){}function Xx(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=ru(o);i.call(h)}}var o=h0(e,r,t,0,null,!1,!1,"",Dg);return t._reactRootContainer=o,t[Fn]=o.current,jo(t.nodeType===8?t.parentNode:t),os(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var u=r;r=function(){var h=ru(l);u.call(h)}}var l=Df(t,0,!1,null,null,!1,!1,"",Dg);return t._reactRootContainer=l,t[Fn]=l.current,jo(t.nodeType===8?t.parentNode:t),os(function(){Ou(e,l,n,r)}),l}function Lu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var u=s;s=function(){var l=ru(o);u.call(l)}}Ou(e,o,t,s)}else o=Xx(n,e,t,s,r);return ru(o)}U_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(ef(e,n|1),Ot(e,Fe()),!(he&6)&&(oi=Fe()+500,Mr()))}break;case 13:os(function(){var r=Un(t,1);if(r!==null){var s=xt();an(r,t,1,s)}}),Of(t,1)}};tf=function(t){if(t.tag===13){var e=Un(t,134217728);if(e!==null){var n=xt();an(e,t,134217728,n)}Of(t,134217728)}};B_=function(t){if(t.tag===13){var e=wr(t),n=Un(t,e);if(n!==null){var r=xt();an(n,t,e,r)}Of(t,e)}};$_=function(){return _e};H_=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};Vh=function(t,e,n){switch(e){case"input":if(Ah(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ru(r);if(!s)throw Error(z(90));E_(r),Ah(r,s)}}}break;case"textarea":I_(t,n);break;case"select":e=n.value,e!=null&&Hs(t,!!n.multiple,e,!1)}};P_=Cf;N_=os;var Yx={usingClientEntryPoint:!1,Events:[aa,Vs,Ru,A_,C_,Cf]},Ji={findFiberByHostInstance:Gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jx={bundleType:Ji.bundleType,version:Ji.version,rendererPackageName:Ji.rendererPackageName,rendererConfig:Ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=O_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ji.findFiberByHostInstance||Qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{Iu=rl.inject(Jx),gn=rl}catch{}}Ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx;Ht.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mf(e))throw Error(z(200));return Gx(t,e,null,n)};Ht.createRoot=function(t,e){if(!Mf(t))throw Error(z(299));var n=!1,r="",s=d0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,r,s),t[Fn]=e.current,jo(t.nodeType===8?t.parentNode:t),new Vf(e)};Ht.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=O_(e),t=t===null?null:t.stateNode,t};Ht.flushSync=function(t){return os(t)};Ht.hydrate=function(t,e,n){if(!Mu(e))throw Error(z(200));return Lu(null,t,e,!0,n)};Ht.hydrateRoot=function(t,e,n){if(!Mf(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=d0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=h0(e,null,t,1,n??null,s,!1,i,o),t[Fn]=e.current,jo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Vu(e)};Ht.render=function(t,e,n){if(!Mu(e))throw Error(z(200));return Lu(null,t,e,!1,n)};Ht.unmountComponentAtNode=function(t){if(!Mu(t))throw Error(z(40));return t._reactRootContainer?(os(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[Fn]=null})}),!0):!1};Ht.unstable_batchedUpdates=Cf;Ht.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mu(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return Lu(t,e,n,!1,r)};Ht.version="18.3.1-next-f1338f8080-20240426";function f0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f0)}catch(t){console.error(t)}}f0(),f_.exports=Ht;var Zx=f_.exports,Og=Zx;Eh.createRoot=Og.createRoot,Eh.hydrateRoot=Og.hydrateRoot;/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),p0=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=H.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...u},l)=>H.createElement("svg",{ref:l,...tk,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:p0("lucide",s),...u},[...o.map(([h,p])=>H.createElement(h,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(t,e)=>{const n=H.forwardRef(({className:r,...s},i)=>H.createElement(nk,{ref:i,iconNode:e,className:p0(`lucide-${ek(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=ut("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=ut("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=ut("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=ut("CircleMinus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=ut("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=ut("CloudUpload",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=ut("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=ut("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=ut("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=ut("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=ut("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=ut("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=ut("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=ut("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=ut("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=ut("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=ut("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);var Mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],u=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},v0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,u=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,p=i>>2,m=(i&3)<<4|u>>4;let g=(u&15)<<2|h>>6,x=h&63;l||(x=64,o||(g=64)),r.push(n[p],n[m],n[g],n[x])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||u==null||h==null||m==null)throw new fk;const g=i<<2|u>>4;if(r.push(g),h!==64){const x=u<<4&240|h>>2;if(r.push(x),m!==64){const k=h<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pk=function(t){const e=_0(t);return v0.encodeByteArray(e,!0)},su=function(t){return pk(t).replace(/\./g,"")},w0=function(t){try{return v0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=()=>mk().__FIREBASE_DEFAULTS__,yk=()=>{if(typeof process>"u"||typeof Mg>"u")return;const t=Mg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_k=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&w0(t[1]);return e&&JSON.parse(e)},ju=()=>{try{return gk()||yk()||_k()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},E0=t=>{var e,n;return(n=(e=ju())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},T0=t=>{const e=E0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},I0=()=>{var t;return(t=ju())===null||t===void 0?void 0:t.config},x0=t=>{var e;return(e=ju())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[su(JSON.stringify(n)),su(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wk(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function Ek(){var t;const e=(t=ju())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Tk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ik(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xk(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kk(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Sk(){return!Ek()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Rk(){try{return typeof indexedDB=="object"}catch{return!1}}function Ak(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ck="FirebaseError";class kn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Ck,Object.setPrototypeOf(this,kn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ua.prototype.create)}}class ua{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Pk(i,r):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new kn(s,u,r)}}function Pk(t,e){return t.replace(Nk,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Nk=/\{\$([^}]+)}/g;function bk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function iu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Lg(i)&&Lg(o)){if(!iu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Dk(t,e){const n=new Ok(t,e);return n.subscribe.bind(n)}class Ok{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Vk(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=eh),s.error===void 0&&(s.error=eh),s.complete===void 0&&(s.complete=eh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Vk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function eh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new vk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jk(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lk(t){return t===Wr?void 0:t}function jk(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Mk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const Fk={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},Uk=ue.INFO,Bk={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},$k=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Bk[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lf{constructor(e){this.name=e,this._logLevel=Uk,this._logHandler=$k,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Fk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const Hk=(t,e)=>e.some(n=>t instanceof n);let jg,zg;function qk(){return jg||(jg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wk(){return zg||(zg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S0=new WeakMap,gd=new WeakMap,R0=new WeakMap,th=new WeakMap,jf=new WeakMap;function Kk(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Tr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&S0.set(n,t)}).catch(()=>{}),jf.set(e,t),e}function Gk(t){if(gd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});gd.set(t,e)}let yd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return gd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||R0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Qk(t){yd=t(yd)}function Xk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nh(this),e,...n);return R0.set(r,e.sort?e.sort():[e]),Tr(r)}:Wk().includes(t)?function(...e){return t.apply(nh(this),e),Tr(S0.get(this))}:function(...e){return Tr(t.apply(nh(this),e))}}function Yk(t){return typeof t=="function"?Xk(t):(t instanceof IDBTransaction&&Gk(t),Hk(t,qk())?new Proxy(t,yd):t)}function Tr(t){if(t instanceof IDBRequest)return Kk(t);if(th.has(t))return th.get(t);const e=Yk(t);return e!==t&&(th.set(t,e),jf.set(e,t)),e}const nh=t=>jf.get(t);function Jk(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),u=Tr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Tr(o.result),l.oldVersion,l.newVersion,Tr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const Zk=["get","getKey","getAll","getAllKeys","count"],eS=["put","add","delete","clear"],rh=new Map;function Fg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rh.get(e))return rh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=eS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zk.includes(n)))return;const i=async function(o,...u){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(u.shift())),(await Promise.all([h[n](...u),s&&l.done]))[0]};return rh.set(e,i),i}Qk(t=>({...t,get:(e,n,r)=>Fg(e,n)||t.get(e,n,r),has:(e,n)=>!!Fg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(nS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function nS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _d="@firebase/app",Ug="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $n=new Lf("@firebase/app"),rS="@firebase/app-compat",sS="@firebase/analytics-compat",iS="@firebase/analytics",oS="@firebase/app-check-compat",aS="@firebase/app-check",lS="@firebase/auth",uS="@firebase/auth-compat",cS="@firebase/database",hS="@firebase/data-connect",dS="@firebase/database-compat",fS="@firebase/functions",pS="@firebase/functions-compat",mS="@firebase/installations",gS="@firebase/installations-compat",yS="@firebase/messaging",_S="@firebase/messaging-compat",vS="@firebase/performance",wS="@firebase/performance-compat",ES="@firebase/remote-config",TS="@firebase/remote-config-compat",IS="@firebase/storage",xS="@firebase/storage-compat",kS="@firebase/firestore",SS="@firebase/vertexai-preview",RS="@firebase/firestore-compat",AS="firebase",CS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd="[DEFAULT]",PS={[_d]:"fire-core",[rS]:"fire-core-compat",[iS]:"fire-analytics",[sS]:"fire-analytics-compat",[aS]:"fire-app-check",[oS]:"fire-app-check-compat",[lS]:"fire-auth",[uS]:"fire-auth-compat",[cS]:"fire-rtdb",[hS]:"fire-data-connect",[dS]:"fire-rtdb-compat",[fS]:"fire-fn",[pS]:"fire-fn-compat",[mS]:"fire-iid",[gS]:"fire-iid-compat",[yS]:"fire-fcm",[_S]:"fire-fcm-compat",[vS]:"fire-perf",[wS]:"fire-perf-compat",[ES]:"fire-rc",[TS]:"fire-rc-compat",[IS]:"fire-gcs",[xS]:"fire-gcs-compat",[kS]:"fire-fst",[RS]:"fire-fst-compat",[SS]:"fire-vertex","fire-js":"fire-js",[AS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=new Map,NS=new Map,wd=new Map;function Bg(t,e){try{t.container.addComponent(e)}catch(n){$n.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function as(t){const e=t.name;if(wd.has(e))return $n.debug(`There were multiple attempts to register component ${e}.`),!1;wd.set(e,t);for(const n of ou.values())Bg(n,t);for(const n of NS.values())Bg(n,t);return!0}function zu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Dn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ir=new ua("app","Firebase",bS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=CS;function A0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ir.create("bad-app-name",{appName:String(s)});if(n||(n=I0()),!n)throw Ir.create("no-options");const i=ou.get(s);if(i){if(iu(n,i.options)&&iu(r,i.config))return i;throw Ir.create("duplicate-app",{appName:s})}const o=new zk(s);for(const l of wd.values())o.addComponent(l);const u=new DS(n,r,o);return ou.set(s,u),u}function zf(t=vd){const e=ou.get(t);if(!e&&t===vd&&I0())return A0();if(!e)throw Ir.create("no-app",{appName:t});return e}function _n(t,e,n){var r;let s=(r=PS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$n.warn(u.join(" "));return}as(new Cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="firebase-heartbeat-database",VS=1,Go="firebase-heartbeat-store";let sh=null;function C0(){return sh||(sh=Jk(OS,VS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Go)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),sh}async function MS(t){try{const n=(await C0()).transaction(Go),r=await n.objectStore(Go).get(P0(t));return await n.done,r}catch(e){if(e instanceof kn)$n.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$n.warn(n.message)}}}async function $g(t,e){try{const r=(await C0()).transaction(Go,"readwrite");await r.objectStore(Go).put(e,P0(t)),await r.done}catch(n){if(n instanceof kn)$n.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$n.warn(r.message)}}}function P0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=1024,jS=30*24*60*60*1e3;class zS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new US(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const u=new Date(o.date).valueOf();return Date.now()-u<=jS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$n.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hg(),{heartbeatsToSend:r,unsentEntries:s}=FS(this._heartbeatsCache.heartbeats),i=su(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return $n.warn(n),""}}}function Hg(){return new Date().toISOString().substring(0,10)}function FS(t,e=LS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class US{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Rk()?Ak().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return $g(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qg(t){return su(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(t){as(new Cr("platform-logger",e=>new tS(e),"PRIVATE")),as(new Cr("heartbeat",e=>new zS(e),"PRIVATE")),_n(_d,Ug,t),_n(_d,Ug,"esm2017"),_n("fire-js","")}BS("");var Wg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var es,N0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function E(){}E.prototype=_.prototype,T.D=_.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(S,C,A){for(var w=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)w[ne-2]=arguments[ne];return _.prototype[C].apply(S,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,E){E||(E=0);var S=Array(16);if(typeof _=="string")for(var C=0;16>C;++C)S[C]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(C=0;16>C;++C)S[C]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=T.g[0],E=T.g[1],C=T.g[2];var A=T.g[3],w=_+(A^E&(C^A))+S[0]+3614090360&4294967295;_=E+(w<<7&4294967295|w>>>25),w=A+(C^_&(E^C))+S[1]+3905402710&4294967295,A=_+(w<<12&4294967295|w>>>20),w=C+(E^A&(_^E))+S[2]+606105819&4294967295,C=A+(w<<17&4294967295|w>>>15),w=E+(_^C&(A^_))+S[3]+3250441966&4294967295,E=C+(w<<22&4294967295|w>>>10),w=_+(A^E&(C^A))+S[4]+4118548399&4294967295,_=E+(w<<7&4294967295|w>>>25),w=A+(C^_&(E^C))+S[5]+1200080426&4294967295,A=_+(w<<12&4294967295|w>>>20),w=C+(E^A&(_^E))+S[6]+2821735955&4294967295,C=A+(w<<17&4294967295|w>>>15),w=E+(_^C&(A^_))+S[7]+4249261313&4294967295,E=C+(w<<22&4294967295|w>>>10),w=_+(A^E&(C^A))+S[8]+1770035416&4294967295,_=E+(w<<7&4294967295|w>>>25),w=A+(C^_&(E^C))+S[9]+2336552879&4294967295,A=_+(w<<12&4294967295|w>>>20),w=C+(E^A&(_^E))+S[10]+4294925233&4294967295,C=A+(w<<17&4294967295|w>>>15),w=E+(_^C&(A^_))+S[11]+2304563134&4294967295,E=C+(w<<22&4294967295|w>>>10),w=_+(A^E&(C^A))+S[12]+1804603682&4294967295,_=E+(w<<7&4294967295|w>>>25),w=A+(C^_&(E^C))+S[13]+4254626195&4294967295,A=_+(w<<12&4294967295|w>>>20),w=C+(E^A&(_^E))+S[14]+2792965006&4294967295,C=A+(w<<17&4294967295|w>>>15),w=E+(_^C&(A^_))+S[15]+1236535329&4294967295,E=C+(w<<22&4294967295|w>>>10),w=_+(C^A&(E^C))+S[1]+4129170786&4294967295,_=E+(w<<5&4294967295|w>>>27),w=A+(E^C&(_^E))+S[6]+3225465664&4294967295,A=_+(w<<9&4294967295|w>>>23),w=C+(_^E&(A^_))+S[11]+643717713&4294967295,C=A+(w<<14&4294967295|w>>>18),w=E+(A^_&(C^A))+S[0]+3921069994&4294967295,E=C+(w<<20&4294967295|w>>>12),w=_+(C^A&(E^C))+S[5]+3593408605&4294967295,_=E+(w<<5&4294967295|w>>>27),w=A+(E^C&(_^E))+S[10]+38016083&4294967295,A=_+(w<<9&4294967295|w>>>23),w=C+(_^E&(A^_))+S[15]+3634488961&4294967295,C=A+(w<<14&4294967295|w>>>18),w=E+(A^_&(C^A))+S[4]+3889429448&4294967295,E=C+(w<<20&4294967295|w>>>12),w=_+(C^A&(E^C))+S[9]+568446438&4294967295,_=E+(w<<5&4294967295|w>>>27),w=A+(E^C&(_^E))+S[14]+3275163606&4294967295,A=_+(w<<9&4294967295|w>>>23),w=C+(_^E&(A^_))+S[3]+4107603335&4294967295,C=A+(w<<14&4294967295|w>>>18),w=E+(A^_&(C^A))+S[8]+1163531501&4294967295,E=C+(w<<20&4294967295|w>>>12),w=_+(C^A&(E^C))+S[13]+2850285829&4294967295,_=E+(w<<5&4294967295|w>>>27),w=A+(E^C&(_^E))+S[2]+4243563512&4294967295,A=_+(w<<9&4294967295|w>>>23),w=C+(_^E&(A^_))+S[7]+1735328473&4294967295,C=A+(w<<14&4294967295|w>>>18),w=E+(A^_&(C^A))+S[12]+2368359562&4294967295,E=C+(w<<20&4294967295|w>>>12),w=_+(E^C^A)+S[5]+4294588738&4294967295,_=E+(w<<4&4294967295|w>>>28),w=A+(_^E^C)+S[8]+2272392833&4294967295,A=_+(w<<11&4294967295|w>>>21),w=C+(A^_^E)+S[11]+1839030562&4294967295,C=A+(w<<16&4294967295|w>>>16),w=E+(C^A^_)+S[14]+4259657740&4294967295,E=C+(w<<23&4294967295|w>>>9),w=_+(E^C^A)+S[1]+2763975236&4294967295,_=E+(w<<4&4294967295|w>>>28),w=A+(_^E^C)+S[4]+1272893353&4294967295,A=_+(w<<11&4294967295|w>>>21),w=C+(A^_^E)+S[7]+4139469664&4294967295,C=A+(w<<16&4294967295|w>>>16),w=E+(C^A^_)+S[10]+3200236656&4294967295,E=C+(w<<23&4294967295|w>>>9),w=_+(E^C^A)+S[13]+681279174&4294967295,_=E+(w<<4&4294967295|w>>>28),w=A+(_^E^C)+S[0]+3936430074&4294967295,A=_+(w<<11&4294967295|w>>>21),w=C+(A^_^E)+S[3]+3572445317&4294967295,C=A+(w<<16&4294967295|w>>>16),w=E+(C^A^_)+S[6]+76029189&4294967295,E=C+(w<<23&4294967295|w>>>9),w=_+(E^C^A)+S[9]+3654602809&4294967295,_=E+(w<<4&4294967295|w>>>28),w=A+(_^E^C)+S[12]+3873151461&4294967295,A=_+(w<<11&4294967295|w>>>21),w=C+(A^_^E)+S[15]+530742520&4294967295,C=A+(w<<16&4294967295|w>>>16),w=E+(C^A^_)+S[2]+3299628645&4294967295,E=C+(w<<23&4294967295|w>>>9),w=_+(C^(E|~A))+S[0]+4096336452&4294967295,_=E+(w<<6&4294967295|w>>>26),w=A+(E^(_|~C))+S[7]+1126891415&4294967295,A=_+(w<<10&4294967295|w>>>22),w=C+(_^(A|~E))+S[14]+2878612391&4294967295,C=A+(w<<15&4294967295|w>>>17),w=E+(A^(C|~_))+S[5]+4237533241&4294967295,E=C+(w<<21&4294967295|w>>>11),w=_+(C^(E|~A))+S[12]+1700485571&4294967295,_=E+(w<<6&4294967295|w>>>26),w=A+(E^(_|~C))+S[3]+2399980690&4294967295,A=_+(w<<10&4294967295|w>>>22),w=C+(_^(A|~E))+S[10]+4293915773&4294967295,C=A+(w<<15&4294967295|w>>>17),w=E+(A^(C|~_))+S[1]+2240044497&4294967295,E=C+(w<<21&4294967295|w>>>11),w=_+(C^(E|~A))+S[8]+1873313359&4294967295,_=E+(w<<6&4294967295|w>>>26),w=A+(E^(_|~C))+S[15]+4264355552&4294967295,A=_+(w<<10&4294967295|w>>>22),w=C+(_^(A|~E))+S[6]+2734768916&4294967295,C=A+(w<<15&4294967295|w>>>17),w=E+(A^(C|~_))+S[13]+1309151649&4294967295,E=C+(w<<21&4294967295|w>>>11),w=_+(C^(E|~A))+S[4]+4149444226&4294967295,_=E+(w<<6&4294967295|w>>>26),w=A+(E^(_|~C))+S[11]+3174756917&4294967295,A=_+(w<<10&4294967295|w>>>22),w=C+(_^(A|~E))+S[2]+718787259&4294967295,C=A+(w<<15&4294967295|w>>>17),w=E+(A^(C|~_))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(C+(w<<21&4294967295|w>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var E=_-this.blockSize,S=this.B,C=this.h,A=0;A<_;){if(C==0)for(;A<=E;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<_;)if(S[C++]=T.charCodeAt(A++),C==this.blockSize){s(this,S),C=0;break}}else for(;A<_;)if(S[C++]=T[A++],C==this.blockSize){s(this,S),C=0;break}}this.h=C,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var E=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=E&255,E/=256;for(this.u(T),T=Array(16),_=E=0;4>_;++_)for(var S=0;32>S;S+=8)T[E++]=this.g[_]>>>S&255;return T};function i(T,_){var E=u;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=_(T)}function o(T,_){this.h=_;for(var E=[],S=!0,C=T.length-1;0<=C;C--){var A=T[C]|0;S&&A==_||(E[C]=A,S=!1)}this.g=E}var u={};function l(T){return-128<=T&&128>T?i(T,function(_){return new o([_|0],0>_?-1:0)}):new o([T|0],0>T?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return m;if(0>T)return D(h(-T));for(var _=[],E=1,S=0;T>=E;S++)_[S]=T/E|0,E*=4294967296;return new o(_,0)}function p(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return D(p(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),S=m,C=0;C<T.length;C+=8){var A=Math.min(8,T.length-C),w=parseInt(T.substring(C,C+A),_);8>A?(A=h(Math.pow(_,A)),S=S.j(A).add(h(w))):(S=S.j(E),S=S.add(h(w)))}return S}var m=l(0),g=l(1),x=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var T=0,_=1,E=0;E<this.g.length;E++){var S=this.i(E);T+=(0<=S?S:4294967296+S)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(k(this))return"0";if(P(this))return"-"+D(this).toString(T);for(var _=h(Math.pow(T,6)),E=this,S="";;){var C=b(E,_).g;E=I(E,C.j(_));var A=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=C,k(E))return A+S;for(;6>A.length;)A="0"+A;S=A+S}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function k(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function P(T){return T.h==-1}t.l=function(T){return T=I(this,T),P(T)?-1:k(T)?0:1};function D(T){for(var _=T.g.length,E=[],S=0;S<_;S++)E[S]=~T.g[S];return new o(E,~T.h).add(g)}t.abs=function(){return P(this)?D(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],S=0,C=0;C<=_;C++){var A=S+(this.i(C)&65535)+(T.i(C)&65535),w=(A>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);S=w>>>16,A&=65535,w&=65535,E[C]=w<<16|A}return new o(E,E[E.length-1]&-2147483648?-1:0)};function I(T,_){return T.add(D(_))}t.j=function(T){if(k(this)||k(T))return m;if(P(this))return P(T)?D(this).j(D(T)):D(D(this).j(T));if(P(T))return D(this.j(D(T)));if(0>this.l(x)&&0>T.l(x))return h(this.m()*T.m());for(var _=this.g.length+T.g.length,E=[],S=0;S<2*_;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<T.g.length;C++){var A=this.i(S)>>>16,w=this.i(S)&65535,ne=T.i(C)>>>16,ye=T.i(C)&65535;E[2*S+2*C]+=w*ye,v(E,2*S+2*C),E[2*S+2*C+1]+=A*ye,v(E,2*S+2*C+1),E[2*S+2*C+1]+=w*ne,v(E,2*S+2*C+1),E[2*S+2*C+2]+=A*ne,v(E,2*S+2*C+2)}for(S=0;S<_;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=_;S<2*_;S++)E[S]=0;return new o(E,0)};function v(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function R(T,_){this.g=T,this.h=_}function b(T,_){if(k(_))throw Error("division by zero");if(k(T))return new R(m,m);if(P(T))return _=b(D(T),_),new R(D(_.g),D(_.h));if(P(_))return _=b(T,D(_)),new R(D(_.g),_.h);if(30<T.g.length){if(P(T)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,S=_;0>=S.l(T);)E=V(E),S=V(S);var C=j(E,1),A=j(S,1);for(S=j(S,2),E=j(E,2);!k(S);){var w=A.add(S);0>=w.l(T)&&(C=C.add(E),A=w),S=j(S,1),E=j(E,1)}return _=I(T,C.j(_)),new R(C,_)}for(C=m;0<=T.l(_);){for(E=Math.max(1,Math.floor(T.m()/_.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),A=h(E),w=A.j(_);P(w)||0<w.l(T);)E-=S,A=h(E),w=A.j(_);k(A)&&(A=g),C=C.add(A),T=I(T,w)}return new R(C,T)}t.A=function(T){return b(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],S=0;S<_;S++)E[S]=this.i(S)&T.i(S);return new o(E,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],S=0;S<_;S++)E[S]=this.i(S)|T.i(S);return new o(E,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),E=[],S=0;S<_;S++)E[S]=this.i(S)^T.i(S);return new o(E,this.h^T.h)};function V(T){for(var _=T.g.length+1,E=[],S=0;S<_;S++)E[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(E,T.h)}function j(T,_){var E=_>>5;_%=32;for(var S=T.g.length-E,C=[],A=0;A<S;A++)C[A]=0<_?T.i(A+E)>>>_|T.i(A+E+1)<<32-_:T.i(A+E);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,N0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,es=o}).apply(typeof Wg<"u"?Wg:typeof self<"u"?self:typeof window<"u"?window:{});var sl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var b0,lo,D0,Il,Ed,O0,V0,M0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof sl=="object"&&sl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in d))break e;d=d[N]}a=a[a.length-1],y=d[a],c=c(y),c!=y&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,y=!1,N={next:function(){if(!y&&d<a.length){var O=d++;return{value:c(O,a[O]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},u=this||self;function l(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function x(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var y=d.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function k(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(y,N,O){for(var B=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)B[Ee-2]=arguments[Ee];return c.prototype[N].apply(y,B)}}function P(a){const c=a.length;if(0<c){const d=Array(c);for(let y=0;y<c;y++)d[y]=a[y];return d}return[]}function D(a,c){for(let d=1;d<arguments.length;d++){const y=arguments[d];if(l(y)){const N=a.length||0,O=y.length||0;a.length=N+O;for(let B=0;B<O;B++)a[N+B]=y[B]}else a.push(y)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var V=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function j(a,c,d){for(const y in a)c.call(d,a[y],y,a)}function T(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function _(a){const c={};for(const d in a)c[d]=a[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let d,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(d in y)a[d]=y[d];for(let O=0;O<E.length;O++)d=E[O],Object.prototype.hasOwnProperty.call(y,d)&&(a[d]=y[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function A(a){u.setTimeout(()=>{throw a},0)}function w(){var a=q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class ne{constructor(){this.h=this.g=null}add(c,d){const y=ye.get();y.set(c,d),this.h?this.h.next=y:this.g=y,this.h=y}}var ye=new I(()=>new Ve,a=>a.reset());class Ve{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,U=!1,q=new ne,W=()=>{const a=u.Promise.resolve(void 0);ie=()=>{a.then(J)}};var J=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){A(d)}var c=ye;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}U=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var $e=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};u.addEventListener("test",d,c),u.removeEventListener("test",d,c)}catch{}return a}();function je(a,c){if(ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(V){e:{try{b(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:we[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&je.aa.h.call(this)}}k(je,ge);var we={2:"touch",3:"pen",4:"mouse"};je.prototype.h=function(){je.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var re="closure_listenable_"+(1e6*Math.random()|0),Wt=0;function xi(a,c,d,y,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!y,this.ha=N,this.key=++Wt,this.da=this.fa=!1}function zr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function cn(a){this.src=a,this.g={},this.h=0}cn.prototype.add=function(a,c,d,y,N){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=Si(a,c,y,N);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new xi(c,this.src,O,!!y,N),c.fa=d,a.push(c)),c};function ki(a,c){var d=c.type;if(d in a.g){var y=a.g[d],N=Array.prototype.indexOf.call(y,c,void 0),O;(O=0<=N)&&Array.prototype.splice.call(y,N,1),O&&(zr(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function Si(a,c,d,y){for(var N=0;N<a.length;++N){var O=a[N];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==y)return N}return-1}var Ri="closure_lm_"+(1e6*Math.random()|0),Ai={};function Ia(a,c,d,y,N){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Ia(a,c[O],d,y,N);return null}return d=Ni(d),a&&a[re]?a.K(c,d,h(y)?!!y.capture:!1,N):uc(a,c,d,!1,y,N)}function uc(a,c,d,y,N,O){if(!c)throw Error("Invalid event type");var B=h(N)?!!N.capture:!!N,Ee=Ci(a);if(Ee||(a[Ri]=Ee=new cn(a)),d=Ee.add(c,d,y,B,O),d.proxy)return d;if(y=cc(),d.proxy=y,y.src=a,y.listener=d,a.addEventListener)$e||(N=B),N===void 0&&(N=!1),a.addEventListener(c.toString(),y,N);else if(a.attachEvent)a.attachEvent(ka(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return d}function cc(){function a(d){return c.call(a.src,a.listener,d)}const c=hc;return a}function xa(a,c,d,y,N){if(Array.isArray(c))for(var O=0;O<c.length;O++)xa(a,c[O],d,y,N);else y=h(y)?!!y.capture:!!y,d=Ni(d),a&&a[re]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],d=Si(O,d,y,N),-1<d&&(zr(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Ci(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Si(c,d,y,N)),(d=-1<a?c[a]:null)&&ws(d))}function ws(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[re])ki(c.i,a);else{var d=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(d,y,a.capture):c.detachEvent?c.detachEvent(ka(d),y):c.addListener&&c.removeListener&&c.removeListener(y),(d=Ci(c))?(ki(d,a),d.h==0&&(d.src=null,c[Ri]=null)):zr(a)}}}function ka(a){return a in Ai?Ai[a]:Ai[a]="on"+a}function hc(a,c){if(a.da)a=!0;else{c=new je(c,this);var d=a.listener,y=a.ha||a.src;a.fa&&ws(a),a=d.call(y,c)}return a}function Ci(a){return a=a[Ri],a instanceof cn?a:null}var Pi="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ni(a){return typeof a=="function"?a:(a[Pi]||(a[Pi]=function(c){return a.handleEvent(c)}),a[Pi])}function Qe(){se.call(this),this.i=new cn(this),this.M=this,this.F=null}k(Qe,se),Qe.prototype[re]=!0,Qe.prototype.removeEventListener=function(a,c,d,y){xa(this,a,c,d,y)};function F(a,c){var d,y=a.F;if(y)for(d=[];y;y=y.F)d.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new ge(c,a);else if(c instanceof ge)c.target=c.target||a;else{var N=c;c=new ge(y,a),S(c,N)}if(N=!0,d)for(var O=d.length-1;0<=O;O--){var B=c.g=d[O];N=G(B,y,!0,c)&&N}if(B=c.g=a,N=G(B,y,!0,c)&&N,N=G(B,y,!1,c)&&N,d)for(O=0;O<d.length;O++)B=c.g=d[O],N=G(B,y,!1,c)&&N}Qe.prototype.N=function(){if(Qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],y=0;y<d.length;y++)zr(d[y]);delete a.g[c],a.h--}}this.F=null},Qe.prototype.K=function(a,c,d,y){return this.i.add(String(a),c,!1,d,y)},Qe.prototype.L=function(a,c,d,y){return this.i.add(String(a),c,!0,d,y)};function G(a,c,d,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,O=0;O<c.length;++O){var B=c[O];if(B&&!B.da&&B.capture==d){var Ee=B.listener,et=B.ha||B.src;B.fa&&ki(a.i,B),N=Ee.call(et,y)!==!1&&N}}return N&&!y.defaultPrevented}function de(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(a,c||0)}function Rt(a){a.g=de(()=>{a.g=null,a.i&&(a.i=!1,Rt(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class fe extends se{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Rt(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ze(a){se.call(this),this.h=a,this.g={}}k(Ze,se);var wt=[];function bi(a){j(a.g,function(c,d){this.g.hasOwnProperty(d)&&ws(c)},a),a.g={}}Ze.prototype.N=function(){Ze.aa.N.call(this),bi(this)},Ze.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dc=u.JSON.stringify,tT=u.JSON.parse,nT=class{stringify(a){return u.JSON.stringify(a,void 0)}parse(a){return u.JSON.parse(a,void 0)}};function fc(){}fc.prototype.h=null;function Vp(a){return a.h||(a.h=a.i())}function Mp(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pc(){ge.call(this,"d")}k(pc,ge);function mc(){ge.call(this,"c")}k(mc,ge);var Fr={},Lp=null;function Sa(){return Lp=Lp||new Qe}Fr.La="serverreachability";function jp(a){ge.call(this,Fr.La,a)}k(jp,ge);function Oi(a){const c=Sa();F(c,new jp(c))}Fr.STAT_EVENT="statevent";function zp(a,c){ge.call(this,Fr.STAT_EVENT,a),this.stat=c}k(zp,ge);function Et(a){const c=Sa();F(c,new zp(c,a))}Fr.Ma="timingevent";function Fp(a,c){ge.call(this,Fr.Ma,a),this.size=c}k(Fp,ge);function Vi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},c)}function Mi(){this.g=!0}Mi.prototype.xa=function(){this.g=!1};function rT(a,c,d,y,N,O){a.info(function(){if(a.g)if(O)for(var B="",Ee=O.split("&"),et=0;et<Ee.length;et++){var pe=Ee[et].split("=");if(1<pe.length){var ct=pe[0];pe=pe[1];var ht=ct.split("_");B=2<=ht.length&&ht[1]=="type"?B+(ct+"="+pe+"&"):B+(ct+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+c+`
`+d+`
`+B})}function sT(a,c,d,y,N,O,B){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+c+`
`+d+`
`+O+" "+B})}function Es(a,c,d,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+oT(a,d)+(y?" "+y:"")})}function iT(a,c){a.info(function(){return"TIMEOUT: "+c})}Mi.prototype.info=function(){};function oT(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var y=d[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return dc(d)}catch{return c}}var Ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Up={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},gc;function Aa(){}k(Aa,fc),Aa.prototype.g=function(){return new XMLHttpRequest},Aa.prototype.i=function(){return{}},gc=new Aa;function Qn(a,c,d,y){this.j=a,this.i=c,this.l=d,this.R=y||1,this.U=new Ze(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bp}function Bp(){this.i=null,this.g="",this.h=!1}var $p={},yc={};function _c(a,c,d){a.L=1,a.v=ba(Sn(c)),a.m=d,a.P=!0,Hp(a,null)}function Hp(a,c){a.F=Date.now(),Ca(a),a.A=Sn(a.v);var d=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),sm(d.i,"t",y),a.C=0,d=a.j.J,a.h=new Bp,a.g=Tm(a.j,d?c:null,!a.m),0<a.O&&(a.M=new fe(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(wt[0]=N.toString()),N=wt);for(var O=0;O<N.length;O++){var B=Ia(d,N[O],y||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Oi(),rT(a.i,a.u,a.A,a.l,a.R,a.m)}Qn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Rn(a)==3?c.j():this.Y(a)},Qn.prototype.Y=function(a){try{if(a==this.g)e:{const ht=Rn(this.g);var c=this.g.Ba();const xs=this.g.Z();if(!(3>ht)&&(ht!=3||this.g&&(this.h.h||this.g.oa()||hm(this.g)))){this.J||ht!=4||c==7||(c==8||0>=xs?Oi(3):Oi(2)),vc(this);var d=this.g.Z();this.X=d;t:if(qp(this)){var y=hm(this.g);a="";var N=y.length,O=Rn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),Li(this);var B="";break t}this.h.i=new u.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(O&&c==N-1)});y.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,sT(this.i,this.u,this.A,this.l,this.R,ht,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ee,et=this.g;if((Ee=et.g?et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(Ee)){var pe=Ee;break t}}pe=null}if(d=pe)Es(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,wc(this,d);else{this.o=!1,this.s=3,Et(12),Ur(this),Li(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<B.length;)if(en=aT(this,B),en==yc){ht==4&&(this.s=4,Et(14),d=!1),Es(this.i,this.l,null,"[Incomplete Response]");break}else if(en==$p){this.s=4,Et(15),Es(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else Es(this.i,this.l,en,null),wc(this,en);if(qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ht!=4||B.length!=0||this.h.h||(this.s=1,Et(16),d=!1),this.o=this.o&&d,!d)Es(this.i,this.l,B,"[Invalid Chunked Response]"),Ur(this),Li(this);else if(0<B.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Sc(ct),ct.M=!0,Et(11))}}else Es(this.i,this.l,B,null),wc(this,B);ht==4&&Ur(this),this.o&&!this.J&&(ht==4?_m(this.j,this):(this.o=!1,Ca(this)))}else xT(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),Ur(this),Li(this)}}}catch{}finally{}};function qp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function aT(a,c){var d=a.C,y=c.indexOf(`
`,d);return y==-1?yc:(d=Number(c.substring(d,y)),isNaN(d)?$p:(y+=1,y+d>c.length?yc:(c=c.slice(y,y+d),a.C=y+d,c)))}Qn.prototype.cancel=function(){this.J=!0,Ur(this)};function Ca(a){a.S=Date.now()+a.I,Wp(a,a.I)}function Wp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Vi(g(a.ba,a),c)}function vc(a){a.B&&(u.clearTimeout(a.B),a.B=null)}Qn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(iT(this.i,this.A),this.L!=2&&(Oi(),Et(17)),Ur(this),this.s=2,Li(this)):Wp(this,this.S-a)};function Li(a){a.j.G==0||a.J||_m(a.j,a)}function Ur(a){vc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,bi(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function wc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||Ec(d.h,a))){if(!a.K&&Ec(d.h,a)&&d.G==3){try{var y=d.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)ja(d),Ma(d);else break e;kc(d),Et(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=Vi(g(d.Za,d),6e3));if(1>=Qp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else $r(d,11)}else if((a.K||d.g==a)&&ja(d),!v(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let pe=N[c];if(d.T=pe[0],pe=pe[1],d.G==2)if(pe[0]=="c"){d.K=pe[1],d.ia=pe[2];const ct=pe[3];ct!=null&&(d.la=ct,d.j.info("VER="+d.la));const ht=pe[4];ht!=null&&(d.Aa=ht,d.j.info("SVER="+d.Aa));const xs=pe[5];xs!=null&&typeof xs=="number"&&0<xs&&(y=1.5*xs,d.L=y,d.j.info("backChannelRequestTimeoutMs_="+y)),y=d;const en=a.g;if(en){const Fa=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var O=y.h;O.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Tc(O,O.h),O.h=null))}if(y.D){const Rc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;Rc&&(y.ya=Rc,Ie(y.I,y.D,Rc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),y=d;var B=a;if(y.qa=Em(y,y.J?y.ia:null,y.W),B.K){Xp(y.h,B);var Ee=B,et=y.L;et&&(Ee.I=et),Ee.B&&(vc(Ee),Ca(Ee)),y.g=B}else gm(y);0<d.i.length&&La(d)}else pe[0]!="stop"&&pe[0]!="close"||$r(d,7);else d.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?$r(d,7):xc(d):pe[0]!="noop"&&d.l&&d.l.ta(pe),d.v=0)}}Oi(4)}catch{}}var lT=class{constructor(a,c){this.g=a,this.map=c}};function Kp(a){this.l=a||10,u.PerformanceNavigationTiming?(a=u.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qp(a){return a.h?1:a.g?a.g.size:0}function Ec(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Tc(a,c){a.g?a.g.add(c):a.h=c}function Xp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Kp.prototype.cancel=function(){if(this.i=Yp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Yp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return P(a.i)}function uT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var c=[],d=a.length,y=0;y<d;y++)c.push(a[y]);return c}c=[],d=0;for(y in a)c[d++]=a[y];return c}function cT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const y in a)c[d++]=y;return c}}}function Jp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=cT(a),y=uT(a),N=y.length,O=0;O<N;O++)c.call(void 0,y[O],d&&d[O],a)}var Zp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hT(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var y=a[d].indexOf("="),N=null;if(0<=y){var O=a[d].substring(0,y);N=a[d].substring(y+1)}else O=a[d];c(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Br){this.h=a.h,Pa(this,a.j),this.o=a.o,this.g=a.g,Na(this,a.s),this.l=a.l;var c=a.i,d=new Fi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),em(this,d),this.m=a.m}else a&&(c=String(a).match(Zp))?(this.h=!1,Pa(this,c[1]||"",!0),this.o=ji(c[2]||""),this.g=ji(c[3]||"",!0),Na(this,c[4]),this.l=ji(c[5]||"",!0),em(this,c[6]||"",!0),this.m=ji(c[7]||"")):(this.h=!1,this.i=new Fi(null,this.h))}Br.prototype.toString=function(){var a=[],c=this.j;c&&a.push(zi(c,tm,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(zi(c,tm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(zi(d,d.charAt(0)=="/"?pT:fT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",zi(d,gT)),a.join("")};function Sn(a){return new Br(a)}function Pa(a,c,d){a.j=d?ji(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Na(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function em(a,c,d){c instanceof Fi?(a.i=c,yT(a.i,a.h)):(d||(c=zi(c,mT)),a.i=new Fi(c,a.h))}function Ie(a,c,d){a.i.set(c,d)}function ba(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ji(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function zi(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,dT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function dT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var tm=/[#\/\?@]/g,fT=/[#\?:]/g,pT=/[#\?]/g,mT=/[#\?@]/g,gT=/#/g;function Fi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Xn(a){a.g||(a.g=new Map,a.h=0,a.i&&hT(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Fi.prototype,t.add=function(a,c){Xn(this),this.i=null,a=Ts(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function nm(a,c){Xn(a),c=Ts(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function rm(a,c){return Xn(a),c=Ts(a,c),a.g.has(c)}t.forEach=function(a,c){Xn(this),this.g.forEach(function(d,y){d.forEach(function(N){a.call(c,N,y,this)},this)},this)},t.na=function(){Xn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let y=0;y<c.length;y++){const N=a[y];for(let O=0;O<N.length;O++)d.push(c[y])}return d},t.V=function(a){Xn(this);let c=[];if(typeof a=="string")rm(this,a)&&(c=c.concat(this.g.get(Ts(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Xn(this),this.i=null,a=Ts(this,a),rm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function sm(a,c,d){nm(a,c),0<d.length&&(a.i=null,a.g.set(Ts(a,c),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var y=c[d];const O=encodeURIComponent(String(y)),B=this.V(y);for(y=0;y<B.length;y++){var N=O;B[y]!==""&&(N+="="+encodeURIComponent(String(B[y]))),a.push(N)}}return this.i=a.join("&")};function Ts(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function yT(a,c){c&&!a.j&&(Xn(a),a.i=null,a.g.forEach(function(d,y){var N=y.toLowerCase();y!=N&&(nm(this,y),sm(this,N,d))},a)),a.j=c}function _T(a,c){const d=new Mi;if(u.Image){const y=new Image;y.onload=x(Yn,d,"TestLoadImage: loaded",!0,c,y),y.onerror=x(Yn,d,"TestLoadImage: error",!1,c,y),y.onabort=x(Yn,d,"TestLoadImage: abort",!1,c,y),y.ontimeout=x(Yn,d,"TestLoadImage: timeout",!1,c,y),u.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function vT(a,c){const d=new Mi,y=new AbortController,N=setTimeout(()=>{y.abort(),Yn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(O=>{clearTimeout(N),O.ok?Yn(d,"TestPingServer: ok",!0,c):Yn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Yn(d,"TestPingServer: error",!1,c)})}function Yn(a,c,d,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(d)}catch{}}function wT(){this.g=new nT}function ET(a,c,d){const y=d||"";try{Jp(a,function(N,O){let B=N;h(N)&&(B=dc(N)),c.push(y+O+"="+encodeURIComponent(B))})}catch(N){throw c.push(y+"type="+encodeURIComponent("_badmap")),N}}function Da(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Da,fc),Da.prototype.g=function(){return new Oa(this.l,this.j)},Da.prototype.i=function(a){return function(){return a}}({});function Oa(a,c){Qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Oa,Qe),t=Oa.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Bi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Bi(this)),this.g&&(this.readyState=3,Bi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;im(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function im(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ui(this):Bi(this),this.readyState==3&&im(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ui(this))},t.Qa=function(a){this.g&&(this.response=a,Ui(this))},t.ga=function(){this.g&&Ui(this)};function Ui(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Bi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Bi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function om(a){let c="";return j(a,function(d,y){c+=y,c+=":",c+=d,c+=`\r
`}),c}function Ic(a,c,d){e:{for(y in d){var y=!1;break e}y=!0}y||(d=om(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ie(a,c,d))}function Me(a){Qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Me,Qe);var TT=/^https?$/i,IT=["POST","PUT"];t=Me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():gc.g(),this.v=this.o?Vp(this.o):Vp(gc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){am(this,O);return}if(a=d||"",d=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)d.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const O of y.keys())d.set(O,y.get(O));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),N=u.FormData&&a instanceof u.FormData,!(0<=Array.prototype.indexOf.call(IT,c,void 0))||y||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of d)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cm(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){am(this,O)}};function am(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,lm(a),Va(a)}function lm(a){a.A||(a.A=!0,F(a,"complete"),F(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,F(this,"complete"),F(this,"abort"),Va(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Va(this,!0)),Me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?um(this):this.bb())},t.bb=function(){um(this)};function um(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Rn(a)!=4||a.Z()!=2)){if(a.u&&Rn(a)==4)de(a.Ea,0,a);else if(F(a,"readystatechange"),Rn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var y;if(y=B===0){var N=String(a.D).match(Zp)[1]||null;!N&&u.self&&u.self.location&&(N=u.self.location.protocol.slice(0,-1)),y=!TT.test(N?N.toLowerCase():"")}d=y}if(d)F(a,"complete"),F(a,"success");else{a.m=6;try{var O=2<Rn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",lm(a)}}finally{Va(a)}}}}function Va(a,c){if(a.g){cm(a);const d=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||F(a,"ready");try{d.onreadystatechange=y}catch{}}}function cm(a){a.I&&(u.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Rn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Rn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),tT(c)}};function hm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function xT(a){const c={};a=(a.g&&2<=Rn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(v(a[y]))continue;var d=C(a[y]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[N]||[];c[N]=O,O.push(d)}T(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $i(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function dm(a){this.Aa=0,this.i=[],this.j=new Mi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$i("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$i("baseRetryDelayMs",5e3,a),this.cb=$i("retryDelaySeedMs",1e4,a),this.Wa=$i("forwardChannelMaxRetries",2,a),this.wa=$i("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Kp(a&&a.concurrentRequestLimit),this.Da=new wT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,y){Et(0),this.W=a,this.H=c||{},d&&y!==void 0&&(this.H.OSID=d,this.H.OAID=y),this.F=this.X,this.I=Em(this,null,this.W),La(this)};function xc(a){if(fm(a),a.G==3){var c=a.U++,d=Sn(a.I);if(Ie(d,"SID",a.K),Ie(d,"RID",c),Ie(d,"TYPE","terminate"),Hi(a,d),c=new Qn(a,a.j,c),c.L=2,c.v=ba(Sn(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=c.v,d=!0),d||(c.g=Tm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Ca(c)}wm(a)}function Ma(a){a.g&&(Sc(a),a.g.cancel(),a.g=null)}function fm(a){Ma(a),a.u&&(u.clearTimeout(a.u),a.u=null),ja(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&u.clearTimeout(a.s),a.s=null)}function La(a){if(!Gp(a.h)&&!a.s){a.s=!0;var c=a.Ga;ie||W(),U||(ie(),U=!0),q.add(c,a),a.B=0}}function kT(a,c){return Qp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Vi(g(a.Ga,a,c),vm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Qn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=_(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var y=this.i[d];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=mm(this,N,c),d=Sn(this.I),Ie(d,"RID",a),Ie(d,"CVER",22),this.D&&Ie(d,"X-HTTP-Session-Id",this.D),Hi(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(om(O)))+"&"+c:this.m&&Ic(d,this.m,O)),Tc(this.h,N),this.Ua&&Ie(d,"TYPE","init"),this.P?(Ie(d,"$req",c),Ie(d,"SID","null"),N.T=!0,_c(N,d,null)):_c(N,d,c),this.G=2}}else this.G==3&&(a?pm(this,a):this.i.length==0||Gp(this.h)||pm(this))};function pm(a,c){var d;c?d=c.l:d=a.U++;const y=Sn(a.I);Ie(y,"SID",a.K),Ie(y,"RID",d),Ie(y,"AID",a.T),Hi(a,y),a.m&&a.o&&Ic(y,a.m,a.o),d=new Qn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=mm(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Tc(a.h,d),_c(d,y,c)}function Hi(a,c){a.H&&j(a.H,function(d,y){Ie(c,y,d)}),a.l&&Jp({},function(d,y){Ie(c,y,d)})}function mm(a,c,d){d=Math.min(a.i.length,d);var y=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let O=-1;for(;;){const B=["count="+d];O==-1?0<d?(O=N[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let Ee=!0;for(let et=0;et<d;et++){let pe=N[et].g;const ct=N[et].map;if(pe-=O,0>pe)O=Math.max(0,N[et].g-100),Ee=!1;else try{ET(ct,B,"req"+pe+"_")}catch{y&&y(ct)}}if(Ee){y=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,y}function gm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ie||W(),U||(ie(),U=!0),q.add(c,a),a.v=0}}function kc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Vi(g(a.Fa,a),vm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ym(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Vi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Ma(this),ym(this))};function Sc(a){a.A!=null&&(u.clearTimeout(a.A),a.A=null)}function ym(a){a.g=new Qn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Sn(a.qa);Ie(c,"RID","rpc"),Ie(c,"SID",a.K),Ie(c,"AID",a.T),Ie(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(c,"TO",a.ja),Ie(c,"TYPE","xmlhttp"),Hi(a,c),a.m&&a.o&&Ic(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ba(Sn(c)),d.m=null,d.P=!0,Hp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ma(this),kc(this),Et(19))};function ja(a){a.C!=null&&(u.clearTimeout(a.C),a.C=null)}function _m(a,c){var d=null;if(a.g==c){ja(a),Sc(a),a.g=null;var y=2}else if(Ec(a.h,c))d=c.D,Xp(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;y=Sa(),F(y,new Fp(y,d)),La(a)}else gm(a);else if(N=c.s,N==3||N==0&&0<c.X||!(y==1&&kT(a,c)||y==2&&kc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function vm(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function $r(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),y=a.Xa;const N=!y;y=new Br(y||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Pa(y,"https"),ba(y),N?_T(y.toString(),d):vT(y.toString(),d)}else Et(2);a.G=0,a.l&&a.l.sa(c),wm(a),fm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function wm(a){if(a.G=0,a.ka=[],a.l){const c=Yp(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Em(a,c,d){var y=d instanceof Br?Sn(d):new Br(d);if(y.g!="")c&&(y.g=c+"."+y.g),Na(y,y.s);else{var N=u.location;y=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var O=new Br(null);y&&Pa(O,y),c&&(O.g=c),N&&Na(O,N),d&&(O.l=d),y=O}return d=a.D,c=a.ya,d&&c&&Ie(y,d,c),Ie(y,"VER",a.la),Hi(a,y),y}function Tm(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Me(new Da({eb:d})):new Me(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Im(){}t=Im.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function za(){}za.prototype.g=function(a,c){return new Lt(a,c)};function Lt(a,c){Qe.call(this),this.g=new dm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Is(this)}k(Lt,Qe),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){xc(this.g)},Lt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=dc(a),a=d);c.i.push(new lT(c.Ya++,a)),c.G==3&&La(c)},Lt.prototype.N=function(){this.g.l=null,delete this.j,xc(this.g),delete this.g,Lt.aa.N.call(this)};function xm(a){pc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}k(xm,pc);function km(){mc.call(this),this.status=1}k(km,mc);function Is(a){this.g=a}k(Is,Im),Is.prototype.ua=function(){F(this.g,"a")},Is.prototype.ta=function(a){F(this.g,new xm(a))},Is.prototype.sa=function(a){F(this.g,new km)},Is.prototype.ra=function(){F(this.g,"b")},za.prototype.createWebChannel=za.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,M0=function(){return new za},V0=function(){return Sa()},O0=Fr,Ed={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ra.NO_ERROR=0,Ra.TIMEOUT=8,Ra.HTTP_ERROR=6,Il=Ra,Up.COMPLETE="complete",D0=Up,Mp.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",Qe.prototype.listen=Qe.prototype.K,lo=Mp,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,b0=Me}).apply(typeof sl<"u"?sl:typeof self<"u"?self:typeof window<"u"?window:{});const Kg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Lf("@firebase/firestore");function Zi(){return ls.logLevel}function K(t,...e){if(ls.logLevel<=ue.DEBUG){const n=e.map(Ff);ls.debug(`Firestore (${vi}): ${t}`,...n)}}function Hn(t,...e){if(ls.logLevel<=ue.ERROR){const n=e.map(Ff);ls.error(`Firestore (${vi}): ${t}`,...n)}}function li(t,...e){if(ls.logLevel<=ue.WARN){const n=e.map(Ff);ls.warn(`Firestore (${vi}): ${t}`,...n)}}function Ff(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t="Unexpected state"){const e=`FIRESTORE (${vi}) INTERNAL ASSERTION FAILED: `+t;throw Hn(e),new Error(e)}function ve(t,e){t||Z()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends kn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class HS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class qS{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ve(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new xr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new xr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ve(typeof r.accessToken=="string"),new L0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new mt(e)}}class WS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class KS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new WS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class GS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class QS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ve(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.R=n.token,new GS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=XS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function ui(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ge(0,0))}static max(){return new ee(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&Z(),r===void 0?r=e.length-n:r>e.length-n&&Z(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ce extends Qo{construct(e,n,r){return new Ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ce(n)}static emptyPath(){return new Ce([])}}const YS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends Qo{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return YS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new st(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new Q(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Q(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(r+=u,s++):(i(),s++)}if(i(),o)throw new Q(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ce.fromString(e))}static fromName(e){return new X(Ce.fromString(e).popFirst(5))}static empty(){return new X(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ce(e.slice()))}}function JS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Pr(s,X.empty(),e)}function ZS(t){return new Pr(t.readTime,t.key,-1)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(ee.min(),X.empty(),-1)}static max(){return new Pr(ee.max(),X.empty(),-1)}}function eR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==tR)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(u=>{++s,u.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let u=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(p=>{o[h]=p,++u,u===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function rR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function da(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Uf.oe=-1;function Fu(t){return t==null}function au(t){return t===0&&1/t==-1/0}function sR(t){return typeof t=="number"&&Number.isInteger(t)&&!au(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function gs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function z0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new il(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new il(this.root,e,this.comparator,!1)}getReverseIterator(){return new il(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new il(this.root,e,this.comparator,!0)}}class il{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Z();const e=this.left.check();if(e!==this.right.check())throw Z();return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw Z()}get value(){throw Z()}get color(){throw Z()}get left(){throw Z()}get right(){throw Z()}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qg(this.data.getIterator())}getIteratorFrom(e){return new Qg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Qg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new ot(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ui(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new F0("Invalid base64 string: "+i):i}}(e);return new lt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}lt.EMPTY_BYTE_STRING=new lt("");const iR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Nr(t){if(ve(!!t),typeof t=="string"){let e=0;const n=iR.exec(t);if(ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function us(t){return typeof t=="string"?lt.fromBase64String(t):lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $f(t){const e=t.mapValue.fields.__previous_value__;return Bf(e)?$f(e):e}function Xo(t){const e=Nr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(e,n,r,s,i,o,u,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=h}}class Yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol={mapValue:{}};function cs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Bf(t)?4:lR(t)?9007199254740991:aR(t)?10:11:Z()}function In(t,e){if(t===e)return!0;const n=cs(t);if(n!==cs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Xo(t).isEqual(Xo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Nr(s.timestampValue),u=Nr(i.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return us(s.bytesValue).isEqual(us(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),u=ze(i.doubleValue);return o===u?au(o)===au(u):isNaN(o)&&isNaN(u)}return!1}(t,e);case 9:return ui(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Gg(o)!==Gg(u))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(u[l]===void 0||!In(o[l],u[l])))return!1;return!0}(t,e);default:return Z()}}function Jo(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function ci(t,e){if(t===e)return 0;const n=cs(t),r=cs(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return function(i,o){const u=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(t,e);case 3:return Xg(t.timestampValue,e.timestampValue);case 4:return Xg(Xo(t),Xo(e));case 5:return me(t.stringValue,e.stringValue);case 6:return function(i,o){const u=us(i),l=us(o);return u.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const u=i.split("/"),l=o.split("/");for(let h=0;h<u.length&&h<l.length;h++){const p=me(u[h],l[h]);if(p!==0)return p}return me(u.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const u=me(ze(i.latitude),ze(o.latitude));return u!==0?u:me(ze(i.longitude),ze(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Yg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var u,l,h,p;const m=i.fields||{},g=o.fields||{},x=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=me(((h=x==null?void 0:x.values)===null||h===void 0?void 0:h.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return P!==0?P:Yg(x,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===ol.mapValue&&o===ol.mapValue)return 0;if(i===ol.mapValue)return 1;if(o===ol.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),h=o.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let m=0;m<l.length&&m<p.length;++m){const g=me(l[m],p[m]);if(g!==0)return g;const x=ci(u[l[m]],h[p[m]]);if(x!==0)return x}return me(l.length,p.length)}(t.mapValue,e.mapValue);default:throw Z()}}function Xg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=Nr(t),r=Nr(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function Yg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ci(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function hi(t){return Td(t)}function Td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return us(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Td(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Td(n.fields[o])}`;return s+"}"}(t.mapValue):Z()}function Id(t){return!!t&&"integerValue"in t}function Hf(t){return!!t&&"arrayValue"in t}function Jg(t){return!!t&&"nullValue"in t}function Zg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xl(t){return!!t&&"mapValue"in t}function aR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function To(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return gs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=To(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=To(t.arrayValue.values[n]);return e}return Object.assign({},t)}function lR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!xl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=To(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach((o,u)=>{if(!n.isImmediateParentOf(u)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=u.popLast()}o?r[u.lastSegment()]=To(o):s.push(u.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());xl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];xl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){gs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(To(this.value))}}function U0(t){const e=[];return gs(t.fields,(n,r)=>{const s=new st([n]);if(xl(r)){const i=U0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n,r,s,i,o,u){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(e){return new yt(e,0,ee.min(),ee.min(),ee.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new yt(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new yt(e,2,n,ee.min(),ee.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new yt(e,3,n,ee.min(),ee.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof yt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.position=e,this.inclusive=n}}function ey(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=ci(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ty(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n="asc"){this.field=e,this.dir=n}}function uR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{}class We extends B0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new hR(e,n,r):n==="array-contains"?new pR(e,r):n==="in"?new mR(e,r):n==="not-in"?new gR(e,r):n==="array-contains-any"?new yR(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dR(e,r):new fR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ci(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(ci(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xn extends B0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new xn(e,n)}matches(e){return $0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $0(t){return t.op==="and"}function H0(t){return cR(t)&&$0(t)}function cR(t){for(const e of t.filters)if(e instanceof xn)return!1;return!0}function xd(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+hi(t.value);if(H0(t))return t.filters.map(e=>xd(e)).join(",");{const e=t.filters.map(n=>xd(n)).join(",");return`${t.op}(${e})`}}function q0(t,e){return t instanceof We?function(r,s){return s instanceof We&&r.op===s.op&&r.field.isEqual(s.field)&&In(r.value,s.value)}(t,e):t instanceof xn?function(r,s){return s instanceof xn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,u)=>i&&q0(o,s.filters[u]),!0):!1}(t,e):void Z()}function W0(t){return t instanceof We?function(n){return`${n.field.canonicalString()} ${n.op} ${hi(n.value)}`}(t):t instanceof xn?function(n){return n.op.toString()+" {"+n.getFilters().map(W0).join(" ,")+"}"}(t):"Filter"}class hR extends We{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class dR extends We{constructor(e,n){super(e,"in",n),this.keys=K0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class fR extends We{constructor(e,n){super(e,"not-in",n),this.keys=K0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function K0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class pR extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hf(n)&&Jo(n.arrayValue,this.value)}}class mR extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class gR extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class yR extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n=null,r=[],s=[],i=null,o=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.ue=null}}function ny(t,e=null,n=[],r=[],s=null,i=null,o=null){return new _R(t,e,n,r,s,i,o)}function qf(t){const e=te(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>xd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Fu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>hi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>hi(r)).join(",")),e.ue=n}return e.ue}function Wf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!uR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!q0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ty(t.startAt,e.startAt)&&ty(t.endAt,e.endAt)}function kd(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n=null,r=[],s=[],i=null,o="F",u=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function vR(t,e,n,r,s,i,o,u){return new Uu(t,e,n,r,s,i,o,u)}function Kf(t){return new Uu(t)}function ry(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wR(t){return t.collectionGroup!==null}function Io(t){const e=te(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new ot(st.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new uu(i,r))}),n.has(st.keyField().canonicalString())||e.ce.push(new uu(st.keyField(),r))}return e.ce}function vn(t){const e=te(t);return e.le||(e.le=ER(e,Io(t))),e.le}function ER(t,e){if(t.limitType==="F")return ny(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new uu(s.field,i)});const n=t.endAt?new lu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new lu(t.startAt.position,t.startAt.inclusive):null;return ny(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sd(t,e,n){return new Uu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bu(t,e){return Wf(vn(t),vn(e))&&t.limitType===e.limitType}function G0(t){return`${qf(vn(t))}|lt:${t.limitType}`}function Rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>W0(s)).join(", ")}]`),Fu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>hi(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>hi(s)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function $u(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Io(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,u,l){const h=ey(o,u,l);return o.inclusive?h<=0:h<0}(r.startAt,Io(r),s)||r.endAt&&!function(o,u,l){const h=ey(o,u,l);return o.inclusive?h>=0:h>0}(r.endAt,Io(r),s))}(t,e)}function TR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Q0(t){return(e,n)=>{let r=!1;for(const s of Io(t)){const i=IR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function IR(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,u){const l=o.data.field(i),h=u.data.field(i);return l!==null&&h!==null?ci(l,h):Z()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){gs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return z0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=new De(X.comparator);function qn(){return xR}const X0=new De(X.comparator);function uo(...t){let e=X0;for(const n of t)e=e.insert(n.key,n);return e}function Y0(t){let e=X0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Yr(){return xo()}function J0(){return xo()}function xo(){return new wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const kR=new De(X.comparator),SR=new ot(X.comparator);function le(...t){let e=SR;for(const n of t)e=e.add(n);return e}const RR=new ot(me);function AR(){return RR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:au(e)?"-0":e}}function Z0(t){return{integerValue:""+t}}function CR(t,e){return sR(e)?Z0(e):Gf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(){this._=void 0}}function PR(t,e,n){return t instanceof Zo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Bf(i)&&(i=$f(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof ea?tw(t,e):t instanceof ta?nw(t,e):function(s,i){const o=ew(s,i),u=sy(o)+sy(s.Pe);return Id(o)&&Id(s.Pe)?Z0(u):Gf(s.serializer,u)}(t,e)}function NR(t,e,n){return t instanceof ea?tw(t,e):t instanceof ta?nw(t,e):n}function ew(t,e){return t instanceof cu?function(r){return Id(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Zo extends Hu{}class ea extends Hu{constructor(e){super(),this.elements=e}}function tw(t,e){const n=rw(e);for(const r of t.elements)n.some(s=>In(s,r))||n.push(r);return{arrayValue:{values:n}}}class ta extends Hu{constructor(e){super(),this.elements=e}}function nw(t,e){let n=rw(e);for(const r of t.elements)n=n.filter(s=>!In(s,r));return{arrayValue:{values:n}}}class cu extends Hu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function sy(t){return ze(t.integerValue||t.doubleValue)}function rw(t){return Hf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n){this.field=e,this.transform=n}}function DR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ea&&s instanceof ea||r instanceof ta&&s instanceof ta?ui(r.elements,s.elements,In):r instanceof cu&&s instanceof cu?In(r.Pe,s.Pe):r instanceof Zo&&s instanceof Zo}(t.transform,e.transform)}class OR{constructor(e,n){this.version=e,this.transformResults=n}}class Vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vt}static exists(e){return new Vt(void 0,e)}static updateTime(e){return new Vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class qu{}function sw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Wu(t.key,Vt.none()):new fa(t.key,t.data,Vt.none());{const n=t.data,r=Pt.empty();let s=new ot(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new Ft(s.toArray()),Vt.none())}}function VR(t,e,n){t instanceof fa?function(s,i,o){const u=s.value.clone(),l=oy(s.fieldTransforms,i,o.transformResults);u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(s,i,o){if(!kl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const u=oy(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(iw(s)),l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ko(t,e,n,r){return t instanceof fa?function(i,o,u,l){if(!kl(i.precondition,o))return u;const h=i.value.clone(),p=ay(i.fieldTransforms,l,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Lr?function(i,o,u,l){if(!kl(i.precondition,o))return u;const h=ay(i.fieldTransforms,l,o),p=o.data;return p.setAll(iw(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,u){return kl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(t,e,n)}function MR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ew(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function iy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ui(r,s,(i,o)=>DR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fa extends qu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends qu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function oy(t,e,n){const r=new Map;ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,u=e.data.field(i.field);r.set(i.field,NR(o,u,n[s]))}return r}function ay(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,PR(i,o,e))}return r}class Wu extends qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LR extends qu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&VR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=J0();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=n.has(s.key)?null:u;const l=sw(o,u);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&ui(this.mutations,e.mutations,(n,r)=>iy(n,r))&&ui(this.baseMutations,e.baseMutations,(n,r)=>iy(n,r))}}class Qf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ve(e.mutations.length===r.length);let s=function(){return kR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Qf(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,ce;function UR(t){switch(t){default:return Z();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function ow(t){if(t===void 0)return Hn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Ue.OK:return M.OK;case Ue.CANCELLED:return M.CANCELLED;case Ue.UNKNOWN:return M.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return M.INTERNAL;case Ue.UNAVAILABLE:return M.UNAVAILABLE;case Ue.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Ue.NOT_FOUND:return M.NOT_FOUND;case Ue.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Ue.ABORTED:return M.ABORTED;case Ue.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Ue.DATA_LOSS:return M.DATA_LOSS;default:return Z()}}(ce=Ue||(Ue={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R=new es([4294967295,4294967295],0);function ly(t){const e=BR().encode(t),n=new N0;return n.update(e),new Uint8Array(n.digest())}function uy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new es([n,r],0),new es([s,i],0)]}class Xf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new co(`Invalid padding: ${n}`);if(r<0)throw new co(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new co(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new co(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=es.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(es.fromNumber(r)));return s.compare($R)===1&&(s=new es([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ly(e),[r,s]=uy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xf(i,s,n);return r.forEach(u=>o.insert(u)),o}insert(e){if(this.Ie===0)return;const n=ly(e),[r,s]=uy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,pa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ku(ee.min(),s,new De(me),qn(),le())}}class pa{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new pa(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class aw{constructor(e,n){this.targetId=e,this.me=n}}class lw{constructor(e,n,r=lt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class cy{constructor(){this.fe=0,this.ge=dy(),this.pe=lt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=le(),n=le(),r=le();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:Z()}}),new pa(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=dy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class HR{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=hy(),this.Qe=new De(me)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(kd(i))if(r===0){const o=new X(i.path);this.Ue(n,o,yt.newNoDocument(o,ee.min()))}else ve(r===1);else{const o=this.Ye(n);if(o!==r){const u=this.Ze(e),l=u?this.Xe(u,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,u;try{o=us(r).toUint8Array()}catch(l){if(l instanceof F0)return li("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Xf(o,s,i)}catch(l){return li(l instanceof co?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),u=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const u=this.Je(o);if(u){if(i.current&&kd(u.target)){const l=new X(u.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,yt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=le();this.qe.forEach((i,o)=>{let u=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ku(e,n,this.Qe,this.ke,r);return this.ke=qn(),this.qe=hy(),this.Qe=new De(me),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new cy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ot(me),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new cy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function hy(){return new De(X.comparator)}function dy(){return new De(X.comparator)}const qR={asc:"ASCENDING",desc:"DESCENDING"},WR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},KR={and:"AND",or:"OR"};class GR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rd(t,e){return t.useProto3Json||Fu(e)?e:{value:e}}function hu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function QR(t,e){return hu(t,e.toTimestamp())}function wn(t){return ve(!!t),ee.fromTimestamp(function(n){const r=Nr(n);return new Ge(r.seconds,r.nanos)}(t))}function Yf(t,e){return Ad(t,e).canonicalString()}function Ad(t,e){const n=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function cw(t){const e=Ce.fromString(t);return ve(mw(e)),e}function Cd(t,e){return Yf(t.databaseId,e.path)}function ih(t,e){const n=cw(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(dw(n))}function hw(t,e){return Yf(t.databaseId,e)}function XR(t){const e=cw(t);return e.length===4?Ce.emptyPath():dw(e)}function Pd(t){return new Ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dw(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function fy(t,e,n){return{name:Cd(t,e),fields:n.value.mapValue.fields}}function YR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Z()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(ve(p===void 0||typeof p=="string"),lt.fromBase64String(p||"")):(ve(p===void 0||p instanceof Buffer||p instanceof Uint8Array),lt.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(h){const p=h.code===void 0?M.UNKNOWN:ow(h.code);return new Q(p,h.message||"")}(o);n=new lw(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ih(t,r.document.name),i=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):ee.min(),u=new Pt({mapValue:{fields:r.document.fields}}),l=yt.newFoundDocument(s,i,o,u),h=r.targetIds||[],p=r.removedTargetIds||[];n=new Sl(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ih(t,r.document),i=r.readTime?wn(r.readTime):ee.min(),o=yt.newNoDocument(s,i),u=r.removedTargetIds||[];n=new Sl([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ih(t,r.document),i=r.removedTargetIds||[];n=new Sl([],i,s,null)}else{if(!("filter"in e))return Z();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new FR(s,i),u=r.targetId;n=new aw(u,o)}}return n}function JR(t,e){let n;if(e instanceof fa)n={update:fy(t,e.key,e.value)};else if(e instanceof Wu)n={delete:Cd(t,e.key)};else if(e instanceof Lr)n={update:fy(t,e.key,e.data),updateMask:a1(e.fieldMask)};else{if(!(e instanceof LR))return Z();n={verify:Cd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const u=o.transform;if(u instanceof Zo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof ea)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof ta)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof cu)return{fieldPath:o.field.canonicalString(),increment:u.Pe};throw Z()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:QR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Z()}(t,e.precondition)),n}function ZR(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?wn(s.updateTime):wn(i);return o.isEqual(ee.min())&&(o=wn(i)),new OR(o,s.transformResults||[])}(n,e))):[]}function e1(t,e){return{documents:[hw(t,e.path)]}}function t1(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hw(t,s);const i=function(h){if(h.length!==0)return pw(xn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(g){return{field:As(g.field),direction:s1(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const u=Rd(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function n1(t){let e=XR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ve(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=fw(m);return g instanceof xn&&H0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new uu(Cs(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let u=null;n.limit&&(u=function(m){let g;return g=typeof m=="object"?m.value:m,Fu(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(m){const g=!!m.before,x=m.values||[];return new lu(x,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,x=m.values||[];return new lu(x,g)}(n.endAt)),vR(e,s,o,i,u,"F",l,h)}function r1(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Z()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Cs(n.unaryFilter.field);return We.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Cs(n.unaryFilter.field);return We.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Cs(n.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Cs(n.unaryFilter.field);return We.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Z()}}(t):t.fieldFilter!==void 0?function(n){return We.create(Cs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Z()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return xn.create(n.compositeFilter.filters.map(r=>fw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Z()}}(n.compositeFilter.op))}(t):Z()}function s1(t){return qR[t]}function i1(t){return WR[t]}function o1(t){return KR[t]}function As(t){return{fieldPath:t.canonicalString()}}function Cs(t){return st.fromServerFormat(t.fieldPath)}function pw(t){return t instanceof We?function(n){if(n.op==="=="){if(Zg(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NAN"}};if(Jg(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Zg(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NAN"}};if(Jg(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(n.field),op:i1(n.op),value:n.value}}}(t):t instanceof xn?function(n){const r=n.getFilters().map(s=>pw(s));return r.length===1?r[0]:{compositeFilter:{op:o1(n.op),filters:r}}}(t):Z()}function a1(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,n,r,s,i=ee.min(),o=ee.min(),u=lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e){this.ct=e}}function u1(t){const e=n1({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.un=new h1}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Pr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class h1{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ot(Ce.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ot(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new di(0)}static kn(){return new di(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(){this.changes=new wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,yt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ko(r.mutation,s,Ft.empty(),Ge.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const s=Yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=uo();return i.forEach((u,l)=>{o=o.insert(u,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,u)=>{n.set(o,u)})})}computeViews(e,n,r,s){let i=qn();const o=xo(),u=function(){return xo()}();return n.forEach((l,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof Lr)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),ko(p.mutation,h,p.mutation.getFieldMask(),Ge.now())):o.set(h.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var m;return u.set(h,new f1(p,(m=o.get(h))!==null&&m!==void 0?m:null))}),u))}recalculateAndSaveOverlays(e,n){const r=xo();let s=new De((o,u)=>o-u),i=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const u of o)u.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let p=r.get(l)||Ft.empty();p=u.applyToLocalView(h,p),r.set(l,p);const m=(s.get(u.batchId)||le()).add(l);s=s.insert(u.batchId,m)})}).next(()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),h=l.key,p=l.value,m=J0();p.forEach(g=>{if(!i.has(g)){const x=sw(n.get(g),r.get(g));x!==null&&m.set(g,x),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Yr());let u=-1,l=i;return o.next(h=>L.forEach(h,(p,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),i.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{l=l.insert(p,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,le())).next(p=>({batchId:u,changes:Y0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=uo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=uo();return this.indexManager.getCollectionParents(e,i).next(u=>L.forEach(u,l=>{const h=function(m,g){return new Uu(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,yt.newInvalidDocument(p)))});let u=uo();return o.forEach((l,h)=>{const p=i.get(l);p!==void 0&&ko(p.mutation,h,Ft.empty(),Ge.now()),$u(n,h)&&(u=u.insert(l,h))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m1{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:wn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:u1(s.bundledQuery),readTime:wn(s.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(){this.overlays=new De(X.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new X(n.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const l=u.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=Yr(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const u=Yr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,p)=>u.set(h,p)),!(u.size()>=s)););return L.resolve(u)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zR(n,r));let i=this.Ir.get(n);i===void 0&&(i=le(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(){this.sessionToken=lt.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.Tr=new ot(Xe.Er),this.dr=new ot(Xe.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Xe(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Xe(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Ce([])),r=new Xe(n,e),s=new Xe(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Ce([])),r=new Xe(n,e),s=new Xe(n,e+1);let i=le();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Xe(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Xe{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||me(e.wr,n.wr)}static Ar(e,n){return me(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ot(Xe.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jR(i,n,r,s);this.mutationQueue.push(o);for(const u of s)this.br=this.br.add(new Xe(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Xe(n,0),s=new Xe(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const u=this.Dr(o.wr);i.push(u)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(me);return n.forEach(s=>{const i=new Xe(s,0),o=new Xe(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],u=>{r=r.add(u.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new Xe(new X(i),0);let u=new ot(me);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(u=u.add(l.wr)),!0)},o),L.resolve(this.Cr(u))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,s=>{const i=new Xe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Xe(n,0),s=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.Mr=e,this.docs=function(){return new De(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():yt.newInvalidDocument(n))}getEntries(e,n){let r=qn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():yt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=qn();const o=n.path,u=new X(o.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:h,value:{document:p}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||eR(ZS(p),r)<=0||(s.has(p.key)||$u(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){Z()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new w1(this)}getSize(e){return L.resolve(this.size)}}class w1 extends d1{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(e){this.persistence=e,this.Nr=new wi(n=>qf(n),Wf),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Jf,this.targetCount=0,this.kr=di.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new di(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Uf(0),this.Kr=!1,this.Kr=!0,this.$r=new y1,this.referenceDelegate=e(this),this.Ur=new E1(this),this.indexManager=new c1,this.remoteDocumentCache=function(s){return new v1(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new l1(n),this.Gr=new m1(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new g1,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new _1(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new I1(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class I1 extends nR{constructor(e){super(),this.currentSequenceNumber=e}}class Zf{constructor(e){this.persistence=e,this.Jr=new Jf,this.Yr=null}static Zr(e){return new Zf(e)}get Xr(){if(this.Yr)return this.Yr;throw Z()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=le(),s=le();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ep(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Sk()?8:rR(vt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new x1;return this.Xi(e,n,o).next(u=>{if(i.result=u,this.zi)return this.es(e,n,o,u.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Zi()<=ue.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Zi()<=ue.DEBUG&&K("QueryEngine","Query:",Rs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Zi()<=ue.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):L.resolve())}Yi(e,n){if(ry(n))return L.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Sd(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=le(...i);return this.Ji.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,u);return this.ns(n,h,o,l.readTime)?this.Yi(e,Sd(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return ry(n)||s.isEqual(ee.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?L.resolve(null):(Zi()<=ue.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Rs(n)),this.rs(e,o,n,JS(s,-1)).next(u=>u))})}ts(e,n){let r=new ot(Q0(e));return n.forEach((s,i)=>{$u(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Zi()<=ue.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Rs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Pr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new De(me),this._s=new wi(i=>qf(i),Wf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new p1(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function R1(t,e,n,r){return new S1(t,e,n,r)}async function gw(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],u=[];let l=le();for(const h of s){o.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of i){u.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:u}))})})}function A1(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(u,l,h,p){const m=h.batch,g=m.keys();let x=L.resolve();return g.forEach(k=>{x=x.next(()=>p.getEntry(l,k)).next(P=>{const D=h.docVersions.get(k);ve(D!==null),P.version.compareTo(D)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),p.addEntry(P)))})}),x.next(()=>u.mutationQueue.removeMutationBatch(l,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=le();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(l=l.add(u.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function yw(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function C1(t,e){const n=te(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const u=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;u.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let x=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?x=x.withResumeToken(lt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):p.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(p.resumeToken,r)),s=s.insert(m,x),function(P,D,I){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(g,x,p)&&u.push(n.Ur.updateTargetData(i,x))});let l=qn(),h=le();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),u.push(P1(i,o,e.documentUpdates).next(p=>{l=p.Ps,h=p.Is})),!r.isEqual(ee.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(p)}return L.waitFor(u).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function P1(t,e,n){let r=le(),s=le();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=qn();return n.forEach((u,l)=>{const h=i.get(u);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(u,l.readTime),o=o.insert(u,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(u,l)):K("LocalStore","Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function N1(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function b1(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Nd(t,e,n){const r=te(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!da(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function py(t,e,n){const r=te(t);let s=ee.min(),i=le();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,p){const m=te(l),g=m._s.get(p);return g!==void 0?L.resolve(m.os.get(g)):m.Ur.getTargetData(h,p)}(r,o,vn(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,u.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:le())).next(u=>(D1(r,TR(e),u),{documents:u,Ts:i})))}function D1(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class my{constructor(){this.activeTargetIds=AR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class O1{constructor(){this.so=new my,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new my,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let al=null;function oh(){return al===null?al=function(){return 268435456+Math.round(2147483648*Math.random())}():al++,"0x"+al.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt="WebChannelConnection";class j1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const u=oh(),l=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${u}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(p=>(K("RestConnection",`Received RPC '${n}' ${u}: `,p),p),p=>{throw li("RestConnection",`RPC '${n}' ${u} failed with error: `,p,"url: ",l,"request:",s),p})}Lo(n,r,s,i,o,u){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=M1[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=oh();return new Promise((o,u)=>{const l=new b0;l.setWithCredentials(!0),l.listenOnce(D0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Il.NO_ERROR:const p=l.getResponseJson();K(pt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case Il.TIMEOUT:K(pt,`RPC '${e}' ${i} timed out`),u(new Q(M.DEADLINE_EXCEEDED,"Request time out"));break;case Il.HTTP_ERROR:const m=l.getStatus();if(K(pt,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const x=g==null?void 0:g.error;if(x&&x.status&&x.message){const k=function(D){const I=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(I)>=0?I:M.UNKNOWN}(x.status);u(new Q(k,x.message))}else u(new Q(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new Q(M.UNAVAILABLE,"Connection failed."));break;default:Z()}}finally{K(pt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);K(pt,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=oh(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=M0(),u=V0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const p=i.join("");K(pt,`Creating RPC '${e}' stream ${s}: ${p}`,l);const m=o.createWebChannel(p,l);let g=!1,x=!1;const k=new L1({Io:D=>{x?K(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(K(pt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),K(pt,`RPC '${e}' stream ${s} sending:`,D),m.send(D))},To:()=>m.close()}),P=(D,I,v)=>{D.listen(I,R=>{try{v(R)}catch(b){setTimeout(()=>{throw b},0)}})};return P(m,lo.EventType.OPEN,()=>{x||(K(pt,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),P(m,lo.EventType.CLOSE,()=>{x||(x=!0,K(pt,`RPC '${e}' stream ${s} transport closed`),k.So())}),P(m,lo.EventType.ERROR,D=>{x||(x=!0,li(pt,`RPC '${e}' stream ${s} transport errored:`,D),k.So(new Q(M.UNAVAILABLE,"The operation could not be completed")))}),P(m,lo.EventType.MESSAGE,D=>{var I;if(!x){const v=D.data[0];ve(!!v);const R=v,b=R.error||((I=R[0])===null||I===void 0?void 0:I.error);if(b){K(pt,`RPC '${e}' stream ${s} received error:`,b);const V=b.status;let j=function(E){const S=Ue[E];if(S!==void 0)return ow(S)}(V),T=b.message;j===void 0&&(j=M.INTERNAL,T="Unknown error status: "+V+" with message "+b.message),x=!0,k.So(new Q(j,T)),m.close()}else K(pt,`RPC '${e}' stream ${s} received:`,v),k.bo(v)}}),P(u,O0.STAT_EVENT,D=>{D.stat===Ed.PROXY?K(pt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Ed.NOPROXY&&K(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function ah(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(t){return new GR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw{constructor(e,n,r,s,i,o,u,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new _w(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Hn(n.toString()),Hn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Q(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class z1 extends vw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=YR(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?wn(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Pd(this.serializer),n.addTarget=function(i,o){let u;const l=o.target;if(u=kd(l)?{documents:e1(i,l)}:{query:t1(i,l)._t},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=uw(i,o.resumeToken);const h=Rd(i,o.expectedCount);h!==null&&(u.expectedCount=h)}else if(o.snapshotVersion.compareTo(ee.min())>0){u.readTime=hu(i,o.snapshotVersion.toTimestamp());const h=Rd(i,o.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const r=r1(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Pd(this.serializer),n.removeTarget=e,this.a_(n)}}class F1 extends vw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ve(!!e.streamToken),this.lastStreamToken=e.streamToken,ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ZR(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Pd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>JR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Ad(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Lo(e,Ad(n,r),s,o,u,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class B1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Hn(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ys(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=te(l);h.L_.add(4),await ma(h),h.q_.set("Unknown"),h.L_.delete(4),await Qu(h)}(this))})}),this.q_=new B1(r,s)}}async function Qu(t){if(ys(t))for(const e of t.B_)await e(!0)}async function ma(t){for(const e of t.B_)await e(!1)}function ww(t,e){const n=te(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),sp(n)?rp(n):Ei(n).r_()&&np(n,e))}function tp(t,e){const n=te(t),r=Ei(n);n.N_.delete(e),r.r_()&&Ew(n,e),n.N_.size===0&&(r.r_()?r.o_():ys(n)&&n.q_.set("Unknown"))}function np(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ei(t).A_(e)}function Ew(t,e){t.Q_.xe(e),Ei(t).R_(e)}function rp(t){t.Q_=new HR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ei(t).start(),t.q_.v_()}function sp(t){return ys(t)&&!Ei(t).n_()&&t.N_.size>0}function ys(t){return te(t).L_.size===0}function Tw(t){t.Q_=void 0}async function H1(t){t.q_.set("Online")}async function q1(t){t.N_.forEach((e,n)=>{np(t,e)})}async function W1(t,e){Tw(t),sp(t)?(t.q_.M_(e),rp(t)):t.q_.set("Unknown")}async function K1(t,e,n){if(t.q_.set("Online"),e instanceof lw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const u of i.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,o),s.N_.delete(u),s.Q_.removeTarget(u))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await du(t,r)}else if(e instanceof Sl?t.Q_.Ke(e):e instanceof aw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await yw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const u=i.Q_.rt(o);return u.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.N_.get(h);p&&i.N_.set(h,p.withResumeToken(l.resumeToken,o))}}),u.targetMismatches.forEach((l,h)=>{const p=i.N_.get(l);if(!p)return;i.N_.set(l,p.withResumeToken(lt.EMPTY_BYTE_STRING,p.snapshotVersion)),Ew(i,l);const m=new fr(p.target,l,h,p.sequenceNumber);np(i,m)}),i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await du(t,r)}}async function du(t,e,n){if(!da(e))throw e;t.L_.add(1),await ma(t),t.q_.set("Offline"),n||(n=()=>yw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Qu(t)})}function Iw(t,e){return e().catch(n=>du(t,n,e))}async function Xu(t){const e=te(t),n=br(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;G1(e);)try{const s=await N1(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Q1(e,s)}catch(s){await du(e,s)}xw(e)&&kw(e)}function G1(t){return ys(t)&&t.O_.length<10}function Q1(t,e){t.O_.push(e);const n=br(t);n.r_()&&n.V_&&n.m_(e.mutations)}function xw(t){return ys(t)&&!br(t).n_()&&t.O_.length>0}function kw(t){br(t).start()}async function X1(t){br(t).p_()}async function Y1(t){const e=br(t);for(const n of t.O_)e.m_(n.mutations)}async function J1(t,e,n){const r=t.O_.shift(),s=Qf.from(r,e,n);await Iw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Xu(t)}async function Z1(t,e){e&&br(t).V_&&await async function(r,s){if(function(o){return UR(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();br(r).s_(),await Iw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Xu(r)}}(t,e),xw(t)&&kw(t)}async function yy(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=ys(n);n.L_.add(3),await ma(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Qu(n)}async function eA(t,e){const n=te(t);e?(n.L_.delete(2),await Qu(n)):e||(n.L_.add(2),await ma(n),n.q_.set("Unknown"))}function Ei(t){return t.K_||(t.K_=function(n,r,s){const i=te(n);return i.w_(),new z1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:H1.bind(null,t),Ro:q1.bind(null,t),mo:W1.bind(null,t),d_:K1.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),sp(t)?rp(t):t.q_.set("Unknown")):(await t.K_.stop(),Tw(t))})),t.K_}function br(t){return t.U_||(t.U_=function(n,r,s){const i=te(n);return i.w_(),new F1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:X1.bind(null,t),mo:Z1.bind(null,t),f_:Y1.bind(null,t),g_:J1.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Xu(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,u=new ip(e,n,o,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function op(t,e){if(Hn("AsyncQueue",`${e}: ${t}`),da(t))return new Q(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=uo(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.W_=new De(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):Z():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fi{constructor(e,n,r,s,i,o,u,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(u=>{o.push({type:0,doc:u})}),new fi(e,n,Xs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class nA{constructor(){this.queries=vy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=te(n),i=s.queries;s.queries=vy(),i.forEach((o,u)=>{for(const l of u.j_)l.onError(r)})})(this,new Q(M.ABORTED,"Firestore shutting down"))}}function vy(){return new wi(t=>G0(t),Bu)}async function Sw(t,e){const n=te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new tA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const u=op(o,`Initialization of query '${Rs(e.query)}' failed`);return void e.onError(u)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&ap(n)}async function Rw(t,e){const n=te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function rA(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const u of o.j_)u.X_(s)&&(r=!0);o.z_=s}}r&&ap(n)}function sA(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function ap(t){t.Y_.forEach(e=>{e.next()})}var bd,wy;(wy=bd||(bd={})).ea="default",wy.Cache="cache";class Aw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==bd.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.key=e}}class Pw{constructor(e){this.key=e}}class iA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=le(),this.mutatedKeys=le(),this.Aa=Q0(e),this.Ra=new Xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new _y,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),x=$u(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),P=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let D=!1;g&&x?g.data.isEqual(x.data)?k!==P&&(r.track({type:3,doc:x}),D=!0):this.ga(g,x)||(r.track({type:2,doc:x}),D=!0,(l&&this.Aa(x,l)>0||h&&this.Aa(x,h)<0)&&(u=!0)):!g&&x?(r.track({type:0,doc:x}),D=!0):g&&!x&&(r.track({type:1,doc:g}),D=!0,(l||h)&&(u=!0)),D&&(x?(o=o.add(x),i=P?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:u,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(x,k){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Z()}};return P(x)-P(k)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const u=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new fi(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new _y,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=le(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Pw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Cw(r))}),n}ba(e){this.Ta=e.Ts,this.da=le();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return fi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class oA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class aA{constructor(e){this.key=e,this.va=!1}}class lA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new wi(u=>G0(u),Bu),this.Ma=new Map,this.xa=new Set,this.Oa=new De(X.comparator),this.Na=new Map,this.La=new Jf,this.Ba={},this.ka=new Map,this.qa=di.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function uA(t,e,n=!0){const r=Mw(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Nw(r,e,n,!0),s}async function cA(t,e){const n=Mw(t);await Nw(n,e,!0,!1)}async function Nw(t,e,n,r){const s=await b1(t.localStore,vn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let u;return r&&(u=await hA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ww(t.remoteStore,s),u}async function hA(t,e,n,r,s){t.Ka=(m,g,x)=>async function(P,D,I,v){let R=D.view.ma(I);R.ns&&(R=await py(P.localStore,D.query,!1).then(({documents:T})=>D.view.ma(T,R)));const b=v&&v.targetChanges.get(D.targetId),V=v&&v.targetMismatches.get(D.targetId)!=null,j=D.view.applyChanges(R,P.isPrimaryClient,b,V);return Ty(P,D.targetId,j.wa),j.snapshot}(t,m,g,x);const i=await py(t.localStore,e,!0),o=new iA(e,i.Ts),u=o.ma(i.documents),l=pa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(u,t.isPrimaryClient,l);Ty(t,n,h.wa);const p=new oA(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function dA(t,e,n){const r=te(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Bu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Nd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&tp(r.remoteStore,s.targetId),Dd(r,s.targetId)}).catch(ha)):(Dd(r,s.targetId),await Nd(r.localStore,s.targetId,!0))}async function fA(t,e){const n=te(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),tp(n.remoteStore,r.targetId))}async function pA(t,e,n){const r=EA(t);try{const s=await function(o,u){const l=te(o),h=Ge.now(),p=u.reduce((x,k)=>x.add(k.key),le());let m,g;return l.persistence.runTransaction("Locally write mutations","readwrite",x=>{let k=qn(),P=le();return l.cs.getEntries(x,p).next(D=>{k=D,k.forEach((I,v)=>{v.isValidDocument()||(P=P.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(x,k)).next(D=>{m=D;const I=[];for(const v of u){const R=MR(v,m.get(v.key).overlayedDocument);R!=null&&I.push(new Lr(v.key,R,U0(R.value.mapValue),Vt.exists(!0)))}return l.mutationQueue.addMutationBatch(x,h,I,u)}).next(D=>{g=D;const I=D.applyToLocalDocumentSet(m,P);return l.documentOverlayCache.saveOverlays(x,D.batchId,I)})}).then(()=>({batchId:g.batchId,changes:Y0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,u,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new De(me)),h=h.insert(u,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await ga(r,s.changes),await Xu(r.remoteStore)}catch(s){const i=op(s,"Failed to persist write");n.reject(i)}}async function bw(t,e){const n=te(t);try{const r=await C1(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ve(o.va):s.removedDocuments.size>0&&(ve(o.va),o.va=!1))}),await ga(n,r,e)}catch(r){await ha(r)}}function Ey(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const u=o.view.Z_(e);u.snapshot&&s.push(u.snapshot)}),function(o,u){const l=te(o);l.onlineState=u;let h=!1;l.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(u)&&(h=!0)}),h&&ap(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function mA(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new De(X.comparator);o=o.insert(i,yt.newNoDocument(i,ee.min()));const u=le().add(i),l=new Ku(ee.min(),new Map,new De(me),o,u);await bw(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),lp(r)}else await Nd(r.localStore,e,!1).then(()=>Dd(r,e,n)).catch(ha)}async function gA(t,e){const n=te(t),r=e.batch.batchId;try{const s=await A1(n.localStore,e);Ow(n,r,null),Dw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ga(n,s)}catch(s){await ha(s)}}async function yA(t,e,n){const r=te(t);try{const s=await function(o,u){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return l.mutationQueue.lookupMutationBatch(h,u).next(m=>(ve(m!==null),p=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>l.localDocuments.getDocuments(h,p))})}(r.localStore,e);Ow(r,e,n),Dw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ga(r,s)}catch(s){await ha(s)}}function Dw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Ow(t,e,n){const r=te(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Vw(t,r)})}function Vw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(tp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),lp(t))}function Ty(t,e,n){for(const r of n)r instanceof Cw?(t.La.addReference(r.key,e),_A(t,r)):r instanceof Pw?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Vw(t,r.key)):Z()}function _A(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),lp(t))}function lp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Ce.fromString(e)),r=t.qa.next();t.Na.set(r,new aA(n)),t.Oa=t.Oa.insert(n,r),ww(t.remoteStore,new fr(vn(Kf(n.path)),r,"TargetPurposeLimboResolution",Uf.oe))}}async function ga(t,e,n){const r=te(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((u,l)=>{o.push(r.Ka(l,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){s.push(h);const m=ep.Wi(l.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const p=te(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,g=>L.forEach(g.$i,x=>p.persistence.referenceDelegate.addReference(m,g.targetId,x)).next(()=>L.forEach(g.Ui,x=>p.persistence.referenceDelegate.removeReference(m,g.targetId,x)))))}catch(m){if(!da(m))throw m;K("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const x=p.os.get(g),k=x.snapshotVersion,P=x.withLastLimboFreeSnapshotVersion(k);p.os=p.os.insert(g,P)}}}(r.localStore,i))}async function vA(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await gw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(u=>{u.forEach(l=>{l.reject(new Q(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ga(n,r.hs)}}function wA(t,e){const n=te(t),r=n.Na.get(e);if(r&&r.va)return le().add(r.key);{let s=le();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const u=n.Fa.get(o);s=s.unionWith(u.view.Va)}return s}}function Mw(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=bw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=wA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mA.bind(null,e),e.Ca.d_=rA.bind(null,e.eventManager),e.Ca.$a=sA.bind(null,e.eventManager),e}function EA(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=yA.bind(null,e),e}class fu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return R1(this.persistence,new k1,e.initialUser,this.serializer)}Ga(e){return new T1(Zf.Zr,this.serializer)}Wa(e){return new O1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}fu.provider={build:()=>new fu};class Od{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ey(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=vA.bind(null,this.syncEngine),await eA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new nA}()}createDatastore(e){const n=Gu(e.databaseInfo.databaseId),r=function(i){return new j1(i)}(e.databaseInfo);return function(i,o,u,l){return new U1(i,o,u,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,u){return new $1(r,s,i,o,u)}(this.localStore,this.datastore,e.asyncQueue,n=>Ey(this.syncEngine,n,0),function(){return gy.D()?new gy:new V1}())}createSyncEngine(e,n){return function(s,i,o,u,l,h,p){const m=new lA(s,i,o,u,l,h);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=te(s);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ma(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Od.provider={build:()=>new Od};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Hn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=j0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=op(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lh(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await gw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Iy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await IA(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>yy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>yy(e.remoteStore,s)),t._onlineComponents=e}async function IA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await lh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;li("Error using user provided cache. Falling back to memory cache: "+n),await lh(t,new fu)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await lh(t,new fu);return t._offlineComponents}async function jw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Iy(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Iy(t,new Od))),t._onlineComponents}function xA(t){return jw(t).then(e=>e.syncEngine)}async function Vd(t){const e=await jw(t),n=e.eventManager;return n.onListen=uA.bind(null,e.syncEngine),n.onUnlisten=dA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=cA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=fA.bind(null,e.syncEngine),n}function kA(t,e,n={}){const r=new xr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,u,l,h){const p=new Lw({next:g=>{p.Za(),o.enqueueAndForget(()=>Rw(i,m)),g.fromCache&&l.source==="server"?h.reject(new Q(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),m=new Aw(u,p,{includeMetadataChanges:!0,_a:!0});return Sw(i,m)}(await Vd(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t,e,n){if(!n)throw new Q(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function SA(t,e,n,r){if(e===!0&&r===!0)throw new Q(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ky(t){if(!X.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sy(t){if(X.isDocumentKey(t))throw new Q(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function up(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Z()}function Yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=up(t);throw new Q(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Q(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Q(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}SA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Q(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ry({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ry(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $S;switch(r.type){case"firstParty":return new KS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xy.get(n);r&&(K("ComponentProvider","Removing Datastore"),xy.delete(n),r.terminate())}(this),Promise.resolve()}}function RA(t,e,n,r={}){var s;const i=(t=Yt(t,Yu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let u,l;if(typeof r.mockUserToken=="string")u=r.mockUserToken,l=mt.MOCK_USER;else{u=k0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Q(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new mt(h)}t._authCredentials=new HS(new L0(u,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ya(this.firestore,e,this._query)}}class Mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new kr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Mt(this.firestore,e,this._key)}}class kr extends ya{constructor(e,n,r){super(e,n,Kf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Mt(this.firestore,null,new X(e))}withConverter(e){return new kr(this.firestore,e,this._path)}}function cp(t,e,...n){if(t=Se(t),Fw("collection","path",e),t instanceof Yu){const r=Ce.fromString(e,...n);return Sy(r),new kr(t,null,r)}{if(!(t instanceof Mt||t instanceof kr))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return Sy(r),new kr(t.firestore,null,r)}}function dn(t,e,...n){if(t=Se(t),arguments.length===1&&(e=j0.newId()),Fw("doc","path",e),t instanceof Yu){const r=Ce.fromString(e,...n);return ky(r),new Mt(t,null,new X(r))}{if(!(t instanceof Mt||t instanceof kr))throw new Q(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ce.fromString(e,...n));return ky(r),new Mt(t.firestore,t instanceof kr?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new _w(this,"async_queue_retry"),this.Vu=()=>{const r=ah();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=ah();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=ah();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new xr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!da(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let u=o.message||"";return o.stack&&(u=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),u}(r);throw Hn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=ip.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&Z()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Cy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Dr extends Yu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ay,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ay(e),this._firestoreClient=void 0,await e}}}function AA(t,e){const n=typeof t=="object"?t:zf(),r=typeof t=="string"?t:"(default)",s=zu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=T0("firestore");i&&RA(s,...i)}return s}function Ju(t){if(t._terminated)throw new Q(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||CA(t),t._firestoreClient}function CA(t){var e,n,r;const s=t._freezeSettings(),i=function(u,l,h,p){return new oR(u,l,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,zw(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new TA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(lt.fromBase64String(e))}catch(n){throw new Q(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pi(lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA=/^__.*__$/;class NA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fa(e,this.data,n,this.fieldTransforms)}}class Uw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Bw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Z()}}class fp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new fp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return pu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Bw(this.Cu)&&PA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class bA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Gu(e)}Qu(e,n,r,s=!1){return new fp({Cu:e,methodName:n,qu:r,path:st.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pp(t){const e=t._freezeSettings(),n=Gu(t._databaseId);return new bA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function $w(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);gp("Data must be an object, but it was:",o,r);const u=Ww(r,o);let l,h;if(i.merge)l=new Ft(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=Md(e,m,n);if(!o.contains(g))throw new Q(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Gw(p,g)||p.push(g)}l=new Ft(p),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new NA(new Pt(u),l,h)}class ec extends Zu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ec}}class mp extends Zu{_toFieldTransform(e){return new bR(e.path,new Zo)}isEqual(e){return e instanceof mp}}function Hw(t,e,n,r){const s=t.Qu(1,e,n);gp("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();gs(r,(l,h)=>{const p=yp(e,l,n);h=Se(h);const m=s.Nu(p);if(h instanceof ec)i.push(p);else{const g=tc(h,m);g!=null&&(i.push(p),o.set(p,g))}});const u=new Ft(i);return new Uw(o,u,s.fieldTransforms)}function qw(t,e,n,r,s,i){const o=t.Qu(1,e,n),u=[Md(e,r,n)],l=[s];if(i.length%2!=0)throw new Q(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)u.push(Md(e,i[g])),l.push(i[g+1]);const h=[],p=Pt.empty();for(let g=u.length-1;g>=0;--g)if(!Gw(h,u[g])){const x=u[g];let k=l[g];k=Se(k);const P=o.Nu(x);if(k instanceof ec)h.push(x);else{const D=tc(k,P);D!=null&&(h.push(x),p.set(x,D))}}const m=new Ft(h);return new Uw(p,m,o.fieldTransforms)}function tc(t,e){if(Kw(t=Se(t)))return gp("Unsupported field value:",e,t),Ww(t,e);if(t instanceof Zu)return function(r,s){if(!Bw(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const u of r){let l=tc(u,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ge.fromDate(r);return{timestampValue:hu(s.serializer,i)}}if(r instanceof Ge){const i=new Ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:hu(s.serializer,i)}}if(r instanceof hp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:uw(s.serializer,r._byteString)};if(r instanceof Mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof dp)return function(o,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw u.Bu("VectorValues must only contain numeric values.");return Gf(u.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${up(r)}`)}(t,e)}function Ww(t,e){const n={};return z0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):gs(t,(r,s)=>{const i=tc(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Kw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof hp||t instanceof pi||t instanceof Mt||t instanceof Zu||t instanceof dp)}function gp(t,e,n){if(!Kw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=up(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Md(t,e,n){if((e=Se(e))instanceof _a)return e._internalPath;if(typeof e=="string")return yp(t,e);throw pu("Field path arguments must be of type string or ",t,!1,void 0,n)}const DA=new RegExp("[~\\*/\\[\\]]");function yp(t,e,n){if(e.search(DA)>=0)throw pu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _a(...e.split("."))._internalPath}catch{throw pu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function pu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Q(M.INVALID_ARGUMENT,u+t+l)}function Gw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Xw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OA extends Qw{data(){return super.data()}}function Xw(t,e){return typeof e=="string"?yp(t,e):e instanceof _a?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class VA{convertValue(e,n="none"){switch(cs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(us(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Z()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return gs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>ze(o.doubleValue));return new dp(i)}convertGeoPoint(e){return new hp(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$f(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Xo(e));default:return null}}convertTimestamp(e){const n=Nr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ce.fromString(e);ve(mw(r));const s=new Yo(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Hn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zw extends Qw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Xw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Rl extends Zw{data(e={}){return super.data(e)}}class eE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ho(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rl(this._firestore,this._userDataWriter,r.key,r,new ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(u=>{const l=new Rl(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ho(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new Rl(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ho(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return u.type!==0&&(h=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),p=o.indexOf(u.doc.key)),{type:MA(u.type),doc:l,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function MA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Z()}}class _p extends VA{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Mt(this.firestore,null,n)}}function LA(t){t=Yt(t,ya);const e=Yt(t.firestore,Dr),n=Ju(e),r=new _p(e);return Yw(t._query),kA(n,t._query).then(s=>new eE(e,r,t,s))}function Al(t,e,n){t=Yt(t,Mt);const r=Yt(t.firestore,Dr),s=Jw(t.converter,e,n);return nc(r,[$w(pp(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Vt.none())])}function Py(t,e,n,...r){t=Yt(t,Mt);const s=Yt(t.firestore,Dr),i=pp(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof _a?qw(i,"updateDoc",t._key,e,n,r):Hw(i,"updateDoc",t._key,e),nc(s,[o.toMutation(t._key,Vt.exists(!0))])}function uh(t){return nc(Yt(t.firestore,Dr),[new Wu(t._key,Vt.none())])}function ch(t,...e){var n,r,s;t=Se(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Cy(e[o])||(i=e[o],o++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Cy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let l,h,p;if(t instanceof Mt)h=Yt(t.firestore,Dr),p=Kf(t._key.path),l={next:m=>{e[o]&&e[o](jA(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Yt(t,ya);h=Yt(m.firestore,Dr),p=m._query;const g=new _p(h);l={next:x=>{e[o]&&e[o](new eE(h,g,m,x))},error:e[o+1],complete:e[o+2]},Yw(t._query)}return function(g,x,k,P){const D=new Lw(P),I=new Aw(x,D,k);return g.asyncQueue.enqueueAndForget(async()=>Sw(await Vd(g),I)),()=>{D.Za(),g.asyncQueue.enqueueAndForget(async()=>Rw(await Vd(g),I))}}(Ju(h),p,u,l)}function nc(t,e){return function(r,s){const i=new xr;return r.asyncQueue.enqueueAndForget(async()=>pA(await xA(r),s,i)),i.promise}(Ju(t),e)}function jA(t,e,n){const r=n.docs.get(e._key),s=new _p(t);return new Zw(t,s,e._key,r,new ho(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=pp(e)}set(e,n,r){this._verifyNotCommitted();const s=hh(e,this._firestore),i=Jw(s.converter,n,r),o=$w(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Vt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=hh(e,this._firestore);let o;return o=typeof(n=Se(n))=="string"||n instanceof _a?qw(this._dataReader,"WriteBatch.update",i._key,n,r,s):Hw(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Vt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=hh(e,this._firestore);return this._mutations=this._mutations.concat(new Wu(n._key,Vt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Q(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function hh(t,e){if((t=Se(t)).firestore!==e)throw new Q(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function FA(){return new mp("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){return Ju(t=Yt(t,Dr)),new zA(t,e=>nc(t,e))}(function(e,n=!0){(function(s){vi=s})(ms),as(new Cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),u=new Dr(new qS(r.getProvider("auth-internal")),new QS(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Q(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(h.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),_n(Kg,"4.7.3",e),_n(Kg,"4.7.3","esm2017")})();var BA="firebase",$A="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(BA,$A,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tE="firebasestorage.googleapis.com",nE="storageBucket",HA=2*60*1e3,qA=10*60*1e3,WA=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends kn{constructor(e,n,r=0){super(dh(e),`Firebase Storage: ${n} (${dh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Re;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Re||(Re={}));function dh(t){return"storage/"+t}function vp(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(Re.UNKNOWN,t)}function KA(t){return new Oe(Re.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function GA(t){return new Oe(Re.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function QA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(Re.UNAUTHENTICATED,t)}function XA(){return new Oe(Re.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function YA(t){return new Oe(Re.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function rE(){return new Oe(Re.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sE(){return new Oe(Re.CANCELED,"User canceled the upload/download.")}function JA(t){return new Oe(Re.INVALID_URL,"Invalid URL '"+t+"'.")}function ZA(t){return new Oe(Re.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function eC(){return new Oe(Re.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nE+"' property when initializing the app?")}function iE(){return new Oe(Re.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tC(){return new Oe(Re.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function nC(){return new Oe(Re.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rC(t){return new Oe(Re.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ld(t){return new Oe(Re.INVALID_ARGUMENT,t)}function oE(){return new Oe(Re.APP_DELETED,"The Firebase app was deleted.")}function sC(t){return new Oe(Re.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function So(t,e){return new Oe(Re.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function eo(t){throw new Oe(Re.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ut.makeFromUrl(e,n)}catch{return new Ut(e,"")}if(r.path==="")return r;throw ZA(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",u=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",x=new RegExp(`^https?://${m}/${p}/b/${s}/o${g}`,"i"),k={bucket:1,path:3},P=n===tE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",I=new RegExp(`^https?://${P}/${s}/${D}`,"i"),R=[{regex:u,indices:l,postModify:i},{regex:x,indices:k,postModify:h},{regex:I,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<R.length;b++){const V=R[b],j=V.regex.exec(e);if(j){const T=j[V.indices.bucket];let _=j[V.indices.path];_||(_=""),r=new Ut(T,_),V.postModify(r);break}}if(r==null)throw JA(e);return r}}class iC{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t,e,n){let r=1,s=null,i=null,o=!1,u=0;function l(){return u===2}let h=!1;function p(...D){h||(h=!0,e.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,t(x,l())},D)}function g(){i&&clearTimeout(i)}function x(D,...I){if(h){g();return}if(D){g(),p.call(null,D,...I);return}if(l()||o){g(),p.call(null,D,...I);return}r<64&&(r*=2);let R;u===1?(u=2,R=0):R=(r+Math.random())*1e3,m(R)}let k=!1;function P(D){k||(k=!0,g(),!h&&(s!==null?(D||(u=2),clearTimeout(s),m(0)):D||(u=1)))}return m(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function aC(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(t){return t!==void 0}function uC(t){return typeof t=="function"}function cC(t){return typeof t=="object"&&!Array.isArray(t)}function rc(t){return typeof t=="string"||t instanceof String}function Ny(t){return wp()&&t instanceof Blob}function wp(){return typeof Blob<"u"}function by(t,e,n,r){if(r<e)throw Ld(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ld(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function aE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ts;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ts||(ts={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,r,s,i,o,u,l,h,p,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=u,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,k)=>{this.resolve_=x,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ll(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=u=>{const l=u.loaded,h=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const u=i.getErrorCode()===ts.NO_ERROR,l=i.getStatus();if(!u||lE(l,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===ts.ABORT;r(!1,new ll(!1,null,p));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new ll(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(u,u.getResponse());lC(l)?i(l):i()}catch(l){o(l)}else if(u!==null){const l=vp();l.serverResponse=u.getErrorText(),this.errorCallback_?o(this.errorCallback_(u,l)):o(l)}else if(s.canceled){const l=this.appDelete_?oE():sE();o(l)}else{const l=rE();o(l)}};this.canceled_?n(!1,new ll(!1,null,!0)):this.backoffId_=oC(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&aC(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ll{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function fC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function pC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function mC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function gC(t,e,n,r,s,i,o=!0){const u=aE(t.urlParams),l=t.url+u,h=Object.assign({},t.headers);return pC(h,e),dC(h,n),fC(h,i),mC(h,r),new hC(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function _C(...t){const e=yC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(wp())return new Blob(t);throw new Oe(Re.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){if(typeof atob>"u")throw rC("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fh{constructor(e,n){this.data=e,this.contentType=n||null}}function EC(t,e){switch(t){case mn.RAW:return new fh(uE(e));case mn.BASE64:case mn.BASE64URL:return new fh(cE(t,e));case mn.DATA_URL:return new fh(IC(e),xC(e))}throw vp()}function uE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function TC(t){let e;try{e=decodeURIComponent(t)}catch{throw So(mn.DATA_URL,"Malformed data URL.")}return uE(e)}function cE(t,e){switch(t){case mn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw So(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw So(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=wC(e)}catch(s){throw s.message.includes("polyfill")?s:So(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class hE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw So(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=kC(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function IC(t){const e=new hE(t);return e.base64?cE(mn.BASE64,e.rest):TC(e.rest)}function xC(t){return new hE(t).contentType}function kC(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n){let r=0,s="";Ny(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ny(this.data_)){const r=this.data_,s=vC(r,e,n);return s===null?null:new or(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new or(r,!0)}}static getBlob(...e){if(wp()){const n=e.map(r=>r instanceof or?r.data_:r);return new or(_C.apply(null,n))}else{const n=e.map(o=>rc(o)?EC(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let u=0;u<o.length;u++)s[i++]=o[u]}),new or(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){let e;try{e=JSON.parse(t)}catch{return null}return cC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function RC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function fE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t,e){return e}class Tt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||AC}}let ul=null;function CC(t){return!rc(t)||t.length<2?t:fE(t)}function pE(){if(ul)return ul;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(i,o){return CC(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Tt("size");return s.xform=r,t.push(s),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),ul=t,ul}function PC(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Ut(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function NC(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return PC(r,t),r}function mE(t,e,n){const r=dE(e);return r===null?null:NC(t,r,n)}function bC(t,e,n,r){const s=dE(e);if(s===null||!rc(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const p=t.bucket,m=t.fullPath,g="/b/"+o(p)+"/o/"+o(m),x=Ti(g,n,r),k=aE({alt:"media",token:h});return x+k})[0]}function gE(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class _s{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){if(!t)throw vp()}function Ep(t,e){function n(r,s){const i=mE(t,s,e);return jn(i!==null),i}return n}function DC(t,e){function n(r,s){const i=mE(t,s,e);return jn(i!==null),bC(i,s,t.host,t._protocol)}return n}function va(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=XA():s=QA():n.getStatus()===402?s=GA(t.bucket):n.getStatus()===403?s=YA(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Tp(t){const e=va(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=KA(t.path)),i.serverResponse=s.serverResponse,i}return n}function OC(t,e,n){const r=e.fullServerUrl(),s=Ti(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new _s(s,i,Ep(t,n),o);return u.errorHandler=Tp(e),u}function VC(t,e,n){const r=e.fullServerUrl(),s=Ti(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new _s(s,i,DC(t,n),o);return u.errorHandler=Tp(e),u}function MC(t,e){const n=e.fullServerUrl(),r=Ti(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(l,h){}const u=new _s(r,s,o,i);return u.successCodes=[200,204],u.errorHandler=Tp(e),u}function LC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=LC(null,e)),r}function jC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function u(){let R="";for(let b=0;b<2;b++)R=R+Math.random().toString().slice(2);return R}const l=u();o["Content-Type"]="multipart/related; boundary="+l;const h=yE(e,r,s),p=gE(h,n),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+l+"--",x=or.getBlob(m,r,g);if(x===null)throw iE();const k={name:h.fullPath},P=Ti(i,t.host,t._protocol),D="POST",I=t.maxUploadRetryTime,v=new _s(P,D,Ep(t,n),I);return v.urlParams=k,v.headers=o,v.body=x.uploadData(),v.errorHandler=va(e),v}class mu{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Ip(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{jn(!1)}return jn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function zC(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=yE(e,r,s),u={name:o.fullPath},l=Ti(i,t.host,t._protocol),h="POST",p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=gE(o,n),g=t.maxUploadRetryTime;function x(P){Ip(P);let D;try{D=P.getResponseHeader("X-Goog-Upload-URL")}catch{jn(!1)}return jn(rc(D)),D}const k=new _s(l,h,x,g);return k.urlParams=u,k.headers=p,k.body=m,k.errorHandler=va(e),k}function FC(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(h){const p=Ip(h,["active","final"]);let m=null;try{m=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{jn(!1)}m||jn(!1);const g=Number(m);return jn(!isNaN(g)),new mu(g,r.size(),p==="final")}const o="POST",u=t.maxUploadRetryTime,l=new _s(n,o,i,u);return l.headers=s,l.errorHandler=va(e),l}const Dy=256*1024;function UC(t,e,n,r,s,i,o,u){const l=new mu(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw tC();const h=l.total-l.current;let p=h;s>0&&(p=Math.min(p,s));const m=l.current,g=m+p;let x="";p===0?x="finalize":h===p?x="upload, finalize":x="upload";const k={"X-Goog-Upload-Command":x,"X-Goog-Upload-Offset":`${l.current}`},P=r.slice(m,g);if(P===null)throw iE();function D(b,V){const j=Ip(b,["active","final"]),T=l.current+p,_=r.size();let E;return j==="final"?E=Ep(e,i)(b,V):E=null,new mu(T,_,j==="final",E)}const I="POST",v=e.maxUploadRetryTime,R=new _s(n,I,D,v);return R.headers=k,R.body=P.uploadData(),R.progressCallback=u||null,R.errorHandler=va(t),R}const At={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function ph(t){switch(t){case"running":case"pausing":case"canceling":return At.RUNNING;case"paused":return At.PAUSED;case"success":return At.SUCCESS;case"canceled":return At.CANCELED;case"error":return At.ERROR;default:return At.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(e,n,r){if(uC(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class $C{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ts.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ts.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ts.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw eo("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw eo("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw eo("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw eo("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw eo("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class HC extends $C{initXhr(){this.xhr_.responseType="text"}}function Kr(){return new HC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=pE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Re.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(lE(s.status,[]))if(i)s=rE();else{this.sleepTime=Math.max(this.sleepTime*2,WA),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Re.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=zC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Kr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=FC(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Kr,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Dy*this._chunkMultiplier,n=new mu(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=UC(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const u=this._ref.storage._makeRequest(o,Kr,s,i,!1);this._request=u,u.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Dy*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=OC(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Kr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=jC(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Kr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=sE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=ph(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new BC(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(ph(this._state)){case At.SUCCESS:Ss(this._resolve.bind(null,this.snapshot))();break;case At.CANCELED:case At.ERROR:const n=this._reject;Ss(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(ph(this._state)){case At.RUNNING:case At.PAUSED:e.next&&Ss(e.next.bind(e,this.snapshot))();break;case At.SUCCESS:e.complete&&Ss(e.complete.bind(e))();break;case At.CANCELED:case At.ERROR:e.error&&Ss(e.error.bind(e,this._error))();break;default:e.error&&Ss(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this._service=e,n instanceof Ut?this._location=n:this._location=Ut.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new hs(e,n)}get root(){const e=new Ut(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fE(this._location.path)}get storage(){return this._service}get parent(){const e=SC(this._location.path);if(e===null)return null;const n=new Ut(this._location.bucket,e);return new hs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw sC(e)}}function WC(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new qC(t,new or(e),n)}function KC(t){t._throwIfRoot("getDownloadURL");const e=VC(t.storage,t._location,pE());return t.storage.makeRequestWithTokens(e,Kr).then(n=>{if(n===null)throw nC();return n})}function GC(t){t._throwIfRoot("deleteObject");const e=MC(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Kr)}function QC(t,e){const n=RC(t._location.path,e),r=new Ut(t._location.bucket,n);return new hs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XC(t){return/^[A-Za-z]+:\/\//.test(t)}function YC(t,e){return new hs(t,e)}function _E(t,e){if(t instanceof xp){const n=t;if(n._bucket==null)throw eC();const r=new hs(n,n._bucket);return e!=null?_E(r,e):r}else return e!==void 0?QC(t,e):t}function JC(t,e){if(e&&XC(e)){if(t instanceof xp)return YC(t,e);throw Ld("To use ref(service, url), the first argument must be a Storage instance.")}else return _E(t,e)}function Oy(t,e){const n=e==null?void 0:e[nE];return n==null?null:Ut.makeFromBucketSpec(n,t)}function ZC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:k0(s,t.app.options.projectId))}class xp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=tE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=HA,this._maxUploadRetryTime=qA,this._requests=new Set,s!=null?this._bucket=Ut.makeFromBucketSpec(s,this._host):this._bucket=Oy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ut.makeFromBucketSpec(this._url,e):this._bucket=Oy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){by("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){by("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new hs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new iC(oE());{const o=gC(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Vy="@firebase/storage",My="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vE="storage";function eP(t,e,n){return t=Se(t),WC(t,e,n)}function tP(t){return t=Se(t),KC(t)}function Cl(t){return t=Se(t),GC(t)}function Ro(t,e){return t=Se(t),JC(t,e)}function nP(t=zf(),e){t=Se(t);const r=zu(t,vE).getImmediate({identifier:e}),s=T0("storage");return s&&rP(r,...s),r}function rP(t,e,n,r={}){ZC(t,e,n,r)}function sP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new xp(n,r,s,e,ms)}function iP(){as(new Cr(vE,sP,"PUBLIC").setMultipleInstances(!0)),_n(Vy,My,""),_n(Vy,My,"esm2017")}iP();function kp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function wE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oP=wE,EE=new ua("auth","Firebase",wE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Lf("@firebase/auth");function aP(t,...e){gu.logLevel<=ue.WARN&&gu.warn(`Auth (${ms}): ${t}`,...e)}function Pl(t,...e){gu.logLevel<=ue.ERROR&&gu.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Sp(t,...e)}function En(t,...e){return Sp(t,...e)}function TE(t,e,n){const r=Object.assign(Object.assign({},oP()),{[e]:n});return new ua("auth","Firebase",r).create(e,{appName:t.name})}function Sr(t){return TE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Sp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return EE.create(t,...e)}function Y(t,e,...n){if(!t)throw Sp(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pl(e),new Error(e)}function Wn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lP(){return Ly()==="http:"||Ly()==="https:"}function Ly(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lP()||Ik()||"connection"in navigator)?navigator.onLine:!0}function cP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Wn(n>e,"Short delay should be less than long delay!"),this.isMobile=wk()||xk()}get(){return uP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t,e){Wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=new wa(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Gn(t,e,n,r,s={}){return xE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const u=ca(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return Tk()||(h.referrerPolicy="no-referrer"),IE.fetch()(kE(t,t.config.apiHost,n,u),h)})}async function xE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hP),e);try{const s=new pP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw cl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const u=i.ok?o.errorMessage:o.error.message,[l,h]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw cl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw cl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw cl(t,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw TE(t,p,h);un(t,p)}}catch(s){if(s instanceof kn)throw s;un(t,"network-request-failed",{message:String(s)})}}async function sc(t,e,n,r,s={}){const i=await Gn(t,e,n,r,s);return"mfaPendingCredential"in i&&un(t,"multi-factor-auth-required",{_serverResponse:i}),i}function kE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Rp(t.config,s):`${t.config.apiScheme}://${s}`}function fP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(En(this.auth,"network-request-failed")),dP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=En(t,e,r);return s.customData._tokenResponse=n,s}function jy(t){return t!==void 0&&t.enterprise!==void 0}class mP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return fP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function gP(t,e){return Gn(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yP(t,e){return Gn(t,"POST","/v1/accounts:delete",e)}async function SE(t,e){return Gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _P(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=Ap(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ao(mh(s.auth_time)),issuedAtTime:Ao(mh(s.iat)),expirationTime:Ao(mh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mh(t){return Number(t)*1e3}function Ap(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pl("JWT malformed, contained fewer than 3 sections"),null;try{const s=w0(n);return s?JSON.parse(s):(Pl("Failed to decode base64 JWT payload"),null)}catch(s){return Pl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function zy(t){const e=Ap(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function na(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kn&&vP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ao(this.lastLoginAt),this.creationTime=Ao(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await na(t,SE(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?RE(i.providerUserInfo):[],u=TP(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(u!=null&&u.length),p=l?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new zd(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function EP(t){const e=Se(t);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function RE(t){return t.map(e=>{var{providerId:n}=e,r=kp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,e){const n=await xE(t,{},async()=>{const r=ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=kE(t,s,"/v1/token",`key=${i}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",IE.fetch()(o,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xP(t,e){return Gn(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):zy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=zy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await IP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ys;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Vn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=kp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await na(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _P(this,e)}reload(){return EP(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Dn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await na(this,yP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,u,l,h,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,x=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(u=n.tenantId)!==null&&u!==void 0?u:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:R,emailVerified:b,isAnonymous:V,providerData:j,stsTokenManager:T}=n;Y(R&&T,e,"internal-error");const _=Ys.fromJSON(this.name,T);Y(typeof R=="string",e,"internal-error"),Zn(m,e.name),Zn(g,e.name),Y(typeof b=="boolean",e,"internal-error"),Y(typeof V=="boolean",e,"internal-error"),Zn(x,e.name),Zn(k,e.name),Zn(P,e.name),Zn(D,e.name),Zn(I,e.name),Zn(v,e.name);const E=new Vn({uid:R,auth:e,email:g,emailVerified:b,displayName:m,isAnonymous:V,photoURL:k,phoneNumber:x,tenantId:P,stsTokenManager:_,createdAt:I,lastLoginAt:v});return j&&Array.isArray(j)&&(E.providerData=j.map(S=>Object.assign({},S))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ys;s.updateFromServerResponse(n);const i=new Vn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await yu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?RE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new Ys;u.updateFromIdToken(r);const l=new Vn({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy=new Map;function Mn(t){Wn(t instanceof Function,"Expected a class definition");let e=Fy.get(t);return e?(Wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AE.type="NONE";const Uy=AE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e,n){return`firebase:${t}:${e}:${n}`}class Js{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Nl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Nl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Js(Mn(Uy),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Mn(Uy);const o=Nl(r,e.config.apiKey,e.name);let u=null;for(const h of n)try{const p=await h._get(o);if(p){const m=Vn._fromJSON(e,p);h!==i&&(u=m),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Js(i,e,r):(i=l[0],u&&await i._set(o,u.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Js(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(CE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(OE(e))return"Blackberry";if(VE(e))return"Webos";if(PE(e))return"Safari";if((e.includes("chrome/")||NE(e))&&!e.includes("edge/"))return"Chrome";if(DE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function CE(t=vt()){return/firefox\//i.test(t)}function PE(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function NE(t=vt()){return/crios\//i.test(t)}function bE(t=vt()){return/iemobile/i.test(t)}function DE(t=vt()){return/android/i.test(t)}function OE(t=vt()){return/blackberry/i.test(t)}function VE(t=vt()){return/webos/i.test(t)}function Cp(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kP(t=vt()){var e;return Cp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SP(){return kk()&&document.documentMode===10}function ME(t=vt()){return Cp(t)||DE(t)||VE(t)||OE(t)||/windows phone/i.test(t)||bE(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t,e=[]){let n;switch(t){case"Browser":n=By(vt());break;case"Worker":n=`${By(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,u)=>{try{const l=e(i);o(l)}catch(l){u(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AP(t,e={}){return Gn(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP=6;class PP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:CP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $y(this),this.idTokenSubscription=new $y(this),this.beforeStateQueue=new RP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=EE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Js.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await SE(this,{idToken:e}),r=await Vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Dn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===u)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Dn(this.app))return Promise.reject(Sr(this));const n=e?Se(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Dn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Dn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await AP(this),n=new PP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ua("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xP(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Mn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Js.create(this,[Mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(u,this,"internal-error"),u.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=LE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&aP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function vs(t){return Se(t)}class $y{constructor(e){this.auth=e,this.observer=null,this.addObserver=Dk(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bP(t){ic=t}function jE(t){return ic.loadJS(t)}function DP(){return ic.recaptchaEnterpriseScript}function OP(){return ic.gapiScript}function VP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const MP="recaptcha-enterprise",LP="NO_RECAPTCHA";class jP{constructor(e){this.type=MP,this.auth=vs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,u)=>{gP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const h=new mP(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{u(l)})})}function s(i,o,u){const l=window.grecaptcha;jy(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(LP)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(u=>{if(!n&&jy(window.grecaptcha))s(u,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=DP();l.length!==0&&(l+=u),jE(l).then(()=>{s(u,i,o)}).catch(h=>{o(h)})}}).catch(u=>{o(u)})})}}async function Hy(t,e,n,r=!1){const s=new jP(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Fd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Hy(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Hy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t,e){const n=zu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(iu(i,e??{}))return s;un(s,"already-initialized")}return n.initialize({options:e})}function FP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function UP(t,e,n){const r=vs(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=zE(e),{host:o,port:u}=BP(e),l=u===null?"":`:${u}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),$P()}function zE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BP(t){const e=zE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:qy(o)}}}function qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function $P(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function HP(t,e){return Gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qP(t,e){return sc(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}async function WP(t,e){return Gn(t,"POST","/v1/accounts:sendOobCode",jr(t,e))}async function KP(t,e){return WP(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){return sc(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function QP(t,e){return sc(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends Pp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ra(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ra(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,n,"signInWithPassword",qP);case"emailLink":return GP(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fd(e,r,"signUpPassword",HP);case"emailLink":return QP(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e){return sc(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="http://localhost";class ds extends Pp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ds(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=kp(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ds(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:XP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ca(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function JP(t){const e=oo(ao(t)).link,n=e?oo(ao(e)).deep_link_id:null,r=oo(ao(t)).deep_link_id;return(r?oo(ao(r)).link:null)||r||n||e||t}class Np{constructor(e){var n,r,s,i,o,u;const l=oo(ao(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,m=YP((s=l.mode)!==null&&s!==void 0?s:null);Y(h&&p&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=p,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const n=JP(e);try{return new Np(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return ra._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Np.parseLink(n);return Y(r,"argument-error"),ra._fromEmailAndCode(e,r.code,r.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends FE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends Ea{constructor(){super("facebook.com")}static credential(e){return ds._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ar.credential(e.oauthAccessToken)}catch{return null}}}ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";ar.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ds._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return lr.credential(n,r)}catch{return null}}}lr.GOOGLE_SIGN_IN_METHOD="google.com";lr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Ea{constructor(){super("github.com")}static credential(e){return ds._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Ea{constructor(){super("twitter.com")}static credential(e,n){return ds._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.TWITTER_SIGN_IN_METHOD="twitter.com";cr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Vn._fromIdTokenResponse(e,r,s),o=Wy(r);return new mi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Wy(r);return new mi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Wy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u extends kn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,_u.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new _u(e,n,r,s)}}function UE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?_u._fromErrorAndOperation(t,i,e,r):i})}async function ZP(t,e,n=!1){const r=await na(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(t,e,n=!1){const{auth:r}=t;if(Dn(r.app))return Promise.reject(Sr(r));const s="reauthenticate";try{const i=await na(t,UE(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Ap(i.idToken);Y(o,r,"internal-error");const{sub:u}=o;return Y(t.uid===u,r,"user-mismatch"),mi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&un(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(t,e,n=!1){if(Dn(t.app))return Promise.reject(Sr(t));const r="signIn",s=await UE(t,r,e),i=await mi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function tN(t,e){return BE(vs(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nN(t){const e=vs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rN(t,e,n){const r=vs(t);await Fd(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",KP)}function sN(t,e,n){return Dn(t.app)?Promise.reject(Sr(t)):tN(Se(t),Ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&nN(t),r})}function iN(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function oN(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function aN(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function lN(t){return Se(t).signOut()}const vu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(vu,"1"),this.storage.removeItem(vu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=1e3,cN=10;class HE extends $E{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ME(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,u,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);SP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},uN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}HE.type="LOCAL";const hN=HE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE extends $E{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qE.type="SESSION";const WE=qE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(o).map(async h=>h(n.origin,i)),l=await dN(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((u,l)=>{const h=bp("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(g.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function pN(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KE(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function mN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function yN(){return KE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE="firebaseLocalStorageDb",_N=1,wu="firebaseLocalStorage",QE="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ac(t,e){return t.transaction([wu],e?"readwrite":"readonly").objectStore(wu)}function vN(){const t=indexedDB.deleteDatabase(GE);return new Ta(t).toPromise()}function Ud(){const t=indexedDB.open(GE,_N);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wu,{keyPath:QE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wu)?e(r):(r.close(),await vN(),e(await Ud()))})})}async function Ky(t,e,n){const r=ac(t,!0).put({[QE]:e,value:n});return new Ta(r).toPromise()}async function wN(t,e){const n=ac(t,!1).get(e),r=await new Ta(n).toPromise();return r===void 0?null:r.value}function Gy(t,e){const n=ac(t,!0).delete(e);return new Ta(n).toPromise()}const EN=800,TN=3;class XE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ud(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return KE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oc._getInstance(yN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await mN(),!this.activeServiceWorker)return;this.sender=new fN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ud();return await Ky(e,vu,"1"),await Gy(e,vu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ky(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>wN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Gy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ac(s,!1).getAll();return new Ta(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}XE.type="LOCAL";const IN=XE;new wa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xN(t,e){return e?Mn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp extends Pp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function kN(t){return BE(t.auth,new Dp(t),t.bypassAuthState)}function SN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),eN(n,new Dp(t),t.bypassAuthState)}async function RN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),ZP(n,new Dp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:u}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kN;case"linkViaPopup":case"linkViaRedirect":return RN;case"reauthViaPopup":case"reauthViaRedirect":return SN;default:un(this.auth,"internal-error")}}resolve(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=new wa(2e3,1e4);class Bs extends YE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Wn(this.filter.length===1,"Popup operations only handle one event");const e=bp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(En(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(En(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(En(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AN.get())};e()}}Bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="pendingRedirect",bl=new Map;class PN extends YE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=bl.get(this.auth._key());if(!e){try{const r=await NN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}bl.set(this.auth._key(),e)}return this.bypassAuthState||bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NN(t,e){const n=ON(e),r=DN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bN(t,e){bl.set(t._key(),e)}function DN(t){return Mn(t._redirectPersistence)}function ON(t){return Nl(CN,t.config.apiKey,t.name)}async function VN(t,e,n=!1){if(Dn(t.app))return Promise.reject(Sr(t));const r=vs(t),s=xN(r,e),o=await new PN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN=10*60*1e3;class LN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!JE(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(En(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qy(e))}saveEventToCache(e){this.cachedEventUids.add(Qy(e)),this.lastProcessedEventTime=Date.now()}}function Qy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function JE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return JE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zN(t,e={}){return Gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UN=/^https?/;async function BN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await zN(t);for(const n of e)try{if($N(n))return}catch{}un(t,"unauthorized-domain")}function $N(t){const e=jd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UN.test(n))return!1;if(FN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=new wa(3e4,6e4);function Xy(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function qN(t){return new Promise((e,n)=>{var r,s,i;function o(){Xy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xy(),n(En(t,"network-request-failed"))},timeout:HN.get()})}if(!((s=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Tn().gapi)===null||i===void 0)&&i.load)o();else{const u=VP("iframefcb");return Tn()[u]=()=>{gapi.load?o():n(En(t,"network-request-failed"))},jE(`${OP()}?onload=${u}`).catch(l=>n(l))}}).catch(e=>{throw Dl=null,e})}let Dl=null;function WN(t){return Dl=Dl||qN(t),Dl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=new wa(5e3,15e3),GN="__/auth/iframe",QN="emulator/auth/iframe",XN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function JN(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rp(e,QN):`https://${t.config.authDomain}/${GN}`,r={apiKey:e.apiKey,appName:t.name,v:ms},s=YN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ca(r).slice(1)}`}async function ZN(t){const e=await WN(t),n=Tn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:JN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=En(t,"network-request-failed"),u=Tn().setTimeout(()=>{i(o)},KN.get());function l(){Tn().clearTimeout(u),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tb=500,nb=600,rb="_blank",sb="http://localhost";class Yy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ib(t,e,n,r=tb,s=nb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},eb),{width:r.toString(),height:s.toString(),top:i,left:o}),h=vt().toLowerCase();n&&(u=NE(h)?rb:n),CE(h)&&(e=e||sb,l.scrollbars="yes");const p=Object.entries(l).reduce((g,[x,k])=>`${g}${x}=${k},`,"");if(kP(h)&&u!=="_self")return ob(e||"",u),new Yy(null);const m=window.open(e||"",u,p);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new Yy(m)}function ob(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab="__/auth/handler",lb="emulator/auth/handler",ub=encodeURIComponent("fac");async function Jy(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:s};if(e instanceof FE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",bk(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Ea){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await t._getAppCheckToken(),h=l?`#${ub}=${encodeURIComponent(l)}`:"";return`${cb(t)}?${ca(u).slice(1)}${h}`}function cb({config:t}){return t.emulator?Rp(t,lb):`https://${t.authDomain}/${ab}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh="webStorageSupport";class hb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=WE,this._completeRedirectFn=VN,this._overrideRedirectResult=bN}async _openPopup(e,n,r,s){var i;Wn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Jy(e,n,r,jd(),s);return ib(e,o,bp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Jy(e,n,r,jd(),s);return pN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Wn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ZN(e),r=new LN(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gh,{type:gh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[gh];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ME()||PE()||Cp()}}const db=hb;var Zy="@firebase/auth",e_="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function mb(t){as(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:LE(t)},h=new NP(r,s,i,l);return FP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),as(new Cr("auth-internal",e=>{const n=vs(e.getProvider("auth").getImmediate());return(r=>new fb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(Zy,e_,pb(t)),_n(Zy,e_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb=5*60,yb=x0("authIdTokenMaxAge")||gb;let t_=null;const _b=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>yb)return;const s=n==null?void 0:n.token;t_!==s&&(t_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function vb(t=zf()){const e=zu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=zP(t,{popupRedirectResolver:db,persistence:[IN,hN,WE]}),r=x0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=_b(i.toString());oN(n,o,()=>o(n.currentUser)),iN(n,u=>o(u))}}const s=E0("auth");return s&&UP(n,`http://${s}`),n}function wb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}bP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=En("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",wb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});mb("Browser");const Eb={apiKey:"AIzaSyBhmphsa4XrgzNOrdgkMA2E35Dx_h1gASU",authDomain:"",projectId:"",storageBucket:"",messagingSenderId:"",appId:""},Op=A0(Eb),ZE=AA(Op),$s=vb(Op),Co=nP(Op),lc=dn(ZE,"appdata","main"),er=cp(lc,"convocations"),yh=cp(lc,"motifs"),_h=cp(lc,"trajets"),An=async()=>{try{await Al(lc,{lastModification:FA()},{merge:!0})}catch(t){console.error("Erreur lors de la mise à jour du timestamp:",t)}},oe=({children:t,onClick:e,type:n="button",variant:r="solid",className:s="",disabled:i=!1,...o})=>{const u="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 disabled:opacity-50 disabled:pointer-events-none transform active:scale-[0.98]",l={solid:"bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-600",secondary:"bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600",ghost:"hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300",danger:"bg-red-500 text-white shadow-sm hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"};return f.jsx("button",{type:n,onClick:e,className:`${u} ${l[r]} ${s}`,disabled:i,...o,children:t})},rt=({label:t,name:e,type:n,value:r,onChange:s,placeholder:i,isCurrency:o=!1,isInvalid:u=!1,...l})=>f.jsxs("div",{className:"w-full",children:[f.jsx("label",{htmlFor:e,className:"block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",children:t}),f.jsxs("div",{className:"relative rounded-md shadow-sm",children:[o&&f.jsx("span",{className:"absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 sm:text-sm",children:"€"}),f.jsx("input",{type:n,name:e,id:e,value:r,onChange:s,placeholder:i,className:`block w-full rounded-md shadow-sm sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200 ease-in-out ${o?"pl-7":"pl-3"} ${u?"border-red-500 ring-red-500":"border-zinc-300 dark:border-zinc-600 focus:border-blue-500 focus:ring-blue-500 focus:ring-1"}`,...l})]})]}),to=({label:t,value:e,description:n})=>f.jsxs("div",{className:"w-full",children:[f.jsx("label",{className:"block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",children:t}),f.jsxs("div",{className:"mt-1",children:[f.jsx("p",{className:"block w-full rounded-md border-0 py-1.5 px-3 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-600 bg-zinc-50 dark:bg-zinc-700/50 sm:text-sm h-[38px] flex items-center",children:e||"-"}),n&&f.jsx("p",{className:"mt-1.5 text-xs text-zinc-500 dark:text-zinc-400",children:n})]})]}),vh=({label:t,name:e,nameRecu:n,value:r,valueRecu:s,onChange:i})=>f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg",children:[f.jsx("div",{})," ",f.jsx(rt,{label:`${t} (Dû)`,name:e,type:"number",step:"0.01",min:"0",value:r,onChange:i,placeholder:"0.00",isCurrency:!0}),f.jsx(rt,{label:`Montant perçu (${t})`,name:n,type:"number",step:"0.01",min:"0",value:s,onChange:i,placeholder:"0.00",isCurrency:!0})]}),tr=({label:t,name:e,value:n,onChange:r})=>f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg",children:[f.jsx("div",{})," ",f.jsx(rt,{label:`${t} (Dû)`,name:e,type:"number",step:"0.01",min:"0",value:n,onChange:r,placeholder:"0.00",isCurrency:!0}),f.jsx("div",{})," "]}),wh=({title:t,value:e,icon:n})=>f.jsxs("div",{className:"bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[f.jsx("div",{className:"p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300",children:n}),f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-medium text-zinc-500 dark:text-zinc-400",children:t}),f.jsx("p",{className:"text-2xl font-bold text-zinc-900 dark:text-white",children:e})]})]}),qe=t=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(t||0),Tb=t=>{if(!t&&t!==0)return"";const e=1024;if(Math.abs(t)<e)return t+" B";const n=["KB","MB","GB","TB"];let r=-1;do t/=e,++r;while(Math.abs(t)>=e&&r<n.length-1);return t.toFixed(1)+" "+n[r]},eT=t=>{const e=t.depenses.reduce((i,o)=>i+o.du,0),n=t.depenses.reduce((i,o)=>i+o.recu,0),r=Math.round(e*100)/100,s=Math.round(n*100)/100;return s>=r&&r>0?{text:"Payé",color:"text-green-600 dark:text-green-400",icon:f.jsx(m0,{size:14}),bgColor:"bg-green-100 dark:bg-green-900/50"}:s>0&&s<r?{text:"Partiel",color:"text-yellow-600 dark:text-yellow-400",icon:f.jsx(sk,{size:14}),bgColor:"bg-yellow-100 dark:bg-yellow-900/50"}:{text:"En attente",color:"text-zinc-500",icon:f.jsx(ik,{size:14}),bgColor:"bg-zinc-100 dark:bg-zinc-700"}},Ib=({convocation:t,onClick:e,onToggleSelect:n,isSelected:r})=>{const s=t.depenses.reduce((l,h)=>l+h.du,0),i=t.depenses.reduce((l,h)=>l+h.recu,0),o=eT(t),u=l=>{l.target.type!=="checkbox"&&e(l)};return f.jsxs("tr",{onClick:u,className:"hover:bg-zinc-50 dark:hover:bg-zinc-800/60 cursor-pointer border-b border-zinc-200 dark:border-zinc-700 transition-colors duration-150",children:[f.jsx("td",{className:"px-5 py-4 text-sm font-medium text-zinc-900 dark:text-white",children:f.jsx("input",{type:"checkbox",className:"rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500",checked:r,onChange:()=>n(t.id),onClick:l=>l.stopPropagation()})}),f.jsx("td",{className:"px-5 py-4 text-sm font-medium text-zinc-900 dark:text-white",children:t.numero}),f.jsx("td",{className:"px-5 py-4 text-sm text-zinc-600 dark:text-zinc-300",children:new Date(t.date).toLocaleDateString("fr-FR")}),f.jsx("td",{className:"px-5 py-4 text-sm text-zinc-600 dark:text-zinc-300",children:t.motifNom||"N/A"}),f.jsx("td",{className:"px-5 py-4 text-sm font-semibold text-zinc-900 dark:text-white",children:qe(s)}),f.jsx("td",{className:"px-5 py-4 text-sm font-semibold text-green-600 dark:text-green-400",children:qe(i)}),f.jsx("td",{className:"px-5 py-4 text-sm",children:f.jsxs("span",{className:`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${o.color} ${o.bgColor}`,children:[o.icon,f.jsx("span",{children:o.text})]})})]})},Eu=({show:t,onClose:e,onConfirm:n,title:r,message:s})=>t?f.jsx("div",{className:"fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal",children:f.jsxs("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-md animate-scale-in",children:[f.jsx("div",{className:"p-6",children:f.jsxs("div",{className:"flex items-start space-x-3",children:[f.jsx("div",{className:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/50 sm:mx-0",children:f.jsx(hk,{className:"h-6 w-6 text-red-600 dark:text-red-400","aria-hidden":"true"})}),f.jsxs("div",{className:"mt-0 text-left",children:[f.jsx("h3",{className:"text-lg leading-6 font-medium text-zinc-900 dark:text-white",id:"modal-title",children:r}),f.jsx("div",{className:"mt-2",children:f.jsx("p",{className:"text-sm text-zinc-600 dark:text-zinc-300",children:s})})]})]})}),f.jsxs("div",{className:"bg-zinc-50 dark:bg-zinc-800 px-6 py-4 flex justify-end space-x-3 rounded-b-lg",children:[f.jsx(oe,{variant:"secondary",onClick:e,children:"Annuler"}),f.jsx(oe,{variant:"danger",onClick:n,children:"Supprimer"})]})]})}):null,xb=({show:t,onClose:e,isAuthenticated:n,userEmail:r,onSignIn:s,onSignOut:i,onSendReset:o})=>{const[u,l]=H.useState(""),[h,p]=H.useState(""),[m,g]=H.useState(null),[x,k]=H.useState(!1);if(H.useEffect(()=>{n&&r&&l(r)},[n,r]),!t)return null;const P=async()=>{k(!0),g(null);try{await s(u,h)}catch(v){g((v==null?void 0:v.message)||"Erreur de connexion")}finally{k(!1)}},D=async()=>{k(!0),g(null);try{await o(u),g("Email de réinitialisation envoyé.")}catch(v){g((v==null?void 0:v.message)||"Erreur lors de la demande de réinitialisation")}finally{k(!1)}},I=async()=>{k(!0);try{await i()}catch(v){g((v==null?void 0:v.message)||"Erreur lors de la déconnexion")}finally{k(!1)}};return f.jsx("div",{className:"fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal",children:f.jsxs("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-md animate-scale-in",children:[f.jsxs("div",{className:"flex justify-between items-center p-4 border-b dark:border-zinc-700",children:[f.jsx("h3",{className:"text-lg font-medium text-zinc-900 dark:text-white",children:"Connexion"}),f.jsx(oe,{variant:"ghost",onClick:e,className:"!p-2",children:f.jsx(ai,{size:20})})]}),f.jsx("div",{className:"p-6 space-y-4",children:n?f.jsxs("div",{className:"space-y-3",children:[f.jsx("p",{className:"text-sm text-zinc-700 dark:text-zinc-300",children:"Connecté en tant que"}),f.jsx("p",{className:"font-medium",children:r}),f.jsx("div",{className:"flex justify-end",children:f.jsx(oe,{variant:"secondary",onClick:I,disabled:x,children:"Déconnexion"})})]}):f.jsxs("div",{className:"space-y-3",children:[f.jsx(rt,{label:"Email",name:"authEmail",type:"email",value:u,onChange:v=>l(v.target.value),placeholder:"votre@email.com"}),f.jsx(rt,{label:"Mot de passe",name:"authPassword",type:"password",value:h,onChange:v=>p(v.target.value),placeholder:"••••••••"}),m&&f.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:m}),f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("button",{type:"button",className:"text-sm text-blue-600 hover:underline",onClick:D,disabled:x,children:"Mot de passe perdu"}),f.jsxs("div",{className:"space-x-2",children:[f.jsx(oe,{variant:"secondary",onClick:e,children:"Annuler"}),f.jsx(oe,{variant:"solid",onClick:P,disabled:x,children:"Se connecter"})]})]})]})})]})})},kb=({show:t,onClose:e,onSave:n,motif:r})=>{const[s,i]=H.useState({nom:"",plafondKm:"",coeffKm:"",indemnite:""});if(H.useEffect(()=>{r&&r.id?i(r):r&&i({id:`motif_${Date.now()}`,nom:"",plafondKm:0,coeffKm:0,indemnite:0})},[r]),!t)return null;const o=l=>{const{name:h,value:p}=l.target;i(m=>({...m,[h]:p}))},u=()=>{const l={...s,plafondKm:parseFloat(s.plafondKm)||0,coeffKm:parseFloat(s.coeffKm)||0,indemnite:parseFloat(s.indemnite)||0};n(l)};return f.jsx("div",{className:"fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal",children:f.jsxs("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-lg animate-scale-in",children:[f.jsxs("div",{className:"flex justify-between items-center p-4 border-b dark:border-zinc-700",children:[f.jsx("h3",{className:"text-lg font-medium text-zinc-900 dark:text-white",children:r&&r.id?"Modifier le motif":"Nouveau motif"}),f.jsx(oe,{variant:"ghost",onClick:e,className:"!p-2",children:f.jsx(ai,{size:20})})]}),f.jsxs("div",{className:"p-6 space-y-4",children:[f.jsx(rt,{label:"Nom du motif",name:"nom",type:"text",value:s.nom,onChange:o,placeholder:"Nom du motif"}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[f.jsx(rt,{label:"Plafond (km)",name:"plafondKm",type:"number",step:"1",min:"0",value:s.plafondKm,onChange:o,placeholder:"ex: 200"}),f.jsx(rt,{label:"Coeff. Km",name:"coeffKm",type:"number",step:"0.01",min:"0",value:s.coeffKm,onChange:o,placeholder:"ex: 0.54"}),f.jsx(rt,{label:"Indemnité (€)",name:"indemnite",type:"number",step:"0.01",min:"0",value:s.indemnite,onChange:o,placeholder:"ex: 150.00",isCurrency:!0})]})]}),f.jsxs("div",{className:"bg-zinc-50 dark:bg-zinc-800 px-6 py-4 flex justify-end space-x-3 rounded-b-lg",children:[f.jsx(oe,{variant:"secondary",onClick:e,children:"Annuler"}),f.jsx(oe,{variant:"solid",onClick:u,children:"Enregistrer"})]})]})})},Sb=({show:t,onClose:e,onSave:n,trajet:r})=>{const[s,i]=H.useState({nom:"",distance:""});if(H.useEffect(()=>{r&&r.id?i(r):r&&i({id:`trajet_${Date.now()}`,nom:"",distance:0})},[r]),!t)return null;const o=l=>{const{name:h,value:p}=l.target;i(m=>({...m,[h]:p}))},u=()=>{const l={...s,distance:parseFloat(s.distance)||0};n(l)};return f.jsx("div",{className:"fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal",children:f.jsxs("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-lg animate-scale-in",children:[f.jsxs("div",{className:"flex justify-between items-center p-4 border-b dark:border-zinc-700",children:[f.jsx("h3",{className:"text-lg font-medium text-zinc-900 dark:text-white",children:r&&r.id?"Modifier le trajet":"Nouveau trajet"}),f.jsx(oe,{variant:"ghost",onClick:e,className:"!p-2",children:f.jsx(ai,{size:20})})]}),f.jsxs("div",{className:"p-6 space-y-4",children:[f.jsx(rt,{label:"Nom du trajet (ex: Domicile - Gare TGV)",name:"nom",type:"text",value:s.nom,onChange:o,placeholder:"Nom du trajet"}),f.jsx(rt,{label:"Distance (km)",name:"distance",type:"number",step:"1",min:"0",value:s.distance,onChange:o,placeholder:"ex: 45"})]}),f.jsxs("div",{className:"bg-zinc-50 dark:bg-zinc-800 px-6 py-4 flex justify-end space-x-3 rounded-b-lg",children:[f.jsx(oe,{variant:"secondary",onClick:e,children:"Annuler"}),f.jsx(oe,{variant:"solid",onClick:u,children:"Enregistrer"})]})]})})},Rb=({motifs:t,onSaveMotif:e,onDeleteMotif:n,trajets:r,onSaveTrajet:s,onDeleteTrajet:i})=>{const[o,u]=H.useState(null),[l,h]=H.useState(null),[p,m]=H.useState(null),[g,x]=H.useState(null),[k,P]=H.useState("motifs"),D=V=>{e(V),u(null)},I=()=>{n(l.id),h(null)},v=V=>{s(V),m(null)},R=()=>{i(g.id),x(null)},b=H.useMemo(()=>[...t].sort((V,j)=>V.nom.localeCompare(j.nom,"fr",{sensitivity:"base"})),[t]);return f.jsxs("div",{className:"space-y-6",children:[f.jsx("div",{className:"border-b border-zinc-200 dark:border-zinc-700",children:f.jsxs("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:[f.jsxs("button",{onClick:()=>P("motifs"),className:`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm ${k==="motifs"?"border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300":"border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:border-zinc-500"}`,children:[f.jsx(y0,{size:16,className:"inline-block mr-2"}),"Gestion des Motifs"]}),f.jsxs("button",{onClick:()=>P("trajets"),className:`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm ${k==="trajets"?"border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300":"border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:border-zinc-500"}`,children:[f.jsx(lk,{size:16,className:"inline-block mr-2"}),"Gestion des Trajets"]})]})}),k==="motifs"&&f.jsxs("div",{className:"space-y-6 animate-fade-in-sm",children:[f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("h2",{className:"text-2xl font-bold text-zinc-900 dark:text-white",children:"Motifs"}),f.jsxs(oe,{variant:"solid",onClick:()=>u({}),children:[f.jsx(md,{size:16,className:"mr-2"}),"Nouveau motif"]})]}),f.jsx("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden",children:f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"min-w-full divide-y divide-zinc-200 dark:divide-zinc-700",children:[f.jsx("thead",{className:"bg-zinc-50 dark:bg-zinc-700/50",children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Nom"}),f.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Plafond (km)"}),f.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Coefficient"}),f.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Indemnité"}),f.jsx("th",{scope:"col",className:"px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Actions"})]})}),f.jsxs("tbody",{className:"divide-y divide-zinc-200 dark:divide-zinc-700",children:[b.length===0&&f.jsx("tr",{children:f.jsx("td",{colSpan:"5",className:"px-6 py-12 text-center text-zinc-500 dark:text-zinc-400",children:"Aucun motif créé."})}),b.map(V=>f.jsxs("tr",{className:"hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors duration-150",children:[f.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white",children:V.nom}),f.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300",children:[V.plafondKm," km"]}),f.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300",children:V.coeffKm}),f.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300",children:qe(V.indemnite)}),f.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2",children:[f.jsx(oe,{variant:"ghost",className:"!p-2",onClick:()=>u(V),children:f.jsx(Vg,{size:16})}),f.jsx(oe,{variant:"ghost",className:"!p-2 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50",onClick:()=>h(V),children:f.jsx(Ko,{size:16})})]})]},V.id))]})]})})})]}),k==="trajets"&&f.jsxs("div",{className:"space-y-6 animate-fade-in-sm",children:[f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("h2",{className:"text-2xl font-bold text-zinc-900 dark:text-white",children:"Trajets"}),f.jsxs(oe,{variant:"solid",onClick:()=>m({}),children:[f.jsx(md,{size:16,className:"mr-2"}),"Nouveau trajet"]})]}),f.jsx("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden",children:f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"min-w-full divide-y divide-zinc-200 dark:divide-zinc-700",children:[f.jsx("thead",{className:"bg-zinc-50 dark:bg-zinc-700/50",children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Nom du Trajet"}),f.jsx("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Distance (km)"}),f.jsx("th",{scope:"col",className:"px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Actions"})]})}),f.jsxs("tbody",{className:"divide-y divide-zinc-200 dark:divide-zinc-700",children:[r.length===0&&f.jsx("tr",{children:f.jsx("td",{colSpan:"3",className:"px-6 py-12 text-center text-zinc-500 dark:text-zinc-400",children:"Aucun trajet créé."})}),r.map(V=>f.jsxs("tr",{className:"hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors duration-150",children:[f.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white",children:V.nom}),f.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300",children:[V.distance," km"]}),f.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2",children:[f.jsx(oe,{variant:"ghost",className:"!p-2",onClick:()=>m(V),children:f.jsx(Vg,{size:16})}),f.jsx(oe,{variant:"ghost",className:"!p-2 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50",onClick:()=>x(V),children:f.jsx(Ko,{size:16})})]})]},V.id))]})]})})})]}),f.jsx(kb,{show:!!o,onClose:()=>u(null),onSave:D,motif:o}),f.jsx(Eu,{show:!!l,onClose:()=>h(null),onConfirm:I,title:"Supprimer le motif",message:`Êtes-vous sûr de vouloir supprimer le motif "${l==null?void 0:l.nom}" ? Cette action est irréversible.`}),f.jsx(Sb,{show:!!p,onClose:()=>m(null),onSave:v,trajet:p}),f.jsx(Eu,{show:!!g,onClose:()=>x(null),onConfirm:R,title:"Supprimer le trajet",message:`Êtes-vous sûr de vouloir supprimer le trajet "${g==null?void 0:g.nom}" ? Cette action est irréversible.`})]})},Ab={numero:"",date:new Date().toISOString().split("T")[0],motifId:"",expenseType:"forfait",km:"",trajetId:"",locationVoiture:"",carburant:"",avion:"",train:"",repas:"",transportCommun:"",parking:"",peage:"",peageSurcout:"",hotelForfait:"",hotelReel:"",montantRecuIndemnite:"",montantRecuKm:"",montantRecuPeage:"",montantRecuReel:"",montantRecuHotelForfait:"",montantRecuHotelReel:""},Cb=({motifs:t,trajets:e,onAddConvocation:n,onClose:r,onGoToSettings:s,convocationToEdit:i,onUpdateConvocation:o})=>{var C;const u=H.useMemo(()=>[...t].sort((A,w)=>A.nom.localeCompare(w.nom,"fr",{sensitivity:"base"})),[t]),[l,h]=H.useState(()=>{var U,q,W,J,se,ge,$e,je;if(!i)return{...Ab,motifId:u.length>0?u[0].id:""};const A=i.depenses.find(we=>we.nom==="Indemnité"),w=i.depenses.find(we=>we.nom==="Péage"),ne=i.depenses.find(we=>we.nom==="Frais Kilométriques"),ye=i.depenses.find(we=>we.nom==="Total Frais Réels"),Ve=i.depenses.find(we=>we.nom==="Hôtel (Forfait)"),ie=i.depenses.find(we=>we.nom==="Hôtel (Réel)");return{numero:i.numero,date:i.date,motifId:i.motifId,expenseType:i.expenseType,km:i.km==="N/A"?"":i.km,trajetId:i.trajetId||"",locationVoiture:((U=i.detailsReel)==null?void 0:U.locationVoiture)||"",carburant:((q=i.detailsReel)==null?void 0:q.carburant)||"",avion:((W=i.detailsReel)==null?void 0:W.avion)||"",train:((J=i.detailsReel)==null?void 0:J.train)||"",repas:((se=i.detailsReel)==null?void 0:se.repas)||"",transportCommun:((ge=i.detailsReel)==null?void 0:ge.transportCommun)||"",parking:(($e=i.detailsReel)==null?void 0:$e.parking)||"",peage:(w==null?void 0:w.du)||"",peageSurcout:((je=i.detailsReel)==null?void 0:je.peageSurcout)||"",hotelForfait:(Ve==null?void 0:Ve.du)||"",hotelReel:(ie==null?void 0:ie.du)||"",montantRecuIndemnite:(A==null?void 0:A.recu)||"",montantRecuKm:(ne==null?void 0:ne.recu)||"",montantRecuPeage:(w==null?void 0:w.recu)||"",montantRecuReel:(ye==null?void 0:ye.recu)||"",montantRecuHotelForfait:(Ve==null?void 0:Ve.recu)||"",montantRecuHotelReel:(ie==null?void 0:ie.recu)||""}}),[p,m]=H.useState({}),[g,x]=H.useState(!1),[k,P]=H.useState(null),[D,I]=H.useState(null),[v,R]=H.useState(null),b=H.useRef(null),V=t.length>0,j=H.useMemo(()=>{const A=t.find(ye=>ye.id===l.motifId);if(!A)return{indemniteDue:0,coutKmDu:0};const w=A.indemnite;let ne=0;if(l.expenseType==="forfait"){const ye=parseFloat(l.km)||0,Ve=Math.ceil(ye),ie=A.plafondKm,U=A.coeffKm,W=(ie>0&&Ve>ie?ie:Ve)*U;ne=Math.round(W*100)/100}return{indemniteDue:w,coutKmDu:ne}},[l.km,l.motifId,l.expenseType,t]),T=H.useMemo(()=>{if(l.expenseType!=="reel")return{totalReelDu:0,kmADeclarer:0,coutTrajetDu:0};const A=t.find(cn=>cn.id===l.motifId),w=(A==null?void 0:A.coeffKm)||0,ne=e.find(cn=>cn.id===l.trajetId),Ve=((ne==null?void 0:ne.distance)||0)*w,ie=parseFloat(l.locationVoiture)||0,U=parseFloat(l.carburant)||0,q=parseFloat(l.avion)||0,W=parseFloat(l.train)||0,J=parseFloat(l.repas)||0,se=parseFloat(l.transportCommun)||0,ge=parseFloat(l.parking)||0,$e=parseFloat(l.peageSurcout)||0,je=ie+U+q+W+$e+J+se+ge,we=je+Ve,re=je+Ve,Wt=w>0?Math.ceil(re/w):0,xi=Math.round(Ve*100)/100;return{totalReelDu:Math.round(we*100)/100,kmADeclarer:Wt,coutTrajetDu:xi}},[l.expenseType,l.motifId,l.trajetId,l.locationVoiture,l.carburant,l.avion,l.train,l.repas,l.transportCommun,l.parking,l.peageSurcout,l.hotelReel,l.peage,t,e]),_=A=>{const{name:w,value:ne}=A.target;h(ye=>({...ye,[w]:ne}))},E=()=>{const A={};return l.numero.trim()||(A.numero="Le numéro est requis."),l.date||(A.date="La date est requise."),l.motifId||(A.motifId="Le motif est requis."),m(A),Object.keys(A).length===0},S=async A=>{if(A.preventDefault(),!(!E()||g)){x(!0),m(w=>({...w,form:null}));try{const w=t.find(J=>J.id===l.motifId),ne=e.find(J=>J.id===l.trajetId),{indemniteDue:ye,coutKmDu:Ve}=j,ie=[{nom:"Indemnité",du:ye,recu:parseFloat(l.montantRecuIndemnite)||0}];l.expenseType==="reel"?(parseFloat(l.peage)>0&&ie.push({nom:"Péage",du:parseFloat(l.peage)||0,recu:parseFloat(l.montantRecuPeage)||0}),ie.push({nom:"Total Frais Réels",du:T.totalReelDu,recu:parseFloat(l.montantRecuReel)||0}),parseFloat(l.hotelReel)>0&&ie.push({nom:"Hôtel (Réel)",du:parseFloat(l.hotelReel)||0,recu:parseFloat(l.montantRecuHotelReel)||0})):l.expenseType==="forfait"&&(ie.push({nom:"Péage",du:parseFloat(l.peage)||0,recu:parseFloat(l.montantRecuPeage)||0}),ie.push({nom:"Frais Kilométriques",du:Ve,recu:parseFloat(l.montantRecuKm)||0}),ie.push({nom:"Hôtel (Forfait)",du:parseFloat(l.hotelForfait)||0,recu:parseFloat(l.montantRecuHotelForfait)||0}));const U=i?i.id:`conv_${Date.now()}`;let q=null;if(k){if(!$s||!$s.currentUser){const J=new Error("Vous devez être connecté pour téléverser un fichier.");throw J.code="auth/not-authenticated",J}I(0),R(null);try{if(i&&i.filePath)try{await Cl(Ro(Co,i.filePath))}catch(je){console.warn("Unable to delete previous file:",je)}const J=`convocations/${U}/${Date.now()}_${k.name}`,se=Ro(Co,J),ge=eP(se,k),$e=await new Promise((je,we)=>{ge.on("state_changed",re=>{const Wt=re.totalBytes?Math.round(re.bytesTransferred/re.totalBytes*100):null;I(Wt)},re=>{console.error("Upload error:",re);let Wt=(re==null?void 0:re.message)||"Erreur lors du téléversement.";(re==null?void 0:re.code)==="storage/retry-limit-exceeded"?Wt="Téléversement interrompu après plusieurs tentatives — vérifiez votre connexion réseau et les règles Firebase Storage.":(re==null?void 0:re.code)==="storage/unauthorized"||(re==null?void 0:re.code)==="storage/permission-denied"?Wt="Permission refusée. Vérifiez que vous êtes connecté et les règles Firebase Storage.":(re==null?void 0:re.code)==="storage/canceled"&&(Wt="Téléversement annulé."),R(Wt),I(null),we(re)},async()=>{try{const re=await tP(se);I(100),je(re)}catch(re){we(re)}})});q={fileName:k.name,filePath:J,fileUrl:$e}}catch(J){throw console.error("Erreur upload fichier:",J),v||R((J==null?void 0:J.message)||"Erreur lors du téléversement"),J}}const W={id:U,numero:l.numero,date:l.date,motifId:l.motifId,motifNom:w?w.nom:"Motif inconnu",expenseType:l.expenseType,depenses:ie,km:l.expenseType==="forfait"?l.km||0:"N/A",trajetId:l.trajetId||null,trajetNom:ne?ne.nom:"N/A",trajetDistance:ne?ne.distance:0,detailsReel:l.expenseType==="reel"?{locationVoiture:parseFloat(l.locationVoiture)||0,carburant:parseFloat(l.carburant)||0,avion:parseFloat(l.avion)||0,train:parseFloat(l.train)||0,repas:parseFloat(l.repas)||0,transportCommun:parseFloat(l.transportCommun)||0,parking:parseFloat(l.parking)||0,peageSurcout:parseFloat(l.peageSurcout)||0,coutTrajet:T.coutTrajetDu||0}:null,kmADeclarer:l.expenseType==="reel"?T.kmADeclarer:0};q?(W.fileName=q.fileName,W.filePath=q.filePath,W.fileUrl=q.fileUrl):i&&i.fileUrl&&(W.fileName=i.fileName,W.filePath=i.filePath,W.fileUrl=i.fileUrl),i?await o(W):await n(W),r()}catch(w){console.error("Erreur détaillée lors de la soumission:",w);let ne="Une erreur est survenue lors de l'enregistrement.";if(w instanceof Error)if(w.code)switch(w.code){case"storage/unauthorized":ne="Permission refusée. Vérifiez les règles de sécurité de Firebase Storage.";break;case"auth/not-authenticated":ne="Vous devez être connecté pour téléverser un fichier.";break;case"permission-denied":ne="Permission refusée. Vérifiez les règles de sécurité de Firestore.";break;default:ne=`Une erreur inattendue est survenue: ${w.code}.`}else ne=`Erreur: ${w.message}.`;else typeof w=="string"&&(ne=w);m(ye=>({...ye,form:ne}))}finally{x(!1)}}};return H.useEffect(()=>{l.expenseType==="forfait"?h(A=>({...A,locationVoiture:"",carburant:"",avion:"",train:"",repas:"",transportCommun:"",parking:"",peageSurcout:"",hotelReel:"",montantRecuReel:"",montantRecuHotelReel:"",trajetId:""})):l.expenseType==="reel"&&h(A=>({...A,km:"",hotelForfait:"",montantRecuKm:"",montantRecuHotelForfait:""}))},[l.expenseType]),f.jsx("div",{className:"fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal",children:f.jsxs("form",{onSubmit:S,className:"bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-scale-in",children:[f.jsxs("div",{className:"flex justify-between items-center p-4 border-b dark:border-zinc-700",children:[f.jsxs("h3",{className:"text-lg font-medium text-zinc-900 dark:text-white",children:[i?"Modifier la":"Nouvelle"," Convocation"]}),f.jsx(oe,{variant:"ghost",onClick:r,className:"!p-2",children:f.jsx(ai,{size:20})})]}),f.jsxs("div",{className:"p-6 space-y-6 overflow-y-auto",children:[!V&&f.jsx("div",{className:"bg-yellow-100 dark:bg-yellow-800/50 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-4 rounded-md",role:"alert",children:f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[f.jsxs("div",{children:[f.jsx("p",{className:"font-bold",children:"Aucun motif trouvé !"}),f.jsx("p",{className:"text-sm",children:"Vous devez créer un motif avant d'ajouter une convocation."})]}),f.jsx(oe,{type:"button",onClick:s,variant:"solid",className:"bg-yellow-600 hover:bg-yellow-700 text-white flex-shrink-0",children:"Aller aux Paramètres"})]})}),f.jsxs("div",{className:`${V?"":"opacity-50 pointer-events-none"} space-y-6`,children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[f.jsx(rt,{label:"Numéro de convocation",name:"numero",type:"text",value:l.numero,onChange:_,placeholder:"",required:!0,isInvalid:!!p.numero}),f.jsx(rt,{label:"Date",name:"date",type:"date",value:l.date,onChange:_,required:!0,isInvalid:!!p.date}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"motifId",className:"block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",children:"Motif de convocation"}),f.jsxs("select",{id:"motifId",name:"motifId",value:l.motifId,onChange:_,className:`mt-1 block w-full rounded-md shadow-sm sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200 ${p.motifId?"border-red-500 ring-red-500":"border-zinc-300 dark:border-zinc-600 focus:border-blue-500 focus:ring-blue-500 focus:ring-1"}`,required:!0,children:[!l.motifId&&u.length>0&&f.jsx("option",{value:"",disabled:!0,children:"Sélectionnez un motif"}),u.map(A=>f.jsx("option",{value:A.id,children:A.nom},A.id))]})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsx("h3",{className:"text-lg font-medium text-blue-600 dark:text-blue-400",children:"Frais de Déplacement"}),f.jsxs("div",{className:"flex w-full sm:w-1/2 rounded-md bg-zinc-100 dark:bg-zinc-700 p-1",children:[f.jsx("button",{type:"button",onClick:()=>h(A=>({...A,expenseType:"forfait"})),className:`w-1/2 rounded-md py-2 text-sm font-medium transition-all duration-200 ${l.expenseType==="forfait"?"bg-white dark:bg-zinc-800 shadow-sm text-blue-600 dark:text-blue-400":"text-zinc-600 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-zinc-800/50"}`,children:"Au Forfait"}),f.jsx("button",{type:"button",onClick:()=>h(A=>({...A,expenseType:"reel"})),className:`w-1/2 rounded-md py-2 text-sm font-medium transition-all duration-200 ${l.expenseType==="reel"?"bg-white dark:bg-zinc-800 shadow-sm text-blue-600 dark:text-blue-400":"text-zinc-600 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-zinc-800/50"}`,children:"Au Réel"})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3",children:[f.jsx("div",{}),f.jsx(to,{label:"Indemnité (Due)",value:qe(j.indemniteDue)}),f.jsx(rt,{label:"Montant perçu (Indemnité)",name:"montantRecuIndemnite",type:"number",step:"0.01",min:"0",value:l.montantRecuIndemnite,onChange:_,placeholder:"0.00",isCurrency:!0})]}),f.jsx(vh,{label:"Péage",name:"peage",nameRecu:"montantRecuPeage",value:l.peage,valueRecu:l.montantRecuPeage,onChange:_}),l.expenseType==="reel"&&f.jsx("p",{className:"text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right sm:pr-[calc(33.33%+1.5rem)] -mt-3",children:'(Le péage est inclus dans le "Total Frais Réels" ci-dessous)'})]}),l.expenseType==="forfait"&&f.jsx("div",{className:"space-y-4 animate-fade-in-sm",children:f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg",children:[f.jsx(rt,{label:"Nombre de kilomètres",name:"km",type:"number",step:"0.1",min:"0",value:l.km,onChange:_,placeholder:"ex: 120.5"}),f.jsx(to,{label:"Coût kilométrique (Dû)",value:qe(j.coutKmDu)}),f.jsx(rt,{label:"Montant perçu (KM)",name:"montantRecuKm",type:"number",step:"0.01",min:"0",value:l.montantRecuKm,onChange:_,placeholder:"0.00",isCurrency:!0})]})}),l.expenseType==="reel"&&f.jsxs("div",{className:"space-y-4 animate-fade-in-sm",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"trajetId",className:"block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",children:"Trajet Domicile-Gare/Aéroport"}),f.jsxs("select",{id:"trajetId",name:"trajetId",value:l.trajetId,onChange:_,className:"mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200",children:[f.jsx("option",{value:"",children:"-- Aucun trajet --"}),e.map(A=>f.jsxs("option",{value:A.id,children:[A.nom," (",A.distance," km)"]},A.id))]})]}),f.jsx(to,{label:"Coût Trajet (Dû)",value:qe(T.coutTrajetDu)}),f.jsx("div",{})]}),f.jsx(tr,{label:"Voiture de location",name:"locationVoiture",value:l.locationVoiture,onChange:_}),f.jsx(tr,{label:"Carburant",name:"carburant",value:l.carburant,onChange:_}),f.jsx(tr,{label:"Avion",name:"avion",value:l.avion,onChange:_}),f.jsx(tr,{label:"Train",name:"train",value:l.train,onChange:_}),f.jsx(tr,{label:"Repas",name:"repas",value:l.repas,onChange:_}),f.jsx(tr,{label:"Transport en commun",name:"transportCommun",value:l.transportCommun,onChange:_}),f.jsx(tr,{label:"Parking",name:"parking",value:l.parking,onChange:_}),f.jsx(tr,{label:"Péage Surcoût",name:"peageSurcout",value:l.peageSurcout,onChange:_}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 pt-6 border-t border-zinc-200 dark:border-zinc-700",children:[f.jsx(to,{label:"Total Frais Réels (Dû)",value:qe(T.totalReelDu),description:"(Déplacements + Trajet)"}),f.jsx(rt,{label:"Montant perçu (Frais Réels)",name:"montantRecuReel",type:"number",step:"0.01",min:"0",value:l.montantRecuReel,onChange:_,placeholder:"0.00",isCurrency:!0}),f.jsx(to,{label:"Indemnités KM à déclarer",value:`${T.kmADeclarer} km`,description:`(Frais hors péage/hôtel / Coeff. ${((C=t.find(A=>A.id===l.motifId))==null?void 0:C.coeffKm)||"N/A"})`})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsx("h3",{className:"text-lg font-medium text-blue-600 dark:text-blue-400",children:"Frais d'Hébergement"}),l.expenseType==="forfait"&&f.jsx(vh,{label:"Hôtel (Forfait)",name:"hotelForfait",nameRecu:"montantRecuHotelForfait",value:l.hotelForfait,valueRecu:l.montantRecuHotelForfait,onChange:_}),l.expenseType==="reel"&&f.jsxs(f.Fragment,{children:[f.jsx(vh,{label:"Hôtel (Réel)",name:"hotelReel",nameRecu:"montantRecuHotelReel",value:l.hotelReel,valueRecu:l.montantRecuHotelReel,onChange:_}),f.jsx("p",{className:"text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right sm:pr-[calc(33.33%+1.5rem)] -mt-3",children:`(L'hôtel est inclus dans le "Total Frais Réels" ci-dessus)`})]})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("h3",{className:"text-lg font-medium text-blue-600 dark:text-blue-400",children:"Document (PDF)"}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 rounded-lg",children:[f.jsx("div",{}),f.jsxs("div",{className:"col-span-2",children:[f.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg bg-transparent dark:bg-transparent",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"p-1 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300",children:f.jsx(ok,{size:20})}),f.jsx("div",{children:f.jsx("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:k?`${k.name} • ${Tb(k.size)}`:i!=null&&i.fileName?`Fichier : ${i.fileName}`:"Aucun document"})})]}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("input",{ref:b,type:"file",accept:"application/pdf",onChange:A=>{var w;return P(((w=A.target.files)==null?void 0:w[0])||null)},className:"hidden"}),f.jsx(oe,{variant:"solid",type:"button",onClick:()=>b.current&&b.current.click(),className:"px-3 py-1 text-sm",children:k?"Remplacer":"Choisir"}),k&&f.jsx(oe,{variant:"ghost",className:"!p-2",onClick:()=>P(null),title:"Annuler",children:f.jsx(ai,{size:14})}),!k&&(i==null?void 0:i.fileUrl)&&f.jsx("a",{href:i.fileUrl,target:"_blank",rel:"noreferrer",title:"Télécharger",children:f.jsx(oe,{variant:"ghost",className:"!p-2","aria-label":"Télécharger",children:f.jsx(g0,{size:14})})})]})]}),D!==null&&f.jsxs("div",{className:"mt-2",children:[f.jsx("div",{className:"w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-1 overflow-hidden",children:f.jsx("div",{className:"bg-zinc-700 dark:bg-zinc-400 h-1 transition-all",style:{width:`${D}%`}})}),f.jsxs("p",{className:"text-xs text-zinc-500 dark:text-zinc-400 mt-1",children:[D,"%"]})]}),v&&f.jsx("p",{className:"mt-2 text-sm text-red-600 dark:text-red-400",children:v})]})]})]})]})]}),f.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center p-4 border-t dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 rounded-b-lg gap-4",children:[f.jsx("div",{className:"flex-grow text-center sm:text-left w-full sm:w-auto",children:p.form&&f.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:p.form})}),f.jsxs("div",{className:"flex flex-col-reverse sm:flex-row items-center gap-3 w-full sm:w-auto",children:[f.jsx(oe,{onClick:r,variant:"secondary",className:"w-full sm:w-auto",children:"Annuler"}),f.jsx(oe,{type:"submit",variant:"solid",disabled:!V||g,className:"w-full sm:w-auto",children:g?"Enregistrement...":i?"Mettre à jour":"Enregistrer"})]})]})]})})},Pb=({show:t,onClose:e,convocation:n,onEdit:r,onDelete:s,onDeleteFile:i})=>{if(!t||!n)return null;const[o,u]=H.useState(!1),l=n.depenses.reduce((m,g)=>m+g.du,0),h=n.depenses.reduce((m,g)=>m+g.recu,0),p=H.useMemo(()=>{const m=[],g=[];let x=null;if(n.detailsReel){const k=n.detailsReel,P=(D,I)=>{I>0&&g.push({nom:D,du:I,recu:null,isDetail:!0})};k.coutTrajet>0&&n.trajetNom&&P(`Trajet (${n.trajetNom})`,k.coutTrajet),P("Location Voiture",k.locationVoiture),P("Carburant",k.carburant),P("Avion",k.avion),P("Train",k.train),P("Repas",k.repas),P("Transport en commun",k.transportCommun),P("Parking",k.parking),P("Péage Surcoût",k.peageSurcout)}for(const k of n.depenses){if(k.nom==="Total Frais Réels"){x=k;continue}(k.du>0||k.recu!=null&&k.recu>0)&&m.push(k)}if(x&&m.push({...x,isToggle:!0,hasDetails:g.length>0}),o&&x){const k=m.findIndex(P=>P.nom==="Total Frais Réels");k>-1?m.splice(k+1,0,...g):m.push(...g)}return m},[n,o]);return f.jsx("div",{className:"fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal",children:f.jsxs("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-scale-in",children:[f.jsxs("div",{className:"flex justify-between items-center p-4 border-b dark:border-zinc-700",children:[f.jsxs("div",{children:[f.jsxs("h3",{className:"text-lg font-medium text-zinc-900 dark:text-white",children:["Détail - Convocation ",n.numero]}),f.jsxs("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:[new Date(n.date).toLocaleDateString("fr-FR")," - ",n.motifNom]})]}),f.jsx(oe,{variant:"ghost",onClick:e,className:"!p-2",children:f.jsx(ai,{size:20})})]}),f.jsxs("div",{className:"p-6 space-y-4 overflow-y-auto",children:[f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-medium text-zinc-500 dark:text-zinc-400",children:"Type de frais"}),f.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",children:n.expenseType==="reel"?"Au Réel":"Au Forfait"})]}),n.expenseType==="forfait"&&f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-medium text-zinc-500 dark:text-zinc-400",children:"Kilomètres déclarés"}),f.jsxs("p",{className:"text-zinc-900 dark:text-white font-medium",children:[n.km," km"]})]}),n.expenseType==="reel"&&f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-medium text-zinc-500 dark:text-zinc-400",children:"KM à déclarer (Frais)"}),f.jsxs("p",{className:"text-zinc-900 dark:text-white font-medium",children:[n.kmADeclarer||"0"," km"]})]})]}),f.jsx("div",{className:"border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-sm",children:f.jsxs("table",{className:"min-w-full divide-y divide-zinc-200 dark:divide-zinc-700",children:[f.jsx("thead",{className:"bg-zinc-50 dark:bg-zinc-700/50",children:f.jsxs("tr",{children:[f.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase",children:"Ligne de Dépense"}),f.jsx("th",{className:"px-4 py-2 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase",children:"Montant Dû"}),f.jsx("th",{className:"px-4 py-2 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase",children:"Montant Perçu"})]})}),f.jsx("tbody",{className:"divide-y divide-zinc-200 dark:divide-zinc-700",children:p.length===0?f.jsx("tr",{children:f.jsx("td",{colSpan:"3",className:"px-4 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400",children:"Aucune dépense à afficher."})}):p.map((m,g)=>m.isToggle?f.jsxs("tr",{className:`border-t border-zinc-200 dark:border-zinc-600 ${m.hasDetails?"cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/60":""}`,onClick:()=>m.hasDetails&&u(!o),children:[f.jsx("td",{className:"px-4 py-3 text-sm font-semibold text-zinc-900 dark:text-white",children:f.jsxs("div",{className:"flex items-center space-x-2",children:[m.hasDetails&&f.jsx(rk,{size:16,className:`transition-transform duration-200 ${o?"rotate-180":""}`}),f.jsx("span",{children:m.nom})]})}),f.jsx("td",{className:"px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-200 text-right",children:qe(m.du)}),f.jsx("td",{className:"px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400 text-right",children:qe(m.recu)})]},"total-reel"):m.isDetail?f.jsxs("tr",{className:"bg-zinc-50/50 dark:bg-zinc-800/30 animate-fade-in-sm",children:[f.jsxs("td",{className:"pl-12 pr-4 py-2 text-sm text-zinc-600 dark:text-zinc-300",children:["- ",m.nom]}),f.jsx("td",{className:"px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 text-right",children:qe(m.du)}),f.jsx("td",{className:"px-4 py-2 text-sm text-green-600 dark:text-green-400 text-right",children:f.jsx("span",{className:"text-xs text-zinc-400 dark:text-zinc-500 italic",children:"(inclus)"})})]},g):f.jsxs("tr",{children:[f.jsx("td",{className:"px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white",children:m.nom}),f.jsx("td",{className:"px-4 py-3 text-sm text-zinc-700 dark:text-zinc-200 text-right",children:qe(m.du)}),f.jsx("td",{className:"px-4 py-3 text-sm text-green-600 dark:text-green-400 text-right",children:qe(m.recu)})]},g))}),f.jsx("tfoot",{className:"bg-zinc-50 dark:bg-zinc-700/50 border-t-2 border-zinc-300 dark:border-zinc-600",children:f.jsxs("tr",{children:[f.jsx("td",{className:"px-4 py-3 text-sm font-bold text-zinc-900 dark:text-white text-left",children:"TOTAL"}),f.jsx("td",{className:"px-4 py-3 text-sm font-bold text-zinc-900 dark:text-white text-right",children:qe(l)}),f.jsx("td",{className:"px-4 py-3 text-sm font-bold text-green-700 dark:text-green-300 text-right",children:qe(h)})]})})]})})]}),f.jsxs("div",{className:"flex flex-col-reverse sm:flex-row justify-between items-center p-4 border-t dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 rounded-b-lg gap-4",children:[f.jsxs("div",{className:"flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full sm:w-auto",children:[f.jsxs(oe,{onClick:s,variant:"danger",className:"w-full sm:w-auto",children:[f.jsx(Ko,{size:16,className:"mr-2"}),"Supprimer"]}),n.fileUrl&&f.jsxs(f.Fragment,{children:[f.jsx("a",{href:n.fileUrl,target:"_blank",rel:"noreferrer",className:"inline-block w-full sm:w-auto",children:f.jsxs(oe,{variant:"ghost",className:"!p-2 w-full justify-center",children:[f.jsx(g0,{size:16,className:"mr-2"}),"Télécharger"]})}),f.jsxs(oe,{variant:"ghost",className:"!p-2 text-red-600 dark:text-red-400 w-full sm:w-auto justify-center",onClick:()=>i&&i(n),children:[f.jsx(Ko,{size:14,className:"mr-2"}),"Suppr. fichier"]})]})]}),f.jsxs("div",{className:"flex items-center justify-center sm:justify-end space-x-3 w-full sm:w-auto",children:[f.jsx(oe,{onClick:e,variant:"secondary",className:"w-full sm:w-auto",children:"Fermer"}),f.jsx(oe,{onClick:r,variant:"solid",className:"w-full sm:w-auto",children:"Modifier"})]})]})]})})},Nb=({convocation:t,onClick:e,onToggleSelect:n,isSelected:r})=>{const s=t.depenses.reduce((u,l)=>u+l.du,0),i=t.depenses.reduce((u,l)=>u+l.recu,0),o=eT(t);return f.jsxs("div",{onClick:e,className:"bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 border border-zinc-200 dark:border-zinc-700 active:scale-[0.98] transition-all duration-150",children:[f.jsxs("div",{className:"flex justify-between items-start space-x-3",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("input",{type:"checkbox",className:"rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500 h-5 w-5 flex-shrink-0",checked:r,onChange:()=>n(t.id),onClick:u=>u.stopPropagation()}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-bold text-zinc-900 dark:text-white",children:t.numero}),f.jsx("p",{className:"text-sm text-zinc-600 dark:text-zinc-300",children:t.motifNom||"N/A"}),f.jsx("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:new Date(t.date).toLocaleDateString("fr-FR")})]})]}),f.jsxs("span",{className:`flex-shrink-0 inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${o.color} ${o.bgColor}`,children:[o.icon,f.jsx("span",{children:o.text})]})]}),f.jsxs("div",{className:"mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:"Montant Dû"}),f.jsx("p",{className:"text-lg font-semibold text-zinc-900 dark:text-white",children:qe(s)})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:"Montant Perçu"}),f.jsx("p",{className:"text-lg font-semibold text-green-600 dark:text-green-400",children:qe(i)})]})]})]})},bb=({convocations:t,onSelectConvocation:e,selectedIds:n,onSelectId:r,onSelectAll:s,onDeleteSelected:i,searchTerm:o,onSearchTermChange:u})=>{const l=H.useMemo(()=>{let p=0,m=0;t.forEach(x=>{Array.isArray(x.depenses)?(p+=x.depenses.reduce((k,P)=>k+(P.du||0),0),m+=x.depenses.reduce((k,P)=>k+(P.recu||0),0)):console.warn("conv.depenses n'est pas un tableau pour la convocation:",x.id,x)});const g=m-p;return{totalDu:p,totalRecu:m,solde:g}},[t]),h=t.length>0&&n.length===t.length;return f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[f.jsx(wh,{title:"Total Dû",value:qe(l.totalDu),icon:f.jsx(pd,{size:22})}),f.jsx(wh,{title:"Total Perçu",value:qe(l.totalRecu),icon:f.jsx(m0,{size:22})}),f.jsx(wh,{title:"Solde",value:qe(l.solde),icon:f.jsx(pd,{size:22})})]}),f.jsxs("div",{className:"relative mt-4",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:f.jsx(uk,{size:18,className:"text-zinc-400"})}),f.jsx("input",{type:"text",placeholder:"Rechercher par numéro de convocation...",value:o,onChange:p=>u(p.target.value),className:"block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md leading-5 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:placeholder-zinc-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"})]}),n.length>0&&f.jsxs("div",{className:"bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow-md p-4 flex justify-between items-center animate-fade-in-sm",children:[f.jsxs("p",{className:"font-medium",children:[n.length," ",n.length>1?"convocations sélectionnées":"convocation sélectionnée"]}),f.jsxs(oe,{variant:"danger",onClick:i,className:"bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",children:[f.jsx(Ko,{size:16,className:"mr-2"}),"Supprimer la sélection"]})]}),f.jsxs("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden",children:[f.jsx("div",{className:"hidden sm:block overflow-x-auto",children:f.jsxs("table",{className:"min-w-full divide-y divide-zinc-200 dark:divide-zinc-700",children:[f.jsx("thead",{className:"bg-zinc-50 dark:bg-zinc-700/50",children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:f.jsx("input",{type:"checkbox",className:"rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500",checked:h,onChange:p=>s(p.target.checked),title:"Tout sélectionner"})}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Numéro"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Date"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Motif"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Montant Dû"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Montant Perçu"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Statut"})]})}),f.jsxs("tbody",{className:"divide-y divide-zinc-200 dark:divide-zinc-700",children:[t.length===0&&f.jsx("tr",{children:f.jsx("td",{colSpan:"7",className:"px-5 py-12 text-center text-zinc-500 dark:text-zinc-400",children:"Aucune convocation à afficher."})}),t.map(p=>f.jsx(Ib,{convocation:p,onClick:()=>e(p),isSelected:n.includes(p.id),onToggleSelect:r},p.id))]})]})}),f.jsxs("div",{className:"block sm:hidden p-4 space-y-4 bg-zinc-50/50 dark:bg-zinc-900/50",children:[f.jsxs("div",{className:"px-1 py-2 flex items-center",children:[f.jsx("input",{type:"checkbox",id:"select-all-mobile",className:"rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500 h-5 w-5",checked:h,onChange:p=>s(p.target.checked)}),f.jsx("label",{htmlFor:"select-all-mobile",className:"ml-3 text-sm font-medium text-zinc-700 dark:text-zinc-300",children:"Tout sélectionner"})]}),t.length===0&&f.jsx("div",{className:"px-5 py-12 text-center text-zinc-500 dark:text-zinc-400",children:"Aucune convocation à afficher."}),t.map(p=>f.jsx(Nb,{convocation:p,onClick:()=>e(p),isSelected:n.includes(p.id),onToggleSelect:r},p.id))]})]})]})},Db=({onNewConvocation:t,onSetPage:e,page:n,darkMode:r,onToggleDarkMode:s,availableYears:i,selectedYear:o,onSelectYear:u,isAuthenticated:l,userEmail:h,onAuthButtonClick:p})=>{const[m,g]=H.useState(!1),x=H.useRef(null);return H.useEffect(()=>{const k=P=>{x.current&&!x.current.contains(P.target)&&g(!1)};return document.addEventListener("mousedown",k),()=>{document.removeEventListener("mousedown",k)}},[]),f.jsxs("header",{className:"bg-white dark:bg-zinc-800 shadow-md mb-8 p-4 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4",children:[f.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-4 sm:space-x-4 w-full sm:w-auto",children:[f.jsx("h1",{className:"text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-center sm:text-left",children:"RefFinances"}),f.jsxs("nav",{className:"flex items-center space-x-2 w-full sm:w-auto",children:[f.jsxs(oe,{variant:n==="dashboard"?"secondary":"ghost",onClick:()=>e("dashboard"),className:`w-1/2 sm:w-auto justify-center ${n==="dashboard"?"font-semibold bg-zinc-200 dark:bg-zinc-700":"font-normal"}`,children:[f.jsx(pd,{size:16,className:"mr-2"}),"Dashboard"]}),f.jsxs(oe,{variant:n==="settings"?"secondary":"ghost",onClick:()=>e("settings"),className:`w-1/2 sm:w-auto justify-center ${n==="settings"?"font-semibold bg-zinc-200 dark:bg-zinc-700":"font-normal"}`,children:[f.jsx(y0,{size:16,className:"mr-2"}),"Paramètres"]})]}),n==="dashboard"&&i.length>0&&f.jsxs("div",{className:"w-full sm:w-auto",children:[f.jsx("label",{htmlFor:"year-select",className:"sr-only",children:"Filtrer par année"}),f.jsxs("select",{id:"year-select",value:o,onChange:k=>u(k.target.value),className:"w-full rounded-md border-zinc-300 dark:border-zinc-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200",children:[f.jsx("option",{value:"all",children:"Toutes les années"}),i.map(k=>f.jsx("option",{value:k,children:k},k))]})]})]}),f.jsxs("div",{className:"flex items-center space-x-2 justify-center flex-wrap gap-2",children:[f.jsx(oe,{variant:"ghost",className:"!p-2",onClick:s,children:r?f.jsx(ck,{size:18}):f.jsx(ak,{size:18})}),f.jsx(oe,{variant:"ghost",className:"!p-2",onClick:p,children:l?h||"Profil":"Connexion"}),f.jsxs(oe,{variant:"solid",onClick:t,className:"flex-grow sm:flex-grow-0",children:[f.jsx(md,{size:16,className:"mr-2"}),"Nouvelle Convocation"]})]})]})};function Ob(){const[t,e]=H.useState("dashboard"),[n,r]=H.useState(!1),[s,i]=H.useState(null),[o,u]=H.useState(null),[l,h]=H.useState(null),[p,m]=H.useState(!1),[g,x]=H.useState(!0),[k,P]=H.useState(null),[D,I]=H.useState([]),[v,R]=H.useState(!1),[b,V]=H.useState("all"),[j,T]=H.useState(""),[_,E]=H.useState(!1),[S,C]=H.useState(!1),[A,w]=H.useState(null),[ne,ye]=H.useState(!1),[Ve,ie]=H.useState(null),[U,q]=H.useState(null),[W,J]=H.useState([]),[se,ge]=H.useState([]),[$e,je]=H.useState([]);H.useEffect(()=>{x(!0),P(null);const F=setTimeout(()=>{g&&(console.warn("[App] Data load timeout: no snapshot received within timeout"),x(!1),P("Impossible de charger les données depuis Firebase — vérifiez la connexion réseau ou ouvrez l'application depuis un navigateur pour diagnostiquer."))},1e4);console.debug("[Firestore] setting up convocations listener for",er.path);const G=ch(er,fe=>{console.debug("[Firestore] convocations snapshot received. size=",fe.size);const Ze=fe.docs.map(wt=>{const bi=wt.data();return console.debug("[Firestore] conv doc:",wt.id,bi),{id:wt.id,...bi}});J(Ze),x(!1),P(null),clearTimeout(F)},fe=>{console.error("[Firestore] Error listening convocations:",fe),x(!1),P("Erreur lors de la connexion à Firestore: "+((fe==null?void 0:fe.message)||(fe==null?void 0:fe.code)||"unknown")),clearTimeout(F)});LA(er).then(fe=>{console.debug("[Firestore diag] getDocs convocations size=",fe.size)}).catch(fe=>{console.error("[Firestore diag] getDocs convocations error:",fe)});const de=ch(yh,fe=>{const Ze=fe.docs.map(wt=>({id:wt.id,...wt.data()}));ge(Ze)}),Rt=ch(_h,fe=>{const Ze=fe.docs.map(wt=>({id:wt.id,...wt.data()}));je(Ze)});return()=>{G(),de(),Rt(),clearTimeout(F)}},[]),H.useEffect(()=>aN($s,async G=>{console.debug("[Auth] onAuthStateChanged called. user:",G),w(G),C(!!G)}),[]);const we=()=>E(!1),re=()=>{console.debug("[Auth] openAuthModal clicked"),E(!0)},Wt=async(F,G)=>{ye(!0),ie(null);try{const de=await sN($s,F,G);console.debug("[Auth] signIn success, user:",de.user),ie(null),E(!1)}catch(de){throw console.error("Erreur signIn:",de),ie((de==null?void 0:de.message)||"Erreur lors de la connexion"),de}finally{ye(!1)}},xi=async()=>{ye(!0);try{await lN($s),w(null),C(!1),E(!1)}catch(F){throw console.error("Erreur signOut:",F),ie((F==null?void 0:F.message)||"Erreur lors de la déconnexion"),F}finally{ye(!1)}},zr=async F=>{ye(!0),ie(null);try{await rN($s,F)}catch(G){throw console.error("Erreur reset password:",G),ie((G==null?void 0:G.message)||"Erreur lors de l envoi du mail"),G}finally{ye(!1)}};H.useEffect(()=>{const F=window.matchMedia("(prefers-color-scheme: dark)"),G=F.matches;m(G),document.documentElement.classList.toggle("dark",G);const de=Rt=>{m(Rt.matches),document.documentElement.classList.toggle("dark",Rt.matches)};return F.addEventListener("change",de),()=>F.removeEventListener("change",de)},[]);const cn=async F=>{try{await Al(dn(er,F.id),F),await An()}catch(G){throw console.error("Erreur ajout convocation:",G),G}},ki=async F=>{try{await Py(dn(er,F.id),F),await An()}catch(G){throw console.error("Erreur maj convocation:",G),G}},Si=async()=>{if(l)try{if(l.filePath)try{await Cl(Ro(Co,l.filePath))}catch(F){console.warn("Erreur suppression fichier associé (ignore):",F),q(`Impossible de supprimer le fichier associé: ${l.fileName||l.filePath}. Vérifiez les permissions.`)}await uh(dn(er,l.id)),await An(),h(null),i(null)}catch(F){console.error("Erreur suppression convocation:",F),F!=null&&F.code?q(`Erreur lors de la suppression: ${F.code}`):q("Erreur lors de la suppression de la convocation.")}},Ri=async F=>{if(F!=null&&F.filePath){try{await Cl(Ro(Co,F.filePath))}catch(G){throw console.error("Erreur suppression fichier:",G),q(`Impossible de supprimer le fichier: ${F.fileName||F.filePath}. (${(G==null?void 0:G.code)||(G==null?void 0:G.message)})`),G}try{await Py(dn(er,F.id),{fileName:null,filePath:null,fileUrl:null}),await An()}catch(G){throw console.error("Erreur lors de la mise à jour du document après suppression du fichier:",G),q("Erreur lors de la mise à jour du document après suppression du fichier."),G}}},Ai=async F=>{try{await Al(dn(yh,F.id),F,{merge:!0}),await An()}catch(G){console.error("Erreur sauvegarde motif:",G)}},Ia=async F=>{try{await uh(dn(yh,F)),await An()}catch(G){console.error("Erreur suppression motif:",G)}},uc=async F=>{try{await Al(dn(_h,F.id),F,{merge:!0}),await An()}catch(G){console.error("Erreur sauvegarde trajet:",G)}},cc=async F=>{try{await uh(dn(_h,F)),await An()}catch(G){console.error("Erreur suppression trajet:",G)}},xa=async()=>{if(D.length!==0)try{const F=D.map(de=>W.find(Rt=>Rt.id===de)).filter(Boolean).map(de=>de.filePath).filter(Boolean);if(F.length>0){const Rt=(await Promise.allSettled(F.map(fe=>Cl(Ro(Co,fe)).then(()=>({path:fe,ok:!0})).catch(Ze=>({path:fe,ok:!1,err:Ze}))))).filter(fe=>fe.status==="fulfilled"?fe.value&&fe.value.ok===!1:fe.status==="rejected");if(Rt.length>0){const fe=Rt.map(Ze=>{var wt;return Ze.status==="fulfilled"?Ze.value.path:((wt=Ze.reason)==null?void 0:wt.path)||"unknown"});console.warn("Certaines suppressions de fichiers ont échoué:",fe),q(`Impossible de supprimer certains fichiers: ${fe.join(", ")}. Vérifiez les permissions.`)}}const G=UA(ZE);D.forEach(de=>{G.delete(dn(er,de))}),await G.commit(),await An(),I([]),R(!1)}catch(F){console.error("Erreur lors de la suppression des convocations sélectionnées:",F)}},ws=(F=null)=>{u(F),r(!0),i(null)},ka=F=>{i(F)},hc=()=>{const F=!p;m(F),document.documentElement.classList.toggle("dark",F)},Ci=F=>{I(G=>G.includes(F)?G.filter(de=>de!==F):[...G,F])},Pi=F=>{I(F?Ni.map(G=>G.id):[])},Ni=H.useMemo(()=>{const F=b==="all"?W:W.filter(de=>new Date(de.date).getFullYear().toString()===b);return(j?F.filter(de=>de.numero.toLowerCase().includes(j.toLowerCase())):F).sort((de,Rt)=>new Date(Rt.date)-new Date(de.date))},[W,b,j]),Qe=H.useMemo(()=>{const F=new Set(W.map(G=>new Date(G.date).getFullYear().toString()));return Array.from(F).sort((G,de)=>de-G)},[W]);return g?f.jsx("div",{className:"w-screen h-screen flex justify-center items-center bg-zinc-100 dark:bg-zinc-900",children:f.jsxs("div",{className:"text-center",children:[f.jsxs("svg",{className:"animate-spin h-8 w-8 text-blue-600 mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[f.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),f.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),f.jsx("p",{className:"mt-3 text-zinc-600 dark:text-zinc-300",children:"Chargement des données..."})]})}):f.jsxs("div",{className:`app-safe-layout bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans ${p?"dark":""}`,children:[f.jsxs("main",{className:"max-w-7xl mx-auto p-4",children:[f.jsx(Db,{onNewConvocation:()=>ws(),onSetPage:e,page:t,darkMode:p,onToggleDarkMode:hc,availableYears:Qe,selectedYear:b,onSelectYear:V,isAuthenticated:S,userEmail:A==null?void 0:A.email,onAuthButtonClick:re}),k&&f.jsx("div",{className:"max-w-7xl mx-auto mt-4 p-4",children:f.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/60 border-l-4 border-yellow-400 text-yellow-800 dark:text-yellow-200 p-3 rounded",children:f.jsxs("div",{className:"flex items-start justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"font-semibold",children:"Problème de chargement"}),f.jsx("p",{className:"text-sm mt-1",children:k})]}),f.jsx("div",{children:f.jsx("button",{onClick:()=>P(null),className:"ml-4 text-yellow-900 dark:text-yellow-200/90 hover:underline",children:"Ignorer"})})]})})}),t==="dashboard"&&f.jsx(bb,{convocations:Ni,onSelectConvocation:ka,selectedIds:D,onSelectId:Ci,onSelectAll:Pi,onDeleteSelected:()=>R(!0),searchTerm:j,onSearchTermChange:T}),U&&f.jsx("div",{className:"fixed bottom-4 right-4 z-50 max-w-md w-full",children:f.jsx("div",{className:"bg-red-600 text-white p-3 rounded-lg shadow-md",children:f.jsxs("div",{className:"flex justify-between items-start",children:[f.jsxs("div",{children:[f.jsx("p",{className:"font-semibold",children:"Erreur de suppression de fichier"}),f.jsx("p",{className:"text-sm mt-1",children:U})]}),f.jsx("div",{children:f.jsx("button",{onClick:()=>q(null),className:"ml-4 text-white/90 hover:underline",children:"Fermer"})})]})})}),t==="settings"&&f.jsx(Rb,{motifs:se,onSaveMotif:Ai,onDeleteMotif:Ia,trajets:$e,onSaveTrajet:uc,onDeleteTrajet:cc})]}),n&&f.jsx(Cb,{motifs:se,trajets:$e,onAddConvocation:cn,onUpdateConvocation:ki,onClose:()=>r(!1),onGoToSettings:()=>{r(!1),e("settings")},convocationToEdit:o}),s&&f.jsx(Pb,{show:!!s,onClose:()=>i(null),convocation:s,onEdit:()=>ws(s),onDelete:()=>h(s),onDeleteFile:Ri}),f.jsx(Eu,{show:!!l,onClose:()=>h(null),onConfirm:Si,title:"Supprimer la convocation",message:`Êtes-vous sûr de vouloir supprimer la convocation n°${l==null?void 0:l.numero} ? Cette action est irréversible.`}),f.jsx(Eu,{show:v,onClose:()=>R(!1),onConfirm:xa,title:"Supprimer les convocations",message:`Êtes-vous sûr de vouloir supprimer les ${D.length} convocations sélectionnées ? Cette action est irréversible.`}),f.jsx(xb,{show:_,onClose:we,isAuthenticated:S,userEmail:A==null?void 0:A.email,onSignIn:Wt,onSignOut:xi,onSendReset:zr})]})}Eh.createRoot(document.getElementById("root")).render(f.jsx(BT.StrictMode,{children:f.jsx(Ob,{})}));
