import { combineReducers } from 'redux';

import list from './list';
import labelFilter from './labelFilter';
import sortingList from './sortingList';

export default combineReducers({
    list,
    labelFilter,
    sortingList
});