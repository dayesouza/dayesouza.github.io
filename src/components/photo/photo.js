import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

function Photo() {
  const imgQuery = useStaticQuery(graphql`
    query {
      web: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobile: file(relativePath: { eq: "working.jpg" }) {
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
      {console.log(imgQuery)}
      <Img
        className="photo__home--web"
        imgStyle={{ objectFit: "contain" }}
        fluid={imgQuery.web.childImageSharp.fluid}
        alt="Dayenne's photo smiling, using glasses"
      />
      <Img
        className="photo__home--mobile"
        imgStyle={{ objectFit: "contain" }}
        fluid={imgQuery.mobile.childImageSharp.fluid}
        alt="Dayenne's photo working, with a window behind her and some trees"
      />
    </>
  );
}

export default Photo;
