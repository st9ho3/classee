import React, { useContext } from 'react';
import { totalContext } from '../../App';
import {ClassesOption, CreateClassOption} from '../../constants/Components'
import RegistrationOption from './RegistrationOption';

const Navbar = () => {
  
  const {page} = useContext(totalContext)

  return (
    <div
      className="NavBar"
      style={page.CreateClass ? { backgroundColor: 'rgb(248, 248, 247)', border: 'solid thin rfb(248, 248, 247)' } : null}
    >
    <CreateClassOption
     />
    <ClassesOption
     /> 
     <RegistrationOption
    />
    </div>
  );
};

export default Navbar;