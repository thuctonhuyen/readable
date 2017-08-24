

const categories = (state = [], action) => {
    switch(action.type){
        case 'GET_ALL_CATEGORIES':
            return[
                ...state,
                action.data
            ]
        default:
            return state;

    }

};

export default categories;