(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"03cd":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(r){if(n[r])return n[r].exports;var l=n[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=3)}([function(e,t,n){"use strict";function r(){var e=document.documentElement;return"requestFullscreen"in e||"mozRequestFullScreen"in e&&document.mozFullScreenEnabled||"msRequestFullscreen"in e&&document.msFullscreenEnabled||"webkitRequestFullScreen"in e}function l(){return!!(document.fullscreen||document.mozFullScreen||document.fullscreenElement||document.msFullscreenElement||document.webkitIsFullScreen)}function s(e){e.requestFullscreen?e.requestFullscreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():console.log("Fullscreen API is not supported.")}function c(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():console.log("Fullscreen API is not supported.")}function i(e){document.addEventListener("fullscreenchange",e),document.addEventListener("mozfullscreenchange",e),document.addEventListener("MSFullscreenChange",e),document.addEventListener("webkitfullscreenchange",e)}function a(e){document.removeEventListener("fullscreenchange",e),document.removeEventListener("mozfullscreenchange",e),document.removeEventListener("MSFullscreenChange",e),document.removeEventListener("webkitfullscreenchange",e)}function o(){var e={},t=!1,n=0,r=arguments.length;for("[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],n++);n<r;n++){var l=arguments[n];!function(n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t&&"[object Object]"===Object.prototype.toString.call(n[r])?e[r]=o(!0,e[r],n[r]):e[r]=n[r])}(l)}return e}t.b=r,t.c=l,t.g=s,t.d=c,t.f=i,t.e=a,t.a=o},function(e,t,n){"use strict";function r(){return n.i(i.c)()}function l(e,t,n){o&&(void 0===n?r()?c():s(e,t):n?s(e,t):c())}function s(){function e(){var t=r();t||(n.i(i.e)(e),s.classList.remove(l.fullscreenClass),l.wrap&&(c.parentNode.insertBefore(s,c),c.parentNode.removeChild(c))),l.callback&&l.callback(t)}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body,l=arguments[1];if(o&&!r()){l=n.i(i.a)(!0,{},a,l);var s=t,c=void 0;l.wrap&&(c=document.createElement("div"),c.style["overflow-y"]="auto",c.style.background=l.background,c.style.width="100%",c.style.height="100%",s.parentNode.insertBefore(c,s),c.appendChild(s),c.addEventListener("click",function(e){e.target===this&&n.i(i.d)()})),s.classList.add(l.fullscreenClass),n.i(i.f)(e),n.i(i.g)(l.wrap?c:s)}}function c(){o&&r()&&n.i(i.d)()}var i=n(0),a={wrap:!0,background:"#333",callback:function(){},fullscreenClass:"fullscreen"},o=n.i(i.b)();t.a={getState:r,toggle:l,enter:s,exit:c}},function(e,t,n){var r=n(5)(n(4),n(6),null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),l=n.n(r),s=n(1),c=n(0);t.default={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.name||"fullscreen";e.component(r,n.i(c.a)(l.a,{name:r})),e.prototype["$"+r]=s.a}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);t.default={props:{background:{type:String,default:"#333"},fullscreenClass:{type:String,default:"fullscreen"},fullscreen:{type:Boolean,default:!1}},data:function(){return{supportFullScreen:!1,isFullscreen:!1}},computed:{wrapperStyle:function(){return{background:this.background,"overflow-y":"auto",width:"100%",height:"100%"}}},methods:{toggle:function(e){void 0===e?n.i(r.c)()?this.exit():this.enter():e?this.enter():this.exit()},enter:function(){this.supportFullScreen&&(n.i(r.f)(this.fullScreenCallback),n.i(r.g)(this.$el))},exit:function(){this.supportFullScreen&&this.getState()&&n.i(r.d)()},getState:function(){return n.i(r.c)()},shadeClick:function(e){e.target===this.$el&&this.exit()},fullScreenCallback:function(){this.isFullscreen=n.i(r.c)(),this.isFullscreen||n.i(r.e)(this.fullScreenCallback),this.$emit("change",this.isFullscreen),this.$emit("update:fullscreen",this.isFullscreen)}},watch:{fullscreen:function(e){e!==n.i(r.c)()&&(e?this.enter():this.exit())}},created:function(){this.supportFullScreen=n.i(r.b)()}}},function(e,t){e.exports=function(e,t,n,r){var l,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(l=e,s=e.default);var i="function"==typeof s?s.options:s;if(t&&(i.render=t.render,i.staticRenderFns=t.staticRenderFns),n&&(i._scopeId=n),r){var a=Object.create(i.computed||null);Object.keys(r).forEach(function(e){var t=r[e];a[e]=function(){return t}}),i.computed=a}return{esModule:l,exports:s,options:i}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.isFullscreen?[e.fullscreenClass]:[],style:e.isFullscreen?[e.wrapperStyle]:[],on:{click:function(t){e.shadeClick(t)}}},[e._t("default")],2)},staticRenderFns:[]}}])})},"405a":function(e,t,n){e.exports=n.p+"img/2.d0958294.jpg"},7277:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-layout",{staticClass:"pa-5",attrs:{wrap:!0}},[r("v-flex",{attrs:{xs12:""}},[r("h1",[e._v(e._s(e.title)+" .")])]),r("v-flex",{attrs:{xs12:"",md10:""}},[r("v-layout",{staticClass:"pl-5 pr-5",attrs:{wrap:!0}},[r("v-flex",{staticClass:"pt-5",attrs:{xs12:"",md6:""}},[r("v-card",{attrs:{loading:!1,elevation:1}},[r("v-img",{staticClass:"white--text",attrs:{height:"120px",src:n("405a")}},[r("v-card-title",{staticClass:"align-end fill-height"},[e._v("Agrifrut II (Nogales y Parrones)")])],1),r("v-card-text",[e._v("Description")]),r("v-card-actions",[r("v-btn",{attrs:{outlined:"",to:"/farm/Agrifrut-II-(Nogales-y-Parrones)"}},[e._v("Click")])],1)],1)],1),r("v-flex",{staticClass:"pt-5 pl-xs-0 pl-md-5",attrs:{xs12:"",md6:""}},[r("v-card",{attrs:{elevation:1,loading:!1}},[r("v-img",{staticClass:"white--text",attrs:{height:"120px",src:n("405a")}},[r("v-card-title",{staticClass:"align-end fill-height"},[e._v("Agrifrut")])],1),r("v-card-text",[e._v("Description")]),r("v-card-actions",[r("v-btn",{attrs:{outlined:"",to:"/farm/Agrifrut"}},[e._v("Ver")])],1)],1)],1),r("v-flex",{staticClass:"pt-5 pl-xs-0 pl-md-5",attrs:{xs12:"",md6:""}},[r("v-card",{attrs:{elevation:1,loading:!1}},[r("v-img",{staticClass:"white--text",attrs:{height:"120px",src:n("405a")}},[r("v-card-title",{staticClass:"align-end fill-height"},[e._v("Santa Juana de Chincolco")])],1),r("v-card-text",[e._v("Description")]),r("v-card-actions",[r("v-btn",{attrs:{outlined:"",to:"/farm/Santa-Juana-de-Chincolco"}},[e._v("Ver")])],1)],1)],1),r("v-flex",{staticClass:"pt-5 pl-xs-5 pl-md-5",attrs:{xs12:"",md6:""}},[r("v-card",{attrs:{elevation:1}},[r("v-img",{staticClass:"white--text",attrs:{height:"120px",src:n("405a")}},[r("v-card-title",{staticClass:"align-end fill-height"},[e._v("Agrifrut Pozos")])],1),r("v-card-text",[e._v("I'm card text")]),r("v-card-actions",[r("v-btn",{attrs:{outlined:"",to:"/farm/Agrifrut Pozos"}},[e._v("Click")])],1)],1)],1)],1)],1),r("v-flex",{staticClass:"pt-5 text-center",attrs:{xs12:"",md2:"",color:"success",height:"100"}},[r("v-btn",{staticClass:"pl-5 pr-5",attrs:{color:"primary"}},[e._v("Irrimax Live")])],1)],1)],1)},l=[],s=(n("03cd"),{name:"Footer",props:{title:"Dashboard"},data(){return{}}}),c=s,i=n("2877"),a=n("6544"),o=n.n(a),u=n("8336"),d=n("b0af"),f=n("99d9"),p=n("0e8f"),v=n("adda"),m=n("a722"),h=Object(i["a"])(c,r,l,!1,null,null,null);t["default"]=h.exports;o()(h,{VBtn:u["a"],VCard:d["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VFlex:p["a"],VImg:v["a"],VLayout:m["a"]})}}]);
//# sourceMappingURL=dashboard.3a078dba.js.map