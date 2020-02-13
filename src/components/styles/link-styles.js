import { css } from "frontity";
import { media } from "../../mixins";

const linkStyles = css`
  /*//- Links */

  p {
    a {
      background-image: linear-gradient(
        45deg,
        var(--primary) 29%,
        var(--accent) 100%
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
`;

export { linkStyles };
