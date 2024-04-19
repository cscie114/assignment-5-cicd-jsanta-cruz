
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


     responseData?.response.forEach((team) => {
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


// i tried to use EleventyFetch with Gatsby but I could not successfully access the data that was returned in the createNode()
/*module.exports = async function() {
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
      "X-RapidAPI-Host": "api-american-football.p.rapidapi.com"
      };
  const headers = new Headers(meta);
  try {
    let responseData = await eleventyFetch(requestUrl, {
      directory: ".cache_11ty",
      duration: "1d",
      type: "json",
      fetchOptions: {
		headers
	}
    })
   console.log(responseData)
  } catch (err) {
    console.error("Something went wrong with request\n" + requestUrl);
    console.log(err);
  }
return responseData
}
*/