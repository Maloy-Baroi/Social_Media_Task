import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import './LoginPage.css'
import APIService from '../APIService'

function Signup() {
    const [full_name, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [token, setToken] = useCookies(['mytoken'])
  let navigate = useNavigate()
  const [isLogin, setLogin] = useState(true)


  // useEffect(() => {
  //   var user_token = token['mytoken']
  //   console.log('Login User token is', user_token)
  //   console.log('Data type', typeof (token['mytoken']))
  //   String(user_token) === 'undefined' ? navigate('/') : navigate('/');
  // }, [token])
  const emailValidation = (whatEmail) => {
    return String(whatEmail)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  const signupSubmit = () => {
    if (email.trim().length !== 0 && password1.trim().length && password2.trim().length) {
      console.log('Email And Password Are Set')

      APIService.RegisterUser({ full_name, email, password1, password2 })
        .then(resp => {
            console.log(resp)
          resp['Success'] ? navigate('/login') :  alert("Registration Failed");
        })
        .catch(error => console.log(error))
    } else {
      alert('Email And Password Are Not Set')
      navigate('/signup')
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
            <p>Lets Sign up to continue</p>
            <fieldset className="form-group">
              <div className="mb-3">
                <label htmlFor="full_name" className="form-label">Full Name</label>
                <input type="text" name="full_name" id="full_name" className="form-control" placeholder="Your Full Name" value={full_name} onChange={e => setFullName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password1" className="form-label">Password</label>
                <input type="password" name="password1" id="password1" className="form-control" placeholder="Password" value={password1} onChange={e => setPassword1(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="password2" className="form-label">Confirm Password</label>
                <input type="password" name="password2" id="password2" className="form-control" placeholder="Confirm Password" aria-describedby="password2ID" value={password2} onChange={e => setPassword2(e.target.value)} />
                <small id="password2ID" className="text-muted">Password must be more than 8 character</small>
              </div>
            </fieldset>
            <div>
              <button className="button w-100" type="submit" onClick={signupSubmit}>
              Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;