import {
  homePageLoad,
  menuPageLoad,
  contactPageLoad,
} from "./initial-page-load";
import "./styles.css";

homePageLoad();

const homeBtn = document.querySelector(".home-btn");
const menuBtn = document.querySelector(".menu-btn");
const contactBtn = document.querySelector(".contact-btn");

homeBtn.addEventListener("click", homePageLoad);
menuBtn.addEventListener("click", menuPageLoad);
contactBtn.addEventListener("click", contactPageLoad);
