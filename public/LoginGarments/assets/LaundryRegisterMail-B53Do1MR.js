import"./style-CWPg30Uh.js";const c="POST",s={Accept:"application/json","Content-Type":"application/json"},u={UserName:"",Password:""},r={method:c,headers:s,body:u};let d=()=>(r.body.UserName=m(),r.body.Password=i(),r.body.Branch=y(),r.body.BranchMobile=L(),r.body.UserMobile=j(),r.body.isAdminValidated=!0,r.body=JSON.stringify(r.body),r),m=()=>{let e=document.getElementById("yourUsername");if(e!==null)return e.value.trim()},i=()=>{let e=document.getElementById("yourPassword");if(e!==null)return e.value.trim()},y=()=>{let e=document.getElementById("yourBranch");if(e!==null)return e.value.trim()},L=()=>{let e=document.getElementById("yourMobile");if(e!==null)return e.value.trim()},j=()=>{let e=document.getElementById("UserMobile");if(e!==null)return e.value.trim()};const h="bin",V="Openings",F={routePath:h,tableName:V};let w=async()=>{let a=F.PostUrl,e=d();return await await fetch(a,e)},f=()=>{let e=document.getElementById("FormId").querySelectorAll("[required]"),t=!0;return e.forEach(l=>{if(l.value.trim().length===0){l.classList.add("is-invalid"),t=!1;return}}),t},U=({inFetchData:a})=>{console.log("inFetchData:",a);let e=b();const t=new URL(window.location.href),l=new URLSearchParams(t.search);let n=new URL("./LaundryShow.html",t);const o=new URL(`${n.href}?${l}`);o.searchParams.append("inyourUsername",e),window.location.href=o.href},b=()=>{let e=document.getElementById("yourUsername");if(e!==null)return e.value.trim()},P=async()=>{if(f()){let e=await w();if(e.status===200){let t=await e.json();U({inFetchData:t})}}},I=()=>{let a=document.getElementById("CreateButtonId");a!==null&&a.addEventListener("click",P)},S=()=>{I()};const B=()=>{S()},g=()=>{B()};g();
