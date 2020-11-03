/* eslint-disable quotes */
"use strict";

const shareFinish = document.querySelector(".js__share__finish");

function finishClick() {
  btn.classList.remove("js-button-create");
  shareFinish.classList.remove("js__finish-hidden");
  sendRequest();
}

btn.addEventListener("click", finishClick);

function sendRequest() {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    });
}

function showURL(result) {
  const cardLink = document.querySelector(".share__finish--text");

  if (result.success === true) {
    cardLink.innerHTML =
      "<a href=" +
      result.cardURL +
      ' target="_blank"' +
      ' class="card-link js-card-link2"' +
      ">" +
      result.cardURL +
      "</a>";
  } else {
    cardLink.innerHTML = "ERROR:" + result.error;
  }
  createTwitterLink();
}

function createTwitterLink() {
  const buttonTwitter = document.querySelector(".share__finish--anchor");
  const twitterText = encodeURIComponent("¡Aquí está mi nueva tarjeta!");
  const twitterURL = document.querySelector(".js-card-link2").href;
  console.log(twitterURL);
  buttonTwitter.href = `https://twitter.com/intent/tweet?text=${twitterText}&url=${twitterURL}`;
}
