import React,{useContext} from 'react'
import { totalContext } from '../../App';
import { MdAccountCircle } from "react-icons/md";

const RegistrationOption = () => {
    const { toggle, page, close } = useContext(totalContext);
  return (
    <div
        className="navOpt init"
        onClick={() => (page.Registration ? close() : toggle('Registration'))}
        style={
          page.Registration
            ? { backgroundColor: 'white', border: 'solid thin rgb(139, 142, 237)' }
            : { backgroundColor: 'rgb(139, 142, 237)', border: 'solid thin rfb(248, 248, 247)' }
        }
      >
        <MdAccountCircle
          className="teacherBoardIcon init"
          style={
            page.Registration
              ? { color: 'rgb(139, 142, 237)' }
              : { color: 'white' }
          }
        />
        <h2 style={
            page.Registration
              ? { color: 'rgb(139, 142, 237)' }
              : { color: 'white' }} >Please Register</h2>
      </div>
  )
}

export default RegistrationOption
