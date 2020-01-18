import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";

const Header = ({ state }) => (
  <Container>
    <HomeLogo className="home-logo" link="/">
      {state.frontity.title}
    </HomeLogo>
    <Nav />
  </Container>
);

export default connect(Header);

const Container = styled.header`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  background: var(--primary);
  color: white;
`;

const HomeLogo = styled(Link)`
  white-space: nowrap;
  color: white;
  display: block;
  font-size: 1.5em;
  font-weight: bold;
  transition: all 0.15s var(--heavy-snap);
  border-bottom: 3px solid transparent;
  padding: 0.1em 0.25em 0 0.25em;
  margin: auto 0.25em;
  display: inline;

  &:hover {
    border-bottom: 3px solid white;
    transition: all 0.15s var(--heavy-snap);
  }
`;
