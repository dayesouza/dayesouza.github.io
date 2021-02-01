import React from "react";
import LinkWithIcon from "../LinkWithIcon/LinkWithIcon";

import { useStaticQuery, graphql } from "gatsby";

export default function Links() {
  const resumePdf = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "Resume_dayenne" }) {
        name
        extension
        publicURL
      }
    }
  `);

  return (
    <div className="flex-row space-between">
      <LinkWithIcon
        url="https://www.linkedin.com/in/dayenne-souza/"
        icon={["fab", "linkedin-in"]}
        description="Linkedin"
      />
      <LinkWithIcon
        url="https://github.com/dayesouza"
        icon={["fab", "github"]}
        description="Github"
      />
      <LinkWithIcon
        target="_self"
        url="mailto:day.carol18@gmail.com?subject=From%20your%20website"
        icon="envelope"
        description="Send me an email"
      />
      <LinkWithIcon
        url={resumePdf.pdf.publicURL}
        icon="scroll"
        description="My resume"
      />
    </div>
  );
}
