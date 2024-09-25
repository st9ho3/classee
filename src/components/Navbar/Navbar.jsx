import React, { useContext } from 'react';
import { totalContext } from '../../App';
import {ClassesOption, CreateClassOption, StudentsOption} from '../../constants/Components'
import RegistrationOption from './RegistrationOption';

const Navbar = () => {
  
  const {page, authUser} = useContext(totalContext)

  return (
    <div
      className="NavBar"
      style={page.CreateClass ? { backgroundColor: 'rgb(248, 248, 247)', border: 'solid thin rfb(248, 248, 247)' } : null}
    >
    {authUser.Type === 'Professor' && <CreateClassOption
     />}
    <ClassesOption
     /> 
    {authUser.Type === 'Professor' && <StudentsOption />}
    </div>
  );
};

export default Navbar;