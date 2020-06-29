import { createAction } from '@reduxjs/toolkit';
import { boardTypes } from '../types';

const fetchAllBoards = () => {
  const action = createAction(boardTypes.boards.request)();
  return action;
};

export { fetchAllBoards };
