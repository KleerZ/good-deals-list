import {DealDto} from "@/dto/deal.dto";

const initialState = {
  todos: [] as DealDto[]
};

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    default:
      return state;
  }
};