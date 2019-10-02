import React from 'react';
import styled from 'styled-components';

import ListItem from './ListItem';

const List = styled.div`
    width: 100%;
`;

const ListItemStyled = styled(ListItem)`
    margin-bottom: 10px;
    
    &:last-of-type {
        margin-bottom: 0;
    }
`;

export default ({items = [], onDelete, onLabelSelect}) => {
    return (
        <List>
            {
                items && items.length > 0 ?
                    items.map(item =>
                        <ListItemStyled
                            key={item.id}
                            {...item}
                            onDelete={onDelete}
                            onLabelSelect={onLabelSelect}
                        />
                    )
                    : null
            }
        </List>
    )
}