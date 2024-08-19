export const loadAboutPage = () => {
    const div = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = "This is about page";
    div.appendChild(text);
    return div;
}