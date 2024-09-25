import React,{useContext} from 'react'
import { totalContext } from '../../App';
import { PiStudent } from "react-icons/pi";


const StudentsOption = () => {
    const { toggle, page, close } = useContext(totalContext);
  return (
    <div
        className="navOpt"
        onClick={() => (page.Students ? close('Students') : toggle('Students'))}
        style={
          page.Students
            ? { backgroundColor: 'white', border: 'solid thin rgb(139, 142, 237)' }
            : { backgroundColor: 'rgb(139, 142, 237)', border: 'solid thin rfb(248, 248, 247)' }
        }
      >
        <PiStudent
          className="teacherBoardIcon"
          style={
            page.Students
              ? { color: 'rgb(139, 142, 237)' }
              : { color: 'white' }
          }
        />
      </div>
  )
}

export default StudentsOption
