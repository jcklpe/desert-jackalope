import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}: {state.source[data.taxonomy][data.id].name}
        </Header>
      )}
      <p>
        Hey, my name is Aslan. I'm a creative technologist living and working in
        Austin, Texas. I am always refining my craft, and enjoy striving for
        creative and innovative solutions to problems. At heart I view myself as
        a craftsman, whether I'm working in code, or with pixels (or something
        else!). My vocation is in civic tech, with a focus on
        designing/developing scalable systems that improve people's lives and
        empower citizens. I'm also interested in the contemporary edges of
        creative expression in technology and in my spare time I work on
        physical electronic art installations with my art collective, create
        paintings using neural networks, or ramble about the button layouts of
        microwaves at parties.
      </p>
      {/* If the list is an author, we render a title. */}
      {data.isAuthor && (
        <Header>Author: {state.source.author[data.id].name}</Header>
      )}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  width: 800px;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
