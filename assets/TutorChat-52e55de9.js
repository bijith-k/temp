import{r as s,u as y,b as C,j as i,c as e,d as b,F as k,e as R}from"./index-75e0cb1c.js";import{f as L,l as D,C as O,M as B}from"./MessageSkeleton-48d70a0a.js";import{N as H,F as V}from"./Footer-9eebb72f.js";import{u as T}from"./user-4891dc53.js";import"./index.esm-ed29fecc.js";import"./index.esm-21486a75.js";import"./index.esm-b2e70fb2.js";import"./logoWhite-701db893.js";const W=({message:r,own:n,sendBy:g})=>{var d;const[a,S]=s.useState([]),m=y(),f=C();return s.useEffect(()=>{g&&(async()=>{try{const o=await b("Ttoken").get(`tutor/get-students?id=${g}`);o.data.status==!1?(localStorage.removeItem("Ttoken"),m("/tutor")):S(o.data)}catch(o){console.log(o),f({title:o.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}})()},[]),i("div",{className:`flex flex-col mt-5 ${n?"items-end":null}`,children:[i("div",{className:" flex",children:[e("img",{src:(d=a[0])!=null&&d.profilePicture?`http://localhost:4000/${a[0].profilePicture}`:T,alt:"",className:`w-8 h-8 rounded-full object-cover mr-3 ${n?"hidden":null}`}),e("p",{className:`p-3 rounded-3xl ${n?"bg-blue-200 text-black":"bg-blue-500 text-white"}  max-w-xs`,children:r.text})]}),e("div",{className:"text-xs mt-3",children:L(r.createdAt)})]})},Y=({conversation:r,currentUser:n})=>{const[g,a]=s.useState([]),[S,m]=s.useState(null),f=y(),d=C();s.useEffect(()=>{const o=r.members.find(c=>c!==n._id);(async()=>{try{const c=await b("Ttoken").get(`tutor/get-students?id=${o}`);c.data.status==!1?(localStorage.removeItem("Ttoken"),f("/tutor")):a(c.data)}catch(c){console.log(c),d({title:c.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}})()},[n,r]);const x=o=>{m(u=>(console.log(u,"pp"),u===o?(console.log(u,o,"pre"),null):o))};return e(k,{children:g.map((o,u)=>i("div",{onClick:()=>x(o._id),className:"flex items-center p-3 cursor-pointer hover:bg-gray-200  mt-5",children:[e("img",{src:o.profilePicture?`http://localhost:4000/${o.profilePicture}`:T,alt:"",className:"w-10 h-10 rounded-full object-cover mr-5"}),e("span",{className:"font-medium",children:o.name})]},u))})},Z=()=>{var E,M;const{tutor:r}=R(t=>t.tutor),[n,g]=s.useState([]),[a,S]=s.useState(null),[m,f]=s.useState([]),[d,x]=s.useState(""),[o,u]=s.useState(null),[c,j]=s.useState([]),h=y(),v=C(),w=s.useRef(),$=s.useRef(),[P,I]=s.useState(!0),[A,_]=s.useState(!0);s.useEffect(()=>{r.approved==!1&&r.rejected==!1?h("/tutor/approval-pending"):r.rejected?h("/tutor/approval-rejected"):r.blocked&&(localStorage.removeItem("Ttoken"),h("/tutor"),v({title:"Blocked",description:"Your account is blocked by the admin",status:"error",duration:5e3,isClosable:!0,position:"top"}))},[]),s.useEffect(()=>{w.current=D("http://localhost:4000/"),w.current.emit("add-user",r._id)},[r]),s.useEffect(()=>{(async()=>{try{const l=await b("Ttoken").get(`tutor/get-conversation/${r._id}`);l.data.status==!1?(v({title:l.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"}),localStorage.removeItem("Ttoken"),h("/tutor")):(g(l.data),I(!1))}catch(l){I(!1),v({title:l.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}})()},[r._id]),s.useEffect(()=>{(async()=>{try{const l=await b("Ttoken").get(`tutor/get-message/${a==null?void 0:a._id}`);l.data.status==!1?(localStorage.removeItem("Ttoken"),h("/tutor")):(f(l.data),_(!1))}catch(l){_(!1),v({title:l.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}})()},[a]);const F=async t=>{if(t.preventDefault(),!d)return;const l={sender:r._id,text:d,conversationId:a._id},p=a.members.find(N=>N!==r._id);w.current.emit("send-msg",{senderId:r._id,receiverId:p,text:d});try{const N=await b("Ttoken").post("tutor/new-message",l);f([...m,N.data]),x("")}catch(N){console.log(N)}};return s.useEffect(()=>{const t=a==null?void 0:a.members.find(l=>l!==r._id);t&&(async()=>{try{const p=await b("Ttoken").get(`tutor/get-students?id=${t}`);p.data.status==!1?(localStorage.removeItem("Ttoken"),h("/tutor")):j(p.data)}catch(p){v({title:p.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}})()},[a]),s.useEffect(()=>{w.current&&(console.log("first"),w.current.on("msg-receive",t=>{console.log(t,"dataa"),u({sender:t.senderId,text:t.text,createdAt:Date.now()})}))},[]),s.useEffect(()=>{o&&(a!=null&&a.members.includes(o.sender))&&f(t=>[...t,o])},[o,a]),s.useEffect(()=>{var t;(t=$.current)==null||t.scrollIntoView({behavior:"smooth"})},[m]),i("div",{className:"bg-gray-400 min-h-screen max-w-screen-2xl mx-auto w-full overflow-x-hidden flex flex-col",children:[e(H,{}),e("div",{className:"bg-gray-600 uppercase border-b-2 border-white h-14 text-center text-white font-bold text-xl pt-3",children:"CHATS"}),P?e(O,{}):i("div",{className:"flex-grow md:h-96 flex flex-col md:flex-row",children:[i("div",{className:" flex flex-col bg-gray-400 overflow-y-auto scrollbar-track-transparent scrollbar-thin scrollbar-thumb-slate-200 ",children:[e("p",{className:"font-bold border-b-2 p-3 text-center text-lg",children:"Recent conversations"}),(n==null?void 0:n.length)>0?e("div",{children:n.map(t=>e("div",{className:"",onClick:()=>S(t),children:e(Y,{conversation:t,currentUser:r})}))}):i("div",{className:"my-10",children:[e("p",{className:"font-semibold text-center text-white shadow-sm cursor-default",children:"There is no conversations"})," "]})]}),e("div",{className:"flex-grow bg-slate-500",children:e("div",{className:"flex flex-col h-full  border-l-0 md:border-l-4 border-0",children:a?i(k,{children:[i("div",{className:"w-full h-20 bg-gray-700 flex flex-row items-center justify-start",children:[e("div",{className:"mx-4  border-white border-2  rounded-full",children:e("img",{src:(E=c[0])!=null&&E.profilePicture?`http://localhost:4000/${c[0].profilePicture}`:T,className:"rounded-full w-10 h-10 ",alt:"img"})}),e("div",{children:e("p",{className:"font-semibold text-lg text-white",children:(M=c[0])==null?void 0:M.name})})]}),A?e(B,{}):i(k,{children:[e("div",{id:"chatbox top",className:"p-3 h-96 flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent",children:m.map((t,l)=>e("div",{ref:$,children:e(W,{message:t,sendBy:t.sender!=r._id?t.sender:null,own:t.sender===r._id})},l))}),i("div",{className:"mt-1 w-full flex items-center justify-center",children:[e("textarea",{placeholder:"Write something",className:"w-10/12 h-12 p-3 scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300",onChange:t=>x(t.target.value),value:d}),e("button",{className:"w-2/12 h-12 border-none cursor-pointer bg-teal-800 text-white",onClick:F,children:"Send"})]})]})]}):e("span",{className:"text-center font-bold text-xl my-20 text-white",children:"Open a conversation to chat"})})})]}),e("div",{children:e(V,{})})]})};export{Z as default};
