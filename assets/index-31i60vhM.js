(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function AT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var o_={exports:{}},_u={},a_={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),PT=Symbol.for("react.portal"),NT=Symbol.for("react.fragment"),bT=Symbol.for("react.strict_mode"),DT=Symbol.for("react.profiler"),OT=Symbol.for("react.provider"),VT=Symbol.for("react.context"),MT=Symbol.for("react.forward_ref"),LT=Symbol.for("react.suspense"),jT=Symbol.for("react.memo"),FT=Symbol.for("react.lazy"),Cm=Symbol.iterator;function zT(t){return t===null||typeof t!="object"?null:(t=Cm&&t[Cm]||t["@@iterator"],typeof t=="function"?t:null)}var l_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},u_=Object.assign,c_={};function pi(t,e,n){this.props=t,this.context=e,this.refs=c_,this.updater=n||l_}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function h_(){}h_.prototype=pi.prototype;function jd(t,e,n){this.props=t,this.context=e,this.refs=c_,this.updater=n||l_}var Fd=jd.prototype=new h_;Fd.constructor=jd;u_(Fd,pi.prototype);Fd.isPureReactComponent=!0;var Am=Array.isArray,d_=Object.prototype.hasOwnProperty,zd={current:null},f_={key:!0,ref:!0,__self:!0,__source:!0};function p_(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)d_.call(e,r)&&!f_.hasOwnProperty(r)&&(s[r]=e[r]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var l=Array(u),h=0;h<u;h++)l[h]=arguments[h+2];s.children=l}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return{$$typeof:na,type:t,key:i,ref:o,props:s,_owner:zd.current}}function UT(t,e){return{$$typeof:na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===na}function BT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function Rc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?BT(""+t.key):e.toString(36)}function ul(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case na:case PT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Rc(o,0):r,Am(s)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),ul(s,e,n,"",function(h){return h})):s!=null&&(Ud(s)&&(s=UT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Pm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Am(t))for(var u=0;u<t.length;u++){i=t[u];var l=r+Rc(i,u);o+=ul(i,e,n,l,s)}else if(l=zT(t),typeof l=="function")for(t=l.call(t),u=0;!(i=t.next()).done;)i=i.value,l=r+Rc(i,u++),o+=ul(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var r=[],s=0;return ul(t,r,"","",function(i){return e.call(n,i,s++)}),r}function $T(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var wt={current:null},cl={transition:null},HT={ReactCurrentDispatcher:wt,ReactCurrentBatchConfig:cl,ReactCurrentOwner:zd};function m_(){throw Error("act(...) is not supported in production builds of React.")}se.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};se.Component=pi;se.Fragment=NT;se.Profiler=DT;se.PureComponent=jd;se.StrictMode=bT;se.Suspense=LT;se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HT;se.act=m_;se.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=u_({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=zd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(l in e)d_.call(e,l)&&!f_.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&u!==void 0?u[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){u=Array(l);for(var h=0;h<l;h++)u[h]=arguments[h+2];r.children=u}return{$$typeof:na,type:t.type,key:s,ref:i,props:r,_owner:o}};se.createContext=function(t){return t={$$typeof:VT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:OT,_context:t},t.Consumer=t};se.createElement=p_;se.createFactory=function(t){var e=p_.bind(null,t);return e.type=t,e};se.createRef=function(){return{current:null}};se.forwardRef=function(t){return{$$typeof:MT,render:t}};se.isValidElement=Ud;se.lazy=function(t){return{$$typeof:FT,_payload:{_status:-1,_result:t},_init:$T}};se.memo=function(t,e){return{$$typeof:jT,type:t,compare:e===void 0?null:e}};se.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};se.unstable_act=m_;se.useCallback=function(t,e){return wt.current.useCallback(t,e)};se.useContext=function(t){return wt.current.useContext(t)};se.useDebugValue=function(){};se.useDeferredValue=function(t){return wt.current.useDeferredValue(t)};se.useEffect=function(t,e){return wt.current.useEffect(t,e)};se.useId=function(){return wt.current.useId()};se.useImperativeHandle=function(t,e,n){return wt.current.useImperativeHandle(t,e,n)};se.useInsertionEffect=function(t,e){return wt.current.useInsertionEffect(t,e)};se.useLayoutEffect=function(t,e){return wt.current.useLayoutEffect(t,e)};se.useMemo=function(t,e){return wt.current.useMemo(t,e)};se.useReducer=function(t,e,n){return wt.current.useReducer(t,e,n)};se.useRef=function(t){return wt.current.useRef(t)};se.useState=function(t){return wt.current.useState(t)};se.useSyncExternalStore=function(t,e,n){return wt.current.useSyncExternalStore(t,e,n)};se.useTransition=function(){return wt.current.useTransition()};se.version="18.3.1";a_.exports=se;var j=a_.exports;const g_=AT(j);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qT=j,WT=Symbol.for("react.element"),KT=Symbol.for("react.fragment"),GT=Object.prototype.hasOwnProperty,QT=qT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,XT={key:!0,ref:!0,__self:!0,__source:!0};function y_(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GT.call(e,r)&&!XT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:WT,type:t,key:i,ref:o,props:s,_owner:QT.current}}_u.Fragment=KT;_u.jsx=y_;_u.jsxs=y_;o_.exports=_u;var f=o_.exports,_h={},__={exports:{}},Ut={},v_={exports:{}},w_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,q){var W=U.length;U.push(q);e:for(;0<W;){var J=W-1>>>1,re=U[J];if(0<s(re,q))U[J]=q,U[W]=re,W=J;else break e}}function n(U){return U.length===0?null:U[0]}function r(U){if(U.length===0)return null;var q=U[0],W=U.pop();if(W!==q){U[0]=W;e:for(var J=0,re=U.length,pe=re>>>1;J<pe;){var Ue=2*(J+1)-1,Ve=U[Ue],je=Ue+1,Q=U[je];if(0>s(Ve,W))je<re&&0>s(Q,Ve)?(U[J]=Q,U[je]=W,J=je):(U[J]=Ve,U[Ue]=W,J=Ue);else if(je<re&&0>s(Q,W))U[J]=Q,U[je]=W,J=je;else break e}}return q}function s(U,q){var W=U.sortIndex-q.sortIndex;return W!==0?W:U.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,u=o.now();t.unstable_now=function(){return o.now()-u}}var l=[],h=[],p=1,m=null,g=3,E=!1,k=!1,P=!1,D=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(U){for(var q=n(h);q!==null;){if(q.callback===null)r(h);else if(q.startTime<=U)r(h),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(h)}}function b(U){if(P=!1,C(U),!k)if(n(l)!==null)k=!0,Oe(z);else{var q=n(h);q!==null&&ue(b,q.startTime-U)}}function z(U,q){k=!1,P&&(P=!1,x(y),y=-1),E=!0;var W=g;try{for(C(q),m=n(l);m!==null&&(!(m.expirationTime>q)||U&&!A());){var J=m.callback;if(typeof J=="function"){m.callback=null,g=m.priorityLevel;var re=J(m.expirationTime<=q);q=t.unstable_now(),typeof re=="function"?m.callback=re:m===n(l)&&r(l),C(q)}else r(l);m=n(l)}if(m!==null)var pe=!0;else{var Ue=n(h);Ue!==null&&ue(b,Ue.startTime-q),pe=!1}return pe}finally{m=null,g=W,E=!1}}var V=!1,w=null,y=-1,I=5,S=-1;function A(){return!(t.unstable_now()-S<I)}function R(){if(w!==null){var U=t.unstable_now();S=U;var q=!0;try{q=w(!0,U)}finally{q?T():(V=!1,w=null)}}else V=!1}var T;if(typeof v=="function")T=function(){v(R)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,ke=X.port2;X.port1.onmessage=R,T=function(){ke.postMessage(null)}}else T=function(){D(R,0)};function Oe(U){w=U,V||(V=!0,T())}function ue(U,q){y=D(function(){U(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){k||E||(k=!0,Oe(z))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(U){switch(g){case 1:case 2:case 3:var q=3;break;default:q=g}var W=g;g=q;try{return U()}finally{g=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,q){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var W=g;g=U;try{return q()}finally{g=W}},t.unstable_scheduleCallback=function(U,q,W){var J=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?J+W:J):W=J,U){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=W+re,U={id:p++,callback:q,priorityLevel:U,startTime:W,expirationTime:re,sortIndex:-1},W>J?(U.sortIndex=W,e(h,U),n(l)===null&&U===n(h)&&(P?(x(y),y=-1):P=!0,ue(b,W-J))):(U.sortIndex=re,e(l,U),k||E||(k=!0,Oe(z))),U},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(U){var q=g;return function(){var W=g;g=q;try{return U.apply(this,arguments)}finally{g=W}}}})(w_);v_.exports=w_;var YT=v_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var JT=j,zt=YT;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var E_=new Set,So={};function cs(t,e){Js(t,e),Js(t+"Capture",e)}function Js(t,e){for(So[t]=e,t=0;t<e.length;t++)E_.add(e[t])}var Mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vh=Object.prototype.hasOwnProperty,ZT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Nm={},bm={};function eI(t){return vh.call(bm,t)?!0:vh.call(Nm,t)?!1:ZT.test(t)?bm[t]=!0:(Nm[t]=!0,!1)}function tI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function nI(t,e,n,r){if(e===null||typeof e>"u"||tI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Et(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new Et(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new Et(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new Et(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new Et(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new Et(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new Et(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new Et(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new Et(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new Et(t,5,!1,t.toLowerCase(),null,!1,!1)});var Bd=/[\-:]([a-z])/g;function $d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Bd,$d);rt[e]=new Et(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Bd,$d);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Bd,$d);rt[e]=new Et(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new Et("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new Et(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,r){var s=rt.hasOwnProperty(e)?rt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(nI(e,n,s,r)&&(n=null),r||s===null?eI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Hn=JT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Cs=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),wh=Symbol.for("react.profiler"),T_=Symbol.for("react.provider"),I_=Symbol.for("react.context"),Wd=Symbol.for("react.forward_ref"),Eh=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),k_=Symbol.for("react.offscreen"),Dm=Symbol.iterator;function $i(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,Cc;function eo(t){if(Cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Cc=e&&e[1]||""}return`
`+Cc+t}var Ac=!1;function Pc(t,e){if(!t||Ac)return"";Ac=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,u=i.length-1;1<=o&&0<=u&&s[o]!==i[u];)u--;for(;1<=o&&0<=u;o--,u--)if(s[o]!==i[u]){if(o!==1||u!==1)do if(o--,u--,0>u||s[o]!==i[u]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=u);break}}}finally{Ac=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function rI(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Cs:return"Portal";case wh:return"Profiler";case qd:return"StrictMode";case Eh:return"Suspense";case Th:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case I_:return(t.displayName||"Context")+".Consumer";case T_:return(t._context.displayName||"Context")+".Provider";case Wd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:Ih(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return Ih(t(e))}catch{}}return null}function sI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ih(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function x_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iI(t){var e=x_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function za(t){t._valueTracker||(t._valueTracker=iI(t))}function S_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=x_(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function kh(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Om(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function R_(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function xh(t,e){R_(t,e);var n=Ir(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Sh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Sh(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Vm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Sh(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function Bs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Rh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Mm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(to(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function C_(t,e){var n=Ir(e.value),r=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function A_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ch(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?A_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ua,P_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ua=Ua||document.createElement("div"),Ua.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ua.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},oI=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){oI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function N_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function b_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=N_(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var aI=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ah(t,e){if(e){if(aI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Ph(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=null;function Gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bh=null,$s=null,Hs=null;function jm(t){if(t=ia(t)){if(typeof bh!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Iu(e),bh(t.stateNode,t.type,e))}}function D_(t){$s?Hs?Hs.push(t):Hs=[t]:$s=t}function O_(){if($s){var t=$s,e=Hs;if(Hs=$s=null,jm(t),e)for(t=0;t<e.length;t++)jm(e[t])}}function V_(t,e){return t(e)}function M_(){}var Nc=!1;function L_(t,e,n){if(Nc)return t(e,n);Nc=!0;try{return V_(t,e,n)}finally{Nc=!1,($s!==null||Hs!==null)&&(M_(),O_())}}function Co(t,e){var n=t.stateNode;if(n===null)return null;var r=Iu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Dh=!1;if(Mn)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Dh=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Dh=!1}function lI(t,e,n,r,s,i,o,u,l){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var ho=!1,Nl=null,bl=!1,Oh=null,uI={onError:function(t){ho=!0,Nl=t}};function cI(t,e,n,r,s,i,o,u,l){ho=!1,Nl=null,lI.apply(uI,arguments)}function hI(t,e,n,r,s,i,o,u,l){if(cI.apply(this,arguments),ho){if(ho){var h=Nl;ho=!1,Nl=null}else throw Error(F(198));bl||(bl=!0,Oh=h)}}function hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function j_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fm(t){if(hs(t)!==t)throw Error(F(188))}function dI(t){var e=t.alternate;if(!e){if(e=hs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Fm(s),t;if(i===r)return Fm(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,u=s.child;u;){if(u===n){o=!0,n=s,r=i;break}if(u===r){o=!0,r=s,n=i;break}u=u.sibling}if(!o){for(u=i.child;u;){if(u===n){o=!0,n=i,r=s;break}if(u===r){o=!0,r=i,n=s;break}u=u.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function F_(t){return t=dI(t),t!==null?z_(t):null}function z_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=z_(t);if(e!==null)return e;t=t.sibling}return null}var U_=zt.unstable_scheduleCallback,zm=zt.unstable_cancelCallback,fI=zt.unstable_shouldYield,pI=zt.unstable_requestPaint,Le=zt.unstable_now,mI=zt.unstable_getCurrentPriorityLevel,Qd=zt.unstable_ImmediatePriority,B_=zt.unstable_UserBlockingPriority,Dl=zt.unstable_NormalPriority,gI=zt.unstable_LowPriority,$_=zt.unstable_IdlePriority,vu=null,dn=null;function yI(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(vu,t,void 0,(t.current.flags&128)===128)}catch{}}var nn=Math.clz32?Math.clz32:wI,_I=Math.log,vI=Math.LN2;function wI(t){return t>>>=0,t===0?32:31-(_I(t)/vI|0)|0}var Ba=64,$a=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var u=o&~s;u!==0?r=no(u):(i&=o,i!==0&&(r=no(i)))}else o=n&~s,o!==0?r=no(o):i!==0&&(r=no(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-nn(e),s=1<<n,r|=t[n],e&=~s;return r}function EI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function TI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-nn(i),u=1<<o,l=s[o];l===-1?(!(u&n)||u&r)&&(s[o]=EI(u,e)):l<=e&&(t.expiredLanes|=u),i&=~u}}function Vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function H_(){var t=Ba;return Ba<<=1,!(Ba&4194240)&&(Ba=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-nn(e),t[e]=n}function II(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-nn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Xd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-nn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var me=0;function q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var W_,Yd,K_,G_,Q_,Mh=!1,Ha=[],hr=null,dr=null,fr=null,Ao=new Map,Po=new Map,tr=[],kI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Um(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":fr=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function qi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=ia(e),e!==null&&Yd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function xI(t,e,n,r,s){switch(e){case"focusin":return hr=qi(hr,t,e,n,r,s),!0;case"dragenter":return dr=qi(dr,t,e,n,r,s),!0;case"mouseover":return fr=qi(fr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ao.set(i,qi(Ao.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Po.set(i,qi(Po.get(i)||null,t,e,n,r,s)),!0}return!1}function X_(t){var e=$r(t.target);if(e!==null){var n=hs(e);if(n!==null){if(e=n.tag,e===13){if(e=j_(n),e!==null){t.blockedOn=e,Q_(t.priority,function(){K_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nh=r,n.target.dispatchEvent(r),Nh=null}else return e=ia(n),e!==null&&Yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Bm(t,e,n){hl(t)&&n.delete(e)}function SI(){Mh=!1,hr!==null&&hl(hr)&&(hr=null),dr!==null&&hl(dr)&&(dr=null),fr!==null&&hl(fr)&&(fr=null),Ao.forEach(Bm),Po.forEach(Bm)}function Wi(t,e){t.blockedOn===e&&(t.blockedOn=null,Mh||(Mh=!0,zt.unstable_scheduleCallback(zt.unstable_NormalPriority,SI)))}function No(t){function e(s){return Wi(s,t)}if(0<Ha.length){Wi(Ha[0],t);for(var n=1;n<Ha.length;n++){var r=Ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&Wi(hr,t),dr!==null&&Wi(dr,t),fr!==null&&Wi(fr,t),Ao.forEach(e),Po.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)X_(n),n.blockedOn===null&&tr.shift()}var qs=Hn.ReactCurrentBatchConfig,Vl=!0;function RI(t,e,n,r){var s=me,i=qs.transition;qs.transition=null;try{me=1,Jd(t,e,n,r)}finally{me=s,qs.transition=i}}function CI(t,e,n,r){var s=me,i=qs.transition;qs.transition=null;try{me=4,Jd(t,e,n,r)}finally{me=s,qs.transition=i}}function Jd(t,e,n,r){if(Vl){var s=Lh(t,e,n,r);if(s===null)Bc(t,e,r,Ml,n),Um(t,r);else if(xI(s,t,e,n,r))r.stopPropagation();else if(Um(t,r),e&4&&-1<kI.indexOf(t)){for(;s!==null;){var i=ia(s);if(i!==null&&W_(i),i=Lh(t,e,n,r),i===null&&Bc(t,e,r,Ml,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Bc(t,e,r,null,n)}}var Ml=null;function Lh(t,e,n,r){if(Ml=null,t=Gd(r),t=$r(t),t!==null)if(e=hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=j_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function Y_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(mI()){case Qd:return 1;case B_:return 4;case Dl:case gI:return 16;case $_:return 536870912;default:return 16}default:return 16}}var lr=null,Zd=null,dl=null;function J_(){if(dl)return dl;var t,e=Zd,n=e.length,r,s="value"in lr?lr.value:lr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return dl=s.slice(t,1<r?1-r:void 0)}function fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function $m(){return!1}function Bt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?qa:$m,this.isPropagationStopped=$m,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ef=Bt(mi),sa=Ae({},mi,{view:0,detail:0}),AI=Bt(sa),Dc,Oc,Ki,wu=Ae({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ki&&(Ki&&t.type==="mousemove"?(Dc=t.screenX-Ki.screenX,Oc=t.screenY-Ki.screenY):Oc=Dc=0,Ki=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:Oc}}),Hm=Bt(wu),PI=Ae({},wu,{dataTransfer:0}),NI=Bt(PI),bI=Ae({},sa,{relatedTarget:0}),Vc=Bt(bI),DI=Ae({},mi,{animationName:0,elapsedTime:0,pseudoElement:0}),OI=Bt(DI),VI=Ae({},mi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MI=Bt(VI),LI=Ae({},mi,{data:0}),qm=Bt(LI),jI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=zI[t])?!!e[t]:!1}function tf(){return UI}var BI=Ae({},sa,{key:function(t){if(t.key){var e=jI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tf,charCode:function(t){return t.type==="keypress"?fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$I=Bt(BI),HI=Ae({},wu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Bt(HI),qI=Ae({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tf}),WI=Bt(qI),KI=Ae({},mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),GI=Bt(KI),QI=Ae({},wu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XI=Bt(QI),YI=[9,13,27,32],nf=Mn&&"CompositionEvent"in window,fo=null;Mn&&"documentMode"in document&&(fo=document.documentMode);var JI=Mn&&"TextEvent"in window&&!fo,Z_=Mn&&(!nf||fo&&8<fo&&11>=fo),Km=" ",Gm=!1;function ev(t,e){switch(t){case"keyup":return YI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ps=!1;function ZI(t,e){switch(t){case"compositionend":return tv(e);case"keypress":return e.which!==32?null:(Gm=!0,Km);case"textInput":return t=e.data,t===Km&&Gm?null:t;default:return null}}function ek(t,e){if(Ps)return t==="compositionend"||!nf&&ev(t,e)?(t=J_(),dl=Zd=lr=null,Ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Z_&&e.locale!=="ko"?null:e.data;default:return null}}var tk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!tk[t.type]:e==="textarea"}function nv(t,e,n,r){D_(r),e=Ll(e,"onChange"),0<e.length&&(n=new ef("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var po=null,bo=null;function nk(t){fv(t,0)}function Eu(t){var e=Ds(t);if(S_(e))return t}function rk(t,e){if(t==="change")return e}var rv=!1;if(Mn){var Mc;if(Mn){var Lc="oninput"in document;if(!Lc){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),Lc=typeof Xm.oninput=="function"}Mc=Lc}else Mc=!1;rv=Mc&&(!document.documentMode||9<document.documentMode)}function Ym(){po&&(po.detachEvent("onpropertychange",sv),bo=po=null)}function sv(t){if(t.propertyName==="value"&&Eu(bo)){var e=[];nv(e,bo,t,Gd(t)),L_(nk,e)}}function sk(t,e,n){t==="focusin"?(Ym(),po=e,bo=n,po.attachEvent("onpropertychange",sv)):t==="focusout"&&Ym()}function ik(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Eu(bo)}function ok(t,e){if(t==="click")return Eu(e)}function ak(t,e){if(t==="input"||t==="change")return Eu(e)}function lk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var sn=typeof Object.is=="function"?Object.is:lk;function Do(t,e){if(sn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!vh.call(e,s)||!sn(t[s],e[s]))return!1}return!0}function Jm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zm(t,e){var n=Jm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jm(n)}}function iv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?iv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ov(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function rf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function uk(t){var e=ov(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&iv(n.ownerDocument.documentElement,n)){if(r!==null&&rf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Zm(n,i);var o=Zm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ck=Mn&&"documentMode"in document&&11>=document.documentMode,Ns=null,jh=null,mo=null,Fh=!1;function eg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fh||Ns==null||Ns!==Pl(r)||(r=Ns,"selectionStart"in r&&rf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Do(mo,r)||(mo=r,r=Ll(jh,"onSelect"),0<r.length&&(e=new ef("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ns)))}function Wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},jc={},av={};Mn&&(av=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Tu(t){if(jc[t])return jc[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in av)return jc[t]=e[n];return t}var lv=Tu("animationend"),uv=Tu("animationiteration"),cv=Tu("animationstart"),hv=Tu("transitionend"),dv=new Map,tg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){dv.set(t,e),cs(e,[t])}for(var Fc=0;Fc<tg.length;Fc++){var zc=tg[Fc],hk=zc.toLowerCase(),dk=zc[0].toUpperCase()+zc.slice(1);Ar(hk,"on"+dk)}Ar(lv,"onAnimationEnd");Ar(uv,"onAnimationIteration");Ar(cv,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(hv,"onTransitionEnd");Js("onMouseEnter",["mouseout","mouseover"]);Js("onMouseLeave",["mouseout","mouseover"]);Js("onPointerEnter",["pointerout","pointerover"]);Js("onPointerLeave",["pointerout","pointerover"]);cs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cs("onBeforeInput",["compositionend","keypress","textInput","paste"]);cs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function ng(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,hI(r,e,void 0,t),t.currentTarget=null}function fv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var u=r[o],l=u.instance,h=u.currentTarget;if(u=u.listener,l!==i&&s.isPropagationStopped())break e;ng(s,u,h),i=l}else for(o=0;o<r.length;o++){if(u=r[o],l=u.instance,h=u.currentTarget,u=u.listener,l!==i&&s.isPropagationStopped())break e;ng(s,u,h),i=l}}}if(bl)throw t=Oh,bl=!1,Oh=null,t}function we(t,e){var n=e[Hh];n===void 0&&(n=e[Hh]=new Set);var r=t+"__bubble";n.has(r)||(pv(e,t,2,!1),n.add(r))}function Uc(t,e,n){var r=0;e&&(r|=4),pv(n,t,r,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[Ka]){t[Ka]=!0,E_.forEach(function(n){n!=="selectionchange"&&(fk.has(n)||Uc(n,!1,t),Uc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,Uc("selectionchange",!1,e))}}function pv(t,e,n,r){switch(Y_(e)){case 1:var s=RI;break;case 4:s=CI;break;default:s=Jd}n=s.bind(null,e,n,t),s=void 0,!Dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Bc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var u=r.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;u!==null;){if(o=$r(u),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}u=u.parentNode}}r=r.return}L_(function(){var h=i,p=Gd(n),m=[];e:{var g=dv.get(t);if(g!==void 0){var E=ef,k=t;switch(t){case"keypress":if(fl(n)===0)break e;case"keydown":case"keyup":E=$I;break;case"focusin":k="focus",E=Vc;break;case"focusout":k="blur",E=Vc;break;case"beforeblur":case"afterblur":E=Vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=NI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=WI;break;case lv:case uv:case cv:E=OI;break;case hv:E=GI;break;case"scroll":E=AI;break;case"wheel":E=XI;break;case"copy":case"cut":case"paste":E=MI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Wm}var P=(e&4)!==0,D=!P&&t==="scroll",x=P?g!==null?g+"Capture":null:g;P=[];for(var v=h,C;v!==null;){C=v;var b=C.stateNode;if(C.tag===5&&b!==null&&(C=b,x!==null&&(b=Co(v,x),b!=null&&P.push(Vo(v,b,C)))),D)break;v=v.return}0<P.length&&(g=new E(g,k,null,n,p),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",g&&n!==Nh&&(k=n.relatedTarget||n.fromElement)&&($r(k)||k[Ln]))break e;if((E||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,E?(k=n.relatedTarget||n.toElement,E=h,k=k?$r(k):null,k!==null&&(D=hs(k),k!==D||k.tag!==5&&k.tag!==6)&&(k=null)):(E=null,k=h),E!==k)){if(P=Hm,b="onMouseLeave",x="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(P=Wm,b="onPointerLeave",x="onPointerEnter",v="pointer"),D=E==null?g:Ds(E),C=k==null?g:Ds(k),g=new P(b,v+"leave",E,n,p),g.target=D,g.relatedTarget=C,b=null,$r(p)===h&&(P=new P(x,v+"enter",k,n,p),P.target=C,P.relatedTarget=D,b=P),D=b,E&&k)t:{for(P=E,x=k,v=0,C=P;C;C=Is(C))v++;for(C=0,b=x;b;b=Is(b))C++;for(;0<v-C;)P=Is(P),v--;for(;0<C-v;)x=Is(x),C--;for(;v--;){if(P===x||x!==null&&P===x.alternate)break t;P=Is(P),x=Is(x)}P=null}else P=null;E!==null&&rg(m,g,E,P,!1),k!==null&&D!==null&&rg(m,D,k,P,!0)}}e:{if(g=h?Ds(h):window,E=g.nodeName&&g.nodeName.toLowerCase(),E==="select"||E==="input"&&g.type==="file")var z=rk;else if(Qm(g))if(rv)z=ak;else{z=ik;var V=sk}else(E=g.nodeName)&&E.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=ok);if(z&&(z=z(t,h))){nv(m,z,n,p);break e}V&&V(t,g,h),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&Sh(g,"number",g.value)}switch(V=h?Ds(h):window,t){case"focusin":(Qm(V)||V.contentEditable==="true")&&(Ns=V,jh=h,mo=null);break;case"focusout":mo=jh=Ns=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,eg(m,n,p);break;case"selectionchange":if(ck)break;case"keydown":case"keyup":eg(m,n,p)}var w;if(nf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ps?ev(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Z_&&n.locale!=="ko"&&(Ps||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ps&&(w=J_()):(lr=p,Zd="value"in lr?lr.value:lr.textContent,Ps=!0)),V=Ll(h,y),0<V.length&&(y=new qm(y,t,null,n,p),m.push({event:y,listeners:V}),w?y.data=w:(w=tv(n),w!==null&&(y.data=w)))),(w=JI?ZI(t,n):ek(t,n))&&(h=Ll(h,"onBeforeInput"),0<h.length&&(p=new qm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:h}),p.data=w))}fv(m,e)})}function Vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ll(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Co(t,n),i!=null&&r.unshift(Vo(t,i,s)),i=Co(t,e),i!=null&&r.push(Vo(t,i,s))),t=t.return}return r}function Is(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var u=n,l=u.alternate,h=u.stateNode;if(l!==null&&l===r)break;u.tag===5&&h!==null&&(u=h,s?(l=Co(n,i),l!=null&&o.unshift(Vo(n,l,u))):s||(l=Co(n,i),l!=null&&o.push(Vo(n,l,u)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pk=/\r\n?/g,mk=/\u0000|\uFFFD/g;function sg(t){return(typeof t=="string"?t:""+t).replace(pk,`
`).replace(mk,"")}function Ga(t,e,n){if(e=sg(e),sg(t)!==e&&n)throw Error(F(425))}function jl(){}var zh=null,Uh=null;function Bh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $h=typeof setTimeout=="function"?setTimeout:void 0,gk=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,yk=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(t){return ig.resolve(null).then(t).catch(_k)}:$h;function _k(t){setTimeout(function(){throw t})}function $c(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);No(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gi=Math.random().toString(36).slice(2),cn="__reactFiber$"+gi,Mo="__reactProps$"+gi,Ln="__reactContainer$"+gi,Hh="__reactEvents$"+gi,vk="__reactListeners$"+gi,wk="__reactHandles$"+gi;function $r(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ln]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=og(t);t!==null;){if(n=t[cn])return n;t=og(t)}return e}t=n,n=t.parentNode}return null}function ia(t){return t=t[cn]||t[Ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Iu(t){return t[Mo]||null}var qh=[],Os=-1;function Pr(t){return{current:t}}function Ee(t){0>Os||(t.current=qh[Os],qh[Os]=null,Os--)}function _e(t,e){Os++,qh[Os]=t.current,t.current=e}var kr={},pt=Pr(kr),Ct=Pr(!1),Jr=kr;function Zs(t,e){var n=t.type.contextTypes;if(!n)return kr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function At(t){return t=t.childContextTypes,t!=null}function Fl(){Ee(Ct),Ee(pt)}function ag(t,e,n){if(pt.current!==kr)throw Error(F(168));_e(pt,e),_e(Ct,n)}function mv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,sI(t)||"Unknown",s));return Ae({},n,r)}function zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,Jr=pt.current,_e(pt,t),_e(Ct,Ct.current),!0}function lg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=mv(t,e,Jr),r.__reactInternalMemoizedMergedChildContext=t,Ee(Ct),Ee(pt),_e(pt,t)):Ee(Ct),_e(Ct,n)}var Rn=null,ku=!1,Hc=!1;function gv(t){Rn===null?Rn=[t]:Rn.push(t)}function Ek(t){ku=!0,gv(t)}function Nr(){if(!Hc&&Rn!==null){Hc=!0;var t=0,e=me;try{var n=Rn;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Rn=null,ku=!1}catch(s){throw Rn!==null&&(Rn=Rn.slice(t+1)),U_(Qd,Nr),s}finally{me=e,Hc=!1}}return null}var Vs=[],Ms=0,Ul=null,Bl=0,Ht=[],qt=0,Zr=null,Cn=1,An="";function Fr(t,e){Vs[Ms++]=Bl,Vs[Ms++]=Ul,Ul=t,Bl=e}function yv(t,e,n){Ht[qt++]=Cn,Ht[qt++]=An,Ht[qt++]=Zr,Zr=t;var r=Cn;t=An;var s=32-nn(r)-1;r&=~(1<<s),n+=1;var i=32-nn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Cn=1<<32-nn(e)+s|n<<s|r,An=i+t}else Cn=1<<i|n<<s|r,An=t}function sf(t){t.return!==null&&(Fr(t,1),yv(t,1,0))}function of(t){for(;t===Ul;)Ul=Vs[--Ms],Vs[Ms]=null,Bl=Vs[--Ms],Vs[Ms]=null;for(;t===Zr;)Zr=Ht[--qt],Ht[qt]=null,An=Ht[--qt],Ht[qt]=null,Cn=Ht[--qt],Ht[qt]=null}var Ft=null,Mt=null,xe=!1,tn=null;function _v(t,e){var n=Kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ug(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ft=t,Mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Zr!==null?{id:Cn,overflow:An}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ft=t,Mt=null,!0):!1;default:return!1}}function Wh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Kh(t){if(xe){var e=Mt;if(e){var n=e;if(!ug(t,e)){if(Wh(t))throw Error(F(418));e=pr(n.nextSibling);var r=Ft;e&&ug(t,e)?_v(r,n):(t.flags=t.flags&-4097|2,xe=!1,Ft=t)}}else{if(Wh(t))throw Error(F(418));t.flags=t.flags&-4097|2,xe=!1,Ft=t}}}function cg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ft=t}function Qa(t){if(t!==Ft)return!1;if(!xe)return cg(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Bh(t.type,t.memoizedProps)),e&&(e=Mt)){if(Wh(t))throw vv(),Error(F(418));for(;e;)_v(t,e),e=pr(e.nextSibling)}if(cg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mt=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mt=null}}else Mt=Ft?pr(t.stateNode.nextSibling):null;return!0}function vv(){for(var t=Mt;t;)t=pr(t.nextSibling)}function ei(){Mt=Ft=null,xe=!1}function af(t){tn===null?tn=[t]:tn.push(t)}var Tk=Hn.ReactCurrentBatchConfig;function Gi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var u=s.refs;o===null?delete u[i]:u[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Xa(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hg(t){var e=t._init;return e(t._payload)}function wv(t){function e(x,v){if(t){var C=x.deletions;C===null?(x.deletions=[v],x.flags|=16):C.push(v)}}function n(x,v){if(!t)return null;for(;v!==null;)e(x,v),v=v.sibling;return null}function r(x,v){for(x=new Map;v!==null;)v.key!==null?x.set(v.key,v):x.set(v.index,v),v=v.sibling;return x}function s(x,v){return x=_r(x,v),x.index=0,x.sibling=null,x}function i(x,v,C){return x.index=C,t?(C=x.alternate,C!==null?(C=C.index,C<v?(x.flags|=2,v):C):(x.flags|=2,v)):(x.flags|=1048576,v)}function o(x){return t&&x.alternate===null&&(x.flags|=2),x}function u(x,v,C,b){return v===null||v.tag!==6?(v=Yc(C,x.mode,b),v.return=x,v):(v=s(v,C),v.return=x,v)}function l(x,v,C,b){var z=C.type;return z===As?p(x,v,C.props.children,b,C.key):v!==null&&(v.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Zn&&hg(z)===v.type)?(b=s(v,C.props),b.ref=Gi(x,v,C),b.return=x,b):(b=wl(C.type,C.key,C.props,null,x.mode,b),b.ref=Gi(x,v,C),b.return=x,b)}function h(x,v,C,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==C.containerInfo||v.stateNode.implementation!==C.implementation?(v=Jc(C,x.mode,b),v.return=x,v):(v=s(v,C.children||[]),v.return=x,v)}function p(x,v,C,b,z){return v===null||v.tag!==7?(v=Gr(C,x.mode,b,z),v.return=x,v):(v=s(v,C),v.return=x,v)}function m(x,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Yc(""+v,x.mode,C),v.return=x,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Fa:return C=wl(v.type,v.key,v.props,null,x.mode,C),C.ref=Gi(x,null,v),C.return=x,C;case Cs:return v=Jc(v,x.mode,C),v.return=x,v;case Zn:var b=v._init;return m(x,b(v._payload),C)}if(to(v)||$i(v))return v=Gr(v,x.mode,C,null),v.return=x,v;Xa(x,v)}return null}function g(x,v,C,b){var z=v!==null?v.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return z!==null?null:u(x,v,""+C,b);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Fa:return C.key===z?l(x,v,C,b):null;case Cs:return C.key===z?h(x,v,C,b):null;case Zn:return z=C._init,g(x,v,z(C._payload),b)}if(to(C)||$i(C))return z!==null?null:p(x,v,C,b,null);Xa(x,C)}return null}function E(x,v,C,b,z){if(typeof b=="string"&&b!==""||typeof b=="number")return x=x.get(C)||null,u(v,x,""+b,z);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fa:return x=x.get(b.key===null?C:b.key)||null,l(v,x,b,z);case Cs:return x=x.get(b.key===null?C:b.key)||null,h(v,x,b,z);case Zn:var V=b._init;return E(x,v,C,V(b._payload),z)}if(to(b)||$i(b))return x=x.get(C)||null,p(v,x,b,z,null);Xa(v,b)}return null}function k(x,v,C,b){for(var z=null,V=null,w=v,y=v=0,I=null;w!==null&&y<C.length;y++){w.index>y?(I=w,w=null):I=w.sibling;var S=g(x,w,C[y],b);if(S===null){w===null&&(w=I);break}t&&w&&S.alternate===null&&e(x,w),v=i(S,v,y),V===null?z=S:V.sibling=S,V=S,w=I}if(y===C.length)return n(x,w),xe&&Fr(x,y),z;if(w===null){for(;y<C.length;y++)w=m(x,C[y],b),w!==null&&(v=i(w,v,y),V===null?z=w:V.sibling=w,V=w);return xe&&Fr(x,y),z}for(w=r(x,w);y<C.length;y++)I=E(w,x,y,C[y],b),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),v=i(I,v,y),V===null?z=I:V.sibling=I,V=I);return t&&w.forEach(function(A){return e(x,A)}),xe&&Fr(x,y),z}function P(x,v,C,b){var z=$i(C);if(typeof z!="function")throw Error(F(150));if(C=z.call(C),C==null)throw Error(F(151));for(var V=z=null,w=v,y=v=0,I=null,S=C.next();w!==null&&!S.done;y++,S=C.next()){w.index>y?(I=w,w=null):I=w.sibling;var A=g(x,w,S.value,b);if(A===null){w===null&&(w=I);break}t&&w&&A.alternate===null&&e(x,w),v=i(A,v,y),V===null?z=A:V.sibling=A,V=A,w=I}if(S.done)return n(x,w),xe&&Fr(x,y),z;if(w===null){for(;!S.done;y++,S=C.next())S=m(x,S.value,b),S!==null&&(v=i(S,v,y),V===null?z=S:V.sibling=S,V=S);return xe&&Fr(x,y),z}for(w=r(x,w);!S.done;y++,S=C.next())S=E(w,x,y,S.value,b),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?y:S.key),v=i(S,v,y),V===null?z=S:V.sibling=S,V=S);return t&&w.forEach(function(R){return e(x,R)}),xe&&Fr(x,y),z}function D(x,v,C,b){if(typeof C=="object"&&C!==null&&C.type===As&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case Fa:e:{for(var z=C.key,V=v;V!==null;){if(V.key===z){if(z=C.type,z===As){if(V.tag===7){n(x,V.sibling),v=s(V,C.props.children),v.return=x,x=v;break e}}else if(V.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===Zn&&hg(z)===V.type){n(x,V.sibling),v=s(V,C.props),v.ref=Gi(x,V,C),v.return=x,x=v;break e}n(x,V);break}else e(x,V);V=V.sibling}C.type===As?(v=Gr(C.props.children,x.mode,b,C.key),v.return=x,x=v):(b=wl(C.type,C.key,C.props,null,x.mode,b),b.ref=Gi(x,v,C),b.return=x,x=b)}return o(x);case Cs:e:{for(V=C.key;v!==null;){if(v.key===V)if(v.tag===4&&v.stateNode.containerInfo===C.containerInfo&&v.stateNode.implementation===C.implementation){n(x,v.sibling),v=s(v,C.children||[]),v.return=x,x=v;break e}else{n(x,v);break}else e(x,v);v=v.sibling}v=Jc(C,x.mode,b),v.return=x,x=v}return o(x);case Zn:return V=C._init,D(x,v,V(C._payload),b)}if(to(C))return k(x,v,C,b);if($i(C))return P(x,v,C,b);Xa(x,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,v!==null&&v.tag===6?(n(x,v.sibling),v=s(v,C),v.return=x,x=v):(n(x,v),v=Yc(C,x.mode,b),v.return=x,x=v),o(x)):n(x,v)}return D}var ti=wv(!0),Ev=wv(!1),$l=Pr(null),Hl=null,Ls=null,lf=null;function uf(){lf=Ls=Hl=null}function cf(t){var e=$l.current;Ee($l),t._currentValue=e}function Gh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ws(t,e){Hl=t,lf=Ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Rt=!0),t.firstContext=null)}function Qt(t){var e=t._currentValue;if(lf!==t)if(t={context:t,memoizedValue:e,next:null},Ls===null){if(Hl===null)throw Error(F(308));Ls=t,Hl.dependencies={lanes:0,firstContext:t}}else Ls=Ls.next=t;return e}var Hr=null;function hf(t){Hr===null?Hr=[t]:Hr.push(t)}function Tv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,hf(e)):(n.next=s.next,s.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function df(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function On(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ce&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,jn(t,n)}return s=r.interleaved,s===null?(e.next=e,hf(r)):(e.next=s.next,s.next=e),r.interleaved=e,jn(t,n)}function pl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}function dg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ql(t,e,n,r){var s=t.updateQueue;er=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var l=u,h=l.next;l.next=null,o===null?i=h:o.next=h,o=l;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==o&&(u===null?p.firstBaseUpdate=h:u.next=h,p.lastBaseUpdate=l))}if(i!==null){var m=s.baseState;o=0,p=h=l=null,u=i;do{var g=u.lane,E=u.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var k=t,P=u;switch(g=e,E=n,P.tag){case 1:if(k=P.payload,typeof k=="function"){m=k.call(E,m,g);break e}m=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=P.payload,g=typeof k=="function"?k.call(E,m,g):k,g==null)break e;m=Ae({},m,g);break e;case 2:er=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[u]:g.push(u))}else E={eventTime:E,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(h=p=E,l=m):p=p.next=E,o|=g;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;g=u,u=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(l=m),s.baseState=l,s.firstBaseUpdate=h,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);ts|=o,t.lanes=o,t.memoizedState=m}}function fg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var oa={},fn=Pr(oa),Lo=Pr(oa),jo=Pr(oa);function qr(t){if(t===oa)throw Error(F(174));return t}function ff(t,e){switch(_e(jo,e),_e(Lo,t),_e(fn,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ch(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ch(e,t)}Ee(fn),_e(fn,e)}function ni(){Ee(fn),Ee(Lo),Ee(jo)}function kv(t){qr(jo.current);var e=qr(fn.current),n=Ch(e,t.type);e!==n&&(_e(Lo,t),_e(fn,n))}function pf(t){Lo.current===t&&(Ee(fn),Ee(Lo))}var Re=Pr(0);function Wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function mf(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var ml=Hn.ReactCurrentDispatcher,Wc=Hn.ReactCurrentBatchConfig,es=0,Ce=null,Be=null,Ge=null,Kl=!1,go=!1,Fo=0,Ik=0;function lt(){throw Error(F(321))}function gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!sn(t[n],e[n]))return!1;return!0}function yf(t,e,n,r,s,i){if(es=i,Ce=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ml.current=t===null||t.memoizedState===null?Rk:Ck,t=n(r,s),go){i=0;do{if(go=!1,Fo=0,25<=i)throw Error(F(301));i+=1,Ge=Be=null,e.updateQueue=null,ml.current=Ak,t=n(r,s)}while(go)}if(ml.current=Gl,e=Be!==null&&Be.next!==null,es=0,Ge=Be=Ce=null,Kl=!1,e)throw Error(F(300));return t}function _f(){var t=Fo!==0;return Fo=0,t}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Ce.memoizedState=Ge=t:Ge=Ge.next=t,Ge}function Xt(){if(Be===null){var t=Ce.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=Ge===null?Ce.memoizedState:Ge.next;if(e!==null)Ge=e,Be=t;else{if(t===null)throw Error(F(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},Ge===null?Ce.memoizedState=Ge=t:Ge=Ge.next=t}return Ge}function zo(t,e){return typeof e=="function"?e(t):e}function Kc(t){var e=Xt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Be,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var u=o=null,l=null,h=i;do{var p=h.lane;if((es&p)===p)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(u=l=m,o=r):l=l.next=m,Ce.lanes|=p,ts|=p}h=h.next}while(h!==null&&h!==i);l===null?o=r:l.next=u,sn(r,e.memoizedState)||(Rt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ce.lanes|=i,ts|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Xt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);sn(i,e.memoizedState)||(Rt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function xv(){}function Sv(t,e){var n=Ce,r=Xt(),s=e(),i=!sn(r.memoizedState,s);if(i&&(r.memoizedState=s,Rt=!0),r=r.queue,vf(Av.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Uo(9,Cv.bind(null,n,r,s,e),void 0,null),Qe===null)throw Error(F(349));es&30||Rv(n,e,s)}return s}function Rv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Cv(t,e,n,r){e.value=n,e.getSnapshot=r,Pv(e)&&Nv(t)}function Av(t,e,n){return n(function(){Pv(e)&&Nv(t)})}function Pv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!sn(t,n)}catch{return!0}}function Nv(t){var e=jn(t,1);e!==null&&rn(e,t,1,-1)}function pg(t){var e=un();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=Sk.bind(null,Ce,t),[e.memoizedState,t]}function Uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ce.updateQueue,e===null?(e={lastEffect:null,stores:null},Ce.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bv(){return Xt().memoizedState}function gl(t,e,n,r){var s=un();Ce.flags|=t,s.memoizedState=Uo(1|e,n,void 0,r===void 0?null:r)}function xu(t,e,n,r){var s=Xt();r=r===void 0?null:r;var i=void 0;if(Be!==null){var o=Be.memoizedState;if(i=o.destroy,r!==null&&gf(r,o.deps)){s.memoizedState=Uo(e,n,i,r);return}}Ce.flags|=t,s.memoizedState=Uo(1|e,n,i,r)}function mg(t,e){return gl(8390656,8,t,e)}function vf(t,e){return xu(2048,8,t,e)}function Dv(t,e){return xu(4,2,t,e)}function Ov(t,e){return xu(4,4,t,e)}function Vv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Mv(t,e,n){return n=n!=null?n.concat([t]):null,xu(4,4,Vv.bind(null,e,t),n)}function wf(){}function Lv(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function jv(t,e){var n=Xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Fv(t,e,n){return es&21?(sn(n,e)||(n=H_(),Ce.lanes|=n,ts|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Rt=!0),t.memoizedState=n)}function kk(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Wc.transition;Wc.transition={};try{t(!1),e()}finally{me=n,Wc.transition=r}}function zv(){return Xt().memoizedState}function xk(t,e,n){var r=yr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Uv(t))Bv(e,n);else if(n=Tv(t,e,n,r),n!==null){var s=vt();rn(n,t,r,s),$v(n,e,r)}}function Sk(t,e,n){var r=yr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uv(t))Bv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,u=i(o,n);if(s.hasEagerState=!0,s.eagerState=u,sn(u,o)){var l=e.interleaved;l===null?(s.next=s,hf(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=Tv(t,e,s,r),n!==null&&(s=vt(),rn(n,t,r,s),$v(n,e,r))}}function Uv(t){var e=t.alternate;return t===Ce||e!==null&&e===Ce}function Bv(t,e){go=Kl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function $v(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Xd(t,n)}}var Gl={readContext:Qt,useCallback:lt,useContext:lt,useEffect:lt,useImperativeHandle:lt,useInsertionEffect:lt,useLayoutEffect:lt,useMemo:lt,useReducer:lt,useRef:lt,useState:lt,useDebugValue:lt,useDeferredValue:lt,useTransition:lt,useMutableSource:lt,useSyncExternalStore:lt,useId:lt,unstable_isNewReconciler:!1},Rk={readContext:Qt,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:Qt,useEffect:mg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,gl(4194308,4,Vv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return gl(4194308,4,t,e)},useInsertionEffect:function(t,e){return gl(4,2,t,e)},useMemo:function(t,e){var n=un();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=un();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=xk.bind(null,Ce,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:pg,useDebugValue:wf,useDeferredValue:function(t){return un().memoizedState=t},useTransition:function(){var t=pg(!1),e=t[0];return t=kk.bind(null,t[1]),un().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ce,s=un();if(xe){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Qe===null)throw Error(F(349));es&30||Rv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,mg(Av.bind(null,r,i,t),[t]),r.flags|=2048,Uo(9,Cv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=un(),e=Qe.identifierPrefix;if(xe){var n=An,r=Cn;n=(r&~(1<<32-nn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ik++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ck={readContext:Qt,useCallback:Lv,useContext:Qt,useEffect:vf,useImperativeHandle:Mv,useInsertionEffect:Dv,useLayoutEffect:Ov,useMemo:jv,useReducer:Kc,useRef:bv,useState:function(){return Kc(zo)},useDebugValue:wf,useDeferredValue:function(t){var e=Xt();return Fv(e,Be.memoizedState,t)},useTransition:function(){var t=Kc(zo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:Sv,useId:zv,unstable_isNewReconciler:!1},Ak={readContext:Qt,useCallback:Lv,useContext:Qt,useEffect:vf,useImperativeHandle:Mv,useInsertionEffect:Dv,useLayoutEffect:Ov,useMemo:jv,useReducer:Gc,useRef:bv,useState:function(){return Gc(zo)},useDebugValue:wf,useDeferredValue:function(t){var e=Xt();return Be===null?e.memoizedState=t:Fv(e,Be.memoizedState,t)},useTransition:function(){var t=Gc(zo)[0],e=Xt().memoizedState;return[t,e]},useMutableSource:xv,useSyncExternalStore:Sv,useId:zv,unstable_isNewReconciler:!1};function Zt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Qh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Su={isMounted:function(t){return(t=t._reactInternals)?hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=vt(),s=yr(t),i=On(r,s);i.payload=e,n!=null&&(i.callback=n),e=mr(t,i,s),e!==null&&(rn(e,t,s,r),pl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=vt(),s=yr(t),i=On(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=mr(t,i,s),e!==null&&(rn(e,t,s,r),pl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vt(),r=yr(t),s=On(n,r);s.tag=2,e!=null&&(s.callback=e),e=mr(t,s,r),e!==null&&(rn(e,t,r,n),pl(e,t,r))}};function gg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Do(n,r)||!Do(s,i):!0}function Hv(t,e,n){var r=!1,s=kr,i=e.contextType;return typeof i=="object"&&i!==null?i=Qt(i):(s=At(e)?Jr:pt.current,r=e.contextTypes,i=(r=r!=null)?Zs(t,s):kr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Su,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function yg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Su.enqueueReplaceState(e,e.state,null)}function Xh(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},df(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Qt(i):(i=At(e)?Jr:pt.current,s.context=Zs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Qh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Su.enqueueReplaceState(s,s.state,null),ql(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ri(t,e){try{var n="",r=e;do n+=rI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Yh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Pk=typeof WeakMap=="function"?WeakMap:Map;function qv(t,e,n){n=On(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Xl||(Xl=!0,ad=r),Yh(t,e)},n}function Wv(t,e,n){n=On(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Yh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Yh(t,e),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _g(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Pk;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Hk.bind(null,t,e,n),e.then(t,t))}function vg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function wg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=On(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var Nk=Hn.ReactCurrentOwner,Rt=!1;function _t(t,e,n,r){e.child=t===null?Ev(e,null,n,r):ti(e,t.child,n,r)}function Eg(t,e,n,r,s){n=n.render;var i=e.ref;return Ws(e,s),r=yf(t,e,n,r,i,s),n=_f(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Fn(t,e,s)):(xe&&n&&sf(e),e.flags|=1,_t(t,e,r,s),e.child)}function Tg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Cf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Kv(t,e,i,r,s)):(t=wl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Do,n(o,r)&&t.ref===e.ref)return Fn(t,e,s)}return e.flags|=1,t=_r(i,r),t.ref=e.ref,t.return=e,e.child=t}function Kv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Do(i,r)&&t.ref===e.ref)if(Rt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Rt=!0);else return e.lanes=t.lanes,Fn(t,e,s)}return Jh(t,e,n,r,s)}function Gv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(Fs,Vt),Vt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(Fs,Vt),Vt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,_e(Fs,Vt),Vt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,_e(Fs,Vt),Vt|=r;return _t(t,e,s,n),e.child}function Qv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Jh(t,e,n,r,s){var i=At(n)?Jr:pt.current;return i=Zs(e,i),Ws(e,s),n=yf(t,e,n,r,i,s),r=_f(),t!==null&&!Rt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Fn(t,e,s)):(xe&&r&&sf(e),e.flags|=1,_t(t,e,n,s),e.child)}function Ig(t,e,n,r,s){if(At(n)){var i=!0;zl(e)}else i=!1;if(Ws(e,s),e.stateNode===null)yl(t,e),Hv(e,n,r),Xh(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,u=e.memoizedProps;o.props=u;var l=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Qt(h):(h=At(n)?Jr:pt.current,h=Zs(e,h));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==r||l!==h)&&yg(e,o,r,h),er=!1;var g=e.memoizedState;o.state=g,ql(e,r,o,s),l=e.memoizedState,u!==r||g!==l||Ct.current||er?(typeof p=="function"&&(Qh(e,n,p,r),l=e.memoizedState),(u=er||gg(e,n,u,r,g,l,h))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=h,r=u):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iv(t,e),u=e.memoizedProps,h=e.type===e.elementType?u:Zt(e.type,u),o.props=h,m=e.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qt(l):(l=At(n)?Jr:pt.current,l=Zs(e,l));var E=n.getDerivedStateFromProps;(p=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(u!==m||g!==l)&&yg(e,o,r,l),er=!1,g=e.memoizedState,o.state=g,ql(e,r,o,s);var k=e.memoizedState;u!==m||g!==k||Ct.current||er?(typeof E=="function"&&(Qh(e,n,E,r),k=e.memoizedState),(h=er||gg(e,n,h,r,g,k,l)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=l,r=h):(typeof o.componentDidUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Zh(t,e,n,r,i,s)}function Zh(t,e,n,r,s,i){Qv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&lg(e,n,!1),Fn(t,e,i);r=e.stateNode,Nk.current=e;var u=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ti(e,t.child,null,i),e.child=ti(e,null,u,i)):_t(t,e,u,i),e.memoizedState=r.state,s&&lg(e,n,!0),e.child}function Xv(t){var e=t.stateNode;e.pendingContext?ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ag(t,e.context,!1),ff(t,e.containerInfo)}function kg(t,e,n,r,s){return ei(),af(s),e.flags|=256,_t(t,e,n,r),e.child}var ed={dehydrated:null,treeContext:null,retryLane:0};function td(t){return{baseLanes:t,cachePool:null,transitions:null}}function Yv(t,e,n){var r=e.pendingProps,s=Re.current,i=!1,o=(e.flags&128)!==0,u;if((u=o)||(u=t!==null&&t.memoizedState===null?!1:(s&2)!==0),u?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),_e(Re,s&1),t===null)return Kh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Au(o,r,0,null),t=Gr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=td(n),e.memoizedState=ed,t):Ef(e,o));if(s=t.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return bk(t,e,o,r,u,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,u=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=_r(s,l),r.subtreeFlags=s.subtreeFlags&14680064),u!==null?i=_r(u,i):(i=Gr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?td(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=ed,r}return i=t.child,t=i.sibling,r=_r(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Ef(t,e){return e=Au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ya(t,e,n,r){return r!==null&&af(r),ti(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bk(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Qc(Error(F(422))),Ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Au({mode:"visible",children:r.children},s,0,null),i=Gr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ti(e,t.child,null,o),e.child.memoizedState=td(o),e.memoizedState=ed,i);if(!(e.mode&1))return Ya(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(F(419)),r=Qc(i,r,void 0),Ya(t,e,o,r)}if(u=(o&t.childLanes)!==0,Rt||u){if(r=Qe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,jn(t,s),rn(r,t,s,-1))}return Rf(),r=Qc(Error(F(421))),Ya(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=qk.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Mt=pr(s.nextSibling),Ft=e,xe=!0,tn=null,t!==null&&(Ht[qt++]=Cn,Ht[qt++]=An,Ht[qt++]=Zr,Cn=t.id,An=t.overflow,Zr=e),e=Ef(e,r.children),e.flags|=4096,e)}function xg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Gh(t.return,e,n)}function Xc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Jv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(_t(t,e,r.children,n),r=Re.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xg(t,n,e);else if(t.tag===19)xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(Re,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Wl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Xc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Wl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Xc(e,!0,n,null,i);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function yl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ts|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=_r(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=_r(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dk(t,e,n){switch(e.tag){case 3:Xv(e),ei();break;case 5:kv(e);break;case 1:At(e.type)&&zl(e);break;case 4:ff(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;_e($l,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(Re,Re.current&1),e.flags|=128,null):n&e.child.childLanes?Yv(t,e,n):(_e(Re,Re.current&1),t=Fn(t,e,n),t!==null?t.sibling:null);_e(Re,Re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Jv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),_e(Re,Re.current),r)break;return null;case 22:case 23:return e.lanes=0,Gv(t,e,n)}return Fn(t,e,n)}var Zv,nd,e0,t0;Zv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nd=function(){};e0=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,qr(fn.current);var i=null;switch(n){case"input":s=kh(t,s),r=kh(t,r),i=[];break;case"select":s=Ae({},s,{value:void 0}),r=Ae({},r,{value:void 0}),i=[];break;case"textarea":s=Rh(t,s),r=Rh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=jl)}Ah(n,r);var o;n=null;for(h in s)if(!r.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var u=s[h];for(o in u)u.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(So.hasOwnProperty(h)?i||(i=[]):(i=i||[]).push(h,null));for(h in r){var l=r[h];if(u=s!=null?s[h]:void 0,r.hasOwnProperty(h)&&l!==u&&(l!=null||u!=null))if(h==="style")if(u){for(o in u)!u.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&u[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,u=u?u.__html:void 0,l!=null&&u!==l&&(i=i||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(So.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&we("scroll",t),i||u===l||(i=[])):(i=i||[]).push(h,l))}n&&(i=i||[]).push("style",n);var h=i;(e.updateQueue=h)&&(e.flags|=4)}};t0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qi(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ut(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ok(t,e,n){var r=e.pendingProps;switch(of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(e),null;case 1:return At(e.type)&&Fl(),ut(e),null;case 3:return r=e.stateNode,ni(),Ee(Ct),Ee(pt),mf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,tn!==null&&(cd(tn),tn=null))),nd(t,e),ut(e),null;case 5:pf(e);var s=qr(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)e0(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return ut(e),null}if(t=qr(fn.current),Qa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[cn]=e,r[Mo]=i,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(s=0;s<ro.length;s++)we(ro[s],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Om(r,i),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},we("invalid",r);break;case"textarea":Mm(r,i),we("invalid",r)}Ah(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var u=i[o];o==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Ga(r.textContent,u,t),s=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Ga(r.textContent,u,t),s=["children",""+u]):So.hasOwnProperty(o)&&u!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":za(r),Vm(r,i,!0);break;case"textarea":za(r),Lm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=jl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=A_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Mo]=r,Zv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ph(n,r),n){case"dialog":we("cancel",t),we("close",t),s=r;break;case"iframe":case"object":case"embed":we("load",t),s=r;break;case"video":case"audio":for(s=0;s<ro.length;s++)we(ro[s],t);s=r;break;case"source":we("error",t),s=r;break;case"img":case"image":case"link":we("error",t),we("load",t),s=r;break;case"details":we("toggle",t),s=r;break;case"input":Om(t,r),s=kh(t,r),we("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ae({},r,{value:void 0}),we("invalid",t);break;case"textarea":Mm(t,r),s=Rh(t,r),we("invalid",t);break;default:s=r}Ah(n,s),u=s;for(i in u)if(u.hasOwnProperty(i)){var l=u[i];i==="style"?b_(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&P_(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ro(t,l):typeof l=="number"&&Ro(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(So.hasOwnProperty(i)?l!=null&&i==="onScroll"&&we("scroll",t):l!=null&&Hd(t,i,l,o))}switch(n){case"input":za(t),Vm(t,r,!1);break;case"textarea":za(t),Lm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ir(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Bs(t,!!r.multiple,i,!1):r.defaultValue!=null&&Bs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=jl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ut(e),null;case 6:if(t&&e.stateNode!=null)t0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=qr(jo.current),qr(fn.current),Qa(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(i=r.nodeValue!==n)&&(t=Ft,t!==null))switch(t.tag){case 3:Ga(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ga(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return ut(e),null;case 13:if(Ee(Re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Mt!==null&&e.mode&1&&!(e.flags&128))vv(),ei(),e.flags|=98560,i=!1;else if(i=Qa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[cn]=e}else ei(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ut(e),i=!1}else tn!==null&&(cd(tn),tn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Re.current&1?He===0&&(He=3):Rf())),e.updateQueue!==null&&(e.flags|=4),ut(e),null);case 4:return ni(),nd(t,e),t===null&&Oo(e.stateNode.containerInfo),ut(e),null;case 10:return cf(e.type._context),ut(e),null;case 17:return At(e.type)&&Fl(),ut(e),null;case 19:if(Ee(Re),i=e.memoizedState,i===null)return ut(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Qi(i,!1);else{if(He!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wl(t),o!==null){for(e.flags|=128,Qi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(Re,Re.current&1|2),e.child}t=t.sibling}i.tail!==null&&Le()>si&&(e.flags|=128,r=!0,Qi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Wl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!xe)return ut(e),null}else 2*Le()-i.renderingStartTime>si&&n!==1073741824&&(e.flags|=128,r=!0,Qi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Le(),e.sibling=null,n=Re.current,_e(Re,r?n&1|2:n&1),e):(ut(e),null);case 22:case 23:return Sf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Vt&1073741824&&(ut(e),e.subtreeFlags&6&&(e.flags|=8192)):ut(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function Vk(t,e){switch(of(e),e.tag){case 1:return At(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ni(),Ee(Ct),Ee(pt),mf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return pf(e),null;case 13:if(Ee(Re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ei()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(Re),null;case 4:return ni(),null;case 10:return cf(e.type._context),null;case 22:case 23:return Sf(),null;case 24:return null;default:return null}}var Ja=!1,dt=!1,Mk=typeof WeakSet=="function"?WeakSet:Set,$=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function rd(t,e,n){try{n()}catch(r){De(t,e,r)}}var Sg=!1;function Lk(t,e){if(zh=Vl,t=ov(),rf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,u=-1,l=-1,h=0,p=0,m=t,g=null;t:for(;;){for(var E;m!==n||s!==0&&m.nodeType!==3||(u=o+s),m!==i||r!==0&&m.nodeType!==3||(l=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(E=m.firstChild)!==null;)g=m,m=E;for(;;){if(m===t)break t;if(g===n&&++h===s&&(u=o),g===i&&++p===r&&(l=o),(E=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=E}n=u===-1||l===-1?null:{start:u,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uh={focusedElem:t,selectionRange:n},Vl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var P=k.memoizedProps,D=k.memoizedState,x=e.stateNode,v=x.getSnapshotBeforeUpdate(e.elementType===e.type?P:Zt(e.type,P),D);x.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var C=e.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(b){De(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return k=Sg,Sg=!1,k}function yo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&rd(e,n,i)}s=s.next}while(s!==r)}}function Ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function n0(t){var e=t.alternate;e!==null&&(t.alternate=null,n0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Mo],delete e[Hh],delete e[vk],delete e[wk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function r0(t){return t.tag===5||t.tag===3||t.tag===4}function Rg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||r0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function id(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=jl));else if(r!==4&&(t=t.child,t!==null))for(id(t,e,n),t=t.sibling;t!==null;)id(t,e,n),t=t.sibling}function od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(od(t,e,n),t=t.sibling;t!==null;)od(t,e,n),t=t.sibling}var Je=null,en=!1;function Xn(t,e,n){for(n=n.child;n!==null;)s0(t,e,n),n=n.sibling}function s0(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(vu,n)}catch{}switch(n.tag){case 5:dt||js(n,e);case 6:var r=Je,s=en;Je=null,Xn(t,e,n),Je=r,en=s,Je!==null&&(en?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(en?(t=Je,n=n.stateNode,t.nodeType===8?$c(t.parentNode,n):t.nodeType===1&&$c(t,n),No(t)):$c(Je,n.stateNode));break;case 4:r=Je,s=en,Je=n.stateNode.containerInfo,en=!0,Xn(t,e,n),Je=r,en=s;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&rd(n,e,o),s=s.next}while(s!==r)}Xn(t,e,n);break;case 1:if(!dt&&(js(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){De(n,e,u)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,Xn(t,e,n),dt=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Cg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Mk),e.forEach(function(r){var s=Wk.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Jt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,u=o;e:for(;u!==null;){switch(u.tag){case 5:Je=u.stateNode,en=!1;break e;case 3:Je=u.stateNode.containerInfo,en=!0;break e;case 4:Je=u.stateNode.containerInfo,en=!0;break e}u=u.return}if(Je===null)throw Error(F(160));s0(i,o,s),Je=null,en=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(h){De(s,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)i0(e,t),e=e.sibling}function i0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Jt(e,t),ln(t),r&4){try{yo(3,t,t.return),Ru(3,t)}catch(P){De(t,t.return,P)}try{yo(5,t,t.return)}catch(P){De(t,t.return,P)}}break;case 1:Jt(e,t),ln(t),r&512&&n!==null&&js(n,n.return);break;case 5:if(Jt(e,t),ln(t),r&512&&n!==null&&js(n,n.return),t.flags&32){var s=t.stateNode;try{Ro(s,"")}catch(P){De(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,u=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&R_(s,i),Ph(u,o);var h=Ph(u,i);for(o=0;o<l.length;o+=2){var p=l[o],m=l[o+1];p==="style"?b_(s,m):p==="dangerouslySetInnerHTML"?P_(s,m):p==="children"?Ro(s,m):Hd(s,p,m,h)}switch(u){case"input":xh(s,i);break;case"textarea":C_(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var E=i.value;E!=null?Bs(s,!!i.multiple,E,!1):g!==!!i.multiple&&(i.defaultValue!=null?Bs(s,!!i.multiple,i.defaultValue,!0):Bs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Mo]=i}catch(P){De(t,t.return,P)}}break;case 6:if(Jt(e,t),ln(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){De(t,t.return,P)}}break;case 3:if(Jt(e,t),ln(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(P){De(t,t.return,P)}break;case 4:Jt(e,t),ln(t);break;case 13:Jt(e,t),ln(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(kf=Le())),r&4&&Cg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(dt=(h=dt)||p,Jt(e,t),dt=h):Jt(e,t),ln(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for($=t,p=t.child;p!==null;){for(m=$=p;$!==null;){switch(g=$,E=g.child,g.tag){case 0:case 11:case 14:case 15:yo(4,g,g.return);break;case 1:js(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(P){De(r,n,P)}}break;case 5:js(g,g.return);break;case 22:if(g.memoizedState!==null){Pg(m);continue}}E!==null?(E.return=g,$=E):Pg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,h?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=m.stateNode,l=m.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,u.style.display=N_("display",o))}catch(P){De(t,t.return,P)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(P){De(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Jt(e,t),ln(t),r&4&&Cg(t);break;case 21:break;default:Jt(e,t),ln(t)}}function ln(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(r0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ro(s,""),r.flags&=-33);var i=Rg(t);od(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,u=Rg(t);id(t,u,o);break;default:throw Error(F(161))}}catch(l){De(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jk(t,e,n){$=t,o0(t)}function o0(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var s=$,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ja;if(!o){var u=s.alternate,l=u!==null&&u.memoizedState!==null||dt;u=Ja;var h=dt;if(Ja=o,(dt=l)&&!h)for($=s;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Ng(s):l!==null?(l.return=o,$=l):Ng(s);for(;i!==null;)$=i,o0(i),i=i.sibling;$=s,Ja=u,dt=h}Ag(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,$=i):Ag(t)}}function Ag(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dt||Ru(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!dt)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Zt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&fg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fg(e,o,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&No(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}dt||e.flags&512&&sd(e)}catch(g){De(e,e.return,g)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Pg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Ng(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ru(4,e)}catch(l){De(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){De(e,s,l)}}var i=e.return;try{sd(e)}catch(l){De(e,i,l)}break;case 5:var o=e.return;try{sd(e)}catch(l){De(e,o,l)}}}catch(l){De(e,e.return,l)}if(e===t){$=null;break}var u=e.sibling;if(u!==null){u.return=e.return,$=u;break}$=e.return}}var Fk=Math.ceil,Ql=Hn.ReactCurrentDispatcher,Tf=Hn.ReactCurrentOwner,Gt=Hn.ReactCurrentBatchConfig,ce=0,Qe=null,ze=null,tt=0,Vt=0,Fs=Pr(0),He=0,Bo=null,ts=0,Cu=0,If=0,_o=null,xt=null,kf=0,si=1/0,Sn=null,Xl=!1,ad=null,gr=null,Za=!1,ur=null,Yl=0,vo=0,ld=null,_l=-1,vl=0;function vt(){return ce&6?Le():_l!==-1?_l:_l=Le()}function yr(t){return t.mode&1?ce&2&&tt!==0?tt&-tt:Tk.transition!==null?(vl===0&&(vl=H_()),vl):(t=me,t!==0||(t=window.event,t=t===void 0?16:Y_(t.type)),t):1}function rn(t,e,n,r){if(50<vo)throw vo=0,ld=null,Error(F(185));ra(t,n,r),(!(ce&2)||t!==Qe)&&(t===Qe&&(!(ce&2)&&(Cu|=n),He===4&&nr(t,tt)),Pt(t,r),n===1&&ce===0&&!(e.mode&1)&&(si=Le()+500,ku&&Nr()))}function Pt(t,e){var n=t.callbackNode;TI(t,e);var r=Ol(t,t===Qe?tt:0);if(r===0)n!==null&&zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&zm(n),e===1)t.tag===0?Ek(bg.bind(null,t)):gv(bg.bind(null,t)),yk(function(){!(ce&6)&&Nr()}),n=null;else{switch(q_(r)){case 1:n=Qd;break;case 4:n=B_;break;case 16:n=Dl;break;case 536870912:n=$_;break;default:n=Dl}n=p0(n,a0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function a0(t,e){if(_l=-1,vl=0,ce&6)throw Error(F(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=Ol(t,t===Qe?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jl(t,r);else{e=r;var s=ce;ce|=2;var i=u0();(Qe!==t||tt!==e)&&(Sn=null,si=Le()+500,Kr(t,e));do try{Bk();break}catch(u){l0(t,u)}while(!0);uf(),Ql.current=i,ce=s,ze!==null?e=0:(Qe=null,tt=0,e=He)}if(e!==0){if(e===2&&(s=Vh(t),s!==0&&(r=s,e=ud(t,s))),e===1)throw n=Bo,Kr(t,0),nr(t,r),Pt(t,Le()),n;if(e===6)nr(t,r);else{if(s=t.current.alternate,!(r&30)&&!zk(s)&&(e=Jl(t,r),e===2&&(i=Vh(t),i!==0&&(r=i,e=ud(t,i))),e===1))throw n=Bo,Kr(t,0),nr(t,r),Pt(t,Le()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:zr(t,xt,Sn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=kf+500-Le(),10<e)){if(Ol(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){vt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=$h(zr.bind(null,t,xt,Sn),e);break}zr(t,xt,Sn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-nn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Le()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Fk(r/1960))-r,10<r){t.timeoutHandle=$h(zr.bind(null,t,xt,Sn),r);break}zr(t,xt,Sn);break;case 5:zr(t,xt,Sn);break;default:throw Error(F(329))}}}return Pt(t,Le()),t.callbackNode===n?a0.bind(null,t):null}function ud(t,e){var n=_o;return t.current.memoizedState.isDehydrated&&(Kr(t,e).flags|=256),t=Jl(t,e),t!==2&&(e=xt,xt=n,e!==null&&cd(e)),t}function cd(t){xt===null?xt=t:xt.push.apply(xt,t)}function zk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!sn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~If,e&=~Cu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-nn(e),r=1<<n;t[n]=-1,e&=~r}}function bg(t){if(ce&6)throw Error(F(327));Ks();var e=Ol(t,0);if(!(e&1))return Pt(t,Le()),null;var n=Jl(t,e);if(t.tag!==0&&n===2){var r=Vh(t);r!==0&&(e=r,n=ud(t,r))}if(n===1)throw n=Bo,Kr(t,0),nr(t,e),Pt(t,Le()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,xt,Sn),Pt(t,Le()),null}function xf(t,e){var n=ce;ce|=1;try{return t(e)}finally{ce=n,ce===0&&(si=Le()+500,ku&&Nr())}}function ns(t){ur!==null&&ur.tag===0&&!(ce&6)&&Ks();var e=ce;ce|=1;var n=Gt.transition,r=me;try{if(Gt.transition=null,me=1,t)return t()}finally{me=r,Gt.transition=n,ce=e,!(ce&6)&&Nr()}}function Sf(){Vt=Fs.current,Ee(Fs)}function Kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gk(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(of(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:ni(),Ee(Ct),Ee(pt),mf();break;case 5:pf(r);break;case 4:ni();break;case 13:Ee(Re);break;case 19:Ee(Re);break;case 10:cf(r.type._context);break;case 22:case 23:Sf()}n=n.return}if(Qe=t,ze=t=_r(t.current,null),tt=Vt=e,He=0,Bo=null,If=Cu=ts=0,xt=_o=null,Hr!==null){for(e=0;e<Hr.length;e++)if(n=Hr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Hr=null}return t}function l0(t,e){do{var n=ze;try{if(uf(),ml.current=Gl,Kl){for(var r=Ce.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Kl=!1}if(es=0,Ge=Be=Ce=null,go=!1,Fo=0,Tf.current=null,n===null||n.return===null){He=1,Bo=e,ze=null;break}e:{var i=t,o=n.return,u=n,l=e;if(e=tt,u.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,p=u,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var E=vg(o);if(E!==null){E.flags&=-257,wg(E,o,u,i,e),E.mode&1&&_g(i,h,e),e=E,l=h;var k=e.updateQueue;if(k===null){var P=new Set;P.add(l),e.updateQueue=P}else k.add(l);break e}else{if(!(e&1)){_g(i,h,e),Rf();break e}l=Error(F(426))}}else if(xe&&u.mode&1){var D=vg(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),wg(D,o,u,i,e),af(ri(l,u));break e}}i=l=ri(l,u),He!==4&&(He=2),_o===null?_o=[i]:_o.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var x=qv(i,l,e);dg(i,x);break e;case 1:u=l;var v=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof v.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(gr===null||!gr.has(C)))){i.flags|=65536,e&=-e,i.lanes|=e;var b=Wv(i,u,e);dg(i,b);break e}}i=i.return}while(i!==null)}h0(n)}catch(z){e=z,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(!0)}function u0(){var t=Ql.current;return Ql.current=Gl,t===null?Gl:t}function Rf(){(He===0||He===3||He===2)&&(He=4),Qe===null||!(ts&268435455)&&!(Cu&268435455)||nr(Qe,tt)}function Jl(t,e){var n=ce;ce|=2;var r=u0();(Qe!==t||tt!==e)&&(Sn=null,Kr(t,e));do try{Uk();break}catch(s){l0(t,s)}while(!0);if(uf(),ce=n,Ql.current=r,ze!==null)throw Error(F(261));return Qe=null,tt=0,He}function Uk(){for(;ze!==null;)c0(ze)}function Bk(){for(;ze!==null&&!fI();)c0(ze)}function c0(t){var e=f0(t.alternate,t,Vt);t.memoizedProps=t.pendingProps,e===null?h0(t):ze=e,Tf.current=null}function h0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Vk(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{He=6,ze=null;return}}else if(n=Ok(n,e,Vt),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);He===0&&(He=5)}function zr(t,e,n){var r=me,s=Gt.transition;try{Gt.transition=null,me=1,$k(t,e,n,r)}finally{Gt.transition=s,me=r}return null}function $k(t,e,n,r){do Ks();while(ur!==null);if(ce&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(II(t,i),t===Qe&&(ze=Qe=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,p0(Dl,function(){return Ks(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Gt.transition,Gt.transition=null;var o=me;me=1;var u=ce;ce|=4,Tf.current=null,Lk(t,n),i0(n,t),uk(Uh),Vl=!!zh,Uh=zh=null,t.current=n,jk(n),pI(),ce=u,me=o,Gt.transition=i}else t.current=n;if(Za&&(Za=!1,ur=t,Yl=s),i=t.pendingLanes,i===0&&(gr=null),yI(n.stateNode),Pt(t,Le()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Xl)throw Xl=!1,t=ad,ad=null,t;return Yl&1&&t.tag!==0&&Ks(),i=t.pendingLanes,i&1?t===ld?vo++:(vo=0,ld=t):vo=0,Nr(),null}function Ks(){if(ur!==null){var t=q_(Yl),e=Gt.transition,n=me;try{if(Gt.transition=null,me=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,Yl=0,ce&6)throw Error(F(331));var s=ce;for(ce|=4,$=t.current;$!==null;){var i=$,o=i.child;if($.flags&16){var u=i.deletions;if(u!==null){for(var l=0;l<u.length;l++){var h=u[l];for($=h;$!==null;){var p=$;switch(p.tag){case 0:case 11:case 15:yo(8,p,i)}var m=p.child;if(m!==null)m.return=p,$=m;else for(;$!==null;){p=$;var g=p.sibling,E=p.return;if(n0(p),p===h){$=null;break}if(g!==null){g.return=E,$=g;break}$=E}}}var k=i.alternate;if(k!==null){var P=k.child;if(P!==null){k.child=null;do{var D=P.sibling;P.sibling=null,P=D}while(P!==null)}}$=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,$=o;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:yo(9,i,i.return)}var x=i.sibling;if(x!==null){x.return=i.return,$=x;break e}$=i.return}}var v=t.current;for($=v;$!==null;){o=$;var C=o.child;if(o.subtreeFlags&2064&&C!==null)C.return=o,$=C;else e:for(o=v;$!==null;){if(u=$,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Ru(9,u)}}catch(z){De(u,u.return,z)}if(u===o){$=null;break e}var b=u.sibling;if(b!==null){b.return=u.return,$=b;break e}$=u.return}}if(ce=s,Nr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(vu,t)}catch{}r=!0}return r}finally{me=n,Gt.transition=e}}return!1}function Dg(t,e,n){e=ri(n,e),e=qv(t,e,1),t=mr(t,e,1),e=vt(),t!==null&&(ra(t,1,e),Pt(t,e))}function De(t,e,n){if(t.tag===3)Dg(t,t,n);else for(;e!==null;){if(e.tag===3){Dg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gr===null||!gr.has(r))){t=ri(n,t),t=Wv(e,t,1),e=mr(e,t,1),t=vt(),e!==null&&(ra(e,1,t),Pt(e,t));break}}e=e.return}}function Hk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=vt(),t.pingedLanes|=t.suspendedLanes&n,Qe===t&&(tt&n)===n&&(He===4||He===3&&(tt&130023424)===tt&&500>Le()-kf?Kr(t,0):If|=n),Pt(t,e)}function d0(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=vt();t=jn(t,e),t!==null&&(ra(t,e,n),Pt(t,n))}function qk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),d0(t,n)}function Wk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),d0(t,n)}var f0;f0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ct.current)Rt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Rt=!1,Dk(t,e,n);Rt=!!(t.flags&131072)}else Rt=!1,xe&&e.flags&1048576&&yv(e,Bl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;yl(t,e),t=e.pendingProps;var s=Zs(e,pt.current);Ws(e,n),s=yf(null,e,r,t,s,n);var i=_f();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,At(r)?(i=!0,zl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,df(e),s.updater=Su,e.stateNode=s,s._reactInternals=e,Xh(e,r,t,n),e=Zh(null,e,r,!0,i,n)):(e.tag=0,xe&&i&&sf(e),_t(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(yl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Gk(r),t=Zt(r,t),s){case 0:e=Jh(null,e,r,t,n);break e;case 1:e=Ig(null,e,r,t,n);break e;case 11:e=Eg(null,e,r,t,n);break e;case 14:e=Tg(null,e,r,Zt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Jh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Ig(t,e,r,s,n);case 3:e:{if(Xv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Iv(t,e),ql(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ri(Error(F(423)),e),e=kg(t,e,r,n,s);break e}else if(r!==s){s=ri(Error(F(424)),e),e=kg(t,e,r,n,s);break e}else for(Mt=pr(e.stateNode.containerInfo.firstChild),Ft=e,xe=!0,tn=null,n=Ev(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ei(),r===s){e=Fn(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return kv(e),t===null&&Kh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Bh(r,s)?o=null:i!==null&&Bh(r,i)&&(e.flags|=32),Qv(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&Kh(e),null;case 13:return Yv(t,e,n);case 4:return ff(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ti(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),Eg(t,e,r,s,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,_e($l,r._currentValue),r._currentValue=o,i!==null)if(sn(i.value,o)){if(i.children===s.children&&!Ct.current){e=Fn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var u=i.dependencies;if(u!==null){o=i.child;for(var l=u.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=On(-1,n&-n),l.tag=2;var h=i.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?l.next=l:(l.next=p.next,p.next=l),h.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Gh(i.return,n,e),u.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Gh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}_t(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ws(e,n),s=Qt(s),r=r(s),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,s=Zt(r,e.pendingProps),s=Zt(r.type,s),Tg(t,e,r,s,n);case 15:return Kv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Zt(r,s),yl(t,e),e.tag=1,At(r)?(t=!0,zl(e)):t=!1,Ws(e,n),Hv(e,r,s),Xh(e,r,s,n),Zh(null,e,r,!0,t,n);case 19:return Jv(t,e,n);case 22:return Gv(t,e,n)}throw Error(F(156,e.tag))};function p0(t,e){return U_(t,e)}function Kk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(t,e,n,r){return new Kk(t,e,n,r)}function Cf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Gk(t){if(typeof t=="function")return Cf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wd)return 11;if(t===Kd)return 14}return 2}function _r(t,e){var n=t.alternate;return n===null?(n=Kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Cf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case As:return Gr(n.children,s,i,e);case qd:o=8,s|=8;break;case wh:return t=Kt(12,n,e,s|2),t.elementType=wh,t.lanes=i,t;case Eh:return t=Kt(13,n,e,s),t.elementType=Eh,t.lanes=i,t;case Th:return t=Kt(19,n,e,s),t.elementType=Th,t.lanes=i,t;case k_:return Au(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T_:o=10;break e;case I_:o=9;break e;case Wd:o=11;break e;case Kd:o=14;break e;case Zn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Kt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Gr(t,e,n,r){return t=Kt(7,t,r,e),t.lanes=n,t}function Au(t,e,n,r){return t=Kt(22,t,r,e),t.elementType=k_,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Kt(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=Kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Qk(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Af(t,e,n,r,s,i,o,u,l){return t=new Qk(t,e,n,u,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Kt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},df(i),t}function Xk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function m0(t){if(!t)return kr;t=t._reactInternals;e:{if(hs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(At(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(At(n))return mv(t,n,e)}return e}function g0(t,e,n,r,s,i,o,u,l){return t=Af(n,r,!0,t,s,i,o,u,l),t.context=m0(null),n=t.current,r=vt(),s=yr(n),i=On(r,s),i.callback=e??null,mr(n,i,s),t.current.lanes=s,ra(t,s,r),Pt(t,r),t}function Pu(t,e,n,r){var s=e.current,i=vt(),o=yr(s);return n=m0(n),e.context===null?e.context=n:e.pendingContext=n,e=On(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=mr(s,e,o),t!==null&&(rn(t,s,o,i),pl(t,s,o)),o}function Zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Og(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){Og(t,e),(t=t.alternate)&&Og(t,e)}function Yk(){return null}var y0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nf(t){this._internalRoot=t}Nu.prototype.render=Nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Pu(t,e,null,null)};Nu.prototype.unmount=Nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ns(function(){Pu(null,t,null,null)}),e[Ln]=null}};function Nu(t){this._internalRoot=t}Nu.prototype.unstable_scheduleHydration=function(t){if(t){var e=G_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&X_(t)}};function bf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vg(){}function Jk(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var h=Zl(o);i.call(h)}}var o=g0(e,r,t,0,null,!1,!1,"",Vg);return t._reactRootContainer=o,t[Ln]=o.current,Oo(t.nodeType===8?t.parentNode:t),ns(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var u=r;r=function(){var h=Zl(l);u.call(h)}}var l=Af(t,0,!1,null,null,!1,!1,"",Vg);return t._reactRootContainer=l,t[Ln]=l.current,Oo(t.nodeType===8?t.parentNode:t),ns(function(){Pu(e,l,n,r)}),l}function Du(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var u=s;s=function(){var l=Zl(o);u.call(l)}}Pu(e,o,t,s)}else o=Jk(n,e,t,s,r);return Zl(o)}W_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(Xd(e,n|1),Pt(e,Le()),!(ce&6)&&(si=Le()+500,Nr()))}break;case 13:ns(function(){var r=jn(t,1);if(r!==null){var s=vt();rn(r,t,1,s)}}),Pf(t,1)}};Yd=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=vt();rn(e,t,134217728,n)}Pf(t,134217728)}};K_=function(t){if(t.tag===13){var e=yr(t),n=jn(t,e);if(n!==null){var r=vt();rn(n,t,e,r)}Pf(t,e)}};G_=function(){return me};Q_=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};bh=function(t,e,n){switch(e){case"input":if(xh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Iu(r);if(!s)throw Error(F(90));S_(r),xh(r,s)}}}break;case"textarea":C_(t,n);break;case"select":e=n.value,e!=null&&Bs(t,!!n.multiple,e,!1)}};V_=xf;M_=ns;var Zk={usingClientEntryPoint:!1,Events:[ia,Ds,Iu,D_,O_,xf]},Xi={findFiberByHostInstance:$r,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=F_(t),t===null?null:t.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||Yk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{vu=el.inject(ex),dn=el}catch{}}Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zk;Ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bf(e))throw Error(F(200));return Xk(t,e,null,n)};Ut.createRoot=function(t,e){if(!bf(t))throw Error(F(299));var n=!1,r="",s=y0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Af(t,1,!1,null,null,n,!1,r,s),t[Ln]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Nf(e)};Ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=F_(e),t=t===null?null:t.stateNode,t};Ut.flushSync=function(t){return ns(t)};Ut.hydrate=function(t,e,n){if(!bu(e))throw Error(F(200));return Du(null,t,e,!0,n)};Ut.hydrateRoot=function(t,e,n){if(!bf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=y0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=g0(e,null,t,1,n??null,s,!1,i,o),t[Ln]=e.current,Oo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Nu(e)};Ut.render=function(t,e,n){if(!bu(e))throw Error(F(200));return Du(null,t,e,!1,n)};Ut.unmountComponentAtNode=function(t){if(!bu(t))throw Error(F(40));return t._reactRootContainer?(ns(function(){Du(null,null,t,!1,function(){t._reactRootContainer=null,t[Ln]=null})}),!0):!1};Ut.unstable_batchedUpdates=xf;Ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Du(t,e,n,!1,r)};Ut.version="18.3.1-next-f1338f8080-20240426";function _0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_0)}catch(t){console.error(t)}}_0(),__.exports=Ut;var tx=__.exports,Mg=tx;_h.createRoot=Mg.createRoot,_h.hydrateRoot=Mg.hydrateRoot;/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nx=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v0=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=j.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...u},l)=>j.createElement("svg",{ref:l,...rx,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:v0("lucide",s),...u},[...o.map(([h,p])=>j.createElement(h,p)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(t,e)=>{const n=j.forwardRef(({className:r,...s},i)=>j.createElement(sx,{ref:i,iconNode:e,className:v0(`lucide-${nx(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=it("ChartNoAxesColumn",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=it("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=it("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=it("CircleMinus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=it("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=it("CloudUpload",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=it("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=it("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=it("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=it("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=it("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=it("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=it("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=it("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=it("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=it("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.417.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),fe=({children:t,onClick:e,type:n="button",variant:r="solid",className:s="",disabled:i=!1,...o})=>{const u="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900 disabled:opacity-50 disabled:pointer-events-none transform active:scale-[0.98]",l={solid:"bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md dark:bg-blue-500 dark:hover:bg-blue-600",secondary:"bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-600",ghost:"hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300",danger:"bg-red-500 text-white shadow-sm hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700"};return f.jsx("button",{type:n,onClick:e,className:`${u} ${l[r]} ${s}`,disabled:i,...o,children:t})},px=({onNewConvocation:t,onSetPage:e,page:n,darkMode:r,onToggleDarkMode:s,availableYears:i,selectedYear:o,onSelectYear:u,isAuthenticated:l,userEmail:h,onAuthButtonClick:p})=>{const[m,g]=j.useState(!1),E=j.useRef(null);return j.useEffect(()=>{const k=P=>{E.current&&!E.current.contains(P.target)&&g(!1)};return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[]),f.jsxs("header",{className:"bg-white dark:bg-zinc-800 shadow-md mb-8 p-4 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4",children:[f.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-4 sm:space-x-4 w-full sm:w-auto",children:[f.jsx("h1",{className:"text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 text-center sm:text-left",children:"RefFinances"}),f.jsxs("nav",{className:"flex items-center space-x-2 w-full sm:w-auto",children:[f.jsxs(fe,{variant:n==="dashboard"?"secondary":"ghost",onClick:()=>e("dashboard"),className:`w-1/2 sm:w-auto justify-center ${n==="dashboard"?"font-semibold bg-zinc-200 dark:bg-zinc-700":"font-normal"}`,children:[f.jsx(hd,{size:16,className:"mr-2"}),"Dashboard"]}),f.jsxs(fe,{variant:n==="settings"?"secondary":"ghost",onClick:()=>e("settings"),className:`w-1/2 sm:w-auto justify-center ${n==="settings"?"font-semibold bg-zinc-200 dark:bg-zinc-700":"font-normal"}`,children:[f.jsx(T0,{size:16,className:"mr-2"}),"Paramètres"]})]}),n==="dashboard"&&i.length>0&&f.jsxs("div",{className:"w-full sm:w-auto",children:[f.jsx("label",{htmlFor:"year-select",className:"sr-only",children:"Filtrer par année"}),f.jsxs("select",{id:"year-select",value:o,onChange:k=>u(k.target.value),className:"w-full rounded-md border-zinc-300 dark:border-zinc-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200",children:[f.jsx("option",{value:"all",children:"Toutes les années"}),i.map(k=>f.jsx("option",{value:k,children:k},k))]})]})]}),f.jsxs("div",{className:"flex items-center space-x-2 justify-center flex-wrap gap-2",children:[f.jsx(fe,{variant:"ghost",className:"!p-2",onClick:s,children:r?f.jsx(dx,{size:18}):f.jsx(ux,{size:18})}),f.jsx(fe,{variant:"ghost",className:"!p-2",onClick:p,children:l?h||"Profil":"Connexion"}),f.jsx(fe,{variant:"solid",onClick:t,className:"flex-grow sm:flex-grow-0",children:"+ Nouvelle Convocation"})]})]})},mx=j.memo(px),Zc=({title:t,value:e,icon:n})=>f.jsxs("div",{className:"bg-white dark:bg-zinc-800 p-5 rounded-lg shadow-md flex items-center space-x-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",children:[f.jsx("div",{className:"p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300",children:n}),f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-medium text-zinc-500 dark:text-zinc-400",children:t}),f.jsx("p",{className:"text-2xl font-bold text-zinc-900 dark:text-white",children:e})]})]}),gx={check:f.jsx(w0,{size:14}),minus:f.jsx(ox,{size:14}),clock:f.jsx(ax,{size:14})},yx=({status:t})=>t?f.jsxs("span",{className:`inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${t.color} ${t.bgColor}`,children:[gx[t.icon],f.jsx("span",{children:t.text})]}):null,kt=t=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(t||0),ii=(t,e="du")=>t.depenses.reduce((n,r)=>n+(parseFloat(r[e])||0),0),I0=t=>{const e=ii(t,"du"),n=ii(t,"recu"),r=Math.round(e*100)/100,s=Math.round(n*100)/100;return r>0&&s>=r?{text:"Payé",color:"text-green-600 dark:text-green-400",icon:"check",bgColor:"bg-green-100 dark:bg-green-900/50"}:s>0&&s<r?{text:"Partiel",color:"text-yellow-600 dark:text-yellow-400",icon:"minus",bgColor:"bg-yellow-100 dark:bg-yellow-900/50"}:{text:"En attente",color:"text-zinc-500",icon:"clock",bgColor:"bg-zinc-100 dark:bg-zinc-700"}},_x=({convocation:t,onSelectConvocation:e,onToggleSelect:n,isSelected:r})=>{const s=ii(t,"du"),i=ii(t,"recu"),o=I0(t),u=l=>{l.target.type!=="checkbox"&&e(t)};return f.jsxs("tr",{onClick:u,className:"hover:bg-zinc-50 dark:hover:bg-zinc-800/60 cursor-pointer border-b border-zinc-200 dark:border-zinc-700 transition-colors duration-150",children:[f.jsx("td",{className:"px-5 py-4 text-sm font-medium text-zinc-900 dark:text-white",children:f.jsx("input",{type:"checkbox",className:"rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500",checked:r,onChange:()=>n(t.id),onClick:l=>l.stopPropagation()})}),f.jsx("td",{className:"px-5 py-4 text-sm font-medium text-zinc-900 dark:text-white",children:t.numero}),f.jsx("td",{className:"px-5 py-4 text-sm text-zinc-600 dark:text-zinc-300",children:new Date(t.date).toLocaleDateString("fr-FR")}),f.jsx("td",{className:"px-5 py-4 text-sm text-zinc-600 dark:text-zinc-300",children:t.motifNom||"N/A"}),f.jsx("td",{className:"px-5 py-4 text-sm font-semibold text-zinc-900 dark:text-white",children:kt(s)}),f.jsx("td",{className:"px-5 py-4 text-sm font-semibold text-green-600 dark:text-green-400",children:kt(i)}),f.jsx("td",{className:"px-5 py-4 text-sm",children:f.jsx(yx,{status:o})})]})},vx=j.memo(_x),wx=({convocation:t,onSelectConvocation:e,onToggleSelect:n,isSelected:r})=>{const s=ii(t,"du"),i=ii(t,"recu"),o=I0(t);return f.jsxs("div",{onClick:()=>e(t),className:"bg-white dark:bg-zinc-800 rounded-lg shadow-md p-4 border border-zinc-200 dark:border-zinc-700 active:scale-[0.98] transition-all duration-150",children:[f.jsxs("div",{className:"flex justify-between items-start space-x-3",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("input",{type:"checkbox",className:"rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500 h-5 w-5 flex-shrink-0",checked:r,onChange:()=>n(t.id),onClick:u=>u.stopPropagation()}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-bold text-zinc-900 dark:text-white",children:t.numero}),f.jsx("p",{className:"text-sm text-zinc-600 dark:text-zinc-300",children:t.motifNom||"N/A"}),f.jsx("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:new Date(t.date).toLocaleDateString("fr-FR")})]})]}),f.jsxs("span",{className:`flex-shrink-0 inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium ${o.color} ${o.bgColor}`,children:[o.icon,f.jsx("span",{children:o.text})]})]}),f.jsxs("div",{className:"mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-700 grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:"Montant Dû"}),f.jsx("p",{className:"text-lg font-semibold text-zinc-900 dark:text-white",children:kt(s)})]}),f.jsxs("div",{children:[f.jsx("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:"Montant Perçu"}),f.jsx("p",{className:"text-lg font-semibold text-green-600 dark:text-green-400",children:kt(i)})]})]})]})},Ex=j.memo(wx),Tx=({convocations:t,onSelectConvocation:e,selectedIds:n,onSelectId:r,onSelectAll:s,onDeleteSelected:i,searchTerm:o,onSearchTermChange:u,selectedYear:l})=>{const h=j.useMemo(()=>new Set(n),[n]),p=j.useMemo(()=>{let E=0,k=0;t.forEach(D=>{Array.isArray(D.depenses)&&(E+=D.depenses.reduce((x,v)=>x+(v.du||0),0),k+=D.depenses.reduce((x,v)=>x+(v.recu||0),0))});const P=k-E;return{totalDu:E,totalRecu:k,solde:P}},[t]),m=t.length>0&&h.size===t.length,g=o?`Aucun résultat pour « ${o} ».`:l&&l!=="all"?`Aucune convocation trouvée pour ${l}.`:"Aucune convocation à afficher.";return f.jsxs("div",{className:"space-y-6",children:[f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[f.jsx(Zc,{title:"Total Dû",value:kt(p.totalDu),icon:f.jsx(hd,{size:22})}),f.jsx(Zc,{title:"Total Perçu",value:kt(p.totalRecu),icon:f.jsx(w0,{size:22})}),f.jsx(Zc,{title:"Solde",value:kt(p.solde),icon:f.jsx(hd,{size:22})})]}),f.jsxs("div",{className:"relative mt-4",children:[f.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:f.jsx(hx,{size:18,className:"text-zinc-400"})}),f.jsx("input",{type:"text",placeholder:"Rechercher par numéro de convocation...",value:o,onChange:E=>u(E.target.value),className:"block w-full pl-10 pr-3 py-2 border border-zinc-300 rounded-md leading-5 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:placeholder-zinc-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"})]}),n.length>0&&f.jsxs("div",{className:"bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow-md p-4 flex justify-between items-center animate-fade-in-sm",children:[f.jsxs("p",{className:"font-medium",children:[n.length," ",n.length>1?"convocations sélectionnées":"convocation sélectionnée"]}),f.jsxs("button",{onClick:i,className:"inline-flex items-center rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600",children:[f.jsx($o,{size:16,className:"mr-2"}),"Supprimer la sélection"]})]}),f.jsxs("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden",children:[f.jsx("div",{className:"hidden sm:block overflow-x-auto",children:f.jsxs("table",{className:"min-w-full divide-y divide-zinc-200 dark:divide-zinc-700",children:[f.jsx("thead",{className:"bg-zinc-50 dark:bg-zinc-700/50",children:f.jsxs("tr",{children:[f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:f.jsx("input",{type:"checkbox",className:"rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500",checked:m,onChange:E=>s(E.target.checked),title:"Tout sélectionner"})}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Numéro"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Date"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Motif"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Montant Dû"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Montant Perçu"}),f.jsx("th",{scope:"col",className:"px-5 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Statut"})]})}),f.jsx("tbody",{className:"divide-y divide-zinc-200 dark:divide-zinc-700",children:t.length===0?f.jsx("tr",{children:f.jsx("td",{colSpan:"7",className:"px-5 py-12 text-center text-zinc-500 dark:text-zinc-400",children:g})}):t.map(E=>f.jsx(vx,{convocation:E,onSelectConvocation:e,isSelected:h.has(E.id),onToggleSelect:r},E.id))})]})}),f.jsxs("div",{className:"block sm:hidden p-4 space-y-4 bg-zinc-50/50 dark:bg-zinc-900/50",children:[f.jsxs("div",{className:"px-1 py-2 flex items-center",children:[f.jsx("input",{type:"checkbox",id:"select-all-mobile",className:"rounded border-zinc-300 dark:border-zinc-600 text-blue-600 focus:ring-blue-500 dark:bg-zinc-700 dark:checked:bg-blue-500 h-5 w-5",checked:m,onChange:E=>s(E.target.checked)}),f.jsx("label",{htmlFor:"select-all-mobile",className:"ml-3 text-sm font-medium text-zinc-700 dark:text-zinc-300",children:"Tout sélectionner"})]}),t.length===0?f.jsx("div",{className:"px-5 py-12 text-center text-zinc-500 dark:text-zinc-400",children:g}):t.map(E=>f.jsx(Ex,{convocation:E,onSelectConvocation:e,isSelected:h.has(E.id),onToggleSelect:r},E.id))]})]})]})},Ix=j.memo(Tx),Df=({show:t,title:e,onClose:n,footer:r,children:s,closeText:i="Fermer",className:o=""})=>t?f.jsx("div",{className:"fixed inset-0 bg-black/60 z-[60] flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal",children:f.jsxs("div",{className:`bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-2xl animate-scale-in overflow-hidden ${o}`,children:[f.jsxs("div",{className:"flex justify-between items-center p-4 border-b dark:border-zinc-700",children:[f.jsx("h3",{className:"text-lg font-medium text-zinc-900 dark:text-white",children:e}),f.jsx(fe,{variant:"ghost",onClick:n,className:"!p-2",children:i})]}),f.jsx("div",{className:"p-6",children:s}),r&&f.jsx("div",{className:"bg-zinc-50 dark:bg-zinc-800 px-6 py-4 rounded-b-lg",children:r})]})}):null,eu=({show:t,onClose:e,onConfirm:n,title:r,message:s})=>t?f.jsx(Df,{show:t,title:r,onClose:e,footer:f.jsxs("div",{className:"flex justify-end space-x-3",children:[f.jsx(fe,{variant:"secondary",onClick:e,children:"Annuler"}),f.jsx(fe,{variant:"danger",onClick:n,children:"Supprimer"})]}),children:f.jsxs("div",{className:"flex items-start space-x-3",children:[f.jsx("div",{className:"flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/50",children:f.jsx(fx,{className:"h-6 w-6 text-red-600 dark:text-red-400","aria-hidden":"true"})}),f.jsx("div",{className:"text-left",children:f.jsx("p",{className:"text-sm text-zinc-600 dark:text-zinc-300",children:s})})]})}):null,Wt=({label:t,name:e,type:n,value:r,onChange:s,placeholder:i,isCurrency:o=!1,isInvalid:u=!1,...l})=>f.jsxs("div",{className:"w-full",children:[f.jsx("label",{htmlFor:e,className:"block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",children:t}),f.jsxs("div",{className:"relative rounded-md shadow-sm",children:[o&&f.jsx("span",{className:"absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-500 sm:text-sm",children:"€"}),f.jsx("input",{type:n,name:e,id:e,value:r,onChange:s,placeholder:i,className:`block w-full rounded-md shadow-sm sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200 ease-in-out ${o?"pl-7":"pl-3"} ${u?"border-red-500 ring-red-500":"border-zinc-300 dark:border-zinc-600 focus:border-blue-500 focus:ring-blue-500 focus:ring-1"}`,...l})]})]}),Fg=({show:t,title:e,entity:n,fields:r,onClose:s,onSave:i,generateId:o})=>{const u=r.reduce((g,E)=>(g[E.name]=E.defaultValue??"",g),{}),[l,h]=j.useState({...u,...n});j.useEffect(()=>{h({...u,...n})},[n,u]);const p=g=>{const{name:E,value:k}=g.target;h(P=>({...P,[E]:k}))},m=()=>{const g=r.reduce((E,k)=>{const P=l[k.name];return E[k.name]=k.type==="number"?parseFloat(P)||0:P,E},{...l,id:l.id||(o?o():void 0)});i(g)};return f.jsx(Df,{show:t,title:e,onClose:s,footer:f.jsxs("div",{className:"flex justify-end gap-3",children:[f.jsx(fe,{variant:"secondary",onClick:s,children:"Annuler"}),f.jsx(fe,{variant:"solid",onClick:m,children:"Enregistrer"})]}),className:"max-w-xl",children:f.jsx("div",{className:"space-y-4",children:r.map(g=>f.jsx(Wt,{label:g.label,name:g.name,type:g.type,step:g.step,min:g.min,placeholder:g.placeholder,value:l[g.name]??"",onChange:p,isCurrency:g.isCurrency},g.name))})})},kx=({motifs:t,onSaveMotif:e,onDeleteMotif:n,trajets:r,onSaveTrajet:s,onDeleteTrajet:i})=>{const[o,u]=j.useState(null),[l,h]=j.useState(null),[p,m]=j.useState(null),[g,E]=j.useState(null),[k,P]=j.useState("motifs"),D=[{name:"nom",label:"Nom du motif",type:"text",placeholder:"Nom du motif"},{name:"plafondKm",label:"Plafond (km)",type:"number",step:"1",min:"0",placeholder:"ex: 200"},{name:"coeffKm",label:"Coeff. Km",type:"number",step:"0.01",min:"0",placeholder:"ex: 0.54"},{name:"indemnite",label:"Indemnité (€)",type:"number",step:"0.01",min:"0",placeholder:"ex: 150.00",isCurrency:!0}],x=[{name:"nom",label:"Nom du trajet (ex: Domicile - Gare TGV)",type:"text",placeholder:"Nom du trajet"},{name:"distance",label:"Distance (km)",type:"number",step:"1",min:"0",placeholder:"ex: 45"}],v=w=>{e(w),u(null)},C=()=>{l!=null&&l.id&&n(l.id),h(null)},b=w=>{s(w),m(null)},z=()=>{g!=null&&g.id&&i(g.id),E(null)},V=j.useMemo(()=>[...t].sort((w,y)=>w.nom.localeCompare(y.nom,"fr",{sensitivity:"base"})),[t]);return f.jsxs("div",{className:"space-y-6",children:[f.jsx("div",{className:"border-b border-zinc-200 dark:border-zinc-700",children:f.jsxs("nav",{className:"-mb-px flex space-x-8","aria-label":"Tabs",children:[f.jsxs("button",{onClick:()=>P("motifs"),className:`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm ${k==="motifs"?"border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300":"border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:border-zinc-500"}`,children:[f.jsx(T0,{size:16,className:"inline-block mr-2"}),"Gestion des Motifs"]}),f.jsxs("button",{onClick:()=>P("trajets"),className:`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm ${k==="trajets"?"border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-300":"border-transparent text-zinc-500 hover:text-zinc-700 hover:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:border-zinc-500"}`,children:[f.jsx(cx,{size:16,className:"inline-block mr-2"}),"Gestion des Trajets"]})]})}),k==="motifs"&&f.jsxs("div",{className:"space-y-6 animate-fade-in-sm",children:[f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("h2",{className:"text-2xl font-bold text-zinc-900 dark:text-white",children:"Motifs"}),f.jsxs(fe,{variant:"solid",onClick:()=>u({}),children:[f.jsx(jg,{size:16,className:"mr-2"}),"Nouveau motif"]})]}),f.jsx("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden",children:f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"min-w-full divide-y divide-zinc-200 dark:divide-zinc-700",children:[f.jsx("thead",{className:"bg-zinc-50 dark:bg-zinc-700/50",children:f.jsxs("tr",{children:[f.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Nom"}),f.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Plafond (km)"}),f.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Coefficient"}),f.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Indemnité"}),f.jsx("th",{className:"px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Actions"})]})}),f.jsx("tbody",{className:"divide-y divide-zinc-200 dark:divide-zinc-700",children:V.length===0?f.jsx("tr",{children:f.jsx("td",{colSpan:"5",className:"px-6 py-12 text-center text-zinc-500 dark:text-zinc-400",children:"Aucun motif créé."})}):V.map(w=>f.jsxs("tr",{className:"hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors duration-150",children:[f.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white",children:w.nom}),f.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300",children:[w.plafondKm," km"]}),f.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300",children:w.coeffKm}),f.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300",children:new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(w.indemnite)}),f.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2",children:[f.jsx(fe,{variant:"ghost",className:"!p-2",onClick:()=>u(w),children:f.jsx(Lg,{size:16})}),f.jsx(fe,{variant:"ghost",className:"!p-2 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50",onClick:()=>h(w),children:f.jsx($o,{size:16})})]})]},w.id))})]})})})]}),k==="trajets"&&f.jsxs("div",{className:"space-y-6 animate-fade-in-sm",children:[f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("h2",{className:"text-2xl font-bold text-zinc-900 dark:text-white",children:"Trajets"}),f.jsxs(fe,{variant:"solid",onClick:()=>m({}),children:[f.jsx(jg,{size:16,className:"mr-2"}),"Nouveau trajet"]})]}),f.jsx("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden",children:f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"min-w-full divide-y divide-zinc-200 dark:divide-zinc-700",children:[f.jsx("thead",{className:"bg-zinc-50 dark:bg-zinc-700/50",children:f.jsxs("tr",{children:[f.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Nom du Trajet"}),f.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Distance (km)"}),f.jsx("th",{className:"px-6 py-3 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider",children:"Actions"})]})}),f.jsx("tbody",{className:"divide-y divide-zinc-200 dark:divide-zinc-700",children:r.length===0?f.jsx("tr",{children:f.jsx("td",{colSpan:"3",className:"px-6 py-12 text-center text-zinc-500 dark:text-zinc-400",children:"Aucun trajet créé."})}):r.map(w=>f.jsxs("tr",{className:"hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-colors duration-150",children:[f.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-white",children:w.nom}),f.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-zinc-600 dark:text-zinc-300",children:[w.distance," km"]}),f.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2",children:[f.jsx(fe,{variant:"ghost",className:"!p-2",onClick:()=>m(w),children:f.jsx(Lg,{size:16})}),f.jsx(fe,{variant:"ghost",className:"!p-2 text-red-600 dark:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/50",onClick:()=>E(w),children:f.jsx($o,{size:16})})]})]},w.id))})]})})})]}),f.jsx(Fg,{show:!!o,title:o!=null&&o.id?"Modifier le motif":"Nouveau motif",entity:o,fields:D,onClose:()=>u(null),onSave:v,generateId:()=>`motif_${Date.now()}`}),f.jsx(Fg,{show:!!p,title:p!=null&&p.id?"Modifier le trajet":"Nouveau trajet",entity:p,fields:x,onClose:()=>m(null),onSave:b,generateId:()=>`trajet_${Date.now()}`}),f.jsx(eu,{show:!!l,onClose:()=>h(null),onConfirm:C,title:"Supprimer le motif",message:`Êtes-vous sûr de vouloir supprimer le motif "${l==null?void 0:l.nom}" ? Cette action est irréversible.`}),f.jsx(eu,{show:!!g,onClose:()=>E(null),onConfirm:z,title:"Supprimer le trajet",message:`Êtes-vous sûr de vouloir supprimer le trajet "${g==null?void 0:g.nom}" ? Cette action est irréversible.`})]})},xx=({show:t,onClose:e,isAuthenticated:n,userEmail:r,onSignIn:s,onSignOut:i,onSendReset:o})=>{const[u,l]=j.useState(""),[h,p]=j.useState(""),[m,g]=j.useState(null),[E,k]=j.useState(!1);if(j.useEffect(()=>{n&&r&&l(r)},[n,r]),!t)return null;const P=async()=>{k(!0),g(null);try{await s(u,h)}catch(v){g((v==null?void 0:v.message)||"Erreur de connexion")}finally{k(!1)}},D=async()=>{k(!0),g(null);try{await o(u),g("Email de réinitialisation envoyé.")}catch(v){g((v==null?void 0:v.message)||"Erreur lors de la demande de réinitialisation")}finally{k(!1)}},x=async()=>{k(!0);try{await i()}catch(v){g((v==null?void 0:v.message)||"Erreur lors de la déconnexion")}finally{k(!1)}};return f.jsx(Df,{show:t,title:"Connexion",onClose:e,className:"max-w-md",children:n?f.jsxs("div",{className:"space-y-3",children:[f.jsx("p",{className:"text-sm text-zinc-700 dark:text-zinc-300",children:"Connecté en tant que"}),f.jsx("p",{className:"font-medium",children:r}),f.jsx("div",{className:"flex justify-end",children:f.jsx(fe,{variant:"secondary",onClick:x,disabled:E,children:"Déconnexion"})})]}):f.jsxs("div",{className:"space-y-3",children:[f.jsx(Wt,{label:"Email",name:"authEmail",type:"email",value:u,onChange:v=>l(v.target.value),placeholder:"votre@email.com"}),f.jsx(Wt,{label:"Mot de passe",name:"authPassword",type:"password",value:h,onChange:v=>p(v.target.value),placeholder:"••••••••"}),m&&f.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:m}),f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsx("button",{type:"button",className:"text-sm text-blue-600 hover:underline",onClick:D,disabled:E,children:"Mot de passe perdu"}),f.jsxs("div",{className:"space-x-2",children:[f.jsx(fe,{variant:"secondary",onClick:e,children:"Annuler"}),f.jsx(fe,{variant:"solid",onClick:P,disabled:E,children:"Se connecter"})]})]})]})})},Yi=({label:t,value:e,description:n})=>f.jsxs("div",{className:"w-full",children:[f.jsx("label",{className:"block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",children:t}),f.jsxs("div",{className:"mt-1",children:[f.jsx("p",{className:"block w-full rounded-md border-0 py-1.5 px-3 text-zinc-900 dark:text-white shadow-sm ring-1 ring-inset ring-zinc-300 dark:ring-zinc-600 bg-zinc-50 dark:bg-zinc-700/50 sm:text-sm h-[38px] flex items-center",children:e||"-"}),n&&f.jsx("p",{className:"mt-1.5 text-xs text-zinc-500 dark:text-zinc-400",children:n})]})]}),eh=({label:t,name:e,nameRecu:n,value:r,valueRecu:s,onChange:i})=>f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg",children:[f.jsx("div",{}),f.jsx(Wt,{label:`${t} (Dû)`,name:e,type:"number",step:"0.01",min:"0",value:r,onChange:i,placeholder:"0.00",isCurrency:!0}),f.jsx(Wt,{label:`Montant perçu (${t})`,name:n,type:"number",step:"0.01",min:"0",value:s,onChange:i,placeholder:"0.00",isCurrency:!0})]}),Yn=({label:t,name:e,value:n,onChange:r})=>f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg",children:[f.jsx("div",{}),f.jsx(Wt,{label:`${t} (Dû)`,name:e,type:"number",step:"0.01",min:"0",value:n,onChange:r,placeholder:"0.00",isCurrency:!0}),f.jsx("div",{})]});var zg={};/**
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
 */const k0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Sx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],u=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},x0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,u=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,p=i>>2,m=(i&3)<<4|u>>4;let g=(u&15)<<2|h>>6,E=h&63;l||(E=64,o||(g=64)),r.push(n[p],n[m],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Sx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],u=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||u==null||h==null||m==null)throw new Rx;const g=i<<2|u>>4;if(r.push(g),h!==64){const E=u<<4&240|h>>2;if(r.push(E),m!==64){const k=h<<6&192|m;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Rx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cx=function(t){const e=k0(t);return x0.encodeByteArray(e,!0)},tu=function(t){return Cx(t).replace(/\./g,"")},S0=function(t){try{return x0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ax(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Px=()=>Ax().__FIREBASE_DEFAULTS__,Nx=()=>{if(typeof process>"u"||typeof zg>"u")return;const t=zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&S0(t[1]);return e&&JSON.parse(e)},Ou=()=>{try{return Px()||Nx()||bx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},R0=t=>{var e,n;return(n=(e=Ou())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},C0=t=>{const e=R0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},A0=()=>{var t;return(t=Ou())===null||t===void 0?void 0:t.config},P0=t=>{var e;return(e=Ou())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Dx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function N0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[tu(JSON.stringify(n)),tu(JSON.stringify(o)),""].join(".")}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ox(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function Vx(){var t;const e=(t=Ou())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Mx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Lx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function jx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fx(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zx(){return!Vx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ux(){try{return typeof indexedDB=="object"}catch{return!1}}function Bx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const $x="FirebaseError";class Tn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$x,Object.setPrototypeOf(this,Tn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,aa.prototype.create)}}class aa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Hx(i,r):"Error",u=`${this.serviceName}: ${o} (${s}).`;return new Tn(s,u,r)}}function Hx(t,e){return t.replace(qx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const qx=/\{\$([^}]+)}/g;function Wx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function nu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ug(i)&&Ug(o)){if(!nu(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ug(t){return t!==null&&typeof t=="object"}/**
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
 */function la(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function so(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Kx(t,e){const n=new Gx(t,e);return n.subscribe.bind(n)}class Gx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Qx(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=th),s.error===void 0&&(s.error=th),s.complete===void 0&&(s.complete=th);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Qx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function th(){}/**
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
 */function Te(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ur="[DEFAULT]";/**
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
 */class Xx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jx(e))try{this.getOrInitializeService({instanceIdentifier:Ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ur){return this.instances.has(e)}getOptions(e=Ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ur){return this.component?this.component.multipleInstances?e:Ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yx(t){return t===Ur?void 0:t}function Jx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Zx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const eS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},tS=ae.INFO,nS={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},rS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=nS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Of{constructor(e){this.name=e,this._logLevel=tS,this._logHandler=rS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?eS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const sS=(t,e)=>e.some(n=>t instanceof n);let Bg,$g;function iS(){return Bg||(Bg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oS(){return $g||($g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b0=new WeakMap,fd=new WeakMap,D0=new WeakMap,nh=new WeakMap,Vf=new WeakMap;function aS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(vr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&b0.set(n,t)}).catch(()=>{}),Vf.set(e,t),e}function lS(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||D0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uS(t){pd=t(pd)}function cS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rh(this),e,...n);return D0.set(r,e.sort?e.sort():[e]),vr(r)}:oS().includes(t)?function(...e){return t.apply(rh(this),e),vr(b0.get(this))}:function(...e){return vr(t.apply(rh(this),e))}}function hS(t){return typeof t=="function"?cS(t):(t instanceof IDBTransaction&&lS(t),sS(t,iS())?new Proxy(t,pd):t)}function vr(t){if(t instanceof IDBRequest)return aS(t);if(nh.has(t))return nh.get(t);const e=hS(t);return e!==t&&(nh.set(t,e),Vf.set(e,t)),e}const rh=t=>Vf.get(t);function dS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),u=vr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(vr(o.result),l.oldVersion,l.newVersion,vr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const fS=["get","getKey","getAll","getAllKeys","count"],pS=["put","add","delete","clear"],sh=new Map;function Hg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sh.get(e))return sh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=pS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||fS.includes(n)))return;const i=async function(o,...u){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(u.shift())),(await Promise.all([h[n](...u),s&&l.done]))[0]};return sh.set(e,i),i}uS(t=>({...t,get:(e,n,r)=>Hg(e,n)||t.get(e,n,r),has:(e,n)=>!!Hg(e,n)||t.has(e,n)}));/**
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
 */class mS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(gS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function gS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",qg="0.10.13";/**
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
 */const zn=new Of("@firebase/app"),yS="@firebase/app-compat",_S="@firebase/analytics-compat",vS="@firebase/analytics",wS="@firebase/app-check-compat",ES="@firebase/app-check",TS="@firebase/auth",IS="@firebase/auth-compat",kS="@firebase/database",xS="@firebase/data-connect",SS="@firebase/database-compat",RS="@firebase/functions",CS="@firebase/functions-compat",AS="@firebase/installations",PS="@firebase/installations-compat",NS="@firebase/messaging",bS="@firebase/messaging-compat",DS="@firebase/performance",OS="@firebase/performance-compat",VS="@firebase/remote-config",MS="@firebase/remote-config-compat",LS="@firebase/storage",jS="@firebase/storage-compat",FS="@firebase/firestore",zS="@firebase/vertexai-preview",US="@firebase/firestore-compat",BS="firebase",$S="10.14.1";/**
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
 */const gd="[DEFAULT]",HS={[md]:"fire-core",[yS]:"fire-core-compat",[vS]:"fire-analytics",[_S]:"fire-analytics-compat",[ES]:"fire-app-check",[wS]:"fire-app-check-compat",[TS]:"fire-auth",[IS]:"fire-auth-compat",[kS]:"fire-rtdb",[xS]:"fire-data-connect",[SS]:"fire-rtdb-compat",[RS]:"fire-fn",[CS]:"fire-fn-compat",[AS]:"fire-iid",[PS]:"fire-iid-compat",[NS]:"fire-fcm",[bS]:"fire-fcm-compat",[DS]:"fire-perf",[OS]:"fire-perf-compat",[VS]:"fire-rc",[MS]:"fire-rc-compat",[LS]:"fire-gcs",[jS]:"fire-gcs-compat",[FS]:"fire-fst",[US]:"fire-fst-compat",[zS]:"fire-vertex","fire-js":"fire-js",[BS]:"fire-js-all"};/**
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
 */const ru=new Map,qS=new Map,yd=new Map;function Wg(t,e){try{t.container.addComponent(e)}catch(n){zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function rs(t){const e=t.name;if(yd.has(e))return zn.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of ru.values())Wg(n,t);for(const n of qS.values())Wg(n,t);return!0}function Vu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pn(t){return t.settings!==void 0}/**
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
 */const WS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new aa("app","Firebase",WS);/**
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
 */class KS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const ds=$S;function O0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw wr.create("bad-app-name",{appName:String(s)});if(n||(n=A0()),!n)throw wr.create("no-options");const i=ru.get(s);if(i){if(nu(n,i.options)&&nu(r,i.config))return i;throw wr.create("duplicate-app",{appName:s})}const o=new Zx(s);for(const l of yd.values())o.addComponent(l);const u=new KS(n,r,o);return ru.set(s,u),u}function Mf(t=gd){const e=ru.get(t);if(!e&&t===gd&&A0())return O0();if(!e)throw wr.create("no-app",{appName:t});return e}function pn(t,e,n){var r;let s=(r=HS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&u.push("and"),o&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),zn.warn(u.join(" "));return}rs(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const GS="firebase-heartbeat-database",QS=1,Ho="firebase-heartbeat-store";let ih=null;function V0(){return ih||(ih=dS(GS,QS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),ih}async function XS(t){try{const n=(await V0()).transaction(Ho),r=await n.objectStore(Ho).get(M0(t));return await n.done,r}catch(e){if(e instanceof Tn)zn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});zn.warn(n.message)}}}async function Kg(t,e){try{const r=(await V0()).transaction(Ho,"readwrite");await r.objectStore(Ho).put(e,M0(t)),await r.done}catch(n){if(n instanceof Tn)zn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});zn.warn(r.message)}}}function M0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YS=1024,JS=30*24*60*60*1e3;class ZS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const u=new Date(o.date).valueOf();return Date.now()-u<=JS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gg(),{heartbeatsToSend:r,unsentEntries:s}=eR(this._heartbeatsCache.heartbeats),i=tu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return zn.warn(n),""}}}function Gg(){return new Date().toISOString().substring(0,10)}function eR(t,e=YS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ux()?Bx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await XS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qg(t){return tu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nR(t){rs(new xr("platform-logger",e=>new mS(e),"PRIVATE")),rs(new xr("heartbeat",e=>new ZS(e),"PRIVATE")),pn(md,qg,t),pn(md,qg,"esm2017"),pn("fire-js","")}nR("");var rR="firebase",sR="10.14.1";/**
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
 */pn(rR,sR,"app");var Xg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qr,L0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.D=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(S,A,R){for(var T=Array(arguments.length-2),X=2;X<arguments.length;X++)T[X-2]=arguments[X];return y.prototype[A].apply(S,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,I){I||(I=0);var S=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)S[A]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(A=0;16>A;++A)S[A]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],A=w.g[2];var R=w.g[3],T=y+(R^I&(A^R))+S[0]+3614090360&4294967295;y=I+(T<<7&4294967295|T>>>25),T=R+(A^y&(I^A))+S[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(I^R&(y^I))+S[2]+606105819&4294967295,A=R+(T<<17&4294967295|T>>>15),T=I+(y^A&(R^y))+S[3]+3250441966&4294967295,I=A+(T<<22&4294967295|T>>>10),T=y+(R^I&(A^R))+S[4]+4118548399&4294967295,y=I+(T<<7&4294967295|T>>>25),T=R+(A^y&(I^A))+S[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(I^R&(y^I))+S[6]+2821735955&4294967295,A=R+(T<<17&4294967295|T>>>15),T=I+(y^A&(R^y))+S[7]+4249261313&4294967295,I=A+(T<<22&4294967295|T>>>10),T=y+(R^I&(A^R))+S[8]+1770035416&4294967295,y=I+(T<<7&4294967295|T>>>25),T=R+(A^y&(I^A))+S[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(I^R&(y^I))+S[10]+4294925233&4294967295,A=R+(T<<17&4294967295|T>>>15),T=I+(y^A&(R^y))+S[11]+2304563134&4294967295,I=A+(T<<22&4294967295|T>>>10),T=y+(R^I&(A^R))+S[12]+1804603682&4294967295,y=I+(T<<7&4294967295|T>>>25),T=R+(A^y&(I^A))+S[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=A+(I^R&(y^I))+S[14]+2792965006&4294967295,A=R+(T<<17&4294967295|T>>>15),T=I+(y^A&(R^y))+S[15]+1236535329&4294967295,I=A+(T<<22&4294967295|T>>>10),T=y+(A^R&(I^A))+S[1]+4129170786&4294967295,y=I+(T<<5&4294967295|T>>>27),T=R+(I^A&(y^I))+S[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^I&(R^y))+S[11]+643717713&4294967295,A=R+(T<<14&4294967295|T>>>18),T=I+(R^y&(A^R))+S[0]+3921069994&4294967295,I=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(I^A))+S[5]+3593408605&4294967295,y=I+(T<<5&4294967295|T>>>27),T=R+(I^A&(y^I))+S[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^I&(R^y))+S[15]+3634488961&4294967295,A=R+(T<<14&4294967295|T>>>18),T=I+(R^y&(A^R))+S[4]+3889429448&4294967295,I=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(I^A))+S[9]+568446438&4294967295,y=I+(T<<5&4294967295|T>>>27),T=R+(I^A&(y^I))+S[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^I&(R^y))+S[3]+4107603335&4294967295,A=R+(T<<14&4294967295|T>>>18),T=I+(R^y&(A^R))+S[8]+1163531501&4294967295,I=A+(T<<20&4294967295|T>>>12),T=y+(A^R&(I^A))+S[13]+2850285829&4294967295,y=I+(T<<5&4294967295|T>>>27),T=R+(I^A&(y^I))+S[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=A+(y^I&(R^y))+S[7]+1735328473&4294967295,A=R+(T<<14&4294967295|T>>>18),T=I+(R^y&(A^R))+S[12]+2368359562&4294967295,I=A+(T<<20&4294967295|T>>>12),T=y+(I^A^R)+S[5]+4294588738&4294967295,y=I+(T<<4&4294967295|T>>>28),T=R+(y^I^A)+S[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^I)+S[11]+1839030562&4294967295,A=R+(T<<16&4294967295|T>>>16),T=I+(A^R^y)+S[14]+4259657740&4294967295,I=A+(T<<23&4294967295|T>>>9),T=y+(I^A^R)+S[1]+2763975236&4294967295,y=I+(T<<4&4294967295|T>>>28),T=R+(y^I^A)+S[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^I)+S[7]+4139469664&4294967295,A=R+(T<<16&4294967295|T>>>16),T=I+(A^R^y)+S[10]+3200236656&4294967295,I=A+(T<<23&4294967295|T>>>9),T=y+(I^A^R)+S[13]+681279174&4294967295,y=I+(T<<4&4294967295|T>>>28),T=R+(y^I^A)+S[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^I)+S[3]+3572445317&4294967295,A=R+(T<<16&4294967295|T>>>16),T=I+(A^R^y)+S[6]+76029189&4294967295,I=A+(T<<23&4294967295|T>>>9),T=y+(I^A^R)+S[9]+3654602809&4294967295,y=I+(T<<4&4294967295|T>>>28),T=R+(y^I^A)+S[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=A+(R^y^I)+S[15]+530742520&4294967295,A=R+(T<<16&4294967295|T>>>16),T=I+(A^R^y)+S[2]+3299628645&4294967295,I=A+(T<<23&4294967295|T>>>9),T=y+(A^(I|~R))+S[0]+4096336452&4294967295,y=I+(T<<6&4294967295|T>>>26),T=R+(I^(y|~A))+S[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~I))+S[14]+2878612391&4294967295,A=R+(T<<15&4294967295|T>>>17),T=I+(R^(A|~y))+S[5]+4237533241&4294967295,I=A+(T<<21&4294967295|T>>>11),T=y+(A^(I|~R))+S[12]+1700485571&4294967295,y=I+(T<<6&4294967295|T>>>26),T=R+(I^(y|~A))+S[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~I))+S[10]+4293915773&4294967295,A=R+(T<<15&4294967295|T>>>17),T=I+(R^(A|~y))+S[1]+2240044497&4294967295,I=A+(T<<21&4294967295|T>>>11),T=y+(A^(I|~R))+S[8]+1873313359&4294967295,y=I+(T<<6&4294967295|T>>>26),T=R+(I^(y|~A))+S[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~I))+S[6]+2734768916&4294967295,A=R+(T<<15&4294967295|T>>>17),T=I+(R^(A|~y))+S[13]+1309151649&4294967295,I=A+(T<<21&4294967295|T>>>11),T=y+(A^(I|~R))+S[4]+4149444226&4294967295,y=I+(T<<6&4294967295|T>>>26),T=R+(I^(y|~A))+S[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=A+(y^(R|~I))+S[2]+718787259&4294967295,A=R+(T<<15&4294967295|T>>>17),T=I+(R^(A|~y))+S[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var I=y-this.blockSize,S=this.B,A=this.h,R=0;R<y;){if(A==0)for(;R<=I;)s(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<y;)if(S[A++]=w.charCodeAt(R++),A==this.blockSize){s(this,S),A=0;break}}else for(;R<y;)if(S[A++]=w[R++],A==this.blockSize){s(this,S),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var I=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=I&255,I/=256;for(this.u(w),w=Array(16),y=I=0;4>y;++y)for(var S=0;32>S;S+=8)w[I++]=this.g[y]>>>S&255;return w};function i(w,y){var I=u;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;for(var I=[],S=!0,A=w.length-1;0<=A;A--){var R=w[A]|0;S&&R==y||(I[A]=R,S=!1)}this.g=I}var u={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return D(h(-w));for(var y=[],I=1,S=0;w>=I;S++)y[S]=w/I|0,I*=4294967296;return new o(y,0)}function p(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return D(p(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(y,8)),S=m,A=0;A<w.length;A+=8){var R=Math.min(8,w.length-A),T=parseInt(w.substring(A,A+R),y);8>R?(R=h(Math.pow(y,R)),S=S.j(R).add(h(T))):(S=S.j(I),S=S.add(h(T)))}return S}var m=l(0),g=l(1),E=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-D(this).m();for(var w=0,y=1,I=0;I<this.g.length;I++){var S=this.i(I);w+=(0<=S?S:4294967296+S)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(k(this))return"0";if(P(this))return"-"+D(this).toString(w);for(var y=h(Math.pow(w,6)),I=this,S="";;){var A=b(I,y).g;I=x(I,A.j(y));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=A,k(I))return R+S;for(;6>R.length;)R="0"+R;S=R+S}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function k(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function P(w){return w.h==-1}t.l=function(w){return w=x(this,w),P(w)?-1:k(w)?0:1};function D(w){for(var y=w.g.length,I=[],S=0;S<y;S++)I[S]=~w.g[S];return new o(I,~w.h).add(g)}t.abs=function(){return P(this)?D(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],S=0,A=0;A<=y;A++){var R=S+(this.i(A)&65535)+(w.i(A)&65535),T=(R>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);S=T>>>16,R&=65535,T&=65535,I[A]=T<<16|R}return new o(I,I[I.length-1]&-2147483648?-1:0)};function x(w,y){return w.add(D(y))}t.j=function(w){if(k(this)||k(w))return m;if(P(this))return P(w)?D(this).j(D(w)):D(D(this).j(w));if(P(w))return D(this.j(D(w)));if(0>this.l(E)&&0>w.l(E))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,I=[],S=0;S<2*y;S++)I[S]=0;for(S=0;S<this.g.length;S++)for(var A=0;A<w.g.length;A++){var R=this.i(S)>>>16,T=this.i(S)&65535,X=w.i(A)>>>16,ke=w.i(A)&65535;I[2*S+2*A]+=T*ke,v(I,2*S+2*A),I[2*S+2*A+1]+=R*ke,v(I,2*S+2*A+1),I[2*S+2*A+1]+=T*X,v(I,2*S+2*A+1),I[2*S+2*A+2]+=R*X,v(I,2*S+2*A+2)}for(S=0;S<y;S++)I[S]=I[2*S+1]<<16|I[2*S];for(S=y;S<2*y;S++)I[S]=0;return new o(I,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function C(w,y){this.g=w,this.h=y}function b(w,y){if(k(y))throw Error("division by zero");if(k(w))return new C(m,m);if(P(w))return y=b(D(w),y),new C(D(y.g),D(y.h));if(P(y))return y=b(w,D(y)),new C(D(y.g),y.h);if(30<w.g.length){if(P(w)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var I=g,S=y;0>=S.l(w);)I=z(I),S=z(S);var A=V(I,1),R=V(S,1);for(S=V(S,2),I=V(I,2);!k(S);){var T=R.add(S);0>=T.l(w)&&(A=A.add(I),R=T),S=V(S,1),I=V(I,1)}return y=x(w,A.j(y)),new C(A,y)}for(A=m;0<=w.l(y);){for(I=Math.max(1,Math.floor(w.m()/y.m())),S=Math.ceil(Math.log(I)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),R=h(I),T=R.j(y);P(T)||0<T.l(w);)I-=S,R=h(I),T=R.j(y);k(R)&&(R=g),A=A.add(R),w=x(w,T)}return new C(A,w)}t.A=function(w){return b(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],S=0;S<y;S++)I[S]=this.i(S)&w.i(S);return new o(I,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],S=0;S<y;S++)I[S]=this.i(S)|w.i(S);return new o(I,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),I=[],S=0;S<y;S++)I[S]=this.i(S)^w.i(S);return new o(I,this.h^w.h)};function z(w){for(var y=w.g.length+1,I=[],S=0;S<y;S++)I[S]=w.i(S)<<1|w.i(S-1)>>>31;return new o(I,w.h)}function V(w,y){var I=y>>5;y%=32;for(var S=w.g.length-I,A=[],R=0;R<S;R++)A[R]=0<y?w.i(R+I)>>>y|w.i(R+I+1)<<32-y:w.i(R+I);return new o(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,L0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Qr=o}).apply(typeof Xg<"u"?Xg:typeof self<"u"?self:typeof window<"u"?window:{});var tl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var j0,oo,F0,El,_d,z0,U0,B0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof tl=="object"&&tl];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var d=r;a=a.split(".");for(var _=0;_<a.length-1;_++){var N=a[_];if(!(N in d))break e;d=d[N]}a=a[a.length-1],_=d[a],c=c(_),c!=_&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var d=0,_=!1,N={next:function(){if(!_&&d<a.length){var O=d++;return{value:c(O,a[O]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},u=this||self;function l(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,d){return a.call.apply(a.bind,arguments)}function m(a,c,d){if(!a)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function E(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var _=d.slice();return _.push.apply(_,arguments),a.apply(this,_)}}function k(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(_,N,O){for(var B=Array(arguments.length-2),ye=2;ye<arguments.length;ye++)B[ye-2]=arguments[ye];return c.prototype[N].apply(_,B)}}function P(a){const c=a.length;if(0<c){const d=Array(c);for(let _=0;_<c;_++)d[_]=a[_];return d}return[]}function D(a,c){for(let d=1;d<arguments.length;d++){const _=arguments[d];if(l(_)){const N=a.length||0,O=_.length||0;a.length=N+O;for(let B=0;B<O;B++)a[N+B]=_[B]}else a.push(_)}}class x{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function C(){var a=u.navigator;return a&&(a=a.userAgent)?a:""}function b(a){return b[" "](a),a}b[" "]=function(){};var z=C().indexOf("Gecko")!=-1&&!(C().toLowerCase().indexOf("webkit")!=-1&&C().indexOf("Edge")==-1)&&!(C().indexOf("Trident")!=-1||C().indexOf("MSIE")!=-1)&&C().indexOf("Edge")==-1;function V(a,c,d){for(const _ in a)c.call(d,a[_],_,a)}function w(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function y(a){const c={};for(const d in a)c[d]=a[d];return c}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let d,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(d in _)a[d]=_[d];for(let O=0;O<I.length;O++)d=I[O],Object.prototype.hasOwnProperty.call(_,d)&&(a[d]=_[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function R(a){u.setTimeout(()=>{throw a},0)}function T(){var a=q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class X{constructor(){this.h=this.g=null}add(c,d){const _=ke.get();_.set(c,d),this.h?this.h.next=_:this.g=_,this.h=_}}var ke=new x(()=>new Oe,a=>a.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,U=!1,q=new X,W=()=>{const a=u.Promise.resolve(void 0);ue=()=>{a.then(J)}};var J=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){R(d)}var c=ke;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}U=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}pe.prototype.h=function(){this.defaultPrevented=!0};var Ue=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};u.addEventListener("test",d,c),u.removeEventListener("test",d,c)}catch{}return a}();function Ve(a,c){if(pe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,_=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(z){e:{try{b(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:je[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ve.aa.h.call(this)}}k(Ve,pe);var je={2:"touch",3:"pen",4:"mouse"};Ve.prototype.h=function(){Ve.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),Tt=0;function Ii(a,c,d,_,N){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!_,this.ha=N,this.key=++Tt,this.da=this.fa=!1}function Or(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function an(a){this.src=a,this.g={},this.h=0}an.prototype.add=function(a,c,d,_,N){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var B=xi(a,c,_,N);return-1<B?(c=a[B],d||(c.fa=!1)):(c=new Ii(c,this.src,O,!!_,N),c.fa=d,a.push(c)),c};function ki(a,c){var d=c.type;if(d in a.g){var _=a.g[d],N=Array.prototype.indexOf.call(_,c,void 0),O;(O=0<=N)&&Array.prototype.splice.call(_,N,1),O&&(Or(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function xi(a,c,d,_){for(var N=0;N<a.length;++N){var O=a[N];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==_)return N}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),Ri={};function wa(a,c,d,_,N){if(Array.isArray(c)){for(var O=0;O<c.length;O++)wa(a,c[O],d,_,N);return null}return d=_s(d),a&&a[Q]?a.K(c,d,h(_)?!!_.capture:!1,N):ac(a,c,d,!1,_,N)}function ac(a,c,d,_,N,O){if(!c)throw Error("Invalid event type");var B=h(N)?!!N.capture:!!N,ye=Ci(a);if(ye||(a[Si]=ye=new an(a)),d=ye.add(c,d,_,B,O),d.proxy)return d;if(_=lc(),d.proxy=_,_.src=a,_.listener=d,a.addEventListener)Ue||(N=B),N===void 0&&(N=!1),a.addEventListener(c.toString(),_,N);else if(a.attachEvent)a.attachEvent(Ta(c.toString()),_);else if(a.addListener&&a.removeListener)a.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return d}function lc(){function a(d){return c.call(a.src,a.listener,d)}const c=uc;return a}function Ea(a,c,d,_,N){if(Array.isArray(c))for(var O=0;O<c.length;O++)Ea(a,c[O],d,_,N);else _=h(_)?!!_.capture:!!_,d=_s(d),a&&a[Q]?(a=a.i,c=String(c).toString(),c in a.g&&(O=a.g[c],d=xi(O,d,_,N),-1<d&&(Or(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[c],a.h--)))):a&&(a=Ci(a))&&(c=a.g[c.toString()],a=-1,c&&(a=xi(c,d,_,N)),(d=-1<a?c[a]:null)&&ys(d))}function ys(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Q])ki(c.i,a);else{var d=a.type,_=a.proxy;c.removeEventListener?c.removeEventListener(d,_,a.capture):c.detachEvent?c.detachEvent(Ta(d),_):c.addListener&&c.removeListener&&c.removeListener(_),(d=Ci(c))?(ki(d,a),d.h==0&&(d.src=null,c[Si]=null)):Or(a)}}}function Ta(a){return a in Ri?Ri[a]:Ri[a]="on"+a}function uc(a,c){if(a.da)a=!0;else{c=new Ve(c,this);var d=a.listener,_=a.ha||a.src;a.fa&&ys(a),a=d.call(_,c)}return a}function Ci(a){return a=a[Si],a instanceof an?a:null}var Ai="__closure_events_fn_"+(1e9*Math.random()>>>0);function _s(a){return typeof a=="function"?a:(a[Ai]||(a[Ai]=function(c){return a.handleEvent(c)}),a[Ai])}function We(){re.call(this),this.i=new an(this),this.M=this,this.F=null}k(We,re),We.prototype[Q]=!0,We.prototype.removeEventListener=function(a,c,d,_){Ea(this,a,c,d,_)};function Xe(a,c){var d,_=a.F;if(_)for(d=[];_;_=_.F)d.push(_);if(a=a.M,_=c.type||c,typeof c=="string")c=new pe(c,a);else if(c instanceof pe)c.target=c.target||a;else{var N=c;c=new pe(_,a),S(c,N)}if(N=!0,d)for(var O=d.length-1;0<=O;O--){var B=c.g=d[O];N=Z(B,_,!0,c)&&N}if(B=c.g=a,N=Z(B,_,!0,c)&&N,N=Z(B,_,!1,c)&&N,d)for(O=0;O<d.length;O++)B=c.g=d[O],N=Z(B,_,!1,c)&&N}We.prototype.N=function(){if(We.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],_=0;_<d.length;_++)Or(d[_]);delete a.g[c],a.h--}}this.F=null},We.prototype.K=function(a,c,d,_){return this.i.add(String(a),c,!1,d,_)},We.prototype.L=function(a,c,d,_){return this.i.add(String(a),c,!0,d,_)};function Z(a,c,d,_){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,O=0;O<c.length;++O){var B=c[O];if(B&&!B.da&&B.capture==d){var ye=B.listener,Ye=B.ha||B.src;B.fa&&ki(a.i,B),N=ye.call(Ye,_)!==!1&&N}}return N&&!_.defaultPrevented}function ie(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(a,c||0)}function $t(a){a.g=ie(()=>{a.g=null,a.i&&(a.i=!1,$t(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class cc extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:$t(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pi(a){re.call(this),this.h=a,this.g={}}k(Pi,re);var Vp=[];function Mp(a){V(a.g,function(c,d){this.g.hasOwnProperty(d)&&ys(c)},a),a.g={}}Pi.prototype.N=function(){Pi.aa.N.call(this),Mp(this)},Pi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hc=u.JSON.stringify,sT=u.JSON.parse,iT=class{stringify(a){return u.JSON.stringify(a,void 0)}parse(a){return u.JSON.parse(a,void 0)}};function dc(){}dc.prototype.h=null;function Lp(a){return a.h||(a.h=a.i())}function jp(){}var Ni={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fc(){pe.call(this,"d")}k(fc,pe);function pc(){pe.call(this,"c")}k(pc,pe);var Vr={},Fp=null;function Ia(){return Fp=Fp||new We}Vr.La="serverreachability";function zp(a){pe.call(this,Vr.La,a)}k(zp,pe);function bi(a){const c=Ia();Xe(c,new zp(c))}Vr.STAT_EVENT="statevent";function Up(a,c){pe.call(this,Vr.STAT_EVENT,a),this.stat=c}k(Up,pe);function gt(a){const c=Ia();Xe(c,new Up(c,a))}Vr.Ma="timingevent";function Bp(a,c){pe.call(this,Vr.Ma,a),this.size=c}k(Bp,pe);function Di(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){a()},c)}function Oi(){this.g=!0}Oi.prototype.xa=function(){this.g=!1};function oT(a,c,d,_,N,O){a.info(function(){if(a.g)if(O)for(var B="",ye=O.split("&"),Ye=0;Ye<ye.length;Ye++){var he=ye[Ye].split("=");if(1<he.length){var ot=he[0];he=he[1];var at=ot.split("_");B=2<=at.length&&at[1]=="type"?B+(ot+"="+he+"&"):B+(ot+"=redacted&")}}else B=null;else B=O;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+c+`
`+d+`
`+B})}function aT(a,c,d,_,N,O,B){a.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+c+`
`+d+`
`+O+" "+B})}function vs(a,c,d,_){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+uT(a,d)+(_?" "+_:"")})}function lT(a,c){a.info(function(){return"TIMEOUT: "+c})}Oi.prototype.info=function(){};function uT(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var _=d[a];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var O=N[0];if(O!="noop"&&O!="stop"&&O!="close")for(var B=1;B<N.length;B++)N[B]=""}}}}return hc(d)}catch{return c}}var ka={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$p={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mc;function xa(){}k(xa,dc),xa.prototype.g=function(){return new XMLHttpRequest},xa.prototype.i=function(){return{}},mc=new xa;function Kn(a,c,d,_){this.j=a,this.i=c,this.l=d,this.R=_||1,this.U=new Pi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Hp}function Hp(){this.i=null,this.g="",this.h=!1}var qp={},gc={};function yc(a,c,d){a.L=1,a.v=Aa(kn(c)),a.m=d,a.P=!0,Wp(a,null)}function Wp(a,c){a.F=Date.now(),Sa(a),a.A=kn(a.v);var d=a.A,_=a.R;Array.isArray(_)||(_=[String(_)]),om(d.i,"t",_),a.C=0,d=a.j.J,a.h=new Hp,a.g=km(a.j,d?c:null,!a.m),0<a.O&&(a.M=new cc(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,_=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(Vp[0]=N.toString()),N=Vp);for(var O=0;O<N.length;O++){var B=wa(d,N[O],_||c.handleEvent,!1,c.h||c);if(!B)break;c.g[B.key]=B}c=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),bi(),oT(a.i,a.u,a.A,a.l,a.R,a.m)}Kn.prototype.ca=function(a){a=a.target;const c=this.M;c&&xn(a)==3?c.j():this.Y(a)},Kn.prototype.Y=function(a){try{if(a==this.g)e:{const at=xn(this.g);var c=this.g.Ba();const Ts=this.g.Z();if(!(3>at)&&(at!=3||this.g&&(this.h.h||this.g.oa()||fm(this.g)))){this.J||at!=4||c==7||(c==8||0>=Ts?bi(3):bi(2)),_c(this);var d=this.g.Z();this.X=d;t:if(Kp(this)){var _=fm(this.g);a="";var N=_.length,O=xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Mr(this),Vi(this);var B="";break t}this.h.i=new u.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(_[c],{stream:!(O&&c==N-1)});_.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=d==200,aT(this.i,this.u,this.A,this.l,this.R,at,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ye,Ye=this.g;if((ye=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ye)){var he=ye;break t}}he=null}if(d=he)vs(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vc(this,d);else{this.o=!1,this.s=3,gt(12),Mr(this),Vi(this);break e}}if(this.P){d=!0;let Yt;for(;!this.J&&this.C<B.length;)if(Yt=cT(this,B),Yt==gc){at==4&&(this.s=4,gt(14),d=!1),vs(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==qp){this.s=4,gt(15),vs(this.i,this.l,B,"[Invalid Chunk]"),d=!1;break}else vs(this.i,this.l,Yt,null),vc(this,Yt);if(Kp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),at!=4||B.length!=0||this.h.h||(this.s=1,gt(16),d=!1),this.o=this.o&&d,!d)vs(this.i,this.l,B,"[Invalid Chunked Response]"),Mr(this),Vi(this);else if(0<B.length&&!this.W){this.W=!0;var ot=this.j;ot.g==this&&ot.ba&&!ot.M&&(ot.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),xc(ot),ot.M=!0,gt(11))}}else vs(this.i,this.l,B,null),vc(this,B);at==4&&Mr(this),this.o&&!this.J&&(at==4?wm(this.j,this):(this.o=!1,Sa(this)))}else RT(this.g),d==400&&0<B.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Mr(this),Vi(this)}}}catch{}finally{}};function Kp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function cT(a,c){var d=a.C,_=c.indexOf(`
`,d);return _==-1?gc:(d=Number(c.substring(d,_)),isNaN(d)?qp:(_+=1,_+d>c.length?gc:(c=c.slice(_,_+d),a.C=_+d,c)))}Kn.prototype.cancel=function(){this.J=!0,Mr(this)};function Sa(a){a.S=Date.now()+a.I,Gp(a,a.I)}function Gp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Di(g(a.ba,a),c)}function _c(a){a.B&&(u.clearTimeout(a.B),a.B=null)}Kn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(lT(this.i,this.A),this.L!=2&&(bi(),gt(17)),Mr(this),this.s=2,Vi(this)):Gp(this,this.S-a)};function Vi(a){a.j.G==0||a.J||wm(a.j,a)}function Mr(a){_c(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,Mp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function vc(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||wc(d.h,a))){if(!a.K&&wc(d.h,a)&&d.G==3){try{var _=d.Da.g.parse(c)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Va(d),Da(d);else break e;kc(d),gt(18)}}else d.za=N[1],0<d.za-d.T&&37500>N[2]&&d.F&&d.v==0&&!d.C&&(d.C=Di(g(d.Za,d),6e3));if(1>=Yp(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else jr(d,11)}else if((a.K||d.g==a)&&Va(d),!v(c))for(N=d.Da.g.parse(c),c=0;c<N.length;c++){let he=N[c];if(d.T=he[0],he=he[1],d.G==2)if(he[0]=="c"){d.K=he[1],d.ia=he[2];const ot=he[3];ot!=null&&(d.la=ot,d.j.info("VER="+d.la));const at=he[4];at!=null&&(d.Aa=at,d.j.info("SVER="+d.Aa));const Ts=he[5];Ts!=null&&typeof Ts=="number"&&0<Ts&&(_=1.5*Ts,d.L=_,d.j.info("backChannelRequestTimeoutMs_="+_)),_=d;const Yt=a.g;if(Yt){const La=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(La){var O=_.h;O.g||La.indexOf("spdy")==-1&&La.indexOf("quic")==-1&&La.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Ec(O,O.h),O.h=null))}if(_.D){const Sc=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Sc&&(_.ya=Sc,ve(_.I,_.D,Sc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),_=d;var B=a;if(_.qa=Im(_,_.J?_.ia:null,_.W),B.K){Jp(_.h,B);var ye=B,Ye=_.L;Ye&&(ye.I=Ye),ye.B&&(_c(ye),Sa(ye)),_.g=B}else _m(_);0<d.i.length&&Oa(d)}else he[0]!="stop"&&he[0]!="close"||jr(d,7);else d.G==3&&(he[0]=="stop"||he[0]=="close"?he[0]=="stop"?jr(d,7):Ic(d):he[0]!="noop"&&d.l&&d.l.ta(he),d.v=0)}}bi(4)}catch{}}var hT=class{constructor(a,c){this.g=a,this.map=c}};function Qp(a){this.l=a||10,u.PerformanceNavigationTiming?(a=u.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Yp(a){return a.h?1:a.g?a.g.size:0}function wc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Ec(a,c){a.g?a.g.add(c):a.h=c}function Jp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Qp.prototype.cancel=function(){if(this.i=Zp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Zp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return P(a.i)}function dT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var c=[],d=a.length,_=0;_<d;_++)c.push(a[_]);return c}c=[],d=0;for(_ in a)c[d++]=a[_];return c}function fT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const _ in a)c[d++]=_;return c}}}function em(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=fT(a),_=dT(a),N=_.length,O=0;O<N;O++)c.call(void 0,_[O],d&&d[O],a)}var tm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pT(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var _=a[d].indexOf("="),N=null;if(0<=_){var O=a[d].substring(0,_);N=a[d].substring(_+1)}else O=a[d];c(O,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Lr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Lr){this.h=a.h,Ra(this,a.j),this.o=a.o,this.g=a.g,Ca(this,a.s),this.l=a.l;var c=a.i,d=new ji;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),nm(this,d),this.m=a.m}else a&&(c=String(a).match(tm))?(this.h=!1,Ra(this,c[1]||"",!0),this.o=Mi(c[2]||""),this.g=Mi(c[3]||"",!0),Ca(this,c[4]),this.l=Mi(c[5]||"",!0),nm(this,c[6]||"",!0),this.m=Mi(c[7]||"")):(this.h=!1,this.i=new ji(null,this.h))}Lr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Li(c,rm,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Li(c,rm,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Li(d,d.charAt(0)=="/"?yT:gT,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Li(d,vT)),a.join("")};function kn(a){return new Lr(a)}function Ra(a,c,d){a.j=d?Mi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Ca(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function nm(a,c,d){c instanceof ji?(a.i=c,wT(a.i,a.h)):(d||(c=Li(c,_T)),a.i=new ji(c,a.h))}function ve(a,c,d){a.i.set(c,d)}function Aa(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Mi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Li(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,mT),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function mT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var rm=/[#\/\?@]/g,gT=/[#\?:]/g,yT=/[#\?]/g,_T=/[#\?@]/g,vT=/#/g;function ji(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&pT(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ji.prototype,t.add=function(a,c){Gn(this),this.i=null,a=ws(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function sm(a,c){Gn(a),c=ws(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function im(a,c){return Gn(a),c=ws(a,c),a.g.has(c)}t.forEach=function(a,c){Gn(this),this.g.forEach(function(d,_){d.forEach(function(N){a.call(c,N,_,this)},this)},this)},t.na=function(){Gn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let _=0;_<c.length;_++){const N=a[_];for(let O=0;O<N.length;O++)d.push(c[_])}return d},t.V=function(a){Gn(this);let c=[];if(typeof a=="string")im(this,a)&&(c=c.concat(this.g.get(ws(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Gn(this),this.i=null,a=ws(this,a),im(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function om(a,c,d){sm(a,c),0<d.length&&(a.i=null,a.g.set(ws(a,c),P(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var _=c[d];const O=encodeURIComponent(String(_)),B=this.V(_);for(_=0;_<B.length;_++){var N=O;B[_]!==""&&(N+="="+encodeURIComponent(String(B[_]))),a.push(N)}}return this.i=a.join("&")};function ws(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function wT(a,c){c&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(d,_){var N=_.toLowerCase();_!=N&&(sm(this,_),om(this,N,d))},a)),a.j=c}function ET(a,c){const d=new Oi;if(u.Image){const _=new Image;_.onload=E(Qn,d,"TestLoadImage: loaded",!0,c,_),_.onerror=E(Qn,d,"TestLoadImage: error",!1,c,_),_.onabort=E(Qn,d,"TestLoadImage: abort",!1,c,_),_.ontimeout=E(Qn,d,"TestLoadImage: timeout",!1,c,_),u.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=a}else c(!1)}function TT(a,c){const d=new Oi,_=new AbortController,N=setTimeout(()=>{_.abort(),Qn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:_.signal}).then(O=>{clearTimeout(N),O.ok?Qn(d,"TestPingServer: ok",!0,c):Qn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Qn(d,"TestPingServer: error",!1,c)})}function Qn(a,c,d,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(d)}catch{}}function IT(){this.g=new iT}function kT(a,c,d){const _=d||"";try{em(a,function(N,O){let B=N;h(N)&&(B=hc(N)),c.push(_+O+"="+encodeURIComponent(B))})}catch(N){throw c.push(_+"type="+encodeURIComponent("_badmap")),N}}function Pa(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Pa,dc),Pa.prototype.g=function(){return new Na(this.l,this.j)},Pa.prototype.i=function(a){return function(){return a}}({});function Na(a,c){We.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Na,We),t=Na.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,zi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zi(this)),this.g&&(this.readyState=3,zi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;am(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function am(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Fi(this):zi(this),this.readyState==3&&am(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Fi(this))},t.Qa=function(a){this.g&&(this.response=a,Fi(this))},t.ga=function(){this.g&&Fi(this)};function Fi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function zi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Na.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function lm(a){let c="";return V(a,function(d,_){c+=_,c+=":",c+=d,c+=`\r
`}),c}function Tc(a,c,d){e:{for(_ in d){var _=!1;break e}_=!0}_||(d=lm(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ve(a,c,d))}function be(a){We.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(be,We);var xT=/^https?$/i,ST=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mc.g(),this.v=this.o?Lp(this.o):Lp(mc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(O){um(this,O);return}if(a=d||"",d=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)d.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const O of _.keys())d.set(O,_.get(O));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),N=u.FormData&&a instanceof u.FormData,!(0<=Array.prototype.indexOf.call(ST,c,void 0))||_||N||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,B]of d)this.g.setRequestHeader(O,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{dm(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){um(this,O)}};function um(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,cm(a),ba(a)}function cm(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Xe(this,"complete"),Xe(this,"abort"),ba(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ba(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?hm(this):this.bb())},t.bb=function(){hm(this)};function hm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||xn(a)!=4||a.Z()!=2)){if(a.u&&xn(a)==4)ie(a.Ea,0,a);else if(Xe(a,"readystatechange"),xn(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var _;if(_=B===0){var N=String(a.D).match(tm)[1]||null;!N&&u.self&&u.self.location&&(N=u.self.location.protocol.slice(0,-1)),_=!xT.test(N?N.toLowerCase():"")}d=_}if(d)Xe(a,"complete"),Xe(a,"success");else{a.m=6;try{var O=2<xn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",cm(a)}}finally{ba(a)}}}}function ba(a,c){if(a.g){dm(a);const d=a.g,_=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Xe(a,"ready");try{d.onreadystatechange=_}catch{}}}function dm(a){a.I&&(u.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function xn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),sT(c)}};function fm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function RT(a){const c={};a=(a.g&&2<=xn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<a.length;_++){if(v(a[_]))continue;var d=A(a[_]);const N=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[N]||[];c[N]=O,O.push(d)}w(c,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ui(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function pm(a){this.Aa=0,this.i=[],this.j=new Oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ui("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ui("baseRetryDelayMs",5e3,a),this.cb=Ui("retryDelaySeedMs",1e4,a),this.Wa=Ui("forwardChannelMaxRetries",2,a),this.wa=Ui("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Qp(a&&a.concurrentRequestLimit),this.Da=new IT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=pm.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,_){gt(0),this.W=a,this.H=c||{},d&&_!==void 0&&(this.H.OSID=d,this.H.OAID=_),this.F=this.X,this.I=Im(this,null,this.W),Oa(this)};function Ic(a){if(mm(a),a.G==3){var c=a.U++,d=kn(a.I);if(ve(d,"SID",a.K),ve(d,"RID",c),ve(d,"TYPE","terminate"),Bi(a,d),c=new Kn(a,a.j,c),c.L=2,c.v=Aa(kn(d)),d=!1,u.navigator&&u.navigator.sendBeacon)try{d=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&u.Image&&(new Image().src=c.v,d=!0),d||(c.g=km(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Sa(c)}Tm(a)}function Da(a){a.g&&(xc(a),a.g.cancel(),a.g=null)}function mm(a){Da(a),a.u&&(u.clearTimeout(a.u),a.u=null),Va(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&u.clearTimeout(a.s),a.s=null)}function Oa(a){if(!Xp(a.h)&&!a.s){a.s=!0;var c=a.Ga;ue||W(),U||(ue(),U=!0),q.add(c,a),a.B=0}}function CT(a,c){return Yp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Di(g(a.Ga,a,c),Em(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Kn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(N.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var _=this.i[d];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(c+=_,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=ym(this,N,c),d=kn(this.I),ve(d,"RID",a),ve(d,"CVER",22),this.D&&ve(d,"X-HTTP-Session-Id",this.D),Bi(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(lm(O)))+"&"+c:this.m&&Tc(d,this.m,O)),Ec(this.h,N),this.Ua&&ve(d,"TYPE","init"),this.P?(ve(d,"$req",c),ve(d,"SID","null"),N.T=!0,yc(N,d,null)):yc(N,d,c),this.G=2}}else this.G==3&&(a?gm(this,a):this.i.length==0||Xp(this.h)||gm(this))};function gm(a,c){var d;c?d=c.l:d=a.U++;const _=kn(a.I);ve(_,"SID",a.K),ve(_,"RID",d),ve(_,"AID",a.T),Bi(a,_),a.m&&a.o&&Tc(_,a.m,a.o),d=new Kn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=ym(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Ec(a.h,d),yc(d,_,c)}function Bi(a,c){a.H&&V(a.H,function(d,_){ve(c,_,d)}),a.l&&em({},function(d,_){ve(c,_,d)})}function ym(a,c,d){d=Math.min(a.i.length,d);var _=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let O=-1;for(;;){const B=["count="+d];O==-1?0<d?(O=N[0].g,B.push("ofs="+O)):O=0:B.push("ofs="+O);let ye=!0;for(let Ye=0;Ye<d;Ye++){let he=N[Ye].g;const ot=N[Ye].map;if(he-=O,0>he)O=Math.max(0,N[Ye].g-100),ye=!1;else try{kT(ot,B,"req"+he+"_")}catch{_&&_(ot)}}if(ye){_=B.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,_}function _m(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;ue||W(),U||(ue(),U=!0),q.add(c,a),a.v=0}}function kc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Di(g(a.Fa,a),Em(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,vm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Di(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,gt(10),Da(this),vm(this))};function xc(a){a.A!=null&&(u.clearTimeout(a.A),a.A=null)}function vm(a){a.g=new Kn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=kn(a.qa);ve(c,"RID","rpc"),ve(c,"SID",a.K),ve(c,"AID",a.T),ve(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(c,"TO",a.ja),ve(c,"TYPE","xmlhttp"),Bi(a,c),a.m&&a.o&&Tc(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Aa(kn(c)),d.m=null,d.P=!0,Wp(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Da(this),kc(this),gt(19))};function Va(a){a.C!=null&&(u.clearTimeout(a.C),a.C=null)}function wm(a,c){var d=null;if(a.g==c){Va(a),xc(a),a.g=null;var _=2}else if(wc(a.h,c))d=c.D,Jp(a.h,c),_=1;else return;if(a.G!=0){if(c.o)if(_==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;_=Ia(),Xe(_,new Bp(_,d)),Oa(a)}else _m(a);else if(N=c.s,N==3||N==0&&0<c.X||!(_==1&&CT(a,c)||_==2&&kc(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),N){case 1:jr(a,5);break;case 4:jr(a,10);break;case 3:jr(a,6);break;default:jr(a,2)}}}function Em(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function jr(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),_=a.Xa;const N=!_;_=new Lr(_||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ra(_,"https"),Aa(_),N?ET(_.toString(),d):TT(_.toString(),d)}else gt(2);a.G=0,a.l&&a.l.sa(c),Tm(a),mm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),gt(2)):(this.j.info("Failed to ping google.com"),gt(1))};function Tm(a){if(a.G=0,a.ka=[],a.l){const c=Zp(a.h);(c.length!=0||a.i.length!=0)&&(D(a.ka,c),D(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Im(a,c,d){var _=d instanceof Lr?kn(d):new Lr(d);if(_.g!="")c&&(_.g=c+"."+_.g),Ca(_,_.s);else{var N=u.location;_=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var O=new Lr(null);_&&Ra(O,_),c&&(O.g=c),N&&Ca(O,N),d&&(O.l=d),_=O}return d=a.D,c=a.ya,d&&c&&ve(_,d,c),ve(_,"VER",a.la),Bi(a,_),_}function km(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new be(new Pa({eb:d})):new be(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xm(){}t=xm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ma(){}Ma.prototype.g=function(a,c){return new Dt(a,c)};function Dt(a,c){We.call(this),this.g=new pm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new Es(this)}k(Dt,We),Dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Dt.prototype.close=function(){Ic(this.g)},Dt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=hc(a),a=d);c.i.push(new hT(c.Ya++,a)),c.G==3&&Oa(c)},Dt.prototype.N=function(){this.g.l=null,delete this.j,Ic(this.g),delete this.g,Dt.aa.N.call(this)};function Sm(a){fc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}k(Sm,fc);function Rm(){pc.call(this),this.status=1}k(Rm,pc);function Es(a){this.g=a}k(Es,xm),Es.prototype.ua=function(){Xe(this.g,"a")},Es.prototype.ta=function(a){Xe(this.g,new Sm(a))},Es.prototype.sa=function(a){Xe(this.g,new Rm)},Es.prototype.ra=function(){Xe(this.g,"b")},Ma.prototype.createWebChannel=Ma.prototype.g,Dt.prototype.send=Dt.prototype.o,Dt.prototype.open=Dt.prototype.m,Dt.prototype.close=Dt.prototype.close,B0=function(){return new Ma},U0=function(){return Ia()},z0=Vr,_d={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ka.NO_ERROR=0,ka.TIMEOUT=8,ka.HTTP_ERROR=6,El=ka,$p.COMPLETE="complete",F0=$p,jp.EventType=Ni,Ni.OPEN="a",Ni.CLOSE="b",Ni.ERROR="c",Ni.MESSAGE="d",We.prototype.listen=We.prototype.K,oo=jp,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,j0=be}).apply(typeof tl<"u"?tl:typeof self<"u"?self:typeof window<"u"?window:{});const Yg="@firebase/firestore";/**
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
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
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
 */let yi="10.14.0";/**
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
 */const ss=new Of("@firebase/firestore");function Ji(){return ss.logLevel}function H(t,...e){if(ss.logLevel<=ae.DEBUG){const n=e.map(Lf);ss.debug(`Firestore (${yi}): ${t}`,...n)}}function Un(t,...e){if(ss.logLevel<=ae.ERROR){const n=e.map(Lf);ss.error(`Firestore (${yi}): ${t}`,...n)}}function oi(t,...e){if(ss.logLevel<=ae.WARN){const n=e.map(Lf);ss.warn(`Firestore (${yi}): ${t}`,...n)}}function Lf(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${yi}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function ge(t,e){t||ee()}function ne(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Tn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class $0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class iR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class oR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aR{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ge(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Xr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ge(typeof r.accessToken=="string"),new $0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ge(e===null||typeof e=="string"),new ht(e)}}class lR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class hR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ge(this.o===void 0);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ge(typeof n.token=="string"),this.R=n.token,new cR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class H0{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function ai(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return qe.fromMillis(Date.now())}static fromDate(e){return qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new qe(0,0))}static max(){return new te(new qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends qo{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const fR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends qo{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return fR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new K(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else u==="`"?(o=!o,s++):u!=="."||o?(r+=u,s++):(i(),s++)}if(i(),o)throw new K(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Se.fromString(e))}static fromName(e){return new G(Se.fromString(e).popFirst(5))}static empty(){return new G(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Se(e.slice()))}}function pR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new qe(n+1,0):new qe(n,r));return new Sr(s,G.empty(),e)}function mR(t){return new Sr(t.readTime,t.key,-1)}class Sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Sr(te.min(),G.empty(),-1)}static max(){return new Sr(te.max(),G.empty(),-1)}}function gR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const yR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _R{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ua(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==yR)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(u=>{++s,u.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let u=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(p=>{o[h]=p,++u,u===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function vR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ca(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class jf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jf.oe=-1;function Mu(t){return t==null}function su(t){return t===0&&1/t==-1/0}function wR(t){return typeof t=="number"&&Number.isInteger(t)&&!su(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Jg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nl(this.root,e,this.comparator,!1)}getReverseIterator(){return new nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nl(this.root,e,this.comparator,!0)}}class nl{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zg(this.data.getIterator())}getIteratorFrom(e){return new Zg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class Zg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Lt{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new nt(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ai(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class W0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class st{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new W0("Invalid base64 string: "+i):i}}(e);return new st(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new st(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}st.EMPTY_BYTE_STRING=new st("");const ER=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rr(t){if(ge(!!t),typeof t=="string"){let e=0;const n=ER.exec(t);if(ge(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function is(t){return typeof t=="string"?st.fromBase64String(t):st.fromUint8Array(t)}/**
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
 */function Ff(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function zf(t){const e=t.mapValue.fields.__previous_value__;return Ff(e)?zf(e):e}function Wo(t){const e=Rr(t.mapValue.fields.__local_write_time__.timestampValue);return new qe(e.seconds,e.nanos)}/**
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
 */class TR{constructor(e,n,r,s,i,o,u,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=h}}class Ko{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const rl={mapValue:{}};function os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ff(t)?4:kR(t)?9007199254740991:IR(t)?10:11:ee()}function wn(t,e){if(t===e)return!0;const n=os(t);if(n!==os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Wo(t).isEqual(Wo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Rr(s.timestampValue),u=Rr(i.timestampValue);return o.seconds===u.seconds&&o.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return is(s.bytesValue).isEqual(is(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Me(s.geoPointValue.latitude)===Me(i.geoPointValue.latitude)&&Me(s.geoPointValue.longitude)===Me(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Me(s.integerValue)===Me(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Me(s.doubleValue),u=Me(i.doubleValue);return o===u?su(o)===su(u):isNaN(o)&&isNaN(u)}return!1}(t,e);case 9:return ai(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},u=i.mapValue.fields||{};if(Jg(o)!==Jg(u))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(u[l]===void 0||!wn(o[l],u[l])))return!1;return!0}(t,e);default:return ee()}}function Go(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function li(t,e){if(t===e)return 0;const n=os(t),r=os(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,o){const u=Me(i.integerValue||i.doubleValue),l=Me(o.integerValue||o.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(t,e);case 3:return ey(t.timestampValue,e.timestampValue);case 4:return ey(Wo(t),Wo(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,o){const u=is(i),l=is(o);return u.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const u=i.split("/"),l=o.split("/");for(let h=0;h<u.length&&h<l.length;h++){const p=de(u[h],l[h]);if(p!==0)return p}return de(u.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const u=de(Me(i.latitude),Me(o.latitude));return u!==0?u:de(Me(i.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ty(t.arrayValue,e.arrayValue);case 10:return function(i,o){var u,l,h,p;const m=i.fields||{},g=o.fields||{},E=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=(l=g.value)===null||l===void 0?void 0:l.arrayValue,P=de(((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0,((p=k==null?void 0:k.values)===null||p===void 0?void 0:p.length)||0);return P!==0?P:ty(E,k)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===rl.mapValue&&o===rl.mapValue)return 0;if(i===rl.mapValue)return 1;if(o===rl.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),h=o.fields||{},p=Object.keys(h);l.sort(),p.sort();for(let m=0;m<l.length&&m<p.length;++m){const g=de(l[m],p[m]);if(g!==0)return g;const E=li(u[l[m]],h[p[m]]);if(E!==0)return E}return de(l.length,p.length)}(t.mapValue,e.mapValue);default:throw ee()}}function ey(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Rr(t),r=Rr(e),s=de(n.seconds,r.seconds);return s!==0?s:de(n.nanos,r.nanos)}function ty(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=li(n[s],r[s]);if(i)return i}return de(n.length,r.length)}function ui(t){return vd(t)}function vd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return is(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vd(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function wd(t){return!!t&&"integerValue"in t}function Uf(t){return!!t&&"arrayValue"in t}function ny(t){return!!t&&"nullValue"in t}function ry(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Tl(t){return!!t&&"mapValue"in t}function IR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function wo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=wo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=wo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function kR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class St{constructor(e){this.value=e}static empty(){return new St({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Tl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(n)}setAll(e){let n=et.emptyPath(),r={},s=[];e.forEach((o,u)=>{if(!n.isImmediateParentOf(u)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=u.popLast()}o?r[u.lastSegment()]=wo(o):s.push(u.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Tl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Tl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new St(wo(this.value))}}function K0(t){const e=[];return fs(t.fields,(n,r)=>{const s=new et([n]);if(Tl(r)){const i=K0(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
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
 */class ft{constructor(e,n,r,s,i,o,u){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=u}static newInvalidDocument(e){return new ft(e,0,te.min(),te.min(),te.min(),St.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,te.min(),te.min(),St.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,te.min(),te.min(),St.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class iu{constructor(e,n){this.position=e,this.inclusive=n}}function sy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=li(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function iy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ou{constructor(e,n="asc"){this.field=e,this.dir=n}}function xR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class G0{}class $e extends G0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new RR(e,n,r):n==="array-contains"?new PR(e,r):n==="in"?new NR(e,r):n==="not-in"?new bR(e,r):n==="array-contains-any"?new DR(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CR(e,r):new AR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(li(n,this.value)):n!==null&&os(this.value)===os(n)&&this.matchesComparison(li(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class En extends G0{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new En(e,n)}matches(e){return Q0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Q0(t){return t.op==="and"}function X0(t){return SR(t)&&Q0(t)}function SR(t){for(const e of t.filters)if(e instanceof En)return!1;return!0}function Ed(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+ui(t.value);if(X0(t))return t.filters.map(e=>Ed(e)).join(",");{const e=t.filters.map(n=>Ed(n)).join(",");return`${t.op}(${e})`}}function Y0(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&wn(r.value,s.value)}(t,e):t instanceof En?function(r,s){return s instanceof En&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,u)=>i&&Y0(o,s.filters[u]),!0):!1}(t,e):void ee()}function J0(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${ui(n.value)}`}(t):t instanceof En?function(n){return n.op.toString()+" {"+n.getFilters().map(J0).join(" ,")+"}"}(t):"Filter"}class RR extends $e{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class CR extends $e{constructor(e,n){super(e,"in",n),this.keys=Z0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class AR extends $e{constructor(e,n){super(e,"not-in",n),this.keys=Z0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Z0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class PR extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uf(n)&&Go(n.arrayValue,this.value)}}class NR extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Go(this.value.arrayValue,n)}}class bR extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Go(this.value.arrayValue,n)}}class DR extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Go(this.value.arrayValue,r))}}/**
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
 */class OR{constructor(e,n=null,r=[],s=[],i=null,o=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=u,this.ue=null}}function oy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new OR(t,e,n,r,s,i,o)}function Bf(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ed(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ui(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ui(r)).join(",")),e.ue=n}return e.ue}function $f(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Y0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!iy(t.startAt,e.startAt)&&iy(t.endAt,e.endAt)}function Td(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Lu{constructor(e,n=null,r=[],s=[],i=null,o="F",u=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function VR(t,e,n,r,s,i,o,u){return new Lu(t,e,n,r,s,i,o,u)}function Hf(t){return new Lu(t)}function ay(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MR(t){return t.collectionGroup!==null}function Eo(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let u=new nt(et.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(u=u.add(h.field))})}),u})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ou(i,r))}),n.has(et.keyField().canonicalString())||e.ce.push(new ou(et.keyField(),r))}return e.ce}function mn(t){const e=ne(t);return e.le||(e.le=LR(e,Eo(t))),e.le}function LR(t,e){if(t.limitType==="F")return oy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ou(s.field,i)});const n=t.endAt?new iu(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new iu(t.startAt.position,t.startAt.inclusive):null;return oy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Id(t,e,n){return new Lu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ju(t,e){return $f(mn(t),mn(e))&&t.limitType===e.limitType}function ew(t){return`${Bf(mn(t))}|lt:${t.limitType}`}function xs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>J0(s)).join(", ")}]`),Mu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ui(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ui(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Fu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Eo(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,u,l){const h=sy(o,u,l);return o.inclusive?h<=0:h<0}(r.startAt,Eo(r),s)||r.endAt&&!function(o,u,l){const h=sy(o,u,l);return o.inclusive?h>=0:h>0}(r.endAt,Eo(r),s))}(t,e)}function jR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function tw(t){return(e,n)=>{let r=!1;for(const s of Eo(t)){const i=FR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FR(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,u){const l=o.data.field(i),h=u.data.field(i);return l!==null&&h!==null?li(l,h):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class _i{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return q0(this.inner)}size(){return this.innerSize}}/**
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
 */const zR=new Pe(G.comparator);function Bn(){return zR}const nw=new Pe(G.comparator);function ao(...t){let e=nw;for(const n of t)e=e.insert(n.key,n);return e}function rw(t){let e=nw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Wr(){return To()}function sw(){return To()}function To(){return new _i(t=>t.toString(),(t,e)=>t.isEqual(e))}const UR=new Pe(G.comparator),BR=new nt(G.comparator);function oe(...t){let e=BR;for(const n of t)e=e.add(n);return e}const $R=new nt(de);function HR(){return $R}/**
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
 */function qf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:su(e)?"-0":e}}function iw(t){return{integerValue:""+t}}function qR(t,e){return wR(e)?iw(e):qf(t,e)}/**
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
 */class zu{constructor(){this._=void 0}}function WR(t,e,n){return t instanceof Qo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ff(i)&&(i=zf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Xo?aw(t,e):t instanceof Yo?lw(t,e):function(s,i){const o=ow(s,i),u=ly(o)+ly(s.Pe);return wd(o)&&wd(s.Pe)?iw(u):qf(s.serializer,u)}(t,e)}function KR(t,e,n){return t instanceof Xo?aw(t,e):t instanceof Yo?lw(t,e):n}function ow(t,e){return t instanceof au?function(r){return wd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Qo extends zu{}class Xo extends zu{constructor(e){super(),this.elements=e}}function aw(t,e){const n=uw(e);for(const r of t.elements)n.some(s=>wn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Yo extends zu{constructor(e){super(),this.elements=e}}function lw(t,e){let n=uw(e);for(const r of t.elements)n=n.filter(s=>!wn(s,r));return{arrayValue:{values:n}}}class au extends zu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ly(t){return Me(t.integerValue||t.doubleValue)}function uw(t){return Uf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class GR{constructor(e,n){this.field=e,this.transform=n}}function QR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Xo&&s instanceof Xo||r instanceof Yo&&s instanceof Yo?ai(r.elements,s.elements,wn):r instanceof au&&s instanceof au?wn(r.Pe,s.Pe):r instanceof Qo&&s instanceof Qo}(t.transform,e.transform)}class XR{constructor(e,n){this.version=e,this.transformResults=n}}class Nt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nt}static exists(e){return new Nt(void 0,e)}static updateTime(e){return new Nt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Uu{}function cw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bu(t.key,Nt.none()):new ha(t.key,t.data,Nt.none());{const n=t.data,r=St.empty();let s=new nt(et.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new br(t.key,r,new Lt(s.toArray()),Nt.none())}}function YR(t,e,n){t instanceof ha?function(s,i,o){const u=s.value.clone(),l=cy(s.fieldTransforms,i,o.transformResults);u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):t instanceof br?function(s,i,o){if(!Il(s.precondition,i))return void i.convertToUnknownDocument(o.version);const u=cy(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(hw(s)),l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Io(t,e,n,r){return t instanceof ha?function(i,o,u,l){if(!Il(i.precondition,o))return u;const h=i.value.clone(),p=hy(i.fieldTransforms,l,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof br?function(i,o,u,l){if(!Il(i.precondition,o))return u;const h=hy(i.fieldTransforms,l,o),p=o.data;return p.setAll(hw(i)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,u){return Il(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):u}(t,e,n)}function JR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ow(r.transform,s||null);i!=null&&(n===null&&(n=St.empty()),n.set(r.field,i))}return n||null}function uy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ai(r,s,(i,o)=>QR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ha extends Uu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class br extends Uu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function hw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cy(t,e,n){const r=new Map;ge(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,u=e.data.field(i.field);r.set(i.field,KR(o,u,n[s]))}return r}function hy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,WR(i,o,e))}return r}class Bu extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZR extends Uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=sw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let u=this.applyToLocalView(o,i.mutatedFields);u=n.has(s.key)?null:u;const l=cw(o,u);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),oe())}isEqual(e){return this.batchId===e.batchId&&ai(this.mutations,e.mutations,(n,r)=>uy(n,r))&&ai(this.baseMutations,e.baseMutations,(n,r)=>uy(n,r))}}class Wf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ge(e.mutations.length===r.length);let s=function(){return UR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Wf(e,n,r,s)}}/**
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
 */class tC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class nC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Fe,le;function rC(t){switch(t){default:return ee();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function dw(t){if(t===void 0)return Un("GRPC error has no .code"),M.UNKNOWN;switch(t){case Fe.OK:return M.OK;case Fe.CANCELLED:return M.CANCELLED;case Fe.UNKNOWN:return M.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return M.INTERNAL;case Fe.UNAVAILABLE:return M.UNAVAILABLE;case Fe.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Fe.NOT_FOUND:return M.NOT_FOUND;case Fe.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Fe.ABORTED:return M.ABORTED;case Fe.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Fe.DATA_LOSS:return M.DATA_LOSS;default:return ee()}}(le=Fe||(Fe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function sC(){return new TextEncoder}/**
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
 */const iC=new Qr([4294967295,4294967295],0);function dy(t){const e=sC().encode(t),n=new L0;return n.update(e),new Uint8Array(n.digest())}function fy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qr([n,r],0),new Qr([s,i],0)]}class Kf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(r<0)throw new lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Qr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Qr.fromNumber(r)));return s.compare(iC)===1&&(s=new Qr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=dy(e),[r,s]=fy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Kf(i,s,n);return r.forEach(u=>o.insert(u)),o}insert(e){if(this.Ie===0)return;const n=dy(e),[r,s]=fy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $u{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,da.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $u(te.min(),s,new Pe(de),Bn(),oe())}}class da{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new da(r,n,oe(),oe(),oe())}}/**
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
 */class kl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class fw{constructor(e,n){this.targetId=e,this.me=n}}class pw{constructor(e,n,r=st.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class py{constructor(){this.fe=0,this.ge=gy(),this.pe=st.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=oe(),n=oe(),r=oe();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new da(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=gy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ge(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class oC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Bn(),this.qe=my(),this.Qe=new Pe(de)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Td(i))if(r===0){const o=new G(i.path);this.Ue(n,o,ft.newNoDocument(o,te.min()))}else ge(r===1);else{const o=this.Ye(n);if(o!==r){const u=this.Ze(e),l=u?this.Xe(u,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,u;try{o=is(r).toUint8Array()}catch(l){if(l instanceof W0)return oi("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Kf(o,s,i)}catch(l){return oi(l instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),u=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const u=this.Je(o);if(u){if(i.current&&Td(u.target)){const l=new G(u.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ft.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=oe();this.qe.forEach((i,o)=>{let u=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new $u(e,n,this.Qe,this.ke,r);return this.ke=Bn(),this.qe=my(),this.Qe=new Pe(de),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new py,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new nt(de),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new py),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function my(){return new Pe(G.comparator)}function gy(){return new Pe(G.comparator)}const aC={asc:"ASCENDING",desc:"DESCENDING"},lC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},uC={and:"AND",or:"OR"};class cC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kd(t,e){return t.useProto3Json||Mu(e)?e:{value:e}}function lu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hC(t,e){return lu(t,e.toTimestamp())}function gn(t){return ge(!!t),te.fromTimestamp(function(n){const r=Rr(n);return new qe(r.seconds,r.nanos)}(t))}function Gf(t,e){return xd(t,e).canonicalString()}function xd(t,e){const n=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function gw(t){const e=Se.fromString(t);return ge(Ew(e)),e}function Sd(t,e){return Gf(t.databaseId,e.path)}function oh(t,e){const n=gw(e);if(n.get(1)!==t.databaseId.projectId)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(_w(n))}function yw(t,e){return Gf(t.databaseId,e)}function dC(t){const e=gw(t);return e.length===4?Se.emptyPath():_w(e)}function Rd(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function _w(t){return ge(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yy(t,e,n){return{name:Sd(t,e),fields:n.value.mapValue.fields}}function fC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,p){return h.useProto3Json?(ge(p===void 0||typeof p=="string"),st.fromBase64String(p||"")):(ge(p===void 0||p instanceof Buffer||p instanceof Uint8Array),st.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,u=o&&function(h){const p=h.code===void 0?M.UNKNOWN:dw(h.code);return new K(p,h.message||"")}(o);n=new pw(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oh(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):te.min(),u=new St({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,o,u),h=r.targetIds||[],p=r.removedTargetIds||[];n=new kl(h,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oh(t,r.document),i=r.readTime?gn(r.readTime):te.min(),o=ft.newNoDocument(s,i),u=r.removedTargetIds||[];n=new kl([],u,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oh(t,r.document),i=r.removedTargetIds||[];n=new kl([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nC(s,i),u=r.targetId;n=new fw(u,o)}}return n}function pC(t,e){let n;if(e instanceof ha)n={update:yy(t,e.key,e.value)};else if(e instanceof Bu)n={delete:Sd(t,e.key)};else if(e instanceof br)n={update:yy(t,e.key,e.data),updateMask:IC(e.fieldMask)};else{if(!(e instanceof ZR))return ee();n={verify:Sd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const u=o.transform;if(u instanceof Qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Yo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof au)return{fieldPath:o.field.canonicalString(),increment:u.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function mC(t,e){return t&&t.length>0?(ge(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(te.min())&&(o=gn(i)),new XR(o,s.transformResults||[])}(n,e))):[]}function gC(t,e){return{documents:[yw(t,e.path)]}}function yC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=yw(t,s);const i=function(h){if(h.length!==0)return ww(En.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(p=>function(g){return{field:Ss(g.field),direction:wC(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const u=kd(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function _C(t){let e=dC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ge(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=vw(m);return g instanceof En&&X0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(k){return new ou(Rs(k.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(g))}(n.orderBy));let u=null;n.limit&&(u=function(m){let g;return g=typeof m=="object"?m.value:m,Mu(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(m){const g=!!m.before,E=m.values||[];return new iu(E,g)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const g=!m.before,E=m.values||[];return new iu(E,g)}(n.endAt)),VR(e,s,o,i,u,"F",l,h)}function vC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function vw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Rs(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Rs(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Rs(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Rs(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Rs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return En.create(n.compositeFilter.filters.map(r=>vw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function wC(t){return aC[t]}function EC(t){return lC[t]}function TC(t){return uC[t]}function Ss(t){return{fieldPath:t.canonicalString()}}function Rs(t){return et.fromServerFormat(t.fieldPath)}function ww(t){return t instanceof $e?function(n){if(n.op==="=="){if(ry(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NAN"}};if(ny(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(ry(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NAN"}};if(ny(n.value))return{unaryFilter:{field:Ss(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ss(n.field),op:EC(n.op),value:n.value}}}(t):t instanceof En?function(n){const r=n.getFilters().map(s=>ww(s));return r.length===1?r[0]:{compositeFilter:{op:TC(n.op),filters:r}}}(t):ee()}function IC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Ew(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class cr{constructor(e,n,r,s,i=te.min(),o=te.min(),u=st.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class kC{constructor(e){this.ct=e}}function xC(t){const e=_C({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Id(e,e.limit,"L"):e}/**
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
 */class SC{constructor(){this.un=new RC}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Sr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Sr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class RC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Se.comparator)).toArray()}}/**
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
 */class ci{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ci(0)}static kn(){return new ci(-1)}}/**
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
 */class CC{constructor(){this.changes=new _i(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class AC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Io(r.mutation,s,Lt.empty(),qe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=oe()){const s=Wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ao();return i.forEach((u,l)=>{o=o.insert(u,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,oe()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,u)=>{n.set(o,u)})})}computeViews(e,n,r,s){let i=Bn();const o=To(),u=function(){return To()}();return n.forEach((l,h)=>{const p=r.get(h.key);s.has(h.key)&&(p===void 0||p.mutation instanceof br)?i=i.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Io(p.mutation,h,p.mutation.getFieldMask(),qe.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>{var m;return u.set(h,new AC(p,(m=o.get(h))!==null&&m!==void 0?m:null))}),u))}recalculateAndSaveOverlays(e,n){const r=To();let s=new Pe((o,u)=>o-u),i=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const u of o)u.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let p=r.get(l)||Lt.empty();p=u.applyToLocalView(h,p),r.set(l,p);const m=(s.get(u.batchId)||oe()).add(l);s=s.insert(u.batchId,m)})}).next(()=>{const o=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),h=l.key,p=l.value,m=sw();p.forEach(g=>{if(!i.has(g)){const E=cw(n.get(g),r.get(g));E!==null&&m.set(g,E),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Wr());let u=-1,l=i;return o.next(h=>L.forEach(h,(p,m)=>(u<m.largestBatchId&&(u=m.largestBatchId),i.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{l=l.insert(p,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,oe())).next(p=>({batchId:u,changes:rw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=ao();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ao();return this.indexManager.getCollectionParents(e,i).next(u=>L.forEach(u,l=>{const h=function(m,g){return new Lu(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,ft.newInvalidDocument(p)))});let u=ao();return o.forEach((l,h)=>{const p=i.get(l);p!==void 0&&Io(p.mutation,h,Lt.empty(),qe.now()),Fu(n,h)&&(u=u.insert(l,h))}),u})}}/**
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
 */class NC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:xC(s.bundledQuery),readTime:gn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class bC{constructor(){this.overlays=new Pe(G.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Wr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Wr(),i=n.length+1,o=new G(n.child("")),u=this.overlays.getIteratorFrom(o);for(;u.hasNext();){const l=u.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=i.get(h.largestBatchId);p===null&&(p=Wr(),i=i.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const u=Wr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,p)=>u.set(h,p)),!(u.size()>=s)););return L.resolve(u)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tC(n,r));let i=this.Ir.get(n);i===void 0&&(i=oe(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class DC{constructor(){this.sessionToken=st.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class Qf{constructor(){this.Tr=new nt(Ke.Er),this.dr=new nt(Ke.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Ke(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Ke(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new Se([])),r=new Ke(n,e),s=new Ke(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new Se([])),r=new Ke(n,e),s=new Ke(n,e+1);let i=oe();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ke(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||de(e.wr,n.wr)}static Ar(e,n){return de(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class OC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new nt(Ke.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eC(i,n,r,s);this.mutationQueue.push(o);for(const u of s)this.br=this.br.add(new Ke(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ke(n,0),s=new Ke(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const u=this.Dr(o.wr);i.push(u)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(de);return n.forEach(s=>{const i=new Ke(s,0),o=new Ke(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],u=>{r=r.add(u.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new Ke(new G(i),0);let u=new nt(de);return this.br.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(u=u.add(l.wr)),!0)},o),L.resolve(this.Cr(u))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ge(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,s=>{const i=new Ke(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Ke(n,0),s=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class VC{constructor(e){this.Mr=e,this.docs=function(){return new Pe(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Bn();const o=n.path,u=new G(o.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:h,value:{document:p}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||gR(mR(p),r)<=0||(s.has(p.key)||Fu(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MC(this)}getSize(e){return L.resolve(this.size)}}class MC extends CC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class LC{constructor(e){this.persistence=e,this.Nr=new _i(n=>Bf(n),$f),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Qf,this.targetCount=0,this.kr=ci.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ci(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
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
 */class jC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new jf(0),this.Kr=!1,this.Kr=!0,this.$r=new DC,this.referenceDelegate=e(this),this.Ur=new LC(this),this.indexManager=new SC,this.remoteDocumentCache=function(s){return new VC(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new kC(n),this.Gr=new NC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new OC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const s=new FC(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class FC extends _R{constructor(e){super(),this.currentSequenceNumber=e}}class Xf{constructor(e){this.persistence=e,this.Jr=new Qf,this.Yr=null}static Zr(e){return new Xf(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const s=G.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Yf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=oe(),s=oe();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yf(e,n.fromCache,r,s)}}/**
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
 */class zC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class UC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return zx()?8:vR(mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new zC;return this.Xi(e,n,o).next(u=>{if(i.result=u,this.zi)return this.es(e,n,o,u.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ji()<=ae.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",xs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(Ji()<=ae.DEBUG&&H("QueryEngine","Query:",xs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ji()<=ae.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",xs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):L.resolve())}Yi(e,n){if(ay(n))return L.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Id(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=oe(...i);return this.Ji.getDocuments(e,o).next(u=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.ts(n,u);return this.ns(n,h,o,l.readTime)?this.Yi(e,Id(n,null,"F")):this.rs(e,h,n,l)}))})))}Zi(e,n,r,s){return ay(n)||s.isEqual(te.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?L.resolve(null):(Ji()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xs(n)),this.rs(e,o,n,pR(s,-1)).next(u=>u))})}ts(e,n){let r=new nt(tw(e));return n.forEach((s,i)=>{Fu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ji()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",xs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Sr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class BC{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Pe(de),this._s=new _i(i=>Bf(i),$f),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function $C(t,e,n,r){return new BC(t,e,n,r)}async function Tw(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],u=[];let l=oe();for(const h of s){o.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}for(const h of i){u.push(h.batchId);for(const p of h.mutations)l=l.add(p.key)}return n.localDocuments.getDocuments(r,l).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:u}))})})}function HC(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(u,l,h,p){const m=h.batch,g=m.keys();let E=L.resolve();return g.forEach(k=>{E=E.next(()=>p.getEntry(l,k)).next(P=>{const D=h.docVersions.get(k);ge(D!==null),P.version.compareTo(D)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),p.addEntry(P)))})}),E.next(()=>u.mutationQueue.removeMutationBatch(l,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let l=oe();for(let h=0;h<u.mutationResults.length;++h)u.mutationResults[h].transformResults.length>0&&(l=l.add(u.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Iw(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function qC(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const u=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;u.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let E=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?E=E.withResumeToken(st.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):p.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(p.resumeToken,r)),s=s.insert(m,E),function(P,D,x){return P.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,E,p)&&u.push(n.Ur.updateTargetData(i,E))});let l=Bn(),h=oe();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),u.push(WC(i,o,e.documentUpdates).next(p=>{l=p.Ps,h=p.Is})),!r.isEqual(te.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));u.push(p)}return L.waitFor(u).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.os=s,i))}function WC(t,e,n){let r=oe(),s=oe();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Bn();return n.forEach((u,l)=>{const h=i.get(u);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(u,l.readTime),o=o.insert(u,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(u,l)):H("LocalStore","Ignoring outdated watch update for ",u,". Current version:",h.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function KC(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GC(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new cr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Cd(t,e,n){const r=ne(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ca(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function _y(t,e,n){const r=ne(t);let s=te.min(),i=oe();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,p){const m=ne(l),g=m._s.get(p);return g!==void 0?L.resolve(m.os.get(g)):m.Ur.getTargetData(h,p)}(r,o,mn(e)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,u.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:oe())).next(u=>(QC(r,jR(e),u),{documents:u,Ts:i})))}function QC(t,e,n){let r=t.us.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class vy{constructor(){this.activeTargetIds=HR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class XC{constructor(){this.so=new vy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new vy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YC{_o(e){}shutdown(){}}/**
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
 */class wy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let sl=null;function ah(){return sl===null?sl=function(){return 268435456+Math.round(2147483648*Math.random())}():sl++,"0x"+sl.toString(16)}/**
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
 */const JC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ZC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const ct="WebChannelConnection";class e1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const u=ah(),l=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${u}:`,l,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,l,h,s).then(p=>(H("RestConnection",`Received RPC '${n}' ${u}: `,p),p),p=>{throw oi("RestConnection",`RPC '${n}' ${u} failed with error: `,p,"url: ",l,"request:",s),p})}Lo(n,r,s,i,o,u){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+yi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=JC[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=ah();return new Promise((o,u)=>{const l=new j0;l.setWithCredentials(!0),l.listenOnce(F0.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case El.NO_ERROR:const p=l.getResponseJson();H(ct,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case El.TIMEOUT:H(ct,`RPC '${e}' ${i} timed out`),u(new K(M.DEADLINE_EXCEEDED,"Request time out"));break;case El.HTTP_ERROR:const m=l.getStatus();if(H(ct,`RPC '${e}' ${i} failed with status:`,m,"response text:",l.getResponseText()),m>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const E=g==null?void 0:g.error;if(E&&E.status&&E.message){const k=function(D){const x=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(x)>=0?x:M.UNKNOWN}(E.status);u(new K(k,E.message))}else u(new K(M.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new K(M.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{H(ct,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);H(ct,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=ah(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=B0(),u=U0(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const p=i.join("");H(ct,`Creating RPC '${e}' stream ${s}: ${p}`,l);const m=o.createWebChannel(p,l);let g=!1,E=!1;const k=new ZC({Io:D=>{E?H(ct,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(H(ct,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),H(ct,`RPC '${e}' stream ${s} sending:`,D),m.send(D))},To:()=>m.close()}),P=(D,x,v)=>{D.listen(x,C=>{try{v(C)}catch(b){setTimeout(()=>{throw b},0)}})};return P(m,oo.EventType.OPEN,()=>{E||(H(ct,`RPC '${e}' stream ${s} transport opened.`),k.yo())}),P(m,oo.EventType.CLOSE,()=>{E||(E=!0,H(ct,`RPC '${e}' stream ${s} transport closed`),k.So())}),P(m,oo.EventType.ERROR,D=>{E||(E=!0,oi(ct,`RPC '${e}' stream ${s} transport errored:`,D),k.So(new K(M.UNAVAILABLE,"The operation could not be completed")))}),P(m,oo.EventType.MESSAGE,D=>{var x;if(!E){const v=D.data[0];ge(!!v);const C=v,b=C.error||((x=C[0])===null||x===void 0?void 0:x.error);if(b){H(ct,`RPC '${e}' stream ${s} received error:`,b);const z=b.status;let V=function(I){const S=Fe[I];if(S!==void 0)return dw(S)}(z),w=b.message;V===void 0&&(V=M.INTERNAL,w="Unknown error status: "+z+" with message "+b.message),E=!0,k.So(new K(V,w)),m.close()}else H(ct,`RPC '${e}' stream ${s} received:`,v),k.bo(v)}}),P(u,z0.STAT_EVENT,D=>{D.stat===_d.PROXY?H(ct,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===_d.NOPROXY&&H(ct,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{k.wo()},0),k}}function lh(){return typeof document<"u"?document:null}/**
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
 */function Hu(t){return new cC(t,!0)}/**
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
 */class kw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class xw{constructor(e,n,r,s,i,o,u,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new kw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new K(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class t1 extends xw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=fC(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?gn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Rd(this.serializer),n.addTarget=function(i,o){let u;const l=o.target;if(u=Td(l)?{documents:gC(i,l)}:{query:yC(i,l)._t},u.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){u.resumeToken=mw(i,o.resumeToken);const h=kd(i,o.expectedCount);h!==null&&(u.expectedCount=h)}else if(o.snapshotVersion.compareTo(te.min())>0){u.readTime=lu(i,o.snapshotVersion.toTimestamp());const h=kd(i,o.expectedCount);h!==null&&(u.expectedCount=h)}return u}(this.serializer,e);const r=vC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Rd(this.serializer),n.removeTarget=e,this.a_(n)}}class n1 extends xw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return ge(!!e.streamToken),this.lastStreamToken=e.streamToken,ge(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){ge(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=mC(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Rd(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pC(this.serializer,r))};this.a_(n)}}/**
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
 */class r1 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,xd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,u])=>this.connection.Lo(e,xd(n,r),s,o,u,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class s1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Un(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class i1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ps(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=ne(l);h.L_.add(4),await fa(h),h.q_.set("Unknown"),h.L_.delete(4),await qu(h)}(this))})}),this.q_=new s1(r,s)}}async function qu(t){if(ps(t))for(const e of t.B_)await e(!0)}async function fa(t){for(const e of t.B_)await e(!1)}function Sw(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),tp(n)?ep(n):vi(n).r_()&&Zf(n,e))}function Jf(t,e){const n=ne(t),r=vi(n);n.N_.delete(e),r.r_()&&Rw(n,e),n.N_.size===0&&(r.r_()?r.o_():ps(n)&&n.q_.set("Unknown"))}function Zf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}vi(t).A_(e)}function Rw(t,e){t.Q_.xe(e),vi(t).R_(e)}function ep(t){t.Q_=new oC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),vi(t).start(),t.q_.v_()}function tp(t){return ps(t)&&!vi(t).n_()&&t.N_.size>0}function ps(t){return ne(t).L_.size===0}function Cw(t){t.Q_=void 0}async function o1(t){t.q_.set("Online")}async function a1(t){t.N_.forEach((e,n)=>{Zf(t,e)})}async function l1(t,e){Cw(t),tp(t)?(t.q_.M_(e),ep(t)):t.q_.set("Unknown")}async function u1(t,e,n){if(t.q_.set("Online"),e instanceof pw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const u of i.targetIds)s.N_.has(u)&&(await s.remoteSyncer.rejectListen(u,o),s.N_.delete(u),s.Q_.removeTarget(u))}(t,e)}catch(r){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uu(t,r)}else if(e instanceof kl?t.Q_.Ke(e):e instanceof fw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await Iw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const u=i.Q_.rt(o);return u.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.N_.get(h);p&&i.N_.set(h,p.withResumeToken(l.resumeToken,o))}}),u.targetMismatches.forEach((l,h)=>{const p=i.N_.get(l);if(!p)return;i.N_.set(l,p.withResumeToken(st.EMPTY_BYTE_STRING,p.snapshotVersion)),Rw(i,l);const m=new cr(p.target,l,h,p.sequenceNumber);Zf(i,m)}),i.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){H("RemoteStore","Failed to raise snapshot:",r),await uu(t,r)}}async function uu(t,e,n){if(!ca(e))throw e;t.L_.add(1),await fa(t),t.q_.set("Offline"),n||(n=()=>Iw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await qu(t)})}function Aw(t,e){return e().catch(n=>uu(t,n,e))}async function Wu(t){const e=ne(t),n=Cr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;c1(e);)try{const s=await KC(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,h1(e,s)}catch(s){await uu(e,s)}Pw(e)&&Nw(e)}function c1(t){return ps(t)&&t.O_.length<10}function h1(t,e){t.O_.push(e);const n=Cr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Pw(t){return ps(t)&&!Cr(t).n_()&&t.O_.length>0}function Nw(t){Cr(t).start()}async function d1(t){Cr(t).p_()}async function f1(t){const e=Cr(t);for(const n of t.O_)e.m_(n.mutations)}async function p1(t,e,n){const r=t.O_.shift(),s=Wf.from(r,e,n);await Aw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Wu(t)}async function m1(t,e){e&&Cr(t).V_&&await async function(r,s){if(function(o){return rC(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Cr(r).s_(),await Aw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wu(r)}}(t,e),Pw(t)&&Nw(t)}async function Ey(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ps(n);n.L_.add(3),await fa(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await qu(n)}async function g1(t,e){const n=ne(t);e?(n.L_.delete(2),await qu(n)):e||(n.L_.add(2),await fa(n),n.q_.set("Unknown"))}function vi(t){return t.K_||(t.K_=function(n,r,s){const i=ne(n);return i.w_(),new t1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:o1.bind(null,t),Ro:a1.bind(null,t),mo:l1.bind(null,t),d_:u1.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),tp(t)?ep(t):t.q_.set("Unknown")):(await t.K_.stop(),Cw(t))})),t.K_}function Cr(t){return t.U_||(t.U_=function(n,r,s){const i=ne(n);return i.w_(),new n1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:d1.bind(null,t),mo:m1.bind(null,t),f_:f1.bind(null,t),g_:p1.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Wu(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class np{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,u=new np(e,n,o,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rp(t,e){if(Un("AsyncQueue",`${e}: ${t}`),ca(t))return new K(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Gs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ao(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Gs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Ty{constructor(){this.W_=new Pe(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hi{constructor(e,n,r,s,i,o,u,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(u=>{o.push({type:0,doc:u})}),new hi(e,n,Gs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ju(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class y1{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class _1{constructor(){this.queries=Iy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=Iy(),i.forEach((o,u)=>{for(const l of u.j_)l.onError(r)})})(this,new K(M.ABORTED,"Firestore shutting down"))}}function Iy(){return new _i(t=>ew(t),ju)}async function v1(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new y1,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const u=rp(o,`Initialization of query '${xs(e.query)}' failed`);return void e.onError(u)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&sp(n)}async function w1(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function E1(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const u of o.j_)u.X_(s)&&(r=!0);o.z_=s}}r&&sp(n)}function T1(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function sp(t){t.Y_.forEach(e=>{e.next()})}var Ad,ky;(ky=Ad||(Ad={})).ea="default",ky.Cache="cache";class I1{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=hi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Ad.Cache}}/**
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
 */class bw{constructor(e){this.key=e}}class Dw{constructor(e){this.key=e}}class k1{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=oe(),this.mutatedKeys=oe(),this.Aa=tw(e),this.Ra=new Gs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Ty,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),E=Fu(this.query,m)?m:null,k=!!g&&this.mutatedKeys.has(g.key),P=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let D=!1;g&&E?g.data.isEqual(E.data)?k!==P&&(r.track({type:3,doc:E}),D=!0):this.ga(g,E)||(r.track({type:2,doc:E}),D=!0,(l&&this.Aa(E,l)>0||h&&this.Aa(E,h)<0)&&(u=!0)):!g&&E?(r.track({type:0,doc:E}),D=!0):g&&!E&&(r.track({type:1,doc:g}),D=!0,(l||h)&&(u=!0)),D&&(E?(o=o.add(E),i=P?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:u,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(E,k){const P=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return P(E)-P(k)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const u=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,h=l!==this.Ea;return this.Ea=l,o.length!==0||h?{snapshot:new hi(this.query,e.Ra,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:u}:{wa:u}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Ty,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=oe(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Dw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new bw(r))}),n}ba(e){this.Ta=e.Ts,this.da=oe();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return hi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class x1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class S1{constructor(e){this.key=e,this.va=!1}}class R1{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new _i(u=>ew(u),ju),this.Ma=new Map,this.xa=new Set,this.Oa=new Pe(G.comparator),this.Na=new Map,this.La=new Qf,this.Ba={},this.ka=new Map,this.qa=ci.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function C1(t,e,n=!0){const r=Fw(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Ow(r,e,n,!0),s}async function A1(t,e){const n=Fw(t);await Ow(n,e,!0,!1)}async function Ow(t,e,n,r){const s=await GC(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let u;return r&&(u=await P1(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Sw(t.remoteStore,s),u}async function P1(t,e,n,r,s){t.Ka=(m,g,E)=>async function(P,D,x,v){let C=D.view.ma(x);C.ns&&(C=await _y(P.localStore,D.query,!1).then(({documents:w})=>D.view.ma(w,C)));const b=v&&v.targetChanges.get(D.targetId),z=v&&v.targetMismatches.get(D.targetId)!=null,V=D.view.applyChanges(C,P.isPrimaryClient,b,z);return Sy(P,D.targetId,V.wa),V.snapshot}(t,m,g,E);const i=await _y(t.localStore,e,!0),o=new k1(e,i.Ts),u=o.ma(i.documents),l=da.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(u,t.isPrimaryClient,l);Sy(t,n,h.wa);const p=new x1(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function N1(t,e,n){const r=ne(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ju(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cd(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Jf(r.remoteStore,s.targetId),Pd(r,s.targetId)}).catch(ua)):(Pd(r,s.targetId),await Cd(r.localStore,s.targetId,!0))}async function b1(t,e){const n=ne(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jf(n.remoteStore,r.targetId))}async function D1(t,e,n){const r=z1(t);try{const s=await function(o,u){const l=ne(o),h=qe.now(),p=u.reduce((E,k)=>E.add(k.key),oe());let m,g;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let k=Bn(),P=oe();return l.cs.getEntries(E,p).next(D=>{k=D,k.forEach((x,v)=>{v.isValidDocument()||(P=P.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,k)).next(D=>{m=D;const x=[];for(const v of u){const C=JR(v,m.get(v.key).overlayedDocument);C!=null&&x.push(new br(v.key,C,K0(C.value.mapValue),Nt.exists(!0)))}return l.mutationQueue.addMutationBatch(E,h,x,u)}).next(D=>{g=D;const x=D.applyToLocalDocumentSet(m,P);return l.documentOverlayCache.saveOverlays(E,D.batchId,x)})}).then(()=>({batchId:g.batchId,changes:rw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,u,l){let h=o.Ba[o.currentUser.toKey()];h||(h=new Pe(de)),h=h.insert(u,l),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await pa(r,s.changes),await Wu(r.remoteStore)}catch(s){const i=rp(s,"Failed to persist write");n.reject(i)}}async function Vw(t,e){const n=ne(t);try{const r=await qC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(ge(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?ge(o.va):s.removedDocuments.size>0&&(ge(o.va),o.va=!1))}),await pa(n,r,e)}catch(r){await ua(r)}}function xy(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const u=o.view.Z_(e);u.snapshot&&s.push(u.snapshot)}),function(o,u){const l=ne(o);l.onlineState=u;let h=!1;l.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(u)&&(h=!0)}),h&&sp(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function O1(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Pe(G.comparator);o=o.insert(i,ft.newNoDocument(i,te.min()));const u=oe().add(i),l=new $u(te.min(),new Map,new Pe(de),o,u);await Vw(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),ip(r)}else await Cd(r.localStore,e,!1).then(()=>Pd(r,e,n)).catch(ua)}async function V1(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await HC(n.localStore,e);Lw(n,r,null),Mw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await pa(n,s)}catch(s){await ua(s)}}async function M1(t,e,n){const r=ne(t);try{const s=await function(o,u){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return l.mutationQueue.lookupMutationBatch(h,u).next(m=>(ge(m!==null),p=m.keys(),l.mutationQueue.removeMutationBatch(h,m))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,p,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>l.localDocuments.getDocuments(h,p))})}(r.localStore,e);Lw(r,e,n),Mw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await pa(r,s)}catch(s){await ua(s)}}function Mw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Lw(t,e,n){const r=ne(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Pd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||jw(t,r)})}function jw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Jf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ip(t))}function Sy(t,e,n){for(const r of n)r instanceof bw?(t.La.addReference(r.key,e),L1(t,r)):r instanceof Dw?(H("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||jw(t,r.key)):ee()}function L1(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(H("SyncEngine","New document in limbo: "+n),t.xa.add(r),ip(t))}function ip(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(Se.fromString(e)),r=t.qa.next();t.Na.set(r,new S1(n)),t.Oa=t.Oa.insert(n,r),Sw(t.remoteStore,new cr(mn(Hf(n.path)),r,"TargetPurposeLimboResolution",jf.oe))}}async function pa(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((u,l)=>{o.push(r.Ka(l,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,m?"current":"not-current")}if(h){s.push(h);const m=Yf.Wi(l.targetId,h);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,h){const p=ne(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,g=>L.forEach(g.$i,E=>p.persistence.referenceDelegate.addReference(m,g.targetId,E)).next(()=>L.forEach(g.Ui,E=>p.persistence.referenceDelegate.removeReference(m,g.targetId,E)))))}catch(m){if(!ca(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const g=m.targetId;if(!m.fromCache){const E=p.os.get(g),k=E.snapshotVersion,P=E.withLastLimboFreeSnapshotVersion(k);p.os=p.os.insert(g,P)}}}(r.localStore,i))}async function j1(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await Tw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(u=>{u.forEach(l=>{l.reject(new K(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await pa(n,r.hs)}}function F1(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return oe().add(r.key);{let s=oe();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const u=n.Fa.get(o);s=s.unionWith(u.view.Va)}return s}}function Fw(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=F1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=O1.bind(null,e),e.Ca.d_=E1.bind(null,e.eventManager),e.Ca.$a=T1.bind(null,e.eventManager),e}function z1(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=V1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=M1.bind(null,e),e}class cu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Hu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return $C(this.persistence,new UC,e.initialUser,this.serializer)}Ga(e){return new jC(Xf.Zr,this.serializer)}Wa(e){return new XC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}cu.provider={build:()=>new cu};class Nd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=j1.bind(null,this.syncEngine),await g1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _1}()}createDatastore(e){const n=Hu(e.databaseInfo.databaseId),r=function(i){return new e1(i)}(e.databaseInfo);return function(i,o,u,l){return new r1(i,o,u,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,u){return new i1(r,s,i,o,u)}(this.localStore,this.datastore,e.asyncQueue,n=>xy(this.syncEngine,n,0),function(){return wy.D()?new wy:new YC}())}createSyncEngine(e,n){return function(s,i,o,u,l,h,p){const m=new R1(s,i,o,u,l,h);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);H("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await fa(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nd.provider={build:()=>new Nd};/**
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
 */class U1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class B1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=H0.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{H("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(H("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=rp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ry(t,e){t.asyncQueue.verifyOperationInProgress();const n=await $1(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ey(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ey(e.remoteStore,s)),t._onlineComponents=e}async function $1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;oi("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new cu)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await uh(t,new cu);return t._offlineComponents}async function zw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await Ry(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await Ry(t,new Nd))),t._onlineComponents}function H1(t){return zw(t).then(e=>e.syncEngine)}async function Cy(t){const e=await zw(t),n=e.eventManager;return n.onListen=C1.bind(null,e.syncEngine),n.onUnlisten=N1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=A1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=b1.bind(null,e.syncEngine),n}/**
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
 */function Uw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ay=new Map;/**
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
 */function Bw(t,e,n){if(!n)throw new K(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function q1(t,e,n,r){if(e===!0&&r===!0)throw new K(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Py(t){if(!G.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ny(t){if(G.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function op(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=op(t);throw new K(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class by{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Uw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ku{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new by({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new by(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new iR;switch(r.type){case"firstParty":return new uR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ay.get(n);r&&(H("ComponentProvider","Removing Datastore"),Ay.delete(n),r.terminate())}(this),Promise.resolve()}}function W1(t,e,n,r={}){var s;const i=(t=yn(t,Ku))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&oi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let u,l;if(typeof r.mockUserToken=="string")u=r.mockUserToken,l=ht.MOCK_USER;else{u=N0(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new K(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new ht(h)}t._authCredentials=new oR(new $0(u,l))}}/**
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
 */class Gu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Gu(this.firestore,e,this._query)}}class bt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class Er extends Gu{constructor(e,n,r){super(e,n,Hf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new G(e))}withConverter(e){return new Er(this.firestore,e,this._path)}}function ap(t,e,...n){if(t=Te(t),Bw("collection","path",e),t instanceof Ku){const r=Se.fromString(e,...n);return Ny(r),new Er(t,null,r)}{if(!(t instanceof bt||t instanceof Er))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Ny(r),new Er(t.firestore,null,r)}}function In(t,e,...n){if(t=Te(t),arguments.length===1&&(e=H0.newId()),Bw("doc","path",e),t instanceof Ku){const r=Se.fromString(e,...n);return Py(r),new bt(t,null,new G(r))}{if(!(t instanceof bt||t instanceof Er))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return Py(r),new bt(t.firestore,t instanceof Er?t.converter:null,new G(r))}}/**
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
 */class Dy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new kw(this,"async_queue_retry"),this.Vu=()=>{const r=lh();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=lh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=lh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Xr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ca(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let u=o.message||"";return o.stack&&(u=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),u}(r);throw Un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=np.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Oy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class as extends Ku{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Dy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Dy(e),this._firestoreClient=void 0,await e}}}function K1(t,e){const n=typeof t=="object"?t:Mf(),r=typeof t=="string"?t:"(default)",s=Vu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=C0("firestore");i&&W1(s,...i)}return s}function lp(t){if(t._terminated)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||G1(t),t._firestoreClient}function G1(t){var e,n,r;const s=t._freezeSettings(),i=function(u,l,h,p){return new TR(u,l,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Uw(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new B1(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new di(st.fromBase64String(e))}catch(n){throw new K(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new di(st.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ma{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Qu{constructor(e){this._methodName=e}}/**
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
 */class up{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */class cp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Q1=/^__.*__$/;class X1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new br(e,this.data,this.fieldMask,n,this.fieldTransforms):new ha(e,this.data,n,this.fieldTransforms)}}class $w{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Hw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class hp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new hp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return hu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Hw(this.Cu)&&Q1.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Y1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hu(e)}Qu(e,n,r,s=!1){return new hp({Cu:e,methodName:n,qu:r,path:et.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dp(t){const e=t._freezeSettings(),n=Hu(t._databaseId);return new Y1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qw(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);pp("Data must be an object, but it was:",o,r);const u=Gw(r,o);let l,h;if(i.merge)l=new Lt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=bd(e,m,n);if(!o.contains(g))throw new K(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Xw(p,g)||p.push(g)}l=new Lt(p),h=o.fieldTransforms.filter(m=>l.covers(m.field))}else l=null,h=o.fieldTransforms;return new X1(new St(u),l,h)}class Xu extends Qu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xu}}class fp extends Qu{_toFieldTransform(e){return new GR(e.path,new Qo)}isEqual(e){return e instanceof fp}}function Ww(t,e,n,r){const s=t.Qu(1,e,n);pp("Data must be an object, but it was:",s,r);const i=[],o=St.empty();fs(r,(l,h)=>{const p=mp(e,l,n);h=Te(h);const m=s.Nu(p);if(h instanceof Xu)i.push(p);else{const g=Yu(h,m);g!=null&&(i.push(p),o.set(p,g))}});const u=new Lt(i);return new $w(o,u,s.fieldTransforms)}function Kw(t,e,n,r,s,i){const o=t.Qu(1,e,n),u=[bd(e,r,n)],l=[s];if(i.length%2!=0)throw new K(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)u.push(bd(e,i[g])),l.push(i[g+1]);const h=[],p=St.empty();for(let g=u.length-1;g>=0;--g)if(!Xw(h,u[g])){const E=u[g];let k=l[g];k=Te(k);const P=o.Nu(E);if(k instanceof Xu)h.push(E);else{const D=Yu(k,P);D!=null&&(h.push(E),p.set(E,D))}}const m=new Lt(h);return new $w(p,m,o.fieldTransforms)}function Yu(t,e){if(Qw(t=Te(t)))return pp("Unsupported field value:",e,t),Gw(t,e);if(t instanceof Qu)return function(r,s){if(!Hw(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const u of r){let l=Yu(u,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return qR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=qe.fromDate(r);return{timestampValue:lu(s.serializer,i)}}if(r instanceof qe){const i=new qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:lu(s.serializer,i)}}if(r instanceof up)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof di)return{bytesValue:mw(s.serializer,r._byteString)};if(r instanceof bt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Gf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof cp)return function(o,u){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw u.Bu("VectorValues must only contain numeric values.");return qf(u.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${op(r)}`)}(t,e)}function Gw(t,e){const n={};return q0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,s)=>{const i=Yu(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Qw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof qe||t instanceof up||t instanceof di||t instanceof bt||t instanceof Qu||t instanceof cp)}function pp(t,e,n){if(!Qw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=op(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function bd(t,e,n){if((e=Te(e))instanceof ma)return e._internalPath;if(typeof e=="string")return mp(t,e);throw hu("Field path arguments must be of type string or ",t,!1,void 0,n)}const J1=new RegExp("[~\\*/\\[\\]]");function mp(t,e,n){if(e.search(J1)>=0)throw hu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ma(...e.split("."))._internalPath}catch{throw hu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function hu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new K(M.INVALID_ARGUMENT,u+t+l)}function Xw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Yw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Z1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Jw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Z1 extends Yw{data(){return super.data()}}function Jw(t,e){return typeof e=="string"?mp(t,e):e instanceof ma?e._internalPath:e._delegate._internalPath}/**
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
 */function eA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tA{convertValue(e,n="none"){switch(os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(is(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Me(o.doubleValue));return new cp(i)}convertGeoPoint(e){return new up(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=zf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Wo(e));default:return null}}convertTimestamp(e){const n=Rr(e);return new qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);ge(Ew(r));const s=new Ko(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Zw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class eE extends Yw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Jw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xl extends eE{data(e={}){return super.data(e)}}class nA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new uo(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new xl(this._firestore,this._userDataWriter,r.key,r,new uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(u=>{const l=new xl(s._firestore,s._userDataWriter,u.doc.key,u.doc,new uo(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new xl(s._firestore,s._userDataWriter,u.doc.key,u.doc,new uo(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,p=-1;return u.type!==0&&(h=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),p=o.indexOf(u.doc.key)),{type:rA(u.type),doc:l,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function rA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class tE extends tA{constructor(e){super(),this.firestore=e}convertBytes(e){return new di(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,n)}}function Ju(t,e,n){t=yn(t,bt);const r=yn(t.firestore,as),s=Zw(t.converter,e,n);return Zu(r,[qw(dp(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Nt.none())])}function nE(t,e,n,...r){t=yn(t,bt);const s=yn(t.firestore,as),i=dp(s);let o;return o=typeof(e=Te(e))=="string"||e instanceof ma?Kw(i,"updateDoc",t._key,e,n,r):Ww(i,"updateDoc",t._key,e),Zu(s,[o.toMutation(t._key,Nt.exists(!0))])}function gp(t){return Zu(yn(t.firestore,as),[new Bu(t._key,Nt.none())])}function sA(t,...e){var n,r,s;t=Te(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Oy(e[o])||(i=e[o],o++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Oy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let l,h,p;if(t instanceof bt)h=yn(t.firestore,as),p=Hf(t._key.path),l={next:m=>{e[o]&&e[o](iA(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=yn(t,Gu);h=yn(m.firestore,as),p=m._query;const g=new tE(h);l={next:E=>{e[o]&&e[o](new nA(h,g,m,E))},error:e[o+1],complete:e[o+2]},eA(t._query)}return function(g,E,k,P){const D=new U1(P),x=new I1(E,D,k);return g.asyncQueue.enqueueAndForget(async()=>v1(await Cy(g),x)),()=>{D.Za(),g.asyncQueue.enqueueAndForget(async()=>w1(await Cy(g),x))}}(lp(h),p,u,l)}function Zu(t,e){return function(r,s){const i=new Xr;return r.asyncQueue.enqueueAndForget(async()=>D1(await H1(r),s,i)),i.promise}(lp(t),e)}function iA(t,e,n){const r=n.docs.get(e._key),s=new tE(t);return new eE(t,s,e._key,r,new uo(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class oA{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=dp(e)}set(e,n,r){this._verifyNotCommitted();const s=ch(e,this._firestore),i=Zw(s.converter,n,r),o=qw(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Nt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=ch(e,this._firestore);let o;return o=typeof(n=Te(n))=="string"||n instanceof ma?Kw(this._dataReader,"WriteBatch.update",i._key,n,r,s):Ww(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Nt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ch(e,this._firestore);return this._mutations=this._mutations.concat(new Bu(n._key,Nt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new K(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ch(t,e){if((t=Te(t)).firestore!==e)throw new K(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function aA(){return new fp("serverTimestamp")}/**
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
 */function lA(t){return lp(t=yn(t,as)),new oA(t,e=>Zu(t,e))}(function(e,n=!0){(function(s){yi=s})(ds),rs(new xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),u=new as(new aR(r.getProvider("auth-internal")),new hR(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(h.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),pn(Yg,"4.7.3",e),pn(Yg,"4.7.3","esm2017")})();/**
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
 */const rE="firebasestorage.googleapis.com",sE="storageBucket",uA=2*60*1e3,cA=10*60*1e3,hA=1e3;/**
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
 */class Ne extends Tn{constructor(e,n,r=0){super(hh(e),`Firebase Storage: ${n} (${hh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ne.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function hh(t){return"storage/"+t}function yp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ne(Ie.UNKNOWN,t)}function dA(t){return new Ne(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function fA(t){return new Ne(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function pA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ne(Ie.UNAUTHENTICATED,t)}function mA(){return new Ne(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function gA(t){return new Ne(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function iE(){return new Ne(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oE(){return new Ne(Ie.CANCELED,"User canceled the upload/download.")}function yA(t){return new Ne(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function _A(t){return new Ne(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function vA(){return new Ne(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+sE+"' property when initializing the app?")}function aE(){return new Ne(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function wA(){return new Ne(Ie.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function EA(){return new Ne(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function TA(t){return new Ne(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Dd(t){return new Ne(Ie.INVALID_ARGUMENT,t)}function lE(){return new Ne(Ie.APP_DELETED,"The Firebase app was deleted.")}function IA(t){return new Ne(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ko(t,e){return new Ne(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Zi(t){throw new Ne(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw _A(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const o="(/(.*))?$",u=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(b){b.path_=decodeURIComponent(b.path)}const p="v[A-Za-z0-9_]+",m=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",E=new RegExp(`^https?://${m}/${p}/b/${s}/o${g}`,"i"),k={bucket:1,path:3},P=n===rE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",x=new RegExp(`^https?://${P}/${s}/${D}`,"i"),C=[{regex:u,indices:l,postModify:i},{regex:E,indices:k,postModify:h},{regex:x,indices:{bucket:1,path:2},postModify:h}];for(let b=0;b<C.length;b++){const z=C[b],V=z.regex.exec(e);if(V){const w=V[z.indices.bucket];let y=V[z.indices.path];y||(y=""),r=new jt(w,y),z.postModify(r);break}}if(r==null)throw yA(e);return r}}class kA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function xA(t,e,n){let r=1,s=null,i=null,o=!1,u=0;function l(){return u===2}let h=!1;function p(...D){h||(h=!0,e.apply(null,D))}function m(D){s=setTimeout(()=>{s=null,t(E,l())},D)}function g(){i&&clearTimeout(i)}function E(D,...x){if(h){g();return}if(D){g(),p.call(null,D,...x);return}if(l()||o){g(),p.call(null,D,...x);return}r<64&&(r*=2);let C;u===1?(u=2,C=0):C=(r+Math.random())*1e3,m(C)}let k=!1;function P(D){k||(k=!0,g(),!h&&(s!==null?(D||(u=2),clearTimeout(s),m(0)):D||(u=1)))}return m(0),i=setTimeout(()=>{o=!0,P(!0)},n),P}function SA(t){t(!1)}/**
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
 */function RA(t){return t!==void 0}function CA(t){return typeof t=="function"}function AA(t){return typeof t=="object"&&!Array.isArray(t)}function ec(t){return typeof t=="string"||t instanceof String}function Vy(t){return _p()&&t instanceof Blob}function _p(){return typeof Blob<"u"}function My(t,e,n,r){if(r<e)throw Dd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Dd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function wi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function uE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Yr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Yr||(Yr={}));/**
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
 */function cE(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class PA{constructor(e,n,r,s,i,o,u,l,h,p,m,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=u,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=m,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,k)=>{this.resolve_=E,this.reject_=k,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new il(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=u=>{const l=u.loaded,h=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const u=i.getErrorCode()===Yr.NO_ERROR,l=i.getStatus();if(!u||cE(l,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===Yr.ABORT;r(!1,new il(!1,null,p));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new il(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(u,u.getResponse());RA(l)?i(l):i()}catch(l){o(l)}else if(u!==null){const l=yp();l.serverResponse=u.getErrorText(),this.errorCallback_?o(this.errorCallback_(u,l)):o(l)}else if(s.canceled){const l=this.appDelete_?lE():oE();o(l)}else{const l=iE();o(l)}};this.canceled_?n(!1,new il(!1,null,!0)):this.backoffId_=xA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class il{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function NA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function bA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function DA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function OA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function VA(t,e,n,r,s,i,o=!0){const u=uE(t.urlParams),l=t.url+u,h=Object.assign({},t.headers);return DA(h,e),NA(h,n),bA(h,i),OA(h,r),new PA(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function MA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function LA(...t){const e=MA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(_p())return new Blob(t);throw new Ne(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function FA(t){if(typeof atob>"u")throw TA("base-64");return atob(t)}/**
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
 */const hn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class dh{constructor(e,n){this.data=e,this.contentType=n||null}}function zA(t,e){switch(t){case hn.RAW:return new dh(hE(e));case hn.BASE64:case hn.BASE64URL:return new dh(dE(t,e));case hn.DATA_URL:return new dh(BA(e),$A(e))}throw yp()}function hE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function UA(t){let e;try{e=decodeURIComponent(t)}catch{throw ko(hn.DATA_URL,"Malformed data URL.")}return hE(e)}function dE(t,e){switch(t){case hn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ko(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case hn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ko(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=FA(e)}catch(s){throw s.message.includes("polyfill")?s:ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class fE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ko(hn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=HA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function BA(t){const e=new fE(t);return e.base64?dE(hn.BASE64,e.rest):UA(e.rest)}function $A(t){return new fE(t).contentType}function HA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class rr{constructor(e,n){let r=0,s="";Vy(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Vy(this.data_)){const r=this.data_,s=jA(r,e,n);return s===null?null:new rr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new rr(r,!0)}}static getBlob(...e){if(_p()){const n=e.map(r=>r instanceof rr?r.data_:r);return new rr(LA.apply(null,n))}else{const n=e.map(o=>ec(o)?zA(hn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let u=0;u<o.length;u++)s[i++]=o[u]}),new rr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function pE(t){let e;try{e=JSON.parse(t)}catch{return null}return AA(e)?e:null}/**
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
 */function qA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function KA(t,e){return e}class yt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||KA}}let ol=null;function GA(t){return!ec(t)||t.length<2?t:mE(t)}function gE(){if(ol)return ol;const t=[];t.push(new yt("bucket")),t.push(new yt("generation")),t.push(new yt("metageneration")),t.push(new yt("name","fullPath",!0));function e(i,o){return GA(o)}const n=new yt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new yt("size");return s.xform=r,t.push(s),t.push(new yt("timeCreated")),t.push(new yt("updated")),t.push(new yt("md5Hash",null,!0)),t.push(new yt("cacheControl",null,!0)),t.push(new yt("contentDisposition",null,!0)),t.push(new yt("contentEncoding",null,!0)),t.push(new yt("contentLanguage",null,!0)),t.push(new yt("contentType",null,!0)),t.push(new yt("metadata","customMetadata",!0)),ol=t,ol}function QA(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new jt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function XA(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return QA(r,t),r}function yE(t,e,n){const r=pE(e);return r===null?null:XA(t,r,n)}function YA(t,e,n,r){const s=pE(e);if(s===null||!ec(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const p=t.bucket,m=t.fullPath,g="/b/"+o(p)+"/o/"+o(m),E=wi(g,n,r),k=uE({alt:"media",token:h});return E+k})[0]}function _E(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ms{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Vn(t){if(!t)throw yp()}function vp(t,e){function n(r,s){const i=yE(t,s,e);return Vn(i!==null),i}return n}function JA(t,e){function n(r,s){const i=yE(t,s,e);return Vn(i!==null),YA(i,s,t.host,t._protocol)}return n}function ga(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=mA():s=pA():n.getStatus()===402?s=fA(t.bucket):n.getStatus()===403?s=gA(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function wp(t){const e=ga(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=dA(t.path)),i.serverResponse=s.serverResponse,i}return n}function ZA(t,e,n){const r=e.fullServerUrl(),s=wi(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new ms(s,i,vp(t,n),o);return u.errorHandler=wp(e),u}function eP(t,e,n){const r=e.fullServerUrl(),s=wi(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,u=new ms(s,i,JA(t,n),o);return u.errorHandler=wp(e),u}function tP(t,e){const n=e.fullServerUrl(),r=wi(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(l,h){}const u=new ms(r,s,o,i);return u.successCodes=[200,204],u.errorHandler=wp(e),u}function nP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function vE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=nP(null,e)),r}function rP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function u(){let C="";for(let b=0;b<2;b++)C=C+Math.random().toString().slice(2);return C}const l=u();o["Content-Type"]="multipart/related; boundary="+l;const h=vE(e,r,s),p=_E(h,n),m="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+l+"--",E=rr.getBlob(m,r,g);if(E===null)throw aE();const k={name:h.fullPath},P=wi(i,t.host,t._protocol),D="POST",x=t.maxUploadRetryTime,v=new ms(P,D,vp(t,n),x);return v.urlParams=k,v.headers=o,v.body=E.uploadData(),v.errorHandler=ga(e),v}class du{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Ep(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Vn(!1)}return Vn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function sP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=vE(e,r,s),u={name:o.fullPath},l=wi(i,t.host,t._protocol),h="POST",p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},m=_E(o,n),g=t.maxUploadRetryTime;function E(P){Ep(P);let D;try{D=P.getResponseHeader("X-Goog-Upload-URL")}catch{Vn(!1)}return Vn(ec(D)),D}const k=new ms(l,h,E,g);return k.urlParams=u,k.headers=p,k.body=m,k.errorHandler=ga(e),k}function iP(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(h){const p=Ep(h,["active","final"]);let m=null;try{m=h.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Vn(!1)}m||Vn(!1);const g=Number(m);return Vn(!isNaN(g)),new du(g,r.size(),p==="final")}const o="POST",u=t.maxUploadRetryTime,l=new ms(n,o,i,u);return l.headers=s,l.errorHandler=ga(e),l}const Ly=256*1024;function oP(t,e,n,r,s,i,o,u){const l=new du(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw wA();const h=l.total-l.current;let p=h;s>0&&(p=Math.min(p,s));const m=l.current,g=m+p;let E="";p===0?E="finalize":h===p?E="upload, finalize":E="upload";const k={"X-Goog-Upload-Command":E,"X-Goog-Upload-Offset":`${l.current}`},P=r.slice(m,g);if(P===null)throw aE();function D(b,z){const V=Ep(b,["active","final"]),w=l.current+p,y=r.size();let I;return V==="final"?I=vp(e,i)(b,z):I=null,new du(w,y,V==="final",I)}const x="POST",v=e.maxUploadRetryTime,C=new ms(n,x,D,v);return C.headers=k,C.body=P.uploadData(),C.progressCallback=u||null,C.errorHandler=ga(t),C}const It={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function fh(t){switch(t){case"running":case"pausing":case"canceling":return It.RUNNING;case"paused":return It.PAUSED;case"success":return It.SUCCESS;case"canceled":return It.CANCELED;case"error":return It.ERROR;default:return It.ERROR}}/**
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
 */class aP{constructor(e,n,r){if(CA(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function ks(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class lP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Yr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Yr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Yr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Zi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Zi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Zi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Zi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Zi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class uP extends lP{initXhr(){this.xhr_.responseType="text"}}function Br(){return new uP}/**
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
 */class cP{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=gE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ie.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(cE(s.status,[]))if(i)s=iE();else{this.sleepTime=Math.max(this.sleepTime*2,hA),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ie.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=sP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Br,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=iP(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Br,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Ly*this._chunkMultiplier,n=new du(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=oP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const u=this._ref.storage._makeRequest(o,Br,s,i,!1);this._request=u,u.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Ly*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=ZA(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Br,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=rP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Br,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=oE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=fh(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new aP(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(fh(this._state)){case It.SUCCESS:ks(this._resolve.bind(null,this.snapshot))();break;case It.CANCELED:case It.ERROR:const n=this._reject;ks(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(fh(this._state)){case It.RUNNING:case It.PAUSED:e.next&&ks(e.next.bind(e,this.snapshot))();break;case It.SUCCESS:e.complete&&ks(e.complete.bind(e))();break;case It.CANCELED:case It.ERROR:e.error&&ks(e.error.bind(e,this._error))();break;default:e.error&&ks(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ls{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ls(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mE(this._location.path)}get storage(){return this._service}get parent(){const e=qA(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new ls(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IA(e)}}function hP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new cP(t,new rr(e),n)}function dP(t){t._throwIfRoot("getDownloadURL");const e=eP(t.storage,t._location,gE());return t.storage.makeRequestWithTokens(e,Br).then(n=>{if(n===null)throw EA();return n})}function fP(t){t._throwIfRoot("deleteObject");const e=tP(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Br)}function pP(t,e){const n=WA(t._location.path,e),r=new jt(t._location.bucket,n);return new ls(t.storage,r)}/**
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
 */function mP(t){return/^[A-Za-z]+:\/\//.test(t)}function gP(t,e){return new ls(t,e)}function wE(t,e){if(t instanceof Tp){const n=t;if(n._bucket==null)throw vA();const r=new ls(n,n._bucket);return e!=null?wE(r,e):r}else return e!==void 0?pP(t,e):t}function yP(t,e){if(e&&mP(e)){if(t instanceof Tp)return gP(t,e);throw Dd("To use ref(service, url), the first argument must be a Storage instance.")}else return wE(t,e)}function jy(t,e){const n=e==null?void 0:e[sE];return n==null?null:jt.makeFromBucketSpec(n,t)}function _P(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:N0(s,t.app.options.projectId))}class Tp{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=rE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=uA,this._maxUploadRetryTime=cA,this._requests=new Set,s!=null?this._bucket=jt.makeFromBucketSpec(s,this._host):this._bucket=jy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=jy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){My("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ls(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new kA(lE());{const o=VA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Fy="@firebase/storage",zy="0.13.2";/**
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
 */const EE="storage";function vP(t,e,n){return t=Te(t),hP(t,e,n)}function wP(t){return t=Te(t),dP(t)}function tc(t){return t=Te(t),fP(t)}function Jo(t,e){return t=Te(t),yP(t,e)}function EP(t=Mf(),e){t=Te(t);const r=Vu(t,EE).getImmediate({identifier:e}),s=C0("storage");return s&&TP(r,...s),r}function TP(t,e,n,r={}){_P(t,e,n,r)}function IP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Tp(n,r,s,e,ds)}function kP(){rs(new xr(EE,IP,"PUBLIC").setMultipleInstances(!0)),pn(Fy,zy,""),pn(Fy,zy,"esm2017")}kP();function Ip(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function TE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xP=TE,IE=new aa("auth","Firebase",TE());/**
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
 */const fu=new Of("@firebase/auth");function SP(t,...e){fu.logLevel<=ae.WARN&&fu.warn(`Auth (${ds}): ${t}`,...e)}function Sl(t,...e){fu.logLevel<=ae.ERROR&&fu.error(`Auth (${ds}): ${t}`,...e)}/**
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
 */function on(t,...e){throw kp(t,...e)}function _n(t,...e){return kp(t,...e)}function kE(t,e,n){const r=Object.assign(Object.assign({},xP()),{[e]:n});return new aa("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return kE(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function kp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return IE.create(t,...e)}function Y(t,e,...n){if(!t)throw kp(e,...n)}function Nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Sl(e),new Error(e)}function $n(t,e){t||Nn(e)}/**
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
 */function Od(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function RP(){return Uy()==="http:"||Uy()==="https:"}function Uy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(RP()||Lx()||"connection"in navigator)?navigator.onLine:!0}function AP(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ya{constructor(e,n){this.shortDelay=e,this.longDelay=n,$n(n>e,"Short delay should be less than long delay!"),this.isMobile=Ox()||jx()}get(){return CP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function xp(t,e){$n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class xE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NP=new ya(3e4,6e4);function Dr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qn(t,e,n,r,s={}){return SE(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const u=la(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return Mx()||(h.referrerPolicy="no-referrer"),xE.fetch()(RE(t,t.config.apiHost,n,u),h)})}async function SE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},PP),e);try{const s=new DP(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw al(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const u=i.ok?o.errorMessage:o.error.message,[l,h]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw al(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw al(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw al(t,"user-disabled",o);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw kE(t,p,h);on(t,p)}}catch(s){if(s instanceof Tn)throw s;on(t,"network-request-failed",{message:String(s)})}}async function nc(t,e,n,r,s={}){const i=await qn(t,e,n,r,s);return"mfaPendingCredential"in i&&on(t,"multi-factor-auth-required",{_serverResponse:i}),i}function RE(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?xp(t.config,s):`${t.config.apiScheme}://${s}`}function bP(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DP{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(_n(this.auth,"network-request-failed")),NP.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function al(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=_n(t,e,r);return s.customData._tokenResponse=n,s}function By(t){return t!==void 0&&t.enterprise!==void 0}class OP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return bP(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function VP(t,e){return qn(t,"GET","/v2/recaptchaConfig",Dr(t,e))}/**
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
 */async function MP(t,e){return qn(t,"POST","/v1/accounts:delete",e)}async function CE(t,e){return qn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function LP(t,e=!1){const n=Te(t),r=await n.getIdToken(e),s=Sp(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xo(ph(s.auth_time)),issuedAtTime:xo(ph(s.iat)),expirationTime:xo(ph(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ph(t){return Number(t)*1e3}function Sp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Sl("JWT malformed, contained fewer than 3 sections"),null;try{const s=S0(n);return s?JSON.parse(s):(Sl("Failed to decode base64 JWT payload"),null)}catch(s){return Sl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $y(t){const e=Sp(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tn&&jP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class FP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xo(this.lastLoginAt),this.creationTime=xo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function pu(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zo(t,CE(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?AE(i.providerUserInfo):[],u=UP(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(u!=null&&u.length),p=l?h:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new Vd(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function zP(t){const e=Te(t);await pu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UP(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function AE(t){return t.map(e=>{var{providerId:n}=e,r=Ip(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function BP(t,e){const n=await SE(t,{},async()=>{const r=la({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=RE(t,s,"/v1/token",`key=${i}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",xE.fetch()(o,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function $P(t,e){return qn(t,"POST","/v2/accounts:revokeToken",Dr(t,e))}/**
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
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$y(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=$y(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await BP(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qs;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return Nn("not implemented")}}/**
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
 */function Jn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Ip(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new FP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return LP(this,e)}reload(){return zP(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await pu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pn(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await Zo(this,MP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,u,l,h,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(u=n.tenantId)!==null&&u!==void 0?u:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:C,emailVerified:b,isAnonymous:z,providerData:V,stsTokenManager:w}=n;Y(C&&w,e,"internal-error");const y=Qs.fromJSON(this.name,w);Y(typeof C=="string",e,"internal-error"),Jn(m,e.name),Jn(g,e.name),Y(typeof b=="boolean",e,"internal-error"),Y(typeof z=="boolean",e,"internal-error"),Jn(E,e.name),Jn(k,e.name),Jn(P,e.name),Jn(D,e.name),Jn(x,e.name),Jn(v,e.name);const I=new bn({uid:C,auth:e,email:g,emailVerified:b,displayName:m,isAnonymous:z,photoURL:k,phoneNumber:E,tenantId:P,stsTokenManager:y,createdAt:x,lastLoginAt:v});return V&&Array.isArray(V)&&(I.providerData=V.map(S=>Object.assign({},S))),D&&(I._redirectEventId=D),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qs;s.updateFromServerResponse(n);const i=new bn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await pu(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?AE(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new Qs;u.updateFromIdToken(r);const l=new bn({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
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
 */const Hy=new Map;function Dn(t){$n(t instanceof Function,"Expected a class definition");let e=Hy.get(t);return e?($n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Hy.set(t,e),e)}/**
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
 */class PE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}PE.type="NONE";const qy=PE;/**
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
 */function Rl(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Rl(this.userKey,s.apiKey,i),this.fullPersistenceKey=Rl("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xs(Dn(qy),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Dn(qy);const o=Rl(r,e.config.apiKey,e.name);let u=null;for(const h of n)try{const p=await h._get(o);if(p){const m=bn._fromJSON(e,p);h!==i&&(u=m),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xs(i,e,r):(i=l[0],u&&await i._set(o,u.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new Xs(i,e,r))}}/**
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
 */function Wy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(OE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(NE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ME(e))return"Blackberry";if(LE(e))return"Webos";if(bE(e))return"Safari";if((e.includes("chrome/")||DE(e))&&!e.includes("edge/"))return"Chrome";if(VE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function NE(t=mt()){return/firefox\//i.test(t)}function bE(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function DE(t=mt()){return/crios\//i.test(t)}function OE(t=mt()){return/iemobile/i.test(t)}function VE(t=mt()){return/android/i.test(t)}function ME(t=mt()){return/blackberry/i.test(t)}function LE(t=mt()){return/webos/i.test(t)}function Rp(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HP(t=mt()){var e;return Rp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function qP(){return Fx()&&document.documentMode===10}function jE(t=mt()){return Rp(t)||VE(t)||LE(t)||ME(t)||/windows phone/i.test(t)||OE(t)}/**
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
 */function FE(t,e=[]){let n;switch(t){case"Browser":n=Wy(mt());break;case"Worker":n=`${Wy(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ds}/${r}`}/**
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
 */class WP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,u)=>{try{const l=e(i);o(l)}catch(l){u(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function KP(t,e={}){return qn(t,"GET","/v2/passwordPolicy",Dr(t,e))}/**
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
 */const GP=6;class QP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:GP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class XP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ky(this),this.idTokenSubscription=new Ky(this),this.beforeStateQueue=new WP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=IE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await CE(this,{idToken:e}),r=await bn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===u)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await pu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=AP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pn(this.app))return Promise.reject(Tr(this));const n=e?Te(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pn(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pn(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KP(this),n=new QP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new aa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await $P(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(u,this,"internal-error"),u.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=FE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&SP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gs(t){return Te(t)}class Ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kx(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function YP(t){rc=t}function zE(t){return rc.loadJS(t)}function JP(){return rc.recaptchaEnterpriseScript}function ZP(){return rc.gapiScript}function eN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tN="recaptcha-enterprise",nN="NO_RECAPTCHA";class rN{constructor(e){this.type=tN,this.auth=gs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,u)=>{VP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const h=new OP(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{u(l)})})}function s(i,o,u){const l=window.grecaptcha;By(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(nN)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(u=>{if(!n&&By(window.grecaptcha))s(u,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=JP();l.length!==0&&(l+=u),zE(l).then(()=>{s(u,i,o)}).catch(h=>{o(h)})}}).catch(u=>{o(u)})})}}async function Gy(t,e,n,r=!1){const s=new rN(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Md(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Gy(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function sN(t,e){const n=Vu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(nu(i,e??{}))return s;on(s,"already-initialized")}return n.initialize({options:e})}function iN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function oN(t,e,n){const r=gs(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=UE(e),{host:o,port:u}=aN(e),l=u===null?"":`:${u}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),lN()}function UE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aN(t){const e=UE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Qy(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Qy(o)}}}function Qy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Cp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nn("not implemented")}_getIdTokenResponse(e){return Nn("not implemented")}_linkToIdToken(e,n){return Nn("not implemented")}_getReauthenticationResolver(e){return Nn("not implemented")}}async function uN(t,e){return qn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function cN(t,e){return nc(t,"POST","/v1/accounts:signInWithPassword",Dr(t,e))}async function hN(t,e){return qn(t,"POST","/v1/accounts:sendOobCode",Dr(t,e))}async function dN(t,e){return hN(t,e)}/**
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
 */async function fN(t,e){return nc(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}async function pN(t,e){return nc(t,"POST","/v1/accounts:signInWithEmailLink",Dr(t,e))}/**
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
 */class ea extends Cp{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Md(e,n,"signInWithPassword",cN);case"emailLink":return fN(e,{email:this._email,oobCode:this._password});default:on(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Md(e,r,"signUpPassword",uN);case"emailLink":return pN(e,{idToken:n,email:this._email,oobCode:this._password});default:on(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ys(t,e){return nc(t,"POST","/v1/accounts:signInWithIdp",Dr(t,e))}/**
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
 */const mN="http://localhost";class us extends Cp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new us(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Ip(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new us(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:mN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=la(n)}return e}}/**
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
 */function gN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yN(t){const e=so(io(t)).link,n=e?so(io(e)).deep_link_id:null,r=so(io(t)).deep_link_id;return(r?so(io(r)).link:null)||r||n||e||t}class Ap{constructor(e){var n,r,s,i,o,u;const l=so(io(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,m=gN((s=l.mode)!==null&&s!==void 0?s:null);Y(h&&p&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=p,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const n=yN(e);try{return new Ap(n)}catch{return null}}}/**
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
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ap.parseLink(n);return Y(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class BE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _a extends BE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class sr extends _a{constructor(){super("facebook.com")}static credential(e){return us._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.FACEBOOK_SIGN_IN_METHOD="facebook.com";sr.PROVIDER_ID="facebook.com";/**
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
 */class ir extends _a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return us._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
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
 */class or extends _a{constructor(){super("github.com")}static credential(e){return us._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends _a{constructor(){super("twitter.com")}static credential(e,n){return us._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */class fi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await bn._fromIdTokenResponse(e,r,s),o=Xy(r);return new fi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Xy(r);return new fi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Xy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class mu extends Tn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,mu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new mu(e,n,r,s)}}function $E(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?mu._fromErrorAndOperation(t,i,e,r):i})}async function _N(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fi._forOperation(t,"link",r)}/**
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
 */async function vN(t,e,n=!1){const{auth:r}=t;if(Pn(r.app))return Promise.reject(Tr(r));const s="reauthenticate";try{const i=await Zo(t,$E(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=Sp(i.idToken);Y(o,r,"internal-error");const{sub:u}=o;return Y(t.uid===u,r,"user-mismatch"),fi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&on(r,"user-mismatch"),i}}/**
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
 */async function HE(t,e,n=!1){if(Pn(t.app))return Promise.reject(Tr(t));const r="signIn",s=await $E(t,r,e),i=await fi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function wN(t,e){return HE(gs(t),e)}/**
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
 */async function EN(t){const e=gs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function TN(t,e,n){const r=gs(t);await Md(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",dN)}function IN(t,e,n){return Pn(t.app)?Promise.reject(Tr(t)):wN(Te(t),Ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&EN(t),r})}function kN(t,e,n,r){return Te(t).onIdTokenChanged(e,n,r)}function xN(t,e,n){return Te(t).beforeAuthStateChanged(e,n)}function SN(t,e,n,r){return Te(t).onAuthStateChanged(e,n,r)}function RN(t){return Te(t).signOut()}const gu="__sak";/**
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
 */class qE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(gu,"1"),this.storage.removeItem(gu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const CN=1e3,AN=10;class WE extends qE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,u,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);qP()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,AN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}WE.type="LOCAL";const PN=WE;/**
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
 */class KE extends qE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}KE.type="SESSION";const GE=KE;/**
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
 */function NN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class sc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new sc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(o).map(async h=>h(n.origin,i)),l=await NN(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sc.receivers=[];/**
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
 */function Pp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class bN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((u,l)=>{const h=Pp("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(g.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function vn(){return window}function DN(t){vn().location.href=t}/**
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
 */function QE(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function ON(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function VN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MN(){return QE()?self:null}/**
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
 */const XE="firebaseLocalStorageDb",LN=1,yu="firebaseLocalStorage",YE="fbase_key";class va{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ic(t,e){return t.transaction([yu],e?"readwrite":"readonly").objectStore(yu)}function jN(){const t=indexedDB.deleteDatabase(XE);return new va(t).toPromise()}function Ld(){const t=indexedDB.open(XE,LN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yu,{keyPath:YE})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yu)?e(r):(r.close(),await jN(),e(await Ld()))})})}async function Yy(t,e,n){const r=ic(t,!0).put({[YE]:e,value:n});return new va(r).toPromise()}async function FN(t,e){const n=ic(t,!1).get(e),r=await new va(n).toPromise();return r===void 0?null:r.value}function Jy(t,e){const n=ic(t,!0).delete(e);return new va(n).toPromise()}const zN=800,UN=3;class JE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ld(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sc._getInstance(MN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ON(),!this.activeServiceWorker)return;this.sender=new bN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||VN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ld();return await Yy(e,gu,"1"),await Jy(e,gu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ic(s,!1).getAll();return new va(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}JE.type="LOCAL";const BN=JE;new ya(3e4,6e4);/**
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
 */function $N(t,e){return e?Dn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Np extends Cp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function HN(t){return HE(t.auth,new Np(t),t.bypassAuthState)}function qN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),vN(n,new Np(t),t.bypassAuthState)}async function WN(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),_N(n,new Np(t),t.bypassAuthState)}/**
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
 */class ZE{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:u}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HN;case"linkViaPopup":case"linkViaRedirect":return WN;case"reauthViaPopup":case"reauthViaRedirect":return qN;default:on(this.auth,"internal-error")}}resolve(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){$n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const KN=new ya(2e3,1e4);class zs extends ZE{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zs.currentPopupAction&&zs.currentPopupAction.cancel(),zs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){$n(this.filter.length===1,"Popup operations only handle one event");const e=Pp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(_n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(_n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,KN.get())};e()}}zs.currentPopupAction=null;/**
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
 */const GN="pendingRedirect",Cl=new Map;class QN extends ZE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Cl.get(this.auth._key());if(!e){try{const r=await XN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Cl.set(this.auth._key(),e)}return this.bypassAuthState||Cl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XN(t,e){const n=ZN(e),r=JN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function YN(t,e){Cl.set(t._key(),e)}function JN(t){return Dn(t._redirectPersistence)}function ZN(t){return Rl(GN,t.config.apiKey,t.name)}async function eb(t,e,n=!1){if(Pn(t.app))return Promise.reject(Tr(t));const r=gs(t),s=$N(r,e),o=await new QN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const tb=10*60*1e3;class nb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!eT(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(_n(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zy(e))}saveEventToCache(e){this.cachedEventUids.add(Zy(e)),this.lastProcessedEventTime=Date.now()}}function Zy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function eT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return eT(t);default:return!1}}/**
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
 */async function sb(t,e={}){return qn(t,"GET","/v1/projects",e)}/**
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
 */const ib=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ob=/^https?/;async function ab(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sb(t);for(const n of e)try{if(lb(n))return}catch{}on(t,"unauthorized-domain")}function lb(t){const e=Od(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ob.test(n))return!1;if(ib.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const ub=new ya(3e4,6e4);function e_(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cb(t){return new Promise((e,n)=>{var r,s,i;function o(){e_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{e_(),n(_n(t,"network-request-failed"))},timeout:ub.get()})}if(!((s=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=vn().gapi)===null||i===void 0)&&i.load)o();else{const u=eN("iframefcb");return vn()[u]=()=>{gapi.load?o():n(_n(t,"network-request-failed"))},zE(`${ZP()}?onload=${u}`).catch(l=>n(l))}}).catch(e=>{throw Al=null,e})}let Al=null;function hb(t){return Al=Al||cb(t),Al}/**
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
 */const db=new ya(5e3,15e3),fb="__/auth/iframe",pb="emulator/auth/iframe",mb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yb(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?xp(e,pb):`https://${t.config.authDomain}/${fb}`,r={apiKey:e.apiKey,appName:t.name,v:ds},s=gb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${la(r).slice(1)}`}async function _b(t){const e=await hb(t),n=vn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:yb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=_n(t,"network-request-failed"),u=vn().setTimeout(()=>{i(o)},db.get());function l(){vn().clearTimeout(u),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const vb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wb=500,Eb=600,Tb="_blank",Ib="http://localhost";class t_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kb(t,e,n,r=wb,s=Eb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},vb),{width:r.toString(),height:s.toString(),top:i,left:o}),h=mt().toLowerCase();n&&(u=DE(h)?Tb:n),NE(h)&&(e=e||Ib,l.scrollbars="yes");const p=Object.entries(l).reduce((g,[E,k])=>`${g}${E}=${k},`,"");if(HP(h)&&u!=="_self")return xb(e||"",u),new t_(null);const m=window.open(e||"",u,p);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new t_(m)}function xb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Sb="__/auth/handler",Rb="emulator/auth/handler",Cb=encodeURIComponent("fac");async function n_(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ds,eventId:s};if(e instanceof BE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Wx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof _a){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const u=o;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await t._getAppCheckToken(),h=l?`#${Cb}=${encodeURIComponent(l)}`:"";return`${Ab(t)}?${la(u).slice(1)}${h}`}function Ab({config:t}){return t.emulator?xp(t,Rb):`https://${t.authDomain}/${Sb}`}/**
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
 */const mh="webStorageSupport";class Pb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=GE,this._completeRedirectFn=eb,this._overrideRedirectResult=YN}async _openPopup(e,n,r,s){var i;$n((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await n_(e,n,r,Od(),s);return kb(e,o,Pp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await n_(e,n,r,Od(),s);return DN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):($n(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await _b(e),r=new nb(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mh,{type:mh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[mh];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ab(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jE()||bE()||Rp()}}const Nb=Pb;var r_="@firebase/auth",s_="1.7.9";/**
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
 */class bb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Db(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ob(t){rs(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:u}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:FE(t)},h=new XP(r,s,i,l);return iN(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),rs(new xr("auth-internal",e=>{const n=gs(e.getProvider("auth").getImmediate());return(r=>new bb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(r_,s_,Db(t)),pn(r_,s_,"esm2017")}/**
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
 */const Vb=5*60,Mb=P0("authIdTokenMaxAge")||Vb;let i_=null;const Lb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Mb)return;const s=n==null?void 0:n.token;i_!==s&&(i_=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function jb(t=Mf()){const e=Vu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sN(t,{popupRedirectResolver:Nb,persistence:[BN,PN,GE]}),r=P0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Lb(i.toString());xN(n,o,()=>o(n.currentUser)),kN(n,u=>o(u))}}const s=R0("auth");return s&&oN(n,`http://${s}`),n}function Fb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}YP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=_n("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Fb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ob("Browser");const zb={apiKey:"AIzaSyBhmphsa4XrgzNOrdgkMA2E35Dx_h1gASU",authDomain:"reffinances-4d56b.firebaseapp.com",projectId:"reffinances-4d56b",storageBucket:"reffinances-4d56b.firebasestorage.app",messagingSenderId:"45278407668",appId:"1:45278407668:web:70304fa86a7a152db0a7a1"},bp=O0(zb),tT=K1(bp),Us=jb(bp),ta=EP(bp),Ot={debug:(t,e=null)=>{},info:(t,e=null)=>{console.info(`[INFO] ${t}`,e)},warn:(t,e=null)=>{console.warn(`[WARN] ${t}`,e)},error:(t,e=null)=>{console.error(`[ERROR] ${t}`,e)}},Ub={numero:"",date:new Date().toISOString().split("T")[0],motifId:"",expenseType:"forfait",km:"",trajetId:"",locationVoiture:"",carburant:"",avion:"",train:"",repas:"",transportCommun:"",parking:"",peage:"",peageSurcout:"",hotelForfait:"",hotelReel:"",montantRecuIndemnite:"",montantRecuKm:"",montantRecuPeage:"",montantRecuReel:"",montantRecuHotelForfait:"",montantRecuHotelReel:""},ll=t=>new Intl.NumberFormat("fr-FR",{style:"currency",currency:"EUR"}).format(t||0),Bb=t=>{if(!t&&t!==0)return"";const e=1024;if(Math.abs(t)<e)return t+" B";const n=["KB","MB","GB","TB"];let r=-1;do t/=e,++r;while(Math.abs(t)>=e&&r<n.length-1);return t.toFixed(1)+" "+n[r]},$b=({motifs:t,trajets:e,onAddConvocation:n,onClose:r,onGoToSettings:s,convocationToEdit:i,onUpdateConvocation:o})=>{var A;const u=j.useMemo(()=>[...t].sort((R,T)=>R.nom.localeCompare(T.nom,"fr",{sensitivity:"base"})),[t]),[l,h]=j.useState(()=>{var q,W,J,re,pe,Ue,Ve,je;if(!i)return{...Ub,motifId:u.length>0?u[0].id:""};const R=Array.isArray(i.depenses)?i.depenses:[],T=R.find(Q=>Q.nom==="Indemnité"),X=R.find(Q=>Q.nom==="Péage"),ke=R.find(Q=>Q.nom==="Frais Kilométriques"),Oe=R.find(Q=>Q.nom==="Total Frais Réels"),ue=R.find(Q=>Q.nom==="Hôtel (Forfait)"),U=R.find(Q=>Q.nom==="Hôtel (Réel)");return{numero:i.numero,date:i.date,motifId:i.motifId,expenseType:i.expenseType,km:i.km==="N/A"?"":i.km,trajetId:i.trajetId||"",locationVoiture:((q=i.detailsReel)==null?void 0:q.locationVoiture)||"",carburant:((W=i.detailsReel)==null?void 0:W.carburant)||"",avion:((J=i.detailsReel)==null?void 0:J.avion)||"",train:((re=i.detailsReel)==null?void 0:re.train)||"",repas:((pe=i.detailsReel)==null?void 0:pe.repas)||"",transportCommun:((Ue=i.detailsReel)==null?void 0:Ue.transportCommun)||"",parking:((Ve=i.detailsReel)==null?void 0:Ve.parking)||"",peage:(X==null?void 0:X.du)||"",peageSurcout:((je=i.detailsReel)==null?void 0:je.peageSurcout)||"",hotelForfait:(ue==null?void 0:ue.du)||"",hotelReel:(U==null?void 0:U.du)||"",montantRecuIndemnite:(T==null?void 0:T.recu)||"",montantRecuKm:(ke==null?void 0:ke.recu)||"",montantRecuPeage:(X==null?void 0:X.recu)||"",montantRecuReel:(Oe==null?void 0:Oe.recu)||"",montantRecuHotelForfait:(ue==null?void 0:ue.recu)||"",montantRecuHotelReel:(U==null?void 0:U.recu)||""}}),[p,m]=j.useState({}),[g,E]=j.useState(!1),[k,P]=j.useState(null),[D,x]=j.useState(null),[v,C]=j.useState(null),b=j.useRef(null),z=t.length>0,V=j.useMemo(()=>{const R=t.find(ke=>ke.id===l.motifId);if(!R)return{indemniteDue:0,coutKmDu:0};const T=R.indemnite;let X=0;if(l.expenseType==="forfait"){const ke=parseFloat(l.km)||0,Oe=Math.ceil(ke),ue=R.plafondKm,U=R.coeffKm,q=ue>0&&Oe>ue?ue:Oe;X=Math.round(q*U*100)/100}return{indemniteDue:T,coutKmDu:X}},[l.km,l.motifId,l.expenseType,t]),w=j.useMemo(()=>{if(l.expenseType!=="reel")return{totalReelDu:0,kmADeclarer:0,coutTrajetDu:0};const R=t.find(an=>an.id===l.motifId),T=(R==null?void 0:R.coeffKm)||0,X=e.find(an=>an.id===l.trajetId),Oe=((X==null?void 0:X.distance)||0)*T,ue=parseFloat(l.locationVoiture)||0,U=parseFloat(l.carburant)||0,q=parseFloat(l.avion)||0,W=parseFloat(l.train)||0,J=parseFloat(l.repas)||0,re=parseFloat(l.transportCommun)||0,pe=parseFloat(l.parking)||0,Ue=parseFloat(l.peageSurcout)||0,Ve=ue+U+q+W+Ue+J+re+pe,je=Ve+Oe,Q=Ve+Oe,Tt=T>0?Math.ceil(Q/T):0,Ii=Math.round(Oe*100)/100;return{totalReelDu:Math.round(je*100)/100,kmADeclarer:Tt,coutTrajetDu:Ii}},[l.expenseType,l.motifId,l.trajetId,l.locationVoiture,l.carburant,l.avion,l.train,l.repas,l.transportCommun,l.parking,l.peageSurcout,t,e]),y=R=>{const{name:T,value:X}=R.target;h(ke=>({...ke,[T]:X}))};j.useEffect(()=>{u.length&&(!l.motifId||!u.some(R=>R.id===l.motifId))&&h(R=>({...R,motifId:u[0].id}))},[u,l.motifId]);const I=()=>{const R={};return l.numero.trim()||(R.numero="Le numéro est requis."),l.date||(R.date="La date est requise."),l.motifId||(R.motifId="Le motif est requis."),m(R),Object.keys(R).length===0},S=async R=>{if(R.preventDefault(),!(!I()||g)){E(!0),m(T=>({...T,form:null}));try{const T=t.find(J=>J.id===l.motifId),X=e.find(J=>J.id===l.trajetId),{indemniteDue:ke,coutKmDu:Oe}=V,ue=[{nom:"Indemnité",du:ke,recu:parseFloat(l.montantRecuIndemnite)||0}];l.expenseType==="reel"?(parseFloat(l.peage)>0&&ue.push({nom:"Péage",du:parseFloat(l.peage)||0,recu:parseFloat(l.montantRecuPeage)||0}),ue.push({nom:"Total Frais Réels",du:w.totalReelDu,recu:parseFloat(l.montantRecuReel)||0}),parseFloat(l.hotelReel)>0&&ue.push({nom:"Hôtel (Réel)",du:parseFloat(l.hotelReel)||0,recu:parseFloat(l.montantRecuHotelReel)||0})):(ue.push({nom:"Péage",du:parseFloat(l.peage)||0,recu:parseFloat(l.montantRecuPeage)||0}),ue.push({nom:"Frais Kilométriques",du:Oe,recu:parseFloat(l.montantRecuKm)||0}),ue.push({nom:"Hôtel (Forfait)",du:parseFloat(l.hotelForfait)||0,recu:parseFloat(l.montantRecuHotelForfait)||0}));const U=i?i.id:`conv_${Date.now()}`;let q=null;if(k){if(!Us||!Us.currentUser){const J=new Error("Vous devez être connecté pour téléverser un fichier.");throw J.code="auth/not-authenticated",J}x(0),C(null);try{if(i&&i.filePath)try{await tc(Jo(ta,i.filePath))}catch(Ve){Ot.warn("Unable to delete previous file:",Ve)}const J=`convocations/${U}/${Date.now()}_${k.name}`,re=Jo(ta,J),pe=vP(re,k),Ue=await new Promise((Ve,je)=>{pe.on("state_changed",Q=>{const Tt=Q.totalBytes?Math.round(Q.bytesTransferred/Q.totalBytes*100):null;x(Tt)},Q=>{let Tt=(Q==null?void 0:Q.message)||"Erreur lors du téléversement.";(Q==null?void 0:Q.code)==="storage/retry-limit-exceeded"?Tt="Téléversement interrompu après plusieurs tentatives — vérifiez votre connexion réseau et les règles Firebase Storage.":(Q==null?void 0:Q.code)==="storage/unauthorized"||(Q==null?void 0:Q.code)==="storage/permission-denied"?Tt="Permission refusée. Vérifiez que vous êtes connecté et les règles Firebase Storage.":(Q==null?void 0:Q.code)==="storage/canceled"&&(Tt="Téléversement annulé."),C(Tt),x(null),je(Q)},async()=>{try{const Q=await wP(re);x(100),Ve(Q)}catch(Q){je(Q)}})});q={fileName:k.name,filePath:J,fileUrl:Ue}}catch(J){throw v||C((J==null?void 0:J.message)||"Erreur lors du téléversement"),J}}const W={id:U,numero:l.numero,date:l.date,motifId:l.motifId,motifNom:T?T.nom:"Motif inconnu",expenseType:l.expenseType,depenses:ue,km:l.expenseType==="forfait"?l.km||0:"N/A",trajetId:l.trajetId||null,trajetNom:X?X.nom:"N/A",trajetDistance:X?X.distance:0,detailsReel:l.expenseType==="reel"?{locationVoiture:parseFloat(l.locationVoiture)||0,carburant:parseFloat(l.carburant)||0,avion:parseFloat(l.avion)||0,train:parseFloat(l.train)||0,repas:parseFloat(l.repas)||0,transportCommun:parseFloat(l.transportCommun)||0,parking:parseFloat(l.parking)||0,peageSurcout:parseFloat(l.peageSurcout)||0,coutTrajet:w.coutTrajetDu||0}:null,kmADeclarer:l.expenseType==="reel"?w.kmADeclarer:0};q?(W.fileName=q.fileName,W.filePath=q.filePath,W.fileUrl=q.fileUrl):i&&i.fileUrl&&(W.fileName=i.fileName,W.filePath=i.filePath,W.fileUrl=i.fileUrl),i?await o(W):await n(W),r()}catch(T){let X="Une erreur est survenue lors de l'enregistrement.";if(T instanceof Error)if(T.code)switch(T.code){case"storage/unauthorized":X="Permission refusée. Vérifiez les règles de sécurité de Firebase Storage.";break;case"auth/not-authenticated":X="Vous devez être connecté pour téléverser un fichier.";break;case"permission-denied":X="Permission refusée. Vérifiez les règles de sécurité de Firestore.";break;default:X=`Une erreur inattendue est survenue: ${T.code}.`}else X=`Erreur: ${T.message}.`;else typeof T=="string"&&(X=T);m(ke=>({...ke,form:X}))}finally{E(!1)}}};return j.useEffect(()=>{l.expenseType==="forfait"?h(R=>({...R,locationVoiture:"",carburant:"",avion:"",train:"",repas:"",transportCommun:"",parking:"",peageSurcout:"",hotelReel:"",montantRecuReel:"",montantRecuHotelReel:"",trajetId:""})):l.expenseType==="reel"&&h(R=>({...R,km:"",hotelForfait:"",montantRecuKm:"",montantRecuHotelForfait:""}))},[l.expenseType]),f.jsx("div",{className:"fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal",children:f.jsxs("form",{onSubmit:S,className:"bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] flex flex-col animate-scale-in",children:[f.jsxs("div",{className:"flex justify-between items-center p-4 border-b dark:border-zinc-700",children:[f.jsxs("h3",{className:"text-lg font-medium text-zinc-900 dark:text-white",children:[i?"Modifier la":"Nouvelle"," Convocation"]}),f.jsx(fe,{variant:"ghost",onClick:r,className:"!p-2",children:f.jsx(dd,{size:20})})]}),f.jsxs("div",{className:"p-6 space-y-6 overflow-y-auto",children:[!z&&f.jsx("div",{className:"bg-yellow-100 dark:bg-yellow-800/50 border-l-4 border-yellow-500 text-yellow-800 dark:text-yellow-200 p-4 rounded-md",role:"alert",children:f.jsxs("div",{className:"flex items-center justify-between flex-wrap gap-2",children:[f.jsxs("div",{children:[f.jsx("p",{className:"font-bold",children:"Aucun motif trouvé !"}),f.jsx("p",{className:"text-sm",children:"Vous devez créer un motif avant d'ajouter une convocation."})]}),f.jsx(fe,{type:"button",onClick:s,variant:"solid",className:"bg-yellow-600 hover:bg-yellow-700 text-white flex-shrink-0",children:"Aller aux Paramètres"})]})}),f.jsxs("div",{className:`${z?"":"opacity-50 pointer-events-none"} space-y-6`,children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[f.jsx(Wt,{label:"Numéro de convocation",name:"numero",type:"text",value:l.numero,onChange:y,placeholder:"",required:!0,isInvalid:!!p.numero}),f.jsx(Wt,{label:"Date",name:"date",type:"date",value:l.date,onChange:y,required:!0,isInvalid:!!p.date}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"motifId",className:"block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",children:"Motif de convocation"}),f.jsxs("select",{id:"motifId",name:"motifId",value:l.motifId,onChange:y,className:`mt-1 block w-full rounded-md shadow-sm sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200 ${p.motifId?"border-red-500 ring-red-500":"border-zinc-300 dark:border-zinc-600 focus:border-blue-500 focus:ring-blue-500 focus:ring-1"}`,required:!0,children:[!l.motifId&&u.length>0&&f.jsx("option",{value:"",disabled:!0,children:"Sélectionnez un motif"}),u.map(R=>f.jsx("option",{value:R.id,children:R.nom},R.id))]})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsx("h3",{className:"text-lg font-medium text-blue-600 dark:text-blue-400",children:"Frais de Déplacement"}),f.jsxs("div",{className:"flex w-full sm:w-1/2 rounded-md bg-zinc-100 dark:bg-zinc-700 p-1",children:[f.jsx("button",{type:"button",onClick:()=>h(R=>({...R,expenseType:"forfait"})),className:`w-1/2 rounded-md py-2 text-sm font-medium transition-all duration-200 ${l.expenseType==="forfait"?"bg-white dark:bg-zinc-800 shadow-sm text-blue-600 dark:text-blue-400":"text-zinc-600 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-zinc-800/50"}`,children:"Au Forfait"}),f.jsx("button",{type:"button",onClick:()=>h(R=>({...R,expenseType:"reel"})),className:`w-1/2 rounded-md py-2 text-sm font-medium transition-all duration-200 ${l.expenseType==="reel"?"bg-white dark:bg-zinc-800 shadow-sm text-blue-600 dark:text-blue-400":"text-zinc-600 dark:text-zinc-300 hover:bg-white/50 dark:hover:bg-zinc-800/50"}`,children:"Au Réel"})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3",children:[f.jsx("div",{}),f.jsx(Yi,{label:"Indemnité (Due)",value:ll(V.indemniteDue)}),f.jsx(Wt,{label:"Montant perçu (Indemnité)",name:"montantRecuIndemnite",type:"number",step:"0.01",min:"0",value:l.montantRecuIndemnite,onChange:y,placeholder:"0.00",isCurrency:!0})]}),f.jsx(eh,{label:"Péage",name:"peage",nameRecu:"montantRecuPeage",value:l.peage,valueRecu:l.montantRecuPeage,onChange:y}),l.expenseType==="reel"&&f.jsx("p",{className:"text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right sm:pr-[calc(33.33%+1.5rem)] -mt-3",children:'(Le péage est inclus dans le "Total Frais Réels" ci-dessous)'})]}),l.expenseType==="forfait"&&f.jsx("div",{className:"space-y-4 animate-fade-in-sm",children:f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg",children:[f.jsx(Wt,{label:"Nombre de kilomètres",name:"km",type:"number",step:"0.1",min:"0",value:l.km,onChange:y,placeholder:"ex: 120.5"}),f.jsx(Yi,{label:"Coût kilométrique (Dû)",value:ll(V.coutKmDu)}),f.jsx(Wt,{label:"Montant perçu (KM)",name:"montantRecuKm",type:"number",step:"0.01",min:"0",value:l.montantRecuKm,onChange:y,placeholder:"0.00",isCurrency:!0})]})}),l.expenseType==="reel"&&f.jsxs("div",{className:"space-y-4 animate-fade-in-sm",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg",children:[f.jsxs("div",{children:[f.jsx("label",{htmlFor:"trajetId",className:"block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1",children:"Trajet Domicile-Gare/Aéroport"}),f.jsxs("select",{id:"trajetId",name:"trajetId",value:l.trajetId,onChange:y,className:"mt-1 block w-full rounded-md border-zinc-300 dark:border-zinc-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm dark:bg-zinc-700 dark:text-white transition duration-200",children:[f.jsx("option",{value:"",children:"-- Aucun trajet --"}),e.map(R=>f.jsxs("option",{value:R.id,children:[R.nom," (",R.distance," km)"]},R.id))]})]}),f.jsx(Yi,{label:"Coût Trajet (Dû)",value:ll(w.coutTrajetDu)}),f.jsx("div",{})]}),f.jsx(Yn,{label:"Voiture de location",name:"locationVoiture",value:l.locationVoiture,onChange:y}),f.jsx(Yn,{label:"Carburant",name:"carburant",value:l.carburant,onChange:y}),f.jsx(Yn,{label:"Avion",name:"avion",value:l.avion,onChange:y}),f.jsx(Yn,{label:"Train",name:"train",value:l.train,onChange:y}),f.jsx(Yn,{label:"Repas",name:"repas",value:l.repas,onChange:y}),f.jsx(Yn,{label:"Transport en commun",name:"transportCommun",value:l.transportCommun,onChange:y}),f.jsx(Yn,{label:"Parking",name:"parking",value:l.parking,onChange:y}),f.jsx(Yn,{label:"Péage Surcoût",name:"peageSurcout",value:l.peageSurcout,onChange:y}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 pt-6 border-t border-zinc-200 dark:border-zinc-700",children:[f.jsx(Yi,{label:"Total Frais Réels (Dû)",value:ll(w.totalReelDu),description:"(Déplacements + Trajet)"}),f.jsx(Wt,{label:"Montant perçu (Frais Réels)",name:"montantRecuReel",type:"number",step:"0.01",min:"0",value:l.montantRecuReel,onChange:y,placeholder:"0.00",isCurrency:!0}),f.jsx(Yi,{label:"Indemnités KM à déclarer",value:`${w.kmADeclarer} km`,description:`(Frais hors péage/hôtel / Coeff. ${((A=t.find(R=>R.id===l.motifId))==null?void 0:A.coeffKm)||"N/A"})`})]})]}),f.jsxs("div",{className:"space-y-4",children:[f.jsx("h3",{className:"text-lg font-medium text-blue-600 dark:text-blue-400",children:"Frais d'Hébergement"}),l.expenseType==="forfait"&&f.jsx(eh,{label:"Hôtel (Forfait)",name:"hotelForfait",nameRecu:"montantRecuHotelForfait",value:l.hotelForfait,valueRecu:l.montantRecuHotelForfait,onChange:y}),l.expenseType==="reel"&&f.jsxs(f.Fragment,{children:[f.jsx(eh,{label:"Hôtel (Réel)",name:"hotelReel",nameRecu:"montantRecuHotelReel",value:l.hotelReel,valueRecu:l.montantRecuHotelReel,onChange:y}),f.jsx("p",{className:"text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-right sm:pr-[calc(33.33%+1.5rem)] -mt-3",children:`(L'hôtel est inclus dans le "Total Frais Réels" ci-dessus)`})]})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsx("h3",{className:"text-lg font-medium text-blue-600 dark:text-blue-400",children:"Document (PDF)"}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-3 items-end p-3 rounded-lg",children:[f.jsx("div",{}),f.jsxs("div",{className:"col-span-2",children:[f.jsxs("div",{className:"flex items-center justify-between p-3 border rounded-lg bg-transparent dark:bg-transparent",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"p-1 rounded-md bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300",children:f.jsx(lx,{size:20})}),f.jsx("div",{children:f.jsx("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:k?`${k.name} • ${Bb(k.size)}`:i!=null&&i.fileName?`Fichier : ${i.fileName}`:"Aucun document"})})]}),f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("input",{ref:b,type:"file",accept:"application/pdf",onChange:R=>{var T;return P(((T=R.target.files)==null?void 0:T[0])||null)},className:"hidden"}),f.jsx(fe,{variant:"solid",type:"button",onClick:()=>b.current&&b.current.click(),className:"px-3 py-1 text-sm",children:k?"Remplacer":"Choisir"}),k&&f.jsx(fe,{variant:"ghost",className:"!p-2",onClick:()=>P(null),title:"Annuler",children:f.jsx(dd,{size:14})}),!k&&(i==null?void 0:i.fileUrl)&&f.jsx("a",{href:i.fileUrl,target:"_blank",rel:"noreferrer",title:"Télécharger",children:f.jsx(fe,{variant:"ghost",className:"!p-2","aria-label":"Télécharger",children:f.jsx(E0,{size:14})})})]})]}),D!==null&&f.jsxs("div",{className:"mt-2",children:[f.jsx("div",{className:"w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-1 overflow-hidden",children:f.jsx("div",{className:"bg-zinc-700 dark:bg-zinc-400 h-1 transition-all",style:{width:`${D}%`}})}),f.jsxs("p",{className:"text-xs text-zinc-500 dark:text-zinc-400 mt-1",children:[D,"%"]})]}),v&&f.jsx("p",{className:"mt-2 text-sm text-red-600 dark:text-red-400",children:v})]})]})]})]})]}),f.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center p-4 border-t dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 rounded-b-lg gap-4",children:[f.jsx("div",{className:"flex-grow text-center sm:text-left w-full sm:w-auto",children:p.form&&f.jsx("p",{className:"text-sm text-red-600 dark:text-red-400",children:p.form})}),f.jsxs("div",{className:"flex flex-col-reverse sm:flex-row items-center gap-3 w-full sm:w-auto",children:[f.jsx(fe,{onClick:r,variant:"secondary",className:"w-full sm:w-auto",children:"Annuler"}),f.jsx(fe,{type:"submit",variant:"solid",disabled:!z||g,className:"w-full sm:w-auto",children:g?"Enregistrement...":i?"Mettre à jour":"Enregistrer"})]})]})]})})},Hb=({show:t,onClose:e,convocation:n,onEdit:r,onDelete:s,onDeleteFile:i})=>{const[o,u]=j.useState(!1),l=j.useMemo(()=>{if(!n)return[];const m=[],g=[];let E=null;if(n.detailsReel){const k=n.detailsReel,P=(D,x)=>{x>0&&g.push({nom:D,du:x,recu:null,isDetail:!0})};k.coutTrajet>0&&n.trajetNom&&P(`Trajet (${n.trajetNom})`,k.coutTrajet),P("Location Voiture",k.locationVoiture),P("Carburant",k.carburant),P("Avion",k.avion),P("Train",k.train),P("Repas",k.repas),P("Transport en commun",k.transportCommun),P("Parking",k.parking),P("Péage Surcoût",k.peageSurcout)}for(const k of n.depenses){if(k.nom==="Total Frais Réels"){E=k;continue}(k.du>0||k.recu!=null&&k.recu>0)&&m.push(k)}if(E&&m.push({...E,isToggle:!0,hasDetails:g.length>0}),o&&E){const k=m.findIndex(P=>P.nom==="Total Frais Réels");k>-1?m.splice(k+1,0,...g):m.push(...g)}return m},[n,o]);if(!t||!n)return null;const h=n.depenses.reduce((m,g)=>m+g.du,0),p=n.depenses.reduce((m,g)=>m+g.recu,0);return f.jsx("div",{className:"fixed inset-0 bg-black/60 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in safe-padding-modal",children:f.jsxs("div",{className:"bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-scale-in",children:[f.jsxs("div",{className:"flex justify-between items-center p-4 border-b dark:border-zinc-700",children:[f.jsxs("div",{children:[f.jsxs("h3",{className:"text-lg font-medium text-zinc-900 dark:text-white",children:["Détail - Convocation ",n.numero]}),f.jsxs("p",{className:"text-sm text-zinc-500 dark:text-zinc-400",children:[new Date(n.date).toLocaleDateString("fr-FR")," - ",n.motifNom]})]}),f.jsx(fe,{variant:"ghost",onClick:e,className:"!p-2",children:f.jsx(dd,{size:20})})]}),f.jsxs("div",{className:"p-6 space-y-4 overflow-y-auto",children:[f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-medium text-zinc-500 dark:text-zinc-400",children:"Type de frais"}),f.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",children:n.expenseType==="reel"?"Au Réel":"Au Forfait"})]}),n.expenseType==="forfait"&&f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-medium text-zinc-500 dark:text-zinc-400",children:"Kilomètres déclarés"}),f.jsxs("p",{className:"text-zinc-900 dark:text-white font-medium",children:[n.km," km"]})]}),n.expenseType==="reel"&&f.jsxs("div",{children:[f.jsx("p",{className:"text-sm font-medium text-zinc-500 dark:text-zinc-400",children:"KM à déclarer (Frais)"}),f.jsxs("p",{className:"text-zinc-900 dark:text-white font-medium",children:[n.kmADeclarer||"0"," km"]})]})]}),f.jsx("div",{className:"border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden shadow-sm",children:f.jsxs("table",{className:"min-w-full divide-y divide-zinc-200 dark:divide-zinc-700",children:[f.jsx("thead",{className:"bg-zinc-50 dark:bg-zinc-700/50",children:f.jsxs("tr",{children:[f.jsx("th",{className:"px-4 py-2 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase",children:"Ligne de Dépense"}),f.jsx("th",{className:"px-4 py-2 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase",children:"Montant Dû"}),f.jsx("th",{className:"px-4 py-2 text-right text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase",children:"Montant Perçu"})]})}),f.jsx("tbody",{className:"divide-y divide-zinc-200 dark:divide-zinc-700",children:l.length===0?f.jsx("tr",{children:f.jsx("td",{colSpan:"3",className:"px-4 py-8 text-center text-sm text-zinc-500 dark:text-zinc-400",children:"Aucune dépense à afficher."})}):l.map((m,g)=>m.isToggle?f.jsxs("tr",{className:`border-t border-zinc-200 dark:border-zinc-600 ${m.hasDetails?"cursor-pointer hover:bg-zinc-50 dark:hover:bg-zinc-800/60":""}`,onClick:()=>m.hasDetails&&u(!o),children:[f.jsx("td",{className:"px-4 py-3 text-sm font-semibold text-zinc-900 dark:text-white",children:f.jsxs("div",{className:"flex items-center space-x-2",children:[m.hasDetails&&f.jsx(ix,{size:16,className:`transition-transform duration-200 ${o?"rotate-180":""}`}),f.jsx("span",{children:m.nom})]})}),f.jsx("td",{className:"px-4 py-3 text-sm font-semibold text-zinc-700 dark:text-zinc-200 text-right",children:kt(m.du)}),f.jsx("td",{className:"px-4 py-3 text-sm font-semibold text-green-600 dark:text-green-400 text-right",children:kt(m.recu)})]},"total-reel"):m.isDetail?f.jsxs("tr",{className:"bg-zinc-50/50 dark:bg-zinc-800/30 animate-fade-in-sm",children:[f.jsxs("td",{className:"pl-12 pr-4 py-2 text-sm text-zinc-600 dark:text-zinc-300",children:["- ",m.nom]}),f.jsx("td",{className:"px-4 py-2 text-sm text-zinc-700 dark:text-zinc-200 text-right",children:kt(m.du)}),f.jsx("td",{className:"px-4 py-2 text-sm text-green-600 dark:text-green-400 text-right",children:f.jsx("span",{className:"text-xs text-zinc-400 dark:text-zinc-500 italic",children:"(inclus)"})})]},g):f.jsxs("tr",{children:[f.jsx("td",{className:"px-4 py-3 text-sm font-medium text-zinc-900 dark:text-white",children:m.nom}),f.jsx("td",{className:"px-4 py-3 text-sm text-zinc-700 dark:text-zinc-200 text-right",children:kt(m.du)}),f.jsx("td",{className:"px-4 py-3 text-sm text-green-600 dark:text-green-400 text-right",children:kt(m.recu)})]},g))}),f.jsx("tfoot",{className:"bg-zinc-50 dark:bg-zinc-700/50 border-t-2 border-zinc-300 dark:border-zinc-600",children:f.jsxs("tr",{children:[f.jsx("td",{className:"px-4 py-3 text-sm font-bold text-zinc-900 dark:text-white text-left",children:"TOTAL"}),f.jsx("td",{className:"px-4 py-3 text-sm font-bold text-zinc-900 dark:text-white text-right",children:kt(h)}),f.jsx("td",{className:"px-4 py-3 text-sm font-bold text-green-700 dark:text-green-300 text-right",children:kt(p)})]})})]})})]}),f.jsxs("div",{className:"flex flex-col-reverse sm:flex-row justify-between items-center p-4 border-t dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800/50 rounded-b-lg gap-4",children:[f.jsxs("div",{className:"flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full sm:w-auto",children:[f.jsxs(fe,{onClick:s,variant:"danger",className:"w-full sm:w-auto",children:[f.jsx($o,{size:16,className:"mr-2"}),"Supprimer"]}),n.fileUrl&&f.jsxs(f.Fragment,{children:[f.jsx("a",{href:n.fileUrl,target:"_blank",rel:"noreferrer",className:"inline-block w-full sm:w-auto",children:f.jsxs(fe,{variant:"ghost",className:"!p-2 w-full justify-center",children:[f.jsx(E0,{size:16,className:"mr-2"}),"Télécharger"]})}),f.jsxs(fe,{variant:"ghost",className:"!p-2 text-red-600 dark:text-red-400 w-full sm:w-auto justify-center",onClick:()=>i&&i(n),children:[f.jsx($o,{size:14,className:"mr-2"}),"Suppr. fichier"]})]})]}),f.jsxs("div",{className:"flex items-center justify-center sm:justify-end space-x-3 w-full sm:w-auto",children:[f.jsx(fe,{onClick:e,variant:"secondary",className:"w-full sm:w-auto",children:"Fermer"}),f.jsx(fe,{onClick:r,variant:"solid",className:"w-full sm:w-auto",children:"Modifier"})]})]})]})})},gh="reffinances-dark-mode",qb=()=>{const[t,e]=j.useState(!1);j.useEffect(()=>{const r=window.matchMedia("(prefers-color-scheme: dark)"),s=localStorage.getItem(gh),i=s!==null?s==="true":r.matches;e(i),document.documentElement.classList.toggle("dark",i);const o=u=>{const l=u.matches;e(l),document.documentElement.classList.toggle("dark",l),localStorage.setItem(gh,l.toString())};return r.addEventListener("change",o),()=>r.removeEventListener("change",o)},[]);const n=j.useCallback(()=>{e(r=>{const s=!r;return document.documentElement.classList.toggle("dark",s),localStorage.setItem(gh,s.toString()),s})},[]);return[t,n]},nT=j.createContext(null),Wb=({children:t})=>{const[e,n]=j.useState(null),[r,s]=j.useState(!1),[i,o]=j.useState(null),[u,l]=j.useState(!1);j.useEffect(()=>SN(Us,E=>{n(E),s(!!E)}),[]);const h=j.useCallback(async(g,E)=>{l(!0),o(null);try{await IN(Us,g,E)}catch(k){throw o((k==null?void 0:k.message)||"Erreur lors de la connexion"),k}finally{l(!1)}},[]),p=j.useCallback(async()=>{l(!0),o(null);try{await RN(Us)}catch(g){throw o((g==null?void 0:g.message)||"Erreur lors de la déconnexion"),g}finally{l(!1)}},[]),m=j.useCallback(async g=>{l(!0),o(null);try{await TN(Us,g)}catch(E){throw o((E==null?void 0:E.message)||"Erreur lors de l envoi du mail"),E}finally{l(!1)}},[]);return f.jsx(nT.Provider,{value:{authUser:e,isAuthenticated:r,authError:i,authProcessing:u,signIn:h,signOut:p,sendResetEmail:m},children:t})},Kb=()=>{const t=j.useContext(nT);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t},yh=(t,e={})=>{const{transform:n,onError:r}=e,[s,i]=j.useState([]),[o,u]=j.useState(null),[l,h]=j.useState(!0);return j.useEffect(()=>{if(!t){i([]),u(null),h(!1);return}return h(!0),sA(t,m=>{const g=m.docs.map(E=>({id:E.id,...E.data()}));i(n?n(g):g),u(null),h(!1)},m=>{u(m),h(!1),r&&r(m)})},[t,n,r]),{data:s,error:o,loading:l}},oc=In(tT,"appdata","main"),Ti=ap(oc,"convocations"),Dp=ap(oc,"motifs"),Op=ap(oc,"trajets"),Wn=async()=>{await Ju(oc,{lastModification:aA()},{merge:!0})},Gb=async t=>{await Ju(In(Ti,t.id),t),await Wn()},Qb=async t=>{await nE(In(Ti,t.id),t),await Wn()},Xb=async t=>{if(t.filePath)try{await tc(Jo(ta,t.filePath))}catch(e){Ot.warn("Impossible de supprimer le fichier associé:",e)}await gp(In(Ti,t.id)),await Wn()},Yb=async t=>{t!=null&&t.filePath&&(await tc(Jo(ta,t.filePath)),await nE(In(Ti,t.id),{fileName:null,filePath:null,fileUrl:null}),await Wn())},Jb=async(t,e)=>{const n=e.filter(s=>t.includes(s.id)&&s.filePath).map(s=>s.filePath);n.length>0&&await Promise.allSettled(n.map(s=>tc(Jo(ta,s)).catch(i=>{Ot.warn("Suppression de fichier échouée:",s,i)})));const r=lA(tT);t.forEach(s=>r.delete(In(Ti,s))),await r.commit(),await Wn()},Zb=async t=>{await Ju(In(Dp,t.id),t,{merge:!0}),await Wn()},e2=async t=>{await gp(In(Dp,t)),await Wn()},t2=async t=>{await Ju(In(Op,t.id),t,{merge:!0}),await Wn()},n2=async t=>{await gp(In(Op,t)),await Wn()},rT=j.createContext(null),r2=({children:t})=>{const{data:e,error:n,loading:r}=yh(Ti),{data:s,error:i,loading:o}=yh(Dp),{data:u,error:l,loading:h}=yh(Op),p=n||i||l,m=r||o||h,g=j.useMemo(()=>({convocations:e,motifs:s,trajets:u,error:p,isLoading:m,addConvocation:Gb,updateConvocation:Qb,deleteConvocation:Xb,deleteConvocationFile:Yb,deleteSelectedConvocations:Jb,saveMotif:Zb,deleteMotif:e2,saveTrajet:t2,deleteTrajet:n2}),[e,s,u,p,m]);return f.jsx(rT.Provider,{value:g,children:t})},s2=()=>{const t=j.useContext(rT);if(!t)throw new Error("useAppData must be used within an AppDataProvider");return t};function i2(){const[t,e]=j.useState("dashboard"),[n,r]=j.useState(!1),[s,i]=j.useState(null),[o,u]=j.useState(null),[l,h]=j.useState(null),[p,m]=qb(),[g,E]=j.useState(null),[k,P]=j.useState([]),[D,x]=j.useState(!1),[v,C]=j.useState("all"),[b,z]=j.useState(""),{authUser:V,isAuthenticated:w,signIn:y,signOut:I,sendResetEmail:S}=Kb(),{convocations:A,motifs:R,trajets:T,error:X,isLoading:ke,addConvocation:Oe,updateConvocation:ue,deleteConvocation:U,deleteConvocationFile:q,deleteSelectedConvocations:W,saveMotif:J,deleteMotif:re,saveTrajet:pe,deleteTrajet:Ue}=s2(),[Ve,je]=j.useState(!1),[Q,Tt]=j.useState(null);j.useEffect(()=>{E(X?"Erreur lors de la connexion à Firestore: "+((X==null?void 0:X.message)||(X==null?void 0:X.code)||"unknown"):null)},[X]);const Ii=j.useCallback(()=>je(!0),[]),Or=j.useCallback(()=>je(!1),[]),an=j.useCallback(async Z=>{try{await Oe(Z)}catch(ie){throw Ot.error("Erreur ajout convocation:",ie),ie}},[Oe]),ki=j.useCallback(async Z=>{try{await ue(Z)}catch(ie){throw Ot.error("Erreur maj convocation:",ie),ie}},[ue]),xi=j.useCallback(async()=>{if(l)try{await U(l),h(null),i(null)}catch(Z){Ot.error("Erreur suppression convocation:",Z),Tt(Z!=null&&Z.code?`Erreur lors de la suppression: ${Z.code}`:"Erreur lors de la suppression de la convocation.")}},[U,l]),Si=j.useCallback(async Z=>{if(Z!=null&&Z.filePath)try{await q(Z)}catch(ie){throw Ot.error("Erreur suppression fichier:",ie),Tt(`Impossible de supprimer le fichier: ${Z.fileName||Z.filePath}. (${(ie==null?void 0:ie.code)||(ie==null?void 0:ie.message)})`),ie}},[q]),Ri=j.useCallback(async Z=>{try{await J(Z)}catch(ie){Ot.error("Erreur sauvegarde motif:",ie)}},[J]),wa=j.useCallback(async Z=>{try{await re(Z)}catch(ie){Ot.error("Erreur suppression motif:",ie)}},[re]),ac=j.useCallback(async Z=>{try{await pe(Z)}catch(ie){Ot.error("Erreur sauvegarde trajet:",ie)}},[pe]),lc=j.useCallback(async Z=>{try{await Ue(Z)}catch(ie){Ot.error("Erreur suppression trajet:",ie)}},[Ue]),Ea=j.useCallback(async()=>{if(k.length!==0)try{await W(k,A),P([]),x(!1)}catch(Z){Ot.error("Erreur lors de la suppression des convocations sélectionnées:",Z)}},[W,k,A]),ys=j.useCallback((Z=null)=>{u(Z),r(!0),i(null)},[]),Ta=j.useCallback(Z=>{i(Z)},[]),uc=j.useCallback(()=>x(!0),[]),Ci=j.useCallback(()=>{m()},[m]),Ai=j.useCallback(Z=>{P(ie=>ie.includes(Z)?ie.filter($t=>$t!==Z):[...ie,Z])},[]),_s=j.useMemo(()=>{const Z=v==="all"?A:A.filter($t=>new Date($t.date).getFullYear().toString()===v);return[...b?Z.filter($t=>$t.numero.toLowerCase().includes(b.toLowerCase())):Z].sort(($t,cc)=>new Date(cc.date)-new Date($t.date))},[A,v,b]),We=j.useMemo(()=>{const Z=new Set(A.map(ie=>new Date(ie.date).getFullYear().toString()));return Array.from(Z).sort((ie,$t)=>$t-ie)},[A]),Xe=j.useCallback(Z=>{P(Z?_s.map(ie=>ie.id):[])},[_s]);return ke?f.jsx("div",{className:"w-screen h-screen flex justify-center items-center bg-zinc-100 dark:bg-zinc-900",children:f.jsxs("div",{className:"text-center",children:[f.jsxs("svg",{className:"animate-spin h-8 w-8 text-blue-600 mx-auto",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[f.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),f.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),f.jsx("p",{className:"mt-3 text-zinc-600 dark:text-zinc-300",children:"Chargement des données..."})]})}):f.jsxs("div",{className:`app-safe-layout bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans ${p?"dark":""}`,children:[f.jsxs("main",{className:"max-w-7xl mx-auto p-4",children:[f.jsx(mx,{onNewConvocation:ys,onSetPage:e,page:t,darkMode:p,onToggleDarkMode:Ci,availableYears:We,selectedYear:v,onSelectYear:C,isAuthenticated:w,userEmail:V==null?void 0:V.email,onAuthButtonClick:Ii}),g&&f.jsx("div",{className:"max-w-7xl mx-auto mt-4 p-4",children:f.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-900/60 border-l-4 border-yellow-400 text-yellow-800 dark:text-yellow-200 p-3 rounded",children:f.jsxs("div",{className:"flex items-start justify-between",children:[f.jsxs("div",{children:[f.jsx("p",{className:"font-semibold",children:"Problème de chargement"}),f.jsx("p",{className:"text-sm mt-1",children:g})]}),f.jsx("div",{children:f.jsx("button",{onClick:()=>E(null),className:"ml-4 text-yellow-900 dark:text-yellow-200/90 hover:underline",children:"Ignorer"})})]})})}),t==="dashboard"&&f.jsx(Ix,{convocations:_s,onSelectConvocation:Ta,selectedIds:k,onSelectId:Ai,onSelectAll:Xe,onDeleteSelected:uc,searchTerm:b,onSearchTermChange:z,selectedYear:v}),Q&&f.jsx("div",{className:"fixed bottom-4 right-4 z-50 max-w-md w-full",children:f.jsx("div",{className:"bg-red-600 text-white p-3 rounded-lg shadow-md",children:f.jsxs("div",{className:"flex justify-between items-start",children:[f.jsxs("div",{children:[f.jsx("p",{className:"font-semibold",children:"Erreur de suppression de fichier"}),f.jsx("p",{className:"text-sm mt-1",children:Q})]}),f.jsx("div",{children:f.jsx("button",{onClick:()=>Tt(null),className:"ml-4 text-white/90 hover:underline",children:"Fermer"})})]})})}),t==="settings"&&f.jsx(kx,{motifs:R,onSaveMotif:Ri,onDeleteMotif:wa,trajets:T,onSaveTrajet:ac,onDeleteTrajet:lc})]}),n&&f.jsx($b,{motifs:R,trajets:T,onAddConvocation:an,onUpdateConvocation:ki,onClose:()=>r(!1),onGoToSettings:()=>{r(!1),e("settings")},convocationToEdit:o}),s&&f.jsx(Hb,{show:!!s,onClose:()=>i(null),convocation:s,onEdit:()=>ys(s),onDelete:()=>h(s),onDeleteFile:Si}),f.jsx(eu,{show:!!l,onClose:()=>h(null),onConfirm:xi,title:"Supprimer la convocation",message:`Êtes-vous sûr de vouloir supprimer la convocation n°${l==null?void 0:l.numero} ? Cette action est irréversible.`}),f.jsx(eu,{show:D,onClose:()=>x(!1),onConfirm:Ea,title:"Supprimer les convocations",message:`Êtes-vous sûr de vouloir supprimer les ${k.length} convocations sélectionnées ? Cette action est irréversible.`}),f.jsx(xx,{show:Ve,onClose:Or,isAuthenticated:w,userEmail:V==null?void 0:V.email,onSignIn:y,onSignOut:I,onSendReset:S})]})}class o2 extends g_.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){Ot.error("[ErrorBoundary] Uncaught error:",e,n)}render(){return this.state.hasError?f.jsx("div",{className:"min-h-screen flex items-center justify-center p-4 bg-zinc-100 dark:bg-zinc-900",children:f.jsxs("div",{className:"max-w-xl w-full bg-white dark:bg-zinc-800 shadow-lg rounded-2xl p-6 text-zinc-900 dark:text-zinc-100",children:[f.jsx("h1",{className:"text-2xl font-semibold mb-4",children:"Oups... une erreur est survenue."}),f.jsx("p",{className:"text-sm text-zinc-600 dark:text-zinc-400 mb-4",children:"Le chargement de l’application a échoué. Vous pouvez recharger la page ou revenir plus tard."}),f.jsx("div",{className:"mb-4 rounded-md bg-zinc-100 dark:bg-zinc-900 p-3 overflow-auto text-xs text-zinc-700 dark:text-zinc-200",children:String(this.state.error)}),f.jsx("button",{type:"button",onClick:()=>window.location.reload(),className:"inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700",children:"Recharger"})]})}):this.props.children}}_h.createRoot(document.getElementById("root")).render(f.jsx(g_.StrictMode,{children:f.jsx(o2,{children:f.jsx(Wb,{children:f.jsx(r2,{children:f.jsx(i2,{})})})})}));
