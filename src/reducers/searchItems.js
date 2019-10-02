import * as actionTypes from "../actions/actions";

const initialState = ['', ''];

export default function searchItems(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SEARCH_ITEMS:
            const arrSearch = action.data.split(' ');
            return arrSearch;
        default:
            return state;
    }
}