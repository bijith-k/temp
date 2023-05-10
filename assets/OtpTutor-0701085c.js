import{r as i,u as f,a as g,b,j as o,c as e,B as N,d as E}from"./index-75e0cb1c.js";import{c as v,b as P,u as w}from"./index.esm-7cbbfad3.js";import{l as O}from"./logoWhite-701db893.js";const I={otpPhone:""},T=()=>{const[c,a]=i.useState(null),s=f();g();const n=b(),u=v({otpPhone:P().required("Please enter otp received in the given mobile number")}),{values:m,errors:r,touched:d,handleBlur:h,handleChange:p,handleSubmit:x}=w({initialValues:I,validationSchema:u,onSubmit:(l,y)=>{a(!0),E().post("auth/verify-tutor-otp",{...l}).then(t=>{a(!1),t.data.created?(n({title:t.data.message,status:"success",duration:5e3,isClosable:!0,position:"top"}),s("/tutor")):n({title:t.data.message,status:"error",duration:5e3,isClosable:!0,position:"top"})}).catch(t=>{a(!1),console.log(t,"catchhh"),n({title:t.response.data.errors,status:"error",duration:5e3,isClosable:!0,position:"top"})})}});return i.useEffect(()=>{localStorage.getItem("Ttoken")&&s("/tutor/dashboard")},[s]),o("div",{className:"bg-gray-800 max-w-screen-2xl mx-auto min-h-screen flex flex-col",children:[o("div",{className:"text-white mt-10 max-w-sm mx-auto p-3 rounded-2xl",children:[e("img",{src:O,className:"w-20 h-20 mx-auto mb-4",alt:"logo"}),e("p",{className:"font-bold text-3xl",children:"WELCOME TO EDU-HELP"}),e("p",{className:"uppercase text-center font-medium",children:"enter otp to complete registration"})]}),e("div",{className:"container max-w-sm mx-auto flex flex-col items-center mt-10 px-2",children:o("div",{className:"bg-white px-6 py-8 mt-0 rounded-2xl shadow-md text-black w-full",children:[e("p",{className:"text-center font-sans font-thin text-xs mb-3",children:"CHECK THE INBOX OF GIVEN MOBILE NUMBER FOR OTP"}),o("form",{action:"",onSubmit:x,children:[e("input",{type:"text",className:"block border border-grey-light w-full p-3 rounded mb-4",name:"otpPhone",placeholder:"OTP VIA PHONE NUMBER",value:m.otpPhone,onChange:p,onBlur:h}),r.otpPhone&&d.otpPhone?e("p",{className:"form-error text-red-600 ",children:r.otpPhone}):null,e(N,{isLoading:c,type:"submit",className:"w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-300 focus:outline-none my-1",children:"VERIFY AND SIGNUP"})]})]})})]})};export{T as default};
