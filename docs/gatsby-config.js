module.exports = {
  siteMetadata: {
    title: "Orbit",
    description: "Open source design system for your next travel project.",
    siteUrl: "https://orbit.kiwi/",
    author: "Kiwi.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "documentation",
        path: `${__dirname}/src/documentation`,
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              // The base for generating different image widths.
              maxWidth: 736,
              showCaptions: ["title"],
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`, `md`, `mdx`],
            },
          },
        ],
        remarkPlugins: [require("remark-deflist")],
        rehypePlugins: [],
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        fields: ["title", "excerpt", "path"],
        resolvers: {
          Mdx: {
            title: n => n.frontmatter.title,
            excerpt: n => n.frontmatter.excerpt,
            path: n => n.fields.slug,
          },
        },
      },
    },
    {
      resolve: "gatsby-redirect-from",
      options: {
        query: "allMdx",
      },
    },
    // our custom plugins place here:
    {
      resolve: require.resolve("./plugins/contributors"),
      options: {
        repo: "orbit",
        owner: "kiwicom",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-meta-redirect",
  ],
};
