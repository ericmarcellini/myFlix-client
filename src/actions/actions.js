export const SET_MOVIES = 'SET_MOVIES';
export const SET_FILTER = 'SET_FILTER';
export const SHOW_USER = 'SHOW_USER';

export function setMovies(value) {
  return { type: SET_MOVIES, value };
}

export function setFilter(value) {
  return { type: SET_FILTER, value };
}

export function showUser(value) {
    return { type: SHOW_USER, value}
}