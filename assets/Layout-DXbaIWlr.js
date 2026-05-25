import{r as l,u,j as e,o as p,a,c as j,s as T,y as x,b as E,d as M,O as S}from"./index-DAqPC0Xy.js";import{P as L,A as O,T as D,I as $,C as B,B as R,D as I,L as f,a as F,b as H,M as P,H as N,c as z,d as A,e as V,f as U,N as q,g as v,h as W,i as g,R as Y,j as h,k as G}from"./CustomCalendar.styled-Cstl2xMc.js";import{d as b}from"./styled-components.browser.esm-HoKeCn4C.js";import{s as w}from"./selectors-BKzC1wDG.js";import{s as y,a as k}from"./selectors-BMSyaJA8.js";import{s as J}from"./selectors-qmLL3Sou.js";import{U as K}from"./UserMenu-C46Syj3H.js";const Q=b.div`
    width: 100%;
    /* min-height: calc(var(--vh, 1vh) * 100 - 80px);
    background-image: url('${"/salary-front-end/"}images/background/endless-constellation.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
`,X=()=>{const t=l.useRef(null),s=u();return e.jsx(e.Fragment,{children:e.jsx(L,{ref:t,trigger:e.jsx(D,{children:e.jsx($,{children:e.jsx("use",{href:"/salary-front-end/assets/symbol-defs.svg#icon-settings"})})}),on:"click",position:"bottom right",closeOnDocumentClick:"true",arrow:"false",children:n=>e.jsxs(O,{children:[e.jsx("button",{onClick:()=>{s(p("settings")),n()},children:"Settings"}),e.jsx("button",{onClick:()=>{s(p("logout")),n()},children:"Log out"})]})})})},Z=()=>{const t=a(w),s=u(),n=()=>{s(p("burgerMenu"))},o=()=>{s(p("message"))};return e.jsxs(B,{children:[e.jsx(R,{onClick:n,children:"MOB"}),e.jsxs(I,{children:[e.jsx(f,{to:"/home",end:!0,children:"Home"}),e.jsx(f,{to:t?"/table/active-table":"#",style:{pointerEvents:t?"auto":"none",opacity:t?1:.5,color:t?"var(--white)":"#ccc"},children:"Table"}),e.jsx(f,{to:"/user-profile",children:"Profile"})]}),e.jsx("button",{onClick:o,children:e.jsx(F,{children:e.jsx("use",{href:"/salary-front-end/assets/symbol-defs.svg#icon-letter"})})}),e.jsx(X,{})]})},_=({onClick:t})=>e.jsx(H,{onClick:t}),ee=({children:t})=>{const s=u(),n=a(y),o=a(k),[i,c]=l.useState(!1);l.useEffect(()=>{if(n)c(!0);else{const r=setTimeout(()=>{c(!1)},300);return()=>clearTimeout(r)}},[n,t]),l.useEffect(()=>(i?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[i]);const d=()=>{c(!1),setTimeout(()=>{s(j())},300)};return l.useEffect(()=>{const r=m=>{m.key==="Escape"&&(c(!1),setTimeout(()=>{s(j())},300))};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[s]),!n&&!i?null:e.jsxs(e.Fragment,{children:[e.jsx(_,{onClick:d}),e.jsxs(P,{$showContent:i,$type:o,children:[o!=="lastClosedTable"&&e.jsxs(N,{children:[e.jsx("h2",{children:"Settings"}),e.jsx("button",{onClick:d,children:e.jsx("svg",{children:e.jsx("use",{href:"/salary-front-end/assets/symbol-defs.svg#icon-close-x"})})})]}),t]})]})},te=()=>{const t=u(),s=a(T),n=async o=>{o.preventDefault();const i=o.currentTarget,c=new FormData(i),d=c.get("start")||"",r=c.get("end")||"";if(!d||!r){x.error("The form is not filled out");return}if(new Date(r)<new Date(d)){x.error("End date cannot be earlier than start date");return}const m={userName:s==null?void 0:s.name,startVacation:d,endVacation:r};try{await t(U(m)),i.reset(),x.success("Request sent")}catch(C){console.error(C),x.error("Error")}};return e.jsxs(z,{children:[e.jsx(A,{children:"Enter vacation date"}),e.jsxs("form",{onSubmit:n,children:[e.jsxs(V,{children:[e.jsx("label",{htmlFor:"start",children:"Start vacation"}),e.jsx("input",{id:"start",name:"start",type:"date"}),e.jsx("label",{htmlFor:"end",children:"End vacation"}),e.jsx("input",{id:"end",name:"end",type:"date"})]}),e.jsx("button",{type:"submit",children:"Sent"})]})]})},se=()=>{const t=a(w);return e.jsx(q,{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(v,{to:"/home",children:"Home"})}),e.jsx("li",{children:e.jsx(v,{to:t?"/table/active-table":"#",children:"Table"})})]})})},ne=()=>{var s;const t=a(J);return e.jsxs(W,{children:[e.jsx("thead",{children:t&&e.jsx(g,{children:e.jsx(Y,{colSpan:4,children:t.title})})}),e.jsx("tbody",{children:(s=t==null?void 0:t.workSession)==null?void 0:s.map((n,o)=>e.jsxs(g,{children:[e.jsx(h,{children:n.date.split("T")[0].split("-")[2]}),e.jsx(h,{children:n.checkIn.split("T")[1].split(":").slice(0,2).join(":")}),e.jsx(h,{children:n.checkOut.split("T")[1].split(":").slice(0,2).join(":")}),e.jsx(h,{children:n.duration.toFixed(2)})]},n.date||o))}),e.jsx("tfoot",{children:e.jsx(g,{children:e.jsx(h,{colSpan:3,children:"Total work hours"})})})]})},oe=b.div`
  margin: 0 auto;
  width: 400px;
  height: 200px;
  > h2 {
    font-size: 2em;
    text-align: center;
    color: var(--white);
  }
`,re=b.div`
  min-width: 300px;
  max-width: 400px;
  min-height: 200px;
  max-height: 300px;
  display: flex;
  justify-content: space-around;
  > button {
    width: 80px;
    height: 30px;
    border: 1px solid var(--pink);
    border-radius: 15px;
    background-color: var(--pink);
    color: var(--white);
    transition: box-shadow 0.3s ease-in-out;
    &:hover,
    &:active {
      box-shadow: 0px 9px 30px -4px var(--pink);
    }
  }
`,ae=()=>{const t=u(),s=()=>{t(E()),t(M()),t(j())},n=()=>{t(j())};return e.jsxs(oe,{children:[e.jsx("h2",{children:"You want to logout?"}),e.jsxs(re,{children:[e.jsx("button",{onClick:s,children:"YES"}),e.jsx("button",{style:{background:"transparent"},onClick:n,children:"CANCEL"})]})]})},pe=()=>{const t=a(y),s=a(k);return l.useEffect(()=>{const n=()=>{const o=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${o}px`)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e.jsxs(e.Fragment,{children:[e.jsx(Z,{}),e.jsx(l.Suspense,{children:e.jsxs(Q,{children:[t&&G.createPortal(e.jsxs(ee,{children:[s==="settings"&&e.jsx(K,{}),s==="logout"&&e.jsx(ae,{}),s==="message"&&e.jsx(te,{}),s==="burgerMenu"&&e.jsx(se,{}),s==="lastClosedTable"&&e.jsx(ne,{})]}),document.body),e.jsx(S,{})]})})]})};export{pe as default};
