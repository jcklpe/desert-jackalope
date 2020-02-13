import { css, styled } from "frontity";
import { media } from "../../mixins";

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  margin-bottom: 8px;
  color: var(--dark);
  margin: -250px 20vw 0;
  padding: 0 5px;

  ${media.tablet` margin: -250px 13.5vw 0;
  `};

  ${media.mobile` margin: -100px 13vw 0;
  `};
`;

const fakePaperTop = css`
  /*//- Article fake paper top */
  &::before {
    /* height: 300px; */
    width: 100%;
    padding: 150px 31.5vw 150px 31.5vw;
    margin: -300px 18.5vw 0 18.5vw;
    z-index: 3;
    background: white;
    position: relative;
    top: -150px;
    z-index: -1;
    content: "";

    ${media.tablet` padding: 150px 40vw 150px 40vw;
  margin: -300px 9vw 0 9vw;
  top: -150px;
  `};

    ${media.mobile` margin: -30px 10vw 0 10vw;
  padding: 50px 40vw 50px 40vw;
  top: -80px;
  `};
  }
`;

export { Title, fakePaperTop };
