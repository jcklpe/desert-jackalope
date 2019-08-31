import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Nav = ({ state }) => (
  <Container>
    {state.theme.menu.map(([name, link]) => (
      <Item key={name} isSelected={state.router.link === link}>
        <Link link={link}>{name}</Link>
      </Item>
    ))}
  </Container>
);

export default connect(Nav);

const Container = styled.nav`
  list-style: none;
  display: flex;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
`;

const Item = styled.div`
  padding: 0;
  margin: 0 16px;
  color: ${({ isSelected }) =>
    isSelected ? "rgba(10, 30, 30, 1)" : "rgba(10, 30, 30, 0.7)"};
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid
      ${({ isSelected }) =>
        isSelected ? "rgba(10, 30, 30, 1)" : "transparent"};
    margin-bottom: 25px;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;
