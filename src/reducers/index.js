import {combineReducers} from 'redux'
import categories from './reducer_categories'
import posts from './reducer_posts'
import filters from './reducer_filters'

const rootReducer = combineReducers({
    categories,
    posts,
    filters
});

export default rootReducer;