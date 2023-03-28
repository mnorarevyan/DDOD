function getDay(date) {
    return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
}

function getMonth(date) {
    return new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
}

function getDayOfWeek(date) {
    return (date.getDay() === 0 ? 6 : date.getDay() - 1);
}

function getPrevMonth(monthNum) {
    return (monthNum === 0 ? 11 : monthNum - 1);
}

function getNextMonth(monthNum) {
    return (monthNum === 11 ? 0 : monthNum + 1);
}

function getValidMonths(startMonth, numMonthsToDisplay) {
    const validMonths = [];
    let monthToAppend = startMonth;
    for (let i = 0; i < numMonthsToDisplay; i++) {
        validMonths.push(monthToAppend);
        monthToAppend = getNextMonth(monthToAppend);
    }
    return validMonths;
}