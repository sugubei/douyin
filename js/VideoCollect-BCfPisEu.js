import{n as c,o as i,P as d,_ as r}from"./common-D9Uyyynd.js";import"./vendor-BxVxoXnP.js";const u={class:"VideoCollect"},V={class:"content"},p=Vue.defineComponent({name:"VideoCollect",__name:"VideoCollect",setup(_){const e=Vue.reactive({loading:!1,total:0,pageNo:0,pageSize:15,videos:[]});Vue.onMounted(()=>{t(!0)});async function t(a=!1){if(e.loading)return;if(!a){if(e.total<=e.videos.length)return;e.pageNo++}e.loading=!0;let o=await c({pageNo:e.pageNo,pageSize:e.pageSize});e.loading=!1,o.success&&(e.videos=e.videos.concat(o.data.list),e.total=o.data.total)}return(a,o)=>{const n=Vue.resolveComponent("BaseHeader"),l=Vue.resolveComponent("Loading"),s=Vue.resolveComponent("NoMore");return Vue.openBlock(),Vue.createElementBlock("div",u,[Vue.createVNode(n,null,{center:Vue.withCtx(()=>o[0]||(o[0]=[Vue.createElementVNode("span",{class:"f16"},"视频收藏",-1)])),_:1}),Vue.createElementVNode("div",V,[Vue.createVNode(i,{class:"Scroll",onPulldown:t},{default:Vue.withCtx(()=>[Vue.createVNode(d,{mode:"music",list:e.videos},null,8,["list"]),e.loading?(Vue.openBlock(),Vue.createBlock(l,{key:0,"is-full-screen":!1})):(Vue.openBlock(),Vue.createBlock(s,{key:1}))]),_:1})])])}}}),g=r(p,[["__scopeId","data-v-d608890e"]]);export{g as default};