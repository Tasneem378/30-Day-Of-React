//Question19_Slice out the middle IT company or companies from the array.

const itCompanies = ["apple", "google", "microsoft", "amazon", "facebook"];

const middleIndex = Math.floor(itCompanies.length / 2);

const removedCompanies = itCompanies.splice(middleIndex, 1);

console.log('Removed companies:', removedCompanies);
console.log('Remaining companies:', itCompanies);