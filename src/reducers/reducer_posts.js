import * as action_types from '../action_types/action_types'


function posts(state = [], action) {
    switch (action.type) {
        case action_types.GET_ALL_POSTS:
           return action.posts;
        case action_types.VOTE_POST: case action_types.EDIT_POST:
            let {newPost} = action;
            return state.filter(post => post.id !== newPost.id).concat([newPost]);
        case action_types.ADD_POST:
            return state.concat([action.newPost]);
        case action_types.DELETE_POST:
            let delete_post = state.filter((post) => post.id === action.id);
            delete_post.deleted = true;
            return state.filter((post) => post.id !==  action.id).concat([delete_post]);
        default:
            return state;

    }
}

export default posts;

