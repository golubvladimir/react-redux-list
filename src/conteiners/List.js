import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import ListElement from '../components/List/ListElement';
import Controls from '../components/List/Controls';

const StyledControls = styled(Controls)`
    margin-bottom: 10px;
`;

const List = ( {items} ) => {

    return (
        <>
            <StyledControls />
            <ListElement
                items={items}
            />
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        items: state.list.items
    }
};

export default connect(mapStateToProps)(List);