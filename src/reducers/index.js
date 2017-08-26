import {combineReducers} from 'redux'
import categories from './reducer_categories'
import posts from './reducer_posts'
import filters from './reducer_filters'
import comments from './reducer_comments'

const rootReducer = combineReducers({
    categories,
    posts,
    filters,
    comments
});

export default rootReducer;