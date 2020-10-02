import React from "react";
import { Helmet } from "react-helmet";
import "../styles/home.scss";
import HomeComponent from "../components/homeComponent";
import "../utils/fontawesome";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>Dayenne Souza</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Alegreya&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Dayenne's Personal Portfolio"></meta>
        <html lang="en" />
      </Helmet>

      <HomeComponent />
    </>
  );
}
