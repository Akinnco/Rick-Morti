import {SET_FILMLIST, SET_MOVIEDETAILS} from './types';

export const setFilmList = filmList => ({
  type: SET_FILMLIST,
  payload: filmList,
});
export const setMovieDetails = movieDetails => ({
  type: SET_MOVIEDETAILS,
  payload: movieDetails,
});
