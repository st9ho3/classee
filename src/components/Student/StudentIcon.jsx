import React from 'react'

const StudentIcon = ({type}) => {
  return (
    <div>
      <img className={type === 'store' ? 'studentIcon storeIcon' : 'studentIcon'} src="vite.svg" alt="student-icon" />
    </div>
  )
}

export default StudentIcon
