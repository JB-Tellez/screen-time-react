import * as types from './actionTypes';

const apiKey = 'DANGER'

function url() {
  return 'http://localhost:3004/families';
}

export function receiveFamily(json) {
  return {type: types.RECEIVE_FAMILY, family: json || null};
}

export function fetchFamily(name, password) {
  
  return dispatch => {
    return fetch(url() + '?name=' + name + '&password=' + password, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json'
      }
    })
    .then(response => {
      return response.json()
    })
    .then(json => dispatch(receiveFamily(json[0])))
    .catch(reason => console.log(reason));
  };
}

export function clearFamily() {
  return {type: types.SET_FAMILY, family: null}
}

export function kidSelected(kid) {
  return {type: types.KID_SELECTED, kid: kid}
}