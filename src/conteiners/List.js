import React from 'react';
import {connect} from "react-redux";
import styled from 'styled-components';

import * as actionTypes from '../actions/actions';

import ListElement from '../components/List/ListElement';
import Controls from '../components/List/Controls';

const StyledControls = styled(Controls)`
    margin-bottom: 10px;
`;

const List = ({ items, onDelete, onLabelSelect, onSortingChange, onSearchChange, onEdit }) => {
    return (
        <>
            <StyledControls
                onLabelSelect={onLabelSelect}
                onSortingChange={onSortingChange}
                onSearchChange={onSearchChange}
            />
            <ListElement
                items={items}
                onDelete={onDelete}
                onEdit={onEdit}
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
            .filter(item => {
                if (state.searchItems[0] && state.searchItems[1]) {
                    return item.name.includes(state.searchItems[0]) && item.email.includes(state.searchItems[1])
                } else if (state.searchItems[0]) {
                    return item.name.includes(state.searchItems[0]);
                } else {
                    return true;
                }
            })
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (index) => dispatch({type: actionTypes.DELETE_ITEM, data: index}),
        onEdit: (itemUpdate) => dispatch({type: actionTypes.EDIT_ITEM, data: itemUpdate}),
        onLabelSelect: (label) => dispatch({type: actionTypes.FILTER_LABEL_SELECT, data: label}),
        onSortingChange: (typeSorting) => dispatch({type: actionTypes.SORTING_CHANGE, data: typeSorting}),
        onSearchChange: (searchString) => dispatch({type: actionTypes.SEARCH_ITEMS, data: searchString})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);