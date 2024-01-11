const tabs = document.querySelectorAll(".container__tab");
const content = document.querySelectorAll(".container__content");

const removeActive = () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    content.forEach((item) => item.classList.remove("active"));
};

tabs.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        removeActive();
        tab.classList.add("active");
        content[index].classList.add("active");

        var indicator = document.querySelector(".container__tab-indicator");
        indicator.style.width = `${e.target.offsetWidth}px`;
        indicator.style.left = `${e.target.offsetLeft}px`;
    });
});
