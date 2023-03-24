const pageMenu = document.querySelector("#page-menu");
const pageMenuItems = document.querySelectorAll(".page-menu-item");
for (let pageMenuItem of pageMenuItems) {
    pageMenuItem.addEventListener("click", makeLinkActive);
}

function makeLinkActive() {
    for (let pageMenuItem of pageMenuItems) {
        pageMenuItem.classList.remove("active");
    }
    this.classList.add("active");
    const displayContent = document.querySelectorAll(`.${this.classList[1]}`);
    const contentOptions = document.querySelectorAll(".content-option");
    for (let contentOption of contentOptions) {
        contentOption.classList.remove("active");
    }
    displayContent[2].classList.add("active");
}

const dropdown1 = document.querySelectorAll(".dropdown-1");
for (let link of dropdown1) {
    link.addEventListener("click", () => {
        // Remember which dropdown option the user selected for this dropdown
        sessionStorage.setItem("dropdown-1", link.classList[2]);
    });
}

const dropdown2 = document.querySelectorAll(".dropdown-2");
for (let link of dropdown2) {
    link.addEventListener("click", () => {
        // Remember which dropdown option the user selected for this dropdown
        sessionStorage.setItem("dropdown-2", link.classList[2]);
    });
}

if (sessionStorage.getItem("dropdown-1")) {
    let dropdownOption1 = sessionStorage.getItem("dropdown-1");
    const toActivate = document.querySelectorAll(`.${dropdownOption1}`)[1];
    for (let pageMenuItem of pageMenuItems) {
        pageMenuItem.classList.remove("active");
    }
    toActivate.classList.add("active");
    const displayContent = document.querySelectorAll(`.${toActivate.classList[1]}`);
    const contentOptions = document.querySelectorAll(".content-option");
    for (let contentOption of contentOptions) {
        contentOption.classList.remove("active");
    }
    displayContent[2].classList.add("active");

    sessionStorage.removeItem("dropdown-1");
}

if (sessionStorage.getItem("dropdown-2")) {
    let dropdownOption2 = sessionStorage.getItem("dropdown-2");
    const toActivate = document.querySelectorAll(`.${dropdownOption2}`)[1];
    for (let pageMenuItem of pageMenuItems) {
        pageMenuItem.classList.remove("active");
    }
    toActivate.classList.add("active");
    const displayContent = document.querySelectorAll(`.${toActivate.classList[1]}`);
    const contentOptions = document.querySelectorAll(".content-option");
    for (let contentOption of contentOptions) {
        contentOption.classList.remove("active");
    }
    displayContent[2].classList.add("active");

    sessionStorage.removeItem("dropdown-2");
}

