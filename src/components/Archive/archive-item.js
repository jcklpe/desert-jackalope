import React from "react";
import { connect, styled } from "frontity";
import Link from "../Link";
import FeaturedMedia from "../FeaturedMedia";

const ArchiveItem = ({ state, item }) => {
  return (
    <section className="case-study-link">
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />

        <FeaturedMedia id={item.featured_media} />
      </Link>
    </section>
  );
};

export default connect(ArchiveItem);

//-  𝗖𝗦𝗦
const Title = styled.h1`
  font-size: 4rem;
  position: relative;
  z-index: 10;
  font-weight: 700;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  margin-bottom: -40px;
  padding: 25px 25px 0 25px;
  box-sizing: border-box;
  vertical-align: bottom;
`;
