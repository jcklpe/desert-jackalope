import { css, connect, styled } from "frontity";
import { media } from "../../mixins";
import { basicElements } from "./basic-elements";
import { linkStyles } from "./link-styles";
import { blockQuoteStyles } from "./block-quote-styles";
import { codeBlockStyles } from "./code-block-styles";
import { asideStyles } from "./aside-styles";
import { footnoteStyles } from "./footnote-styles";
import { imagegalleryStyles } from "./image-gallery-styles";
import { mediaembedStyles } from "./media-embed-styles";
import { buttonStyles } from "./button-styles";
import { imageStyles } from "./image-styles";

const Article = styled.article`
  margin: 0;
  padding: 24px 0px;
  z-index: 5;
  position: relative;
  background: white;
  color: var(--dark80);
  word-break: break-word;

  * {
    max-width: 100%;
    position: relative;
    box-sizing: border-box;
  }

  & > * {
    position: relative;
  }

  ${basicElements}

  ${linkStyles}

  ${blockQuoteStyles}

  ${codeBlockStyles}

  ${asideStyles}

  ${footnoteStyles}

  ${imagegalleryStyles}

  ${mediaembedStyles}

  ${buttonStyles}

  ${imageStyles}

`;

export { Article };
