export const loadMenuPage = () => {
    const div = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = "This is menu page";
    div.appendChild(text);
    return div;
}