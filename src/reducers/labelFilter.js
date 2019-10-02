import * as actionTypes from "../actions/actions";

const initialState = '';

export default function labelFilter(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FILTER_LABEL_SELECT:
            return action.data;
        default:
            return state;
    }
}