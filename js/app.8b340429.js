(function(){"use strict";var t={2937:function(t,e,n){var s=n(9242),o=n(3396),r=n(7139);const i=t=>((0,o.dD)("data-v-09b16242"),t=t(),(0,o.Cn)(),t),l={class:"container"},c=i((()=>(0,o._)("header",null,[(0,o._)("div",{class:"logo"})],-1))),u=i((()=>(0,o._)("h2",{class:"header"},[(0,o.Uk)(" Як заробляти "),(0,o._)("span",{class:"orange"},"від $100"),(0,o.Uk)(" на день на налаштуванні рекламних кампаній Facebook+Instagram ")],-1))),a={class:"lesson-title"},h={class:"title"},d={class:"subtitle"},p={class:"lesson-block"},f={class:"youtube-area"},b={class:"lessons-list"},v={key:0},m=["id","onClick"],g=i((()=>(0,o._)("p",{class:"background-image"},null,-1))),k={class:"lesson-link-text"},_={key:1},y={class:"bottom-block"},w={class:"lesson-block-description"},T=i((()=>(0,o._)("h4",{class:"lesson-description-header"}," У цьому епізоді ви дізнаєтесь: ",-1))),O={class:"lesson-description"},D={class:"button-block"},E={key:0,class:"button-description"};function j(t,e,n,s,i,j){const C=(0,o.up)("YouTube");return(0,o.wg)(),(0,o.iD)("div",l,[c,u,(0,o._)("div",a,[(0,o._)("h3",h,(0,r.zw)(t.title),1),(0,o._)("p",d,(0,r.zw)(t.subtitle),1)]),(0,o._)("div",p,[(0,o._)("div",f,[(0,o.Wm)(C,{class:"lesson-video",src:t.videoUrl,autoplay:1,onStateChange:e[0]||(e[0]=t=>1===this.$refs.youtube.getPlayerState()?j.startTimer():j.stopTimer()),ref:"youtube"},null,8,["src"])]),(0,o._)("div",b,[t.posts&&t.posts.length?((0,o.wg)(),(0,o.iD)("ul",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.posts,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{class:(0,r.C_)(["lesson-link",n===t.currentElemnt?"lesson-link-active":"lesson-link"]),id:n,onClick:e=>t.counter>n&&j.changeLesson(n),key:e,ref_for:!0,ref:n},[g,(0,o._)("p",k,(0,r.zw)(e.subtitle),1)],10,m)))),128))])):(0,o.kq)("",!0),t.errors&&t.errors.length?((0,o.wg)(),(0,o.iD)("ul",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.errors,((t,e)=>((0,o.wg)(),(0,o.iD)("li",{key:t},(0,r.zw)(e.message),1)))),128))])):(0,o.kq)("",!0)])]),(0,o._)("div",y,[(0,o._)("div",w,[T,(0,o._)("p",O,(0,r.zw)(t.description),1)]),(0,o._)("div",D,[t.currentElemnt!==t.posts.length-1&&t.counter>=t.currentElemnt+1?((0,o.wg)(),(0,o.iD)("p",E," Вже переглянули? Отримайте доступ до наступного: ")):(0,o.kq)("",!0),t.currentElemnt!==t.posts.length-1&&t.counter>=t.currentElemnt+1?((0,o.wg)(),(0,o.iD)("button",{key:1,class:"next-lesson-button",onClick:e[1]||(e[1]=e=>t.currentElemnt<t.posts.length-1&&j.changeLesson(t.currentElemnt+1))}," Наступний епізод ")):(0,o.kq)("",!0)])])])}n(7658);var C=n(4161),S=n(2722),x=n.n(S),U={name:"Default-layout",data:()=>({posts:[],errors:[],videoUrl:"",title:"",subtitle:"",description:"",currentElemnt:"",currentTime:"",currentStatus:"",timer:null,disabled:[],counter:0}),components:{YouTube:x()},created(){C.Z.get("http://localhost:8080/vue-pages/db.json").then((t=>{this.posts=t.data})).catch((t=>{this.erros.push(t)}))},updated(){this.videoUrl||this.changeLesson(0)},methods:{changeLesson(t){this.videoUrl=this.posts[t].video_url,this.title=this.posts[t].title,this.description=this.posts[t].description,this.subtitle=this.posts[t].subtitle,this.currentElemnt=t,this.currentTime=this.posts[t].video_time},startTimer(){0!==this.currentTime&&(this.timer=setInterval((()=>{this.currentTime--,console.log(this.currentTime)}),1e3))},stopTimer(){clearTimeout(this.timer),this.timer=null}},watch:{currentTime(t){t<=0&&(this.stopTimer(),this.counter>=this.currentElemnt&&(this.counter+=1,console.log(this.counter)))}}},z=n(89);const P=(0,z.Z)(U,[["render",j],["__scopeId","data-v-09b16242"]]);var Y=P;const q=(0,s.ri)(Y);q.component("YouTube",x()),q.mount("#app")}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,s,o,r){if(!s){var i=1/0;for(a=0;a<t.length;a++){s=t[a][0],o=t[a][1],r=t[a][2];for(var l=!0,c=0;c<s.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(t){return n.O[t](s[c])}))?s.splice(c--,1):(l=!1,r<i&&(i=r));if(l){t.splice(a--,1);var u=o();void 0!==u&&(e=u)}}return e}r=r||0;for(var a=t.length;a>0&&t[a-1][2]>r;a--)t[a]=t[a-1];t[a]=[s,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var o,r,i=s[0],l=s[1],c=s[2],u=0;if(i.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(c)var a=c(n)}for(e&&e(s);u<i.length;u++)r=i[u],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(a)},s=self["webpackChunktest"]=self["webpackChunktest"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(2937)}));s=n.O(s)})();
//# sourceMappingURL=app.8b340429.js.map