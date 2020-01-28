module.exports = [
  {
    type: "doc",
    id: "start"
  },
  {
    type: "category",
    label: "Guides",
    items: [
      "guides/styling",
      "guides/customization",
      "guides/matching-days",
      "guides/modifiers",
      "guides/localization",
      "guides/input",
      "guides/extending"
    ]
  },
  {
    type: "category",
    label: "Reference",
    items: [
      "reference/props",
      "reference/hooks",
      "reference/upgrading",
      "changelog"
    ]
  },
  {
    type: "category",
    label: "API",
    items: [
      "api/index",
      {
        type: "category",
        label: "Interfaces",
        items: [
          "api/interfaces/daypickerprops",
          "api/interfaces/dayprops",
          "api/interfaces/headprops",
          "api/interfaces/monthcaptionprops",
          "api/interfaces/monthtableprops",
          "api/interfaces/navigationprops",
          "api/interfaces/weeknumberprops",
          "api/interfaces/weekrowprops"
        ]
      },
      {
        type: "category",
        label: "Enumerations",
        items: [
          "api/enums/daypickerelements",
          "api/enums/defaultmodifiersnames"
        ]
      },
      {
        type: "category",
        label: "Classes",
        items: ["api/classes/datewithmodifiers"]
      }
    ]
  }
];
