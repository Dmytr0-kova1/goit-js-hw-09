import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form"),e={email:"",message:""};function r({}){e.email=document.querySelector("input").value,e.message=document.querySelector("textarea").value,localStorage.setItem("feedback-form-state",JSON.stringify(e))}a.addEventListener("input",r);const o=localStorage.getItem("feedback-form-state");if(o){const t=JSON.parse(o);document.querySelector("input").value=t.email,document.querySelector("textarea").value=t.message}a.addEventListener("submit",t=>{t.preventDefault(),!e.email||!e.message?alert("Fill please all fields"):(console.log("The form has been sent:",e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.reset())});
//# sourceMappingURL=2-form.js.map
