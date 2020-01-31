import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const desertJackalope = {
  name: "desert-jackalope",
  roots: {
    // In Frontity, any package can add React components to the site.
    // We use roots for that, scoped to the "theme" namespace.
    theme: Theme
  },
  state: {
    // State is where the packages store their default settings and other
    // relevant state. It is scoped to the "theme" namespace.
    theme: {
      isBlog: false,
      colors: {
        primary: {
          default: "#2657eb",
          heavy: "#1f38c5"
        }
      }
    }
  },
  // Actions are functions that modify the state or deal with other parts of
  // Frontity like libraries.
  actions: {
    theme: {}
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image]
    }
  }
};

export default desertJackalope;
