import { createReducer } from 'reduxsauce';
import produce from 'immer';
import companies from "../../assets/data/companies.json"
import items from "../../assets/data/items.json"

import { BasketTypes } from './actions';


type ProductItem = typeof items[0];

export const initialState = {
    companies,
    items,
    basket: [] as ProductItem[]
};

export const addItem = (state: typeof initialState, { id }: { id: string }) =>
    produce(state, draft => {
        var item = items.find(i => i.slug === id);
        if (item) {
            draft.basket.push(item);
        }
    });

export const removeItem = (state: typeof initialState, { id }: { id: string }) =>
    produce(state, draft => {
        var item = draft.basket.find(i => i.slug === id);
        if (item) {
            draft.basket = draft.basket.filter(i => i !== item);
        }
    });

export const handler = {
    [BasketTypes.ADD_ITEM]: addItem,
    [BasketTypes.REMOVE_ITEM]: removeItem,
};

export default createReducer(initialState, handler);
