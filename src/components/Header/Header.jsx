import React, { useContext } from 'react'
import { totalContext } from '../../App'

const Header = () => {
  const {authUser} = useContext(totalContext)
  return (
    <div className='header'>
      <h4 className='authUserReminder'>Welcome {authUser.Email.slice(0,4)}</h4>
    </div>
  )
}

export default Header
