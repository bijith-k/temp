import{u as N,b as f,r as n,d as m,j as t,c as e}from"./index-75e0cb1c.js";import{S as x}from"./Sidebar-33147c50.js";import{T as w,a as S,b as T,c as u,d as l,e as v,f as o}from"./chunk-Z3IFIKNA-83e1cc00.js";import"./index.esm-efe2c39d.js";import"./index.esm-ed29fecc.js";import"./index.esm-b2e70fb2.js";import"./index.esm-90dfe48c.js";import"./index.esm-21486a75.js";const E=()=>{const i=N(),r=f(),[h,p]=n.useState([]),[b,d]=n.useState("");n.useEffect(()=>{m("Adtoken").get("admin/plans").then(a=>{a.data.status==!1?(r({title:a.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"}),localStorage.removeItem("Adtoken"),i("/admin")):p(a.data)}).catch(a=>{console.log(a),r({title:a.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}),localStorage.removeItem("planId")},[b]);const c=a=>{m("Adtoken").get(`admin/plan-list-unlist?plan=${a}`).then(s=>{s.data.status==!1?(r({title:s.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"}),localStorage.removeItem("Adtoken"),i("/admin")):(d(`Clicked at ${new Date().toISOString()}`),r({title:s.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}))}).catch(s=>{console.log(s),d(`Clicked at ${new Date().toISOString()}`),r({title:s.message,status:"success",duration:5e3,isClosable:!0,position:"top"})})},g=a=>{localStorage.setItem("planId",a._id),i("/admin/edit-plans")};return t("div",{className:"bg-sky-900 min-h-screen max-w-screen-2xl mx-auto flex overflow-x-hidden",children:[e("div",{className:"bg-dark-purple",children:e(x,{})}),t("div",{className:"w-full overflow-clip",children:[e("p",{className:"bg-white w-full p-3 my-5 uppercase font-bold text-center",children:"manage plans"}),e("div",{className:"flex justify-around",children:e("div",{className:"bg-green-600 text-white p-2 rounded-2xl flex",children:e("button",{className:"font-bold ",onClick:()=>i("/admin/add-plans"),children:"ADD PLAN"})})}),e(w,{className:"rounded-2xl mt-3",children:t(S,{variant:"simple",children:[e(T,{children:t(u,{className:"bg-green-300 h-14",children:[e(l,{className:"p-3 border",children:"No"}),e(l,{className:"p-3 border",children:"Plan"}),e(l,{className:"p-3 border",children:"Duration(Month)"}),e(l,{className:"p-3 border",children:"Price"}),e(l,{className:"p-3 border",children:"Total Users"}),e(l,{className:"p-3 border text-center",children:"Actions"})]})}),e(v,{className:"text-center",children:h.map((a,s)=>t(u,{className:"bg-white h-16",children:[e(o,{className:"border",children:s+1}),e(o,{className:"border uppercase",children:a.plan}),e(o,{className:"border",children:a.duration}),e(o,{className:"border",children:a.price}),e(o,{className:"border",children:a.used_by.length}),t(o,{className:"border flex justify-center",children:[e("button",{className:"bg-yellow-600 font-semibold text-white m-2 w-20 p-2 rounded-xl",onClick:()=>g(a),children:"EDIT"}),a.listed?e("button",{className:"bg-gray-600 font-semibold text-white m-2 w-20 p-2 rounded-xl",onClick:()=>c(a._id),children:"UNLIST"}):e("button",{className:"bg-blue-400 font-semibold text-white m-2 w-20 p-2 rounded-xl",onClick:()=>c(a._id),children:"LIST"})]})]},s))})]})})]})]})};export{E as default};
