import React, { useContext } from 'react'
import { totalContext } from '../../App'
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";


const Navbar = () => {
    const {toggle, page, close} = useContext(totalContext)
  return (
    <div className='NavBar' style={page.CreateClass ? {backgroundColor: 'rgb(248, 248, 247)'}: null}>
      <div className="navOpt" onClick={() => page.CreateClass ? close() :toggle('CreateClass')} style={page.CreateClass ? {backgroundColor: 'white', border: 'solid thin rgb(139, 142, 237'} : {backgroundColor: 'rgb(139, 142, 237)'}}>
          <FaChalkboardTeacher className="teacherBoardIcon" style={page.CreateClass ? {color: 'rgb(139, 142, 237)'} : {color: 'white'}}/>
        </div>
      <div className="navOpt" onClick={() => page.Classes ? close() :toggle('Classes')} style={page.Classes ? {backgroundColor: 'white', border: 'solid thin rgb(139, 142, 237'} : {backgroundColor: 'rgb(139, 142, 237)'}}>
          <FaSchool  className="teacherBoardIcon" style={page.Classes ? {color: 'rgb(139, 142, 237)'} : {color: 'white'}}/>
        </div>
      
    </div>
  )
}

export default Navbar
