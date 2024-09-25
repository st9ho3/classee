import React,{useRef} from 'react'

const StudentIcon = ({type}) => {
  const randomNumber = useRef(Math.ceil(Math.random()*7))
  
  return (
    <div>
      <img className={type === 'store' ? 'studentIcon storeIcon' : 'studentIcon'} src={`boy`+randomNumber.current+`.png`} alt="student-icon" />
    </div>
  )
}

export default StudentIcon
