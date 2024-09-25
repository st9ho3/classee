export const localStorageCall = (Goods) => {
   const storedArray = localStorage.getItem(Goods);
   const arrayReadyToUse = storedArray ? JSON.parse(storedArray) : [];
   return arrayReadyToUse;
 };
 
 export const localStorageSend = (Things, things) => {
   localStorage.setItem(`${Things}`, JSON.stringify(things));
 };
 
 export const updateClasses = (newClass) => {
   const users = localStorageCall('Users');
   const authUser = localStorageCall('auth_user');
 
   const wantedUser = users.filter(
     (user) => user.Email === authUser.Email && user.Password === authUser.Password
   )[0];
 
   const newUsers = users.filter(
     (user) => user.Email !== authUser.Email || user.Password !== authUser.Password
   );
 
   wantedUser.Classes.push(newClass);
   newUsers.push(wantedUser);
 
   localStorageSend('Users', newUsers);
   localStorageSend('auth_user', wantedUser);
 };