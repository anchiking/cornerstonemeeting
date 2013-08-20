/*
    Cornerstone Framework v0.9.1

    COPYRIGHT(C) 2012 BY SKTELECOM CO., LTD. ALL RIGHTS RESERVED.
    Released under the Apache License, Version 2.0
*/
(function(e){"use strict";function r(e){var n=["Moz","Webkit","O","ms"],r=e.charAt(0).toUpperCase()+e.substr(1);if(e in t.style)return e;for(var i=0;i<n.length;++i){var s=n[i]+r;if(s in t.style)return s}}function i(){return t.style[n.transform]="",t.style[n.transform]="rotateY(90deg)",t.style[n.transform]!==""}function a(e){return typeof e=="string"&&this.parse(e),this}function f(e,t,n){t===!0?e.queue(n):t?e.queue(t,n):n()}function l(t){var n=[];return e.each(t,function(t){t=e.camelCase(t),t=e.transit.propertyMap[t]||t,t=p(t),e.inArray(t,n)===-1&&n.push(t)}),n}function c(t,n,r,i){var s=l(t);e.cssEase[r]&&(r=e.cssEase[r]);var o=""+v(n)+" "+r;parseInt(i,10)>0&&(o+=" "+v(i));var u=[];return e.each(s,function(e,t){u.push(t+" "+o)}),u.join(", ")}function h(t,r){r||(e.cssNumber[t]=!0),e.transit.propertyMap[t]=n.transform,e.cssHooks[t]={get:function(n){var r=e(n).css("transform")||new a;return r.get(t)},set:function(n,r){var i=e(n).css("transform")||new a;i==="none"&&(i=new a),i.setFromString(t,r),e(n).css({transform:i})}}}function p(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function d(e,t){return typeof e=="string"&&!e.match(/^[\-0-9\.]+$/)?e:""+e+t}function v(t){var n=t;return e.fx.speeds[n]&&(n=e.fx.speeds[n]),d(n,"ms")}e.transit={version:"0.1.3",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var t=document.createElement("div"),n={},s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=r("transition"),n.transitionDelay=r("transitionDelay"),n.transform=r("transform"),n.transformOrigin=r("transformOrigin"),n.transform3d=i(),e.extend(e.support,n),e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}();var o={MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},u=n.transitionEnd=o[n.transition]||null;t=null,e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)"},e.cssHooks.transform={get:function(t){return e(t).data("transform")},set:function(t,r){var i=r;i instanceof a||(i=new a(i)),n.transform==="WebkitTransform"&&!s?t.style[n.transform]=i.toString(!0):t.style[n.transform]=i.toString(),e(t).data("transform",i)}},e.cssHooks.transformOrigin={get:function(e){return e.style[n.transformOrigin]},set:function(e,t){e.style[n.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[n.transition]},set:function(e,t){e.style[n.transition]=t}},h("scale"),h("translate"),h("rotate"),h("rotateX"),h("rotateY"),h("rotate3d"),h("perspective"),h("skewX"),h("skewY"),h("x",!0),h("y",!0),a.prototype={setFromString:function(e,t){var n=typeof t=="string"?t.split(","):t.constructor===Array?t:[t];n.unshift(e),a.prototype.set.apply(this,n)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=d(e,"deg")},rotateX:function(e){this.rotateX=d(e,"deg")},rotateY:function(e){this.rotateY=d(e,"deg")},scale:function(e,t){t===undefined&&(t=e),this.scale=e+","+t},skewX:function(e){this.skewX=d(e,"deg")},skewY:function(e){this.skewY=d(e,"deg")},perspective:function(e){this.perspective=d(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){this._translateX===undefined&&(this._translateX=0),this._translateY===undefined&&(this._translateY=0),e!==null&&(this._translateX=d(e,"px")),t!==null&&(this._translateY=d(t,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");return e[0]&&(e[0]=parseFloat(e[0])),e[1]&&(e[1]=parseFloat(e[1])),e[0]===e[1]?e[0]:e},rotate3d:function(){var e=(this.rotate3d||"0,0,0,0deg").split(",");for(var t=0;t<=3;++t)e[t]&&(e[t]=parseFloat(e[t]));return e[3]&&(e[3]=d(e[3],"deg")),e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,r){t.setFromString(n,r)})},toString:function(e){var t=[];for(var r in this)if(this.hasOwnProperty(r)){if(!n.transform3d&&(r==="rotateX"||r==="rotateY"||r==="perspective"||r==="transformOrigin"))continue;r[0]!=="_"&&(e&&r==="scale"?t.push(r+"3d("+this[r]+",1)"):e&&r==="translate"?t.push(r+"3d("+this[r]+",0)"):t.push(r+"("+this[r]+")"))}return t.join(" ")}},e.fn.transit=function(t,r,i,s){var o=this,a=0,l=!0;typeof r=="function"&&(s=r,r=undefined),typeof i=="function"&&(s=i,i=undefined),typeof t.easing!="undefined"&&(i=t.easing,delete t.easing),typeof t.duration!="undefined"&&(r=t.duration,delete t.duration),typeof t.complete!="undefined"&&(s=t.complete,delete t.complete),typeof t.queue!="undefined"&&(l=t.queue,delete t.queue),typeof t.delay!="undefined"&&(a=t.delay,delete t.delay),typeof r=="undefined"&&(r=e.fx.speeds._default),typeof i=="undefined"&&(i=e.cssEase._default),r=v(r);var h=c(t,r,i,a),p=e.transit.enabled&&n.transition,d=p?parseInt(r,10)+parseInt(a,10):0;if(d===0){var m=function(e){o.css(t),s&&s.apply(o),e&&e()};return f(o,l,m),o}var g={},y=function(r){var i=!1,a=function(){i&&o.unbind(u,a),d>0&&o.each(function(){this.style[n.transition]=g[this]||null}),typeof s=="function"&&s.apply(o),typeof r=="function"&&r()};d>0&&u&&e.transit.useTransitionEnd?(i=!0,o.bind(u,a)):window.setTimeout(a,d),o.each(function(){d>0&&(this.style[n.transition]=h),e(this).css(t)})},b=function(e){var t=0;n.transition==="MozTransition"&&t<25&&(t=25),window.setTimeout(function(){y(e)},t)};return f(o,l,b),this},e.transit.getTransitionValue=c})(jQuery),function(e,t){var n=t.Transition={},r=function(e){this.options=e},i=n.effect=function(e){this.options=e};n.launcher=function(e){return(new r(e)).init()},r.prototype={defaults:{transitionType:"none",fallbackType:"fade",autoDisplay:!0,nested:!1,animationFade:!0,inTarget:{el:undefined,from:undefined,to:undefined,duration:undefined,timing:"ease",done:function(){}},outTarget:{el:undefined,from:undefined,to:undefined,duration:undefined,timing:"ease",done:function(){}},isReverse:!1,done:function(){}},init:function(){return this.options.inTarget=e.extend({},this.defaults.inTarget,this.options.inTarget),this.options.outTarget=e.extend({},this.defaults.outTarget,this.options.outTarget),this.options=e.extend({},this.defaults,this.options),this.run(),this},run:function(){var t=this,n=new i(this.options);this._before();try{e.support.transition||(e.fn.transition=e.fn.animate,this.options.transitionType=this.options.fallbackType,this.options.inTarget.timing="linear",this.options.outTarget.timing="linear"),n.init(t),n[t.options.transitionType](t.options)}catch(r){n.none(this.options)}},_before:function(){var t=e("body");t.css({overflowX:"hidden"}),e(this.options.inTarget.el).show(),e(this.options.outTarget.el).show(),this.options.isReverse&&t.attr("data-transition")!==undefined&&(this.options.transitionType=t.attr("data-transition"))},_done:function(){e("body").css({overflow:"auto"}).attr("data-transition",this.options.transitionType);var t=e(this.options.outTarget.el).removeAttr("style"),n=e(this.options.inTarget.el).removeAttr("style");this.options.autoDisplay&&(t.hide(),n.show()),this.options.inTarget.done(),this.options.done()}},i.prototype={inTargetCss:null,outTargetCss:null,init:function(e){this.launcher=e},extend:function(t,n){return n.inTarget=e.extend({},t.inTarget,n.inTarget),n.outTarget=e.extend({},t.outTarget,n.outTarget),n},none:function(t){var n=this;e(t.outTarget.el).hide(function(){t.outTarget.done(),e(t.inTarget.el).show(function(){n.launcher._done()})})},flip:function(n){var r=this,i={inTarget:{from:"90deg",to:0,duration:350},outTarget:{from:0,to:"-90deg",duration:150}};n.isReverse&&(i={inTarget:{from:"-90deg",to:0,duration:350},outTarget:{from:0,to:"90deg",duration:150}}),n=this.extend(i,n),e(n.outTarget.el).height(),this.outTargetCss={position:"absolute",width:e(n.outTarget.el).width(),perspective:e(n.outTarget.el).width()*2,rotate3d:"0, 1, 0, "+n.outTarget.from,height:e(t).height()>e(n.outTarget.el).height()?e(n.outTarget.el).height():e(t).height(),overflow:"hidden",opacity:1},this.inTargetCss={position:"absolute",width:e(n.inTarget.el).width(),perspective:e(n.inTarget.el).width()*2,rotate3d:"0, 1, 0, "+n.inTarget.from,height:e(t).height()>e(n.inTarget.el).height()?e(n.inTarget.el).height():e(t).height(),overflow:"hidden",opacity:n.animationFade?0:1},e(n.inTarget.el).css(this.inTargetCss),e(n.outTarget.el).css(this.outTargetCss).transit({rotate3d:"0, 1, 0, "+n.outTarget.to,opacity:n.animationFade?0:1},n.outTarget.duration,n.outTarget.timing,function(){n.outTarget.done(),e(n.inTarget.el).transit({rotate3d:"0, 1, 0, "+n.inTarget.to,opacity:1},n.inTarget.duration,n.inTarget.timing,function(){r.launcher._done()})})},spin:function(n){var r=this,i={inTarget:{from:"90deg",to:0,duration:550},outTarget:{from:0,to:"-90deg",duration:550}};n.isReverse&&(i={inTarget:{from:"-90deg",to:0,duration:550},outTarget:{from:0,to:"90deg",duration:550}}),n=this.extend(i,n),this.outTargetCss={position:"absolute",width:e(n.outTarget.el).width(),perspective:e(n.outTarget.el).width(),rotate3d:"0, 0, 0, "+n.outTarget.from,height:e(t).height()>e(n.inTarget.el).height()?e(n.inTarget.el).height():e(t).height(),overflow:"hidden",scale:1,opacity:1},this.inTargetCss={position:"absolute",width:e(n.inTarget.el).width(),perspective:e(n.inTarget.el).width(),rotate3d:"0, 0, 0, "+n.inTarget.from,height:e(t).height()>e(n.inTarget.el).height()?e(n.inTarget.el).height():e(t).height(),overflow:"hidden",scale:0,opacity:n.animationFade?0:1},e(n.inTarget.el).css(this.inTargetCss),e(n.outTarget.el).css(this.outTargetCss).transit({rotate3d:"0, 0, 0, "+n.outTarget.to,scale:0,opacity:n.animationFade?0:1},n.outTarget.duration,n.outTarget.timing,function(){e(this).css({scale:1}),n.outTarget.done(),e(n.inTarget.el).transit({rotate3d:"0, 0, 0, "+n.inTarget.to,scale:1,opacity:1},n.inTarget.duration,n.inTarget.timing,function(){r.launcher._done()})})},slide:function(n){var r=this,i={inTarget:{from:"150%",to:"0",duration:550},outTarget:{from:"0",to:"-150%",duration:550}};n.isReverse&&(i={inTarget:{from:"-150%",to:"0",duration:550},outTarget:{from:"0",to:"150%",duration:550}}),t.scrollTo(0,0),n=this.extend(i,n),this.outTargetCss={position:"absolute",width:e(t).width()>e(n.outTarget.el).width()?e(n.outTarget.el).width():e(t).width(),height:e(t).height()>e(n.outTarget.el).height()?e(n.outTarget.el).height():e(t).height(),transform:"translate("+n.outTarget.from+",0)",opacity:1},this.inTargetCss={position:"absolute",width:e(t).width()>e(n.inTarget.el).width()?e(n.inTarget.el).width():e(t).width(),height:e(t).height()>e(n.inTarget.el).height()?e(n.inTarget.el).height():e(t).height(),transform:"translate("+n.inTarget.from+",0)",opacity:1},n.inTarget.top=e(n.inTarget.el).css("top"),e(n.outTarget.el).css(this.outTargetCss).transit({x:n.outTarget.to,opacity:n.animationFade?0:1},n.outTarget.duration,n.outTarget.timing,function(){n.outTarget.done()}),e(n.inTarget.el).css(this.inTargetCss).transit({x:n.inTarget.to},n.inTarget.duration,n.inTarget.timing,function(){e(n.outTarget.el).css({transform:"translate(0,0)"}),r.launcher._done()})},slideup:function(n){var r=this,i={inTarget:{from:"100%",to:"0",duration:550},outTarget:{from:"0",to:"-100%",duration:550}};n.isReverse&&(i={inTarget:{from:"-100%",to:"0",duration:550},outTarget:{from:"0",to:"100%",duration:550}}),n=this.extend(i,n),this.outTargetCss={position:"absolute",width:e(n.outTarget.el).width(),transform:"translate(0, "+n.outTarget.from+")",height:e(t).height()>e(n.outTarget.el).height()?e(n.outTarget.el).height():e(t).height(),opacity:1},this.inTargetCss={position:"absolute",width:e(n.inTarget.el).width(),transform:"translate(0, "+n.inTarget.from+")",height:e(t).height()>e(n.outTarget.el).height()?e(n.outTarget.el).height():e(t).height(),opacity:1},e(n.outTarget.el).css(this.outTargetCss).transit({y:n.outTarget.to,opacity:n.animationFade?0:1},n.outTarget.duration,n.outTarget.timing,function(){e(this).css({transform:"translate(0,0)"}),n.outTarget.done()}),e(n.inTarget.el).css(this.inTargetCss).transit({y:n.inTarget.to},n.inTarget.duration,n.inTarget.timing,function(){r.launcher._done()})},slidedown:function(t){var n=this,r={inTarget:{from:"-100%",to:"0",duration:550},outTarget:{from:"0",to:"100%",duration:550}};t.isReverse&&(r={inTarget:{from:"100%",to:"0",duration:550},outTarget:{from:"0",to:"-100%",duration:550}}),t=this.extend(r,t),this.outTargetCss={position:"absolute",width:e(t.outTarget.el).width(),transform:"translate(0, "+t.outTarget.from+")",opacity:1},this.inTargetCss={position:"absolute",width:e(t.inTarget.el).width(),transform:"translate(0, "+t.inTarget.from+")",opacity:1},e(t.outTarget.el).css(this.outTargetCss).transit({y:t.outTarget.to,opacity:t.animationFade?0:1},t.outTarget.duration,t.outTarget.timing,function(){e(this).css({transform:"translate(0,0)"}),t.outTarget.done()}),e(t.inTarget.el).css(this.inTargetCss).transit({y:t.inTarget.to},t.inTarget.duration,t.inTarget.timing,function(){n.launcher._done()})},fade:function(t){var n=this,r={inTarget:{duration:250},outTarget:{duration:250}};t=this.extend(r,t),this.outTargetCss={position:"absolute",width:e(t.outTarget.el).width(),opacity:1},this.inTargetCss={position:"absolute",width:e(t.inTarget.el).width(),opacity:t.animationFade?0:1},e(t.inTarget.el).css(this.inTargetCss),e(t.outTarget.el).css(this.outTargetCss).transit({opacity:t.animationFade?0:1},t.outTarget.duration,t.outTarget.timing,function(){t.outTarget.done(),e(t.inTarget.el).transit({opacity:1},t.inTarget.duration,t.inTarget.timing,function(){n.launcher._done()})})},pop:function(t){var n=this,r={inTarget:{duration:350},outTarget:{from:0,duration:350}};t=this.extend(r,t),this.outTargetCss={position:"absolute",width:e(t.outTarget.el).width(),scale:1,opacity:1,perspective:e(t.outTarget.el).width(),rotate3d:"0, 0, 0, 0",overflow:"hidden"},this.inTargetCss={position:"absolute",width:e(t.inTarget.el).width(),scale:.5,opacity:t.animationFade?0:1,perspective:e(t.outTarget.el).width(),rotate3d:"0, 0, 0, 0",overflow:"hidden"},e(t.inTarget.el).css(this.inTargetCss),e(t.outTarget.el).css(this.outTargetCss).transit({scale:.5,opacity:t.animationFade?0:1},t.outTarget.duration,t.outTarget.timing,function(){e(this).css({scale:1}),t.outTarget.done(),e(t.inTarget.el).transit({scale:1,opacity:1},t.inTarget.duration,t.inTarget.timing,function(){n.launcher._done()})})},turn:function(n){var r=this,i={inTarget:{from:"90deg",to:0,duration:350},outTarget:{from:0,to:"-90deg",duration:150}};n.isReverse&&(i={inTarget:{from:"-90deg",to:0,duration:350},outTarget:{from:0,to:"90deg",duration:150}}),n=this.extend(i,n),this.outTargetCss={position:"absolute",width:e(n.outTarget.el).width(),perspective:e(n.outTarget.el).width(),rotate3d:"0, 1, 0, "+n.outTarget.from,transformOrigin:"0 0",opacity:1,height:e(t).height()>e(n.outTarget.el).height()?e(n.outTarget.el).height():e(t).height(),overflow:"hidden"},this.inTargetCss={position:"absolute",width:e(n.inTarget.el).width(),perspective:e(n.inTarget.el).width(),rotate3d:"0, 1, 0, "+n.inTarget.from,transformOrigin:"0 0",opacity:n.animationFade?0:1,height:e(t).height()>e(n.outTarget.el).height()?e(n.outTarget.el).height():e(t).height(),overflow:"hidden"},e(n.inTarget.el).css(this.inTargetCss),e(n.outTarget.el).css(this.outTargetCss).transit({rotate3d:"0, 1, 0, "+n.outTarget.to,opacity:n.animationFade?0:1},n.outTarget.duration,n.outTarget.timing,function(){n.outTarget.done(),e(n.inTarget.el).transit({rotate3d:"0, 1, 0, "+n.inTarget.to,opacity:1},n.inTarget.duration,n.inTarget.timing,function(){r.launcher._done()})})}}}(jQuery,window)