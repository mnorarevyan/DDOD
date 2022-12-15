const pageMenu = document.querySelector("#page-menu");

const pageMenuItems = document.querySelectorAll(".page-menu-item");

for (let pageMenuItem of pageMenuItems) {
    pageMenuItem.addEventListener("click", () => {
        for (let pageMenuItem of pageMenuItems) {
            pageMenuItem.classList.remove("active");
        }
        pageMenuItem.classList.add("active");
    });
}