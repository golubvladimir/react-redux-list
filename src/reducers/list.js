const initialState = {
    items: [1, 2, 4]
};

export default function list(state = initialState, action) {
    switch (action.type) {
        case 'ADD':
            return state;
        case 'DELETE':
            return state;
        default:
            return state;
    }
}