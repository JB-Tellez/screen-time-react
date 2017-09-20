import initialState from './initialState';
import {FETCH_FAMILY, RECEIVE_FAMILY, SET_FAMILY, KID_SELECTED, UPDATE_KID} from '../actions/actionTypes';

export default function family(state = initialState.family, action) {
  let newState;
  switch (action.type) {
    case FETCH_FAMILY:
      return action;
    case RECEIVE_FAMILY:
      newState = action.family;
      return newState;
    case SET_FAMILY:
      return null;

    case KID_SELECTED:
      newState = {...state}

      newState.selectedKidId = action.kid.id

      return newState

    case UPDATE_KID:

      newState = {...state}

      const i = newState.children.findIndex( kid => kid.id === action.kid.id)

      newState.children[i] = action.kid

      return newState

    default:
      return state;
  }
}