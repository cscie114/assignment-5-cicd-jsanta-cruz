import React, { useState, useEffect } from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import fetch from "node-fetch";

const InjuryReport = () => {
  const [injuryData, setInjuryData] = useState({});
  useEffect(() => {
    fetch("/.netlify/functions/amerFootballAPI?team=1", {
      method: "GET",
    })
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        console.log("injury: ", json.data)
        setInjuryData(json.data.response);
      });
  }, [injuryData.id]);

  return (
    <div>
      <Layout pageTitle="Injury Report for the 2023 Season">
        <ul>
          {injuryData.map((injury, index) => {
            return (
              <li key={index}>
                <div>
                  {injury?.player?.name} - {injury?.description}
                </div>
              </li>
            );
          })}
        </ul>
      </Layout>
      <Footer />
    </div>
  );
};

export default InjuryReport;
