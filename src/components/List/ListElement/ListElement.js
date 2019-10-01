import React, { Component } from 'react';
import styled from 'styled-components';

import ListHeader from './ListHeader';
import ListBody from './ListBody';

const ListHeaderStyled = styled(ListHeader)`
    margin-bottom: 10px;
`;

class ListElement extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 1,
                    name: 'Vladimir',
                    email: 'test@email.com',
                    label: 'online',
                    dateCreate: '',
                    dateUpdate: ''
                },
                {
                    id: 2,
                    name: 'Dima',
                    email: 'test2@email.com',
                    label: 'online',
                    dateCreate: '',
                    dateUpdate: ''
                },
                {
                    id: 3,
                    name: 'Leha',
                    email: 'test3@email.com',
                    label: 'online',
                    dateCreate: '',
                    dateUpdate: ''
                }
            ]
        }
    }

    render() {
        return (
            <>
                <ListHeaderStyled />
                <ListBody items={this.state.items} />
            </>
        )
    }
}

export default ListElement;