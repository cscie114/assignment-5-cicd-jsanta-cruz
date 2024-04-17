import * as React from "react"
import './team.module.css'

const Team = ({ team }) => {
  return (
    <div>
        <img src={team.logo}  alt={team.name} />
        <ul>
          <li><p>Established: {team.established}</p></li>
          <li><p>Owner: {team.owner}</p></li>
          <li><p>Coach: {team.coach}</p></li>
          <li><p>City: {team.city}</p></li>
          <li><p>Stadium: {team.stadium}</p></li>

        </ul>
    </div>
  );
};

export default Team;