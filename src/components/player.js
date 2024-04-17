import * as React from "react";
import { player_article } from './player.module.css';

const Player = ({ player }) => {
  return (
    <div className={player_article}>
        {player.players.map((ply, i) => (
        <article key={i}>
        <h3>{ply.name}</h3>
        <img loading="lazy" width={250} height={194} src={ply.image} alt={ply.name} />
        <p>Number: {ply.number}</p>
        <p>Position: {ply.position}</p>
        <p>Group: {ply.group}</p>
        </article>
        ))}
    </div>
  );
};
  

export default Player;




