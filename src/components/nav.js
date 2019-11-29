import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
// import * as palette from "./utilities/variables";

const Nav = ({ state }) => (
  <NavList className="nav-list">
    {state.theme.menu.map(([name, link]) => (
      <NavItem key={name} isSelected={state.router.link === link} link={link}>
        {name}
      </NavItem>
    ))}
  </NavList>
);

export default connect(Nav);

const NavList = styled.nav`
  display: flex;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
`;

const NavItem = styled(Link)`
  transition: all 0.25s 250ms var(--heavy-snap);

  border-bottom: ${({ isSelected }) =>
    isSelected ? "3px solid white" : "3px solid transparent"};
  padding: 0.1em 0.25em 0 0.25em;
  margin: auto 0.25em;
  &:hover {
    border-bottom: 3px solid white;
    transition: all 0.25s 250ms var(--heavy-snap);
  }
`;
