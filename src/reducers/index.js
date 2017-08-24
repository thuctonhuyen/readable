import {combineReducers} from 'redux'
import categories from './reducer_categories'
import posts from './reducer_posts'

const rootReducer = combineReducers({
    categories,
    posts
});

export default rootReducer;