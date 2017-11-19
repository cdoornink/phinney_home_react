import { session as types } from 'lib/constants/action-types';
import createReducer from 'lib/create-reducer';

const initialState = {
  isSessionModalLaunched: false,
};

export default createReducer(initialState, {
  [types.MODAL_LAUNCHED]: modalLaunched,
  [types.MODAL_CLOSED]: modalClosed,
});

function modalLaunched(state) {
  return {
    ...state,
    isSessionModalLaunched: true
  };
}

function modalClosed(state) {
  return {
    ...state,
    isSessionModalLaunched: false
  };
}
