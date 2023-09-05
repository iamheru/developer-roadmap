import{j as o}from"./jsx-runtime.391947bd.js";import{r as c}from"./index.ed373d49.js";import{a as E,T as I}from"./jwt.1b92699e.js";import{S as G}from"./spinner.6a5ba5e9.js";import{a as w}from"./http.64a7434f.js";const v={src:"/_astro/google.b1c95028.svg",width:90,height:92,format:"svg"},l="googleRedirectAt",g="googleLastPage";function T(R){const[a,t]=c.useState(!1),[m,n]=c.useState(""),f=a?G:v;c.useEffect(()=>{const e=new URLSearchParams(window.location.search),r=e.get("code"),i=e.get("state"),S=e.get("provider");!r||!i||S!=="google"||(t(!0),w(`https://api.roadmap.sh/v1-google-callback${window.location.search}`).then(({response:s,error:x})=>{if(!s?.token){n(x?.message||"Something went wrong."),t(!1);return}let d="/";const h=localStorage.getItem(l),p=localStorage.getItem(g);if(h&&p){const b=parseInt(h,10);Date.now()-b<30*1e3&&(d=p)}localStorage.removeItem(l),localStorage.removeItem(g),E.set(I,s.token,{path:"/",expires:30,domain:".roadmap.sh"}),window.location.href=d}).catch(s=>{n("Something went wrong. Please try again later."),t(!1)}))},[]);const u=()=>{t(!0),w("https://api.roadmap.sh/v1-google-login").then(({response:e,error:r})=>{if(!e?.loginUrl){n(r?.message||"Something went wrong."),t(!1);return}if(!["/login","/signup"].includes(window.location.pathname)){const i=["/respond-invite","/befriend"].includes(window.location.pathname)?window.location.pathname+window.location.search:window.location.pathname;localStorage.setItem(l,Date.now().toString()),localStorage.setItem(g,i)}window.location.href=e.loginUrl}).catch(e=>{n("Something went wrong. Please try again later."),t(!1)})};return o.jsxs(o.Fragment,{children:[o.jsxs("button",{className:"inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",disabled:a,onClick:u,children:[o.jsx("img",{src:f.src,alt:"Google",className:`h-[18px] w-[18px] ${a?"animate-spin":""}`}),"Continue with Google"]}),m&&o.jsx("p",{className:"mb-2 mt-1 text-sm font-medium text-red-600",children:m})]})}export{T as GoogleButton};
