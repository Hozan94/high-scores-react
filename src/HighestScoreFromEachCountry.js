import sortedCountries from "./SortedCountries";

sortedCountries.forEach((countryScore) => {
    countryScore.scores.sort(function compareScoresOfEachPlayer(playerA, playerB) {
        return playerB.s - playerA.s;
    });
});
let highestScoreFromEachCountry = sortedCountries.map((country) => ([country.scores[0].n, country.scores[0].s]));

highestScoreFromEachCountry.sort(function compareScoresOfEachPlayer(playerA, playerB) {
    return playerB[1] - playerA[1];
});

export default highestScoreFromEachCountry;