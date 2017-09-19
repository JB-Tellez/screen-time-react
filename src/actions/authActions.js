import * as types from './actionTypes';
import { delay } from '../utils/AsyncUtils'
import * as familyActions from './familyActions';



export function logIn(name, password, history) {

  return (dispatch, getState) => {
    return delay(500)
      .then(() => dispatch(familyActions.fetchFamily(name, password)))
      .then(() => {
        if (getState().family) {
          return dispatch({ type: types.LOGIN_COMPLETE, credentials: { name, password } })
        } else {
          return dispatch({ type: types.SET_LOGIN_ERRORS, errors: 'problem' })
        }
      })
      .then(() => history.push('/family'))


  }
}

export function logOut() {
  return { type: types.LOGOUT }
}

export function register(name, password, history) {

  console.log('[authActions] register')

  return (dispatch, getState) => {
  dispatch(familyActions.addFamily(name, password))
    .then(() => {
      if (getState().family) {
        return dispatch({ type: types.LOGIN_COMPLETE, credentials: { name, password } })
      } else {
        return dispatch({ type: types.SET_LOGIN_ERRORS, errors: 'problem' })
      }
    })
    .then(() => history.push('/family'))
  }

}