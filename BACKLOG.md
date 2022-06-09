

## TODO


  Add netlify - cms

    Support mdx files
  
      Load netlify through a mdx page

        enable netlify to edit the pages folder
          https://dev.to/siddharthroy/build-a-free-blog-with-nextjs-and-netlify-cms-125h

        pending custom widget registration from mdx processing
          https://github.com/netlify/netlify-cms/issues/3580

        remove content folder

        document architectural decision
          netlify initialization should be dynamic to avoid window not defined error
            https://github.com/netlify/netlify-cms/issues/3580
  
        CSS problems when switching to Netlify
  
    Test & document

      In order to test if everything is working we need to use a beta feature from Netlify CMS to spin up a proxy server for our backend in order to test locally so we don't have to test directly with a live repo. You should run this command in a new tab/window in your cmd so you also have the next dev running.
      
      npx netlify-cms-proxy-server
  
    Manage a content page using netlify (in pages)

  Add eslint

  Keep en-US and pt-BR

  Solve warnings / log errors