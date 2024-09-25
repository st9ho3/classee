import React from 'react'

const StudentIcon = ({type}) => {
  const randomNumber = Math.ceil(Math.random()*7)
  console.log(randomNumber)
  return (
    <div>
      <img className={type === 'store' ? 'studentIcon storeIcon' : 'studentIcon'} src={`boy`+randomNumber+`.png`} alt="student-icon" />
    </div>
  )
}

export default StudentIcon
