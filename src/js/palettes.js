/* eslint-disable quotes */
"use strict";

function changeCold() {
  previewElement.classList.remove("js-paletteWarm");
  previewElement.classList.remove("js-paletteMedium");
  previewElement.classList.add("js-paletteCold");
  data.palette = 1;
  setToLocalStorage();
}

function changeWarm() {
  previewElement.classList.remove("js-paletteCold");
  previewElement.classList.remove("js-paletteMedium");
  previewElement.classList.add("js-paletteWarm");
  data.palette = 2;
  setToLocalStorage();
}

function changeMedium() {
  previewElement.classList.remove("js-paletteCold");
  previewElement.classList.remove("js-paletteWarm");
  previewElement.classList.add("js-paletteMedium");
  data.palette = 3;
  setToLocalStorage();
}

inputElementCold.addEventListener("click", changeCold);
inputElementWarm.addEventListener("click", changeWarm);
inputElementMedium.addEventListener("click", changeMedium);
