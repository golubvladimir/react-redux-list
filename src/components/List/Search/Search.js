import React, { Component } from 'react';
import styled from 'styled-components';

import Input from '../../../elements/Input';

const InputSearch = styled(Input)`
    width: 100%;
    border: 1px solid #d9d9d9;
    font-size: 16px;
`;

class Search extends Component {
    state = {
        value: ''
    };

    handlerChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    render() {
        return (
            <InputSearch
                changeFunc={this.handlerChange}
                value={this.state.value}
                placeholder={'Введите фразу для поиска'}
            />
        )
    }
}

export default Search;