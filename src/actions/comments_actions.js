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
        .addComment(body).then(newPost => dispatch(addComment(newPost)))
);
/* end ADD_COMMENT */