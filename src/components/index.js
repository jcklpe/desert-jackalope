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
import { colors } from "../theme";
import Footer from "./Footer";
//import desertJackalope from "../index";
//const primaryColor = desertJackalope.theme.colors.primary.default;

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
      {/* <Footer /> */}
    </>
  );
};

export default connect(Theme);

//- GLOBAL STYLES CSS

//- Color vars
const primaryColor = colors.primary.default;
const heavyprimaryColor = colors.primary.heavy;
const accentColor = colors.accent;
const darkColor = colors.dark[100];
const darkColor90 = colors.dark[90];
const darkColor80 = colors.dark[80];
const darkColor30 = colors.dark[30];

// set global styles
const globalStyles = css`
  @import url("https://fonts.googleapis.com/css?family=Space+Mono:400,400i,700,700i&display=swap");

  :root {
    --primary-heavy: ${heavyprimaryColor};
    --primary: ${primaryColor};
    --snappy: cubic-bezier(0.075, 0.82, 0.165, 1);
    --heavy-snap: cubic-bezier(0.6, -0.28, 0.735, 0.045);
    --accent: ${accentColor};
    --dark: ${darkColor};
    --dark90: ${darkColor90};
    --dark80: ${darkColor80};
    --dark30: ${darkColor30};
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
