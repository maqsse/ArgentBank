import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (email, password) => {
  
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      
      const response = await axios.post('api/v1/user/login', { email, password });
      const { token, user } = response.data;
      localStorage.setItem('token', token);
      dispatch({ type: LOGIN_SUCCESS, payload: user });

      } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data.message });
    }
  };
};
 