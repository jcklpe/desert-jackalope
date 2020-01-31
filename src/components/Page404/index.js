import React from "react";
import { styled } from "frontity";

const Page404 = () => (
  <Container className="page404">
    <Title>Oops! 404</Title>
    <Description>
      That page can’t be found{" "}
      <span role="img" aria-label="confused face">
        😕
      </span>
    </Description>
  </Container>
);

export default Page404;

const Container = styled.div`
  margin: 20vh 20vw 100px;
  padding: 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  margin-top: 24px;
  margin-bottom: 8px;
  color: var(--dark);
  font-size: 4em;
`;

const Description = styled.div`
  line-height: 1.6em;
  color: var(--dark80);
  margin: 24px 0;
`;
