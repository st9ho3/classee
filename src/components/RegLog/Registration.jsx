import React, { useState } from 'react';
import { Form, ToggleSwitch } from '../../constants/Components';

const Registration = () => {
  const [isStudent, setIsStudent] = useState(false);

  const handleToggle = (value) => {
    setIsStudent(value);
  };

  return (
    <div className='registration'>
      <Form>
        <input type="text" />
        <input type="text" />
        <ToggleSwitch
          value={isStudent}
          onChange={handleToggle}
        />
        <h2>{isStudent ? 'student' : 'prof'}</h2>
      </Form>
    </div>
  );
};

export default Registration;