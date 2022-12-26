const pageMenu = document.querySelector("#page-menu");

const pageMenuItems = document.querySelectorAll(".page-menu-item");

for (let pageMenuItem of pageMenuItems) {
    pageMenuItem.addEventListener("click", () => {
        for (let pageMenuItem of pageMenuItems) {
            pageMenuItem.classList.remove("active");
        }
        pageMenuItem.classList.add("active");

        const displayContent = document.querySelectorAll(`.${pageMenuItem.classList[1]}`);
        const contentOptions = document.querySelectorAll(".content-option");
        for (let contentOption of contentOptions) {
            contentOption.classList.remove("active");
        }
        displayContent[1].classList.add("active");
    });
}