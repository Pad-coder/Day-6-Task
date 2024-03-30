const data = require('./data');
let countryNames = data.filter(country => country.region === "Asia" || country.continent === "Asia").map(item => item.name.common );


let countriesWithLowPopulation = data.filter(country => country.population < 200000);


let namesOfCountriesWithLowPopulation = countriesWithLowPopulation.map(country => country.name.common);


console.log("Printing the countries from Asia continent /region using Filter function")
console.log(countryNames)


console.log("Printing the contry names population of less than 2 lakhs using Filter function")
console.log(namesOfCountriesWithLowPopulation)



console.log("Printing the contry names population of less than 2 lakhs using Filter function")
let display=data.forEach(e=>{
    console.log(e.name.common,e.flag,e.capital);
})

let totalPopulation = data.reduce((total, country) => total + country.population, 0);
console.log("Total population of all countries:", totalPopulation);



let usDollarCountry = data.find(country => Object.keys(country.currencies).includes("USD"));
console.log("Country that uses US dollars as currency:", usDollarCountry.name.common);