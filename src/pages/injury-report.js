import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import * as playerStyles from "../components/player.module.css";
import fetch from "node-fetch";

const InjuryReport = () => {
  const [injuryData, setInjuryData] = useState({});
  useEffect(() => {
    fetch("/.netlify/functions/amerFootballAPI?team=1", {
      method: "GET",
    }).then((result) => {
        console.log("injury data 1", result)

        return result.json();
      }).then((json) => {
        console.log("injury: ", json.data)
        setInjuryData(json.data.response);
      });
  }, [injuryData.player]);
console.log("injury data", injuryData)
  return (
    <div>
      <Layout pageTitle="Injury Report for the 2023 Season">
        <div className={playerStyles.player_article}>
          {Object.entries(injuryData).map((item, i) => {
                return <article key={i}>
                <h3>{item[1].player.name}</h3>
                <img loading="lazy" width={250} height={194} src={item[1].player.image} alt={item[1].player.name} />
                <p>Injury: {item[1].description}</p>
                <p>Status: {item[1].status}</p>
                <p>Team: {item[1].team.name}</p>
                </article>
            })}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default InjuryReport;
