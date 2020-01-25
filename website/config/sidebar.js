module.exports = [
  {
    type: "doc",
    id: "start"
  },
  {
    type: "category",
    label: "Guides",
    items: [
      "guides/matching-days",
      "guides/modifiers",
      "guides/localization",
      "guides/input",
      "guides/extending",
      "guides/upgrading"
    ]
  },
  {
    type: "category",
    label: "API",
    items: [
      "reference/props",
      "reference/hooks",
      "api/index",
      {
        type: "category",
        label: "Interfaces",
        items: [
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
