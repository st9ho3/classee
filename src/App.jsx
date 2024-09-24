import { LoggedUser, Registration, RegistrationOption, Login, LoginOption } from "./constants/Components";
import { createContext, useState } from "react";
import { register, login, logout } from "./utils/Auth";

export const totalContext = createContext();

function App() {
  const [authUser, setAuthUser] = useState(false);
  const [page, setPage] = useState({
    Registration: false,
    Login: false,
  });

  const toggle = (name) => {
    setPage((prev) => ({ ...prev, [name]: true }));
  };

  const close = (name) => {
    setPage((prev) => ({ ...prev, [name]: false }));
  };

  console.log(page); // Optional logging, can be removed

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
        {!page.Registration && !page.Login && (
          <div style={{display:'flex', gap: '2rem'}}>
            <RegistrationOption />
            <LoginOption />
          </div>
        )}
        {page.Registration && <Registration />}
        {page.Login && <Login />}
        {authUser && <LoggedUser />}
      </div>
    </totalContext.Provider>
  );
}

export default App;