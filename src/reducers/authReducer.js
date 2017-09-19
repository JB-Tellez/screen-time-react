import initialState from './initialState';
import { LOGIN, LOGOUT, LOGIN_COMPLETE, SET_LOGIN_ERRORS } from '../actions/actionTypes';

export default function auth(state = initialState.auth, action) {
  let newState;
  switch (action.type) {
    case LOGIN:
      return action;
    case LOGIN_COMPLETE:
      newState = { ...state }
      newState.loggedIn = true
      newState.errors = ''
      return newState
    case LOGOUT:
      newState = { ...state }
      newState.loggedIn = false
      return newState;
    case SET_LOGIN_ERRORS:
      newState = { ...state }
      newState.errors = action.errors
      return newState
    default:
      return state;
  }
}