import { all } from 'redux-saga/effects';
import boardSaga from './boards';

function* rootSaga() {
  yield all([...boardSaga]);
}

export default rootSaga;
