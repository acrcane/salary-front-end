import{u as l,a as r,j as e,g as f,y as p,h as g,d as S,i as I,k as w,o as T,l as D,r as x,s as O,m as y}from"./index-DtXhY7Pd.js";import{q as v,r as $,s as M,t as E,u as A,v as H,w as L,E as G,x as Y,y as _,z as q,G as z,J as B,K as F}from"./LogoutConfirm.styled-8EvuRg3i.js";import{s as C}from"./selectors-BKzC1wDG.js";import{a as J}from"./selectors-qmLL3Sou.js";import"./UserMenu.styled-9IPEOeN8.js";import{d as m}from"./styled-components.browser.esm-CSTz_zm3.js";const K=()=>{const n=l(),t=r(C),i=()=>{n(f()).unwrap().catch(o=>{(o==null?void 0:o.message)==="You already have an open table"?p.warning("Table already exists"):p.error("Can't create table")})},a=()=>{n(g(t)),n(S())};return e.jsxs(v,{children:[e.jsx($,{onClick:i,children:"Create table"}),e.jsx(M,{onClick:a,children:"Close table"})]})},P=n=>n.workSession.sessionId,R=()=>{const n=l(),t=r(P),i=r(C),a=()=>{const c=new Date().toISOString();n(I({checkIn:c,tableId:i}))},o=()=>{const c=new Date().toISOString();n(w({checkOut:c,sessionId:t}))};return e.jsxs(E,{children:[e.jsx(A,{onClick:a,children:"Check In"}),e.jsx(H,{onClick:o,children:"Check Out"})]})},U=({allUsers:n})=>{const t=l(),i=a=>{t(T("lastClosedTable")),t(D(a))};return e.jsx(L,{children:n==null?void 0:n.filter(a=>a.role==="assistent").map(a=>e.jsx(G,{children:e.jsx("button",{onClick:()=>i(a._id),children:a.name})},a._id))})},W=({value:n,onChange:t,minDate:i,maxDate:a})=>{const[o,c]=x.useState(n||new Date),j=Y(o),d=s=>{c(new Date(o.getFullYear(),o.getMonth()+s,1))},h=s=>!!(i&&s<i||a&&s>a),b=s=>{h(s)||(c(s),t==null||t(s))};return e.jsxs(_,{children:[e.jsxs(q,{children:[e.jsx("button",{onClick:()=>d(-1),children:"<"}),e.jsx("h2",{children:o.toLocaleDateString("en-US",{month:"long"})}),e.jsx("button",{onClick:()=>d(1),children:">"})]}),e.jsx(z,{children:j.map(s=>{const u=h(s.date),k=B(s.date,o);return e.jsx(F,{$otherMonth:!s.isCurrentMonth,$today:s.isToday,$selected:k,$disabled:u,$holiday:s.isHoliday,$sunday:s.isSunday,onClick:u?void 0:()=>b(s.date),children:s.date.getDate()},s.date.toISOString())})})]})},N=m.section`
width: 100%;
display: flex;
justify-content: space-between;
padding: 0 40px;
gap: 50px;
background-color: transparent;
> div{
    margin: 50px auto;
}
@media (max-width: 1024px) {
    flex-direction: column;
    padding: 0;
    justify-content: center;
}
`;m.aside`
display: block;
max-width: fit-content;
`;const se=()=>{const n=l(),t=r(O),i=r(J);return x.useEffect(()=>{(t==null?void 0:t.role)==="manager"&&n(y())},[n,t]),e.jsxs(N,{children:[e.jsx("div",{children:e.jsx(W,{})}),(t==null?void 0:t.role)==="manager"?e.jsx("div",{children:e.jsx(U,{allUsers:i})}):e.jsxs("div",{children:[e.jsx(K,{}),e.jsx(R,{})]})]})};export{se as default};
