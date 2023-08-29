//Question13_Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found.

const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

function findCompany(companyName){
    const foundCompany = itCompanies.find(company => company === companyName);
    if(foundCompany){
        return foundCompany;
    }
    else{
        return "Company not found";
    }
}
const companyNameToSearch = "Google";
const result = findCompany(companyNameToSearch);
console.log(result);