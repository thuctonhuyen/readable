import * as ReadAPIUtil from '../utils/ReadAPI';
import * as action_types from '../action_types/action_types'
import {sortPosts} from './posts_actions'

export const changeSortByFilter = option => ({
    type: action_types.CHANGE_SORT_BY_FILTER,
    option
});

export const changeCategoriesFilter = option  => ({
    type: action_types.CHANGE_CATEGORIES_FILTER,
    option
});

