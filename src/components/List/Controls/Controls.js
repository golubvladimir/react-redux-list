import React from 'react';
import styled from 'styled-components';

import Row from 'grid/Row';
import Column from 'grid/Column';
import Search from '../Search'
import Select from '../../../elements/Select';

const SelectLabel = styled(Select)`
    width: calc(50% - 5px);
`;

const SelectSorting = styled(Select)`
    width: calc(50% - 5px);
    margin-left: 10px;
`;

export default (props) => {

    let { className, onLabelSelect, onSortingChange, onSearchChange } = props;

    return (
        <div className={ className }>
            <Row justifyContent={'space-between'}>
                <Column
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                >
                    <Search
                        searchFunc={onSearchChange}
                    />
                </Column>
                <Column
                    lg={4}
                    md={4}
                    sm={4}
                    xs={4}
                >
                    <SelectLabel
                        items={[{id: 1, title: 'Home', value: 'home'}, {id: 2, title: 'Work', value: 'work'}]}
                        changeFunc={onLabelSelect}
                        nullElement={{id: 0, title: 'Выберите ярлык', value: ''}}
                    />
                    <SelectSorting
                        items={[
                            {id: 1, value: {type: 'name', direction: 'up'}, title: 'Имя (по возврастанию)'},
                            {id: 2, value: {type: 'name', direction: 'down'}, title: 'Имя (по убыванию)'},
                            {id: 3, value: {type: 'dateCreate', direction: 'up'}, title: 'Дата создания (по возрастанию)'},
                            {id: 4, value: {type: 'dateCreate', direction: 'down'}, title: 'Дата создания (по убыванию)'},
                            {id: 5, value: {type: 'dateUpdate', direction: 'up'}, title: 'Дата обновления (по возрастанию)'},
                            {id: 6, value: {type: 'dateUpdate', direction: 'down'}, title: 'Дата обновления (по убыванию)'},
                        ]}
                        changeFunc={onSortingChange}
                    />
                </Column>
            </Row>
        </div>
    )
}