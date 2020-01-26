import { combineReducers } from 'redux';
import comments from './ducks/comments';

const rootReducer = combineReducers({
    comments
});
export default rootReducer;
