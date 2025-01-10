import{_ as a}from"./common-D9Uyyynd.js";const i=""+new URL("../assets/close-full-gray-DqY-169c.png",import.meta.url).href,d={name:"LoginInput",props:{modelValue:{type:String,default(){return""}},placeholder:{type:String,default(){return""}},type:{type:String,default:"phone"},autofocus:{type:Boolean,default:!1},isSendVerificationCode:{type:Boolean,default:!1}},data(){return{isTyping:!1,verificationCodeBtnText:60}},computed:{value:{get(){return this.modelValue},set(o){this.$emit("update:modelValue",o)}}},watch:{isSendVerificationCode:{immediate:!0,handler(o){if(o){this.verificationCodeBtnText=60;let e=setInterval(()=>{this.verificationCodeBtnText>0?this.verificationCodeBtnText--:(this.verificationCodeBtnText="重新发送",this.$emit("update:isSendVerificationCode",!1),clearInterval(e))},1e3)}}}},methods:{delaySetTypingFalse(){setTimeout(()=>{this.isTyping=!1})},send(){this.isSendVerificationCode||this.$emit("send")}}},r={key:0,class:"input-number"},s={class:"right flex1"},V=["autofocus","placeholder"],c={key:1,class:"input-number"},m={class:"right flex1"},f=["autofocus","placeholder"],v={key:2,class:"input-number"},y={class:"left no-border flex1"},p=["autofocus","placeholder"];function g(o,e,n,k,u,t){return Vue.openBlock(),Vue.createElementBlock("div",null,[n.type==="phone"?(Vue.openBlock(),Vue.createElementBlock("div",r,[e[13]||(e[13]=Vue.createElementVNode("div",{class:"left"},[Vue.createElementVNode("span",null,"+86"),Vue.createElementVNode("div",{class:"arrow"})],-1)),Vue.createElementVNode("div",s,[Vue.withDirectives(Vue.createElementVNode("input",{onClick:e[0]||(e[0]=l=>u.isTyping=!0),onBlur:e[1]||(e[1]=(...l)=>t.delaySetTypingFalse&&t.delaySetTypingFalse(...l)),autofocus:n.autofocus,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value=l),type:"text",placeholder:n.placeholder},null,40,V),[[Vue.vModelText,t.value]]),t.value&&u.isTyping?(Vue.openBlock(),Vue.createElementBlock("img",{key:0,src:i,alt:"",onClick:e[3]||(e[3]=l=>t.value="")})):Vue.createCommentVNode("",!0)])])):Vue.createCommentVNode("",!0),n.type==="password"?(Vue.openBlock(),Vue.createElementBlock("div",c,[Vue.createElementVNode("div",m,[Vue.withDirectives(Vue.createElementVNode("input",{onClick:e[4]||(e[4]=l=>u.isTyping=!0),onBlur:e[5]||(e[5]=(...l)=>t.delaySetTypingFalse&&t.delaySetTypingFalse(...l)),autofocus:n.autofocus,"onUpdate:modelValue":e[6]||(e[6]=l=>t.value=l),type:"password",autocomplete:"new-password",placeholder:n.placeholder},null,40,f),[[Vue.vModelText,t.value]]),t.value&&u.isTyping?(Vue.openBlock(),Vue.createElementBlock("img",{key:0,src:i,alt:"",onClick:e[7]||(e[7]=l=>t.value="")})):Vue.createCommentVNode("",!0)])])):Vue.createCommentVNode("",!0),n.type==="code"?(Vue.openBlock(),Vue.createElementBlock("div",v,[Vue.createElementVNode("div",y,[Vue.withDirectives(Vue.createElementVNode("input",{onClick:e[8]||(e[8]=l=>u.isTyping=!0),onBlur:e[9]||(e[9]=(...l)=>t.delaySetTypingFalse&&t.delaySetTypingFalse(...l)),autofocus:n.autofocus,"onUpdate:modelValue":e[10]||(e[10]=l=>t.value=l),type:"text",placeholder:n.placeholder},null,40,p),[[Vue.vModelText,t.value]]),t.value&&u.isTyping?(Vue.openBlock(),Vue.createElementBlock("img",{key:0,src:i,alt:"",onClick:e[11]||(e[11]=l=>t.value="")})):Vue.createCommentVNode("",!0)]),Vue.createElementVNode("div",{class:"right",onClick:e[12]||(e[12]=(...l)=>t.send&&t.send(...l))},[Vue.createElementVNode("span",{class:Vue.normalizeClass(n.isSendVerificationCode&&"disabled")},Vue.toDisplayString(u.verificationCodeBtnText),3)])])):Vue.createCommentVNode("",!0)])}const C=a(d,[["render",g],["__scopeId","data-v-8eb35238"]]);export{C as L};
