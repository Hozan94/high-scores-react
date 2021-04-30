import allCountryScores from "./Scores";

//Sort country names alphabetically
allCountryScores.sort(function compareNames(countryA, countryB) {
    let nameA = countryA.name.toLowerCase();
    let nameB = countryB.name.toLowerCase();

    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
    return 0;
});

const sortedCountries = allCountryScores;

export default sortedCountries;