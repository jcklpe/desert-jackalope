import { css } from "frontity";
import { media } from "../../mixins";

const codeBlockStyles = css`
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
`;

export { codeBlockStyles };
