const initialState = {
  friends: [],
};

export const friendReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        ...state,
        friends: [...state.friends, action.payload],
      };
    case 'FETCH_FRIEND_TODOS':
    // Implement logic to fetch friend's todos
    default:
      return state;
  }
};