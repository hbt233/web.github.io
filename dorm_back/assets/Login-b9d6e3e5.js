import{h as p}from"./http-fbdac65a.js";import{r as u,a,o as g,c as f,b as i,d as s,w as n}from"./index-f68cef2b.js";const v=m=>p("admin/login",m),V={login:v};const h={class:"login"},w={class:"login-box"},y=i("div",{class:"title"}," 管理后台登录 ",-1),x={__name:"Login",setup(m){const e=u({username:"",password:""});async function d(){const o=await V.login(e);o.code==="success"?(ElMessage({message:o.msg,type:"success"}),cusSessionStorage.setItem("token",o.data.token),router.push("/layout")):ElMessage({message:o.msg,type:"error"})}return(o,t)=>{const r=a("el-input"),c=a("el-form-item"),_=a("el-form");return g(),f("div",h,[i("div",w,[y,s(_,{class:"login-form"},{default:n(()=>[s(c,{label:""},{default:n(()=>[s(r,{modelValue:e.name,"onUpdate:modelValue":t[0]||(t[0]=l=>e.name=l),placeholder:"用户名"},null,8,["modelValue"])]),_:1}),s(c,{label:""},{default:n(()=>[s(r,{modelValue:e.pass,"onUpdate:modelValue":t[1]||(t[1]=l=>e.pass=l),type:"password","show-password":"",placeholder:"密码"},null,8,["modelValue"])]),_:1})]),_:1}),i("div",{class:"login-btn",onClick:d},"登录")])])}}};export{x as default};