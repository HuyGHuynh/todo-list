import "./styles.css";
import { initPage } from "./header.js";
import { loadHomePage } from "./homePage.js";
import { loadMenuPage } from "./menuPage.js";
import { loadAboutPage } from "./aboutPage.js";

//Intialize body skeleton
initPage();

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const aboutButton = document.getElementById("aboutButton");
const content = document.querySelector("#content");

//Default loading homepage

content.appendChild(loadHomePage());

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(loadHomePage());
});

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(loadMenuPage());
});

aboutButton.addEventListener("click", () => {
    content.innerHTML = "";
    content.appendChild(loadAboutPage());
});