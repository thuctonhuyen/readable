import * as action_types from '../action_types/action_types'

function comments(state = [], action){
    switch(action.type){
        case action_types.GET_COMMENTS_FOR_POST:
            return action.comments;
        default:
            return state;
    }
}

export default comments;