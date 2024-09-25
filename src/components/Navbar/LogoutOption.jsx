import React, { useContext } from 'react'
import { IoIosLogOut } from "react-icons/io";
import {logout} from '../../utils/Auth'
import { totalContext } from '../../App';

const LogoutOption = ({setAuthUser}) => {
  const {authUser} =useContext(totalContext)
  return (
    <div className='navOpt logout'>
      <IoIosLogOut className='teacherBoardIcon' onClick={() => {setAuthUser(false)}}/>
    </div>
  )
}

export default LogoutOption
