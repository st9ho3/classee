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
    (user) => user.Email === email && user.Password=== password
  );
  const auth_user = user
  user 
    ? localStorageSend(AUTH_KEY, auth_user)
    : console.error('User not found');
};

export const logout = () => {
    localStorageSend(AUTH_KEY, [])
}