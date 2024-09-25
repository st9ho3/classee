import { 
  LoggedUser, 
  Registration, 
  RegistrationOption, 
  Login, 
  LoginOption, 
  LogoutOption 
} from "./constants/Components";

import { createContext, useEffect, useState } from "react";
import { logout } from "./utils/Auth";
import { localStorageCall } from "./utils/LocalStorageCall";
import { style_1, style_2 } from "./utils/ModalPopUp";

export const totalContext = createContext();

function App() {
  const AUTH = localStorage.getItem('auth_user') 
    ? localStorageCall('auth_user') 
    : false;
    
  const [authUser, setAuthUser] = useState(AUTH);
  const [page, setPage] = useState(false);

  const toggle = (name) => {
    setPage((prev) => ({ [name]: true }));
  };

  const close = (name) => {
    setPage({ [name]: false });
  };

  useEffect(() => {
    logout(authUser);
  }, [authUser]);
console.log(page)
  return (
    <totalContext.Provider value={{ toggle, page, close, authUser }}>
      <div
        className="layout"
        style={
          !page.Registration || !page.Login
            ? style_1
            : null
        }
      >
        {!page.Registration && !page.Login && !authUser && (
          <div style={style_2}>
            <RegistrationOption />
            <LoginOption />
          </div>
        )}
        {page.Registration && <Registration />}
        {page.Login && <Login />}
        {authUser && <LoggedUser />}
        {authUser && <LogoutOption setAuthUser={setAuthUser} />}
      </div>
    </totalContext.Provider>
  );
}

export default App;