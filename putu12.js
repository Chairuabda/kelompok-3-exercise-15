function ageCalculator(yearBorn, monthBorn, dateBorn) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateNow = new Date();
  const born = new Date(yearBorn, monthBorn, dateBorn);
  const actualBorn = new Date(yearBorn, monthBorn - 1, dateBorn);
  let year = Math.floor((dateNow - born) / 86400000 / 12 / 30);
  if (
    dateNow.getMonth() + 1 - born.getMonth() < 0 ||
    dateNow.getDate() - born.getDate() < 0 ||
    born.getMonth() === 0
  ) {
    year--;
  }
  return `Born in ${actualBorn.getDate()} ${
    months[actualBorn.getMonth()]
  } ${actualBorn.getFullYear()}, your age is ${year} year`;
}

console.log(ageCalculator(2000, 1, 19));
console.log(ageCalculator(1995, 9, 20));
console.log(ageCalculator(1999, 9, 25));
console.log(ageCalculator(2005, 3, 7));
