# [SWR website test](https://swr.vercel.app)

This repo is based on the official website for [SWR](https://github.com/vercel/swr).

The ideia behind this test is to use the stylish nextra-doc-theme and the possibility to add content using mdx files with the added feature of a headless CMS content management like netlify-cms.

The project uses [pnpm](https://pnpm.io), [Nextra](https://nextra.vercel.app) and deploys via [Netlify](https://netlify.com). To develop it locally, clone this repository and run the following command to start the local dev server:

```bash
pnpm install
pnpm dev
```

In order to test if everything is working we need to use a beta feature from Netlify CMS to spin up a proxy server for our backend in order to test locally so we don't have to test directly with a live repo. You should run this command in a new tab/window in your cmd so you also have the next dev running.
      
```bash
pnpx netlify-cms-proxy-server
```

Visit `127.0.0.1:3000` to preview your changes.

## Contributing

Pending...

## Contributors

Pending...

## References

- Build a free blog with Next.js and Netlify CMS - https://dev.to/siddharthroy/build-a-free-blog-with-nextjs-and-netlify-cms-125h
