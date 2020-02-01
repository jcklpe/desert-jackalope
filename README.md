# Desert Jackalope

minimalist theme built in React for Wordpress using Frontity

## Class name components

This theme is heavily focused on Gutenberg editor. Some layout is handled using generic components like columns etc. The styling is determined using additional CSS classes that are added in the editor. Classes such as:

- resume (for resume download button)

## Additional values added to global state/settings

In the frontity framework, settings are set in the root of the node server using frontity.settings.js

These settings basically define the initial global state. I've added the following settings to add additional functionality to the theme.

`state.theme.isBlog` is a boolean setting denoting "blog mode" (true) or "case study mode" (false).

Blog mode versus case study mode changes the way that posts and their archives are presented.

Eventually I'll build some of this functionality into the tagging taxonomy of posts but for now it's a simple switch.

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
  - [x] get rid of hero section on frontpage
  - [x] add date to archive and post
  - [x] add excerpt to archive
  - [ ] change blog archive display on frontpage
  - [ ] create page for posts tagged as "projects"
