import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header.js";
import Archive from "./Archive";
import Post from "./post.js";
import Page404 from "./page404.js";
import Loading from "./loading.js";
import Page from "./Page/Page.js";
import { media } from "./utilities/mixins";

const Theme = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      <Global styles={globalStyles} />

      <Header />

      {data.isFetching && <Loading />}
      {data.isArchive && <Archive />}
      {(data.isPage && <Page />) || (data.isPostType && <Post />)}
      {data.is404 && <Page404 />}
    </>
  );
};

export default connect(Theme);
//- GLOBAL STYLES CSS
const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i&display=swap");

  :root {
    --primary: #1f38c5;
    --snappy: cubic-bezier(0.075, 0.82, 0.165, 1);
    --heavy-snap: cubic-bezier(0.6, -0.28, 0.735, 0.045);
  }

  body {
    margin: 0;
    font-family: "Space Mono", "Segoe UI", Roboto, "Droid Sans",
      "Helvetica Neue", Helvetica, Arial, sans-serif;
    box-sizing: border-box;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;
