import { localStorageCall, localStorageSend } from './LocalStorageCall';

const AUTH_KEY = 'auth_user';

const users = localStorageCall('Users') ? localStorageCall('Users') : [];

export const register = (user) => {
  users.push(user);
  localStorageSend('Users', users);
  console.log(users);
};

export const login = (email, password) => {
  const users = localStorageCall('Users');
  const user = users.find(
    (user) => user.User_email === email && user.User_password === password
  );
  const auth_user = []
  auth_user.push(user)
  auth_user 
    ? localStorageSend(AUTH_KEY, auth_user)
    : console.error('User not found');
};

export const logout = () => {
    localStorageSend(AUTH_KEY, [])
}