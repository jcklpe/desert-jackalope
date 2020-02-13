import { css } from "frontity";
import { media } from "../../mixins";

const mediaembedStyles = css`
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
`;

export { mediaembedStyles };
