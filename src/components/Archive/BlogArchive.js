import React from "react";
import { connect, styled } from "frontity";
import ArchiveItem from "./archive-item";
import Pagination from "./pagination";
import { media } from "../../mixins";

const BlogArchiveComponent = ({ state, data }) => {
  return (
    <>
      <Container className="archive-container">
        {/*  If the archive is a taxonomy, we render a title. */}
        {data.isTaxonomy && (
          <TaxonomyTitle className="taxonomy-title">
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

export default connect(BlogArchiveComponent);

//- CSS

const Container = styled.section`
  margin: 0;
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  section.post-link {
    /* display: flex; */
    position: relative;
    /* width: 50%;
    justify-content: center;
    align-items: center; */
    flex: auto;
    min-width: 250px;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      h1 {
        /* position: absolute; */
        background: var(--dark);
        color: white;
        font-size: 2rem;
      }

      img {
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        object-fit: cover;
      }

      h3 {
        font-weight: 300;
        text-transform: capitalize;
        color: var(--dark90);
      }

      p.date {
        color: white;
        z-index: 100;
        /* position: absolute; */
      }

      /* //TODO: would be nice to get this identified by classname and not by position */
      /* excerpt */
      p:nth-of-type(2) {
        /* position: absolute; */
        background: white;
        padding: 50px 100px;
        z-index: 5;
        bottom: 50px;
        width: 40%;
        margin: 50px;
      }

      /* //- Top story */
      &:first-of-type {
        width: 100%;
        h1 {
          font-size: 4em;
        }
        p.excerpt {
          bottom: 50px;
          width: 40%;
          left: 40%;
        }
      } /* End of top story */

      &:nth-of-type(2) {
      }
    }
  }
`;
