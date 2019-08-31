import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => (
  <>
    <Container>
      <StyledLink link="/">
        <Title>{state.frontity.title}</Title>
      </StyledLink>
      <Description>{state.frontity.description}</Description>
    </Container>
    <Nav />
  </>
);

export default connect(Header);

const Container = styled.div`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  color: rgba(10, 30, 30, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(10, 30, 30, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
