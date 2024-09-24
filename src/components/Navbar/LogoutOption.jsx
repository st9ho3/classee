import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import {logout} from '../../utils/Auth'

const LogoutOption = ({setAuthUser}) => {
  return (
    <div className='navOpt logout'>
      <IoIosLogOut className='teacherBoardIcon' onClick={() => {setAuthUser(false)}}/>
    </div>
  )
}

export default LogoutOption
