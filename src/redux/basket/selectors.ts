import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectBasket = (state: any) => state.basket as typeof initialState;

export const selectorProductItems = createSelector(
    selectBasket,
    (state) => state.items,
);

export const selectorCompanies = createSelector(
    selectBasket,
    (state) => state.companies,
);

export const selectorBasket = createSelector(
    selectBasket,
    (state) => state.basket,
);

