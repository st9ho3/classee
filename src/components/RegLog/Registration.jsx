import React, { useState } from 'react';
import { Form, ToggleSwitch } from '../../constants/Components';
import { PiStudent } from 'react-icons/pi';
import { GiTeacher } from 'react-icons/gi';

const Registration = () => {
  const [isStudent, setIsStudent] = useState(false);

  const handleToggle = (value) => {
    setIsStudent(value);
  };

  return (
    <div className="registration">
      <Form>
        <input placeholder="Email" type="text" />
        <input placeholder="Password" type="text" />
        <div className="studentOption">
          <ToggleSwitch value={isStudent} onChange={handleToggle} />
          {isStudent ? (
            <div className="studentOption">
              <p>Student</p>
              <PiStudent className="RegIcon stud" />
            </div>
          ) : (
            <div className="studentOption">
              <p>Professor</p>
              <GiTeacher className="RegIcon" />
            </div>
          )}
        </div>
        <button>Create Account</button>
      </Form>
    </div>
  );
};

export default Registration;