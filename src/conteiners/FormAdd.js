import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actionTypes from '../actions/actions';
import styled from 'styled-components';

import InputField from "../components/common/InputField";
import Select from '../elements/Select';
import Button from '../elements/Button';

const ButtonAdd = styled(Button)`
    background: #4285f4;
    margin-top: 20px;
    padding: 0 15px;
`;

class FormAdd extends Component {

    state = {
        item: {}
    };

    handlerSubmit = (event) => {
        event.preventDefault();

        this.props.onAdd({
            id: Date.now(),
            ...this.state.item,
            dateCreate: Date.now(),
            dateUpdate: Date.now()
        });
    };

    handlerChange = (value, type) => {
        this.setState(prevState => {
            return {
                item: {
                    ...prevState.item,
                    [type]: value
                }
            }
        });
    };

    render() {
        return (
            <form action='#' onSubmit={this.handlerSubmit}>
                <p>Введите имя</p>
                <InputField
                    value={''}
                    changeFunc={ (value) => this.handlerChange(value, 'name') }
                />
                <p>Введите email</p>
                <InputField
                    value={''}
                    changeFunc={ (value) => this.handlerChange(value, 'email') }
                />
                <p>Выберите ярлык</p>
                <Select
                    nullElement={{id: 0, title: 'Выберите ярлык', value: ''}}
                    items={[
                        {id: 1, title: 'Home', value: 'home'},
                        {id: 2, title: 'Work', value: 'work'}
                    ]}
                    changeFunc={ (value) => this.handlerChange(value, 'label') }
                />
                <ButtonAdd
                    submit={true}
                >Добавить элемент</ButtonAdd>
            </form>
        )
    }
};

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = dispatch => {
    return {
        onAdd: (item) => dispatch({type: actionTypes.ADD_ITEM, data: item})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormAdd);

