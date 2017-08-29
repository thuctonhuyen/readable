import * as ReadAPIUtil from '../utils/ReadAPI';
import * as action_types from '../action_types/action_types'

/* start GET_ALL_POSTS */
export const getAllPosts = posts => ({
    type: action_types.GET_ALL_POSTS,
    posts
});

export const fetchAllPosts = () => dispatch => (
    ReadAPIUtil
        .getAllPosts()
        .then(posts => dispatch(getAllPosts(posts)))
);
/* end GET_ALL_POSTS */

/* start ADD_POST */
export const addPost = newPost => ({
    type: action_types.ADD_POST,
    newPost
});

export const addPostAPI = (body) => dispatch => (
    ReadAPIUtil
        .addPost(body).then(newPost => dispatch(addPost(newPost)))
);
/* end ADD_POST */


/* start VOTE_POST */
export const votePost = (newPost) => ({
    type: action_types.VOTE_POST,
    newPost
});

export const votePostAPI = (id, option) => dispatch => (
    ReadAPIUtil.votePost(id, option)
        .then(newPost => dispatch(votePost(newPost)))
);
/* end VOTE_POST */

/* start GET_POSTS_FOR_CATEGORY */
//fetch posts for given category:
export const getPostsForCategoryAPI = (category) => dispatch => (
    ReadAPIUtil.getPostsForCategory(category)
        .then(posts => dispatch(getAllPosts(posts)))
);
/* end GET_POSTS_FOR_CATEGORY */



