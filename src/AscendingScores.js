import sortedCountries from "./SortedCountries";

function ascendingScores() {
    sortedCountries.forEach((countryScore) => {
        countryScore.scores.sort(function compareScoresOfEachPlayer(playerA, playerB) {
            return playerA.s - playerB.s;
        });
    });
    return "asc";
}

export default ascendingScores;