import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),o=a.querySelector("input"),r=a.querySelector("textarea"),e={email:"",message:""};function l({}){e.email=o.value,e.message=r.value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}a.addEventListener("input",l);const s=localStorage.getItem("feedback-form-state");if(s){const t=JSON.parse(s);o.value=t.email||"",r.value=t.message||""}a.addEventListener("submit",t=>{t.preventDefault(),!e.email||!e.message?alert("Fill please all fields"):(console.log("The form has been sent:",e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.reset())});
//# sourceMappingURL=2-form.js.map
