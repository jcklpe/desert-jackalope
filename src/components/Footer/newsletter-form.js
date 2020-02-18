import React from "react";
import { connect, styled } from "frontity";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const NewsletterForm = ({ state }) => (
  <MailchimpSubscribe url={state.theme.newsletterURL} />
);

export default connect(NewsletterForm);

//- CSS
//TODO: get the styling to actually apply here?

const NewsletterFormStyled = styled(NewsletterForm)`
  button {
    background: var(--default);
    color: white;
    padding: 25px 50px;
  }
`;
