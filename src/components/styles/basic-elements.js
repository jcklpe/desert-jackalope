import { css } from "frontity";
import { media } from "../../mixins";

const basicElements = css`
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
    margin-bottom: 50px;
    width: 70%;
  }

  img {
    object-fit: cover;
    object-position: center;
    margin-bottom: 0 !important;
  }

  .wp-block-media-text.has-media-on-the-right {
    display: flex;
    flex-direction: row-reverse;

    ${media.tablet`
    flex-direction: column;
  `};

    ${media.mobile`
  flex-direction: column;
  `};

    & > div {
      width: 50%;
      ${media.tablet`
       width: 100%;
      `};

      ${media.mobile`
      width: 100%;
      `};
    }
    figure {
      width: 50%;
      max-height: 60vh;

      ${media.tablet`
       width: 100%;
       max-height: unset;
      `};

      ${media.mobile`
      width: 100%;
      max-height: unset;
      `};
      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  } /** end of resume page media  stuff */

  .wp-block-media-text {
    margin: 25px 20vw 25px !important;
    ${media.tablet`
       margin: 25px 10vw 25px !important;
      `};

    ${media.mobile`
      margin: 25px 10vw 25px !important;
      `};
    & * {
      margin: 0 !important;
    }
  }
`;

export { basicElements };
