import React, { useContext } from 'react'
import { classContext } from '../class/CreateClass'


const StudentProduct = ({children, id}) => {
const {tempStudentIds, getIds} = useContext(classContext)
  return (
    <div className="studentOption" onClick={() => getIds(id)}>
                {children}    
                </div>
  )
}

export default StudentProduct
