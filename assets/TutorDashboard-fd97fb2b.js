import{e as g,u as v,r as l,b,d,j as t,c as s,S as n}from"./index-75e0cb1c.js";import{u as N}from"./user-4891dc53.js";import{N as y,F as C}from"./Footer-9eebb72f.js";import"./index.esm-ed29fecc.js";import"./index.esm-21486a75.js";import"./index.esm-b2e70fb2.js";import"./logoWhite-701db893.js";const B=()=>{const{tutor:o}=g(e=>e.tutor),a=v(),[u,m]=l.useState(0),[f,h]=l.useState(0),[p,x]=l.useState(0),[r,c]=l.useState(!1),i=b();return l.useEffect(()=>{o.approved==!1&&o.rejected==!1?a("/tutor/approval-pending"):o.rejected?a("/tutor/approval-rejected"):o.blocked&&(localStorage.removeItem("Ttoken"),a("/tutor"),i({title:"Blocked",description:"Your account is blocked by the admin",status:"error",duration:5e3,isClosable:!0,position:"top"}))},[]),l.useEffect(()=>{d("Ttoken").get(`tutor/uploaded-notes?id=${!0}`).then(e=>{e.data.status==!1?(i({title:e.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"}),localStorage.removeItem("Ttoken"),a("/tutor")):(m(e.data.length),c(!0))}).catch(e=>{c(!0),console.log(e),i({title:e.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}),d("Ttoken").get(`tutor/uploaded-questions?id=${!0}`).then(e=>{e.data.status==!1?(localStorage.removeItem("Ttoken"),a("/tutor")):h(e.data.length)}).catch(e=>{console.log(e),i({title:e.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}),d("Ttoken").get(`tutor/uploaded-videos?id=${!0}`).then(e=>{e.data.status==!1?(localStorage.removeItem("Ttoken"),a("/tutor")):x(e.data.length)}).catch(e=>{console.log(e),i({title:e.message,status:"error",duration:5e3,isClosable:!0,position:"top"})})},[]),t("div",{className:"bg-slate-400 min-h-screen max-w-screen-2xl mx-auto w-full overflow-x-hidden",children:[s(y,{}),t("div",{className:" w-full",children:[t("div",{className:"bg-gray-200 h-72 flex flex-col justify-center items-center text-center md:justify-center uppercase ",children:[s("span",{className:"text-2xl font-bold text-[#0B2447]",children:"It's the teacher that makes the difference, not the classroom"}),t("span",{className:"text-xl font-semibold border-b-2 mt-3",children:[s("span",{className:"text-[#576CBC]",children:"happy"})," teaching"," ",s("span",{className:"text-[#576CBC]",children:o.name})]})]}),s("div",{children:t("div",{className:"p-8 bg-gray-50 shadow",children:[" ",t("div",{className:"grid grid-cols-1 ",children:[t("div",{className:"relative",children:[" ",s("div",{className:"w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500",children:s("img",{src:o.profilePicture?`http://localhost:4000/${o.profilePicture}`:N,alt:"",className:"h-48 w-48 rounded-full"})})," "]})," "]})," ",t("div",{className:"mt-28 text-center border-b pb-12 ",children:[" ",s("h1",{className:"text-4xl font-medium text-gray-700",children:o.name})," ",t("button",{className:"text-indigo-500 py-2 px-4  font-medium mt-4 uppercase",onClick:()=>a("/tutor/edit-profile"),children:[" ","click to update your profile informations"]})," "]})," ",t("div",{className:" flex flex-col md:flex-row justify-center md:justify-around items-center pt-5 uppercase",children:[t("div",{className:"bg-gray-200 w-72 h-28 md:w-72 md:h-32 rounded-xl p-5 my-3 text-center flex flex-col justify-center",children:[s("div",{className:"text-xl font-bold",children:"your notes"}),t("div",{className:"font-semibold",children:["uploaded :"," ",s(n,{className:"inline",isLoaded:r,children:u})]})]}),t("div",{className:"bg-gray-200 w-72 h-28 md:w-72 md:h-32 rounded-xl p-5 my-3 text-center flex flex-col justify-center",children:[s("div",{className:"text-xl font-bold",children:"your question papers"}),t("div",{className:"font-semibold",children:["uploaded :"," ",s(n,{className:"inline",isLoaded:r,children:f})]})]}),t("div",{className:"bg-gray-200 w-72 h-28 md:w-72 md:h-32 rounded-xl p-5 my-3 text-center flex flex-col justify-center",children:[s("div",{className:"text-xl font-bold",children:"your videos"}),t("div",{className:"font-semibold",children:["uploaded :"," ",s(n,{className:"inline",isLoaded:r,children:p})]})]})]}),t("div",{className:" flex flex-col justify-center",children:[t("button",{className:"text-indigo-500 py-2 px-4  font-medium mt-4 uppercase",onClick:()=>a("/tutor/uploads"),children:[" ","view your uploads"]})," "]})]})})]}),s("div",{children:s(C,{})})]})};export{B as default};
