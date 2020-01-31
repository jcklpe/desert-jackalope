import React from "react";
import { connect } from "frontity";
import BlogArchive from "./BlogArchive";
import CaseStudyArchive from "./CaseStudyArchive";

const Archive = ({ state, data }) => {
  // check whether or not blog or case study presentation

  let archiveComponent;

  if (state.theme.isBlog) {
    archiveComponent = <BlogArchive data={data} />;
  } else {
    archiveComponent = <CaseStudyArchive data={data} />;
  }

  return <>{archiveComponent}</>;
};

export default connect(Archive);
