import{u as i,j as s,g as h,h as p,d as C,a as r,i as k,k as m,l as x,m as j,n as u,s as b,r as g,p as I}from"./index-BViHvteI.js";import{d as f,e as S,f as O,g as T,h as E,i as w,j as D,E as y,k as A}from"./MyCalendar-DAmBM3oc.js";import{a as P}from"./selectors-BKzC1wDG.js";import{d as R}from"./styled-components.browser.esm-rCY-D9aD.js";const d=()=>{const e=localStorage.getItem("persist:tables"),t=JSON.parse(e);return JSON.parse(t.tableId)},W=()=>{const e=i(),t=()=>{e(h())},a=()=>{const n=d();e(p(n)),e(C())};return s.jsxs(f,{children:[s.jsx(S,{onClick:t,children:"Create table"}),s.jsx(O,{onClick:a,children:"Close table"})]})},_=e=>e.workSession.workSession.checkIn,J=()=>{const e=i(),t=r(_),a=()=>{const o=new Date().toISOString();e(k(o))},n=()=>{const o=new Date().toISOString(),c=d();e(m(c)),e(x(o)),e(j({checkIn:t,tableId:c,checkOut:o}))};return s.jsxs(T,{children:[s.jsx(E,{onClick:a,children:"Check In"}),s.jsx(w,{onClick:n,children:"Check Out"})]})},M=({allUsers:e})=>{i();const{id:t}=u();r(P);const a=n=>{const o=e.find(c=>c._id===n);console.log(o)};return s.jsx(D,{children:e==null?void 0:e.filter(n=>n.role==="assistent").map(n=>s.jsx(y,{children:s.jsx("button",{onClick:()=>a(n._id),children:n.name})},n._id))})},l=R.main`
display: flex;
padding: 0 40px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 50px;
background-color: transparent;
`,N=e=>e.manager.users,H=()=>{const e=i(),t=r(b),a=r(N);return g.useEffect(()=>{(t==null?void 0:t.role)==="manager"&&e(I())},[e,t]),s.jsxs(s.Fragment,{children:[(t==null?void 0:t.role)==="manager"?s.jsx(l,{children:s.jsx(M,{allUsers:a})}):s.jsxs(l,{children:[s.jsx(W,{}),s.jsx(J,{})]}),s.jsx(l,{children:s.jsx(A,{})})]})};export{H as default};
