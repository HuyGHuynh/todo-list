export const loadHomePage = () => {
    const div = document.createElement("div");
    const text = document.createElement("p");
    text.textContent = "This is home page";
    div.appendChild(text);
    return div;
}