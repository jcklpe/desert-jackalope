import React from "react";
import { connect, styled } from "frontity";
import { media } from "../utilities/mixins";

const Footer = ({ state }) => (
  <Container className="Footer">
    <br />
    <br />
    <h1>
      fdjkslajfdklasjfkldjaskfldjaklfjkdlasjfkdlasjfkldjsakfljdkalfjkldasjfkldjasklfjdsklafj
    </h1>
  </Container>
);

const Container = styled.div`
  h1 {
    margin-top: -2rem;
    font-size: 4rem;
    text-align: center;
    position: absolute;
    z-index: 100;
  }
`;
export default connect(Footer);
