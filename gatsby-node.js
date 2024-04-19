
const fetch = require('node-fetch');
require("dotenv").config();


exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
   const { createNode } = actions;

    let baseUrl = "https://api-american-football.p.rapidapi.com/teams";
    let apiKey = process.env.NFL_API_KEY;
  
    let requestParams = {
      league: 1,
      season: 2023
    }
  
    let params = new URLSearchParams(requestParams);
    let queryString = params.toString();
  
    let requestUrl = `${baseUrl}?${queryString}`;
  
    console.log(requestUrl);
    const meta = {
      'X-RapidAPI-Key': apiKey,
      "X-RapidAPI-Host": "api-american-football.p.rapidapi.com",
      "Content-Type": "application/json"
      };
  const headers = new Headers(meta);
    const fetchOptions = {
        "headers": headers
    }
let responseData = {}
        let response = await fetch(requestUrl, fetchOptions);
        responseData = await response.json();

    
console.log(responseData)


     responseData?.response?.forEach((team) => {
        console.log("data: " + team),
        createNode({
        ...team,
        id: createNodeId(team.id), //[ pass a unique identifier here: [movie.id] for example
        parent: null,
        children: [],
        internal: {
            type: 'Team',   // name of collection in graphql schema
            contentDigest: createContentDigest(team),
        },
        })
    })
}
