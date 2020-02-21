import React from "react";
import { connect, styled } from "frontity";
import { linkStyles } from "../styles/link-styles";

//TODO: why is this doubling up???

const FooterLinks = ({ state }) => {
  return (
    <FooterContainer>
      {state.theme.footerlinks.map((link, index) => (
        <a className={link.name} key={index} href={link.href}>
          [ {link.name} ]
        </a>
      ))}
    </FooterContainer>
  );
};

export default connect(FooterLinks);

const FooterContainer = styled.div`
  /* ${linkStyles} */
`;
