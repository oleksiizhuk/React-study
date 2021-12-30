import { CLEAR_JOKES, SET_JOKE, SET_LOADING_JOKE } from './types';

export const initialState = {
  joke: '',
  isLoadingJoke: false
};

export default function jokes(state = initialState, action) {
  switch (action.type) {
    case SET_JOKE:
      return {
        ...state,
        joke: action.joke
      };
    case SET_LOADING_JOKE:
      return {
        ...state,
        isLoadingJoke: action.isLoadingJoke
      };
    case CLEAR_JOKES:
    default:
      return state;
  }
}
