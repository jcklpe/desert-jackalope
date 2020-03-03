import React from "react";
import { connect, styled } from "frontity";
import { dateFromItem } from "../../utilities";

const Date = ({ state, item}) => {
  return (
    <p className="date">
      {
        state.theme.isBlog && {
          dateFromItem(item)
        }
    </p>

  );
};

export default connect(Date);