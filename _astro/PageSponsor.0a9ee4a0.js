import{u as w}from"./index.c54070cf.js";import{h as x,p as b}from"./hooks.module.7cc4e70a.js";import{C as y}from"./close.3a539829.js";import{a as k}from"./http.82ebf0f1.js";import{s as i}from"./page.c1a8a472.js";import{o as t}from"./jsxRuntime.module.afbf92fe.js";import"./preact.module.7b19fc78.js";import"./jwt.f0e0aa9c.js";import"./index.a98c85f5.js";function H(p){const{gaPageIdentifier:r}=p,l=w(i),[e,c]=x(),m=async()=>{const o=window.location.pathname;if(o==="/"||o==="/best-practices"||o==="/roadmaps"||o.startsWith("/guides")||o.startsWith("/videos")||o.startsWith("/account")||o.startsWith("/team"))return;const{response:s,error:a}=await k("https://api.roadmap.sh/v1-get-sponsor",{href:window.location.pathname});if(a){console.error(a);return}s?.sponsor&&(c(s.sponsor),window.fireEvent({category:"SponsorImpression",action:`${s.sponsor?.company} Impression`,label:s.sponsor.gaLabel||`${r} / ${s.sponsor?.company} Link`}))};if(b(()=>{window.setTimeout(m)},[]),l||!e)return null;const{url:d,title:h,imageUrl:f,description:g,company:n,gaLabel:u,pageUrl:C}=e;return t("a",{href:d,target:"_blank",rel:"noopener sponsored nofollow",class:"fixed bottom-[15px] right-[15px] z-50 flex max-w-[350px] bg-white shadow-lg outline-0 outline-transparent",onClick:()=>{window.fireEvent({category:"SponsorClick",action:`${n} Redirect`,label:u||`${r} / ${n} Link`})},children:[t("span",{class:"absolute right-1.5 top-1.5 text-gray-300 hover:text-gray-800","aria-label":"Close",onClick:o=>{o.preventDefault(),o.stopImmediatePropagation(),i.set(!0)},children:t("img",{alt:"Close",class:"h-4 w-4",src:y})}),t("img",{src:f,class:"block h-[150px] w-[104.89px] object-contain lg:h-[169px] lg:w-[118.18px]",alt:"Sponsor Banner"}),t("span",{class:"flex flex-1 flex-col justify-between text-sm",children:[t("span",{class:"p-[10px]",children:[t("span",{class:"mb-0.5 block font-semibold",children:h}),t("span",{class:"block text-gray-500",children:g})]}),t("span",{class:"sponsor-footer",children:"Partner Content"})]})]})}export{H as PageSponsor};
