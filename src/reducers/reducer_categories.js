import * as action_types from '../action_types/action_types'

function categories(state = [], action){
    const {type, categories} = action;
    switch(type){
        case action_types.GET_ALL_CATEGORIES:
            return categories;
        default:
            return state;

    }
}

export default categories;