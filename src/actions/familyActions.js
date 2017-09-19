import * as types from './actionTypes'; 
import DB from '../api/DB';


const db = new DB();

export function receiveFamily(json) {
  return {type: types.RECEIVE_FAMILY, family: json || null};
}

export function fetchFamily(name, password) {
  return dispatch => {
    return db.getFamily(name, password)
      .then( (fam) => {
        dispatch(receiveFamily(fam))
      })
  }
}

export function addFamily(name, password) {
  console.log('[familyActions] addFamily')
  return dispatch => {
    return db.addFamily(name, password)
      .then( (fam) => {
        dispatch(receiveFamily(fam))
      })
  }
  
}

export function clearFamily() {
  return {type: types.SET_FAMILY, family: null}
}

export function kidSelected(kid) {
  return {type: types.KID_SELECTED, kid: kid}
}