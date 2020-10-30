/* eslint-disable no-useless-escape */
/* eslint-disable quotes */
"use strict";

const form = document.querySelectorAll(".js__form");
const previewName = document.querySelector(".js__preview-name");
const previewJob = document.querySelector(".js__preview-job");
const previewPhone = document.querySelector(".js__preview-phone");
const previewMail = document.querySelector(".js__preview-mail");
const previewLinkedin = document.querySelector(".js__preview-linkedin");
const previewGithub = document.querySelector(".js__preview-github");
const resetButton = document.querySelector(".js__btn-reset");
const profileReset = document.querySelector(".js__profile-image");
const previewReset = document.querySelector(".js__profile-preview");
const previewElement = document.querySelector(".js-preview__card");
const inputElementCold = document.querySelector(".js-inputCold");
const inputElementWarm = document.querySelector(".js-inputWarm");
const inputElementMedium = document.querySelector(".js-inputMedium");
const btn = document.querySelector(".js__btn");

let data = {
  palette: "",
  name: "",
  job: "",
  phone: "",
  email: "",
  linkedin: "",
  github: "",
  photo: "",
};

function getInfoToStorage() {
  let mydata = localStorage.getItem("userData");
  mydata = JSON.parse(mydata);
  if (mydata !== null) {
    form[0].value = mydata.name;
    form[1].value = mydata.job;
    form[2].value = mydata.email;
    form[3].value = mydata.phone;
    form[4].value = mydata.linkedin;
    form[5].value = mydata.github;
    data = mydata;
    if (data.palette === 1) {
      changeCold();
      inputElementCold.click();
    } else if (data.palette === 2) {
      changeWarm();
      inputElementWarm.click();
    } else if (data.palette === 3) {
      changeMedium();
      inputElementMedium.click();
    }
    if (data.photo !== "") {
      profileReset.style.backgroundImage = `url(${data.photo})`;
      previewReset.style.backgroundImage = `url(${data.photo})`;
    } else {
      profileReset.style.backgroundImage = `url('./assets/images/totoro.jpg')`;
      previewReset.style.backgroundImage = `url('./assets/images/totoro.jpg')`;
    }
    fillpreview();
    getErrors();
  }
}

function setToLocalStorage() {
  const stringData = JSON.stringify(data);
  localStorage.setItem("userData", stringData);
}

function saveField(ev) {
  const inputKey = ev.currentTarget.name;
  data[inputKey] = ev.currentTarget.value;
  setToLocalStorage();
  fillpreview();
}

function fillpreview() {
  previewName.innerHTML = data.name || "Nombre Apellido";
  previewJob.innerHTML = data.job || "Front-end developer";
  const mailLink = "mailto:" + data.email;
  previewMail.setAttribute("href", mailLink);
  const phoneLink = "tel:" + data.phone;
  previewPhone.setAttribute("href", phoneLink);
  const linkedinLink = "https://www.linkedin.com/in/" + data.linkedin;
  previewLinkedin.setAttribute("href", linkedinLink);
  const githubLink = "https://github.com/" + data.github;
  previewGithub.setAttribute("href", githubLink);
}

for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("keyup", saveField);
}

for (let i = 0; i < form.length; i++) {
  form[i].addEventListener("blur", getErrors);
}

function validarEmail(email) {
  let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
}

function validarTelf(phoneNumber) {
  let regex = /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
  return regex.test(phoneNumber) ? true : false;
}

function getErrors() {
  let message = "";
  if (!data.name) {
    message += "Tienes que rellenar tu nombre. ";
  }
  if (!data.job) {
    message += "Tienes que rellenar tu puesto de trabajo. ";
  }

  if (!data.email) {
    message += "Tienes que rellenar tu email. ";
  } else if (validarEmail(data.email) === false) {
    message += `${data.email} no es un email correcto. `;
  }

  if (!data.phone) {
    message += "Tienes que rellenar tu teléfono. ";
  } else if (validarTelf(data.phone) === false) {
    message += `${data.phone} no es un número de teléfono correcto. `;
  }
  if (!data.linkedin) {
    message += "Tienes que rellenar tu Linkedin. ";
  }
  if (!data.github) {
    message += "Tienes que rellenar tu Github. ";
  }
  //Create element con content message
  if (message === "") {
    // eslint-disable-next-line no-undef
    btn.classList.add("js-button-create");
    // eslint-disable-next-line no-undef
    btn.removeAttribute("disabled");
    const items = document
      .querySelector(".share__section")
      .querySelector(".paragraph");
    if (items !== null) {
      items.remove();
    }
  } else {
    //buscamos el p anterior si existiera en esta sección
    btn.classList.remove("js-button-create");
    if (document.querySelector(".paragraph")) {
      const items = document
        .querySelector(".share__section")
        .querySelector(".paragraph");
      items.remove();
    }
    //Creamos el elemento parrafo de errores.
    const p = document.createElement("p");
    const messageText = document.createTextNode(message);
    p.appendChild(messageText);
    p.style = "color:red; font-size:10px; margin:10px";
    p.classList.add("paragraph");
    // eslint-disable-next-line no-undef
    document.querySelector(".share__section").insertBefore(p, btn);

    // console.log(message);
  }
}

function reset() {
  data.palette = "";
  data.name = "";
  data.job = "";
  data.phone = "";
  data.email = "";
  data.linkedin = "";
  data.github = "";
  data.photo = "url('./assets/images/totoro.jpg')";
  for (let i = 0; i < form.length; i++) {
    form[i].value = "";
  }
  localStorage.removeItem("userData");

  inputElementCold.click();
  fillpreview();
  profileReset.style.backgroundImage = "url('./assets/images/totoro.jpg')";
  previewReset.style.backgroundImage = "";
  setToLocalStorage();
}
resetButton.addEventListener("click", reset);

//START APP
getInfoToStorage();
