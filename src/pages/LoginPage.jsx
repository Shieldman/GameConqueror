import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import Slider from '../components/Slider/Slider';

const LoginPage = () => {

    const {login} = useAuth();
    const [user,setUser] = useState('');

    const handleInput = (ev) => {
        const {name, value} = ev.target;
        setUser({ ...user, [name]:value})
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        login(user);
    }

  return (
    <>
    <Slider />
    <h2>This is the Login page</h2>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="email">
                    <input type="email" name="email" id="email" required onChange={handleInput}/>
                </label>
                <label htmlFor="password">
                    <input type="password" name="password" id="password" required onChange={handleInput}/>
                </label>
                <button type="submit">Log In</button>
            </form>
    </>
  )
}

export default LoginPage