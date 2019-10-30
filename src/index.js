import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const before = ({ libraries }) => {
  // We use html2react to process the <img> tags inside the content HTML.
  libraries.html2react.processors.push(image);
};

const labsWebsite = {
  name: "labs-website",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      featured: {
        showOnList: true,
        showOnPost: true
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

export default labsWebsite;
