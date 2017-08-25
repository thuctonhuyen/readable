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


/* start SORT_POSTS */
export const sortPosts = (key) => ({
   type: action_types.SORT_POSTS,
    key
});
/* end SORT_POSTS */

