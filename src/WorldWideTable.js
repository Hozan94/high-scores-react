import React from "react";
import highestScoreFromEachCountry from "./HighestScoreFromEachCountry";

const WorldWideTable = function () {
    return (
        <article className="highest-score-table">
            <h1 className="table-title">High Scores: World-Wide</h1>
            <table>
                <tbody>
                    {highestScoreFromEachCountry.map((player, playerIndex) => (
                        <tr key={playerIndex}>
                            <td>{player[0]}</td>
                            <td>{player[1]}</td>
                        </tr >
                    ))}
                </tbody>
            </table>
        </article>
    );
};

export default WorldWideTable;