import"./style-CWPg30Uh.js";const l="POST",n={Accept:"application/json","Content-Type":"application/json"},c={UserName:"",Password:""},r={method:l,headers:n,body:c};let s=()=>(r.body.UserName=d(),r.body.Password=i(),r.body=JSON.stringify(r.body),r),d=()=>{let e=document.getElementById("yourUsername");if(e!==null)return e.value.trim()},i=()=>{let e=document.getElementById("yourPassword");if(e!==null)return e.value.trim()};const u="/Login/bin/CreateToken/UsingJwt",m={PostUrl:u};let y=async()=>{let t=m.PostUrl,e=s();return await await fetch(t,e)},L=()=>{let e=document.getElementById("FormId").querySelectorAll("[required]"),a=!0;return e.forEach(o=>{if(o.value.trim().length===0){o.classList.add("is-invalid"),a=!1;return}}),a};const j="/Garments/AddOns/",F={RedirectToUrl:j};let f=()=>{window.location.href=F.RedirectToUrl},h=()=>{Swal.fire({icon:"error",text:"Wrong Credentials",title:"Check Credentials"})},S=async()=>{if(L()){let e=await y();e.status===200&&f(),e.status===401&&h()}},U=()=>{let t=document.getElementById("loginButtonId");t!==null&&t.addEventListener("click",S)},V=()=>{U()};const w=()=>{T(),V()};let T=()=>{let t="KSToken";document.cookie=`${t}=; expires=Thu, 01 Jan 1947 00:00:00 UTC; path=/;`};const g=()=>{w()};g();