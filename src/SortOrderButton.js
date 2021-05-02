import React, { useState } from "react";
import ascendingScores from "./AscendingScores";
import descendingScores from "./DescendingScores";
import sortedCountries from "./SortedCountries";
import HighScoreTable from "./HighScoreTable";
import WorldWideTable from "./WorldWideTable";

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
        <section className="all-tables">
            <WorldWideTable />
            <h1 className="table-title">High Scores Per Country</h1>
            <button className="btn" onClick={changeOrder}>Sort </button>
            <HighScoreTable sortedCountries={sortedCountries} />
        </section>
    );
};

export default SortOrderButton;