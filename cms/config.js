
module.exports = {
  
  cms_manual_init: true,

  backend: {
    name: "git-gateway", // "test-repo", 
    branch: "netlify_cms", // Branch to update (optional; defaults to master)
    squash_merges: true,
  },

  i18n: {
    structure: "multiple_files",
    locales: [ "pt-BR", "en-US" ]
  },

  // Local backend is used during development
  local_backend: true,

  // Where to store the images
  media_folder: "public/uploads/",

  // Where to link the images
  public_folder: "/uploads",

  publish_mode: "editorial_workflow", // For Drafts


  // The Pages collection
  collections: [
    {
      i18n: true,
      name: "blog",
      label: "Blog",
      label_singular: "Blog",
      editor: { preview: false },
      folder: "pages/blog",
      create: true,
      slug: "{{slug}}{{locale}}",
      extension: "mdx",
      format: "frontmatter",
      fields: [
        { label: "Title", name: "title", widget: "string", required: true },
        { label: "Image", name: "image", widget: "image"},
        { label: "Description", name: "description", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime", date_format: "MMMM Do, YYYY", format: "LLL" },
        { label: "Body", name: "body", widget: "mdx" }
        ],
    },
    {
      name: "docs",
      label: "Docs",
      label_singular: "Doc",
      editor: { preview: false },
      folder: "pages/docs",
      create: true,
      slug: "{{slug}}",
      extension: "mdx",
      format: "frontmatter",
      fields: [
        { label: "Title", name: "title", widget: "string", required: true },
        { label: "Publish Date", name: "date", widget: "datetime", date_format: "MMMM Do, YYYY", format: "LLL" },
        { label: "Body", name: "body", widget: "mdx" }
      ]
    },
    {
      name: "examples",
      label: "Examples",
      label_singular: "Example",
      editor: { preview: false },
      folder: "pages/examples",
      create: true,
      slug: "{{slug}}",
      extension: "mdx",
      format: "frontmatter",
      fields: [
        { label: "Title", name: "title", widget: "string", required: true },
        { label: "Publish Date", name: "date", widget: "datetime", date_format: "MMMM Do, YYYY", format: "LLL" },
        { label: "Full", name: "full", widget: "boolean" },
        { label: "Body", name: "body", widget: "mdx" }
      ]
    }
  ],
}