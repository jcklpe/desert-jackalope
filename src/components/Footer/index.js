import React from "react";
import { connect, styled } from "frontity";
import NewsletterForm from "./newsletter-form";
import Footerlinks from "./footer-links";

const Footer = ({ state }) => (
  <Container className="Footer">
    {state.theme.newsletterURL ? (
      <NewsletterForm className="newsletter-form" />
    ) : null}

    <Footerlinks className="footer-links" />
  </Container>
);

const Container = styled.footer`
  width: 100%;
  padding: 25px 50px;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default connect(Footer);
