import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */console.log("Form");const e={email:"",message:""},t=document.querySelector(".feedback-form"),l="feedback-form-state",r=()=>{localStorage.setItem(l,JSON.stringify(e))},n=()=>{const a=localStorage.getItem(l);return a?JSON.parse(a):null},s=n();s&&(e.email=s.email||"",e.message=s.message||"",t.elements.email.value=e.email,t.elements.message.value=e.message);t.addEventListener("input",a=>{const{name:o,value:m}=a.target;e[o]=m,r()});t.addEventListener("submit",a=>{if(a.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem(l),e.email="",e.message="",t.reset()});
//# sourceMappingURL=2-form.js.map