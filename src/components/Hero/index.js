import React from "react";
import { connect, styled } from "frontity";
import { media } from "../../mixins";

const Hero = ({ state }) => (
  <Container className="HeroWrapper">
    <h1>{state.frontity.description}</h1>
  </Container>
);

const Container = styled.div`
  color: white;
  background-color: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  text-align: center;
  width: 100%;

  h1 {
    margin-top: -2rem;
    font-size: 4rem;
    text-align: center;
    ${media.mobile`
    font-size: 2.8rem;
  `};
  }
`;

export default connect(Hero);
