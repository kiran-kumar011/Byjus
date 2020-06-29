import { createAction } from '@reduxjs/toolkit';

const addNewBoards = ({ params }) => {
  const action = createAction('ADD_BOARDS')({ params });
  return action;
};

export { addNewBoards };
