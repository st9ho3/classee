import React,{useContext} from 'react'
import { totalContext } from '../../App';
import { FaSchool } from 'react-icons/fa6';

const ClassesOption = () => {
    const { toggle, page, close } = useContext(totalContext);
  return (
    <div
        className="navOpt"
        onClick={() => (page.Classes ? close() : toggle('Classes'))}
        style={
          page.Classes
            ? { backgroundColor: 'white', border: 'solid thin rgb(139, 142, 237)' }
            : { backgroundColor: 'rgb(139, 142, 237)', border: 'solid thin rfb(248, 248, 247)' }
        }
      >
        <FaSchool
          className="teacherBoardIcon"
          style={
            page.Classes
              ? { color: 'rgb(139, 142, 237)' }
              : { color: 'white' }
          }
        />
      </div>
  )
}

export default ClassesOption
