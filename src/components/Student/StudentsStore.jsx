import React from 'react'
import { IoClose } from "react-icons/io5";
import {Showroom, StudentProduct, StudentIcon} from '../../constants/Components'
import { localStorageCall } from '../../utils/LocalStorageCall';

const StudentsStore = ({closeStore}) => {
    const students = localStorageCall('Students')
  
  return (
    <div className='store'>
      <IoClose className='closeButton' onClick={ (e) =>{
        e.stopPropagation()
         closeStore()} } />
         <Showroom
          goods={students}
          type='bigger'>
            {students.map((student) => (
                <StudentProduct
                 key={student.UserId}
                 id = {student.UserId}>
                    <StudentIcon
                    type="store" />
                    <div className="studentTitle">
                        {student.UserName}
                    </div>
                </StudentProduct>
                
            ))}
         </Showroom>
    </div>
  )
}

export default StudentsStore
