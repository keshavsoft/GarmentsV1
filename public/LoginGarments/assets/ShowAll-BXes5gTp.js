import"./style-CWPg30Uh.js";let o=async()=>{document.getElementById("RefreshBSTableId").click()};const n="Login",s="/Login/bin/Users",c={StartRoute:n,GetEndPoint:s};let i=async()=>{let t=c.GetEndPoint;return await await fetch(t)},d=async()=>{let t=await i();if(t.status===200)return await t.json()},u=()=>{var t=$("#table");let a=S().sort((r,l)=>r.value-l.value);t.bootstrapTable("load",a)};const S=()=>jVarGlobalPresentViewData.sort((t,e)=>{const a=t.Date,r=e.Date;return a<r?-1:a>r?1:0});let b=async()=>{try{let[t]=await Promise.all([d()]);jVarGlobalPresentViewData=[...t],u()}catch(t){console.log("error from Promise all : ",t),alert("error from Promise All")}},m=()=>{let t=document.getElementById("RefreshBSTableId");t!==null&&t.addEventListener("click",b)},f=()=>{m()};const V="#toolbar",h="true",j="true",F="pk",L="true",B=[],w=[{field:"KS-Serial",title:"#",formatter:"jFGlobalSerialColumn"},{field:"UserName",title:"UserName"},{field:"Password",title:"Password"},{field:"isMailValidated",title:"isMailValidated"}],y={toolbar:V,search:h,searchable:j,idfield:F,showFooter:L,data:B,columns:w},P=()=>{var t=$("#table");t.bootstrapTable(y)},I=()=>{P(),f()},D=()=>{I(),o().then()};D();