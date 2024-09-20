import React,{useContext} from 'react'
import { totalContext } from '../../App';
import { FaChalkboardTeacher } from 'react-icons/fa';

const CreateClassOption = () => {
    const { toggle, page, close } = useContext(totalContext);
  return (
    <div
        className="navOpt"
        onClick={() => (page.CreateClass ? close() : toggle('CreateClass'))}
        style={
          page.CreateClass
            ? { backgroundColor: 'white', border: 'solid thin rgb(139, 142, 237)' }
            : { backgroundColor: 'rgb(139, 142, 237)', border: 'solid thin rfb(248, 248, 247)' }
        }
      >
        <FaChalkboardTeacher
          className="teacherBoardIcon"
          style={
            page.CreateClass
              ? { color: 'rgb(139, 142, 237)' }
              : { color: 'white' }
          }
        />
      </div>
  )
}

export default CreateClassOption
