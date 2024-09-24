import React, { useContext } from 'react'
import { IoIosLogOut } from "react-icons/io";
import {logout} from '../../utils/Auth'
import { totalContext } from '../../App';

const LogoutOption = ({setAuthUser}) => {
  const {authUser} =useContext(totalContext)
  return (
    <div className='navOpt logout'>
      <h4 className='authUserReminder'>Welcome {authUser.Email.slice(0,4)}</h4>
      <IoIosLogOut className='teacherBoardIcon' onClick={() => {setAuthUser(false)}}/>
    </div>
  )
}

export default LogoutOption
