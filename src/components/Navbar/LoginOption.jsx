import React,{useContext} from 'react'
import { totalContext } from '../../App';
import { IoIosLogIn } from "react-icons/io";

const LoginOption = () => {

    const { toggle, page, close } = useContext(totalContext);
    return (
      <div
          className="navOpt init"
          onClick={() => (page.Login ? close() : toggle('Login'))}
          style={
            page.Registration
              ? { backgroundColor: 'white', border: 'solid thin rgb(139, 142, 237)' }
              : { backgroundColor: 'rgb(139, 142, 237)', border: 'solid thin rfb(248, 248, 247)' }
          }
        >
          <IoIosLogIn
            className="teacherBoardIcon init"
            style={
              page.Login
                ? { color: 'rgb(139, 142, 237)' }
                : { color: 'white' }
            }
          />
          <h2 style={
              page.Login
                ? { color: 'rgb(139, 142, 237)' }
                : { color: 'white' }} >Please Log in</h2>
        </div>
    )
}

export default LoginOption
