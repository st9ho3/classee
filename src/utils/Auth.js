import { localStorageCall, localStorageSend } from './LocalStorageCall';

const AUTH_KEY = 'auth_user';

const professors = localStorageCall('Professors') ? localStorageCall('Professors') : [];
const students = localStorageCall('Students') ? localStorageCall('Students') : [];

export const register = (user,type) => {
  type ? 
  students.push(user) :
  professors.push(user)
  type ?
  localStorageSend('Students', students) :
  localStorageSend('Professors', professors)
};

export const login = (email, password) => {
  const users = professors.concat(students)
  const user = users.find(
    (user) => user.Email === email && user.Password=== password
  );
  const auth_user = user
  user 
    ? localStorageSend(AUTH_KEY, auth_user)
    : console.error('User not found');
};

export const logout = (authuser) => {
    localStorageSend(AUTH_KEY, authuser)
}