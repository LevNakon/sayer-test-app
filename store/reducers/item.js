import { ADD_ITEM, GET_ITEMS, DELETE_ITEM } from '../actions/item';

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                items: [...action.items]
            };
        case GET_ITEMS:
            return {
                items: [...action.items]
            };
            case DELETE_ITEM:
                return {
                    items: [...action.items]
                };
        default:
            return state;
    }
};

