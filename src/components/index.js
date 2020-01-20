import React from "react";
import { Global, css, connect, styled } from "frontity";
import Header from "./Header";
import Archive from "./Archive";
import Post from "./Post";
import Page404 from "./Page404";
import Page from "./Page";
import Loading from "./Loading";
import { useTransition, animated } from "react-spring";
import Meta from "./Meta";

const Theme = ({ state }) => {
  const transitions = useTransition(state.router.link, link => link, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

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
    --primary-heavy: #1f38c5;
    --primary: #2657eb;
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
