import * as ReadAPIUtil from '../utils/ReadAPI';
import * as action_types from '../action_types/action_types'

/* start GET_COMMENTS_FOR_POST */
export const getCommentsForPost = comments => ({
    type: action_types.GET_COMMENTS_FOR_POST,
    comments
});

export const fetchCommentsForPost = (id) => dispatch => (
    ReadAPIUtil.getCommentsForPost(id)
        .then(comments => dispatch(getCommentsForPost(comments)))
);

/* end GET_COMMENTS_FOR_POST */

/* start VOTE_COMMENT*/
export const voteComment = (newComment) => ({
    type: action_types.VOTE_COMMENT,
    newComment
});

export const voteCommentAPI = (id, option) => dispatch => (
    ReadAPIUtil.voteComment(id, option)
        .then(newComment => dispatch(voteComment(newComment)))
);
/*end VOTE_COMMENT*/


/* start ADD_COMMENT */
export const addComment = newComment => ({
    type: action_types.ADD_COMMENT,
    newComment
});

export const addCommentAPI = (body) => dispatch => (
    ReadAPIUtil
        .addComment(body).then(newComment => dispatch(addComment(newComment)))
);
/* end ADD_COMMENT */

/*start DELETE_COMMENT */
export const deleteComment = (id) => ({
    type: action_types.DELETE_COMMENT,
    id
});
export const deleteCommentAPI = (id) => dispatch => (
    ReadAPIUtil.deleteComment(id)
        .then(id => dispatch(deleteComment(id)))
);
/*end DELETE_COMMENT */

/* start EDIT_COMMENT */
export const editComment = (newComment) => ({
    type: action_types.EDIT_COMMENT,
    newComment
});
export const editCommentAPI = (id, body) => dispatch => (
    ReadAPIUtil.editComment(id, body)
        .then(newComment => dispatch(editComment(newComment)))
);
/* end EDIT_COMMENT */