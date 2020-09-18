# Windmill Dashboard Svelte

A multi theme, completely accessible, with components and pages examples, ready for production dashboard.

- 🦮 Thoroughly accessible
- 🌗 Light and dark themes
- 💅 Styled with Tailwind CSS
- 🧩 Various components

## 🔍 Credits

All credits to the [Estevan Maito](https://github.com/estevanmaito) and the original [windmill-dashboard](https://github.com/estevanmaito/windmill-dashboard)

## 🚀 Usage

Clone [this](https://github.com/xenking/winmill-dashboard-svelte.git) repository and install dependencies

```bash
git clone https://github.com/xenking/winmill-dashboard-svelte.git
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

### Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).

### Deploying to the web

#### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

#### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```

## 🦮 Accessibility

This dashboard was developed with a11y in mind since the beginning.

1. Every text passes the WCAG Level AA (at least)
2. It is completely keyboard navigable
3. I actually used [NVDA](https://www.nvaccess.org/) to read my screen during development

Everybody can benefit with good accessibility practices, like the modal, for example ([test it live](https://windmill-dashboard.vercel.app/modals.html)). It uses focus trap techniques to not loose focus when navigating via keyboard and thinking of mobile users with large screen devices, it is placed in the bottom of the screen.

## 🌗 Multi theme

It uses Tailwind CSS for styling, and some may say it is totally biased, but it uses simplest theming plugin there is for it, [Tailwind Multi Theme plugin](https://github.com/estevanmaito/tailwindcss-multi-theme#tailwind-css-multi-theme) (made by me). The result is that, as with regular Tailwind, you have control over every style in your pages.

You can see that by navigating through the examples, changing theme and going visiting pages like login or create account, to see different images served for different themes.

Theme auto detection based on user's OS preferences and local setting's storage are enabled by default.

## OSS used

- [Svelte](https://svelte.dev/)
- [Svelte Persistent Store (local browser store)](https://github.com/andsala/svelte-persistent-store)
- [Svelte Click Outside (handle backdrop click)](https://github.com/joeattardi/svelte-click-outside)
- [Tinro (SPA router)](https://github.com/AlexxNB/tinro)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind Multi Theme](https://github.com/estevanmaito/tailwindcss-multi-theme)
- [Tailwind Custom Forms](https://github.com/tailwindlabs/tailwindcss-custom-forms)
- [PostCSS](https://postcss.org/)
- [PurgeCSS for PostCSS](https://github.com/FullHuman/purgecss/tree/master/packages/postcss-purgecss)
- [Chart.js (charts)](https://www.chartjs.org/)
- [UI Faces (avatars)](https://uifaces.co/)
- [Heroicons (icons)](https://heroicons.dev/)
- [Rollup (bundler)](https://rollupjs.org/guide/en/)
- [CSSNANO](https://cssnano.co/)
