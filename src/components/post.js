import React, { useEffect } from "react";

import { connect, styled } from "frontity";
//JUNK? import Link from "./link";
import Archive from "./Archive";
import FeaturedMedia from "./featured-media";

// import * as palette from "../utilities/variables.js";
import { media } from "./utilities/mixins";

const Post = ({ state, actions, libraries, data }) => {
  // Get the the post.
  const post = state.source[data.type][data.id];
  // Get the html2react component.		  // Prefetch home posts and the list component.
  const Html2React = libraries.html2react.Component;

  // Prefetch home posts and the archive component.
  useEffect(() => {
    actions.source.fetch("/");
    Archive.preload();
  }, []);

  return data.isReady ? (
    <>
      {" "}
      <FeaturedMedia id={post.featured_media} />{" "}
      <Article className="content-area">
        {" "}
        <Title
          dangerouslySetInnerHTML={{
            __html: post.title.rendered
          }}
        />{" "}
        <Html2React html={post.content.rendered} />{" "}
      </Article>{" "}
    </>
  ) : null;
};

export default connect(Post);

//- 𝗖𝗦𝗦

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  margin-bottom: 8px;
  color: rgba(12, 17, 43, 1);
  margin: -250px 20vw 0;
  padding: 0 5px;

  ${media.tablet` margin: -250px 13.5vw 0;
  `};

  ${media.mobile` margin: -100px 13vw 0;
  `};
