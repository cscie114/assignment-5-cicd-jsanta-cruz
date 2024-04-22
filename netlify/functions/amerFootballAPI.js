const fetch = require('node-fetch');
require("dotenv").config();

const handler = async function (event, context) {
    // console.log(event)
    const apiKey = process.env.NFL_API_KEY;
    const { team } = event.queryStringParameters;
    const meta = {
        'X-RapidAPI-Key': apiKey,
        "X-RapidAPI-Host": "api-american-football.p.rapidapi.com",
        "Content-Type": "application/json"
        };
    const headers = new Headers(meta);
      const fetchOptions = {
          "headers": headers
      }
    try{
        const response = await fetch(`https://api-american-football.p.rapidapi.com/injuries?team=${team}`, fetchOptions)
        const data = await response.json()
        return {
           statusCode: 200,
           body: JSON.stringify({ data }) 
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: error.message })
        }
    }


}
module.exports = {handler}


/*
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
        */