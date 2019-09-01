import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const before = ({ libraries }) => {
  // We use html2react to process the <img> tags inside the content HTML.
  libraries.html2react.processors.push(image);
};

const desertJackalope = {
  name: "desert-jackalope",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      featured: {
        showOnList: false,
        showOnPost: false
      }
    }
  },
  actions: {
    theme: {
      beforeSSR: before,
      beforeCSR: before
    }
  }
};

export default desertJackalope;
