

# WIP
feat: add netlify-cms

feat(netlify-cms): support full editing 
  feat(netlify-cms): support custom previews to improve visualization
    reference:
      https://zslabs.com/articles/mdx-previews-in-netlify-cms
    fix: custom previews are not being rendered
    fix: change log preview
      Does it make sense to enable Change Log editting?  
        https://answers.netlify.com/t/graphql-and-custom-previews/11955          
      Can I selectively disable preview on some pages?
  
# Desired
feat(blog): add author to frontmatter
  widget: list
    https://www.netlifycms.org/docs/collection-types/
feat: support external authentication
feat(netlify-cms): support admin in pt-BR
feat(netlify-cms): link preview: improve status report
  - Missing information waiting for deploy
  - Missing information checking status in Check for Preview
feat(netlify-cms): link preview: allow optional deploy
  - All drafts generate builds
  - Is that necessary?
fix(netlify-cms): new publication: cannot publish while feedback message does not dismiss
feat(netlify-cms): application: Paginate collections

## Pendencies
chore: update node
chore: update packages
fix: remove middleware.js
fix: console errors
fix: content at home page not centered
chore: rename project name
chore: keep en-US and pt-BR
chore: clean unnecessary content
fix: solve missing favicon
chore: netlify-cms: Stop trying to load config.yml
chore: solve warnings pnpm
chore: move source to src/modules
    https://dev.to/vadorequest/a-2021-guide-about-structuring-your-next-js-project-in-a-flexible-and-efficient-way-472
spike: Nextra: How does search work?
