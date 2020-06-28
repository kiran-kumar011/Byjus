import { combineReducers } from 'redux';

const mainReducer = combineReducers({
  pages: {},
});

const rootReducer = (state, action) => {
  return mainReducer(state, action);
};

export default rootReducer;
