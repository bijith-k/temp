import{u as b,b as N,r as h,e as x,j as u,c as e,B as w,d as y}from"./index-75e0cb1c.js";import{N as D,F as k}from"./Footer-9eebb72f.js";import{c as C,a as s,d as B,u as F}from"./index.esm-7cbbfad3.js";import"./index.esm-ed29fecc.js";import"./index.esm-21486a75.js";import"./index.esm-b2e70fb2.js";import"./logoWhite-701db893.js";const P={name:"",organizer:"",location:"",description:"",startingDate:"",endingDate:"",link:"",contact:"",poster:""},V=()=>{const c=b(),d=N(),[g,p]=h.useState(null),{tutor:m}=x(t=>t.tutor);h.useEffect(()=>{m.approved==!1&&m.rejected==!1?c("/tutor/approval-pending"):m.rejected?c("/tutor/approval-rejected"):m.blocked&&(localStorage.removeItem("Ttoken"),c("/tutor"),d({title:"Blocked",description:"Your account is blocked by the admin",status:"error",duration:5e3,isClosable:!0,position:"top"}))},[]);const v=C({name:s().min(2).max(25).required("Please enter the events name"),organizer:s().min(2).max(50).required("Please enter the organizers/institutions name"),location:s().min(2).required("Please enter the location"),description:s().min(2).required("Please add some description of event"),startingDate:s().required("Please select the starting date"),endingDate:s().required("Please select the ending date"),link:s().required("Please add the link or website for registration"),contact:s().matches(/^[0-9]{10}$/,"contact number is not valid").required("Please enter a contact number"),poster:B().required("Please select a poster").test("fileType","Unsupported file type",t=>t&&["image/jpeg","image/png"].includes(t.type))}),{values:r,setFieldValue:n,errors:a,touched:i,handleBlur:l,handleSubmit:f}=F({initialValues:P,validationSchema:v,onSubmit:(t,z)=>{p(!0),y("Ttoken").post("tutor/add-event",{...t},{headers:{"Content-Type":"multipart/form-data"}}).then(o=>{p(!1),o.data.added?(d({title:o.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}),c("/tutor-dashboard")):d({title:o.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}).catch(o=>{p(!1),console.log(o),d({title:o.response.data.messge,status:"error",duration:5e3,isClosable:!0,position:"top"})})}});return u("div",{className:"bg-gray-400 min-h-screen max-w-screen-2xl mx-auto w-full",children:[e(D,{}),u("div",{className:"",children:[e("div",{className:"bg-gray-600",children:e("h1",{className:"font-bold text-white text-center text-lg uppercase h-12 p-2",children:"add events"})}),u("form",{action:"",onSubmit:f,className:"p-3 w-3/4 mx-auto",children:[e("label",{htmlFor:"eventName",className:" font-medium",children:"Enter the name of event"}),e("input",{type:"text",name:"name",className:"w-full p-3 mb-2",placeholder:"Type here...............",value:r.name,onBlur:l,onChange:t=>{n("name",t.target.value)}}),i.name&&a.name&&e("div",{className:"text-white",children:a.name}),e("label",{htmlFor:"organizer",className:" font-medium",children:"Enter the name of organizer"}),e("input",{type:"text",name:"organizer",className:"w-full p-3 mb-2",placeholder:"Type here...............",value:r.organizer,onBlur:l,onChange:t=>{n("organizer",t.target.value)}}),i.organizer&&a.organizer&&e("div",{className:"text-white",children:a.organizer}),e("label",{htmlFor:"location",className:" font-medium",children:"Enter the location"}),e("input",{type:"text",name:"location",className:"w-full p-3 mb-2",placeholder:"Type here...............",value:r.location,onBlur:l,onChange:t=>{n("location",t.target.value)}}),i.location&&a.location&&e("div",{className:"text-white",children:a.location}),e("label",{htmlFor:"description",className:" font-medium",children:"Write a short description about the event"}),e("textarea",{name:"description",id:"",className:"w-full p-3 mb-2",rows:"3",value:r.description,onBlur:l,onChange:t=>{n("description",t.target.value)}}),i.description&&a.description&&e("div",{className:"text-white",children:a.description}),e("label",{htmlFor:"startingDate",className:" font-medium",children:"Event starting date"}),e("input",{type:"date",name:"startingDate",className:"w-full p-3 mb-2",value:r.startingDate,onBlur:l,onChange:t=>{n("startingDate",t.target.value)}}),i.startingDate&&a.startingDate&&e("div",{className:"text-white",children:a.startingDate}),e("label",{htmlFor:"endingDate",className:" font-medium",children:"Event ending date"}),e("input",{type:"date",name:"endingDate",className:"w-full p-3 mb-2",value:r.endingDate,onBlur:l,onChange:t=>{n("endingDate",t.target.value)}}),i.endingDate&&a.endingDate&&e("div",{className:"text-white",children:a.endingDate}),e("label",{htmlFor:"link",className:" font-medium",children:"Paste the registration link/website"}),e("input",{type:"text",name:"link",className:"w-full p-3 mb-2",placeholder:"Paste here...............",value:r.link,onBlur:l,onChange:t=>{n("link",t.target.value)}}),i.link&&a.link&&e("div",{className:"text-white",children:a.link}),e("label",{htmlFor:"contact",className:" font-medium",children:"Contact number"}),e("input",{type:"text",name:"contact",className:"w-full p-3 mb-2",placeholder:"Type here...............",value:r.contact,onBlur:l,onChange:t=>{n("contact",t.target.value)}}),i.contact&&a.contact&&e("div",{className:"text-white",children:a.contact}),e("label",{htmlFor:"poster",className:" font-medium block",children:"Poster of the event"}),e("input",{type:"file",name:"poster",className:"w-full bg-white p-2",onBlur:l,onChange:t=>{n("poster",t.target.files[0])}}),i.poster&&a.poster&&e("div",{className:"text-white",children:a.poster}),u("p",{children:[" ","*These events will be published only ",e("br",{})," after admin verification"]}),e(w,{isLoading:g,type:"submit",className:"bg-gray-600 p-3 font-semibold text-white rounded-lg mt-2",children:"ADD EVENT"})]})]}),e("div",{className:"mt-5",children:e(k,{})})]})};export{V as default};
