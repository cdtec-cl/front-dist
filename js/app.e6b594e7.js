(function(e){function t(t){for(var r,n,s=t[0],l=t[1],c=t[2],u=0,p=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);v&&v(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},o={app:0},i=[];function s(e){return l.p+"js/"+({dashboard:"dashboard",farm:"farm",gateway:"gateway",pumpsystem:"pumpsystem",zone:"zone"}[e]||e)+"."+{dashboard:"3a078dba",farm:"bfcae885",gateway:"4e6f8a68",pumpsystem:"3d797029",zone:"482e85f1"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={farm:1,gateway:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise(function(t,a){for(var r="css/"+({dashboard:"dashboard",farm:"farm",gateway:"gateway",pumpsystem:"pumpsystem",zone:"zone"}[e]||e)+"."+{dashboard:"31d6cfe0",farm:"325a58e0",gateway:"325a58e0",pumpsystem:"31d6cfe0",zone:"31d6cfe0"}[e]+".css",o=l.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=t,v.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],v.parentNode.removeChild(v),a(i)},v.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(v)}).then(function(){n[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,a){r=o[e]=[t,a]});t.push(r[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var p=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(v);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",p.name="ChunkLoadError",p.type=r,p.request=n,a[1](p)}o[e]=void 0}};var v=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/frontend/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var v=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"039a":function(e,t,a){"use strict";var r=a("fd06"),n=a.n(r);n.a},"138d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-layout",{staticClass:"pa-5",attrs:{wrap:!0}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[e._v(e._s(e.title)+" .")])]),a("v-flex",{staticStyle:{height:"100vh"},attrs:{xs12:""}},[a("iframe",{staticStyle:{width:"150%",height:"100%","margin-left":"-30vw"},attrs:{src:"https://cdtec.irrimaxlive.com/?cmd=signin&username=cdtec&password=l01yliEl7H#"}})])],1)],1)},n=[],o={name:"Irrimax",props:{title:"Irrimax"},data(){return{}}},i=o,s=a("2877"),l=a("6544"),c=a.n(l),u=a("0e8f"),p=a("a722"),v=Object(s["a"])(i,r,n,!1,null,null,null);t["default"]=v.exports;c()(v,{VFlex:u["a"],VLayout:p["a"]})},"1ef3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-layout",{staticClass:"pa-5",attrs:{wrap:!0}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[e._v(e._s(e.title)+" .")])]),a("v-flex",{staticStyle:{height:"100vh"},attrs:{xs12:""}},[a("iframe",{staticStyle:{width:"150%",height:"100%","margin-left":"-30vw"},attrs:{src:"https://cdtec.irrimaxlive.com/?cmd=signin&username=cdtec&password=l01yliEl7H#"}})])],1)],1)},n=[],o={name:"Irrichincolco",props:{title:"Irrimax"},data(){return{}}},i=o,s=a("2877"),l=a("6544"),c=a.n(l),u=a("0e8f"),p=a("a722"),v=Object(s["a"])(i,r,n,!1,null,null,null);t["default"]=v.exports;c()(v,{VFlex:u["a"],VLayout:p["a"]})},"555a":function(e,t,a){e.exports=a.p+"img/icon.84ed0e72.png"},"56d7":function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),n=a("2f62"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",{directives:[{name:"show",rawName:"v-show",value:e.login,expression:"login"}]},[a("Navbar"),a("v-layout",[a("v-flex",{staticClass:"d-none d-sm-none d-md-flex"},[a("Mainmenu")],1),a("v-flex",[a("router-view",{staticStyle:{"min-height":"81vh"}})],1)],1),a("Plugin"),a("Footer")],1),a("v-content",{directives:[{name:"show",rawName:"v-show",value:1!=e.login,expression:"login != true"}]},[a("Login")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-layout",{attrs:{wrap:""}},[r("v-app-bar",{attrs:{fixed:"",color:"primary",dark:""}},[r("v-app-bar-nav-icon",{staticClass:"d-block d-sm-block d-md-none",on:{click:function(t){t.stopPropagation(),e.menu=!e.menu}}}),r("v-img",{attrs:{src:a("555a"),"max-height":"40","max-width":"40"}}),r("v-toolbar-title"),r("v-spacer"),r("v-badge",{staticClass:"align-self-center",attrs:{bottom:!0,left:!0,overlap:!0},scopedSlots:e._u([{key:"badge",fn:function(){return[e._v("0")]},proxy:!0}])},[r("v-icon",[e._v("mail")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("info")])],1),r("v-btn",{attrs:{icon:""}},[r("v-icon",{on:{click:function(t){t.stopPropagation(),e.profile=!e.profile}}},[e._v("account_circle")])],1)],1)],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:"","Disable-Resize-Watcher":"true",float:"true"},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[r("Mainmenu")],1),r("v-navigation-drawer",{attrs:{absolute:"",temporary:"",right:"","Disable-Resize-Watcher":"true",float:"true"},model:{value:e.profile,callback:function(t){e.profile=t},expression:"profile"}},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{staticClass:"text-center pt-5",attrs:{xs12:""}},[r("v-avatar",{attrs:{size:150}},[r("img",{attrs:{src:"https://picsum.photos/id/11/500/300",alt:"avatar"}})])],1),r("v-flex",{staticClass:"text-center pt-5",attrs:{xs12:""}},[r("span",[e._v("Pablo Ossandón")]),r("v-divider")],1),r("v-flex",[r("v-list",{attrs:{flat:""}},[r("v-list-item-group",{attrs:{color:"primary"}},[r("v-list-item",[r("v-list-item-icon",[r("v-icon",[e._v("power-settings-new")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Configuración")])],1)],1)],1),r("v-divider"),r("v-list-item-group",{attrs:{color:"primary"}},[r("v-list-item",{attrs:{to:"/login"}},[r("v-list-item-icon",[r("v-icon",[e._v("power-settings-new")])],1),r("v-list-item-content",[r("v-list-item-title",[e._v("Cerrar sesión")])],1)],1)],1)],1)],1)],1),r("v-divider")],1)],1)},l=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-list-item",{attrs:{to:"/"}},[a("v-list-item-icon",[a("v-icon",[e._v("home")])],1),a("v-list-item-title",[e._v("Home")])],1),a("v-list-group",{attrs:{"prepend-icon":"supervisor_account",value:"true"},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-item-title",[e._v("Campos")])]},proxy:!0}])},[a("v-list-item",{attrs:{to:"/agrifrut/irrimax"}},[a("v-list-item-icon",[a("v-icon",[e._v("list")])],1),a("v-list-item-title",[e._v("Agrifrut")])],1),a("v-list-item",{attrs:{to:"/chincolco/Irrimax"}},[a("v-list-item-icon",[a("v-icon",[e._v("list")])],1),a("v-list-item-title",[e._v("Santa Juana de Chincolco")])],1)],1),a("v-list-group",{attrs:{"prepend-icon":"supervisor_account",value:"false"},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-item-title",[e._v("Cuentas")])]},proxy:!0}])},[a("v-list-group",{attrs:{"no-action":"","sub-group":"",value:"true"},scopedSlots:e._u([{key:"activator",fn:function(){return[a("v-list-item-content",[a("v-list-item-title",[e._v("Administrar")])],1)]},proxy:!0}])},[a("v-list-item",[a("v-list-item-title"),a("v-list-item-icon",[a("v-icon")],1)],1)],1)],1)],1)},u=[],p={name:"Menu"},v=p,m=a("2877"),d=a("6544"),f=a.n(d),h=a("132d"),g=a("56b0"),b=a("da13"),y=a("5d23"),x=a("34c3"),w=Object(m["a"])(v,c,u,!1,null,null,null),_=w.exports;f()(w,{VIcon:h["a"],VListGroup:g["a"],VListItem:b["a"],VListItemContent:y["a"],VListItemIcon:x["a"],VListItemTitle:y["b"]});var V={name:"Navbar",components:{Mainmenu:_},data(){return{menu:!1,profile:!0}}},C=V,k=a("40dc"),S=a("5bc1"),j=a("8212"),I=a("4ca6"),F=a("8336"),L=a("ce7e"),O=a("0e8f"),E=a("adda"),A=a("a722"),P=a("8860"),T=a("1baa"),N=a("f774"),z=a("2fa4"),B=a("2a7f"),D=Object(m["a"])(C,s,l,!1,null,null,null),$=D.exports;f()(D,{VAppBar:k["a"],VAppBarNavIcon:S["a"],VAvatar:j["a"],VBadge:I["a"],VBtn:F["a"],VDivider:L["a"],VFlex:O["a"],VIcon:h["a"],VImg:E["a"],VLayout:A["a"],VList:P["a"],VListItem:b["a"],VListItemContent:y["a"],VListItemGroup:T["a"],VListItemIcon:x["a"],VListItemTitle:y["b"],VNavigationDrawer:N["a"],VSpacer:z["a"],VToolbarTitle:B["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-layout",{attrs:{wrap:""}},[a("v-toolbar",{attrs:{fixed:"",color:"primary"}},[a("v-btn",{attrs:{color:"teal",to:"/irrimax"}},[a("span",[e._v("Irrimax")]),a("v-icon",[e._v("history")])],1)],1)],1)],1)},H=[],q={name:"Plugin",data(){return{}}},J=q,R=a("71d9"),U=Object(m["a"])(J,M,H,!1,null,null,null),G=U.exports;f()(U,{VBtn:F["a"],VIcon:h["a"],VLayout:A["a"],VToolbar:R["a"]});var W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-footer",{staticStyle:{height:"10vh"},attrs:{color:"indigo darken-4",dark:""}},[a("v-spacer"),a("div",[e._v("© "+e._s((new Date).getFullYear()))])],1)],1)},K=[],Q={name:"Footer",props:{msg:String}},Y=Q,X=a("553a"),Z=Object(m["a"])(Y,W,K,!1,null,null,null),ee=Z.exports;f()(Z,{VFooter:X["a"],VSpacer:z["a"]});var te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-layout",{attrs:{wrap:!0}},[r("v-flex",[r("video",{attrs:{autoplay:"",muted:"",loop:"",playbackRate:"0.5"},domProps:{muted:!0}},[r("source",{attrs:{src:a("6887"),type:"video/mp4"}})])])],1),r("v-layout",{staticStyle:{height:"100vh","margin-top":"10vh"},attrs:{"justify-center":""}},[r("v-flex",{attrs:{xs10:"",md4:""}},[r("v-card",{staticClass:"transparente pa-10",attrs:{elevation:12}},[r("v-card-text",[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs4:""}}),r("v-flex",{attrs:{xs4:""}},[r("v-img",{attrs:{src:a("555a"),"max-height":"150","max-width":"138"}})],1),r("v-flex",{attrs:{xs4:""}}),r("v-divider"),r("v-flex",{staticClass:"text-center",attrs:{xs12:""}},[r("h2",{staticClass:"primary--text",staticStyle:{}},[e._v("Acceder")])])],1),r("v-form",[r("v-text-field",{attrs:{label:"Usuario",name:"usuario","prepend-icon":"person",type:"text"},model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),r("v-text-field",{attrs:{label:"Contraseña",name:"password","prepend-icon":"lock",type:"password"},model:{value:e.psw,callback:function(t){e.psw=t},expression:"psw"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{staticClass:"pr-10 pl-10",attrs:{color:"primary",disabled:e.validateForm},on:{click:function(t){return e.log_in()}}},[e._v("Entrar")]),r("v-spacer")],1)],1)],1)],1)],1)},ae=[],re={name:"Login",data(){return{user:"",psw:""}},computed:{...Object(n["c"])(["login"]),validateForm(){return""==this.user||""==this.psw}},methods:{...Object(n["b"])(["log_set"]),log_in(){""!=this.user&&""!=this.psw?"desarrollo"==this.user&&"123456"==this.psw?(console.log("entro"),this.$router.push({name:"dashboard"}),console.log("despues")):console.log("The username and / or password is incorrect"):console.log("A username and password must be present")}}},ne=re,oe=(a("039a"),a("b0af")),ie=a("99d9"),se=a("4bd4"),le=a("8654"),ce=Object(m["a"])(ne,te,ae,!1,null,null,null),ue=ce.exports;f()(ce,{VBtn:F["a"],VCard:oe["a"],VCardActions:ie["a"],VCardText:ie["b"],VDivider:L["a"],VFlex:O["a"],VForm:se["a"],VImg:E["a"],VLayout:A["a"],VSpacer:z["a"],VTextField:le["a"]});var pe=a("138d"),ve=a("1ef3"),me={name:"App",components:{Navbar:$,Mainmenu:_,Plugin:G,Footer:ee,Login:ue,Irrimax:pe["default"],Irrichincolco:ve["default"]},data:()=>({}),computed:{...Object(n["c"])(["login"])}},de=me,fe=a("7496"),he=a("a75b"),ge=Object(m["a"])(de,o,i,!1,null,null,null),be=ge.exports;f()(ge,{VApp:fe["a"],VContent:he["a"],VFlex:O["a"],VLayout:A["a"]});var ye=a("8c4f");r["a"].use(ye["a"]);var xe=new ye["a"]({mode:"history",base:"/frontend/",routes:[{path:"/",name:"dashboard",component:()=>a.e("dashboard").then(a.bind(null,"7277"))},{path:"/farm/:name",name:"farm",component:()=>a.e("farm").then(a.bind(null,"452d"))},{path:"/pump_system/:name",name:"pumpsystem",component:()=>a.e("pumpsystem").then(a.bind(null,"d8ed"))},{path:"/gateway/:name",name:"gateway",component:()=>a.e("gateway").then(a.bind(null,"2eb3"))},{path:"/zone/:name",name:"zone",component:()=>a.e("zone").then(a.bind(null,"c777"))},{path:"/agrifrut/irrimax",name:"irrimax",component:()=>Promise.resolve().then(a.bind(null,"138d"))},{path:"/chincolco/irrimax",name:"irrimax",component:()=>Promise.resolve().then(a.bind(null,"1ef3"))}]});r["a"].use(n["a"]);var we=new n["a"].Store({state:{login:!0},mutations:{log_set(e){state.login=e}},actions:{}}),_e=a("9483");Object(_e["a"])("/frontend/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});a("54ba"),a("ba34");var Ve=a("f309"),Ce=a("2e15"),ke=a.n(Ce);r["a"].use(Ve["a"]);var Se=new Ve["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#0D47A1",secondary:"#1565C0",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:ke.a},current:"es"},icons:{iconfont:"md"}}),je=(a("d5e8"),a("d1e7"),a("bc3a")),Ie=a.n(je),Fe=a("a7fe"),Le=a.n(Fe);r["a"].use(Le.a,Ie.a),r["a"].config.productionTip=!1,new r["a"]({router:xe,store:we,vuetify:Se,render:e=>e(be)}).$mount("#app")},6887:function(e,t,a){e.exports=a.p+"media/CDTEC.65167fe0.mp4"},ba34:function(e,t,a){e.exports={"btn-gradient":"style-module_btn-gradient_2UuQj"}},fd06:function(e,t,a){}});
//# sourceMappingURL=app.e6b594e7.js.map