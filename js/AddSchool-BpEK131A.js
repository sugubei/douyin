import{u as y,c as E,ao as m,N,M as _,e as p,O as T,a as w,b as k,d as D,_ as C}from"./common-D9Uyyynd.js";import{u as I}from"./other-b3vOVzsG.js";import"./vendor-BxVxoXnP.js";const L={class:"school"},b={class:"content"},A={class:"right"},Y={class:"right"},j={class:"right"},x={id:"trigger1"},B={class:"right"},P={class:"right"},M=Vue.defineComponent({name:"AddSchool",__name:"AddSchool",setup(H){const c=y(),r=VueRouter.useRouter(),u=I(),o=Vue.reactive({localSchool:E(c.userinfo.school),educationList:[{id:1,name:"专科"},{id:2,name:"本科"},{id:3,name:"硕士"},{id:4,name:"博士"}]});Vue.onMounted(()=>{let t=localStorage.getItem("changeSchool"),e=localStorage.getItem("changeDepartment"),s=localStorage.getItem("changeDisplayType"),l=localStorage.getItem("changeJoinTime"),n=localStorage.getItem("changeEducation");t!==null&&(o.localSchool.name=t),e!==null&&(o.localSchool.department=e),s!==null&&(o.localSchool.displayType=~~s),l!==null&&(o.localSchool.joinTime=~~l),n!==null&&(o.localSchool.education=n)});const a=Vue.computed(()=>c.userinfo.school),d=Vue.computed(()=>a.value.name!==o.localSchool.name||a.value.department!==o.localSchool.department||a.value.joinTime!==o.localSchool.joinTime||a.value.education!==o.localSchool.education?!0:a.value.displayType!==o.localSchool.displayType),h=Vue.computed(()=>o.localSchool.displayType===m.DISPLAY_TYPE.ALL?"公开可见":o.localSchool.displayType===m.DISPLAY_TYPE.SCHOOL?"校友可见":o.localSchool.displayType===m.DISPLAY_TYPE.ME?"仅自己可见":"");function g(){new N({trigger:"#trigger1",title:"学历",wheels:[{data:Array.apply(null,{length:50}).map((t,e)=>new Date().getFullYear()-e)}],callback:(t,e)=>{localStorage.setItem("changeJoinTime",e[0]),e.localSchool.joinTime=~~e[0]}}).show()}function S(){_(o.educationList,t=>{localStorage.setItem("changeEducation",t.name),o.localSchool.education=t.name})}function i(t){return t||"点击设置"}function f(t){if(!o.localSchool.name)return p("请先选择学校 ");u(t)}function v(){d.value?T("学校信息30天内只允许修改一次，是否保存修改",V,()=>{localStorage.clear(),r.back()}):(localStorage.clear(),r.back())}async function V(){d.value&&(w(),c.userinfo={...c.userinfo,school:o.localSchool},await k(500),D(),localStorage.clear(),r.back(),p("修改成功"))}return(t,e)=>{const s=Vue.resolveComponent("BaseHeader"),l=Vue.resolveComponent("dy-back");return Vue.openBlock(),Vue.createElementBlock("div",L,[Vue.createVNode(s,{onBack:v},{center:Vue.withCtx(()=>e[3]||(e[3]=[Vue.createElementVNode("span",{class:"f16"},"添加学校",-1)])),right:Vue.withCtx(()=>[Vue.createElementVNode("div",null,[Vue.createElementVNode("span",{class:Vue.normalizeClass(["f16",d.value?"save-yes":"save-no"]),onClick:V},"保存",2)])]),_:1}),Vue.createElementVNode("div",b,[Vue.createElementVNode("div",{class:"row",onClick:e[0]||(e[0]=n=>Vue.unref(u)("/me/choose-school"))},[e[4]||(e[4]=Vue.createElementVNode("div",{class:"left"},"学校",-1)),Vue.createElementVNode("div",A,[Vue.createElementVNode("span",null,Vue.toDisplayString(i(o.localSchool.name)),1),Vue.createVNode(l,{scale:"1",direction:"right"})])]),Vue.createElementVNode("div",{class:"row",onClick:e[1]||(e[1]=n=>f("/me/choose-department"))},[e[5]||(e[5]=Vue.createElementVNode("div",{class:"left"},"院系",-1)),Vue.createElementVNode("div",Y,[Vue.createElementVNode("span",null,Vue.toDisplayString(i(o.localSchool.department)),1),Vue.createVNode(l,{scale:"1",direction:"right"})])]),Vue.createElementVNode("div",{class:"row",onClick:g},[e[6]||(e[6]=Vue.createElementVNode("div",{class:"left"},"入学时间",-1)),Vue.createElementVNode("div",j,[Vue.createElementVNode("span",null,Vue.toDisplayString(i(o.localSchool.joinTime)),1),Vue.createVNode(l,{scale:"1",direction:"right"}),Vue.withDirectives(Vue.createElementVNode("div",x,null,512),[[Vue.vShow,!1]])])]),Vue.createElementVNode("div",{class:"row",onClick:S},[e[7]||(e[7]=Vue.createElementVNode("div",{class:"left"},"学历",-1)),Vue.createElementVNode("div",B,[Vue.createElementVNode("span",null,Vue.toDisplayString(i(o.localSchool.education)),1),Vue.createVNode(l,{scale:"1",direction:"right"})])]),Vue.createElementVNode("div",{class:"row",onClick:e[2]||(e[2]=n=>Vue.unref(u)("/me/display-type",{displayType:o.localSchool.displayType}))},[e[8]||(e[8]=Vue.createElementVNode("div",{class:"left"},"展示范围",-1)),Vue.createElementVNode("div",P,[Vue.createElementVNode("span",null,Vue.toDisplayString(h.value),1),Vue.createVNode(l,{scale:"1",direction:"right"})])])])])}}}),R=C(M,[["__scopeId","data-v-4a9e4109"]]);export{R as default};