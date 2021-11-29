/* eslint-disable no-unreachable */
import {SET_FILMLIST, SET_MOVIEDETAILS} from './types';

const initialState = {
  filmList: [],
  movieDetails: [],
};

const reducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case SET_FILMLIST:
      return {...state, filmList: action.payload};
      break;
    case SET_MOVIEDETAILS:
      return {...state, movieDetails: action.payload};
      break;
  }

  return state;
};

export default reducer;
