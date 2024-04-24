[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/W3lOw23E)
### assignment-5-cicd
#### Harvard CSCI E114

This project uses the [ API-SPORTS](https://rapidapi.com/api-sports/api/api-american-football/details) API-AMERICAN-FOOTBALL

Technical documentation is here: [API-SPORTS NFL](https://api-sports.io/documentation/nfl/v1)

You will need to register for a [free account](https://rapidapi.com/api-sports/api/api-american-football/pricing) and obtain an API key

Once you register for the account you will see on the main dashboard your API key that is redacted in this image:
![Screenshot of API dashboard](https://github.com/cscie114/assignment-4-gatsby-jsanta-cruz/blob/main/src/images/Screenshot%202024-04-10%20at%204.21.34%E2%80%AFPM.png)

Using a .env file paste your API key value using the following stucture:
```
NFL_API_KEY="YOUR KEY HERE"

```
Clone this repository using SSH to your local source folder:
git@github.com:cscie114/assignment-4-gatsby-jsanta-cruz.git

To run the project:
- Install the project using **npm install**
- If you do not have gatsby installed run: **npm install -g gatsby-cli**
- At the root level of the assignment directory, type the following at the command prompt:
**gatsby develop**

To ensure that GitHub actions are set up
- Review the node.js.yml file to see if you can run the commands
- The package.JSON has the commands included to build the project
- Ensure that your API Key that you are using to call the API-SPORT NFL API is configured as a secret
To run CI tests using Jest and ESLINT
- Install jest so that you can run the unit test locally
- Install eslint
- Install @testing-library/react
- Install @testing-library/jest-dom

To run Netlify CLI locally to see the serverless function
- Install  **npm install netlify-cli --save-dev**
- Login **npx netlify login** using your Netlify account
- Link Netlify CLI to your project **npx netlify link** as an authorized app

I hope that you enjoy this project! :football: