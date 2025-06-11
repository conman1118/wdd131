"use strict";

const formEl = document.querySelector("form");
const firstNEl = document.querySelector(".first_name");
const lastNEl = document.querySelector(".last_name");
const emailEl = document.querySelector(".email");
const messageEl = document.querySelector(".txt_message");
const messageParent = document.querySelector(".message");

const btnRadio = document.querySelectorAll(".btn-radio");
const btnEl = document.querySelector("button");
const termEl = document.querySelector("termsCondition");
const termsWrapper = document.querySelector(".terms_wrapper");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  errorHandle();
});

function errorHandle() {
  const fistName = firstNEl.value.trim();
  const lastName = lastNEl.value.trim();
  const email = emailEl.value.trim();
  const textMessaage = messageEl.value.trim();

  // First Name
  if (fistName === "") {
    showError(firstNEl, showErrorMessage());
  } else {
    setSuccess(firstNEl);
  }

  if (lastName === "") {
    showError(lastNEl, showErrorMessage());
  } else {
    setSuccess(lastNEl);
  }

  if (email === "") {
    showError(emailEl, showErrorMessage());
  } else if (!isValidEmail(email)) {
    showError(emailEl, "Please Enter Valid Email");
  } else {
    setSuccess(emailEl);
  }

  if (textMessaage === "") {
    showError(messageParent, showErrorMessage());
  } else {
    setSuccess(messageParent);
  }
}

// check box hanlde
function checkBoxhandle() {
  btnRadio.forEach((radio) => {
    radio.addEventListener("click", () => {
      btnRadio.forEach((l) => l.parentElement.classList.remove("active"));

      if (radio.checked == true) {
        radio.parentElement.classList.add("active");
      }
    });
  });
}

checkBoxhandle();

// Show Error Message
const showError = (ele, msg) => {
  const inputControl = ele.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerText = msg;
  inputControl.classList.add("errormessage");
};

// success message
const setSuccess = (ele) => {
  const inputControl = ele.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerText = "";
  inputControl.classList.remove("errormessage");
};

// valid email
const isValidEmail = (email) => {
  const reTest = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return reTest.test(String(email).toLowerCase());
};

//display error text message
function showErrorMessage() {
  return "This Filed is Required";
}
