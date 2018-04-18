import { handleActions } from 'redux-actions';
import types from './types';
import { defaultCategories } from '../../constants/categories';
import { insert, insertAll, update, remove } from '../../utils/stateHelper';

const createCategory = ({ name, icon, type }) => ({ name, icon, type });

const initialState = insertAll({}, defaultCategories);

const categoriesReducer = handleActions({
  [types.CREATE_CATEGORY]: (state, { payload }) => insert(state, createCategory(payload)),
  [types.UPDATE_CATEGORY]: (state, { payload }) => update(state, payload.id, payload),
  [types.DELETE_CATEGORY]: (state, { payload }) => remove(state, payload),
}, initialState);

export default categoriesReducer;
