
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
      name: "pages",
      label: "Pages",
      i18n: true,
      editor: { preview: false },
      folder: "pages",
      create: false,
      slug: "{{slug}}",
      preview_path: "{{locale}}/{{slug}}",
      extension: "mdx",
      format: "frontmatter",
      fields: [
        { label: "Title", name: "title", widget: "string", required: true, i18n: true },
        { label: "Body", name: "body", widget: "mdx", i18n: true }
      ],
    },
    {
      name: "blog",
      label: "Blog",
      label_singular: "Blog",
      i18n: true,
      editor: { preview: false },
      folder: "pages/blog",
      create: true,
      slug: "{{slug}}",
      preview_path: "{{locale}}/blog/{{slug}}",
      extension: "mdx",
      format: "frontmatter",
      fields: [
        { label: "Title", name: "title", widget: "string", required: true, i18n: true },
        { label: "Image", name: "image", widget: "image", i18n: "duplicate" },
        { label: "Description", name: "description", widget: "string", i18n: true },
        { label: "Publish Date", name: "date", widget: "datetime", date_format: "MMMM Do, YYYY", format: "LLL", i18n: "duplicate" },
        { label: "Body", name: "body", widget: "mdx", i18n: true }
        ],
    },
    {
      name: "docs",
      label: "Docs",
      label_singular: "Doc",
      i18n: true,
      editor: { preview: false },
      folder: "pages/docs",
      create: true,
      slug: "{{slug}}",
      preview_path: "{{locale}}/docs/{{slug}}",
      extension: "mdx",
      format: "frontmatter",
      fields: [
        { label: "Title", name: "title", widget: "string", required: true, i18n: true },
        { label: "Publish Date", name: "date", widget: "datetime", date_format: "MMMM Do, YYYY", format: "LLL", i18n: "duplicate" },
        { label: "Body", name: "body", widget: "mdx", i18n: true }
      ],
    },
    {
      name: "docs_advanced",
      label: "Docs/Advanced",
      label_singular: "Advanced Doc",
      i18n: true,
      editor: { preview: false },
      folder: "pages/docs/advanced",
      create: true,
      slug: "{{slug}}",
      preview_path: "{{locale}}/docs/advanced/{{slug}}",
      extension: "mdx",
      format: "frontmatter",
      fields: [
        { label: "Title", name: "title", widget: "string", required: true, i18n: true },
        { label: "Publish Date", name: "date", widget: "datetime", date_format: "MMMM Do, YYYY", format: "LLL", i18n: "duplicate" },
        { label: "Body", name: "body", widget: "mdx", i18n: true }
      ],
    },
    {
      name: "examples",
      label: "Examples",
      label_singular: "Example",
      i18n: true,
      editor: { preview: false },
      folder: "pages/examples",
      create: true,
      slug: "{{slug}}",
      preview_path: "{{locale}}/examples/{{slug}}",
      extension: "mdx",
      format: "frontmatter",
      fields: [
        { label: "Title", name: "title", widget: "string", required: true, i18n: true },
        { label: "Publish Date", name: "date", widget: "datetime", date_format: "MMMM Do, YYYY", format: "LLL", i18n: "duplicate" },
        { label: "Full", name: "full", widget: "boolean", i18n: "duplicate" },
        { label: "Body", name: "body", widget: "mdx" }
      ]
    }
  ],
}