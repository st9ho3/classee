import React, { useContext, useEffect, useState } from 'react';
import {Form} from '../../constants/Components'
import { login } from '../../utils/Auth';
import { totalContext } from '../../App';

const Login = () => {
  const {page, toggle, close} = useContext(totalContext)
  const [authUser,setAuthUser] = useState({
    Email: '',
    Password: ''
  })

  const handleInput = (e) => {
    const { type, value, name } = e.target;
    const details = type === 'email' || type === 'password' ? value : value;
    setAuthUser({ ...authUser, [name]: details });
  };

  const handleSubmit = (e) => {
    /* e.preventDefault(); */
    login(authUser.Email, authUser.Password);
    setAuthUser({
       Email: '',
    Password: ''
    })
  };
  return (
    <div className="registration">
      <Form handleSubmit={handleSubmit}>
      <input
          onChange={handleInput}
          value={authUser.Email}
          name="Email"
          placeholder="Email"
          type="email"
        />
        <input
          onChange={handleInput}
          value={authUser.Password}
          name="Password"
          placeholder="Password"
          type="password"
        />
        <button>Log in</button>
        </Form>
    </div>
  )
}

export default Login
