import sortedCountries from "./SortedCountries";

function descendingScores() {
    sortedCountries.forEach((countryScore) => {
        countryScore.scores.sort(function compareScoresOfEachPlayer(playerA, playerB) {
            return playerB.s - playerA.s;
        });
    });
    return "des";
}

export default descendingScores;