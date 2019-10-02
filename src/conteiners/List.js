import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import * as actionTypes from '../actions/actions';

import ListElement from '../components/List/ListElement';
import Controls from '../components/List/Controls';

const StyledControls = styled(Controls)`
    margin-bottom: 10px;
`;

const List = ({ items, onDelete, onLabelSelect, onSortingChange }) => {
    return (
        <>
            <StyledControls
                onLabelSelect={onLabelSelect}
                onSortingChange={onSortingChange}
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
        items: state.list.items
            .sort((a, b) => {
                if (state.sortingList.direction === 'up') {
                    if (a[state.sortingList.type] > b[state.sortingList.type]) {
                        return 1;
                    }

                    if (a[state.sortingList.type] < b[state.sortingList.type]) {
                        return -1;
                    }

                    return 0;
                } else {
                    if (a[state.sortingList.type] < b[state.sortingList.type]) {
                        return 1;
                    }

                    if (a[state.sortingList.type] > b[state.sortingList.type]) {
                        return -1;
                    }

                    return 0;
                }
            })
            .filter(item => item.label.includes(state.labelFilter))
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (index) => dispatch({type: actionTypes.DELETE_ITEM, data: index}),
        onLabelSelect: (label) => dispatch({type: actionTypes.FILTER_LABEL_SELECT, data: label}),
        onSortingChange: (typeSorting) => dispatch({type: actionTypes.SORTING_CHANGE, data: typeSorting})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);