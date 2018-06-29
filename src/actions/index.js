import {
    AUTH_USER,
    POST_URL,
    AUTH_ERROR

} from './types';
import axios from 'axios';

//Redux-thunk return method instead of promise like redux-promise.
export const signup = (formProps, callBack) => async dispatch => {

    try {
        const response = await axios.post(POST_URL, { //Added dummy url for testing will replace it with actual API
            formProps
        });
        const token = response ? '123_token' : '123_invalid'; //dummy token for time being
        dispatch({
            type: AUTH_USER,
            payload: token
        });
        //store login details in localStorage
        localStorage.setItem('token', token);
        callBack();
    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Invalid user'
        });
    }
}

export const signin = (formProps, callBack) => async dispatch => {
    try {
        const response = await axios.post(POST_URL, {
            formProps
        });
        const token = response ? '123_token' : '123_invalid'; //dummy token for time being


        dispatch({
            type: AUTH_USER,
            payload: token
        });
        localStorage.setItem('token', token);
        callBack();

    } catch (e) {
        dispatch({
            type: AUTH_ERROR,
            payload: 'Invalid login details'
        });
    }
}



export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    }
}