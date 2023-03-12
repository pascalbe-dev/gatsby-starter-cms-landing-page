# Gatsby starter CMS landing page

Use this starter, if you want to create a simple landing page for a product very quickly. Check out this sample page here: https://gatsby-starter-cms-landing-page.netlify.app/

## Used technologies

This site uses these technologies to achieve a great developer experience and easy editing:

- website creation framework [Gatsby](https://www.gatsbyjs.com/)
- type checking during development via [Typescript](https://www.typescriptlang.org/)
- website hosting via [Netlify](https://www.netlify.com/)
- styling via [Tailwind CSS](https://tailwindcss.com/)
- fonts via [Google Fonts](https://fonts.google.com/) (but served locally or via Netlify)
- formatting via [Prettier](https://prettier.io/)
- dependency updates via [Renovate](https://github.com/renovatebot/renovate)
- commit message standardization via [Conventional Commits](https://www.conventionalcommits.org/)
  - enforcing of this standard via [CommitLint](https://commitlint.js.org/) and [husky](https://typicode.github.io/husky/)

## Local development

### Getting started

- create a new repository from the template on [GitHub](https://github.com/pascalbe-dev/gatsby-starter-cms-landing-page)
- clone the repository
- cd into the folder
- install the dependencies via `npm ci`
- start the development server via `npm start`
- update the code to change the design and content

### Adding animations on scroll

The [gatsby-plugin-scroll-reveal](https://github.com/solublestudio/gatsby-plugin-scroll-reveal) is added to this template. With this plugin, it's easy to add animations, when the user scrolls through the page.

To get started, follow [their usage guide](https://github.com/solublestudio/gatsby-plugin-scroll-reveal#usage).

## One time set up

## Setting up the netlify deployment

- make sure, you have a [Netlify](https://app.netlify.com/login) account
- allow the Netlify Github app to access your repositories ([Link](https://github.com/apps/netlify/installations/new))
- add a new site in [Netlify](https://app.netlify.com/)
  - import from existing project
  - authorize Netlify
  - choose this repository
  - keep the default settings
  - deploy the site
- adjust your site name in the site settings

## Customizing the fonts

- install your fonts via [FontSource](https://fontsource.org/) (e.g. `npm install @fontsource/roboto`)
- uninstall the fonts you no longer need (see package.json) (e.g. `npm uninstall @fontsource/itim`)
- adjust the imported fonts in the [gatsby-browser.ts](gatsby-browser.ts) file
- adjust the tailwind defaults in the [tailwind.config.js](tailwind.config.js) file
- restart the gatsby development server
