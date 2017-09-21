import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './familyReducer'
import * as familyActions from '../actions/familyActions';


it('reduces', () => {
  
  expect(reducer({}, {type:'foo'})).toEqual({})

})

it('selects kid', () => {
 
  expect(reducer({}, familyActions.kidSelected({id:1}) )).toEqual({selectedKidId:1})
})