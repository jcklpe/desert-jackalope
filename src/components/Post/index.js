import React, { useEffect } from "react";
import { css, connect, styled } from "frontity";
import Archive from "../Archive";
import FeaturedMedia from "../FeaturedMedia";

import { Title, fakePaperTop } from "./post-fake-paper-top";
import { Article } from "../styles/post-base";

const Post = ({ state, actions, libraries, data }) => {
  // Get the the post.
  const post = state.source[data.type][data.id];
  // Get the html2react component.		  // Prefetch home posts and the list component.
  const Html2React = libraries.html2react.Component;

  const date = new Date(post.date);

  // Prefetch home posts and the archive component.
  useEffect(() => {
    actions.source.fetch("/");
    Archive.preload();
  }, []);

  return data.isReady ? (
    <>
      <FeaturedMedia id={post.featured_media} />

      <Article
        css={css`
          ${fakePaperTop};
        `}
        className="content-area"
      >
        <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        {state.theme.isBlog && <p>{date.toDateString()}</p>}
        <Html2React html={post.content.rendered} />
      </Article>
    </>
  ) : null;
};

export default connect(Post);
