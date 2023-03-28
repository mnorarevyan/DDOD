if ('content' in document.createElement('template')) {

    for (let event of calendarEvents) {

        const template = document.querySelector('#sign-up-links-row');
        const clone = template.content.cloneNode(true);

        const tbody = document.querySelector(`.content-option.${event.class} .sign-up-links tbody`);
        const date = clone.querySelector(".date");
        const time = clone.querySelector(".time");
        const regLink = clone.querySelector("a");

        date.append(`${getDay(event.date)}, ${getMonth(event.date)} ${event.date.getDate()}`);
        time.append(event.timeShort);
        regLink.href = event.regLink;

        tbody.append(clone);
    }
}

function getDay(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

function getMonth(date) {
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
}