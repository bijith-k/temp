import{r as c,u as C,b as S,d,j as i,c as t,F as T}from"./index-75e0cb1c.js";import{S as D}from"./Sidebar-33147c50.js";import{T as I,a as $,b as v,c as u,d as o,e as A,f as l}from"./chunk-Z3IFIKNA-83e1cc00.js";import"./index.esm-efe2c39d.js";import"./index.esm-ed29fecc.js";import"./index.esm-b2e70fb2.js";import"./index.esm-90dfe48c.js";import"./index.esm-21486a75.js";const F=()=>{const[h,b]=c.useState([]),n=C(),[g,r]=c.useState(""),s=S();c.useEffect(()=>{d("Adtoken").get("admin/events").then(e=>{e.data.status==!1?(s({title:e.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"}),localStorage.removeItem("Adtoken"),n("/admin")):b(e.data)}).catch(e=>{console.log(e),s({title:e.message,status:"error",duration:5e3,isClosable:!0,position:"top"})})},[g]);function m(e){const[a,E]=e.split("T"),[k,w,x]=a.split("-");return`${x}-${w}-${k.slice(-2)}`}const N=e=>{d("Adtoken").get(`admin/approve-events?event=${e}`).then(a=>{a.data.status==!1?(s({title:a.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"}),localStorage.removeItem("Adtoken"),n("/admin")):(r(`Clicked at ${new Date().toISOString()}`),s({title:a.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}))}).catch(a=>{console.log(a),r(`Clicked at ${new Date().toISOString()}`),s({title:a.message,status:"error",duration:5e3,isClosable:!0,position:"top"})})},f=e=>{d("Adtoken").get(`admin/reject-events?event=${e}`).then(a=>{a.data.status==!1?(s({title:a.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"}),localStorage.removeItem("Adtoken"),n("/admin")):(r(`Clicked at ${new Date().toISOString()}`),s({title:a.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}))}).catch(a=>{console.log(a),r(`Clicked at ${new Date().toISOString()}`),s({title:a.message,status:"error",duration:5e3,isClosable:!0,position:"top"})})},p=e=>{d("Adtoken").get(`admin/event-list-unlist?event=${e}`).then(a=>{a.data.status==!1?(s({title:a.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"}),localStorage.removeItem("Adtoken"),n("/admin")):(r(`Clicked at ${new Date().toISOString()}`),s({title:a.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}))}).catch(a=>{console.log(a),r(`Clicked at ${new Date().toISOString()}`),s({title:a.message,status:"error",duration:5e3,isClosable:!0,position:"top"})})};return i("div",{className:"bg-sky-900 min-h-screen max-w-screen-2xl mx-auto flex overflow-x-hidden",children:[t("div",{className:"bg-dark-purple",children:t(D,{})}),i("div",{className:"w-full  overflow-clip",children:[t("p",{className:"bg-white w-full p-3 my-5 uppercase font-bold text-center",children:"manage events"}),t(I,{className:"rounded-2xl mt-3",children:i($,{variant:"simple",children:[t(v,{children:i(u,{className:"bg-green-300 h-14",children:[t(o,{className:"p-3 border",children:"No"}),t(o,{className:"p-3 border",children:"Name of event"}),t(o,{className:"p-3 border",children:"Organizer"}),t(o,{className:"p-3 border",children:"Location"}),t(o,{className:"p-3 border",children:"Description"}),t(o,{className:"p-3 border",children:"Starting Date"}),t(o,{className:"p-3 border",children:"Ending Date"}),t(o,{className:"p-3 border",children:"Link"}),t(o,{className:"p-3 border",children:"Contact"}),t(o,{className:"p-3 border",children:"Actions"})]})}),t(A,{className:"text-center",children:h.map((e,a)=>i(u,{className:"bg-white uppercase",children:[t(l,{className:"border",children:a+1}),t(l,{className:"border",children:e.name}),t(l,{className:"border",children:e.organizer}),t(l,{className:"border",children:e.location}),t(l,{className:"border",children:e.description}),t(l,{className:"border",children:m(e.startingDate)}),t(l,{className:"border",children:m(e.endingDate)}),t(l,{className:"lowercase border",children:t("button",{className:"bg-sky-900 font-semibold text-white m-2 w-22 p-2 rounded-xl",children:t("a",{href:e.link,target:"_blank",children:"Click"})})}),t(l,{children:e.contact}),i(l,{className:"border flex justify-start",children:[t("button",{className:"bg-sky-900 font-semibold text-white m-2 w-28 p-2 rounded-xl",children:t("a",{href:`http://localhost:4000/${e.poster}`,target:"_blank",children:"VIEW POSTER"})}),e.approved?t(T,{children:e.listed?t("button",{className:"bg-gray-600 font-semibold text-white m-2 w-22 p-2 rounded-xl",onClick:()=>p(e._id),children:"UNLIST"}):t("button",{className:"bg-blue-400 font-semibold text-white m-2 w-22 p-2 rounded-xl",onClick:()=>p(e._id),children:"LIST"})}):null,!e.approved&&!e.rejected?t("button",{className:"bg-green-500 font-semibold text-white m-2 w-22 p-2 rounded-xl",onClick:()=>N(e._id),children:"APPROVE"}):null,!e.approved&&!e.rejected?t("button",{className:"bg-red-500 font-semibold text-white m-2 w-22 p-2 rounded-xl",onClick:()=>f(e._id),children:"REJECT"}):null]})]},a))})]})})]})]})};export{F as default};
