const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload.user,
      };
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_USER':
    case 'DELETE_USER':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
