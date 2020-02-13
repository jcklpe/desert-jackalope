import { css } from "frontity";
import { media } from "../../mixins";

const asideStyles = css`
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
`;

export { asideStyles };
