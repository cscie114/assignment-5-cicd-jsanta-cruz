import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { team_list, team_name, team_logo, } from "../components/layout.module.css";

const TeamsPage = (props) => {
  const teams = props.data.allTeam.nodes;
  return (
    <Layout pageTitle="All Teams">
      <ul className={team_list}>
        {teams.map((team) => {
          return (
            <li key={teams.id}>
              <Link to={"/teams/" + team?.code?.toLowerCase()}>
                <div>
                <div className={team_name}>{team.name}</div>
                <img loading="lazy" src={team?.logo} width={100} className={team_logo} alt={team.name} />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query TeamsPageQuery {
    allTeam {
      nodes {
        id
        name
        code
        logo
        owner
        stadium
        coach
        city
      }
    }
  }
`;

//export const Head = () => <Seo title="Parks"></Seo>

export default TeamsPage;
