import { combineReducers } from 'redux';
import boardReducer from './boards';

const mainReducer = combineReducers({
  boards: boardReducer,
});

const rootReducer = (state, action) => {
  return mainReducer(state, action);
};

export default rootReducer;
