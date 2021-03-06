import * as action_types from '../action_types/action_types'
const initialState =
    {
        sortBy: 'voteScore',
        categories: 'all',
        postID: null,
        commentID: null,
        postCategory: null,
        formType: null,
    };

function filters(state = initialState, action) {
    switch (action.type) {
        case action_types.CHANGE_SORT_BY_FILTER:
            return {
                ...state,
                sortBy: action.option
            };
        case action_types.CHANGE_CATEGORIES_FILTER:
            return {
                ...state,
                categories: action.option
            };

        case action_types.GET_DETAIL_POST: case action_types.SET_POST_ID:
            return {
                ...state,
                postID: action.id
            };
        case action_types.SELECT_POST_CATEGORY:
            return {
                ...state,
                postCategory: action.category
            };
        case action_types.SET_FORM_TYPE:
            return {
                ...state,
                formType: action.formType
            };
        case action_types.SET_COMMENT_ID:
            return{
                ...state,
                commentID: action.id
            };
        default:
            return state;
    }
}

export default filters;