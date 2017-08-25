import * as action_types from '../action_types/action_types'
import sortOn from 'sort-on'

function posts (state = [], action) {
    switch (action.type) {
        case action_types.GET_ALL_POSTS:
            return action.posts;
        case action_types.SORT_POSTS:
            return(sortOn(state, action.key));
        default:
            return state;

    }
}
export default posts;