(self["webpackChunkMyGuitar"]=self["webpackChunkMyGuitar"]||[]).push([[360],{3752:function(t,e,n){!function(e,r){t.exports=r(n(6866))}(0,(function(t){return(()=>{"use strict";var e={553:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.default=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},976:e=>{e.exports=t}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var o=n[t]={exports:{}};return e[t](o,o.exports,r),o.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{r.r(i),r.d(i,{Component:()=>k,Plugin:()=>_,default:()=>N,useLoading:()=>x});var t=r(976);function e(e,n,r){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=(0,t.h)(e,n,i),u=document.createElement("div");return u.classList.add("vld-container"),r.appendChild(u),(0,t.render)(o,u),o.component}const n="undefined"!=typeof window?window.HTMLElement:Object,o=["aria-busy"],u={class:"vld-icon"},c={mounted(){this.enforceFocus&&document.addEventListener("focusin",this.focusIn)},methods:{focusIn(t){if(!this.isActive)return;if(t.target===this.$refs.root||this.$refs.root.contains(t.target))return;let e=this.container?this.container:this.isFullPage?null:this.$refs.root.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$refs.root.focus())}},beforeUnmount(){document.removeEventListener("focusin",this.focusIn)}},a=["width","height","stroke"],l=[(0,t.createStaticVNode)('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".25" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite"></animateTransform></path></g></g>',1)],s=(0,t.defineComponent)({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}});var d=r(553);const f=(0,d.default)(s,[["render",function(e,n,r,i,o,u){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,stroke:e.color},l,8,a)}]]),m=["fill","width","height"],h=[(0,t.createStaticVNode)('<circle cx="15" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="60" cy="15" r="9" fill-opacity="0.3"><animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="105" cy="15" r="15"><animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',3)],p=(0,t.defineComponent)({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}}),v=(0,d.default)(p,[["render",function(e,n,r,i,o,u){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:e.color,width:e.width,height:e.height},h,8,m)}]]),g=["height","width","fill"],y=[(0,t.createStaticVNode)('<rect x="0" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="10" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate></rect><rect x="20" y="13" width="4" height="5"><animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate><animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate></rect>',3)],b=(0,t.defineComponent)({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}}),w={Spinner:f,Dots:v,Bars:(0,d.default)(b,[["render",function(e,n,r,i,o,u){return(0,t.openBlock)(),(0,t.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:e.height,width:e.width,fill:e.color},y,8,g)}]])},S=(0,t.defineComponent)({name:"vue-loading",mixins:[c],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},enforceFocus:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!1},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:()=>{}},color:String,backgroundColor:String,blur:{type:String,default:"2px"},opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},emits:["hide","update:active"],data(){return{isActive:this.active}},components:w,mounted(){document.addEventListener("keyup",this.keyPress)},methods:{cancel(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide(){this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((()=>{const e=this.$refs.root.parentElement;var n,r;(0,t.render)(null,e),void 0!==(n=e).remove?n.remove():null===(r=n.parentNode)||void 0===r||r.removeChild(n)}),150))},disableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.add("vld-shown")},enableScroll(){this.isFullPage&&this.lockScroll&&document.body.classList.remove("vld-shown")},keyPress(t){27===t.keyCode&&this.cancel()}},watch:{active(t){this.isActive=t},isActive(t){t?this.disableScroll():this.enableScroll()}},computed:{bgStyle(){return{background:this.backgroundColor,opacity:this.opacity,backdropFilter:"blur(".concat(this.blur,")")}}},beforeUnmount(){document.removeEventListener("keyup",this.keyPress)}}),C=(0,d.default)(S,[["render",function(e,n,r,i,c,a){return(0,t.openBlock)(),(0,t.createBlock)(t.Transition,{ref:"root",name:e.transition},{default:(0,t.withCtx)((()=>[(0,t.withDirectives)((0,t.createElementVNode)("div",{tabindex:"0",class:(0,t.normalizeClass)(["vld-overlay is-active",{"is-full-page":e.isFullPage}]),"aria-busy":e.isActive,"aria-label":"Loading",style:(0,t.normalizeStyle)({zIndex:e.zIndex})},[(0,t.createElementVNode)("div",{class:"vld-background",onClick:n[0]||(n[0]=(0,t.withModifiers)((function(){return e.cancel&&e.cancel(...arguments)}),["prevent"])),style:(0,t.normalizeStyle)(e.bgStyle)},null,4),(0,t.createElementVNode)("div",u,[(0,t.renderSlot)(e.$slots,"before"),(0,t.renderSlot)(e.$slots,"default",{},(()=>[((0,t.openBlock)(),(0,t.createBlock)((0,t.resolveDynamicComponent)(e.loader),{color:e.color,width:e.width,height:e.height},null,8,["color","width","height"]))])),(0,t.renderSlot)(e.$slots,"after")])],14,o),[[t.vShow,e.isActive]])])),_:3},8,["name"])}]]),k=C;function x(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{show(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n;const o=Object.assign({},t,r,{programmatic:!0,lockScroll:!0,isFullPage:!1,active:!0});let u=o.container;o.container||(u=document.body,o.isFullPage=!0);const c=Object.assign({},n,i);return{hide:e(k,o,u,c).ctx.hide}}}}const _=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=x(e,n);t.config.globalProperties.$loading=r,t.provide("$loading",r)};k.install=_;const N=k})(),i})()}))},6866:function(t,e,n){"use strict";n.r(e),n.d(e,{BaseTransition:function(){return r.P$},Comment:function(){return r.sv},EffectScope:function(){return r.Bj},Fragment:function(){return r.HY},KeepAlive:function(){return r.Ob},ReactiveEffect:function(){return r.qq},Static:function(){return r.qG},Suspense:function(){return r.n4},Teleport:function(){return r.lR},Text:function(){return r.xv},Transition:function(){return r.uT},TransitionGroup:function(){return r.W3},VueElement:function(){return r.a2},callWithAsyncErrorHandling:function(){return r.$d},callWithErrorHandling:function(){return r.KU},camelize:function(){return r._A},capitalize:function(){return r.kC},cloneVNode:function(){return r.Ho},compatUtils:function(){return r.ry},compile:function(){return i},computed:function(){return r.Fl},createApp:function(){return r.ri},createBlock:function(){return r.j4},createCommentVNode:function(){return r.kq},createElementBlock:function(){return r.iD},createElementVNode:function(){return r._},createHydrationRenderer:function(){return r.Eo},createPropsRestProxy:function(){return r.p1},createRenderer:function(){return r.Us},createSSRApp:function(){return r.vr},createSlots:function(){return r.Nv},createStaticVNode:function(){return r.uE},createTextVNode:function(){return r.Uk},createVNode:function(){return r.Wm},customRef:function(){return r.ZM},defineAsyncComponent:function(){return r.RC},defineComponent:function(){return r.aZ},defineCustomElement:function(){return r.MW},defineEmits:function(){return r.Bz},defineExpose:function(){return r.WY},defineProps:function(){return r.yb},defineSSRCustomElement:function(){return r.Ah},devtools:function(){return r.mW},effect:function(){return r.cE},effectScope:function(){return r.B},getCurrentInstance:function(){return r.FN},getCurrentScope:function(){return r.nZ},getTransitionRawChildren:function(){return r.Q6},guardReactiveProps:function(){return r.F4},h:function(){return r.h},handleError:function(){return r.S3},hydrate:function(){return r.ZB},initCustomFormatter:function(){return r.Mr},initDirectivesForSSR:function(){return r.Nd},inject:function(){return r.f3},isMemoSame:function(){return r.nQ},isProxy:function(){return r.X3},isReactive:function(){return r.PG},isReadonly:function(){return r.$y},isRef:function(){return r.dq},isRuntimeOnly:function(){return r.of},isShallow:function(){return r.yT},isVNode:function(){return r.lA},markRaw:function(){return r.Xl},mergeDefaults:function(){return r.u_},mergeProps:function(){return r.dG},nextTick:function(){return r.Y3},normalizeClass:function(){return r.C_},normalizeProps:function(){return r.vs},normalizeStyle:function(){return r.j5},onActivated:function(){return r.dl},onBeforeMount:function(){return r.wF},onBeforeUnmount:function(){return r.Jd},onBeforeUpdate:function(){return r.Xn},onDeactivated:function(){return r.se},onErrorCaptured:function(){return r.d1},onMounted:function(){return r.bv},onRenderTracked:function(){return r.bT},onRenderTriggered:function(){return r.Yq},onScopeDispose:function(){return r.EB},onServerPrefetch:function(){return r.vl},onUnmounted:function(){return r.SK},onUpdated:function(){return r.ic},openBlock:function(){return r.wg},popScopeId:function(){return r.Cn},provide:function(){return r.JJ},proxyRefs:function(){return r.WL},pushScopeId:function(){return r.dD},queuePostFlushCb:function(){return r.qb},reactive:function(){return r.qj},readonly:function(){return r.OT},ref:function(){return r.iH},registerRuntimeCompiler:function(){return r.Y1},render:function(){return r.sY},renderList:function(){return r.Ko},renderSlot:function(){return r.WI},resolveComponent:function(){return r.up},resolveDirective:function(){return r.Q2},resolveDynamicComponent:function(){return r.LL},resolveFilter:function(){return r.eq},resolveTransitionHooks:function(){return r.U2},setBlockTracking:function(){return r.qZ},setDevtoolsHook:function(){return r.ec},setTransitionHooks:function(){return r.nK},shallowReactive:function(){return r.Um},shallowReadonly:function(){return r.YS},shallowRef:function(){return r.XI},ssrContextKey:function(){return r.Uc},ssrUtils:function(){return r.G},stop:function(){return r.sT},toDisplayString:function(){return r.zw},toHandlerKey:function(){return r.hR},toHandlers:function(){return r.mx},toRaw:function(){return r.IU},toRef:function(){return r.Vh},toRefs:function(){return r.BK},transformVNodeArgs:function(){return r.C3},triggerRef:function(){return r.oR},unref:function(){return r.SU},useAttrs:function(){return r.l1},useCssModule:function(){return r.fb},useCssVars:function(){return r.sj},useSSRContext:function(){return r.Zq},useSlots:function(){return r.Rr},useTransitionState:function(){return r.Y8},vModelCheckbox:function(){return r.e8},vModelDynamic:function(){return r.YZ},vModelRadio:function(){return r.G2},vModelSelect:function(){return r.bM},vModelText:function(){return r.nr},vShow:function(){return r.F8},version:function(){return r.i8},warn:function(){return r.ZK},watch:function(){return r.YP},watchEffect:function(){return r.m0},watchPostEffect:function(){return r.Rh},watchSyncEffect:function(){return r.yX},withAsyncContext:function(){return r.mv},withCtx:function(){return r.w5},withDefaults:function(){return r.b9},withDirectives:function(){return r.wy},withKeys:function(){return r.D2},withMemo:function(){return r.MX},withModifiers:function(){return r.iM},withScopeId:function(){return r.HX}});var r=n(9242);const i=()=>{0}},8542:function(t,e,n){"use strict";n.d(e,{Z:function(){return f}});var r=n(3396);const i={class:"vld-parent"},o=(0,r._)("div",{class:"loadingio-spinner-spin-nwqkzohoq6o"},[(0,r._)("div",{class:"ldio-6grgxnrkcz"},[(0,r._)("div",null,[(0,r._)("div")]),(0,r._)("div",null,[(0,r._)("div")]),(0,r._)("div",null,[(0,r._)("div")]),(0,r._)("div",null,[(0,r._)("div")]),(0,r._)("div",null,[(0,r._)("div")]),(0,r._)("div",null,[(0,r._)("div")]),(0,r._)("div",null,[(0,r._)("div")]),(0,r._)("div",null,[(0,r._)("div")])])],-1);function u(t,e,n,u,c,a){const l=(0,r.up)("loading");return(0,r.wg)(),(0,r.iD)("div",i,[(0,r.Wm)(l,{active:c.isLoading,"can-cancel":!0,"is-full-page":!0,color:"#43342F"},{default:(0,r.w5)((()=>[o])),_:1},8,["active"])])}var c=n(3752),a=n.n(c),l={data(){return{isLoading:!1}},components:{Loading:a()},methods:{doAjax(){this.isLoading=!0},timeIsOut(){this.isLoading=!1}}},s=n(89);const d=(0,s.Z)(l,[["render",u]]);var f=d},3360:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return x}});var r=n(3396),i=n(7139);const o={class:"container-fluid"},u=(0,r.uE)('<div class="row" data-v-1a079870><div class="col-12 col-md-12 col-lg-12 col-sm-12" data-v-1a079870><div class="banner" data-v-1a079870><div class="bannerText text-white" data-v-1a079870><h1 class="py-2" data-v-1a079870>不知道怎麼選?!</h1><h2 class="py-2" data-v-1a079870>進來看看吧!</h2></div></div></div></div>',1),c={class:"col-12 col-sm-12 col-md-12 col-lg-6 px-5"},a=["src","alt"],l={class:"articleText px-5 col-12 col-sm-12 col-md-8 col-lg-5 text-white text-start"},s={class:"row mb-5"},d={class:"col-sm-12 col-md-12 col-lg-12"},f={class:"row mb-5"},m={class:"desc col-sm-12 col-md-12 col-lg-12"},h={class:"row mb-5"},p={class:"col-sm-12 col-lg-4 col-md-12"},v={class:"row my-5"},g={class:"col-sm-12 col-lg-4 col-md-12"},y=(0,r.Uk)("繼續閱讀");function b(t,e,n,b,w,S){const C=(0,r.up)("router-link"),k=(0,r.up)("ApiLoading");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("div",o,[u,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(w.articleData,(t=>((0,r.wg)(),(0,r.iD)("div",{class:"row py-5 px-5 bg-primary justify-content-center",key:t+132},[(0,r._)("div",c,[(0,r._)("img",{src:t.image,alt:t.title,class:"w-100 border"},null,8,a)]),(0,r._)("div",l,[(0,r._)("div",s,[(0,r._)("div",d,[(0,r._)("h2",null,(0,i.zw)(t.title),1)])]),(0,r._)("div",f,[(0,r._)("div",m,[(0,r._)("p",null,(0,i.zw)(t.description),1)])]),(0,r._)("div",h,[(0,r._)("div",p,[(0,r._)("p",null,(0,i.zw)((new Date).toLocaleDateString()),1)])]),(0,r._)("div",v,[(0,r._)("div",g,[(0,r.Wm)(C,{to:`/articleList/${t.id}`},{default:(0,r.w5)((()=>[y])),_:2},1032,["to"])])])])])))),128))]),(0,r.Wm)(k,{ref:"load"},null,512)],64)}var w=n(8542),S={components:{ApiLoading:w.Z},data(){return{articleData:[]}},methods:{getArticle(){this.$refs.load.doAjax(),this.$http.get("https://vue3-course-api.hexschool.io/v2/api/danny123/articles").then((t=>{this.articleData=t.data.articles,this.$refs.load.timeIsOut()})).catch((t=>{console.log(t),this.$refs.load.timeIsOut()}))}},mounted(){this.getArticle()}},C=n(89);const k=(0,C.Z)(S,[["render",b],["__scopeId","data-v-1a079870"]]);var x=k}}]);
//# sourceMappingURL=360.a54d14d7.js.map