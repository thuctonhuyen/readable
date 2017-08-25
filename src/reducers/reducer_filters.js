import * as action_types from '../action_types/action_types'
const initialState =
    {
        sortBy: 'vote',
        categories: 'all'
    };
function filters(state = initialState, action) {
    switch (action.type) {
        case action_types.CHANGE_SORT_BY_FILTER:
            return{
                ...state,
                sortBy: action.option
            };
        case action_types.CHANGE_CATEGORIES_FILTER:
            return {
                ...state,
                categories: action.option
            };
        default:
            return state;
    }
}

export default filters;