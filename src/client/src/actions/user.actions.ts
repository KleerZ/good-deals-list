import {DealDto} from "@/dto/deal.dto";

export const loginUser = (userData: any) => ({
  type: 'LOGIN_USER',
  payload: userData,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const updateUser = (updatedUserData: any) => ({
  type: 'UPDATE_USER',
  payload: updatedUserData,
});

export const deleteUser = (userId: any) => ({
  type: 'DELETE_USER',
});

export const addTodo = (todoData: DealDto) => ({
  type: 'ADD_TODO',
  payload: todoData,
});

export const updateTodo = (updatedTodoData: DealDto) => ({
  type: 'UPDATE_TODO',
  payload: updatedTodoData,
});

export const deleteTodo = (todoId: DealDto) => ({
  type: 'DELETE_TODO',
  payload: todoId,
});

export const addFriend = (friendId: any) => ({
  type: 'ADD_FRIEND',
  payload: friendId,
});

export const fetchFriendTodos = (friendId: any) => ({
  type: 'FETCH_FRIEND_TODOS',
  payload: friendId,
});