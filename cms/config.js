
module.exports = {
  
  cms_manual_init: true,

  backend: {
    name: "test-repo", // "git-gateway", 
    branch: "netlify_cms", // Branch to update (optional; defaults to master)
    squash_merges: true,
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
      name: "blog",
      label: "Blog",
      label_singular: "Blog",
      editor: { preview: false },
      folder: "content/blog",
      create: true,
      slug: "{{slug}}",
      extension: "mdx",
      format: "frontmatter",
      fields: [
        { label: "Title", name: "title", widget: "string", required: true },
        { label: "Description", name: "description", widget: "string" },
        { label: "Publish Date", name: "date", widget: "datetime", date_format: "MMMM Do, YYYY", format: "LLL" },
        { label: "Body", name: "body", widget: "mdx" }
        ],
    },
  ],
};