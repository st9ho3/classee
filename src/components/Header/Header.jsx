import React, { useContext } from 'react'
import { totalContext } from '../../App'

const Header = () => {
  const {authUser, page} = useContext(totalContext)
  return (
    <div className='header'>
      <h1 className='title'>{page.Classes ? 'My Classes' : page.Students ? 'My Students' : null }</h1>
      <h4 className='authUserReminder'>Welcome {authUser.UserName}</h4>
    </div>
  )
}

export default Header
