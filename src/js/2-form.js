
const form = document.querySelector(".feedback-form");
const input = form.querySelector("input")
const textarea = form.querySelector("textarea")

const formData = {
    email: "",
    message: ""
};



function updateFormData({}) {
  formData.email = input.value;
  formData.message = textarea.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
};

form.addEventListener("input", updateFormData);

const savedFormData = localStorage.getItem("feedback-form-state");
if (savedFormData) {
  const parsedData = JSON.parse(savedFormData);
  input.value = parsedData.email || "";
  textarea.value = parsedData.message || "";
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