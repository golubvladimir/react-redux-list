import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import * as actionTypes from '../actions/actions';

import ListElement from '../components/List/ListElement';
import Controls from '../components/List/Controls';

const StyledControls = styled(Controls)`
    margin-bottom: 10px;
`;

const List = ({ items, onDelete, onLabelSelect }) => {

    return (
        <>
            <StyledControls
                onLabelSelect={onLabelSelect}
            />
            <ListElement
                items={items}
                onDelete={onDelete}
            />
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        items: state.list.items.filter(item => item.label.includes(state.labelFilter))
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (index) => dispatch({type: actionTypes.DELETE_ITEM, data: index}),
        onLabelSelect: (label) => dispatch({type: actionTypes.FILTER_LABEL_SELECT, data: label})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);