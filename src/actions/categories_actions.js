import * as ReadAPIUtil from '../utils/ReadAPI';
import * as action_types from '../action_types/action_types'


export const getAllCategories = categories => ({
   type: action_types.GET_ALL_CATEGORIES,
    categories
});

export const fetchAllCategories = () => dispatch => (
  ReadAPIUtil
      .getAllCategories()
      .then(data => dispatch(getAllCategories(data)))
);