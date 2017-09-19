import initialState from './initialState';
import {FETCH_FAMILY, RECEIVE_FAMILY, SET_FAMILY, KID_SELECTED} from '../actions/actionTypes';

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
    // case SELECT_KID:
    //   console.log(action.type, action.childId)
    //   newState = {...state}
    //   return newState

    default:
      return state;
  }
}