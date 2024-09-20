import React, { useContext } from 'react';
import { totalContext } from '../../App';
import {ClassesOption, CreateClassOption} from '../../constants/Components'

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
    </div>
  );
};

export default Navbar;