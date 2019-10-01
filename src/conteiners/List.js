import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import * as actionTypes from '../actions/actions';

import ListElement from '../components/List/ListElement';
import Controls from '../components/List/Controls';

const StyledControls = styled(Controls)`
    margin-bottom: 10px;
`;

const List = ({ items, onDelete }) => {

    return (
        <>
            <StyledControls />
            <ListElement
                items={items}
                onDelete={onDelete}
            />
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        items: state.list.items
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (index) => dispatch({type: actionTypes.DELETE_ITEM, data: index})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);