import{s as o,r as p,j as t,o as m,u as f,V as h,T as c}from"./index-0590a65e.js";import{H as g,F as j}from"./Footer-5cb7fba9.js";import{M as u}from"./Main-9a32de79.js";import{J as y,a as l}from"./CommonTrail-c3b27c7a.js";import{B as x}from"./Box-ee65d293.js";import"./Container-e19623d7.js";const b="/ego-tst/assets/profile-bg-53384b5c.jpg",v=o.div`
  background: url(${b}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,w=o.div`
  border-radius: 50%;
  height: 80px;
  width: 80px;
  background-color: #000;
`,k=o.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;o.div``;o.div``;const S=({front:e,back:i})=>{const[r,a]=p.useState(!1),{transform:s,opacity:d}=y({opacity:r?1:0,transform:`perspective(600px) rotateX(${r?180:0}deg)`,config:{mass:5,tension:500,friction:80}});return t.jsx(t.Fragment,{children:r?t.jsx(l.div,{style:{maxWidth:"400px",width:"100%",opacity:d,transform:s.to(n=>`${n} rotateX(180deg)`)},children:t.jsx(x,{onClick:()=>a(!r),sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"400px",maxWidth:"400px",width:"100%",backgroundColor:"#000",borderRadius:"10px",boxShadow:"0 0 10px 0 rgba(0, 0, 0, 0.2)",cursor:"pointer",transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.05)"}},children:i})}):t.jsx(l.div,{style:{maxWidth:"400px",width:"100%",opacity:d.to(n=>1-n),transform:s},children:t.jsx(x,{onClick:()=>a(!r),sx:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"400px",maxWidth:"400px",width:"100%",backgroundColor:"#fff",borderRadius:"10px",boxShadow:"0 0 10px 0 rgba(0, 0, 0, 0.2)",cursor:"pointer",transition:"transform 0.3s ease-in-out","&:hover":{transform:"scale(1.05)"}},children:e})})})},z=()=>{const e=m(r=>r.user.user),{t:i}=f(["profile"]);return t.jsxs(v,{children:[t.jsx(g,{}),t.jsx(u,{style:{display:"grid",placeItems:"center"},children:t.jsx(S,{front:t.jsxs(t.Fragment,{children:[t.jsx(w,{children:t.jsx(k,{src:e==null?void 0:e.avatar,alt:`${e==null?void 0:e.name} profile avatar`})}),t.jsxs(h,{children:[e==null?void 0:e.name," ",i("hidden.avatar",{ns:["profile"]})]})]}),back:t.jsxs(t.Fragment,{children:[t.jsx(c,{variant:"body1",sx:{color:"#fff",textAlign:"center",fontSize:"1.5rem",fontWeight:700,marginBottom:"20px"},children:e==null?void 0:e.name}),t.jsx(c,{variant:"body1",sx:{color:"#fff",textAlign:"center",fontSize:"1.5rem",fontWeight:700,marginBottom:"20px",wordBreak:"break-word"},children:e==null?void 0:e.email})]})})}),t.jsx(j,{})]})};export{z as default};
