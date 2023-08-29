//Question21_Remove the middle IT company or companies from the array.

const ITCompany = [
    "Facebook",
    " Google",
    " Microsoft",
    " Apple",
    " IBM",
    " Oracle",
    " Amazon",
  ];
  
  const middleIndex = Math.floor(ITCompany.length / 2);
  ITCompany.splice(middleIndex, 1);
  console.log(ITCompany);
  