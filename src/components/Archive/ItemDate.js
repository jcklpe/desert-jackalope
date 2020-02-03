import React from "react";
import { connect, styled } from "frontity";
import { dateFromItem } from "../../utilities";

const ItemDateComponent = ({ state, item }) => {
  return (
    <>
      <p>testing date component</p>
      <p>testing</p>
      {state.theme.isBlog && <p className="date">{dateFromItem(item)}</p>}
    </>
  );
};

export default connect(ItemDateComponent);
