import React, { useContext } from 'react'
import {Navbar, CreateClass, Classes, Main} from '../constants/Components'
import { totalContext } from '../App'
import {popUp} from '../utils/ModalPopUp'

const LoggedUser = () => {
    const {page, authUser} = useContext(totalContext)
  return (
    <div>
      <div style={page.CreateClass ? popUp : null}>
        <Navbar />
        <Main>
          {page.CreateClass && <CreateClass/>}
          {page.Classes && <Classes />}
        </Main>
      </div>
    </div>
  )
}

export default LoggedUser
