const today = new Date();
let monthDisplayed = today.getMonth();
let yearDisplayed = today.getFullYear();

const numMonthsToDisplay = 4;
const validMonths = getValidMonths(today.getMonth(), numMonthsToDisplay);

const prevMonthArrow = document.querySelector("#calendar-left-arrow");
const nextMonthArrow = document.querySelector("#calendar-right-arrow");

populateCalendar(yearDisplayed, monthDisplayed);

prevMonthArrow.addEventListener("click", () => {
    if (validMonths.includes(getPrevMonth(monthDisplayed))) {
        monthDisplayed = getPrevMonth(monthDisplayed);
        if (monthDisplayed === 11) { yearDisplayed--; }
        populateCalendar(yearDisplayed, monthDisplayed);

        const matchMedia = window.matchMedia("(max-width: 991px)")
        if (matchMedia.matches) {
            const mobileFlyOuts = document.querySelectorAll(".mobile-fly-out");
            for (let flyOut of mobileFlyOuts) {
                flyOut.classList.remove("active");
            }
        }
    }
});

nextMonthArrow.addEventListener("click", () => {
    if (validMonths.includes(getNextMonth(monthDisplayed))) {
        monthDisplayed = getNextMonth(monthDisplayed);
        if (monthDisplayed === 0) { yearDisplayed++; }
        populateCalendar(yearDisplayed, monthDisplayed);

        const matchMedia = window.matchMedia("(max-width: 991px)")
        if (matchMedia.matches) {
            const mobileFlyOuts = document.querySelectorAll(".mobile-fly-out");
            for (let flyOut of mobileFlyOuts) {
                flyOut.classList.remove("active");
            }
        }
    }
});

function populateCalendar(year, month) {
    const monthObject = document.querySelector("#calendar-month");
    monthObject.innerText = `${getMonth(new Date(year, month))}  ${year}`;
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";
    const firstRow = document.createElement("tr");
    tableBody.append(firstRow);

    // Populate first row with previous month's dates if necessary
    let date = new Date(year, month);
    const numEmptySpots = getDayOfWeek(date);
    date.setDate(date.getDate() - numEmptySpots);
    for (let i = 0; i < numEmptySpots; i++) {
        firstRow.append(getDateContainer(date.getFullYear(), date.getMonth(), date.getDate()));
        date.setDate(date.getDate() + 1);
    }

    // Finish populating the first row with days from this month
    date = new Date(year, month);
    for (let i = getDayOfWeek(date); i < 7; i++) {
        firstRow.append(getDateContainer(date.getFullYear(), date.getMonth(), date.getDate()));
        date.setDate(date.getDate() + 1);
    }

    // Fill in the rest of the month
    while (date.getMonth() == month) {
        const newRow = document.createElement("tr");
        tableBody.append(newRow);
        for (let i = 0; i < 7; i++) {
            newRow.append(getDateContainer(date.getFullYear(), date.getMonth(), date.getDate()));
            date.setDate(date.getDate() + 1);
        }
    }

    fillInEvents();
    updateArrowColors();
}

function getDateContainer(year, month, dayOfTheMonth) {
    const todaysDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const dateToCreate = new Date(year, month, dayOfTheMonth);

    const template = document.querySelector('#template-date-container');
    const clone = template.content.cloneNode(true);
    const td = clone.querySelector("td");
    clone.querySelector(".date-container").classList.add(dateToCreate.toDateString().split(' ').join('-'));
    clone.querySelector(".date-heading").innerText = dayOfTheMonth;

    if (todaysDate.getTime() > dateToCreate.getTime()) {
        td.classList.add("past-date");
    } else if (todaysDate.getTime() === dateToCreate.getTime()) {
        td.classList.add("todays-date");
    }
    return td;
}

function fillInEvents() {
    // Mobile version
    const mobileContainter = document.querySelector(".display-event-mobile");

    // Remove all children from mobile container to avoid duplicates
    while (mobileContainter.firstChild) {
        mobileContainter.removeChild(mobileContainter.lastChild);
    }
    for (let event of calendarEvents) {
        const eventId = event.date.toDateString().split(' ').join('-');
        const dateContainer = document.querySelector(`.${eventId}`);

        if (dateContainer) {

            if ('content' in document.createElement('template')) {

                const template = document.querySelector('#template-event-container');
                const clone = template.content.cloneNode(true);

                clone.querySelector(".time-short").append(event.timeShort);
                clone.querySelector(".time-full").append(event.timeFull);
                clone.querySelector(".registration-link").href = event.regLink;
                clone.querySelector(".fly-out-img").src = event.imageSource;
                clone.querySelector(".fly-out-desc").append(event.desc);

                for (let name of clone.querySelectorAll(".event-name")) {
                    name.append(event.name);
                    name.classList.add(event.class);
                }
                dateContainer.append(clone);
            }

            const allCalendarLinks = document.querySelectorAll(".event-name");
            for (let link of allCalendarLinks) {
                link.addEventListener("click", () => {
                    sessionStorage.setItem("dropdown-1", link.classList[link.classList.length - 1]);
                });
            }

            const mobileFlyOut = document.querySelector(".fly-out").cloneNode(true);
            mobileFlyOut.classList.add("mobile-fly-out");
            mobileContainter.append(mobileFlyOut);

            const matchMedia = window.matchMedia("(max-width: 991px)")
            dateContainer.addEventListener("click", () => {
                if (matchMedia.matches) {
                    const mobileFlyOuts = document.querySelectorAll(".mobile-fly-out");
                    for (let flyOut of mobileFlyOuts) {
                        flyOut.classList.remove("active");
                    }
                    const event = dateContainer.classList[1];
                    const allMatchingEvents = document.querySelectorAll(`.mobile-fly-out.${event}`);
                    for (let matchingEvent of allMatchingEvents) {
                        matchingEvent.classList.add("active");
                    }
                }
            });

        }
    }
}

function updateArrowColors() {
    if (validMonths.includes(getPrevMonth(monthDisplayed))) {
        prevMonthArrow.classList.remove("calendar-arrow-invalid");
        prevMonthArrow.classList.add("calendar-arrow-valid");
    } else {
        prevMonthArrow.classList.remove("calendar-arrow-valid");
        prevMonthArrow.classList.add("calendar-arrow-invalid");
    }

    if (validMonths.includes(getNextMonth(monthDisplayed))) {
        nextMonthArrow.classList.remove("calendar-arrow-invalid");
        nextMonthArrow.classList.add("calendar-arrow-valid");
    } else {
        nextMonthArrow.classList.remove("calendar-arrow-valid");
        nextMonthArrow.classList.add("calendar-arrow-invalid");
    }
}