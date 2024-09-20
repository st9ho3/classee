import { Main, Navbar, Classes} from "./constants/Components"
import CreateClass from "./components/Class/CreateClass"
import { createContext, useState } from "react"
import { popUp } from "./utils/ModalPopUp"


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
      <div style={page.CreateClass ? popUp : null} className="layout">
        <Navbar />
        <Main>
          {page.CreateClass && <CreateClass/>}
          {page.Classes && <Classes />}
        </Main>
      </div>
    </totalContext.Provider>
  )
}

export default App
