import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons/index'

import InputField from '../../common/InputField';

import Label from '../../../elements/Label';
import Button from '../../../elements/Button';
import Select from '../../../elements/Select';

const StyledItem = styled.div`
    border: 1px solid #d9d9d9
    display: flex;
    padding: 5px 10px;
    align-items: center;
`;

const Number = styled.p`
    width: 10%;
    padding: 0 15px;
`;

const Name = styled.p`
    width: 20%;
    padding: 0 15px;
`;

const InputName = styled(InputField)`
    width: 20%;
    padding: 0 15px;
`;

const Email = styled.p`
    width: 20%;
    padding: 0 15px;
`;

const InputEmail = styled(InputField)`
    width: 20%;
    padding: 0 15px;
`;

const DateCreate = styled.p`
    width: 20%;
    padding: 0 15px;
`;

const DateUpdate = styled.p`
    width: 20%;
    padding: 0 15px;
`;

const LabelStyled = styled(Label)`
    width: 10%;
    flex-grow: 1
`;

const ButtonEdit = styled(Button)`
    background: #4285f4;
    width: 40px;
    margin-left: 10px;
`;

const ButtonDelete = styled(Button)`
    background: #e73409;
    width: 40px;
    margin-left: 10px;
`;

class ListItem extends Component {
    state = {
        edit: false,
        editItem: {}
    };

    handlerEdit = (id, name, email, label) => {
        if (this.state.edit) {
            this.props.onEdit({...this.state.editItem, dateUpdate: Date.now()});

            this.setState({
                edit: false
            });
        }  else {
            this.setState({
                edit: true,
                editItem: {
                    id: id,
                    name: name,
                    email: email,
                    label: label
                }
            })
        }
    };

    handlerChange = (value, type) => {
        this.setState(prevState => {
            return {
                editItem: {
                    ...prevState.editItem,
                    [type]: value
                }
            }
        });
    };

    render() {
        let {
            className = '',
            id,
            name,
            email,
            dateCreate,
            dateUpdate,
            label,
            onDelete,
        } = this.props;

        return (
            <StyledItem className={className}>
                <Number>{ id }</Number>
                {
                    this.state.edit ?
                        <>
                            <InputName
                                value={ name }
                                changeFunc={ (value) => this.handlerChange(value, 'name') }
                            />
                            <InputEmail
                                value={ email }
                                changeFunc={ (value) => this.handlerChange(value, 'email') }
                            />
                            <Select
                                items={[
                                    {id: 1, title: 'Home', value: 'home'},
                                    {id: 2, title: 'Work', value: 'work'}
                                ]}
                                selected={ label }
                                changeFunc={ (value) => this.handlerChange(value, 'label') }
                            />
                        </>
                        :
                        <>
                            <Name>Имя: { name }</Name>
                            <Email>Email: { email }</Email>
                            <LabelStyled>{ label }</LabelStyled>
                        </>
                }

                <DateCreate>Cоз: { `${new Date(+dateCreate).getDay()}-${new Date(+dateCreate).getMonth()}-${new Date(+dateCreate).getFullYear()} ${new Date(+dateCreate).getHours()}:${new Date(+dateCreate).getMinutes()}` }</DateCreate>
                <DateUpdate>Обн: { `${new Date(+dateUpdate).getDay()}-${new Date(+dateUpdate).getMonth()}-${new Date(+dateUpdate).getFullYear()} ${new Date(+dateUpdate).getHours()}:${new Date(+dateUpdate).getMinutes()}` }</DateUpdate>
                <ButtonEdit
                    clickFunc={() => this.handlerEdit(id, name, email, label)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </ButtonEdit>
                <ButtonDelete
                    clickFunc={() => {onDelete(id)}}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </ButtonDelete>
            </StyledItem>
        )
    }
}

export default ListItem;