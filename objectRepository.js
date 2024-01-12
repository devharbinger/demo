const objectRepository = {
  "default": {
    "link_am_definition_meaning": (page) => page.getByRole("link", { name: "Am Definition & Meaning" }),
    "link__exact_true": (page) => page.getByRole("link", { name: "Dictionary", exact: true }),
    "link_abbreviation_2": (page) => page.getByRole("link", { name: "abbreviation (2)" }),
    "button_show_more": (page) => page.getByRole("button", { name: "Show more" }),
    "link_kids_definition": (page) => page.getByRole("link", { name: "Kids Definition" }),
    "placeholder_search_dictionary": (page) => page.getByPlaceholder("Search Dictionary"),
    "heading_amejwh": (page) => page.getByRole("heading", { name: "“amejwh”" }),
    "link_amelus": (page) => page.getByRole("link", { name: "amelus" }),
  },
};
module.exports = objectRepository;