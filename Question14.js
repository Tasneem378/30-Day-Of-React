//Question14_Filter out companies which have more than one 'o' without the filter method.

const companyNames = ['Google', 'Microsoft', 'Facebook', 'Amazon', 'Apple'];
function hasMoreThanOneO(companyName) {
  let count = 0;
  for (let i = 0; i < companyName.length; i++) {
    if (companyName[i].toLowerCase() === 'o') {
      count++;
      if (count > 1) {
        return true;
      }
    }
  }
  return false;
}
const filteredCompanies = companyNames.filter(companyName => !hasMoreThanOneO(companyName));
console.log(filteredCompanies);