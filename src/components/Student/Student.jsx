import React from 'react'
import {StudentBody,StudentTop, StudentMid, StudentBot ,StudentIcon, StudentName, StudentYear, StudentPerformance} from "../../constants/Components"


const Student = () => {
  return (
    <>
    <StudentBody>
      <StudentTop>
        <StudentIcon />
        <StudentName />
        <StudentYear />
      </StudentTop>
      <StudentMid>
        <StudentPerformance />
      </StudentMid>
      <StudentBot>

      </StudentBot>
    </StudentBody>
    </>
  )
}

export default Student
