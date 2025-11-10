import{r as i,u as d,j as e,o as u,a,c as l,s as m,b as j,d as b,O as f}from"./index-BViHvteI.js";import{d as o}from"./styled-components.browser.esm-rCY-D9aD.js";import{P as C,A as k,T as v,I as w,C as T,L as p,B as M,M as y,H as O}from"./MyCalendar-DAmBM3oc.js";import{s as S}from"./selectors-BKzC1wDG.js";const E=o.main`
    /* padding: 0 12px; */
    width: 100%;
    min-height: calc(var(--vh, 1vh) * 100 - 80px);
    background-image: url('/images/background/assets-cached.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
`,L=()=>{const n=i.useRef(null),s=d(),t=()=>{s(u("settings"))},r=()=>{s(u("logout"))};return e.jsx(e.Fragment,{children:e.jsx(C,{ref:n,trigger:e.jsx(v,{children:e.jsx(w,{children:e.jsx("use",{href:"/assets/symbol-defs.svg#icon-settings"})})}),on:"click",position:"bottom right",closeOnDocumentClick:"true",arrow:"false",children:e.jsxs(k,{children:[e.jsx("button",{onClick:t,children:"Settings"}),e.jsx("button",{onClick:r,children:"Log Out"})]})})})},I=()=>{const n=a(S);return e.jsxs(T,{children:[e.jsxs("nav",{children:[e.jsx(p,{to:"/home",end:!0,children:"Home"}),e.jsx(p,{to:n?`/table/${n}`:"#",$disabled:!n,onClick:s=>{n||s.preventDefault()},"aria-disabled":!n,tabIndex:n?0:-1,end:!0,children:"Table"})]}),e.jsx(L,{})]})},$=({onClick:n})=>e.jsx(M,{onClick:n}),x=n=>n.modal.isOpenModal,z=n=>n.modal.modalType,B=({children:n})=>{const s=d(),t=a(x),[r,c]=i.useState(!1);i.useEffect(()=>{if(console.log("Modal children:",n),t)c(!0);else{const g=setTimeout(()=>{c(!1)},300);return()=>clearTimeout(g)}},[t,n]);const h=()=>{c(!1),setTimeout(()=>{s(l())},300)};return!t&&!r?null:e.jsxs(e.Fragment,{children:[e.jsx($,{onClick:h}),e.jsxs(y,{$showContent:r,children:[e.jsxs(O,{children:[e.jsx("h2",{children:"Settings"}),e.jsx("button",{onClick:h,children:"X"})]}),n]})]})},H=o.div`
width: 800px;
height: 600px;
padding: 25px;
> h2{
    
}
> span {

}
`;o.h2``;o.div``;o.img``;o.label``;o.input``;const A=()=>{const n=a(m);return e.jsxs(H,{children:[e.jsxs("h2",{children:["Name: ",n.name]}),e.jsxs("span",{children:["Salary per hour: ",n.hourlyRate,"zł"]})," ",e.jsx("br",{}),e.jsxs("span",{children:["User role: ",n.role]})]})},D=o.div`
margin: 0 auto;
width: 400px;
height: 200px;
> h2{
    font-size: 2em;
    text-align: center;
}
`,P=o.div`
min-width: 300px;
max-width: 400px;
min-height: 200px;
max-height: 300px;
display: flex;
justify-content: space-around;
> button{
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 15px;
    background-color: var(--violet);
    color: var(--white);
}
`,R=()=>{const n=d(),s=()=>{n(j()),n(b()),n(l())},t=()=>{n(l())};return e.jsxs(D,{children:[e.jsx("h2",{children:"You want to logout?"}),e.jsxs(P,{children:[e.jsx("button",{onClick:s,children:"YES"}),e.jsx("button",{onClick:t,children:"CANCEL"})]})]})},V=()=>{const n=a(x),s=a(z);return i.useEffect(()=>{const t=()=>{const r=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${r}px`)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),e.jsxs(e.Fragment,{children:[e.jsx(I,{}),e.jsx(i.Suspense,{children:e.jsxs(E,{children:[n&&e.jsxs(B,{children:[s==="settings"&&e.jsx(A,{}),s==="logout"&&e.jsx(R,{})]}),e.jsx(f,{})]})})]})};export{V as default};
