import { css } from "frontity";
import { media } from "../../mixins";

const imagegalleryStyles = css`
  /* //- IMAGE GALLERY STUFF */
  figure.wp-block-gallery {
    list-style-type: none !important;
    margin: 30px 0 0 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    ul {
      list-style-type: none !important;
      display: flex;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      align-items: center;
      margin: unset !important;
      padding: 0 !important;

      li {
        margin: 15px 15px;
        figure {
          max-height: 100%;
          max-width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: unset;
          width: inherit;
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            max-height: 100%;
            max-width: 100%;
            width: inherit;
          }
          img {
            max-height: 100%;
            max-width: 100%;
          }
        }
      }
    }

    &.columns-2 {
      li.blocks-gallery-item {
        width: 42vw;

        figure {
          width: 42vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.block-gallery-item {
          height: 49vw;
          width: 49vw;

          figure {
            height: 49vw;
            width: 49vw;

            img {
              object-fit: cover;
            }
          }
        }
      }
    }

    &.columns-3 {
      li.blocks-gallery-item {
        width: 30vw;

        figure {
          width: 30vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.blocks-gallery-item {
          height: 32vw;
          width: 32vw;

          figure {
            height: 100%;
            width: 100%;

            img {
              object-fit: cover;
            }
          }
        }
      }
    }

    &.columns-4 {
      li.blocks-gallery-item {
        width: 22vw;

        figure {
          width: 22vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.block-gallery-item {
          height: 24vw;
          width: 24vw;

          figure {
            height: 24vw;
            width: 24vw;

            img {
              object-fit: cover;
            }
          }
        }
      }
    }

    &.columns-5 {
      li.blocks-gallery-item {
        width: 17vw;

        figure {
          width: 17vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.block-gallery-item {
          height: 19vw;
          width: 19vw;

          figure {
            height: 19vw;
            width: 19vw;

            img {
              object-fit: cover;
              max-height: unset;
              max-width: unset;
              min-height: 100%;
              min-width: 100%;
            }
          }
        }
      }
    }

    &.columns-6 {
      li.blocks-gallery-item {
        width: 15vw;

        figure {
          width: 15vw;

          img {
            object-fit: contain;
          }
        }
      }

      &.is-cropped {
        li.blocks-gallery-item {
          height: 16vw;
          width: 16vw;

          figure {
            height: 16vw;
            width: 16vw;

            a {
              max-height: 16vw;
              max-width: 16vw;
              overflow: hidden;
            }

            img {
              object-fit: cover;
              max-height: unset;
              max-width: unset;
              min-height: 100%;
              min-width: 100%;
            }
          }
        }
      }
    }
  }

  /*end of image gallery stuff*/
`;

export { imagegalleryStyles };
