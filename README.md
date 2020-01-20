# Desert Jackalope

minimalist theme built in React for Wordpress using Frontity

## Class name components

This theme is heavily focused on Gutenberg editor. Some layout is handled using generic components like columns etc. The styling is determined using additional CSS classes that are added in the editor. Classes such as:

- resume (for resume download button)

## Component naming conventions

I'm trying to follow the [AirBnB recommendations](https://github.com/airbnb/javascript/tree/master/react#basic-rules). I ain't perfect though and I've got my own personal taste so that's probably going to be reflected a bit in things. Let me know what you think, if you have suggestions for better ways to do things. I'm always interested in hearing more elegant ways of approaching my syntax/structure😊

## TODO

- [ ] make navigation clear overlay hero so that fade in looks better (how do do this while keeping components separate?)
- [ ] make navigation have background on actual posts/pages
- [ ] sticky header
- [ ] gallery lightboxes
- [ ] multimedia galleries
  - [ ] build gutenberg component
  - [ ] build frontity component to correspond
- [ ] add parallax
- [ ] add footer
- [ ] Blog compatible checklist
  - [x] add logic to frontity settings state to switch on and off style for blog versus website (or perhaps handle this via taxonomy?)
    - [ ] Add flexibility in for having both case studies and blog on the same website (basically set up taxonomy to be useful for styling presentation for project versus regular blog posts etc)
  - [ ] get rid of hero section on frontpage
  - [ ] change blog archive display on frontpage
  - [ ] create page for posts tagged as "projects"
