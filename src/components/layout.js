import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';
import { logo, nav } from './layout.module.css';

const Layout = ({ pageTitle, children }) => {

        // Get the site title (data from gatsby-config.js)
        const data = useStaticQuery(graphql`
        query {
        site {
            siteMetadata {
                title
            }
        }
        }
    `)
  return (
    <div>
      <header>
        <div className={logo}>
        <Link to="/"><StaticImage src="../images/NFL_logo_PNG12.png" height={100} alt="NFL logo"></StaticImage></Link>
        </div>
        <h3>{data.site.siteMetadata.title}</h3>
        <nav className={nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/teams">All Teams</Link>
            </li>
            <li>
              <Link to="/injury-report">Injury Report</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );
};

export default Layout;