`;

const Article = styled.article`
  margin: 0;
  padding: 24px 0px;
  z-index: 5;
  position: relative;
  background: white;
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;

  * {
    max-width: 100%;
    position: relative;
    box-sizing: border-box;
  }

  & > * {
    position: relative;
  }

  /*//- Article fake paper top */
  &::before {
    /* height: 300px; */
    width: 100%;
    padding: 150px 31.5vw 150px 31.5vw;
    margin: -300px 18.5vw 0 18.5vw;
    z-index: 3;
    background: white;
    position: relative;
    top: -150px;
    z-index: -1;
    content: "";

    ${media.tablet` padding: 150px 40vw 150px 40vw;
    margin: -300px 9vw 0 9vw;
    top: -150px;
    `};

    ${media.mobile` margin: -30px 10vw 0 10vw;
    padding: 50px 40vw 50px 40vw;
    top: -80px;
    `};
  }

  /*//- Post formatting elements */

  h2 {
    margin: 30px 21vw 0;
    padding: 0 5px;

    ${media.tablet` margin: 30px 15vw 0;
    `};

    ${media.mobile` margin: 30px 13.5vw 0;
    `};
  }

  h3 {
    margin: 30px 21.5vw 0;
    padding: 0 5px;

    ${media.tablet` margin: 30px 15.25vw 0;
    `};

    ${media.mobile` margin: 30px 13.75vw 0;
    `};
  }

  h4 {
    margin: 30px 21.9vw 0;
    padding: 0 5px;

    ${media.tablet` margin: 30px 15.5vw 0;
    `};

    ${media.mobile` margin: 30px 13.85vw 0;
    `};
  }

  p {
    line-height: 1.6em;
    margin: 30px 20vw 0;
    padding: 0 50px;

    ${media.tablet` margin: 30px 12vw 0;
    `};

    ${media.mobile` margin: 20px 14vw 0;
    padding: 0;
    `};
  }

  ul {
    margin: 30px 25vw 0;

    ${media.mobile` margin: 30px 14vw 0;
    padding: 0;
    `};
  }

  ol {
    margin: 30px 25vw 0;

    ${media.mobile` margin: 30px 14vw 0;
    padding: 0;
    `};
  }

  hr {
    margin-top: 50px;
  }

  img {
    /* width: 100%; */
    object-fit: cover;
    object-position: center;
    margin-bottom: 0 !important;
  }

  /*//- Links */

  p {
    a {
      background-image: linear-gradient(
        45deg,
        var(--primary) 29%,
        #7200ff 100%
      );
      background-repeat: no-repeat;
      background-size: 120% 0.2em;
      background-position: -5px 100%;
      color: black;
      transition: all 0.25s 250ms var(--snappy);
      border-bottom: 1px solid var(--primary);
      padding: 0.1em 0.25em 0 0.25em;

      &:hover,
      &:active,
      &:focus {
        background-size: 120% 88%;
        color: white;
      }
    }
  }

  /*//- Block Quote */
  blockquote {
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
    margin: 30px 22vw 0;

    ${media.mobile` margin: 30px 12vw 0;
    padding: 6px 16px;
    `};

    p {
      margin: 0;
    }
  }

  /*//- Code Block */
  pre.wp-block-code {
    max-width: 100vw;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
    text-align: justify;
    margin: 30px 28vw 0;
    padding: 25px 50px;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.15) 0.5em,
        rgba(255, 255, 255, 0.05) 2em,
        rgba(255, 255, 255, 0.05) 2em,
        rgba(255, 255, 255, 0)
      ),
      linear-gradient(to bottom, #222, #222 50%, #000 50%, #000);
    border-radius: 5px;

    background-size: 100% 100%, 100% 2px;
    color: white;

    ${media.mobile` margin: 30px 14vw 0;
    `};
  }

  /*//-  Notice/Aside */
  aside,
  .notice,
  .wp-block-atomic-blocks-ab-notice {
    padding: 50px;
    margin: 30px 23vw 0;
    border-left: black 6px solid;

    ${media.mobile` margin: 30px 4vw 0 0;
    padding: 50px 30px 50px 40px;
    `};

    div.ab-notice-text {
      margin: 0;
    }

    p {
      font-style: italic;
      margin: unset;
    }

    .ab-notice-title {
      margin: 0 0 25px -25px;
      font-weight: 700;
      font-style: italic;
    }
  }

  /*//-  Columns */

  div.wp-block-columns {
  }

  /*//-  legacy fix for hacky notice */
  p.notice {
    ${media.mobile` margin: 30px 14vw 0;
    padding: 50px;
    `};
  }

  /* //- footnotes styling*/
  section.wp-block-abt-footnotes {
    ol {
      list-style: none;
    }

    li {
      margin: 0;
    }

    div {
      margin: 0 15px 20px 15px;
    }

    div.abt-footnotes-item__marker {
      position: absolute;
      left: -40px;
      font-size: 2em;
    }
  }

  /* //- IMAGE GALLERY STUFF */
  figure.wp-block-gallery {
    list-style-type: none !important;
    margin: 30px 0 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    ul {
      list-style-type: none !important;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      align-items: center;
      margin: unset !important;
      padding: 0 !important;

      li {
        margin: 15px 15px;
        figure {
          max-height: 100%;
          max-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: unset;
          width: inherit;
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            max-height: 100%;
            max-width: 100%;
            width: inherit;
          }
          img {
            max-height: 100%;
            max-width: 100%;
          }
        }
      }
    }

    &.columns-2 {
      li.blocks-gallery-item {
        width: 42vw;

        figure {
          width: 42vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.block-gallery-item {
          height: 49vw;
          width: 49vw;

          figure {
            height: 49vw;
            width: 49vw;

            img {
              object-fit: cover;
            }
          }
        }
      }
    }

    &.columns-3 {
      li.blocks-gallery-item {
        width: 30vw;

        figure {
          width: 30vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.blocks-gallery-item {
          height: 32vw;
          width: 32vw;

          figure {
            height: 100%;
            width: 100%;

            img {
              object-fit: cover;
            }
          }
        }
      }
    }

    &.columns-4 {
      li.blocks-gallery-item {
        width: 22vw;

        figure {
          width: 22vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.block-gallery-item {
          height: 24vw;
          width: 24vw;

          figure {
            height: 24vw;
            width: 24vw;

            img {
              object-fit: cover;
            }
          }
        }
      }
    }

    &.columns-5 {
      li.blocks-gallery-item {
        width: 17vw;

        figure {
          width: 17vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.block-gallery-item {
          height: 19vw;
          width: 19vw;

          figure {
            height: 19vw;
            width: 19vw;

            img {
              object-fit: cover;
              max-height: unset;
              max-width: unset;
              min-height: 100%;
              min-width: 100%;
            }
          }
        }
      }
    }

    &.columns-6 {
      li.blocks-gallery-item {
        width: 15vw;

        figure {
          width: 15vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.blocks-gallery-item {
          height: 16vw;
          width: 16vw;

          figure {
            height: 16vw;
            width: 16vw;

            a {
              max-height: 16vw;
              max-width: 16vw;
              overflow: hidden;
            }

            img {
              object-fit: cover;
              max-height: unset;
              max-width: unset;
              min-height: 100%;
              min-width: 100%;
            }
          }
        }
      }
    }
  }

  /*end of image gallery stuff*/

  /*//TODO: Refactor media embeds and add alignment rules*/
  /* //- Media embeds */
  div.wp-block-embed__wrapper {
    margin: 0 !important;
  }

  .wp-block-embed-vimeo,
  .sketchfab-embed-wrapper,
  .wp-block-embed-youtube {
    display: flex;
    margin: 25px 0 50px 0;
    justify-content: center;
    align-items: center;
    position: relative;
    background: black;
    padding: 1.5vw;
    height: 70vh;
    margin: 75px 0;
    padding: 0;
    max-width: 100vw;

    .wp-block-embed__wrapper {
      height: 100%;
      width: 100%;
    }

    /*iframe embed*/
    iframe {
      position: relative;
      width: 100%;
      height: 100%;
      margin: 0;

      #document {
        body {
          #player.player {
            div.vp-player.js-playerLayout {
              position: static !important;
            }

            /*end of vp-player */
          }

          /*end of #player.player */
        }

        /*end of body */
      }

      /*end of document*/
    }

    /*end of iframe */
  }

  /*end of 3 full width wp-block-embeds */

  figure {
    margin-bottom: 0px;
    /* margin-right: 200px; */

    .wp-block-embed-spotify {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .wp-block-embed__wrapper {
        height: 100%;
        width: 100%;
      }

      iframe {
        position: relative;
        width: unset;
        height: unset;
        padding: 25px 40px;
        background: black;
        margin: 40px;
      }

      /*end of iframe */
    }

    &.alignright {
      margin-right: 300px;

      iframe {
        height: 400px;
        padding-bottom: 50px;
        background: black;
        margin-right: 100px;
      }

      /*end of iframe */
    }

    /*end of alignright*/
  }

  /* end of media embeds */

  /* end of media embeds */
  /* //- legacy embeds for youtube */
  iframe {
    position: relative;
    width: 100%;
    height: 70vh;
    margin: 0;

    #document {
      body {
        #player.player {
          div.vp-player.js-playerLayout {
            position: static !important;
          }
        }
      }
    }
  }

  /* //- button */
  div.wp-block-button.aligncenter {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      padding: 10px 20px;
    }
  }

  /* //- IMAGE STUFF */

  .wp-block-image {
    margin: 25px 0 100px 0;
    display: inline;

    &.alignfull {
      width: 100%;

      img {
        width: 100% !important;
      }
    }

    &.alignwide {
      /* max-width: 100%; */
      display: flexbox;
      justify-content: center;
      align-items: center;

      img {
        /* width: 100% !important; */
      }
    }

    .aligncenter {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100% !important;
      margin-bottom: 50px;
    }

    .alignright {
      max-width: 40% !important;
      float: right;
      margin-right: 10vw;
      margin-left: 50px;

      ${media.mobile` float: none !important;
      width: 100%;
      margin: 20px 0 50px 0 !important;
      max-width: 100vw !important;
      `};
    }

    .alignleft {
      max-width: 35% !important;
      float: left;
      margin-left: 5vw;
      z-index: 50;

      ${media.mobile` float: none !important;
      margin: 20px 0 50px 0 !important;
      max-width: 100vw !important;
      `};
    }

    figcaption {
      font-size: 0.7em;
      text-align: center;
      max-width: 50%;
      margin: auto;
      margin-top: 25px;
    }

    img {
      ${media.tablet` width: 100%;

      `};
    }
  }

  /* //- legacy image stuff for frontity test blog */
  /* figure {
    display: flex;
    justify-content: center;
    justify-items: content;
    flex-direction: column;
    text-align: center;
    max-width: unset !important;
    width: unset !important;
    margin: 10px 0 50px;

    a {
      span {
        padding-bottom: 0px;
        img {
          position: relative;
        }
      }
    }
    span {
      padding-bottom: 0px;
      img {
        position: relative;
      }
    }
    figcaption {
      text-align: center;
    }
  } */
`;
