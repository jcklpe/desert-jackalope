import React from "react";
import { connect } from "frontity";
import BlogArchive from "./BlogArchive";
import CaseStudyArchive from "./CaseStudyArchive";

const Archive = ({ state, data }) => {
  // check whether or not blog or case study presentation

  return (
    <>
      {state.theme.isBlog ? (
        <BlogArchive data={data} />
      ) : (
        <CaseStudyArchive data={data} />
      )}
    </>
  );
};

export default connect(Archive);
