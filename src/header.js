export const initPage = () => {
    const header = document.createElement("header");
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.id = "homeButton";
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.id = "menuButton";
    menuButton.textContent = "Menu";

    const aboutButton = document.createElement("button");
    aboutButton.id = "aboutButton";
    aboutButton.textContent = "About";


    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);
    header.appendChild(nav);
    document.body.appendChild(header);

    const content = document.createElement("div");
    content.id = "content";
    document.body.appendChild(content);
};


