const strings = {
  //METADATA
  meta: {
    //the name/word that appears in the top left of the nav bar
    name: "Amanda Drejer",
    //the wording on the browser tab
    title: "Amanda Drejer - Art Portfolio",
  },

  // MENU ITEMS
  nav: {
    about: "About",
    projects: "Projects",
    cv: "CV",
    contact: "Contact",
  },

  frontpage: {
    //FRONT PAGE CONTENT
    highlight_header: "Highlighted projects",
    see_all_label: "See all",
  },

  //ABOUT PAGE CONTENT
  about: {
    header: "About my art practice",
  },

  //CV PAGE CONTENT
  cv: {
    header: "CV",
  },

  //PROJECT PAGE CONTENT
  projects: {
    header: "My work",
  },
};

document.title = strings.meta.title ?? "Art Portfolio";

export default strings;
