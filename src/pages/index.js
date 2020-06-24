import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dayenne Souza</title>
        <meta name="description" content="Dayenne's Personal Portfolio"></meta>
      </Helmet>
      <div>Hello Day!</div>
    </>
  );
}
