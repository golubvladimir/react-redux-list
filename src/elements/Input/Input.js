import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border-radius: 10px;
    height: 40px;
    outline: none;
    border-radius: 10px;
    padding: 0 10px
`;

export default (props) => {

    let {
        placeholder = '',
        className = '',
        value='',
        changeFunc=()=>{}
    } = props;

    return (
        <Input
            className={ className }
            placeholder={ placeholder }
            value={value}
            onChange={changeFunc}
        />
    )
}