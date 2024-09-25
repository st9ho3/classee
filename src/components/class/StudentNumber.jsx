import React from 'react'
import { IoPeople } from "react-icons/io5";


const StudentNumber = ({item}) => {
  return (
    <div className='studentNumber'>
      <IoPeople className='studentNumnerIcon'/>
      <div className='studentNumbers'>
        {item.students.length}/{item.classSizeLimit}
      </div>

    </div>
  )
}

export default StudentNumber
