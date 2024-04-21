import * as React from "react";

const Footer = ({ data }) => {
    return (
<footer>
{data.site.siteMetadata.title} Example footer developed for CSCI E-114, Spring 2024.
</footer>
    );
}

export default Footer
