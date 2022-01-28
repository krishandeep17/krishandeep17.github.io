const form = document.getElementById("form");
const fname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

// Each time the user types something, we check if the form fields are valid.
function checkValidity(inputArr) {
  inputArr.forEach(function (input) {
    input.addEventListener("input", function (e) {
      if (input.validity.valid) {
        input.classList.add("success");
        input.classList.remove("error");
      } else {
        if (e.target.value.length === 0) {
          input.classList.remove("notEmpty");
          input.classList.remove("success");
          input.classList.remove("error");
        } else {
          input.classList.add("notEmpty");
          input.classList.remove("success");
          input.classList.add("error");
        }
      }
    });
  });
}

checkValidity([fname, email, message]); //?

// Reset Form
function resetForm(inputArr) {
  inputArr.forEach(function (input) {
    input.value = "";
    input.classList.remove("notEmpty");
    input.classList.remove("success");
    input.classList.remove("error");
  });
}

// Form Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Use HTML constraint API to check form validity
  let isValid = form.checkValidity();

  // Submit & Reset Form if Valid
  if (isValid) {
    submitForm();
    resetForm([fname, email, message]);
  }
});
