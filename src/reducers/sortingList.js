import * as actionTypes from "../actions/actions";

const initialState = {type: 'name', direction: 'up'};

export default function sortingList(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SORTING_CHANGE:
            return JSON.parse(action.data);
        default:
            return state;
    }
}