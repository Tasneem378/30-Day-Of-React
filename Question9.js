//Question9_Print the first company, middle and last company.

const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

const firstCompany = companies[0];

const middleIndex = Math.floor(companies.length / 2);
const middleCompany = companies[middleIndex];

const lastCompany = companies[companies.length - 1];

console.log("First Company:", firstCompany);
console.log("Middle Company:", middleCompany);
console.log("Last Company:", lastCompany);