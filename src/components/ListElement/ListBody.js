import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';
import Row from '../../grid/Row';
import Column from '../../grid/Column';

const ListItemStyled = styled(ListItem)`
    margin-bottom: 10px;
    
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export default (props) => {
    return (
        <Row>
            <Column
                lg={12}
                md={12}
                sm={12}
                xs={12}
            >
                {
                    props.items && props.items.length > 0 ?
                        props.items.map(item =>
                            <ListItemStyled
                                key={item.id}
                                {...item}
                            />
                        )
                        : null
                }
            </Column>
        </Row>
    )
}