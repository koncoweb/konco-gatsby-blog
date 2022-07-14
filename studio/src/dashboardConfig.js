export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62d03b0b7208ab17df585410",
                  title: "Sanity Studio",
                  name: "konco-gatsby-blog-studio",
                  apiId: "4178fa01-9f8d-4a1d-ba81-27acce1b5b72",
                },
                {
                  buildHookId: "62d03b0b9c142a0e892661a7",
                  title: "Blog Website",
                  name: "konco-gatsby-blog",
                  apiId: "a6143194-f682-483d-8344-05f8bc5fe52f",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/koncoweb/konco-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://konco-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
