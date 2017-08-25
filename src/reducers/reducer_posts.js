import * as action_types from '../action_types/action_types'


function posts(state = [], action) {
    switch (action.type) {
        case action_types.GET_ALL_POSTS:
           return action.posts;
        case action_types.VOTE_POST:
            const {newPost} = action;
            return state.filter(post => post.id !== newPost.id).concat([newPost]);
        default:
            return state;

    }
}


export default posts;

