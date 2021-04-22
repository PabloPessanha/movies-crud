const Types = {
  NEW: 'user/NEW',
};

export default function user(state = 'Guest', action) {
  switch (action.type) {
    case Types.NEW:
      return action.payload;
    default:
      return state;
  }
}

export const Creators = {
  newUser: (usr) => ({ type: Types.NEW, payload: usr }),
};
