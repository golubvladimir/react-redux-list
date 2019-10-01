import React from 'react';
import styled from 'styled-components';

const Select = styled.select`
    height: 40px;
    font-size: 16px;
`;

export default (props) => {

    let {
        className,
        items,
        selected = 0,
        changeFunc = () => {}
    } = props;

    return (
        <Select
            value={selected}
            onChange={changeFunc}
            className={className}
        >
            {
                items.map(item =>
                    <option key={ item.id } value={ item.value }>{ item.title }</option>
                )
            }
        </Select>
    )
}
