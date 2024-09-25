import React, { useContext } from 'react'
import {Navbar, CreateClass, Classes, Main, Header, MyStudents} from '../constants/Components'
import { totalContext } from '../App'
import {popUp} from '../utils/ModalPopUp'

const LoggedUser = () => {
    const {page, authUser} = useContext(totalContext)
  return (
    <div className='mainDashboard'>
      <div>
        <Navbar />
        {page.CreateClass || page.Classes || page.Students ? <Header /> : null}
        <Main>
          {page.CreateClass && authUser.Type === 'Professor' && <CreateClass/>}
          {page.Classes && <Classes />}
          {page.Students && authUser.Type === 'Professor' && <MyStudents />}
        </Main>
      </div>
    </div>
  )
}

export default LoggedUser
