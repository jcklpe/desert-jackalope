import React, { useEffect } from "react";
import { connect, styled } from "frontity";
//JUNK? import Link from "../Link";
import Archive from "../Archive";
import { media } from "../../mixins";
import { Article } from "../styles/post-base";

const Page = ({ state, actions, libraries, data }) => {
  // Get the the post.
  const page = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  // Prefetch home posts and the archive component.
  useEffect(() => {
    actions.source.fetch("/");
    Archive.preload();
  }, []);

  return data.isReady ? (
    <>
      <Article className="content-area">
        <Title dangerouslySetInnerHTML={{ __html: page.title.rendered }} />

        <Html2React html={page.content.rendered} />
      </Article>
    </>
  ) : null;
};

export default connect(Page);

//- additional CSS

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
  margin-bottom: 8px;
  color: var(--dark);
  margin: 100px 20vw 0;

  padding: 0 5px;

  ${media.tablet` margin: 50px 13.5vw 0;
  `};

  ${media.mobile` margin: 50px 13vw 0;
  `};
`;
