import React from "react";
import { connect, styled } from "frontity";
import ArchiveItem from "./archive-item";
import Pagination from "./pagination";
import Hero from "../Hero/Hero";
import { media } from "../utilities/mixins";

const Archive = ({ state }) => {
  // Get the data of the current archive.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Hero></Hero>
      <Container className="archive-container">
        {/* If the archive is a taxonomy, we render a title. */}
        {data.isTaxonomy && (
          <TaxonomyTitle>
            {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
          </TaxonomyTitle>
        )}

        {/* Iterate over the items of the archive. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <ArchiveItem key={item.id} item={item} />;
        })}
        <Pagination />
      </Container>
    </>
  );
};

export default connect(Archive);

//- CSS

const TaxonomyTitle = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

const Container = styled.section`
  margin: 0;
  list-style: none;

  //- Case Study
  section.case-study-link {
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 200px;
    img {
      box-sizing: border-box;
    }
  }

  //- Case Study 1-3-5-7
  section.case-study-link:nth-child(odd) {
    margin-right: 30vw;
    margin-left: 0;

    ${media.mobile`
      margin-left 2vw;
      margin-right: 0vw;
    `};

    a {
      display: flex;
      flex-direction: column;

      h1 {
        margin-right: 0px;
        transition: all 1.3s var(--snappy);
        ${media.mobile`
          font-size: 2rem;
          padding-left: 2vw;
        `};
      }
      img {
        padding-left: 100px;
        transition: all 1.5s var(--snappy);
      }
      &:hover,
      &:active,
      &:focus {
        img {
          transform: translate(-7vw, 0px);
          transition: all 0.25s var(--snappy);
        }
        h1 {
          transform: translate(50px, 0px);
          transition: all 0.75s var(--snappy);
        }
      } /*end of hover */
    }
  }
  //- Case Study 2-4-6-8
  section.case-study-link:nth-child(even) {
    margin-left: 30vw;
    margin-right: 0;
    ${media.mobile`
      margin-right 2vw;
      margin-left: 0vw;
    `};
    a {
      display: flex;
      flex-direction: column;
      transition: all 0.25s var(--snappy);
      h1 {
        align-self: flex-end;
        text-align: right;
        margin-right: 0px;
        transition: all 1.3s var(--snappy);
        transform: translate(0px, 0px);
        ${media.mobile`
          font-size: 2rem;
        `};
      }
      img {
        padding-right: 100px;
        transform: translate(0px, 0px);
        transition: all 1.5s var(--snappy);
      }
      &:hover,
      &:active,
      &:focus {
        img {
          transform: translate(7vw, 0px);
          transition: all 0.25s var(--snappy);
        }
        h1 {
          transform: translate(-50px, 0px);
          transition: all 0.75s var(--snappy);
        }
      }
    }
  }
`;
