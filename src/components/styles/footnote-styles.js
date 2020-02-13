import { css } from "frontity";
import { media } from "../../mixins";

const footnoteStyles = css`
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
`;

export { footnoteStyles };
