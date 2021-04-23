import React from "react";

const PlayerScore = function (props) {
    return (
            <tbody>
                {
                    props.score.map((player, playerIndex) => (
                        <tr key={playerIndex}>
                            <td>{player.n}</td>
                            <td>{player.s}</td>
                        </tr >
                    ))
                }
            </tbody>
        );
};

export default PlayerScore;

