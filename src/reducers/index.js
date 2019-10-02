import { combineReducers } from 'redux';

import list from './list';
import labelFilter from './labelFilter';

export default combineReducers({
    list,
    labelFilter
});