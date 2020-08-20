import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return Object.assign([], action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
}

export default sessionErrorsReducer;