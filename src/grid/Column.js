import React from 'react';
import styled from 'styled-components';

const Column = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
`;

const columnCount = 12;

const ColumnStyled = styled(Column)`    
            
    ${props => props.xs ?
        `
        @media (min-width: 576px) {
            flex: 0 0 ${(100 / columnCount) * props.xs}%;
            max-width: ${(100 / columnCount) * props.xs}%;
        }
        `
        :
        ''
    }
    
    ${props => props.sm ?
    `
        @media (min-width: 768px) {
            flex: 0 0 ${(100 / columnCount) * props.sm}%;
            max-width: ${(100 / columnCount) * props.sm}%;
        }
        ` 
        :
        ''
    }
    
    ${props => props.md ?
    `
        @media (min-width: 992px) {
            flex: 0 0 ${(100 / columnCount) * props.md}%;
            max-width: ${(100 / columnCount) * props.md}%;
        }
        ` 
        :
        ''
    }
    
    ${props => props.lg ?
        `
        @media (min-width: 1200px) {
            flex: 0 0 ${(100 / columnCount) * props.lg}%;
            max-width: ${(100 / columnCount) * props.lg}%;
        }
        ` 
        :
        ''
    }
`;

export default (props) => {
    return (
        <ColumnStyled lg={ props.lg } md={ props.md } sm={ props.sm } xs={ props.xs }>
            { props.children }
        </ColumnStyled>
    )
}