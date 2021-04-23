import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = function (props) {
    return (
            props.allCountryScores.map((country, countryIndex) => (
                <article className="our-country" key={countryIndex}>
                    <h2 >High Scores: {country.name}</h2>
                    <table>
                        <PlayerScore score={country.scores}/>
                    </table>
                </article>
            ))
    );
};

export default HighScoreTable;