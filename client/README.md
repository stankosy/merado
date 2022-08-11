# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to start local development server

###### Install dependencies

`yarn install`

###### Start local dev server

`yarn dev`

###### To build

`yarn build`

<!--
next build generates an optimized version of your application for production. This standard output includes:

    - HTML files for pages using getStaticProps or Automatic Static Optimization
    - CSS files for global styles or for individually scoped styles
    - JavaScript for pre-rendering dynamic content from the Next.js server
    - JavaScript for interactivity on the client-side through React

This output is generated inside the .next folder:

    - .next/static/chunks/pages – Each JavaScript file inside this folder relates to the route with the same name. For example, .next/static/chunks/pages/about.js would be the JavaScript file loaded when viewing the /about route in your application
    - .next/static/media – Statically imported images from next/image are hashed and copied here
    - .next/static/css – Global CSS files for all pages in your application
    - .next/server/pages – The HTML and JavaScript entry points prerendered from the server. The .nft.json files are created when Output File Tracing is enabled and contain all the file paths that depend on a given page.
    - .next/server/chunks – Shared JavaScript chunks used in multiple places throughout your application
    - .next/cache – Output for the build cache and cached images, responses, and pages from the Next.js server. Using a cache helps decrease build times and improve performance of loading images

All JavaScript code inside .next has been compiled and browser bundles have been minified to help achieve the best performance and support all modern browsers.
 -->
