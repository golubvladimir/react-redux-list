import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    
    ${ 
        props => props.justifyContent === 'space-between' ?
        `justify-content: space-between`
        : null
    }
`;

export default (props) => {

    let {
        justifyContent=''
    } = props;

    return (
        <Row justifyContent={ justifyContent }>
            { props.children }
        </Row>
    )
}