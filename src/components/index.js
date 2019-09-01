import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Page404 from "./page404.js";
import Loading from "./loading";

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }

  .content-container {
    background-color: #efedec;
  }

  .full-header-container {
    display: inline-grid;
    grid-template-columns: 1fr auto;
    width: 100%;
  }

  .header-container {
  }

  .nav-container {
  }
`;

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
      <HeadContainer className="full-header-container">
        <Header />
      </HeadContainer>
      <Body>
        {data.isFetching && <Loading />}
        {data.isArchive && <List />}
        {data.isPostType && <Post />}
        {data.is404 && <Page404 />}
      </Body>
    </>
  );
};

export default connect(Theme);

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1e9ff2;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  background-image: url(\"https://imgur.com/hSIaeYy.png\"
  );
`;
