001_dynamically_loading_netlify_cms.mdb

# Status

Implemented.

# Context

The attempt to load netlify-cms (v.2.10.192) through mdx breaks out the layout.

For this reason a specific admin page was created to load the CMS.

When importing nextjs-cms as a module, `ReferenceError: window is not defined` error is received.

# Decision

Dynamically load netlify-cms as suggested in https://github.com/netlify/netlify-cms/issues/3580

# Consequences

- other netlify dependencies should also be loaded dynamically
- user will perceive fast initial response, but netlify will take a while to load