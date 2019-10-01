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
        case 'ADD':
            return state;
        case 'DELETE':
            return state;
        default:
            return state;
    }
}