import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = function (props) {
    return (
        props.sortedCountries.map((country, countryIndex) => (
            <article className="country-table" key={countryIndex}>
                <h2 className="country-title">High Scores: {country.name}</h2>
                <table>
                    <PlayerScore score={country.scores} />
                </table>
            </article>
        ))
    );
};

export default HighScoreTable;