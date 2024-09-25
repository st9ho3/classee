import React, { useContext } from 'react'
import {Navbar, CreateClass, Classes, Main, Header} from '../constants/Components'
import { totalContext } from '../App'
import {popUp} from '../utils/ModalPopUp'

const LoggedUser = () => {
    const {page, authUser} = useContext(totalContext)
  return (
    <div className='mainDashboard'>
      <div>
        <Navbar />
        <Header />
        <Main>
          {page.CreateClass && <CreateClass/>}
          {page.Classes && <Classes />}
        </Main>
      </div>
    </div>
  )
}

export default LoggedUser
