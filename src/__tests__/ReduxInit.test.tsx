import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import BasketReducer from "../redux/basket/reducer";
import FilterReducer, {
  FilterSort,
  FilterType,
  getFilteredItem,
  ProductItem,
} from "../redux/filter/reducer";
import { AnyAction } from "redux";

import companies from "../assets/data/companies.json";
import items from "../assets/data/items.json";

describe("Redux initial state", () => {
  test("Basket should match the initial state", () => {
    expect(BasketReducer(undefined, {} as AnyAction)).toEqual({
      companies,
      items,
      basket: [],
    });
  });

  test("Filter should match the initial state", () => {
    const initialState = {
      sidebar: { left: false, right: false },
      filterType: "mug" as FilterType,
      filterSort: "LOW_TO_HIGH" as FilterSort,
      filterTags: [] as string[],
      filterBrands: [] as string[],
      filteredItems: items as ProductItem[],
    };
    initialState.filteredItems = getFilteredItem(initialState);

    expect(FilterReducer(undefined, {} as AnyAction)).toEqual(initialState);
  });
});
