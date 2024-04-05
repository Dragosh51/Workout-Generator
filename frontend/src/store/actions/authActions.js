import axios from 'axios';

export const loginFacebook = () => (dispatch) => {
  axios
    .post(`http://localhost:5343/auth/authFacebook`)
  // .then((res) => {
  //   console.log("REGISTER USER", res.data)
  //   dispatch({
  //     type: 'REGISTER_SUCCESFUL',
  //     payload: res.data,
  //   });
  // })
  // .catch((err) => {
  //   if (err) {
  //     dispatch({
  //       type: 'REGISTER_ERROR',
  //       payload: err.response.data,
  //     });
  //   }
  // });
};

export const logout = () => {
  return {
    type: 'LOGOUT_SUCCESFUL',
  };
};

export const fetchUser = () => (dispatch, getState) => {
  dispatch({ type: 'FETCH_USER' });

  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  if (token) {
    config.headers['auth-token'] = token;
  }

  axios
    .get(`http://localhost:5343/auth/user`, config)
    .then((res) => {
      // console.log("FETCH USER", res.data)
      dispatch({
        type: 'FETCHED_USER',
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log(err);
      dispatch(logout());
    });
};

export const login = (email, pass) => (dispatch) => {
  console.log(email, pass);
  const data = {
    email: email,
    psw: pass
  }
  axios
    .post(`http://localhost:5343/auth/login`, data)
    .then((res) => {
      console.log("LOGIN USER", res.data)
      dispatch({
        type: 'LOGIN_SUCCESFUL',
        payload: res.data,
      });
    })
    .catch((err) => {
      if (err) {
        dispatch({
          type: 'LOGIN_ERROR',
          payload: err.response.data,
        });
      }
    });
};

export const register = (name, email, pass) => (dispatch) => {
  console.log(name, email, pass);
  const data = {
    name: name,
    email: email,
    psw: pass
  }
  axios
    .post(`http://localhost:5343/auth/register`, data)
    .then((res) => {
      console.log("REGISTER USER", res.data)
      // dispatch({
      //   type: 'REGISTER_SUCCESFUL',
      //   payload: res.data,
      // });
    })
    .catch((err) => {
      if (err) {
        // dispatch({
        //   type: 'REGISTER_ERROR',
        //   payload: err.response.data,
        // });
      }
    });
};

