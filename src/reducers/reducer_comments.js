import * as action_types from '../action_types/action_types'

function comments(state = [], action) {
    switch (action.type) {
        case action_types.GET_COMMENTS_FOR_POST:
            return action.comments;
        case action_types.VOTE_COMMENT, action_types.EDIT_COMMENT:
            const {newComment} = action;
            return state.filter((comment) => comment.id !== newComment.id)
                .concat([newComment]);
        case action_types.ADD_COMMENT:
            return state.concat([action.newComment]);

        case action_types.DELETE_COMMENT:
            let delete_comment = state.filter((comment) => comment.id === action.id);
            delete_comment.deleted = false;
            return state.filter((comment) => comment.id !==  action.id).concat([delete_comment]);
        default:
            return state;
    }
}

export default comments;