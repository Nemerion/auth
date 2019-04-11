import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

export default combineReducers({
 auth, // is equal to write auth: auth using ES6 syntax
 form: formReducer
});
