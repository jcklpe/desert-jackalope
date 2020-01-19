import React from "react";
import { connect, styled } from "frontity";
import ArchiveItem from "./archive-item";
import Pagination from "./pagination";
import Hero from "../Hero/Hero";
import { media } from "../utilities/mixins";
import BlogArchive from "./BlogArchive";
import CaseStudyArchive from "./CaseStudyArchive";
// import isBlog from "../index";

const Archive = ({ state, data }) => {
  // check whether or not blog or case study presentation

  let archiveComponent;
  const isBlog = state.theme.blogmode;
  if (isBlog) {
    archiveComponent = <BlogArchive data={data} />;
  } else {
    archiveComponent = <CaseStudyArchive data={data} />;
  }

  return <>{archiveComponent}</>;
};

export default connect(Archive);
