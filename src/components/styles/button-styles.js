import { css } from "frontity";
import { media } from "../../mixins";

const buttonStyles = css`
  /* //- Buttons */
  div.wp-block-buttons {
    margin: 50px 25vw 50px;
  }
  div.wp-block-button.aligncenter {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      padding: 10px 20px;
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
      background: linear-gradient(
        45deg,
        var(--primary) 29%,
        var(--accent) 100%
      );
      transition: all 1s var(--snappy);
    }
  } /* end of resume button*/
`;

export { buttonStyles };
