import React from 'react';
import styled from 'styled-components';

import Row from '../../grid/Row';
import Column from '../../grid/Column';
import Search from './../Search'
import Select from '../../elements/Select';

const SelectLabel = styled(Select)`
    width: calc(50% - 5px);
`;

const SelectSorting = styled(Select)`
    width: calc(50% - 5px);
    margin-left: 10px;
`;

export default (props) => {

    let { className } = props;

    return (
        <div className={ className }>
            <Row justifyContent={'space-between'}>
                <Column
                    lg={3}
                    md={3}
                    sm={3}
                    xs={3}
                >
                    <Search />
                </Column>
                <Column
                    lg={4}
                    md={4}
                    sm={4}
                    xs={4}
                >
                    <SelectLabel
                        items={[{id: 1, title: 'Заголовок 1', value: 1}, {id: 2, title: 'Заголовок 2', value: 2}]}
                    />
                    <SelectSorting
                        items={[{id: 1, title: 'Заголовок 1', value: 1}, {id: 2, title: 'Заголовок 2', value: 2}]}
                    />
                </Column>
            </Row>
        </div>
    )
}