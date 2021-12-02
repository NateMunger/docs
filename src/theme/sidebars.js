module.exports = {
  guidesSidebar: [
    {
      type: "category",
      label: "Documentation",
      collapsible: false,
      items: [
        "intro",
        {
          type: "ref",
          label: "API Reference",
          id: "reference/intro",
        },
      ],
    },
    {
      type: "category",
      label: "Quick Starts",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "guides/getting-started",
        },
      ],
    },
    {
      type: "category",
      label: "Tutorials",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "guides/tutorials",
        },
      ],
    },
    {
      type: "category",
      label: "Providers",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "guides/providers",
        },
      ],
    },
    {
      type: "category",
      label: "Client Libraries",
      collapsible: false,
      items: [
        {
          type: "link",
          label: "Go",
          href: "https://github.com/trycourier/courier-go",
        },
        {
          type: "link",
          label: "Java",
          href: "https://github.com/trycourier/courier-java",
        },
        {
          type: "link",
          label: "Node.js",
          href: "https://github.com/trycourier/courier-node",
        },
        {
          type: "link",
          label: "PHP",
          href: "https://github.com/trycourier/courier-php",
        },
        {
          type: "link",
          label: "Python",
          href: "https://github.com/trycourier/courier-python",
        },
        {
          type: "link",
          label: "Ruby",
          href: "https://github.com/trycourier/courier-ruby",
        },
      ],
    },
    {
      type: "category",
      label: "Courier Enterprise",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "guides/enterprise",
        },
      ],
    },
  ],
  referenceSidebar: [
    {
      type: "category",
      label: "Courier API Reference",
      collapsible: false,
      items: [{ type: "autogenerated", dirName: "reference" }],
    },
  ],
};
