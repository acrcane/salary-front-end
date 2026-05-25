import{u as d,a as r,j as e,g as f,y as l,h as g,d as S,i as I,k as w,o as T,l as D,r as x,s as O,m as y}from"./index-DAqPC0Xy.js";import{o as v,p as $,q as M,r as E,s as Y,t as A,u as H,E as L,v as G,w as _,x as q,y as z,z as B,G as F}from"./CustomCalendar.styled-Cstl2xMc.js";import{s as C}from"./selectors-BKzC1wDG.js";import{a as P}from"./selectors-qmLL3Sou.js";import{d as j}from"./styled-components.browser.esm-HoKeCn4C.js";const R=()=>{const n=d(),t=r(C),i=()=>{n(f()).unwrap().catch(o=>{(o==null?void 0:o.message)==="You already have an open table"?l.warning("Table already exists"):l.error("Can't create table")})},a=()=>{n(g(t)),n(S())};return e.jsxs(v,{children:[e.jsx($,{onClick:i,children:"Create table"}),e.jsx(M,{onClick:a,children:"Close table"})]})},U=n=>n.workSession.sessionId,W=()=>{const n=d(),t=r(U),i=r(C),a=()=>{const c=new Date().toISOString();if(t){l.error("You need to check out first");return}n(I({checkIn:c,tableId:i}))},o=()=>{const c=new Date().toISOString();t||l.error("You need to check in first"),n(w({checkOut:c,sessionId:t}))};return e.jsxs(E,{children:[e.jsx(Y,{onClick:a,children:"Check In"}),e.jsx(A,{onClick:o,children:"Check Out"})]})},J=({allUsers:n})=>{const t=d(),i=a=>{t(T("lastClosedTable")),t(D(a))};return e.jsx(H,{children:n==null?void 0:n.filter(a=>a.role==="assistent").map(a=>e.jsx(L,{children:e.jsx("button",{onClick:()=>i(a._id),children:a.name})},a._id))})},K=({value:n,onChange:t,minDate:i,maxDate:a})=>{const[o,c]=x.useState(n||new Date),m=G(o),h=s=>{c(new Date(o.getFullYear(),o.getMonth()+s,1))},u=s=>!!(i&&s<i||a&&s>a),b=s=>{u(s)||(c(s),t==null||t(s))};return e.jsxs(_,{children:[e.jsxs(q,{children:[e.jsx("button",{onClick:()=>h(-1),children:"<"}),e.jsx("h2",{children:o.toLocaleDateString("en-US",{month:"long"})}),e.jsx("button",{onClick:()=>h(1),children:">"})]}),e.jsx(z,{children:m.map(s=>{const p=u(s.date),k=B(s.date,o);return e.jsx(F,{$otherMonth:!s.isCurrentMonth,$today:s.isToday,$selected:k,$disabled:p,$holiday:s.isHoliday,$sunday:s.isSunday,onClick:p?void 0:()=>b(s.date),children:s.date.getDate()},s.date.toISOString())})})]})},N=j.section`
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
`;j.aside`
display: block;
max-width: fit-content;
`;const te=()=>{const n=d(),t=r(O),i=r(P);return x.useEffect(()=>{(t==null?void 0:t.role)==="manager"&&n(y())},[n,t]),e.jsxs(N,{children:[e.jsx("div",{children:e.jsx(K,{})}),(t==null?void 0:t.role)==="manager"?e.jsx("div",{children:e.jsx(J,{allUsers:i})}):e.jsxs("div",{children:[e.jsx(R,{}),e.jsx(W,{})]})]})};export{te as default};
