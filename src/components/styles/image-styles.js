import { css } from "frontity";
import { media } from "../../mixins";

const imageStyles = css`
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
`;

export { imageStyles };
