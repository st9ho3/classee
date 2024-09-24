import { LoggedUser, Registration, RegistrationOption, Login, LoginOption } from "./constants/Components";
import { createContext, useEffect, useState } from "react";
import { register, login, logout } from "./utils/Auth";
import { localStorageCall } from "./utils/LocalStorageCall";

export const totalContext = createContext();

function App() {
  const [authUser, setAuthUser] = useState(false);
  const [page, setPage] = useState(false);

  const toggle = (name) => {
    setPage((prev) => ({ [name]: true }));
  };

  const close = (name) => {
    setPage({ [name]: false });
  };
  useEffect(() => {
   const AUTH = localStorage.getItem('auth_user') ? localStorageCall('auth_user') : false
   setAuthUser(AUTH)
  },[])


  return (
    <totalContext.Provider value={{ toggle, page, close }}>
      <div
        className="layout"
        style={
          !page.Registration || !page.Login
            ? { display: 'flex', justifyContent: 'center', alignItems: 'center' }
            : null
        }
      >
        {!page.Registration && !page.Login && !authUser && (
          <div style={{display:'flex', gap: '2rem'}}>
            <RegistrationOption />
            <LoginOption />
          </div>
        )}
        {page.Registration && <Registration />}
        {page.Login && <Login />}
        {authUser  && <LoggedUser />}
      </div>
    </totalContext.Provider>
  );
}

export default App;