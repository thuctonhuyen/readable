import * as ReadAPIUtil from '../utils/ReadAPI';

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const receiveCategories = categories => ({
   type: RECEIVE_CATEGORIES,
    categories
});

export const fetchCategories = () => dispatch => (
  ReadAPIUtil
      .getAllCategories()
      .then(categories => dispatch(receiveCategories(categories)))
);