import { test, expect, request } from "@playwright/test";
const objectRepository = require("../objectRepository")
const dataRepository = require("../dataRepository.json")
require("dotenv").config()

test("test1 @smoke", async ({ page, context }) => {
  await page.goto("https://www.google.com/");
  await page.goto("https://www.google.com/search?q=am&oq=am&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzgxOWowajSoAgCwAgA&sourceid=chrome&ie=UTF-8");
  await objectRepository.default.link_am_definition_meaning(page).click();
  await objectRepository.default.link__exact_true(page).click();
  await objectRepository.default.link_abbreviation_2(page).click();
  await objectRepository.default.button_show_more(page).click();
  await objectRepository.default.link_kids_definition(page).click();
  await objectRepository.default.placeholder_search_dictionary(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_573443);
  await objectRepository.default.placeholder_search_dictionary(page).click();
  await objectRepository.default.placeholder_search_dictionary(page).fill(dataRepository[process.env.EXECUTION_ENVIRONMENT].data_856979);
  await objectRepository.default.placeholder_search_dictionary(page).press("Enter");
  await objectRepository.default.heading_amejwh(page).click();
  await objectRepository.default.link_amelus(page).click();
});
