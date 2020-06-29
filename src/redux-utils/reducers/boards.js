import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  boards: [],
  status: [],
  isFetching: false,
};

const reducer = createReducer(initialState, {
  ADD_BOARDS: (state, action) => {
    state.boards = action.payload.params.boards;
    state.status = action.payload.params.status;
  },
});

export default reducer;
