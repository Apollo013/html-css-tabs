const contentListItems = document.querySelectorAll(".container_content-list-item");
const contentGroupItems = document.querySelectorAll(".container__content-group-item");

const removeActive = () => {
    contentListItems.forEach((tab) => tab.classList.remove("active"));
    contentGroupItems.forEach((item) => item.classList.remove("active"));
};

contentListItems.forEach((tab, index) => {
    tab.addEventListener("click", (e) => {
        console.log(e);
        removeActive();

        tab.classList.add("active");
        contentGroupItems[index].classList.add("active");

        var indicator = document.querySelector(".container_content-indicator");
        indicator.style.top = `${e.target.offsetTop}px`;
    });
});
