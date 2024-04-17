import * as React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/layout'
import Team from '../../components/team'
import Player from '../../components/player'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';



const TeamPage = ( { pageContext, data } ) => {
    const team = data.allTeam.nodes[0];
    const player = data.allPlayersJson.nodes[0];
    const qbMarkDown = data.allMarkdownRemark.nodes[0];
    const qbIcon = getImage(qbMarkDown?.frontmatter?.image?.childImageSharp?.gatsbyImageData)
    console.log(player);
    return (
        <Layout pageTitle={"2023 "+team.name}>
          <Team key={team.id} team={team}></Team>
           <h3>All Players</h3>
           <GatsbyImage image={qbIcon} />
           <Player key={player.id} player={player}></Player>
        </Layout>
    );
  };

  export const query = graphql`
  query TeamPageQuery ($code: String){
      allTeam(filter: {code: {eq: $code}}) {
          nodes {
            id
            name
            established
            code
            logo
            owner
            stadium
            coach
            city
          }
        }
      allPlayersJson(filter: {code: {eq: $code}}) {
        nodes {
          id
          code
          players {
            age
            college
            experience
            group
            height
            id
            image
            name
            number
            position
            salary
            weight
          }
          team
        }
      }
      allMarkdownRemark {
        nodes {
          frontmatter {
            image {
              childImageSharp {
              gatsbyImageData(height: 50)
          }
        }
        position
      }
    }
    }
  }
`

export default TeamPage