import { SET_USER, CLEAR_USER } from './types';

export const initialState = {
  user: '',
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case CLEAR_USER:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
