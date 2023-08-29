//Question11_Change each company name to uppercase one by one and print them out.

const companyNames = ["apple", "google", "microsoft", "amazon", "facebook"];

for (let i = 0; i < companyNames.length; i++){
  const uppercaseName = companyNames[i].toUpperCase();
  console.log(uppercaseName);
}
