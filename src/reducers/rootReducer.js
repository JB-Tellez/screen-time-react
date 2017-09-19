import {combineReducers} from 'redux';
import family from './familyReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  family,
  auth
});

export default rootReducer;