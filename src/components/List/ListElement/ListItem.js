import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons/index'

import Label from '../../../elements/Label';
import Button from '../../../elements/Button';

const ListItem = styled.div`
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

const Email = styled.p`
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

export default (props) => {

    let {
        className = '',
        id,
        name,
        email,
        dateCreate,
        dateUpdate,
        label,
        onDelete
    } = props;

    return (
        <ListItem className={className}>
            <Number>{ id }</Number>
            <Name>Имя: { name }</Name>
            <Email>Email: { email }</Email>
            <DateCreate>Cоз: { dateCreate }</DateCreate>
            <DateUpdate>Обн: { dateUpdate }</DateUpdate>
            <LabelStyled>{ label }</LabelStyled>
            <ButtonEdit
                clickFunc={() => {}}
            >
                <FontAwesomeIcon icon={faEdit} />
            </ButtonEdit>
            <ButtonDelete
                clickFunc={() => {onDelete(id)}}
            >
                <FontAwesomeIcon icon={faTrash} />
            </ButtonDelete>
        </ListItem>
    )
}