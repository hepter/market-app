import { createActions } from 'reduxsauce';
import { AnyAction } from 'redux';
import { FilterSort, FilterType, ProductItem } from './reducer';

export interface FilterActionsCreators {
    openFilterDrawer: (side: "left" | "right") => AnyAction;
    closeFilterDrawer: (side: "left" | "right") => AnyAction;
    setFilteredItems: (items: ProductItem[]) => AnyAction;
    setFilterTags: (items: string[]) => AnyAction;
    setFilterBrands: (items: string[]) => AnyAction;
    setFilterType: (typeStr: FilterType) => AnyAction;
    setFilterSort: (sortStr: FilterSort) => AnyAction;
}

export interface FilterActionsTypes {
    OPEN_FILTER_DRAWER: string;
    CLOSE_FILTER_DRAWER: string;
    SET_FILTERED_ITEMS: string;
    SET_FILTER_TAGS: string;
    SET_FILTER_BRANDS: string;
    SET_FILTER_TYPE: string;
    SET_FILTER_SORT: string;
}

const { Types, Creators } = createActions<FilterActionsTypes, FilterActionsCreators>({
    openFilterDrawer: ["side"],
    closeFilterDrawer: ["side"],
    setFilteredItems: ["items"],
    setFilterTags: ["tags"],
    setFilterBrands: ["brands"],
    setFilterType: ["typeStr"],
    setFilterSort: ["sort"],
});





export const FilterTypes = Types;
export default Creators;


