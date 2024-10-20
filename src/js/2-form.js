
const form = document.querySelector(".feedback-form");
const formData = {
    email: "",
    message: ""
};



function updateFormData({}) {
  formData.email = document.querySelector("input").value;
  formData.message = document.querySelector("textarea").value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

form.addEventListener("input", updateFormData);

const savedFormData = localStorage.getItem("feedback-form-state");
if (savedFormData) {
  const parsedData = JSON.parse(savedFormData);
  document.querySelector("input").value = parsedData.email;
  document.querySelector("textarea").value = parsedData.message;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
  } else {
    console.log("The form has been sent:", formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.reset();
  }
});