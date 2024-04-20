import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <Layout pageTitle="The NFL Roster for the 2023 Season!">
        <StaticImage src="../images/nfl-hero-sf.webp" height={600} alt="San Francisco 49ers running back Christian McCaffrey (23)"></StaticImage>
    </Layout>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>
