import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Archive from "../Archive";
import FeaturedMedia from "../featured-media";
// import * as palette from "../utilities/variables.js";

const Page = ({ state, actions, libraries }) => {
  // Get info of current page.
  const data = state.source.get(state.router.link);
  // Get the the page.
  const page = state.source[data.type][data.id];

  // Prefetch home pages and the archive component.
  useEffect(() => {
    actions.source.fetch("/");
    Archive.preload();
  }, []);

  return data.isReady ? (
    <Content>
      {state.theme.featured.showOnPage && (
        <FeaturedMedia id={page.featured_media} />
      )}
      <Container className="content-container">
        <div>
          <Title dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
          {data.isPage && <div></div>}
        </div>
        <Body>
          <libraries.html2react.Component html={page.content.rendered} />
        </Body>
      </Container>
    </Content>
  ) : null;
};

export default connect(Page);

//- CSS
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 850px;
  margin: 0;
  /* margin-top: -150px; */
  padding: 24px 50px;
  background-color: white;
  /* background-color: #efedec; */
  a {
    background-image: linear-gradient(45deg, var(--primary) 29%, #7200ff 100%);
    background-repeat: no-repeat;
    background-size: 120% 0.2em;
    background-position: -5px 100%;
    color: black;
    transition: all 0.25s 250ms var(--snappy);
    border-bottom: 1px solid var(--primary);
    padding: 0.1em 0.25em 0 0.25em;
    margin: auto 0.25em;
    &:hover {
      background-size: 120% 88%;
      color: white;
    }
  }
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: rgba(12, 17, 43, 1);
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const Author = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;
`;

const Body = styled.div`
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    text-decoration: none;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
