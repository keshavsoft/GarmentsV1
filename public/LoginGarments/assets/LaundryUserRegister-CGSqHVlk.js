import"./style-CWPg30Uh.js";const s="POST",c={Accept:"application/json","Content-Type":"application/json"},u={UserName:"",Password:""},r={method:s,headers:c,body:u};let d=()=>(r.body.UserName=m(),r.body.Password=i(),r.body.Branch=y(),r.body.BranchMobile=L(),r.body.UserMobile=j(),r.body.isAdminValidated=!1,r.body=JSON.stringify(r.body),r),m=()=>{let e=document.getElementById("yourUsername");if(e!==null)return e.value.trim()},i=()=>{let e=document.getElementById("yourPassword");if(e!==null)return e.value.trim()},y=()=>{let e=document.getElementById("yourBranch");if(e!==null)return e.value.trim()},L=()=>{let e=document.getElementById("yourMobile");if(e!==null)return e.value.trim()},j=()=>{let e=document.getElementById("UserMobile");if(e!==null)return e.value.trim()};const V="/Login/bin/Users/AsIs",h={PostUrl:V};let F=async()=>{let a=h.PostUrl,e=d();return await await fetch(a,e)},f=()=>{let e=document.getElementById("FormId").querySelectorAll("[required]"),l=!0;return e.forEach(t=>{if(t.value.trim().length===0){t.classList.add("is-invalid"),l=!1;return}}),l},w=({inFetchData:a})=>{console.log("inFetchData:",a);let e=U();const l=new URL(window.location.href),t=new URLSearchParams(l.search);let n=new URL("./LaundryShow.html",l);const o=new URL(`${n.href}?${t}`);o.searchParams.append("inyourUsername",e),window.location.href=o.href},U=()=>{let e=document.getElementById("yourUsername");if(e!==null)return e.value.trim()},b=async()=>{if(f()){let e=await F();if(e.status===200){let l=await e.json();w({inFetchData:l})}}},P=()=>{let a=document.getElementById("CreateButtonId");a!==null&&a.addEventListener("click",b)},I=()=>{P()};const S=()=>{I()},B=()=>{console.log("llllllllll"),S()};B();