import{u as a,e as l,j as t,c as e}from"./index-75e0cb1c.js";const n=()=>{const s=a(),{tutor:r}=l(c=>c.tutor);return t("div",{className:"bg-green-200 min-h-screen max-w-screen-2xl mx-auto flex flex-col",children:[e("div",{className:"bg-red-600",children:e("p",{className:"text-center font-semibold uppercase text-xl p-10 text-white",children:"request is rejected"})}),t("div",{className:"flex flex-col  justify-center items-center bg-slate-400 h-screen",children:[e("p",{className:"font-bold text-2xl text-center",children:"Your request to register as a tutor at EDU-HELP is rejected due to"}),e("p",{className:"font-bold text-2xl text-center text-white",children:r.rejection_reason}),e("button",{className:"mt-10 bg-red-600 text-white p-3 rounded-md",onClick:()=>{localStorage.removeItem("Ttoken"),s("/tutor")},children:"LOGOUT"})]})]})};export{n as default};
