import React, { useContext, useEffect, useState } from 'react';
import { Form, ToggleSwitch } from '../../constants/Components';
import { register } from '../../utils/Auth';
import { PiStudent } from 'react-icons/pi';
import { GiTeacher } from 'react-icons/gi';
import { totalContext } from '../../App';
import {nanoid} from 'nanoid'

const Registration = () => {
  const {page, toggle, close} = useContext(totalContext)
  const [isStudent, setIsStudent] = useState(false);
  const [user, setUser] = useState({
    UserId: nanoid(),
    UserName: '',
    Email: '',
    Password: '',
    Type: 'Professor',
    Classes: [],
  });

  const handleToggle = (value) => {
    setIsStudent(value);
  };

  const handleInput = (e) => {
    const { type, value, name } = e.target;
    const details = type === 'email' || type === 'password' || type === 'text' ? value : value;
    setUser({ ...user, [name]: details });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(user);
    toggle('Login')
    close('Registration')
    setUser({
      Email: '',
      Password: '',
      Type: '',
      Classes: [],
    });
  };

  useEffect(() => {
    const accType = isStudent ? 'Student' : 'Professor';
    setUser({ ...user, Type: accType });
  }, [isStudent]);
  
console.log(user)
  return (
    <div className="registration">
      <Form handleSubmit={handleSubmit}>
      <input
          onChange={handleInput}
          value={user.UserName}
          name="UserName"
          placeholder="Username"
          type="text"
        />
        <input
          onChange={handleInput}
          value={user.Email}
          name="Email"
          placeholder="Email"
          type="email"
        />
        <input
          onChange={handleInput}
          value={user.Password}
          name="Password"
          placeholder="Password"
          type="password"
        />
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