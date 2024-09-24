import { Main, Navbar, Classes, Registration} from "./constants/Components"
import CreateClass from "./components/Class/CreateClass"
import { createContext, useState } from "react"
import { popUp } from "./utils/ModalPopUp"
import { register,login,logout } from "./utils/Auth"


export const totalContext = createContext()

function App() {

  const [page, setPage] = useState({})
  const toggle = (name) => {
    setPage((prev) => ({[name]: true}))
  }
  const close = () => {
    setPage(false)
  }
  console.log(page)
  

  return (
    <totalContext.Provider value={{toggle, page, close}}>
      <div /* style={page.CreateClass ? popUp : null}  */className="layout">
        <Navbar />
        <Main>
          {page.CreateClass && <CreateClass/>}
          {page.Classes && <Classes />}
          {page.Registration && <Registration />}
          {/* <button onClick={() => register('stahos1993@gmail.com','1993','Professor')} style={{width: '3rem', height: '1rem'}}></button>
          <button onClick={() => login('stahos1993@gmail.com','1993')} style={{width: '3rem', height: '1rem'}}></button>
          <button onClick={logout} style={{width: '3rem', height: '1rem'}}></button> */}
        </Main>
      </div>
    </totalContext.Provider>
  )
}

export default App
