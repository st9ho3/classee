import React, { useContext } from 'react'
import {Navbar, CreateClass, Classes, Main} from '../constants/Components'
import { totalContext } from '../App'

const LoggedUser = () => {
    const {page} = useContext(totalContext)
  return (
    <div>
      <div /* style={page.CreateClass ? popUp : null}  */className="layout">
        <Navbar />
        <Main>
          {page.CreateClass && <CreateClass/>}
          {page.Classes && <Classes />}
          {/* <button onClick={() => register('stahos1993@gmail.com','1993','Professor')} style={{width: '3rem', height: '1rem'}}></button>
          <button onClick={() => login('stahos1993@gmail.com','1993')} style={{width: '3rem', height: '1rem'}}></button>
          <button onClick={logout} style={{width: '3rem', height: '1rem'}}></button> */}
        </Main>
      </div>
    </div>
  )
}

export default LoggedUser
