import * as action_types from '../action_types/action_types'
const initialState =
    {
        sortBy: 'voteScore',
        categories: 'all',
        postID: null,
        postCategory: null
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

        case action_types.GET_DETAIL_POST:
            return {
                ...state,
                postID: action.id
            };
        case action_types.SELECT_POST_CATEGORY:
            return {
                ...state,
                postCategory: action.category
            };
        default:
            return state;
    }
}

export default filters;