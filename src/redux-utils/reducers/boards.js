import { createReducer } from '@reduxjs/toolkit';
import { boardTypes } from '../types';

const initialState = {
  boards: [],
  status: [],
  isFetching: false,
};

const reducer = createReducer(initialState, {
  [boardTypes.boards.request]: (state) => {
    state.isFetching = true;
  },
  [boardTypes.boards.success]: (state, action) => {
    state.boards = action.payload.boards;
    state.status = action.payload.status;
    state.isFetching = false;
  },
  [boardTypes.boards.error]: (state) => {
    state.isFetching = false;
  },
});

export default reducer;
