import{u as x,a as r,j as e,g as w,y as m,h as I,i as D,d as T,k as O,o as y,l as v,r as u,s as M,m as $}from"./index-BXt1eg0v.js";import{t as h,u as E,v as A,w as b,x as H,y as L,E as Y,z as F,G,J as P,K as _,O as z,Q as J}from"./LogoutConfirm.styled-CU1qx8pg.js";import{s as K}from"./selectors-BKzC1wDG.js";import{a as Q}from"./selectors-qmLL3Sou.js";import"./UserMenu.styled-qdGavqGB.js";import{d as k}from"./styled-components.browser.esm-y-7Easz0.js";const R=s=>s.workSession.sessionId,U=()=>{const s=x(),a=r(R),i=r(K),n=()=>{s(w()).unwrap().catch(l=>{(l==null?void 0:l.message)==="You already have an open table"?m.warning("Table already exists"):m.error("Can't create table")})},c=async()=>{await s(D(i)).unwrap(),s(T())},d=()=>{const l=new Date().toISOString();s(I({checkIn:l,tableId:i}))},o=()=>{const l=new Date().toISOString();s(O({checkOut:l,sessionId:a}))};return i?a?e.jsxs(h,{children:[e.jsx(H,{onClick:o,children:"Check Out"}),e.jsx("button",{children:"Pause"}),e.jsx(b,{onClick:c,children:"Close tabel"})]}):e.jsxs(h,{children:[e.jsx(A,{onClick:d,children:"Check In"}),e.jsx(b,{onClick:c,children:"Close tabel"})]}):e.jsx(h,{children:e.jsx(E,{onClick:n,children:"Create tabel"})})},W=({allUsers:s})=>{const a=x(),i=n=>{a(y("lastClosedTable")),a(v(n))};return e.jsx(L,{children:s==null?void 0:s.filter(n=>n.role==="assistent").map(n=>e.jsx(Y,{children:e.jsx("button",{onClick:()=>i(n._id),children:n.name})},n._id))})},q=({value:s,onChange:a,minDate:i,maxDate:n})=>{const[c,d]=u.useState(s||new Date),[o,l]=u.useState(s||null),f=F(c),p=t=>{d(new Date(c.getFullYear(),c.getMonth()+t,1))},C=t=>!!(i&&t<i||n&&t>n),S=t=>{C(t)||(l(t),a==null||a(t))};return e.jsxs(G,{children:[e.jsxs(P,{children:[e.jsx("button",{onClick:()=>p(-1),children:"<"}),e.jsxs("h2",{children:[c.toLocaleDateString("en-US",{month:"long"}),e.jsx("span",{children:c.getFullYear()})]}),e.jsx("button",{onClick:()=>p(1),children:">"})]}),e.jsx(_,{children:f.map(t=>{const j=C(t.date),g=o?z(t.date,o):!1;return e.jsx(J,{$otherMonth:!t.isCurrentMonth,$today:t.isToday,$selected:g,$disabled:j,$holiday:t.isHoliday,$sunday:t.isSunday,onClick:j?void 0:()=>S(t.date),children:t.date.getDate()},t.date.toISOString())})})]})},B=k.section`
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
`;k.aside`
display: block;
max-width: fit-content;
`;const se=()=>{const s=x(),a=r(M),i=r(Q);return u.useEffect(()=>{(a==null?void 0:a.role)==="manager"&&s($())},[s,a]),e.jsxs(B,{children:[e.jsx("div",{children:e.jsx(q,{})}),(a==null?void 0:a.role)==="manager"?e.jsx("div",{children:e.jsx(W,{allUsers:i})}):e.jsx("div",{children:e.jsx(U,{})})]})};export{se as default};
