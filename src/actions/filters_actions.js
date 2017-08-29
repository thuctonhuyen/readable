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

export const getDetailPost = id => ({
    type: action_types.GET_DETAIL_POST,
    id
});

export const selectPostCategory = category => ({
    type: action_types.SELECT_POST_CATEGORY,
    category
});

export const setFormType = type => ({
    type: action_types.SET_FORM_TYPE,
    formType: type
});
