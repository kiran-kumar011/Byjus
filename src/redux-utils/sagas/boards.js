import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from '../../Api/utils';
import endpoints from '../../Api/endpoints';
import { boardTypes } from '../types';
const watcherSaga = [
  takeLatest(boardTypes.boards.request, fetchAllBoardsRequest),
];

function* fetchAllBoardsRequest() {
  try {
    const { response, request } = yield call(get, { apiUrl: endpoints.boards });

    yield put({ type: boardTypes.boards.success, payload: response });
  } catch (e) {
    console.log(e, 'erro from fetch');
  }
  //get all boards
  // dispatch action after fetch by using put
}

export default watcherSaga;
