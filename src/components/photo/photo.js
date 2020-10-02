import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Photo() {
  const imgQuery = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Img
        className="photo__home"
        imgStyle={{ objectFit: "contain" }}
        fluid={imgQuery.file.childImageSharp.fluid}
        alt="Dayenne's photo smiling, using glasses"
      />
    </>
  );
}

export default Photo;
