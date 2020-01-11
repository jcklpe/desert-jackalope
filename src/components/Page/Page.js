import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import Archive from "../Archive";
//JUNK? import FeaturedMedia from "../featured-media";

const Page = ({ state, actions, libraries, data }) => {
  // Get the the post.
  const page = state.source[data.type][data.id];
  // Get the html2react component.		  // Prefetch home posts and the list component.
  const Html2React = libraries.html2react.Component;

  // Prefetch home posts and the archive component.
  useEffect(() => {
    actions.source.fetch("/");
    Archive.preload();
  }, []);

  return data.isReady ? (
    <>
      <Article className="content-area">
        <Title dangerouslySetInnerHTML={{ __html: page.title.rendered }} />

        <Html2React html={page.content.rendered} />
      </Article>
    </>
  ) : null;
};

export default connect(Page);

//- CSS
//JUNK? not sure if junk. Not currently being used but I forget what I was using this for originally. Commented out. if nothing breaks for awhile then I'll delete
// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const Article = styled.article`
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

  div.wp-block-button.resume {
    display: inline-flex;
    padding: 15px 40px;
    line-height: 24px;
    overflow: hidden;
    backface-visibility: hidden;
    border: 0px;
    background: linear-gradient(45deg, var(--primary) 29%, var(--primary) 100%);
    cursor: pointer;
    transition: all 1s var(--snappy);
    * {
      text-decoration: none;
      border-bottom: none;
    }

    a {
      color: white;
      box-shadow: none;
      background-image: none !important;
    }
    &:hover {
      background: linear-gradient(45deg, var(--primary) 29%, #7200ff 100%);
      transition: all 1s var(--snappy);
    }
  }

  .wp-block-media-text.has-media-on-the-right {
    display: flex;
    flex-direction: row-reverse;

    & > div {
      width: 50%;
    }
    figure {
      width: 50%;
      max-height: 60vh;
      img {
        max-height: 100%;
        max-width: 100%;
      }
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
