import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Header from "./header.js";
import Archive from "./Archive";
import Post from "./post.js";
import Page404 from "./page404.js";
import Page from "./Page/Page.js";
import Loading from "./loading.js";
import { useTransition, animated } from "react-spring";
import Meta from "./meta";

const Theme = ({ state }) => {
  const transitions = useTransition(state.router.link, link => link, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });
  //const data = state.source.get(state.router.link);

  return (
    <>
      <Meta />
      <Global styles={globalStyles} />

      <Header />

      {transitions.map(({ item, props, key }) => {
        const data = state.source.get(item);
        return (
          <animated.div key={key} style={props}>
            <Absolute>
              {(data.isFetching && <Loading />) ||
                (data.isArchive && <Archive data={data} />) ||
                (data.isPage && <Page data={data} />) ||
                (data.isPostType && <Post data={data} />) ||
                (data.is404 && <Page404 />)}
            </Absolute>
          </animated.div>
        );
      })}
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

//- Page Transition stuff

const Absolute = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
