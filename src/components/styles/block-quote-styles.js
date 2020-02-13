import { css } from "frontity";
import { media } from "../../mixins";

const blockQuoteStyles = css`
  /*//- Block Quote */
  blockquote {
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid var(--dark);
    padding: 4px 16px;
    margin: 30px 22vw 0;

    ${media.mobile` margin: 30px 12vw 0;
    padding: 6px 16px;
    `};

    p {
      margin: 0;
    }
  }
`;

export { blockQuoteStyles };
