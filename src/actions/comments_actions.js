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