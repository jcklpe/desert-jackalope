import React from "react";
import { connect, styled } from "frontity";
import { media } from "../utilities/mixins";
// import Link from "../archive/link";
// import PropTypes from 'prop-types';

const Hero = props => (
  <Container className="HeroWrapper">
    <h1>Design X Code</h1>
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

export default Hero;
