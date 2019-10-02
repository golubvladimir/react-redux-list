import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    fill: #fff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 14px;
    
    & svg.svg-inline--fa {
        width: 15px;
        height: 15px;
    } 
`;

export default (props) => {
    let {
        className = '',
        clickFunc = () => {},
        submit = false
    } = props;


    return (
        <Button
            className={ className }
            onClick={ clickFunc }
            type={ submit ? 'submit' : 'button' }
        >{ props.children }</Button>
    )
}