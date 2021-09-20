import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectFilter = (state: any) => state.filter as typeof initialState;

export const selectorSidebarStatus = createSelector(
    selectFilter,
    (state) => state.sidebar,
);


export const selectorFilteredItems = createSelector(
    selectFilter,
    (state) => state.filteredItems,
);

export const selectorFilterBrands = createSelector(
    selectFilter,
    (state) => state.filterBrands,
);

export const selectorFilterTags = createSelector(
    selectFilter,
    (state) => state.filterTags,
);

export const selectorFilterType = createSelector(
    selectFilter,
    (state) => state.filterType,
);

export const selectorFilterSort = createSelector(
    selectFilter,
    (state) => state.filterSort,
);
