import userAPI from './userAPI';
import tokenService from './tokenService';

function signup(user) {
  return userAPI.signup(user)
    .then(token => tokenService.setToken(token));
}


function getUser() {
  return tokenService.getUserFromToken();
}

function login(creds) {
  return userAPI.login(creds)
    .then(token => tokenService.setToken(token));    
}

function logout() {
  tokenService.removeToken();
}

export default {
  signup,
  getUser,
  login,
  logout
}