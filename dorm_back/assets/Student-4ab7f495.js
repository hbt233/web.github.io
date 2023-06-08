import{t as Y}from"./tableHandle-00f49707.js";import{e as _,f as K,k as Z,r as Q,l as ee,a as m,o as g,c as V,d as e,w as o,b as O,j as w,F as S,g as U,u as c,m as le,n as J,h as X}from"./index-136834c8.js";import{h as ae}from"./http-10d204f8.js";import{d as z}from"./index-1a938aa7.js";import{s as M,i as te}from"./index-2141f8fc.js";function oe(){const D=_(!1),f=_("create");function d(){D.value=!0,f.value="create"}const C=_({});function y(x){C.value=x,D.value=!0,f.value="edit"}return{showDialog:D,type:f,add:d,edit:y,formData:C}}const ne=()=>ae("building/getBuildings"),se={getBuildings:ne},ue={class:"add-student-popup"},de={class:"btn-container"},re={__name:"AddStudentPopup",props:{type:String,show:Boolean,formData:Object},emits:["closed","update"],setup(D,{emit:f}){const d=D;K(b);const C=[{label:"计算机工程学院"},{label:"网络工程学院"}],y=_([]),x=[{label:"男"},{label:"女"}],k=_(null),t=_({idCard:"",studentName:"",college:"",className:"",grade:"",rank:"",sex:"",building:"",dorm:""});let q=null;Z(()=>d.show,()=>{if(d.type==="create")t.value={idCard:"",studentName:"",college:"",className:"",grade:"",rank:"",sex:"",building:"",dorm:""},k.value&&k.value.resetFields();else{t.value=d.formData,q=d.formData.dormId,A();const s=y.value.find(l=>l.label===t.value.className);console.log(s,t.value.className),t.value={...t.value,rank:+t.value.no.slice(-2),className:s.key},r()}},{deep:!0});const $=Q({idCard:[{required:!0,message:"不可为空"}],studentName:[{required:!0,message:"不可为空"}],college:[{required:!0,message:"不可为空",trigger:"blur"}],className:[{required:!0,message:"不可为空",trigger:"blur"}],grade:[{required:!0,message:"不可为空"}],rank:[{required:!0,message:"不可为空"}],sex:[{required:!0,message:"不可为空",trigger:"blur"}],building:[{required:!0,message:"不可为空",trigger:"blur"}],dorm:[{required:!0,message:"不可为空",trigger:"blur"}]});async function j(s){await s.validate(l=>{l&&(d.type==="create"?h():F())})}function E(s){return i.value.find(v=>v.dormName===s).dormId}async function h(){const s=E(t.value.dorm),l=await M.register({...t.value,dormId:s});if(l.code!=="success"){ElMessage({message:l.msg,type:"error"});return}await z.checkIn({dormId:s}),ElMessage({message:l.msg,type:"success"}),t.value.dorm="",r(),f("update")}async function F(){const s=E(t.value.dorm),l=await M.modifyInfo({...t.value,dormId:s});if(l.code!=="success"){ElMessage({message:l.msg,type:"error"});return}await z.checkOut({dormId:q}),await z.checkIn({dormId:s}),ElMessage({message:l.msg,type:"success"}),f("update"),B()}const I=ee(()=>d.show);function T(){return d.type==="create"?"新增学生":"编辑学生"}function A(){const s={计算机工程学院:[{label:"计算机科学与技术",key:"cptSc"},{label:"软件工程",key:"sftEng"}],网络工程学院:[{label:"网络工程",key:"netEng"}]};y.value=s[t.value.college]}function L(){t.value.className="",J(k.value.clearValidate()),A()}function B(){f("closed")}const H=_([]);async function P(){const s=await se.getBuildings();H.value=s.buildingData}const i=_([]);function n(){t.value.dorm="",J(k.value.clearValidate("dorm")),r()}async function r(){const s=await z.getNotFullDorms({dormBuilding:t.value.building});i.value=s.dormData}function b(){P()}return(s,l)=>{const v=m("el-input"),p=m("el-form-item"),N=m("el-option"),u=m("el-select"),R=m("el-form"),G=m("el-button"),W=m("el-dialog");return g(),V("div",ue,[e(W,{modelValue:c(I),"onUpdate:modelValue":l[10]||(l[10]=a=>le(I)?I.value=a:null),onClosed:B,title:T()},{footer:o(()=>[O("div",de,[e(G,{onClick:B},{default:o(()=>[w("取消")]),_:1}),e(G,{type:"primary",onClick:l[9]||(l[9]=a=>j(k.value))},{default:o(()=>[w("保存")]),_:1})])]),default:o(()=>[e(R,{ref_key:"formRef",ref:k,model:t.value,rules:$,"label-width":"80"},{default:o(()=>[e(p,{label:"身份证号",prop:"idCard"},{default:o(()=>[e(v,{modelValue:t.value.idCard,"onUpdate:modelValue":l[0]||(l[0]=a=>t.value.idCard=a),placeholder:"身份证号"},null,8,["modelValue"])]),_:1}),e(p,{label:"姓名",prop:"studentName"},{default:o(()=>[e(v,{modelValue:t.value.studentName,"onUpdate:modelValue":l[1]||(l[1]=a=>t.value.studentName=a),placeholder:"姓名"},null,8,["modelValue"])]),_:1}),e(p,{label:"学院",prop:"college"},{default:o(()=>[e(u,{modelValue:t.value.college,"onUpdate:modelValue":l[2]||(l[2]=a=>t.value.college=a),onChange:L,placeholder:"请选择"},{default:o(()=>[(g(),V(S,null,U(C,a=>e(N,{key:a.label,label:a.label,value:a.label},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"班级",prop:"className"},{default:o(()=>[e(u,{modelValue:t.value.className,"onUpdate:modelValue":l[3]||(l[3]=a=>t.value.className=a),disabled:!t.value.college,placeholder:"请选择"},{default:o(()=>[(g(!0),V(S,null,U(y.value,a=>(g(),X(N,{key:a.key,label:a.label,value:a.key},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1}),e(p,{label:"年级",prop:"grade"},{default:o(()=>[e(v,{modelValue:t.value.grade,"onUpdate:modelValue":l[4]||(l[4]=a=>t.value.grade=a),placeholder:"年级"},null,8,["modelValue"])]),_:1}),e(p,{label:"排名",prop:"rank"},{default:o(()=>[e(v,{modelValue:t.value.rank,"onUpdate:modelValue":l[5]||(l[5]=a=>t.value.rank=a),placeholder:"排名"},null,8,["modelValue"])]),_:1}),e(p,{label:"性别",prop:"sex"},{default:o(()=>[e(u,{modelValue:t.value.sex,"onUpdate:modelValue":l[6]||(l[6]=a=>t.value.sex=a),placeholder:"请选择"},{default:o(()=>[(g(),V(S,null,U(x,a=>e(N,{key:a.label,label:a.label,value:a.label},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"宿舍楼",prop:"building"},{default:o(()=>[e(u,{modelValue:t.value.building,"onUpdate:modelValue":l[7]||(l[7]=a=>t.value.building=a),placeholder:"请选择",onChange:n},{default:o(()=>[(g(!0),V(S,null,U(H.value,a=>(g(),X(N,{key:a.buildingId,label:a.buildingName,value:a.buildingName},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(p,{label:"宿舍号",prop:"dorm"},{default:o(()=>[e(u,{modelValue:t.value.dorm,"onUpdate:modelValue":l[8]||(l[8]=a=>t.value.dorm=a),disabled:!t.value.building,placeholder:"请选择"},{default:o(()=>[(g(!0),V(S,null,U(i.value,a=>(g(),X(N,{key:a.dormId,label:a.dormName,value:a.dormName},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}};const ie={class:"student"},me=O("h1",null,"学生列表",-1),ce={class:"btn-container"},pe={class:"btn-container"},ge=O("div",{id:"main",class:"chart"},null,-1),fe=O("div",{id:"main2",class:"chart"},null,-1),he={__name:"Student",setup(D){K(h);const f=[{name:"学号",key:"no",width:100},{name:"身份证号",key:"idCard",width:200},{name:"姓名",key:"studentName",width:100},{name:"学院",key:"college",width:150},{name:"班级",key:"className",width:150},{name:"年级",key:"grade",width:100},{name:"性别",key:"sex",width:100},{name:"邮箱",key:"email",width:100},{name:"电话",key:"phone",width:100},{name:"宿舍楼",key:"building",width:100},{name:"宿舍",key:"dorm",width:100},{name:"电费",key:"money",width:100}],d=Q({studentName:"",no:"",college:"",className:"",building:""}),{pageSize:C,pageNum:y,total:x,handleCurrentChange:k,handleSizeChange:t,reset:q}=Y(h,d),$=_([]);let j=[],E=[];async function h(){const i=await M.getStudents({...d,pageSize:C.value,pageNum:y.value}),{data:n}=i;$.value=n.list,j=n.collegeData,E=n.sexData,F("main","学院分布表",j),F("main2","性别分布表",E),x.value=n.total}function F(i,n,r){var b=document.getElementById(i),s=te(b),l;l={title:{text:n,left:"center"},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"left"},series:[{type:"pie",radius:"50%",data:r,emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},l&&s.setOption(l)}const{showDialog:I,type:T,formData:A,add:L,edit:B}=oe();async function H(i){const n=await M.deleteStudent({stuId:i.stuId});if(n.code!=="success"){ElMessage({message:n.msg,type:"error"});return}const r=await z.checkOut({dormId:i.dormId});r.code==="success"?(ElMessage({message:n.msg,type:"success"}),h()):ElMessage({message:r.msg,type:"error"})}async function P(i){const n={stuId:i.stuId,absent:i.absent?0:1},r=await M.modifyAbsent(n);ElMessage({message:r.msg,type:"success"}),h()}return(i,n)=>{const r=m("el-button"),b=m("el-input"),s=m("el-form-item"),l=m("el-form"),v=m("el-table-column"),p=m("el-table"),N=m("el-pagination");return g(),V("div",ie,[me,O("div",ce,[e(r,{type:"success",onClick:c(L)},{default:o(()=>[w("新增")]),_:1},8,["onClick"])]),e(l,{inline:"true","label-width":"60"},{default:o(()=>[e(s,{label:"学院"},{default:o(()=>[e(b,{modelValue:d.college,"onUpdate:modelValue":n[0]||(n[0]=u=>d.college=u),placeholder:"学院"},null,8,["modelValue"])]),_:1}),e(s,{label:"班级"},{default:o(()=>[e(b,{modelValue:d.className,"onUpdate:modelValue":n[1]||(n[1]=u=>d.className=u),placeholder:"班级"},null,8,["modelValue"])]),_:1}),e(s,{label:"学号"},{default:o(()=>[e(b,{modelValue:d.no,"onUpdate:modelValue":n[2]||(n[2]=u=>d.no=u),placeholder:"学号"},null,8,["modelValue"])]),_:1}),e(s,{label:"姓名"},{default:o(()=>[e(b,{modelValue:d.studentName,"onUpdate:modelValue":n[3]||(n[3]=u=>d.studentName=u),placeholder:"姓名"},null,8,["modelValue"])]),_:1}),e(s,{label:"宿舍楼"},{default:o(()=>[e(b,{modelValue:d.building,"onUpdate:modelValue":n[4]||(n[4]=u=>d.building=u),placeholder:"宿舍楼"},null,8,["modelValue"])]),_:1}),O("div",pe,[e(r,{type:"primary",onClick:h},{default:o(()=>[w("查询")]),_:1}),e(r,{onClick:c(q)},{default:o(()=>[w("重置")]),_:1},8,["onClick"])])]),_:1}),e(p,{data:$.value,style:{width:"100%","margin-bottom":"30px"},"max-height":"600px"},{default:o(()=>[(g(),V(S,null,U(f,u=>e(v,{key:u.key,prop:u.key,label:u.name,"min-width":u.width},null,8,["prop","label","min-width"])),64)),e(v,{label:"操作","min-width":"250",fixed:"right"},{default:o(u=>[e(r,{size:"small",onClick:R=>c(B)(u.row)},{default:o(()=>[w("编辑")]),_:2},1032,["onClick"]),e(r,{size:"small",type:"danger",onClick:R=>H(u.row)},{default:o(()=>[w("删除")]),_:2},1032,["onClick"]),e(r,{size:"small",type:"primary",onClick:R=>P(u.row)},{default:o(()=>[w("标记缺勤")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(N,{background:"",layout:"prev, pager, next",total:c(x),"current-page":c(y),"page-size":c(C),onCurrentChange:c(k),onSizeChange:c(t)},null,8,["total","current-page","page-size","onCurrentChange","onSizeChange"]),ge,fe,e(re,{type:c(T),show:c(I),formData:c(A),onClosed:n[5]||(n[5]=u=>I.value=!1),onUpdate:h},null,8,["type","show","formData"])])}}};export{he as default};