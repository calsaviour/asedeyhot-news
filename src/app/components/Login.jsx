/**
 * @function Login
 * @typedef {func} authSuccess @param response
 * @typedef {func} authFail @param response
 */

import React from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

/**
 * Display home page if authentication is unsuccessful
 * @function authFail
 * @param {object} response
 * @return {void}
 */
const authFail = (response) => {
  return response;
};

/**
 * Directs user to home page (sources page) if authentication is successful
 * @function authSuccess
 * @param {object} response
 * @return {void}
 */
const authSuccess = (response) => {
  // Save profile info from response in an object
  const user = {
    name: response.profileObj.givenName,
    imageUrl: response.profileObj.imageUrl,
    googleId: response.profileObj.googleId,
    isSignedIn: true
  };

  // Set user in localStorage
  localStorage.setItem('user', JSON.stringify(user));
  window.location.href = '#/sources';
  window.location.reload();
};

const Login = () => {
  return (
     <div className="body login-page">
      <h3> Get latest, popular, and top news from around the globe </h3>
      <GoogleLogin
      clientId=
      "126684501762-qf76j1u8hfsqc1lh4emjg2h4s18si0o3.apps.googleusercontent.com"
      buttonText="SignIn With Google+"
      onSuccess={authSuccess} onFailure={authFail} />
      <p><Link to={{
        pathname: '/sources'
      }}>or browse through our different news sources</Link></p>
    </div>
  );
};

export default Login;
