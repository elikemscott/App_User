import userReducer from './usersReducers';
import {firebaseReducer, firebase} from 'react-redux-firebase';
import {combineReducers} from 'redux';

export default combineReducers ({
    usersState : userReducer,
    firebase: firebaseReducer,
})