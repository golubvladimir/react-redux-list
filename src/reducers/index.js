import { combineReducers } from 'redux';

import list from './list';
import labelFilter from './labelFilter';
import sortingList from './sortingList';
import searchItems from './searchItems';

export default combineReducers({
    list,
    labelFilter,
    sortingList,
    searchItems
});