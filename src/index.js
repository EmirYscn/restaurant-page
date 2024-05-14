import {
  homePageLoad,
  menuPageLoad,
  contactPageLoad,
} from "./initial-page-load";

homePageLoad();

const homeBtn = document.querySelector(".home");
const menuBtn = document.querySelector(".menu");
const contactBtn = document.querySelector(".contact");

homeBtn.addEventListener("click", homePageLoad);
menuBtn.addEventListener("click", menuPageLoad);
contactBtn.addEventListener("click", contactPageLoad);
