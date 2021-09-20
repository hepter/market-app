import { createReducer } from 'reduxsauce';
import produce from 'immer';

import items from "../../assets/data/items.json"

import { FilterTypes } from './actions';

export type ProductItem = typeof items[0];
export type FilterType = "mug" | "shirt";
export type FilterSort = "LOW_TO_HIGH" | "HIGH_TO_LOW" | "NEW_TO_OLD" | "OLD_TO_NEW";

export const initialState = {
    sidebar: { left: false, right: false },
    filterType: "mug" as FilterType,
    filterSort: "LOW_TO_HIGH" as FilterSort,
    filterTags: [] as string[],
    filterBrands: [] as string[],
    filteredItems: items as ProductItem[]
};
initialState.filteredItems = getFilteredItem(initialState)

export function getFilteredItem(state: typeof initialState) {
    var newFiltered = [
        ...items.filter((item) => {
            let hasMatch = true;
            if (state.filterType !== item.itemType) {
                return false;
            }
            state.filterBrands.forEach((filterBrand) => {
                let result = item.manufacturer === filterBrand;
                if (!result) {
                    hasMatch = false;
                }
            });
            state.filterTags.forEach((filterTag) => {
                let result = item.tags.indexOf(filterTag) > -1;
                if (!result) {
                    hasMatch = false;
                }
            });
            return hasMatch;
        })]


    newFiltered = newFiltered.sort((a, b) => {

        switch (state.filterSort) {
            case 'HIGH_TO_LOW':
                return b.price - a.price

            case 'LOW_TO_HIGH':

                return a.price - b.price

            case 'NEW_TO_OLD':

                return b.added - a.added

            case 'OLD_TO_NEW':

                return a.added - b.added

        }
        return 0;
    })



    return newFiltered;
}


export const setFilteredItems = (state: typeof initialState, { items }: { items: ProductItem[] }) =>
    produce(state, draft => {
        draft.filteredItems = items
    });

export const setFilterTags = (state: typeof initialState, { tags }: { tags: string[] }) =>
    produce(state, draft => {
        draft.filterTags = tags
        draft.filteredItems = getFilteredItem({ ...state, filterTags: tags })
    });

export const setFilterBrands = (state: typeof initialState, { brands }: { brands: string[] }) =>
    produce(state, draft => {
        draft.filterBrands = brands
        draft.filteredItems = getFilteredItem({ ...state, filterBrands: brands })
    });

export const openFilterDrawer = (state: typeof initialState, { side }: { side: "left" | "right" }) =>
    produce(state, draft => {
        draft.sidebar[side] = true;
    });

export const closeFilterDrawer = (state: typeof initialState, { side }: { side: "left" | "right" }) =>
    produce(state, draft => {
        draft.sidebar[side] = false;
    });
export const setFilterType = (state: typeof initialState, { typeStr }: { typeStr: FilterType }) =>
    produce(state, draft => {
        draft.filterType = typeStr;
        draft.filteredItems = getFilteredItem({ ...state, filterType: typeStr })
    });

export const setFilterSort = (state: typeof initialState, { sort }: { sort: FilterSort }) =>
    produce(state, draft => {
        draft.filterSort = sort;
        draft.filteredItems = getFilteredItem({ ...state, filterSort: sort })
    });

export const handler = {
    [FilterTypes.OPEN_FILTER_DRAWER]: openFilterDrawer,
    [FilterTypes.CLOSE_FILTER_DRAWER]: closeFilterDrawer,
    [FilterTypes.SET_FILTERED_ITEMS]: setFilteredItems,
    [FilterTypes.SET_FILTER_TAGS]: setFilterTags,
    [FilterTypes.SET_FILTER_BRANDS]: setFilterBrands,
    [FilterTypes.SET_FILTER_TYPE]: setFilterType,
    [FilterTypes.SET_FILTER_SORT]: setFilterSort,
};

export default createReducer(initialState, handler);
