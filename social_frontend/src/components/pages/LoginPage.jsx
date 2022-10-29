import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import './LoginPage.css'
import APIService from '../APIService'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['myToken'])
  let navigate = useNavigate()
  const [isLogin, setLogin] = useState(true)


  useEffect(() => {
    let user_token = token['myToken']
    String(user_token) === 'undefined' ? navigate('/login') : navigate('/submit-otp');
  }, [token])

  const emailValidation = (whatEmail) => {
    return String(whatEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const loginSubmit = () => {
    if (email.trim().length !== 0 && password.trim().length !== 0) {
      APIService.LoginUser({ email, password })
        .then(resp => {
          console.log(resp.access)
          console.log(email)
          setToken('myToken', resp.access)
        })
        .catch(error => console.log(error))
    } else {
      console.log('Email And Password Are Not Set')
      navigate('/login/')
    }
  }

  return (
    <div>
      <div className="container">
        <div className='login-page-wrapper'>
          <div className="login-page-container">
            <legend className="cl-neutral-primary f-24 fw-bold lh-regular mt-zero mb-xs welcome">
              Welcome!
            </legend>
            <p>Lets log in to continue</p>
            <fieldset className="form-group">
              <div className="mb-3">
                <input type="text" name="email" id="email" className="form-control" placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
            </fieldset>
            <div className="form-group">
              <button className="loginBtn w-100" type="submit" onClick={loginSubmit}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;