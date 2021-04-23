import React from "react";
import allCountryScores from "./Scores";
import HighScoreTable from "./HighScoreTable";

const ScoreTables = function () {
    return (
        <section className="scores-section">
            <h1>High Scores Per Country</h1>
            <HighScoreTable allCountryScores={allCountryScores} />
        </section>
    );
};

export default ScoreTables;