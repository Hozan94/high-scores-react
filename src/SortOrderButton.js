import React, { useState } from "react";
import ascendingScores from "./AscendingScores";
import descendingScores from "./DescendingScores";
import sortedCountries from "./SortedCountries";
import HighScoreTable from "./HighScoreTable";

const SortOrderButton = function () {
    const [order, setOrder] = useState(descendingScores);

    function changeOrder() {
        if (order === "des") {
            setOrder(ascendingScores);
        } else {
            setOrder(descendingScores);
        }
    }

    return (
        <section className="scores-section">
            <h1>High Scores Per Country</h1>
            <button onClick={changeOrder}>Sort </button>
            <HighScoreTable sortedCountries={sortedCountries} />
        </section>
    );
};

export default SortOrderButton;