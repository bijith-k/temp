import{e as h,b as S,u as f,r as s,d as g,j as a,c as t}from"./index-75e0cb1c.js";import{F as v}from"./chunk-IJBC3YLI-ecd8dcc2.js";import{F as j}from"./chunk-RN6VKE3K-3067924d.js";import{S as x}from"./chunk-GJO77I2I-e28f2d83.js";const F=({searchQueryData:o,selectedSubjectData:c})=>{const{student:n}=h(e=>e.student),r=S(),i=f(),[m,d]=s.useState([]),[u,p]=s.useState(""),[l,b]=s.useState("");return o(u),c(l),s.useEffect(()=>{g("Stoken").get(`subjects?branch=${n.branch._id}`).then(e=>{e.data.status==!1?(localStorage.removeItem("Stoken"),i("/signin")):d(e.data.subjects)}).catch(e=>{console.log(e),r({title:e.message,status:"error",duration:5e3,isClosable:!0,position:"top"})})},[]),a("div",{className:"m-4 md:m-8 flex md:justify-evenly md:flex-row flex-col items-center ",children:[t("div",{className:"bg-gray-400 w-max p-3 rounded-full md:mb-0 mb-4",children:t("input",{type:"text",name:"",id:"",placeholder:"Search...",className:"bg-transparent placeholder-white font-semibold focus:outline-none",onChange:e=>p(e.target.value)})}),t("div",{className:" md:-mt-5",children:a(v,{className:"w-56",children:[t(j,{id:"demo-simple-select-label",children:"Subject"}),a(x,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:l,label:"subject",variant:"filled",onChange:e=>b(e.target.value),children:[t("option",{value:"",children:"All Subjects"}),m.map(e=>t("option",{value:e.name,className:"uppercase",children:e.name},e._id))]})]})})]})};export{F as S};
