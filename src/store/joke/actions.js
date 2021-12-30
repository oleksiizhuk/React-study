import { SET_JOKE, SET_LOADING_JOKE } from './types';

export const setJoke = (joke) => ({ type: SET_JOKE, joke });
export const setLoadingJoke = (isLoadingJoke) => ({ type: SET_LOADING_JOKE, isLoadingJoke });

export const getJoke = () => {
  return (dispatch) => {
    dispatch(setLoadingJoke(true));
    fetch('https://geek-jokes.sameerkumar.website/api')
      .then((res) => {
        if (res.status === 200) {
          res.json().then((joke) => {
            dispatch(setJoke(joke));
          });
        }
      }).finally(() => {
        dispatch(setLoadingJoke(false));
      });
  };
};
