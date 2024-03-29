import * as actionTypes from '../actions/actions';

const initialState = {
    items: [
        {
            id: '1',
            name: 'Dima',
            email: 'test1@mail.ru',
            label: 'work',
            dateCreate: Date.now().toString(),
            dateUpdate: Date.now().toString()
        },
        {
            id: '2',
            name: 'Vova',
            email: 'test2@mail.ru',
            label: 'home',
            dateCreate: Date.now().toString(),
            dateUpdate: Date.now().toString()
        },
        {
            id: '3',
            name: 'Vova',
            email: 'test2@mail.ru',
            label: 'home',
            dateCreate: Date.now().toString(),
            dateUpdate: Date.now().toString()
        }
    ]
};

export default function list(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                items: [...state.items, action.data]
            };
        case actionTypes.EDIT_ITEM:
            return {
                ...state,
                items: state.items.map(item => item.id === action.data.id ?
                    {
                        ...item,
                        name: action.data.name,
                        email: action.data.email,
                        label: action.data.label,
                        dateUpdate: action.data.dateUpdate
                    } : item
                )
            };
        case actionTypes.DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.data)
            };
        default:
            return state;
    }
}