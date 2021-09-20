import { createActions } from 'reduxsauce';
import { AnyAction } from 'redux';

export interface BasketActionsCreators {
    addItem: (id: string) => AnyAction;
    removeItem: (id: string) => AnyAction;
}

export interface BasketActionsTypes {
    ADD_ITEM: string;
    REMOVE_ITEM: string;
}

const { Types, Creators } = createActions<BasketActionsTypes, BasketActionsCreators>({
    addItem: ["id"],
    removeItem: ["id"],
});



export const BasketTypes = Types;
export default Creators;


