import{r as i,j as a,c as e,N as u,g as p,S as s,i as N}from"./index-75e0cb1c.js";import{P as v}from"./Pagination-6d1cdaaa.js";import{H as b}from"./Header-318919e1.js";import{H as w}from"./HeadTitle-2e5ed730.js";import{F as y}from"./Footer-62cbe905.js";import"./logoWhite-701db893.js";const P="/assets/news-0224a6a9.png",E=()=>{const[r,m]=i.useState(1),[c,j]=i.useState(4),[l,n]=i.useState([]),[f,o]=i.useState(!0);i.useEffect(()=>{(async()=>{try{const d=await N.get("https://newsdata.io/api/1/news?apikey=pub_210963dd69e8330247f79f8d15f79712af3bd&q=education&country=in&language=en&category=science,technology");n(d.data.results),o(!1)}catch{o(!1)}})()},[]);const h=r*c,x=h-c,g=l==null?void 0:l.slice(x,h);return a("div",{className:"min-h-screen max-w-screen-2xl mx-auto w-full pt-16 bg-[#d4d8f0] overflow-x-hidden",children:[e(u,{}),e(b,{}),e(w,{title:"news"}),f?a(p,{padding:"6",boxShadow:"lg",bg:"white",className:"mt-5 mx-auto h-52 w-4/5 rounded-3xl flex md:flex-row flex-col  items-center  md:justify-center",children:[e(s,{height:"28",mt:"3",width:"28"}),a("div",{className:"ml-5 md:block hidden",children:[e(s,{height:"2",width:"2xl",mt:"3"}),e(s,{height:"2",width:"2xl",mt:"3"}),e(s,{height:"2",width:"2xl",mt:"3"}),e(s,{height:"2",width:"2xl",mt:"3"})]}),a("div",{className:"ml-5 md:hidden block",children:[e(s,{height:"2",width:"2xs",mt:"3"}),e(s,{height:"2",width:"2xs",mt:"3"}),e(s,{height:"2",width:"2xs",mt:"3"}),e(s,{height:"2",width:"2xs",mt:"3"})]})]}):e("div",{children:(l==null?void 0:l.length)>0?a("div",{children:[e("div",{className:"h-4/6",children:g.map((t,d)=>e("div",{className:"p-2 flex justify-center ",children:a("div",{className:"bg-[#fffffe] hover:shadow-xl flex flex-col justify-evenly md:flex-row hover:opacity-90  text-[#232946]  w-3/4 rounded-xl mt-5 p-5 h-fit text-center",children:[e("div",{className:" md:w-3/12  flex justify-center items-center  mx-auto  md:mx-2",children:t!=null&&t.image_url?e("img",{src:t.image_url,className:"w-36  h-36 object-cover shadow-sm shadow-black",alt:""}):e("img",{src:P,className:"w-36  h-36 shadow-sm shadow-black",alt:""})}),a("div",{className:"flex flex-col justify-center md:w-8/12 md:items-start uppercase",children:[e("div",{className:"mb-4 font-bold",children:e("p",{className:"text-center",children:t==null?void 0:t.title})}),a("div",{children:[" ",e("p",{className:"text-start",children:t==null?void 0:t.description})]}),e("div",{children:a("p",{className:"text-center",children:["Source: ",t==null?void 0:t.source_id]})})]}),e("div",{className:"flex flex-col justify-center m-2 md:w-1/12",children:a("span",{children:[e("a",{href:t==null?void 0:t.link,className:"bg-[#232946] p-2 text-[#fffffe] rounded-lg  uppercase font-bold mt-5 w-full hover:bg-slate-500 hover:text-white mx-auto",children:"View"})," "]})})]})}))}),e(v,{totalContents:l.length,contentsPerPage:c,setCurrentPage:m,currentPage:r})]}):a("div",{className:"mt-5 h-40  ",children:[e("p",{className:"text-center font-bold text-xl mt-10",children:"No news is available at the moment"}),e("p",{className:"text-center font-semibold text-xl ",children:"Please check back later"})]})}),e("div",{className:"mt-5",children:e(y,{})})]})};export{E as default};
