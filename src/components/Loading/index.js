import React from "react";
import { styled } from "frontity";
import Loader from "react-spinners/MoonLoader";
// Scale Loader was originally used

const Loading = () => (
  <Container>
    <Loader
      color="var(--dark30)"
      radius={0}
      margin="3px"
      width={4}
      height={24}
    />
  </Container>
);

export default Loading;

const Container = styled.div`
  margin: 20vh 20vw 100px;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 24px;
  }
`;
