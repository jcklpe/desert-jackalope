import React from "react";
import { connect, styled } from "frontity";
import Link from "../Link";
import FeaturedMedia from "../FeaturedMedia";
import { dateFromItem } from "../../utilities";

const ArchiveItem = ({ state, item, libraries }) => {
  const Excerpt = libraries.html2react.Component;
  return (
    <section className="post-link">
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

        {state.theme.isBlog && <p className="date">{dateFromItem(item)}</p>}

        <FeaturedMedia id={item.featured_media} />

        {state.theme.isBlog && item.excerpt && (
          <Excerpt html={item.excerpt.rendered} />
        )}
      </Link>
    </section>
  );
};

export default connect(ArchiveItem);

//-  𝗖𝗦𝗦
const Title = styled.h1`
  font-size: 4rem;
  position: relative;
  display: inline;
  z-index: 10;
  font-weight: 700;
  color: black;
  margin: 0;
  padding-top: 24px;
  /* margin-bottom: -40px; */
  padding: 25px 25px 0 25px;
  box-sizing: border-box;
  vertical-align: bottom;
`;

const Excerpt = styled.p`
  color: black;
`;
