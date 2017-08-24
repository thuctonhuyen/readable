import * as action_types from '../action_types/action_types'

function posts (state = [], action) {
    switch (action.type) {
        case action_types.GET_ALL_POSTS:
            return [
                ...state,
                action.posts
            ];

        default:
            return state;

    }
}

export default posts;