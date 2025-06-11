"use strict";

const btnMenu = document.querySelector(".menu-btn");
const navEl = document.querySelector("nav");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

const brandImg = document.querySelectorAll(".brand_img img");
const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");

btnMenu.addEventListener("click", () => {
  navEl.classList.toggle("active");
});

let increment = 1;

brandImg.forEach((img) => {
  btnNext.addEventListener("click", () => {
    increment++;
    if (increment > 3) increment = 1;
    img.src = `./assets/desktop/image-slide-${increment}.jpg`;
    brandText(increment);
  });

  btnPrev.addEventListener("click", () => {
    increment--;
    if (increment <= 0) increment = 3;
    img.src = `./assets/desktop/image-slide-${increment}.jpg`;
    brandText(increment);
  });
});

function brandText(value) {
  if (value === 1) {
    heading1.textContent = "Brand naming";
    heading2.textContent = "& guidelines";
  }

  if (value === 2) {
    heading1.textContent = "Brand identity &";
    heading2.textContent = "merchandise";
  }

  if (value === 3) {
    heading2.textContent = "web design";
  }
}
