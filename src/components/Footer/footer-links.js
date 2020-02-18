import React from "react";
import { connect, styled } from "frontity";

//TODO: get the below to work?

const FooterLinks = ({ state }) => {
  return (
    <FooterContainer>
      {() => {
        const footerlinks = Object.entries(state.theme.footerlinks);
        for (const [name, link] of footerlinks) {
          return <a href="${link}">[ ${name} ]</a>;
        }
      }}
    </FooterContainer>
  );
};

export default connect(FooterLinks);

const FooterContainer = styled.div`
  a {
    padding: 25px 50px;
  }
`;

//SCRATCHWORK:
//   function createComponentElement(element){
//     return (
//       <a href=${element} className="github-link">
//         [ ${element} ]
//       </a>
//     )
// }
//   state.theme.footerlinks.forEach(createComponentelement)}
// {state.theme.footerlinks.map(({ type, id }) => {
//     const item = state.source[type][id];
//     // Render one Item component for each one.
//     return <FooterlinkItem key={item.id} item={item} />;
//   })}
// <a href="https://github.com/jcklpe" className="github-link">
//   [github]
// </a>
