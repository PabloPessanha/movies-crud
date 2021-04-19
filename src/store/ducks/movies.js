const Types = {
  ADD: 'movies/ADD',
  REMOVE: 'movies/REMOVE',
  UPDATE: 'movies/UPDATE',
};

const INITIAL_STATE = [];

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return [...state, action.payload];
    case Types.REMOVE:
      return state.filter((movie) => movie.id !== action.payload.id);
    case Types.UPDATE:
      return state.map((movie) => {
        if (movie.id === action.payload.id) return action.payload;
        return movie;
      });
    default:
      return state;
  }
}

export const Creators = {
  addMovie: (movie) => ({ type: Types.ADD, payload: movie }),
  removeMovie: (id) => ({ type: Types.REMOVE, payload: { id } }),
  updateMovie: (movie) => ({ type: Types.UPDATE, payload: movie }),
};
