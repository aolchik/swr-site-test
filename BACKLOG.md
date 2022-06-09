

## TODO


  Add netlify - cms

    Support mdx files
  
      Load netlify through a mdx page

        trying to discover how to usa a different layout for netlify-cms page

        netlify initialization should be dynamic to avoid window not defined error
          https://github.com/netlify/netlify-cms/issues/3580

        pending custom widget registration from mdx processing
          https://github.com/netlify/netlify-cms/issues/3580

        why home is still pointing to adminv2?

        *remove content folder

        document architectural decision

        CSS problems when switching to Netlify

  
    Test & document

      In order to test if everything is working we need to use a beta feature from Netlify CMS to spin up a proxy server for our backend in order to test locally so we don't have to test directly with a live repo. You should run this command in a new tab/window in your cmd so you also have the next dev running.
      
      npx netlify-cms-proxy-server
  
    Manage a content page using netlify (in pages)
      https://dev.to/siddharthroy/build-a-free-blog-with-nextjs-and-netlify-cms-125h

      Keep the nextra page folder structure and offer git or netlify based page editing.

    Use nextra with pages in /content
  
  Add eslint

  Keep en-US and pt-BR

  Solve warnings / log errors