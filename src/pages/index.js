import * as React from "react";
import Layout from "../components/layout";
import Footer from "../components/footer";
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <div>
    <Layout pageTitle="The NFL Roster for the 2023 Season">
        <StaticImage src="../images/nfl-hero-sf.webp" height={600} alt="San Francisco 49ers running back Christian McCaffrey (23)"></StaticImage>
    </Layout>
    <Footer />
    </div>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>
