//Question1.Exercise level3_Write a program which tells the number of days in a month.

const month = prompt("Enter a month:");

let daysInMonth;

if (month === "january" || month === "march" || month === "may" || month === "july" || month === "august" || month === "october" || month === "december") {
    daysInMonth = 31;
} else if (month === "april" || month === "june" || month === "september" || month === "november") {
    daysInMonth = 30;
} else if (month === "february") {
    daysInMonth = "28 or 29";
} else {
    daysInMonth = "Invalid month";
}

if (daysInMonth === "Invalid month") {
    console.log(daysInMonth);
} else {
    console.log(`${month} has ${daysInMonth} days.`);
}



























































































































































 