# Desert Jackalope

minimalist theme built in React for Wordpress using Frontity

## Class name components

This theme is heavily focused on Gutenberg editor. Some layout is handled using generic components like columns etc. The styling is determined using additional CSS classes that are added in the editor. Classes such as:

- resume (for resume download button)

## Additional values added to global state/settings

In the frontity framework, server settings are defined as part of the `theme` object in `state`.

I have defined additional settings for the theme inside of `src/index.js`. These settings have default values and can be overwritten on a per server basis inside the [frontity.settings.js](https://docs.frontity.org/learning-frontity/settings) file.

Here are some of the additional settings that have been defined in `src/index.js`.

| Key Name                  | Default Value                    | What is it for?                                                                                                                                              |
| ------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| state.theme.isBlog        | false                            | denotes if theme should run as a blog (varied chronological content) versus a portfolio ( series of case studies with no chronological information included) |
| state.theme.colors        | object laying out default colors | allows for adjustments in colorscheme                                                                                                                        |
| state.theme.newsletterURL | my mailchimp url                 | provides newsletter sign up component with necessary mailchimp URL                                                                                           |
| state.theme.footerlinks   | array of javascript objects      | allows the creation of a list of links to go in the footer                                                                                                   |

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
- [ ] fix weird dangerouslySetHTML issue? I hate the syntax of it at least
- [ ] Blog compatible checklist

  - [ ] style front
  - [ ] create page for posts based on tags

  ## License

  licensed under [Cooperative Work License v 1.0](https://github.com/jcklpe/cooperative-work-license/blob/master/LICENSE.md)
